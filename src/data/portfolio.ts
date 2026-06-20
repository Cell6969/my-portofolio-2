import type { PortfolioItem } from "@/types";

export const portfolioItems: PortfolioItem[] = [
  {
    id: "case-1",
    title: "Banking Digital Transformation",
    category: "Case Study",
    summary:
      "Transformed a traditional bank's legacy infrastructure into a modern digital platform serving 2M+ customers.",
    challenge:
      "A regional bank was struggling with a monolithic legacy system that couldn't scale to meet growing digital banking demands. Transaction processing was slow, deployment cycles took weeks, and the system couldn't integrate with modern fintech APIs.",
    solution:
      "Designed and implemented a microservices architecture with event-driven communication. Migrated critical services incrementally using the strangler fig pattern. Built an API gateway for seamless fintech integrations and implemented a CI/CD pipeline for rapid, reliable deployments.",
    outcome:
      "The transformation reduced transaction processing time by 70%, enabled daily deployments, and improved system availability to 99.99%. The bank launched 5 new digital products within the first year of transformation.",
    achievements: [
      "2M+ customers migrated with zero data loss",
      "70% reduction in transaction processing time",
      "99.99% system availability post-transformation",
      "5 new digital products launched in year one",
      "Daily deployment capability established",
    ],
    year: "2024",
  },
  {
    id: "case-2",
    title: "Enterprise Audit Automation",
    category: "Case Study",
    summary:
      "Automated audit processes for a Fortune 500 company, reducing audit cycle time by 45%.",
    challenge:
      "A multinational corporation's internal audit team was spending 60% of their time on manual evidence collection and report generation. Audit cycles took months, and maintaining compliance across multiple regulatory frameworks was becoming unsustainable.",
    solution:
      "Built a comprehensive audit management platform with automated evidence collection, risk-based audit planning, and real-time compliance monitoring. Integrated with existing ERP and financial systems to automate data gathering. Implemented customizable report templates and a collaborative review workflow.",
    outcome:
      "The platform reduced audit cycle time by 45%, automated 85% of evidence collection, and improved audit readiness. The audit team shifted from reactive to proactive, focusing on strategic risk advisory rather than manual data gathering.",
    achievements: [
      "45% reduction in audit cycle time",
      "85% of evidence collection automated",
      "SOX, GDPR, and ISO 27001 compliance monitoring",
      "1,200+ auditors onboarded across business units",
      "Audit preparation time reduced by 70%",
    ],
    year: "2023",
  },
  {
    id: "case-3",
    title: "HRIS Modernization Program",
    category: "Case Study",
    summary:
      "Modernized a legacy HRIS into a cloud-native platform, serving 5,000+ employees with 99.9% uptime.",
    challenge:
      "An organization's on-premise HRIS was slow, unreliable, and couldn't support remote work or self-service. HR teams were overwhelmed with manual requests, and employee satisfaction with HR services was at an all-time low.",
    solution:
      "Architected a cloud-native HRIS with microservices, built a self-service employee portal, and implemented automated workflows for common HR processes. Integrated payroll, leave management, and performance reviews into a unified platform with real-time analytics.",
    outcome:
      "The modernization reduced HR processing time by 60%, eliminated 70% of HR support tickets through self-service, and achieved 99.9% uptime. Employee satisfaction with HR services improved significantly.",
    achievements: [
      "5,000+ employees on the new platform",
      "60% reduction in HR processing time",
      "70% reduction in HR support tickets",
      "99.9% platform uptime achieved",
      "Multi-country payroll and tax compliance",
    ],
    year: "2023",
  },
  {
    id: "case-4",
    title: "Real-Time Fraud Prevention",
    category: "Case Study",
    summary:
      "Deployed a real-time fraud detection engine processing 8M+ transactions daily with 96.5% accuracy.",
    challenge:
      "A financial services company was experiencing increasing fraud losses with their rule-based detection system. The system had high false positive rates, causing customer friction, and couldn't adapt to new fraud patterns quickly enough.",
    solution:
      "Built a real-time fraud detection engine using ensemble machine learning models combining rule-based logic, anomaly detection, and behavioral analysis. Implemented a streaming architecture with Apache Kafka and Flink for sub-100ms transaction scoring. Created an investigation dashboard for fraud analysts with case management.",
    outcome:
      "The fraud detection engine achieved 96.5% detection rate while reducing false positives by 35%. The real-time scoring prevented $12M+ in fraudulent transactions in the first year.",
    achievements: [
      "8M+ transactions processed daily",
      "96.5% fraud detection rate",
      "35% reduction in false positives",
      "$12M+ fraud prevented in year one",
      "Sub-100ms transaction scoring latency",
    ],
    year: "2023",
  },
];
