# ✅ **Relatório Final de Execução de Testes - SIFIT**

**Sistema testado:** SIFIT - Sistema para Academias
**Responsável:** Romário Rodrigues RA 14555
**Data de execução:** 17/11/2026 a 19/11/2026
**Ambiente:** https://sifit.centrion.com.br

* Sistema operacional: Windows
* Navegador: Chrome 157
* URL: [https://sifit.centrion.com.br](https://sifit.centrion.com.br)

---

## 📊 **Resumo da Execução**

| Total de Casos de Teste | Casos Passaram | Casos Falharam | Casos Inconclusivos | Bugs Registrados |
| ----------------------- | -------------- | -------------- | ------------------- | ---------------- |
| 68                      | 53             | 13             | 2                   | 15               |

> Foram executados 68 casos entre 17/11 e 19/11/2026. Em 17/11 e 18/11: C01-CT01, C04-CT01 a C04-CT04, C07-CT03, C10-CT03, C28-CT04, C39-CT03, C41-CT01, C41-CT02, C44-CT01 a C44-CT04, C45-CT01, C47-CT01 e C47-CT03. Em 19/11: RF14 (CT01 a CT04), RF15, RF16, RF17 (CT01 a CT04), RF18, RF19, RF20, RF21, RF22 (CT01 e CT02), RF23, RF24, RF25, RF26, RF40 (C40-CT01) e RF46. O C14-CT04 foi executado duas vezes (17/11 e 19/11) e conta uma vez. O C47-CT03, inconclusivo na primeira execução por falta de postagens, passou em 19/11. Ficaram inconclusivos o C07-CT03 (sem registros de check-in para filtrar) e o C22-CT01 (bloqueado: ao clicar em Gerar Aula, nenhuma aula é gerada, o que impede a continuação do caso). O C22-CT03 não foi executado. Os BUG-002 e BUG-003 foram informados como corrigidos em 19/11/2026 e constam com status Corrigido. Obs.: na pasta `Cenarios de Testes`, os arquivos `CT_RF41` (Categorias) e `CT_RF42` (Modelos) estão com a numeração trocada em relação à Análise de Requisitos; este relatório segue a Análise (RF41 = Modelos de Anamnese, RF42 = Categorias de Anamnese). Os casos desta tabela não incluem os vídeos gravados pelos demais integrantes do grupo, e os demais cenários da pasta ainda não foram executados.

---

## 🔍 **Cobertura por Módulo**

| Código RF | Módulo | Casos Testados | Casos Passaram | Bugs encontrados | Bug(s) Associado(s) |
| --------- | ------ | -------------- | -------------- | ---------------- | ------------------- |
| RF01 | Autenticação de Usuário | 1 | 1 | 0 | - |
| RF02 | Menu do Usuário | 0 | 0 | 0 | - |
| RF03 | Tema Claro e Escuro | 0 | 0 | 0 | - |
| RF04 | Página Inicial | 4 | 2 | 3 | BUG-001, BUG-002, BUG-003 |
| RF05 | Detalhes da Página Inicial | 0 | 0 | 0 | - |
| RF06 | Dashboard | 0 | 0 | 0 | - |
| RF07 | Check-in | 1 | 0 | 0 | - (C07-CT03 inconclusivo: sem dados) |
| RF08 | Presenças | 0 | 0 | 0 | - |
| RF09 | SifitBox (Aulas) | 0 | 0 | 0 | - |
| RF10 | Clientes | 1 | 1 | 0 | - |
| RF11 | Matrículas | 0 | 0 | 0 | - |
| RF12 | Avaliações Físicas | 0 | 0 | 0 | - |
| RF13 | Contas a Receber | 0 | 0 | 0 | - |
| RF14 | Contas a Pagar | 4 | 4 | 0 | - |
| RF15 | Ficha de Treino | 3 | 3 | 0 | - |
| RF16 | Exercícios | 3 | 3 | 0 | - |
| RF17 | Grupos Musculares | 4 | 3 | 1 | BUG-006 |
| RF18 | Objetivos de Treino | 3 | 2 | 1 | BUG-008 |
| RF19 | Grupos | 3 | 2 | 1 | BUG-009 |
| RF20 | Turmas | 4 | 3 | 1 | BUG-010 |
| RF21 | Categorias Crossfit | 3 | 3 | 0 | - |
| RF22 | Box - Turmas | 2 | 1 | 0 | - (C22-CT01 bloqueado; C22-CT03 não executado) |
| RF23 | Caixas | 4 | 2 | 2 | BUG-013, BUG-014 |
| RF24 | Pagar.me | 5 | 4 | 1 | BUG-011 |
| RF25 | Despesas Fixas | 4 | 4 | 0 | - |
| RF26 | Relatórios | 4 | 3 | 1 | BUG-012 |
| RF27 | Prospecção | 0 | 0 | 0 | - |
| RF28 | Planos | 1 | 1 | 0 | - |
| RF29 | Modelos de Contrato | 0 | 0 | 0 | - |
| RF30 | Tipos de Pagamento | 0 | 0 | 0 | - |
| RF31 | Bandeiras | 0 | 0 | 0 | - |
| RF32 | Colaboradores | 0 | 0 | 0 | - |
| RF33 | Funções | 0 | 0 | 0 | - |
| RF34 | Fornecedores | 0 | 0 | 0 | - |
| RF35 | Tipos de Documentos | 0 | 0 | 0 | - |
| RF36 | Atividades | 0 | 0 | 0 | - |
| RF37 | Pontuação | 0 | 0 | 0 | - |
| RF38 | Produtos | 0 | 0 | 0 | - |
| RF39 | Enquetes | 1 | 1 | 0 | - |
| RF40 | Fichas de Anamnese | 1 | 0 | 1 | BUG-015 |
| RF41 | Modelos de Anamnese | 2 | 1 | 1 | BUG-004 |
| RF42 | Categorias de Anamnese | 0 | 0 | 0 | - |
| RF43 | Perguntas de Anamnese | 0 | 0 | 0 | - |
| RF44 | Inteligência e Automação | 4 | 4 | 0 | - |
| RF45 | Configurações | 1 | 1 | 1 | BUG-005 (achado em teste exploratório) |
| RF46 | Modelo de Ficha | 3 | 2 | 1 | BUG-007 |
| RF47 | Aplicativo | 2 | 2 | 0 | - |

---

## 🐞 **Resumo dos Bugs Reportados**

| ID      | Título                                                                    | Severidade | Status |
| ------- | ------------------------------------------------------------------------- | ---------- | ------ |
| BUG-001 | Filtros Status, Situação, Plano e Personal não alteram a lista de clientes | Alta       | Aberto |
| BUG-002 | Gráfico "Por Dia da Semana" da Página Inicial aparece vazio               | Média      | Corrigido |
| BUG-003 | Card "Falar com 17 inativos" abre modal com 0 inativos                     | Média      | Corrigido |
| BUG-004 | Preview do Modelo de Anamnese informa "Nenhuma pergunta adicionada ainda" mesmo com pergunta cadastrada | Média | Aberto |
| BUG-005 | Campo "Senha" da aba Biometria (Configurações) exibe a senha em texto puro | Média | Aberto |
| BUG-006 | Grupo muscular é cadastrado com todos os campos obrigatórios em branco | Média | Aberto |
| BUG-007 | Modelo de ficha não é salvo mesmo com os campos preenchidos corretamente | Alta | Aberto |
| BUG-008 | Objetivo de treino é cadastrado com os campos obrigatórios em branco | Média | Aberto |
| BUG-009 | Excluir grupo falha com erro 500 e o grupo não é removido | Alta | Aberto |
| BUG-010 | Turma é cadastrada com horário inicial depois do horário final | Média | Aberto |
| BUG-011 | Gráfico de Recebimentos do Pagar.me não muda ao alterar o período | Média | Aberto |
| BUG-012 | Relatório é gerado com Data Início posterior à Data Fim | Baixa | Aberto |
| BUG-013 | Sistema permite abrir mais de um caixa simultaneamente | Alta | Aberto |
| BUG-014 | Fechamento de caixa exibe erro genérico após Buscar Contas | Alta | Aberto |
| BUG-015 | Nova Anamnese não permite pesquisar o aluno e o site apresenta erro 500 | Alta | Aberto |

---

## 📈 **Gráfico de Resultado (Texto Alternativo)**

**Casos por status:**

* ✅ Passaram: 53
* ❌ Falharam: 13
* ❔ Inconclusivo: 2

**Severidade dos bugs:**

* 🟥 Alta: 6
* 🟨 Média: 8
* 🟩 Baixa: 1

**Status dos bugs:**

* 🔓 Abertos: 13
* ✔️ Corrigidos: 2

---

## 📁 **Evidências e Documentos**

* ✔️ [Análise de Requisitos](1-Analise%20de%20requistos.md)
* ✔️ [Plano de Testes](2-Plano%20de%20testes.md)
* ✔️ [Casos de Teste](Cenarios%20de%20Testes/)
* 🐛 [Relatório de Bugs](3-Relatorio%20de%20Bugs.md)
* 🎥 Evidências: vídeos gravados com a extensão Jam, linkados em cada caso de teste e em cada bug
