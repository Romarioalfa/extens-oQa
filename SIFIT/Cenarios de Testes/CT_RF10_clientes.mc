## Cenário de teste: Clientes. (RF10)

### Caso de Teste 01: Cadastrar cliente com dados válidos.

| ID | Descrição |
| --- | --- |
| **C10-CT01** | O sistema deve cadastrar um cliente. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário acessa "Clientes" e clica em "Novo Cliente" |
| **E** preenche Nome "Aluno Teste QA", Status, Sexo e Data de Nascimento |
| **QUANDO** clicar em "Cadastrar Cliente" |
| **ENTÃO** o cliente deve ser exibido na lista |

| **Critérios de aceitação** |
| --- |
| O cliente deve ser salvo com código gerado. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 02: Cadastrar cliente sem campos obrigatórios.

| ID | Descrição |
| --- | --- |
| **C10-CT02** | O sistema deve validar os obrigatórios. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário está em "Cadastrar Cliente" |
| **E** deixa os campos obrigatórios em branco |
| **QUANDO** clicar em "Cadastrar Cliente" |
| **ENTÃO** mensagens de validação devem ser exibidas |

| **Critérios de aceitação** |
| --- |
| O cadastro não deve ser concluído. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 03: Pesquisar cliente por nome.

| ID | Descrição |
| --- | --- |
| **C10-CT03** | A busca deve retornar o cliente. |

| **Pré-condições** |
| --- |
| O cliente deve existir. |

| **Passos** |
| --- |
| **DADO** que o usuário está em "Clientes" |
| **E** preenche o campo "Nome" |
| **QUANDO** clicar em "Buscar" |
| **ENTÃO** o cliente deve ser exibido |

| **Critérios de aceitação** |
| --- |
| A busca deve retornar apenas os correspondentes. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 04: Visualizar perfil do cliente.

| ID | Descrição |
| --- | --- |
| **C10-CT04** | O sistema deve exibir o perfil completo. |

| **Pré-condições** |
| --- |
| O cliente deve existir. |

| **Passos** |
| --- |
| **DADO** que o usuário está na lista de clientes |
| **QUANDO** clicar em "Visualizar" |
| **ENTÃO** deve ser exibido o perfil com dados, matrículas, financeiro e ações |

| **Critérios de aceitação** |
| --- |
| O perfil deve carregar sem erros. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 05: Editar dados do cliente.

| ID | Descrição |
| --- | --- |
| **C10-CT05** | O sistema deve atualizar o cadastro. |

| **Pré-condições** |
| --- |
| O cliente de teste deve existir. |

| **Passos** |
| --- |
| **DADO** que o usuário está no perfil do cliente de teste |
| **E** altera o celular |
| **QUANDO** salvar |
| **ENTÃO** o novo celular deve ser exibido |

| **Critérios de aceitação** |
| --- |
| A alteração deve ser persistida. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 06: Excluir cliente de teste.

| ID | Descrição |
| --- | --- |
| **C10-CT06** | O sistema deve excluir o cliente. |

| **Pré-condições** |
| --- |
| O cliente de teste deve existir sem matrícula. |

| **Passos** |
| --- |
| **DADO** que o usuário está na lista de clientes |
| **QUANDO** clicar em "Deletar" no cliente de teste e confirmar |
| **ENTÃO** o cliente não deve mais aparecer na lista |

| **Critérios de aceitação** |
| --- |
| O cliente deve ser removido ou o sistema deve informar o impedimento. |

| **Evidência** |
| --- |
|  |
