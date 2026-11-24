// Zentrale Stammdaten. Domain, Telefon, Adresse NUR hier ändern.
export const SITE = {
  url: 'https://www.schwindeltherapie-schauer.de',
  name: 'Schwindeltherapie Markus Schauer',
  person: 'Markus Schauer',
  beruf: 'Physiotherapeut und Heilpraktiker',
  telefonAnzeige: '0178 3534573',
  telefonLink: '+491783534573',
  email: 'info@schwindelbehandlung.de',
  strasse: 'Buchener Str. 21',
  plz: '83646',
  ort: 'Bad Tölz',
  geo: { lat: 47.76133, lng: 11.54285 },
  route: 'https://www.google.com/maps/dir/?api=1&destination=Buchener+Str.+21%2C+83646+Bad+T%C3%B6lz',
  facebook: 'https://www.facebook.com/profile.php?id=100086680076807',
  linkedin: 'https://www.linkedin.com/in/markus-schauer-70a885425',
  xing: 'https://www.xing.com/profile/Markus_Schauer7/web_profiles',
  stand: '2026-11-24',
};

// Erst mit "npm run build:live" darf Google die Seite indexieren.
export const LIVE = import.meta.env.PUBLIC_LIVE === 'true';

export const NAV = [
  { href: '/schwindelerkrankungen/', label: 'Erkrankungen' },
  { href: '/schwindelsymptome/', label: 'Symptome' },
  { href: '/schwindeldiagnose/', label: 'Diagnose' },
  { href: '/schwindeltherapie/', label: 'Therapie' },
  { href: '/ueber-mich/', label: 'Über mich' },
  { href: '/kosten/', label: 'Kosten' },
  { href: '/kontakt/', label: 'Kontakt' },
];

export const UMGEBUNG = ['Lenggries', 'Gaißach', 'Wackersberg', 'Reichersbeuern', 'Waakirchen', 'Geretsried', 'Wolfratshausen', 'Penzberg', 'Holzkirchen', 'Miesbach', 'Tegernseer Tal', 'München'];

export const ABLAUF = [
  { t: 'Ausführliches Anamnesegespräch', d: 'Art, Dauer, Auslöser und Begleitmerkmale Ihres Schwindels.' },
  { t: 'Blick auf Ihre Vorgeschichte', d: 'Wir besprechen bisherige Untersuchungen und Therapien.' },
  { t: 'Untersuchung und Diagnose', d: 'Gleichgewicht, Augen, Halswirbelsäule, Lagerungsmanöver und mehr.' },
  { t: 'Individuelle Schwindeltherapie', d: 'Abgestimmt auf die gefundene Ursache.' },
  { t: 'Behandlungsplan', d: 'Mit Rezepten und, wenn sinnvoll, einem Übungsprogramm.' },
  { t: 'Bericht für Ihren Arzt', d: 'Auf Wunsch für Hausarzt, HNO-Arzt oder Neurologen.' },
];

export const THERAPIEN = [
  { id: 'gleichgewicht', t: 'Gleichgewicht und Augen', items: ['Lagerungsmanöver', 'Blickstabilisationsübungen', 'Augentraining (VOR)', 'Vestibularstabilisation', 'Gleichgewichtstraining, propriozeptiv', 'Therapieprogramm Altersschwindel'] },
  { id: 'wirbelsaeule', t: 'Wirbelsäule und Körper', items: ['Halswirbelsäulenbehandlung', 'Wirbelsäulenstabilisation', 'Manuelle Therapie', 'Physiotherapie', 'Viszerale Osteopathie'] },
  { id: 'nervensystem', t: 'Nervensystem und Entspannung', items: ['EMDR', 'Progressive Muskelentspannung nach Jacobson'] },
  { id: 'naturheilkunde', t: 'Naturheilkunde', items: ['Ohrakupunktur (Schwindelzonen)', 'Pflanzenheilkunde', 'Homöopathie', 'Fußreflexzonentherapie', 'Ausgewählte Vitamine und Mineralien'] },
];

export const NOTFALL = 'Sprachstörungen, Schluckstörungen, Lähmungen, Doppelbilder, Sensibilitätsstörungen oder Bewusstseinsstörungen';
