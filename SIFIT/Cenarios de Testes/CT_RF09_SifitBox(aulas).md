## Cenário de teste: SifitBox (Aulas). (RF09)

### Caso de Teste 01: Consultar aulas por data.

| ID | Descrição |
| --- | --- |
| **C09-CT01** | O sistema deve listar as aulas da data. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário acessa o endereço sifit.centrion.com.br/sifitbox/aulas (a tela não aparece no menu) |
| **E** seleciona uma data |
| **QUANDO** clicar em "Buscar" |
| **ENTÃO** devem ser exibidas as aulas da data |

| **Critérios de aceitação** |
| --- |
| As aulas devem pertencer à data selecionada. |

| **Evidência** |
| --- |
| [Vídeo](https://jam.dev/c/fa64dfc4-69b5-4626-a643-e8f7ef77173d) |

---

### Caso de Teste 02: Gerar aulas.

| ID | Descrição |
| --- | --- |
| **C09-CT02** | O sistema deve gerar aulas das turmas recorrentes. |

| **Pré-condições** |
| --- |
| Deve existir turma recorrente ativa. |

| **Passos** |
| --- |
| **DADO** que o usuário está em "SifitBox - Aulas" |
| **QUANDO** clicar em "Gerar aulas" |
| **ENTÃO** as aulas devem ser criadas conforme as turmas |

| **Critérios de aceitação** |
| --- |
| As aulas devem respeitar dias e horários. |

| **Evidência** |
| --- |
| [Vídeo](https://jam.dev/c/59ece0c3-d92a-4970-a567-23613e9615be) |

---

### Caso de Teste 03: Gerar aulas sem turmas.

| ID | Descrição |
| --- | --- |
| **C09-CT03** | O sistema deve informar quando não há turmas. |

| **Pré-condições** |
| --- |
| Não deve existir turma recorrente ativa. |

| **Passos** |
| --- |
| **DADO** que não há turmas recorrentes |
| **QUANDO** clicar em "Gerar aulas" |
| **ENTÃO** deve ser exibida mensagem informativa |

| **Critérios de aceitação** |
| --- |
| Nenhuma aula deve ser gerada e não deve ocorrer erro. |

| **Evidência** |
| --- |
| [Vídeo](https://jam.dev/c/ddddd648-e5c6-4719-9780-70d61640c587) |
