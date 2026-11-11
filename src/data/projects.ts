import { DeerTower, DogKennels } from './projects/agriculture-estate';
import { KilnShellBatchProject, TruckKilnProject } from './projects/ceramics-pottery';
import { ExampleProject } from './projects/example';
import { PalletBenchesProject, RollStandProject } from './projects/manufacturing-production';
import { PalletGateProject, StillagesProject } from './projects/material-handling-storage';
import { MachineCoverProject, MachineGuardingProject, SheltersProject } from './projects/safety-access';
import { SeatbedProject } from './projects/vehicle-campervan-conversions';

type SpecType = {
  title: string;
  value: string;
};

export type ProjectType = {
  seoTitle: string;
  seoDesc: string;
  title: string;
  description: string;
  locationData: {
    location: string;
    client: string;
  };
  barInfo: {
    sector: string;
    material: string;
    finish: string;
    category: string;
  };
  image: ImageMetadata;
  imageAlt: string;
  imageFig: string;
  tag: string;
  selected: boolean;
  challenge: string;
  solution: string;
  features: string[];
  outcome: string;
  specification: SpecType[];
  number: string;
};

const Projects: Record<string, ProjectType> = {
  // 'agriculture-estate': CeramicsPottery,
  'deer-towers': DeerTower,
  'dog-kennels': DogKennels,

  // 'manufacturing-production': CeramicsPottery,
  'work-benches': PalletBenchesProject,
  'roll-stand': RollStandProject,

  // 'ceramics-pottery': CeramicsPottery,
  'truck-kilns': TruckKilnProject,
  'batch-kilns': KilnShellBatchProject,

  // 'safety-access': CeramicsPottery,
  'smoking-shelters': SheltersProject,
  'machine-cover': MachineCoverProject,
  'machine-guarding': MachineGuardingProject,

  // 'material-handling-storage': CeramicsPottery,
  'pallet-gates': PalletGateProject,
  stillages: StillagesProject,

  // 'vehicle-campervan-conversions': CeramicsPottery,
  seatbeds: SeatbedProject,
};

const tags = ['Manufacturing', 'Agriculture & Estates', 'Ceramics & Pottery', 'Material Handling & Storage', 'Safety & Access', 'Vehicle & Campervan Conversions'];

export const GetProject = (id: string): ProjectType => {
  return Projects[id];
};

export const GetAllProjects = (): { slug: string; data: ProjectType }[] => {
  return Object.entries(Projects).map(([slug, data]) => ({ slug, data }));
};

const GetTagCount = (tag: string): number => {
  return Object.values(Projects).filter((project) => project.tag === tag).length;
};

export const GetTagsWithCounts = (): { tag: string; count: number }[] => {
  return tags.map((tag) => ({ tag, count: GetTagCount(tag) }));
};
