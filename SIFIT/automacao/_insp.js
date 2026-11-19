// inspeciona controles visiveis fora do menu lateral
module.exports = async (p) => p.evaluate(() => {
  const vis = (e) => { const r = e.getBoundingClientRect(); return r.width > 0 && r.height > 0; };
  const lab = (e) => { const id = e.id && document.querySelector(`label[for="${e.id}"]`); const l = id || e.closest('label') || e.closest('.form-group,.mb-3,.col,div')?.querySelector('label'); return l ? l.innerText.trim().slice(0, 40) : ''; };
  return [...document.querySelectorAll('input,select,textarea,button,[role=dialog] a,.modal a')].filter(vis).filter((e) => !e.closest('nav,aside,.sidebar'))
    .map((e) => [e.tagName, e.type || '', e.name || '', e.id || '', e.placeholder || '', lab(e), (e.innerText || e.value || '').slice(0, 30).replace(/\n/g, ' ')].join('|'));
});
