# Schwindeltherapie Markus Schauer

Website der Praxis für Schwindeltherapie in Bad Tölz. Statisch gebaut mit Astro: kein CMS, keine Cookies, keine externen Dienste.

```bash
npm install
npm run dev          # Vorschau auf http://localhost:4330
npm run build        # Vorschau-Build, von Suchmaschinen ausgeschlossen
npm run build:live   # öffentlicher Build
node scripts/pruefen.mjs   # prüft Titel, Links, Schema, Telefonnummern, Sitemap
```

## Aufbau

- `src/data/site.ts`: Stammdaten (Domain, Telefon, Adresse)
- `src/data/erkrankungen.ts`: Inhalte der Erkrankungsseiten
- `src/pages`: Seiten, dazu `robots.txt`, `sitemap.xml`, `llms.txt`
- `public/_redirects`, `umleitung-alte-domain/.htaccess`: Weiterleitungen der alten Adressen
- `scripts`: Bildaufbereitung und Prüfungen (die Bildskripte brauchen die lokal archivierten Originale)

Texte und Bilder sind urheberrechtlich geschützt. Schriften: Newsreader und Figtree (SIL Open Font License).
