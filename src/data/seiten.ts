import { ERKRANKUNGEN } from './erkrankungen';
// Alle indexierbaren Seiten (Quelle für Sitemap und llms.txt)
export const SEITEN: { href: string; name: string; info: string; prio: number }[] = [
  { href: '/', name: 'Schwindeltherapie Bad Tölz', info: 'Startseite: Praxis, Ablauf, Therapien, häufige Fragen', prio: 1 },
  { href: '/schwindelerkrankungen/', name: 'Schwindelerkrankungen', info: 'Übersicht aller Formen', prio: 0.9 },
  ...ERKRANKUNGEN.map((e) => ({ href: `/schwindelerkrankungen/${e.slug}/`, name: e.name, info: `${e.lang}. ${e.teaser}`, prio: 0.8 })),
  { href: '/schwindelerkrankungen/seltene-schwindelformen/', name: 'Seltene Schwindelformen', info: 'Vestibularisparoxysmie, Perilymphfistel, Bogengangsdehiszenz, Kinetose', prio: 0.6 },
  { href: '/schwindelsymptome/', name: 'Schwindelsymptome', info: 'Formen, Dauer, Auslöser, Begleitsymptome, Warnzeichen', prio: 0.8 },
  { href: '/schwindeldiagnose/', name: 'Schwindeldiagnose', info: 'Anamnese, Inspektion, Untersuchung', prio: 0.8 },
  { href: '/schwindeltherapie/', name: 'Schwindeltherapie', info: 'Alle Therapieverfahren', prio: 0.9 },
  { href: '/emdr/', name: 'EMDR bei Schwindel', info: 'Methode und Anwendung', prio: 0.7 },
  { href: '/ueber-mich/', name: 'Über Markus Schauer', info: 'Ausbildung und Werdegang', prio: 0.8 },
  { href: '/kosten/', name: 'Kosten', info: 'Heilpraktikerrechnung, Privatrezept, Selbstzahler', prio: 0.7 },
  { href: '/kontakt/', name: 'Kontakt und Anfahrt', info: 'Telefon, E-Mail, Adresse', prio: 0.8 },
  { href: '/aktuelles/', name: 'Aktuelles', info: 'Vorträge, Kurse, PPPD', prio: 0.5 },
  { href: '/links/', name: 'Links', info: 'Weiterführende Adressen', prio: 0.3 },
];
