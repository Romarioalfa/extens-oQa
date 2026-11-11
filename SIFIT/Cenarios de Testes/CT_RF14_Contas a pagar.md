
## Cenário de teste: Contas a Pagar. (RF14)

### Caso de Teste 01: Cadastrar conta para fornecedor.

| ID | Descrição |
| --- | --- |
| **C14-CT01** | O sistema deve lançar uma despesa. |

| **Pré-condições** |
| --- |
| Deve existir fornecedor. |

| **Passos** |
| --- |
| **DADO** que o usuário clica em "Nova Conta" |
| **E** busca o fornecedor e preenche Título, Valor, Vencimento e Categoria |
| **QUANDO** salvar |
| **ENTÃO** a conta deve aparecer em aberto |

| **Critérios de aceitação** |
| --- |
| A conta deve ser salva corretamente. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 02: Cadastrar conta para colaborador.

| ID | Descrição |
| --- | --- |
| **C14-CT02** | O sistema deve lançar despesa de colaborador. |

| **Pré-condições** |
| --- |
| Deve existir colaborador. |

| **Passos** |
| --- |
| **DADO** que o usuário está cadastrando uma conta |
| **E** usa "Buscar Colaborador" e preenche os dados |
| **QUANDO** salvar |
| **ENTÃO** a conta deve aparecer vinculada ao colaborador |

| **Critérios de aceitação** |
| --- |
| O vínculo deve estar correto. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 03: Cadastrar sem fornecedor ou colaborador.

| ID | Descrição |
| --- | --- |
| **C14-CT03** | O sistema deve exigir o vínculo. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário está cadastrando uma conta |
| **E** não seleciona fornecedor nem colaborador |
| **QUANDO** salvar |
| **ENTÃO** deve ser exibida validação |

| **Critérios de aceitação** |
| --- |
| A conta não deve ser salva. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 04: Filtrar contas a pagar.

| ID | Descrição |
| --- | --- |
| **C14-CT04** | O sistema deve filtrar por status e período. |

| **Pré-condições** |
| --- |
| Devem existir contas. |

| **Passos** |
| --- |
| **DADO** que o usuário está em "Contas a Pagar" |
| **E** aplica os filtros |
| **QUANDO** buscar |
| **ENTÃO** a lista deve respeitar os filtros |

| **Critérios de aceitação** |
| --- |
| Os filtros devem funcionar. |

| **Evidência** |
| --- |
|  |
