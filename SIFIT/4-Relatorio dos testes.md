#  **Relatório Final de Execução de Testes - SIFIT**


* Sistema operacional: Windows
* Navegador: Chrome 157
* URL: [https://sifit.centrion.com.br](https://sifit.centrion.com.br)

---

##  **Resumo da Execução**

| Total de Casos de Teste | Casos Executados | Casos Passaram | Casos Falharam | Casos Inconclusivos | Não Executados | Bugs Registrados |
| ----------------------- | ---------------- | -------------- | -------------- | ------------------- | -------------- | ---------------- |
| 175                     | 153              | 127            | 24             | 2                   | 22             | 24               |

> Foram executados 153 dos 175 casos de teste entre 17/11 e 19/11/2026. Ficaram inconclusivos o C07-CT03 (sem registros de check-in para filtrar) e o C22-CT01 (ao clicar em Gerar Aula, nenhuma aula é gerada). Não foram executados 22 casos: C13-CT01 a C13-CT05, C22-CT03, C28-CT01 a C28-CT03, C29-CT01 a C29-CT03, C34-CT04 (bloqueado pelo BUG-021, o fornecedor de teste não pode ser criado), C36-CT03, C39-CT01, C39-CT02, C40-CT02, C40-CT03, C45-CT02, C45-CT03 (risco de alterar a configuração do ambiente compartilhado), C47-CT02 e C47-CT04. Os BUG-002 e BUG-003 foram informados como corrigidos em 19/11/2026. Obs.: na pasta `Cenarios de Testes`, os arquivos `CT_RF41` (Categorias) e `CT_RF42` (Modelos) estão com a numeração trocada em relação à Análise de Requisitos; este relatório segue a Análise (RF41 = Modelos de Anamnese, RF42 = Categorias de Anamnese).

---

## 🔍 **Cobertura por Módulo**

| Código RF | Módulo | Casos Testados | Casos Passaram | Bugs encontrados | Bug(s) Associado(s) |
| --------- | ------ | -------------- | -------------- | ---------------- | ------------------- |
| RF01 | Autenticação de Usuário | 5 | 4 | 1 | BUG-016 |
| RF02 | Menu do Usuário | 4 | 2 | 2 | BUG-017, BUG-018 |
| RF03 | Temaa Claro e Escuro | 3 | 3 | 0 | - |
| RF04 | Página Inicial | 4 | 2 | 3 | BUG-001, BUG-002, BUG-003 |
| RF05 | Detalhes da Página Inicial | 6 | 6 | 0 | - |
| RF06 | Dashboard | 3 | 3 | 0 | - |
| RF07 | Check-in | 4 | 3 | 0 | - (C07-CT03 inconclusivo: sem dados) |
| RF08 | Presenças | 4 | 4 | 0 | - |
| RF09 | SifitBox (Aulas) | 3 | 3 | 0 | - |
| RF10 | Clientes | 6 | 6 | 0 | - |
| RF11 | Matrículas | 5 | 5 | 0 | - |
| RF12 | Avaliações Físicas | 6 | 6 | 0 | - |
| RF13 | Contas a Receber | 0 | 0 | 0 | - (não executado) |
| RF14 | Contas a Pagar | 4 | 4 | 0 | - |
| RF15 | Ficha de Treino | 3 | 3 | 0 | - |
| RF16 | Exercícios | 3 | 3 | 0 | - |
| RF17 | Grupos Musculares | 4 | 3 | 1 | BUG-006 |
| RF18 | Objetivos de Treino | 3 | 2 | 1 | BUG-008 |
| RF19 | Grupos | 3 | 2 | 1 | BUG-009 |
| RF20 | Turmas | 4 | 3 | 1 | BUG-010 |
| RF21 | Categorias Crossfit | 3 | 3 | 0 | - |
| RF22 | Box - Turmas | 2 | 1 | 0 | - (C22-CT01 inconclusivo; C22-CT03 não executado) |
| RF23 | Caixas | 4 | 2 | 2 | BUG-013, BUG-014 |
| RF24 | Pagar.me | 5 | 4 | 1 | BUG-011 |
| RF25 | Despesas Fixas | 4 | 4 | 0 | - |
| RF26 | Relatórios | 4 | 3 | 1 | BUG-012 |
| RF27 | Prospecção | 4 | 4 | 0 | - |
| RF28 | Planos | 1 | 1 | 0 | - |
| RF29 | Modelos de Contrato | 0 | 0 | 0 | - (não executado) |
| RF30 | Tiposs de Pagamento | 3 | 2 | 1 | BUG-019 |
| RF31 | Bandeiras | 3 | 1 | 1 | BUG-020 |
| RF32 | Colaboraadores | 4 | 4 | 0 | - |
| RF33 | Funçoes | 3 | 3 | 0 | - |
| RF34 | Fornecedores | 3 | 1 | 1 | BUG-021 (C34-CT04 bloqueado) |
| RF35 | Tipos de Documentos | 3 | 3 | 0 | - |
| RF36 | Atividades | 2 | 1 | 1 | BUG-022 |
| RF37 | Pontuação | 4 | 4 | 0 | - |
| RF38 | Produtos | 3 | 2 | 1 | BUG-023 |
| RF39 | Enquetes | 1 | 1 | 0 | - |
| RF40 | Fchas de Anamnese | 1 | 0 | 1 | BUG-015 |
| RF41 | Modelos de Anamnese | 3 | 2 | 1 | BUG-004 |
| RF42 | Categorias de Anamnese | 3 | 3 | 0 | - |
| RF43 | Perguntas de Anamnese | 3 | 2 | 1 | BUG-024 |
| RF44 | Inteligência e Automação | 4 | 4 | 0 | - |
| RF45 | Configurações | 1 | 1 | 1 | BUG-005 (achado em teste exploratório) |
| RF46 | Modelo de Ficha | 3 | 2 | 1 | BUG-007 |
| RF47 | Aplicativo | 2 | 2 | 0 | - |

---

## 🐞 **Resumo dos Bugs Reportados**

| ID      | Título                                                                    | Severidade | Status |
| ------- | ------------------------------------------------------------------------- | ---------- | ------ |
| BUG-001 | Filtros Status, Situação, Plano e Personal não alteram a lista de clientes | Alta       | Aberto |
| BUG-002 | Gráfico "Por Diaa da Semana" da Página Inicial aparece vazio               | Média      | Corrigido |
| BUG-003 | Card "Falar com 17 inativos" abre modal com 0 inativos                     | Média      | Corrigido |
| BUG-004 | Preview do Modelo de Anamnese informa "Nenhuma pergunta adicionada ainda" mesmo com pergunta cadastrada | Média | Aberto |
| BUG-005 | Campo "Senha" da aba Biometria (Configurações) exibe a senha em texto puro | Média | Aberto |
| BUG-006 | Grupo muscular é cadastrado com todos os campos obrigatórios em branco | Média | Aberto |
| BUG-007 | Modelo de ficha não é salvo mesmo comm os campos preenchidos corretamente | Alta | Aberto |
| BUG-008 | Objetivo de treino é cadastrado com os campos obrigatórios em branco | Média | Aberto |
| BUG-009 | Excluir grupo falha com erro 500 e o grupo não é removido | Alta | Aberto |
| BUG-010 | Turma é cadastrada com horário inicial depois do horário final | Média | Aberto |
| BUG-011 | Gráfico de Recebimentos do Pagar.me não muda ao alterar o período | Média | Aberto |
| BUG-012 | Relatório é gerado com Data Início posterior à Data Fim | Baixa | Aberto |
| BUG-013 | Sistema permite abrir mais de um caixa simultaneamente | Alta | Aberto |
| BUG-014 | Fechamento de caixa exibe erro genérico após Buscar Contas | Alta | Aberto |
| BUG-015 | Nova Anamnese não permite pesquisar o aluno e o site apresenta erro 500 | Alta | Aberto |
| BUG-016 | Link "Esqueci minha senha" não faz nada ao ser clicado | Média | Aberto |
| BUG-017 | "Meu perfil" abre uma página de modelo em vez dos dados do usuário | Alta | Aberto |
| BUG-018 | "Segurança" e "Preferências" abrem as Configurações da academia | Média | Aberto |
| BUG-019 | Tipo de pagamento com "Escolher Bandeira = Sim" não permite escolher a bandeira | Média | Aberto |
| BUG-020 | Bandeira cadastrada não aparece na lista | Alta | Aberto |
| BUG-021 | Cadastro de fornecedor sempre retorna erro 500 | Alta | Aberto |
| BUG-022 | Atividade é cadastrada com todos os campos em branco | Média | Aberto |
| BUG-023 | Produto é cadastrado com todos os campos em branco | Média | Aberto |
| BUG-024 | Salvar pergunta de anamnese sem texto retorna erro 500 | Média | Aberto |

---

## 📈 **Gráfico de Resultaado (Texto Alternativo)**

**Casos por status:**

*  Passaram: 127
*  Falharam: 24
*  Inconclusivo: 2
*  Não exxecutados: 22

**Severidade dos bugs:**

*  Alta: 9
*  Média: 14
*  Baixa: 1

**Status dos bugs:**

*  Abertos: 22
*  Corrigidos: 2

---

## **Evidências e Documentos**

*  [Análise de Requisitos](1-Analise%20de%20requistos.md)
*  [Plano de Testes](2-Plano%20de%20testes.md)
*  [Casos de Teste](Cenarios%20de%20Testes/)
*  [Relatório de Bugs](3-Relatorio%20de%20Bugs.md)
*  Evidências: vídeos gravados com a extensão Jam, linkados em cada caso de teste e em cada bug

