# sifit-auto: testes do SIFIT gravados no Jam

Automação Playwright que executa os casos de `../Cenarios de Testes/` em `https://sifitalfa.centrion.com.br` e grava cada caso no Jam. A técnica do Jam está na skill **jam-playwright-evidence**. O histórico detalhado, as dificuldades e os bugs ficam em `RELATORIO-AUTOMACAO.md`.

## Escopo e regras
- **Só do RF27 ao RF47.** Os RFs anteriores são de outros integrantes do grupo. Não executar nem commitar.
- Dados de teste sempre com o prefixo `QA14555` (RA). O que o teste cria é excluído no `limpar`. Não alterar registros de outros alunos.
- Nunca digitar senha: o usuário faz o login uma vez na janela isolada.
- **RF45 (Configurações):** não clicar em "Salvar Configurações" com valor real.
- **RF47 (Aplicativo):** não enviar notificação de verdade ("Enviar aviso").
- **RF24 (Pagar.me):** sem cobrança real.
- Commit ou push só quando o usuário pedir.

## Como rodar
1. `node abrir.js` (em segundo plano). Abre o Chromium isolado com o Jam e CDP na porta 9333, com os logins salvos em `perfil/`.
2. `node explorar.js <rota-sem-barra> "<botão>"` ou `node explorar.js <rota> .classe-do-botao`, para mapear a tela.
3. Escrever `casos/rfNN.js`: `{ inicio, antes?, casos: { 'CNN-CTnn': { nome, run } }, limpar }`. O `run` retorna `{ status: 'passou'|'falhou'|'inconclusivo', obs }`.
4. `node rodar.js --seco RFNN` (sem Jam) e depois `node rodar.js RFNN` (gravado). Os resultados vão para `resultados.json`.
5. `node evidencias.js` escreve os links no campo "Evidência" vazio dos `.md`, procurando pelo **ID** do caso. Os arquivos RF41 e RF42 estão com os nomes trocados.

## Padrões da interface do SIFIT (helpers em `casos/comum.js`)
- Os modais são `.vue-modal`, com `C.modal(p, 'Título')`.
- Avisos, erros e confirmações usam o diálogo próprio `.sdl-panel`, lido com `C.dialogo(p)`. O fundo `.sdl-overlay` bloqueia cliques até fechar.
  - Em validação, feche com `C.cancelarDialogo`, porque "Continuar" pode prosseguir.
  - Numa confirmação de exclusão, use `C.confirmar`.
- Os labels são maiúsculos via CSS e têm ícone: use regex sem `^$`, por exemplo `/status/i`, com `C.campo(raiz, /rótulo/i, 'select')`.
- Placeholders se repetem entre o filtro e o modal: use a classe da tela (`cp-`, `cr-`, `gmu-`, `gru-`, `obj-`, `forn-`...).
- Cliente, fornecedor e colaborador são campos somente leitura, preenchidos por "Pesquisar" → seletor "Buscar X" → `.btn-selecionar`. Use `C.escolherNoPicker`.
- Ações das linhas: `*-btn-action` (ver) e `*-action-red` (excluir). Botões de cadastrar às vezes são só ícone (`.gmu-btn-cadastrar`).
- Os códigos são o maior + 1 e se repetem depois de excluir; isso não indica erro.
- Para afirmar um bug, olhe a **requisição e a resposta** (`page.on('request'/'response')`), não só a tela: o "Erro ao salvar" genérico esconde a mensagem real do servidor.

## Cuidados de operação
- **Não reiniciar o Chromium isolado sem necessidade:** o login do SIFIT é cookie de sessão e se perde (cai em `/login`); só o usuário refaz o login.
- Se `connectOverCDP` travar, é quase sempre uma aba presa: `curl http://127.0.0.1:9333/json/close/<id>` e abrir outra com `curl -X PUT "http://127.0.0.1:9333/json/new?<url>"`. O `lib.js` já tenta reconectar 5 vezes.
- Com o PC na **tela de bloqueio** o Jam não inicia (o atalho não chega ao navegador): `jam-tecla.ps1` aborta com "janela do Playwright nao ficou em primeiro plano".
- Casos que clicam em salvar/enviar numa tela de risco (RF45, RF47) usam `C.bloquearEscritas(p)`: bloqueia POST/PUT/DELETE em `/api/` e registra o que o sistema tentou enviar.
- Escrever arquivos com a ferramenta de escrita; `python`/heredoc no shell perdem barras invertidas em sequências como `\n` e `\s`.

## Problemas conhecidos do ambiente
- Cadastrar fornecedor dá erro 500 sempre (afeta o RF34).
- Excluir grupo dá erro 500, e o grupo `QA14555 Grupo` (#22) ficou preso no ambiente.
- O cliente `QA14555 Cliente Teste` (código 444) fica de propósito, como pré-condição.
