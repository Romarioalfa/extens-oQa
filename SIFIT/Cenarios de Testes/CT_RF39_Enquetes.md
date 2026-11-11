## Cenário de teste: Enquetes. (RF39)

### Caso de Teste 01: Cadastrar enquete.

| ID | Descrição |
| --- | --- |
| **C39-CT01** | O sistema deve cadastrar a enquete. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário clica em "Nova Enquete" |
| **E** preenche Nome, Pergunta e duas respostas |
| **QUANDO** salvar |
| **ENTÃO** a enquete deve aparecer na lista |

| **Critérios de aceitação** |
| --- |
| A enquete deve ser salva. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 02: Enquete sem respostas.

| ID | Descrição |
| --- | --- |
| **C39-CT02** | O sistema deve exigir respostas. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário está em "Nova Enquete" |
| **E** não adiciona respostas |
| **QUANDO** salvar |
| **ENTÃO** deve ser exibida validação |

| **Critérios de aceitação** |
| --- |
| A enquete não deve ser salva. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 03: Filtrar enquetes.

| ID | Descrição |
| --- | --- |
| **C39-CT03** | O sistema deve filtrar por status. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário está em "Enquetes" |
| **E** filtra pelo status |
| **QUANDO** clicar em "Buscar" |
| **ENTÃO** a lista deve respeitar o filtro |

| **Critérios de aceitação** |
| --- |
| O filtro deve funcionar. |

| **Evidência** |
| --- |
|  |

