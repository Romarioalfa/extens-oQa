
## Cenário de teste: Dashboard. (RF06)

### Caso de Teste 01: Visualizar o Dashboard.

| ID | Descrição |
| --- | --- |
| **C06-CT01** | O sistema deve exibir o Dashboard. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário está logado |
| **QUANDO** clicar em "Dashboard" no menu |
| **ENTÃO** devem ser exibidos os blocos "Despesas Fixas" e "Inteligência Sifit" |

| **Critérios de aceitação** |
| --- |
| O Dashboard deve carregar sem erros. |

| **Evidência** |
| --- |
| [Vídeo](https://jam.dev/c/18ffc794-ffd0-46cd-b309-d1a25a5d47ac) |

---

### Caso de Teste 02: Acessar a Inteligência pelo Dashboard.

| ID | Descrição |
| --- | --- |
| **C06-CT02** | O atalho deve levar à Inteligência. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário está no Dashboard |
| **QUANDO** clicar em "Ver Inteligência" |
| **ENTÃO** deve ser redirecionado para a tela de Inteligência |

| **Critérios de aceitação** |
| --- |
| O redirecionamento deve ocorrer corretamente. |

| **Evidência** |
| --- |
| [Vídeo](https://jam.dev/c/960e1ff6-1367-4d26-a0e5-ba02cf3e32fd) |

---

### Caso de Teste 03: Conferir despesas fixas no Dashboard.

| ID | Descrição |
| --- | --- |
| **C06-CT03** | Os valores devem bater com o cadastro. |

| **Pré-condições** |
| --- |
| Devem existir despesas fixas cadastradas. |

| **Passos** |
| --- |
| **DADO** que o usuário está no Dashboard |
| **QUANDO** comparar o resumo com a tela "Despesas Fixas" |
| **ENTÃO** os valores devem ser iguais |

| **Critérios de aceitação** |
| --- |
| O resumo deve refletir os dados reais. |

| **Evidência** |
| --- |
|  [Vídeo](https://jam.dev/c/32e1ea74-fcf8-4a46-b775-d082af4613ff)|
