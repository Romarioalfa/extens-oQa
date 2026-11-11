
## Cenário de teste: Check-in. (RF07)

### Caso de Teste 01: Check-in manual de cliente existente.

| ID | Descrição |
| --- | --- |
| **C07-CT01** | O sistema deve registrar a entrada manual. |

| **Pré-condições** |
| --- |
| Deve existir um cliente ativo. |

| **Passos** |
| --- |
| **DADO** que o usuário acessa "Check-in" |
| **E** clica em "Check-in manual" e escolhe "Cliente existente" |
| **E** seleciona o cliente |
| **QUANDO** clicar em "Registrar entrada" |
| **ENTÃO** o check-in deve aparecer na aba "Presentes agora" |

| **Critérios de aceitação** |
| --- |
| A entrada deve ser registrada com data, hora e unidade. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 02: Check-in de visitante / aula experimental.

| ID | Descrição |
| --- | --- |
| **C07-CT02** | O sistema deve registrar visitantes. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário abriu o "Check-in manual" |
| **E** seleciona "Visitante / Aula experimental" |
| **E** preenche os dados do visitante |
| **QUANDO** clicar em "Registrar entrada" |
| **ENTÃO** o visitante deve aparecer na lista |

| **Critérios de aceitação** |
| --- |
| O visitante deve ser registrado. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 03: Filtrar check-ins por situação.

| ID | Descrição |
| --- | --- |
| **C07-CT03** | As abas devem filtrar a lista. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário está em "Check-in" |
| **QUANDO** clicar na aba "Não compareceram" |
| **ENTÃO** devem ser listados apenas os alunos que não compareceram |

| **Critérios de aceitação** |
| --- |
| A lista deve respeitar a aba selecionada. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 04: Buscar check-in por nome.

| ID | Descrição |
| --- | --- |
| **C07-CT04** | A busca deve filtrar os registros. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário está em "Check-in" |
| **QUANDO** digitar um nome em "Buscar por nome, código ou plano..." |
| **ENTÃO** devem ser exibidos apenas os registros do aluno |

| **Critérios de aceitação** |
| --- |
| A busca deve funcionar corretamente. |

| **Evidência** |
| --- |
|  |
