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
| [Vídeo](../Evidencias/C36-CT01.mp4) · [Jam](https://jam.dev/c/a6821e1e-2c01-4b1e-bf5f-5110df4fa4ed) |

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
| [Vídeo](../Evidencias/C36-CT02.mp4) · [Jam](https://jam.dev/c/872acaba-9165-47cd-92f9-d5a1b5c35521) |

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
