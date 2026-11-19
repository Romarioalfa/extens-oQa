// Preparacao de dados de teste (prefixo QA14555). Nao e gravado no Jam.
const L = require('./lib');

const CLIENTE = `${L.PREFIXO} Cliente Teste`;

async function existeCliente(p, nome) {
  await L.ir(p, '/clientes');
  await p.getByPlaceholder(/Nome/).first().fill(nome);
  await p.getByRole('button', { name: /Buscar/ }).click();
  await L.carregada(p);
  return (await p.locator('table tbody tr', { hasText: nome }).count()) > 0;
}

async function garantirCliente(p) {
  if (await existeCliente(p, CLIENTE)) return CLIENTE;
  await L.ir(p, '/adicionar-cliente');
  await p.getByPlaceholder('Nome completo').fill(CLIENTE);
  const sel = (rotulo) => p.locator('label', { hasText: rotulo }).locator('xpath=following::select[1]');
  await sel('Status').selectOption({ label: 'Ativo' });
  await sel('Sexo').selectOption({ label: 'Masculino' });
  await p.getByPlaceholder('DD/MM/AAAA').first().fill('01/01/2000');
  await p.getByRole('button', { name: 'Cadastrar Cliente' }).click();
  await L.carregada(p);
  if (!(await existeCliente(p, CLIENTE))) throw new Error('cliente de teste nao foi criado');
  return CLIENTE;
}

const FORNECEDOR = `${L.PREFIXO} Fornecedor Teste`;

async function existeFornecedor(p, nome) {
  await L.ir(p, '/fornecedores');
  await p.locator('input.forn-input[placeholder="Nome"]').fill(nome);
  await p.getByRole('button', { name: 'Buscar' }).click();
  await L.carregada(p);
  return (await p.locator('table tbody tr', { hasText: nome }).count()) > 0;
}

async function garantirFornecedor(p) {
  const C = require('./casos/comum');
  if (await existeFornecedor(p, FORNECEDOR)) return FORNECEDOR;
  await p.getByRole('button', { name: 'Novo Fornecedor' }).click();
  await L.pausa(p);
  await p.getByLabel('Jurídica').check().catch(() => {});
  await p.getByPlaceholder('Nome do fornecedor').fill(FORNECEDOR);
  await p.getByPlaceholder('00.000.000/0000-00').fill('11.222.333/0001-81'); // CNPJ de exemplo valido
  await p.locator('button.forn-btn-salvar').click();
  if (await C.dialogo(p, 5000)) await C.confirmar(p);
  if (!(await existeFornecedor(p, FORNECEDOR))) throw new Error('fornecedor de teste nao foi criado');
  return FORNECEDOR;
}

module.exports = { CLIENTE, existeCliente, garantirCliente, FORNECEDOR, existeFornecedor, garantirFornecedor };

if (require.main === module) (async () => {
  const { p } = await L.conectar();
  console.log('cliente:', await garantirCliente(p));
  process.exit(0);
})().catch((e) => { console.error(e); process.exit(1); });
