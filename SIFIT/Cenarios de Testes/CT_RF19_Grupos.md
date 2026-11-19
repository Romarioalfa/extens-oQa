## Cenário de teste: Grupos. (RF19)

### Caso de Teste 01: Cadastrar grupo.

| ID | Descrição |
| --- | --- |
| **C19-CT01** | O sistema deve cadastrar o grupo. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário clica em "Novo Grupo" |
| **E** preenche Nome, Status, Tipo Caixa e Descrição |
| **QUANDO** clicar em "Salvar Grupo" |
| **ENTÃO** o grupo deve aparecer na lista |

| **Critérios de aceitação** |
| --- |
| O grupo deve ser salvo. |

| **Evidência** |
| --- |
| [Vídeo](https://jam.dev/c/78df1b3b-d552-44be-a7d5-1347afd8aa73) |

---

### Caso de Teste 02: Cadastrar grupo sem nome.

| ID | Descrição |
| --- | --- |
| **C19-CT02** | O sistema deve exigir o nome. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário está em "Novo Grupo" |
| **E** deixa o nome em branco |
| **QUANDO** clicar em "Salvar Grupo" |
| **ENTÃO** deve ser exibida a mensagem "Preencha este campo." |

| **Critérios de aceitação** |
| --- |
| O grupo não deve ser salvo. |

| **Evidência** |
| --- |
| [Vídeo](https://jam.dev/c/478c3590-96a8-4335-a701-bb3b414cf2c8) |

---

### Caso de Teste 03: Excluir grupo.

| ID | Descrição |
| --- | --- |
| **C19-CT03** | O sistema deve excluir o grupo. |

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
| [Vídeo](https://jam.dev/c/b29d955d-144f-41d8-b7e9-4d8e4a831a14) |
