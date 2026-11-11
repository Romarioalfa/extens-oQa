
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
|  |

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
|  |

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
|  |
