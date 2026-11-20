
## Cenário de teste: Planos. (RF28)

### Caso de Teste 01: Cadastrar plano.

| ID | Descrição |
| --- | --- |
| **C28-CT01** | O sistema deve cadastrar o plano. |

| **Pré-condições** |
| --- |
| Deve existir grupo. |

| **Passos** |
| --- |
| **DADO** que o usuário clica em "Novo Plano" |
| **E** preenche Nome, Grupo, Cobrança, Parcelas e valores |
| **QUANDO** clicar em "Salvar Plano" |
| **ENTÃO** o plano deve aparecer na lista |

| **Critérios de aceitação** |
| --- |
| O plano deve ser salvo. |

| **Evidência** |
| --- |
|  [Vídeo](https://jam.dev/c/44b4beeb-34c2-4540-beae-28cfcafed41e ) |

---

### Caso de Teste 02: Plano sem valor mensal.

| ID | Descrição |
| --- | --- |
| **C28-CT02** | O sistema deve exigir o valor. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário está em "Novo Plano" |
| **E** deixa o Valor Mensal em branco |
| **QUANDO** salvar |
| **ENTÃO** deve ser exibida validação |

| **Critérios de aceitação** |
| --- |
| O plano não deve ser salvo. |

| **Evidência** |
| --- |
|  [Vídeo](https://jam.dev/c/d0842a78-1ba7-4cb9-9094-35257b8e5ba1) |

---

### Caso de Teste 03: Adicionar benefício.

| ID | Descrição |
| --- | --- |
| **C28-CT03** | O sistema deve salvar benefícios. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário está cadastrando plano |
| **QUANDO** clicar em "Adicionar benefício" e preencher |
| **ENTÃO** o benefício deve aparecer no plano |

| **Critérios de aceitação** |
| --- |
| O benefício deve ser salvo. |

| **Evidência** |
| --- |
| [Vídeo](https://jam.dev/c/d51f0712-9faf-466d-993e-b002639bd043)  |

---

### Caso de Teste 04: Visualizar ranking de planos.

| ID | Descrição |
| --- | --- |
| **C28-CT04** | O sistema deve exibir os planos com mais alunos. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário acessa "Planos" |
| **QUANDO** a tela carregar |
| **ENTÃO** deve aparecer "Planos com mais alunos" |

| **Critérios de aceitação** |
| --- |
| O ranking deve estar ordenado. |

| **Evidência** |
| --- |
| [Vídeo](https://jam.dev/c/59567ab1-217a-4472-a1e7-32635c9150f4) |

