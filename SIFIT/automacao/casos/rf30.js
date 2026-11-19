// RF30 - Tipos de Pagamento
const L = require('../lib');
const C = require('./comum');
const F = require('./fabrica');

const NOME = `${L.PREFIXO} Tipo Pgto`;
const cfg = {
  entidade: 'Tipo de pagamento', rota: '/tipos-pagamento', excluirBtn: '.tpg-action-red',
  abrir: (p) => p.locator('.tpg-btn-cadastrar').click(),
  salvar: (p) => p.locator('.tpg-btn-salvar'),
  cancelar: (p) => p.locator('.tpg-btn-cancelar'),
  buscar: async (p, t) => { await L.digitar(p.locator('input.tpg-input[placeholder="Nome"]'), t); await p.locator('.tpg-btn-buscar').click(); await L.carregada(p); },
};
const sel = (p, rotulo) => C.campo(p.locator('.vue-modal').filter({ visible: true }).last(), rotulo, 'select');

module.exports = {
  inicio: '/tipos-pagamento',
  casos: {
    'C30-CT01': F.criar(cfg, 'Cadastrar tipo de pagamento', async (p) => {
      await L.digitar(p.locator('input.input_modal').nth(1), NOME);
      await sel(p, /escolher bandeira/i).selectOption({ label: 'Não' });
      await sel(p, /^\s*tipo\s*$/i).selectOption({ label: 'Débito' });
      await sel(p, /pagamento pelo sistema/i).selectOption({ label: 'Não' });
    }, NOME, ' O formulario nao tem campo "Status" (a documentacao cita Nome, Status e Tipo).'),
    'C30-CT02': {
      nome: 'Vincular bandeira',
      run: async ({ p }) => {
        await cfg.abrir(p); await L.pausa(p);
        await L.digitar(p.locator('input.input_modal').nth(1), `${L.PREFIXO} Pgto Vinculo`);
        await sel(p, /escolher bandeira/i).selectOption({ label: 'Sim' });
        await sel(p, /^\s*tipo\s*$/i).selectOption({ label: 'Crédito' });
        await L.pausa(p, 800);
        // a documentacao espera um botao/lista "Escolher Bandeira"; no formulario so existe o select Sim/Nao
        const modalForm = p.locator('.vue-modal').filter({ visible: true }).last();
        const botao = await modalForm.locator('button').filter({ hasText: /bandeira/i }).count();
        const selects = await modalForm.locator('select').count();
        const o = F.observar(p);
        await cfg.salvar(p).click();
        const msgs = await F.fecharDialogos(p);
        o.parar();
        await F.irEBuscar(p, cfg, `${L.PREFIXO} Pgto Vinculo`);
        const l = F.linhas(p, `${L.PREFIXO} Pgto Vinculo`).first();
        const salvo = (await l.count()) > 0;
        const txt = salvo ? F.norm(await l.innerText()) : '';
        await L.pausa(p, 1500);
        const base = `Com "Escolher Bandeira = Sim" o formulario continua com ${selects} selects e ${botao} botao(oes) de bandeira: nao ha como escolher qual bandeira vincular. Tipo ${salvo ? `salvo ("${txt}")` : 'nao salvo'}. Resposta: ${msgs.join(' / ') || 'nenhuma'}${o.erros().length ? ' | API: ' + o.erros().join('; ') : ''}`;
        return botao ? { status: 'passou', obs: base } : { status: 'falhou', obs: base + ' A documentacao espera escolher a bandeira e salvar o vinculo.' };
      },
    },
    'C30-CT03': F.excluir(cfg, 'Excluir tipo de pagamento', NOME),
  },
  limpar: F.limpar(cfg),
};
