
## Cenário de teste: Tema Claro e Escuro. (RF03)

### Caso de Teste 01: Ativar o modo escuro.

| ID | Descrição |
| --- | --- |
| **C03-CT01** | O sistema deve aplicar o tema escuro. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário está na Página Inicial no modo claro |
| **QUANDO** clicar em "Modo escuro" |
| **ENTÃO** a interface deve ser exibida com o tema escuro |

| **Critérios de aceitação** |
| --- |
| Todas as áreas da tela devem mudar para o tema escuro. |

| **Evidência** |
| --- |
| [Vídeo](https://jam.dev/c/2811e10e-0716-4164-8738-6c9ff05ab23b)|

---

### Caso de Teste 02: Manter o tema ao navegar.

| ID | Descrição |
| --- | --- |
| **C03-CT02** | O tema escolhido deve ser mantido em outras telas. |

| **Pré-condições** |
| --- |
| O modo escuro deve estar ativo. |

| **Passos** |
| --- |
| **DADO** que o modo escuro está ativo |
| **QUANDO** o usuário navegar para "Clientes" e "Matrículas" |
| **ENTÃO** as telas devem continuar no tema escuro |

| **Critérios de aceitação** |
| --- |
| O tema deve permanecer na navegação. |

| **Evidência** |
| --- |
| [Vídeo](https://jam.dev/c/a6f508d4-ea9e-4aed-9d64-9a473193e7ff) |

---

### Caso de Teste 03: Voltar para o modo claro.

| ID | Descrição |
| --- | --- |
| **C03-CT03** | O sistema deve restaurar o tema claro. |

| **Pré-condições** |
| --- |
| O modo escuro deve estar ativo. |

| **Passos** |
| --- |
| **DADO** que o modo escuro está ativo |
| **QUANDO** clicar em "Modo claro" |
| **ENTÃO** a interface deve voltar ao tema claro |

| **Critérios de aceitação** |
| --- |
| O tema claro deve ser restaurado. |

| **Evidência** |
| --- |
| [Vídeo](https://jam.dev/c/cc51bf1f-de29-4cb7-aa5c-20628408074c) |
