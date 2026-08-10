import type { SectorType } from '../sectors';
import Punch from '@assets/images/Punch_TODO_Change.webp';

export const CeramicsPottery: SectorType = {
  seoTitle: '',
  seoDesc: '',
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
