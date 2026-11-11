
## Cenário de teste: Objetivos de Treino. (RF18)

### Caso de Teste 01: Cadastrar objetivo.

| ID | Descrição |
| --- | --- |
| **C18-CT01** | O sistema deve cadastrar o objetivo. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário clica em "Novo Objetivo" |
| **E** preenche Nome e Descrição |
| **QUANDO** salvar |
| **ENTÃO** o objetivo deve aparecer na lista |

| **Critérios de aceitação** |
| --- |
| O objetivo deve ser salvo. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 02: Cadastrar objetivo sem nome.

| ID | Descrição |
| --- | --- |
| **C18-CT02** | O sistema deve exigir o nome. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário clica em "Novo Objetivo" |
| **E** deixa o nome em branco |
| **QUANDO** salvar |
| **ENTÃO** deve ser exibida validação |

| **Critérios de aceitação** |
| --- |
| O objetivo não deve ser salvo. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 03: Buscar objetivo.

| ID | Descrição |
| --- | --- |
| **C18-CT03** | O sistema deve encontrar o objetivo. |

| **Pré-condições** |
| --- |
| O objetivo deve existir. |

| **Passos** |
| --- |
| **DADO** que o usuário está em "Objetivos Treino" |
| **E** preenche o nome |
| **QUANDO** clicar em "Buscar" |
| **ENTÃO** o objetivo deve ser exibido |

| **Critérios de aceitação** |
| --- |
| A busca deve funcionar. |

| **Evidência** |
| --- |
|  |
