import { SITE } from '../data/site';
import { SEITEN } from '../data/seiten';
export const GET = () => new Response(
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${SEITEN.map((s) => `  <url><loc>${SITE.url}${s.href}</loc><lastmod>${SITE.stand}</lastmod><priority>${s.prio}</priority></url>`).join('\n')}\n</urlset>\n`,
  { headers: { 'Content-Type': 'application/xml' } });
