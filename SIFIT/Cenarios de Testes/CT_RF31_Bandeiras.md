



## Cenário de teste: Bandeiras. (RF31)

### Caso de Teste 01: Cadastrar bandeira.

| ID | Descrição |
| --- | --- |
| **C31-CT01** | O sistema deve cadastrar a bandeira. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário clica em "Nova Bandeira" |
| **E** preenche Nome, Taxa Débito e Taxa Adicional |
| **QUANDO** salvar |
| **ENTÃO** a bandeira deve aparecer na lista |

| **Critérios de aceitação** |
| --- |
| A bandeira deve ser salva. |

| **Evidência** |
| --- |
| [Vídeo](../Evidencias/C31-CT01.mp4) · [Jam](https://jam.dev/c/60e6cba7-e3fd-42e9-a219-43aa8ab7d27d) |

---

### Caso de Teste 02: Adicionar parcelas.

| ID | Descrição |
| --- | --- |
| **C31-CT02** | O sistema deve salvar parcelas. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário está cadastrando bandeira |
| **QUANDO** clicar em "Adicionar Parcela" e informar a taxa |
| **ENTÃO** a parcela deve aparecer na tabela |

| **Critérios de aceitação** |
| --- |
| As parcelas devem ser salvas. |

| **Evidência** |
| --- |
| [Vídeo](../Evidencias/C31-CT02.mp4) · [Jam](https://jam.dev/c/d15e6a4b-5b87-4c71-90ba-0f1e75eac44e) |

---

### Caso de Teste 03: Bandeira sem nome.

| ID | Descrição |
| --- | --- |
| **C31-CT03** | O sistema deve exigir o nome. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário está em "Nova Bandeira" |
| **E** deixa o nome em branco |
| **QUANDO** salvar |
| **ENTÃO** deve ser exibida validação |

| **Critérios de aceitação** |
| --- |
| A bandeira não deve ser salva. |

| **Evidência** |
| --- |
| [Vídeo](../Evidencias/C31-CT03.mp4) · [Jam](https://jam.dev/c/be8f4531-dd90-4206-9865-7729854ac4b7) |
