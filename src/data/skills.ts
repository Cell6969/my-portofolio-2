import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Framer Motion", level: 85 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js / NestJS", level: 93 },
      { name: "Python / FastAPI", level: 88 },
      { name: "GraphQL", level: 85 },
      { name: "Microservices", level: 90 },
    ],
  },
  {
    category: "Database",
    skills: [
      { name: "PostgreSQL", level: 92 },
      { name: "MongoDB", level: 85 },
      { name: "Redis", level: 88 },
      { name: "Elasticsearch", level: 80 },
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      { name: "AWS", level: 90 },
      { name: "Docker / Kubernetes", level: 88 },
      { name: "CI/CD Pipelines", level: 85 },
      { name: "Terraform", level: 82 },
    ],
  },
  {
    category: "Architecture & Practices",
    skills: [
      { name: "System Design", level: 92 },
      { name: "Event-Driven Architecture", level: 88 },
      { name: "Domain-Driven Design", level: 85 },
      { name: "Enterprise Architecture", level: 87 },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Apache Kafka", level: 85 },
      { name: "Git / Version Control", level: 95 },
      { name: "Jira / Confluence", level: 90 },
      { name: "Prometheus / Grafana", level: 80 },
    ],
  },
];
