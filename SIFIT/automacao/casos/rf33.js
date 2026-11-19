// RF33 - Funcoes (e permissoes)
// A tela nao tem botao de excluir: a funcao de teste "QA14555 Funcao" criada no C33-CT01 fica no ambiente.
const L = require('../lib');
const C = require('./comum');
const F = require('./fabrica');
const NOME = `${L.PREFIXO} Funcao`;
const cfg = {
  entidade: 'Funcao', rota: '/funcoes',
  abrir: (p) => p.locator('.fun-btn-cadastrar').click(),
  salvar: (p) => p.locator('.fun-btn-salvar').filter({ visible: true }).first(),
  cancelar: (p) => p.locator('.fun-btn-cancelar').filter({ visible: true }).first(),
  buscar: async (p, t) => { await L.digitar(p.locator('input.fun-input[placeholder="Nome da função"]'), t); await p.locator('.fun-btn-buscar').click(); await L.carregada(p); },
};
const f = (p, i) => p.locator('.fun-form-input').nth(i); // 0 codigo, 1 nome, 2 tipo, 3 personal, 4 avaliador

module.exports = {
  inicio: '/funcoes',
  casos: {
    'C33-CT01': F.criar(cfg, 'Cadastrar função', async (p) => {
      await L.digitar(f(p, 1), NOME);
      await f(p, 2).selectOption({ label: 'Interno' });
      await f(p, 3).selectOption({ label: 'Sim' });
    }, NOME, ' Obs.: a tela nao tem botao de excluir; a funcao de teste fica no ambiente.'),
    'C33-CT02': {
      nome: 'Configurar permissões',
      run: async ({ p }) => {
        await cfg.buscar(p, NOME);
        const l = F.linhas(p, NOME).first();
        if (!(await l.count())) return { status: 'inconclusivo', obs: 'Funcao de teste (C33-CT01) nao encontrada.' };
        await l.scrollIntoViewIfNeeded(); await L.pausa(p);
        await l.locator('button[title="Permissões"]').click();
        await L.pausa(p, 1800);
        const modal = p.locator('.fun-permissao-modal');
        await modal.locator('input[type=checkbox]').first().waitFor({ timeout: 15000 }).catch(() => {});
        const caixas = modal.locator('input[type=checkbox]');
        const total = await caixas.count();
        if (!total) return { status: 'falhou', obs: 'A janela de permissoes nao exibiu nenhuma opcao para marcar.' };
        const marcadas = [];
        for (let i = 0; i < total && marcadas.length < 3; i++) { if (!(await caixas.nth(i).isChecked())) { await caixas.nth(i).check({ force: true }); marcadas.push(i); await L.pausa(p, 500); } }
        const o = F.observar(p);
        await p.locator('.fun-modal-footer:visible').getByText('Salvar', { exact: true }).click();
        const msgs = await F.fecharDialogos(p);
        o.parar();
        await F.irEBuscar(p, cfg, NOME);
        const l2 = F.linhas(p, NOME).first();
        await l2.locator('button[title="Permissões"]').click();
        await p.locator('.fun-permissao-modal input[type=checkbox]').first().waitFor({ timeout: 15000 }).catch(() => {}); await L.pausa(p, 800);
        const c2 = p.locator('.fun-permissao-modal input[type=checkbox]');
        const persistiu = [];
        for (const i of marcadas) persistiu.push(await c2.nth(i).isChecked());
        await L.pausa(p, 1500);
        const ok = marcadas.length > 0 && persistiu.every(Boolean);
        return { status: ok ? 'passou' : 'falhou', obs: `Marcadas ${marcadas.length} permissoes de ${total}; ao reabrir ${persistiu.filter(Boolean).length} continuam marcadas. Resposta: ${msgs.join(' / ') || 'nenhuma'}${o.erros().length ? ' | API: ' + o.erros().join('; ') : ''}` };
      },
    },
    'C33-CT03': F.vazio(cfg, 'Função sem nome', 'Funcao sem nome', null, 'nome'),
  },
};
