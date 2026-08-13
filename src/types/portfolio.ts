export interface ProjectFeature {
  id: number;
  title?: string;
  description: string;
}

export interface ProjectApp {
  id: number;
  name: string;
  isPlayStore: boolean;
  isAppStore: boolean;
  isWebApp?: boolean;
  playStoreLink?: string | null;
  appStoreLink?: string | null;
  webAppLink?: string | null;
  screenshots?: string[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'mobile' | 'ai' | 'fullstack';
  officialWebsite?: string;
  summary: string;
  fullDescription: string;
  roleHighlights: string[];
  keyFeatures: ProjectFeature[];
  projectApps: ProjectApp[];
  technologies: string[];
  metrics?: string[];
  gradient: string;
  iconName: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  type: string;
  location: string;
  duration: string;
  isCurrent: boolean;
  summary: string;
  highlights: string[];
  techStack: string[];
  companyLogoText: string;
}

export interface Education {
  degree: string;
  institution: string;
  score: string;
  duration: string;
  location: string;
  details: string[];
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: {
    name: string;
    level: number;
    tag?: string;
    highlight?: boolean;
  }[];
}

export interface AIShowcaseFeature {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  demoType: 'voice' | 'diagnostics' | 'ocr' | 'agent';
  description: string;
  codeSnippet: string;
}

export interface ProfileData {
  name: string;
  roleTitle: string;
  subTitle: string;
  bio: string;
  statusText: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  resumeLink: string;
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
}
