import type { QuestionAskedType } from '../components/faqs.astro';
import { CeramicsPottery } from './sectors/ceramics-pottery';
import type { MightNeedType } from './services';

type DesignType = {
  title: string;
  description: string;
};

export type SectorType = {
  seoTitle: string;
  seoDesc: string;
  title: string;
  description: string;
  image: ImageMetadata;
  imageAlt: string;
  whatWeOffer: {
    para1: string;
    para2: string;
    capabilities: string[];
  };
  designFor: DesignType[];
  questionsAsked: QuestionAskedType;
  builtFor: MightNeedType[];
  customersGet: string[];
  otherSectors: MightNeedType[];
};

// TODO: Do all the data for these
const Services: Record<string, SectorType> = {
  'agriculture-estate': CeramicsPottery,
  'ceramics-pottery': CeramicsPottery,
  'manufacturing-production': CeramicsPottery,
  'material-handling-storage': CeramicsPottery,
  'safety-access': CeramicsPottery,
  'vehicle-campervan-conversions': CeramicsPottery,
};

export const GetSector = (id: string): SectorType => {
  return Services[id];
};
