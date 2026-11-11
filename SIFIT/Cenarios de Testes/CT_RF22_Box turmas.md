

## Cenário de teste: Box - Turmas. (RF22)

### Caso de Teste 01: Cadastrar modalidade.

| ID | Descrição |
| --- | --- |
| **C22-CT01** | O sistema deve cadastrar a modalidade. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário acessa "Box - Turmas" |
| **E** clica em "Modalidade" e preenche o nome |
| **QUANDO** salvar |
| **ENTÃO** a modalidade deve aparecer em "Modalidades" |

| **Critérios de aceitação** |
| --- |
| A modalidade deve ser salva. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 02: Cadastrar turma recorrente.

| ID | Descrição |
| --- | --- |
| **C22-CT02** | O sistema deve cadastrar a turma. |

| **Pré-condições** |
| --- |
| Deve existir modalidade. |

| **Passos** |
| --- |
| **DADO** que o usuário clica em "Turma" |
| **E** preenche modalidade, dias, horário e vagas |
| **QUANDO** salvar |
| **ENTÃO** a turma deve aparecer em "Turmas recorrentes" |

| **Critérios de aceitação** |
| --- |
| A turma deve ser salva. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 03: Turma recorrente sem vagas.

| ID | Descrição |
| --- | --- |
| **C22-CT03** | O sistema deve exigir vagas. |

| **Pré-condições** |
| --- |
| Deve existir modalidade. |

| **Passos** |
| --- |
| **DADO** que o usuário está cadastrando turma |
| **E** deixa as vagas em branco |
| **QUANDO** salvar |
| **ENTÃO** deve ser exibida validação |

| **Critérios de aceitação** |
| --- |
| A turma não deve ser salva. |

| **Evidência** |
| --- |
|  |
