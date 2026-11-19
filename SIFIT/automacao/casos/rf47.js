// RF47 - Aplicativo. REGRA: nunca enviar notificacao real aos alunos. O clique em "Enviar aviso" roda com as
// gravacoes da API bloqueadas e o caso registra se o sistema tentou enviar.
const L = require('../lib');
const C = require('./comum');
const F = require('./fabrica');

const MSG = `${L.PREFIXO} teste de previa`;
const botao = (p, txt) => p.locator('button', { hasText: txt }).filter({ visible: true }).first();

module.exports = {
  inicio: '/aplicativo',
  casos: {
    'C47-CT01': {
      nome: 'Prévia de notificação',
      run: async ({ p }) => {
        await botao(p, 'Criar Notificação').click(); await L.pausa(p, 1200);
        await L.digitar(p.locator('.nf-textarea'), MSG);
        await L.pausa(p, 1500);
        const corpo = await p.locator('body').innerText();
        const previa = corpo.split(MSG).length - 1; // textarea nao entra no innerText: so a previa
        await botao(p, 'Cancelar').click(); await L.pausa(p, 800);
        return previa ? { status: 'passou', obs: `A mensagem digitada aparece na "Previa no celular" (${previa} ocorrencia(s) fora do campo de texto). Aviso NAO enviado (cancelado).` } : { status: 'falhou', obs: 'A mensagem digitada nao apareceu na previa no celular.' };
      },
    },
    'C47-CT02': {
      nome: 'Notificação sem mensagem',
      run: async ({ p }) => {
        await botao(p, 'Criar Notificação').click(); await L.pausa(p, 1200);
        const b = await C.bloquearEscritas(p);
        let msgs = [];
        try {
          await botao(p, 'Enviar aviso').click();
          const d = await C.dialogo(p, 3000);
          msgs = d ? [C.txtDialogo(d)] : await C.mensagens(p);
          await L.pausa(p, 1500);
          if (d) await C.cancelarDialogo(p);
        } finally { await b.soltar(); }
        const c = botao(p, 'Cancelar'); if (await c.count()) await c.click().catch(() => {});
        const base = `Aviso: ${msgs.join(' / ') || 'nenhum'}. Requisicoes de envio tentadas (bloqueadas pelo teste para nao notificar os alunos): ${b.tentativas.join('; ') || 'nenhuma'}.`;
        if (b.tentativas.length) return { status: 'falhou', obs: `O sistema tentou enviar a notificacao com a mensagem em branco. ${base}` };
        return msgs.length ? { status: 'passou', obs: `Validacao impediu o envio. ${base}` } : { status: 'falhou', obs: `Nada foi enviado, mas nao houve aviso ao usuario. ${base}` };
      },
    },
    'C47-CT03': {
      nome: 'Filtrar postagens pendentes',
      run: async ({ p }) => {
        await botao(p, 'Só pendentes').click(); await L.carregada(p); await L.pausa(p, 1500);
        const rows = (await p.locator('table').nth(1).locator('tbody tr').allInnerTexts()).map(F.norm).filter(Boolean);
        const semDados = rows.length === 0 || rows.every((t) => /nenhuma/i.test(t));
        if (semDados) return { status: 'inconclusivo', obs: 'Nao ha postagens cadastradas (a tabela mostra "Nenhuma postagem cadastrada."), entao o filtro "Só pendentes" nao pode ser validado.' };
        const fora = rows.filter((t) => !/pendente/i.test(t));
        return fora.length ? { status: 'falhou', obs: `Filtro retornou ${fora.length} de ${rows.length} postagens nao pendentes.` } : { status: 'passou', obs: `Filtro retornou ${rows.length} postagem(ns), todas pendentes.` };
      },
    },
    'C47-CT04': {
      nome: 'Consultar denúncias',
      run: async ({ p }) => {
        const tabela = p.locator('table').last();
        await tabela.scrollIntoViewIfNeeded(); await L.pausa(p, 1200);
        const rows = (await tabela.locator('tbody tr').allInnerTexts()).map(F.norm).filter(Boolean);
        if (!rows.length || rows.every((t) => /nenhuma/i.test(t))) return { status: 'inconclusivo', obs: 'Nao ha denuncias cadastradas (a tabela esta vazia), entao nao ha o que abrir.' };
        await tabela.locator('tbody tr').first().locator('button').first().click(); await L.pausa(p, 2000);
        const d = await C.dialogo(p, 1500);
        const corpo = d ? C.txtDialogo(d) : (await p.locator('.vue-modal').filter({ visible: true }).last().innerText().catch(() => '')).replace(/\s+/g, ' ');
        await L.pausa(p, 1500);
        const falta = ['postagem', 'motivo', 'denunci'].filter((k) => !new RegExp(k, 'i').test(corpo));
        return falta.length ? { status: 'falhou', obs: `A denuncia abriu, mas nao mostra: ${falta.join(', ')}. Conteudo: "${corpo.slice(0, 200)}"` } : { status: 'passou', obs: `Denuncia aberta mostrando postagem, motivo e denunciante. Conteudo: "${corpo.slice(0, 160)}"` };
      },
    },
  },
};
