
export enum SectionId {
  Hero = 'hero',
  About = 'about',
  CurrentWork = 'work',
  Agents = 'agents',
  Automation = 'automation',
  Web = 'web',
  Video = 'video',
  FAQ = 'faq',
  Contact = 'contact'
}

export interface NavItem {
  id: SectionId;
  label: string;
}

export interface Project {
  title: string;
  description: string;
  image?: string;
  video?: string;
}
