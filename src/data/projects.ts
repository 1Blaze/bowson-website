import { ExampleProject } from './projects/example';
import Punch from '@assets/images/Punch_TODO_Change.webp';

export type ProjectType = {
  seoTitle: string;
  seoDesc: string;
  title: string;
  description: string;
  image: ImageMetadata;
  imageAlt: string;
  tag: string;
  selected: boolean;
};

const testProduct: ProjectType = {
  title: 'Testing Product',
  description: 'Testing Description',
  seoTitle: '',
  seoDesc: '',
  image: Punch,
  imageAlt: 'Image Alt',
  tag: 'Safety & Access',
  selected: false,
};

// TODO: the rest of this!
const Projects: Record<string, ProjectType> = {
  'galvanised-deer-tower': ExampleProject,
  'custom-machine-guarding': ExampleProject,
  'custom-test-guarding': ExampleProject,
  'custom-www-guarding': ExampleProject,
  'custom-aaa-guarding': testProduct,
};

export const Tags = ['Agriculture & Animal', 'Safety & Access', 'Bespoke Fabrication'];

export const GetProject = (id: string): ProjectType => {
  return Projects[id];
};

export const GetAllProjects = (): { slug: string; data: ProjectType }[] => {
  return Object.entries(Projects).map(([slug, data]) => ({ slug, data }));
};
