import type { SectorType } from '../sectors';
import Rollers from '@assets/images/Sectors/rollers.webp'; // TODO: change to a dog kennel photo
import Stillage from '@assets/images/Sectors/stillage.webp';
import Tower from '@assets/images/Sectors/tower.webp';
import Ceramics from '@assets/images/Sectors/ceramics.webp';

export const AgricultureEstate: SectorType = {
  seoTitle: 'Steel Deer Towers & High Seats | Bowson Engineering',
  seoDesc: 'Bespoke galvanised steel deer towers, high seats and kennel structures for estates, landowners and shoots. Designed and manufactured in Stoke-on-Trent.',
  title: 'Agriculture & Estate',
  description: 'Bespoke steel deer towers, high seats and dog kennel structures for estates, landowners and shoots. Manufactured to your requirements, offering a durable alternative to traditional timber structures.',
  image: Tower,
  imageAlt: 'Galvanised steel deer tower with an enclosed cabin and ladder in woodland',
  whatWeOffer: {
    para1:
      'Estates and landowners need outdoor structures that are durable, practical and built to withstand the elements. We manufacture bespoke galvanised steel deer towers and lookout towers, featuring enclosed cabins and access ladders. Designed as a long-lasting alternative to traditional timber structures, our towers are manufactured to suit individual requirements and intended applications.',
    para2: 'From initial design through to fabrication and finishing, we can manage the manufacturing process to deliver a complete steel structure. We also manufacture bespoke steel dog kennel structures, frames and pens, working to your dimensions and specifications.',
    capabilities: ['SolidWorks Design', 'Steel Fabrication', 'MIG/TIG Welding', 'Enclosed Cabins and Access Ladders', 'Galvanised Finishing', 'Powder Coating'],
  },
  designFor: [
    {
      title: 'Built for outdoor use',
      description: 'Steel construction with galvanised finishing provides protection against corrosion and the demands of long-term outdoor exposure.',
    },
    {
      title: 'Designed to your requirements',
      description: 'Tower dimensions, access arrangements and cabin layouts can be developed around your site and intended application.',
    },
    {
      title: 'A durable alternative to timber',
      description: 'Replace traditional wooden structures with fabricated steel alternatives designed for strength, durability and reduced maintenance.',
    },
  ],
  questionsAsked: {
    title: 'Agriculture & Estate: questions from this sector',
    description: 'The questions we hear most from estates and landowners. Need something specific? Send a photo or a sketch and we will come back with options.',
    questions: [
      {
        question: 'What is a deer tower or high seat?',
        answer: 'A deer tower, also known as a high seat or lookout tower, is a raised structure designed to provide an elevated vantage point for observing and managing deer. Our designs can incorporate enclosed cabins, access ladders and other features to suit the intended application.',
      },
      {
        question: 'Why choose galvanised steel over timber?',
        answer: 'Galvanised steel offers excellent corrosion resistance and protection against outdoor weather conditions. Unlike timber, it will not rot and generally requires less ongoing maintenance, making it a durable option for long-term outdoor structures.',
      },
      {
        question: 'Can you manufacture a deer tower to our specifications?',
        answer: 'Yes. We can discuss your required dimensions, height, cabin layout and access arrangements to develop a suitable design. Contact us with your requirements to discuss the options and obtain a quotation.',
      },
      {
        question: 'Can you manufacture replacement structures?',
        answer: 'Yes. If you have an existing timber tower or structure that you want to replace with steel, we can use its dimensions, layout and intended application as a starting point for a new design.',
      },
      {
        question: 'Do you manufacture dog kennel structures?',
        answer: 'Yes. We manufacture bespoke steel kennel structures, frames and pens to customer dimensions and specifications. Contact us to discuss your requirements.',
      },
    ],
  },
  builtFor: [
    // TODO: link to the real project page
    { image: Tower, imageAlt: 'Galvanised steel deer tower with an enclosed cabin and ladder in woodland', title: 'Deer tower', description: 'A galvanised steel lookout tower with an enclosed cabin and ladder, built to replace a traditional wooden structure.', href: '/projects/[slug]' },
  ],
  customersGet: ['Durable steel structures designed for outdoor use', 'Built to your site and requirements', 'Design and fabrication from a single supplier', 'A quote within 24 hours'],
  otherSectors: [
    {
      title: 'Manufacturing',
      description: 'Cabinets, enclosures and machine parts for production lines',
      href: 'sectors/manufacturing-production',
      image: Rollers,
      coverFit: true,
      imageAlt: 'White steel roll stand holding rolls of material beside a cutting table',
    },
    {
      title: 'Ceramics & Pottery',
      description: 'Kilns, kiln frames, hoods and ventilation canopies, powder coated in-house.',
      href: 'sectors/ceramics-pottery',
      image: Ceramics,
      imageAlt: 'Blue powder coated steel kiln frame with a hood section on top',
    },
    {
      title: 'Material Handling & Storage',
      description: 'Stillages, pallet gates and bottle cages for moving and storing product.',
      href: 'sectors/material-handling-storage',
      image: Stillage,
      imageAlt: 'White steel stillage with grey fabric dividers',
    },
  ],
};
