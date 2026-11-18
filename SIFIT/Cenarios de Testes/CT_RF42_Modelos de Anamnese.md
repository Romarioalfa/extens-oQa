

## Cenário de teste: Modelos de Anamnese. (RF42)

### Caso de Teste 01: Listar modelos.

| ID | Descrição |
| --- | --- |
| **C41-CT01** | O sistema deve listar os modelos. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário acessa "Modelos" em Saúde |
| **QUANDO** a tela carregar |
| **ENTÃO** devem aparecer os modelos |

| **Critérios de aceitação** |
| --- |
| A lista deve carregar sem erros. |

| **Evidência** |
| --- |
| ![RF42-CT01_lista_modelos](../Evidencias/RF42-CT01_lista_modelos.png) |

---

### Caso de Teste 02: Pré-visualizar modelo.

| ID | Descrição |
| --- | --- |
| **C41-CT02** | O sistema deve mostrar a prévia. |

| **Pré-condições** |
| --- |
| Deve existir modelo. |

| **Passos** |
| --- |
| **DADO** que o usuário está em "Modelos de Anamnese" |
| **QUANDO** clicar em "Preview" |
| **ENTÃO** deve aparecer a prévia com as perguntas |

| **Critérios de aceitação** |
| --- |
| Todas as perguntas devem aparecer. |

| **Evidência** |
| --- |
| ![RF42-CT02_preview_modelo_demonstracao_vazio](../Evidencias/RF42-CT02_preview_modelo_demonstracao_vazio.png) |
| ![RF42-CT02_preview_modelo_hendreu_vazio](../Evidencias/RF42-CT02_preview_modelo_hendreu_vazio.png) |
| ![RF42-CT02_editor_modelo_com_1_pergunta](../Evidencias/RF42-CT02_editor_modelo_com_1_pergunta.png) |

---

### Caso de Teste 03: Usar modelo na anamnese.

| ID | Descrição |
| --- | --- |
| **C41-CT03** | O modelo deve ser usado na ficha. |

| **Pré-condições** |
| --- |
| Deve existir modelo. |

| **Passos** |
| --- |
| **DADO** que o usuário cria uma anamnese |
| **QUANDO** selecionar o modelo |
| **ENTÃO** as perguntas do modelo devem ser carregadas |

| **Critérios de aceitação** |
| --- |
| As perguntas devem ser as do modelo. |

| **Evidência** |
| --- |
|  |
