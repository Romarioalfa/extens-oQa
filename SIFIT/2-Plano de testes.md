## 🧪 **Plano de Testes - SIFIT**

### 📌 1. **Identificação**

* **Nome do Projeto**: SIFIT - Sistema para Academias
* **Versão Avaliada**: Versão web disponibilizada para a turma
* **Ambiente de Testes**: [https://sifit.centrion.com.br](https://sifit.centrion.com.br)
* **Tipo de Teste**: Teste Funcional Manual
* **Data do Documento**: 17/11/2026
* **Responsável**: Romário Rodrigues RA 14555

---

### 🎯 2. **Objetivo**

Realizar a verificação manual dos requisitos funcionais do sistema SIFIT, validando os principais fluxos da academia (login, clientes, matrículas, avaliações, financeiro e treinos), as mensagens de erro e o comportamento esperado de cada tela.

---

### 🧩 3. **Escopo**

**Incluído:**

* Autenticação, menu do usuário e tema claro/escuro (RF01 a RF03)
* Página inicial, detalhes da página inicial e dashboard (RF04 a RF06)
* Check-in, presenças e SifitBox (RF07 a RF09)
* Clientes, matrículas e avaliações físicas (RF10 a RF12)
* Financeiro: contas a receber, contas a pagar, caixas, Pagar.me, despesas fixas (RF13, RF14, RF23, RF24, RF25)
* Treinos: ficha de treino, exercícios, grupos musculares e objetivos (RF15 a RF18)
* Turmas, grupos, categorias Crossfit e Box (RF19 a RF22)
* Relatórios, prospecção e planos (RF26 a RF28)
* Cadastros auxiliares, anamnese, inteligência/automação, configurações, ficha e aplicativo (RF29 a RF47)

**Excluído:**

* Testes de integração real com sistemas externos (ex.: cobranças efetivas no Pagar.me)
* Testes em dispositivos móveis e no aplicativo nativo
* Testes de performance, carga e segurança
* Acesso direto e alteração do banco de dados

---

### 🔧 4. **Ferramentas Utilizadas**

* Navegador Google Chrome (versão 157)
* Ferramentas de inspeção do navegador (DevTools)
* Extensão Jam (gravação de vídeo e captura de evidências)
* Markdown / GitHub (documentação dos casos de teste e relatórios)

---

### 🧪 5. **Técnicas de Teste**

* Particionamento de equivalência
* Análise de valor limite
* Caminho feliz (Happy Path)
* Testes negativos
* Testes exploratórios

---

### 📄 6. **Critérios de Aceitação**

* Todos os casos de teste devem passar com sucesso, conforme o resultado esperado.
* Nenhuma falha crítica deve estar presente em funcionalidades principais.
* Mensagens de erro e validações devem ser consistentes.

---

### 🚦 7. **Critérios de Saída (Exit Criteria)**

* Todos os testes do escopo foram executados.
* Falhas foram registradas, analisadas e reexecutadas se necessário.
* Documentação de evidências de sucesso e falhas está completa.

---

### ⏱️ 8. **Cronograma Estimado**

| Atividade | Data Início | Data Fim |
| --- | --- | --- |
| Planejamento de Testes | xx/xx/xxxx | xx/xx/xxxx |
| Criação de Casos de Teste | xx/xx/xxxx | xx/xx/xxxx |
| Execução dos Testes Manuais | xx/xx/xxxx | xx/xx/xxxx |
| Registro e Report de Bugs | xx/xx/xxxx | xx/xx/xxxx |
| Encerramento e Evidências | xx/xx/xxxx | xx/xx/xxxx |

---

### 📋 9. **Módulos a Serem Testados**

| Código RF | Módulo | Prioridade |
| --- | --- | --- |
| RF01 | Autenticação de Usuário | Alta |
| RF02 | Menu do Usuário | Média |
| RF03 | Tema Claro e Escuro | Baixa |
| RF04 | Página Inicial | Alta |
| RF05 | Detalhes da Página Inicial | Média |
| RF06 | Dashboard | Média |
| RF07 | Check-in | Alta |
| RF08 | Presenças | Média |
| RF09 | SifitBox (Aulas) | Média |
| RF10 | Clientes | Alta |
| RF11 | Matrículas | Alta |
| RF12 | Avaliações Físicas | Média |
| RF13 | Contas a Receber | Alta |
| RF14 | Contas a Pagar | Alta |
| RF15 | Ficha de Treino | Média |
| RF16 | Exercícios | Baixa |
| RF17 | Grupos Musculares | Baixa |
| RF18 | Objetivos de Treino | Baixa |
| RF19 | Grupos | Baixa |
| RF20 | Turmas | Média |
| RF21 | Categorias Crossfit | Baixa |
| RF22 | Box - Turmas | Média |
| RF23 | Caixas | Alta |
| RF24 | Pagar.me | Alta |
| RF25 | Despesas Fixas | Média |
| RF26 | Relatórios | Média |
| RF27 | Prospecção | Média |
| RF28 | Planos | Alta |
| RF29 | Modelos de Contrato | Média |
| RF30 | Tipos de Pagamento | Média |
| RF31 | Bandeiras | Baixa |
| RF32 | Colaboradores | Média |
| RF33 | Funções | Baixa |
| RF34 | Fornecedores | Baixa |
| RF35 | Tipos de Documentos | Baixa |
| RF36 | Atividades | Baixa |
| RF37 | Pontuação | Baixa |
| RF38 | Produtos | Média |
| RF39 | Enquetes | Baixa |
| RF40 | Fichas de Anamnese | Média |
| RF41 | Modelos de Anamnese | Baixa |
| RF42 | Categorias de Anamnese | Baixa |
| RF43 | Perguntas de Anamnese | Baixa |
| RF44 | Inteligência e Automação | Média |
| RF45 | Configurações | Média |
| RF46 | Modelo de Ficha | Baixa |
| RF47 | Aplicativo | Baixa |

---

### 🐞 10. **Gestão de Defeitos**

* Bugs serão documentados com:

  * Título
  * Descrição
  * Passos para reproduzir
  * Evidência (vídeo gravado com a extensão Jam)
  * Gravidade (Crítica, Alta, Média, Baixa)
* Registro no arquivo `3-Relatorio de Bugs.md`.

---

### 📌 11. **Riscos Identificados**

| Risco | Impacto | Mitigação |
| --- | --- | --- |
| Sistema fora do ar ou instável | Alto | Tentar novamente após intervalo e registrar o horário da falha |
| Ambiente compartilhado com a turma: outros alunos podem alterar ou excluir os mesmos registros | Alto | Criar dados de teste com identificação própria (prefixo com o RA) e confirmar o estado antes de cada execução |
| Dados reais de clientes visíveis no ambiente | Alto | Não publicar vídeos que mostrem nome, CPF ou outros dados pessoais; ocultar antes de subir no GitHub |
| Uso de uma única conta de acesso | Médio | Documentar essa limitação no escopo (não é possível validar perfis de permissão diferentes) |
| Funcionalidades dependentes de serviços externos (Pagar.me) | Médio | Testar apenas o comportamento da tela e registrar o que não pôde ser validado |

---

### 📁 12. **Entregáveis**

* Análise de Requisitos (`1-Analise de requistos.md`)
* Plano de Testes (este documento)
* Casos de Teste (pasta `Cenarios de Testes`)
* Evidências de Execução (vídeos organizados por RF)
* Relatório de Bugs (`3-Relatorio de Bugs.md`)
* Relatório Final de Execução (`4-Relatorio dos testes.md`)
