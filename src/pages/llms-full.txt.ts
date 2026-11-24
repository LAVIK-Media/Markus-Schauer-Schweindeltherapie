import { SITE, THERAPIEN, ABLAUF } from '../data/site';
import { ERKRANKUNGEN, SELTENE } from '../data/erkrankungen';
export const GET = () => new Response(`# ${SITE.name}: Schwindel von A bis Z

Quelle: ${SITE.url} (Text: ${SITE.person}, ${SITE.beruf}, ${SITE.ort}). Stand: ${SITE.stand}. Die Informationen ersetzen keinen Arztbesuch.

${ERKRANKUNGEN.map((e) => `## ${e.name} (${e.lang})
URL: ${SITE.url}/schwindelerkrankungen/${e.slug}/
Auch bekannt als: ${e.alt.join(', ')}

${e.antwort}
${e.warnung ? `\nWichtig: ${e.warnung}\n` : ''}
${e.fakten.map(([k, v]) => `- ${k}: ${v}`).join('\n')}

${e.abschnitte.map((a) => `### ${a.h}\n${[...(a.p ?? []), ...(a.ul ?? []).map((t) => `- ${t}`)].join('\n')}`).join('\n\n')}

${e.faq.map((q) => `Frage: ${q.f}\nAntwort: ${q.a}`).join('\n\n')}`).join('\n\n')}

## Seltenere Schwindelformen
${SELTENE.map((s) => `### ${s.name}\n${s.p.join('\n')}`).join('\n\n')}

## Ablauf der Behandlung
${ABLAUF.map((s, i) => `${i + 1}. ${s.t}: ${s.d}`).join('\n')}

## Therapieverfahren
${THERAPIEN.map((g) => `- ${g.t}: ${g.items.join(', ')}`).join('\n')}
`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
