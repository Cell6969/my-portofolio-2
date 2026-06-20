import type { EducationItem } from "@/types";

export const education: EducationItem[] = [
  {
    id: "edu-1",
    degree: "M.Sc. in Computer Science",
    institution: "University of Indonesia",
    period: "2014 — 2016",
    description:
      "Specialized in distributed systems and software engineering. Thesis on real-time event processing architectures for large-scale enterprise applications.",
  },
  {
    id: "edu-2",
    degree: "B.Sc. in Information Systems",
    institution: "Bandung Institute of Technology",
    period: "2010 — 2014",
    description:
      "Foundation in software engineering, database systems, and enterprise architecture. Graduated with honors. Active in software development community.",
  },
];

export const certifications = [
  {
    name: "AWS Certified Solutions Architect — Professional",
    issuer: "Amazon Web Services",
    year: "2023",
  },
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "Cloud Native Computing Foundation",
    year: "2022",
  },
  {
    name: "TOGAF 9 Certified — Enterprise Architecture",
    issuer: "The Open Group",
    year: "2021",
  },
  {
    name: "PMP — Project Management Professional",
    issuer: "Project Management Institute",
    year: "2020",
  },
];
