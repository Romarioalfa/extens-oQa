// Executa casos de teste gravando cada um no Jam.
// Uso: node rodar.js RF13            -> todos os casos do RF13
//      node rodar.js C13-CT01 C13-CT03
//      node rodar.js --seco RF13     -> sem Jam (para depurar seletores)
const fs = require('fs');
const path = require('path');
const L = require('./lib');

const ARQ = path.join(__dirname, 'resultados.json');
const lerRes = () => (fs.existsSync(ARQ) ? JSON.parse(fs.readFileSync(ARQ, 'utf8')) : {});
const salvarRes = (r) => fs.writeFileSync(ARQ, JSON.stringify(r, null, 2));

function carregarRF(rf) {
  const arq = path.join(__dirname, 'casos', `rf${rf}.js`);
  return fs.existsSync(arq) ? require(arq) : null;
}

function resolver(args) {
  const lista = [];
  for (const a of args) {
    const m = a.match(/^RF(\d\d)$/i);
    if (m) { const mod = carregarRF(m[1]); if (!mod) throw new Error(`sem casos para ${a}`); lista.push(...Object.keys(mod.casos).map((id) => [m[1], id])); continue; }
    const c = a.match(/^C(\d\d)-CT\d\d$/i);
    if (c) { lista.push([c[1], a.toUpperCase()]); continue; }
    throw new Error('argumento invalido: ' + a);
  }
  return lista;
}

async function obterLink(p, ctx, f, novaAba) {
  // Depois do "Create" o Jam mostra/abre o link do jam.dev/c/...
  for (let i = 0; i < 90; i++) {
    for (const pg of ctx.pages()) { const u = pg.url(); if (/jam\.dev\/c\//.test(u)) return { link: u.split('?')[0], aba: pg }; }
    const txt = await f.locator('body').innerText().catch(() => '');
    const m = txt.match(/https:\/\/jam\.dev\/c\/[0-9a-f-]{36}/);
    if (m) return { link: m[0] };
    await p.waitForTimeout(1000);
  }
  return { link: null };
}

(async () => {
  const args = process.argv.slice(2);
  const seco = args.includes('--seco');
  const lista = resolver(args.filter((a) => a !== '--seco'));
  const { ctx, p } = await L.conectar();
  const res = lerRes();
  const rfsUsados = new Set();

  for (const [rf, id] of lista) {
    const mod = carregarRF(rf);
    const caso = mod.casos[id];
    if (!caso) { console.log(`${id}: nao implementado`); continue; }
    rfsUsados.add(rf);
    console.log(`\n=== ${id} - ${caso.nome}`);
    if (!rfsUsados.has('prep' + rf)) { rfsUsados.add('prep' + rf); if (mod.limpar) await mod.limpar({ p, ctx, L }); if (mod.antes) await mod.antes({ p, ctx, L }); }
    await L.ir(p, caso.inicio || mod.inicio);
    let r;
    try {
      if (!seco && !caso.semJam) await L.jamIniciar(p);
      r = await caso.run({ p, ctx, L });
    } catch (e) {
      console.log(`  ERRO DE SCRIPT: ${e.message.split('\n')[0]}`);
      if (!seco && !caso.semJam) await L.jamDescartar(p);
      res[id] = { ...(res[id] || {}), status: 'erro', obs: e.message.split('\n')[0], quando: new Date().toISOString() };
      salvarRes(res);
      continue;
    }
    console.log(`  ${r.status.toUpperCase()}: ${r.obs}`);
    let link = null;
    if (!seco && !caso.semJam) {
      const titulo = `${id} - ${caso.nome}`;
      const desc = `Resultado: ${r.status.toUpperCase()}. ${r.obs} (SIFIT ${L.BASE}, Chrome/Chromium, Windows)`;
      const { f, novaAba } = await L.jamParar(p, ctx, titulo, desc);
      const o = await obterLink(p, ctx, f, novaAba);
      link = o.link;
      if (o.aba && o.aba !== p) await o.aba.close().catch(() => {});
      await p.bringToFront();
      console.log(`  JAM: ${link || '(link nao capturado)'}`);
    }
    res[id] = { status: r.status, obs: r.obs, link: link || (res[id] && res[id].link) || null, seco, quando: new Date().toISOString() };
    salvarRes(res);
  }

  for (const rf of [...rfsUsados].filter((x) => !x.startsWith('prep'))) { const mod = carregarRF(rf); if (mod.limpar) { console.log(`\n[limpeza RF${rf}]`); await mod.limpar({ p, ctx, L }); } }
  process.exit(0);
})().catch((e) => { console.error(e); process.exit(1); });
