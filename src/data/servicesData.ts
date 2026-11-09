export interface SubServiceData {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  badge?: string;
  desc: string;
  overview: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  featuresTitle?: string;
  features: Array<{ title: string; desc: string }>;
  deliveryScopeTitle?: string;
  deliveryScope?: Array<{ title: string; desc: string }>;
  benefitsTitle?: string;
  benefits: Array<{ title: string; metric?: string; desc: string }>;
  processTitle?: string;
  process: Array<{ step: string; title: string; desc: string }>;
  ctaBanner?: {
    headline: string;
    subheadline?: string;
    actionText: string;
    actionHref?: string;
  };
  image: string;
  customImage?: string; // Slot for user custom image
  customLogo?: string; // Product software logo
}

export const SUB_SERVICES_DATA: SubServiceData[] = [
  {
    slug: "sap-ams",
    title: "SAP AMS",
    badge: "24/7 PROACTIVE ENTERPRISE GOVERNANCE",
    category: "SAP",
    categorySlug: "sap",
    desc: "Transitioning from reactive IT troubleshooting to SLA-backed continuous SAP system optimization.",
    overview: "Acceleron delivers enterprise-grade SAP Managed Services tailored for high-volume, multi-location operations. Our certified SAP professionals ensure system stability, clear ticket backlogs, and optimize SAP module performance (FI/CO, MM, SD, PP, PM, EWM), backed by defined SLAs and a commitment to uninterrupted business operations.",
    primaryCtaText: "Consult with Our AMS Lead",
    primaryCtaHref: "/contact#form",
    secondaryCtaText: "View SLA Commitments",
    secondaryCtaHref: "#consultation",
    featuresTitle: "Core SAP Managed Services & Support Capabilities",
    features: [
      {
        title: "24/7 L1-L4 Incident & Ticket Resolution",
        desc: "Tool-based ITSM ticket governance covering functional issues, technical bugs, interface errors, and user access requests with strict resolution timelines."
      },
      {
        title: "Proactive SAP System Hygiene & Monitoring",
        desc: "Continuous monitoring of background jobs, database growth, Basis health checks, and memory utilization to prevent downtime before business impact occurs."
      },
      {
        title: "Support Package Stacks (SPS) & Patching",
        desc: "Routine implementation of SAP Notes, legal updates, GST patch releases, and system updates to keep your ERP secure and compliant."
      },
      {
        title: "Root-Cause Remediation & Process Optimization",
        desc: "Eliminating recurring module tickets across Finance, Supply Chain, Maintenance, and Sales through systematic root-cause analysis and workflow tuning."
      }
    ],
    benefitsTitle: "Business Value & Key Metrics Delivered",
    benefits: [
      {
        title: "Core ERP System Uptime",
        metric: "99.99%",
        desc: "Guaranteeing that plant operations, sales dispatch, and financial settlements operate without interruption."
      },
      {
        title: "Reduction in TCO",
        metric: "Up to 35%",
        desc: "Flexible onshore and nearshore delivery models that lower maintenance overhead while elevating service responsiveness."
      },
      {
        title: "Delivery Governance",
        metric: "Pre-packaged",
        desc: "Standardized SLAs, transparent ticketing metrics, and monthly executive health dashboards for CIOs and IT directors."
      },
      {
        title: "Module Coverage",
        metric: "FI/CO to EWM",
        desc: "Cross-functional support spanning production planning, logistics, materials, and financial accounting."
      }
    ],
    process: [
      { step: "01", title: "Transition & Shadowing", desc: "Knowledge transfer and documentation of custom ABAP objects, interfaces, and standard operating procedures." },
      { step: "02", title: "SLA Activation & Governance", desc: "Tool-based ITSM portal go-live, monitoring rule definition, and multi-tier escalation setup." },
      { step: "03", title: "Steady-State Support & Patching", desc: "Daily ticket resolution, weekly maintenance, support package stack (SPS) releases, and legal patches." },
      { step: "04", title: "Continuous Optimization", desc: "Systematic root-cause remediation, recurring bug elimination, and monthly executive dashboard reviews." }
    ],
    ctaBanner: {
      headline: "Ready to Elevate Your SAP Support Governance?",
      subheadline: "Schedule a complimentary SAP AMS health audit with our senior Basis and functional leads today.",
      actionText: "Consult with Our AMS Lead",
      actionHref: "/contact"
    },
    image: "/sap/sap ams.png"
  },
  {
    slug: "sap-s-4hana-implementation",
    title: "SAP S/4HANA Implementation",
    badge: "NEXT-GENERATION ENTERPRISE ERP",
    category: "SAP",
    categorySlug: "sap",
    desc: "Modernize core enterprise operations with minimal business disruption and maximum operational impact.",
    overview: "Acceleron transitions industrial and commercial enterprises to SAP S/4HANA using domain-aware process design and proprietary migration accelerators. As your trusted SAP technology consultant, we bridge legacy operational realities with real-time financial visibility, intelligent procurement, and integrated supply chain management.",
    primaryCtaText: "Explore S/4HANA Roadmaps",
    primaryCtaHref: "/contact#form",
    secondaryCtaText: "Download AccelSuite Framework",
    secondaryCtaHref: "#consultation",
    featuresTitle: "Proprietary Delivery Accelerators: AccelSuite",
    features: [
      {
        title: "60+ Best-Practice Process Flow Diagrams",
        desc: "Pre-engineered flowcharts, FDS, and test scripts built specifically for heavy manufacturing, mining, and capital goods industries."
      },
      {
        title: "50+ Key Decision Design (KDD) Split Documents",
        desc: "Standardized architectural design blueprints that accelerate blueprinting across Finance, Procurement, Sales, and Plant Maintenance."
      },
      {
        title: "100+ Customizing Worksheets & 200+ User Requirements",
        desc: "Pre-mapped requirement templates ensuring audit-ready blueprint validation from day one."
      },
      {
        title: "LLM-Powered AI Swarm Agents",
        desc: "AI Swarm architecture (Discover, Developer, and Decision Agents) that analyzes legacy custom code (RICEFW) to execute S/4HANA migration up to 30% faster."
      }
    ],
    deliveryScopeTitle: "Flexible Migration Methodologies",
    deliveryScope: [
      {
        title: "Greenfield Implementation",
        desc: "Complete process re-engineering on S/4HANA standard best practices for organizations seeking a clean slate."
      },
      {
        title: "Brownfield System Conversion",
        desc: "Rapid technical conversion preserving historical transactional data, custom ABAP code, and existing business logic."
      },
      {
        title: "Bluefield Selective Data Transition",
        desc: "Hybrid approach isolating core master data, company codes, and split entity structures for phased migration."
      }
    ],
    benefitsTitle: "Business Value & Key Metrics Delivered",
    benefits: [
      { title: "Faster Migration", metric: "Up to 30%", desc: "Accelerated delivery using LLM-powered AI Swarm agents and pre-engineered AccelSuite templates." },
      { title: "Process Diagrams", metric: "60+", desc: "Pre-engineered best practice workflows for manufacturing, mining, and capital goods." },
      { title: "KDD Blueprints", metric: "50+", desc: "Standardized Key Decision Design split documents across core modules." },
      { title: "Data Simplification", metric: "Audit-Ready", desc: "Clean financial core and optimized master data structures with real-time analytics." }
    ],
    process: [
      { step: "01", title: "Readiness Check & Sandbox", desc: "Assessment of custom code, data volume management, and sandbox technical conversion." },
      { step: "02", title: "AccelSuite Blueprinting", desc: "Leveraging 60+ process flowcharts and 50+ KDD documents for rapid blueprint validation." },
      { step: "03", title: "AI Swarm Code Remediation", desc: "Automated RICEFW modernization, Fiori UX configuration, and end-to-end integration testing." },
      { step: "04", title: "Cutover & Hypercare", desc: "Near-zero downtime cutover execution, user training, and dedicated post-launch hypercare." }
    ],
    ctaBanner: {
      headline: "Plan Your Low-Risk SAP S/4HANA Transformation",
      subheadline: "Talk to an Acceleron Lead SAP Architect today.",
      actionText: "Explore S/4HANA Roadmaps",
      actionHref: "/contact"
    },
    image: "/sap/SAP S4 HANA - Acceleron Solutions.png",
    customLogo: "/sap_s4hana-transparentbg.png"
  },
  {
    slug: "sap-integration",
    title: "SAP Integration",
    badge: "ENTERPRISE ECOSYSTEM CONNECTIVITY",
    category: "SAP",
    categorySlug: "sap",
    desc: "Seamless cloud and hybrid integrations powered by SAP Business Technology Platform (BTP) and Cloud Platform Integration (CPI).",
    overview: "Secure, high-throughput middleware connectors integrate SAP S/4HANA with third-party software, cloud applications and shop-floor hardware. Enabling real-time data exchange across SAP, Salesforce, Zoho, e-commerce platforms and industrial systems, these integrations eliminate data silos and streamline operations.",
    primaryCtaText: "Schedule an Integration Assessment",
    primaryCtaHref: "/contact#form",
    secondaryCtaText: "Explore Integration Patterns",
    secondaryCtaHref: "#consultation",
    featuresTitle: "End-to-End Enterprise Integration Capabilities",
    features: [
      {
        title: "Salesforce & Zoho CRM to SAP Integration",
        desc: "Automating bi-directional Lead-to-Cash, Quote-to-Order, and customer master sync between CRM platforms and SAP SD/FI."
      },
      {
        title: "Banking & E-Invoicing API Connectors",
        desc: "Direct API integrations with corporate banking portals, payment gateways, GST e-invoicing networks, and MSME 3-way matching systems."
      },
      {
        title: "Industrial IoT & Weighbridge Connectors",
        desc: "Connecting plant machinery, automated weighbridges, fleet GPS sensors, and CCTV analytics directly to SAP Plant Maintenance (PM) and Materials Management (MM)."
      },
      {
        title: "Custom REST/SOAP Microservices",
        desc: "Building lightweight, scalable BTP microservices to connect custom web portals and mobile apps with SAP ECC or S/4HANA backends."
      }
    ],
    deliveryScopeTitle: "Integration Scope & Core Benefits",
    deliveryScope: [
      {
        title: "Zero Manual Data Re-entry",
        desc: "Eliminating human error in sales order creation, inventory adjustments, and vendor invoice logging."
      },
      {
        title: "Real-Time Inventory Visibility",
        desc: "Synchronizing SAP inventory management data across multi-site warehouses, distribution centers, and digital sales channels."
      }
    ],
    benefitsTitle: "Integration Benefits & Value",
    benefits: [
      { title: "Manual Data Entry", metric: "Zero", desc: "Automated real-time synchronization eliminating transcription errors." },
      { title: "Inventory Visibility", metric: "Real-Time", desc: "Instant stock levels mapped across warehouses and dealer channels." },
      { title: "API Throughput", metric: "High-Speed", desc: "Scalable BTP CPI microservices engineered for peak transactional volumes." },
      { title: "Security Standards", metric: "Bank-Grade", desc: "Encrypted payload transmission and tokenized OAuth 2.0 API governance." }
    ],
    process: [
      { step: "01", title: "Ecosystem Mapping", desc: "Cataloging all disparate endpoints, payload protocols, and security requirements." },
      { step: "02", title: "Middleware Architecture", desc: "Configuring SAP BTP CPI flows, API gateways, and automated retry mechanisms." },
      { step: "03", title: "Connector Development", desc: "Building bi-directional connectors for CRM, banking, IoT, and custom portals." },
      { step: "04", title: "Validation & 24/7 Monitoring", desc: "End-to-end payload validation, load testing, and transition to managed integration queues." }
    ],
    ctaBanner: {
      headline: "Connect Your Disparate Enterprise Applications",
      subheadline: "Speak with Acceleron Integration Specialists today.",
      actionText: "Schedule an Integration Assessment",
      actionHref: "/contact"
    },
    image: "/sap/SAP Cloud Integration - Acceleron Solutions.png",
    customLogo: "/sap-cx-logo.jpg"
  },
  {
    slug: "rise-with-s-4hana-implementation",
    title: "RISE with S/4HANA Implementation",
    badge: "BUSINESS TRANSFORMATION AS A SERVICE",
    category: "SAP",
    categorySlug: "sap",
    desc: "One consolidated transformation package combining S/4HANA Cloud, infrastructure, and process intelligence.",
    overview: "Acceleron guides global enterprises through a structured, low-risk journey to RISE with SAP. As an experienced SAP advisory consultant, we manage the entire lifecycle—from initial cloud readiness assessments and licensing optimization to business process re-engineering (Signavio) and post-go-live hypercare.",
    primaryCtaText: "Request a RISE Readiness Assessment",
    primaryCtaHref: "/contact#form",
    secondaryCtaText: "Book Executive Briefing",
    secondaryCtaHref: "#consultation",
    featuresTitle: "Core Value Pillars of RISE with SAP",
    features: [
      {
        title: "Single Accountability & SLA",
        desc: "Unified cloud infrastructure, software maintenance, and system governance delivered under SAP's premier cloud model."
      },
      {
        title: "Business Process Intelligence (Signavio)",
        desc: "Analyzing existing SAP ECC process flows to identify operational bottlenecks and standardize workflows before cloud migration."
      },
      {
        title: "Clean Core Architectural Strategy",
        desc: "Keeping the core S/4HANA system standardized while building custom extensions and side-by-side apps on SAP BTP."
      },
      {
        title: "Automated Code Remediation",
        desc: "Scanning custom ABAP and RICEFW objects with automated tools to ensure smooth hyperscaler cutover."
      }
    ],
    deliveryScopeTitle: "Core Transformation Pillars",
    deliveryScope: [
      {
        title: "Single Accountability & SLA",
        desc: "Unified cloud infrastructure, software maintenance, and system governance delivered under SAP's premier cloud model."
      },
      {
        title: "Business Process Intelligence (Signavio)",
        desc: "Analyzing existing SAP ECC process flows to identify operational bottlenecks and standardize workflows before cloud migration."
      },
      {
        title: "Clean Core Architectural Strategy",
        desc: "Keeping the core S/4HANA system standardized while building custom extensions and side-by-side apps on SAP BTP."
      }
    ],
    benefitsTitle: "Business Transformation Value",
    benefits: [
      { title: "Accountability", metric: "Single SLA", desc: "Unified infrastructure, software maintenance, and system governance." },
      { title: "Process Clarity", metric: "Signavio", desc: "Pre-migration process intelligence identifying shop-floor bottlenecks." },
      { title: "Architectural Agility", metric: "Clean Core", desc: "Standard core with custom apps decoupled onto SAP BTP." },
      { title: "Continuous Innovation", metric: "Bi-Annual", desc: "Regular feature upgrades with embedded AI and Joule agent deployments." }
    ],
    process: [
      { step: "01", title: "Readiness & TCO Discovery", desc: "Evaluating current customization levels, database footprint, and hyperscaler preferences (AWS/Azure/GCP)." },
      { step: "02", title: "Process Redesign & Blueprinting", desc: "Mapping business processes to SAP Best Practices and eliminating technical debt." },
      { step: "03", title: "Migration Execution & Cutover", desc: "Executing automated code remediation and database migration with near-zero downtime." },
      { step: "04", title: "Continuous Innovation", desc: "Deploying SAP Analytics Cloud (SAC) and AI agents for continuous business value." }
    ],
    ctaBanner: {
      headline: "Transform Your Business Operating Model with RISE with SAP",
      subheadline: "Contact Acceleron Advisory Leads today.",
      actionText: "Request a RISE Readiness Assessment",
      actionHref: "/contact"
    },
    image: "/sap/RISE with SAP S4 HANA - Acceleron Solutions.png",
    customLogo: "/vital-wires-Rise-with-SAP-3.png"
  },
  {
    slug: "sap-migration-to-cloud",
    title: "SAP Migration to Cloud",
    badge: "SECURE HYPERSCALER MIGRATION",
    category: "SAP",
    categorySlug: "sap",
    desc: "Transitioning complex on-premise SAP ECC and S/4HANA workloads to high-availability public and hybrid cloud environments.",
    overview: "Acceleron migrates enterprise-scale, multi-terabyte SAP environments from legacy on-premise datacenters to hyperscaler clouds (AWS, Azure, GCP). Our cloud architects enforce zero-trust security, build automated disaster recovery (DR) protocols, and optimize compute spend to deliver agility and enterprise security.",
    primaryCtaText: "Evaluate Cloud Infrastructure",
    primaryCtaHref: "/contact#form",
    secondaryCtaText: "Download Cloud ROI Guide",
    secondaryCtaHref: "#consultation",
    featuresTitle: "Why Acceleron for SAP Cloud Migration?",
    features: [
      {
        title: "Proven Multi-Hyperscaler Expertise",
        desc: "Deep architecture partnerships across AWS, Azure, and private cloud providers with certified engineers."
      },
      {
        title: "Uncompromised Security & Compliance",
        desc: "Ensuring ISO 27001, SOC 2, and regional data residency compliance across all cloud environments."
      },
      {
        title: "Zero-Downtime Replication",
        desc: "Advanced data replication ensuring business continuity during production database cutover."
      },
      {
        title: "FinOps Compute Optimization",
        desc: "Right-sizing HANA memory compute and storage tiers to drive maximum infrastructure cost efficiencies."
      }
    ],
    deliveryScopeTitle: "Key Value Pillars",
    deliveryScope: [
      {
        title: "Proven Multi-Hyperscaler Expertise",
        desc: "Deep architecture partnerships across AWS, Azure, and private cloud providers."
      },
      {
        title: "Uncompromised Security & Compliance",
        desc: "Ensuring ISO 27001, SOC 2, and regional data residency compliance across all cloud environments."
      }
    ],
    benefitsTitle: "Delivered Cloud Performance",
    benefits: [
      { title: "System Availability", metric: "99.99%", desc: "High-availability multi-zone deployment with automated disaster recovery." },
      { title: "TCO Savings", metric: "Up to 30%", desc: "Lower monthly compute spend through FinOps right-sizing and reserved instances." },
      { title: "Cutover Window", metric: "Near-Zero", desc: "Parallel replication ensuring seamless weekend transition without business disruption." },
      { title: "Provisioning Speed", metric: "10x Faster", desc: "Instant deployment of test sandboxes, training environments, and developer instances." }
    ],
    process: [
      { step: "01", title: "Assessment & FinOps Blueprinting", desc: "Analyzing database size, HANA memory requirements, cloud architecture, and total cost of ownership (TCO) savings." },
      { step: "02", title: "Landing Zone Architecture & Security", desc: "Configuring zero-trust virtual private clouds (VPCs), IAM roles, automated backup schedules, and active-active DR sites." },
      { step: "03", title: "Near-Zero Downtime Cutover", desc: "Executing parallel data replication and cutover scripts to migrate production databases over weekends with zero business downtime." },
      { step: "04", title: "Post-Migration FinOps Right-Sizing", desc: "Continuously monitoring cloud resource consumption to eliminate over-provisioning and optimize monthly infrastructure costs." }
    ],
    ctaBanner: {
      headline: "Ready to Transition Your SAP Landscape to the Cloud?",
      subheadline: "Speak with Acceleron Cloud Architects today.",
      actionText: "Evaluate Cloud Infrastructure",
      actionHref: "/contact"
    },
    image: "/sap/SAP Migration to Cloud - Acceleron Solutions.png"
  },
  {
    slug: "sap-custom-development",
    title: "SAP Custom Development",
    badge: "TAILORED ERP INNOVATION & ANALYTICS",
    category: "SAP",
    categorySlug: "sap",
    desc: "Extend SAP S/4HANA Capabilities with Fiori, SAC & AI — Transforming complex SAP transactional data into intuitive mobile workflows and executive decision dashboards.",
    overview: "Acceleron builds enterprise-grade custom extensions on SAP Business Technology Platform (BTP) using the ABAP RESTful Application Programming (RAP) model and Cloud Application Programming (CAP) model. From intuitive, role-based SAP Fiori mobile apps to SAP Analytics Cloud (SAC) predictive dashboards, we modernize user experiences without touching the core ERP.",
    primaryCtaText: "Explore Custom Capabilities",
    primaryCtaHref: "/contact#form",
    secondaryCtaText: "Schedule Fiori & SAC Demo",
    secondaryCtaHref: "#consultation",
    featuresTitle: "Custom Development & Analytics Capabilities",
    features: [
      {
        title: "SAP Fiori Mobile & Web Mobilization",
        desc: "Designing responsive, role-based Fiori apps for shop-floor inventory checks, purchase approvals, plant maintenance orders, and field service management."
      },
      {
        title: "SAP Analytics Cloud (SAC) Dashboards",
        desc: "Building real-time executive dashboards combining financial forecasting, supply chain KPIs, plant utilization, and sales pipeline analytics."
      },
      {
        title: "AI Swarm Code Modernization",
        desc: "Refactoring legacy custom ABAP code (RICEFW) to S/4HANA-compliant Clean Core standards up to 30% faster using LLM AI Swarms."
      },
      {
        title: "BTP Side-by-Side App Development",
        desc: "Creating standalone web applications and custom logic on BTP that interface seamlessly with SAP backends."
      }
    ],
    deliveryScopeTitle: "Business Impact & Delivered Value",
    deliveryScope: [
      {
        title: "Higher User Adoption",
        desc: "Consumer-grade Fiori interfaces that eliminate user friction and training bottlenecks."
      },
      {
        title: "Real-Time Decision Intelligence",
        desc: "C-suite dashboards that deliver instant visibility into P&L performance, COGS, and working capital."
      }
    ],
    benefitsTitle: "Business Impact & Metrics",
    benefits: [
      { title: "User Adoption", metric: "Consumer-Grade", desc: "Intuitive Fiori interfaces that eliminate training bottlenecks and accelerate daily operational approvals." },
      { title: "Decision Intelligence", metric: "Real-Time", desc: "C-suite dashboards that deliver instant visibility into P&L performance, COGS, and working capital." },
      { title: "Clean Core Code", metric: "BTP RAP/CAP", desc: "Decoupled side-by-side extensions ensuring zero modification to the underlying SAP ERP core." },
      { title: "Refactoring Speed", metric: "Up to 30% Faster", desc: "LLM-powered AI Swarm agents accelerating custom code modernization to S/4HANA standards." }
    ],
    process: [
      { step: "01", title: "UX & Analytics Discovery", desc: "Mapping shop-floor workflows, user personas, and executive KPI reporting requirements." },
      { step: "02", title: "Clean Core Architecture", desc: "Selecting ABAP RAP or CAP models and setting up BTP development environments." },
      { step: "03", title: "Agile Development & AI Swarm Refactoring", desc: "Sprint-based creation of responsive Fiori apps, SAC data models, and automated code conversion." },
      { step: "04", title: "Deployment & User Enablement", desc: "Rollout across mobile and web with role-based Fiori launchpads and user training." }
    ],
    ctaBanner: {
      headline: "Unlock Greater Value from Your SAP Landscape",
      subheadline: "Schedule a Fiori & SAC Session with Acceleron.",
      actionText: "Explore Custom Capabilities",
      actionHref: "/contact"
    },
    image: "/sap/SAP Custom Development - Acceleron Solutions.png",
    customLogo: "/Sap_analytics-cloud.png"
  },
  {
    slug: "sap-technical-upgrade",
    title: "SAP Technical Upgrade",
    badge: "SYSTEM MODERNIZATION & SECURITY",
    category: "SAP",
    categorySlug: "sap",
    desc: "Keep Your SAP Environment Secure, Compliant, and Feature-Rich — Version upgrades, Enhancement Pack (EHP) execution, Support Package Stack (SPS) patching, and HANA database updates.",
    overview: "Acceleron performs end-to-end technical upgrades for SAP ECC and S/4HANA landscapes. As an experienced SAP IT consulting provider, we ensure your core enterprise platform stays protected against security vulnerabilities, maintains compliance with changing tax regulations (GST/e-invoicing), and takes advantage of newly released SAP features.",
    primaryCtaText: "Schedule Technical Upgrade Audit",
    primaryCtaHref: "/contact#form",
    secondaryCtaText: "View Upgrade Scope",
    secondaryCtaHref: "#consultation",
    featuresTitle: "Comprehensive Upgrade Scope",
    features: [
      {
        title: "SAP EHP & Version Upgrades",
        desc: "Upgrading SAP ECC EHPs and migrating to the latest S/4HANA release versions with minimal downtime."
      },
      {
        title: "SAP HANA Database Upgrades",
        desc: "Upgrading underlying SAP HANA DB versions, optimizing column-store memory, and tuning query execution performance."
      },
      {
        title: "Custom Code Adjustment (SPAU/SPDD)",
        desc: "Automated conflict resolution during upgrade cutover to ensure custom programs, forms, and interfaces remain fully functional."
      },
      {
        title: "System Security & Compliance Patching",
        desc: "Applying latest SAP Security Notes, kernel patches, and statutory tax localization updates."
      }
    ],
    deliveryScopeTitle: "Acceleron Upgrade Advantage",
    deliveryScope: [
      {
        title: "Zero Business Interruption",
        desc: "Phased weekend cutover strategies that ensure zero operational impact on plant or commercial activities."
      },
      {
        title: "Automated Regression Testing",
        desc: "Pre-built testing scripts that validate core business flows before production go-live."
      }
    ],
    benefitsTitle: "Technical Upgrade Value",
    benefits: [
      { title: "Operational Continuity", metric: "Zero Downtime", desc: "Phased weekend cutover strategies guaranteeing zero disruption to manufacturing, dispatch, and billing." },
      { title: "Regression Testing", metric: "Automated", desc: "Pre-engineered test suites validating end-to-end financial and supply chain transactions." },
      { title: "Statutory Compliance", metric: "100% Audit-Ready", desc: "Up-to-date GST patches, e-invoicing endpoints, and regulatory compliance." },
      { title: "HANA Optimization", metric: "High Performance", desc: "Memory compression and query tuning maximizing underlying SAP HANA database speeds." }
    ],
    process: [
      { step: "01", title: "Landscape Assessment & Audit", desc: "Evaluating current release levels, hardware sizing, OS/DB compatibility, and custom code footprint." },
      { step: "02", title: "Sandbox Upgrade & Conflict Resolution", desc: "Executing test upgrade, running SPAU/SPDD code adjustments, and verifying interfaces." },
      { step: "03", title: "Automated Regression Testing", desc: "Validating critical business flows across all modules with pre-engineered test suites." },
      { step: "04", title: "Weekend Production Cutover", desc: "Seamless weekend cutover, final delta synchronization, and post-upgrade hypercare." }
    ],
    ctaBanner: {
      headline: "Ensure Your SAP Systems Are Up to Date and Compliant",
      subheadline: "Request an Upgrade Assessment today.",
      actionText: "Schedule Technical Upgrade Audit",
      actionHref: "/contact"
    },
    image: "/sap/SAP Technical Upgrade - Acceleron solutions.png",
    customLogo: "/SAP-s4hana-whitebg.jpg"
  },
  {
    slug: "sap-resource-augmentation",
    title: "SAP Resource Augmentation",
    badge: "ON-DEMAND ENTERPRISE TALENT",
    category: "SAP",
    categorySlug: "sap",
    desc: "Certified SAP Professionals to Scale Your Project Delivery — Immediate deployment of experienced SAP architects, functional consultants, and technical developers.",
    overview: "Acceleron offers flexible, high-caliber SAP resource augmentation for enterprise IT departments and global system integrators. Our talent pool of certified SAP professionals brings deep hands-on expertise in manufacturing, mining, logistics, capital goods, and utilities to support critical rollout phases, custom developments, or specialized module implementations.",
    primaryCtaText: "Request Talent Profiles",
    primaryCtaHref: "/contact#form",
    secondaryCtaText: "Discuss Resource Needs",
    secondaryCtaHref: "#consultation",
    featuresTitle: "Domain-Experienced Talent Matrix Available",
    features: [
      {
        title: "SAP Functional Lead Consultants",
        desc: "Certified experts across FI/CO, MM, SD, PP, PM, QM, EWM, and SAC with 8+ years of industry experience."
      },
      {
        title: "SAP Technical Architects & Developers",
        desc: "Senior ABAP, ABAP RAP, SAP BTP Integration, Fiori/UI5, and Basis/HANA administration specialists."
      },
      {
        title: "Flexible Deployment Engagement Models",
        desc: "Onshore, nearshore, or hybrid staffing on monthly, project-based, or time-and-material (T&M) arrangements."
      },
      {
        title: "Specialized Module Leads",
        desc: "Niche specialists in SAP EWM, BTP CPI, Signavio process mining, and Joule AI agent workflows."
      }
    ],
    deliveryScopeTitle: "Why Staff Through Acceleron?",
    deliveryScope: [
      {
        title: "Industrial Domain Rigor",
        desc: "Consultants backed by Gainwell Group's real-world plant and operational heritage."
      },
      {
        title: "Rapid Onboarding (Under 10 Days)",
        desc: "Pre-vetted, immediately deployable experts ready to integrate into your existing project governance."
      }
    ],
    benefitsTitle: "Staffing & Augmentation Impact",
    benefits: [
      { title: "Rapid Deployment", metric: "<10 Days", desc: "Pre-vetted, senior SAP professionals onboarded and deployed into active projects in days." },
      { title: "Domain Experience", metric: "8+ Years Avg", desc: "Specialists with hands-on industrial expertise across manufacturing, mining, and capital goods." },
      { title: "Engagement Agility", metric: "Flexible Models", desc: "Monthly retainers, milestone-based staff, or time-and-material options matching project velocity." },
      { title: "Zero Ramp-up Friction", metric: "Immediate", desc: "Domain-fluent architects who understand shop-floor mechanics and enterprise IT governance." }
    ],
    process: [
      { step: "01", title: "Talent Requirement Scoping", desc: "Identifying required module skills, seniority level, project timelines, and delivery model." },
      { step: "02", title: "Profile Shortlisting & Review", desc: "Submitting pre-vetted consultant profiles within 48 to 72 business hours." },
      { step: "03", title: "Interview & Onboarding", desc: "Streamlined technical evaluation, NDA execution, and day-one access provisioning." },
      { step: "04", title: "Governance & Oversight", desc: "Regular delivery reviews, SLA governance, and continuous capability oversight." }
    ],
    ctaBanner: {
      headline: "Scale Your SAP Implementation Team with Proven Experts",
      subheadline: "Connect with Acceleron Staffing Leads today.",
      actionText: "Request Talent Profiles",
      actionHref: "/contact"
    },
    image: "/sap/SAP Resource Augmentation - Acceleron Solutions.png"
  },
  {
    slug: "audit-comply",
    title: "AuditComply: Automated SAP Compliance & SoD Governance",
    badge: "PROPRIETARY SAP GOVERNANCE IP",
    category: "SAP",
    categorySlug: "sap",
    desc: "Automated SAP Compliance, SoD Auditing, and Internal Controls — One-click audit readiness and internal risk governance for SAP ECC and S/4HANA environments.",
    overview: "Acceleron's proprietary AuditComply solution automates Segregation of Duties (SoD) checking, IT General Controls (ITGC) monitoring, and Indian statutory compliance within SAP. Developed to eliminate manual audit friction, AuditComply gives CFOs, CISOs, and internal auditors continuous visibility into access conflicts, vendor 3-way matching, and statutory tax risks.",
    primaryCtaText: "Schedule an AuditComply Demo",
    primaryCtaHref: "/contact#form",
    secondaryCtaText: "Download Product Brochure",
    secondaryCtaHref: "#consultation",
    featuresTitle: "Core Capabilities of AuditComply",
    features: [
      {
        title: "Segregation of Duties (SoD) Conflict Analysis",
        desc: "Automated, real-time user role conflict detection across financial posting, procurement authorization, and vendor master creation."
      },
      {
        title: "Statutory & Tax Compliance Automation",
        desc: "Automated GST portal reconciliation, e-way bill validation, e-invoicing verification, and MSME vendor payment block tracking."
      },
      {
        title: "1-Click Executive Audit Reports",
        desc: "Generating comprehensive ITGC, user access log, and internal control registers ready for internal and external board audits."
      },
      {
        title: "Vendor 3-Way Match & Risk Alerts",
        desc: "Continuous monitoring of Purchase Orders, Goods Receipt (GR), and Vendor Invoice (IR) variances with automated escalation blocks."
      }
    ],
    deliveryScopeTitle: "Business Benefits & Risk Mitigation",
    deliveryScope: [
      {
        title: "80% Reduction in Audit Preparation Time",
        desc: "Eliminating manual spreadsheet reconciliation before external audit reviews."
      },
      {
        title: "Zero Penalty Tax Compliance",
        desc: "Ensuring 100% compliance with statutory e-invoicing and MSME payment guidelines."
      }
    ],
    benefitsTitle: "AuditComply Value Delivered",
    benefits: [
      { title: "Audit Prep Time", metric: "80% Reduction", desc: "Eliminating manual spreadsheet reconciliation and evidence collection before external audits." },
      { title: "Tax Compliance", metric: "Zero Penalties", desc: "Automated GST reconciliation, e-way bill verification, and MSME 45-day payment tracking." },
      { title: "SoD Visibility", metric: "100% Real-Time", desc: "Continuous monitoring of conflicting t-codes and authorization role combinations." },
      { title: "Executive Reporting", metric: "1-Click", desc: "Instant export of ITGC registers, access violation histories, and mitigation logs for the Board." }
    ],
    process: [
      { step: "01", title: "Quick Plugin Deployment", desc: "Lightweight installation into SAP ECC or S/4HANA with zero disruption to active database tables." },
      { step: "02", title: "Rule Matrix Customization", desc: "Configuring standard and industry-specific SoD rules, statutory thresholds, and approval matrices." },
      { step: "03", title: "Automated Baseline Scan", desc: "Executing initial landscape scan to surface existing role conflicts, ITGC gaps, and vendor variances." },
      { step: "04", title: "Continuous Governance & Reporting", desc: "Activating automated alerts, scheduled 1-click reports, and continuous statutory compliance monitoring." }
    ],
    ctaBanner: {
      headline: "Eliminate SAP Compliance Risks & Audit Bottlenecks",
      subheadline: "Request an AuditComply Executive Session today.",
      actionText: "Schedule an AuditComply Demo",
      actionHref: "/contact"
    },
    image: "/sap/SAP Autonomous Enterprise - Acceleron solutions.png",
    customLogo: "/sap_s4hana-transparentbg.png"
  },
  {
    slug: "zoho-crm",
    title: "Zoho CRM",
    badge: "ZOHO ADVANCED PARTNER",
    category: "Zoho",
    categorySlug: "zoho",
    desc: "Unified customer relationship management to drive sales and lasting relationships.",
    overview: "Unified customer relationship management to drive sales and lasting relationships. As a Zoho Advanced Partner, Acceleron customizes and integrates Zoho CRM with enterprise ERPs and omnichannel communications, helping sales teams convert prospects, manage deals and accelerate growth.",
    primaryCtaText: "Talk to Our Zoho Experts",
    primaryCtaHref: "/contact#form",
    secondaryCtaText: "Schedule CRM Demo",
    secondaryCtaHref: "#consultation",
    featuresTitle: "Core Capabilities & Features",
    features: [
      {
        title: "Lead Management & Tracking",
        desc: "Centralizes all lead data, streamlines lead capture across web/forms, and transforms prospects into measurable business growth."
      },
      {
        title: "Sales Automation & Follow-ups",
        desc: "Automates follow-up emails, task creation, lead scoring, and lead nurturing workflows to increase conversion rates."
      },
      {
        title: "Pipeline & Deal Visibility",
        desc: "Real-time pipeline tracking, deal stage management, quota tracking, and sales performance forecasting."
      },
      {
        title: "Integrated Sales Suite",
        desc: "Native integration with Zoho Bigin, Zoho Forms, Zoho Sign, Zoho Bookings, and Zoho SalesIQ for live visitor chat."
      }
    ],
    deliveryScopeTitle: "Implementation & Support Scope",
    deliveryScope: [
      {
        title: "Implementation & Customization",
        desc: "Bespoke pipeline configuration, field customization, workflow rule setup, and legacy CRM data migration."
      },
      {
        title: "AMS & Post-Go-Live Support",
        desc: "Ongoing Application Maintenance Services (AMS), user role governance, and performance optimization."
      }
    ],
    benefitsTitle: "Business Value & Sales Impact",
    benefits: [
      { title: "Sales Velocity", metric: "+40%", desc: "Faster sales cycles and automated follow-ups." },
      { title: "Lead Conversion", metric: "+25%", desc: "Centralized lead scoring and prompt pipeline tracking." },
      { title: "Data Accuracy", metric: "100%", desc: "Single source of truth across leads, quotes, and customer accounts." },
      { title: "Omnichannel Sync", metric: "Real-Time", desc: "Integrated web forms, digital signatures, and live visitor engagement." }
    ],
    process: [
      { step: "01", title: "Sales Funnel Discovery", desc: "Mapping customer journey touchpoints, sales stages, and legacy data structures." },
      { step: "02", title: "Bespoke Configuration", desc: "Setting up custom modules, validation rules, assignment criteria, and automated blueprints." },
      { step: "03", title: "Migration & Integration", desc: "Migrating historical contacts/deals and connecting Zoho Forms, Sign, and SalesIQ." },
      { step: "04", title: "User Enablement & AMS", desc: "Hands-on sales team training, launch hypercare, and ongoing SLA-backed support." }
    ],
    ctaBanner: {
      headline: "Ready to Accelerate Your Sales Operations?",
      subheadline: "Consult with our certified Zoho CRM architects to design an automated lead-to-cash pipeline.",
      actionText: "Talk to Our Zoho Experts",
      actionHref: "/contact"
    },
    image: "/ZOHO_CRM_Banner.png",
    customLogo: "/Zoho_CRM_application.svg_.png"
  },
  {
    slug: "zoho-books",
    title: "Zoho Books",
    badge: "FINANCIAL MANAGEMENT & GST COMPLIANCE",
    category: "Zoho",
    categorySlug: "zoho",
    desc: "Smart, automated online accounting software for growing businesses.",
    overview: "Smart, automated online accounting software for growing businesses. Acceleron delivers end-to-end accounting setup, automated billing, multi-currency cash flow tracking, and seamless GST/e-invoicing compliance, bridging front-office sales with backend financial controls.",
    primaryCtaText: "Consult Accounting Leads",
    primaryCtaHref: "/contact#form",
    secondaryCtaText: "View Accounting Scope",
    secondaryCtaHref: "#consultation",
    featuresTitle: "Core Capabilities & Features",
    features: [
      {
        title: "Financial Control & Accounting",
        desc: "Smart online accounting platform providing end-to-end financial control, general ledger management, and cash flow tracking."
      },
      {
        title: "Invoicing & Billing Automation",
        desc: "Custom invoice creation, automated recurring billing, integration with Zoho Expense, Zoho Invoice, Zoho Checkout, and Zoho Billing."
      },
      {
        title: "GST & Tax Compliance",
        desc: "GST-compliant tax calculations, e-invoicing generation, audit-ready financial reporting, and statutory tax readiness."
      },
      {
        title: "Bank Reconciliation & Financial Insights",
        desc: "Automated bank feed reconciliation, multi-currency accounting, accounts receivable/payable tracking, and real-time financial dashboards."
      }
    ],
    deliveryScopeTitle: "Implementation & Support Scope",
    deliveryScope: [
      {
        title: "Chart of Accounts Setup",
        desc: "Configuring organizational chart of accounts, tax templates, and opening balance reconciliation."
      },
      {
        title: "ERP & SAP Integration",
        desc: "Connecting Zoho Books with enterprise ERP systems, bank gateways, and custom inventory databases."
      }
    ],
    benefitsTitle: "Financial Impact Delivered",
    benefits: [
      { title: "Billing Efficiency", metric: "+50%", desc: "Automate recurring transactions and reduce manual bookkeeping." },
      { title: "Payment Collection", metric: "2x Faster", desc: "Get paid quicker with integrated payment gateways." },
      { title: "Financial Visibility", metric: "Real-Time", desc: "Instant access to critical financial metrics and reports." },
      { title: "Tax Compliance", metric: "100%", desc: "Stay compliant with local tax regulations and audit trails." }
    ],
    process: [
      { step: "01", title: "Financial Assessment", desc: "Understand your accounting processes, chart of accounts, and tax requirements." },
      { step: "02", title: "Setup & Configuration", desc: "Configure taxes, banking feeds, opening balances, and custom invoice templates." },
      { step: "03", title: "ERP & Gateway Integration", desc: "Securely connect banking gateways, payment links, and enterprise ERP sync." },
      { step: "04", title: "Finance Team Enablement", desc: "Train your accounting team on daily operations, closing routines, and compliance reports." }
    ],
    ctaBanner: {
      headline: "Modernize Your Enterprise Accounting & Compliance",
      subheadline: "Schedule a financial workflow consultation with our certified Zoho Books specialists.",
      actionText: "Consult Accounting Leads",
      actionHref: "/contact"
    },
    image: "/ZOHO_CRM_Banner.png",
    customLogo: "/zoho-books_logo.png"
  },
  {
    slug: "zoho-hrms-people-and-payroll",
    title: "Zoho HRMS (People and Payroll)",
    badge: "MODERN WORKFORCE & PAYROLL AUTOMATION",
    category: "Zoho",
    categorySlug: "zoho",
    desc: "Comprehensive HR and payroll management for a modern, engaged workforce.",
    overview: "Comprehensive HR and payroll management for a modern, engaged workforce. Acceleron deploys tailored HRMS configurations that streamline recruit-to-retire operations, ensure 100% statutory compliance, and empower staff with self-service mobile tools.",
    primaryCtaText: "Schedule HRMS Consultation",
    primaryCtaHref: "/contact#form",
    secondaryCtaText: "Explore Module Features",
    secondaryCtaHref: "#consultation",
    featuresTitle: "Core Capabilities & Features",
    features: [
      {
        title: "Employee Lifecycle Management",
        desc: "Centralized employee database, digital onboarding, document management, and organizational hierarchy tracking."
      },
      {
        title: "Attendance, Leave & Shift Roster",
        desc: "Time and attendance tracking, biometric integration, holiday calendar management, and shift scheduling via Zoho Shifts."
      },
      {
        title: "Statutory Payroll Processing",
        desc: "Automated salary computation, PF, ESI, Professional Tax, TDS deductions, direct payslip distribution via Zoho Payroll."
      },
      {
        title: "Talent Acquisition & Contract Workforce",
        desc: "End-to-end recruitment tracking with Zoho Recruit and temporary/contract labor management via Zoho Workerly."
      }
    ],
    deliveryScopeTitle: "Implementation & Support Scope",
    deliveryScope: [
      {
        title: "HR Policy Configuration",
        desc: "Mapping corporate HR policies, leave rules, appraisal templates, and statutory payroll structures."
      },
      {
        title: "Employee Self-Service Portal",
        desc: "Mobile app and web portal rollout for leave requests, payslip downloads, and reimbursement claims."
      }
    ],
    benefitsTitle: "Workforce & HR Impact",
    benefits: [
      { title: "Admin Time Saved", metric: "-60%", desc: "Reduction in paperwork and manual attendance reconciliations." },
      { title: "Payroll Accuracy", metric: "100%", desc: "Ensure timely, accurate, and compliant salary disbursements." },
      { title: "Employee Adoption", metric: "+40%", desc: "Mobile-first self-service for check-ins, leave, and payslips." },
      { title: "Data Security", metric: "High", desc: "Role-based access control and enterprise encryption of confidential records." }
    ],
    process: [
      { step: "01", title: "HR Policy Review", desc: "Mapping organizational hierarchies, leave policies, salary structures, and tax rules." },
      { step: "02", title: "System Configuration", desc: "Setting up Zoho People, Zoho Payroll, shift rosters, and appraisal cycles." },
      { step: "03", title: "Biometric & Bank Integration", desc: "Connecting biometric devices, direct banking disbursements, and migrating employee data." },
      { step: "04", title: "Parallel Run & Rollout", desc: "Running parallel payroll validations, mobile app rollout, and HR team training." }
    ],
    ctaBanner: {
      headline: "Transform Your People Operations & Payroll",
      subheadline: "Deploy a seamless recruit-to-retire HRMS tailored for multi-location workforces.",
      actionText: "Schedule HRMS Consultation",
      actionHref: "/contact"
    },
    image: "/Zoho_HRMS_Banner.png",
    customLogo: "/zoho_people-trasparentbg.png"
  },
  {
    slug: "zoho-erp",
    title: "Zoho ERP",
    badge: "ENTERPRISE CLOUD ERP (ZOHO ONE)",
    category: "Zoho",
    categorySlug: "zoho",
    desc: "Unified cloud ERP suite (Zoho One) to run your entire business from a single platform.",
    overview: "Unified cloud ERP suite (Zoho One) to run your entire business from a single platform. Acceleron orchestrates 45+ unified business applications across Finance, Sales, HR, Supply Chain, and Field Service under a single operating system, combining custom low-code app development with enterprise-wide real-time business intelligence.",
    primaryCtaText: "Talk to Our Zoho Experts",
    primaryCtaHref: "/contact#form",
    secondaryCtaText: "Explore Application Ecosystem",
    secondaryCtaHref: "#consultation",
    featuresTitle: "Core Capabilities & Features",
    features: [
      {
        title: "Integrated 45+ Business Applications",
        desc: "Unifies Finance, Sales, People & Payroll, Operations, Marketing, and Collaboration under one platform, one database, and one login."
      },
      {
        title: "Operations & Inventory Management",
        desc: "Real-time inventory tracking, warehouse management, project management (Zoho Projects), field service (Zoho FSM), and customer desk support (Zoho Desk)."
      },
      {
        title: "Custom Application Engineering",
        desc: "Building custom business workflows, low-code modules, and unique process applications using Zoho Creator and Zoho Flow."
      },
      {
        title: "Business Process Analytics",
        desc: "Cross-departmental reporting, data warehousing, and predictive dashboards using Zoho Analytics and Zoho DataPrep."
      }
    ],
    deliveryScopeTitle: "Implementation & Support Scope",
    deliveryScope: [
      {
        title: "Enterprise Deployment & Architecture",
        desc: "End-to-end Zoho One / Zoho ERP implementation, system architecture design, and process optimization."
      },
      {
        title: "Custom Integration & Maintenance",
        desc: "Connecting Zoho ERP with existing SAP, Salesforce, or legacy IT infrastructure with dedicated post-go-live support."
      }
    ],
    benefitsTitle: "Unified Business Impact",
    benefits: [
      { title: "Software TCO", metric: "-50%", desc: "Replace fragmented standalone SaaS licenses with a single unified ERP suite." },
      { title: "Operational Agility", metric: "+45%", desc: "Seamless data flow between departments eliminates duplicate data entry." },
      { title: "Custom Apps", metric: "Low-Code", desc: "Rapid deployment of bespoke process tools via Zoho Creator and Zoho Flow." },
      { title: "Decision Making", metric: "Real-Time", desc: "Cross-departmental reporting and holistic insights across the entire organization." }
    ],
    process: [
      { step: "01", title: "Enterprise Workflow Architecture", desc: "Evaluating cross-functional requirements, data dependencies, and user role hierarchies." },
      { step: "02", title: "Zoho One System Design", desc: "Configuring core modules, inventory parameters, project milestones, and support desks." },
      { step: "03", title: "Custom Creator Apps & Bridges", desc: "Developing specialized workflows on Zoho Creator and integrating external ERP databases." },
      { step: "04", title: "Cutover & Managed AMS", desc: "Phased department rollouts, administrator enablement, and ongoing governance." }
    ],
    ctaBanner: {
      headline: "Run Your Entire Business on One Operating System",
      subheadline: "Connect with Acceleron's Zoho Advanced Practice Leads for a full-suite architectural evaluation.",
      actionText: "Talk to Our Zoho Experts",
      actionHref: "/contact"
    },
    image: "/ZOHO_CRM_Banner.png",
    customLogo: "/ZohoERP-colored.png"
  },
  {
    slug: "zoho-mail",
    title: "Zoho Mail",
    badge: "SECURE ENTERPRISE WORKPLACE & COLLABORATION",
    category: "Zoho",
    categorySlug: "zoho",
    desc: "Secure, ad-free business email hosting tailored for professional communication.",
    overview: "Secure, ad-free business email hosting tailored for professional communication. Acceleron delivers enterprise Zoho Mail deployments featuring zero-downtime migrations, strict email security (SPF, DKIM, DMARC), team messaging, and unified device administration via ManageEngine Endpoint Central.",
    primaryCtaText: "Consult Workplace Leads",
    primaryCtaHref: "/contact#form",
    secondaryCtaText: "View Security Features",
    secondaryCtaHref: "#consultation",
    featuresTitle: "Core Capabilities & Features",
    features: [
      {
        title: "Enterprise Business Email",
        desc: "Secure, ad-free business email hosting with custom domain configuration, guaranteed uptime, and user administration controls."
      },
      {
        title: "Collaboration Ecosystem",
        desc: "Seamless integration with Zoho Cliq (team messaging), Zoho Meeting (video calls), Zoho WorkDrive (cloud storage), and Zoho Office Suite (Writer, Sheet, Show)."
      },
      {
        title: "Security, DLP & Compliance",
        desc: "Encrypted email transmission, advanced spam filtering, malware protection, eDiscovery retention, and integration with Check Point Harmony Email security."
      },
      {
        title: "ManageEngine Administration",
        desc: "Centralized user onboarding, group policies, desktop/mobile sync, and integration with ManageEngine Endpoint Central."
      }
    ],
    deliveryScopeTitle: "Implementation & Support Scope",
    deliveryScope: [
      {
        title: "Email Migration Services",
        desc: "Zero-downtime email migration from Microsoft O365, Google Workspace, Exchange, or open-source email platforms."
      },
      {
        title: "Security & Domain Configuration",
        desc: "Configuring DKIM, SPF, DMARC records, multi-factor authentication (OneAuth), and corporate security policies."
      }
    ],
    benefitsTitle: "Workplace Performance & Security",
    benefits: [
      { title: "Email Uptime", metric: "99.99%", desc: "High-availability cloud infrastructure ensuring continuous executive communication." },
      { title: "Team Collaboration", metric: "+35%", desc: "Integrated team chat, video meetings, and shared cloud document storage." },
      { title: "Threat Defense", metric: "Zero-Trust", desc: "Advanced malware protection, anti-spoofing DMARC controls, and DLP compliance." },
      { title: "Admin Control", metric: "Centralized", desc: "Unified user provisioning and device security sync with ManageEngine Endpoint Central." }
    ],
    process: [
      { step: "01", title: "Domain & Security Audit", desc: "Verifying domain ownership, reviewing DNS records (MX, SPF, DKIM), and defining routing policies." },
      { step: "02", title: "User Provisioning & Policies", desc: "Creating organizational accounts, shared mailboxes, aliases, and security baselines." },
      { step: "03", title: "Zero-Downtime Data Migration", desc: "Migrating historical emails, calendars, and contacts from Google Workspace, O365, or Exchange." },
      { step: "04", title: "MX Cutover & Support", desc: "Final DNS cutover, mobile device sync, employee onboarding, and ongoing administration." }
    ],
    ctaBanner: {
      headline: "Upgrade to Secure, Ad-Free Business Email",
      subheadline: "Plan a zero-downtime migration to Zoho Workplace with Acceleron's certified infrastructure team.",
      actionText: "Consult Workplace Leads",
      actionHref: "/contact"
    },
    image: "/ZOHO_CRM_Banner.png",
    customLogo: "/ZOHO_logo_2023.svg_.png"
  },
  {
    slug: "manageengine-itsm",
    title: "ManageEngine-ITSM",
    category: "ManageEngine",
    categorySlug: "manageengine",
    desc: "ITIL-ready IT Service Management to streamline support and deliver exceptional service across enterprise IT operations.",
    overview: "ITIL-ready IT Service Management to streamline support and deliver exceptional service across enterprise IT operations. Transform your IT support with ManageEngine ServiceDesk Plus. We implement this robust ITSM solution to help you manage incidents, problems, changes, and IT assets efficiently, ensuring alignment with ITIL best practices and improving end-user satisfaction.",
    features: [
      {
        title: "Incident & Request Management",
        desc: "Automate ticket creation, intelligent SLA routing, multi-tier escalation, and automated incident resolution workflows."
      },
      {
        title: "Asset & CMDB Management",
        desc: "Track IT hardware, software licenses, contract renewals, and asset relationship mapping across corporate environments."
      },
      {
        title: "Change & Release Management",
        desc: "Standardize change approvals, risk evaluation models, maintenance windows, and automated rollback deployment workflows."
      },
      {
        title: "Service Catalog & Knowledge Base",
        desc: "Self-service portal empowering employees with standardized IT request forms, FAQs, and automated solution suggestions."
      }
    ],
    deliveryScope: [
      {
        title: "ITIL Framework Alignment",
        desc: "Mapping enterprise IT operations to standard ITIL v4 processes for incident, problem, and change governance."
      },
      {
        title: "Integration & AMS",
        desc: "Connecting ServiceDesk Plus with Active Directory, Microsoft O365, Zoho Desk, and legacy ERP systems."
      }
    ],
    benefits: [
      { title: "Resolution Time", metric: "-40%", desc: "Faster ticket resolution with automated routing and SLAs." },
      { title: "Asset Visibility", metric: "100%", desc: "Complete control over IT assets and software compliance." },
      { title: "ITIL Alignment", metric: "Full", desc: "Standardized processes improving overall IT service quality." },
      { title: "User Satisfaction", metric: "+35%", desc: "Improved end-user experience with self-service capabilities." }
    ],
    process: [
      { step: "01", title: "ITIL Alignment Assessment", desc: "Evaluate existing IT support workflows against ITIL standards and SLA requirements." },
      { step: "02", title: "System Architecture & Setup", desc: "Configure ServiceDesk Plus categories, approval tiers, SLAs, and notification rules." },
      { step: "03", title: "Integration & Asset Discovery", desc: "Connect with Active Directory, Office 365, and deploy network scan agents for CMDB mapping." },
      { step: "04", title: "Self-Service Portal & AMS Rollout", desc: "Publish end-user service catalogs, train technicians, and transition to 24/7 managed support." }
    ],
    image: "/Manage_Engine_Banner.png"
  },
  {
    slug: "manageengine-op-manager",
    title: "ManageEngine-OpManager",
    category: "ManageEngine",
    categorySlug: "manageengine",
    desc: "Comprehensive network monitoring for complete visibility and proactive fault management across multi-site enterprise environments.",
    overview: "Comprehensive network monitoring for complete visibility and proactive fault management across multi-site enterprise environments. Ensure high availability and optimal performance of your IT infrastructure with ManageEngine OpManager. We deploy this powerful monitoring tool to provide real-time insights into your routers, switches, firewalls, servers, and VMs.",
    features: [
      {
        title: "Network Performance Monitoring",
        desc: "Real-time monitoring of routers, switches, firewalls, wireless APs, and virtual infrastructure (VMware/Hyper-V)."
      },
      {
        title: "Proactive Fault Management",
        desc: "Threshold-based alerting, automated root cause analysis (RCA), and instant SMS/email notification triggers."
      },
      {
        title: "Bandwidth & Traffic Analysis",
        desc: "NetFlow, sFlow, and IPFIX analysis to detect network congestion, high-bandwidth applications, and unauthorized traffic."
      },
      {
        title: "Configuration & Compliance Management",
        desc: "Automated network configuration backups, change tracking, and regulatory compliance auditing (NCM module)."
      }
    ],
    deliveryScope: [
      {
        title: "Deployment & Topology Mapping",
        desc: "Automated discovery of network devices, physical/logical map generation, and custom dashboard setup."
      },
      {
        title: "NOC Managed Operations",
        desc: "24/7 Network Operations Center (NOC) monitoring, SLA enforcement, and routine health check reports."
      }
    ],
    benefits: [
      { title: "Network Uptime", metric: "99.9%", desc: "Proactively detect and resolve issues before they impact the business." },
      { title: "Troubleshooting Speed", metric: "2x Faster", desc: "Pinpoint root causes quickly with detailed diagnostics." },
      { title: "Resource Optimization", metric: "+20%", desc: "Identify underutilized or bottlenecked network resources." },
      { title: "IT Visibility", metric: "100%", desc: "A single pane of glass for your entire IT infrastructure." }
    ],
    process: [
      { step: "01", title: "Network Discovery & Audit", desc: "Scan IP subnets to identify switches, routers, firewalls, and server nodes." },
      { step: "02", title: "Monitoring & Threshold Tuning", desc: "Set up performance monitors, alert thresholds, and NetFlow traffic collectors." },
      { step: "03", title: "NOC Dashboards & Topology Maps", desc: "Generate dynamic physical/logical network topologies and executive views." },
      { step: "04", title: "24/7 NOC Handover & Governance", desc: "Establish automated alert escalations and routine monthly health reporting." }
    ],
    image: "/Manage_Engine_Banner.png"
  },
  {
    slug: "manageengine-endpoint-control",
    title: "ManageEngine-Endpoint Control",
    category: "ManageEngine",
    categorySlug: "manageengine",
    desc: "Unified endpoint management to secure and manage all devices in your organization from a single centralized platform.",
    overview: "Unified endpoint management to secure and manage all devices in your organization from a single centralized platform. Secure and manage your corporate endpoints with ManageEngine Endpoint Central. We help you automate patch management, deploy software, manage IT assets, and enforce security policies across Windows, Mac, Linux, and mobile devices from a central location.",
    features: [
      {
        title: "Automated Patch Management",
        desc: "Automated patching for Windows, macOS, Linux, and 350+ third-party software applications to eliminate vulnerabilities."
      },
      {
        title: "Software Deployment & Inventory",
        desc: "Silent software deployment, self-service portal publishing, and real-time software/hardware inventory audits."
      },
      {
        title: "Remote Troubleshooting & Control",
        desc: "Secure web-based remote desktop control with integrated screen recording, file transfer, and chat."
      },
      {
        title: "Vulnerability & Device Control",
        desc: "Restricting unauthorized USB/peripheral devices, enforcing BitLocker encryption, and mitigating zero-day security risks."
      }
    ],
    deliveryScope: [
      {
        title: "Enterprise Endpoint Rollout",
        desc: "Agent deployment across thousands of corporate laptops, desktops, servers, and remote work assets."
      },
      {
        title: "Zero Trust & EDR Integration",
        desc: "Integrating Endpoint Central with CrowdStrike, Sophos EDR, and Active Directory security policies."
      }
    ],
    benefits: [
      { title: "Endpoint Security", metric: "+50%", desc: "Significantly reduce vulnerabilities with timely patching." },
      { title: "IT Productivity", metric: "+40%", desc: "Automate routine endpoint management tasks." },
      { title: "Compliance", metric: "High", desc: "Ensure all devices adhere to corporate security policies." },
      { title: "Remote Support", metric: "Instant", desc: "Quickly resolve issues for a distributed workforce." }
    ],
    process: [
      { step: "01", title: "Architecture & Security Design", desc: "Design distribution server architecture for branch offices and remote workers." },
      { step: "02", title: "Patch & Software Repository Setup", desc: "Configure test and production patch deployment rings and enterprise software catalogs." },
      { step: "03", title: "Silent Agent Rollout", desc: "Automate agent distribution via Active Directory GPO and cloud enrollment." },
      { step: "04", title: "Policy Enforcement & Zero Trust", desc: "Activate USB peripheral blocking, browser security policies, and EDR integrations." }
    ],
    image: "/Manage_Engine_Banner.png"
  },
  {
    slug: "manageengine-mdm-plus",
    title: "ManageEngine-MDM Plus",
    category: "ManageEngine",
    categorySlug: "manageengine",
    desc: "Comprehensive mobile device management for a secure, productive mobile workforce across corporate and BYOD environments.",
    overview: "Comprehensive mobile device management for a secure, productive mobile workforce across corporate and BYOD environments. Empower your mobile workforce while maintaining security with ManageEngine Mobile Device Manager Plus. We implement MDM solutions to enroll, manage, and secure corporate-owned and BYOD smartphones and tablets across iOS, Android, and Windows.",
    features: [
      {
        title: "Mobile Device Onboarding",
        desc: "Over-the-air (OTA) enrollment, Apple Business Manager (ABM), Android Enterprise, and Knox deployment."
      },
      {
        title: "Corporate Containerization",
        desc: "Isolating corporate emails, applications, and confidential data from personal apps on BYOD devices."
      },
      {
        title: "App Distribution & Governance",
        desc: "Silently pushing enterprise mobile applications, blocking blacklisted apps, and managing app licenses."
      },
      {
        title: "Remote Wipe & Location Tracking",
        desc: "Real-time device tracking, geo-fencing policies, and instant remote wipe for lost or stolen devices."
      }
    ],
    deliveryScope: [
      {
        title: "Mobile Security Policy Setup",
        desc: "Configuring Wi-Fi profiles, VPN settings, passcode enforcement, and camera/kiosk restriction policies."
      },
      {
        title: "Post-Deployment Maintenance",
        desc: "Continuous mobile device maintenance, OS version update management, and user support."
      }
    ],
    benefits: [
      { title: "Data Security", metric: "High", desc: "Protect corporate data on mobile devices against loss or theft." },
      { title: "Device Compliance", metric: "100%", desc: "Ensure all mobile devices meet security standards." },
      { title: "Admin Efficiency", metric: "+35%", desc: "Centralized management of a diverse fleet of mobile devices." },
      { title: "Employee Productivity", metric: "+25%", desc: "Secure access to corporate resources from anywhere." }
    ],
    process: [
      { step: "01", title: "Mobility & BYOD Strategy", desc: "Define corporate device and BYOD privacy policies, security baselines, and ownership rules." },
      { step: "02", title: "Apple / Android Platform Setup", desc: "Configure Apple APNs, ABM integration, and Google Android Enterprise bindings." },
      { step: "03", title: "App Catalog & Container Policies", desc: "Package enterprise mobile apps, configure per-app VPNs, and containerize data." },
      { step: "04", title: "Fleet Enrollment & Maintenance", desc: "Over-the-air rollout to mobile users with automated updates and continuous support." }
    ],
    image: "/Manage_Engine_Banner.png"
  },
  {
    slug: "it-infrastructure-services",
    title: "IT Infrastructure Services",
    category: "IT & Custom Solutions",
    categorySlug: "it-custom-solutions",
    desc: "Robust, high-availability hybrid cloud and network management engineered for 99.99% uptime.",
    overview: " Robust, high-availability hybrid cloud and network management engineered for 99.99% uptime We engineer resilient physical and cloud architectures that maximize business continuity, high-speed collaboration, and reliable day-to-day operations.",
    featuresTitle: "Service Scope & Capabilities",
    features: [
      { title: "Cloud Infrastructure Management", desc: "Provisioning, hosting, and optimizing cloud workloads across AWS, Microsoft Azure, and GCP." },
      { title: "Enterprise Email Management", desc: "Implementation, migration, and administration for Microsoft O365, Google Workspace, and open-source email systems like Zimbra." },
      { title: "Network Setup & Monitoring", desc: "Architecting remote site networks, managed switches, enterprise routers, SD-WAN, and firewall policies." },
      { title: "Infrastructure AMC & SLA Support", desc: "Round-the-clock proactive monitoring, hardware lifecycle management, and SLA-driven maintenance." }
    ],
    benefitsTitle: "Key Business Benefits",
    benefits: [
      { title: "Maximum Uptime & Reliability", metric: "99.99%", desc: "Round-the-clock proactive monitoring and SLA-driven maintenance minimize unexpected downtime." },
      { title: "Scalable Cloud Operations", metric: "Multi-Cloud", desc: "Seamless provisioning and optimization across AWS, Microsoft Azure, and GCP allow your infrastructure to grow alongside business demand." },
      { title: "Enhanced Collaboration", metric: "Secure", desc: "Robust enterprise email and network architectures secure communications and streamline remote site connectivity." }
    ],
    process: [
      { step: "01", title: "Infrastructure Assessment", desc: "Evaluate existing on-premise, cloud, and network topology for capacity and reliability." },
      { step: "02", title: "Architecture & Provisioning", desc: "Architect high-availability cloud fabrics, enterprise email domains, and SD-WAN networks." },
      { step: "03", title: "Migration & Hardening", desc: "Execute zero-downtime cutovers, establish security policies, and deploy redundant gateways." },
      { step: "04", title: "24/7 Managed NOC Support", desc: "Continuous proactive telemetry, hardware lifecycle AMC, and SLA-driven incident response." }
    ],
    image: "/Threatcorp_Banner.png",
    customLogo: "/Acceleron_Short_Logo.png"
  },
  {
    slug: "custom-software-application-development",
    title: "Custom Software Application Development",
    category: "IT & Custom Solutions",
    categorySlug: "it-custom-solutions",
    desc: "Tailor-made web, mobile, and cloud software built for unique enterprise workflows.",
    overview: "Tailor-made software solutions designed to solve your unique business challenges. Our full-stack engineering practices build scalable, intuitive, and high-performance digital products engineered to match your operational reality.",
    featuresTitle: "Service Scope & Capabilities",
    features: [
      { title: "Full-Stack Web Development", desc: "High-performance web apps built with modern JavaScript frameworks (React, Angular, Node.js), Python, and Java." },
      { title: "Enterprise Mobile Applications", desc: "Native iOS/Android and cross-platform mobile apps for field workforce enablement and customer engagement." },
      { title: "Custom Software Engineering", desc: "End-to-end product development lifecycle—from MVP design to scalable multi-tenant SaaS deployment." },
      { title: "Legacy Modernization", desc: "Refactoring legacy monolithic software into modular microservices architectures." }
    ],
    benefitsTitle: "Key Business Benefits",
    benefits: [
      { title: "Tailored Business Alignment", metric: "100%", desc: "Custom-built web and mobile applications directly solve unique operational challenges rather than forcing rigid out-of-the-box workflows." },
      { title: "Future-Proof Architecture", metric: "Agile", desc: "Modernization of legacy systems into modular microservices ensures long-term agility and easier feature deployment." },
      { title: "Multi-Platform Engagement", metric: "Cross-Platform", desc: "High-performance native and cross-platform solutions empower field workforces and elevate customer experiences." }
    ],
    process: [
      { step: "01", title: "Discovery & Solution Blueprint", desc: "Map enterprise requirements, user journeys, data schemas, and integration touchpoints." },
      { step: "02", title: "Agile Sprints & Prototyping", desc: "Iterative two-week delivery cycles building production-grade UI components and microservices." },
      { step: "03", title: "Automated QA & Security Testing", desc: "Comprehensive unit testing, load testing, and security code reviews." },
      { step: "04", title: "Deployment & Lifecycle AMS", desc: "Containerized CI/CD rollout, user training, and continuous feature enhancement." }
    ],
    image: "/capital_goods.jpg",
    customLogo: "/Acceleron_Short_Logo.png"
  },
  {
    slug: "custom-ai-application-development",
    title: "Custom AI Application Development",
    category: "IT & Custom Solutions",
    categorySlug: "it-custom-solutions",
    desc: "Domain-specific AI and machine learning models to automate tasks and unlock business intelligence.",
    overview: "Intelligent AI-driven applications to automate processes and generate insights. We build custom machine learning models, autonomous agent frameworks, and document processing systems that turn data into measurable operational advantages.",
    featuresTitle: "Service Scope & Capabilities",
    features: [
      { title: "Autonomous AI Agent Swarms", desc: "Multi-agent AI architectures for complex automated code refactoring, document analysis, and decision execution." },
      { title: "Predictive Analytics Engines", desc: "Custom ML models for predictive equipment maintenance, demand forecasting, and customer churn prediction." },
      { title: "Intelligent Document Processing (IDP)", desc: "AI-powered OCR and NLP pipelines for automated invoice extraction and contract parsing." },
      { title: "Domain-Specific AI Copilots", desc: "Enterprise copilots trained on private organizational knowledge bases for internal support and query resolution." }
    ],
    benefitsTitle: "Key Business Benefits",
    benefits: [
      { title: "Process Automation", metric: "AI Swarms", desc: "Autonomous multi-agent AI swarms and intelligent document processing (IDP) eliminate manual bottlenecks in code refactoring and contract parsing." },
      { title: "Data-Driven Decision Making", metric: "Predictive", desc: "Predictive analytics engines forecast equipment maintenance needs, demand shifts, and customer churn accurately." },
      { title: "Secure Knowledge Retrieval", metric: "Private LLM", desc: "Domain-specific AI copilots leverage private organizational data safely to accelerate internal support and issue resolution." }
    ],
    process: [
      { step: "01", title: "AI Opportunity Assessment", desc: "Identify operational bottlenecks and formulate data readiness and feasibility blueprints." },
      { step: "02", title: "Data Pipeline & Feature Engineering", desc: "Aggregate, clean, and vectorize organizational knowledge bases and historical telemetry." },
      { step: "03", title: "Model Training & Guardrail Engineering", desc: "Develop custom ML models, agent coordination swarms, and hallucination guardrails." },
      { step: "04", title: "Production Deployment & Observability", desc: "Deploy edge/cloud inferencing endpoints with real-time drift monitoring and feedback loops." }
    ],
    image: "/outcome_driven.jpg",
    customLogo: "/Acceleron_Short_Logo.png"
  },
  {
    slug: "network-security-implementation",
    title: "Network Security Implementation",
    category: "IT & Custom Solutions",
    categorySlug: "it-custom-solutions",
    desc: "Zero-trust cybersecurity architectures protecting enterprise networks, remote teams, and OT environments.",
    overview: "Robust cybersecurity architectures to protect your data and network perimeter. We design, deploy, and manage zero-trust boundary defenses, next-generation firewalls, and unified threat management systems tailored for enterprise resilience.",
    featuresTitle: "Service Scope & Capabilities",
    features: [
      { title: "Next-Generation Firewalls (NGFW)", desc: "Perimeter defense and deep packet inspection using Fortinet, Check Point, Sophos, and Cisco." },
      { title: "Zero Trust Network Access (ZTNA)", desc: "Implementing Zscaler and micro-segmentation architectures to enforce strict identity verification." },
      { title: "Endpoint Detection & Response (EDR/XDR)", desc: "Deploying CrowdStrike and Sophos EDR platforms across enterprise workstations and servers." },
      { title: "Email & Cloud Security", desc: "Check Point Harmony Email security, Data Loss Prevention (DLP), and Web Application Firewalls (WAF)." }
    ],
    benefitsTitle: "Key Business Benefits",
    benefits: [
      { title: "Perimeter Defense", metric: "NGFW", desc: "Advanced Next-Generation Firewalls (NGFW) and deep packet inspection shield critical corporate networks from emerging cyber threats." },
      { title: "Strict Identity Enforcement", metric: "Zero Trust", desc: "Zero Trust Network Access (ZTNA) and micro-segmentation ensure that only verified users access sensitive resources." },
      { title: "Rapid Threat Mitigation", metric: "Real-Time", desc: "Endpoint Detection & Response (EDR/XDR) platforms proactively detect and neutralize risks across enterprise servers and workstations." }
    ],
    process: [
      { step: "01", title: "Perimeter & Vulnerability Audit", desc: "Assess ingress/egress points, firewall rulesets, and identity verification gaps." },
      { step: "02", title: "Zero-Trust Architecture Design", desc: "Define micro-segmentation boundaries, least-privilege RBAC, and EDR deployment matrices." },
      { step: "03", title: "Appliance & Agent Deployment", desc: "Implement NGFW hardware/virtual appliances, Zscaler ZTNA, and CrowdStrike/Sophos agents." },
      { step: "04", title: "24/7 Threat Hunting & SOC", desc: "Continuous SIEM/SOC event correlation, threat containment, and automated incident response." }
    ],
    image: "/Checkpoint_Harmony_Banner.png",
    customLogo: "/Acceleron_Short_Logo.png"
  },
  {
    slug: "security-audits",
    title: "Security Audits & Vulnerability Assessments",
    category: "IT & Custom Solutions",
    categorySlug: "it-custom-solutions",
    desc: "Proactive VAPT and risk evaluations to fortify digital perimeters.",
    overview: "Comprehensive vulnerability assessments and penetration testing to identify risks. Our certified cybersecurity specialists rigorously evaluate your networks, cloud estates, web applications, and source code to eliminate vulnerabilities before adversaries can exploit them.",
    featuresTitle: "Service Scope & Capabilities",
    features: [
      { title: "Vulnerability Assessment & Penetration Testing (VAPT)", desc: "Black-box, grey-box, and white-box penetration testing for web apps, mobile apps, and networks." },
      { title: "ISO 27001 & Compliance Audits", desc: "Gap analysis, policy formulation, and certification readiness support for ISO 27001 and DPDP frameworks." },
      { title: "Source Code Security Review", desc: "Static and dynamic application security testing (SAST/DAST) to detect vulnerability risks." },
      { title: "Phishing Simulations & Training", desc: "Employee cyber awareness training programs and controlled phishing simulations." }
    ],
    benefitsTitle: "Key Business Benefits",
    benefits: [
      { title: "Proactive Risk Discovery", metric: "VAPT", desc: "Comprehensive vulnerability assessments and penetration testing (VAPT) uncover critical security gaps before malicious actors exploit them." },
      { title: "Regulatory Compliance Readiness", metric: "ISO 27001", desc: "Structured gap analysis and policy formulation streamline certification paths for ISO 27001 and DPDP frameworks." },
      { title: "Human Error Reduction", metric: "Human Shield", desc: "Controlled phishing simulations and employee awareness training transform your workforce into a reliable human firewall." }
    ],
    process: [
      { step: "01", title: "Scoping & Threat Modeling", desc: "Define testing boundaries, regulatory frameworks (ISO/DPDP), and rules of engagement." },
      { step: "02", title: "In-Depth VAPT & Source Code Testing", desc: "Execute automated vulnerability sweeps, manual penetration attempts, and static code scans." },
      { step: "03", title: "Executive & Technical Risk Reporting", desc: "Deliver prioritized CVSS remediation scorecards, evidence logs, and executive risk summaries." },
      { step: "04", title: "Remediation Verification & Re-Testing", desc: "Validate that all identified vulnerabilities have been securely patched and issue compliance certificates." }
    ],
    image: "/DPDP_ACT_Banner.png",
    customLogo: "/Acceleron_Short_Logo.png"
  },
  {
    slug: "it-system-audits",
    title: "Enterprise IT System Audits",
    category: "IT & Custom Solutions",
    categorySlug: "it-custom-solutions",
    desc: "In-depth technical evaluations to optimize performance, license expenditure, and tech debt.",
    overview: "In-depth evaluations of your IT infrastructure for performance, efficiency, and alignment. We conduct rigorous assessments of your IT systems, governance controls, cloud spending, and disaster preparedness to ensure maximum ROI and operational resilience.",
    featuresTitle: "Service Scope & Capabilities",
    features: [
      { title: "IT General Controls (ITGC) Audit", desc: "Evaluating access management, change management controls, backup verification, and audit trails." },
      { title: "Infrastructure Performance Review", desc: "Assessing server load, storage health, network throughput, and database efficiency." },
      { title: "Cloud FinOps & Cost Optimization", desc: "Reviewing cloud utilization to identify idle compute resources and cost-reduction opportunities." },
      { title: "Disaster Recovery (DR/BCP) Testing", desc: "Evaluating recovery time objectives (RTO) and recovery point objectives (RPO) under simulated outage conditions." }
    ],
    benefitsTitle: "Key Business Benefits",
    benefits: [
      { title: "Optimized Resource Utilization", metric: "FinOps", desc: "Cloud FinOps reviews eliminate idle compute resources to drive continuous cloud cost reduction." },
      { title: "Assured Business Continuity", metric: "DR / RTO", desc: "Rigorous Disaster Recovery (DR/BCP) testing validates recovery time objectives (RTO) under simulated outage conditions." },
      { title: "Strengthened Governance", metric: "ITGC", desc: "IT General Controls (ITGC) audits ensure ironclad access controls, change management tracking, and reliable backup integrity." }
    ],
    process: [
      { step: "01", title: "Audit Scoping & Baseline Discovery", desc: "Identify critical systems, access control matrices, cloud subscriptions, and DR parameters." },
      { step: "02", title: "ITGC & Performance Analysis", desc: "Evaluate server utilization, audit logs, backup restorations, and change control procedures." },
      { step: "03", title: "FinOps & Disaster Simulation", desc: "Execute cloud spend telemetry audits and simulate failover scenarios to measure RTO/RPO." },
      { step: "04", title: "Audit Findings & Optimization Roadmap", desc: "Deliver formal audit reports, cost-saving recommendations, and governance remediation steps." }
    ],
    image: "/header-2x.png",
    customLogo: "/Acceleron_Short_Logo.png"
  }
];

export function getSubServicesByCategory(categorySlug: string): SubServiceData[] {
  return SUB_SERVICES_DATA.filter((s) => s.categorySlug === categorySlug);
}

export function getSubServiceUrlByTitle(catSlug: string, subTitle: string): string {
  const match = SUB_SERVICES_DATA.find((s) => s.title.toLowerCase() === subTitle.toLowerCase());
  if (match) {
    return `/services/${match.categorySlug}/${match.slug}`;
  }
  const fallbackSlug = subTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  const cleanCat = catSlug.split("/").pop() || "sap";
  return `/services/${cleanCat}/${fallbackSlug}`;
}

export function getSubServiceBySlug(slug: string): SubServiceData | undefined {
  if (!slug) return undefined;
  const directMatch = SUB_SERVICES_DATA.find((s) => s.slug === slug);
  if (directMatch) return directMatch;

  if (slug === "sap-others" || slug === "sapothers") {
    return SUB_SERVICES_DATA.find((s) => s.slug === "audit-comply");
  }

  const normalized = slug.toLowerCase().replace(/[^a-z0-9]/g, "");
  return SUB_SERVICES_DATA.find(
    (s) => s.slug.toLowerCase().replace(/[^a-z0-9]/g, "") === normalized
  );
}
