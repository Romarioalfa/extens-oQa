# Relatório de Bugs

**Software:** SIFIT - Sistema para Academias

**QA responsável:** Romário Rodrigues RA 14555

**Data:** 17.11.26 (atualizado em 19.11.26)

---

### 🐞 **Bug 01: Filtros Status, Situação, Plano e Personal não alteram a lista de clientes**

| **ID**     | **Descrição** |
| ---------- | ------------- |
| BUG-001    | Na tela Clientes, apenas o filtro Nome altera a listagem. Os filtros Status, Situação, Plano e Personal são ignorados ao clicar em Buscar: a lista continua com todos os clientes cadastrados. |

| **Severidade do Bug** | **Prioridade de Correção** | **Status** |
| :-------------------: | :------------------------: | :--------: |
|         Alta          |            Alta            |   Aberto   |

| **Passo a passo para simular o bug** |
| ------------------------------------ |
| 1. Acessar a tela Clientes |
| 2. Manter os filtros Status = Ativo, Situação = Adimplente, Plano = "aba" e Personal = primeiro da lista |
| 3. Clicar no botão "Buscar" |
| 4. Observar a quantidade de clientes listados (145) |
| 5. Digitar "Raquel" no campo Nome e clicar em "Buscar" novamente |
| 6. Observar o status dos clientes retornados |

|                  **Comportamento Esperado**                  |                           **Comportamento Obtido**                           |
| :----------------------------------------------------------: | :--------------------------------------------------------------------------: |
| A lista deve exibir apenas clientes ativos, adimplentes, do plano e do personal selecionados (27 ativos, igual ao card). | A lista exibe os 145 clientes cadastrados. Na busca por "Raquel", os 4 resultados aparecem como INATIVO e com planos diferentes de "aba", mesmo com Status = Ativo. |

| **Ambiente** |
| ------------------------ |
| Ambiente: https://sifit.centrion.com.br |
| Desktop com Windows. |
| Chrome 157 |
| SIFIT - Sistema para Academias |

| **Funcionalidade Afetada** | **Caso de Teste Relacionado** |
| :------------------------: | :---------------------------: |
| RF10 - Clientes (filtros) | C04-CT04: Validar card de Clientes Ativos |

|                **Evidência(s)**               |
| :-------------------------------------------: |
| [Vídeo](https://jam.dev/c/b1f3d213-9be6-4d3d-870d-47a6ea155805) |

---

### 🐞 **Bug 02: Gráfico "Por Dia da Semana" da Página Inicial aparece vazio**

| **ID**     | **Descrição** |
| ---------- | ------------- |
| BUG-002    | Na seção "Movimento da Academia" da Página Inicial, o gráfico "Por Dia da Semana" não exibe nenhum conteúdo (nem gráfico, nem eixos, nem mensagem de ausência de dados). O gráfico "Por Horário" exibe apenas os eixos, sem nenhuma linha ou barra. |

| **Severidade do Bug** | **Prioridade de Correção** | **Status** |
| :-------------------: | :------------------------: | :--------: |
|         Média         |           Média            | Corrigido  |

| **Passo a passo para simular o bug** |
| ------------------------------------ |
| 1. Fazer login e acessar a Página Inicial |
| 2. Rolar a página até "Movimento da Academia" |
| 3. Aguardar o carregamento e observar os gráficos "Por Horário" e "Por Dia da Semana" |

|                  **Comportamento Esperado**                  |                           **Comportamento Obtido**                           |
| :----------------------------------------------------------: | :--------------------------------------------------------------------------: |
| Os dois gráficos devem ser carregados corretamente ou exibir uma mensagem informando que não há dados. | "Por Dia da Semana" fica em branco e "Por Horário" mostra apenas os eixos, sem aviso ao usuário. |

| **Ambiente** |
| ------------------------ |
| Ambiente: https://sifit.centrion.com.br |
| Desktop com Windows. |
| Chrome 157 |
| SIFIT - Sistema para Academias |

| **Funcionalidade Afetada** | **Caso de Teste Relacionado** |
| :------------------------: | :---------------------------: |
| RF04 - Página Inicial | C04-CT03: Visualizar gráficos de movimento |

|                **Evidência(s)**               |
| :-------------------------------------------: |
| _Bug informado como corrigido em 19.11.26; sem vídeo da falha_ |

---

### 🐞 **Bug 03: Card "Falar com 17 inativos" abre modal com 0 inativos**

| **ID**     | **Descrição** |
| ---------- | ------------- |
| BUG-003    | O card "Ações recomendadas para hoje" informa "17 inativos há mais de 15 dias", mas o modal aberto pelo botão "Enviar mensagem" tem o título "Falar com 0 inativos" e lista alunos com "0 dias" de inatividade. |

| **Severidade do Bug** | **Prioridade de Correção** | **Status** |
| :-------------------: | :------------------------: | :--------: |
|         Média         |           Média            | Corrigido  |

| **Passo a passo para simular o bug** |
| ------------------------------------ |
| 1. Fazer login e acessar a Página Inicial |
| 2. Rolar até "Ações recomendadas para hoje" e observar o card "Falar com 17 inativos" |
| 3. Clicar em "Enviar mensagem" |
| 4. Observar o título do modal e os dias de inatividade dos alunos listados |
| 5. Fechar o modal sem enviar mensagem |

|                  **Comportamento Esperado**                  |                           **Comportamento Obtido**                           |
| :----------------------------------------------------------: | :--------------------------------------------------------------------------: |
| O modal deve listar os mesmos 17 alunos inativos há mais de 15 dias informados no card. | O modal exibe "Falar com 0 inativos" e alunos com "0 dias" de inatividade. |

| **Ambiente** |
| ------------------------ |
| Ambiente: https://sifit.centrion.com.br |
| Desktop com Windows. |
| Chrome 157 |
| SIFIT - Sistema para Academias |

| **Funcionalidade Afetada** | **Caso de Teste Relacionado** |
| :------------------------: | :---------------------------: |
| RF04 - Página Inicial (Ações recomendadas) | Sem caso específico (achado em teste exploratório) |

|                **Evidência(s)**               |
| :-------------------------------------------: |
| _Bug informado como corrigido em 19.11.26; sem vídeo da falha_ |


---

### 🐞 **Bug 04: Preview do modelo de anamnese diz que não há perguntas, mas o modelo tem pergunta cadastrada**

| **ID**     | **Descrição** |
| ---------- | ------------- |
| BUG-004    | Na tela Modelos de Anamnese, os cards "Modelo Hendreu" e "Modelo Demonstracao Manual Sifit" indicam "1 perguntas". Ao clicar em "Preview", o modal exibe "Nenhuma pergunta adicionada ainda." Ao abrir "Editar" do mesmo modelo, a pergunta "quais tipos" aparece em "Modelo atual", e o resumo mostra Perguntas = 1. |

| **Severidade do Bug** | **Prioridade de Correção** | **Status** |
| :-------------------: | :------------------------: | :--------: |
|         Média         |           Média            |   Aberto   |

| **Passo a passo para simular o bug** |
| ------------------------------------ |
| 1. Fazer login e acessar Saúde > Modelos de Anamnese |
| 2. Observar que os dois modelos listados indicam "1 perguntas" |
| 3. Clicar em "Preview" em cada modelo |
| 4. Observar o conteúdo do modal de preview |
| 5. Clicar em "Editar" no Modelo Hendreu e conferir a lista "Modelo atual" |
| 6. Clicar em "Cancelar" sem salvar |

|                  **Comportamento Esperado**                  |                           **Comportamento Obtido**                           |
| :----------------------------------------------------------: | :--------------------------------------------------------------------------: |
| O preview deve exibir as perguntas do modelo (critério do caso C41-CT02: "Todas as perguntas devem aparecer"). | O preview exibe "Nenhuma pergunta adicionada ainda." nos dois modelos, embora os cards indiquem 1 pergunta e o editor do Modelo Hendreu mostre essa pergunta. |

| **Ambiente** |
| ------------------------ |
| Ambiente: https://sifit.centrion.com.br |
| Desktop com Windows. |
| Chrome 157 |
| SIFIT - Sistema para Academias |

| **Funcionalidade Afetada** | **Caso de Teste Relacionado** |
| :------------------------: | :---------------------------: |
| RF41 - Modelos de Anamnese | C41-CT02: Pré-visualizar modelo |

|                **Evidência(s)**               |
| :-------------------------------------------: |
| _Vídeo (Jam) a anexar_ |

---

### 🐞 **Bug 05: Campo "Senha" da aba Biometria exibe a senha em texto puro**

| **ID**     | **Descrição** |
| ---------- | ------------- |
| BUG-005    | Em Configurações > Biometria, o campo "Senha" vem preenchido e exibe o valor digitado em texto legível. Pela inspeção da página, o campo é do tipo "text" e não "password", então qualquer pessoa que veja a tela lê a senha do aparelho biométrico. |

| **Severidade do Bug** | **Prioridade de Correção** | **Status** |
| :-------------------: | :------------------------: | :--------: |
|         Média         |           Média            |   Aberto   |

| **Passo a passo para simular o bug** |
| ------------------------------------ |
| 1. Fazer login e acessar Configurações |
| 2. Clicar na aba "Biometria" |
| 3. Observar o campo "Senha" |
| 4. Não clicar em "Salvar Configurações" |

|                  **Comportamento Esperado**                  |                           **Comportamento Obtido**                           |
| :----------------------------------------------------------: | :--------------------------------------------------------------------------: |
| O campo de senha deve ser mascarado (tipo "password"). | O campo é do tipo "text" e mostra o valor da senha em texto legível. |

| **Ambiente** |
| ------------------------ |
| Ambiente: https://sifit.centrion.com.br |
| Desktop com Windows. |
| Chrome 157 |
| SIFIT - Sistema para Academias |

| **Funcionalidade Afetada** | **Caso de Teste Relacionado** |
| :------------------------: | :---------------------------: |
| RF45 - Configurações (aba Biometria) | Sem caso específico (achado em teste exploratório) |

|                **Evidência(s)**               |
| :-------------------------------------------: |
| [Vídeo](https://jam.dev/c/79f7bcc8-1ba6-4028-9e02-66e040ce63af) |

---

### 🐞 **Bug 06: Grupo muscular é cadastrado com todos os campos obrigatórios em branco**

| **ID**     | **Descrição** |
| ---------- | ------------- |
| BUG-006    | Em Grupos Musculares, ao clicar em Cadastrar grupo e salvar com todos os campos em branco, o grupo aparece na lista mesmo sem os campos obrigatórios. A gravação registra 3 erros 422. |

| **Severidade do Bug** | **Prioridade de Correção** | **Status** |
| :-------------------: | :------------------------: | :--------: |
|         Média         |           Média            |   Aberto   |

| **Passo a passo para simular o bug** |
| ------------------------------------ |
| 1. Fazer login e acessar Grupos Musculares |
| 2. Clicar no botão ⊕ (Cadastrar grupo) |
| 3. Deixar todos os campos em branco |
| 4. Clicar em Salvar |
| 5. Observar a lista e os erros exibidos |

|                  **Comportamento Esperado**                  |                           **Comportamento Obtido**                           |
| :----------------------------------------------------------: | :--------------------------------------------------------------------------: |
| Deve ser exibida mensagem de campo obrigatório e nenhum grupo vazio deve aparecer na lista. | O grupo é salvo e aparece na lista, e a tela apresenta 3 erros 422. |

| **Ambiente** |
| ------------------------ |
| Ambiente: https://sifit.centrion.com.br |
| Desktop com Windows. |
| Chrome 157 |
| SIFIT - Sistema para Academias |

| **Funcionalidade Afetada** | **Caso de Teste Relacionado** |
| :------------------------: | :---------------------------: |
| RF17 - Grupos Musculares | C17-CT02: Cadastrar grupo muscular sem nome |

|                **Evidência(s)**               |
| :-------------------------------------------: |
| [Vídeo](https://jam.dev/c/38b93b83-9fd5-4336-85c7-188963db1507) |

---

### 🐞 **Bug 07: Modelo de ficha não é salvo mesmo com os campos preenchidos corretamente**

| **ID**     | **Descrição** |
| ---------- | ------------- |
| BUG-007    | Em Modelo Ficha, ao preencher Nome do Modelo e Personal corretamente e clicar em Criar Modelo, o modelo não é salvo e o sistema apresenta erro 400. |

| **Severidade do Bug** | **Prioridade de Correção** | **Status** |
| :-------------------: | :------------------------: | :--------: |
|         Alta         |           Alta            |   Aberto   |

| **Passo a passo para simular o bug** |
| ------------------------------------ |
| 1. Fazer login e acessar Modelo Ficha |
| 2. Clicar no botão ⊕ (Nova Ficha) |
| 3. Preencher Nome do Modelo e Personal |
| 4. Clicar em Criar Modelo |
| 5. Observar a lista e a mensagem de erro |

|                  **Comportamento Esperado**                  |                           **Comportamento Obtido**                           |
| :----------------------------------------------------------: | :--------------------------------------------------------------------------: |
| O modelo deve ser salvo e aparecer na lista. | O modelo não é salvo e o sistema apresenta erro 400. |

| **Ambiente** |
| ------------------------ |
| Ambiente: https://sifit.centrion.com.br |
| Desktop com Windows. |
| Chrome 157 |
| SIFIT - Sistema para Academias |

| **Funcionalidade Afetada** | **Caso de Teste Relacionado** |
| :------------------------: | :---------------------------: |
| RF46 - Modelo de Ficha | C46-CT01: Criar modelo de ficha |

|                **Evidência(s)**               |
| :-------------------------------------------: |
| [Vídeo](https://jam.dev/c/e1bbd905-d130-43aa-8d9b-48b281b31ce2) |

---

### 🐞 **Bug 08: Objetivo de treino é cadastrado com os campos obrigatórios em branco**

| **ID**     | **Descrição** |
| ---------- | ------------- |
| BUG-008    | Em Objetivos Treino, ao clicar em Novo Objetivo e salvar sem preencher os campos obrigatórios, o objetivo é salvo. |

| **Severidade do Bug** | **Prioridade de Correção** | **Status** |
| :-------------------: | :------------------------: | :--------: |
|         Média         |           Média            |   Aberto   |

| **Passo a passo para simular o bug** |
| ------------------------------------ |
| 1. Fazer login e acessar Objetivos Treino |
| 2. Clicar em Novo Objetivo |
| 3. Deixar o nome em branco |
| 4. Clicar em Salvar |
| 5. Observar a lista |

|                  **Comportamento Esperado**                  |                           **Comportamento Obtido**                           |
| :----------------------------------------------------------: | :--------------------------------------------------------------------------: |
| Deve ser exibida mensagem informando que o nome é obrigatório e o objetivo não deve ser salvo. | O objetivo é salvo sem os campos obrigatórios preenchidos. |

| **Ambiente** |
| ------------------------ |
| Ambiente: https://sifit.centrion.com.br |
| Desktop com Windows. |
| Chrome 157 |
| SIFIT - Sistema para Academias |

| **Funcionalidade Afetada** | **Caso de Teste Relacionado** |
| :------------------------: | :---------------------------: |
| RF18 - Objetivos de Treino | C18-CT02: Cadastrar objetivo sem nome |

|                **Evidência(s)**               |
| :-------------------------------------------: |
| [Vídeo](https://jam.dev/c/11ba09fb-00e1-4fae-bc62-fa6faded32f3) |

---

### 🐞 **Bug 09: Excluir grupo falha com erro 500 e o grupo não é removido**

| **ID**     | **Descrição** |
| ---------- | ------------- |
| BUG-009    | Em Grupos, ao clicar na lixeira do grupo de teste, o grupo não é deletado e a página apresenta erro 500. |

| **Severidade do Bug** | **Prioridade de Correção** | **Status** |
| :-------------------: | :------------------------: | :--------: |
|         Alta         |           Média            |   Aberto   |

| **Passo a passo para simular o bug** |
| ------------------------------------ |
| 1. Fazer login e acessar Grupos |
| 2. Localizar o grupo de teste na lista |
| 3. Clicar na lixeira da linha do grupo |
| 4. Observar a lista e a página |

|                  **Comportamento Esperado**                  |                           **Comportamento Obtido**                           |
| :----------------------------------------------------------: | :--------------------------------------------------------------------------: |
| O grupo deve sair da lista. | O grupo não é removido e a página apresenta erro 500. |

| **Ambiente** |
| ------------------------ |
| Ambiente: https://sifit.centrion.com.br |
| Desktop com Windows. |
| Chrome 157 |
| SIFIT - Sistema para Academias |

| **Funcionalidade Afetada** | **Caso de Teste Relacionado** |
| :------------------------: | :---------------------------: |
| RF19 - Grupos | C19-CT03: Excluir grupo |

|                **Evidência(s)**               |
| :-------------------------------------------: |
| [Vídeo](https://jam.dev/c/b29d955d-144f-41d8-b7e9-4d8e4a831a14) |

---

### 🐞 **Bug 10: Turma é cadastrada com horário inicial depois do horário final**

| **ID**     | **Descrição** |
| ---------- | ------------- |
| BUG-010    | Em Turmas, o cadastro é aceito quando o horário inicial é posterior ao horário final (10:00 a 08:00), sem mensagem de horário inválido. |

| **Severidade do Bug** | **Prioridade de Correção** | **Status** |
| :-------------------: | :------------------------: | :--------: |
|         Média         |           Média            |   Aberto   |

| **Passo a passo para simular o bug** |
| ------------------------------------ |
| 1. Fazer login e acessar Turmas |
| 2. Clicar em Cadastrar Turma |
| 3. Preencher os dados e informar horário de 10:00 a 08:00 |
| 4. Clicar em Salvar |
| 5. Observar a lista |

|                  **Comportamento Esperado**                  |                           **Comportamento Obtido**                           |
| :----------------------------------------------------------: | :--------------------------------------------------------------------------: |
| Deve ser exibida mensagem de horário inválido e a turma não deve ser salva. | A turma é cadastrada com o horário inicial depois do final. |

| **Ambiente** |
| ------------------------ |
| Ambiente: https://sifit.centrion.com.br |
| Desktop com Windows. |
| Chrome 157 |
| SIFIT - Sistema para Academias |

| **Funcionalidade Afetada** | **Caso de Teste Relacionado** |
| :------------------------: | :---------------------------: |
| RF20 - Turmas | C20-CT02: Horário final menor que o inicial |

|                **Evidência(s)**               |
| :-------------------------------------------: |
| [Vídeo](https://jam.dev/c/c14a3c8b-44a5-4b65-b364-fa35da3d80e5) |

---

### 🐞 **Bug 11: Gráfico de Recebimentos do Pagar.me não muda ao alterar o período**

| **ID**     | **Descrição** |
| ---------- | ------------- |
| BUG-011    | Em Pagar.me, ao trocar o período no seletor do cartão Recebimentos, o gráfico continua o mesmo. |

| **Severidade do Bug** | **Prioridade de Correção** | **Status** |
| :-------------------: | :------------------------: | :--------: |
|         Média         |           Média            |   Aberto   |

| **Passo a passo para simular o bug** |
| ------------------------------------ |
| 1. Fazer login e acessar Pagar.me |
| 2. Observar o gráfico Recebimentos (padrão: Últimos 30 dias) |
| 3. Alterar o período no seletor |
| 4. Observar o gráfico e os valores |

|                  **Comportamento Esperado**                  |                           **Comportamento Obtido**                           |
| :----------------------------------------------------------: | :--------------------------------------------------------------------------: |
| Os valores e o gráfico devem refletir o período selecionado (critério: o período deve ser respeitado). | O gráfico não muda depois de alterar o período do filtro. |

| **Ambiente** |
| ------------------------ |
| Ambiente: https://sifit.centrion.com.br |
| Desktop com Windows. |
| Chrome 157 |
| SIFIT - Sistema para Academias |

| **Funcionalidade Afetada** | **Caso de Teste Relacionado** |
| :------------------------: | :---------------------------: |
| RF24 - Pagar.me | C24-CT02: Filtrar transações por período |

|                **Evidência(s)**               |
| :-------------------------------------------: |
| [Vídeo](https://jam.dev/c/816829de-b094-43f9-9557-7485c120ddb7) |

---

### 🐞 **Bug 12: Relatório é gerado com Data Início posterior à Data Fim**

| **ID**     | **Descrição** |
| ---------- | ------------- |
| BUG-012    | Em Relatórios, ao informar Data Início depois da Data Fim e clicar em Gerar Relatório, o relatório é gerado, sem mensagem de período inválido. |

| **Severidade do Bug** | **Prioridade de Correção** | **Status** |
| :-------------------: | :------------------------: | :--------: |
|         Baixa         |           Baixa            |   Aberto   |

| **Passo a passo para simular o bug** |
| ------------------------------------ |
| 1. Fazer login e acessar Relatórios |
| 2. Escolher um tipo de relatório |
| 3. Informar Data Início posterior à Data Fim |
| 4. Clicar em Gerar Relatório |

|                  **Comportamento Esperado**                  |                           **Comportamento Obtido**                           |
| :----------------------------------------------------------: | :--------------------------------------------------------------------------: |
| Deve ser exibida mensagem de período inválido e o relatório não deve ser gerado. | O relatório é gerado mesmo com a data de início depois da data final. |

| **Ambiente** |
| ------------------------ |
| Ambiente: https://sifit.centrion.com.br |
| Desktop com Windows. |
| Chrome 157 |
| SIFIT - Sistema para Academias |

| **Funcionalidade Afetada** | **Caso de Teste Relacionado** |
| :------------------------: | :---------------------------: |
| RF26 - Relatórios | C26-CT04: Período inválido |

|                **Evidência(s)**               |
| :-------------------------------------------: |
| [Vídeo](https://jam.dev/c/8e079e30-3e71-4ef1-8b65-f6ab9171e40b) |

---

### 🐞 **Bug 13: Sistema permite abrir mais de um caixa simultaneamente**

| **ID**     | **Descrição** |
| ---------- | ------------- |
| BUG-013    | Em Caixas, com um caixa já aberto, clicar novamente em Abrir Caixa permite abrir outro caixa ao mesmo tempo. |

| **Severidade do Bug** | **Prioridade de Correção** | **Status** |
| :-------------------: | :------------------------: | :--------: |
|         Alta         |           Média            |   Aberto   |

| **Passo a passo para simular o bug** |
| ------------------------------------ |
| 1. Fazer login e acessar Caixas |
| 2. Com um caixa aberto, clicar em Abrir Caixa novamente |
| 3. Salvar |
| 4. Observar a lista de caixas |

|                  **Comportamento Esperado**                  |                           **Comportamento Obtido**                           |
| :----------------------------------------------------------: | :--------------------------------------------------------------------------: |
| Deve ser exibida mensagem de impedimento, pois não deve existir dois caixas abertos. | O sistema permite abrir mais de um caixa de forma simultânea. |

| **Ambiente** |
| ------------------------ |
| Ambiente: https://sifit.centrion.com.br |
| Desktop com Windows. |
| Chrome 157 |
| SIFIT - Sistema para Academias |

| **Funcionalidade Afetada** | **Caso de Teste Relacionado** |
| :------------------------: | :---------------------------: |
| RF23 - Caixas | C23-CT02: Abrir segundo caixa |

|                **Evidência(s)**               |
| :-------------------------------------------: |
| [Vídeo](https://jam.dev/c/56021bd9-980e-454b-80f7-d5762e02815d) |

---

### 🐞 **Bug 14: Fechamento de caixa exibe erro genérico após Buscar Contas**

| **ID**     | **Descrição** |
| ---------- | ------------- |
| BUG-014    | Em Caixas, ao visualizar um caixa aberto e clicar em Buscar Contas, o sistema exibe um erro genérico e o caixa não pode ser fechado. |

| **Severidade do Bug** | **Prioridade de Correção** | **Status** |
| :-------------------: | :------------------------: | :--------: |
|         Alta         |           Alta            |   Aberto   |

| **Passo a passo para simular o bug** |
| ------------------------------------ |
| 1. Fazer login e acessar Caixas |
| 2. Abrir o caixa aberto de teste (lupa da linha) |
| 3. Clicar em Buscar Contas |
| 4. Tentar confirmar o fechamento |

|                  **Comportamento Esperado**                  |                           **Comportamento Obtido**                           |
| :----------------------------------------------------------: | :--------------------------------------------------------------------------: |
| O fechamento deve ser confirmado e o status deve mudar para fechado, com os valores. | Depois da busca de contas aparece um erro genérico e o caixa não é fechado. |

| **Ambiente** |
| ------------------------ |
| Ambiente: https://sifit.centrion.com.br |
| Desktop com Windows. |
| Chrome 157 |
| SIFIT - Sistema para Academias |

| **Funcionalidade Afetada** | **Caso de Teste Relacionado** |
| :------------------------: | :---------------------------: |
| RF23 - Caixas | C23-CT03: Fechar caixa |

|                **Evidência(s)**               |
| :-------------------------------------------: |
| [Vídeo](https://jam.dev/c/8d308d6e-a360-46b8-8bd0-95d2f2ce0374) |

---

### 🐞 **Bug 15: Nova Anamnese não permite pesquisar o aluno e o site apresenta erro 500**

| **ID**     | **Descrição** |
| ---------- | ------------- |
| BUG-015    | Em Fichas de Anamnese, ao cadastrar uma nova ficha, a pesquisa do aluno não funciona e o site apresenta erro 500, impedindo o cadastro da ficha. |

| **Severidade do Bug** | **Prioridade de Correção** | **Status** |
| :-------------------: | :------------------------: | :--------: |
|         Alta          |            Alta            |   Aberto   |

| **Passo a passo para simular o bug** |
| ------------------------------------ |
| 1. Fazer login e acessar Fichas de Anamnese |
| 2. Clicar em Nova Anamnese |
| 3. Tentar pesquisar o aluno para a ficha |
| 4. Observar o resultado da pesquisa e a mensagem de erro |

|                  **Comportamento Esperado**                  |                           **Comportamento Obtido**                           |
| :----------------------------------------------------------: | :--------------------------------------------------------------------------: |
| O aluno deve ser encontrado na pesquisa e a ficha de anamnese deve ser cadastrada. | A pesquisa do aluno não funciona, o site apresenta erro 500 e a ficha não é cadastrada. |

| **Ambiente** |
| ------------------------ |
| Ambiente: https://sifit.centrion.com.br |
| Desktop com Windows. |
| Chrome 157 |
| SIFIT - Sistema para Academias |

| **Funcionalidade Afetada** | **Caso de Teste Relacionado** |
| :------------------------: | :---------------------------: |
| RF40 - Fichas de Anamnese | C40-CT01: Aplicar anamnese |

|                **Evidência(s)**               |
| :-------------------------------------------: |
| [Vídeo](https://jam.dev/c/99939b14-4ffb-4afa-93f5-520ea30a1522) |
