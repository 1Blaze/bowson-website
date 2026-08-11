import type { SectorType } from '../sectors';
import Punch from '@assets/images/Punch_TODO_Change.webp';

export const CeramicsPottery: SectorType = {
  seoTitle: 'Ceramics & Pottery Fabrication | Bowson Engineering',
  seoDesc: 'Bespoke fabricated ceramics and pottery equipment, including metal kiln shells, kiln hoods and heated cabinets. Manufactured in Stoke-on-Trent for ceramicists and pottery makers.',
  title: 'Manufacturing',
  description: 'Bespoke cabinets, enclosures and machine components built to keep production lines running — designed, fabricated and finished in one Stoke-on-Trent workshop.',
  image: Punch,
  imageAlt: '',
  whatWeOffer: {
    para1: "Manufacturers come to us when an off-the-shelf cabinet won't fit, a machine needs a custom guard, or a control panel chassis has to match an unusual footprint. Because we punch, bend, weld and powder coat in-house, we can turn a sketch or a sample into a finished, ready-to-install part on a single PO.",
    para2: 'Most of our manufacturing customers are repeat clients — we hold their drawings on file and call off batches as production schedules change. We also support new product introductions with rapid prototypes followed by tooled production runs.',
    capabilities: ['CNC Punching', 'Press Brake Bending', 'MIG/TIG Welding', 'Powder Coating'],
  },
  designFor: [
    { title: 'Bespoke footprints', description: 'Production cells rarely match catalogue sizes. We build to your exact envelope, not to the nearest standard.' },
    { title: 'Bespoke footprints', description: 'Production cells rarely match catalogue sizes. We build to your exact envelope, not to the nearest standard.' },
    { title: 'Bespoke footprints', description: 'Production cells rarely match catalogue sizes. We build to your exact envelope, not to the nearest standard.' },
  ],
  questionsAsked: {
    title: 'CNC Punching - questions we get asked',
    description: 'Materials, tolerances, lead times — quick answers about how we deliver this service. Anything missing? Pick up the phone or send a drawing.',
    questions: [
      {
        question: 'What materials and thicknesses can you CNC punch?',
        answer: 'Our Trumpf TC200 handles mild steel up to 4mm, aluminium up to 5mm and stainless steel up to 3mm. We can also punch louvre size 60×12.',
      },
    ],
  },
  builtFor: [
    {
      image: Punch,
      title: 'Charger cabinets',
      description: 'Ventilated cabinets for battery and tool charging stations, finished in brand colours.',
      href: '/laser-cutting', // TODO: products /
    },
  ],
  customersGet: ['Reduced line downtime', 'Single PO for finished parts', 'Design files held for repeat call-offs'],
  otherSectors: [
    {
      image: Punch,
      title: 'Agriculture',
      description: 'Galvanised structures, deer towers, livestock pens and feeders.',
      href: '/laser-cutting', // TODO: sectors /
    },
  ],
};

// TODO: the intro is the seo Desc
// export const sectors = [
//   {
//     slug: "ceramics-pottery",
//     name: "Ceramics & Pottery",
//     title: "Ceramics & Pottery Fabrication | Bowson Engineering",
//     description: "Bowson Engineering fabricates kilns, kiln hoods and heated cabinets for the ceramics industry. Family-run in Stoke-on-Trent since 1990. Get a fast quote.",
//     intro: "Bespoke fabricated ceramics and pottery equipment, including metal kiln shells, kiln hoods and heated cabinets. Manufactured in Stoke-on-Trent for ceramicists and pottery makers."
//   },
//   {
//     slug: "agriculture-estate-management",
//     name: "Agriculture & Estate Management",
//     title: "Agriculture & Estate Fabrication | Bowson Engineering",
//     description: "Bowson Engineering fabricates deer towers, dog kennels and estate structures for agriculture and land management in Stoke-on-Trent. Get a fast quote.",
//     intro: "Bespoke fabricated agricultural and estate structures, including deer towers and dog kennel structures. Manufactured in Stoke-on-Trent"
//   },
//   {
//     slug: "leisure-vehicle-conversion",
//     name: "Leisure Vehicle Conversion",
//     title: "Leisure Vehicle Fabrication | Bowson Engineering",
//     description: "Bowson Engineering fabricates bespoke seatbeds and fittings for VW campervan and leisure vehicle conversions in Stoke-on-Trent. Get a fast quote.",
//     intro: "Bespoke fabricated leisure vehicle components, including VW campervan seatbeds. Manufactured in Stoke-on-Trent for campervan and leisure vehicle converters."
//   },
//   {
//     slug: "composites-advanced-manufacturing",
//     name: "Composites & Advanced Manufacturing",
//     title: "Composites & Advanced Manufacturing | Bowson Engineering",
//     description: "Bowson Engineering fabricates degassing chambers for the composites and advanced manufacturing sector in Stoke-on-Trent. Get a fast quote.",
//     intro: "Bespoke fabricated composite manufacturing equipment, including degassing chamber enclosures. Manufactured in Stoke-on-Trent for composites and advanced manufacturing sites."
//   },
//   {
//     slug: "manufacturing-industrial",
//     name: "Manufacturing & Industrial",
//     title: "Industrial Fabrication Services | Bowson Engineering",
//     description: "Bowson Engineering fabricates work benches, machine guarding and safety barriers for manufacturing and industrial sites in Stoke-on-Trent. Get a fast quote.",
//     intro: "Bespoke fabricated industrial equipment, including work benches, machine guarding, bottle cages and safety barriers. Manufactured in Stoke-on-Trent for manufacturing and industrial sites."
//   },
//   {
//     slug: "warehousing-logistics",
//     name: "Warehousing & Logistics",
//     title: "Warehousing & Logistics Fabrication | Bowson Engineering",
//     description: "Bowson Engineering fabricates stillages, roller tables and pallet gates for warehousing and logistics operations in Stoke-on-Trent. Get a fast quote.",
//     intro: "Bespoke fabricated warehousing and logistics equipment, including stillages, roller tables and pallet gates. Manufactured in Stoke-on-Trent for warehousing and logistics operations."
//   },
//   {
//     slug: "facilities-commercial",
//     name: "Facilities & Commercial",
//     title: "Facilities & Commercial Fabrication | Bowson Engineering",
//     description: "Bowson Engineering fabricates smoking shelters, fire escapes and commercial steelwork for facilities in Stoke-on-Trent since 1990. Get a fast quote.",
//     intro: "Bespoke fabricated facilities and commercial structures, including smoking shelters and fire escapes. Manufactured in Stoke-on-Trent for facilities and commercial management."
//   },
//   {
//     slug: "technology-secure-storage",
//     name: "Technology & Secure Storage",
//     title: "Secure Storage Fabrication | Bowson Engineering",
//     description: "Bowson Engineering fabricates charging cabinets, computer cabinets and laptop trolleys for secure technology storage in Stoke-on-Trent. Get a fast quote.",
//     intro: "Bespoke fabricated secure storage equipment, including charging cabinets, computer cabinets and laptop trolleys. Manufactured in Stoke-on-Trent for technology and IT teams."
//   }
// ];
