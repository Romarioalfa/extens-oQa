
## Cenário de teste: Turmas. (RF20)

### Caso de Teste 01: Cadastrar turma.

| ID | Descrição |
| --- | --- |
| **C20-CT01** | O sistema deve cadastrar a turma. |

| **Pré-condições** |
| --- |
| Deve existir plano. |

| **Passos** |
| --- |
| **DADO** que o usuário clica em "Cadastrar Turma" |
| **E** preenche Nome, Plano, 08:00 às 09:00 e marca Seg e Qua |
| **QUANDO** clicar em "Salvar" |
| **ENTÃO** a turma deve aparecer com horário e dias |

| **Critérios de aceitação** |
| --- |
| A turma deve ser salva. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 02: Horário final menor que o inicial.

| ID | Descrição |
| --- | --- |
| **C20-CT02** | O sistema deve recusar horário inválido. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário está cadastrando turma |
| **E** informa 10:00 a 08:00 |
| **QUANDO** clicar em "Salvar" |
| **ENTÃO** deve ser exibida mensagem de horário inválido |

| **Critérios de aceitação** |
| --- |
| A turma não deve ser salva. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 03: Editar turma.

| ID | Descrição |
| --- | --- |
| **C20-CT03** | O sistema deve atualizar a turma. |

| **Pré-condições** |
| --- |
| A turma de teste deve existir. |

| **Passos** |
| --- |
| **DADO** que o usuário clica em "Editar" na turma de teste |
| **E** marca também Sex |
| **QUANDO** salvar |
| **ENTÃO** os dias devem ser atualizados |

| **Critérios de aceitação** |
| --- |
| A alteração deve ser persistida. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 04: Excluir turma.

| ID | Descrição |
| --- | --- |
| **C20-CT04** | O sistema deve excluir a turma. |

| **Pré-condições** |
| --- |
| A turma de teste deve existir. |

| **Passos** |
| --- |
| **DADO** que o usuário está na lista |
| **QUANDO** clicar em "Deletar" na turma de teste |
| **ENTÃO** a turma deve sair da lista |

| **Critérios de aceitação** |
| --- |
| A turma deve ser removida. |

| **Evidência** |
| --- |
|  |
