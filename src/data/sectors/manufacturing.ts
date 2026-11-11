import type { SectorType } from '../sectors';
import Rollers from '@assets/images/Sectors/rollers.webp';
import Stillage from '@assets/images/Sectors/stillage.webp';
import Tower from '@assets/images/Sectors/tower.webp';
import Ceramics from '@assets/images/Sectors/ceramics.webp';
import Workbenches from '@assets/images/Projects/workbenches.webp';
import RollStand from '@assets/images/Sectors/rollers.webp';

export const Manufacturing: SectorType = {
  seoTitle: 'Metal Fabrication for Manufacturers | Bowson Engineering',
  seoDesc: 'Bespoke sheet metal fabrication for manufacturers, including cabinets, enclosures, machine components and assemblies. Designed and manufactured in Stoke-on-Trent.',
  title: 'Manufacturing',
  description: 'Bespoke sheet metal components, cabinets, enclosures and fabricated assemblies for manufacturers. From individual parts to repeat production batches, we manufacture to your drawings and specifications.',
  image: Rollers,
  imageAlt: 'White steel roll stand holding rolls of material beside a cutting table',
  whatWeOffer: {
    para1: 'Manufacturers need components that fit their equipment, meet their specifications and perform reliably in production. We manufacture bespoke sheet metal parts, including cabinets, enclosures, machine guards, brackets and fabricated assemblies, working from customer drawings, samples or design requirements.',
    para2: 'With CNC punching, press brake bending, welding, fabrication and powder coating available in-house, we can manage multiple stages of manufacture under one roof. We support everything from one-off components and prototypes to repeat production batches, helping manufacturers source the parts they need from a single supplier.',
    capabilities: ['CNC Punching', 'Press Brake Bending', 'MIG/TIG Welding', 'Powder Coating'],
  },
  designFor: [
    {
      title: 'Bespoke components',
      description: 'Custom cabinets, enclosures, machine guards and brackets manufactured to your drawings, dimensions and specifications.',
    },
    {
      title: 'Consistent production',
      description: 'CNC manufacturing processes and retained design information help maintain consistency across repeat orders and production batches.',
    },
    { title: 'Repeatable batches', description: 'Parts are programmed once, so repeat batches match the first and line-side fitting stays predictable.' },
  ],
  questionsAsked: {
    title: 'Manufacturing — questions from this sector',
    description: 'The questions we hear most from teams in this industry. Need something specific? Send a drawing or a photo and we will come back with options.',
    questions: [
      { question: 'Can you work from our drawings?', answer: 'Yes. We can work from DXF, DWG, STEP and PDF files. If you only have a sample or a sketch, we can produce SolidWorks drawings for your sign-off before we make anything.' },
      { question: 'Can you match our existing equipment colours?', answer: 'Yes. We powder coat in our own oven in a wide range of colours and finishes. Tell us the colour you need and we will confirm what we can match.' },
      { question: 'Do you only make bespoke items?', answer: 'Mostly. Our cabinets, benches, guards and trolleys are made to your size and specification, and repeat designs can be re-ordered without starting again.' },
    ],
  },
  builtFor: [
    {
      image: Workbenches,
      imageAlt: 'Rows of blue powder coated steel pallet building benches with back panels, shelves and overhead frames',
      title: 'Pallet Assembly Workbenches',
      description: 'A batch of twelve bespoke steel workbenches designed for pallet assembly, featuring dedicated positioning areas, integrated tool storage and overhead tool rails to support an organised and efficient production process.',
      href: '/projects/work-benches',
    },
    {
      title: 'Roll Stand for a Cutting Table',
      description: 'A bespoke powder coated steel roll stand designed to hold full rolls of polymer material beside a cutting table, keeping the rolls clear of the working area and allowing the full table length to be used.',
      image: RollStand,
      imageAlt: 'White steel roll stand holding rolls of material beside a cutting table',
      href: '/projects/roll-stand',
      coverFit: true,
    },
  ],
  customersGet: ['Bespoke components made to your specifications', 'Multiple manufacturing processes under one roof', 'One-off components through to repeat production', 'Finished and powder-coated products'],
  otherSectors: [
    {
      title: 'Agriculture & Estate',
      description: 'Galvanised steel deer towers and dog kennel structures.',
      href: 'sectors/agriculture-estate',
      image: Tower,
      imageAlt: 'Galvanised steel deer tower with an enclosed cabin and ladder in woodland',
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
