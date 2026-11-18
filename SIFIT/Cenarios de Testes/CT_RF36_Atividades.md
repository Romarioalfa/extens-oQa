## Cenário de teste: Atividades. (RF36)

### Caso de Teste 01: Cadastrar atividade.

| ID | Descrição |
| --- | --- |
| **C36-CT01** | O sistema deve cadastrar a atividade. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário clica em "Nova Atividade" |
| **E** preenche Nome, Pontuação 10 e Descrição |
| **QUANDO** salvar |
| **ENTÃO** a atividade deve aparecer com 10 pontos |

| **Critérios de aceitação** |
| --- |
| A atividade deve ser salva. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 02: Cadastrar atividade sem nome.

| ID | Descrição |
| --- | --- |
| **C36-CT02** | O sistema não deve salvar atividade sem nome. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário clica em "Nova Atividade" |
| **E** deixa todos os campos em branco |
| **QUANDO** clicar em "Salvar" |
| **ENTÃO** deve ser exibida mensagem de campo obrigatório |

| **Critérios de aceitação** |
| --- |
| Nenhuma atividade vazia deve ser criada na lista. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 03: Excluir atividade.

| ID | Descrição |
| --- | --- |
| **C36-CT03** | O sistema deve excluir a atividade. |

| **Pré-condições** |
| --- |
| A atividade de teste deve existir. |

| **Passos** |
| --- |
| **DADO** que o usuário está na lista |
| **QUANDO** clicar em "Deletar" |
| **ENTÃO** a atividade deve sair da lista |

| **Critérios de aceitação** |
| --- |
| A atividade deve ser removida. |

| **Evidência** |
| --- |
|  |
