



## Cenário de teste: Aplicativo. (RF47)

### Caso de Teste 01: Prévia de notificação.

| ID | Descrição |
| --- | --- |
| **C47-CT01** | O sistema deve mostrar a prévia no celular. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário clica em "Criar Notificação" |
| **QUANDO** digitar a mensagem |
| **ENTÃO** a mensagem deve aparecer em "Prévia no celular" |

| **Critérios de aceitação** |
| --- |
| A prévia deve refletir o texto. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 02: Notificação sem mensagem.

| ID | Descrição |
| --- | --- |
| **C47-CT02** | O sistema deve exigir a mensagem. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário está em "Criar Notificação" |
| **E** deixa a mensagem em branco |
| **QUANDO** clicar em "Enviar aviso" |
| **ENTÃO** deve ser exibida validação |

| **Critérios de aceitação** |
| --- |
| A notificação não deve ser enviada. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 03: Filtrar postagens pendentes.

| ID | Descrição |
| --- | --- |
| **C47-CT03** | O sistema deve filtrar postagens. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário está em "Aplicativo" |
| **QUANDO** clicar em "Só pendentes" |
| **ENTÃO** devem aparecer apenas as pendentes |

| **Critérios de aceitação** |
| --- |
| O filtro deve funcionar. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 04: Consultar denúncias.

| ID | Descrição |
| --- | --- |
| **C47-CT04** | O sistema deve exibir as denúncias. |

| **Pré-condições** |
| --- |
| Deve existir denúncia. |

| **Passos** |
| --- |
| **DADO** que o usuário está em "Aplicativo" |
| **QUANDO** abrir uma denúncia |
| **ENTÃO** devem aparecer a postagem, o motivo e quem denunciou |

| **Critérios de aceitação** |
| --- |
| Os dados da denúncia devem aparecer. |

| **Evidência** |
| --- |
|  |
