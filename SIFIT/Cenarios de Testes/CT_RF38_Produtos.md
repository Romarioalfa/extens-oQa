

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
|  [Vídeo](https://jam.dev/c/7c48caff-16e2-4825-befd-9742ea39359c)|

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
| [Vídeo](https://jam.dev/c/4b6b21b8-ee68-4fab-89f5-84ecc51d6751) |

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
| [Vídeo](https://jam.dev/c/4a1f7379-3306-4af7-b9a8-a4d01642f4f3) |

