
## Cenário de teste: Prospecção. (RF27)

### Caso de Teste 01: Adicionar lead.

| ID | Descrição |
| --- | --- |
| **C27-CT01** | O sistema deve cadastrar o lead. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário clica em "Adicionar Lead" |
| **E** preenche Nome, E-mail, Telefone e Estágio |
| **QUANDO** clicar em "Salvar Lead" |
| **ENTÃO** o lead deve aparecer na lista |

| **Critérios de aceitação** |
| --- |
| O lead deve ser salvo. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 02: Lead com e-mail inválido.

| ID | Descrição |
| --- | --- |
| **C27-CT02** | O sistema deve validar o e-mail. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário está adicionando lead |
| **E** preenche e-mail "teste@" |
| **QUANDO** salvar |
| **ENTÃO** deve ser exibida validação de e-mail |

| **Critérios de aceitação** |
| --- |
| O lead não deve ser salvo com e-mail inválido. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 03: Filtrar por estágio.

| ID | Descrição |
| --- | --- |
| **C27-CT03** | O sistema deve filtrar os leads. |

| **Pré-condições** |
| --- |
| Devem existir leads. |

| **Passos** |
| --- |
| **DADO** que o usuário está em "Prospecção" |
| **QUANDO** selecionar um estágio |
| **ENTÃO** devem aparecer apenas os leads do estágio |

| **Critérios de aceitação** |
| --- |
| O filtro deve funcionar. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 04: Excluir lead.

| ID | Descrição |
| --- | --- |
| **C27-CT04** | O sistema deve excluir o lead. |

| **Pré-condições** |
| --- |
| O lead de teste deve existir. |

| **Passos** |
| --- |
| **DADO** que o usuário está na lista |
| **QUANDO** clicar em "Deletar" no lead de teste |
| **ENTÃO** o lead deve sair da lista |

| **Critérios de aceitação** |
| --- |
| O lead deve ser removido. |

| **Evidência** |
| --- |
|  |
