import type { SectorType } from '../sectors';
import Rollers from '@assets/images/Sectors/rollers.webp';
import Stillage from '@assets/images/Sectors/stillage.webp';
import Tower from '@assets/images/Sectors/tower.webp';
import Guard from '@assets/images/Sectors/machineguard.webp';

export const SafetyAccess: SectorType = {
  seoTitle: 'Machine Guarding, Safety Barriers & Access | Bowson Engineering',
  seoDesc: 'Bespoke machine guarding, safety barriers, access platforms, mobile steps and steel shelters. Manufactured to your requirements in Stoke-on-Trent.',
  title: 'Safety & Access',
  description: 'Machine guarding, safety barriers, access platforms, mobile steps, fire escapes and smoking shelters for factories, warehouses and facilities teams. Manufactured to your drawings, site measurements and specification.',
  image: Guard,
  imageAlt: 'Steel mesh machine guarding with a gate and yellow safety barrier around production equipment',
  whatWeOffer: {
    para1: 'Factories, warehouses and facilities teams need guarding, barriers and access equipment that fits their site, suits the way they work and meets the specification they work to. We manufacture machine guarding with gates, safety barriers, access platforms, mobile steps, fire escapes and smoking and bike shelters, working from customer drawings, site measurements or design requirements.',
    para2:
      'With site visits available for measuring and assessment, alongside SolidWorks design, CNC punching, press brake bending, welding and powder coating in-house, we can manage multiple stages of manufacture under one roof. From individual guards and barriers to larger access structures and repeat production batches, we manufacture to agreed drawings and project specifications, with finishes available in safety colours or your chosen colour scheme.',
    capabilities: ['Machine Guarding and Gates', 'Safety Barriers', 'Access Platforms and Mobile Steps', 'Fire Escapes', 'Smoking and Bike Shelters', 'SolidWorks Design', 'MIG/TIG Welding', 'Powder Coating'],
  },
  designFor: [
    {
      title: 'Made to fit your site',
      description: 'We can visit your premises to take measurements and understand the space, allowing guarding, barriers and access structures to be manufactured to suit your equipment and layout.',
    },
    {
      title: 'Built to your specification',
      description: 'From machine guarding and safety barriers to access platforms and shelters, we work from your drawings, dimensions and agreed project specifications.',
    },
    {
      title: 'Durable, Practical finishes',
      description: 'Our in-house powder coating facility offers a wide range of colours, including safety yellow, providing a durable finish suited to industrial and commercial environments.',
    },
  ],
  questionsAsked: {
    title: 'Safety & Access: questions from this sector',
    description: 'The questions we hear most from factories, warehouses and facilities teams. Need something specific? Send photos and dimensions and we will come back with options.',
    questions: [
      {
        question: 'What is machine guarding?',
        answer: 'Machine guarding is a physical barrier, such as steel mesh panels with gates, that keeps people away from moving or hazardous parts of machinery. We manufacture guarding to suit your machine, your layout and the access you need for operation and maintenance.',
      },
      {
        question: 'Can you build to a safety standard?',
        answer: 'We can manufacture components and structures to customer-approved drawings and specifications, including requirements relating to relevant safety standards. However, we do not independently certify the design or confirm regulatory compliance. Where required, the design and its compliance should be assessed by a suitably qualified person before manufacture.',
      },
      {
        question: 'Can you visit site to measure up?',
        answer: 'Yes. We can visit your site to take measurements. Where a visit is not practical, send photographs and dimensions or a sketch and we can work from those.',
      },
      {
        question: 'Do you make smoking and bike shelters?',
        answer: 'Yes. We manufacture steel-framed shelters with clear roof and side panels, built to your size and layout and powder coated in the colour you choose.',
      },
      {
        question: 'Can barriers and guards be made in our own colours?',
        answer: 'Yes. We powder coat in our own oven in a wide range of colours and finishes, including safety yellow. Tell us the colour you need and we will confirm what we can match.',
      },
    ],
  },
  builtFor: [
    // TODO: add the smoking shelter, an access platform, mobile steps and a fire escape, and link to the real project pages
    {
      image: Guard,
      imageAlt: 'Steel mesh machine guarding with a gate and yellow safety barrier around production equipment',
      title: 'Machine guarding',
      description: 'Steel mesh guarding with a gate and a yellow safety barrier around production equipment.',
      href: '/projects/[slug]',
    },
  ],
  customersGet: ['Guarding and barriers made to fit your site', 'Built to the specification you provide', 'Finished in safety colours or your own', 'Design and fabrication managed under one roof'],
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
      title: 'Material Handling & Storage',
      description: 'Stillages, pallet gates and bottle cages for moving and storing product.',
      href: '/sectors/material-handling-storage',
      image: Stillage,
      imageAlt: 'White steel stillage with grey fabric dividers',
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
