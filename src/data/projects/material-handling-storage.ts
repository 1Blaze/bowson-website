import type { ProjectType } from '../projects';
import PalletGate from '@assets/images/Projects/pallet_gate.webp';
import Stillages from '@assets/images/Sectors/stillage.webp';

export const PalletGateProject: ProjectType = {
  title: 'Mezzanine Pallet Gate',
  description: 'A bespoke steel mezzanine pallet gate manufactured to provide a controlled loading area for transferring pallets between floor levels, incorporating guard rails and a hazard-striped landing plate.',
  seoTitle: 'Mezzanine Pallet Gate | Bowson Engineering',
  seoDesc: 'A steel pallet gate for a mezzanine floor, with guard rails and a hazard-striped landing plate. Designed and manufactured by Bowson Engineering, Stoke-on-Trent.',
  image: PalletGate,
  imageAlt: 'Dark grey steel pallet gate with blue rails and a yellow hazard-striped landing plate',
  imageFig: 'Fig. 07 // Material Handling & Storage',
  tag: 'Material Handling & Storage',
  selected: false,
  locationData: {
    location: 'Stoke-On-Trent',
    client: 'Warehouse Customer',
  },
  barInfo: {
    sector: 'Material Handling & Storage',
    material: 'Steel',
    finish: 'Powder coated grey and dark blue',
    category: 'Pallet Gates',
  },
  challenge: 'The customer required a dedicated loading area for transferring pallets on and off a mezzanine floor. The arrangement needed to accommodate pallet handling while providing guard rails around the loading opening when access was not required.',
  solution: 'Bowson designed and manufactured a bespoke steel pallet gate incorporating a guard rail structure and a hazard-striped landing plate. The assembly was made to suit the mezzanine opening based on site measurements, then fabricated and powder coated in our workshop.',
  features: ['Bespoke steel pallet gate assembly', 'Integrated guard rails around the loading area', 'Hazard-striped landing plate', 'Manufactured to suit the mezzanine opening', 'Grey and blue powder-coated finish [confirm]', 'Fabricated and powder coated in-house'],
  outcome: 'A purpose-built mezzanine pallet gate that provides a dedicated area for pallet transfer, incorporating the necessary gate structure, guard rails and clearly marked landing plate.',
  specification: [
    { title: 'Application', value: 'Mezzanine pallet loading' },
    { title: 'Gate type', value: 'Swing Gate' },
    { title: 'Opening width', value: '2000mm Width' },
    { title: 'Material', value: 'Steel' },
    { title: 'Finish', value: 'Powdercoated grey and dark blue' },
  ],
  number: '007',
};

export const StillagesProject: ProjectType = {
  title: 'Bespoke Steel Stillages',
  description: 'A range of bespoke steel stillages manufactured for different handling and storage applications, including ware board stillages for pottery and fabric-divided stillages for separating and protecting components.',
  seoTitle: 'Bespoke Steel Stillages & Storage Racks | Bowson Engineering',
  seoDesc: 'Bespoke steel stillages for pottery handling, component storage and material movement. Available with ware board supports, fabric dividers, stacking features and castors.',
  image: Stillages,
  imageAlt: 'White steel stillage with grey fabric dividers',
  imageFig: 'Fig. 08 // Material Handling & Storage',
  tag: 'Material Handling & Storage',
  selected: false,
  locationData: {
    location: 'Location withheld',
    client: 'Warehouse Client',
  },
  barInfo: {
    sector: 'Material Handling & Storage',
    material: 'Steel',
    finish: 'Powder coated white',
    category: 'Stillages',
  },
  challenge: 'Different products require different handling and storage arrangements. Pottery needs to be transported on ware boards, while smaller components and general stock may need separating and protecting during storage and movement. Customers therefore require stillages designed around the dimensions, weight and handling requirements of the products they carry.',
  solution:
    "Bowson manufactures bespoke steel stillages to suit each application. Designs include ware board stillages for carrying pottery, fabric-divided stillages with covers for separating and protecting components, and stackable or mobile versions for different handling requirements. Each design is manufactured around the customer's product and intended use, then powder coated in our workshop.",
  features: ['Ware board stillages for pottery handling', 'Fabric dividers and covers for separating and protecting components', 'Stackable designs with locating corner posts', 'Forklift access for material handling', 'Mobile versions fitted with castors', 'Made to suit individual product dimensions and handling requirements', 'Fabricated and powder coated in-house'],
  outcome: 'A varied range of purpose-built steel stillages, providing customers with handling and storage solutions suited to their products and working environments. Manufactured to order, from individual designs to repeat batches.',
  specification: [
    { title: 'Types', value: 'Ware board, fabric-divided, stackable and mobile' },
    { title: 'Material', value: 'Steel' },
    { title: 'Additional components', value: 'Fabric dividers, covers and wooden ware boards where required' },
    { title: 'Handling', value: 'Forklift access and/or castors, depending on design' },
    { title: 'Finish', value: 'Powder coated in a number of colours' },
    { title: 'Sizes', value: 'Manufactured to order' },
  ],
  number: '008',
};
