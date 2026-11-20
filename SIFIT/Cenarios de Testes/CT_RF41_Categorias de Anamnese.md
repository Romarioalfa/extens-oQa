
## Cenário de teste: Categorias de Anamnese. (RF41)

### Caso de Teste 01: Cadastrar categoria.

| ID | Descrição |
| --- | --- |
| **C42-CT01** | O sistema deve cadastrar a categoria. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário clica em "Nova Categoria" |
| **E** preenche o nome |
| **QUANDO** salvar |
| **ENTÃO** a categoria deve aparecer |

| **Critérios de aceitação** |
| --- |
| A categoria deve ser salva. |

| **Evidência** |
| --- |
|[Vídeo](https://jam.dev/c/d7c49837-ad94-4360-a678-93065d4dd4b5)  |

---

### Caso de Teste 02: Editar categoria.

| ID | Descrição |
| --- | --- |
| **C42-CT02** | O sistema deve atualizar a categoria. |

| **Pré-condições** |
| --- |
| A categoria de teste deve existir. |

| **Passos** |
| --- |
| **DADO** que o usuário clica em "Editar" |
| **E** altera o nome |
| **QUANDO** salvar |
| **ENTÃO** o novo nome deve aparecer |

| **Critérios de aceitação** |
| --- |
| A alteração deve persistir. |

| **Evidência** |
| --- |
| [Vídeo](https://jam.dev/c/a1ea7d5e-663d-4e2b-8292-eec06adaa1ad) |

---

### Caso de Teste 03: Excluir categoria.

| ID | Descrição |
| --- | --- |
| **C42-CT03** | O sistema deve excluir a categoria. |

| **Pré-condições** |
| --- |
| A categoria de teste deve existir. |

| **Passos** |
| --- |
| **DADO** que o usuário está na lista |
| **QUANDO** clicar em "Excluir" |
| **ENTÃO** a categoria deve sair da lista |

| **Critérios de aceitação** |
| --- |
| A categoria deve ser removida. |

| **Evidência** |
| --- |
|  [Vídeo](https://jam.dev/c/40bde8ef-c12a-44ec-82b0-fdd522bcd9a3)|
