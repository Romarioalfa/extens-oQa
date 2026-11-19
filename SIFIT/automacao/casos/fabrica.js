// Fabrica de casos para telas CRUD do SIFIT. Cada RF passa um `cfg`:
//   { entidade, rota, abrir(p), salvar(p), cancelar?(p), buscar?(p, termo), excluirBtn }
// e recebe casos prontos: criar, vazio, excluir, filtrar. Casos fora do padrao ficam no proprio rfNN.js.
const L = require('../lib');
const C = require('./comum');

const linhas = (p, txt) => p.locator('table tbody tr', { hasText: txt });
const lin = (p, cfg, t) => (cfg.linha ? cfg.linha(p, t) : linhas(p, t));
const norm = (t) => t.replace(/\s+/g, ' ').trim();

// Escuta gravacoes na API (POST/PUT/DELETE): devolve { parar(), gravou() }. Sucesso = 2xx sem "verifica_erro": true.
function observar(p) {
  const ev = [];
  const h = async (r) => {
    const rq = r.request();
    if (rq.method() === 'GET' || !/\/api\//.test(r.url()) || /analytics|collect/.test(r.url())) return;
    let body = ''; try { body = await r.text(); } catch { /* sem corpo */ }
    ev.push({ m: rq.method(), url: r.url().replace(/.*\/api\//, ''), status: r.status(), corpo: body.slice(0, 60).replace(/\s+/g, ' '), erro: /"verifica_erro"\s*:\s*true/.test(body), msg: (body.match(/"mensagem"\s*:\s*"([^"]*)"/) || [])[1] || '' });
  };
  p.on('response', h);
  return { parar: () => p.off('response', h), eventos: () => ev, resumo: () => ev.map((e) => `${e.m} ${e.url} ${e.status}${e.corpo ? ' ' + e.corpo : ''}`).join('; '), gravou: () => ev.some((e) => e.status < 300 && !e.erro), erros: () => ev.filter((e) => e.status >= 300 || e.erro).map((e) => `${e.status} ${e.url}${e.msg ? ': ' + e.msg : ''}`) };
}

async function irEBuscar(p, cfg, termo) {
  await L.ir(p, cfg.rota);
  if (cfg.buscar) await cfg.buscar(p, termo);
}

// Fecha todos os dialogos que aparecerem em sequencia (sucesso/erro) e devolve os textos.
async function fecharDialogos(p, max = 3) {
  const textos = [];
  for (let i = 0; i < max; i++) {
    const d = await C.dialogo(p, i === 0 ? 4000 : 1500);
    if (!d) break;
    textos.push(C.txtDialogo(d) + (d.tipo ? ` (${d.tipo})` : ''));
    await L.pausa(p, 900);
    await C.confirmar(p);
  }
  return textos;
}

// Cadastro valido: preenche, salva e confere que o registro aparece na lista.
const criar = (cfg, nome, preencher, valor, nota = '', conferir = null) => ({
  nome,
  run: async ({ p }) => {
    await cfg.abrir(p); await L.pausa(p);
    await preencher(p);
    const o = observar(p);
    await cfg.salvar(p).click();
    const msgs = await fecharDialogos(p);
    o.parar();
    await irEBuscar(p, cfg, valor);
    const n = await lin(p, cfg, valor).count();
    await L.pausa(p, 1500);
    const resp = `Resposta: ${msgs.join(' / ') || 'nenhuma'}${o.erros().length ? ' | API: ' + o.erros().join('; ') : ''}`;
    if (n && msgs.some((m) => /\(error\)/.test(m))) return { status: 'falhou', obs: `${cfg.entidade} "${valor}" apareceu na lista, mas o sistema mostrou erro ao salvar. ${resp}${nota}${conferir ? ' Linha: "' + norm(await lin(p, cfg, valor).first().innerText()) + '"' : ''}` };
    if (n && conferir) {
      const txt = norm(await lin(p, cfg, valor).first().innerText());
      const problema = conferir(txt);
      if (problema) return { status: 'falhou', obs: `${cfg.entidade} aparece na lista, mas ${problema}. Linha: "${txt}". ${resp}${nota}` };
    }
    return n ? { status: 'passou', obs: `${cfg.entidade} "${valor}" aparece na lista. ${resp}${nota}` } : { status: 'falhou', obs: `${cfg.entidade} nao apareceu na lista apos salvar. ${resp} | Requisicoes: ${o.resumo() || 'nenhuma'}${nota}` };
  },
});

// Validacao: tenta salvar com algo faltando/invalido; espera aviso e nenhuma gravacao bem-sucedida.
const vazio = (cfg, nome, oQue, preencher, esperado = '') => ({
  nome,
  run: async ({ p }) => {
    await cfg.abrir(p); await L.pausa(p);
    if (preencher) await preencher(p);
    const o = observar(p);
    await cfg.salvar(p).click();
    await L.pausa(p, 2000);
    const d = await C.dialogo(p, 2500);
    const msgs = d ? [C.txtDialogo(d)] : await C.mensagens(p);
    await L.pausa(p, 1500);
    o.parar();
    if (d) await C.cancelarDialogo(p);
    if (cfg.cancelar) { const c = cfg.cancelar(p); if (await c.isVisible().catch(() => false)) await c.click().catch(() => {}); }
    const salvou = o.gravou();
    const r = C.resultadoValidacao(salvou, { msgs, texto: msgs.join(' / ') }, oQue);
    const cinco = o.erros().filter((e) => /^5\d\d/.test(e));
    if (r.status === 'passou' && cinco.length) { r.status = 'falhou'; r.obs += ` Porem o servidor respondeu erro interno (${cinco.join('; ')}) em vez de uma validacao.`; }
    if (r.status === 'passou' && esperado && !new RegExp(esperado, 'i').test(msgs.join(' '))) r.obs += ` (a documentacao espera: ${esperado})`;
    return r;
  },
});

// Exclusao: acha o registro de teste, exclui, confirma e confere que sumiu.
const excluir = (cfg, nome, valor) => ({
  nome,
  run: async ({ p }) => {
    if (cfg.buscar) await cfg.buscar(p, valor);
    const l = lin(p, cfg, valor).first();
    if (!(await l.count())) return { status: 'inconclusivo', obs: `Registro de teste "${valor}" nao encontrado para excluir.` };
    await l.scrollIntoViewIfNeeded(); await L.pausa(p);
    const o = observar(p);
    await l.locator(cfg.excluirBtn).first().click();
    const msgs = await fecharDialogos(p, 3);
    o.parar();
    await irEBuscar(p, cfg, valor);
    const n = await lin(p, cfg, valor).count();
    const resp = `Dialogos: ${msgs.join(' / ') || 'nenhum'}${o.erros().length ? ' | API: ' + o.erros().join('; ') : ''}`;
    return n ? { status: 'falhou', obs: `Registro continua na lista apos excluir. ${resp}` } : { status: 'passou', obs: `Registro removido da lista. ${resp}` };
  },
});

// Filtro: aplica o termo e confere que todas as linhas retornadas o contem.
const filtrar = (cfg, nome, termo, aplicar) => ({
  nome,
  run: async ({ p }) => {
    await (aplicar ? aplicar(p, termo) : cfg.buscar(p, termo));
    await L.carregada(p);
    const rows = (await p.locator('table tbody tr').allInnerTexts()).map(norm).filter(Boolean);
    await L.pausa(p, 1500);
    if (!rows.length) return { status: 'inconclusivo', obs: `Filtro por "${termo}" nao retornou linhas.` };
    const fora = rows.filter((t) => !t.toLowerCase().includes(termo.toLowerCase()));
    return fora.length ? { status: 'falhou', obs: `Filtro por "${termo}" retornou ${fora.length} de ${rows.length} linhas sem o termo. Ex.: "${fora[0].slice(0, 120)}"` } : { status: 'passou', obs: `Filtro por "${termo}" retornou ${rows.length} linha(s), todas com o termo.` };
  },
});

// limpar padrao: exclui tudo que comeca com o prefixo de teste; para se a exclusao nao funciona (ex.: erro 500).
const limpar = (cfg, prefixo = L.PREFIXO) => async ({ p }) => {
  await C.cancelarDialogo(p);
  await L.ir(p, cfg.rota);
  await C.excluirLinhas(p, prefixo, cfg.excluirBtn, () => (cfg.buscar ? cfg.buscar(p, prefixo) : L.carregada(p)));
};

module.exports = { lin, criar, vazio, excluir, filtrar, limpar, observar, fecharDialogos, linhas, norm, irEBuscar };
