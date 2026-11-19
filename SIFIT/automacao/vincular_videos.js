// Aponta o campo "Evidencia" dos .md para o arquivo ../Evidencias/<ID>.mp4, mantendo o link do Jam ao lado:
//   [Video](https://jam.dev/c/...)  ->  [Vídeo](../Evidencias/C27-CT01.mp4) · [Jam](https://jam.dev/c/...)
// So mexe em casos RF27 a RF47 que tenham link no resultados.json E o .mp4 baixado. Sem dependencias: node vincular_videos.js
const fs = require('fs');
const path = require('path');

const DIR = path.join(__dirname, '..', 'Cenarios de Testes');
const VID = path.join(__dirname, '..', 'Evidencias');
const res = JSON.parse(fs.readFileSync(path.join(__dirname, 'resultados.json'), 'utf8'));

const alvo = new Map(); // link do Jam -> id, so de quem tem mp4
for (const [id, r] of Object.entries(res)) {
  const rf = Number((id.match(/^C(\d\d)-/) || [])[1]);
  if (rf < 27 || rf > 47 || !r.link || r.seco) continue;
  if (fs.existsSync(path.join(VID, `${id}.mp4`))) alvo.set(r.link, id);
}

let total = 0;
for (const arq of fs.readdirSync(DIR).filter((f) => f.endsWith('.md'))) {
  const full = path.join(DIR, arq);
  const s = fs.readFileSync(full, 'utf8');
  const novo = s.replace(/\[Vídeo\]\((https:\/\/jam\.dev\/c\/[0-9a-f-]{36})\)/g, (m, link) => {
    const id = alvo.get(link);
    if (!id) return m;
    total++;
    return `[Vídeo](../Evidencias/${id}.mp4) · [Jam](${link})`;
  });
  if (novo !== s) fs.writeFileSync(full, novo);
}
console.log(`links atualizados: ${total} de ${alvo.size} videos`);
