



## Cenário de teste: Bandeiras. (RF31)

### Caso de Teste 01: Cadastrar bandeira.

| ID | Descrição |
| --- | --- |
| **C31-CT01** | O sistema deve cadastrar a bandeira. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário clica em "Nova Bandeira" |
| **E** preenche Nome, Taxa Débito e Taxa Adicional |
| **QUANDO** salvar |
| **ENTÃO** a bandeira deve aparecer na lista |

| **Critérios de aceitação** |
| --- |
| A bandeira deve ser salva. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 02: Adicionar parcelas.

| ID | Descrição |
| --- | --- |
| **C31-CT02** | O sistema deve salvar parcelas. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário está cadastrando bandeira |
| **QUANDO** clicar em "Adicionar Parcela" e informar a taxa |
| **ENTÃO** a parcela deve aparecer na tabela |

| **Critérios de aceitação** |
| --- |
| As parcelas devem ser salvas. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 03: Bandeira sem nome.

| ID | Descrição |
| --- | --- |
| **C31-CT03** | O sistema deve exigir o nome. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário está em "Nova Bandeira" |
| **E** deixa o nome em branco |
| **QUANDO** salvar |
| **ENTÃO** deve ser exibida validação |

| **Critérios de aceitação** |
| --- |
| A bandeira não deve ser salva. |

| **Evidência** |
| --- |
|  |
