import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "enterprise-audit-platform",
    title: "Enterprise Audit Management Platform",
    category: "Audit System",
    description:
      "A comprehensive audit management system enabling end-to-end audit lifecycle management for enterprise organizations.",
    longDescription:
      "A full-featured enterprise audit platform that streamlines the entire audit lifecycle from planning and scheduling to execution, reporting, and remediation tracking. The system supports risk-based audit planning, automated workflow routing, evidence management, and real-time analytics dashboards. Designed to serve auditors across multiple business units with role-based access control and comprehensive audit trails.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "Docker",
      "AWS",
    ],
    metrics: [
      { label: "Audit Cycle Time", value: "-45%" },
      { label: "Active Users", value: "1,200+" },
      { label: "Audit Trails", value: "100%" },
      { label: "Compliance", value: "SOX" },
    ],
    highlights: [
      "Risk-based audit planning with automated prioritization",
      "Real-time collaboration across audit teams",
      "Comprehensive evidence management with versioning",
      "Automated report generation with customizable templates",
      "Full audit trail with immutable logging",
    ],
    year: "2024",
    role: "Lead Architect & Fullstack Developer",
  },
  {
    id: "hris-transformation",
    title: "Cloud-Native HRIS Transformation",
    category: "HRIS",
    description:
      "Modernized a legacy HRIS into a cloud-native platform serving 5,000+ employees with self-service capabilities.",
    longDescription:
      "Led the digital transformation of a legacy on-premise HRIS into a modern cloud-native platform. The new system provides comprehensive HR management including employee lifecycle management, payroll integration, performance reviews, leave management, and self-service portals. Built with a microservices architecture for scalability and maintained strict data security compliance.",
    technologies: [
      "React",
      "Node.js",
      "GraphQL",
      "PostgreSQL",
      "MongoDB",
      "Kubernetes",
      "GCP",
      "Kafka",
    ],
    metrics: [
      { label: "Employees", value: "5,000+" },
      { label: "Processing Time", value: "-60%" },
      { label: "Uptime", value: "99.9%" },
      { label: "Departments", value: "24" },
    ],
    highlights: [
      "Microservices architecture with event-driven communication",
      "Self-service employee portal reducing HR tickets by 70%",
      "Automated payroll processing with multi-country tax support",
      "Real-time analytics and workforce planning dashboards",
      "GDPR and PDPA compliant data handling",
    ],
    year: "2023",
    role: "Technical Consultant & Lead Developer",
  },
  {
    id: "fraud-detection-engine",
    title: "Real-Time Fraud Detection Engine",
    category: "Fraud Detection",
    description:
      "A machine learning-powered fraud detection system processing millions of transactions in real-time.",
    longDescription:
      "Designed and built a real-time fraud detection engine that analyzes transaction patterns using machine learning models to identify suspicious activities. The system processes millions of transactions daily with sub-100ms latency, featuring adaptive rule engines, anomaly detection, and a comprehensive investigation workflow for fraud analysts.",
    technologies: [
      "Python",
      "TensorFlow",
      "Apache Kafka",
      "Apache Flink",
      "PostgreSQL",
      "Redis",
      "Docker",
      "AWS",
    ],
    metrics: [
      { label: "Transactions/day", value: "8M+" },
      { label: "Detection Rate", value: "96.5%" },
      { label: "Latency", value: "<100ms" },
      { label: "False Positives", value: "-35%" },
    ],
    highlights: [
      "Real-time stream processing with Apache Flink and Kafka",
      "Ensemble ML models combining rule-based and anomaly detection",
      "Sub-100ms transaction scoring latency",
      "Interactive investigation dashboard for fraud analysts",
      "Adaptive model retraining pipeline with A/B testing",
    ],
    year: "2023",
    role: "Architecture Lead",
  },
  {
    id: "digital-transformation-portal",
    title: "Enterprise Digital Transformation Portal",
    category: "Digital Transformation",
    description:
      "A unified digital portal consolidating 12 legacy systems into a single modern platform.",
    longDescription:
      "Architected a comprehensive digital transformation portal that consolidated 12 fragmented legacy systems into a unified, modern platform. The portal provides single sign-on, unified dashboards, workflow automation, and a service catalog. Delivered significant cost savings through system consolidation while improving user experience and operational efficiency.",
    technologies: [
      "Next.js",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "RabbitMQ",
      "Keycloak",
      "Docker",
      "Azure",
    ],
    metrics: [
      { label: "Systems Consolidated", value: "12" },
      { label: "Cost Reduction", value: "-40%" },
      { label: "Active Users", value: "8,000+" },
      { label: "Process Automation", value: "75%" },
    ],
    highlights: [
      "Single sign-on integration across 12 legacy systems",
      "Unified dashboard with customizable widgets",
      "Workflow automation engine reducing manual tasks by 75%",
      "Service catalog with automated provisioning",
      "Progressive migration strategy with zero downtime",
    ],
    year: "2022",
    role: "Senior Technical Consultant",
  },
  {
    id: "supply-chain-enterprise",
    title: "Enterprise Supply Chain Management System",
    category: "Enterprise Application",
    description:
      "An end-to-end supply chain management platform with real-time tracking and predictive analytics.",
    longDescription:
      "Built a comprehensive enterprise supply chain management system covering procurement, inventory, logistics, and supplier management. The platform features real-time inventory tracking, predictive demand forecasting, automated reorder points, and a supplier portal. Integrated with ERP and accounting systems for seamless data flow across the organization.",
    technologies: [
      "React",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Elasticsearch",
      "Redis",
      "Kubernetes",
      "AWS",
    ],
    metrics: [
      { label: "SKUs Tracked", value: "50,000+" },
      { label: "Inventory Cost", value: "-25%" },
      { label: "Order Accuracy", value: "99.8%" },
      { label: "Suppliers", value: "300+" },
    ],
    highlights: [
      "Real-time inventory tracking across multiple warehouses",
      "Predictive demand forecasting with ML models",
      "Automated procurement with smart reorder points",
      "Supplier portal with performance scoring",
      "Integration with SAP and Oracle ERP systems",
    ],
    year: "2022",
    role: "Lead Fullstack Developer",
  },
  {
    id: "regulatory-compliance-audit",
    title: "Regulatory Compliance Audit System",
    category: "Audit System",
    description:
      "A regulatory compliance platform automating compliance checks across multiple frameworks.",
    longDescription:
      "Developed a regulatory compliance audit system that automates compliance monitoring and reporting across multiple regulatory frameworks including SOX, GDPR, and ISO 27001. The system features automated control testing, continuous monitoring, gap analysis, and regulatory reporting with an evidence repository for audit readiness.",
    technologies: [
      "Next.js",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Docker",
      "AWS",
      "Terraform",
    ],
    metrics: [
      { label: "Frameworks", value: "6" },
      { label: "Automated Checks", value: "85%" },
      { label: "Compliance Rate", value: "98%" },
      { label: "Audit Prep Time", value: "-70%" },
    ],
    highlights: [
      "Multi-framework compliance monitoring (SOX, GDPR, ISO 27001)",
      "Automated control testing with continuous monitoring",
      "Gap analysis with remediation tracking",
      "Evidence repository with automated collection",
      "Regulatory reporting with customizable templates",
    ],
    year: "2021",
    role: "Technical Architect",
  },
];

export const projectCategories = [
  "All",
  "Enterprise Application",
  "Digital Transformation",
  "Audit System",
  "HRIS",
  "Fraud Detection",
] as const;
