
## Cenário de teste: Modelo de Ficha. (RF46)

### Caso de Teste 01: Criar modelo de ficha.

| ID | Descrição |
| --- | --- |
| **C46-CT01** | O sistema deve cadastrar o modelo. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário clica em "Nova Ficha" |
| **E** preenche Nome do Modelo e Personal |
| **QUANDO** clicar em "Criar Modelo" |
| **ENTÃO** o modelo deve aparecer na lista |

| **Critérios de aceitação** |
| --- |
| O modelo deve ser salvo. |

| **Evidência** |
| --- |
| [Vídeo](https://jam.dev/c/e1bbd905-d130-43aa-8d9b-48b281b31ce2) |

---

### Caso de Teste 02: Modelo sem nome.

| ID | Descrição |
| --- | --- |
| **C46-CT02** | O sistema deve exigir o nome. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário está em "Novo Modelo de Ficha" |
| **E** deixa o nome em branco |
| **QUANDO** clicar em "Criar Modelo" |
| **ENTÃO** deve ser exibida validação |

| **Critérios de aceitação** |
| --- |
| O modelo não deve ser salvo. |

| **Evidência** |
| --- |
| [Vídeo](https://jam.dev/c/e170262b-842e-419c-b78e-eabae97f0212) |

---

### Caso de Teste 03: Buscar modelo.

| ID | Descrição |
| --- | --- |
| **C46-CT03** | O sistema deve encontrar o modelo. |

| **Pré-condições** |
| --- |
| Deve existir modelo. |

| **Passos** |
| --- |
| **DADO** que o usuário está em "Modelo Ficha" |
| **E** preenche o título |
| **QUANDO** clicar em "Buscar" |
| **ENTÃO** o modelo deve aparecer |

| **Critérios de aceitação** |
| --- |
| A busca deve funcionar. |

| **Evidência** |
| --- |
| [Vídeo](https://jam.dev/c/af76fdf2-41fd-4c3c-8492-d9d48e390cf6) |
