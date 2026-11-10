import Punch from '@assets/images/Services/punch.webp';
import Modelling from '@assets/images/services/3dmodelling.webp';
import Powdercoating from '@assets/images/services/spray_booth.webp';
import Welding from '@assets/images/services/weld.webp';
import Jetcam from '@assets/images/Services/jetcam_software.webp';
import type { ServiceType } from '../services';

export const CAD_Design: ServiceType = {
  seoTitle: '3D CAD Design & Drawing Services | Bowson Engineering',
  seoDesc: 'SolidWorks 3D CAD modelling and technical drawings for fabricated products, from sketch to manufacture. Family-run Bowson Engineering, Stoke-on-Trent.',
  title: '3D CAD Design',
  description: 'SolidWorks 3D CAD modelling and technical drawings to develop bespoke products and prepare parts for manufacture.',
  image: Modelling,
  imageAlt: 'SolidWorks 3D CAD model of an industrial steel oven frame with a pull-out tray',
  whatWeOffer: {
    para1: 'Bowson Engineering provides SolidWorks 3D CAD modelling and technical drawings for bespoke sheet metal and fabricated products, a service we have offered since 2015. We turn a sketch, a sample or an idea into a 3D model and manufacturing drawings.',
    para2: 'Designing and making in the same workshop means each part is reviewed for the most cost-effective way to manufacture before any metal is cut. Whether producing a single prototype or a design for repeat batches, the model feeds straight into our programming and nesting.',
    para3: 'Once you approve the design, the same team punches, bends, rolls, welds and powder coats it, so you deal with one supplier from first drawing to finished product.',
    capabilities: ['SolidWorks 3D CAD modelling', 'Technical drawings', 'Design from a sketch, sample or idea', 'Review for cost-effective manufacture', 'Straight into in-house programming and nesting', 'Made and finished in-house'],
  },
  theKit: [
    { image: Modelling, title: 'SolidWorks', description: 'We model parts and assemblies in SolidWorks, so designs can be reviewed and changed before manufacture.', imageAlt: 'SolidWorks 3D CAD model of an industrial steel oven frame with a pull-out tray' },
    { image: Jetcam, title: 'Programming', description: 'Approved designs go straight to our programming and nesting, ready to punch and bend.', imageAlt: 'Nesting software showing several parts arranged on a sheet' },
  ],
  whereItsUsed: ['Bespoke products', 'Prototypes', 'Replacing wooden structures with steel', 'Redesigning for cost', 'One-off commissions'],
  questionsAsked: {
    title: '3D CAD design: questions we get asked',
    description: 'What we need from you, what you receive, and who owns the drawings. Anything missing? Call us or send a sketch.',
    questions: [
      { question: 'What do you need from me to start a design?', answer: 'A sketch, a photo, a sample or a clear description, with key sizes, the material if you know it and how the product will be used. We will ask for anything else we need.' },
      { question: 'What do I receive?', answer: 'Tell us what you need and we will confirm.' },
      { question: 'Do I own the drawings and designs?', answer: 'If you supply the drawings, they stay yours. If we turn your sketch into drawings as part of making your parts, the drawings stay with us, which lets us repeat your order quickly. We keep all designs confidential.' },
      { question: 'Is there a charge for design?', answer: 'If you bring us a sketch and we draw it up and make it, there is no design charge. If you only need design work, we charge for it, and we will quote that separately.' },
      { question: 'Can you work from a sample or an existing part?', answer: 'Yes, Send the part or photos with dimensions, and we will model it and quote.' },
    ],
  },
  mightAlsoNeed: [
    { title: 'CNC Punching', description: 'Punch the parts you have designed.', image: Punch, imageAlt: 'Turret punch tooling punching a pattern of rectangular holes in a steel sheet', href: 'cnc-punching' },
    { title: 'Welding & Fabrication', description: 'Build your design in steel and stainless.', image: Welding, imageAlt: 'MIG welding a steel fabrication with a bright welding arc and sparks', href: 'welding-fabrication' },
    { title: 'Powder Coating', description: 'Finish your design in the colour you need.', image: Powdercoating, imageAlt: 'Purple powder-coated steel discs and brackets hanging inside a powder coating booth', href: 'powder-coating' },
  ],
};
