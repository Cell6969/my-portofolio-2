import type { ExperienceItem } from "@/types";

export const experiences: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Senior Technical Consultant",
    company: "Global Digital Solutions",
    period: "2022 — Present",
    description:
      "Leading digital transformation initiatives for enterprise clients across Southeast Asia, specializing in application modernization and cloud migration strategies.",
    achievements: [
      "Architected digital transformation roadmap for 5 enterprise clients",
      "Reduced infrastructure costs by 40% through cloud optimization",
      "Led a team of 15 engineers across 3 concurrent projects",
      "Established enterprise architecture governance framework",
    ],
    technologies: [
      "AWS",
      "Kubernetes",
      "Microservices",
      "Event-Driven Architecture",
      "Next.js",
      "Node.js",
    ],
  },
  {
    id: "exp-2",
    role: "Senior Fullstack Developer",
    company: "FinTech Innovations",
    period: "2020 — 2022",
    description:
      "Led development of core banking and fraud detection platforms serving millions of transactions daily.",
    achievements: [
      "Built real-time fraud detection engine processing 8M+ transactions/day",
      "Achieved sub-100ms latency for transaction scoring",
      "Implemented microservices architecture serving 2M+ users",
      "Reduced false positive rate by 35% through ML model optimization",
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "Apache Kafka",
      "Apache Flink",
      "PostgreSQL",
      "Redis",
    ],
  },
  {
    id: "exp-3",
    role: "Fullstack Developer",
    company: "Enterprise Systems Group",
    period: "2018 — 2020",
    description:
      "Developed enterprise HRIS and audit management systems for large-scale organizations.",
    achievements: [
      "Delivered cloud-native HRIS platform for 5,000+ employees",
      "Reduced HR processing time by 60% through automation",
      "Built comprehensive audit management platform with SOX compliance",
      "Mentored 4 junior developers on enterprise best practices",
    ],
    technologies: [
      "React",
      "Node.js",
      "GraphQL",
      "PostgreSQL",
      "MongoDB",
      "Docker",
    ],
  },
  {
    id: "exp-4",
    role: "Software Developer",
    company: "Tech Solutions Inc.",
    period: "2016 — 2018",
    description:
      "Developed web applications and internal tools for supply chain and inventory management.",
    achievements: [
      "Built supply chain management system tracking 50,000+ SKUs",
      "Integrated ERP systems with real-time inventory tracking",
      "Improved order accuracy to 99.8%",
      "Automated procurement workflows reducing manual tasks by 75%",
    ],
    technologies: ["JavaScript", "React", "Express", "PostgreSQL", "Redis"],
  },
];
