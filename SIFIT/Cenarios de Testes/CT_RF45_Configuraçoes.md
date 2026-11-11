


## Cenário de teste: Configurações. (RF45)

### Caso de Teste 01: Navegar pelas abas.

| ID | Descrição |
| --- | --- |
| **C45-CT01** | O sistema deve exibir todas as abas. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário acessa "Configurações" |
| **QUANDO** clicar em cada aba |
| **ENTÃO** o conteúdo de cada aba deve ser exibido |

| **Critérios de aceitação** |
| --- |
| Todas as abas devem abrir. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 02: Cancelar alterações.

| ID | Descrição |
| --- | --- |
| **C45-CT02** | O sistema deve descartar alterações. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário altera um campo |
| **QUANDO** clicar em "Cancelar" |
| **ENTÃO** o valor original deve permanecer |

| **Critérios de aceitação** |
| --- |
| Nenhuma alteração deve ser salva. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 03: Multa com valor inválido.

| ID | Descrição |
| --- | --- |
| **C45-CT03** | O sistema deve validar o percentual. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário informa "abc" em "Multa por atraso (%)" |
| **QUANDO** clicar em "Salvar Configurações" |
| **ENTÃO** deve ser exibida validação |

| **Critérios de aceitação** |
| --- |
| O valor inválido não deve ser salvo. |

| **Evidência** |
| --- |
|  |
