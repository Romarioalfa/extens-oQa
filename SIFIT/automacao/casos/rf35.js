// RF35 - Tipos de Documentos
const L = require('../lib');
const F = require('./fabrica');
const NOME = `${L.PREFIXO} Tipo Doc`;
const cfg = {
  entidade: 'Tipo de documento', rota: '/tipos-documento', excluirBtn: '.tdoc-action-red',
  abrir: (p) => p.locator('.tdoc-btn-cadastrar').click(),
  salvar: (p) => p.locator('.tdoc-btn-salvar'),
  cancelar: (p) => p.locator('.tdoc-btn-cancelar'),
  buscar: async (p, t) => { await L.digitar(p.locator('input.tdoc-input[placeholder="Nome do documento"]'), t); await p.locator('.tdoc-btn-buscar').click(); await L.carregada(p); },
};
module.exports = {
  inicio: '/tipos-documento',
  casos: {
    'C35-CT01': F.criar(cfg, 'Cadastrar tipo de documento', async (p) => {
      await L.digitar(p.locator('input.input_modal').nth(1), NOME);
      await p.locator('select.form-select:not(.tdoc-input)').last().selectOption({ label: 'Colaborador' });
    }, NOME),
    'C35-CT02': F.vazio(cfg, 'Tipo sem nome', 'Tipo de documento sem nome', null, 'Informe o nome do tipo de documento'),
    'C35-CT03': F.excluir(cfg, 'Excluir tipo de documento', NOME),
  },
  limpar: F.limpar(cfg),
};
