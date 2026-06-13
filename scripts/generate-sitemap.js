import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { drinks } from '../src/data/drinks.js';
import { kategoriler } from '../src/data/kategoriler.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');

const BASE_URL = 'https://kadeh.vercel.app';
const currentDate = new Date().toISOString().split('T')[0];

const staticUrls = [
  { loc: '/', priority: '1.0' },
  { loc: '/hakkinda', priority: '0.5' },
];

const categoryUrls = kategoriler.map(cat => ({
  loc: `/tur/${encodeURIComponent(cat.id)}`,
  priority: '0.8'
}));

const drinkUrls = drinks.map(drink => ({
  loc: `/drink/${encodeURIComponent(drink.id)}`,
  priority: '0.9'
}));

const allUrls = [...staticUrls, ...categoryUrls, ...drinkUrls];

const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(url => `  <url>
    <loc>${BASE_URL}${url.loc}</loc>
    <lastmod>${currentDate}</lastmod>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

fs.writeFileSync(sitemapPath, xmlContent.trim() + '\n');
console.log(`Sitemap generated successfully with ${allUrls.length} links!`);
