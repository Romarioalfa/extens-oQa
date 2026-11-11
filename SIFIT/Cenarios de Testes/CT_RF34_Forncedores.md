


## Cenário de teste: Fornecedores. (RF34)

### Caso de Teste 01: Cadastrar fornecedor jurídico.

| ID | Descrição |
| --- | --- |
| **C34-CT01** | O sistema deve cadastrar o fornecedor. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário clica em "Novo Fornecedor" e escolhe "Jurídica" |
| **E** preenche Nome e CNPJ válido |
| **QUANDO** salvar |
| **ENTÃO** o fornecedor deve aparecer na lista |

| **Critérios de aceitação** |
| --- |
| O fornecedor deve ser salvo. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 02: Fornecedor sem nome.

| ID | Descrição |
| --- | --- |
| **C34-CT02** | O sistema deve exigir o nome. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário está em "Novo Fornecedor" |
| **E** deixa "Nome *" em branco |
| **QUANDO** salvar |
| **ENTÃO** deve ser exibida validação |

| **Critérios de aceitação** |
| --- |
| O fornecedor não deve ser salvo. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 03: CNPJ inválido.

| ID | Descrição |
| --- | --- |
| **C34-CT03** | O sistema deve validar o CNPJ. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário está cadastrando fornecedor jurídico |
| **E** preenche CNPJ "11.111.111/1111-11" |
| **QUANDO** salvar |
| **ENTÃO** deve ser exibida mensagem de CNPJ inválido |

| **Critérios de aceitação** |
| --- |
| O fornecedor não deve ser salvo com CNPJ inválido. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 04: Editar fornecedor.

| ID | Descrição |
| --- | --- |
| **C34-CT04** | O sistema deve atualizar o fornecedor. |

| **Pré-condições** |
| --- |
| O fornecedor de teste deve existir. |

| **Passos** |
| --- |
| **DADO** que o usuário clica em "Visualizar" e "Editar" |
| **E** altera o telefone |
| **QUANDO** salvar |
| **ENTÃO** o novo telefone deve aparecer |

| **Critérios de aceitação** |
| --- |
| A alteração deve persistir. |

| **Evidência** |
| --- |
|  |
