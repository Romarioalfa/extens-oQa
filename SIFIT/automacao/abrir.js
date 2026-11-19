// Abre o Chromium isolado (perfil proprio + extensao Jam) e fica vivo.
// Os testes se conectam via CDP em http://127.0.0.1:9333.
const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const ext = path.join(__dirname, 'jam-ext');
  const ctx = await chromium.launchPersistentContext(path.join(__dirname, 'perfil'), {
    headless: false,
    viewport: null,
    args: [
      `--disable-extensions-except=${ext}`,
      `--load-extension=${ext}`,
      '--remote-debugging-port=9333',
      '--start-maximized',
      '--window-name=SIFIT-QA', // titulo unico p/ o script de foco nunca errar a janela
    ],
  });
  // Um timeout de pagina nao pode derrubar o navegador: so avisa.
  const aviso = (nome) => (e) => console.log(`aviso ${nome}: ${String(e.message).split('\n')[0]}`);
  const [p] = ctx.pages().length ? ctx.pages() : [await ctx.newPage()];
  await p.goto('https://sifitalfa.centrion.com.br/dashboard', { waitUntil: 'domcontentloaded' }).catch(aviso('SIFIT'));
  const jam = await ctx.newPage();
  await jam.goto('https://jam.dev/login', { waitUntil: 'domcontentloaded' }).catch(aviso('Jam'));
  console.log('ABERTO');
  ctx.on('close', () => process.exit(0));
})();
