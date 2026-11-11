## Cenário de teste: Menu do Usuário. (RF02)

### Caso de Teste 01: Visualizar opções do menu do usuário.

| ID | Descrição |
| --- | --- |
| **C02-CT01** | O sistema deve exibir as opções do menu do usuário. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário está logado |
| **QUANDO** clicar no nome do usuário no rodapé do menu lateral |
| **ENTÃO** devem ser exibidas as opções "Meu perfil", "Segurança", "Preferências" e "Sair do sistema" |

| **Critérios de aceitação** |
| --- |
| Todas as opções devem ser exibidas. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 02: Visualizar "Meu perfil".

| ID | Descrição |
| --- | --- |
| **C02-CT02** | O sistema deve exibir os dados do usuário logado. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o menu do usuário está aberto |
| **QUANDO** clicar em "Meu perfil" |
| **ENTÃO** devem ser exibidas as informações do usuário |

| **Critérios de aceitação** |
| --- |
| Os dados exibidos devem ser do usuário logado. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 03: Acessar "Segurança".

| ID | Descrição |
| --- | --- |
| **C02-CT03** | O sistema deve exibir a tela de alteração de senha. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o menu do usuário está aberto |
| **QUANDO** clicar em "Segurança" |
| **ENTÃO** deve ser exibida a tela de alteração de senha e preferências de segurança |

| **Critérios de aceitação** |
| --- |
| A tela deve abrir sem erros. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 04: Sair do sistema.

| ID | Descrição |
| --- | --- |
| **C02-CT04** | O sistema deve encerrar a sessão do usuário. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o menu do usuário está aberto |
| **QUANDO** clicar em "Sair do sistema" |
| **ENTÃO** o usuário deve ser redirecionado para a tela de login |
| **E** ao voltar no navegador, não deve acessar as telas internas |

| **Critérios de aceitação** |
| --- |
| A sessão deve ser encerrada. |

| **Evidência** |
| --- |
|  |
