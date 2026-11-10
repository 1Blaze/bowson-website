import type { QuestionAskedType } from '../components/faqs.astro';
import { AgricultureEstate } from './sectors/agriculture-estate';
import { CeramicsPottery } from './sectors/ceramics-pottery';
import { Manufacturing } from './sectors/manufacturing';
import { MaterialHandling } from './sectors/material-handling-storage';
import { SafetyAccess } from './sectors/safety-access';
import { VehicleCampervan } from './sectors/vehicle-campervan-conversions';
import type { MightNeedType } from './services';
// TODO: all the header images for these

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

const Services: Record<string, SectorType> = {
  'agriculture-estate': AgricultureEstate,
  'ceramics-pottery': CeramicsPottery,
  'manufacturing-production': Manufacturing,
  'material-handling-storage': MaterialHandling,
  'safety-access': SafetyAccess,
  'vehicle-campervan-conversions': VehicleCampervan,
};

export const GetSector = (id: string): SectorType => {
  return Services[id];
};
