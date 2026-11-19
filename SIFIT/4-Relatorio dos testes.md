# ✅ **Relatório Final de Execução de Testes - SIFIT**

**Sistema testado:** SIFIT - Sistema para Academias
**Responsável:** Romário Rodrigues RA 14555
**Data de execução:** 17/11/2026 e 18/11/2026
**Ambiente:** https://sifit.centrion.com.br

* Sistema operacional: Windows
* Navegador: Chrome 157
* URL: [https://sifit.centrion.com.br](https://sifit.centrion.com.br)

---

## 📊 **Resumo da Execução**

| Total de Casos de Teste | Casos Passaram | Casos Falharam | Casos Inconclusivos | Bugs Registrados |
| ----------------------- | -------------- | -------------- | ------------------- | ---------------- |
| 20                      | 14             | 3              | 3                   | 5                |

> Foram executados, em 17/11, os casos C01-CT01, C04-CT01 a C04-CT04, C07-CT03, C10-CT03, C14-CT04 e C28-CT04 e, em 18/11, os casos C39-CT03, C41-CT01, C41-CT02, C44-CT01 a C44-CT04, C45-CT01, C46-CT03, C47-CT01 e C47-CT03. Ficaram inconclusivos o C07-CT03 (sem registros de check-in para filtrar), o C46-CT03 (nenhum modelo de ficha cadastrado para buscar) e o C47-CT03 (nenhuma postagem cadastrada para filtrar). O C41-CT02 falhou (BUG-004). Os casos desta tabela não incluem os vídeos gravados pelos demais integrantes do grupo. Nos módulos RF07, RF10, RF11, RF13, RF14, RF23 e RF28, os casos que cadastram, alteram, excluem ou imprimem registros não foram executados, para não alterar dados do ambiente compartilhado da turma. Os demais cenários da pasta `Cenarios de Testes` ainda não foram executados.

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
| RF14 | Contas a Pagar | 1 | 1 | 0 | - |
| RF15 | Ficha de Treino | 0 | 0 | 0 | - |
| RF16 | Exercícios | 0 | 0 | 0 | - |
| RF17 | Grupos Musculares | 0 | 0 | 0 | - |
| RF18 | Objetivos de Treino | 0 | 0 | 0 | - |
| RF19 | Grupos | 0 | 0 | 0 | - |
| RF20 | Turmas | 0 | 0 | 0 | - |
| RF21 | Categorias Crossfit | 0 | 0 | 0 | - |
| RF22 | Box - Turmas | 0 | 0 | 0 | - |
| RF23 | Caixas | 0 | 0 | 0 | - |
| RF24 | Pagar.me | 0 | 0 | 0 | - |
| RF25 | Despesas Fixas | 0 | 0 | 0 | - |
| RF26 | Relatórios | 0 | 0 | 0 | - |
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
| RF40 | Fichas de Anamnese | 0 | 0 | 0 | - |
| RF41 | Modelos de Anamnese | 2 | 1 | 1 | BUG-004 |
| RF42 | Categorias de Anamnese | 0 | 0 | 0 | - |
| RF43 | Perguntas de Anamnese | 0 | 0 | 0 | - |
| RF44 | Inteligência e Automação | 4 | 4 | 0 | - |
| RF45 | Configurações | 1 | 1 | 1 | BUG-005 (achado em teste exploratório) |
| RF46 | Modelo de Ficha | 1 | 0 | 0 | - (C46-CT03 inconclusivo: sem modelos cadastrados) |
| RF47 | Aplicativo | 2 | 1 | 0 | - (C47-CT03 inconclusivo: sem postagens) |

---

## 🐞 **Resumo dos Bugs Reportados**

| ID      | Título                                                                    | Severidade | Status |
| ------- | ------------------------------------------------------------------------- | ---------- | ------ |
| BUG-001 | Filtros Status, Situação, Plano e Personal não alteram a lista de clientes | Alta       | Aberto |
| BUG-002 | Gráfico "Por Dia da Semana" da Página Inicial aparece vazio               | Média      | Aberto |
| BUG-003 | Card "Falar com 17 inativos" abre modal com 0 inativos                     | Média      | Aberto |
| BUG-004 | Preview do Modelo de Anamnese informa "Nenhuma pergunta adicionada ainda" mesmo com pergunta cadastrada | Média | Aberto |
| BUG-005 | Campo "Senha" da aba Biometria (Configurações) exibe a senha em texto puro | Média | Aberto |

---

## 📈 **Gráfico de Resultado (Texto Alternativo)**

**Casos por status:**

* ✅ Passaram: 14
* ❌ Falharam: 3
* ❔ Inconclusivo: 3

**Severidade dos bugs:**

* 🟥 Alta: 1
* 🟨 Média: 4
* 🟩 Baixa: 0

---

## 📁 **Evidências e Documentos**

* ✔️ [Análise de Requisitos](1-Analise%20de%20requistos.md)
* ✔️ [Plano de Testes](2-Plano%20de%20testes.md)
* ✔️ [Casos de Teste](Cenarios%20de%20Testes/)
* 🐛 [Relatório de Bugs](3-Relatorio%20de%20Bugs.md)
* 🎥 Evidências: vídeos gravados com a extensão Jam, linkados em cada caso de teste e em cada bug
