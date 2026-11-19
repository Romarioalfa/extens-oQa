// RF45 - Configuracoes. REGRA: nunca salvar configuracao real. Os casos que clicam em Cancelar/Salvar rodam com
// as gravacoes da API bloqueadas (C.bloquearEscritas) e registram se o sistema tentou enviar algo.
const L = require('../lib');
const C = require('./comum');
const F = require('./fabrica');

const ABAS = ['Home', 'Biometria', 'Avaliação', 'Aniversário', 'Pagamento', 'Integrações', 'Design'];
const aba = (p, nome) => p.locator('.cfg-tab', { hasText: nome });
const depois = (p, rotulo, tipo) => p.locator('label', { hasText: rotulo }).first().locator(`xpath=following::${tipo}[1]`);

module.exports = {
  inicio: '/configuracoes',
  casos: {
    'C45-CT01': {
      nome: 'Navegar pelas abas',
      run: async ({ p }) => {
        const vazias = []; const campos = [];
        for (const a of ABAS) {
          await aba(p, a).click(); await L.pausa(p, 1100);
          const n = await p.locator('.cfg-label, label').filter({ visible: true }).count();
          campos.push(`${a}: ${n}`);
          if (!n) vazias.push(a);
        }
        return vazias.length ? { status: 'falhou', obs: `Abas sem conteudo: ${vazias.join(', ')}. Campos por aba: ${campos.join('; ')}` } : { status: 'passou', obs: `As ${ABAS.length} abas abrem e exibem campos (${campos.join('; ')}).` };
      },
    },
    'C45-CT02': {
      nome: 'Cancelar alterações',
      run: async ({ p }) => {
        const campo = depois(p, 'Dias para contar cliente como ausente', 'input');
        const original = await campo.inputValue();
        const novo = /^\d+$/.test(original) ? String(Number(original) + 7) : '77';
        const b = await C.bloquearEscritas(p);
        try {
          await L.digitar(campo, novo);
          await L.pausa(p, 1000);
          await p.locator('.cfg-btn-cancelar').click();
          await L.pausa(p, 2000);
          await F.fecharDialogos(p, 2);
        } finally { await b.soltar(); }
        await L.ir(p, '/configuracoes');
        const atual = await depois(p, 'Dias para contar cliente como ausente', 'input').inputValue();
        await L.pausa(p, 1500);
        const ok = atual === original && !b.tentativas.length;
        return { status: ok ? 'passou' : 'falhou', obs: `Campo "Dias para contar cliente como ausente": original ${original}, alterado para ${novo}, apos Cancelar e recarregar = ${atual}. Requisicoes de gravacao tentadas pelo sistema: ${b.tentativas.join('; ') || 'nenhuma'}.` };
      },
    },
    'C45-CT03': {
      nome: 'Multa com valor inválido',
      run: async ({ p }) => {
        await depois(p, 'Cobrar multa por atraso?', 'select').selectOption({ label: 'Sim' });
        await L.pausa(p, 1000);
        const multa = depois(p, 'Multa por atraso', 'input');
        if (!(await multa.count())) return { status: 'falhou', obs: 'Com "Cobrar multa por atraso? = Sim" o campo "Multa por atraso (%)" nao apareceu.' };
        await L.digitar(multa, 'abc');
        const valorDigitado = await multa.inputValue();
        const b = await C.bloquearEscritas(p);
        let msgs = [];
        try {
          await p.locator('.cfg-btn-salvar').click();
          const d = await C.dialogo(p, 3000);
          msgs = d ? [C.txtDialogo(d)] : await C.mensagens(p);
          await L.pausa(p, 1500);
          if (d) await C.cancelarDialogo(p);
        } finally { await b.soltar(); }
        // limpa: sai sem salvar
        await L.ir(p, '/configuracoes');
        const base = `Digitado "abc" (campo ficou com "${valorDigitado}"). Aviso: ${msgs.join(' / ') || 'nenhum'}. Requisicoes de gravacao tentadas (bloqueadas pelo teste para nao alterar a configuracao real): ${b.tentativas.join('; ') || 'nenhuma'}.`;
        if (b.tentativas.length) return { status: 'falhou', obs: `O sistema tentou salvar a multa invalida: nao ha validacao antes de enviar. ${base}` };
        return msgs.length ? { status: 'passou', obs: `Validacao impediu o envio. ${base}` } : { status: 'falhou', obs: `Nada foi enviado, mas tambem nao houve aviso ao usuario. ${base}` };
      },
    },
  },
};
