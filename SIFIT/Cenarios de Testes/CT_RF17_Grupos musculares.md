## Cenário de teste: Grupos Musculares. (RF17)

### Caso de Teste 01: Cadastrar grupo muscular.

| ID | Descrição |
| --- | --- |
| **C17-CT01** | O sistema deve cadastrar o grupo. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário clica em "Cadastrar grupo" |
| **E** preenche Nome e Tipo Membro |
| **QUANDO** clicar em "Salvar" |
| **ENTÃO** o grupo deve aparecer na lista |

| **Critérios de aceitação** |
| --- |
| O grupo deve ser salvo. |

| **Evidência** |
| --- |
| [Vídeo](https://jam.dev/c/6e233d4a-87d7-462b-b618-0f6741b38d67) |

---

### Caso de Teste 02: Cadastrar grupo muscular sem nome.

| ID | Descrição |
| --- | --- |
| **C17-CT02** | O sistema não deve salvar grupo sem nome. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário clica em "Cadastrar grupo" |
| **E** deixa todos os campos em branco |
| **QUANDO** clicar em "Salvar" |
| **ENTÃO** deve ser exibida mensagem de campo obrigatório |

| **Critérios de aceitação** |
| --- |
| Nenhum grupo vazio deve ser criado na lista. |

| **Evidência** |
| --- |
| [Vídeo](https://jam.dev/c/38b93b83-9fd5-4336-85c7-188963db1507) |

---

### Caso de Teste 03: Filtrar grupos.

| ID | Descrição |
| --- | --- |
| **C17-CT03** | O sistema deve filtrar por nome. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário está em "Grupos Musculares" |
| **E** preenche o nome |
| **QUANDO** clicar em "Buscar" |
| **ENTÃO** devem aparecer apenas os correspondentes |

| **Critérios de aceitação** |
| --- |
| O filtro deve funcionar. |

| **Evidência** |
| --- |
| [Vídeo](https://jam.dev/c/c0772d44-6741-4365-904f-015f0ead044c) |

---

### Caso de Teste 04: Excluir grupo muscular.

| ID | Descrição |
| --- | --- |
| **C17-CT04** | O sistema deve excluir o grupo. |

| **Pré-condições** |
| --- |
| O grupo de teste deve existir. |

| **Passos** |
| --- |
| **DADO** que o usuário está na lista |
| **QUANDO** clicar em "Deletar" no grupo de teste |
| **ENTÃO** o grupo deve sair da lista |

| **Critérios de aceitação** |
| --- |
| O grupo deve ser removido. |

| **Evidência** |
| --- |
| [Vídeo](https://jam.dev/c/3e33ffbe-4474-4d41-bd49-fb9738cbbf97) |
