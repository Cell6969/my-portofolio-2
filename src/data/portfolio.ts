import type { PortfolioItem } from "@/types";

export const portfolioItems: PortfolioItem[] = [
  {
    id: "audit",
    title: "Audit Management System",
    category: "Enterprise",
    description:
      "A comprehensive audit management system enabling end-to-end audit lifecycle management for enterprise organizations.",
    longDescription:
      "A full-featured enterprise audit platform that streamlines the entire audit lifecycle from planning and scheduling to execution,collaboration, reporting, and remediation tracking. The system supports risk-based audit planning, automated workflow routing, evidence management, real-time analytics dashboards, and integrated with Generative AI to Improve document planning for audit plan including team recomendation based on experience, education and skills. Designed to serve auditors across multiple business units with role-based access control and comprehensive audit trails.",
    technologies: [
      "Next.js",
      "Nest JS",
      "Neo4j",
      "Flask",
      "Redis",
      "Docker",
      "Langchain",
      "MinIo"
    ],
    image: "/images/portfolio/audit.png",
  },
  {
    id: "hris",
    title: "HR Management",
    category: "Enterprise",
    description:
      "Enterprise Human Resource Management Solution",
    longDescription:
      "Designed and delivered a comprehensive Human Resource Management platform to support both operational and strategic workforce management across the organization. The solution integrates core HR Operations, Organizational Structure Management, People Development, Manpower Planning, and Executive Reporting into a single centralized system. Key capabilities include employee administration, attendance and leave management, organizational hierarchy management, position and grade management, performance evaluation, competency assessments, training and development programs, career and succession planning, workforce forecasting, and management dashboards. The platform enables HR teams and executives to improve operational efficiency, enhance employee development, optimize workforce planning, and make data-driven decisions through real-time reporting and analytics. Additionally the system support for multi tenancy role that can monitoring different company in one.",
    technologies: [
      "Laravel",
      "PostgreSQL",
      "Redis",
      "PG Vector",
      "Mapbox",
    ],
    image: "/images/portfolio/hris.png",
  },
  {
    id: "fraud",
    title: "Fraud & AML Detection System",
    category: "Enterprise",
    description:
      "Fraud & Anti-Money Laundering (AML) Detection Platform",
    longDescription:
      "Designed and delivered an enterprise Fraud & Anti-Money Laundering (AML) Detection Platform for a leading state-owned financial institution (BUMN Finance) to strengthen transaction monitoring and regulatory compliance. The solution continuously analyzes customer transaction data through scheduled detection pipelines that execute configurable fraud and AML rules to identify suspicious activities and potential compliance violations. The platform provides a centralized environment for managing detection rules, orchestrating monitoring pipelines, configuring approval workflows, and handling investigation cases from identification through resolution. To support compliance and internal audit teams, the system also delivers analytical dashboards and monitoring insights that enable broader risk identification, trend analysis, and more effective case follow-up. The solution helps organizations improve fraud detection capabilities, streamline investigation processes, and enhance oversight across high-volume transaction environments.",
    technologies: [
      "Python",
      "Springboot",
      "MySQL",
      "Neo4j",
      "MongoDB",
      "GCP",
    ],
    image: "/images/portfolio/fraud.png",
  },
  {
    id: "land",
    title: "Land Management (Extended Odoo Module)",
    category: "Enterprise",
    description:
      "A comprehensive land management solution built on top of Odoo to manage land assets, plots, blocks, land aqcuisition and development projects.",
    longDescription:
      "Designed and developed a custom Land Management solution as an extension of the Odoo platform to support end-to-end land asset administration and planning. The system enables organizations to manage land inventories through interactive plotting and mapping capabilities, define land boundaries, organize plots into blocks and lots, classify land based on business requirements, and associate assets and development projects with each land parcel. By centralizing spatial and operational data into a single platform, the solution improves visibility, asset governance, planning accuracy, and operational efficiency for land development and management activities.",
    technologies: [
      "Odoo",
      "PostgreSQL",
      "Mapbox",
    ],
    image: "/images/portfolio/land.png",
  },
  {
    id: "hajj",
    title: "Tracing & Tracking for Hajj Pilgrims",
    category: "POC",
    description:
      "A mobile-based tracing and tracking solution designed to monitor Hajj pilgrims in real time and support emergency response operations.",
    longDescription:
      "Developed a Proof of Concept (POC) for the Ministry of Religious Affairs to improve the safety, monitoring, and operational coordination of Hajj pilgrims during pilgrimage activities. The solution combines mobile technology, real-time location tracking, and command center integration to provide visibility into pilgrim movements and enable rapid incident response. Key capabilities include live location tracking, geofenced radius monitoring, emergency dispatch coordination, and a panic button feature that allows pilgrims to instantly send alerts to operators. The platform was designed to support operational teams in monitoring large groups of pilgrims, improving situational awareness, and accelerating emergency response through a centralized command center.",
    technologies: [
      "React Native",
      "Node.js",
      "Neo4j",
      "MQTT",
      "Kafka",
      "Redis",
    ],
    image: "/images/portfolio/hajj.png",
  },
];

export const portfolioCategories = [
  "All",
  "Enterprise",
  "Self Portfolio",
  "POC",
] as const;
