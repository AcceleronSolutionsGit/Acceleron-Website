export interface SubServiceData {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  desc: string;
  overview: string;
  features: Array<{ title: string; desc: string }>;
  benefits: Array<{ title: string; metric?: string; desc: string }>;
  process: Array<{ step: string; title: string; desc: string }>;
  image: string;
  customImage?: string; // Slot for user custom image
  customLogo?: string; // Product software logo
}

export const SUB_SERVICES_DATA: SubServiceData[] = [
  {
    slug: "sap-ams",
    title: "SAP AMS",
    category: "SAP",
    categorySlug: "sap",
    desc: "24/7 application management, monitoring, and optimization for your SAP environment.",
    overview: "Ensure peak performance, continuous compliance, and high availability across your SAP applications with our L1-L3 AMS services. We handle routine maintenance, security patching, ABAP enhancements, and basis administration so your internal team can focus on innovation.",
    features: [
      { title: "24/7 Basis & Application Support", desc: "Proactive system health monitoring and rapid incident remediation." },
      { title: "ABAP Custom Development & Enhancements", desc: "Continuous improvement, custom reports, and Fiori app updates." },
      { title: "Security Patching & Compliance Audit", desc: "Regular kernel updates, role checks, and vulnerability management." },
      { title: "Dedicated Delivery Management", desc: "Monthly SLA reviews, capacity planning, and strategic IT recommendations." }
    ],
    benefits: [
      { title: "Resolution Time", metric: "-50%", desc: "Rapid mean-time-to-resolve (MTTR) with dedicated L2/L3 engineers." },
      { title: "System Stability", metric: "99.95%", desc: "SLA-backed application uptime and proactive alerts." },
      { title: "Support Costs", metric: "-40%", desc: "Predictable monthly operational cost vs maintaining full in-house staff." },
      { title: "Compliance", metric: "100%", desc: "Continuous alignment with audit and security requirements." }
    ],
    process: [
      { step: "01", title: "Transition & Shadowing", desc: "Knowledge transfer and documentation of custom ABAP objects and SOPs." },
      { step: "02", title: "SLA Activation", desc: "Go-live of ticketing portal and 24/7 monitoring tools." },
      { step: "03", title: "Steady-State Support", desc: "Daily ticket handling, weekly maintenance, and patch deployments." },
      { step: "04", title: "Continuous Improvement", desc: "Quarterly reviews identifying automation and performance optimization areas." }
    ],
    image: "/SAP_AMS_Banner.png"
  },
  {
    slug: "sap-s-4hana-implementation",
    title: "SAP S/4HANA implementation",
    category: "SAP",
    categorySlug: "sap",
    desc: "Greenfield and brownfield migrations to S/4HANA with minimal business disruption.",
    overview: "Modernize your digital core by migrating from SAP ECC to S/4HANA. Whether opting for a clean-slate Greenfield implementation, a system conversion Brownfield approach, or a selective data transition Bluefield approach, we deliver high-speed memory processing and real-time ERP capabilities.",
    features: [
      { title: "ECC Conversion Readiness Audit", desc: "Custom code simplification checks and data volume management analysis." },
      { title: "SAP Fiori UX Overhaul", desc: "Role-based, responsive web applications replacing legacy GUI screens." },
      { title: "Universal Journal & Finance Core", desc: "Single source of truth for financial accounting and management accounting." },
      { title: "Selective Data Transition (Bluefield)", desc: "Migrating only historical data that matters while cleaning up master records." }
    ],
    benefits: [
      { title: "Database Footprint", metric: "-65%", desc: "Compression and simplification of data tables in SAP HANA memory." },
      { title: "Report Execution", metric: "100x", desc: "Instant execution of complex financial and inventory reports." },
      { title: "User Satisfaction", metric: "+80%", desc: "Intuitive mobile-friendly Fiori interface across all departments." },
      { title: "Process Automation", metric: "40%", desc: "Embedded machine learning workflows reducing manual entries." }
    ],
    process: [
      { step: "01", title: "Readiness Check & Sandbox", desc: "Running SAP transformation assessments and code scan audits." },
      { step: "02", title: "Technical Conversion & Cleanup", desc: "Executing database migration and ABAP custom code remediation." },
      { step: "03", title: "Functional Testing & UAT", desc: "Rigorous validation of end-to-end business scenarios and Fiori apps." },
      { step: "04", title: "Go-Live & Hyper-care", desc: "Final data synchronization and intensive post-launch support." }
    ],
    image: "/SAP_Implementation_Banner.png",
    customLogo: "/sap_s4hana-transparentbg.png"
  },
  {
    slug: "sap-integration",
    title: "SAP integration",
    category: "SAP",
    categorySlug: "sap",
    desc: "Human Experience Management and Customer Experience solutions for end-to-end workforce and customer engagement.",
    overview: "Empower your organization with integrated Human Experience Management (HXM) and Customer Experience (CX) suites. We bridge workforce talent optimization with omni-channel customer engagement, ensuring aligned data flows, automated lifecycle management, and high-conversion experiences across every touchpoint.",
    features: [
      { title: "SuccessFactors Core HR & Payroll", desc: "Global employee records, localized payroll compliance, and automated HR workflows." },
      { title: "Talent & Performance Management", desc: "Goal tracking, continuous feedback, and AI-driven career pathing and upskilling." },
      { title: "SAP Commerce & Sales Cloud", desc: "B2B/B2C e-commerce platforms with intelligent pricing, CPQ, and order fulfillment." },
      { title: "Omni-channel Customer Service", desc: "Unified agent desktop, ticket routing, and AI chatbots powered by SAP Service Cloud." }
    ],
    benefits: [
      { title: "Workforce Productivity", metric: "+35%", desc: "Increase in HR administrative efficiency via automated self-service." },
      { title: "Customer Retention", metric: "2.4x", desc: "Higher repeat conversion rates across unified commerce touchpoints." },
      { title: "Rapid Onboarding", metric: "-40%", desc: "Reduction in time-to-productivity for new hires globally." },
      { title: "Data Accuracy", metric: "99.8%", desc: "Elimination of siloed employee and customer records." }
    ],
    process: [
      { step: "01", title: "Experience Audit", desc: "Mapping employee journeys and customer touchpoint bottlenecks." },
      { step: "02", title: "Architecture Design", desc: "Configuring SuccessFactors and CX modules for custom business rules." },
      { step: "03", title: "Integration & Migration", desc: "Connecting core ERP, payroll, and legacy CRM systems securely." },
      { step: "04", title: "Adoption & Go-Live", desc: "Role-based user training and hyper-care monitoring." }
    ],
    image: "/SAP_Integration_Banner.png",
    customLogo: "/sap-cx-logo.jpg"
  },
  {
    slug: "rise-with-s-4hana-implementation",
    title: "RISE with S/4HANA implementation",
    category: "SAP",
    categorySlug: "sap",
    desc: "End-to-end business transformation as a service — infrastructure, platform, and applications.",
    overview: "Accelerate your transition to the intelligent enterprise with RISE with SAP. We guide you through the complete bundle: SAP S/4HANA Cloud, Business Technology Platform (BTP), Business Network access, and business process intelligence—all under a single contract and SLA.",
    features: [
      { title: "SAP S/4HANA Cloud Edition", desc: "Private or public cloud deployment with modern embedded AI workflows." },
      { title: "Business Process Intelligence", desc: "Process mining and gap analysis via SAP Signavio integration." },
      { title: "SAP BTP Cloud Credits", desc: "Platform tools for custom extensions, data integration, and automation." },
      { title: "Single SLA Governance", desc: "Unified accountability for infrastructure, software, and technical support." }
    ],
    benefits: [
      { title: "Time to Value", metric: "2x Faster", desc: "Rapid deployment utilizing standardized SAP best practices." },
      { title: "IT Complexity", metric: "-45%", desc: "Consolidated contracts and unified cloud infrastructure management." },
      { title: "Innovation Agility", metric: "Continuous", desc: "Automatic quarterly or bi-annual feature updates." },
      { title: "Process Efficiency", metric: "+30%", desc: "Streamlined core operations across finance and supply chain." }
    ],
    process: [
      { step: "01", title: "Signavio Process Discovery", desc: "Benchmarking current operations and identifying optimization gains." },
      { step: "02", title: "RISE Blueprinting", desc: "Tailoring SAP S/4HANA Cloud scope and BTP extension architecture." },
      { step: "03", title: "Agile Implementation", desc: "Iterative sprints deploying core modules and custom BTP apps." },
      { step: "04", title: "Operational Transition", desc: "Handover to SAP Cloud Operations and continuous SLA monitoring." }
    ],
    image: "/SAP_Implementation_Banner.png",
    customLogo: "/vital-wires-Rise-with-SAP-3.png"
  },
  {
    slug: "sap-migration-to-cloud",
    title: "SAP Migration to Cloud",
    category: "SAP",
    categorySlug: "sap",
    desc: "Seamless lift-and-shift or re-architecture of on-premise SAP systems to cloud-native deployments.",
    overview: "Transition your mission-critical SAP workloads to hyperscale public or private clouds (AWS, Azure, GCP) with zero operational disruption. Our proven migration factory approach combines automated testing, near-zero downtime cutovers, and comprehensive security hardening.",
    features: [
      { title: "Cloud Assessment & Strategy", desc: "TCO modeling, right-sizing analysis, and cloud landing zone architecture." },
      { title: "Near-Zero Downtime Migration", desc: "Advanced data replication ensuring business continuity during cutover." },
      { title: "Multi-Cloud & Hybrid Options", desc: "Deployments across hyperscalers optimized for performance and compliance." },
      { title: "Post-Migration Optimization", desc: "Infrastructure fine-tuning, cost optimization, and high availability setup." }
    ],
    benefits: [
      { title: "Infra Agility", metric: "+60%", desc: "Faster provisioning of SAP environments and sandbox clones." },
      { title: "Operational Costs", metric: "-35%", desc: "Reduction in on-premise hardware maintenance and energy usage." },
      { title: "System Uptime", metric: "99.99%", desc: "Enterprise SLA with automated disaster recovery." },
      { title: "Cutover Speed", metric: "<4 Hours", desc: "Minimal weekend downtime during go-live switchover." }
    ],
    process: [
      { step: "01", title: "Cloud Discovery", desc: "Sizing landscape, analyzing dependencies, and selecting hyperscaler." },
      { step: "02", title: "Sandbox Migration", desc: "Executing pilot run to benchmark transfer speeds and validate configs." },
      { step: "03", title: "Production Cutover", desc: "Final delta sync and DNS switchover during planned maintenance window." },
      { step: "04", title: "Hyper-care & FinOps", desc: "Monitoring performance and right-sizing cloud instances post-launch." }
    ],
    image: "/SAP_Implementation_Banner.png"
  },
  {
    slug: "sap-custom-development",
    title: "SAP Custom Development",
    category: "SAP",
    categorySlug: "sap",
    desc: "Real-time analytics, planning, and business intelligence across your entire SAP landscape.",
    overview: "Unlock augmented business intelligence and enterprise planning with SAP Analytics Cloud (SAC) and BW/4HANA. We transform fragmented transactional data into real-time executive dashboards, predictive financial models, and actionable operational insights.",
    features: [
      { title: "SAP Analytics Cloud (SAC)", desc: "Unified BI, enterprise planning, and augmented analytics in a single cloud engine." },
      { title: "Predictive & AI Modeling", desc: "Automated anomaly detection, smart forecasting, and driver-based simulations." },
      { title: "BW/4HANA & Datasphere", desc: "Modern data warehousing combining SAP and non-SAP data sources seamlessly." },
      { title: "Executive Digital Boardroom", desc: "Real-time interactive dashboards tailored for C-suite strategic decisions." }
    ],
    benefits: [
      { title: "Decision Speed", metric: "10x", desc: "Faster financial closing and rolling forecast cycles." },
      { title: "Forecast Accuracy", metric: "+28%", desc: "Improved demand and revenue prediction precision." },
      { title: "TCO Reduction", metric: "-30%", desc: "Consolidation of legacy reporting tools into one platform." },
      { title: "Live Insights", metric: "Real-Time", desc: "Instant visibility into supply chain and financial KPIs." }
    ],
    process: [
      { step: "01", title: "Data Assessment", desc: "Evaluating existing BW models, tables, and reporting gaps." },
      { step: "02", title: "Model Blueprinting", desc: "Designing star schemas, data models, and KPI hierarchies." },
      { step: "03", title: "Dashboard Engineering", desc: "Building interactive SAC stories and planning input sheets." },
      { step: "04", title: "Enablement", desc: "Training power users and establishing self-service BI governance." }
    ],
    image: "/SAP_Implementation_Banner.png",
    customLogo: "/Sap_analytics-cloud.png"
  },
  {
    slug: "sap-technical-upgrade",
    title: "SAP Technical Upgrade",
    category: "SAP",
    categorySlug: "sap",
    desc: "Human Experience Management and Customer Experience solutions for end-to-end workforce and customer engagement.",
    overview: "Empower your organization with integrated Human Experience Management (HXM) and Customer Experience (CX) suites. We bridge workforce talent optimization with omni-channel customer engagement, ensuring aligned data flows, automated lifecycle management, and high-conversion experiences across every touchpoint.",
    features: [
      { title: "SuccessFactors Core HR & Payroll", desc: "Global employee records, localized payroll compliance, and automated HR workflows." },
      { title: "Talent & Performance Management", desc: "Goal tracking, continuous feedback, and AI-driven career pathing and upskilling." },
      { title: "SAP Commerce & Sales Cloud", desc: "B2B/B2C e-commerce platforms with intelligent pricing, CPQ, and order fulfillment." },
      { title: "Omni-channel Customer Service", desc: "Unified agent desktop, ticket routing, and AI chatbots powered by SAP Service Cloud." }
    ],
    benefits: [
      { title: "Workforce Productivity", metric: "+35%", desc: "Increase in HR administrative efficiency via automated self-service." },
      { title: "Customer Retention", metric: "2.4x", desc: "Higher repeat conversion rates across unified commerce touchpoints." },
      { title: "Rapid Onboarding", metric: "-40%", desc: "Reduction in time-to-productivity for new hires globally." },
      { title: "Data Accuracy", metric: "99.8%", desc: "Elimination of siloed employee and customer records." }
    ],
    process: [
      { step: "01", title: "Experience Audit", desc: "Mapping employee journeys and customer touchpoint bottlenecks." },
      { step: "02", title: "Architecture Design", desc: "Configuring SuccessFactors and CX modules for custom business rules." },
      { step: "03", title: "Integration & Migration", desc: "Connecting core ERP, payroll, and legacy CRM systems securely." },
      { step: "04", title: "Adoption & Go-Live", desc: "Role-based user training and hyper-care monitoring." }
    ],
    image: "/SAP_Implementation_Banner.png",
    customLogo: "/sap-cx-logo.jpg"
  },
  {
    slug: "sap-resource-augmentation",
    title: "SAP Resource Augmentation",
    category: "SAP",
    categorySlug: "sap",
    desc: "Human Experience Management and Customer Experience solutions for end-to-end workforce and customer engagement.",
    overview: "Empower your organization with integrated Human Experience Management (HXM) and Customer Experience (CX) suites. We bridge workforce talent optimization with omni-channel customer engagement, ensuring aligned data flows, automated lifecycle management, and high-conversion experiences across every touchpoint.",
    features: [
      { title: "SuccessFactors Core HR & Payroll", desc: "Global employee records, localized payroll compliance, and automated HR workflows." },
      { title: "Talent & Performance Management", desc: "Goal tracking, continuous feedback, and AI-driven career pathing and upskilling." },
      { title: "SAP Commerce & Sales Cloud", desc: "B2B/B2C e-commerce platforms with intelligent pricing, CPQ, and order fulfillment." },
      { title: "Omni-channel Customer Service", desc: "Unified agent desktop, ticket routing, and AI chatbots powered by SAP Service Cloud." }
    ],
    benefits: [
      { title: "Workforce Productivity", metric: "+35%", desc: "Increase in HR administrative efficiency via automated self-service." },
      { title: "Customer Retention", metric: "2.4x", desc: "Higher repeat conversion rates across unified commerce touchpoints." },
      { title: "Rapid Onboarding", metric: "-40%", desc: "Reduction in time-to-productivity for new hires globally." },
      { title: "Data Accuracy", metric: "99.8%", desc: "Elimination of siloed employee and customer records." }
    ],
    process: [
      { step: "01", title: "Experience Audit", desc: "Mapping employee journeys and customer touchpoint bottlenecks." },
      { step: "02", title: "Architecture Design", desc: "Configuring SuccessFactors and CX modules for custom business rules." },
      { step: "03", title: "Integration & Migration", desc: "Connecting core ERP, payroll, and legacy CRM systems securely." },
      { step: "04", title: "Adoption & Go-Live", desc: "Role-based user training and hyper-care monitoring." }
    ],
    image: "/SAP_Implementation_Banner.png",
    customLogo: "/sap-cx-logo.jpg"
  },
  {
    slug: "sap-others",
    title: "SAP - Others",
    category: "SAP",
    categorySlug: "sap",
    desc: "Human Experience Management and Customer Experience solutions for end-to-end workforce and customer engagement.",
    overview: "Empower your organization with integrated Human Experience Management (HXM) and Customer Experience (CX) suites. We bridge workforce talent optimization with omni-channel customer engagement, ensuring aligned data flows, automated lifecycle management, and high-conversion experiences across every touchpoint.",
    features: [
      { title: "SuccessFactors Core HR & Payroll", desc: "Global employee records, localized payroll compliance, and automated HR workflows." },
      { title: "Talent & Performance Management", desc: "Goal tracking, continuous feedback, and AI-driven career pathing and upskilling." },
      { title: "SAP Commerce & Sales Cloud", desc: "B2B/B2C e-commerce platforms with intelligent pricing, CPQ, and order fulfillment." },
      { title: "Omni-channel Customer Service", desc: "Unified agent desktop, ticket routing, and AI chatbots powered by SAP Service Cloud." }
    ],
    benefits: [
      { title: "Workforce Productivity", metric: "+35%", desc: "Increase in HR administrative efficiency via automated self-service." },
      { title: "Customer Retention", metric: "2.4x", desc: "Higher repeat conversion rates across unified commerce touchpoints." },
      { title: "Rapid Onboarding", metric: "-40%", desc: "Reduction in time-to-productivity for new hires globally." },
      { title: "Data Accuracy", metric: "99.8%", desc: "Elimination of siloed employee and customer records." }
    ],
    process: [
      { step: "01", title: "Experience Audit", desc: "Mapping employee journeys and customer touchpoint bottlenecks." },
      { step: "02", title: "Architecture Design", desc: "Configuring SuccessFactors and CX modules for custom business rules." },
      { step: "03", title: "Integration & Migration", desc: "Connecting core ERP, payroll, and legacy CRM systems securely." },
      { step: "04", title: "Adoption & Go-Live", desc: "Role-based user training and hyper-care monitoring." }
    ],
    image: "/SAP_Implementation_Banner.png",
    customLogo: "/sap-cx-logo.jpg"
  },
  {
    slug: "zoho-crm",
    title: "Zoho CRM",
    category: "Zoho",
    categorySlug: "zoho",
    desc: "Human Experience Management and Customer Experience solutions for end-to-end workforce and customer engagement.",
    overview: "Empower your organization with integrated Human Experience Management (HXM) and Customer Experience (CX) suites. We bridge workforce talent optimization with omni-channel customer engagement, ensuring aligned data flows, automated lifecycle management, and high-conversion experiences across every touchpoint.",
    features: [
      { title: "SuccessFactors Core HR & Payroll", desc: "Global employee records, localized payroll compliance, and automated HR workflows." },
      { title: "Talent & Performance Management", desc: "Goal tracking, continuous feedback, and AI-driven career pathing and upskilling." },
      { title: "SAP Commerce & Sales Cloud", desc: "B2B/B2C e-commerce platforms with intelligent pricing, CPQ, and order fulfillment." },
      { title: "Omni-channel Customer Service", desc: "Unified agent desktop, ticket routing, and AI chatbots powered by SAP Service Cloud." }
    ],
    benefits: [
      { title: "Workforce Productivity", metric: "+35%", desc: "Increase in HR administrative efficiency via automated self-service." },
      { title: "Customer Retention", metric: "2.4x", desc: "Higher repeat conversion rates across unified commerce touchpoints." },
      { title: "Rapid Onboarding", metric: "-40%", desc: "Reduction in time-to-productivity for new hires globally." },
      { title: "Data Accuracy", metric: "99.8%", desc: "Elimination of siloed employee and customer records." }
    ],
    process: [
      { step: "01", title: "Experience Audit", desc: "Mapping employee journeys and customer touchpoint bottlenecks." },
      { step: "02", title: "Architecture Design", desc: "Configuring SuccessFactors and CX modules for custom business rules." },
      { step: "03", title: "Integration & Migration", desc: "Connecting core ERP, payroll, and legacy CRM systems securely." },
      { step: "04", title: "Adoption & Go-Live", desc: "Role-based user training and hyper-care monitoring." }
    ],
    image: "/ZOHO_CRM_Banner.png",
    customLogo: "/sap-cx-logo.jpg"
  },
  {
    slug: "zoho-books",
    title: "Zoho Books",
    category: "Zoho",
    categorySlug: "zoho",
    desc: "Human Experience Management and Customer Experience solutions for end-to-end workforce and customer engagement.",
    overview: "Empower your organization with integrated Human Experience Management (HXM) and Customer Experience (CX) suites. We bridge workforce talent optimization with omni-channel customer engagement, ensuring aligned data flows, automated lifecycle management, and high-conversion experiences across every touchpoint.",
    features: [
      { title: "SuccessFactors Core HR & Payroll", desc: "Global employee records, localized payroll compliance, and automated HR workflows." },
      { title: "Talent & Performance Management", desc: "Goal tracking, continuous feedback, and AI-driven career pathing and upskilling." },
      { title: "SAP Commerce & Sales Cloud", desc: "B2B/B2C e-commerce platforms with intelligent pricing, CPQ, and order fulfillment." },
      { title: "Omni-channel Customer Service", desc: "Unified agent desktop, ticket routing, and AI chatbots powered by SAP Service Cloud." }
    ],
    benefits: [
      { title: "Workforce Productivity", metric: "+35%", desc: "Increase in HR administrative efficiency via automated self-service." },
      { title: "Customer Retention", metric: "2.4x", desc: "Higher repeat conversion rates across unified commerce touchpoints." },
      { title: "Rapid Onboarding", metric: "-40%", desc: "Reduction in time-to-productivity for new hires globally." },
      { title: "Data Accuracy", metric: "99.8%", desc: "Elimination of siloed employee and customer records." }
    ],
    process: [
      { step: "01", title: "Experience Audit", desc: "Mapping employee journeys and customer touchpoint bottlenecks." },
      { step: "02", title: "Architecture Design", desc: "Configuring SuccessFactors and CX modules for custom business rules." },
      { step: "03", title: "Integration & Migration", desc: "Connecting core ERP, payroll, and legacy CRM systems securely." },
      { step: "04", title: "Adoption & Go-Live", desc: "Role-based user training and hyper-care monitoring." }
    ],
    image: "/ZOHO_CRM_Banner.png",
    customLogo: "/sap-cx-logo.jpg"
  },
  {
    slug: "zoho-hrms-people-and-payroll",
    title: "Zoho HRMS (People and Payroll)",
    category: "Zoho",
    categorySlug: "zoho",
    desc: "Human Experience Management and Customer Experience solutions for end-to-end workforce and customer engagement.",
    overview: "Empower your organization with integrated Human Experience Management (HXM) and Customer Experience (CX) suites. We bridge workforce talent optimization with omni-channel customer engagement, ensuring aligned data flows, automated lifecycle management, and high-conversion experiences across every touchpoint.",
    features: [
      { title: "SuccessFactors Core HR & Payroll", desc: "Global employee records, localized payroll compliance, and automated HR workflows." },
      { title: "Talent & Performance Management", desc: "Goal tracking, continuous feedback, and AI-driven career pathing and upskilling." },
      { title: "SAP Commerce & Sales Cloud", desc: "B2B/B2C e-commerce platforms with intelligent pricing, CPQ, and order fulfillment." },
      { title: "Omni-channel Customer Service", desc: "Unified agent desktop, ticket routing, and AI chatbots powered by SAP Service Cloud." }
    ],
    benefits: [
      { title: "Workforce Productivity", metric: "+35%", desc: "Increase in HR administrative efficiency via automated self-service." },
      { title: "Customer Retention", metric: "2.4x", desc: "Higher repeat conversion rates across unified commerce touchpoints." },
      { title: "Rapid Onboarding", metric: "-40%", desc: "Reduction in time-to-productivity for new hires globally." },
      { title: "Data Accuracy", metric: "99.8%", desc: "Elimination of siloed employee and customer records." }
    ],
    process: [
      { step: "01", title: "Experience Audit", desc: "Mapping employee journeys and customer touchpoint bottlenecks." },
      { step: "02", title: "Architecture Design", desc: "Configuring SuccessFactors and CX modules for custom business rules." },
      { step: "03", title: "Integration & Migration", desc: "Connecting core ERP, payroll, and legacy CRM systems securely." },
      { step: "04", title: "Adoption & Go-Live", desc: "Role-based user training and hyper-care monitoring." }
    ],
    image: "/Zoho_HRMS_Banner.png",
    customLogo: "/sap-cx-logo.jpg"
  },
  {
    slug: "zoho-erp",
    title: "Zoho ERP",
    category: "Zoho",
    categorySlug: "zoho",
    desc: "Human Experience Management and Customer Experience solutions for end-to-end workforce and customer engagement.",
    overview: "Empower your organization with integrated Human Experience Management (HXM) and Customer Experience (CX) suites. We bridge workforce talent optimization with omni-channel customer engagement, ensuring aligned data flows, automated lifecycle management, and high-conversion experiences across every touchpoint.",
    features: [
      { title: "SuccessFactors Core HR & Payroll", desc: "Global employee records, localized payroll compliance, and automated HR workflows." },
      { title: "Talent & Performance Management", desc: "Goal tracking, continuous feedback, and AI-driven career pathing and upskilling." },
      { title: "SAP Commerce & Sales Cloud", desc: "B2B/B2C e-commerce platforms with intelligent pricing, CPQ, and order fulfillment." },
      { title: "Omni-channel Customer Service", desc: "Unified agent desktop, ticket routing, and AI chatbots powered by SAP Service Cloud." }
    ],
    benefits: [
      { title: "Workforce Productivity", metric: "+35%", desc: "Increase in HR administrative efficiency via automated self-service." },
      { title: "Customer Retention", metric: "2.4x", desc: "Higher repeat conversion rates across unified commerce touchpoints." },
      { title: "Rapid Onboarding", metric: "-40%", desc: "Reduction in time-to-productivity for new hires globally." },
      { title: "Data Accuracy", metric: "99.8%", desc: "Elimination of siloed employee and customer records." }
    ],
    process: [
      { step: "01", title: "Experience Audit", desc: "Mapping employee journeys and customer touchpoint bottlenecks." },
      { step: "02", title: "Architecture Design", desc: "Configuring SuccessFactors and CX modules for custom business rules." },
      { step: "03", title: "Integration & Migration", desc: "Connecting core ERP, payroll, and legacy CRM systems securely." },
      { step: "04", title: "Adoption & Go-Live", desc: "Role-based user training and hyper-care monitoring." }
    ],
    image: "/ZOHO_CRM_Banner.png",
    customLogo: "/sap-cx-logo.jpg"
  },
  {
    slug: "zoho-mail",
    title: "Zoho Mail",
    category: "Zoho",
    categorySlug: "zoho",
    desc: "Human Experience Management and Customer Experience solutions for end-to-end workforce and customer engagement.",
    overview: "Empower your organization with integrated Human Experience Management (HXM) and Customer Experience (CX) suites. We bridge workforce talent optimization with omni-channel customer engagement, ensuring aligned data flows, automated lifecycle management, and high-conversion experiences across every touchpoint.",
    features: [
      { title: "SuccessFactors Core HR & Payroll", desc: "Global employee records, localized payroll compliance, and automated HR workflows." },
      { title: "Talent & Performance Management", desc: "Goal tracking, continuous feedback, and AI-driven career pathing and upskilling." },
      { title: "SAP Commerce & Sales Cloud", desc: "B2B/B2C e-commerce platforms with intelligent pricing, CPQ, and order fulfillment." },
      { title: "Omni-channel Customer Service", desc: "Unified agent desktop, ticket routing, and AI chatbots powered by SAP Service Cloud." }
    ],
    benefits: [
      { title: "Workforce Productivity", metric: "+35%", desc: "Increase in HR administrative efficiency via automated self-service." },
      { title: "Customer Retention", metric: "2.4x", desc: "Higher repeat conversion rates across unified commerce touchpoints." },
      { title: "Rapid Onboarding", metric: "-40%", desc: "Reduction in time-to-productivity for new hires globally." },
      { title: "Data Accuracy", metric: "99.8%", desc: "Elimination of siloed employee and customer records." }
    ],
    process: [
      { step: "01", title: "Experience Audit", desc: "Mapping employee journeys and customer touchpoint bottlenecks." },
      { step: "02", title: "Architecture Design", desc: "Configuring SuccessFactors and CX modules for custom business rules." },
      { step: "03", title: "Integration & Migration", desc: "Connecting core ERP, payroll, and legacy CRM systems securely." },
      { step: "04", title: "Adoption & Go-Live", desc: "Role-based user training and hyper-care monitoring." }
    ],
    image: "/ZOHO_CRM_Banner.png",
    customLogo: "/sap-cx-logo.jpg"
  },
  {
    slug: "manageengine-itsm",
    title: "ManageEngine-ITSM",
    category: "ManageEngine",
    categorySlug: "manageengine",
    desc: "Human Experience Management and Customer Experience solutions for end-to-end workforce and customer engagement.",
    overview: "Empower your organization with integrated Human Experience Management (HXM) and Customer Experience (CX) suites. We bridge workforce talent optimization with omni-channel customer engagement, ensuring aligned data flows, automated lifecycle management, and high-conversion experiences across every touchpoint.",
    features: [
      { title: "SuccessFactors Core HR & Payroll", desc: "Global employee records, localized payroll compliance, and automated HR workflows." },
      { title: "Talent & Performance Management", desc: "Goal tracking, continuous feedback, and AI-driven career pathing and upskilling." },
      { title: "SAP Commerce & Sales Cloud", desc: "B2B/B2C e-commerce platforms with intelligent pricing, CPQ, and order fulfillment." },
      { title: "Omni-channel Customer Service", desc: "Unified agent desktop, ticket routing, and AI chatbots powered by SAP Service Cloud." }
    ],
    benefits: [
      { title: "Workforce Productivity", metric: "+35%", desc: "Increase in HR administrative efficiency via automated self-service." },
      { title: "Customer Retention", metric: "2.4x", desc: "Higher repeat conversion rates across unified commerce touchpoints." },
      { title: "Rapid Onboarding", metric: "-40%", desc: "Reduction in time-to-productivity for new hires globally." },
      { title: "Data Accuracy", metric: "99.8%", desc: "Elimination of siloed employee and customer records." }
    ],
    process: [
      { step: "01", title: "Experience Audit", desc: "Mapping employee journeys and customer touchpoint bottlenecks." },
      { step: "02", title: "Architecture Design", desc: "Configuring SuccessFactors and CX modules for custom business rules." },
      { step: "03", title: "Integration & Migration", desc: "Connecting core ERP, payroll, and legacy CRM systems securely." },
      { step: "04", title: "Adoption & Go-Live", desc: "Role-based user training and hyper-care monitoring." }
    ],
    image: "/Manage_Engine_Banner.png",
    customLogo: "/sap-cx-logo.jpg"
  },
  {
    slug: "manageengine-op-manager",
    title: "ManageEngine-Op Manager",
    category: "ManageEngine",
    categorySlug: "manageengine",
    desc: "Human Experience Management and Customer Experience solutions for end-to-end workforce and customer engagement.",
    overview: "Empower your organization with integrated Human Experience Management (HXM) and Customer Experience (CX) suites. We bridge workforce talent optimization with omni-channel customer engagement, ensuring aligned data flows, automated lifecycle management, and high-conversion experiences across every touchpoint.",
    features: [
      { title: "SuccessFactors Core HR & Payroll", desc: "Global employee records, localized payroll compliance, and automated HR workflows." },
      { title: "Talent & Performance Management", desc: "Goal tracking, continuous feedback, and AI-driven career pathing and upskilling." },
      { title: "SAP Commerce & Sales Cloud", desc: "B2B/B2C e-commerce platforms with intelligent pricing, CPQ, and order fulfillment." },
      { title: "Omni-channel Customer Service", desc: "Unified agent desktop, ticket routing, and AI chatbots powered by SAP Service Cloud." }
    ],
    benefits: [
      { title: "Workforce Productivity", metric: "+35%", desc: "Increase in HR administrative efficiency via automated self-service." },
      { title: "Customer Retention", metric: "2.4x", desc: "Higher repeat conversion rates across unified commerce touchpoints." },
      { title: "Rapid Onboarding", metric: "-40%", desc: "Reduction in time-to-productivity for new hires globally." },
      { title: "Data Accuracy", metric: "99.8%", desc: "Elimination of siloed employee and customer records." }
    ],
    process: [
      { step: "01", title: "Experience Audit", desc: "Mapping employee journeys and customer touchpoint bottlenecks." },
      { step: "02", title: "Architecture Design", desc: "Configuring SuccessFactors and CX modules for custom business rules." },
      { step: "03", title: "Integration & Migration", desc: "Connecting core ERP, payroll, and legacy CRM systems securely." },
      { step: "04", title: "Adoption & Go-Live", desc: "Role-based user training and hyper-care monitoring." }
    ],
    image: "/Manage_Engine_Banner.png",
    customLogo: "/sap-cx-logo.jpg"
  },
  {
    slug: "manageengine-endpoint-control",
    title: "ManageEngine-Endpoint Control",
    category: "ManageEngine",
    categorySlug: "manageengine",
    desc: "Human Experience Management and Customer Experience solutions for end-to-end workforce and customer engagement.",
    overview: "Empower your organization with integrated Human Experience Management (HXM) and Customer Experience (CX) suites. We bridge workforce talent optimization with omni-channel customer engagement, ensuring aligned data flows, automated lifecycle management, and high-conversion experiences across every touchpoint.",
    features: [
      { title: "SuccessFactors Core HR & Payroll", desc: "Global employee records, localized payroll compliance, and automated HR workflows." },
      { title: "Talent & Performance Management", desc: "Goal tracking, continuous feedback, and AI-driven career pathing and upskilling." },
      { title: "SAP Commerce & Sales Cloud", desc: "B2B/B2C e-commerce platforms with intelligent pricing, CPQ, and order fulfillment." },
      { title: "Omni-channel Customer Service", desc: "Unified agent desktop, ticket routing, and AI chatbots powered by SAP Service Cloud." }
    ],
    benefits: [
      { title: "Workforce Productivity", metric: "+35%", desc: "Increase in HR administrative efficiency via automated self-service." },
      { title: "Customer Retention", metric: "2.4x", desc: "Higher repeat conversion rates across unified commerce touchpoints." },
      { title: "Rapid Onboarding", metric: "-40%", desc: "Reduction in time-to-productivity for new hires globally." },
      { title: "Data Accuracy", metric: "99.8%", desc: "Elimination of siloed employee and customer records." }
    ],
    process: [
      { step: "01", title: "Experience Audit", desc: "Mapping employee journeys and customer touchpoint bottlenecks." },
      { step: "02", title: "Architecture Design", desc: "Configuring SuccessFactors and CX modules for custom business rules." },
      { step: "03", title: "Integration & Migration", desc: "Connecting core ERP, payroll, and legacy CRM systems securely." },
      { step: "04", title: "Adoption & Go-Live", desc: "Role-based user training and hyper-care monitoring." }
    ],
    image: "/Manage_Engine_Banner.png",
    customLogo: "/sap-cx-logo.jpg"
  },
  {
    slug: "manageengine-mdm-plus",
    title: "ManageEngine-MDM Plus",
    category: "ManageEngine",
    categorySlug: "manageengine",
    desc: "Human Experience Management and Customer Experience solutions for end-to-end workforce and customer engagement.",
    overview: "Empower your organization with integrated Human Experience Management (HXM) and Customer Experience (CX) suites. We bridge workforce talent optimization with omni-channel customer engagement, ensuring aligned data flows, automated lifecycle management, and high-conversion experiences across every touchpoint.",
    features: [
      { title: "SuccessFactors Core HR & Payroll", desc: "Global employee records, localized payroll compliance, and automated HR workflows." },
      { title: "Talent & Performance Management", desc: "Goal tracking, continuous feedback, and AI-driven career pathing and upskilling." },
      { title: "SAP Commerce & Sales Cloud", desc: "B2B/B2C e-commerce platforms with intelligent pricing, CPQ, and order fulfillment." },
      { title: "Omni-channel Customer Service", desc: "Unified agent desktop, ticket routing, and AI chatbots powered by SAP Service Cloud." }
    ],
    benefits: [
      { title: "Workforce Productivity", metric: "+35%", desc: "Increase in HR administrative efficiency via automated self-service." },
      { title: "Customer Retention", metric: "2.4x", desc: "Higher repeat conversion rates across unified commerce touchpoints." },
      { title: "Rapid Onboarding", metric: "-40%", desc: "Reduction in time-to-productivity for new hires globally." },
      { title: "Data Accuracy", metric: "99.8%", desc: "Elimination of siloed employee and customer records." }
    ],
    process: [
      { step: "01", title: "Experience Audit", desc: "Mapping employee journeys and customer touchpoint bottlenecks." },
      { step: "02", title: "Architecture Design", desc: "Configuring SuccessFactors and CX modules for custom business rules." },
      { step: "03", title: "Integration & Migration", desc: "Connecting core ERP, payroll, and legacy CRM systems securely." },
      { step: "04", title: "Adoption & Go-Live", desc: "Role-based user training and hyper-care monitoring." }
    ],
    image: "/Manage_Engine_Banner.png",
    customLogo: "/sap-cx-logo.jpg"
  },
  {
    slug: "it-infrastructure-services",
    title: "IT Infrastructure Services",
    category: "IT & Custom Solutions",
    categorySlug: "it-custom-solutions",
    desc: "Human Experience Management and Customer Experience solutions for end-to-end workforce and customer engagement.",
    overview: "Empower your organization with integrated Human Experience Management (HXM) and Customer Experience (CX) suites. We bridge workforce talent optimization with omni-channel customer engagement, ensuring aligned data flows, automated lifecycle management, and high-conversion experiences across every touchpoint.",
    features: [
      { title: "SuccessFactors Core HR & Payroll", desc: "Global employee records, localized payroll compliance, and automated HR workflows." },
      { title: "Talent & Performance Management", desc: "Goal tracking, continuous feedback, and AI-driven career pathing and upskilling." },
      { title: "SAP Commerce & Sales Cloud", desc: "B2B/B2C e-commerce platforms with intelligent pricing, CPQ, and order fulfillment." },
      { title: "Omni-channel Customer Service", desc: "Unified agent desktop, ticket routing, and AI chatbots powered by SAP Service Cloud." }
    ],
    benefits: [
      { title: "Workforce Productivity", metric: "+35%", desc: "Increase in HR administrative efficiency via automated self-service." },
      { title: "Customer Retention", metric: "2.4x", desc: "Higher repeat conversion rates across unified commerce touchpoints." },
      { title: "Rapid Onboarding", metric: "-40%", desc: "Reduction in time-to-productivity for new hires globally." },
      { title: "Data Accuracy", metric: "99.8%", desc: "Elimination of siloed employee and customer records." }
    ],
    process: [
      { step: "01", title: "Experience Audit", desc: "Mapping employee journeys and customer touchpoint bottlenecks." },
      { step: "02", title: "Architecture Design", desc: "Configuring SuccessFactors and CX modules for custom business rules." },
      { step: "03", title: "Integration & Migration", desc: "Connecting core ERP, payroll, and legacy CRM systems securely." },
      { step: "04", title: "Adoption & Go-Live", desc: "Role-based user training and hyper-care monitoring." }
    ],
    image: "/Threatcorp_Banner.png",
    customLogo: "/sap-cx-logo.jpg"
  },
  {
    slug: "custom-software-application-development",
    title: "Custom Software Application Development",
    category: "IT & Custom Solutions",
    categorySlug: "it-custom-solutions",
    desc: "Human Experience Management and Customer Experience solutions for end-to-end workforce and customer engagement.",
    overview: "Empower your organization with integrated Human Experience Management (HXM) and Customer Experience (CX) suites. We bridge workforce talent optimization with omni-channel customer engagement, ensuring aligned data flows, automated lifecycle management, and high-conversion experiences across every touchpoint.",
    features: [
      { title: "SuccessFactors Core HR & Payroll", desc: "Global employee records, localized payroll compliance, and automated HR workflows." },
      { title: "Talent & Performance Management", desc: "Goal tracking, continuous feedback, and AI-driven career pathing and upskilling." },
      { title: "SAP Commerce & Sales Cloud", desc: "B2B/B2C e-commerce platforms with intelligent pricing, CPQ, and order fulfillment." },
      { title: "Omni-channel Customer Service", desc: "Unified agent desktop, ticket routing, and AI chatbots powered by SAP Service Cloud." }
    ],
    benefits: [
      { title: "Workforce Productivity", metric: "+35%", desc: "Increase in HR administrative efficiency via automated self-service." },
      { title: "Customer Retention", metric: "2.4x", desc: "Higher repeat conversion rates across unified commerce touchpoints." },
      { title: "Rapid Onboarding", metric: "-40%", desc: "Reduction in time-to-productivity for new hires globally." },
      { title: "Data Accuracy", metric: "99.8%", desc: "Elimination of siloed employee and customer records." }
    ],
    process: [
      { step: "01", title: "Experience Audit", desc: "Mapping employee journeys and customer touchpoint bottlenecks." },
      { step: "02", title: "Architecture Design", desc: "Configuring SuccessFactors and CX modules for custom business rules." },
      { step: "03", title: "Integration & Migration", desc: "Connecting core ERP, payroll, and legacy CRM systems securely." },
      { step: "04", title: "Adoption & Go-Live", desc: "Role-based user training and hyper-care monitoring." }
    ],
    image: "/Threatcorp_Banner.png",
    customLogo: "/sap-cx-logo.jpg"
  },
  {
    slug: "custom-ai-application-development",
    title: "Custom AI Application Development",
    category: "IT & Custom Solutions",
    categorySlug: "it-custom-solutions",
    desc: "Human Experience Management and Customer Experience solutions for end-to-end workforce and customer engagement.",
    overview: "Empower your organization with integrated Human Experience Management (HXM) and Customer Experience (CX) suites. We bridge workforce talent optimization with omni-channel customer engagement, ensuring aligned data flows, automated lifecycle management, and high-conversion experiences across every touchpoint.",
    features: [
      { title: "SuccessFactors Core HR & Payroll", desc: "Global employee records, localized payroll compliance, and automated HR workflows." },
      { title: "Talent & Performance Management", desc: "Goal tracking, continuous feedback, and AI-driven career pathing and upskilling." },
      { title: "SAP Commerce & Sales Cloud", desc: "B2B/B2C e-commerce platforms with intelligent pricing, CPQ, and order fulfillment." },
      { title: "Omni-channel Customer Service", desc: "Unified agent desktop, ticket routing, and AI chatbots powered by SAP Service Cloud." }
    ],
    benefits: [
      { title: "Workforce Productivity", metric: "+35%", desc: "Increase in HR administrative efficiency via automated self-service." },
      { title: "Customer Retention", metric: "2.4x", desc: "Higher repeat conversion rates across unified commerce touchpoints." },
      { title: "Rapid Onboarding", metric: "-40%", desc: "Reduction in time-to-productivity for new hires globally." },
      { title: "Data Accuracy", metric: "99.8%", desc: "Elimination of siloed employee and customer records." }
    ],
    process: [
      { step: "01", title: "Experience Audit", desc: "Mapping employee journeys and customer touchpoint bottlenecks." },
      { step: "02", title: "Architecture Design", desc: "Configuring SuccessFactors and CX modules for custom business rules." },
      { step: "03", title: "Integration & Migration", desc: "Connecting core ERP, payroll, and legacy CRM systems securely." },
      { step: "04", title: "Adoption & Go-Live", desc: "Role-based user training and hyper-care monitoring." }
    ],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=75&w=1200&auto=format&fit=crop",
    customLogo: "/sap-cx-logo.jpg"
  },
  {
    slug: "network-security-implementation",
    title: "Network Security Implementation",
    category: "IT & Custom Solutions",
    categorySlug: "it-custom-solutions",
    desc: "Human Experience Management and Customer Experience solutions for end-to-end workforce and customer engagement.",
    overview: "Empower your organization with integrated Human Experience Management (HXM) and Customer Experience (CX) suites. We bridge workforce talent optimization with omni-channel customer engagement, ensuring aligned data flows, automated lifecycle management, and high-conversion experiences across every touchpoint.",
    features: [
      { title: "SuccessFactors Core HR & Payroll", desc: "Global employee records, localized payroll compliance, and automated HR workflows." },
      { title: "Talent & Performance Management", desc: "Goal tracking, continuous feedback, and AI-driven career pathing and upskilling." },
      { title: "SAP Commerce & Sales Cloud", desc: "B2B/B2C e-commerce platforms with intelligent pricing, CPQ, and order fulfillment." },
      { title: "Omni-channel Customer Service", desc: "Unified agent desktop, ticket routing, and AI chatbots powered by SAP Service Cloud." }
    ],
    benefits: [
      { title: "Workforce Productivity", metric: "+35%", desc: "Increase in HR administrative efficiency via automated self-service." },
      { title: "Customer Retention", metric: "2.4x", desc: "Higher repeat conversion rates across unified commerce touchpoints." },
      { title: "Rapid Onboarding", metric: "-40%", desc: "Reduction in time-to-productivity for new hires globally." },
      { title: "Data Accuracy", metric: "99.8%", desc: "Elimination of siloed employee and customer records." }
    ],
    process: [
      { step: "01", title: "Experience Audit", desc: "Mapping employee journeys and customer touchpoint bottlenecks." },
      { step: "02", title: "Architecture Design", desc: "Configuring SuccessFactors and CX modules for custom business rules." },
      { step: "03", title: "Integration & Migration", desc: "Connecting core ERP, payroll, and legacy CRM systems securely." },
      { step: "04", title: "Adoption & Go-Live", desc: "Role-based user training and hyper-care monitoring." }
    ],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=75&w=1200&auto=format&fit=crop",
    customLogo: "/sap-cx-logo.jpg"
  },
  {
    slug: "security-audits",
    title: "Security Audits",
    category: "IT & Custom Solutions",
    categorySlug: "it-custom-solutions",
    desc: "Human Experience Management and Customer Experience solutions for end-to-end workforce and customer engagement.",
    overview: "Empower your organization with integrated Human Experience Management (HXM) and Customer Experience (CX) suites. We bridge workforce talent optimization with omni-channel customer engagement, ensuring aligned data flows, automated lifecycle management, and high-conversion experiences across every touchpoint.",
    features: [
      { title: "SuccessFactors Core HR & Payroll", desc: "Global employee records, localized payroll compliance, and automated HR workflows." },
      { title: "Talent & Performance Management", desc: "Goal tracking, continuous feedback, and AI-driven career pathing and upskilling." },
      { title: "SAP Commerce & Sales Cloud", desc: "B2B/B2C e-commerce platforms with intelligent pricing, CPQ, and order fulfillment." },
      { title: "Omni-channel Customer Service", desc: "Unified agent desktop, ticket routing, and AI chatbots powered by SAP Service Cloud." }
    ],
    benefits: [
      { title: "Workforce Productivity", metric: "+35%", desc: "Increase in HR administrative efficiency via automated self-service." },
      { title: "Customer Retention", metric: "2.4x", desc: "Higher repeat conversion rates across unified commerce touchpoints." },
      { title: "Rapid Onboarding", metric: "-40%", desc: "Reduction in time-to-productivity for new hires globally." },
      { title: "Data Accuracy", metric: "99.8%", desc: "Elimination of siloed employee and customer records." }
    ],
    process: [
      { step: "01", title: "Experience Audit", desc: "Mapping employee journeys and customer touchpoint bottlenecks." },
      { step: "02", title: "Architecture Design", desc: "Configuring SuccessFactors and CX modules for custom business rules." },
      { step: "03", title: "Integration & Migration", desc: "Connecting core ERP, payroll, and legacy CRM systems securely." },
      { step: "04", title: "Adoption & Go-Live", desc: "Role-based user training and hyper-care monitoring." }
    ],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=75&w=1200&auto=format&fit=crop",
    customLogo: "/sap-cx-logo.jpg"
  },
  {
    slug: "it-system-audits",
    title: "IT System Audits",
    category: "IT & Custom Solutions",
    categorySlug: "it-custom-solutions",
    desc: "Human Experience Management and Customer Experience solutions for end-to-end workforce and customer engagement.",
    overview: "Empower your organization with integrated Human Experience Management (HXM) and Customer Experience (CX) suites. We bridge workforce talent optimization with omni-channel customer engagement, ensuring aligned data flows, automated lifecycle management, and high-conversion experiences across every touchpoint.",
    features: [
      { title: "SuccessFactors Core HR & Payroll", desc: "Global employee records, localized payroll compliance, and automated HR workflows." },
      { title: "Talent & Performance Management", desc: "Goal tracking, continuous feedback, and AI-driven career pathing and upskilling." },
      { title: "SAP Commerce & Sales Cloud", desc: "B2B/B2C e-commerce platforms with intelligent pricing, CPQ, and order fulfillment." },
      { title: "Omni-channel Customer Service", desc: "Unified agent desktop, ticket routing, and AI chatbots powered by SAP Service Cloud." }
    ],
    benefits: [
      { title: "Workforce Productivity", metric: "+35%", desc: "Increase in HR administrative efficiency via automated self-service." },
      { title: "Customer Retention", metric: "2.4x", desc: "Higher repeat conversion rates across unified commerce touchpoints." },
      { title: "Rapid Onboarding", metric: "-40%", desc: "Reduction in time-to-productivity for new hires globally." },
      { title: "Data Accuracy", metric: "99.8%", desc: "Elimination of siloed employee and customer records." }
    ],
    process: [
      { step: "01", title: "Experience Audit", desc: "Mapping employee journeys and customer touchpoint bottlenecks." },
      { step: "02", title: "Architecture Design", desc: "Configuring SuccessFactors and CX modules for custom business rules." },
      { step: "03", title: "Integration & Migration", desc: "Connecting core ERP, payroll, and legacy CRM systems securely." },
      { step: "04", title: "Adoption & Go-Live", desc: "Role-based user training and hyper-care monitoring." }
    ],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=75&w=1200&auto=format&fit=crop",
    customLogo: "/sap-cx-logo.jpg"
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
  return SUB_SERVICES_DATA.find((s) => s.slug === slug);
}
