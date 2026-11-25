// src/data/business.ts
// Single source of truth for business details (name, address, phone).
// Use this in the footer, contact page and JSON-LD so they can never disagree,
// and make it match your Google Business Profile exactly.
//
// Every [bracketed] value must be replaced. The build fails if one reaches the JSON-LD.

export const BUSINESS = {
  name: 'Bowson Engineering',
  legalName: 'Bowson Engineering Ltd', // must match Companies House exactly

  // Keep this consistent with the footer description.
  description: 'Family-owned sheet metal fabricator in Fenton, Stoke-on-Trent, established in 1990. CNC punching, bending, rolling, welding and powder coating in our own workshop, with laser-cut blanks sourced through our cutting partner.',

  foundingDate: '1990',

  phone: '+441782749000', // matches the tel: link on the site
  email: 'info@bowson.co.uk',

  address: {
    streetAddress: 'Oak House, Dewsbury Rd, Fenton',
    addressLocality: 'Stoke-on-Trent',
    addressRegion: 'Staffordshire',
    postalCode: 'ST4 2TE',
    addressCountry: 'GB',
  },

  // Right-click your workshop on Google Maps and copy the coordinates (numbers, not strings).
  geo: { latitude: 53.009800091436986 as number, longitude: -2.160247621959224 as number },

  // Files in /public. Logo should be at least 112x112 px.
  logoPath: '/logo.png',
  imagePaths: ['/og-default.jpg'], // 1200x630 workshop or product photo

  // Link to your Google Business Profile (the "Share" link from Google Maps).
  mapUrl: 'https://maps.app.goo.gl/MSDCLWn35raHv1AEA',

  // Only profiles that really exist and that you control.
  sameAs: ['https://www.linkedin.com/company/5650038', 'https://www.facebook.com/BowsonEng'] as string[],

  // Only list areas you genuinely serve. Delivery area is still unconfirmed.
  areaServed: [
    {
      '@type': 'City',
      name: 'Stoke-on-Trent',
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Staffordshire',
    },
    { '@type': 'Country', name: 'United Kingdom' },
  ],

  hours: [
    {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '07:30',
      closes: '16:00',
    },
    {
      days: ['Friday'],
      opens: '07:30',
      closes: '13:00',
    },
  ],

  services: ['CNC Punching', 'Laser-cut parts (sourced through our cutting partner)', 'Metal bending and forming', 'Welding and fabrication', 'Powder coating', '3D CAD design'],

  knowsAbout: ['Sheet metal fabrication', 'CNC punching', 'Metal bending and forming', 'MIG and TIG welding', 'Powder coating', 'SolidWorks 3D CAD'],
};
