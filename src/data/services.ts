import type { ImageMetadata } from 'astro';
import type { QuestionAskedType } from '../components/faqs.astro';
import { CNC_Punching } from './services/cnc-punching';
import { Laser_Cutting } from './services/laser-cutting';
import { Bending_Forming } from './services/bending-metal-forming';
import { Welding_Fabrication } from './services/welding-fabrication';
import { Powder_Coating } from './services/powder-coating';
import { CAD_Design } from './services/3d-cad-design';

export type ServiceKitType = {
  title: string;
  image: ImageMetadata;
  imageAlt: string;
  description: string;
};

export type MightNeedType = {
  title: string;
  image: ImageMetadata;
  description: string;
  href: string;
  imageAlt: string;
};

export type ServiceType = {
  seoTitle: string;
  seoDesc: string;
  title: string;
  description: string;
  image: ImageMetadata;
  imageAlt: string;
  whatWeOffer: {
    para1: string;
    para2: string;
    para3: string;
    capabilities: string[];
  };
  theKit: ServiceKitType[];
  whereItsUsed: string[];
  questionsAsked: QuestionAskedType;
  mightAlsoNeed: MightNeedType[];
};

const Services: Record<string, ServiceType> = {
  'cnc-punching': CNC_Punching,
  'laser-cutting': Laser_Cutting,
  'bending-metal-forming': Bending_Forming,
  'welding-fabrication': Welding_Fabrication,
  'powder-coating': Powder_Coating,
  '3d-cad-design': CAD_Design,
};

export const GetService = (id: string): ServiceType => {
  return Services[id];
};
