
## Cenário de teste: Pagar.me. (RF24)

### Caso de Teste 01: Visualizar recebimentos.

| ID | Descrição |
| --- | --- |
| **C24-CT01** | O sistema deve exibir o resumo. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário acessa "Pagar.me" |
| **QUANDO** a tela carregar |
| **ENTÃO** devem aparecer Recebimentos, Meios de pagamento, Ações rápidas e Transações recentes |

| **Critérios de aceitação** |
| --- |
| Os blocos devem carregar sem erros. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 02: Filtrar transações por período.

| ID | Descrição |
| --- | --- |
| **C24-CT02** | O sistema deve filtrar as transações. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário está em "Pagar.me" |
| **QUANDO** selecionar "Últimos 30 dias" |
| **ENTÃO** devem aparecer as transações do período |

| **Critérios de aceitação** |
| --- |
| O período deve ser respeitado. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 03: Consultar recebíveis.

| ID | Descrição |
| --- | --- |
| **C24-CT03** | O sistema deve exibir os recebíveis futuros. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário está em "Pagar.me" |
| **QUANDO** clicar em "Ver recebiveis" |
| **ENTÃO** devem ser exibidos os valores a receber |

| **Critérios de aceitação** |
| --- |
| A consulta deve abrir sem erros. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 04: Abrir nova cobrança.

| ID | Descrição |
| --- | --- |
| **C24-CT04** | O sistema deve abrir o formulário de link. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário está em "Pagar.me" |
| **QUANDO** clicar em "Nova cobrança" |
| **ENTÃO** deve abrir o formulário de link de pagamento |

| **Critérios de aceitação** |
| --- |
| O formulário deve abrir corretamente. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 05: Acessar configurações da integração.

| ID | Descrição |
| --- | --- |
| **C24-CT05** | O sistema deve exibir as configurações. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário está em "Pagar.me" |
| **QUANDO** clicar em "Configurações" |
| **ENTÃO** deve abrir a tela de integração |

| **Critérios de aceitação** |
| --- |
| A tela deve abrir sem erros. |

| **Evidência** |
| --- |
|  |

