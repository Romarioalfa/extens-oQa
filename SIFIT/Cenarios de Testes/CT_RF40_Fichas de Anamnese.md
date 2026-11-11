


## Cenário de teste: Fichas de Anamnese. (RF40)

### Caso de Teste 01: Aplicar anamnese.

| ID | Descrição |
| --- | --- |
| **C40-CT01** | O sistema deve registrar a anamnese. |

| **Pré-condições** |
| --- |
| Devem existir aluno e modelo. |

| **Passos** |
| --- |
| **DADO** que o usuário clica em "Nova Anamnese" |
| **E** escolhe o aluno e o modelo |
| **E** responde as perguntas |
| **QUANDO** finalizar |
| **ENTÃO** a anamnese deve aparecer na lista |

| **Critérios de aceitação** |
| --- |
| As respostas devem ser salvas. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 02: Anamnese sem aluno.

| ID | Descrição |
| --- | --- |
| **C40-CT02** | O sistema deve exigir o aluno. |

| **Pré-condições** |
| --- |
| O usuário deve estar logado no sistema. |

| **Passos** |
| --- |
| **DADO** que o usuário está em "Nova Anamnese" |
| **E** não seleciona aluno |
| **QUANDO** salvar |
| **ENTÃO** deve ser exibida validação |

| **Critérios de aceitação** |
| --- |
| A anamnese não deve ser salva. |

| **Evidência** |
| --- |
|  |

---

### Caso de Teste 03: Visualizar anamnese.

| ID | Descrição |
| --- | --- |
| **C40-CT03** | O sistema deve exibir as respostas. |

| **Pré-condições** |
| --- |
| Deve existir anamnese. |

| **Passos** |
| --- |
| **DADO** que o usuário está na lista |
| **QUANDO** abrir uma anamnese |
| **ENTÃO** devem aparecer as respostas |

| **Critérios de aceitação** |
| --- |
| As respostas devem ser as registradas. |

| **Evidência** |
| --- |
|  |
