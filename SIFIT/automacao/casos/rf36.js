// RF36 - Atividades (dao pontos aos alunos)
const L = require('../lib');
const F = require('./fabrica');
const NOME = `${L.PREFIXO} Atividade`;
const cfg = {
  entidade: 'Atividade', rota: '/atividades', excluirBtn: '.atv-action-red',
  abrir: (p) => p.locator('.atv-btn-cadastrar').click(),
  salvar: (p) => p.locator('.atv-btn-salvar'),
  cancelar: (p) => p.locator('.atv-btn-cancelar'),
  buscar: async (p, t) => { await L.digitar(p.locator('input.atv-input[placeholder="Nome da atividade"]'), t); await p.locator('.atv-btn-buscar').click(); await L.carregada(p); },
};
// Atividade criada em branco (bug: o SIFIT aceita). Guarda os ids em branco que ja existiam para limpar so os novos.
let brancasAntes = null;
const idsEmBranco = (p) => p.locator('table tbody tr').evaluateAll((trs) => trs.map((tr) => { const td = tr.querySelectorAll('td'); return td.length > 1 && !td[1].innerText.trim() ? td[0].innerText.trim() : null; }).filter(Boolean));
module.exports = {
  inicio: '/atividades',
  antes: async ({ p }) => { await L.ir(p, cfg.rota); brancasAntes = brancasAntes || (await idsEmBranco(p)); },
  casos: {
    'C36-CT01': F.criar(cfg, 'Cadastrar atividade', async (p) => {
      await L.digitar(p.locator('input.input_modal').nth(1), NOME);
      await L.digitar(p.locator('input.input_modal').nth(2), '10');
      await L.digitar(p.locator('textarea.input_modal'), 'Atividade criada no teste C36-CT01');
    }, NOME, '', (t) => (/\b10\b/.test(t) ? '' : 'a pontuacao 10 nao aparece')),
    'C36-CT02': F.vazio(cfg, 'Cadastrar atividade sem nome', 'Atividade vazia', null, 'campo obrigatorio'),
    'C36-CT03': F.excluir(cfg, 'Excluir atividade', NOME),
  },
  limpar: async ({ p }) => {
    await F.limpar(cfg)({ p });
    if (!brancasAntes) return; // so apaga em branco se sabemos quais ja existiam
    for (let i = 0; i < 6; i++) {
      await L.ir(p, cfg.rota);
      const ids = (await idsEmBranco(p)).filter((id) => !brancasAntes.includes(id));
      if (!ids.length) return;
      console.log('  excluindo atividade em branco criada pelo teste, codigo', ids[0]);
      await p.locator('table tbody tr', { hasText: new RegExp('^\\s*' + ids[0] + '(?!\\d)') }).first().locator(cfg.excluirBtn).click();
      await F.fecharDialogos(p, 3);
    }
  },
};
