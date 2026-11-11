
## Cenário de teste: Detalhes da Página Inicial. (RF05)

### Caso de Teste 01: Consultar o Radar de Evasão.

| ID | Descrição |
| --- | --- |
| **C05-CT01** | O sistema deve detalhar os alunos em risco. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário está na Página Inicial |
| **QUANDO** clicar em "Ver detalhes" no card de risco de evasão |
| **ENTÃO** deve abrir o "Radar de Evasão" com as colunas Aluno, Risco, Último treino, Situação financeira, Frequência e Motivos |

| **Critérios de aceitação** |
| --- |
| A janela deve listar os alunos em risco. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 02: Filtrar o Financeiro em Aberto por vencimento.

| ID | Descrição |
| --- | --- |
| **C05-CT02** | O sistema deve filtrar as mensalidades pendentes. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário abriu o "Financeiro em Aberto" |
| **QUANDO** clicar no filtro "+ 30 dias" |
| **ENTÃO** devem ser listadas apenas contas vencidas há mais de 30 dias |

| **Critérios de aceitação** |
| --- |
| A lista deve respeitar o filtro. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 03: Buscar aluno na janela de Clientes Ausentes.

| ID | Descrição |
| --- | --- |
| **C05-CT03** | A busca deve filtrar os clientes ausentes. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário clicou no card "Clientes Ausentes" |
| **QUANDO** digitar um nome em "Buscar por nome ou código..." |
| **ENTÃO** a lista deve mostrar somente o aluno correspondente |

| **Critérios de aceitação** |
| --- |
| A busca deve funcionar na janela. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 04: Consultar Desistências no Período.

| ID | Descrição |
| --- | --- |
| **C05-CT04** | O sistema deve listar as desistências com motivo. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário está na Página Inicial |
| **QUANDO** clicar no card "Desistências no Período" |
| **ENTÃO** deve abrir a lista com Código, Nome, Data da desistência e Motivo |

| **Critérios de aceitação** |
| --- |
| As desistências devem ser exibidas com o motivo. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 05: Filtrar aniversariantes.

| ID | Descrição |
| --- | --- |
| **C05-CT05** | O sistema deve listar os aniversariantes por período. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário clicou em "Ver todos" em Aniversariantes do dia |
| **QUANDO** selecionar "Próximos 30 dias" |
| **ENTÃO** devem ser listados os aniversariantes dos próximos 30 dias |

| **Critérios de aceitação** |
| --- |
| A lista deve respeitar o período. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 06: Marcar notificações como lidas.

| ID | Descrição |
| --- | --- |
| **C05-CT06** | O sistema deve zerar as notificações não lidas. |

| **Pré-condições** |
| --- |
| Devem existir notificações não lidas. |

| **Passos** |
| --- |
| **DADO** que o usuário clicou no sino de Notificações |
| **QUANDO** clicar em "Marcar como lidas" |
| **ENTÃO** o contador de notificações deve ser zerado |
| **E** a aba "Não lidas" deve ficar vazia |

| **Critérios de aceitação** |
| --- |
| As notificações devem ficar marcadas como lidas. |

| **Evidência** |
| --- |
|  |
