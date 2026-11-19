// Mapeia uma tela: node explorar.js /rota ["Texto do botao que abre o formulario"]
const L = require('./lib');
const C = require('./casos/comum');

const resumo = (p) => p.evaluate(() => {
  const vis = (e) => { const r = e.getBoundingClientRect(); return r.width > 0 && r.height > 0; };
  const fora = (e) => !e.closest('aside, nav, .barra_lateral, header');
  const lab = (e) => {
    const l = (e.id && document.querySelector(`label[for="${e.id}"]`)) || e.closest('label') || e.parentElement?.querySelector('label') || e.parentElement?.parentElement?.querySelector('label');
    return l ? l.innerText.trim().replace(/\s+/g, ' ').slice(0, 35) : '';
  };
  const ctr = [...document.querySelectorAll('input,select,textarea,button')].filter(vis).filter(fora).map((e) => {
    const t = (e.innerText || '').trim().replace(/\s+/g, ' ').slice(0, 30);
    const op = e.tagName === 'SELECT' ? ' {' + [...e.options].map((o) => o.text.trim()).slice(0, 8).join('/') + '}' : '';
    return `${e.tagName}${e.type ? ':' + e.type : ''} lab="${lab(e)}" ph="${e.placeholder || ''}" ${e.readOnly ? 'RO ' : ''}${t ? 'txt="' + t + '"' : ''}${op}${e.className ? ' .' + String(e.className).split(' ').slice(0, 2).join('.') : ''}`;
  });
  // botoes repetidos (icones de linha) aparecem uma vez com contagem
  const cont = {}; for (const c of ctr) cont[c] = (cont[c] || 0) + 1;
  const main = document.querySelector('main, .conteudo, .content, #app') || document.body;
  const txt = main.innerText.split('\n').map((x) => x.trim()).filter(Boolean);
  const ini = txt.findIndex((x) => /Aplicativo/.test(x)); // pula o menu lateral
  return { texto: txt.slice(ini + 1, ini + 70).join(' | ').slice(0, 1800), controles: Object.entries(cont).map(([k, n]) => (n > 1 ? `${n}x ` : '') + k), linhas: document.querySelectorAll('table tbody tr').length };
});

(async () => {
  const [rota, botao] = process.argv.slice(2);
  const { p } = await L.conectar();
  await C.cancelarDialogo(p);
  await L.ir(p, rota.startsWith('/') ? rota : '/' + rota);
  console.log('URL', p.url());
  let r = await resumo(p);
  console.log('TEXTO:', r.texto, '\nLINHAS TABELA:', r.linhas, '\nCONTROLES:\n  ' + r.controles.join('\n  '));
  if (botao) {
    await (botao.startsWith('.') ? p.locator(botao) : p.getByRole('button', { name: botao }).or(p.getByRole('link', { name: botao }))).first().click();
    await L.carregada(p); await L.pausa(p, 800);
    console.log('\n--- apos clicar em', botao, '-> URL', p.url());
    const d = await C.dialogo(p, 800); if (d) console.log('DIALOGO', JSON.stringify(d));
    r = await resumo(p);
    console.log('TEXTO:', r.texto.slice(0, 900), '\nCONTROLES:\n  ' + r.controles.join('\n  '));
  }
  process.exit(0);
})().catch((e) => { console.error(e.message); process.exit(1); });
