
## Cenário de teste: Exercícios. (RF16)

### Caso de Teste 01: Adicionar exercício.

| ID | Descrição |
| --- | --- |
| **C16-CT01** | O sistema deve cadastrar um exercício. |

| **Pré-condições** |
| --- |
| Deve existir grupo muscular. |

| **Passos** |
| --- |
| **DADO** que o usuário clica em "Adicionar" em "Exercícios" |
| **E** preenche Nome e grupo |
| **QUANDO** salvar |
| **ENTÃO** o exercício deve aparecer no grupo |

| **Critérios de aceitação** |
| --- |
| O exercício deve ser salvo. |

| **Evidência** |
| --- |
| [Vídeo](https://jam.dev/c/f9f60317-740d-44e9-984e-27f7b5c8611b) |

---

### Caso de Teste 02: Adicionar exercício sem nome.

| ID | Descrição |
| --- | --- |
| **C16-CT02** | O sistema deve exigir o nome. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário está adicionando exercício |
| **E** deixa "Nome *" em branco |
| **QUANDO** salvar |
| **ENTÃO** deve ser exibida validação |

| **Critérios de aceitação** |
| --- |
| O exercício não deve ser salvo. |

| **Evidência** |
| --- |
| [Vídeo](https://jam.dev/c/24eff240-fad7-451b-a0c1-0bd959538624) |

---

### Caso de Teste 03: Excluir exercício.

| ID | Descrição |
| --- | --- |
| **C16-CT03** | O sistema deve excluir o exercício. |

| **Pré-condições** |
| --- |
| O exercício de teste deve existir. |

| **Passos** |
| --- |
| **DADO** que o usuário está na biblioteca |
| **QUANDO** clicar em "Deletar" no exercício de teste |
| **ENTÃO** o exercício deve sair da biblioteca |

| **Critérios de aceitação** |
| --- |
| O exercício deve ser removido. |

| **Evidência** |
| --- |
| [Vídeo](https://jam.dev/c/f2c0552b-3e1f-4f73-9923-24fe0ecbf12f) |
