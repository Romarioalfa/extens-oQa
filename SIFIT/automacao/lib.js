// Base dos testes: conexao com o Chromium isolado, controle do Jam e ritmo "humano" do video.
const { chromium } = require('playwright');
const { execFileSync } = require('child_process');
const path = require('path');

const BASE = 'https://sifitalfa.centrion.com.br';
const PREFIXO = 'QA14555'; // dados de teste com o RA, como manda o plano de testes

async function conectar() {
  // connectOverCDP as vezes trava (aba presa ou handshake lento): tenta de novo com timeout curto.
  let b = null, erro = null;
  for (let t = 1; t <= 5 && !b; t++) {
    try { b = await chromium.connectOverCDP('http://127.0.0.1:9333', { timeout: 15000 }); }
    catch (e) { erro = e; console.log(`  (conexao CDP falhou, tentativa ${t}/5)`); await new Promise((r) => setTimeout(r, 2000)); }
  }
  if (!b) throw erro;
  const ctx = b.contexts()[0];
  let p = ctx.pages().find((x) => x.url().includes('sifitalfa'));
  if (!p) { // aba do SIFIT perdida (ex.: pagina de erro): reaproveita uma aba que nao seja do Jam
    p = ctx.pages().find((x) => !/jam\.dev|chrome-extension/.test(x.url())) || (await ctx.newPage());
    await p.goto(BASE + '/dashboard');
  }
  return { b, ctx, p };
}

// Pausa curta para o video ficar legivel (nao ha cursor, entao so o ritmo importa).
const pausa = (p, ms = 900) => p.waitForTimeout(ms);

// Espera a tela terminar de carregar: rede ociosa + sem spinners visiveis.
async function carregada(p) {
  await p.waitForLoadState('domcontentloaded');
  await p.waitForLoadState('networkidle').catch(() => {});
  for (let i = 0; i < 20; i++) {
    const girando = await p.locator('.spinner-border:visible, .loading:visible, [aria-busy=true]:visible').count();
    if (!girando) break;
    await p.waitForTimeout(300);
  }
  await pausa(p, 600);
}

async function ir(p, rota) {
  await p.goto(BASE + rota, { waitUntil: 'domcontentloaded' });
  await carregada(p);
}

// Digita devagar para aparecer no video.
async function digitar(loc, texto) {
  await loc.click();
  await loc.fill('');
  await loc.pressSequentially(String(texto), { delay: 45 });
}

// ---------- Jam ----------
const barra = (p) => p.locator('#__jam-ui [data-testid=record-button]');

function tecla(acao) {
  try { return execFileSync('powershell', ['-NoProfile', '-ExecutionPolicy', 'Bypass', '-File', path.join(__dirname, 'jam-tecla.ps1'), acao]).toString().trim(); }
  catch (e) { return (e.stdout || '').toString().trim() || e.message; }
}

async function jamIniciar(p) {
  for (let t = 1; ; t++) {
    await p.bringToFront();
    await pausa(p, 300);
    const out = tecla('video');
    if (out.startsWith('OK')) {
      try { await barra(p).waitFor({ state: 'visible', timeout: 15000 }); break; } catch { /* Jam nao abriu: tenta de novo */ }
    }
    if (t >= 4) throw new Error('Jam nao iniciou: ' + out);
    console.log(`  (Jam: tentativa ${t} falhou: ${out.slice(0, 80)}; repetindo)`);
    await pausa(p, 3000);
  }
  // espera sair do "Starting the recorder..." (o cronometro aparece)
  await p.locator('#__jam-ui [data-testid=toolbar-container]').filter({ hasText: /\d\d:\d\d/ }).waitFor({ timeout: 30000 });
  await pausa(p, 1200);
}

async function jamFrame(p) {
  for (let i = 0; i < 40; i++) {
    const f = p.frames().find((x) => x.url().includes('iui.html'));
    if (f && (await f.locator('[data-testid=comment-modal]').count())) return f;
    await p.waitForTimeout(500);
  }
  throw new Error('Jam: modal de criacao nao apareceu');
}

// Para a gravacao, preenche titulo/descricao e cria o Jam. Retorna o link.
async function jamParar(p, ctx, titulo, descricao) {
  await pausa(p, 1500);
  await barra(p).click();
  const f = await jamFrame(p);
  const ed = f.locator('[data-testid=comment-modal] .ProseMirror');
  await ed.click();
  await p.keyboard.type(titulo);
  await p.keyboard.press('Enter');
  await p.keyboard.type(descricao);
  const novaAba = ctx.waitForEvent('page', { timeout: 60000 }).catch(() => null);
  await f.locator('[data-testid=comment-modal] button', { hasText: /^Create$/ }).click();
  return { f, novaAba };
}

// Para a gravacao e descarta (usado quando o proprio script quebrou).
async function jamDescartar(p) {
  try {
    if (await barra(p).isVisible()) await barra(p).click();
    const f = await jamFrame(p);
    await f.locator('[data-testid=comment-modal] button').first().click();
  } catch (e) { console.log('  (aviso) descarte do Jam falhou:', e.message); }
}

module.exports = { BASE, PREFIXO, conectar, pausa, carregada, ir, digitar, jamIniciar, jamParar, jamDescartar };
