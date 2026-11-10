import type { ProjectType } from '../projects';
import Tower from '@assets/images/Projects/deer_tower.webp';

export const DeerTower: ProjectType = {
  title: 'Galvanised Steel Deer Tower',
  description: 'A bespoke galvanised steel deer tower featuring an enclosed cabin and access ladder, manufactured as a durable alternative to a traditional timber lookout structure.',
  seoTitle: 'Galvanised Steel Deer Tower | Bowson Engineering',
  seoDesc: 'See how Bowson Engineering manufactured a bespoke galvanised steel deer tower with an enclosed cabin and access ladder for an outdoor lookout application.',
  image: Tower,
  imageAlt: 'Galvanised steel deer tower with an enclosed cabin and access ladder in woodland',
  imageFig: 'Fig. 01 // Agriculture & Estate',
  tag: 'Agriculture & Estate',
  selected: true,
  locationData: {
    location: 'Staffordshire, England',
    client: 'Forestry body',
  },
  barInfo: {
    sector: 'Agriculture & Estate',
    material: 'Galvanised steel',
    finish: 'Galvanised',
    category: 'Deer Towers',
  },
  challenge: 'The customer required a replacement for a traditional timber lookout structure, with a more durable steel construction suitable for its outdoor setting. The new structure needed to provide an enclosed elevated position with practical access and a long lasting solution.',
  solution: 'Bowson manufactured a bespoke galvanised steel deer tower featuring an enclosed cabin, access ladder and a stalking platform. The structure was designed using SolidWorks, manufactured to match the layout of an existing tower and fabricated in our workshop before being delivered to site.',
  features: ['Galvanised steel construction', 'Enclosed cabin with stalking platform', 'Access ladder and cabin floor', "Manufactured in Bowson Engineering's workshop", 'Designed as an alternative to a traditional timber lookout structure'],
  outcome: 'The completed tower provided the customer with a bespoke steel replacement for the existing timber lookout structure, with an enclosed cabin and integrated access.',
  specification: [
    { title: 'Material', value: 'Galvanised steel' },
    { title: 'Height', value: '5.5 m' },
    { title: 'Cabin size', value: '1.2 m × 1.2 m' },
  ],
  number: '001',
};

export const DogKennels: ProjectType = {
  title: 'Galvanised Steel Dog Kennel Panels',
  description: 'Bespoke galvanised steel mesh kennel panels with doors, together with U-channels, bases, mesh and run panels, manufactured to size for a dog kennel installation.',
  seoTitle: 'Galvanised Steel Dog Kennel Panels | Bowson Engineering',
  seoDesc: 'Galvanised steel mesh kennel panels, doors, U-channels, bases, mesh and run panels for dog kennels, manufactured by Bowson Engineering in Stoke-on-Trent.',
  image: Tower,
  imageAlt: 'Galvanised steel mesh kennel fronts with doors and latches beside a drainage channel',
  imageFig: 'Fig. 02 // Agriculture & Estate',
  tag: 'Agriculture & Estate',
  selected: false,
  locationData: {
    location: 'England',
    client: 'Dog Kennel Builder',
  },
  barInfo: {
    sector: 'Agriculture & Estate',
    material: 'Galvanised steel and welded mesh',
    finish: 'Galvanised',
    category: 'Dog Kennels',
  },
  challenge: 'The customer required a range of galvanised steel components for a dog kennel installation, including mesh fronts, access doors and run panels. The components needed to be manufactured to suit the building layout and provide practical access to the individual kennel areas.',
  solution: 'Bowson manufactured bespoke galvanised steel mesh panels with integrated doors, alongside U-channels, base sections and additional run panels. Each component was fabricated to the agreed dimensions and requirements, providing the customer with the steelwork needed for the kennel installation.',
  features: ['Galvanised steel mesh kennel fronts', 'Integrated access doors with latches', 'Additional mesh panels for kennel runs', 'U-channels and base sections', 'Manufactured to the agreed dimensions', 'Galvanised finish for outdoor corrosion resistance'],
  outcome: 'A coordinated range of galvanised kennel panels and supporting components, manufactured to size and supplied for assembly into the customer’s dog kennel installation.',
  specification: [
    { title: 'Material', value: 'Galvanised steel and welded mesh' },
    { title: 'Components', value: 'Kennel fronts, doors, U-channels, bases and run panels' },
    { title: 'Mesh size', value: '50x50x4 Mesh with 40x40x2.5 Box Section' },
    { title: 'Quantity', value: '36x Doors, 40x Mesh Panels, 390x U Channels' },
  ],
  number: '002',
};
