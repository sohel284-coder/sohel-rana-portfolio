import { LucideIcon } from 'lucide-react';

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: LucideIcon;
}

export interface Project {
  title: string;
  role?: string;
  description: string;
  impact?: string;
  tech?: string[];
  link?: string;
  highlight?: boolean;
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Achievement {
  title: string;
  description: string;
  year?: string;
}
