## Cenário de teste: Autenticação de Usuário. (RF01)

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
| O redirecionamento para a Página Inicial ("Boa tarde, Jair!") deve ocorrer corretamente. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 02: Tentativa de login com credenciais incorretas.

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
| **ENTÃO** uma mensagem de erro aparecerá no topo do formulário: "O nome de usuário e senha não correspondem." |

| **Critérios de aceitação** |
| --- |
| A mensagem de alerta em vermelho "O nome de usuário e senha não correspondem." deve ser exibida no topo do formulário. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 03: Tentativa de login com campos em branco.

| ID | Descrição |
| --- | --- |
| **C01-CT03** | O login falhará quando os campos Login e Senha estiverem em branco. |

| **Pré-condições** |
| --- |
| Nenhuma. |

| **Passos** |
| --- |
| **DADO** que estamos na página de login do SIFIT |
| **E** deixamos o campo Login em branco |
| **E** deixamos o campo Senha em branco |
| **QUANDO** clicarmos no botão "Entrar" |
| **ENTÃO** uma mensagem de erro aparecerá no topo do formulário: "O nome de usuário e senha não correspondem." |

| **Critérios de aceitação** |
| --- |
| A mensagem de alerta em vermelho "O nome de usuário e senha não correspondem." deve ser exibida no topo do formulário. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 04: Login com a opção "Manter conectado".

| ID | Descrição |
| --- | --- |
| **C01-CT04** | O sistema deve manter a sessão ativa. |

| **Pré-condições** |
| --- |
| As credenciais devem ser válidas. |

| **Passos** |
| --- |
| **DADO** que estamos na página de login |
| **E** marcamos a opção "Manter conectado" |
| **E** realizamos o login com credenciais válidas |
| **QUANDO** fecharmos e reabrirmos o navegador no endereço do SIFIT |
| **ENTÃO** o usuário deve continuar logado |

| **Critérios de aceitação** |
| --- |
| A sessão deve permanecer ativa após reabrir o navegador. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 05: Acessar a recuperação de senha.

| ID | Descrição |
| --- | --- |
| **C01-CT05** | O sistema deve exibir o fluxo de recuperação de senha. |

| **Pré-condições** |
| --- |
| Nenhuma. |

| **Passos** |
| --- |
| **DADO** que estamos na página de login |
| **QUANDO** clicarmos em "Esqueci minha senha" |
| **ENTÃO** deve ser exibida a tela ou janela de recuperação de senha |

| **Critérios de aceitação** |
| --- |
| O fluxo de recuperação deve ser exibido corretamente. |

| **Evidência** |
| --- |
|  |
