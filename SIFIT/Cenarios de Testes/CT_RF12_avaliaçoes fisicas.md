## Cenário de teste: Avaliações Físicas. (RF12)

### Caso de Teste 01: Cadastrar avaliação.

| ID | Descrição |
| --- | --- |
| **C12-CT01** | O sistema deve agendar uma avaliação. |

| **Pré-condições** |
| --- |
| Devem existir aluno e personal. |

| **Passos** |
| --- |
| **DADO** que o usuário clica em "Cadastrar Avaliação" |
| **E** seleciona o aluno e o personal |
| **QUANDO** salvar |
| **ENTÃO** a avaliação deve aparecer como pendente |

| **Critérios de aceitação** |
| --- |
| A avaliação deve ser criada. |

| **Evidência** |
| --- |
| [Vídeo](https://jam.dev/c/ce96a164-adb2-4820-a4b0-fba8de1444a2) |

---

### Caso de Teste 02: Calcular IMC.

| ID | Descrição |
| --- | --- |
| **C12-CT02** | O sistema deve calcular o IMC. |

| **Pré-condições** |
| --- |
| Deve existir avaliação pendente. |

| **Passos** |
| --- |
| **DADO** que o usuário clica em "Fazer Avaliação" |
| **E** preenche Altura "1,75" e Peso "70" |
| **QUANDO** salvar |
| **ENTÃO** o IMC deve ser 22,86 |

| **Critérios de aceitação** |
| --- |
| O IMC deve ser peso ÷ altura². |

| **Evidência** |
| --- |
| [Vídeo](https://jam.dev/c/01862a7e-e58d-4156-a5c6-6ba91d580dee) |

---

### Caso de Teste 03: Preencher circunferências e composição corporal.

| ID | Descrição |
| --- | --- |
| **C12-CT03** | O sistema deve salvar as medidas e o teste físico. |

| **Pré-condições** |
| --- |
| Deve existir avaliação pendente. |

| **Passos** |
| --- |
| **DADO** que o usuário está fazendo a avaliação |
| **E** preenche medidas nas abas "Circunferência", "Teste Físico" e "Composição Corporal" |
| **QUANDO** salvar |
| **ENTÃO** as medidas devem ser salvas na avaliação |

| **Critérios de aceitação** |
| --- |
| As medidas devem aparecer ao visualizar a avaliação. |

| **Evidência** |
| --- |
| [Vídeo](https://jam.dev/c/41a58fc7-6347-41ca-b7d2-67418fd1b01c) |

---

### Caso de Teste 04: Alterar data e hora.

| ID | Descrição |
| --- | --- |
| **C12-CT04** | O sistema deve reagendar a avaliação. |

| **Pré-condições** |
| --- |
| Deve existir avaliação pendente. |

| **Passos** |
| --- |
| **DADO** que o usuário clica em "Alterar" |
| **E** informa nova data e hora |
| **QUANDO** salvar |
| **ENTÃO** a lista deve mostrar a nova data e hora |

| **Critérios de aceitação** |
| --- |
| A alteração deve ser persistida. |

| **Evidência** |
| --- |
|  [Vídeo](https://jam.dev/c/d9bb0f6e-da77-4371-90be-71c6053f0ea9)|

---

### Caso de Teste 05: Comparar avaliações.

| ID | Descrição |
| --- | --- |
| **C12-CT05** | O sistema deve comparar duas avaliações. |

| **Pré-condições** |
| --- |
| O aluno deve ter duas avaliações. |

| **Passos** |
| --- |
| **DADO** que o usuário clica em "Comparação" |
| **E** seleciona a avaliação antiga e a nova |
| **QUANDO** clicar em "Comparar" |
| **ENTÃO** as medidas devem aparecer lado a lado |

| **Critérios de aceitação** |
| --- |
| As diferenças devem ser exibidas. |

| **Evidência** |
| --- |
| [Vídeo](https://jam.dev/c/bffc0077-3af0-4a1d-81a4-d345498e9ed5) |

---

### Caso de Teste 06: Gerar PDF da avaliação.

| ID | Descrição |
| --- | --- |
| **C12-CT06** | O sistema deve gerar o relatório em PDF. |

| **Pré-condições** |
| --- |
| Deve existir avaliação realizada. |

| **Passos** |
| --- |
| **DADO** que o usuário visualiza a avaliação |
| **QUANDO** clicar em "Relatório completo (PDF)" |
| **ENTÃO** o PDF deve ser gerado com os dados |

| **Critérios de aceitação** |
| --- |
| O PDF deve abrir sem erros. |

| **Evidência** |
| --- |
|  [Vídeo](https://jam.dev/c/b6c96e9a-ed1f-46fa-acc4-218fd4257a41)|
