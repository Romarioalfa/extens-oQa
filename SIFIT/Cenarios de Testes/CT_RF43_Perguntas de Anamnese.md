
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
| [Vídeo](https://jam.dev/c/0b013040-9f4c-45e2-af69-47c65be522cf) |

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
|  [Vídeo](https://jam.dev/c/adda7c7c-c00f-4f00-bb9c-3c499670fc85)|

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
|  [Vídeo](https://jam.dev/c/dda41e77-b359-4d03-91b1-a55f52f4ab75) |
