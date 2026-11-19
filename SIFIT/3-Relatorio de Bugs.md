# Relatório de Bugs

**Software:** SIFIT - Sistema para Academias

**QA responsável:** Romário Rodrigues RA 14555

**Data:** 17.11.26 (atualizado em 18.11.26)

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
| _Vídeo (Jam) a anexar_ |

---

### 🐞 **Bug 02: Gráfico "Por Dia da Semana" da Página Inicial aparece vazio**

| **ID**     | **Descrição** |
| ---------- | ------------- |
| BUG-002    | Na seção "Movimento da Academia" da Página Inicial, o gráfico "Por Dia da Semana" não exibe nenhum conteúdo (nem gráfico, nem eixos, nem mensagem de ausência de dados). O gráfico "Por Horário" exibe apenas os eixos, sem nenhuma linha ou barra. |

| **Severidade do Bug** | **Prioridade de Correção** | **Status** |
| :-------------------: | :------------------------: | :--------: |
|         Média         |           Média            |   Aberto   |

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
| _Vídeo (Jam) a anexar_ |

---

### 🐞 **Bug 03: Card "Falar com 17 inativos" abre modal com 0 inativos**

| **ID**     | **Descrição** |
| ---------- | ------------- |
| BUG-003    | O card "Ações recomendadas para hoje" informa "17 inativos há mais de 15 dias", mas o modal aberto pelo botão "Enviar mensagem" tem o título "Falar com 0 inativos" e lista alunos com "0 dias" de inatividade. |

| **Severidade do Bug** | **Prioridade de Correção** | **Status** |
| :-------------------: | :------------------------: | :--------: |
|         Média         |           Média            |   Aberto   |

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
| _Vídeo (Jam) a anexar_ |


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
| _Vídeo (Jam) a anexar_ |
