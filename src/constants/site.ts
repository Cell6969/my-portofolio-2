import type { SiteConfig, NavItem, SocialLink } from "@/types";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/shared/social-icons";

export const siteConfig: SiteConfig = {
  name: "Ahmad Fauzan",
  role: "Senior Technical Consultant & Fullstack Developer",
  roles: [
    "Senior Technical Consultant",
    "Senior Fullstack Developer",
    "Enterprise Application Architect",
    "Digital Transformation Specialist",
  ],
  tagline:
    "Building enterprise-grade applications that drive digital transformation.",
  description:
    "Ahmad Fauzan is a Senior Technical Consultant and Fullstack Developer specializing in enterprise application development, digital transformation, audit systems, HRIS, and fraud detection systems.",
  email: "ahmad.fauzan@example.com",
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
    href: "https://github.com/ahmadfauzan",
    icon: GithubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/ahmadfauzan",
    icon: LinkedinIcon,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/ahmadfauzan",
    icon: TwitterIcon,
  },
  {
    label: "Email",
    href: "mailto:ahmad.fauzan@example.com",
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
