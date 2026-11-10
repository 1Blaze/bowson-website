import type { SectorType } from '../sectors';
import Rollers from '@assets/images/Sectors/rollers.webp';
import Stillage from '@assets/images/Sectors/stillage.webp';
import Tower from '@assets/images/Sectors/tower.webp';
import Guard from '@assets/images/Sectors/machineguard.webp';

export const MaterialHandling: SectorType = {
  seoTitle: 'Steel Stillages, Pallet Gates & Storage | Bowson Engineering',
  seoDesc: 'Bespoke steel stillages, pallet gates, pallet tables and bottle cages for industrial handling and storage. Manufactured in Stoke-on-Trent to your requirements.',
  title: 'Material Handling & Storage',
  description: 'Bespoke steel stillages, pallet gates, pallet tables and bottle cages for warehouses, workshops and production environments. Designed around your products and handling requirements, then manufactured and finished to your specifications.',
  image: Stillage,
  imageAlt: 'White steel stillage with grey fabric dividers',
  whatWeOffer: {
    para1: 'Warehouses, workshops and production sites need handling and storage equipment that suits their product, their space and the way they move it. We manufacture bespoke stillages for moving and storing product in a range of environments, alongside pallet gates, pallet tables and bottle cages, working from customer drawings, samples or the parts the equipment has to hold.',
    para2: 'With SolidWorks design, CNC punching, press brake bending, welding and powder coating available in-house, we can manage multiple stages of manufacture under one roof. From individual stillages to repeat production batches, our equipment is manufactured to your requirements and finished in your chosen colour.',
    capabilities: ['Stillages in a Range of Designs', 'Stackable Designs', 'Pallet Gates and Pallet Tables', 'Bottle Cages', 'SolidWorks Design', 'MIG/TIG Welding', 'Powder Coating'],
  },
  designFor: [
    {
      title: 'Built around your product',
      description: 'Stillages are designed around the components they carry, with dimensions, internal supports and dividers tailored to your products and handling requirements.',
    },
    {
      title: 'Designed for handling and storage',
      description: 'Forklift access, castors, stacking posts and locating features can be incorporated into the design to suit how your equipment is moved, stored and stacked.',
    },
    {
      title: 'Durable industrial finishes',
      description: 'Fabricated steel construction and powder-coated finishes provide a practical, hard-wearing solution for busy warehouses, workshops and production environments..',
    },
  ],
  questionsAsked: {
    title: 'Material Handling & Storage: questions from this sector',
    description: 'The questions we hear most from warehouses and production sites. Need something specific? Send your product sizes and a photo of how you handle them, and we will come back with options.',
    questions: [
      {
        question: 'What is a stillage?',
        answer: 'A stillage is a steel frame or container used to move and store products, designed to be handled by a forklift or pallet truck. Designs range from simple open frames to units with fabric dividers and covers, built to suit the parts they carry.',
      },
      {
        question: 'Can you make a stillage to suit our parts?',
        answer: 'Yes. Send us drawings, samples, or the sizes and weights of your parts and how you handle and store them, and we will design a stillage around them. Fabric dividers and covers can be fitted to separate and protect your parts.',
      },
      {
        question: 'Can stillages be stacked?',
        answer: 'Yes. We can manufacture stackable stillages with locating features and corner posts designed to secure the units when stacked. The stacking arrangement and load requirements are considered during the design process.',
      },
      {
        question: 'What load can a stillage carry?',
        answer: 'The safe working load depends on the stillage design, materials, construction and handling conditions. We consider your product weight, loading arrangement and stacking requirements when developing a suitable design.',
      },
      {
        question: 'What is a pallet gate?',
        answer: 'A pallet gate is a safety gate fitted at a raised loading opening, which opens to receive a pallet and closes to guard the edge. We manufacture them to suit your opening, and can visit your site to measure up.',
      },
    ],
  },
  builtFor: [
    // TODO: add the stacked stillages, a pallet gate with a better photo and bottle cages, and link to the real project pages
    {
      image: Stillage,
      imageAlt: 'White steel stillage with grey fabric dividers',
      title: 'Stillage with fabric dividers',
      description: 'A white powder coated steel stillage with grey fabric dividers.',
      href: '/projects/[slug]',
    },
  ],
  customersGet: ['Equipment made to your product sizes and handling methods', 'Stackable and mobile designs available', 'Finished in your choice of colour', 'Design and fabrication managed under one roof'],
  otherSectors: [
    {
      title: 'Manufacturing',
      description: 'Cabinets, enclosures and machine parts for production lines',
      href: '/sectors/manufacturing-production',
      image: Rollers,
      coverFit: true,
      imageAlt: 'White steel roll stand holding rolls of material beside a cutting table',
    },
    {
      title: 'Safety & Access',
      description: 'Machine guarding, safety barriers, access platforms, mobile steps and smoking shelters.',
      href: '/sectors/safety-access',
      image: Guard,
      imageAlt: 'Steel mesh machine guarding with a gate and yellow safety barrier around production equipment',
    },
    {
      title: 'Agriculture & Estate',
      description: 'Galvanised steel deer towers and dog kennel structures.',
      href: '/sectors/agriculture-estate',
      image: Tower,
      imageAlt: 'Galvanised steel deer tower with an enclosed cabin and ladder in woodland',
    },
  ],
};
