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
    desc: "Seamless connectivity across your SAP and non-SAP systems, ensuring real-time data flow.",
    overview: "Break down data silos with robust SAP integration strategies using SAP PI/PO, SAP Cloud Platform Integration (CPI), and APIs. We ensure that your SAP systems flawlessly communicate with legacy systems, third-party apps, and cloud platforms for unified business processes.",
    features: [
      { title: "SAP CPI & BTP", desc: "Cloud-native integration services for seamless B2B, B2C, and A2A connectivity." },
      { title: "API Management", desc: "Securely publish, manage, and analyze APIs across your enterprise ecosystem." },
      { title: "Legacy System Integration", desc: "Connect older on-premise systems with modern cloud ERP solutions." },
      { title: "Real-time Event Messaging", desc: "Event-driven architecture ensuring instant data updates across all nodes." }
    ],
    benefits: [
      { title: "Efficiency", metric: "+45%", desc: "Automated data workflows eliminate manual data entry and errors." },
      { title: "Data Visibility", metric: "100%", desc: "A single, accurate view of data across the entire organization." },
      { title: "Deployment Speed", metric: "2x", desc: "Faster time-to-market with pre-packaged integration content." },
      { title: "Maintenance", metric: "-30%", desc: "Reduced IT overhead with centralized integration monitoring." }
    ],
    process: [
      { step: "01", title: "Architecture Assessment", desc: "Evaluate existing systems and identify integration touchpoints." },
      { step: "02", title: "Design & Mapping", desc: "Blueprint data mapping, logic, and select appropriate middleware." },
      { step: "03", title: "Development & Testing", desc: "Build interfaces and perform rigorous end-to-end integration testing." },
      { step: "04", title: "Deployment", desc: "Go-live with continuous monitoring and support." }
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
    desc: "Ensure your SAP systems run on the latest, most secure, and feature-rich versions.",
    overview: "Stay ahead of end-of-maintenance deadlines and unlock new functionalities with our SAP Technical Upgrade services. We perform comprehensive version upgrades, support package deployments, and kernel updates with near-zero downtime.",
    features: [
      { title: "System Readiness & SPDD/SPAU", desc: "Detailed upgrade planning and custom code remediation." },
      { title: "OS/DB Migrations", desc: "Upgrading underlying databases and operating systems for better performance." },
      { title: "Fiori App Updates", desc: "Deploying the latest Fiori UX packages for improved usability." },
      { title: "Automated Testing", desc: "Using advanced tools to ensure no business processes are broken post-upgrade." }
    ],
    benefits: [
      { title: "Security", metric: "100%", desc: "Protection against the latest vulnerabilities with up-to-date patches." },
      { title: "Performance", metric: "+20%", desc: "Faster transaction processing speeds with newer kernels." },
      { title: "Compliance", metric: "Full", desc: "Maintain vendor support and legal compliance." },
      { title: "Business Disruption", metric: "Minimal", desc: "Carefully planned cutovers to avoid impacting operations." }
    ],
    process: [
      { step: "01", title: "Planning & Assessment", desc: "Analyze current landscape and define the upgrade path." },
      { step: "02", title: "Sandbox Upgrade", desc: "Execute a trial upgrade to identify and resolve technical issues." },
      { step: "03", title: "Testing & Remediation", desc: "Fix custom code conflicts (SPDD/SPAU) and perform UAT." },
      { step: "04", title: "Production Go-Live", desc: "Final upgrade during a planned downtime window with post-upgrade support." }
    ],
    image: "/SAP_Implementation_Banner.png",
    customLogo: "/sap-cx-logo.jpg"
  },
  {
    slug: "sap-resource-augmentation",
    title: "SAP Resource Augmentation",
    category: "SAP",
    categorySlug: "sap",
    desc: "Scale your SAP capabilities with our pool of certified, experienced SAP professionals.",
    overview: "Flexibly expand your IT team with our SAP resource augmentation services. Whether you need niche technical expertise for a specific project or ongoing functional support, we provide highly qualified SAP consultants, developers, and architects tailored to your needs.",
    features: [
      { title: "Certified SAP Experts", desc: "Access to professionals across all SAP modules (FICO, SD, MM, PP, HCM, etc.)." },
      { title: "Flexible Engagement Models", desc: "Short-term, long-term, on-site, or remote staffing options." },
      { title: "Rapid Onboarding", desc: "Quickly deploy resources to ensure your projects stay on track." },
      { title: "Knowledge Transfer", desc: "Our experts document and share best practices with your internal team." }
    ],
    benefits: [
      { title: "Cost Efficiency", metric: "-30%", desc: "Avoid the overhead of full-time hiring for project-based needs." },
      { title: "Scalability", metric: "High", desc: "Easily ramp up or down based on your current workload." },
      { title: "Time to Fill", metric: "<2 Weeks", desc: "Rapid deployment of vetted SAP talent." },
      { title: "Project Success", metric: "+40%", desc: "Leverage specialized expertise to mitigate project risks." }
    ],
    process: [
      { step: "01", title: "Requirement Analysis", desc: "Understand your specific technical and cultural resource needs." },
      { step: "02", title: "Candidate Selection", desc: "Present pre-vetted, highly qualified SAP professionals for your review." },
      { step: "03", title: "Onboarding", desc: "Seamless integration of the resource into your team and workflows." },
      { step: "04", title: "Performance Management", desc: "Continuous monitoring to ensure quality and project alignment." }
    ],
    image: "/SAP_Implementation_Banner.png",
    customLogo: "/sap-cx-logo.jpg"
  },
  {
    slug: "sap-others",
    title: "SAP - Others",
    category: "SAP",
    categorySlug: "sap",
    desc: "Comprehensive solutions across the entire SAP portfolio to drive digital transformation.",
    overview: "Beyond core ERP, we offer specialized consulting and implementation services for the broader SAP ecosystem, including SAP Ariba, SAP SuccessFactors, SAP IBP, and more, ensuring every aspect of your business operates at peak efficiency.",
    features: [
      { title: "SAP Ariba", desc: "Digitize and optimize your procurement and supply chain processes." },
      { title: "SAP SuccessFactors", desc: "Modernize HR with cloud-based human experience management." },
      { title: "SAP IBP", desc: "Advanced supply chain planning with real-time visibility." },
      { title: "Custom Solutions", desc: "Tailored SAP developments to meet unique industry requirements." }
    ],
    benefits: [
      { title: "Holistic Transformation", metric: "100%", desc: "End-to-end optimization of all business functions." },
      { title: "Procurement Savings", metric: "15%", desc: "Reduced spend and improved supplier collaboration." },
      { title: "HR Efficiency", metric: "30%", desc: "Streamlined talent management and payroll processes." },
      { title: "Supply Chain Agility", metric: "High", desc: "Better forecasting and responsiveness to market changes." }
    ],
    process: [
      { step: "01", title: "Discovery", desc: "Identify specific pain points and select the right SAP solution." },
      { step: "02", title: "Design", desc: "Blueprint the solution architecture and integration points." },
      { step: "03", title: "Implementation", desc: "Agile deployment of the chosen SAP modules." },
      { step: "04", title: "Optimization", desc: "Post-go-live tuning and continuous improvement." }
    ],
    image: "/SAP_Implementation_Banner.png",
    customLogo: "/sap-cx-logo.jpg"
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
    desc: "ITIL-ready IT Service Management to streamline support and deliver exceptional service.",
    overview: "Transform your IT support with ManageEngine ServiceDesk Plus. We implement this robust ITSM solution to help you manage incidents, problems, changes, and IT assets efficiently, ensuring alignment with ITIL best practices and improving end-user satisfaction.",
    features: [
      { title: "Incident & Problem Management", desc: "Streamlined ticketing workflows to resolve issues faster and identify root causes." },
      { title: "IT Asset Management (ITAM)", desc: "Track hardware and software inventory, licenses, and lifecycle." },
      { title: "Change Management", desc: "Controlled IT changes with approval workflows to minimize risks." },
      { title: "Self-Service Portal", desc: "Empower users with a knowledge base and automated service requests." }
    ],
    benefits: [
      { title: "Resolution Time", metric: "-40%", desc: "Faster ticket resolution with automated routing and SLAs." },
      { title: "Asset Visibility", metric: "100%", desc: "Complete control over IT assets and software compliance." },
      { title: "ITIL Alignment", metric: "Full", desc: "Standardized processes improving overall IT service quality." },
      { title: "User Satisfaction", metric: "+35%", desc: "Improved end-user experience with self-service capabilities." }
    ],
    process: [
      { step: "01", title: "Process Assessment", desc: "Evaluate current IT support processes against ITIL standards." },
      { step: "02", title: "Implementation & Configuration", desc: "Set up categories, SLAs, workflows, and the self-service portal." },
      { step: "03", title: "Asset Discovery", desc: "Deploy agents for automated network scanning and asset inventory." },
      { step: "04", title: "Training & Rollout", desc: "Train technicians and launch the service desk to end-users." }
    ],
    image: "/Manage_Engine_Banner.png"
  },
  {
    slug: "manageengine-op-manager",
    title: "ManageEngine-Op Manager",
    category: "ManageEngine",
    categorySlug: "manageengine",
    desc: "Comprehensive network monitoring for complete visibility and proactive fault management.",
    overview: "Ensure high availability and optimal performance of your IT infrastructure with ManageEngine OpManager. We deploy this powerful monitoring tool to provide real-time insights into your routers, switches, firewalls, servers, and VMs.",
    features: [
      { title: "Real-time Network Monitoring", desc: "Monitor network performance, traffic, and bandwidth usage continuously." },
      { title: "Server & VM Monitoring", desc: "Track CPU, memory, and disk utilization across physical and virtual environments." },
      { title: "Proactive Fault Management", desc: "Threshold-based alerts and automated troubleshooting workflows." },
      { title: "Custom Dashboards", desc: "Visual representations of network health with intuitive maps and widgets." }
    ],
    benefits: [
      { title: "Network Uptime", metric: "99.9%", desc: "Proactively detect and resolve issues before they impact the business." },
      { title: "Troubleshooting Speed", metric: "2x Faster", desc: "Pinpoint root causes quickly with detailed diagnostics." },
      { title: "Resource Optimization", metric: "+20%", desc: "Identify underutilized or bottlenecked network resources." },
      { title: "IT Visibility", metric: "100%", desc: "A single pane of glass for your entire IT infrastructure." }
    ],
    process: [
      { step: "01", title: "Infrastructure Discovery", desc: "Scan the network to identify all devices and topologies." },
      { step: "02", title: "Monitoring Setup", desc: "Configure performance monitors, thresholds, and alert notifications." },
      { step: "03", title: "Dashboard Creation", desc: "Design customized views for NOC teams and IT management." },
      { step: "04", title: "Tuning & Handover", desc: "Refine alerts to reduce noise and train the IT operations team." }
    ],
    image: "/Manage_Engine_Banner.png"
  },
  {
    slug: "manageengine-endpoint-control",
    title: "ManageEngine-Endpoint Control",
    category: "ManageEngine",
    categorySlug: "manageengine",
    desc: "Unified endpoint management to secure and manage all devices in your organization.",
    overview: "Secure and manage your corporate endpoints with ManageEngine Endpoint Central. We help you automate patch management, deploy software, manage IT assets, and enforce security policies across Windows, Mac, Linux, and mobile devices from a central location.",
    features: [
      { title: "Automated Patch Management", desc: "Keep OS and third-party applications up-to-date with automated patching." },
      { title: "Software Deployment", desc: "Silently distribute software packages to devices across the network." },
      { title: "Endpoint Security", desc: "Vulnerability assessment, browser security, and application control." },
      { title: "Remote Troubleshooting", desc: "Secure remote desktop access with file transfer and video recording." }
    ],
    benefits: [
      { title: "Endpoint Security", metric: "+50%", desc: "Significantly reduce vulnerabilities with timely patching." },
      { title: "IT Productivity", metric: "+40%", desc: "Automate routine endpoint management tasks." },
      { title: "Compliance", metric: "High", desc: "Ensure all devices adhere to corporate security policies." },
      { title: "Remote Support", metric: "Instant", desc: "Quickly resolve issues for a distributed workforce." }
    ],
    process: [
      { step: "01", title: "Architecture Design", desc: "Plan the server deployment and agent distribution strategy." },
      { step: "02", title: "Policy Configuration", desc: "Set up patch deployment policies and software repositories." },
      { step: "03", title: "Agent Rollout", desc: "Deploy agents to all endpoints and verify communication." },
      { step: "04", title: "Optimization", desc: "Fine-tune policies and establish reporting routines." }
    ],
    image: "/Manage_Engine_Banner.png"
  },
  {
    slug: "manageengine-mdm-plus",
    title: "ManageEngine-MDM Plus",
    category: "ManageEngine",
    categorySlug: "manageengine",
    desc: "Comprehensive mobile device management for a secure, productive mobile workforce.",
    overview: "Empower your mobile workforce while maintaining security with ManageEngine Mobile Device Manager Plus. We implement MDM solutions to enroll, manage, and secure corporate-owned and BYOD smartphones and tablets across iOS, Android, and Windows.",
    features: [
      { title: "Device Enrollment & Provisioning", desc: "Automated enrollment (DEP/Zero-touch) and secure profile configuration." },
      { title: "App Management", desc: "Distribute, manage, and secure enterprise and public apps." },
      { title: "Security Management", desc: "Enforce passcodes, remote wipe, geo-tracking, and containerization." },
      { title: "BYOD Support", desc: "Separate corporate data from personal data to protect privacy and security." }
    ],
    benefits: [
      { title: "Data Security", metric: "High", desc: "Protect corporate data on mobile devices against loss or theft." },
      { title: "Device Compliance", metric: "100%", desc: "Ensure all mobile devices meet security standards." },
      { title: "Admin Efficiency", metric: "+35%", desc: "Centralized management of a diverse fleet of mobile devices." },
      { title: "Employee Productivity", metric: "+25%", desc: "Secure access to corporate resources from anywhere." }
    ],
    process: [
      { step: "01", title: "MDM Strategy", desc: "Define policies for corporate vs. BYOD devices." },
      { step: "02", title: "Platform Setup", desc: "Configure Apple APNs, Android Enterprise, and MDM profiles." },
      { step: "03", title: "App Catalog Creation", desc: "Set up the enterprise app store and configure app configurations." },
      { step: "04", title: "Device Enrollment", desc: "Roll out to users with clear instructions and support." }
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
  return SUB_SERVICES_DATA.find((s) => s.slug === slug);
}
