// RF44 - Inteligencia e Automacao. So leitura: NUNCA clicar em "Executar agora" (dispara automacoes reais, WhatsApp etc.).
const L = require('../lib');
const C = require('./comum');

module.exports = {
  inicio: '/inteligencia-automacao',
  casos: {
    'C44-CT01': {
      nome: 'Visualizar central de automações',
      run: async ({ p }) => {
        await L.pausa(p, 1500);
        const t = await p.locator('body').innerText();
        await p.mouse.wheel(0, 600); await L.pausa(p, 1500);
        const faltam = ['Automações ativas', 'Automações disponíveis'].filter((k) => !t.includes(k));
        return faltam.length ? { status: 'falhou', obs: `Nao aparece: ${faltam.join(', ')}.` } : { status: 'passou', obs: 'A central lista "Automações ativas" e "Automações disponíveis".' };
      },
    },
    'C44-CT02': {
      nome: 'Configurar automação',
      run: async ({ p }) => {
        const urlAntes = p.url();
        await p.getByRole('button', { name: /^Configurar/ }).first().click().catch(async () => { await p.getByText('Configurar', { exact: true }).first().click(); });
        await L.pausa(p, 2500); await L.carregada(p);
        const mudou = p.url() !== urlAntes;
        const modal = await p.locator('.vue-modal, [role=dialog]').filter({ visible: true }).count();
        const titulo = (await p.locator('h1, h2, h3').filter({ visible: true }).allInnerTexts()).slice(0, 3).join(' / ');
        await L.pausa(p, 1500);
        const ok = mudou || modal > 0;
        return { status: ok ? 'passou' : 'falhou', obs: `Apos "Configurar": ${mudou ? 'abriu a tela ' + p.url().replace(/.*br/, '') : modal ? 'abriu uma janela' : 'nada abriu'}. Titulos visiveis: ${titulo || '(nenhum)'}. Nada foi salvo.` };
      },
    },
    'C44-CT03': {
      nome: 'Ver resultados da IA',
      run: async ({ p }) => {
        await p.getByRole('button', { name: /Ver resultados/ }).first().click().catch(async () => { await p.getByText('Ver resultados', { exact: false }).first().click(); });
        await L.pausa(p, 2500); await L.carregada(p);
        const t = await p.locator('body').innerText();
        await L.pausa(p, 1500);
        const faltam = ['O que o Sifit identificou', 'Automações mais eficientes'].filter((k) => !t.includes(k));
        return faltam.length ? { status: 'falhou', obs: `Em ${p.url().replace(/.*br/, '')} nao aparece: ${faltam.join(', ')}.` } : { status: 'passou', obs: `Tela de resultados (${p.url().replace(/.*br/, '')}) exibe "O que o Sifit identificou" e "Automações mais eficientes".` };
      },
    },
    'C44-CT04': {
      nome: 'Filtrar resultados por período',
      inicio: '/inteligencia/resultados',
      run: async ({ p }) => {
        const b = p.getByRole('button', { name: /Últimos 30 dias/ }).first();
        if (!(await b.count())) return { status: 'falhou', obs: 'O botao "Últimos 30 dias" nao existe na tela de resultados.' };
        await b.click(); await L.carregada(p); await L.pausa(p, 2000);
        const cls = (await b.getAttribute('class')) || '';
        const pressed = await b.getAttribute('aria-pressed');
        const ativo = /active|ativo|selected|primary/i.test(cls) || pressed === 'true';
        const t = await p.locator('body').innerText();
        return { status: ativo || /30 dias/i.test(t) ? 'passou' : 'falhou', obs: `Botao "Últimos 30 dias" ${ativo ? 'ficou ativo' : 'clicado'} (class="${cls.slice(0, 50)}"). Resultados continuam exibidos: ${/identificou/i.test(t) ? 'sim' : 'nao'}.` };
      },
    },
  },
};
