


## Cenário de teste: Despesas Fixas. (RF25)

### Caso de Teste 01: Cadastrar despesa fixa.

| ID | Descrição |
| --- | --- |
| **C25-CT01** | O sistema deve cadastrar a despesa. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário clica em "Nova Despesa" |
| **E** preenche Nome, Valor e Recorrência |
| **QUANDO** clicar em "Salvar Despesa" |
| **ENTÃO** a despesa deve aparecer na lista |

| **Critérios de aceitação** |
| --- |
| A despesa deve ser salva. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 02: Despesa sem valor.

| ID | Descrição |
| --- | --- |
| **C25-CT02** | O sistema deve exigir o valor. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário está em "Nova Despesa" |
| **E** deixa o valor em branco |
| **QUANDO** salvar |
| **ENTÃO** deve ser exibida validação |

| **Critérios de aceitação** |
| --- |
| A despesa não deve ser salva. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 03: Filtrar despesas.

| ID | Descrição |
| --- | --- |
| **C25-CT03** | O sistema deve filtrar por status e recorrência. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário está em "Despesas Fixas" |
| **E** filtra pelo status |
| **QUANDO** clicar em "Buscar" |
| **ENTÃO** a lista deve respeitar o filtro |

| **Critérios de aceitação** |
| --- |
| O filtro deve funcionar. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 04: Excluir despesa.

| ID | Descrição |
| --- | --- |
| **C25-CT04** | O sistema deve excluir a despesa. |

| **Pré-condições** |
| --- |
| A despesa de teste deve existir. |

| **Passos** |
| --- |
| **DADO** que o usuário está na lista |
| **QUANDO** clicar em "Deletar" |
| **ENTÃO** a despesa deve sair da lista |

| **Critérios de aceitação** |
| --- |
| A despesa deve ser removida. |

| **Evidência** |
| --- |
|  |
