
## Cenário de teste: Caixas. (RF23)

### Caso de Teste 01: Abrir caixa.

| ID | Descrição |
| --- | --- |
| **C23-CT01** | O sistema deve abrir o caixa. |

| **Pré-condições** |
| --- |
| Não deve haver caixa aberto para o usuário. |

| **Passos** |
| --- |
| **DADO** que o usuário clica em "Abrir Caixa" |
| **QUANDO** salvar |
| **ENTÃO** o caixa deve aparecer aberto |

| **Critérios de aceitação** |
| --- |
| O caixa deve ter data e usuário corretos. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 02: Abrir segundo caixa.

| ID | Descrição |
| --- | --- |
| **C23-CT02** | O sistema deve impedir dois caixas abertos. |

| **Pré-condições** |
| --- |
| Deve haver caixa aberto. |

| **Passos** |
| --- |
| **DADO** que já existe caixa aberto |
| **QUANDO** clicar em "Abrir Caixa" novamente |
| **ENTÃO** deve ser exibida mensagem de impedimento |

| **Critérios de aceitação** |
| --- |
| Não deve existir dois caixas abertos. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 03: Fechar caixa.

| ID | Descrição |
| --- | --- |
| **C23-CT03** | O sistema deve fechar o caixa. |

| **Pré-condições** |
| --- |
| Deve haver caixa aberto. |

| **Passos** |
| --- |
| **DADO** que o usuário visualiza o caixa aberto |
| **E** clica em "Buscar Contas" |
| **QUANDO** confirmar o fechamento |
| **ENTÃO** o status deve mudar para fechado |

| **Critérios de aceitação** |
| --- |
| O caixa deve ser fechado com os valores. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 04: Imprimir caixa.

| ID | Descrição |
| --- | --- |
| **C23-CT04** | O sistema deve imprimir o caixa. |

| **Pré-condições** |
| --- |
| Deve existir caixa. |

| **Passos** |
| --- |
| **DADO** que o usuário está na lista |
| **QUANDO** clicar em "Imprimir" |
| **ENTÃO** deve abrir a impressão do caixa |

| **Critérios de aceitação** |
| --- |
| A impressão deve conter os dados do caixa. |

| **Evidência** |
| --- |
|  |
