// RF34 - Fornecedores
// Observacao: o cadastro de fornecedor retorna erro 500 em todos os cenarios (ver C34-CT01). Sem fornecedor de teste,
// o C34-CT04 (editar) nao e executado para nao alterar fornecedores de outros alunos.
const L = require('../lib');
const F = require('./fabrica');
const NOME = `${L.PREFIXO} Fornecedor`;
const cfg = {
  entidade: 'Fornecedor', rota: '/fornecedores', excluirBtn: '.forn-action-red',
  abrir: (p) => p.locator('.forn-btn-cadastrar').click(),
  salvar: (p) => p.locator('.forn-btn-salvar'),
  cancelar: (p) => p.locator('.forn-btn-cancelar'),
  buscar: async (p, t) => { await L.digitar(p.locator('input.forn-input[placeholder="Nome"]'), t); await p.locator('.forn-btn-buscar').click(); await L.carregada(p); },
};
const juridica = async (p) => { await p.getByLabel('Jurídica').check(); await L.pausa(p, 500); };
const nome = (p, v) => L.digitar(p.getByPlaceholder('Nome do fornecedor'), v);
const cnpj = (p, v) => L.digitar(p.getByPlaceholder('00.000.000/0000-00'), v);

module.exports = {
  inicio: '/fornecedores',
  casos: {
    'C34-CT01': F.criar(cfg, 'Cadastrar fornecedor jurídico', async (p) => {
      await juridica(p); await nome(p, NOME); await cnpj(p, '11.222.333/0001-81');
    }, NOME),
    'C34-CT02': F.vazio(cfg, 'Fornecedor sem nome', 'Fornecedor sem nome', async (p) => { await juridica(p); }, 'nome'),
    'C34-CT03': F.vazio(cfg, 'CNPJ inválido', 'Fornecedor com CNPJ inválido', async (p) => {
      await juridica(p); await nome(p, `${NOME} CNPJ Invalido`); await cnpj(p, '11.111.111/1111-11');
    }, 'cnpj'),
    'C34-CT04': {
      nome: 'Editar fornecedor',
      semJam: true, // nao ha o que gravar: sem fornecedor de teste
      run: async () => ({ status: 'inconclusivo', obs: 'Nao executado: o fornecedor de teste nao pode ser criado (cadastro retorna erro 500, ver C34-CT01) e editar um fornecedor existente alteraria dados de outros alunos.' }),
    },
  },
  limpar: F.limpar(cfg),
};
