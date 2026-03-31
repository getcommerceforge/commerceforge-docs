import type {APIRoute} from 'astro';
import {docsHomeCards} from '../lib/docs';

const SITE = 'https://docs.commerceforge.dev';

export const GET: APIRoute = () => {
  const urls = Array.from(
    new Set(
      ['/', ...docsHomeCards.map((item) => item.href)].map((path) => {
        const normalized = path === '/' ? '/' : path.replace(/\/$/, '');
        return `${SITE}${normalized === '/' ? '' : normalized}/`;
      }),
    ),
  );

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((url) => `  <url><loc>${url}</loc></url>`)
    .join('\n')}\n</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
