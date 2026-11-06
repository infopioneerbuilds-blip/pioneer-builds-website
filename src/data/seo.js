// SEO metadata shared by the browser (live page updates) and the build step
// (static per-page HTML, sitemap). Pure data + functions: no DOM access here.
import { COMPANY_INFO, CATEGORIES, PRODUCTS } from './products.js';

export const SITE_URL = 'https://pioneerbuildingmaterials.com';
export const SITE_NAME = 'Pioneer Building Materials Trading LLC';
export const OG_IMAGE = `${SITE_URL}/cover.webp`;
export const MAP_LINK = 'https://maps.app.goo.gl/Jo5euEXq4H44oHDq8';

export const FAQS = [
  ['Can I place bulk or trade orders online?', 'Yes, you can submit bulk order enquiries through our product catalogue and also request a custom quotation by specifying your needs in the material description section.'],
  ['How do I get a price quote for a large or custom project?', 'Send an enquiry directly by adding materials to your cart and submitting the cart via WhatsApp or the alternative option, and our estimators will return a tailored quotation.'],
  ['Do you offer site delivery?', 'Yes, delivery services are available for residential and commercial construction sites, with free or tiered shipping thresholds depending on your order size and region.'],
  ['How can I find technical data sheets (TDS)?', 'Technical specifications and material safety data sheets are available upon request from our service team.'],
  ['Can I change or cancel my order after it has been placed?', 'Standard orders can be modified or cancelled up until they are loaded onto the delivery truck. Once an order is dispatched or a custom fabrication begins, changes cannot be made.'],
  ['What is the minimum order quantity (MOQ) for loose aggregates?', 'Loose materials like sand, aggregate and road base can be ordered starting from 3m³ truck loads. Smaller quantities can be purchased in pre-packed 25kg bags; the MOQ for pre-packed bags can be discussed.']
];

const trim = (s, n = 158) => (s.length <= n ? s : s.slice(0, n - 1).replace(/[\s,.;:&-]+\S*$/, '') + '…');

// Every indexable page on the site, in sitemap order.
export function getRoutes() {
  return [
    { path: '/', type: 'home', priority: '1.0' },
    { path: '/categories', type: 'categories', priority: '0.9' },
    ...CATEGORIES.map(c => ({ path: `/category/${c.slug}`, type: 'category', cat: c, priority: '0.8' })),
    { path: '/about', type: 'about', priority: '0.6' },
    { path: '/contact', type: 'contact', priority: '0.7' }
  ];
}

export function getRouteSeo(route) {
  const base = { robots: 'index,follow,max-image-preview:large', image: OG_IMAGE, h1: SITE_NAME };
  switch (route.type) {
    case 'home':
      return { ...base,
        title: 'Building Materials Supplier in Dubai, UAE | Pioneer BMT',
        description: 'Wholesale building materials in Dubai: sand, cement, aggregates, timber, fasteners, tools and safety gear, delivered across the UAE. Get a quote today.',
        h1: 'Pioneer Building Materials Trading LLC – Building Materials Supplier in Dubai, UAE' };
    case 'categories':
      return { ...base,
        title: 'Building Materials Catalogue Dubai | Pioneer BMT Products',
        description: `Browse ${CATEGORIES.length} product categories and ${PRODUCTS.length}+ items: sand, cement, steel, timber, fasteners, power tools, safety gear, plumbing and more. Wholesale supply in Dubai.`,
        h1: 'Building Materials Product Categories' };
    case 'category': {
      const c = route.cat;
      return { ...base,
        title: trim(`${c.name} in Dubai, UAE | Pioneer BMT`, 62),
        description: trim(`${c.name}: ${c.description} Wholesale supply and delivery across Dubai and the UAE from Pioneer Building Materials Trading.`),
        image: `${SITE_URL}${c.coverImage}`,
        h1: c.name };
    }
    case 'about':
      return { ...base,
        title: 'About Us | Pioneer Building Materials Trading LLC Dubai',
        description: '16+ years supplying contractors, builders and businesses across Dubai with quality building materials, tools and safety equipment. Learn about Pioneer BMT.',
        h1: 'About Pioneer Building Materials Trading LLC' };
    case 'contact':
      return { ...base,
        title: 'Contact Us | Pioneer Building Materials Trading LLC Dubai',
        description: 'Get a quote or directions to Pioneer Building Materials Trading LLC in Dubai. Call +971 58 546 6599, WhatsApp or send an enquiry. Office hours inside.',
        h1: 'Contact Pioneer Building Materials Trading LLC' };
    default: // cart and anything unknown: keep out of search results
      return { ...base, robots: 'noindex,follow', title: 'Shopping Cart | Pioneer Building Materials Trading LLC', description: 'Review your selected materials and send your enquiry to Pioneer Building Materials Trading LLC.', h1: 'Shopping Cart' };
  }
}

const businessLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'WholesaleStore',
  '@id': `${SITE_URL}/#business`,
  name: SITE_NAME,
  alternateName: 'Pioneer BMT',
  url: SITE_URL,
  logo: `${SITE_URL}/email-logo.png`,
  image: OG_IMAGE,
  description: 'Wholesale supplier of building materials, sand, cement, aggregates, timber, fasteners, tools and safety equipment in Dubai, UAE.',
  telephone: COMPANY_INFO.phones.map(p => p.replace(/\s+/g, '')),
  email: COMPANY_INFO.emails,
  address: { '@type': 'PostalAddress', addressLocality: 'Dubai', addressCountry: 'AE' },
  hasMap: MAP_LINK,
  areaServed: [{ '@type': 'City', name: 'Dubai' }, { '@type': 'Country', name: 'United Arab Emirates' }],
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '09:30', closes: '14:30' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '16:00', closes: '19:30' }
  ],
  priceRange: '$$'
});

const crumbs = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, path], i) => ({ '@type': 'ListItem', position: i + 1, name, item: `${SITE_URL}${path}` }))
});

// JSON-LD blocks for a page: the business everywhere, plus page-specific data.
export function getJsonLd(route) {
  const blocks = [businessLd()];
  if (route.type === 'contact') {
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQS.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } }))
    });
  }
  if (route.type === 'category') {
    const c = route.cat;
    blocks.push(crumbs([['Home', '/'], ['Products', '/categories'], [c.name, route.path]]));
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: c.name,
      numberOfItems: PRODUCTS.filter(p => p.catId === c.id).length,
      itemListElement: PRODUCTS.filter(p => p.catId === c.id).map((p, i) => ({
        '@type': 'ListItem', position: i + 1, name: p.name, image: `${SITE_URL}${p.image}`
      }))
    });
  }
  if (route.type === 'categories') blocks.push(crumbs([['Home', '/'], ['Products', '/categories']]));
  if (route.type === 'about') blocks.push(crumbs([['Home', '/'], ['About Us', '/about']]));
  if (route.type === 'contact') blocks.push(crumbs([['Home', '/'], ['Contact Us', '/contact']]));
  return blocks;
}

// Map the browser's current path onto a route (used at runtime).
export function routeFromPath(pathname) {
  const path = (pathname.replace(/\/$/, '') || '/');
  return getRoutes().find(r => r.path === path) || { path, type: 'other' };
}
