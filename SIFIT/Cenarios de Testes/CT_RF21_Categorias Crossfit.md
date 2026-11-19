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
| **DADO** que o usuário acessa o endereço sifit.centrion.com.br/categorias-exercicios-crossfit (a tela não aparece no menu) |
| **E** clica em "Nova Categoria" e preenche o nome |
| **QUANDO** clicar em "Salvar" |
| **ENTÃO** a categoria deve aparecer com data de criação |

| **Critérios de aceitação** |
| --- |
| A categoria deve ser salva. |

| **Evidência** |
| --- |
| [Vídeo](https://jam.dev/c/a3ef1c16-1101-4cea-b960-e64fe256651a) |

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
| [Vídeo](https://jam.dev/c/09e82643-c25e-4257-9cc7-02c10d03cab1) |

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
| [Vídeo](https://jam.dev/c/e880c673-c5ac-4010-8049-295a87b1b333) |
