import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: "javascript" },
      { name: "TypeScript", icon: "typescript" },
      { name: "Python", icon: "python" },
      { name: "PHP", icon: "php" },
      { name: "Java", icon: "springboot" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "NestJS", icon: "nestjs" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Flask", icon: "flask" },
      { name: "Laravel", icon: "laravel" },
      { name: "Spring Boot", icon: "springboot" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", icon: "react" },
      { name: "Next.js", icon: "nextdotjs" },
    ],
  },
  {
    category: "Databases & Storage",
    skills: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MySQL", icon: "mysql" },
      { name: "Neo4j", icon: "neo4j" },
      { name: "Redis", icon: "redis" },
      { name: "Qdrant", icon: "qdrant" },
      { name: "MinIO", icon: "minio" },
    ],
  },
  {
    category: "Cloud Platforms",
    skills: [
      { name: "Google Cloud Platform", icon: "googlecloud" },
      { name: "AWS", icon: "amazonaws" },
    ],
  },
  {
    category: "DevOps & Deployment",
    skills: [
      { name: "Docker", icon: "docker" },
      { name: "Nginx", icon: "nginx" },
      { name: "GitHub Actions", icon: "githubactions" },
    ],
  },
  {
    category: "AI Technologies",
    skills: [
      { name: "LLM" },
      { name: "RAG" },
      { name: "Prompt Engineering" },
      { name: "Vector Search" },
      { name: "Knowledge Graph" },
    ],
  },
  {
    category: "Tools & Collaboration",
    skills: [
      { name: "Git", icon: "git" },
      { name: "Jira", icon: "jira" },
    ],
  },
];
