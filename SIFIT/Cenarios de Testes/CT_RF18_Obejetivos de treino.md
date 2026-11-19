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
| [Vídeo](https://jam.dev/c/6a2516e0-b2ea-48d7-b4b8-161f152eb849) |

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
| **QUANDO** clicar em "Salvar" |
| **ENTÃO** deve ser exibida mensagem informando que o nome é obrigatório |

| **Critérios de aceitação** |
| --- |
| O objetivo não deve ser salvo. |

| **Evidência** |
| --- |
| [Vídeo](https://jam.dev/c/11ba09fb-00e1-4fae-bc62-fa6faded32f3) |

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
| [Vídeo](https://jam.dev/c/5fc7e215-14fb-403d-bc00-2ff6f3c63216) |
