
## Cenário de teste: Categorias Crossfit. (RF21)

### Caso de Teste 01: Cadastrar categoria.

| ID | Descrição |
| --- | --- |
| **C21-CT01** | O sistema deve cadastrar a categoria. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário clica em "Nova Categoria" |
| **E** preenche o nome |
| **QUANDO** clicar em "Salvar" |
| **ENTÃO** a categoria deve aparecer com data de criação |

| **Critérios de aceitação** |
| --- |
| A categoria deve ser salva. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 02: Editar categoria.

| ID | Descrição |
| --- | --- |
| **C21-CT02** | O sistema deve atualizar a categoria. |

| **Pré-condições** |
| --- |
| A categoria de teste deve existir. |

| **Passos** |
| --- |
| **DADO** que o usuário clica em "Editar" |
| **E** altera o nome |
| **QUANDO** salvar |
| **ENTÃO** o nome e o "Atualizado em" devem mudar |

| **Critérios de aceitação** |
| --- |
| A data de atualização deve ser registrada. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 03: Excluir categoria.

| ID | Descrição |
| --- | --- |
| **C21-CT03** | O sistema deve excluir a categoria. |

| **Pré-condições** |
| --- |
| A categoria de teste deve existir. |

| **Passos** |
| --- |
| **DADO** que o usuário está na lista |
| **QUANDO** clicar em "Deletar" |
| **ENTÃO** a categoria deve sair da lista |

| **Critérios de aceitação** |
| --- |
| A categoria deve ser removida. |

| **Evidência** |
| --- |
|  |
