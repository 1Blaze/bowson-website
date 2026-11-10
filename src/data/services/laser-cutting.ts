import Punch from '@assets/images/Services/punch.webp';
import Powdercoating from '@assets/images/services/oven.webp';
import Forming from '@assets/images/services/forming.webp';
import Laser from '@assets/images/services/laser.webp';
import type { ServiceType } from '../services';

export const Laser_Cutting: ServiceType = {
  seoTitle: 'Laser Cutting Services | Bowson Engineering',
  seoDesc: 'Laser cut mild steel, stainless and aluminium parts, sourced through our cutting partner and managed with your order. Quotes within 24 hours. Family-run since 1990.',
  title: 'Laser Cutting',
  description: 'Laser cut mild steel, stainless steel and aluminium parts, sourced through our cutting partner and managed as part of your order.',
  image: Laser,
  imageAlt: 'Flat laser cut steel sheet with accurately cut profiles and openings',
  whatWeOffer: {
    para1: 'Bowson Engineering supplies laser-cut steel, stainless steel, aluminium and copper parts for bespoke sheet metal components and fabricated products. Cutting is carried out by our cutting partner and managed by us as part of your order, so you deal with one supplier from enquiry to delivery.',
    para2: 'Laser cutting suits intricate outlines, fine detail and thicker plate. Our partner cuts material up to around 30mm thick, on sheets up to 4000 × 2000 mm, and handles a wide range of metals including mild steel, stainless steel, aluminium, copper and more.',
    para3: 'Laser-cut blanks flow straight into our in-house bending, rolling, welding and powder coating, so cut parts can be taken through every stage of manufacture and supplied as finished products from a single source.',
    capabilities: ['Mild steel up to around 30mm', 'Stainless steel, aluminium and copper 30mm', 'Sheets up to 4000 × 2000 mm', 'Intricate outlines and fine detail', 'Managed as part of your order', 'Followed by in-house bending, welding and powder coating', 'One-offs through to batches'],
  },
  theKit: [
    {
      image: Laser,
      title: 'CNC Laser Cutting',
      description: 'Laser cutting is carried out by our cutting partner, to the files and tolerances we agree with you. We handle the order, the checks and the delivery.',
      imageAlt: 'Flat laser cut steel sheet with accurately cut profiles and openings',
    },
  ],
  whereItsUsed: ['Brackets and mounting plates', 'Enclosure and cabinet blanks', 'Machine and guard components', 'Intricate profiles', 'Thicker plate parts'],
  questionsAsked: {
    title: 'Laser cutting: questions we get asked',
    description: 'What it is, who does the cutting, and how quickly we can deliver. Anything missing? Call us or send a drawing.',
    questions: [
      { question: 'What is laser cutting?', answer: 'Laser cutting uses a focused beam to cut metal sheet and plate along a programmed path. It gives clean edges and suits intricate shapes and thicker material.' },
      { question: 'Do you laser cut in-house?', answer: 'No. Laser cutting is carried out by our cutting partner and managed as part of your order. Punching, bending, rolling, welding and powder coating are done in our own workshop.' },
      { question: 'What materials and sizes can you supply?', answer: 'Mild steel up to around 30mm, plus stainless steel, aluminium, copper and more, on sheets up to 4000 × 2000 mm. If your part falls outside that, send the drawing and we will advise.' },
      { question: 'When is laser cutting better than punching?', answer: 'Laser suits intricate outlines, fine detail and thicker plate. Punching often wins for parts with many holes, louvres or formed features. Send the drawing and we will recommend the more cost-effective route.' },
      { question: 'Is there a minimum order, and how quickly can I get parts?', answer: 'A minimum order charge of £60 + VAT for just laser cutting. We quote within 24 hours, and lead times depend on the job. Tell us your deadline and we will say plainly whether we can meet it.' },
    ],
  },
  mightAlsoNeed: [
    { title: 'CNC Punching', description: 'For parts with many holes, louvres or upforms, often more economical in batches.', image: Punch, imageAlt: 'Turret punch tooling punching a pattern of rectangular holes in a steel sheet', href: 'cnc-punching' },
    { title: 'Metal Bending & Forming', description: 'Press brake bending and rolling for your cut blanks.', image: Forming, imageAlt: 'Formed sheet metal enclosures with punched slots in sides alongside a press brake machine', href: 'bending-metal-forming' },
    { title: 'Powder Coating', description: 'A durable in-house finish for your finished parts.', image: Powdercoating, imageAlt: 'Purple powder-coated steel discs and brackets hanging inside a powder coating booth', href: 'powder-coating' },
  ],
};
