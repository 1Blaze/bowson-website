import Punch from '@assets/images/Services/punch.webp';
import Oven from '@assets/images/services/oven.webp';
import Powdercoating from '@assets/images/services/spray_booth.webp';
import Welding from '@assets/images/services/weld.webp';
import Forming from '@assets/images/services/forming.webp';
import type { ServiceType } from '../services';

export const Powder_Coating: ServiceType = {
  seoTitle: 'Industrial Powder Coating Services | Bowson Engineering',
  seoDesc: 'In-house powder coating for sheet metal parts and fabricated products, in a wide range of colours. Family-run Bowson Engineering, Stoke-on-Trent. Quotes within 24 hours.',
  title: 'Powder Coating',
  description: 'In-house powder coating for sheet metal parts and fabricated products, giving a durable finish in a wide range of colours.',
  image: Powdercoating,
  imageAlt: 'Purple powder-coated steel discs and brackets hanging inside a powder coating booth',
  whatWeOffer: {
    para1: 'Bowson Engineering provides in-house powder coating for sheet metal components and fabricated products, a service we have run since 2008. We coat everything from small brackets to large fabrications, whether we made the parts or you did.',
    para2: 'Our oven takes parts up to 3.3 m wide, 2.4 m high and 4 m long, and we move parts on trolleys with a forklift, so a wide range of weights can be coated. Finishes include gloss, semi-gloss, matt and ripple, in a wide range of colours.',
    para3: 'Because coating happens in the same workshop as our punching, bending, rolling and welding, a part can go from flat blank to finished, coated product without leaving us.',
    capabilities: ['In-house powder coating since 2008', 'Parts up to 3.3 m wide, 2.4 m high and 4 m long', 'Forklift handling for heavy parts', 'Gloss, semi-gloss, matt and ripple finishes', 'Wide range of colours', 'Parts made by us or by you', 'One-offs through to batches'],
  },

  theKit: [
    {
      image: Powdercoating,
      title: 'Spray Booth',
      description: 'Components are carefully prepared and powder coated in our dedicated in-house spray booth, using GEMA application equipment to achieve a consistent, high-quality finish.',
      imageAlt: 'GEMA powder coating equipment inside Bowson Engineering’s spray booth',
    },
    {
      image: Oven,
      title: 'Curing Oven',
      description: 'Our oven takes parts up to 3.3 m wide, 2.4 m high and 4 m long. We load parts on trolleys with a forklift or hooks by hand, so heavy and bulky items can be coated as easily as small ones.',
      imageAlt: 'Powder coated steel frames hanging inside the curing oven',
    },
  ],
  whereItsUsed: ['Fabricated frames and benches', 'Cabinets and enclosures', 'Kiln frames and hoods', 'Stillages and gates', 'Machine guards'],
  questionsAsked: {
    title: 'Powder coating: questions we get asked',
    description: 'What it is, what we can coat, and how quickly we can deliver. Anything missing? Call us or send a drawing.',
    questions: [
      { question: 'What is powder coating?', answer: 'Powder coating applies a dry powder to a metal part using an electric charge, and then cures it in an oven so it melts into a hard, even finish. It is typically more durable than conventional paint.' },
      { question: 'What colours and finishes do you offer?', answer: 'A wide range of colours in gloss, semi-gloss, matt and ripple finishes.' },
      { question: 'Can you powder coat parts you have not made?', answer: 'Yes. Send us the part sizes and quantities and we will quote.' },
      { question: 'What is the largest part you can coat?', answer: 'Our oven takes parts up to 3.3 m wide, 2.4 m high and 4 m long, and we lift parts with a forklift on trolleys, so weight is rarely a problem. If yours is close to those sizes, send the dimensions and we will confirm.' },
      { question: 'Is there a minimum order, and how quickly can I get parts?', answer: 'No minimum order charge. We quote within 24 hours, and lead times depend on the job. Tell us your deadline and we will say plainly whether we can meet it.' },
    ],
  },
  mightAlsoNeed: [
    { title: 'Welding & Fabrication', description: 'Welded frames and assemblies, ready for coating.', image: Welding, imageAlt: 'MIG welding a steel fabrication with a bright welding arc and sparks', href: 'welding-fabrication' },
    { title: 'CNC Punching', description: 'Perforated and louvred panels, ready to coat.', image: Punch, imageAlt: 'Turret punch tooling punching a pattern of rectangular holes in a steel sheet', href: 'cnc-punching' },
    { title: 'Metal Bending & Forming', description: 'Formed parts, ready for finishing.', image: Forming, imageAlt: 'Formed sheet metal enclosures with punched slots in sides alongside a press brake machine', href: 'bending-metal-forming' },
  ],
};
