
## Cenário de teste: Login na plataforma.(RF01)

### Caso de Teste 01: Login com as credenciais válidas.

| ID | Descrição |
| --- | --- |
| **C01-CT01** | O login será realizado com um nome de usuário e uma senha válidos ao sistema sifit.centrion.com.br. |

| **Pré-condições** |
| --- |
| As credenciais fornecidas (`marcelo_zandonadi` / senha) devem ser válidas. |

| **Passos** |
| --- |
| **DADO** que estamos na página de login do SIFIT |
| **E** preenchemos "marcelo_zandonadi" no campo Login |
| **E** preenchemos a senha válida no campo Senha |
| **QUANDO** clicarmos no botão "Entrar" |
| **ENTÃO** seremos redirecionados para a Página Inicial / Dashboard do sistema SIFIT |

| **Critérios de aceitação** |
| --- |
| O redirecionamento para a Página Inicial ("Bom tarde, Jair!") deve ocorrer corretamente. |

| **Evidência** |
| --- |


### Caso de Teste 02: Tentativa de login com credenciais incorretas .

| ID | Descrição |
| --- | --- |
| **C01-CT02** | O login falhará quando o nome de login ou a senha forem inválidos. |

| **Pré-condições** |
| --- |
| Nenhuma. |

| **Passos** |
| --- |
| **DADO** que estamos na página de login do SIFIT |
| **E** preenchemos "abcdef" no campo Login |
| **E** preenchemos "********" no campo Senha |
| **QUANDO** clicarmos no botão "Entrar" |
| **ENTÃO** uma mensagem de erro aparecera no topo do formulario  "O nome de usuário e senha não correspondem." |

| **Critérios de aceitação** |
| --- |
| A mensagem de alerta em vermelho escrito "O nome de usuário e senha não correspondem." deve ser exibida ao usuário no topo do formulario . |

| **Evidência** |
| --- |

### Caso de Teste 02: Tentativa de login com credenciais incorretas .

| ID | Descrição |
| --- | --- |
| **C01-CT02** | O login falhará quando o nome de login ou a senha forem inválidos. |

| **Pré-condições** |
| --- |
| Nenhuma. |

| **Passos** |
| --- |
| **DADO** que estamos na página de login do SIFIT |
| **E** preenchemos "em branco " no campo Login |
| **E** preenchemos "em branco" no campo Senha |
| **QUANDO** clicarmos no botão "Entrar" |
| **ENTÃO** uma mensagem de erro aparecera no topo do formulario  "O nome de usuário e senha não correspondem." |

| **Critérios de aceitação** |
| --- |
| A mensagem de alerta em vermelho escrito "O nome de usuário e senha não correspondem." deve ser exibida ao usuário no topo do formulario . |

| **Evidência** |
| --- |
