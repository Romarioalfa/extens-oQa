
## Cenário de teste: Matrículas. (RF11)

### Caso de Teste 01: Cadastrar matrícula.

| ID | Descrição |
| --- | --- |
| **C11-CT01** | O sistema deve matricular um cliente. |

| **Pré-condições** |
| --- |
| Devem existir cliente e plano. |

| **Passos** |
| --- |
| **DADO** que o usuário clica em "Cadastrar Matrícula" |
| **E** seleciona cliente, modalidade, datas, tipo de pagamento e vencimento |
| **QUANDO** clicar em "Salvar" |
| **ENTÃO** a matrícula deve aparecer com status ativo |

| **Critérios de aceitação** |
| --- |
| A matrícula deve ser salva com valor total correto. |

| **Evidência** |
| --- |
|  [Vídeo](https://jam.dev/c/a78ef596-f01c-48e8-8f49-3285299b2482)|

---

### Caso de Teste 02: Cálculo do valor com desconto.

| ID | Descrição |
| --- | --- |
| **C11-CT02** | O valor total deve considerar o desconto. |

| **Pré-condições** |
| --- |
| Devem existir cliente e plano. |

| **Passos** |
| --- |
| **DADO** que o usuário está cadastrando uma matrícula |
| **E** informa um desconto |
| **QUANDO** o valor total for recalculado |
| **ENTÃO** o total deve ser o valor do plano menos o desconto |

| **Critérios de aceitação** |
| --- |
| O cálculo deve estar correto. |

| **Evidência** |
| --- |
|  [Vídeo](https://jam.dev/c/92663c4c-2b28-4e26-8314-4713f87fefc9)|

---

### Caso de Teste 03: Salvar matrícula sem cliente.

| ID | Descrição |
| --- | --- |
| **C11-CT03** | O sistema deve exigir o cliente. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário está em "Cadastrar Matrícula" |
| **E** não seleciona o cliente |
| **QUANDO** clicar em "Salvar" |
| **ENTÃO** deve ser exibida mensagem de validação |

| **Critérios de aceitação** |
| --- |
| A matrícula não deve ser salva. |

| **Evidência** |
| --- |
|[Vídeo](https://jam.dev/c/6fdc283c-aef9-48f0-9f41-f44d686bd2f3)  |

---

### Caso de Teste 04: Cancelar matrícula com motivo.

| ID | Descrição |
| --- | --- |
| **C11-CT04** | O sistema deve cancelar registrando o motivo. |

| **Pré-condições** |
| --- |
| Deve existir matrícula ativa. |

| **Passos** |
| --- |
| **DADO** que o usuário clica em "Cancelar" na matrícula |
| **E** preenche o "Motivo de Cancelamento" |
| **QUANDO** confirmar em "Cancelar Matrícula" |
| **ENTÃO** o status deve mudar para cancelada |

| **Critérios de aceitação** |
| --- |
| O motivo deve ser registrado. |

| **Evidência** |
| --- |
|  [Vídeo](https://jam.dev/c/7f1184b1-d854-42b7-bdbe-d82934c94ef6)|

---

### Caso de Teste 05: Cancelar matrícula sem motivo.

| ID | Descrição |
| --- | --- |
| **C11-CT05** | O sistema deve exigir o motivo. |

| **Pré-condições** |
| --- |
| Deve existir matrícula ativa. |

| **Passos** |
| --- |
| **DADO** que a janela "Cancelar Matrícula" está aberta |
| **E** o motivo está em branco |
| **QUANDO** confirmar |
| **ENTÃO** deve ser exibida mensagem exigindo o motivo |

| **Critérios de aceitação** |
| --- |
| A matrícula deve continuar ativa. |

| **Evidência** |
| --- |
| [Vídeo](https://jam.dev/c/143def4a-42ae-4c46-b125-acd7e52ddcf5) |
