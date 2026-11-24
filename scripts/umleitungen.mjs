// Erzeugt aus einer Tabelle: public/_redirects (Cloudflare/Netlify) und umleitung-alte-domain/.htaccess (IONOS)
import fs from 'node:fs';
const NEU = 'https://www.schwindeltherapie-schauer.de';
const T = {
  '/schwindelerkrankungen/': ['/informationen-zum-thema-schwindel/', '/informationen-zum-thema-schwindel/schwindelerkrankungen/', '/informationen/', '/informationen/schwindelerkrankungen/', '/medizinische-informationen/', '/medizinische-informationen/schwindel-formen/', '/medizinische-informationen/schwindelerkrankungen/', '/symptome-diagnose-therapie/schwindelerkrankungen/', '/schwindelerkrankungen-/', '/schwindelerkrankungen-heilen/', '/schwindelerkrankungen-heilen-1/', '/uberblick-schwindelerkrankungen/', '/uberblick-schwindelerkrankungen-/'],
  '/schwindeldiagnose/': ['/informationen-zum-thema-schwindel/schwindeldiagnose/', '/informationen/schwindeldiagnose/', '/medizinische-informationen/schwindel-diagnose/', '/symptome-diagnose-therapie/schwindel-diagnose/'],
  '/schwindelsymptome/': ['/informationen-zum-thema-schwindel/schwindelsymptome/', '/informationen/schwindelsymptome/', '/medizinische-informationen/schwindel-symptome/', '/symptome-diagnose-therapie/', '/symptome-diagnose-therapie/schwindel-symptome/', '/fragen-zum-schwindel/'],
  '/schwindeltherapie/': ['/informationen-zum-thema-schwindel/schwindeltherapie/', '/informationen/schwindeltherapie/', '/medizinische-informationen/schwindel-therapie/', '/symptome-diagnose-therapie/schwindel-therapie/'],
  '/emdr/': ['/medizinische-informationen/emdr/'],
  '/ueber-mich/': ['/uber-mich/', '/zu-meiner-person/', '/qualifikation/', '/zusammenarbeit/'],
  '/kosten/': ['/leistungsvergutung/', '/leistungsvergütung/', '/kostenübernahme-behandlungstermin/'],
  '/kontakt/': ['/anfahrt/', '/behandlungstermin/', '/behandlungstermin-vereinbaren/', '/kontakt-behandlungstermin/'],
  '/links/': ['/link/'],
  '/datenschutz/': ['/datenschutzerklarung/', '/impressum/datenschutz/'],
  '/': ['/sitemap/'],
};
const gleich = ['/', '/aktuelles/', '/emdr/', '/impressum/', '/kontakt/', '/ueber-mich/', '/datenschutz/', '/links/', '/schwindelerkrankungen/', '/schwindeldiagnose/', '/schwindelsymptome/'];
let r = '# Automatisch erzeugt: node scripts/umleitungen.mjs\n';
let h = `# Für das Verzeichnis der ALTEN Domain schwindelbehandlung.de (Apache/IONOS)\n# Jede alte Adresse geht mit 301 auf ihr Gegenstück. Mindestens 2 Jahre so lassen.\nRewriteEngine On\n`;
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').replace(/ü/g, '(?:ü|%C3%BC)');
for (const [ziel, alte] of Object.entries(T)) for (const a of alte) {
  const e = encodeURI(a);
  r += `${e} ${ziel} 301\n${e.slice(0, -1)} ${ziel} 301\n`;
  h += `RewriteRule ^${esc(a.slice(1, -1))}/?$ ${NEU}${ziel} [R=301,L,NE]\n`;
}
for (const g of gleich) h += `RewriteRule ^${g === '/' ? '' : esc(g.slice(1, -1)) + '/?'}$ ${NEU}${g} [R=301,L]\n`;
h += `# Alles Übrige auf die Startseite\nRewriteRule ^ ${NEU}/ [R=301,L]\n`;
fs.writeFileSync('public/_redirects', r);
fs.mkdirSync('umleitung-alte-domain', { recursive: true });
fs.writeFileSync('umleitung-alte-domain/.htaccess', h);
// Vollständigkeit gegen die archivierten Adressen prüfen
const alle = fs.readFileSync('archiv-alte-seite/alte-urls-status.txt', 'utf8').match(/https:\/\/(?:www\.)?schwindelbehandlung\.de\/\S*/g).map((u) => decodeURI(new URL(u).pathname)).filter((v, i, a) => a.indexOf(v) === i);
const ok = new Set([...Object.values(T).flat(), ...gleich]);
const fehlt = alle.filter((u) => !ok.has(u));
console.log(`${alle.length} alte Adressen, nicht abgedeckt: ${fehlt.length}`, fehlt);
