import type { ImageMetadata } from 'astro';
import type { QuestionAskedType } from '../components/faqs.astro';
import { CNC_Punching } from './services/cnc-punching';

type ServiceKitType = {
  title: string;
  image: ImageMetadata;
  description: string;
};

type MightNeedType = {
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

// TODO: add all of this shit and sort it out with everything
const Services: Record<string, ServiceType> = {
  'cnc-punching': CNC_Punching,
};

export const GetService = (id: string): ServiceType => {
  return Services[id];
};
