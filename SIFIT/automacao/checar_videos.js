// Confere se cada .mp4 de Evidencias toca no Chromium: duracao, resolucao e um quadro do meio.
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');
const L = require('./lib');

const DIR = path.join(__dirname, '..', 'Evidencias');

(async () => {
  const so = process.argv.slice(2);
  const { ctx } = await L.conectar();
  const v = await ctx.newPage();
  let ruins = 0;
  for (const f of fs.readdirSync(DIR).filter((x) => x.endsWith('.mp4'))) {
    if (so.length && !so.some((s) => f.startsWith(s))) continue;
    await v.goto(pathToFileURL(path.join(DIR, f)).href);
    const info = await v.evaluate(() => new Promise((res) => {
      const el = document.querySelector('video');
      if (!el) return res({ erro: 'sem <video>' });
      el.muted = true;
      const pronto = () => { el.currentTime = el.duration / 2; el.onseeked = () => res({ dur: +el.duration.toFixed(1), w: el.videoWidth, h: el.videoHeight }); };
      if (el.readyState >= 1) pronto(); else el.onloadedmetadata = pronto;
      el.onerror = () => res({ erro: el.error && el.error.code });
      setTimeout(() => res({ erro: 'timeout' }), 10000);
    }));
    const ok = info.dur > 1 && info.w > 0;
    if (!ok) ruins++;
    console.log(`${ok ? 'OK ' : 'RUIM'} ${f}`, JSON.stringify(info));
    if (so.length) await v.screenshot({ path: path.join(__dirname, `quadro_${f}.png`) });
  }
  await v.close();
  process.exit(ruins ? 1 : 0);
})().catch((e) => { console.error(e.message); process.exit(1); });
