// Erzeugt die Web-Bilder aus den Originalen der alten Seite.
import sharp from 'sharp';
const A = 'archiv-alte-seite/bilder/', P = 'public/bilder/';
const CUT = process.argv[2]; // freigestelltes Portrait (PNG)

// Panorama: nur das Band um den Horizont, aufgehellt und leicht entsättigt
const tal = sharp(A + 'kontakt.jpg').extract({ left: 0, top: 130, width: 2000, height: 760 })
  .modulate({ saturation: 0.98, brightness: 1.12 }).linear(0.9, 24);
const talRoh = await tal.toBuffer();
// Kühler Schleier, damit der braune Vordergrund ins Markenblau fällt
const talBuf = await sharp(talRoh).composite([{ input: { create: { width: 2000, height: 760, channels: 4, background: { r: 24, g: 108, b: 138, alpha: 0.3 } } }, blend: 'soft-light' }, { input: { create: { width: 2000, height: 760, channels: 4, background: { r: 176, g: 208, b: 220, alpha: 0.05 } } }, blend: 'over' }]).toBuffer();
for (const w of [800, 1200, 2000]) {
  await sharp(talBuf).resize(w).avif({ quality: 52 }).toFile(`${P}isarwinkel-${w}.avif`);
  await sharp(talBuf).resize(w).webp({ quality: 74 }).toFile(`${P}isarwinkel-${w}.webp`);
}
await sharp(talBuf).resize(1200).jpeg({ quality: 76, mozjpeg: true }).toFile(`${P}isarwinkel-1200.jpg`);

// Portrait quadratisch, freigestellt
if (CUT) {
  const sq = await sharp(CUT).extract({ left: 310, top: 90, width: 1300, height: 1300 }).modulate({ saturation: 0.94, brightness: 1.03 }).png().toBuffer();
  for (const w of [360, 720]) {
    await sharp(sq).resize(w).webp({ quality: 84, alphaQuality: 90 }).toFile(`${P}markus-schauer-portrait-${w}.webp`);
    await sharp(sq).resize(w).avif({ quality: 60 }).toFile(`${P}markus-schauer-portrait-${w}.avif`);
  }
  const full = await sharp(CUT).extract({ left: 150, top: 120, width: 1420, height: 1384 }).modulate({ saturation: 0.94, brightness: 1.03 }).png().toBuffer();
  for (const w of [560, 1120]) {
    await sharp(full).resize(w).webp({ quality: 84, alphaQuality: 90 }).toFile(`${P}markus-schauer-${w}.webp`);
    await sharp(full).resize(w).avif({ quality: 60 }).toFile(`${P}markus-schauer-${w}.avif`);
  }
}
// Portrait als JPG (für strukturierte Daten / Vorschau)
await sharp(A + 'portrait.jpg').extract({ left: 440, top: 0, width: 1200, height: 1200 }).resize(900).jpeg({ quality: 80, mozjpeg: true }).toFile(`${P}markus-schauer-heilpraktiker-physiotherapeut.jpg`);
console.log('fertig');
// Praxisfoto (Ohrakupunktur-Tafel, Wirbelsäule)
await sharp(A + 'uebermich2.png').flatten({ background: '#ffffff' }).webp({ quality: 84 }).toFile(`${P}markus-schauer-praxis.webp`);
