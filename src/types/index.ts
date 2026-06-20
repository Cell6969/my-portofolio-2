import type { ComponentType, SVGProps } from "react";

export type IconType = ComponentType<SVGProps<SVGSVGElement>>;

export type ProjectCategory =
  | "Enterprise Application"
  | "Digital Transformation"
  | "Audit System"
  | "HRIS"
  | "Fraud Detection";

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  longDescription: string;
  technologies: string[];
  metrics: ProjectMetric[];
  highlights: string[];
  year: string;
  role: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Database"
  | "DevOps & Cloud"
  | "Architecture & Practices"
  | "Tools";

export interface SkillItem {
  name: string;
  level: number;
}

export interface SkillGroup {
  category: SkillCategory;
  skills: SkillItem[];
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  summary: string;
  challenge: string;
  solution: string;
  outcome: string;
  achievements: string[];
  year: string;
}

export interface NavItem {
  label: string;
  href: string;
  icon?: IconType;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconType;
}

export interface SiteConfig {
  name: string;
  role: string;
  roles: string[];
  tagline: string;
  description: string;
  email: string;
  location: string;
  url: string;
  ogImage: string;
}
