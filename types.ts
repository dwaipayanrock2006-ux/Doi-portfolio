import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface SkillItem {
  name: string;
  level: number; // 0 to 100
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
  icon: LucideIcon;
}

export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string;
  achievements: string[];
  logo?: string;
}

export interface ProjectItem {
  title: string;
  role: string;
  description: string;
  tags: string[];
  category: 'All' | 'Product' | 'Growth' | 'Content' | 'Tech';
  link?: string;
  highlight?: boolean; 
  imagePlaceholder?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}