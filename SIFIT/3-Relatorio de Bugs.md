
---

###  **Bug 16: Link "Esqueci minha senhas" não faz nada ao ser clicado**

| **ID**     | **Descrição** |
| ---------- | ------------- |
| BUG-016    | Na tela de login, o linnk "Esqueci minha senha" não abre nenhuma tela ou janela de recuperação. O clique não tem efeito. |

| **Severidade do Bug** | **Prioridade de Correção** | **Status** |
| :-------------------: | :------------------------: | :--------: |
|         Média         |           Média            |   Aberto   |

| **Passo a passo para simular o bug** |
| ------------------------------------ |
| 1. Acessar a página de login do SIFIT |
| 2. Clicar em "Esqueci minha senha" |
| 3. Observar a tela |

|                  **Comportamento Esperado**                  |                           **Comportamento Obtido**                           |
| :----------------------------------------------------------: | :--------------------------------------------------------------------------: |
| Deve ser exibida a tela ou janela de recuperação de senha. | Nada acontece. O usuário continua na tela de login. |

| **Ambiente** |
| ------------------------ |
| Ambiente: https://sifit.centrion.com.br |
| Desktop com Windows. |
| Chrome 157 |
| SIFIT - Sistema para Acadeemias |

| **Funcionalidade Afetada** | **Caso de Teste Relacionado** |
| :------------------------: | :---------------------------: |
| RF01 - Autenticação de Usuário | C01-CT05: Acessar a recuperação de senha |

|                **Evidência(s)**               |
| :-------------------------------------------: |
| [Vídeo](https://jam.dev/c/f58c02bc-c481-41c3-b5df-154a9b4307bd) |

---

###  **Bug 17: "Meu perfil" abre uma página de modelo em vez dos dados do usuário**

| **ID**     | **Descrição** |
| ---------- | ------------- |
| BUG-017    | No menu do usuário, a opção "Meu perfil" abre uma página de modelo com os textos "Hello Jesse" e "Jessica Jones", e não os dados do usuário logado. |

| **Severidade do Bug** | **Prioridade de Correção** | **Status** |
| :-------------------: | :------------------------: | :--------: |
|         Alta          |           Alta             |   Aberto   |

| **Passo a passo para simular o bug** |
| ------------------------------------ |
| 1. Fazer login no SIFIT |
| 2. Clicar no nome do usuário no canto superior direito |
| 3. Clicar em "Meu perfil" |
| 4. Observar os dados exibidos |

|                  **Comportamento Esperado**                  |                           **Comportamento Obtido**                           |
| :----------------------------------------------------------: | :--------------------------------------------------------------------------: |
| Devem ser exibidos os dados do usuário logado. | Abre uma página de modelo com "Hello Jesse" / "Jessica Jones". |

| **Ambiente** |
| ------------------------ |
| Ambiente: https://sifit.centrion.com.br |
| Desktop com Windows. |
| Chrome 157 |
| SIFIT - Sistema para Academias |

| **Funcionalidade Afetaada** | **Caso de Teste Relacionado** |
| :------------------------: | :---------------------------: |
| RF02 - Menu do Usuário | C02-CT02: Visualizar "Meu perfil" |

|                **Evidência(s)**               |
| :-------------------------------------------: |
| [Vídeo](https://jam.dev/c/80d2a766-2d2a-4cc3-902b-70e6d56891d0) |

---

###  **Bug 18: "Segurança" e "Preferências" abrem as Configurações da academia**

| **ID**     | **Descrição** |
| ---------- | ------------- |
| BUG-018    | No menu do usuário, as opções "Segurança" e "Preferências" abrem a tela geral de Configurações da academia, e não a alteração de senha do usuário. |

| **Severidade do Bug** | **Prioridade de Correção** | **Status** |
| :-------------------: | :------------------------: | :--------: |
|         Média         |           Média            |   Aberto   |

| **Passo a passo para simular o bug** |
| ------------------------------------ |
| 1. Fazer login no SIFIT |
| 2. Clicar no nome do usuário no canto superior direito |
| 3. Clicar em "Segurança" |
| 4. Observar a tela que abre |

|                  **Comportamento Esperado**                  |                           **Comportamento Obtido**                           |
| :----------------------------------------------------------: | :--------------------------------------------------------------------------: |
| Deve ser exibida a tela de alteração de senhha do usuário. | Abre a tela de Configurações da academia. |

| **Ambiente** |
| ------------------------ |
| Ambiente: https://sifit.centrion.com.br |
| Desktop com Windows. |
| Chrome 157 |
| SIFIT - Sistema para Academias |

| **Funcionalidade Afetada** | **Caso de Teste Relacionado** |
| :------------------------: | :---------------------------: |
| RF02 - Menu do Usuário | C02-CT03: Acessar "Segurança" |

|                **Evidência(s)**               |
| :-------------------------------------------: |
| [Vídeo](https://jam.dev/c/04d2ae8a-f1ff-46f3-8c68-27a34a2aa8a4) |

---

###  **Bug 19: Tipo de pagamento com "Escolher Bandeira = Sim" não permite escolher a bandeira**
| **ID**     | **Descrição** |
| ---------- | ------------- |
| BUG-019    | Em Tipos de Pagamento, ao mfarcar "Escolher Bandeira = Sim", o formulário não mostra nenhuma opção para escolher qual bandeira vincular. O tipo é salvo sem o vínculo. |

| **Severidade do Bug** | **Prioridade de Correção** | **Status** |
| :-------------------: | :------------------------: | :--------: |
|         Média         |           Média            |   Aberto   |

| **Passo a passo para simular o bug** |
| ------------------------------------ |
| 1. Fazer login e acessar Tipos de Pagamento |
| 2. Clicar em Novo |
| 3. Preencher o nome e marcar "Escolher Bandeira = Sim" |
| 4. Procurar a opção de escolher a bandeira |
| 5. Clicar em Salvar |

|                  **Comportamento Esperado**                  |                           **Comportamento Obtido**                           |
| :----------------------------------------------------------: | :--------------------------------------------------------------------------: |
| Deve ser possível escolher a bandeira e salvar o vínculo. | Não aparece nenhuma opção de bandeira e o tipo é salvo sem vínculo. |

| **Ambiente** |
| ------------------------ |
| Ambiente: https://sifitalfa.centrion.com.br |
| Desktop com Windows. |
| Chrome 157 |
| SIFIT - Sistema para Academias |

| **Funcionalidade Afetada** | **Casos de Teste Relacionado** |
| :------------------------: | :---------------------------: |
| RF30 - Tipos de Pagamento | C30-CT02: Vincular bandeira |

|                **Evidência(s)**               |
| :-------------------------------------------: |
| [Vídeo](https://jam.dev/c/8b4ac80b-ba19-4ca0-8af6-51493fcb18c6) |

---

###  **Bug 20: Bandeira cadastrada não aparece na lista**

| **ID**     | **Descrição** |
| ---------- | ------------- |
| BUG-020    | Em Bandeiras, ao cadasstrar uma bandeira (com ou sem parcelas), o sistema não mostra erro, mas a bandeira não aparece na lista depois de salvar. |

| **Severidade do Bug** | **Prioridade de Correção** | **Status** |
| :-------------------: | :------------------------: | :--------: |
|         Alta          |           Alta             |   Aberto   |

| **Passo a passo para simular o bug** |
| ------------------------------------ |
| 1. Fazer login e acessar Bandeiras |
| 2. Clicar em Nova Bandeira |
| 3. Preencher o nome (e uma parcela com taxa, no caso CT02) |
| 4. Clicar em Salvar |
| 5. Procurar a bandeira na lista |

|                  **Comportamento Espeerado**                  |                           **Comportamento Obtido**                           |
| :----------------------------------------------------------: | :--------------------------------------------------------------------------: |
| A bandeira deve aparecer na lista depois de salva. | A bandeira não aparece na lista e nenhuma mensagem é exibida. |

| **Ambiente** |
| ------------------------ |
| Ambiente: https://sifitalfa.centrion.com.br |
| Desktop com Windows. |
| Chrome 157 |
| SIFIT - Sistema para Academias |

| **Funcionalidade Afetada** | **Caso de Teste Relacionado** |
| :------------------------: | :---------------------------: |
| RF31 - Bandeiras | C31-CT01: Cadastrar bandeira e C31-CT02: Adicionar parcelas |

|                **Evidência(s)**               |
| :-------------------------------------------: |
| [Vídeo CT01](https://jam.dev/c/60e6cba7-e3fd-42e9-a219-43aa8ab7d27d) · [Vídeo CT02](https://jam.dev/c/d15e6a4b-5b87-4c71-90ba-0f1e75eac44e) |

---

###  **Bug 21: Cadastro de fornecedor sempre retorna erro 500**

| **ID**     | **Descrição** |
| ---------- | ------------- |
| BUG-021    | Em Fornecedor es, ao salvar um fornecedor com os dados válidos, aparece "Erro ao salvar fornecedor." e o servidor responde erro 500 ("Erro interno inesperado"). Com CNPJ inválido acontece o mesmo erro 500, em vez de uma mensagem de validação. |

| **Severidade do Bug** | **Prioridade de Correção** | **Status** |
| :-------------------: | :------------------------: | :--------: |
|         Alta          |           Alta             |   Aberto   |

| **Passo a passso para simular o bug** |
| ------------------------------------ |
| 1. Fazer login e acessar Fornecedores |
| 2. Clicar em Novo Fornecedor |
| 3. Preencher os dados válidos |
| 4. Clicar em Salvar |
| 5. Observar a mensagem e a lista |

|                  **Comportamento Esperado**                  |                           **Comportamento Obtido**                           |
| :----------------------------------------------------------: | :--------------------------------------------------------------------------: |
| O fornecedor deve ser salvo e aparecer na lista. Com CNPJ inválido, deve aparecer mensagem de CNPJ inválido. | Aparece "Erro ao salvar fornecedor." (erro 500) e o fornecedor não é salvo. |

| **Ambiente** |
| ------------------------ |
| Ambiente: https://sifitalfa.centrion.com.br |
| Desktop com Windows. |
| Chrome 157 |
| SIFIT - Sistema para Academias |

| **Funcionalidade Afetada** | **Caso de Teste Relacionado** |
| :------------------------: | :---------------------------: |
| RF34 - Fornecedores | C34-CT01: Cadastrar fornecedor jurídico e C34-CT03: CNPJ inválido |

|                **Evidência(s)**               |
| :-------------------------------------------: |
| [Vídeo CT01](https://jam.dev/c/3cbd0857-281b-41c8-999e-3818078ab2da) · [Vídeo CT03](https://jam.dev/c/a9bf3cee-1c4b-4885-af38-600d78a785d6) |

---

###  **Bug 22: Atiividade é cadastrada com todos os campos em branco**

| **ID**     | **Descrição** |
| ---------- | ------------- |
| BUG-022    | Em Atividades, ao clicar em Nova Atividade e salvar com todos os campos em branco, uma atividade vazia é criada na lista. |

| **Severidade do Bug** | **Prioridade de Correção** | **Status** |
| :-------------------: | :------------------------: | :--------: |
|         Média         |           Média            |   Aberto   |

| **Passo a passo para simmular o bug** |
| ------------------------------------ |
| 1. Fazer login e acessar Atividades |
| 2. Clicar em Nova Atividade |
| 3. Deixar todos os campos em branco |
| 4. Clicar em Salvar |
| 5. Observar a lista |

|                  **Comportamento Esperado**                  |                           **Comportamento Obtido**                           |
| :----------------------------------------------------------: | :--------------------------------------------------------------------------: |
| Deve ser exibida mensagem de campo obrigatório e nenhuma atividade vazia deve ser criada. | A atividade vazia é salva e aparece na lista. |

| **Ambiente** |
| ------------------------ |
| Ambiente: https://sifitalfa.centrion.com.br |
| Desktop com Windows. |
| Chrome 157 |
| SIFIT - Sistema para Academias |

| **Funcionalidade Afetada** | **Caso de Teste Relacionado** |
| :------------------------: | :---------------------------: |
| RF36 - Atividades | C36-CT02: Cadastrar atividade sem nome |

|                **Evidência(s)**               |
| :-------------------------------------------: |
| [Vídeo](https://jam.dev/c/872acaba-9165-47cd-92f9-d5a1b5c35521) |

---

###  **Bug 23: Prod uto é cadastrado com todos os campos em branco**

| **ID**     | **Descrição** |
| ---------- | ------------- |
| BUG-023    | Em Produtos, ao clicar em Novo e salvar com todos os campos em branco, um produto vazio é criado na lista. |

| **Severidade do Bug** | **Prioridade de Correção** | **Status** |
| :-------------------: | :------------------------: | :--------: |
|         Média         |           Média            |   Aberto   |

| **Passo a passo para simular o bug** |
| ------------------------------------ |
| 1. Fazer login e acessar Produtos |
| 2. Clicar em Novo |
| 3. Deixar todos os campos em branco |
| 4. Clicar em Salvar |
| 5. Observar a lista |

|                  **Comportamento Esperado**                  |                           **Comportamento Obtido**                           |
| :----------------------------------------------------------: | :--------------------------------------------------------------------------: |
| Deve ser exibida mensagem de campo obrigatório e nenhum produto vazio deve ser criado. | O produto vazio é salvo e aparece na lista. |

| **Ambiente** |
| ------------------------ |
| Ambiente: https://sifit.centrion.com.br |
| Desktop com Windows. |
| Chrome 157 |
| SIFIT - Sistema para Academias |

| **Funcionalidade Afetada** | **Caso de Teste Relacionado** |
| :------------------------: | :---------------------------: |
| RF38 - Produtos | C38-CT02: Cadastrar produto em branco |

|                **Evidência(s)**               |
| :-------------------------------------------: |
| [Vídeo](https://jam.dev/c/4b6b21b8-ee68-4fab-89f5-84ecc51d6751) |

---

### 🐞 **Bug 24: Salvar pergunta de anamnese sem texto retorna erro 500**

| **ID**     | **Descrição** |
| ---------- | ------------- |
| BUG-024    | Em Perguntas de Anamnese, ao salvar uma pergunta sem texto, aparece só "Erro ao salvar pergunta." e o servidor responde erro 500, em vez de uma mensagem dizendo que a pergunta é obrigatória. |

| **Severidade do Bug** | **Prioridade de Correção** | **Status** |
| :-------------------: | :------------------------: | :--------: |
|         Média         |           Média            |   Aberto   |

| **Passo a passo para simular o bug** |
| ------------------------------------ |
| 1. Fazer login e acessar Perguntas de Anamnese |
| 2. Clicar em Nova Pergunta |
| 3. Deixar o texto da pergunta em branco |
| 4. Clicar em Salvar |
| 5. Observar a mensagem exibida |

|                  **Comportamento Esperado**                  |                           **Comportamento Obtido**                           |
| :----------------------------------------------------------: | :--------------------------------------------------------------------------: |
| Deve ser exibida mensagem informando que a pergunta é obrigatória. | Aparece "Erro ao salvar pergunta." e o servidor responde erro 500. |

| **Ambiente** |
| ------------------------ |
| Ambiente: https://sifit.centrion.com.br |
| Desktop com Windows. |
| Chrome 157 |
| SIFIT - Sistema para Academias |

| **Funcionalidade Afetada** | **Caso de Teste Relacionado** |
| :------------------------: | :---------------------------: |
| RF43 - Perguntas de Anamnese | C43-CT02: Pergunta sem texto |

|                **Evidência(s)**               |
| :-------------------------------------------: |
| [Vídeo](https://jam.dev/c/adda7c7c-c00f-4f00-bb9c-3c499670fc85) |
