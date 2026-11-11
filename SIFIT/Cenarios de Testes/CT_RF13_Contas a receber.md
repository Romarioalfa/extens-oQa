
## Cenário de teste: Contas a Receber. (RF13)

### Caso de Teste 01: Cadastrar conta a receber.

| ID | Descrição |
| --- | --- |
| **C13-CT01** | O sistema deve lançar uma conta. |

| **Pré-condições** |
| --- |
| Deve existir cliente. |

| **Passos** |
| --- |
| **DADO** que o usuário clica em "Nova Conta" |
| **E** seleciona o cliente e preenche Título, Valor e Vencimento |
| **QUANDO** salvar |
| **ENTÃO** a conta deve aparecer em aberto |

| **Critérios de aceitação** |
| --- |
| A conta deve ser salva corretamente. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 02: Cadastrar conta sem valor.

| ID | Descrição |
| --- | --- |
| **C13-CT02** | O sistema deve exigir o valor. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário está em "Cadastrar Conta a Receber" |
| **E** deixa o valor em branco |
| **QUANDO** salvar |
| **ENTÃO** deve ser exibida validação |

| **Critérios de aceitação** |
| --- |
| A conta não deve ser salva. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 03: Criar cópias (parcelas).

| ID | Descrição |
| --- | --- |
| **C13-CT03** | O sistema deve gerar contas repetidas. |

| **Pré-condições** |
| --- |
| Deve existir cliente. |

| **Passos** |
| --- |
| **DADO** que o usuário está cadastrando uma conta |
| **E** informa 3 em "Criar cópias" |
| **QUANDO** salvar |
| **ENTÃO** devem ser criadas as contas com vencimentos mensais |

| **Critérios de aceitação** |
| --- |
| As cópias devem ter vencimentos sequenciais. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 04: Filtrar por status e período.

| ID | Descrição |
| --- | --- |
| **C13-CT04** | O sistema deve filtrar as contas. |

| **Pré-condições** |
| --- |
| Devem existir contas. |

| **Passos** |
| --- |
| **DADO** que o usuário está em "Contas a Receber" |
| **E** seleciona tipo de data, período e status |
| **QUANDO** buscar |
| **ENTÃO** devem aparecer apenas as contas dos filtros |

| **Critérios de aceitação** |
| --- |
| Os filtros devem ser respeitados. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 05: Visualizar conta a receber.

| ID | Descrição |
| --- | --- |
| **C13-CT05** | O sistema deve exibir os detalhes. |

| **Pré-condições** |
| --- |
| Deve existir conta. |

| **Passos** |
| --- |
| **DADO** que o usuário está na lista |
| **QUANDO** clicar para visualizar a conta |
| **ENTÃO** a janela deve mostrar cadastrante, data, status, resíduo e valores |

| **Critérios de aceitação** |
| --- |
| Os dados devem ser iguais aos cadastrados. |

| **Evidência** |
| --- |
|  |
