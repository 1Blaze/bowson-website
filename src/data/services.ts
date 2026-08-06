import type { ImageMetadata } from 'astro';

type ServiceKitType = {
  title: string;
  image: ImageMetadata;
  description: string;
};

type QuestionType = {
  question: string;
  answer: string;
};

export type ServiceType = {
  title: string;
  description: string;
  image: ImageMetadata;
  whatWeOffer: {
    para1: string;
    para2: string;
    para3: string;
    capabilities: string[];
  };
  theKit: ServiceKitType[];
  whereItsUsed: string[];
  questionsAsked: {
    description: string;
    questions: QuestionType[];
  };
  mightAlsoNeed: ServiceKitType[];
};

const Services: Record<string, ServiceType> = {
  //   'cnc-punching': {},
};

export const GetService = (id: string): ServiceType => {
  return Services[id];
};
