// RF39 - Enquetes
const L = require('../lib');
const F = require('./fabrica');
const NOME = `${L.PREFIXO} Enquete`;
const cfg = {
  entidade: 'Enquete', rota: '/enquetes', excluirBtn: '.enq-action-red',
  abrir: (p) => p.locator('.enq-btn-cadastrar').click(),
  salvar: (p) => p.locator('.enq-btn-salvar'),
  cancelar: (p) => p.locator('.enq-btn-cancelar'),
  buscar: async (p, t) => { await L.digitar(p.locator('input.enq-input[placeholder="Nome"]'), t); await p.locator('.enq-btn-buscar').click(); await L.carregada(p); },
};
const im = (p, i) => p.locator('input.input_modal').nth(i); // 0 codigo, 1 nome, 2 pergunta, 3.. respostas
module.exports = {
  inicio: '/enquetes',
  casos: {
    'C39-CT01': F.criar(cfg, 'Cadastrar enquete', async (p) => {
      await L.digitar(im(p, 1), NOME);
      await L.digitar(im(p, 2), 'Qual horario voce prefere?');
      await L.digitar(im(p, 3), 'Manha');
      await p.locator('.enq-btn-add-resposta').click(); await L.pausa(p, 800);
      await L.digitar(im(p, 4), 'Noite');
    }, NOME, '', (t) => (/sem pergunta/i.test(t) ? 'a enquete ficou "Sem pergunta cadastrada" (pergunta e respostas nao foram gravadas)' : '')),
    'C39-CT02': F.vazio(cfg, 'Enquete sem respostas', 'Enquete sem respostas', async (p) => {
      await L.digitar(im(p, 1), `${NOME} Sem Resposta`);
      await L.digitar(im(p, 2), 'Pergunta sem respostas?');
    }, 'resposta'),
    'C39-CT03': {
      nome: 'Filtrar enquetes',
      run: async ({ p }) => {
        await p.locator('select.enq-input').selectOption({ label: 'Ativo' });
        await p.locator('.enq-btn-buscar').click(); await L.carregada(p);
        const rows = (await p.locator('table tbody tr').allInnerTexts()).map(F.norm).filter(Boolean);
        await L.pausa(p, 1500);
        if (!rows.length) return { status: 'inconclusivo', obs: 'Nenhuma enquete ativa para validar o filtro.' };
        const fora = rows.filter((t) => /inativo/i.test(t) || !/\bativo\b/i.test(t));
        return fora.length ? { status: 'falhou', obs: `Filtro Status=Ativo retornou ${fora.length} de ${rows.length} enquetes que nao estao ativas. Ex.: "${fora[0].slice(0, 100)}"` } : { status: 'passou', obs: `Filtro Status=Ativo retornou ${rows.length} enquete(s), todas ativas.` };
      },
    },
  },
  limpar: F.limpar(cfg),
};
