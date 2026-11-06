import type { ImageMetadata } from 'astro';
import type { QuestionAskedType } from '../components/faqs.astro';
import { CNC_Punching } from './services/cnc-punching';

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

// TODO: sort all the data out with this
const Services: Record<string, ServiceType> = {
  'cnc-punching': CNC_Punching,
  'laser-cutting': CNC_Punching,
  'bending-metal-forming': CNC_Punching,
  'welding-fabrication': CNC_Punching,
  'powder-coating': CNC_Punching,
  '3d-cad-design': CNC_Punching,
};

export const GetService = (id: string): ServiceType => {
  return Services[id];
};
