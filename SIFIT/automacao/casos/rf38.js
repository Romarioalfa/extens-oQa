// RF38 - Produtos
const L = require('../lib');
const F = require('./fabrica');
const NOME = `${L.PREFIXO} Produto Novo`;
const cfg = {
  entidade: 'Produto', rota: '/produtos', excluirBtn: '.prd-action-red',
  abrir: (p) => p.locator('.prd-btn-cadastrar').click(),
  salvar: (p) => p.locator('.prd-btn-salvar'),
  cancelar: (p) => p.locator('.prd-btn-cancelar'),
  buscar: async (p, t) => { await L.digitar(p.locator('input.prd-input[placeholder="Nome do produto"]'), t); await p.locator('.prd-btn-buscar').click(); await L.carregada(p); },
};
const selects = (p) => p.locator('select.form-select:not(.prd-input)'); // 0 status, 1 tipo
const EXCL = `${L.PREFIXO} Produto Excluir`;
module.exports = {
  inicio: '/produtos',
  // preparo (fora da gravacao): produto que o C38-CT03 vai excluir. Preco "25" porque "25,00" da erro 400 (ver C38-CT01).
  antes: async ({ p }) => {
    await L.ir(p, cfg.rota);
    await cfg.buscar(p, EXCL);
    if (await F.linhas(p, EXCL).count()) return;
    await cfg.abrir(p); await L.pausa(p);
    await L.digitar(p.locator('input.input_modal').nth(1), EXCL);
    await selects(p).nth(1).selectOption({ label: 'Venda' });
    await L.digitar(p.locator('input.input_modal').nth(2), '25');
    await cfg.salvar(p).click();
    await F.fecharDialogos(p);
  },
  casos: {
    'C38-CT01': F.criar(cfg, 'Cadastrar produto', async (p) => {
      await L.digitar(p.locator('input.input_modal').nth(1), NOME);
      await selects(p).nth(1).selectOption({ label: 'Venda' });
      await L.digitar(p.locator('input.input_modal').nth(2), '25,00');
    }, NOME, '', (t) => (/25,00/.test(t) ? '' : 'o preco R$ 25,00 nao aparece')),
    'C38-CT02': F.vazio(cfg, 'Cadastrar produto em branco', 'Produto vazio', null, 'campo obrigatorio'),
    'C38-CT03': F.excluir(cfg, 'Excluir produto', EXCL),
  },
  limpar: F.limpar(cfg),
};
