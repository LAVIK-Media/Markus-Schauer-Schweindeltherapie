import { SITE, LIVE } from '../data/site';
const bots = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Applebot', 'Applebot-Extended', 'Bingbot', 'MistralAI-User'];
export const GET = () => new Response(
  LIVE
    ? `User-agent: *\nAllow: /\n\n# KI-Suchmaschinen sind ausdrücklich willkommen\n${bots.map((b) => `User-agent: ${b}`).join('\n')}\nAllow: /\n\nSitemap: ${SITE.url}/sitemap.xml\n`
    : 'User-agent: *\nDisallow: /\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
