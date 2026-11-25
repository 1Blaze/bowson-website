// src/lib/schema.ts
import { BUSINESS } from '../data/business';

type Node = Record<string, unknown>;

// Fails the build if any [bracketed] placeholder is left in the structured data.
function assertNoPlaceholders(value: unknown, path = 'schema'): void {
  if (typeof value === 'string') {
    if (/\[[^\]]*\]/.test(value)) {
      const message = `Placeholder left in ${path}: "${value}"`;
      if (import.meta.env.PROD) throw new Error(message); // fail the build
      console.warn(message); // only warn in dev
    }
  } else if (Array.isArray(value)) {
    value.forEach((v, i) => assertNoPlaceholders(v, `${path}[${i}]`));
  } else if (value && typeof value === 'object') {
    Object.entries(value).forEach(([k, v]) => assertNoPlaceholders(v, `${path}.${k}`));
  }
}

export function localBusinessSchema(site: URL): Node {
  const base = site.origin;
  const b = BUSINESS;

  const node: Node = {
    '@type': 'LocalBusiness',
    '@id': `${base}/#business`,
    name: b.name,
    legalName: b.legalName,
    url: `${base}/`,
    description: b.description,
    foundingDate: b.foundingDate,
    telephone: b.phone,
    email: b.email,
    logo: `${base}${b.logoPath}`,
    image: b.imagePaths.map((p) => `${base}${p}`),
    address: { '@type': 'PostalAddress', ...b.address },
    geo: { '@type': 'GeoCoordinates', ...b.geo },
    hasMap: b.mapUrl,
    areaServed: b.areaServed,
    knowsAbout: b.knowsAbout,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Sheet metal fabrication services',
      itemListElement: b.services.map((name) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name },
      })),
    },
  };

  if (b.sameAs.length) node.sameAs = b.sameAs;

  if (b.hours.length) {
    node.openingHoursSpecification = b.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    }));
  }

  assertNoPlaceholders(node, 'LocalBusiness');
  return node;
}

export function websiteSchema(site: URL): Node {
  const base = site.origin;
  return {
    '@type': 'WebSite',
    '@id': `${base}/#website`,
    url: `${base}/`,
    name: BUSINESS.name,
    inLanguage: 'en-GB',
    publisher: { '@id': `${base}/#business` },
  };
}

export function webPageSchema(
  site: URL,
  page: {
    title: string;
    description: string;
    path: string;
  },
): Node {
  const url = new URL(page.path, site).href;

  return {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: page.title,
    description: page.description,
    isPartOf: {
      '@id': `${site.origin}/#website`,
    },
    about: {
      '@id': `${site.origin}/#business`,
    },
    inLanguage: 'en-GB',
  };
}

// trailingSlash is 'never', so paths have no trailing slash: '/services', '/projects/my-slug'.
export function breadcrumbSchema(site: URL, trail: { name: string; path: string }[]): Node {
  const base = site.origin;
  return {
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...trail].map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${base}${c.path}`,
    })),
  };
}

// Safe to drop into <script type="application/ld+json" set:html={...} />
export function toJsonLd(nodes: Node[]): string {
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': nodes }).replace(/</g, '\\u003c');
}
