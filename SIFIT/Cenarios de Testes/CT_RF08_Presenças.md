## Cenário de teste: Presenças. (RF08)

### Caso de Teste 01: Consultar presenças por período.

| ID | Descrição |
| --- | --- |
| **C08-CT01** | O sistema deve listar presenças no período. |

| **Pré-condições** |
| --- |
| Devem existir presenças registradas. |

| **Passos** |
| --- |
| **DADO** que o usuário acessa "Presenças" |
| **E** preenche "De" e "Até" |
| **QUANDO** clicar em "Buscar" |
| **ENTÃO** devem ser listadas as presenças do período |

| **Critérios de aceitação** |
| --- |
| As presenças devem estar dentro do período. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 02: Consultar presenças de um cliente.

| ID | Descrição |
| --- | --- |
| **C08-CT02** | O sistema deve filtrar por cliente. |

| **Pré-condições** |
| --- |
| O cliente deve ter presenças. |

| **Passos** |
| --- |
| **DADO** que o usuário está em "Presenças" |
| **E** digita o nome em "Buscar por cliente..." |
| **QUANDO** clicar em "Buscar" |
| **ENTÃO** devem aparecer apenas as presenças do cliente |

| **Critérios de aceitação** |
| --- |
| O filtro por cliente deve funcionar. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 03: Usar atalho "Esta semana".

| ID | Descrição |
| --- | --- |
| **C08-CT03** | O atalho deve preencher o período. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário está em "Presenças" |
| **QUANDO** clicar em "Esta semana" |
| **ENTÃO** devem ser listadas as presenças da semana atual |

| **Critérios de aceitação** |
| --- |
| O período deve corresponder à semana atual. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 04: Período com data final menor que a inicial.

| ID | Descrição |
| --- | --- |
| **C08-CT04** | O sistema deve tratar período inválido. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário está em "Presenças" |
| **E** informa "Até" anterior a "De" |
| **QUANDO** clicar em "Buscar" |
| **ENTÃO** deve ser exibida mensagem de período inválido ou nenhum resultado |

| **Critérios de aceitação** |
| --- |
| O sistema não deve apresentar erro. |

| **Evidência** |
| --- |
|  |
