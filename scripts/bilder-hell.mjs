// Helle, natürliche Fassungen: Panorama am Tag, Portrait vor hellem Studiohintergrund
import sharp from 'sharp';
const P = 'public/bilder/', A = 'archiv-alte-seite/';
const sv = async (b, n, ws, q) => { for (const w of ws) { await sharp(b).resize(w, null, { kernel: 'lanczos3' }).avif({ quality: q }).toFile(`${P}${n}-${w}.avif`); await sharp(b).resize(w, null, { kernel: 'lanczos3' }).webp({ quality: q + 18 }).toFile(`${P}${n}-${w}.webp`); } };
// --- Panorama: natürliche Farben, nur heller und duftiger
{
  const { data, info } = await sharp(A + 'bilder/kontakt.jpg').removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const W = info.width, H = info.height, o = Buffer.alloc(W * H * 3), sm = (a, b, v) => { const t = Math.min(1, Math.max(0, (v - a) / (b - a))); return t * t * (3 - 2 * t); };
  const L = (i) => 0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2], ridge = new Float32Array(W);
  for (let x = 0; x < W; x++) { let best = 480; for (let y = 400; y < 640; y++) if (L(((y - 3) * W + x) * 3) - L(((y + 3) * W + x) * 3) > 18) { best = y; break; } ridge[x] = best; }
  const r2 = ridge.map((_, x) => { const q = []; for (let k = -4; k <= 4; k++) q.push(ridge[Math.min(W - 1, Math.max(0, x + k))]); q.sort((m, n) => m - n); return q[4]; });
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const i = (y * W + x) * 3, g = L(i) / 255, sky = 1 - sm(r2[x] - 2.5, r2[x] + 1.5, y);
    const dunst = 0.05 + 0.3 * Math.exp(-Math.pow((y - 590) / 80, 2)) + 0.1 * sm(800, 500, y);
    for (let k = 0; k < 3; k++) {
      const c = data[i + k] / 255;
      const hi = Math.pow(g + (c - g) * 0.78, 0.8) * 0.9 + 0.1;
      let la = g + (c - g) * 1.12; la = Math.pow(Math.max(0, la), 0.7) * [0.97, 1.02, 1.03][k];
      la = la * (1 - dunst) + [0.91, 0.95, 0.975][k] * dunst;
      o[i + k] = Math.max(0, Math.min(255, (la + (hi - la) * sky) * 255));
    }
  }
  const b = await sharp(o, { raw: { width: W, height: H, channels: 3 } }).png().toBuffer();
  await sv(b, 'tal-hell', [900, 1600, 2000], 56);
  await sharp(b).png().toFile(process.argv[2] + '/tal-hell.png');
}
// --- Portrait: Hintergrund aufhellen (Maske aus der Freistellung), Haut ruhiger
{
  const W = 2000, H = 1504;
  const src = await sharp(A + 'bilder/portrait.jpg').removeAlpha().raw().toBuffer();
  const m = await sharp(A + 'portrait-freigestellt.png').extractChannel(3).blur(2.2).raw().toBuffer();
  const o = Buffer.alloc(W * H * 3);
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    const j = y * W + x, i = j * 3, a = m[j] / 255, l = (0.2126 * src[i] + 0.7152 * src[i + 1] + 0.0722 * src[i + 2]);
    const r = Math.hypot((x - 960) / 1250, (y - 560) / 1150), hell = 1.52 - 0.16 * Math.min(1, r);
    for (let k = 0; k < 3; k++) {
      const bg = Math.min(247, src[i + k] * hell * [0.985, 1.0, 1.02][k]);
      let p = src[i + k]; p = l + (p - l) * [0.88, 0.92, 0.94][k]; p = 255 * Math.pow(Math.min(1, p / 255), 0.93); // weicher, etwas heller
      o[i + k] = Math.max(0, Math.min(255, p * a + bg * (1 - a)));
    }
  }
  const b = await sharp(o, { raw: { width: W, height: H, channels: 3 } }).extract({ left: 340, top: 0, width: 1203, height: 1504 }).png().toBuffer();
  await sv(b, 'portrait', [480, 800, 1200], 60);
  await sharp(b).png().toFile(process.argv[2] + '/portrait.png');
  await sharp(b).extract({ left: 160, top: 60, width: 900, height: 900 }).resize(900).jpeg({ quality: 82, mozjpeg: true }).toFile(`${P}markus-schauer-heilpraktiker-physiotherapeut.jpg`);
}
// --- Praxisfoto
{
  const b = await sharp(A + 'bilder/uebermich2.png').flatten({ background: '#fff' }).modulate({ brightness: 1.02, saturation: 0.94 }).png().toBuffer();
  await sv(b, 'praxisraum', [600, 920], 62);
}
console.log('ok');
