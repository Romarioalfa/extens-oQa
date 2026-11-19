# Prompt de continuidade: testes do SIFIT (RF27 a RF47) com evidência no Jam

Cole este arquivo como primeira mensagem numa sessão nova do Claude Code, aberta na pasta `SIFIT/automacao` deste repositório. Leia também `CLAUDE.md` (padrões da interface do SIFIT e cuidados de operação), `PROGRESSO.md` (status por RF) e `RELATORIO-AUTOMACAO.md` (histórico de dificuldades).

## 1. O que está sendo feito
Executar automaticamente, com Playwright, os casos de teste manuais documentados em `../Cenarios de Testes/` para o SIFIT (sistema de academia) em `https://sifitalfa.centrion.com.br`, gravar **cada caso como um vídeo no Jam** e colocar o link no campo "Evidência" do `.md` do caso. Falhas viram bugs em `../3-Relatorio de Bugs.md`, e o resumo vai para `../4-Relatorio dos testes.md`.

**Escopo: só RF27 a RF47** (o SIFIT só tem 47 RFs). RF01 a RF26 são de outros integrantes do grupo: não executar, não gravar, não commitar.

## 2. Regras que não podem ser quebradas
- **Nunca digitar senha.** O usuário faz o login do SIFIT (`marcelo_zandonadi`, marcando "Manter conectado") e o do Jam (pelo campo "Work email"; o login Google é bloqueado em navegador automatizado) na janela do navegador isolado. Não burlar a proteção do Google.
- Dados de teste sempre com o prefixo `QA14555` (RA do plano de testes). Excluir o que o teste criou e **nunca tocar em registros de outros alunos** (o ambiente é compartilhado).
- RF45 (Configurações): nunca salvar configuração real. RF47 (Aplicativo): nunca enviar notificação real. RF44: nunca clicar em "Executar agora". RF28 (Planos): nunca confirmar "Salvar também na Pagar.me". Esses casos usam `C.bloquearEscritas(p)` para impedir gravações e registrar o que o sistema tentou enviar.
- Só commitar quando o usuário pedir. Autor do commit: **1b24** (já é o `user.name` do repositório). Não fazer push sem pedir.
- Não tirar print da área de trabalho (expõe janelas privadas): só `page.screenshot`.

## 3. Montar o ambiente num PC novo
1. Instalar Node 20 ou mais novo e o Git; clonar o repositório; `cd SIFIT/automacao`.
2. `npm install` e `npx playwright install chromium`.
3. A extensão do Jam precisa estar instalada no Chrome do usuário (loja do Chrome, ID `iohjgamcilhbgmhbnllfolmkmmekfmci`). Copiar a pasta dela (`%LOCALAPPDATA%\Google\Chrome\User Data\Default\Extensions\iohjgamcilhbgmhbnllfolmkmmekfmci\<versão>`) para `jam-ext/` aqui, e apagar `jam-ext/_metadata`. O `manifest.json` do Jam tem o campo `key`, então a cópia mantém o mesmo ID. Essa pasta e `perfil/` ficam fora do git.
4. `node abrir.js` em segundo plano (abre o Chromium isolado com CDP na porta 9333; tem de ficar aberto). O usuário faz os dois logins nessa janela.
5. Conferir: `node explorar.js dashboard` deve listar controles sem cair em `/login`.
Detalhes técnicos da gravação (atalho `Ctrl+Shift+Space` enviado só à janela do Playwright, barra `#__jam-ui`, `data-testid=record-button`, modal em iframe `iui.html`) estão em `RELATORIO-AUTOMACAO.md` e em `lib.js`/`jam-tecla.ps1`.

## 4. BLOQUEIO ATUAL: limite mensal do Jam
Na rodada anterior o Jam mostrou **"You've reached your monthly limit. New Jams are saved as drafts."** A partir daí, novos Jams não geram link: só rascunho. **Pare e pergunte ao usuário como seguir** antes de gravar mais:
- (a) esperar o limite renovar; (b) o usuário contratar um plano maior (decisão e pagamento dele, nunca do Claude); (c) usar outra conta de Jam, logada pelo usuário; (d) aceitar rascunhos e publicar depois; (e) trocar a evidência por vídeo nativo do Playwright (`recordVideo`), o que foge da documentação.
Enquanto isso, é possível escrever e validar a seco (sem Jam) os RFs que faltam.

## 5. Estado dos RFs (detalhe em `PROGRESSO.md` e `resultados.json`)
| RF | Estado |
| --- | --- |
| 27, 30, 31, 33, 34, 35 | **gravados no Jam** e com link em `../Cenarios de Testes/*.md` |
| 36 | CT01 e CT02 gravados; **CT03 executado e passou, mas o Jam virou rascunho (sem link)**: regravar |
| 38, 39, 42, 43 | casos prontos e validados a seco; **falta gravar** (`node rodar.js RF38` ...) |
| 44, 45, 47 | casos escritos; ajustar: C44-CT03 (o clique em "Ver resultados" não navegou), C45-CT02/CT03 (os controles da aba Home não são `input`/`select` como suposto), RF47 não foi validado |
| 28, 29, 32, 37, 40, 41, 46 | **ainda sem código**; telas mapeadas em `PROGRESSO.md` ("Notas para os RFs que faltam") |
Atenção: os arquivos do RF41 e do RF42 estão com os nomes trocados (o RF41 usa IDs `C42-*`; o RF42 usa `C41-*`). O código segue o ID: Categorias = `casos/rf42.js`, Modelos de Anamnese = `casos/rf41.js`.

## 6. Como trabalhar cada RF
1. `node explorar.js <rota-sem-barra> "<botão>"` (ou `.classe-do-botão`) para mapear a tela. No Git Bash, não passar `/rota` com barra.
2. Escrever `casos/rfNN.js` seguindo `casos/rf27.js` (usa `casos/fabrica.js`: `criar`, `vazio`, `excluir`, `filtrar`, `limpar`). A fábrica decide "salvou ou não" pelas respostas da API, e reprova cadastros que mostram erro. Casos sem o que gravar usam `semJam: true`.
3. `node rodar.js --seco RFNN` até ficar certo; depois `node rodar.js RFNN` (gravado). Um RF por vez. Se `jamParar` falhar, confira o modal do Jam (limite mensal!).
4. `node evidencias.js` escreve os links só em "Evidência" vazia e só para RF27 a RF47.
5. Registrar o que foi feito no `PROGRESSO.md`.
Escrever arquivos pela ferramenta de escrita: heredoc/python no shell perdem barras invertidas.

## 7. Bugs já encontrados (para escrever em `../3-Relatorio de Bugs.md`, formato do BUG-001, numeração a partir do BUG-006)
Evidências (Jam) já gravadas:
- **RF31** C31-CT01/CT02: bandeira criada (HTTP 201, `{"verifica_erro":false,"id":42}`) não aparece na listagem (`POST bandeiras/1` devolve `[]`). Jams: `60e6cba7-e3fd-42e9-a219-43aa8ab7d27d` e `d15e6a4b-5b87-4c71-90ba-0f1e75eac44e`. Também: salvar com "Taxa Adicional" vazio dá erro 500 (exploratório, sem vídeo).
- **RF30** C30-CT02: com "Escolher Bandeira = Sim" não há como escolher a bandeira. Jam `8b4ac80b-ba19-4ca0-8af6-51493fcb18c6`. C30-CT01: o formulário não tem "Status" (a documentação cita). 
- **RF34** C34-CT01/CT03: `POST salvar-fornecedor/1` devolve 500 sempre ("Erro interno inesperado"), inclusive com CNPJ inválido. Jams `3cbd0857-281b-41c8-999e-3818078ab2da` e `a9bf3cee-1c4b-4885-af38-600d78a785d6`. C34-CT04 não executado (sem fornecedor de teste).
- **RF36** C36-CT02: salvar atividade em branco é aceito (201). Jam `872acaba-9165-47cd-92f9-d5a1b5c35521`.
Validados a seco, **ainda sem vídeo**:
- **RF38** C38-CT01: preço `25,00` dá erro 400 ("Data truncated for column 'val…'"); `25` ou `25.00` salvam. C38-CT02: produto em branco mostra só "Erro ao salvar produto" (400 genérico).
- **RF39** C39-CT01/CT02: `POST enquete/salvar/1` → 200, mas a tela mostra "Erro ao salvar enquete" e a enquete fica gravada sem pergunta e sem respostas ("Sem pergunta cadastrada"); sem respostas também é gravada.
- **RF43** C43-CT02: pergunta sem texto → 500 em `pergunta-anamnese/salvar/1` em vez de validação.
- Outros: o token JWT de sessão vai no corpo das requisições e fica nos logs de rede dos Jams (quem tem o link vê o token, que expira em ~12 h).
Os bugs BUG-001 a BUG-005 do relatório continuam com "vídeo a anexar".

## 8. Sobras no ambiente sifitalfa (não removíveis pela tela)
- Bandeiras `QA14555 Bandeira...` (invisíveis por causa do bug do RF31); função `QA14555 Funcao` (a tela de Funções não tem excluir; uma por execução do C33-CT01); grupo `QA14555 Grupo` (#22, erro 500 ao excluir).
- O cliente `QA14555 Cliente Teste` (código 444) fica de propósito para os RFs que precisam de aluno; excluir ao fim do último RF que o usa.

## 9. Fechamento (quando os RFs terminarem ou o usuário pedir)
1. Atualizar `../3-Relatorio de Bugs.md` (bugs novos com link do Jam) e `../4-Relatorio dos testes.md` (totais de casos, cobertura por módulo, resumo de bugs, nota de execução).
2. Vídeos como arquivo: os 21 casos gravados até aqui já têm `.mp4` em `../Evidencias/<ID>.mp4` e os `.md` apontam para eles com o link do Jam ao lado. Para os novos: `node baixar_videos.js <IDs>` (só os IDs de RF27 a RF47; o Jam não oferece download, o script junta os trechos do HLS; precisa do `abrir.js` rodando), `node checar_videos.js` (confere se tocam) e `node vincular_videos.js` (atualiza os `.md`, sem dependências). Prints não fazem parte da evidência.
3. Commitar na branch `evidencias`, autor 1b24, mensagem em português, terminando com a linha `Co-Authored-By` do modelo usado. Sem push sem pedir.

## 10. Modelo e esforço sugeridos
Sonnet 5.5 em esforço `medium` para a rotina. Subir para Opus 5.5 só em gargalo real (Jam ou SIFIT com comportamento estranho, dúvida entre bug do sistema e erro do script, seletor que falha duas vezes). Quem não consegue trocar de modelo sozinho deve avisar o usuário numa linha separada.
