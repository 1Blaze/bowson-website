// TEXT: THIS AND TODO THIS
import Punch from '@assets/images/Punch_TODO_Change.webp';
import type { ProjectType } from '../projects';

export const ExampleProject: ProjectType = {
  title: 'Custom Machine Guarding',
  description: 'Bespoke perimeter guarding designed around an existing machine cell, with interlocked access doors.',
  seoTitle: 'SEO TITLE',

  // SEO Example
  // title: "Kiln Hood Fabrication for Ceramics Manufacturer | Bowson Engineering"
  // description: "A custom-fabricated kiln hood and ventilation canopy. Designed and built in-house by Bowson Engineering, Stoke-on-Trent."
  seoDesc: '',
  image: Punch,
  imageAlt: 'Image Alt',
  imageFig: 'Fig. 01 // Safety & Access',
  tag: 'Agriculture & Animal',
  selected: false,
  locationData: {
    location: 'West Midlands',
    client: 'Automotive tier-2 manufacturer',
  },
  barInfo: {
    sector: 'Manufacturing',
    material: 'Mild steel + mesh',
    finish: 'Powder coated yellow',
    category: 'Safety & Access',
  },
  challenge: "A new robotic weld cell had been dropped into an existing production line with no perimeter protection, blocking sign-off from the customer's health & safety auditor.",
  soultion: 'We surveyed the cell in-situ, drew up a bespoke perimeter guard around the existing footprint, and fabricated a mesh-infill steel frame with two interlocked access doors — installed over a single weekend to avoid production loss.',
  features: ['Bespoke perimeter footprint drawn from on-site survey — no cell rework', '50 mm × 50 mm × 3 mm welded mesh infill to BS EN ISO 14120', "Two interlocked access doors wired to the cell's safety PLC", 'Powder-coated safety yellow for high visibility on the shop floor'],
  outcome: 'Installed over a single production weekend — cell signed off first Monday back.',
  specification: [
    {
      title: 'Perimeter Length',
      value: '18.4 m',
    },
    {
      title: 'Guard Height',
      value: '2.1m',
    },
  ],
  number: '001',
};
