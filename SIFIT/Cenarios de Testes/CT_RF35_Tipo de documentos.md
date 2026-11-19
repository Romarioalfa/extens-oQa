## Cenário de teste: Tipos de Documentos. (RF35)

### Caso de Teste 01: Cadastrar tipo de documento.

| ID | Descrição |
| --- | --- |
| **C35-CT01** | O sistema deve cadastrar o tipo. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário clica em "Novo Tipo" |
| **E** preenche Nome e Aplicação |
| **QUANDO** salvar |
| **ENTÃO** o tipo deve aparecer na lista |

| **Critérios de aceitação** |
| --- |
| O tipo deve ser salvo. |

| **Evidência** |
| --- |
| [Vídeo](../Evidencias/C35-CT01.mp4) · [Jam](https://jam.dev/c/796e71f5-43b0-4e35-bfff-896b331a8db5) |

---

### Caso de Teste 02: Tipo sem nome.

| ID | Descrição |
| --- | --- |
| **C35-CT02** | O sistema deve exigir o nome. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário está em "Novo Tipo" |
| **E** deixa o nome em branco |
| **QUANDO** clicar em "Salvar" |
| **ENTÃO** deve ser exibido o aviso "Informe o nome do tipo de documento." |

| **Critérios de aceitação** |
| --- |
| O tipo não deve ser salvo. |

| **Evidência** |
| --- |
| [Vídeo](../Evidencias/C35-CT02.mp4) · [Jam](https://jam.dev/c/fe76a00b-7c69-4880-985a-f5bd3f8bc89d) |

---

### Caso de Teste 03: Excluir tipo de documento.

| ID | Descrição |
| --- | --- |
| **C35-CT03** | O sistema deve excluir o tipo. |

| **Pré-condições** |
| --- |
| O tipo de teste deve existir. |

| **Passos** |
| --- |
| **DADO** que o usuário está na lista |
| **QUANDO** clicar em "Deletar" |
| **ENTÃO** o tipo deve sair da lista |

| **Critérios de aceitação** |
| --- |
| O tipo deve ser removido. |

| **Evidência** |
| --- |
| [Vídeo](../Evidencias/C35-CT03.mp4) · [Jam](https://jam.dev/c/0f6db349-ca5e-4c3c-9fcc-a2dc4b2e291c) |
