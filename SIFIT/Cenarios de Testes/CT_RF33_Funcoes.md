
## Cenário de teste: Funções. (RF33)

### Caso de Teste 01: Cadastrar função.

| ID | Descrição |
| --- | --- |
| **C33-CT01** | O sistema deve cadastrar a função. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário clica em "Nova Função" |
| **E** preenche Nome e Tipo e marca Personal |
| **QUANDO** clicar em "Salvar Função" |
| **ENTÃO** a função deve aparecer na lista |

| **Critérios de aceitação** |
| --- |
| A função deve ser salva. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 02: Configurar permissões.

| ID | Descrição |
| --- | --- |
| **C33-CT02** | O sistema deve salvar permissões. |

| **Pré-condições** |
| --- |
| Deve existir função. |

| **Passos** |
| --- |
| **DADO** que o usuário clica em "Permissões" na função |
| **E** marca algumas permissões |
| **QUANDO** clicar em "Salvar" |
| **ENTÃO** as permissões devem ficar gravadas ao reabrir |

| **Critérios de aceitação** |
| --- |
| As permissões devem persistir. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 03: Função sem nome.

| ID | Descrição |
| --- | --- |
| **C33-CT03** | O sistema deve exigir o nome. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário está em "Nova Função" |
| **E** deixa o nome em branco |
| **QUANDO** salvar |
| **ENTÃO** deve ser exibida validação |

| **Critérios de aceitação** |
| --- |
| A função não deve ser salva. |

| **Evidência** |
| --- |
|  |
