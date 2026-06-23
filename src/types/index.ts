import type { ComponentType, SVGProps } from "react";

export type IconType = ComponentType<SVGProps<SVGSVGElement>>;

export type ProjectCategory =
  | "Enterprise Application"
  | "Digital Transformation"
  | "Audit System"
  | "HRIS"
  | "Fraud Detection"
  | "AI & Analytics";

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
  metrics?: ProjectMetric[];
  highlights: string[];
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

export interface SkillItem {
  name: string;
  icon?: string;
}

export interface SkillGroup {
  category: string;
  skills: SkillItem[];
}

export type PortfolioCategory = "Enterprise" | "Self Portfolio" | "POC";

export interface PortfolioItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  description: string;
  longDescription: string;
  technologies: string[];
  image?: string;
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
