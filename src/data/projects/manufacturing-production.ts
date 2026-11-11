import type { ProjectType } from '../projects';
import Workbenches from '@assets/images/Projects/workbenches.webp';
import RollStand from '@assets/images/Sectors/rollers.webp';
import Tower from '@assets/images/Sectors/tower.webp';
import Ikons from '@assets/images/Projects/ikon_bases.webp';
import Stillage from '@assets/images/Sectors/stillage.webp';

export const PalletBenchesProject: ProjectType = {
  title: 'Pallet Assembly Workbenches',
  description: 'A batch of twelve bespoke steel workbenches designed for pallet assembly, featuring dedicated positioning areas, integrated tool storage and overhead tool rails to support an organised and efficient production process.',
  seoTitle: 'Pallet Assembly Workbenches | Bowson Engineering',
  seoDesc: 'A batch of twelve steel pallet building benches with integrated tool storage, designed and manufactured for a pallet maker by Bowson Engineering, Stoke-on-Trent.',
  image: Workbenches,
  imageAlt: 'Rows of blue powder coated steel pallet building benches with back panels, shelves and overhead frames',
  imageFig: 'Fig. 05 // Manufacturing',
  tag: 'Manufacturing',
  selected: false,
  locationData: {
    location: 'Location withheld',
    client: 'Pallet Manufacturer',
  },
  barInfo: {
    sector: 'Manufacturing',
    material: 'Steel',
    finish: 'Blue powder coating',
    category: 'Pallet Assembly Workbenches',
  },
  challenge: 'The customer assembled pallets by hand and needed purpose-built workstations to make the process more organised and efficient. Pallet components needed to be held in position during assembly, while tools and equipment needed to remain easily accessible to the operator.',
  solution: 'Bowson designed and manufactured twelve bespoke steel pallet assembly workbenches. Each workstation features a dedicated worktop and back panel to help position pallet components, a lower storage shelf, side shelves with tool hooks and an overhead frame for hanging tools. The benches were fabricated and powder coated blue in our own workshop.',
  features: ['Batch of twelve bespoke steel workbenches', 'Worktop and back panel designed around pallet assembly', 'Side shelves with integrated tool hooks', 'Lower shelf for additional storage', 'Overhead frame for hanging tools and equipment', 'Blue powder-coated finish', 'Designed and manufactured in-house'],
  outcome: 'Twelve purpose-built pallet assembly workstations, bringing component positioning and tool storage together in one organised working area. The design helps keep equipment within reach and supports a more efficient assembly process.',
  specification: [
    { title: 'Quantity', value: '12 benches' },
    { title: 'Material', value: 'Steel' },
    { title: 'Finish', value: 'Powder coated blue' },
    { title: 'Bench size', value: '1.3L × 1.5W × 1.1H, in m' },
  ],
  number: '005',
  caseStudies: [
    { image: Tower, imageAlt: 'Galvanised steel deer tower with an enclosed cabin and ladder in woodland', title: 'Deer tower', description: 'A galvanised steel lookout tower with an enclosed cabin and ladder, built to replace a traditional wooden structure.', href: '/projects/deer-towers' },
    {
      image: Ikons,
      imageAlt: 'Batch of blue powder coated steel kiln shell frames hanging in the powder coating area',
      title: 'Batch Production of Kiln Shells',
      description: 'Repeat manufacture of steel shells for top-loading kilns, produced in batches of 36 approximately every two months. Production processes have been refined over successive orders to improve efficiency and reduce manufacturing costs.',
      href: '/projects/batch-kilns',
    },
    {
      title: 'Bespoke Steel Stillages',
      description: 'A range of bespoke steel stillages manufactured for different handling and storage applications, including ware board stillages for pottery and fabric-divided stillages for separating and protecting components.',
      image: Stillage,
      imageAlt: 'White steel stillage with grey fabric dividers',
      href: '/projects/stillages',
    },
  ],
};

export const RollStandProject: ProjectType = {
  title: 'Roll Stand for a Cutting Table',
  description: 'A bespoke powder coated steel roll stand designed to hold full rolls of polymer material beside a cutting table, keeping the rolls clear of the working area and allowing the full table length to be used.',
  seoTitle: 'Steel Material Roll Stand for Cutting Tables | Bowson Engineering',
  seoDesc: 'A bespoke steel roll stand for an aerospace manufacturer, independently load tested and designed to hold polymer material rolls clear of a cutting table. Manufactured by Bowson Engineering, Stoke-on-Trent.',
  image: RollStand,
  imageAlt: 'White steel roll stand holding rolls of material beside a cutting table',
  imageFig: 'Fig. 06 // Manufacturing',
  tag: 'Manufacturing',
  selected: false,
  locationData: {
    location: 'Location withheld',
    client: 'Aerospace Manufacturer',
  },
  barInfo: {
    sector: 'Manufacturing',
    material: 'Steel',
    finish: 'White powder coating',
    category: 'Material Roll Stands',
  },
  challenge: 'The customer needed a way to store and feed full rolls of polymer material weighing approximately 50 kg each beside an industrial cutting table. The stand had to keep the rolls clear of the table, avoid obstructing the working area and allow the full length of the table to remain available for cutting.',
  solution: 'Bowson designed and manufactured a bespoke steel roll stand with three roll bars, positioning the frame behind the cutting table so that the stored rolls remained clear of the working surface. The stand was fabricated and powder coated white in our workshop, then independently load tested to verify its capacity.',
  features: ['Three roll bars for storing polymer material', 'Designed to accommodate full rolls weighing approximately 50 kg each', 'Positioned behind the cutting table to keep the working surface clear', 'Independently load tested to a specified capacity of 100 kg per roll', 'Additional versions manufactured for different setups', 'Fabricated and powder coated in-house'],
  outcome: 'A purpose-built roll storage solution that keeps material accessible while leaving the full length of the cutting table available for use. The independently tested construction provides an additional level of assurance for the customer.',
  specification: [
    { title: 'Roll weight', value: 'Approx. 50 kg per full roll' },
    { title: 'Load testing', value: 'Tested and rated to 100kg per roll' },
    { title: 'Roll bars', value: '3' },
    { title: 'Material and finish', value: 'Steel, powder coated white' },
  ],
  number: '006',
  caseStudies: [
    { image: Tower, imageAlt: 'Galvanised steel deer tower with an enclosed cabin and ladder in woodland', title: 'Deer tower', description: 'A galvanised steel lookout tower with an enclosed cabin and ladder, built to replace a traditional wooden structure.', href: '/projects/deer-towers' },
    {
      image: Ikons,
      imageAlt: 'Batch of blue powder coated steel kiln shell frames hanging in the powder coating area',
      title: 'Batch Production of Kiln Shells',
      description: 'Repeat manufacture of steel shells for top-loading kilns, produced in batches of 36 approximately every two months. Production processes have been refined over successive orders to improve efficiency and reduce manufacturing costs.',
      href: '/projects/batch-kilns',
    },
    {
      title: 'Bespoke Steel Stillages',
      description: 'A range of bespoke steel stillages manufactured for different handling and storage applications, including ware board stillages for pottery and fabric-divided stillages for separating and protecting components.',
      image: Stillage,
      imageAlt: 'White steel stillage with grey fabric dividers',
      href: '/projects/stillages',
    },
  ],
};
