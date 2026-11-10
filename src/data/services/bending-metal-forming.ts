import Punch from '@assets/images/Services/punch.webp';
import Powdercoating from '@assets/images/services/oven.webp';
import Welding from '@assets/images/services/weld.webp';
import Forming from '@assets/images/services/forming.webp';
import type { ServiceType } from '../services';

export const Bending_Forming: ServiceType = {
  seoTitle: 'Sheet Metal Bending & Forming | Bowson Engineering',
  seoDesc: 'CNC press brake bending and in-house rolling of sheet metal parts, from one-offs to repeat batches. Family-run Bowson Engineering, Stoke-on-Trent. Quotes within 24 hours.',
  title: 'Metal Bending & Forming',
  description: 'CNC press brake bending and rolling of mild steel, stainless steel and aluminium, from simple folds to complex profiles.',
  image: Forming,
  imageAlt: 'Formed sheet metal enclosures with punched slots in sides alongside a press brake machine',
  whatWeOffer: {
    para1: 'Bowson Engineering provides precision CNC press brake bending and in-house metal rolling for bespoke sheet metal components and fabricated products. Using our CNC press brake, we form flat sheet into accurate bends, profiles and complex shapes, manufacturing everything from brackets, covers and enclosures to larger industrial assemblies.',
    para2: 'We work with mild steel, stainless steel and aluminium, accommodating a range of material thicknesses, sizes and design requirements. Whether producing individual components, prototypes or repeat production batches, our experienced operators focus on accuracy, consistency and efficient manufacturing.',
    para3: 'Our forming capabilities work alongside our in-house welding, fabrication and powder coating facilities, allowing us to take components through multiple stages of manufacture and supply finished products from a single source.',
    capabilities: ['CNC press brake, 150 tonne', '3000 mm bed length', 'Bending up to around 6mm thick', 'In-house rolling up to 1100 mm long and 3mm thick', 'Steel, stainless steel and aluminium', 'One-offs through to batches'],
  },
  theKit: [
    { image: Forming, title: 'CNC press brake', description: 'Our press brake gives accurate, repeatable bends on enclosures, covers and brackets, from prototypes to batches.', imageAlt: 'Formed sheet metal enclosures with punched slots in sides alongside a press brake machine' },
    {
      image: Forming, // TODO: photo of the rolls
      title: 'In-house rolling',
      description: '[Describe your rolling machine and what it makes, for example cylinders and curved sections.]',
      imageAlt: '[Describe the rolling photo]',
    },
  ],
  whereItsUsed: ['Cabinets and enclosures', 'Machine guards and covers', 'Kiln hoods and canopies', 'Brackets and frames', 'Cylinders and curved sections'],
  questionsAsked: {
    title: 'Bending and forming: questions we get asked',
    description: 'What press brake bending is, what we can bend and roll, and how quickly we can deliver. Anything missing? Call us or send a drawing.',
    questions: [
      { question: 'What is press brake bending?', answer: 'Press brake bending folds flat sheet metal along a straight line, using a punch and a die. By making a series of bends, a flat blank becomes a box, bracket, cover or channel.' },
      { question: 'What thicknesses and lengths can you bend?', answer: 'Our 150 tonne press brake has a 3 metre bed and bends up to around 6mm thick, depending on the material and the size of the part. Send the drawing and we will confirm.' },
      { question: 'Do you roll metal in-house?', answer: 'Yes. We roll sheet into cylinders and curved sections in our own workshop, up to 1100 mm long and 3mm thick.' },
      { question: 'Can you bend parts that you did not cut?', answer: '[Yes or no.] Send us the flat blank or the drawing, and we will quote for bending, with welding and powder coating if you need them.' },
      { question: 'Is there a minimum order, and how quickly can I get parts?', answer: '[No minimum, if true.] We quote within 24 hours, and lead times depend on the job, with 2 to 4 weeks typical. Tell us your deadline and we will say plainly whether we can meet it.' },
    ],
  },
  mightAlsoNeed: [
    { title: 'CNC Punching', description: 'Perforated panels, louvres and upforms before the blank goes to the press brake.', image: Punch, imageAlt: 'Turret punch tooling punching a pattern of rectangular holes in a steel sheet', href: 'cnc-punching' },
    { title: 'Welding & Fabrication', description: 'Fabricated assemblies and welded frames from your formed parts.', image: Welding, imageAlt: 'MIG welding a steel fabrication with a bright welding arc and sparks', href: 'welding-fabrication' },
    { title: 'Powder Coating', description: 'An in-house durable finish for your formed parts.', image: Powdercoating, imageAlt: 'Purple powder-coated steel discs and brackets hanging inside a powder coating booth', href: 'powder-coating' },
  ],
};
