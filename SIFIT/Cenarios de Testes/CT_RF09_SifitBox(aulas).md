## Cenário de teste: SifitBox (Aulas). (RF09)

### Caso de Teste 01: Consultar aulas por data.

| ID | Descrição |
| --- | --- |
| **C09-CT01** | O sistema deve listar as aulas da data. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário acessa "SifitBox" |
| **E** seleciona uma data |
| **QUANDO** clicar em "Buscar" |
| **ENTÃO** devem ser exibidas as aulas da data |

| **Critérios de aceitação** |
| --- |
| As aulas devem pertencer à data selecionada. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 02: Gerar aulas.

| ID | Descrição |
| --- | --- |
| **C09-CT02** | O sistema deve gerar aulas das turmas recorrentes. |

| **Pré-condições** |
| --- |
| Deve existir turma recorrente ativa. |

| **Passos** |
| --- |
| **DADO** que o usuário está em "SifitBox - Aulas" |
| **QUANDO** clicar em "Gerar aulas" |
| **ENTÃO** as aulas devem ser criadas conforme as turmas |

| **Critérios de aceitação** |
| --- |
| As aulas devem respeitar dias e horários. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 03: Gerar aulas sem turmas.

| ID | Descrição |
| --- | --- |
| **C09-CT03** | O sistema deve informar quando não há turmas. |

| **Pré-condições** |
| --- |
| Não deve existir turma recorrente ativa. |

| **Passos** |
| --- |
| **DADO** que não há turmas recorrentes |
| **QUANDO** clicar em "Gerar aulas" |
| **ENTÃO** deve ser exibida mensagem informativa |

| **Critérios de aceitação** |
| --- |
| Nenhuma aula deve ser gerada e não deve ocorrer erro. |

| **Evidência** |
| --- |
|  |
