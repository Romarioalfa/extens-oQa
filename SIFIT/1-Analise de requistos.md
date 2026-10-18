## 📦 **Requisitos Funcionais Detalhados para Testes Manuais**



### 🔐 **RF01 - Autenticação de Usuário**

  * O sistema deve permitir que o usuário realize login com login e senha válidos.

  * O sistema deve exibir mensagem de erro em caso de login inválido.

  * O sistema deve ter a opção "Esqueci minha senha" e "Manter conectado".

---

### 👤 **RF02 - Menu do Usuário**

**Descrição**: Menu com as opções da conta do usuário logado.

* **Funcionalidades esperadas**:

  * Acesso ao Meu perfil, Segurança e Preferências.
  * Opção de sair do sistema.

---

###  **RF03 - Tema Claro e Escuro**

**Descrição**: O sistema deve permitir trocar a cor da tela.

* **Funcionalidades esperadas**:

  * Botão de modo claro e modo escuro no menu lateral.
  * O tema escolhido deve continuar ao trocar de tela.

---

###  **RF04 - Página Inicial**

**Descrição**: Após o login, o sistema deve exibir o resumo da academia.

* **Funcionalidades esperadas**:

  * Cards de clientes ativos, ausentes, sem matrícula, personais, desistências e renovações.
  * Gráfico de movimento da academia.
  * Filtro por período (data inicial e final).

---

###  **RF05 - Detalhes da Página Inicial**

**Descrição**: Os cards da página inicial devem abrir os detalhes de cada informação.

* **Funcionalidades esperadas**:

  * Radar de evasão com os alunos em risco.
  * Lista de mensalidades em aberto.
  * Aniversariantes do dia e notificações.

---

###  **RF06 - Dashboard**

**Descrição**: Painel com resumo de despesas e da inteligência do sistema.

* **Funcionalidades esperadas**:

  * Exibição das despesas fixas.
  * Atalho para a tela de inteligência.

---

###  **RF07 - Check-in**

**Descrição**: Controle de entrada e saída dos alunos na academia.

* **Funcionalidades esperadas**:

  * Lista de check-ins com filtro por presentes, não compareceram e pendentes.
  * Busca por nome, código ou plano.
  * Check-in manual de aluno ou visitante.

---

###  **RF08 - Presenças**

**Descrição**: Consulta do histórico de presenças dos alunos.

* **Funcionalidades esperadas**:

  * Busca por nome do cliente.
  * Filtro por data (hoje, semana, mês ou período).

---

###  **RF09 - SifitBox (Aulas)**

**Descrição**: Controle das aulas da modalidade box.

* **Funcionalidades esperadas**:

  * Busca de aulas por data.
  * Botão para gerar as aulas automaticamente.

---

###  **RF10 - Clientes**

**Descrição**: O sistema deve permitir o gerenciamento completo dos alunos.

* **Funcionalidades esperadas**:

  * Listagem de todos os clientes cadastrados.
  * Filtros de busca por código, nome, status e plano.
  * Botão "Novo Cliente" para cadastrar um aluno.
  * Opção de visualizar, editar ou excluir um cliente.

---

###  **RF11 - Matrículas**

**Descrição**: Controle das matrículas dos alunos nos planos.

* **Funcionalidades esperadas**:

  * Listagem e busca de matrículas por código, nome e data.
  * Cadastro de matrícula com plano, forma de pagamento e valor.
  * Cancelamento de matrícula informando o motivo.

---

###  **RF12 - Avaliações Físicas**

**Descrição**: Registro das avaliações físicas dos alunos.

* **Funcionalidades esperadas**:

  * Cadastro de avaliação com aluno e personal.
  * Cálculo de IMC, medidas e composição corporal.
  * Comparação entre avaliações.
  * Impressão e geração de PDF.

---

###  **RF13 - Contas a Receber**

**Descrição**: Controle dos valores que a academia tem para receber.

* **Funcionalidades esperadas**:

  * Cadastro de conta com cliente, valor e vencimento.
  * Filtro por data e status.
  * Visualização da conta.

---

###  **RF14 - Contas a Pagar**

**Descrição**: Controle das despesas da academia.

* **Funcionalidades esperadas**:

  * Cadastro de conta para fornecedor ou colaborador.
  * Filtro por data e status.
  * Visualização da conta.

---

###  **RF15 - Ficha de Treino**

**Descrição**: Montagem dos treinos dos alunos.

* **Funcionalidades esperadas**:

  * Cadastro de ficha nova ou usando um modelo.
  * Busca por aluno e status.

---

###  **RF16 - Exercícios**

**Descrição**: Biblioteca de exercícios do sistema.

* **Funcionalidades esperadas**:

  * Exercícios separados por grupo.
  * Adicionar exercício com imagem ou vídeo.
  * Visualizar e excluir exercício.

---

###  **RF17 - Grupos Musculares**

**Descrição**: Cadastro dos grupos musculares.

* **Funcionalidades esperadas**:

  * Cadastrar, visualizar e excluir grupo.
  * Filtro por código e nome.

---

###  **RF18 - Objetivos de Treino**

**Descrição**: Cadastro dos objetivos usados nas fichas.

* **Funcionalidades esperadas**:

  * Cadastrar objetivo com nome e descrição.
  * Buscar objetivo.

---

###  **RF19 - Grupos**

**Descrição**: Cadastro de grupos para organizar os planos.

* **Funcionalidades esperadas**:

  * Cadastrar, visualizar e excluir grupo.
  * Opção de mostrar o grupo na home.

---

###  **RF20 - Turmas**

**Descrição**: Cadastro das turmas com dias e horários.

* **Funcionalidades esperadas**:

  * Cadastro de turma com plano, horário e dias da semana.
  * Editar e excluir turma.

---

###  **RF21 - Categorias Crossfit**

**Descrição**: Cadastro das categorias de exercícios de crossfit.

* **Funcionalidades esperadas**:

  * Cadastrar, editar e excluir categoria.

---

###  **RF22 - Box - Turmas**

**Descrição**: Cadastro das modalidades e turmas do box.

* **Funcionalidades esperadas**:

  * Cadastro de modalidade.
  * Cadastro de turma com dias, horário e vagas.

---

###  **RF23 - Caixas**

**Descrição**: Controle do caixa da academia.

* **Funcionalidades esperadas**:

  * Abrir e fechar caixa.
  * Filtro por data e status.
  * Imprimir caixa.

---

###  **RF24 - Pagar.me**

**Descrição**: Tela dos pagamentos feitos pela Pagar.me.

* **Funcionalidades esperadas**:

  * Visualização dos recebimentos e transações.
  * Criar link de pagamento.
  * Ver extrato e configurações.

---

###  **RF25 - Despesas Fixas**

**Descrição**: Cadastro das despesas que se repetem todo mês.

* **Funcionalidades esperadas**:

  * Cadastrar despesa com nome, valor e recorrência.
  * Visualizar e excluir despesa.

---

###  **RF26 - Relatórios**

**Descrição**: O sistema deve permitir a geração de relatórios.

* **Funcionalidades esperadas**:

  * Selecionar tipo de relatório (Ex: Clientes, Matrículas, Caixas).
  * Definir data inicial e final.
  * Gerar e visualizar relatório.

---

###  **RF27 - Prospecção**

**Descrição**: Controle dos possíveis novos alunos (leads).

* **Funcionalidades esperadas**:

  * Adicionar lead com nome, e-mail, telefone e estágio.
  * Filtro por estágio.
  * Visualizar e excluir lead.

---

###  **RF28 - Planos**

**Descrição**: Cadastro dos planos da academia.

* **Funcionalidades esperadas**:

  * Cadastrar plano com valor, parcelas e benefícios.
  * Visualizar os planos com mais alunos.

---

### 📄 **RF29 - Modelos de Contrato**

**Descrição**: Cadastro dos modelos de contrato.

* **Funcionalidades esperadas**:

  * Adicionar e visualizar modelo de contrato.

---

###  **RF30 - Tipos de Pagamento**

**Descrição**: Cadastro das formas de pagamento.

* **Funcionalidades esperadas**:

  * Cadastrar tipo de pagamento e escolher bandeira.
  * Visualizar e excluir.

---

###  **RF31 - Bandeiras**

**Descrição**: Cadastro das bandeiras de cartão.

* **Funcionalidades esperadas**:

  * Cadastrar bandeira com taxas.
  * Adicionar parcelas.

---

###  **RF32 - Colaboradores**

**Descrição**: Cadastro dos funcionários da academia.

* **Funcionalidades esperadas**:

  * Cadastrar, visualizar e excluir colaborador.
  * Busca por código e nome.

---

###  **RF33 - Funções**

**Descrição**: Cadastro das funções e permissões.

* **Funcionalidades esperadas**:

  * Cadastrar função (personal, avaliador).
  * Definir as permissões de cada função.

---

###  **RF34 - Fornecedores**

**Descrição**: Cadastro dos fornecedores.

* **Funcionalidades esperadas**:

  * Cadastrar fornecedor pessoa física ou jurídica.
  * Visualizar, editar e excluir fornecedor.

---

### 📃 **RF35 - Tipos de Documentos**

**Descrição**: Cadastro dos tipos de documentos.

* **Funcionalidades esperadas**:

  * Cadastrar, visualizar e excluir tipo de documento.

---

###  **RF36 - Atividades**

**Descrição**: Cadastro das atividades que dão pontos aos alunos.

* **Funcionalidades esperadas**:

  * Cadastrar atividade com pontuação.
  * Visualizar e excluir atividade.

---

###  **RF37 - Pontuação**

**Descrição**: Campanhas de pontos para os alunos.

* **Funcionalidades esperadas**:

  * Cadastrar campanha com período.
  * Ver ranking de participantes e pedidos.

---

###  **RF38 - Produtos**

**Descrição**: Cadastro dos produtos da academia.

* **Funcionalidades esperadas**:

  * Cadastrar produto com preço e imagem.
  * Visualizar e excluir produto.

---

###  **RF39 - Enquetes**

**Descrição**: Criação de enquetes para os alunos.

* **Funcionalidades esperadas**:

  * Cadastrar enquete com pergunta e respostas.
  * Filtro por código, nome e status.

---

###  **RF40 - Fichas de Anamnese**

**Descrição**: Registro da saúde dos alunos.

* **Funcionalidades esperadas**:

  * Criar anamnese para um aluno.
  * Responder as perguntas da ficha.

---

###  **RF41 - Modelos de Anamnese**

**Descrição**: Modelos usados nas fichas de anamnese.

* **Funcionalidades esperadas**:

  * Listar modelos e ver a prévia das perguntas.

---

###  **RF42 - Categorias de Anamnese**

**Descrição**: Categorias das perguntas de anamnese.

* **Funcionalidades esperadas**:

  * Cadastrar, editar e excluir categoria.

---

###  **RF43 - Perguntas de Anamnese**

**Descrição**: Cadastro das perguntas da anamnese.

* **Funcionalidades esperadas**:

  * Cadastrar pergunta com tipo de resposta.
  * Visualizar e excluir pergunta.

---

###  **RF44 - Inteligência e Automação**

**Descrição**: Automações e análises feitas pelo sistema.

* **Funcionalidades esperadas**:

  * Lista de automações ativas e disponíveis.
  * Tela de resultados com filtro por período.

---

###  **RF45 - Configurações**

**Descrição**: Configurações gerais da academia.

* **Funcionalidades esperadas**:

  * Abas de configuração (Home, Biometria, Avaliação, Pagamento, etc.).
  * Regras como multa, juros e dias para cliente ausente.

---

###  **RF46 - Modelo de Ficha**

**Descrição**: Modelos de ficha de treino para reutilizar.

* **Funcionalidades esperadas**:

  * Criar modelo de ficha.
  * Buscar por código, título e criador.

---

###  **RF47 - Aplicativo**

**Descrição**: Comunicação com o aplicativo dos alunos.

* **Funcionalidades esperadas**:

  * Criar notificação para os alunos.
  * Ver postagens e denúncias.
