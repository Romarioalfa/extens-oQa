// Helpers de tela compartilhados entre os RFs.
const L = require('../lib');

// Modal Vue do SIFIT pelo titulo.
const modal = (p, titulo) => p.locator('.vue-modal').filter({ hasText: titulo }).filter({ visible: true }).first();

// Campo logo depois de um <label> (os labels sao uppercase via CSS; o regex ignora caixa).
const campo = (raiz, rotulo, tipo = 'input,select,textarea') =>
  raiz.locator('label').filter({ hasText: rotulo }).first().locator(`xpath=following::*[${tipo.split(',').map((t) => `self::${t}`).join(' or ')}][1]`);

// Dialogo proprio do SIFIT (.sdl-panel): Atencao / Sucesso / Erro ...
const painel = (p) => p.locator('.sdl-panel').filter({ visible: true }).first();

async function dialogo(p, espera = 2500) {
  try { await painel(p).waitFor({ state: 'visible', timeout: espera }); } catch { return null; }
  const d = painel(p);
  const cls = (await d.getAttribute('class')) || '';
  return {
    tipo: (cls.match(/sdl-panel--(\w+)/) || [])[1] || '',
    titulo: (await d.locator('.sdl-title').innerText().catch(() => '')).trim(),
    msg: (await d.locator('.sdl-message').innerText().catch(() => '')).trim(),
    botoes: (await d.locator('button').allInnerTexts()).map((t) => t.trim()).filter(Boolean),
    temInput: (await d.locator('input,textarea,select').count()) > 0,
  };
}
const txtDialogo = (d) => (d ? `[${d.titulo}] ${d.msg}`.trim() : '');

// Fecha o dialogo pelo botao principal (Continuar/OK/Sim/Excluir) ou pelo X.
async function confirmar(p) {
  const d = painel(p);
  if (!(await d.count())) return false;
  const prim = d.locator('.sdl-btn:not(.sdl-btn--cancel)').first();
  if (await prim.count()) await prim.click(); else await d.locator('.sdl-close').click();
  await L.carregada(p);
  return true;
}
async function cancelarDialogo(p) {
  const d = painel(p);
  if (!(await d.count())) return false;
  const c = d.locator('.sdl-btn--cancel, .sdl-close').first();
  await c.click();
  await L.pausa(p, 600);
  return true;
}

// Mensagens visiveis: dialogo SIFIT, toasts, alerts, validacao nativa do navegador.
async function mensagens(p) {
  const txt = await p.evaluate(() => {
    const vis = (e) => e.getBoundingClientRect().width > 0;
    const out = [];
    for (const d of document.querySelectorAll('.sdl-panel')) if (vis(d)) out.push(`[${d.querySelector('.sdl-title')?.innerText || ''}] ${d.querySelector('.sdl-message')?.innerText || ''}`);
    const sels = '.swal2-popup, .toast, .Toastify__toast, .v-toast__item, .alert, .invalid-feedback, [role=alert]';
    for (const e of document.querySelectorAll(sels)) if (vis(e) && !e.closest('.sdl-panel') && e.innerText.trim()) out.push(e.innerText.trim());
    for (const e of document.querySelectorAll('input,select,textarea')) if (e.validationMessage) out.push(`(validacao nativa) ${e.validationMessage}`);
    return [...new Set(out)];
  });
  return txt.map((t) => t.replace(/\s+/g, ' ').slice(0, 160));
}

module.exports = { modal, campo, painel, dialogo, txtDialogo, confirmar, cancelarDialogo, mensagens };

// Abre um seletor "Buscar ..." (cliente/fornecedor/colaborador), busca o termo e seleciona a linha.
async function escolherNoPicker(p, botao, termo) {
  await botao.click();
  const bm = p.locator('.vue-modal').filter({ visible: true }).filter({ has: p.locator('.btn-selecionar, tbody, button:has-text("Fechar")') }).filter({ hasText: /Buscar/ }).last();
  await bm.waitFor();
  const inp = bm.locator('input[type=text], input:not([type])').first();
  if (termo && (await inp.count())) await L.digitar(inp, termo);
  await bm.locator('button').filter({ hasText: /^\s*Buscar\s*$/ }).first().click();
  await L.pausa(p, 1500);
  const linha = (termo ? bm.locator('tbody tr', { hasText: termo }) : bm.locator('tbody tr')).first();
  const nome = (await linha.innerText()).replace(/\s+/g, ' ').trim();
  await linha.locator('.btn-selecionar, button').first().click();
  await L.pausa(p);
  return nome;
}
module.exports.escolherNoPicker = escolherNoPicker;

// Clica em salvar e coleta o que o sistema respondeu (dialogo SIFIT, validacao nativa, toasts).
async function salvarEVer(p, botao) {
  await botao.click();
  const d = await dialogo(p, 4000);
  const msgs = d ? [txtDialogo(d)] : await mensagens(p);
  await L.pausa(p, 1200);
  return { d, msgs, texto: msgs.join(' / ') };
}

// Preenche o filtro de nome e busca.
async function buscar(p, input, nome, botao) {
  await L.digitar(input, nome);
  await botao.click();
  await L.carregada(p);
}

// Exclui as linhas que contem o texto (botao de excluir = seletor), confirmando o dialogo.
async function excluirLinhas(p, texto, btnExcluir, recarregar) {
  let anterior = null;
  for (let i = 0; i < 15; i++) {
    if (recarregar) await recarregar();
    const l = p.locator('table tbody tr', { hasText: texto }).first();
    if (!(await l.count())) return;
    const t = (await l.innerText()).replace(/\s+/g, ' ').slice(0, 80);
    if (t === anterior) { console.log(`  (nao consegui excluir "${t}": o servidor recusou; deixando no ambiente)`); return; }
    anterior = t;
    console.log('  excluindo:', t);
    await l.locator(btnExcluir).first().click();
    await L.pausa(p, 700);
    // fecha a confirmacao e qualquer dialogo seguinte (sucesso/erro), que senao bloqueia a tela
    for (let k = 0; k < 4; k++) { if (!(await dialogo(p, k === 0 ? 2500 : 1200))) break; await confirmar(p); }
    await L.carregada(p);
  }
}

// Resultado padrao de caso de validacao ("nao deve salvar e deve avisar").
function resultadoValidacao(salvou, r, oQue) {
  if (salvou) return { status: 'falhou', obs: `${oQue} FOI salvo sem o campo obrigatorio. Resposta: ${r.texto || 'nenhuma'}` };
  if (!r.msgs.length) return { status: 'falhou', obs: `${oQue} nao foi salvo, mas nenhuma mensagem de validacao foi exibida.` };
  return { status: 'passou', obs: `Validacao exibida: ${r.texto}. ${oQue} nao foi salvo.` };
}

Object.assign(module.exports, { salvarEVer, buscar, excluirLinhas, resultadoValidacao });

// Impede qualquer gravacao (POST/PUT/DELETE em /api/) enquanto o teste clica em botoes de risco
// (salvar configuracao, enviar aviso aos alunos). Devolve as requisicoes que o sistema TENTOU enviar.
async function bloquearEscritas(p) {
  const tentativas = [];
  const h = (route) => {
    const r = route.request();
    if (r.method() !== 'GET' && /\/api\//.test(r.url())) { tentativas.push(`${r.method()} ${r.url().replace(/.*\/api\//, '')}`); return route.abort(); }
    return route.continue();
  };
  await p.route('**/*', h);
  return { tentativas, soltar: () => p.unroute('**/*', h) };
}
module.exports.bloquearEscritas = bloquearEscritas;
