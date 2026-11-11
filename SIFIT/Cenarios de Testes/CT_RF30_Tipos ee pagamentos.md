## Cenário de teste: Tipos de Pagamento. (RF30)

### Caso de Teste 01: Cadastrar tipo de pagamento.

| ID | Descrição |
| --- | --- |
| **C30-CT01** | O sistema deve cadastrar o tipo. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário clica em "Novo" |
| **E** preenche Nome, Status e Tipo |
| **QUANDO** salvar |
| **ENTÃO** o tipo deve aparecer na lista |

| **Critérios de aceitação** |
| --- |
| O tipo deve ser salvo. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 02: Vincular bandeira.

| ID | Descrição |
| --- | --- |
| **C30-CT02** | O sistema deve vincular a bandeira. |

| **Pré-condições** |
| --- |
| Deve existir bandeira. |

| **Passos** |
| --- |
| **DADO** que o usuário está cadastrando tipo |
| **E** clica em "Escolher Bandeira" |
| **QUANDO** salvar |
| **ENTÃO** o tipo deve ficar vinculado à bandeira |

| **Critérios de aceitação** |
| --- |
| O vínculo deve ser salvo. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 03: Excluir tipo de pagamento.

| ID | Descrição |
| --- | --- |
| **C30-CT03** | O sistema deve excluir o tipo. |

| **Pré-condições** |
| --- |
| O tipo de teste deve existir. |

| **Passos** |
| --- |
| **DADO** que o usuário está na lista |
| **QUANDO** clicar em "Deletar" |
| **ENTÃO** o tipo deve sair da lista |

| **Critérios de aceitação** |
| --- |
| O tipo deve ser removido. |

| **Evidência** |
| --- |
|  |

