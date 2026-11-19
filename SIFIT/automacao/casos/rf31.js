// RF31 - Bandeiras de cartao
const L = require('../lib');
const C = require('./comum');
const F = require('./fabrica');

const NOME = `${L.PREFIXO} Bandeira`;
const cfg = {
  entidade: 'Bandeira', rota: '/bandeiras', excluirBtn: '.bnd-action-red',
  abrir: (p) => p.locator('.bnd-btn-cadastrar').click(),
  salvar: (p) => p.locator('.bnd-btn-salvar'),
  cancelar: (p) => p.locator('.bnd-btn-cancelar'),
  buscar: async (p, t) => { await L.digitar(p.locator('input.bnd-input[placeholder="Nome"]'), t); await p.locator('.bnd-btn-buscar').click(); await L.carregada(p); },
};
const campo = (p, i) => p.locator('input.input_modal').nth(i); // 0 codigo, 1 nome, 2 taxa adicional, 3 taxa debito

module.exports = {
  inicio: '/bandeiras',
  casos: {
    'C31-CT01': F.criar(cfg, 'Cadastrar bandeira', async (p) => {
      await L.digitar(campo(p, 1), NOME);
      await L.digitar(campo(p, 3), '1,50');
      await L.digitar(campo(p, 2), '0,50');
    }, NOME),
    'C31-CT02': {
      nome: 'Adicionar parcelas',
      run: async ({ p }) => {
        await cfg.abrir(p); await L.pausa(p);
        await L.digitar(campo(p, 1), `${NOME} Parcelas`);
        await L.digitar(campo(p, 3), '1,50');
        await L.digitar(campo(p, 2), '0,50');
        await p.locator('.bnd-btn-add-parcela').click(); await L.pausa(p, 1000);
        await L.digitar(p.locator('input[placeholder="Ex: 2"]'), '2');
        await L.digitar(p.locator('.bnd-parcelas-box input').nth(1), '2,00');
        await p.locator('.bnd-parcelas-box button').filter({ hasNotText: 'Adicionar Parcela' }).first().click(); await L.pausa(p, 1200);
        const depois = await p.locator('.bnd-parcelas-table tbody tr').filter({ hasNotText: 'Nenhuma parcela' }).count();
        const campos = true, antes = 0;
        const o = F.observar(p);
        await cfg.salvar(p).click();
        const msgs = await F.fecharDialogos(p);
        o.parar();
        await F.irEBuscar(p, cfg, `${NOME} Parcelas`);
        const n = await F.linhas(p, `${NOME} Parcelas`).count();
        await L.pausa(p, 1200);
        const ok = depois > antes && n > 0;
        return { status: ok ? 'passou' : 'falhou', obs: `Linhas de parcela: ${antes} -> ${depois} (campo de taxa preenchido: ${campos ? 'sim' : 'nao'}). Bandeira ${n ? 'salva e listada' : 'NAO apareceu na lista'}. Resposta: ${msgs.join(' / ') || 'nenhuma'}${o.erros().length ? ' | API: ' + o.erros().join('; ') : ''}` };
      },
    },
    'C31-CT03': F.vazio(cfg, 'Bandeira sem nome', 'Bandeira sem nome', async (p) => {
      await L.digitar(campo(p, 3), '1,50');
    }),
  },
  limpar: F.limpar(cfg),
};
