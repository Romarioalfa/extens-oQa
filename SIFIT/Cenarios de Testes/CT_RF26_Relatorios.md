
## Cenário de teste: Relatórios. (RF26)

### Caso de Teste 01: Gerar relatório de clientes.

| ID | Descrição |
| --- | --- |
| **C26-CT01** | O sistema deve gerar o relatório. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário seleciona o tipo "Clientes" |
| **QUANDO** clicar em "Gerar Relatorio" |
| **ENTÃO** deve ser exibido o relatório dos alunos |

| **Critérios de aceitação** |
| --- |
| O relatório deve conter os clientes. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 02: Gerar relatório financeiro por período.

| ID | Descrição |
| --- | --- |
| **C26-CT02** | O sistema deve filtrar por período. |

| **Pré-condições** |
| --- |
| Devem existir contas. |

| **Passos** |
| --- |
| **DADO** que o usuário seleciona "Contas a Receber" e informa o período |
| **QUANDO** clicar em "Gerar Relatorio" |
| **ENTÃO** devem aparecer apenas as contas do período |

| **Critérios de aceitação** |
| --- |
| Os valores devem bater com os lançamentos. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 03: Gerar relatório de caixas.

| ID | Descrição |
| --- | --- |
| **C26-CT03** | O sistema deve gerar o relatório de caixas. |

| **Pré-condições** |
| --- |
| Deve existir caixa. |

| **Passos** |
| --- |
| **DADO** que o usuário seleciona "Caixas" |
| **QUANDO** clicar em "Gerar Relatorio" |
| **ENTÃO** deve aparecer o movimento de caixa |

| **Critérios de aceitação** |
| --- |
| O relatório deve carregar sem erros. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 04: Período inválido.

| ID | Descrição |
| --- | --- |
| **C26-CT04** | O sistema deve tratar data fim menor que início. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário informa Data Fim anterior à Data Início |
| **QUANDO** clicar em "Gerar Relatorio" |
| **ENTÃO** deve ser exibida mensagem de período inválido |

| **Critérios de aceitação** |
| --- |
| O relatório não deve ser gerado. |

| **Evidência** |
| --- |
|  |
