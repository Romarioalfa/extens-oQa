// "RF42" = Categorias de Anamnese. No repositorio o arquivo e CT_RF41_Categorias de Anamnese.md, com IDs C42-*.
const L = require('../lib');
const C = require('./comum');
const F = require('./fabrica');
const NOME = `${L.PREFIXO} Categoria`;
const EDITADA = `${L.PREFIXO} Categoria Editada`;
const cfg = {
  entidade: 'Categoria', rota: '/anamnese/categorias', excluirBtn: 'button[title="Excluir"]',
  abrir: (p) => p.locator('.can-btn-new').click(),
  salvar: (p) => p.locator('.can-btn-save'),
  cancelar: (p) => p.locator('.can-btn-cancel'),
  linha: (p, t) => p.locator('div').filter({ has: p.locator('.can-card-actions') }).filter({ hasText: t }).last(),
  buscar: async (p, t) => { await L.digitar(p.locator('.can-search-input'), t); await L.pausa(p, 1200); await L.carregada(p); },
};
const nome = (p) => p.locator('input.can-input').first();

module.exports = {
  inicio: '/anamnese/categorias',
  casos: {
    'C42-CT01': F.criar(cfg, 'Cadastrar categoria', async (p) => { await L.digitar(nome(p), NOME); }, NOME),
    'C42-CT02': {
      nome: 'Editar categoria',
      run: async ({ p }) => {
        await cfg.buscar(p, NOME);
        const card = cfg.linha(p, NOME);
        if (!(await card.count())) return { status: 'inconclusivo', obs: 'Categoria de teste (C42-CT01) nao encontrada.' };
        await card.scrollIntoViewIfNeeded(); await L.pausa(p);
        await card.locator('button[title="Editar"]').click(); await L.pausa(p, 1200);
        await L.digitar(nome(p), EDITADA);
        const o = F.observar(p);
        await cfg.salvar(p).click();
        const msgs = await F.fecharDialogos(p);
        o.parar();
        await F.irEBuscar(p, cfg, EDITADA);
        const n = await cfg.linha(p, EDITADA).count();
        await L.pausa(p, 1500);
        return n ? { status: 'passou', obs: `Nome alterado para "${EDITADA}" e a alteracao persistiu na lista. Resposta: ${msgs.join(' / ') || 'nenhuma'}` } : { status: 'falhou', obs: `Novo nome nao apareceu na lista. Resposta: ${msgs.join(' / ') || 'nenhuma'}${o.erros().length ? ' | API: ' + o.erros().join('; ') : ''}` };
      },
    },
    'C42-CT03': F.excluir(cfg, 'Excluir categoria', NOME),
  },
  limpar: F.limpar({ ...cfg, excluirBtn: 'button[title="Excluir"]' }),
};
