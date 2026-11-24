import sharp from 'sharp';
const D = process.argv[2], P = 'public/bilder/';
const sv = async (s, n, ws, q) => { for (const w of ws) { await s.clone().resize(w).avif({ quality: q }).toFile(`${P}${n}-${w}.avif`); await s.clone().resize(w).webp({ quality: q + 18 }).toFile(`${P}${n}-${w}.webp`); } };
await sv(sharp(await sharp(`${D}/ohr.png`).extract({ left: 240, top: 130, width: 2560, height: 1960 }).png().toBuffer()), 'ohr', [900, 1800], 58);
for (const n of ['kristalle', 'schnecke', 'nerv', 'bogen']) await sv(sharp(await sharp(`${D}/${n}.png`).extract({ left: 0, top: 0, width: 1800, height: 1240 }).png().toBuffer()), `ohr-${n}`, [700, 1400], 54);
const A = 'archiv-alte-seite/bilder/';
const kuehl = (s) => s.modulate({ saturation: 0.82, brightness: 1.0 }).composite([{ input: { create: { width: 1100, height: 900, channels: 4, background: { r: 20, g: 60, b: 100, alpha: 0.12 } } }, blend: 'over' }, { input: { create: { width: 1100, height: 900, channels: 4, background: { r: 196, g: 212, b: 226, alpha: 1 } } }, blend: 'multiply' }]);
for (const [src, n, pos] of [['behandeln.jpg', 'praxis-hws', 'centre'], ['emdr.jpg', 'praxis-emdr', 'south'], ['karussell.jpg', 'praxis-ohr', 'centre']]) { const b = await kuehl(sharp(A + src).resize(1100, 900, { fit: 'cover', position: pos })).png().toBuffer(); await sv(sharp(b), n, [700, 1100], 56); }
await sv(sharp(await sharp(D + '/tal.png').extract({ left: 0, top: 560, width: 1000, height: 565 }).modulate({ brightness: 1.35 }).resize(1600).png().toBuffer()), 'wald', [700, 1400], 54);
console.log('ok');
