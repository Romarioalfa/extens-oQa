
## Cenário de teste: Ficha de Treino. (RF15)

### Caso de Teste 01: Cadastrar ficha de treino.

| ID | Descrição |
| --- | --- |
| **C15-CT01** | O sistema deve criar uma ficha. |

| **Pré-condições** |
| --- |
| Devem existir aluno e personal. |

| **Passos** |
| --- |
| **DADO** que o usuário clica em "Cadastrar Ficha" e busca o aluno |
| **E** clica em "Criar Nova Ficha" e preenche personal, datas e objetivo |
| **QUANDO** salvar |
| **ENTÃO** a ficha deve aparecer na lista |

| **Critérios de aceitação** |
| --- |
| A ficha deve ser salva corretamente. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 02: Criar ficha a partir de modelo.

| ID | Descrição |
| --- | --- |
| **C15-CT02** | O sistema deve usar um modelo. |

| **Pré-condições** |
| --- |
| Deve existir modelo de ficha. |

| **Passos** |
| --- |
| **DADO** que o usuário está cadastrando uma ficha |
| **QUANDO** clicar em "Usar Modelo de Ficha" e escolher um modelo |
| **ENTÃO** os exercícios do modelo devem ser carregados |

| **Critérios de aceitação** |
| --- |
| A ficha deve conter os exercícios do modelo. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 03: Filtrar e limpar filtros.

| ID | Descrição |
| --- | --- |
| **C15-CT03** | O sistema deve filtrar por aluno. |

| **Pré-condições** |
| --- |
| Devem existir fichas. |

| **Passos** |
| --- |
| **DADO** que o usuário está em "Fichas de Treino" |
| **E** filtra pelo nome do aluno |
| **QUANDO** clicar em "Limpar filtros" |
| **ENTÃO** a lista completa deve voltar |

| **Critérios de aceitação** |
| --- |
| Filtro e limpeza devem funcionar. |

| **Evidência** |
| --- |
|  |
