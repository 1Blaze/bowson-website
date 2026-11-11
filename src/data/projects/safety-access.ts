import type { ProjectType } from '../projects';
import Shelter from '@assets/images/Projects/smoking_shelter.webp';
import Guard from '@assets/images/Sectors/machineguard.webp';
import MachineCover from '@assets/images/Projects/machinecover.webp';

export const SheltersProject: ProjectType = {
  title: 'Bespoke Steel Outdoor Shelters',
  description: 'A range of bespoke steel-framed outdoor shelters, including smoking shelters, cycle shelters and general-purpose cover shelters. Manufactured as complete units with options including clear panels, roofing and integrated bike racks.',
  seoTitle: 'Steel Smoking & Cycle Shelters | Bowson Engineering',
  seoDesc: 'Bespoke steel smoking shelters, cycle shelters and outdoor cover shelters. Complete units with clear panels, roofing and bike racks, manufactured in Stoke-on-Trent.',
  image: Shelter,
  imageAlt: 'Blue powder-coated steel outdoor shelter with clear side panels and transparent roof',
  imageFig: 'Fig. 09 // Safety & Access',
  tag: 'Safety & Access',
  selected: false,
  locationData: {
    location: 'Location withheld',
    client: 'Warehouse Client',
  },
  barInfo: {
    sector: 'Safety & Access',
    material: 'Steel',
    finish: 'Blue powder coating and clear sides',
    category: 'Smoking & Cycle Shelters',
  },
  challenge: 'Businesses require outdoor shelters for a variety of purposes, from providing designated smoking areas and covered cycle storage to protecting equipment from the weather. Each application has different requirements for size, access, ventilation and layout, making a standard shelter unsuitable for every site.',
  solution:
    'Bowson designs and manufactures bespoke steel-framed shelters for smoking areas, cycle storage and general outdoor cover. Smoking shelters can be manufactured with open sides to allow ventilation, with additional panels available where a more enclosed layout is required. Cycle shelters can incorporate integrated bike racks, while clear side panels and roofing provide weather protection without completely enclosing the structure. Each shelter is manufactured as a complete assembled unit, with standard base plates and fixing bolts available for installation.',
  features: [
    'Bespoke steel-framed construction',
    'Smoking shelters with open-sided configurations for ventilation',
    'Options for additional side panels and more enclosed layouts',
    'Cycle shelters with integrated bicycle racks',
    'Clear side panels and transparent roofing',
    'Standard base plates for ground fixing',
    'Fixing bolts available',
    'Manufactured as complete assembled units',
    'Fabricated and powder coated in-house',
  ],
  outcome: 'A range of complete, made-to-order outdoor shelters designed around different site requirements, providing covered spaces for smoking areas, cycle storage and general outdoor use.',
  specification: [
    { title: 'Applications', value: 'Smoking areas, cycle storage and outdoor cover' },
    { title: 'Frame', value: 'Steel' },
    { title: 'Panels', value: 'Clear panels Polycarb' },
    { title: 'Roof', value: 'Transparent roofing PPVC' },
    { title: 'Cycle storage', value: 'Integrated bike racks available' },
    { title: 'Ground fixing', value: 'Standard base plates; fixing bolts available' },
    { title: 'Finish', value: 'Powder coated' },
    { title: 'Supply', value: 'Complete assembled units' },
    { title: 'Sizes', value: 'Manufactured to order' },
  ],
  number: '009',
};

export const MachineGuardingProject: ProjectType = {
  title: 'Bespoke Steel Machine Guarding',
  description: 'Bespoke steel machine guarding manufactured to suit production machinery, from replacement guards made to match existing equipment to complete new guarding systems with integrated access doors.',
  seoTitle: 'Bespoke Machine Guarding & Safety Guards | Bowson Engineering',
  seoDesc: 'Bespoke industrial machine guarding, steel mesh safety enclosures and access doors. Replacement guards and complete new systems manufactured by Bowson Engineering in Stoke-on-Trent.',
  image: Guard,
  imageAlt: 'Steel mesh machine guarding with an integrated access gate and yellow safety barrier around production equipment',
  imageFig: 'Fig. 10 // Safety & Access',
  tag: 'Safety & Access',
  selected: false,
  locationData: {
    location: 'Location withheld',
    client: 'Manufacturer',
  },
  barInfo: {
    sector: 'Safety & Access',
    material: 'Steel frame with mesh infill panels',
    finish: 'Powder coated',
    category: 'Machine Guarding',
  },
  challenge: 'Production machinery often requires guarding designed around the equipment, surrounding workspace and operator access requirements. Customers may need replacement guards to match existing machinery, modifications to an existing guarding arrangement or entirely new guarding systems for production equipment.',
  solution:
    'Bowson manufactures bespoke machine guarding to suit individual machinery and production environments. We can work from customer drawings, site measurements or existing guards supplied as reference. Projects range from individual replacement panels and access doors to complete new guarding systems, using steel frames with mesh or other suitable infill materials. Access doors are fitted with hinges and catches or locks as required. All steelwork is fabricated and powder coated in our workshop, with installation available as an additional service through an external installation contractor.',
  features: [
    'Bespoke steel machine guarding and safety enclosures',
    'Replacement guards made to match existing machinery',
    'Complete new machine guarding systems',
    'Manufactured from customer drawings, site measurements or existing guard references',
    'Steel frames with mesh or alternative infill materials',
    'Access doors with hinges and catches or locks',
    'Powder-coated finishes to suit requirements',
    'Installation available through an external installation contractor',
    'Fabricated and powder coated in-house',
  ],
  outcome: 'A range of bespoke machine guarding solutions manufactured to suit different production environments, from individual replacement panels and access doors to complete guarding systems, with installation available where required.',
  specification: [
    { title: 'Applications', value: 'Industrial machinery and production equipment' },
    { title: 'Types', value: 'Replacement guards, modifications and complete systems' },
    { title: 'Design input', value: 'Customer drawings, site measurements or existing guards' },
    { title: 'Frame', value: 'Steel' },
    { title: 'Infill', value: 'Mesh or alternative materials to suit requirements' },
    { title: 'Access', value: 'Hinged doors with catches or locks' },
    { title: 'Finish', value: 'Powder coated' },
    { title: 'Installation', value: 'Available as an additional service' },
  ],
  number: '010',
};

export const MachineCoverProject: ProjectType = {
  title: 'Bespoke Dust-Resistant Paint Machine Enclosure',
  description: 'A bespoke steel enclosure designed in SolidWorks to protect a paint machine from dust and dirt contamination, featuring removable panels, clear access doors at both ends and a reinforced roof for filter maintenance.',
  seoTitle: 'Bespoke Machine Enclosures & Covers | Bowson Engineering',
  seoDesc: 'Custom steel machine enclosures designed to minimise dust ingress, with removable panels, rubber and brush seals, clear access doors and reinforced roofs. Manufactured in Stoke-on-Trent.',
  image: MachineCover,
  imageAlt: 'Black steel machine cover with a clear hinged door open beside a production machine',
  imageFig: 'Fig. 11 // Manufacturing',
  tag: 'Safety & Access',
  selected: true,
  locationData: {
    location: 'Stoke-On-Trent',
    client: 'Manufacturer',
  },
  barInfo: {
    sector: 'Manufacturing',
    material: 'Steel',
    finish: 'Black powder coating',
    category: 'Bespoke Machine Enclosures',
  },
  challenge:
    "The customer's paint machine had two large openings that allowed dust and dirt to reach the product during the painting process, potentially affecting the finish. A new enclosure was required to minimise contamination while still allowing access for maintenance, filter changes and machine operation. The design also needed to avoid permanent sealing, with every panel remaining removable and the roof capable of supporting a person during filter changes.",
  solution:
    "Following several site visits and design meetings with the customer, Bowson developed the enclosure in SolidWorks, refining the design through several revisions to meet the machine's operating and maintenance requirements. The finished design incorporated removable panels, clear access doors at both ends for operator visibility and a reinforced roof designed to support a person during filter changes. Rubber seals, foam strips and brush seals around the doors were used to minimise gaps and reduce dust and dirt ingress while maintaining removable access. The enclosure was fabricated and powder coated black in our workshop.",
  features: [
    'Designed in SolidWorks following multiple site visits',
    'Bespoke steel enclosure designed around an existing paint machine',
    'Removable panels throughout for maintenance and access',
    'Clear access doors at both ends for operator visibility',
    'Rubber seals, foam strips and brush seals to minimise dust ingress',
    'Reinforced roof designed to support a person during filter changes',
    'Design developed and refined through several customer meetings',
    'Fabricated and powder coated in-house',
  ],
  outcome: "A purpose-built machine enclosure developed around the customer's specific production and maintenance requirements. Combining removable panels, multiple sealing methods, operator visibility and a reinforced roof, the finished design addresses the need to minimise contamination without restricting machine access.",
  specification: [
    { title: 'Application', value: 'Paint machine dust protection' },
    { title: 'Design', value: 'SolidWorks 3D modelling following site visits' },
    { title: 'Construction', value: 'Steel enclosure with removable panels' },
    { title: 'Access', value: 'Clear doors at both ends' },
    { title: 'Sealing', value: 'Rubber seals, foam strips and brush seals' },
    { title: 'Roof', value: 'Reinforced for personnel access during filter changes; not load tested' },
    { title: 'Finish', value: 'Black powder coating' },
  ],
  number: '011',
};
