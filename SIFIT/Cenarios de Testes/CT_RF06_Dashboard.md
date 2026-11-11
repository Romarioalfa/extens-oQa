
## Cenário de teste: Dashboard. (RF06)

### Caso de Teste 01: Visualizar o Dashboard.

| ID | Descrição |
| --- | --- |
| **C06-CT01** | O sistema deve exibir o Dashboard. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário está logado |
| **QUANDO** clicar em "Dashboard" no menu |
| **ENTÃO** devem ser exibidos os blocos "Despesas Fixas" e "Inteligência Sifit" |

| **Critérios de aceitação** |
| --- |
| O Dashboard deve carregar sem erros. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 02: Acessar a Inteligência pelo Dashboard.

| ID | Descrição |
| --- | --- |
| **C06-CT02** | O atalho deve levar à Inteligência. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário está no Dashboard |
| **QUANDO** clicar em "Ver Inteligência" |
| **ENTÃO** deve ser redirecionado para a tela de Inteligência |

| **Critérios de aceitação** |
| --- |
| O redirecionamento deve ocorrer corretamente. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 03: Conferir despesas fixas no Dashboard.

| ID | Descrição |
| --- | --- |
| **C06-CT03** | Os valores devem bater com o cadastro. |

| **Pré-condições** |
| --- |
| Devem existir despesas fixas cadastradas. |

| **Passos** |
| --- |
| **DADO** que o usuário está no Dashboard |
| **QUANDO** comparar o resumo com a tela "Despesas Fixas" |
| **ENTÃO** os valores devem ser iguais |

| **Critérios de aceitação** |
| --- |
| O resumo deve refletir os dados reais. |

| **Evidência** |
| --- |
|  |
