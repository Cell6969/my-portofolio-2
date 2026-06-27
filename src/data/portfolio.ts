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
      "Javascript/Typescript",
      "Python",
      "Neo4j",
      "Flask",
      "Redis",
      "Docker",
      "Langchain",
      "MinIo"
    ],
    image: "/images/portfolio/audit_1.png",
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
      "PHP",
      "Docker"
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
      "Camunda BPN"
    ],
    image: "/images/portfolio/fraud_1.png",
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
      "OWL Framework"
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
    image: "/images/portfolio/hajj_1.jpg",
  },
  {
    id: "fraud_investor",
    title: "Investor Profiling & Market Manipulation Recognition",
    category: "POC",
    description:
      "A graph-powered market surveillance platform for analyzing investor relationships and detecting potential market manipulation patterns.",
    longDescription:
      "Designed and developed a Proof of Concept (POC) for the Indonesian Financial Services Authority (OJK) to support capital market surveillance through graph-based analytics. The solution ingests stock transaction and investor profile data from the organization's Data Warehouse into Neo4j using Apache Zeppelin, enabling relationship-driven analysis beyond traditional tabular datasets. The platform provides Investor Profiling capabilities to analyze investor behavior, ownership structures, and interconnected entities, alongside Market Manipulation Recognition to identify suspicious transaction patterns and potential collusive activities. An interactive graph visualization interface allows investigators and analysts to explore complex relationships, trace transaction networks, and uncover hidden connections that may indicate market abuse or fraudulent investment activities.",
    technologies: [
      "React Js",
      "Nest JS",
      "Neo4j",
      "Apache Zepellin",
      "Apache Spark"
    ],
    image: "/images/portfolio/fraud_investor_1.jpg",
  },
  {
    id: "ewallet",
    title: "E-Wallet",
    category: "Personal Project",
    description:
      "A digital wallet application that enables secure wallet top-ups, fund transfers, and digital product purchases through integrated payment services.",
    longDescription:
      "Designed and developed a cross-platform digital wallet application using Flutter to demonstrate modern fintech application architecture and digital payment integration. The platform enables users to securely top up wallet balances through Midtrans, transfer funds between users, and purchase digital products such as prepaid mobile credits and data packages. The backend is built with FastAPI and PostgreSQL, providing secure transaction processing and wallet management. The project showcases payment gateway integration, digital wallet operations, transaction management, and a scalable backend architecture for financial applications.",
    technologies: [
      "Dart",
      "Flutter",
      "PostgreSQL",
      "Python",
      "Fast API",
      "Midtrans"
    ],
    image: "/images/portfolio/ewallet.png",
  },
];

export const portfolioCategories = [
  "All",
  "Enterprise",
  "Personal Project",
  "POC",
] as const;
