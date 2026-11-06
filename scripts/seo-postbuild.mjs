// Runs after `vite build`. Writes a static HTML copy of the app for every page with
// that page's own title, description, canonical URL, social tags and structured data,
// so search engines and link previews see the right content without running JavaScript.
// Also writes sitemap.xml.
import fs from 'node:fs';
import path from 'node:path';
import { CATEGORIES } from '../src/data/products.js';
import { SITE_URL, SITE_NAME, getRoutes, getRouteSeo, getJsonLd } from '../src/data/seo.js';

const dist = path.resolve('dist');
const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function render(route) {
  const seo = getRouteSeo(route);
  const url = `${SITE_URL}${route.path === '/' ? '/' : route.path}`;
  let html = template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(seo.title)}</title>`)
    .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${esc(seo.description)}">`)
    .replace(/<meta name="robots"[^>]*>/, `<meta name="robots" content="${seo.robots}">`)
    .replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${url}">`)
    .replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${esc(seo.title)}">`)
    .replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${esc(seo.description)}">`)
    .replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${url}">`)
    .replace(/<meta property="og:image"[^>]*>/, `<meta property="og:image" content="${seo.image}">`)
    .replace(/<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${esc(seo.title)}">`)
    .replace(/<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${esc(seo.description)}">`)
    .replace(/<meta name="twitter:image"[^>]*>/, `<meta name="twitter:image" content="${seo.image}">`);

  // Replace the default structured data with this page's blocks.
  html = html.replace(/\s*<script type="application\/ld\+json" id="ld-default">[\s\S]*?<\/script>/, '');
  const ld = getJsonLd(route).map(b => `<script type="application/ld+json" data-seo>${JSON.stringify(b)}</script>`).join('\n  ');
  html = html.replace('</head>', `  ${ld}\n</head>`);

  // Plain-HTML copy of the page's key content and links for crawlers without JavaScript.
  const links = [
    ['/', 'Home'], ['/categories', 'Products'], ['/about', 'About Us'], ['/contact', 'Contact Us'],
    ...CATEGORIES.map(c => [`/category/${c.slug}`, c.name])
  ].map(([p, n]) => `<li><a href="${p}">${esc(n)}</a></li>`).join('');
  const noscript = `<noscript><main><h1>${esc(seo.h1)}</h1><p>${esc(seo.description)}</p><nav><ul>${links}</ul></nav></main></noscript>`;
  return html.replace('<div id="app"></div>', `<div id="app"></div>\n  ${noscript}`);
}

for (const route of getRoutes()) {
  const out = route.path === '/' ? path.join(dist, 'index.html') : path.join(dist, route.path, 'index.html');
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, render(route));
}
// Cart is kept out of search results.
fs.mkdirSync(path.join(dist, 'cart'), { recursive: true });
fs.writeFileSync(path.join(dist, 'cart', 'index.html'), render({ path: '/cart', type: 'cart' }));

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  getRoutes().map(r => `  <url>\n    <loc>${SITE_URL}${r.path === '/' ? '/' : r.path}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${r.priority}</priority>\n  </url>`).join('\n') +
  `\n</urlset>\n`;
fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap);
console.log(`SEO: wrote ${getRoutes().length + 1} pages and sitemap.xml for ${SITE_NAME}`);
