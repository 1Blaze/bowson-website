import type { SectorType } from '../sectors';
import Rollers from '@assets/images/Sectors/rollers.webp';
import Stillage from '@assets/images/Sectors/stillage.webp';
import Seatbed from '@assets/images/Sectors/seatbed.webp';
import Guard from '@assets/images/Sectors/machineguard.webp';

export const VehicleCampervan: SectorType = {
  seoTitle: 'Campervan Conversion Components | Bowson Engineering',
  seoDesc: 'Bespoke steel seatbed frames, roof bars and mounting plates for vehicle and campervan conversions. Designed and manufactured in Stoke-on-Trent.',
  title: 'Vehicle & Campervan Conversions',
  description: 'Bespoke steel seatbed frames, roof bars and mounting plates for vehicle and campervan conversions. Manufactured to your design or developed around your requirements.',
  image: Seatbed,
  imageAlt: 'Black steel campervan seatbed frame with seatbelts and red release buttons',
  whatWeOffer: {
    para1: 'Campervan converters need conversion components that fit the vehicle, locate consistently and stand up to daily use. We manufacture bespoke steel components for vehicle and campervan conversions, including seatbed frames, roof bars and mounting plates, working from customer drawings, samples or design requirements.',
    para2: 'With SolidWorks design, CNC punching, press brake bending, welding and powder coating available in-house, we can manage multiple stages of manufacture under one roof, from prototypes to repeat production batches. Each component is made to your design or developed around your requirements, so send us your drawings or vehicle details to get started.',
    capabilities: ['Seatbed Frames', 'Roof Bars', 'Mounting Plates', 'SolidWorks Design', 'CNC Punching', 'Press Brake Bending', 'MIG/TIG Welding', 'Powder Coating'],
  },
  designFor: [
    {
      title: 'Made to fit the vehicle',
      description: 'Components are designed around the vehicle, so frames, brackets and plates locate the same way on every conversion.',
    },
    {
      title: 'Consistent batches',
      description: 'Established production processes help maintain consistency across repeat batches, so components are manufactured to the agreed drawings and specifications.',
    },
    {
      title: 'A durable finish',
      description: 'In-house powder coating gives a hard-wearing finish in a wide range of colours, suited to parts that are handled, fitted and used daily.',
    },
  ],
  questionsAsked: {
    title: 'Vehicle & Campervan Conversions: questions from this sector',
    description: 'The questions we hear most from converters. Need something specific? Send a drawing, a sketch or your vehicle details and we will come back with options.',
    questions: [
      {
        question: 'Do you sell ready-made seatbeds?',
        answer: "No. We manufacture bespoke components to your design or requirements. We respect our customers' designs, so we do not replicate another customer's product, but we can develop a design of your own around your vehicle and specification.",
      },
      {
        question: 'Can you design components from a sketch or a vehicle?',
        answer: 'Yes. We can develop designs from sketches, measurements or the vehicle itself, and produce SolidWorks drawings for your sign-off before we make anything.',
      },
      {
        question: 'Are your seatbeds crash tested?',
        answer: 'We manufacture components to the agreed drawings and specification, but we do not independently crash-test or certify seatbed designs. Any testing, approval or vehicle compliance requirements need to be established by the converter or responsible design authority before manufacture. If your project has specific requirements, please discuss these with us when enquiring.',
      },
      {
        question: 'Can you manufacture repeat batches?',
        answer: 'Yes. We make prototypes and repeat production batches, and parts are programmed once, so each batch matches the last.',
      },
      {
        question: 'Which vehicles can you make components for?',
        answer: 'We work from your drawings and vehicle details, so we can make components for the vehicle you convert. Send us the details and we will confirm what we can make.',
      },
    ],
  },
  builtFor: [
    {
      title: 'Re-engineered Campervan Seatbed',
      description: 'A steel campervan seatbed redesigned in SolidWorks through several revisions with the customer. The finished design passed the customer’s official crash testing and was manufactured by Bowson Engineering in regular production batches.',
      image: Seatbed,
      imageAlt: 'Black steel campervan seatbed frame with fitted seatbelts and red release buttons',
      href: '/projects/seatbeds',
    },
  ],
  customersGet: ['Components made to fit your vehicle and design', 'Repeat batches that match the first', 'Powder-coated parts ready for fitting', 'Design and fabrication managed under one roof'],
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
      title: 'Safety & Access',
      description: 'Machine guarding, safety barriers, access platforms, mobile steps and smoking shelters.',
      href: '/sectors/safety-access',
      image: Guard,
      imageAlt: 'Steel mesh machine guarding with a gate and yellow safety barrier around production equipment',
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
