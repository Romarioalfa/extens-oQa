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
| [Vídeo](https://jam.dev/c/85068325-27e4-45ac-86db-22208bd14e0f) |

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
| [Vídeo](https://jam.dev/c/c37c287d-e37a-4283-83dc-3e14954cbbdf) |

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
|  [Vídeo](https://jam.dev/c/4add87bf-4500-4c1c-8c19-472ee7c076b0)|

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
| [Vídeo](https://jam.dev/c/decb0922-cad0-48b6-a200-25733e5ba999) |

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
| [Vídeo](https://jam.dev/c/cc800d19-cca9-4c91-b610-1b3617f2cdaf) |

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
|  [Vídeo](https://jam.dev/c/54b30032-739d-4aa2-bb83-30a7455544ed)|
