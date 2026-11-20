



## Cenário de teste: Colaboradores. (RF32)

### Caso de Teste 01: Cadastrar colaborador.

| ID | Descrição |
| --- | --- |
| **C32-CT01** | O sistema deve cadastrar o colaborador. |

| **Pré-condições** |
| --- |
| Deve existir função. |

| **Passos** |
| --- |
| **DADO** que o usuário clica em "Novo Colaborador" |
| **E** preenche os dados e a função |
| **QUANDO** salvar |
| **ENTÃO** o colaborador deve aparecer na lista |

| **Critérios de aceitação** |
| --- |
| O colaborador deve ser salvo. |

| **Evidência** |
| --- |
| [Vídeo](https://jam.dev/c/fd9e4fdb-11dc-454a-80a6-df7fd5011944) |

---

### Caso de Teste 02: Colaborador sem nome.

| ID | Descrição |
| --- | --- |
| **C32-CT02** | O sistema deve exigir o nome. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário está em "Novo Colaborador" |
| **E** deixa o nome em branco |
| **QUANDO** salvar |
| **ENTÃO** deve ser exibida validação |

| **Critérios de aceitação** |
| --- |
| O colaborador não deve ser salvo. |

| **Evidência** |
| --- |
| [Vídeo](https://jam.dev/c/e658f54b-4254-498f-8f43-73b9f4da62d1) |

---

### Caso de Teste 03: Pesquisar colaborador.

| ID | Descrição |
| --- | --- |
| **C32-CT03** | O sistema deve encontrar o colaborador. |

| **Pré-condições** |
| --- |
| Deve existir colaborador. |

| **Passos** |
| --- |
| **DADO** que o usuário está em "Colaboradores" |
| **E** preenche o nome |
| **QUANDO** clicar em "Buscar" |
| **ENTÃO** o colaborador deve aparecer |

| **Critérios de aceitação** |
| --- |
| A busca deve funcionar. |

| **Evidência** |
| --- |
| [Vídeo](https://jam.dev/c/65c4b9f2-245b-4e90-96d2-79d8a0e7806d) |

---

### Caso de Teste 04: Gerenciar funções pelo atalho.

| ID | Descrição |
| --- | --- |
| **C32-CT04** | O atalho deve abrir as funções. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário está em "Colaboradores" |
| **QUANDO** clicar em "Funções" |
| **ENTÃO** deve abrir "Gerenciar Funções" |

| **Critérios de aceitação** |
| --- |
| O atalho deve funcionar. |

| **Evidência** |
| --- |
| [Vídeo](https://jam.dev/c/57eb6eb0-2672-46de-a164-90d601149a67) |
