// RF27 - Prospeccao (leads)
const L = require('../lib');
const C = require('./comum');
const F = require('./fabrica');

const NOME = `${L.PREFIXO} Lead`;
const cfg = {
  entidade: 'Lead', rota: '/prospeccao', excluirBtn: '.pros-action-red',
  abrir: (p) => p.locator('.pros-btn-cadastrar').click(),
  salvar: (p) => p.locator('.pros-btn-salvar'),
  cancelar: (p) => p.locator('.pros-btn-cancelar'),
  buscar: async (p, t) => { await L.digitar(p.locator('input.pros-input').first(), t); await L.pausa(p, 1200); await L.carregada(p); },
};
const campo = (p, i) => p.locator('.pros-form-input').nth(i); // 0 nome, 1 estagio, 2 email, 3 telefone, 4 observacao

module.exports = {
  inicio: '/prospeccao',
  casos: {
    'C27-CT01': F.criar(cfg, 'Adicionar lead', async (p) => {
      await L.digitar(campo(p, 0), NOME);
      await campo(p, 1).selectOption({ label: 'Interessado' });
      await L.digitar(campo(p, 2), 'qa14555@exemplo.com');
      await L.digitar(campo(p, 3), '(44) 99999-0000');
    }, NOME),
    'C27-CT02': F.vazio(cfg, 'Lead com e-mail inválido', 'Lead com e-mail "teste@"', async (p) => {
      await L.digitar(campo(p, 0), `${NOME} Email Invalido`);
      await L.digitar(campo(p, 2), 'teste@');
      await L.digitar(campo(p, 3), '(44) 99999-0001');
    }, 'e-mail|@'),
    'C27-CT03': {
      nome: 'Filtrar por estágio',
      run: async ({ p }) => {
        await p.locator('select.pros-input').selectOption({ label: 'Proposta' });
        await L.pausa(p, 1500); await L.carregada(p);
        const rows = (await p.locator('table tbody tr').allInnerTexts()).map(F.norm).filter(Boolean);
        await L.pausa(p, 1500);
        if (!rows.length) return { status: 'inconclusivo', obs: 'Nenhum lead no estagio "Proposta" para validar o filtro.' };
        const fora = rows.filter((t) => !/proposta/i.test(t));
        return fora.length ? { status: 'falhou', obs: `Filtro Estagio=Proposta retornou ${fora.length} de ${rows.length} leads de outro estagio. Ex.: "${fora[0].slice(0, 120)}"` } : { status: 'passou', obs: `Filtro Estagio=Proposta retornou ${rows.length} lead(s), todos em Proposta.` };
      },
    },
    'C27-CT04': F.excluir(cfg, 'Excluir lead', NOME),
  },
  limpar: F.limpar(cfg),
};
