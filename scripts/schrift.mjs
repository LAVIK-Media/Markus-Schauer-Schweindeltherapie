// Newsreader auf Display-Schnitt und deutsche Zeichen reduzieren
import subset from 'subset-font'; import fs from 'node:fs';
const chars = [...Array(95)].map((_, i) => String.fromCharCode(32 + i)).join('') + 'äöüÄÖÜßéèêàçÉ„“‚‘’”–—…·•×%°½€§®©→←↗✓';
const src = fs.readFileSync('node_modules/@fontsource-variable/newsreader/files/newsreader-latin-opsz-normal.woff2');
fs.writeFileSync('public/fonts/newsreader-display.woff2', await subset(src, chars, { targetFormat: 'woff2', variationAxes: { opsz: 60, wght: { min: 350, max: 560, default: 400 } } }));
console.log(fs.statSync('public/fonts/newsreader-display.woff2').size);
