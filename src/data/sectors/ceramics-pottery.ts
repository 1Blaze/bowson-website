import type { SectorType } from '../sectors';
import Rollers from '@assets/images/Sectors/rollers.webp';
import Stillage from '@assets/images/Sectors/stillage.webp';
import Tower from '@assets/images/Sectors/tower.webp';
import Ceramics from '@assets/images/Sectors/ceramics.webp';
import TruckKiln from '@assets/images/hero_image.webp';
import Ikons from '@assets/images/Projects/ikon_bases.webp';

export const CeramicsPottery: SectorType = {
  seoTitle: 'Kiln Frames, Hoods & Fabrication | Bowson Engineering',
  seoDesc: 'Bespoke metal fabrication for kiln manufacturers and potteries. We manufacture kiln shells, frames, hoods, ventilation canopies and kiln cages in Stoke-on-Trent.',
  title: 'Ceramics & Pottery',
  description: 'Bespoke kiln shells, frames, hoods and ventilation canopies for kiln manufacturers, alongside kiln cages for potteries, studios and ceramics businesses. Manufactured to your drawings and dimensions in Stoke-on-Trent.',
  image: Ceramics,
  imageAlt: 'Blue powder coated steel kiln frame with a hood section on top',
  whatWeOffer: {
    para1:
      'Kiln manufacturers require accurately fabricated metalwork to form the outer structure of their kilns. We manufacture bespoke kiln shells, frames, hoods and ventilation canopies to customer drawings, samples and specifications. The finished steelwork is supplied to kiln manufacturers for lining, fitting and completion. Based in the heart of the Potteries, we have a strong connection to the ceramics industry and understand the importance of producing components to the required dimensions and design.',

    para2: 'We also manufacture kiln cages directly for businesses and organisations across the ceramics sector, including potteries, studios and educational facilities. With SolidWorks design, CNC punching, press brake bending, welding and powder coating available in-house, we can manage multiple stages of manufacture under one roof, from individual components to repeat production batches.',
    capabilities: ['SolidWorks Design', 'Steel Fabrication', 'CNC Punching', 'Press Brake Bending', 'MIG/TIG Welding', 'Powder Coating'],
  },
  designFor: [
    {
      title: 'Built to your kiln design',
      description: 'Casings, frames and canopies are manufactured to your drawings and dimensions, so they suit your lining, your doors and your fittings.',
    },
    {
      title: 'Repeatable batches',
      description: 'Parts are programmed once, so every casing in a batch matches the first and fits out the same way.',
    },
    {
      title: 'A durable coloured finish',
      description: 'In-house powder coating gives a hard-wearing finish in a wide range of colours, applied before the kiln is lined and supplied.',
    },
  ],
  questionsAsked: {
    title: 'Ceramics & Pottery: questions from this sector',
    description: 'The questions we hear most from kiln manufacturers and ceramics customers. Need something specific? Send a drawing, a photo or your dimensions and we will come back with options.',
    questions: [
      {
        question: 'Do you manufacture complete kilns?',
        answer: 'No. We manufacture the metalwork that forms the outer structure of kilns, including shells, frames, hoods and ventilation canopies. These are supplied to kiln manufacturers, who carry out the lining and final assembly. We also manufacture kiln cages directly for ceramics customers.',
      },
      {
        question: 'What is a kiln cage?',
        answer: 'A kiln cage is a fabricated metal structure designed to support or enclose parts of a kiln installation. We manufacture bespoke kiln cages to suit your equipment, dimensions and requirements.',
      },
      {
        question: 'Can you manufacture to our existing kiln designs?',
        answer: 'Yes. We can work from existing drawings, CAD files, sketches or physical samples. Where required, our SolidWorks CAD capabilities can be used to develop manufacturing drawings for your approval before production.',
      },
      {
        question: 'Can you manufacture repeat batches?',
        answer: 'Yes. We manufacture individual components, prototypes and repeat production batches. Retaining relevant drawings and manufacturing information helps us maintain consistency and simplify future orders.',
      },
      {
        question: 'Can you manufacture a hood or canopy for an existing kiln?',
        answer: 'Yes. We can discuss your existing kiln, available dimensions and installation requirements to develop a suitable hood or ventilation canopy. Send us photographs and measurements to get started.',
      },
    ],
  },
  builtFor: [
    {
      image: TruckKiln,
      imageAlt: 'Yellow and black steel truck kiln frame with its truck pulled out on a yellow track',
      title: 'A Split Truck Kiln Frame',
      description: 'A large bespoke truck kiln frame manufactured in split sections to pass through a restricted doorway, complete with a detachable track and wheeled truck for loading and unloading ceramics.',
      href: '/projects/truck-kilns',
    },
    {
      image: Ikons,
      imageAlt: 'Batch of blue powder coated steel kiln shell frames hanging in the powder coating area',
      title: 'Batch Production of Kiln Shells',
      description: 'Repeat manufacture of steel shells for top-loading kilns, produced in batches of 36 approximately every two months. Production processes have been refined over successive orders to improve efficiency and reduce manufacturing costs.',
      href: '/projects/batch-kilns',
    },
  ],
  customersGet: ['Kiln Frames manufactured to your drawings', 'Consistent components for repeat production', 'Powder-coated components ready for assembly', 'Design and fabrication managed under one roof'],
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
      title: 'Agriculture & Estate',
      description: 'Galvanised steel deer towers and dog kennel structures.',
      href: '/sectors/agriculture-estate',
      image: Tower,
      imageAlt: 'Galvanised steel deer tower with an enclosed cabin and ladder in woodland',
    },
    {
      title: 'Material Handling & Storage',
      description: 'Stillages, pallet gates and bottle cages for moving and storing product.',
      href: '/sectors/material-handling-storage',
      image: Stillage,
      imageAlt: 'White steel stillage with grey fabric dividers',
    },
  ],
};
