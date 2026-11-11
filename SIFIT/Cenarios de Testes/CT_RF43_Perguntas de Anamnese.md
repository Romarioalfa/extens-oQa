
## Cenário de teste: Perguntas de Anamnese. (RF43)

### Caso de Teste 01: Cadastrar pergunta.

| ID | Descrição |
| --- | --- |
| **C43-CT01** | O sistema deve cadastrar a pergunta. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário clica em "Nova Pergunta" |
| **E** preenche Nome, Pergunta, Número e Tipo Resposta |
| **QUANDO** salvar |
| **ENTÃO** a pergunta deve aparecer |

| **Critérios de aceitação** |
| --- |
| A pergunta deve ser salva. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 02: Pergunta sem texto.

| ID | Descrição |
| --- | --- |
| **C43-CT02** | O sistema deve exigir a pergunta. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário está em "Nova Pergunta" |
| **E** deixa a pergunta em branco |
| **QUANDO** salvar |
| **ENTÃO** deve ser exibida validação |

| **Critérios de aceitação** |
| --- |
| A pergunta não deve ser salva. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 03: Excluir pergunta.

| ID | Descrição |
| --- | --- |
| **C43-CT03** | O sistema deve excluir a pergunta. |

| **Pré-condições** |
| --- |
| A pergunta de teste deve existir. |

| **Passos** |
| --- |
| **DADO** que o usuário está na lista |
| **QUANDO** clicar em "Deletar" |
| **ENTÃO** a pergunta deve sair da lista |

| **Critérios de aceitação** |
| --- |
| A pergunta deve ser removida. |

| **Evidência** |
| --- |
|  |
