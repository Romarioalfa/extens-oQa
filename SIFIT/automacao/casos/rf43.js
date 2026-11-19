// RF43 - Perguntas de Anamnese
const L = require('../lib');
const F = require('./fabrica');
const NOME = `${L.PREFIXO} Pergunta`;
const cfg = {
  entidade: 'Pergunta', rota: '/perguntas-anamnese', excluirBtn: '.pan-action-red',
  abrir: (p) => p.locator('.pan-btn-cadastrar').click(),
  salvar: (p) => p.locator('.pan-btn-salvar'),
  cancelar: (p) => p.locator('.pan-btn-cancelar'),
  buscar: async (p, t) => { await L.digitar(p.locator('input.pan-input[placeholder="Nome da pergunta"]'), t); await p.locator('.pan-btn-buscar').click(); await L.carregada(p); },
};
module.exports = {
  inicio: '/perguntas-anamnese',
  casos: {
    'C43-CT01': F.criar(cfg, 'Cadastrar pergunta', async (p) => {
      await L.digitar(p.locator('input.input_modal').nth(1), NOME);
      await L.digitar(p.locator('textarea.input_modal'), 'Voce pratica atividade fisica?');
      await L.digitar(p.locator('input[type=number].input_modal'), '90');
      await p.locator('select.input_modal').selectOption({ label: 'Sim e Não' });
    }, NOME),
    'C43-CT02': F.vazio(cfg, 'Pergunta sem texto', 'Pergunta sem texto', async (p) => {
      await L.digitar(p.locator('input.input_modal').nth(1), `${NOME} Sem Texto`);
    }, 'pergunta'),
    'C43-CT03': F.excluir(cfg, 'Excluir pergunta', NOME),
  },
  limpar: F.limpar(cfg),
};
