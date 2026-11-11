import type { ProjectType } from '../projects';
import Seatbed from '@assets/images/Sectors/seatbed.webp';

export const SeatbedProject: ProjectType = {
  title: 'Re-engineered Campervan Seatbed',
  description: 'A steel campervan seatbed redesigned in SolidWorks through several revisions with the customer. The finished design passed the customer’s official crash testing and was manufactured by Bowson Engineering in regular production batches.',
  seoTitle: 'Campervan Seatbed Frame Manufacturing | Bowson Engineering',
  seoDesc: 'Re-engineered steel campervan seatbed frames, designed in SolidWorks, successfully crash tested by the customer and manufactured in production batches. Manufactured by Bowson in Stoke-On-Trent',
  image: Seatbed,
  imageAlt: 'Black steel campervan seatbed frame with fitted seatbelts and red release buttons',
  imageFig: 'Fig. 12 // Vehicle & Campervan Conversions',
  tag: 'Vehicle & Campervan Conversions',
  selected: false,
  locationData: {
    location: 'Location withheld',
    client: 'Campervan Converter',
  },
  barInfo: {
    sector: 'Vehicle & Campervan Conversions',
    material: 'Steel',
    finish: 'Powder coated black',
    category: 'Seatbeds',
  },
  challenge: 'The customer had an existing campervan seatbed design that needed to be redeveloped. The aim was to change the way the bed operated while retaining a suitable design for use within a vehicle. The revised design also needed to pass official crash testing arranged by the customer.',
  solution:
    'We worked with the customer through several design revisions, developing the revised seatbed in SolidWorks before manufacturing a sample. The customer arranged official crash testing, which the design successfully passed. Following this, Bowson manufactured the seatbeds in regular production batches of approximately six units, fitting the seatbelts, rails and associated components as part of the manufacturing process.',
  features: ['Existing campervan seatbed design re-engineered', 'Developed through several design revisions with the customer', 'Designed using SolidWorks 3D CAD', 'Sample successfully passed official customer-arranged crash testing', 'Seatbelts, rails and associated components fitted in-house', 'Manufactured in production batches of approximately six', 'Steel fabrication and powder coating'],
  outcome: 'The redesigned seatbed successfully passed the customer’s official crash testing and progressed into regular production, with Bowson manufacturing batches of approximately six units.',
  specification: [
    { title: 'Product', value: 'Steel campervan seatbed frame' },
    { title: 'Design', value: 'Developed in SolidWorks' },
    { title: 'Testing', value: 'Official customer-arranged crash testing passed' },
    { title: 'Finish', value: 'Powder coated black' },
    { title: 'Batch size', value: 'Approximately 6 units' },
    { title: 'Fitted components', value: 'Seatbelts, rails and associated components' },
  ],
  number: '012',
};
