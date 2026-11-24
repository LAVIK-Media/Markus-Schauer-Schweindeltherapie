// Sonnenaufgangs-Grading des Isarwinkel-Fotos (Himmel neu eingefärbt, Nebel warm, Schatten marineblau)
import sharp from 'sharp';
const OUT = process.argv[2];
const { data, info } = await sharp('archiv-alte-seite/bilder/kontakt.jpg').removeAlpha().raw().toBuffer({ resolveWithObject: true });
const W = info.width, H = info.height, out = Buffer.alloc(W * H * 3);
const L = (i) => 0.2126 * data[i] + 0.7152 * data[i + 1] + 0.0722 * data[i + 2];
// Horizont je Spalte: von oben das erste dauerhaft dunkle / abrupt dunklere Pixel
const ridge = new Float32Array(W);
for (let x = 0; x < W; x++) {
  let y = 400, best = 480;
  for (; y < 640; y++) { const a = L(((y - 3) * W + x) * 3), b = L(((y + 3) * W + x) * 3); if (a - b > 18) { best = y; break; } }
  ridge[x] = best;
}
const g1 = await sharp('archiv-alte-seite/bilder/kontakt.jpg').greyscale().blur(1.6).raw().toBuffer(), g2 = await sharp('archiv-alte-seite/bilder/kontakt.jpg').extract({ left: 0, top: 0, width: 2000, height: 470 }).extend({ bottom: 655, extendWith: 'mirror' }).greyscale().blur(46).raw().toBuffer();
// Median-Glättung
const r2 = ridge.map((_, x) => { const a = []; for (let k = -4; k <= 4; k++) a.push(ridge[Math.min(W - 1, Math.max(0, x + k))]); a.sort((p, q) => p - q); return a[4]; });
const mix = (a, b, t) => a + (b - a) * t, cl = (v) => v < 0 ? 0 : v > 255 ? 255 : v, sm = (a, b, v) => { const t = Math.min(1, Math.max(0, (v - a) / (b - a))); return t * t * (3 - 2 * t); };
const top = [30, 62, 98], mid = [112, 152, 186], low = [248, 214, 176], glow = [255, 232, 200];
for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
  const i = (y * W + x) * 3, l = L(i);
  const ry = r2[x], sky = 1 - sm(ry - 2.5, ry + 1.5, y);
  // Himmel
  const t = y / 480; const c = [0, 1, 2].map((k) => t < 0.62 ? mix(top[k], mid[k], sm(0, 0.62, t)) : mix(mid[k], low[k], sm(0.62, 1.02, t)));
  const gx = (x - 1180) / 760, gy = (y - 470) / 300, g = Math.exp(-(gx * gx + gy * gy) * 1.25);
  const cloud = Math.max(0, g1[y * W + x] - g2[y * W + x] - 2.5) / 52 * (1 - sm(380, 470, y)); // Wolken erhalten
  const S = [0, 1, 2].map((k) => { let v = mix(c[k], glow[k], g * 0.72); v = mix(v, [255, 226, 200][k], Math.min(0.8, cloud)); return v; });
  // Land: Split-Toning
  const n = l / 255, fern = sm(0.15, 0.62, n);
  const sh = [12, 33, 52], mi = [74, 104, 124], hi = [250, 216, 182];
  let G = [0, 1, 2].map((k) => n < 0.34 ? mix(sh[k], mi[k], n / 0.34) : mix(mi[k], hi[k], sm(0.34, 0.86, n)));
  G = G.map((v, k) => mix(v, data[i + k], 0.34));
  const dunst = Math.exp(-Math.pow((y - 600) / 95, 2)) * 0.34; G = G.map((v, k) => mix(v, [246, 212, 180][k], dunst * (0.45 + 0.55 * Math.exp(-Math.pow((x - 1100) / 900, 2)))));
  const vord = sm(760, 1125, y) * 0.42; G = G.map((v, k) => mix(v, [10, 28, 44][k], vord));
  for (let k = 0; k < 3; k++) out[i + k] = cl(mix(G[k], S[k], sky));
}
await sharp(out, { raw: { width: W, height: H, channels: 3 } }).png().toFile(OUT);
console.log('ok', W, H);
