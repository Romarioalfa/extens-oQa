


## Cenário de teste: Modelos de Contrato. (RF29)

### Caso de Teste 01: Adicionar modelo de contrato.

| ID | Descrição |
| --- | --- |
| **C29-CT01** | O sistema deve cadastrar o modelo. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário clica em "Adicionar Modelo Contrato" |
| **E** preenche Nome e texto |
| **QUANDO** salvar |
| **ENTÃO** o modelo deve aparecer na lista |

| **Critérios de aceitação** |
| --- |
| O modelo deve ser salvo. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 02: Modelo sem nome.

| ID | Descrição |
| --- | --- |
| **C29-CT02** | O sistema deve exigir o nome. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário está adicionando modelo |
| **E** deixa o nome em branco |
| **QUANDO** salvar |
| **ENTÃO** deve ser exibida validação |

| **Critérios de aceitação** |
| --- |
| O modelo não deve ser salvo. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 03: Visualizar modelo.

| ID | Descrição |
| --- | --- |
| **C29-CT03** | O sistema deve exibir o modelo. |

| **Pré-condições** |
| --- |
| Deve existir modelo. |

| **Passos** |
| --- |
| **DADO** que o usuário está na lista |
| **QUANDO** abrir um modelo |
| **ENTÃO** o texto deve ser exibido |

| **Critérios de aceitação** |
| --- |
| O conteúdo deve ser o cadastrado. |

| **Evidência** |
| --- |
|  |
