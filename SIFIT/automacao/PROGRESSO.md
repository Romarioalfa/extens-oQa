# Progresso: RF27 a RF47 (sifitalfa)

Atualizado a cada RF concluído. **Para retomar:** leia este arquivo, `CLAUDE.md` e `resultados.json` (resultado e link de cada caso). Depois siga a seção "Retomar".

## Retomar (passo a passo)
1. `cd C:\Users\heitor.correa\AAAAAAAAAAAHDNYS\sifit-auto`
2. `node abrir.js` em segundo plano. Se a página cair em `/login`, **o usuário refaz o login** (SIFIT: `marcelo_zandonadi`; Jam: "Work email"). Claude nunca digita senha.
3. Pegar o próximo RF com status `pendente` ou `parcial` na tabela abaixo.
4. `node explorar.js <rota> "<botão>"` → escrever `casos/rfNN.js` (modelo: `casos/rf18.js`) → `node rodar.js --seco RFNN` → `node rodar.js RFNN`.
5. `node evidencias.js` (só preenche "Evidência" vazia dos `.md` em `../extens-oQa`). **Não commitar** sem o usuário pedir.
6. Atualizar a linha do RF aqui.

## Status
Legenda: `pendente` · `parcial` (alguns casos gravados) · `feito` (todos os casos executados e gravados ou justificados) · `pulado` (motivo na coluna)

| RF | Tela (rota) | Status | Observação |
| --- | --- | --- | --- |
| 27 | Prospecção `/prospeccao` | casos prontos, 4/4 passam a seco | **falta gravar no Jam** |
| 28 | Planos `/planos` | pendente | |
| 29 | Modelos de Contrato `/modelos-contrato` | pendente | |
| 30 | Tipos de Pagamento `/tipos-pagamento` | casos prontos (a seco) | **falta gravar no Jam.** CT02 falha: com "Escolher Bandeira = Sim" não há como escolher a bandeira |
| 31 | Bandeiras `/bandeiras` | casos prontos (a seco) | **falta gravar no Jam.** CT01/CT02 falham: bandeira criada (201) não aparece na lista |
| 32 | Colaboradores `/colaboradores` | pendente | |
| 33 | Funções `/funcoes` | pendente | |
| 34 | Fornecedores `/fornecedores` | casos prontos (a seco) | **falta gravar no Jam.** CT01 e CT03 falham (erro 500 do servidor); CT04 inconclusivo (`semJam`, sem fornecedor de teste) |
| 35 | Tipos de Documentos `/tipos-documento` | pendente | |
| 36 | Atividades `/atividades` | pendente | |
| 37 | Pontuação `/pontuacao` | pendente | |
| 38 | Produtos `/produtos` | pendente | |
| 39 | Enquetes `/enquetes` | pendente | |
| 40 | Fichas de Anamnese `/anamneses` | pendente | |
| 41 | Modelos de Anamnese `/anamnese/modelos` | pendente | IDs `C41-*` (no repositório o arquivo é `CT_RF42_Modelos...`); código vai em `casos/rf41.js` |
| 42 | Categorias de Anamnese `/anamnese/categorias` | casos prontos, 3/3 passam a seco | IDs `C42-*` (arquivo `CT_RF41_Categorias...`); **falta gravar no Jam** |
| 43 | Perguntas de Anamnese `/perguntas-anamnese` | casos prontos (a seco) | **falta gravar no Jam.** CT02 falha: erro 500 em vez de validação |
| 44 | Inteligência e Automação `/inteligencia-automacao` | pendente | |
| 45 | Configurações `/configuracoes` | casos escritos, NÃO validados | CT01 passou. CT02/CT03 deram timeout: os controles da aba **Home** ("Dias para contar cliente como ausente", "Cobrar multa por atraso?") não são `input`/`select` como supus; inspecionar. Escritas da API ficam bloqueadas nesses casos |
| 46 | Modelo de Ficha `/fichas-treino-modelo` | pendente | |
| 47 | Aplicativo `/aplicativo` | casos escritos, NÃO validados | Rodou com a sessão expirada (tudo deu timeout). Reexecutar a seco depois do login. Escritas bloqueadas no CT02 (não notifica alunos) |

## ESTADO AO PARAR (leia primeiro)
**Dois bloqueios dependem do usuário:**
1. **Sessão do SIFIT expirada.** Reiniciar o Chromium isolado apagou o login (cookie de sessão); a aba cai em `/login`. O usuário precisa logar de novo na janela SIFIT-QA (usuário `marcelo_zandonadi`, marcando "Manter conectado"). O Jam continua logado.
2. **PC na tela de bloqueio do Windows** (`LockApp`): o atalho do Jam não chega ao navegador, então não dá para gravar. Gravar só com o PC desbloqueado e o usuário sem digitar.
**Não reiniciar o Chromium sem necessidade** (perde o login). Se `connectOverCDP` travar: fechar a aba presa com `curl http://127.0.0.1:9333/json/close/<id>` e abrir outra com `curl -X PUT "http://127.0.0.1:9333/json/new?https://sifitalfa.centrion.com.br/dashboard"`.

**Ordem sugerida na retomada:** (a) usuário loga no SIFIT; (b) `node rodar.js --seco RF44 RF45 RF47` e corrigir os 3 pontos acima; (c) escrever e validar a seco os RFs que faltam: 28, 29, 32, 37, 40, 41, 46; (d) com o PC desbloqueado, gravar um RF por vez: `node rodar.js RF27` ... `RF47`; (e) `node evidencias.js`; (f) bugs e relatório final.

**Notas para os RFs que faltam (já mapeados):**
- **RF28 Planos** (`/planos`, `.pla-btn-cadastrar`, `.pla-btn-salvar`, excluir `.pla-action-red`): campos Nome, Grupo (select), Status, Cobrança, Parcelas, Valor Mensal, Valor Matrícula, Tem Personal?, Função dos Professores, Dependentes, benefícios (`.pla-btn-add-beneficio`). **Cuidado:** existe o passo "Salvar também na Pagar.me" (`.pla-pagarme-confirm`): NÃO confirmar, escolher só SIFIT. Casos: CT01 cadastrar, CT02 sem valor mensal, CT03 adicionar benefício, CT04 ranking "Planos com mais alunos" (leitura).
- **RF29 Modelos de Contrato**: o cadastro abre `/adicionar-modelo-contrato` (campos `.mc-input` título, `.mc-select` status, editor de texto rico, `.mc-btn-salvar`). A lista inicial não tinha tabela (0 linhas): ver como a lista se apresenta.
- **RF32 Colaboradores**: o cadastro abre `/adicionar-colaborador` (formulário longo: radios Admin/Normal/Sem login, Nome, Status, Sexo, Login, Senha..., `.btn_salvar`/`.btn_cancelar`). Precisa de função (RF33). Atalho "Funções" abre "Gerenciar Funções".
- **RF37 Pontuação**: modal com Nome, Tipo, Status, Produto + `.pnt-btn-add`, datas em `.pnt-datepicker` (calendário próprio, somente leitura: clicar no campo e escolher o dia, use dias 10 a 25 para não repetir com o mês vizinho). Linhas têm Visualizar, Atividades, Participantes, Pedidos de Tarefa, Deletar (`.pnt-action-red`).
- **RF40 Fichas de Anamnese** (`/anamneses`, `.ana-btn-new`): assistente com busca de aluno (`.apan-busca-input`) e "Próxima". Usar o cliente `QA14555 Cliente Teste` (código 444).
- **RF41 Modelos de Anamnese** (`/anamnese/modelos`, IDs `C41-*`): lista de cartões com Preview (`.man-action-preview`) e excluir (`.man-action-delete`); "Novo Modelo" vai para `/anamnese/modelos/novo` (campos `.amb-input`, busca de perguntas `.amb-banco-input`, `.amb-add-btn`). O CT02 reproduz o BUG-004 já registrado (preview diz que não há perguntas).
- **RF46 Modelo de Ficha** (`/fichas-treino-modelo`): "Nova Ficha" (`.ftm-btn-cadastrar`) abre formulário com "Nome do Modelo" e "Personal" (select) e botão "Criar Modelo" (`.ftm-cad-btn-save`); excluir `.ftm-action-red`; busca por título `.ftm-input`.

## Bloqueio atual: gravação no Jam
Às ~11h o PC estava na **tela de bloqueio do Windows** (`LockApp`). Com a sessão bloqueada, o atalho de teclado do Jam não chega ao Chromium, então **nenhuma gravação foi feita nesta rodada**. Enquanto isso os casos estão sendo escritos e validados com `--seco`.
**Quando o PC estiver desbloqueado e o usuário não estiver digitando**, rodar gravado, um RF por vez: `node rodar.js RF27`, `node rodar.js RF30`... (cada RF leva alguns minutos; a janela SIFIT-QA vem para frente).

## Bugs novos desta rodada (ainda não escritos em `3-Relatorio de Bugs.md`)
- **RF31** `C31-CT01/CT02`: cadastrar bandeira retorna 201 (`{"verifica_erro":false,"id":42}`), mas a listagem (`POST bandeiras/1`) devolve `[]` e a tela diz "Nenhuma bandeira encontrada". Bandeiras criadas ficam invisíveis (e não dá para excluí-las pela tela).
- **RF31** (exploratório): salvar com "Taxa Adicional" vazio dá **erro 500** (`cria/bandeira/1`: "Erro interno inesperado") em vez de validar ou assumir 0,00.
- **RF30** `C30-CT02`: documentação pede "Escolher Bandeira" e vincular; o formulário só tem o select Sim/Não e nenhuma forma de escolher a bandeira.
- **RF30** `C30-CT01`: o formulário não tem campo "Status" (a documentação cita Nome, Status e Tipo).

- **RF36** `C36-CT02`: salvar atividade com todos os campos em branco **é aceito** (POST `salvar-atividade/1` → 201, sem validação); a lista mostra a atividade sem nome.
- **RF38** `C38-CT01`: preço no formato brasileiro `25,00` → erro 400 (`criar-produto/1`: "Data truncated for column 'val...'"). Com `25` ou `25.00` salva normalmente.
- **RF38** `C38-CT02`: produto em branco mostra só "Erro ao salvar produto" (400 genérico), não uma validação de campo obrigatório.
- **RF39** `C39-CT01/CT02`: cadastrar enquete (`POST enquete/salvar/1` → 200, corpo `44`) mostra "Erro ao salvar enquete" e grava a enquete **sem pergunta e sem respostas** ("Sem pergunta cadastrada"); sem respostas também é gravada.

- **RF34** `C34-CT01/CT03`: `POST salvar-fornecedor/1` devolve **500** ("Erro interno inesperado") sempre; com CNPJ inválido (`11.111.111/1111-11`) o servidor também dá 500 em vez de validar o CNPJ.
- **RF33**: a tela de Funções não tem botão de excluir (só Permissões e Visualizar).

- **RF43** `C43-CT02`: salvar pergunta sem texto → `POST pergunta-anamnese/salvar/1` **500** ("Erro interno inesperado") em vez de validação de campo obrigatório.

## Sobras no ambiente (não removíveis pela tela)
- Função `QA14555 Funcao` (RF33; a tela não exclui; uma por execução do CT01, então são 2 depois dos testes a seco).
- Bandeiras `QA14555 Bandeira...` (ids 40 a ~46), invisíveis na lista por causa do bug do RF31.

## Pendências no fim
- Escrever os bugs novos em `../3-Relatorio de Bugs.md` e atualizar `4-Relatorio dos testes.md` (totais, cobertura).
- Decidir com o usuário: links do Jam ou `.mp4` no repositório (`baixar_videos.js`).
- Excluir `QA14555 Cliente Teste` (código 444) quando o último RF que o usa terminar.
- Sobra no ambiente: grupo `QA14555 Grupo` (#22), preso por erro 500 ao excluir.
