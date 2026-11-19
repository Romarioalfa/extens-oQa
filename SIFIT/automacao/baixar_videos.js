// Baixa os videos dos Jams (resultados.json) para SIFIT/Evidencias/<ID>.mp4.
// O Jam serve o video via Cloudflare Stream (HLS com fMP4): init.mp4 + seg_N.mp4 concatenados = .mp4 tocavel.
// ponytail: so a trilha de video (as gravacoes nao tem microfone); juntar audio exigiria ffmpeg completo.
const fs = require('fs');
const path = require('path');
const L = require('./lib');

const OUT = path.join(__dirname, '..', 'Evidencias');
const res = JSON.parse(fs.readFileSync(path.join(__dirname, 'resultados.json'), 'utf8'));

const txt = async (u) => { const r = await fetch(u); if (!r.ok) throw new Error(`${r.status} ${u}`); return r.text(); };
const bin = async (u) => { const r = await fetch(u); if (!r.ok) throw new Error(`${r.status} ${u}`); return Buffer.from(await r.arrayBuffer()); };
const abs = (base, u) => new URL(u, base).href;

async function manifestoDoJam(ctx, link) {
  const j = await ctx.newPage();
  let m = null;
  j.on('request', (r) => { if (!m && /cloudflarestream\.com\/.+\/manifest\/video\.m3u8/.test(r.url())) m = r.url(); });
  await j.goto(link);
  for (let i = 0; i < 30 && !m; i++) await j.waitForTimeout(500);
  await j.close();
  if (!m) throw new Error('manifesto HLS nao encontrado');
  return m;
}

async function baixar(master) {
  const mtxt = await txt(master);
  // escolhe a variante de video com maior BANDWIDTH
  const linhas = mtxt.split('\n');
  let melhor = null;
  linhas.forEach((l, i) => {
    const b = l.match(/^#EXT-X-STREAM-INF:.*BANDWIDTH=(\d+)/);
    if (b && (!melhor || +b[1] > melhor.bw)) melhor = { bw: +b[1], uri: linhas[i + 1].trim() };
  });
  const pl = abs(master, melhor.uri);
  const ptxt = await txt(pl);
  const init = ptxt.match(/#EXT-X-MAP:URI="([^"]+)"/)[1];
  const segs = ptxt.split('\n').map((l) => l.trim()).filter((l) => l && !l.startsWith('#'));
  const partes = [await bin(abs(pl, init))];
  for (const s of segs) partes.push(await bin(abs(pl, s)));
  return Buffer.concat(partes);
}

(async () => {
  const so = process.argv.slice(2);
  fs.mkdirSync(OUT, { recursive: true });
  const { ctx } = await L.conectar();
  for (const [id, r] of Object.entries(res)) {
    if (!r.link || r.seco || (so.length && !so.includes(id))) continue;
    const arq = path.join(OUT, `${id}.mp4`);
    if (fs.existsSync(arq) && !so.length) { console.log(`${id}: ja existe`); continue; }
    const buf = await baixar(await manifestoDoJam(ctx, r.link));
    if (buf.slice(4, 8).toString() !== 'ftyp') throw new Error(`${id}: arquivo nao parece MP4`);
    fs.writeFileSync(arq, buf);
    console.log(`${id}: ${(buf.length / 1024 / 1024).toFixed(2)} MB`);
  }
  process.exit(0);
})().catch((e) => { console.error(e.message); process.exit(1); });
