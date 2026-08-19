import { ExampleProject } from './projects/example';

export type ProjectType = {
  seoTitle: string;
  seoDesc: string;
  title: string;
  description: string;
  image: ImageMetadata;
  imageAlt: string;
  tag: string;
};

// TODO: the rest of this!
const Projects: Record<string, ProjectType> = {
  'galvanised-deer-tower': ExampleProject,
  'custom-machine-guarding': ExampleProject,
};

export const Tags = ['Agriculture & Animal', 'Safety & Access', 'Bespoke Fabrication'];

export const GetProject = (id: string): ProjectType => {
  return Projects[id];
};

export const GetAllProjects = (): { slug: string; data: ProjectType }[] => {
  return Object.entries(Projects).map(([slug, data]) => ({ slug, data }));
};
