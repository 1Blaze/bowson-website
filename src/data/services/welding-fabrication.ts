import Modelling from '@assets/images/Services/3dmodelling.webp';
import Powdercoating from '@assets/images/services/oven.webp';
import Welding from '@assets/images/services/weld.webp';
import WeldingTig from '@assets/images/services/weld_tig.webp';
import Forming from '@assets/images/services/forming.webp';
import type { ServiceType } from '../services';

export const Welding_Fabrication: ServiceType = {
  seoTitle: 'Welding & Fabrication Services | Bowson Engineering',
  seoDesc: 'MIG and TIG welding, fabrication and assembly of steel and stainless parts, from single items to complete bespoke products. Family-run Bowson Engineering since 1990.',
  title: 'Welding & Fabrication',
  description: 'MIG and TIG welding, fabrication and assembly of steel and stainless parts, from single items to complete bespoke products.',
  image: Welding,
  imageAlt: 'MIG welding a steel fabrication with a bright welding arc and sparks',
  whatWeOffer: {
    para1: 'Bowson Engineering provides MIG and TIG welding, fabrication and assembly for bespoke steel and stainless steel products. From individual components to complete products such as work benches, stillages, pallet gates, kiln frames and deer towers, we build to your drawing, or design the part with you first.',
    para2: 'We MIG weld steel, and TIG weld stainless steel and aluminium, cleaning welds where needed ready for powder coating or delivery. Whether producing a single item or a repeat batch, our welders focus on sound joints, consistent finish and efficient manufacturing.',
    para3: 'Our welding and fabrication work alongside our in-house punching, bending, rolling and powder coating, allowing us to take a product through every stage of manufacture and supply it finished from a single source.',
    capabilities: ['MIG welding of steel', 'TIG welding of stainless steel and aluminium', 'Fabricated frames, enclosures and assemblies', 'Weld cleaning', 'Ready for in-house powder coating', 'Built to your drawing or our design', 'One-offs through to batches'],
  },
  theKit: [
    {
      image: Welding,
      title: 'MIG welding',
      description: 'We MIG weld steel for fabricated frames, benches, stillages, gates and larger assemblies. MIG is quick and consistent, which suits one-offs and repeat batches.',
      imageAlt: 'MIG welding a steel fabrication with a bright welding arc and sparks',
    },
    {
      image: WeldingTig,
      title: 'TIG welding',
      description: 'We TIG weld stainless steel and aluminium, where a neat, controlled weld matters. It suits thinner material and visible joints, and welds are cleaned ready for powder coating or delivery.',
      imageAlt: 'Gloved hands TIG welding a metal joint with a torch and filler rod',
    },
  ],
  whereItsUsed: ['Frames and stands', 'Work benches and tables', 'Stillages and pallet gates', 'Kiln frames', 'Deer towers and outdoor structures'],
  questionsAsked: {
    title: 'Welding and fabrication: questions we get asked',
    description: 'What we weld, what we can build, and how quickly we can deliver. Anything missing? Call us or send a drawing.',
    questions: [
      {
        question: 'What is the difference between MIG and TIG welding?',
        answer:
          'MIG and TIG are two of the most common welding processes in fabrication, and each suits different jobs. MIG (metal inert gas) feeds a continuous wire through the torch, which acts as both the electrode and the filler. Its advantages are speed, ease of running long welds, and good economy on thicker steel and repeat batches. Its drawbacks are more spatter to clean up, less control on thin material and a less refined weld appearance. TIG (tungsten inert gas) uses a tungsten electrode that is not consumed, with filler rod added by hand. Its advantages are precise control, very neat, low-spatter welds, and suitability for thin material, visible joints, stainless steel and aluminium. Its drawbacks are that it is slower, needs more operator skill and costs more per metre of weld, and the metal must be clean. In our workshop we typically MIG weld steel fabrications and TIG weld stainless steel and aluminium. Tell us the material, thickness and finish you need, and we will recommend the right process.',
      },
      {
        question: 'What are the benefits of welding?',
        answer:
          'Welding joins metal parts permanently by fusing them together, and it has several advantages over bolts, rivets and other mechanical fixings. A well-made weld can be as strong as the metal around it, so frames, benches, stillages and gates stay rigid under load. It creates a continuous joint with no fixings to loosen, which suits equipment that is moved, vibrated or used outdoors. Welded joints can be sealed, which matters for enclosures and for keeping out dirt and moisture, and they can be ground smooth for a clean finish ready for powder coating. Welding also gives design freedom, letting us build custom shapes and assemblies from sheet and section, with no extra brackets or hardware to add weight and cost. The trade-offs are that welding applies heat, which can distort thin material if it is not controlled, and a welded assembly cannot be taken apart like a bolted one. For parts that need to be dismantled, we can combine welded sections with bolted joints. Tell us how your product will be used, and we will recommend the best way to join it.',
      },
      { question: 'What materials can you weld?', answer: 'We use a combination of MIG and TIG allowing us to weld Mild Steel, Stainless Steel and Aluminium' },
      { question: 'What can you fabricate?', answer: 'Almost anything built from sheet and section steel: frames, enclosures, benches, stillages, gates, hoods and outdoor structures. Send a drawing, sketch or idea and we will tell you whether we can make it.' },
      { question: 'Can you weld to my drawing, or design the fabrication for you?', answer: 'Both. We can build to your drawing, or produce SolidWorks drawings ourselves and review the design for the most cost-effective way to make it.' },
      { question: 'Is there a minimum order, and how quickly can I get parts?', answer: 'No minimum order. We quote within 24 hours, and lead times depend on the job, with 2 to 4 weeks typical. Tell us your deadline and we will say plainly whether we can meet it.' },
    ],
  },
  mightAlsoNeed: [
    { title: 'Metal Bending & Forming', description: 'Press brake bending and rolling for your fabricated parts.', image: Forming, imageAlt: 'Formed sheet metal enclosures with punched slots in sides alongside a press brake machine', href: 'bending-metal-forming' },
    { title: 'Powder Coating', description: 'An in-house durable finish for your welded assemblies.', image: Powdercoating, imageAlt: 'Purple powder-coated steel discs and brackets hanging inside a powder coating booth', href: 'powder-coating' },
    { title: '3D CAD Design', description: 'SolidWorks models and drawings to plan your fabrication.', image: Modelling, imageAlt: 'SolidWorks 3D CAD model of an industrial steel oven frame with a pull-out tray', href: '3d-cad-design' },
  ],
};
