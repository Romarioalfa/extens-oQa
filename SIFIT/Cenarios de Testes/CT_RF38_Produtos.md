

## Cenário de teste: Produtos. (RF38)

### Caso de Teste 01: Cadastrar produto.

| ID | Descrição |

| --- | --- |
| **C38-CT01** | O sistema deve cadastrar o produto. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário clica em "Novo" |
| **E** preenche Nome, Tipo e Preço |
| **QUANDO** salvar |
| **ENTÃO** o produto deve aparecer na lista |

| **Critérios de aceitação** |
| --- |
| O produto deve ser salvo. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 02: Cadastrar produto em branco.

| ID | Descrição |
| --- | --- |
| **C38-CT02** | O sistema não deve salvar produto sem dados. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário clica em "Novo" |
| **E** deixa todos os campos em branco |
| **QUANDO** clicar em "Salvar" |

| **ENTÃO** deve ser exibida mensagem de campo obrigatório |

| **Critérios de aceitação** |
| --- |
| Nenhum produto vazio deve ser criado na lista. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 03: Excluir produto.

| ID | Descrição |
| --- | --- |
| **C38-CT03** | O sistema deve excluir o produto. |

| **Pré-condições** |
| --- |
| O produto de teste deve existir. |

| **Passos** |
| --- |
| **DADO** que o usuário está na lista |
| **QUANDO** clicar em "Deletar" |
| **ENTÃO** o produto deve sair da lista |

| **Critérios de aceitação** |
| --- |
| O produto deve ser removido. |

| **Evidência** |
| --- |
|  |
