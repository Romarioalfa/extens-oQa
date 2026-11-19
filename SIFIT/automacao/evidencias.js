// Escreve os links do Jam (resultados.json) no campo "Evidencia" de cada caso nos .md do repositorio.
// So preenche evidencia VAZIA; nao sobrescreve videos que ja existem (ex.: os do grupo em RF01-RF12).
const fs = require('fs');
const path = require('path');

const DIR = path.join(__dirname, '..', 'Cenarios de Testes');
const res = JSON.parse(fs.readFileSync(path.join(__dirname, 'resultados.json'), 'utf8'));

let total = 0;
for (const arq of fs.readdirSync(DIR).filter((f) => f.endsWith('.md'))) {
  const full = path.join(DIR, arq);
  let s = fs.readFileSync(full, 'utf8');
  let mudou = false;
  for (const [id, r] of Object.entries(res)) {
    const rf = Number((id.match(/^C(\d\d)-/) || [])[1]);
    if (rf < 27 || rf > 47) continue; // escopo combinado: so RF27 a RF47
    if (!r.link || r.seco) continue;
    const i = s.indexOf(`**${id}**`);
    if (i < 0) continue;
    // proxima tabela "Evidencia" depois do ID: | **Evidência** |\n| --- |\n| <celula> |
    const re = /\| \*\*Evid[êe]ncia\*\* \|\r?\n\| --- \|\r?\n\|([^\n]*)\|/g;
    re.lastIndex = i;
    const m = re.exec(s);
    if (!m) { console.log(`${id}: tabela de evidencia nao encontrada em ${arq}`); continue; }
    if (m[1].trim()) { console.log(`${id}: ja tem evidencia, mantida`); continue; }
    const nova = m[0].replace(/\|([^\n]*)\|$/, `| [Vídeo](${r.link}) |`);
    s = s.slice(0, m.index) + nova + s.slice(m.index + m[0].length);
    mudou = true; total++;
    console.log(`${id}: ${r.link}`);
  }
  if (mudou) fs.writeFileSync(full, s);
}
console.log(`evidencias escritas: ${total}`);
