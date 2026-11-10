import Punch from '@assets/images/Services/punch.webp';
import Powdercoating from '@assets/images/services/oven.webp';
import Forming from '@assets/images/services/forming.webp';
import Welding from '@assets/images/services/weld.webp';
import Jetcam from '@assets/images/Services/jetcam_software.webp';
import type { ServiceType } from '../services';

export const CNC_Punching: ServiceType = {
  seoTitle: 'CNC Punching Services | Bowson Engineering',
  seoDesc: 'CNC turret punching in mild steel, stainless steel and aluminium from family-run Bowson Engineering in Stoke-on-Trent. Quotes within 24 hours.',
  title: 'CNC Punching',
  description: 'Accurate, repeatable turret punching for holes, louvres, upforms and perforated panels in mild steel, stainless steel and aluminium.',
  image: Punch,
  imageAlt: 'Turret punch tooling punching a pattern of rectangular holes in a steel sheet',
  whatWeOffer: {
    para1: 'Bowson Engineering provides CNC turret punching for bespoke sheet metal components and fabricated products. Using our Trumpf Trumatic 200 CNC punch, we produce perforated panels, vent louvres, upforms, mounting holes and bespoke profiles, from single prototypes through to repeat production batches.',
    para2: 'We punch mild steel up to 3mm, aluminium up to 4mm and stainless steel up to 2mm, on a working area of 3000 × 1250 mm. Louvres can be punched at 60 × 12 mm, so ventilated cabinets, machine guards and enclosures can be produced without secondary operations. Parts are programmed and nested in-house for efficient use of material.',
    para3: 'Our punching work sits alongside our in-house bending, rolling, welding and powder coating, so a flat punched blank can be taken through every stage of manufacture and supplied as a finished, coated assembly from a single source.',
    capabilities: ['Trumpf Trumatic 200 CNC turret punch', 'Working area 3000 × 1250 mm', 'Mild steel up to 3mm', 'Aluminium up to 4mm', 'Stainless steel up to 2mm', 'Louvres at 60 × 12 mm', 'Perforated panels and upforms', 'In-house programming and nesting', 'One-offs through to batches'],
  },
  theKit: [
    {
      image: Punch,
      title: 'Trumpf Trumatic 200 CNC punch',
      description: 'Our turret punch handles perforated panels, vented enclosures and sheet metal blanks with a range of standard tooling.',
      imageAlt: 'Turret punch tooling punching a pattern of rectangular holes in a steel sheet',
    },
    {
      image: Jetcam,
      title: 'In-house programming',
      description: 'We program and nest parts in JETCAM ourselves, which keeps prototypes moving and makes economical use of sheet on larger batches.',
      imageAlt: 'JETCAM nesting software showing several parts arranged on a sheet',
    },
  ],
  whereItsUsed: ['Machine guarding', 'Ventilated enclosures and cabinets', 'Kiln hoods and canopies', 'Perforated panels', 'Louvred covers'],
  questionsAsked: {
    title: 'CNC Punching - questions we get asked',
    description: 'Materials, tolerances, lead times — quick answers about how we deliver this service. Anything missing? Pick up the phone or send a drawing.',
    questions: [
      {
        question: 'What is metal punching?',
        answer: 'Metal punching is a way of cutting shapes into sheet metal using a hardened punch and die. On a CNC turret punch, the machine moves the sheet under a rotating turret of tools and strikes holes, slots, louvres and other shapes in a programmed pattern, which makes it quick and economical for perforated panels and repeat batches.',
      },
      {
        question: 'What materials, thicknesses and sheet sizes can you CNC punch?',
        answer: 'We punch mild steel up to 3mm, aluminium up to 4mm and stainless steel up to 2mm, on a working area of 3000 × 1250 mm. Louvres can be punched at 60 × 12 mm. If your part is thicker or larger, we may be able to cut it through our laser partner instead, so send the drawing and we will advise.',
      },
      {
        question: 'Should my part be punched or laser cut?',
        answer: 'Punching is often the better route for parts with many holes, louvres or formed features, especially in repeat batches. Laser cutting suits intricate outlines and thicker plate. Send the drawing and we will recommend the more cost-effective option.',
      },
      {
        question: 'Is there a tooling charge?',
        answer: 'We hold a library of standard tools, so most common shapes need no extra tooling. If a special tool is needed we will tell you in the quote.',
      },
      {
        question: 'Is there a minimum order, and how quickly can I get parts?',
        answer: 'No minimum order charge. We make one-offs and batches. We quote within 24 hours, and lead times depend on the job, with 2 to 4 weeks typical. Tell us your deadline and we will say plainly whether we can meet it.',
      },
    ],
  },
  mightAlsoNeed: [
    {
      title: 'Metal Bending & Forming',
      description: 'CNC press brake bending of sheet metal parts, from simple folds to complex profiles, with rolling available, in one-offs or repeat batches.',
      image: Forming,
      imageAlt: 'Formed sheet metal enclosures with punched slots in sides alongside a press brake machine',
      href: 'bending-metal-forming',
    },
    {
      title: 'Welding & Fabrication',
      description: 'MIG and TIG welding, fabrication and assembly of steel and stainless parts, from single items to complete bespoke products.',
      image: Welding,
      imageAlt: 'MIG welding a steel fabrication with a bright welding arc and sparks',
      href: 'welding-fabrication',
    },
    {
      title: 'Powder Coating',
      description: 'In-house powder coating for sheet metal parts and fabricated products, giving a durable finish in a range of colours.',
      image: Powdercoating,
      imageAlt: 'Purple powder-coated steel discs and brackets hanging inside a powder coating booth',
      href: 'powder-coating',
    },
  ],
};
