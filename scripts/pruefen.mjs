// Prüft dist/: Titel, Beschreibung, H1, JSON-LD, interne Links, Bilder, Sitemap
import fs from 'node:fs'; import path from 'node:path';
const D = 'dist'; const files = []; (function w(d) { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); fs.statSync(p).isDirectory() ? w(p) : p.endsWith('.html') && files.push(p); } })(D);
let fehler = 0; const F = (m) => { fehler++; console.log('FEHLER', m); };
const titel = new Map(), desc = new Map(); let max = 0;
for (const f of files) {
  const h = fs.readFileSync(f, 'utf8'); const n = f.replace(D, '').replace('index.html', ''); max = Math.max(max, h.length);
  const un = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'");
  const t = un(h.match(/<title>(.*?)<\/title>/s)?.[1] ?? ''), d = un(h.match(/<meta name="description" content="(.*?)"/s)?.[1] ?? '');
  if (t.length < 20 || t.length > 65) F(`${n} Titel ${t.length}: ${t}`);
  if (!h.includes('noindex') && (d.length < 60 || d.length > 165)) F(`${n} Beschreibung ${d.length}`);
  if (titel.has(t)) F(`${n} doppelter Titel mit ${titel.get(t)}`); titel.set(t, n);
  if (desc.has(d)) F(`${n} doppelte Beschreibung`); desc.set(d, n);
  const h1 = (h.match(/<h1[\s>]/g) || []).length; if (h1 !== 1) F(`${n} H1-Anzahl ${h1}`);
  if (!/rel="canonical"/.test(h)) F(`${n} kein Canonical`);
  try { const j = JSON.parse(h.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]); const ids = new Set(j['@graph'].map((x) => x['@id']).filter(Boolean)); if (!ids.size) F(n + ' JSON-LD leer'); } catch (e) { F(`${n} JSON-LD ${e.message}`); }
  for (const m of h.matchAll(/(?:href|src)="(\/[^"#?]*)(#[^"]*)?"/g)) { const p = path.join(D, decodeURI(m[1])); if (!(fs.existsSync(p) && (fs.statSync(p).isFile() || fs.existsSync(path.join(p, 'index.html'))))) F(`${n} toter Link ${m[1]}`); else if (m[2] && m[2].length > 1) { const z = fs.statSync(p).isFile() ? p : path.join(p, 'index.html'); if (!fs.readFileSync(z, 'utf8').includes(`id="${m[2].slice(1)}"`)) F(`${n} toter Anker ${m[1]}${m[2]}`); } }
  for (const m of h.matchAll(/srcset="([^"]+)"/g)) for (const s of m[1].split(',')) { const p = s.trim().split(' ')[0]; if (!fs.existsSync(D + p)) F(`${n} Bild fehlt ${p}`); }
  for (const m of h.matchAll(/<img\b[^>]*>/g)) if (!/\balt(=|\s|>)/.test(m[0])) F(`${n} Bild ohne alt`);
  for (const m of h.matchAll(/tel:([^"]+)"/g)) if (m[1] !== '+491783534573') F(`${n} falsche Telefonnummer ${m[1]}`);
  const ext = [...h.matchAll(/<(?:script|link|img|iframe)[^>]+(?:src|href)="(https?:\/\/[^"]+)"/g)].map((m) => m[1]).filter((u) => !u.startsWith('https://www.schwindeltherapie-schauer.de')); if (ext.length) F(`${n} lädt extern: ${ext}`);
}
const sm = [...fs.readFileSync(D + '/sitemap.xml', 'utf8').matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
for (const s of sm) if (!fs.existsSync(path.join(D, s, 'index.html'))) F('Sitemap: ' + s);
for (const f of files) { const n = f.replace(D, '').replace('index.html', ''); if (!/404|impressum|datenschutz/.test(n) && !sm.includes(n)) F('nicht in Sitemap: ' + n); }
console.log(`${files.length} Seiten, ${sm.length} in Sitemap, größte HTML-Datei ${(max / 1024).toFixed(0)} KB, Fehler: ${fehler}`);
