import type { SiteConfig, NavItem, SocialLink } from "@/types";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/shared/social-icons";

export const siteConfig: SiteConfig = {
  name: "Ahmad Fauzan",
  role: "Senior Technical Consultant & Fullstack Developer",
  roles: [
    "Technical Consultant",
    "Fullstack Developer",
    "ERP Developer",
    "Solution Architect",
    "Product Engineer",
  ],
  tagline:
    "Building enterprise-grade applications that drive digital transformation.",
  description:
    "Ahmad Fauzan is a Senior Technical Consultant and Fullstack Developer specializing in enterprise application development, digital transformation, audit systems, HRIS, and fraud detection systems.",
  email: "ahmad.fauzan.9922@gmail.com",
  location: "Jakarta, Indonesia",
  url: "https://ahmadfauzan.dev",
  ogImage: "/og-image.png",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/Cell6969",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/ahmadfauzan",
    icon: LinkedinIcon,
  },
  {
    label: "Email",
    href: "mailto:ahmad.fauzan.9922@gmail.com",
    icon: Mail,
  },
];

export const sectionIds = [
  "home",
  "about",
  "projects",
  "portfolio",
  "contact",
] as const;

export type SectionId = (typeof sectionIds)[number];
