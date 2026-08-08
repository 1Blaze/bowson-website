import Punch from '@assets/images/Punch_TODO_Change.webp';
import type { ServiceType } from '../services';

// Grenvile Title - Sheet Metal Laser Cutting by Grenville
// ASA Title - CNC Laser Cutting Services | ASA Fabs Ltd
// Alifab - CNC Punching - Alifab Engineering

// Grenville Desc - With 40 years experience, Grenville Engineering is the leading provider & specialist of sheet metal laser cutting services. Contact us today.
// ASA Desc - Explore ASA Fabs Ltd's precision CNC Laser Cutting services. Advanced technology for quality and efficient material handling
// Alifab Desc - Specializes in the welding and fabrication of aluminium, stainless steel, and mild steel products.

// Our Title - CNC Punching Services | Bowson Engineering
// Our Desc - Precision CNC punching in mild steel, stainless steel and aluminium, from family-run Bowson Engineering in Stoke-on-Trent since 1990. Get a fast quote.

// TEXT: SORT THIS
export const CNC_Punching: ServiceType = {
  seoTitle: 'CNC Punching Services | Bowson Engineering',
  seoDesc: 'Precision CNC punching in mild steel, stainless steel and aluminium, from family-run Bowson Engineering in Stoke-on-Trent since 1990. Get a fast quote.',
  title: 'CNC Punching',
  description: 'Accurate, repeatable turret punching for shapes, holes, louvres and perforations across mild steel, stainless steel and aluminium.',
  image: Punch,
  imageAlt: 'CNC Trumpf TC Punching Material',
  whatWeOffer: {
    para1: 'We operate a Trumpf TC200 CNC turret punch capable of producing intricate sheet metal blanks at production volumes. The machine handles complex perforated panels, vent louvres, mounting holes and bespoke profiles with consistent accuracy across every part.',
    para2: 'Material capacity covers mild steel up to 4mm, aluminium up to 5mm and stainless steel up to 3mm. We can punch louvres to a size of 60×12, allowing us to produce ventilated cabinets, machine guards and enclosures without secondary operations.',
    para3: 'CNC programs are nested for material efficiency, and parts feed straight into our bending and welding cells — so a punched flat blank can leave the building as a finished, powder-coated assembly.',
    capabilities: ['Trumpf TC200 turret punch', 'Mild steel up to 4mm', 'Aluminium up to 5mm', 'Stainless steel up to 3mm', 'Louvres sized 60x12', 'Nested for material efficiency', 'One-offs through to production batches'],
  },
  theKit: [
    {
      image: Punch,
      title: 'Trumpf TC200 turret punch',
      description: 'Reliable, high-speed CNC punching with a deep tool library. Great for perforated panels, vented enclosures and intricate sheet metal blanks.',
    },
    {
      image: Punch,
      title: 'In-house programming',
      description: 'Reliable, high-speed CNC punching with a deep tool library. Great for perforated panels, vented enclosures and intricate sheet metal blanks.',
    },
  ],
  whereItsUsed: ['Machine Guarding', 'Ventilated Enclosures'],
  questionsAsked: {
    title: 'CNC Punching - questions we get asked',
    description: 'Materials, tolerances, lead times — quick answers about how we deliver this service. Anything missing? Pick up the phone or send a drawing.',
    questions: [
      {
        question: 'What materials and thicknesses can you CNC punch?',
        answer: 'Our Trumpf TC200 handles mild steel up to 4mm, aluminium up to 5mm and stainless steel up to 3mm. We can also punch louvre size 60×12.',
      },
    ],
  },
  mightAlsoNeed: [
    {
      image: Punch,
      title: 'Laser Cutting',
      description: 'Clean, accurate laser-cut profiles for complex shapes and intricate detail.',
      href: '/laser-cutting',
    },
  ],
};
