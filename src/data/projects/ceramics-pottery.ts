import type { ProjectType } from '../projects';
import TruckKiln from '@assets/images/hero_image.webp';
import Ikons from '@assets/images/Projects/ikon_bases.webp';

export const TruckKilnProject: ProjectType = {
  title: 'A Split Truck Kiln Frame',
  description: 'A large bespoke truck kiln frame manufactured in split sections to pass through a restricted doorway, complete with a detachable track and wheeled truck for loading and unloading ceramics.',
  seoTitle: 'Bespoke Truck Kiln Frames & Tracks | Bowson Engineering',
  seoDesc: 'A large split-section steel truck kiln frame with a detachable track and wheeled truck, manufactured by Bowson Engineering for a kiln manufacturer in Stoke-On-Trent.',
  image: TruckKiln,
  imageAlt: 'Yellow and black steel truck kiln frame with its truck pulled out on a yellow track',
  imageFig: 'Fig. 03 // Ceramics & Pottery',
  tag: 'Ceramics & Pottery',
  selected: false,
  locationData: {
    location: 'Location withheld',
    client: 'Kiln Manufacturer',
  },
  barInfo: {
    sector: 'Ceramics & Pottery',
    material: 'Steel',
    finish: 'Powder coated, yellow and black',
    category: 'Truck Kilns',
  },
  challenge: 'The customer required a large-capacity truck kiln, but access to its intended position was restricted by a doorway. The frame therefore needed to be manufactured in sections that could be transported through the opening and assembled once inside. The completed kiln was also expected to accommodate a load weighing approximately 1.1 tonnes once lined and bricked.',
  solution:
    'Bowson manufactured the kiln frame in split sections, allowing the individual components to pass through the restricted doorway before being assembled in position. The project also included a detachable track and wheeled truck, providing a way to move ceramics into and out of the kiln. The steelwork was fabricated and powder coated in-house, ready for the customer to complete the kiln lining.',
  features: [
    'Split-section frame designed for restricted access',
    'Detachable track for loading and unloading',
    'Wheeled truck for moving ceramics into and out of the kiln',
    'Designed for a completed kiln weighing approximately 1.1 tonnes once lined and bricked',
    'Yellow and black powder-coated finish',
    'Fabricated and powder coated in-house',
    'Largest kiln frame manufactured by Bowson Engineering at the time of the project',
  ],
  outcome: 'A large truck kiln frame that could be moved through a doorway and assembled on site, ready for lining.',
  specification: [
    { title: 'Type', value: 'Split truck kiln with detachable track and truck' },
    { title: 'Approx. weight once bricked', value: '1.1 tonnes' },
    { title: 'Doorway', value: 'Built to pass through a 860mm doorway' },
    { title: 'Overall size', value: '1.5D × 1.4W × 2.1H, in m' },
  ],
  number: '003',
};

export const KilnShellBatchProject: ProjectType = {
  title: 'Batch Production of Kiln Shells',
  description: 'Repeat manufacture of steel shells for top-loading kilns, produced in batches of 36 approximately every two months. Production processes have been refined over successive orders to improve efficiency and reduce manufacturing costs.',
  seoTitle: 'Kiln Shell Manufacturing & Batch Production | Bowson Engineering',
  seoDesc: 'Repeat batch manufacture of top-loading kiln shells, with 36 units produced approximately every two months for a kiln manufacturer. Manufactured in Stoke-on-Trent.',
  image: Ikons,
  imageAlt: 'Batch of blue powder coated steel kiln shell frames hanging in the powder coating area',
  imageFig: 'Fig. 04 // Ceramics & Pottery',
  tag: 'Ceramics & Pottery',
  selected: true,
  locationData: {
    location: 'Location withheld',
    client: 'Kiln Manufacturer',
  },
  barInfo: {
    sector: 'Ceramics & Pottery',
    material: 'Mild Steel & Stainless Steel',
    finish: 'Powder Coated Mild Steel, Brushed Stainless Steel',
    category: 'Batch Production',
  },
  challenge: 'A kiln manufacturer required a reliable supply of kiln shells across a range of top-loading kiln sizes. With regular production orders of 36 units approximately every two months, the manufacturing process needed to be efficient, repeatable and commercially competitive.',
  solution:
    'Bowson manufactures the kiln shells in regular batches of 36, with orders placed approximately every two months. Across successive production runs, we have refined the manufacturing process and improved how the components are produced, reducing manufacturing time and unit costs while maintaining consistency. The completed shells are supplied ready for the customer to carry out the remaining kiln assembly and finishing work.',
  features: ['Repeat production in batches of 36, roughly every two months', 'Design and process refined over repeat orders to reduce manufacturing time and cost', 'Parts programmed once, so every shell matches the last', 'Consistent quality across batches', "Manufactured in Bowson Engineering's workshop", 'Supplied ready for the customer to complete the kiln'],
  outcome: 'An established repeat-production process supplying a kiln manufacturer with regular batches of 36 shells, with manufacturing improvements helping to reduce production time and cost over successive orders.',
  specification: [
    { title: 'Batch size', value: '36 units' },
    { title: 'Frequency', value: 'Approx. every 2 months' },
    { title: 'Models', value: '5 different versions' },
    { title: 'Material', value: 'Mild Steel & Stainless Steel' },
  ],
  number: '004',
};
