import { ExampleProject } from './projects/example';
import Punch from '@assets/images/Punch_TODO_Change.webp';

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
  soultion: string;
  features: string[];
  outcome: string;
  specification: SpecType[];
  number: string;
};

// TODO: the rest of this!
const Projects: Record<string, ProjectType> = {
  'galvanised-deer-tower': ExampleProject,
  'custom-machine-guarding': ExampleProject,
  'custom-test-guarding': ExampleProject,
  'custom-www-guarding': ExampleProject,
  'custom-aaa-guarding': ExampleProject,
  'custom-dd-guarding': ExampleProject,
  'custom-w-guarding': ExampleProject,
  'custom-i-guarding': ExampleProject,
  'custom-o-guarding': ExampleProject,
  'custom-p-guarding': ExampleProject,
};

const tags = ['Agriculture & Animal', 'Safety & Access', 'Bespoke Fabrication'];

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
