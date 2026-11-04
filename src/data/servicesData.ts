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
    overview: "Acceleron delivers enterprise-grade SAP Managed Services tailored for high-volume, multi-location operations. Backed by Gainwell Group's 80+ years of industrial heritage, our certified SAP professionals maintain system stability, resolve ticket backlogs, and optimize SAP module performance (FI/CO, MM, SD, PP, PM, EWM) with guaranteed SLAs and zero business disruption.",
    primaryCtaText: "Consult with Our AMS Lead",
    primaryCtaHref: "/contact",
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
    image: "/SAP_AMS_Banner.png"
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
    primaryCtaHref: "/contact",
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
    image: "/SAP_Implementation_Banner.png",
    customLogo: "/sap_s4hana-transparentbg.png"
  },
  {
    slug: "sap-integration",
    title: "SAP Integration",
    badge: "ENTERPRISE ECOSYSTEM CONNECTIVITY",
    category: "SAP",
    categorySlug: "sap",
    desc: "Seamless cloud and hybrid integrations powered by SAP Business Technology Platform (BTP) and Cloud Platform Integration (CPI).",
    overview: "Acceleron builds secure, high-throughput middleware connectors that integrate SAP S/4HANA with third-party software, cloud applications, and shop-floor hardware. We eliminate data silos by enabling real-time data flows between SAP order management system modules, Salesforce CRMs, Zoho enterprise suites, e-commerce gateways, and industrial telemetry.",
    primaryCtaText: "Schedule an Integration Assessment",
    primaryCtaHref: "/contact",
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
    image: "/SAP_Integration_Banner.png",
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
    primaryCtaHref: "/contact",
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
    image: "/SAP_Implementation_Banner.png",
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
    primaryCtaHref: "/contact",
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
    image: "/SAP_Implementation_Banner.png"
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
    primaryCtaHref: "/contact",
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
    image: "/SAP_Implementation_Banner.png",
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
    primaryCtaHref: "/contact",
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
    image: "/SAP_Implementation_Banner.png",
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
    primaryCtaHref: "/contact",
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
    image: "/SAP_Implementation_Banner.png"
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
    primaryCtaHref: "/contact",
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
    image: "/SAP_Implementation_Banner.png",
    customLogo: "/sap_s4hana-transparentbg.png"
  },
  {
    slug: "zoho-crm",
    title: "Zoho CRM",
    category: "Zoho",
    categorySlug: "zoho",
    desc: "Unified customer relationship management to accelerate sales and build lasting relationships.",
    overview: "Transform your sales processes with Zoho CRM. We implement and customize Zoho CRM to automate workflows, capture leads, manage pipelines, and provide deep analytics, empowering your sales team to close deals faster and smarter.",
    features: [
      { title: "Sales Automation", desc: "Automate lead nurturing, scoring, and routine sales tasks." },
      { title: "Omnichannel Communication", desc: "Engage customers via email, telephony, social media, and live chat within the CRM." },
      { title: "Customization & Blueprint", desc: "Tailor the CRM to your specific sales processes with guided workflows." },
      { title: "AI-Powered Insights (Zia)", desc: "Predictive sales analytics, anomaly detection, and best time to contact recommendations." }
    ],
    benefits: [
      { title: "Sales Productivity", metric: "+40%", desc: "Reduced manual data entry and streamlined sales cycles." },
      { title: "Lead Conversion", metric: "+25%", desc: "Better lead tracking and timely follow-ups." },
      { title: "Customer Retention", metric: "+30%", desc: "Improved customer relationships through personalized engagement." },
      { title: "Data Accuracy", metric: "100%", desc: "A single source of truth for all customer interactions." }
    ],
    process: [
      { step: "01", title: "Process Mapping", desc: "Analyze your sales funnel and define CRM requirements." },
      { step: "02", title: "Configuration & Customization", desc: "Set up modules, fields, workflows, and automation rules." },
      { step: "03", title: "Data Migration & Integration", desc: "Import legacy data and connect with other business tools." },
      { step: "04", title: "Training & Adoption", desc: "User training sessions to ensure high adoption rates." }
    ],
    image: "/ZOHO_CRM_Banner.png",
    customLogo: "/Zoho_CRM_application.svg_.png"
  },
  {
    slug: "zoho-books",
    title: "Zoho Books",
    category: "Zoho",
    categorySlug: "zoho",
    desc: "Smart, automated online accounting software for growing businesses.",
    overview: "Streamline your financial operations with Zoho Books. We help you implement this powerful accounting platform to manage finances, automate business workflows, and work collectively across departments to ensure tax compliance and healthy cash flow.",
    features: [
      { title: "Automated Invoicing & Payments", desc: "Create professional invoices, send reminders, and accept online payments securely." },
      { title: "Expense Tracking", desc: "Track receipts, categorize expenses, and monitor cash outflows." },
      { title: "Bank Reconciliation", desc: "Connect bank accounts for automatic transaction fetching and easy reconciliation." },
      { title: "Comprehensive Reporting", desc: "Generate real-time P&L statements, balance sheets, and cash flow reports." }
    ],
    benefits: [
      { title: "Accounting Efficiency", metric: "+50%", desc: "Automate recurring transactions and reduce manual bookkeeping." },
      { title: "Payment Collection", metric: "2x Faster", desc: "Get paid quicker with integrated payment gateways." },
      { title: "Financial Visibility", metric: "Real-Time", desc: "Instant access to critical financial metrics and reports." },
      { title: "Compliance", metric: "100%", desc: "Stay compliant with local tax regulations and audit trails." }
    ],
    process: [
      { step: "01", title: "Financial Assessment", desc: "Understand your accounting processes and chart of accounts." },
      { step: "02", title: "Setup & Configuration", desc: "Configure taxes, banking, and custom invoice templates." },
      { step: "03", title: "Migration", desc: "Securely transfer historical financial data from legacy systems." },
      { step: "04", title: "Training", desc: "Train your finance team on daily operations and reporting." }
    ],
    image: "/ZOHO_CRM_Banner.png",
    customLogo: "/zoho-books_logo.png"
  },
  {
    slug: "zoho-hrms-people-and-payroll",
    title: "Zoho HRMS (People and Payroll)",
    category: "Zoho",
    categorySlug: "zoho",
    desc: "Comprehensive HR and payroll management for a modern, engaged workforce.",
    overview: "Simplify your HR operations with Zoho People and Zoho Payroll. We deploy this unified HRMS to manage the entire employee lifecycle—from onboarding and attendance tracking to performance appraisals and compliant payroll processing.",
    features: [
      { title: "Core HR & Employee Self-Service", desc: "Centralized employee database with an intuitive portal for leave and profile management." },
      { title: "Time & Attendance", desc: "Automated attendance tracking, shift management, and biometric integration." },
      { title: "Performance Management", desc: "Set goals, conduct 360-degree appraisals, and track employee development." },
      { title: "Automated Payroll Processing", desc: "Error-free payroll calculation with built-in statutory compliance." }
    ],
    benefits: [
      { title: "HR Admin Time", metric: "-60%", desc: "Reduction in paperwork and manual HR tasks." },
      { title: "Payroll Accuracy", metric: "100%", desc: "Ensure timely, accurate, and compliant salary disbursements." },
      { title: "Employee Engagement", metric: "+40%", desc: "Improved transparency and easy access to HR services." },
      { title: "Data Security", metric: "High", desc: "Secure handling of sensitive employee and financial data." }
    ],
    process: [
      { step: "01", title: "HR Policy Review", desc: "Map your leave, attendance, and payroll policies." },
      { step: "02", title: "System Configuration", desc: "Set up the HRMS structure, workflows, and payroll components." },
      { step: "03", title: "Data Import & Testing", desc: "Migrate employee data and run parallel payroll tests." },
      { step: "04", title: "Rollout", desc: "Company-wide launch with manager and employee training." }
    ],
    image: "/Zoho_HRMS_Banner.png",
    customLogo: "/zoho_people-trasparentbg.png"
  },
  {
    slug: "zoho-erp",
    title: "Zoho ERP",
    category: "Zoho",
    categorySlug: "zoho",
    desc: "Unified cloud ERP suite (Zoho One) to run your entire business from a single platform.",
    overview: "Break down software silos with a comprehensive Zoho ERP implementation. We leverage Zoho One to provide an integrated system of applications that connect your sales, marketing, finance, HR, and operations, offering unparalleled operational visibility.",
    features: [
      { title: "Integrated Business Suite", desc: "Access 40+ integrated applications covering every business function." },
      { title: "Centralized Admin Panel", desc: "Manage users, access controls, and security policies from one console." },
      { title: "Cross-App Analytics", desc: "Unified dashboards combining data from CRM, finance, and operations." },
      { title: "Custom App Development", desc: "Build tailored applications using Zoho Creator to fill functional gaps." }
    ],
    benefits: [
      { title: "Software Costs", metric: "-50%", desc: "Replace fragmented, expensive legacy software with a single unified suite." },
      { title: "Operational Efficiency", metric: "+45%", desc: "Seamless data flow between departments eliminates duplicate data entry." },
      { title: "Scalability", metric: "High", desc: "Easily add new apps and users as your business grows." },
      { title: "Decision Making", metric: "Real-Time", desc: "Holistic insights across the entire organization." }
    ],
    process: [
      { step: "01", title: "Business Process Discovery", desc: "Comprehensive analysis of cross-departmental workflows." },
      { step: "02", title: "Phased Implementation Plan", desc: "Strategic roadmap prioritizing critical modules for quick wins." },
      { step: "03", title: "Configuration & Integration", desc: "Set up the suite and ensure seamless data exchange between apps." },
      { step: "04", title: "Change Management", desc: "Ongoing training and support to drive organization-wide adoption." }
    ],
    image: "/ZOHO_CRM_Banner.png",
    customLogo: "/ZohoERP-colored.png"
  },
  {
    slug: "zoho-mail",
    title: "Zoho Mail",
    category: "Zoho",
    categorySlug: "zoho",
    desc: "Secure, ad-free business email hosting tailored for professional communication.",
    overview: "Upgrade your corporate communication with Zoho Mail. We set up a secure, reliable, and privacy-focused email infrastructure for your business, complete with collaboration tools like calendars, tasks, and notes to boost team productivity.",
    features: [
      { title: "Custom Domain Email", desc: "Professional email addresses (name@yourcompany.com) building brand trust." },
      { title: "Advanced Security & Privacy", desc: "End-to-end encryption, S/MIME, and strict ad-free privacy policies." },
      { title: "Integrated Collaboration Suite", desc: "Shared calendars, group tasks, and instant messaging built-in." },
      { title: "Comprehensive Control Panel", desc: "Extensive admin policies for user management, spam control, and data retention." }
    ],
    benefits: [
      { title: "Email Security", metric: "99.9%", desc: "Protection against spam, malware, and phishing attacks." },
      { title: "Uptime", metric: "99.9%", desc: "Reliable enterprise-grade servers ensuring constant availability." },
      { title: "Team Collaboration", metric: "+30%", desc: "Improved teamwork with integrated apps and shared resources." },
      { title: "IT Overhead", metric: "-25%", desc: "Easy-to-manage admin console reduces IT support requests." }
    ],
    process: [
      { step: "01", title: "Domain Verification", desc: "Verify domain ownership and configure DNS records (MX, SPF, DKIM)." },
      { step: "02", title: "User Provisioning", desc: "Create accounts, set up groups, and configure routing policies." },
      { step: "03", title: "Data Migration", desc: "Seamlessly migrate emails, contacts, and calendars from legacy providers." },
      { step: "04", title: "Go-Live & Support", desc: "Final MX cutover and end-user onboarding." }
    ],
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
    desc: "Robust, scalable, and secure IT infrastructure design and management.",
    overview: "Build a resilient foundation for your digital operations with our IT Infrastructure Services. From on-premise data centers to hybrid cloud environments, we design, deploy, and manage scalable IT architectures that ensure high availability and performance.",
    features: [
      { title: "Network Design & Implementation", desc: "Secure, high-performance LAN/WAN and SD-WAN architectures." },
      { title: "Server & Storage Solutions", desc: "Optimized compute and storage infrastructure (SAN/NAS) deployment." },
      { title: "Virtualization", desc: "Server and desktop virtualization using VMware or Hyper-V." },
      { title: "Disaster Recovery & Backup", desc: "Robust data protection and business continuity planning." }
    ],
    benefits: [
      { title: "System Reliability", metric: "99.99%", desc: "High availability architectures minimizing downtime." },
      { title: "Scalability", metric: "High", desc: "Infrastructure that grows seamlessly with your business." },
      { title: "Security", metric: "Enhanced", desc: "Robust network and physical security measures." },
      { title: "IT Costs", metric: "-20%", desc: "Optimized resource utilization through virtualization." }
    ],
    process: [
      { step: "01", title: "Assessment", desc: "Evaluate existing infrastructure and identify bottlenecks." },
      { step: "02", title: "Design", desc: "Architect a scalable, secure, and cost-effective IT environment." },
      { step: "03", title: "Deployment", desc: "Procure, install, and configure hardware and network components." },
      { step: "04", title: "Managed Services", desc: "Ongoing monitoring, maintenance, and IT support." }
    ],
    image: "/Threatcorp_Banner.png",
    customLogo: "/Acceleron_Short_Logo.png"
  },
  {
    slug: "custom-software-application-development",
    title: "Custom Software Application Development",
    category: "IT & Custom Solutions",
    categorySlug: "it-custom-solutions",
    desc: "Tailor-made software solutions designed to solve your unique business challenges.",
    overview: "Accelerate your digital transformation with bespoke software applications. Our full-stack development team builds scalable, secure, and user-centric web and mobile applications tailored precisely to your operational requirements and business goals.",
    features: [
      { title: "Full-Stack Development", desc: "End-to-end development using modern frameworks (React, Node.js, Python, Java)." },
      { title: "Mobile App Development", desc: "Native (iOS/Android) and cross-platform mobile applications." },
      { title: "UI/UX Design", desc: "Intuitive, engaging, and accessible user interfaces." },
      { title: "API Development & Integration", desc: "Seamless connectivity with existing enterprise systems." }
    ],
    benefits: [
      { title: "Business Fit", metric: "100%", desc: "Software that perfectly matches your unique workflows." },
      { title: "Scalability", metric: "High", desc: "Cloud-native architectures built for future growth." },
      { title: "Competitive Edge", metric: "Strong", desc: "Innovative solutions that off-the-shelf software cannot provide." },
      { title: "Process Automation", metric: "+40%", desc: "Streamlined operations reducing manual effort." }
    ],
    process: [
      { step: "01", title: "Requirement Gathering", desc: "Collaborative workshops to define scope and wireframes." },
      { step: "02", title: "Agile Development", desc: "Iterative sprints delivering functional increments of the software." },
      { step: "03", title: "Quality Assurance", desc: "Rigorous automated and manual testing for bugs and performance." },
      { step: "04", title: "Deployment & Support", desc: "Smooth rollout, user training, and continuous maintenance." }
    ],
    image: "/capital_goods.jpg",
    customLogo: "/Acceleron_Short_Logo.png"
  },
  {
    slug: "custom-ai-application-development",
    title: "Custom AI Application Development",
    category: "IT & Custom Solutions",
    categorySlug: "it-custom-solutions",
    desc: "Intelligent AI-driven applications to automate processes and generate insights.",
    overview: "Leverage the power of Artificial Intelligence and Machine Learning to gain a competitive advantage. We develop custom AI models, generative AI tools, and intelligent automation solutions that integrate seamlessly into your business processes.",
    features: [
      { title: "Generative AI Solutions", desc: "Custom LLMs, chatbots, and content generation tools." },
      { title: "Predictive Analytics", desc: "Machine learning models for demand forecasting and risk analysis." },
      { title: "Computer Vision", desc: "Image recognition and processing for quality control and security." },
      { title: "Natural Language Processing", desc: "Sentiment analysis, document processing, and intelligent search." }
    ],
    benefits: [
      { title: "Automation", metric: "+50%", desc: "Significant reduction in repetitive, manual tasks." },
      { title: "Decision Making", metric: "Data-Driven", desc: "Actionable insights derived from complex datasets." },
      { title: "Customer Experience", metric: "Enhanced", desc: "Personalized interactions and 24/7 intelligent support." },
      { title: "Innovation", metric: "High", desc: "Unlock new business models and revenue streams." }
    ],
    process: [
      { step: "01", title: "Use Case Discovery", desc: "Identify high-value AI opportunities within your business." },
      { step: "02", title: "Data Preparation", desc: "Data gathering, cleaning, and feature engineering." },
      { step: "03", title: "Model Development", desc: "Training, testing, and optimizing machine learning models." },
      { step: "04", title: "Integration & Monitoring", desc: "Deploying models into production and monitoring performance drift." }
    ],
    image: "/outcome_driven.jpg",
    customLogo: "/Acceleron_Short_Logo.png"
  },
  {
    slug: "network-security-implementation",
    title: "Network Security Implementation",
    category: "IT & Custom Solutions",
    categorySlug: "it-custom-solutions",
    desc: "Robust cybersecurity architectures to protect your data and network perimeter.",
    overview: "Safeguard your critical digital assets against evolving cyber threats. We design and implement comprehensive network security solutions, including Next-Generation Firewalls, Zero Trust architectures, and intrusion prevention systems, ensuring your enterprise remains secure.",
    features: [
      { title: "Next-Gen Firewalls (NGFW)", desc: "Advanced threat protection, application control, and deep packet inspection." },
      { title: "Zero Trust Network Access", desc: "Secure, identity-based access to applications from anywhere." },
      { title: "Intrusion Detection/Prevention (IDS/IPS)", desc: "Real-time monitoring and blocking of malicious network traffic." },
      { title: "VPN & Secure Remote Access", desc: "Encrypted connectivity for your remote and mobile workforce." }
    ],
    benefits: [
      { title: "Threat Mitigation", metric: "99%", desc: "Proactive defense against malware, ransomware, and attacks." },
      { title: "Data Protection", metric: "High", desc: "Secure critical business information and customer data." },
      { title: "Compliance", metric: "100%", desc: "Adherence to industry security standards (ISO 27001, GDPR)." },
      { title: "Network Visibility", metric: "Complete", desc: "Deep insights into network traffic and user behavior." }
    ],
    process: [
      { step: "01", title: "Security Assessment", desc: "Identify vulnerabilities and gaps in the current network architecture." },
      { step: "02", title: "Architecture Design", desc: "Design a multi-layered security strategy tailored to your risk profile." },
      { step: "03", title: "Implementation", desc: "Deploy and configure firewalls, VPNs, and security appliances." },
      { step: "04", title: "Monitoring & Tuning", desc: "Continuous monitoring, policy optimization, and incident response." }
    ],
    image: "/Checkpoint_Harmony_Banner.png",
    customLogo: "/Acceleron_Short_Logo.png"
  },
  {
    slug: "security-audits",
    title: "Security Audits",
    category: "IT & Custom Solutions",
    categorySlug: "it-custom-solutions",
    desc: "Comprehensive vulnerability assessments and penetration testing to identify risks.",
    overview: "Proactively identify and remediate security weaknesses before they can be exploited. Our expert security audits and penetration testing services provide a thorough evaluation of your IT environment, applications, and processes against industry best practices.",
    features: [
      { title: "Vulnerability Assessments", desc: "Automated and manual scanning to identify known security flaws." },
      { title: "Penetration Testing", desc: "Ethical hacking to simulate real-world cyberattacks on your systems." },
      { title: "Compliance Audits", desc: "Assessments against regulatory frameworks (HIPAA, PCI-DSS, ISO)." },
      { title: "Security Posture Review", desc: "Evaluation of security policies, access controls, and incident response plans." }
    ],
    benefits: [
      { title: "Risk Reduction", metric: "Significant", desc: "Identify and patch vulnerabilities proactively." },
      { title: "Regulatory Compliance", metric: "Assured", desc: "Avoid fines and legal issues by meeting compliance mandates." },
      { title: "Customer Trust", metric: "Enhanced", desc: "Demonstrate commitment to protecting sensitive data." },
      { title: "Actionable Insights", metric: "Detailed", desc: "Clear reports with prioritized remediation steps." }
    ],
    process: [
      { step: "01", title: "Scoping", desc: "Define the boundaries, objectives, and rules of engagement for the audit." },
      { step: "02", title: "Execution", desc: "Perform vulnerability scans, penetration tests, and policy reviews." },
      { step: "03", title: "Analysis & Reporting", desc: "Compile findings into a comprehensive report with risk ratings." },
      { step: "04", title: "Remediation Support", desc: "Provide guidance on patching and securing identified vulnerabilities." }
    ],
    image: "/DPDP_ACT_Banner.png",
    customLogo: "/Acceleron_Short_Logo.png"
  },
  {
    slug: "it-system-audits",
    title: "IT System Audits",
    category: "IT & Custom Solutions",
    categorySlug: "it-custom-solutions",
    desc: "In-depth evaluations of your IT infrastructure for performance, efficiency, and alignment.",
    overview: "Ensure your IT investments are delivering maximum value. Our IT System Audits evaluate the performance, reliability, and alignment of your technology stack with business objectives, identifying areas for optimization and modernization.",
    features: [
      { title: "Infrastructure Assessment", desc: "Evaluate server, storage, and network performance and capacity." },
      { title: "Cloud Readiness Audit", desc: "Assess legacy applications and infrastructure for cloud migration suitability." },
      { title: "Software Licensing Audit", desc: "Ensure compliance and optimize costs for enterprise software." },
      { title: "IT Governance Review", desc: "Evaluate IT management processes, disaster recovery, and operational maturity." }
    ],
    benefits: [
      { title: "Cost Optimization", metric: "15-20%", desc: "Identify wasted resources and optimize licensing and hardware usage." },
      { title: "System Performance", metric: "Improved", desc: "Resolve bottlenecks to enhance overall system speed and reliability." },
      { title: "Strategic Alignment", metric: "Aligned", desc: "Ensure IT initiatives support overarching business goals." },
      { title: "Future-Proofing", metric: "High", desc: "Roadmap for modernization and adopting emerging technologies." }
    ],
    process: [
      { step: "01", title: "Discovery & Data Gathering", desc: "Collect data on inventory, performance metrics, and processes." },
      { step: "02", title: "Analysis", desc: "Evaluate findings against industry benchmarks and best practices." },
      { step: "03", title: "Gap Identification", desc: "Identify performance bottlenecks, risks, and inefficiencies." },
      { step: "04", title: "Strategic Recommendations", desc: "Deliver an actionable roadmap for IT optimization and transformation." }
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
