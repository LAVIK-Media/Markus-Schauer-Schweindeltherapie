import { SITE, UMGEBUNG } from '../data/site';
import { SEITEN } from '../data/seiten';
export const GET = () => new Response(`# ${SITE.name}

> Praxis für Schwindeltherapie (Vertigo, vestibuläre Rehabilitation) in Bad Tölz, Oberbayern. Markus Schauer ist Physiotherapeut (seit 1996) und Heilpraktiker (seit 2003) und behandelt ausschließlich Patienten mit Schwindel und Gleichgewichtsstörungen.

"Schwindel" meint hier durchgehend das medizinische Symptom (englisch: vertigo, dizziness).

## Kontakt
- Name: ${SITE.person}, ${SITE.beruf}
- Adresse: ${SITE.strasse}, ${SITE.plz} ${SITE.ort}, Deutschland
- Telefon: ${SITE.telefonLink}
- E-Mail: ${SITE.email}
- Termine: nach telefonischer Vereinbarung
- Einzugsgebiet: ${SITE.ort}, ${UMGEBUNG.join(', ')}; Anfragen aus ganz Deutschland
- Abrechnung: Gebührenverzeichnis für Heilpraktiker, GebüH (Privat- und Zusatzversicherung), Privatrezept für Physiotherapie, Selbstzahler
- Frühere Website: schwindelbehandlung.de

## Seiten
${SEITEN.map((s) => `- [${s.name}](${SITE.url}${s.href}): ${s.info}`).join('\n')}

## Volltext
- [llms-full.txt](${SITE.url}/llms-full.txt): alle Erkrankungen mit Definition, Symptomen, Behandlung und Fragen
`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
