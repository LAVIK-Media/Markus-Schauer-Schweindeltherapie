import sharp from 'sharp';
const [,, TAL] = process.argv; const P = 'public/bilder/';
const save = async (buf, name, ws, q = 60) => { for (const w of ws) { await sharp(buf).resize(w, null, { kernel: 'lanczos3' }).avif({ quality: q }).toFile(`${P}${name}-${w}.avif`); await sharp(buf).resize(w, null, { kernel: 'lanczos3' }).webp({ quality: q + 18, alphaQuality: 92 }).toFile(`${P}${name}-${w}.webp`); } };
// Hero-Hintergrund mit leichter Tiefenunschärfe
const hero = await sharp(TAL).resize(2600, null, { kernel: 'lanczos3' }).blur(1.1).png().toBuffer();
await save(hero, 'tal', [900, 1600, 2400], 56);
// Markus freigestellt: Kante um 1px einziehen, Licht anpassen
const { data, info } = await sharp('archiv-alte-seite/portrait-freigestellt.png').ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const W = info.width, H = info.height, a0 = new Uint8Array(W * H); for (let i = 0; i < W * H; i++) a0[i] = data[i * 4 + 3];
for (let y = 1; y < H - 1; y++) for (let x = 1; x < W - 1; x++) { const i = y * W + x; let m = 255; for (const d of [-W - 1, -W, -W + 1, -1, 0, 1, W - 1, W, W + 1]) if (a0[i + d] < m) m = a0[i + d]; data[i * 4 + 3] = Math.round(m * 0.75 + a0[i] * 0.25); }
for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) { const i = (y * W + x) * 4; const n = (0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2]) / 255; const sh = [8, 26, 44]; const f = (1 - n) * 0.16; for (let k = 0; k < 3; k++) { let v = data[i + k] * (1 - f) + sh[k] * f; v = v * [1.015, 0.985, 0.965][k]; data[i + k] = Math.max(0, Math.min(255, v)); } }
const person = await sharp(data, { raw: { width: W, height: H, channels: 4 } }).extract({ left: 130, top: 150, width: 1420, height: 1354 }).png().toBuffer();
await save(person, 'markus', [560, 900, 1400], 64);
await sharp(person).resize(1400).png().toFile(process.argv[3]);
console.log('ok');
