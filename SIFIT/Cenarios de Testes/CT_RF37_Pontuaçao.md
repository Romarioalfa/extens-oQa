
## Cenário de teste: Pontuação. (RF37)

### Caso de Teste 01: Cadastrar campanha.

| ID | Descrição |
| --- | --- |
| **C37-CT01** | O sistema deve cadastrar a pontuação. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário clica em "Nova Pontuação" |
| **E** preenche Nome, Status, Datas e Tipo |
| **QUANDO** salvar |
| **ENTÃO** a campanha deve aparecer na lista |

| **Critérios de aceitação** |
| --- |
| A campanha deve ser salva. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 02: Período inválido.

| ID | Descrição |
| --- | --- |
| **C37-CT02** | O sistema deve recusar data final menor. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário está cadastrando campanha |
| **E** informa Data Final anterior à Inicial |
| **QUANDO** salvar |
| **ENTÃO** deve ser exibida validação |

| **Critérios de aceitação** |
| --- |
| A campanha não deve ser salva. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 03: Visualizar ranking.

| ID | Descrição |
| --- | --- |
| **C37-CT03** | O sistema deve exibir o ranking. |

| **Pré-condições** |
| --- |
| Deve existir campanha com participantes. |

| **Passos** |
| --- |
| **DADO** que o usuário está em "Pontuação" |
| **QUANDO** clicar em "Participantes" |
| **ENTÃO** deve aparecer o ranking ordenado por pontos |

| **Critérios de aceitação** |
| --- |
| O ranking deve estar ordenado. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 04: Consultar pedidos de tarefa.

| ID | Descrição |
| --- | --- |
| **C37-CT04** | O sistema deve listar os pedidos. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário está em "Pontuação" |
| **QUANDO** clicar em "Pedidos de Tarefa" |
| **ENTÃO** devem ser listados os novos pedidos |

| **Critérios de aceitação** |
| --- |
| A lista deve carregar sem erros. |

| **Evidência** |
| --- |
|  |
