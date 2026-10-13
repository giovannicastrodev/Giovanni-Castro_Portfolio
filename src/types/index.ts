export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  isCurrent?: boolean;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  logo: string;
  companyUrl?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  metrics: string;
  highlights: string[];
  icon: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: "Engenharia & IA" | "Mobile & Sistemas" | "Conquista Internacional";
  description: string;
  keyAchievement: string;
  technologies: string[];
  image: string;
  repoLink?: string;
  linkedinLink?: string;
  featured?: boolean;
  badge?: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  status: string;
  description: string;
  location: string;
  logo?: string | null;
  isMystery?: boolean;
  mysteryReveal?: {
    title: string;
    focus: string;
    description: string;
  };
}

export interface TechSkill {
  name: string;
  category: "Core Systems" | "Automation & Code" | "Databases" | "DevOps";
  proficiency?: string;
}

