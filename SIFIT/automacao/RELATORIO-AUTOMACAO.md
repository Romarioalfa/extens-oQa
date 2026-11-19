# Automação dos testes do SIFIT com evidência no Jam: relatório da sessão de 19/11/2026

Este documento registra o que foi feito, o que deu certo, o que deu errado e por quê. Ele serve de base para rodar o FindSkills e achar skills que facilitem a próxima rodada.

---

## 1. Objetivo e escopo

- **Objetivo:** executar automaticamente os casos de teste documentados em `extens-oQa/SIFIT/Cenarios de Testes/`. Cada caso precisa:
  - ser gravado em vídeo com a extensão **Jam**, como a documentação pede;
  - ter o link (ou o arquivo) colocado no campo "Evidência";
  - quando falhar, gerar um bug em `3-Relatorio de Bugs.md` e entrar no `4-Relatorio dos testes.md`.
- **Ambiente:** `https://sifitalfa.centrion.com.br`, o mesmo do repositório oficial (`sifit.centrion.com.br`), porém mais estável. Login `marcelo_zandonadi`. É compartilhado com a turma.
- **Escopo combinado daqui para frente:** **RF27 ao RF47**.
  - RF13 e RF14 foram executados e gravados nesta sessão, mas **não fazem parte do nosso escopo**. O commit foi desfeito e o backup está em `backup-rf13-rf14/`.
  - Os casos do RF16 ao RF19 foram escritos e testados a seco (sem gravação). Também estão fora do escopo; ficam como exemplo de código.
- **Regras de dados:**
  - todo dado de teste leva o prefixo `QA14555` (RA), como manda o plano de testes;
  - o que o teste cria é excluído no fim;
  - registros de outros alunos não são alterados.

---

## 2. Como está montado (pasta `sifit-auto/`, fora do repositório)

| Arquivo | Função |
| --- | --- |
| `abrir.js` | Abre um **Chromium do Playwright com perfil próprio** (`perfil/`) e a **extensão Jam carregada** (`jam-ext/`, copiada do Chrome do usuário). Expõe CDP na porta 9333 e precisa ficar rodando. |
| `jam-tecla.ps1` | Aperta o atalho do Jam (`Ctrl+Shift+Space`, "Start/stop tab recording") **somente na janela do Chromium do Playwright**. A janela é escolhida pelo processo dentro de `ms-playwright`, nunca pelo título. |
| `lib.js` | Faz a conexão via CDP. Também tem as pausas para o vídeo ficar legível, a espera de carregamento (`carregada`) e a digitação lenta. Para o Jam: `jamIniciar` (atalho com novas tentativas), `jamParar` (clica em parar, preenche título e descrição e clica em "Create") e `jamDescartar`. |
| `rodar.js` | Executa os casos: `node rodar.js RF27`, `node rodar.js C27-CT01 C27-CT03` ou `node rodar.js --seco RF27` (sem Jam, para depurar). Para cada caso: abre a tela, inicia o Jam, roda o teste, para, cria o Jam, pega o link e salva em `resultados.json`. Cada RF tem `antes` (preparo fora da gravação) e `limpar` (antes e depois). |
| `casos/comum.js` | Helpers da interface do SIFIT: `modal`, `campo` (input depois do label), `dialogo`, `confirmar` e `cancelarDialogo` (diálogo próprio `.sdl-panel`), `mensagens`, `escolherNoPicker` (seletores "Buscar Cliente/Fornecedor/Colaborador"), `salvarEVer`, `buscar`, `excluirLinhas`, `resultadoValidacao`. |
| `casos/rfNN.js` | Um arquivo por RF, com os casos (`nome`, `run` → `{status, obs}`), `antes` e `limpar`. Existem o rf13, rf14, rf16, rf17, rf18 e rf19. |
| `dados.js` | Preparo de dados: `garantirCliente` (`QA14555 Cliente Teste`, código 444) e `garantirFornecedor` (não funciona, porque o SIFIT devolve erro 500). |
| `explorar.js` | Mapeia uma tela: `node explorar.js rota "Texto do botão"` ou `node explorar.js rota .classe-do-botao`. Lista os controles visíveis com label, placeholder, opções e classes, antes e depois de abrir o formulário. |
| `evidencias.js` | Escreve os links do Jam no campo "Evidência" vazio dos `.md`. Não sobrescreve vídeos que já existem. |
| `baixar_videos.js` | Baixa o vídeo de cada Jam como `.mp4`: pega o manifesto HLS do Cloudflare Stream e junta o `init.mp4` com os trechos. |
| `checar_videos.js` | Abre cada `.mp4` no Chromium e confere a duração e a resolução, para ter certeza de que o arquivo toca. |
| `resultados.json` | Resultado de cada caso: `status`, `obs`, `link`, se foi seco e quando rodou. |

**Para retomar:**
1. `cd sifit-auto`
2. `node abrir.js`, que deve ficar aberto (rode em segundo plano). Os logins do SIFIT e do Jam ficam salvos no perfil.
3. Para cada RF: `node explorar.js <rota> "<botão>"`, depois escrever `casos/rfNN.js`, depois `node rodar.js --seco RFNN`, depois `node rodar.js RFNN`.
4. Por fim: `node evidencias.js` e, se quiser os arquivos, `node baixar_videos.js` e `node checar_videos.js`.

---

## 3. Dificuldades (problema → causa → solução)

### 3.1 Jam não é controlável por automação comum
- **Problema:** o pedido era automação total com gravação no Jam. O Jam só começa a gravar pelo botão da extensão na barra do Chrome.
- **Causa:**
  - o Playwright e as ferramentas do Claude in Chrome só controlam o **conteúdo** da página, não a barra do navegador;
  - o "computer use" não estava disponível nesta sessão, e mesmo quando está, ele só dá leitura em navegadores.
- **Solução:**
  - O manifest do Jam declara **atalhos de teclado**: `toggle-video` = `Ctrl+Shift+Space`. Atalho de extensão responde a tecla real do sistema, então um PowerShell com `keybd_event` dispara a gravação.
  - O manifest também tem o campo `key`. Por isso uma **cópia da extensão** carregada no Chromium do Playwright mantém o **mesmo ID** (`iohjgamcilhbgmhbnllfolmkmmekfmci`), e o login do Jam continua funcionando.
  - A barra do Jam aparece **dentro da página** (`<jam-ui id="__jam-ui">` com shadow DOM aberto). O botão de parar é `[data-testid=record-button]`. Ao parar, o modal de criação abre num iframe `chrome-extension://.../iui.html`, com o editor ProseMirror (título, Enter, descrição) e o botão "Create". O link `https://jam.dev/c/<uuid>` aparece no iframe ou numa aba nova.
- **Facilidade que isso trouxe:** só o **início** precisa de tecla do sistema. Parar, dar título, descrever e criar é tudo Playwright.

### 3.2 Login
- O Claude não digita senhas, nem quando o usuário passa a senha. Por isso o login do SIFIT e do Jam foi feito **uma vez pelo usuário** na janela isolada, e o perfil persistente guarda as sessões.
- O **login Google do Jam é bloqueado** em navegador automatizado ("este navegador pode não ser seguro"). Isso é proteção anti-bot do Google e não foi burlado. A solução foi usar o **login por e-mail** do Jam ("Work email"), que manda um código.

### 3.3 Segurança e privacidade da automação de teclado/tela
- Um print da área de trabalho inteira capturou o WhatsApp e os e-mails do usuário. O arquivo foi apagado e não se tira mais print do desktop; só o Playwright fotografa a página.
- Mandar teclas para o Chrome pessoal era arriscado. A aba do SIFIT estava dentro de um grupo recolhido, e o foco foi parar em outra janela. Por isso se criou a **janela isolada**, e o `jam-tecla.ps1` só envia a tecla se **essa** janela estiver comprovadamente em primeiro plano.
- O **Windows bloqueia roubo de foco** quando o usuário está usando o PC, o que fez um caso falhar. A solução foi usar `AttachThreadInput`, `BringWindowToTop` e `SetForegroundWindow`, com até 6 tentativas, e repetir o atalho até 4 vezes se a barra do Jam não aparecer.
- **Efeito colateral:** a cada caso, a janela SIFIT-QA vem para frente e atrapalha quem estiver usando o PC.

### 3.4 Interface do SIFIT (o que mais consumiu tempo)
- Os modais são `.vue-modal`, não Bootstrap `.modal.show` nem `role=dialog`.
- Avisos e erros usam um **diálogo próprio** `.sdl-panel`, com variações `--warning/--error/--confirm/--success`, título `.sdl-title`, mensagem `.sdl-message` e botões `.sdl-btn` (`--cancel` para cancelar).
  - O fundo `.sdl-overlay` **bloqueia cliques** até ser fechado. Várias limpezas travaram por isso.
  - Num aviso de validação, o botão "Continuar" pode significar "continuar mesmo assim". Por isso, em validação se clica em **Cancelar/X**.
- Os labels são maiúsculos via CSS e têm ícone dentro, então regex com `^...$` falha. Use `/status/i`.
- Placeholders se repetem na página (filtro da lista e campo do modal). É preciso usar classe, por exemplo `input.cr-input[placeholder=...]`.
- Os campos de cliente e fornecedor são **somente leitura** e se preenchem pelo botão "Pesquisar". Ele abre um seletor "Buscar X" com o botão `.btn-selecionar` em cada linha.
- Botões de cadastrar às vezes são **só ícone**, como `.gmu-btn-cadastrar` e `.gru-btn-cadastrar`. As ações das linhas são `*-btn-action` (ver) e `*-action-red` (excluir).
- Os datepickers são somente leitura (`.cad-datepicker`, `.cp-datepicker`).
- Os códigos são reaproveitados (o sistema usa o maior código + 1). Ver o mesmo código depois de excluir não quer dizer que a exclusão falhou.
- Algumas telas não aparecem no menu e só abrem pela URL: `/checkin`, `/sifitbox/aulas`, `/sifitbox/turmas`, `/categorias-exercicios-crossfit`.

### 3.5 Detecção de resultado (falsos positivos)
- No C13-CT03, o regex que procurava um campo de "cópias" bateu no **próprio rótulo** "CRIAR CÓPIAS", e o caso pareceu "pediu a quantidade". A correção foi **conferir o corpo da requisição** (`page.on('request')`), que provou que a opção nem é enviada.
- Um "Erro ao salvar" genérico na tela escondia a mensagem real do servidor ("Já existe uma conta... com os mesmos dados"). Ouvir a resposta da API (`page.on('response')`) mostra a causa real.
- **Lição:** em caso negativo ou de bug, sempre registre a requisição e a resposta, não só a tela.

### 3.6 Dados de teste e ambiente compartilhado
- **Pré-condições:** cliente, fornecedor, grupo muscular e conta para visualizar são criados no `antes` de cada RF, fora da gravação.
- **Cadastro de fornecedor quebrado** (erro 500 sempre): o RF14 usou um fornecedor de teste que já existia ("Fornecedor Teste Keltton").
- **Excluir grupo** (`/grupos`) dá erro 500, então o grupo `QA14555 Grupo` (#22) ficou no ambiente.
- Rodar a seco também cria dados, mas a limpeza roda antes e depois de cada RF.

### 3.7 Ferramentas e terminal
- **Git Bash converte caminhos:** `node explorar.js /contas-pagar` virou `C:/Program Files/Git/contas-pagar`. Solução: passar a rota sem a barra (ou usar `MSYS_NO_PATHCONV=1`).
- Um heredoc grande com aspas quebrou o parse do bash ("unexpected EOF"). Solução: criar arquivos com a ferramenta de escrita, não com heredoc.
- `Get-Process` mostra só uma janela por processo do Chrome. Para achar as janelas é preciso `EnumWindows`.
- **Sem ffmpeg completo:** o do Playwright é mínimo, e o `winget` está **bloqueado por política de grupo**. O vídeo foi montado juntando os trechos fMP4 (só a trilha de vídeo, sem áudio, porque as gravações não têm microfone).
- O Jam **não oferece download** no plano atual; o menu tem só "Move to folder" e "Delete". Por isso o vídeo é baixado do HLS (`customer-*.cloudflarestream.com/.../manifest/video.m3u8`).

### 3.8 Processo
- Uma tarefa paralela, disparada pelo usuário, criou a branch `evidencias` e commitou RF13 e RF14. Depois o usuário pediu para desfazer, porque o escopo é RF27 em diante.
- Em toda conversa nova é preciso recompor o contexto: rotas, padrões e onde estão os scripts. Este arquivo existe para isso.

---

## 4. Facilidades (o que funcionou bem)
- A **cópia da extensão com `key` no manifest** preserva o ID e o login do Jam. Isso destravou tudo.
- Os **atalhos do Jam** estão no `manifest.json`, e as preferências do Chrome confirmam que estão ativos (`extensions.commands`).
- A **barra e o modal do Jam ficam na página**, com `data-testid` estável: `record-button`, `pause-button`, `toolbar-container`, `comment-modal`.
- O **Playwright via CDP** num navegador que fica aberto permite rodar scripts curtos e repetidos sem novo login.
- O SIFIT é **muito padronizado**: cada tela tem filtro, botão "Novo", modal, tabela e ações ver/excluir com prefixo de classe próprio (`cp-`, `cr-`, `gmu-`, `gru-`, `obj-`, `forn-`). Os helpers genéricos cobrem a maior parte.
- O `explorar.js` reduziu muito o tempo para mapear uma tela nova.
- A **execução seca** (`--seco`) antes da gravada evita gastar Jams com erro de seletor.
- O Jam grava os logs de rede e de console junto do vídeo, o que é uma boa evidência de bug.

---

## 5. Bugs encontrados até agora

| Onde | Bug | Evidência |
| --- | --- | --- |
| RF13 / C13-CT03 | "Criar cópias = Sim" não mostra campo de quantidade, a requisição não envia a opção e só 1 conta é criada | Jam `0563185b-...` (backup) |
| RF13 | Erro do servidor ("conta duplicada") aparece só como "Erro ao salvar conta a receber" | log de rede |
| RF13 | O formulário de conta a receber já abre com Status "Recebido" e envia `valor_recebido` e `data_recebimento` mesmo com status Pendente | observação |
| RF14 / C14-CT03 | Conta a pagar é salva **sem fornecedor e sem colaborador**, sem nenhuma validação | Jam `95e46ff6-...` (backup) |
| **RF34** / C34-CT01 | **Cadastro de fornecedor sempre dá erro 500** ("Erro interno inesperado"), em pessoa física ou jurídica, com ou sem endereço | log de rede (sem Jam ainda) |
| RF19 / C19-CT03 | Excluir grupo dá erro 500 ("Erro ao deletar Grupo") | log de rede (sem Jam ainda) |
| Segurança | O token JWT de sessão vai no **corpo** das requisições e acaba nos logs de rede dos Jams; quem tem o link vê o token (expira em cerca de 12 h) | Jams |

Os bugs que já estavam no repositório (BUG-001 a BUG-005) continuam sem vídeo ("a anexar").

---

## 6. Estado do ambiente sifitalfa ao fim da sessão
- **Fica de propósito:** cliente `QA14555 Cliente Teste` (código 444), usado como pré-condição.
- **Ficou sem querer:** grupo `QA14555 Grupo` (#22, em Grupos), porque a exclusão retorna 500.
- Contas a receber, contas a pagar, grupo muscular, exercício e objetivo `QA14555` foram **todos removidos**.

---

## 7. Próximos passos: RF27 ao RF47

Rotas (do menu): `/prospeccao` (27), `/planos` (28), `/modelos-contrato` (29), `/tipos-pagamento` (30), `/bandeiras` (31), `/colaboradores` (32), `/funcoes` (33), `/fornecedores` (34), `/tipos-documento` (35), `/atividades` (36), `/pontuacao` (37), `/produtos` (38), `/enquetes` (39), `/anamneses` (40), `/anamnese/modelos` e `/anamnese/categorias`, `/perguntas-anamnese` (43), `/inteligencia-automacao` e `/inteligencia/resultados` (44), `/configuracoes` (45), `/fichas-treino-modelo` (46), `/aplicativo` (47).

Pontos de atenção já conhecidos:
- **RF41 e RF42 estão com os arquivos trocados.**
  - `CT_RF41_Categorias de Anamnese.md` usa os IDs `C42-*`.
  - `CT_RF42_Modelos de Anamnese.md` usa os IDs `C41-*`.
  - O `evidencias.js` procura pelo **ID**, então funciona mesmo assim. Vale corrigir os nomes.
- **RF34:** o C34-CT01 vai falhar (erro 500). O C34-CT04 (editar) depende de um fornecedor de teste, que não dá para criar. Então ou ele fica inconclusivo, ou usa um fornecedor que já existe (pedir autorização antes de alterar dado de outro aluno).
- **RF28 (Planos)** precisa de grupo (`antes`). Lembrar que um grupo criado não sai mais (erro 500 ao excluir), então é melhor usar um grupo que já existe, só para leitura.
- **RF32 (Colaboradores)** precisa de função (RF33).
- **RF40 (Fichas de Anamnese)** precisa de aluno (o cliente 444) e de modelo.
- **RF45 (Configurações):** não salvar nada; os casos são de cancelar e de validação. Cuidado com o botão "Salvar Configurações".
- **RF47 (Aplicativo):** "Enviar aviso" manda **notificação de verdade para os alunos**. Executar só até a validação, ou marcar como não executado; não enviar.
- **Execução anterior sem vídeo:** C28-CT04, C39-CT03, C41-CT01/02, C44-CT01..04, C45-CT01, C46-CT03, C47-CT01/03 foram executados em 17 e 18/11, mas o campo de evidência está vazio, então serão regravados.
- Ao final: atualizar `3-Relatorio de Bugs.md` (bugs novos com vídeo), `4-Relatorio dos testes.md` (totais e cobertura) e decidir entre links do Jam e `.mp4` no repositório (os 9 vídeos do RF13/14 somaram 9,9 MB).

---

## 8. Onde uma skill poderia facilitar (para o FindSkills)
- **Automação de testes web com Playwright:** padrões de page objects, espera de carregamento, execução seca e com gravação.
- **Gravação de evidências e vídeo:** integração com Jam (MCP ou API do Jam, para criar e baixar Jams sem atalho de teclado) ou gravação nativa do Playwright (`recordVideo`) como alternativa.
- **Processamento de vídeo:** ffmpeg portátil ou uma skill que junte HLS e áudio sem instalar nada (o winget é bloqueado).
- **Gestão de casos de teste em Markdown:** gerar e atualizar tabelas Gherkin, relatórios de bug e relatório final a partir de um JSON de resultados.
- **QA e relatório de bugs:** um template que já inclua requisição e resposta de rede como evidência.
- **Controle de janela e foco no Windows:** algo mais confiável que `keybd_event`, de preferência um jeito oficial de acionar a extensão.
