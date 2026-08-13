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
  // ─── SAP ───
  {
    slug: "sap-hxm-cx",
    title: "SAP HXM, CX",
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
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=75&w=1200&auto=format&fit=crop",
    customLogo: "/sap-cx-logo.jpg"
  },
  {
    slug: "sap-analytics",
    title: "SAP Analytics",
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
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=75&w=1200&auto=format&fit=crop",
    customLogo: "/Sap_analytics-cloud.png"
  },
  {
    slug: "sap-cloud-migration",
    title: "SAP Cloud Migration",
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
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=75&w=1200&auto=format&fit=crop"
  },
  {
    slug: "sap-managed-services",
    title: "SAP Managed Services",
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
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=75&w=1200&auto=format&fit=crop"
  },
  {
    slug: "rise-with-sap",
    title: "RISE with SAP",
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
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=75&w=1200&auto=format&fit=crop",
    customLogo: "/vital-wires-Rise-with-SAP-3.png"
  },
  {
    slug: "sap-s4-hana-transformation",
    title: "S/4 HANA Transformation",
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
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=75&w=1200&auto=format&fit=crop",
    customLogo: "/sap_s4hana-transparentbg.png"
  },

  // ─── ZOHO ───
  {
    slug: "zoho-workdrive",
    title: "Zoho WorkDrive",
    category: "Zoho",
    categorySlug: "zoho",
    desc: "Secure cloud-based file management and team collaboration for distributed enterprises.",
    overview: "Deploy a secure, content-collaboration platform built for distributed enterprise teams. Zoho WorkDrive provides centralized team folders, granular administrative permissions, real-time document co-editing, and enterprise-grade encryption.",
    features: [
      { title: "Team Folders & Granular Permissions", desc: "Organize files by department with strict read/write/share controls." },
      { title: "Zoho Office Suite Integration", desc: "Built-in Writer, Sheet, and Show for real-time document co-authoring." },
      { title: "External Share & Password Protection", desc: "Secure link sharing with expiration dates and download restrictions." },
      { title: "Desktop Sync & Mobile Access", desc: "Offline file synchronization and mobile access for field teams." }
    ],
    benefits: [
      { title: "Collaboration Speed", metric: "3x", desc: "Faster document review cycles with real-time commenting." },
      { title: "Data Security", metric: "100%", desc: "Centralized admin oversight preventing unauthorized file leakage." },
      { title: "Storage Savings", metric: "-40%", desc: "Elimination of redundant file copies across local drives." },
      { title: "Search Speed", metric: "<2 Sec", desc: "Instant AI-powered OCR search across scanned PDFs and documents." }
    ],
    process: [
      { step: "01", title: "Folder Taxonomy Design", desc: "Structuring team folders and mapping organizational hierarchies." },
      { step: "02", title: "Data Migration", desc: "Migrating files from Google Drive, OneDrive, or local servers securely." },
      { step: "03", title: "Security Configuration", desc: "Setting up DLP rules, external sharing policies, and 2FA." },
      { step: "04", title: "User Training", desc: "Conducting workshops on collaborative editing and sync tool usage." }
    ],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=75&w=1200&auto=format&fit=crop",
    customLogo: "/workdrive.png"
  },
  {
    slug: "zoho-analytics",
    title: "Zoho Analytics",
    category: "Zoho",
    categorySlug: "zoho",
    desc: "Self-service BI and advanced analytics with AI-powered insights across your business data.",
    overview: "Turn scattered business data into intelligent insights with Zoho Analytics. We build automated data pipelines connecting your CRM, ERP, financial software, and custom databases to interactive dashboards equipped with AI conversational querying (Zia).",
    features: [
      { title: "Multi-Source Data Blending", desc: "Combine data from Zoho apps, SQL databases, Stripe, Google Ads, and spreadsheets." },
      { title: "Zia AI Assistant", desc: "Ask questions in plain English and instantly receive charts and predictive insights." },
      { title: "White-Label & Embedded Analytics", desc: "Embed custom analytical portals directly within your customer or vendor applications." },
      { title: "Automated Data Alerting", desc: "Real-time email and webhook alerts when critical business KPIs breach thresholds." }
    ],
    benefits: [
      { title: "Reporting Time", metric: "-80%", desc: "Elimination of manual spreadsheet compiling and weekly data prep." },
      { title: "Insight Accessibility", metric: "100%", desc: "Self-service BI empowering non-technical managers to query data." },
      { title: "Revenue Visibility", metric: "Real-Time", desc: "Live cross-departmental dashboards tracking CAC, LTV, and ROI." },
      { title: "Predictive Accuracy", metric: "+25%", desc: "Better inventory and sales forecasting via machine learning models." }
    ],
    process: [
      { step: "01", title: "Source Identification", desc: "Auditing all transactional databases, APIs, and cloud apps." },
      { step: "02", title: "Pipeline & Data Modeling", desc: "Configuring automated sync schedules and relational lookups." },
      { step: "03", title: "Dashboard Construction", desc: "Engineering tailored reports for Sales, Finance, HR, and Operations." },
      { step: "04", title: "Governance & Rollout", desc: "Setting row-level security permissions and rolling out to executives." }
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=75&w=1200&auto=format&fit=crop",
    customLogo: "/Zoho-Analytics-TrasparentBG.png"
  },
  {
    slug: "zoho-crm",
    title: "Zoho CRM",
    category: "Zoho",
    categorySlug: "zoho",
    desc: "End-to-end customer relationship management — from lead generation to deal closure and retention.",
    overview: "Supercharge your sales velocity with a customized Zoho CRM deployment. We configure automated lead scoring, custom Blueprint sales pipelines, omni-channel communication, and deep integrations with accounting and support systems.",
    features: [
      { title: "Blueprint Process Automation", desc: "Enforce strict stage-by-stage sales validation and automated follow-up tasks." },
      { title: "Omni-Channel Lead Capture", desc: "Capture leads via website forms, WhatsApp, email, social media, and telephony." },
      { title: "AI Sales Forecasting & Zia", desc: "Predict deal closure probability and identify cross-sell opportunities." },
      { title: "CPQ & Inventory Integration", desc: "Generate quotes, sales orders, and invoices directly inside CRM records." }
    ],
    benefits: [
      { title: "Sales Conversion", metric: "+32%", desc: "Higher win rates through structured follow-ups and lead prioritization." },
      { title: "Sales Productivity", metric: "+45%", desc: "Automation of repetitive data entry and email follow-up tasks." },
      { title: "Pipeline Visibility", metric: "100%", desc: "Complete clarity into deal stages and rep performance metrics." },
      { title: "Response Time", metric: "<5 Mins", desc: "Instant automated lead distribution to the right account executives." }
    ],
    process: [
      { step: "01", title: "Sales Blueprinting", desc: "Mapping your exact sales stages, lead qualification rules, and roles." },
      { step: "02", title: "Customization & Automation", desc: "Building custom modules, fields, workflows, and Deluge scripts." },
      { step: "03", title: "Data Migration & Integration", desc: "Importing legacy contacts and connecting email, telephony, and ERP." },
      { step: "04", title: "Rep Training & Go-Live", desc: "Hands-on coaching for sales teams to drive 100% daily adoption." }
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=75&w=1200&auto=format&fit=crop",
    customLogo: "/Zoho_CRM_application.svg_.png"
  },
  {
    slug: "zoho-people-payroll",
    title: "Zoho People & Payroll",
    category: "Zoho",
    categorySlug: "zoho",
    desc: "Integrated HR management and payroll processing tailored for Indian and global compliance.",
    overview: "Streamline your entire hire-to-retire lifecycle with Zoho People and Zoho Payroll. We automate attendance tracking, leave management, performance appraisals, and statutory compliant payroll calculations (PF, ESI, PT, TDS) with automated bank transfers.",
    features: [
      { title: "Attendance & Biometric Sync", desc: "Real-time attendance capture from biometric devices, web, or geo-fenced mobile app." },
      { title: "Statutory Payroll Compliance", desc: "Automated calculation of PF, ESI, Professional Tax, and Income Tax (TDS)." },
      { title: "Employee Self-Service Portal", desc: "Digital payslip downloads, leave requests, tax declarations, and expense claims." },
      { title: "360-Degree Performance Reviews", desc: "Customizable appraisal cycles, KRA/KPI tracking, and peer feedback." }
    ],
    benefits: [
      { title: "Payroll Processing", metric: "1 Day", desc: "Reduction in monthly payroll processing cycle from weeks to hours." },
      { title: "HR Queries", metric: "-60%", desc: "Decrease in employee administrative tickets via self-service portal." },
      { title: "Compliance Risk", metric: "Zero", desc: "Guaranteed adherence to local labor laws and statutory tax filings." },
      { title: "Onboarding Speed", metric: "2x Faster", desc: "Automated digital offer letters and paperless document verification." }
    ],
    process: [
      { step: "01", title: "Policy Auditing", desc: "Documenting leave policies, shift schedules, and salary structures." },
      { step: "02", title: "System Setup", desc: "Configuring payroll components, statutory deductions, and approval workflows." },
      { step: "03", title: "Parallel Payroll Run", desc: "Executing test payroll cycles alongside legacy system to verify 100% accuracy." },
      { step: "04", title: "Employee Rollout", desc: "Launching the self-service mobile app and HR admin dashboards." }
    ],
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=75&w=1200&auto=format&fit=crop",
    customLogo: "/zoho_people-trasparentbg.png"
  },
  {
    slug: "zoho-books",
    title: "Zoho Books",
    category: "Zoho",
    categorySlug: "zoho",
    desc: "Cloud accounting software with GST compliance, invoicing, and financial reporting.",
    overview: "Empower your finance team with end-to-end cloud accounting using Zoho Books. We implement automated e-invoicing, e-Way bill generation, GST returns filing, automated bank reconciliation, and multi-currency financial accounting.",
    features: [
      { title: "GST & e-Invoicing Compliance", desc: "Direct filing of GSTR-1/GSTR-3B and instant generation of e-Invoices and e-Way bills." },
      { title: "Automated Bank Reconciliation", desc: "Direct feeds from major banks matching transactions with smart rules automatically." },
      { title: "Multi-Currency & Branch Accounting", desc: "Real-time exchange rate calculations and divisional financial statements." },
      { title: "Vendor Portal & Expense Management", desc: "Automated purchase order workflows and vendor self-service bill uploads." }
    ],
    benefits: [
      { title: "Invoicing Speed", metric: "5x Faster", desc: "Automated recurring invoices and payment reminders accelerating collections." },
      { title: "Reconciliation", metric: "-75%", desc: "Reduction in manual bank statement matching hours each month." },
      { title: "Tax Compliance", metric: "100%", desc: "Zero penalty risk with built-in GST validation and e-Invoicing." },
      { title: "Cash Flow Visibility", metric: "Live", desc: "Real-time balance sheet, P&L, and receivables aging reports." }
    ],
    process: [
      { step: "01", title: "Chart of Accounts Design", desc: "Setting up ledger structure, tax rates, and opening balances." },
      { step: "02", title: "Integration & Bank Feeds", desc: "Connecting payment gateways, bank accounts, and Zoho CRM/Inventory." },
      { step: "03", title: "Template & Workflow Setup", desc: "Customizing invoice layouts, approval chains, and automated reminders." },
      { step: "04", title: "Go-Live & Support", desc: "Final ledger audit and onboarding accountants to daily workflows." }
    ],
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=75&w=1200&auto=format&fit=crop",
    customLogo: "/zoho-books_logo.png"
  },
  {
    slug: "zoho-erp",
    title: "Zoho ERP",
    category: "Zoho",
    categorySlug: "zoho",
    desc: "Unified enterprise resource planning across inventory, procurement, manufacturing, and finance.",
    overview: "Connect your end-to-end supply chain with a unified Zoho ERP deployment (combining Zoho Inventory, Zoho Books, Zoho Creator, and Zoho Analytics). We tailor manufacturing bills of materials (BOM), multi-warehouse stock tracking, and automated procurement.",
    features: [
      { title: "Multi-Warehouse Inventory Tracking", desc: "Real-time serial, batch, and expiry tracking across distributed fulfillment centers." },
      { title: "Manufacturing & BOM Management", desc: "Track raw material consumption, assembly orders, and production costs." },
      { title: "Automated Procurement Workflows", desc: "Re-order level triggers automatically creating purchase requisitions and POs." },
      { title: "Omni-Channel Order Management", desc: "Centralized order processing across Amazon, Shopify, B2B portals, and offline stores." }
    ],
    benefits: [
      { title: "Stock Accuracy", metric: "99.9%", desc: "Elimination of stockouts and overstocking through automated tracking." },
      { title: "Order Cycle Time", metric: "-50%", desc: "Faster order pick, pack, and dispatch processes." },
      { title: "Operational Visibility", metric: "100%", desc: "Unified dashboard showing inventory valuation and supply chain bottlenecks." },
      { title: "Procurement Costs", metric: "-15%", desc: "Optimized vendor pricing and automated purchase order approvals." }
    ],
    process: [
      { step: "01", title: "Supply Chain Audit", desc: "Mapping inventory flows, warehouse layouts, and manufacturing steps." },
      { step: "02", title: "ERP Blueprint & Configuration", desc: "Configuring item masters, BOM structures, and tax rules." },
      { step: "03", title: "Hardware & Barcode Integration", desc: "Setting up barcode scanners, thermal printers, and shipping APIs." },
      { step: "04", title: "UAT & Full Cutover", desc: "Conducting physical stock verification and switching over all operations." }
    ],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=75&w=1200&auto=format&fit=crop",
    customLogo: "/ZohoERP-colored.png"
  },

  // ─── SOFTWARE DEVELOPMENT ───
  {
    slug: "automation-solutions",
    title: "Automation Solutions",
    category: "Software Development",
    categorySlug: "software-development",
    desc: "Robotic process automation (RPA) and workflow automation to eliminate manual bottlenecks across operations.",
    overview: "Eliminate repetitive manual tasks and accelerate operational throughput with custom enterprise automation solutions. We leverage Robotic Process Automation (RPA), intelligent IDP (Intelligent Document Processing), and API orchestrations to automate complex cross-system workflows.",
    features: [
      { title: "Robotic Process Automation (RPA)", desc: "Software bots automating repetitive data entry across legacy GUI systems." },
      { title: "Intelligent Document Processing (IDP)", desc: "AI-powered extraction of data from invoices, purchase orders, and forms." },
      { title: "Enterprise API Orchestration", desc: "Event-driven workflow triggers connecting modern SaaS apps with on-prem databases." },
      { title: "Custom Bot Monitoring Console", desc: "Centralized dashboard tracking bot uptime, transaction volume, and exception logs." }
    ],
    benefits: [
      { title: "Processing Speed", metric: "15x", desc: "Bots process data 24/7 without fatigue or human errors." },
      { title: "Operational Savings", metric: "-55%", desc: "Substantial reduction in manual back-office administrative overhead." },
      { title: "Error Rate", metric: "0%", desc: "Guaranteed consistency across financial and compliance transactions." },
      { title: "ROI Payback", metric: "<6 Months", desc: "Rapid return on investment through immediate operational throughput gains." }
    ],
    process: [
      { step: "01", title: "Process Discovery & Mining", desc: "Identifying high-volume, rules-based tasks ideal for automation." },
      { step: "02", title: "Bot Engineering & Scripting", desc: "Developing RPA scripts and machine learning extraction templates." },
      { step: "03", title: "UAT & Exception Handling", desc: "Testing edge cases and configuring automated failure alerts." },
      { step: "04", title: "Production Deployment", desc: "Scheduling bot runs and ongoing L3 bot maintenance." }
    ],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=75&w=1200&auto=format&fit=crop"
  },
  {
    slug: "software-development-service",
    title: "Software Development",
    category: "Software Development",
    categorySlug: "software-development",
    desc: "Enterprise-grade custom software built with modern stacks — React, Node.js, Python, .NET, and more.",
    overview: "Build bespoke, highly scalable enterprise software tailored precisely to your unique business logic. From microservices backends to high-throughput data processing engines, our engineering teams build cloud-native applications with clean architecture and rigorous automated QA.",
    features: [
      { title: "Cloud-Native Microservices", desc: "Modular architecture deployed on Kubernetes with auto-scaling and resilience." },
      { title: "Modern Tech Stacks", desc: "Expert development in React, Next.js, Node.js, Python/FastAPI, Go, and .NET Core." },
      { title: "AI/ML Integration", desc: "Embedded LLM workflows, vector searches, and predictive models inside your core app." },
      { title: "Enterprise Security & DevSecOps", desc: "Automated CI/CD pipelines with integrated static code analysis and container scanning." }
    ],
    benefits: [
      { title: "Time-to-Market", metric: "-35%", desc: "Accelerated sprint delivery using pre-built enterprise boilerplate modules." },
      { title: "System Scalability", metric: "10x", desc: "Architected to handle millions of concurrent requests seamlessly." },
      { title: "Code Quality", metric: ">90% Test Coverage", desc: "Strict adherence to clean code guidelines and automated testing." },
      { title: "Vendor Independence", metric: "100%", desc: "Full IP ownership with open-source and modern maintainable stacks." }
    ],
    process: [
      { step: "01", title: "Architecture & Blueprinting", desc: "Defining system specifications, database schemas, and API contracts." },
      { step: "02", title: "Agile Sprint Execution", desc: "Iterative two-week development cycles with continuous stakeholder demos." },
      { step: "03", title: "Automated QA & Security Audit", desc: "Executing end-to-end load testing and penetration scans." },
      { step: "04", title: "Continuous Delivery & Scale", desc: "Automated deployment to production and continuous performance monitoring." }
    ],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=75&w=1200&auto=format&fit=crop"
  },
  {
    slug: "web-development",
    title: "Web Development",
    category: "Software Development",
    categorySlug: "software-development",
    desc: "High-performance websites, web portals, and progressive web apps with responsive design.",
    overview: "Create blazing-fast, secure, and visually captivating web portals and applications. We specialize in high-performance web architecture that combines intuitive UI/UX design, sub-second loading speeds, sub-system integrations, and robust SEO foundations.",
    features: [
      { title: "Server-Side Rendered Web Apps", desc: "Built with Next.js and TanStack Start for optimal speed and search indexing." },
      { title: "Enterprise Customer & Vendor Portals", desc: "Self-service web portals with secure authentication and ERP/CRM data sync." },
      { title: "Progressive Web Apps (PWA)", desc: "App-like experiences with offline capabilities and push notifications." },
      { title: "Enterprise Headless CMS", desc: "Decoupled content management allowing agile marketing team updates." }
    ],
    benefits: [
      { title: "Page Load Speed", metric: "<1 Sec", desc: "Lighthouse performance scores consistently hitting 95+." },
      { title: "Conversion Rate", metric: "+40%", desc: "Engaging interactive layouts driving higher user retention and leads." },
      { title: "Mobile Experience", metric: "100% Responsive", desc: "Flawless rendering and interaction across all mobile devices and tablets." },
      { title: "Security Rating", metric: "A+", desc: "Protection against XSS, CSRF, and DDoS attacks built-in by design." }
    ],
    process: [
      { step: "01", title: "UX Wireframing & Prototyping", desc: "Interactive Figma design systems validated by user feedback." },
      { step: "02", title: "Frontend & API Engineering", desc: "Developing responsive components and integrating backend data endpoints." },
      { step: "03", title: "Performance Optimization", desc: "Asset optimization, caching strategies, and cross-browser testing." },
      { step: "04", title: "Launch & SEO Handover", desc: "Deploying to edge networks with structured schema and analytics." }
    ],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=75&w=1200&auto=format&fit=crop"
  },
  {
    slug: "mobile-web-application-development",
    title: "Mobile/Web App Development",
    category: "Software Development",
    categorySlug: "software-development",
    desc: "Native and cross-platform mobile apps (Flutter, React Native, Swift, Kotlin) for iOS and Android.",
    overview: "Deliver native and cross-platform mobile applications that feel responsive, look stunning, and function flawlessly in high-demand environments. Whether building enterprise field apps with offline data syncing or consumer-facing platforms, we ensure seamless performance.",
    features: [
      { title: "Cross-Platform Flutter & React Native", desc: "Single codebase delivering native iOS and Android performance." },
      { title: "Offline-First Data Synchronization", desc: "Local SQLite/WatermelonDB storage syncing automatically upon network restoration." },
      { title: "Hardware & Sensor Integration", desc: "Barcode scanning, GPS tracking, Bluetooth BLE, and camera OCR processing." },
      { title: "Enterprise MDM & Security", desc: "Biometric authentication, encrypted storage, and Mobile Device Management compatibility." }
    ],
    benefits: [
      { title: "Development Cost", metric: "-40%", desc: "Shared cross-platform codebase saving engineering time and budget." },
      { title: "App Store Rating", metric: "4.8+ Stars", desc: "Fluid 60 FPS animations and intuitive mobile UX patterns." },
      { title: "Field Reliability", metric: "100%", desc: "Zero data loss during field operations in zero-connectivity zones." },
      { title: "Update Speed", metric: "Over-the-Air", desc: "Instant hot-code push updates without waiting for app store reviews." }
    ],
    process: [
      { step: "01", title: "Mobile UX/UI Blueprint", desc: "Designing thumb-friendly layouts and gesture-based interactions." },
      { step: "02", title: "Core App Development", desc: "Building native modules, offline storage layers, and API clients." },
      { step: "03", title: "Device & Field Testing", desc: "Testing across 50+ real device profiles and low-bandwidth scenarios." },
      { step: "04", title: "Store Submission & Launch", desc: "Managing Apple App Store and Google Play compliance and rollout." }
    ],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=75&w=1200&auto=format&fit=crop"
  },

  // ─── IT INFRASTRUCTURE ───
  {
    slug: "infrastructure-amc",
    title: "Infrastructure AMC",
    category: "IT Infrastructure",
    categorySlug: "it-infrastructure",
    desc: "Proactive maintenance, patching, and support contracts to ensure your IT infrastructure runs at peak performance.",
    overview: "Keep your mission-critical hardware, server farms, and data centers running at peak uptime with our Annual Maintenance Contracts (AMC). We provide preventive maintenance, scheduled firmware upgrades, rapid hardware replacement SLAs, and onsite/remote L3 troubleshooting.",
    features: [
      { title: "24/7 Server & Storage Maintenance", desc: "Proactive health monitoring of Dell, HPE, Cisco, and Lenovo enterprise servers." },
      { title: "Scheduled Preventive Maintenance", desc: "Quarterly onsite audits, thermal checks, dust cleaning, and UPS battery testing." },
      { title: "SLA-Backed Hardware Spares", desc: "Guaranteed 4-hour or next-business-day hardware part replacement onsite." },
      { title: "Firmware & Patch Management", desc: "Systematic deployment of BIOS, hypervisor, and OS security patches." }
    ],
    benefits: [
      { title: "Unplanned Downtime", metric: "-85%", desc: "Proactive maintenance preventing catastrophic hardware failures." },
      { title: "Hardware Lifecycle", metric: "+3 Years", desc: "Extended equipment longevity through proper environmental and health management." },
      { title: "Resolution SLA", metric: "<4 Hours", desc: "Guaranteed emergency engineering response for critical outages." },
      { title: "Predictable IT Budget", metric: "100%", desc: "Fixed annual fee eliminating unexpected emergency repair expenses." }
    ],
    process: [
      { step: "01", title: "Asset Tagging & Audit", desc: "Cataloging all server, storage, and networking hardware serials and health." },
      { step: "02", title: "SLA Activation & Monitoring Setup", desc: "Installing SNMP traps and central telemetry monitoring." },
      { step: "03", title: "Preventive Maintenance Cycles", desc: "Executing planned quarterly maintenance and patch schedules." },
      { step: "04", title: "Emergency Response SLA", desc: "Immediate ticket escalation and onsite engineer dispatch when alerts fire." }
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=75&w=1200&auto=format&fit=crop"
  },
  {
    slug: "network-setup-monitoring",
    title: "Network Setup & Monitoring",
    category: "IT Infrastructure",
    categorySlug: "it-infrastructure",
    desc: "Enterprise network design, deployment, and 24/7 monitoring with automated alerting and remediation.",
    overview: "Design, deploy, and manage secure, resilient enterprise networks across corporate campuses, factories, and branch offices. We engineer high-availability LAN/WAN switching, SD-WAN fabrics, Wi-Fi 6 wireless networks, and 24/7 automated network Operations Center (NOC) monitoring.",
    features: [
      { title: "Enterprise Campus & Wi-Fi 6 Design", desc: "High-density wireless planning and structured cabling deployments." },
      { title: "SD-WAN & Multi-Site Connectivity", desc: "Optimized, encrypted site-to-site VPNs with automated bandwidth failover." },
      { title: "Next-Gen Firewall Implementation", desc: "Deployment of Palo Alto, Fortinet, or Cisco firewalls with IPS and IDS." },
      { title: "24/7 NOC Automated Monitoring", desc: "Real-time bandwidth utilization tracking, packet loss alerts, and auto-remediation." }
    ],
    benefits: [
      { title: "Network Uptime", metric: "99.99%", desc: "Redundant core switching and multi-ISP failover ensuring zero dropouts." },
      { title: "Bandwidth Speed", metric: "10 Gbps+", desc: "High-throughput backbone supporting data-heavy enterprise workloads." },
      { title: "Incident Detection", metric: "<1 Min", desc: "Instant automated alerting and ticket generation when latency spikes." },
      { title: "Security Perimeter", metric: "Zero-Trust", desc: "Granular VLAN segmentation isolating guest, IoT, and corporate traffic." }
    ],
    process: [
      { step: "01", title: "Site Survey & Topology Design", desc: "Conducting RF wireless heatmaps and network architecture blueprinting." },
      { step: "02", title: "Hardware Procurement & Staging", desc: "Pre-configuring switches, routers, and firewalls with strict security baselines." },
      { step: "03", title: "Physical Deployment & Testing", desc: "Installing racks, running cable tests, and verifying failover pathways." },
      { step: "04", title: "NOC Handover & Management", desc: "Integrating into our 24/7 Network Operations Center for continuous monitoring." }
    ],
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=75&w=1200&auto=format&fit=crop"
  },
  {
    slug: "cloud-infrastructure-management",
    title: "Cloud Infrastructure",
    category: "IT Infrastructure",
    categorySlug: "it-infrastructure",
    desc: "Multi-cloud architecture (AWS, Azure, GCP), cost optimization, and migration services.",
    overview: "Maximize resilience and cost-efficiency with managed multi-cloud infrastructure on AWS, Azure, or Google Cloud Platform. Our cloud architects design well-architected landing zones, implement Infrastructure as Code (Terraform), manage auto-scaling clusters, and drive FinOps savings.",
    features: [
      { title: "Terraform Infrastructure as Code (IaC)", desc: "Automated, reproducible cloud environments managed via Git workflows." },
      { title: "Kubernetes & Container Orchestration", desc: "Managed EKS, AKS, and GKE clusters optimized for microservices." },
      { title: "FinOps Cloud Cost Optimization", desc: "Continuous right-sizing, reserved instance management, and waste elimination." },
      { title: "Automated Disaster Recovery (DR)", desc: "Cross-region backup replication with sub-15 minute RPO and RTO SLAs." }
    ],
    benefits: [
      { title: "Cloud Spend Savings", metric: "-35%", desc: "Elimination of idle cloud compute instances and optimized storage tiers." },
      { title: "Deployment Agility", metric: "10x Faster", desc: "Automated IaC scripts spinning up staging environments in minutes." },
      { title: "System Resilience", metric: "Multi-Region", desc: "High availability architecture immune to single data center failures." },
      { title: "Security Compliance", metric: "CIS Level 2", desc: "Continuous automated scanning of cloud configurations against benchmarks." }
    ],
    process: [
      { step: "01", title: "Cloud Audit & FinOps Review", desc: "Auditing existing cloud usage, security rules, and monthly billing bills." },
      { step: "02", title: "Landing Zone Engineering", desc: "Setting up secure VPCs, IAM hierarchies, and networking baselines." },
      { step: "03", title: "Workload Migration & IaC Setup", desc: "Converting infrastructure definitions to Terraform and migrating databases." },
      { step: "04", title: "Managed Cloud Operations", desc: "24/7 monitoring, auto-scaling tuning, and monthly FinOps optimization reports." }
    ],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=75&w=1200&auto=format&fit=crop"
  },
  {
    slug: "email-management",
    title: "Email Management",
    category: "IT Infrastructure",
    categorySlug: "it-infrastructure",
    desc: "Enterprise email setup, migration, and managed support for Microsoft 365, Google Workspace, and Zimbra.",
    overview: "Ensure secure, zero-downtime corporate email communications with our managed collaboration suites. We handle enterprise migrations to Microsoft 365, Google Workspace, or hybrid Zimbra deployments, configuring SPF/DKIM/DMARC authentication and advanced email security gateways.",
    features: [
      { title: "Zero-Downtime Email Migrations", desc: "Migrating mailboxes, calendars, and contacts from legacy servers over weekends." },
      { title: "SPF, DKIM & DMARC Authentication", desc: "Strict domain authentication protocols blocking spoofing and improving deliverability." },
      { title: "Email Data Loss Prevention (DLP)", desc: "Automated rules preventing sensitive credit card or PII data from being emailed outbound." },
      { title: "Automated Cloud Backup & Archiving", desc: "Unlimited tamper-proof archiving for compliance and e-discovery." }
    ],
    benefits: [
      { title: "Email Deliverability", metric: "99.9%", desc: "Domain reputation management ensuring emails never land in spam folders." },
      { title: "Phishing Blocking", metric: "99.8%", desc: "Advanced AI filters neutralizing credential harvesting and CEO fraud emails." },
      { title: "Migration Downtime", metric: "0 Mins", desc: "Background sync methodology ensuring zero missed client communications." },
      { title: "Admin Efficiency", metric: "+70%", desc: "Centralized user onboarding, offboarding, and licensing management." }
    ],
    process: [
      { step: "01", title: "Domain & Mailbox Assessment", desc: "Cataloging users, aliases, distribution lists, and mailbox storage sizes." },
      { step: "02", title: "DNS & Security Preparation", desc: "Setting up SPF, DKIM, DMARC, and staging destination cloud tenants." },
      { step: "03", title: "Background Sync & Cutover", desc: "Syncing historical emails and switching MX records during low-traffic windows." },
      { step: "04", title: "Post-Migration Support", desc: "Assisting users with Outlook/mobile client setup and monitoring mail flows." }
    ],
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=75&w=1200&auto=format&fit=crop"
  },

  // ─── CYBER SECURITY ───
  {
    slug: "iso-27001-certification",
    title: "ISO 27001 Certification",
    category: "Cyber Security",
    categorySlug: "cyber-security",
    desc: "End-to-end guidance for achieving and maintaining ISO 27001 information security certification.",
    overview: "Achieve and maintain global ISO/IEC 27001:2022 certification with confidence. Our certified auditors and security consultants guide your organization through gap assessments, ISMS documentation, risk treatment plans, employee training, and rigorous stage 1 & stage 2 audit preparation.",
    features: [
      { title: "Comprehensive Gap Analysis", desc: "Benchmarking existing security controls against all ISO 27001 Annex A clauses." },
      { title: "ISMS Documentation Suite", desc: "Customized security policies, SOPs, and incident response runbooks." },
      { title: "Risk Assessment & Treatment Plan", desc: "Asset valuation, threat mapping, and risk mitigation roadmap creation." },
      { title: "Internal Audit & Certification Representation", desc: "Executing mock audits and defending controls during external registrar audits." }
    ],
    benefits: [
      { title: "Audit Pass Rate", metric: "100%", desc: "All client engagements successfully obtaining ISO 27001 certification on first attempt." },
      { title: "Preparation Time", metric: "-40%", desc: "Accelerated compliance using our proven policy templates and automation tools." },
      { title: "Enterprise Trust", metric: "Global Level", desc: "Unlocking enterprise B2B sales RFPs requiring strict security certifications." },
      { title: "Security Posture", metric: "Continuous", desc: "Establishment of a permanent culture of security review and improvement." }
    ],
    process: [
      { step: "01", title: "Gap Assessment & Scope Definition", desc: "Defining ISMS boundaries and evaluating existing control deficiencies." },
      { step: "02", title: "Policy Engineering & Risk Treatment", desc: "Drafting required policies and implementing mandatory technical controls." },
      { step: "03", title: "Internal Audit & Management Review", desc: "Conducting rigorous mock assessment and briefing executive leadership." },
      { step: "04", title: "External Certification Audit Support", desc: "Supporting your team onsite/remotely during Stage 1 and Stage 2 audits." }
    ],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=75&w=1200&auto=format&fit=crop"
  },
  {
    slug: "cyber-security-awareness-programs",
    title: "Awareness Programs",
    category: "Cyber Security",
    categorySlug: "cyber-security",
    desc: "Employee training, phishing simulations, and security culture programs for your organization.",
    overview: "Transform your employees from potential security vulnerabilities into your strongest human firewall. We deliver interactive cybersecurity awareness programs, automated simulated phishing campaigns, gamified training modules, and executive social engineering defense workshops.",
    features: [
      { title: "Simulated Phishing & Smishing Campaigns", desc: "Realistic targeted email and SMS phishing tests measuring employee resilience." },
      { title: "Interactive Gamified Training Modules", desc: "Bite-sized micro-learning covering ransomware, password hygiene, and remote work." },
      { title: "Executive & High-Risk Role Coaching", desc: "Specialized training for finance and C-suite teams targeting spear-phishing." },
      { title: "Human Risk Analytics Dashboard", desc: "Tracking departmental vulnerability scores and click-through rates over time." }
    ],
    benefits: [
      { title: "Phishing Click Rate", metric: "-80%", desc: "Dramatic reduction in employee susceptibility to simulated phishing attacks within 6 months." },
      { title: "Threat Reporting", metric: "5x Increase", desc: "Employees actively reporting suspicious emails using automated alert buttons." },
      { title: "Compliance Requirement", metric: "100%", desc: "Fulfilling annual employee training mandates for ISO 27001, SOC 2, and HIPAA." },
      { title: "Security Culture", metric: "Proactive", desc: "Embedding security consciousness into everyday operational routines." }
    ],
    process: [
      { step: "01", title: "Baseline Phishing Assessment", desc: "Conducting an unannounced phishing test to measure initial organization vulnerability." },
      { step: "02", title: "Customized Curriculum Design", desc: "Tailoring training videos and policies to reflect your exact tech stack." },
      { step: "03", title: "Monthly Simulation & Micro-Learning", desc: "Rolling out continuous monthly simulations and automated remedial training." },
      { step: "04", title: "Executive Risk Reporting", desc: "Presenting quarterly progress reports showing risk reduction to stakeholders." }
    ],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=75&w=1200&auto=format&fit=crop"
  },
  {
    slug: "vulnerability-assessment-and-penetration-testing-vapt",
    title: "VAPT Services",
    category: "Cyber Security",
    categorySlug: "cyber-security",
    desc: "Comprehensive security testing to identify and remediate vulnerabilities before attackers exploit them.",
    overview: "Identify and eliminate hidden security flaws before malicious hackers can exploit them. Our certified penetration testers (OSCP, CEH, CISSP) conduct rigorous white-box, grey-box, and black-box VAPT across web applications, mobile apps, APIs, cloud environments, and internal networks.",
    features: [
      { title: "Web Application & API Penetration Testing", desc: "Testing against OWASP Top 10, business logic flaws, and authentication bypasses." },
      { title: "Internal & External Network VAPT", desc: "Scanning and exploiting firewall misconfigurations, outdated services, and VLAN hops." },
      { title: "Cloud Security Configuration Review", desc: "Deep audit of AWS/Azure IAM permissions, storage buckets, and security groups." },
      { title: "Actionable Remediation & Retesting", desc: "Clear developer-friendly fix recommendations and free verification retesting." }
    ],
    benefits: [
      { title: "Breach Prevention", metric: "Proactive", desc: "Closing critical zero-day and known vulnerabilities before public exposure." },
      { title: "Remediation Clarity", metric: "100%", desc: "Exact reproduction steps and code-level remediation guidance provided." },
      { title: "Compliance Proof", metric: "Certified", desc: "Receiving official executive VAPT attestation certificates for client audits." },
      { title: "Retest Assurance", metric: "Included", desc: "Complimentary verification retest ensuring all findings are permanently fixed." }
    ],
    process: [
      { step: "01", title: "Scoping & Rules of Engagement", desc: "Defining IP ranges, URLs, credentials, and testing windows." },
      { step: "02", title: "Automated & Manual Exploitation", desc: "Combining scanner automation with intensive manual hacker methodology." },
      { step: "03", title: "Executive & Technical Reporting", desc: "Delivering detailed report categorized by CVSS severity scores." },
      { step: "04", title: "Remediation Support & Retest", desc: "Collaborating with developers to fix flaws and verifying patches." }
    ],
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=75&w=1200&auto=format&fit=crop"
  },
  {
    slug: "email-security",
    title: "Email Security",
    category: "Cyber Security",
    categorySlug: "cyber-security",
    desc: "Advanced email threat protection, anti-phishing, and secure email gateway solutions.",
    overview: "Secure your organization's primary threat vector with multi-layered email security architecture. We deploy AI-powered Secure Email Gateways (SEG), cloud email security solutions (Proofpoint, Mimecast, Microsoft Defender), and strict DNS domain authentication.",
    features: [
      { title: "AI-Powered Anti-Phishing & BEC Protection", desc: "Machine learning behavioral analysis blocking Business Email Compromise." },
      { title: "Attachment Sandboxing & URL Rewriting", desc: "Detonating suspicious files in isolated VMs and checking link safety at click-time." },
      { title: "Automated Outbound Data Encryption", desc: "Automatic encryption of emails containing confidential customer or financial data." },
      { title: "DMARC Enforcement Monitoring", desc: "Analyzing forensic DMARC reports to block brand spoofing across global ISPs." }
    ],
    benefits: [
      { title: "Malware Block Rate", metric: "99.99%", desc: "Neutralizing weaponized attachments before they reach user inboxes." },
      { title: "BEC Prevention", metric: "100%", desc: "Preventing executive impersonation wire-transfer fraud attempts." },
      { title: "Admin Workload", metric: "-65%", desc: "Automated quarantine digests allowing users to self-manage safe senders." },
      { title: "Brand Protection", metric: "Enforced", desc: "Preventing attackers from sending spoofed emails from your domain name." }
    ],
    process: [
      { step: "01", title: "Mail Flow Audit & Threat Baseline", desc: "Evaluating current email protection gaps and spam/malware volumes." },
      { step: "02", title: "Gateway Deployment & MX Switch", desc: "Configuring cloud security gateway and routing traffic through filters." },
      { step: "03", title: "Policy Tuning & Sandboxing Activation", desc: "Fine-tuning DLP thresholds, URL rewriting rules, and exceptions." },
      { step: "04", title: "Continuous Monitoring & DMARC Lock", desc: "Transitioning DMARC policy from monitoring to strict enforcement (`p=reject`)." }
    ],
    image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?q=75&w=1200&auto=format&fit=crop"
  },
  {
    slug: "detection-on-demand",
    title: "Detection on Demand",
    category: "Cyber Security",
    categorySlug: "cyber-security",
    desc: "On-demand threat detection and incident response services for rapid security assessment.",
    overview: "Gain instant visibility into potential active compromises or hidden threats with Detection on Demand. Whether responding to a suspicious alert, conducting M&A due diligence, or performing periodic compromise assessments, our incident response experts deploy rapid threat hunting tools.",
    features: [
      { title: "Rapid Endpoint Threat Hunting", desc: "Deploying lightweight forensic telemetry agents to hunt for advanced persistent threats." },
      { title: "Network Traffic Anomaly Analysis", desc: "Inspecting packet captures and command-and-control (C2) beaconing behavior." },
      { title: "Compromise Assessment & IOC Sweeping", desc: "Scanning across enterprise estates for Indicators of Compromise from known ransomware." },
      { title: "Emergency Incident Containment", desc: "Immediate isolation of compromised hosts and eradication of adversary foothold." }
    ],
    benefits: [
      { title: "Deployment Speed", metric: "<2 Hours", desc: "Rapid rollout of forensic triage tools across thousands of endpoints." },
      { title: "Adversary Dwell Time", metric: "-90%", desc: "Catching hidden intruders before they initiate ransomware encryption." },
      { title: "Forensic Clarity", metric: "100%", desc: "Complete timeline reconstruction of initial access, lateral movement, and exfiltration." },
      { title: "Zero Lock-In", metric: "On-Demand", desc: "High-tier security expertise deployed exactly when your business needs it." }
    ],
    process: [
      { step: "01", title: "Triage & Agent Deployment", desc: "Rapid scoping and non-intrusive push of forensic monitoring collectors." },
      { step: "02", title: "Deep Threat Hunting & IOC Sweep", desc: "Analyzing memory dumps, event logs, and network telemetry for anomalies." },
      { step: "03", title: "Containment & Eradication", desc: "Isolating infected endpoints, revoking compromised tokens, and removing malware." },
      { step: "04", title: "Executive Briefing & Hardening", desc: "Presenting findings and implementing architectural hardening rules." }
    ],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=75&w=1200&auto=format&fit=crop"
  },
  {
    slug: "network-security-forensics",
    title: "Network Security & Forensics",
    category: "Cyber Security",
    categorySlug: "cyber-security",
    desc: "Network traffic analysis, intrusion detection, and digital forensics for incident investigation.",
    overview: "Protect your internal infrastructure and uncover digital truth after an incident with Network Security and Digital Forensics. We engineer zero-trust network segmentation, deploy Intrusion Detection/Prevention Systems (IDS/IPS), and conduct legally admissible digital forensic investigations.",
    features: [
      { title: "Zero-Trust Network Segmentation", desc: "Micro-segmenting data center traffic to prevent lateral movement of malware." },
      { title: "Intrusion Detection & Prevention (IDS/IPS)", desc: "Real-time deep packet inspection blocking exploits and anomalous payloads." },
      { title: "Digital Forensics & Chain of Custody", desc: "Bit-stream disk imaging and memory analysis adhering to legal evidentiary standards." },
      { title: "Malware Reverse Engineering", desc: "Decompiling custom ransomware strains to extract indicators and encryption behavior." }
    ],
    benefits: [
      { title: "Lateral Movement", metric: "Blocked", desc: "Zero-trust boundaries stopping compromised laptops from infecting core servers." },
      { title: "Evidentiary Integrity", metric: "Court Admissible", desc: "Strict chain-of-custody documentation supported in legal proceedings." },
      { title: "Exploit Blocking", metric: "Automated", desc: "IPS engines dropping malicious attack traffic before it reaches target ports." },
      { title: "Root Cause Analysis", metric: "100%", desc: "Definitive identification of the exact entry point and data access history." }
    ],
    process: [
      { step: "01", title: "Network Architecture & Sensor Audit", desc: "Evaluating traffic choke points and placing IDS/IPS monitoring sensors." },
      { step: "02", title: "Segmentation Policy Enforcement", desc: "Configuring VLAN access control lists and zero-trust firewall rules." },
      { step: "03", title: "Forensic Evidence Acquisition", desc: "Creating write-blocked forensic bit-stream copies of drives and logs during investigations." },
      { step: "04", title: "Forensic Analysis & Expert Testimony", desc: "Correlating artifacts, building timelines, and delivering formal forensic reports." }
    ],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=75&w=1200&auto=format&fit=crop"
  },
  {
    slug: "endpoint-security",
    title: "Endpoint Security",
    category: "Cyber Security",
    categorySlug: "cyber-security",
    desc: "Next-gen endpoint protection, EDR, and device management for your distributed workforce.",
    overview: "Secure every laptop, workstation, and server across your hybrid workforce with Next-Generation Endpoint Security. We deploy and manage enterprise EDR/XDR platforms (CrowdStrike, SentinelOne, Microsoft Defender for Endpoint), providing 24/7 behavioral monitoring and automated threat containment.",
    features: [
      { title: "Next-Gen EDR/XDR Deployment", desc: "AI-driven behavioral blocking stopping zero-day ransomware and fileless attacks." },
      { title: "Automated Device Isolation", desc: "Instant network disconnection of compromised hosts while maintaining forensic access." },
      { title: "Device Encryption & USB Control", desc: "Enforcing BitLocker/FileVault encryption and restricting unauthorized external USB storage." },
      { title: "Vulnerability & Patch Management", desc: "Automated scanning and updating of third-party applications across all laptops." }
    ],
    benefits: [
      { title: "Ransomware Protection", metric: "100%", desc: "Behavioral AI stopping encryption routines within milliseconds of initiation." },
      { title: "Investigation Time", metric: "-80%", desc: "Automated root-cause attack trees showing exact process execution paths." },
      { title: "Device Visibility", metric: "100%", desc: "Unified dashboard tracking security health of all remote and office machines." },
      { title: "Remediation Speed", metric: "Instant", desc: "One-click rollback of malicious file modifications and registry changes." }
    ],
    process: [
      { step: "01", title: "Endpoint Inventory & Policy Design", desc: "Cataloging all operating systems and defining endpoint security policies." },
      { step: "02", title: "Silent Agent Rollout", desc: "Deploying EDR agents via MDM or Active Directory group policies seamlessly." },
      { step: "03", title: "Tuning & False-Positive Elimination", desc: "Configuring exclusions for proprietary internal software and business apps." },
      { step: "04", title: "24/7 SOC Monitoring Activation", desc: "Integrating EDR telemetry into our continuous SOC monitoring alerts." }
    ],
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=75&w=1200&auto=format&fit=crop"
  },

  // ─── CXO ADVISORY ───
  {
    slug: "drive-business-excellence-via-technology",
    title: "Business Excellence via Technology",
    category: "CXO Advisory",
    categorySlug: "cxo-advisory",
    desc: "Strategic alignment of technology investments with business outcomes to maximize operational efficiency.",
    overview: "Align your C-suite vision with high-impact technology execution. We work directly with CEOs, CIOs, and Boards of Directors to eliminate IT waste, streamline business architecture, and ensure that every dollar invested in technology directly drives measurable revenue growth and operational excellence.",
    features: [
      { title: "IT & Business Alignment Assessment", desc: "Auditing technology portfolios to eliminate redundant tools and misaligned spending." },
      { title: "Operating Model & Agile Governance", desc: "Designing modern IT organizational structures focused on product delivery." },
      { title: "Enterprise Architecture Blueprinting", desc: "Mapping core business capabilities to optimal software and cloud platforms." },
      { title: "KPI & Value Realization Frameworks", desc: "Establishing strict metrics tracking the financial ROI of major IT initiatives." }
    ],
    benefits: [
      { title: "IT Budget Efficiency", metric: "+30%", desc: "Reallocating wasted maintenance spend into growth and digital innovation." },
      { title: "Project Success Rate", metric: "95%", desc: "Strong executive governance preventing project scope creep and failures." },
      { title: "Operational Velocity", metric: "2x Faster", desc: "Streamlined architecture eliminating departmental data bottlenecks." },
      { title: "Board Confidence", metric: "100%", desc: "Clear, transparent translation of technical roadmaps into business value." }
    ],
    process: [
      { step: "01", title: "Executive Immersion & Discovery", desc: "Conducting interviews with C-suite stakeholders to capture core business drivers." },
      { step: "02", title: "Portfolio Audit & Gap Analysis", desc: "Evaluating current software stacks, vendor contracts, and architecture integrity." },
      { step: "03", title: "Strategic Roadmap Engineering", desc: "Drafting multi-year transformation initiatives prioritized by ROI and effort." },
      { step: "04", title: "Governance & Execution Oversight", desc: "Establishing steering committees and tracking quarterly value realization." }
    ],
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=75&w=1200&auto=format&fit=crop"
  },
  {
    slug: "digital-transformation-guidance",
    title: "Digital Transformation Guidance",
    category: "CXO Advisory",
    categorySlug: "cxo-advisory",
    desc: "End-to-end digital transformation roadmaps — from assessment to execution — tailored for your industry.",
    overview: "Navigate complex digital transformations without the high failure rates of traditional corporate initiatives. We provide end-to-end transformation advisory—combining technological modernization with rigorous organizational change management, digital skill upskilling, and customer-first process re-engineering.",
    features: [
      { title: "Digital Maturity Benchmarking", desc: "Evaluating your digital capabilities against industry leaders and disruptors." },
      { title: "Customer & Operational Journey Mapping", desc: "Re-engineering core workflows around digital-first customer experiences." },
      { title: "Technology Stack Modernization Strategy", desc: "Planning the migration from legacy monoliths to agile cloud ecosystems." },
      { title: "Organizational Change Management (OCM)", desc: "Structured communication, training, and incentive plans driving employee buy-in." }
    ],
    benefits: [
      { title: "Transformation ROI", metric: "3x Higher", desc: "Holistic focus on people and processes alongside modern technology." },
      { title: "Employee Adoption", metric: "+85%", desc: "Proactive change management overcoming internal resistance to new systems." },
      { title: "Customer Experience", metric: "+40% NPS", desc: "Seamless digital touchpoints increasing customer satisfaction and loyalty." },
      { title: "Time-to-Value", metric: "-40%", desc: "Phased milestone delivery ensuring quick wins every 90 days." }
    ],
    process: [
      { step: "01", title: "Maturity Assessment & Visioning", desc: "Benchmarking digital state and defining clear transformation North Star." },
      { step: "02", title: "Phased Roadmap & Business Case", desc: "Building detailed financial models and sequential execution sprints." },
      { step: "03", title: "Pilot Execution & Change Rollout", desc: "Launching high-impact pilot projects and initiating change management." },
      { step: "04", title: "Scaling & Continuous Adaptation", desc: "Scaling successful models across global business units and refining KPIs." }
    ],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=75&w=1200&auto=format&fit=crop"
  },
  {
    slug: "it-roadmap-creation",
    title: "IT Roadmap Creation",
    category: "CXO Advisory",
    categorySlug: "cxo-advisory",
    desc: "Multi-year technology roadmaps aligned with business goals, budget constraints, and market dynamics.",
    overview: "Eliminate reactive, piecemeal IT decisions with a comprehensive, multi-year technology roadmap. We synthesize your enterprise growth ambitions, regulatory requirements, and technical debt into a prioritized, quarter-by-quarter execution plan complete with budget forecasts and resource sizing.",
    features: [
      { title: "Prioritized Initiative Sequencing", desc: "Ranking projects by strategic business impact vs technical complexity and cost." },
      { title: "Technical Debt Remediation Plan", desc: "Structured timeline for decommissioning legacy servers, end-of-life apps, and old code." },
      { title: "CapEx vs OpEx Budget Forecasting", desc: "Detailed 3-to-5 year financial projections for cloud licenses and engineering resources." },
      { title: "Vendor & Partner Strategy", desc: "Selecting optimal software vendors and system integrators with favorable terms." }
    ],
    benefits: [
      { title: "Strategic Clarity", metric: "100%", desc: "Every IT initiative directly traceable to a quarterly business objective." },
      { title: "Technical Debt Cost", metric: "-50%", desc: "Systematic retirement of costly, brittle legacy systems." },
      { title: "Budget Accuracy", metric: "95%", desc: "Elimination of unexpected IT cost overruns through thorough sizing." },
      { title: "Execution Speed", metric: "+45%", desc: "Clear architectural dependencies enabling parallel project tracks." }
    ],
    process: [
      { step: "01", title: "Current State & Debt Audit", desc: "Cataloging all software, hardware, dependencies, and architectural bottlenecks." },
      { step: "02", title: "Strategic Workshop & Prioritization", desc: "Facilitating C-suite workshops to score and rank future IT capabilities." },
      { step: "03", title: "Roadmap & Financial Synthesis", desc: "Drafting interactive visual roadmaps and multi-year budget spreadsheets." },
      { step: "04", title: "Executive Endorsement & Governance", desc: "Presenting to Board of Directors and establishing quarterly roadmap reviews." }
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=75&w=1200&auto=format&fit=crop"
  },
  {
    slug: "strategic-it-investment",
    title: "Strategic IT Investment",
    category: "CXO Advisory",
    categorySlug: "cxo-advisory",
    desc: "Board-level advisory on technology portfolio management, vendor selection, and ROI optimization.",
    overview: "Make confident, high-stakes technology investment decisions. We provide unbiased, independent C-level advisory on major ERP/CRM vendor selections, M&A technical due diligence, software contract negotiations, and enterprise architecture overhauls.",
    features: [
      { title: "Independent RFP & Vendor Selection", desc: "Objective evaluation and scoring of SAP, Oracle, Salesforce, and custom alternatives." },
      { title: "M&A Technical Due Diligence", desc: "Deep technical audits of acquisition targets evaluating code quality, security, and IP." },
      { title: "Contract & License Optimization", desc: "Negotiating enterprise software licensing terms to eliminate unused shelf-ware." },
      { title: "Interim/Fractional CIO/CTO Advisory", desc: "Embedded senior technology leadership during organizational transitions." }
    ],
    benefits: [
      { title: "Vendor Savings", metric: "20-35%", desc: "Substantial cost reductions achieved through expert software contract negotiation." },
      { title: "M&A Risk Reduction", metric: "100%", desc: "Uncovering hidden cybersecurity risks and technical debt before closing deals." },
      { title: "Selection Objectivity", metric: "Zero Bias", desc: "Guaranteed vendor neutrality ensuring the best technology fit for your needs." },
      { title: "Executive Leverage", metric: "Immediate", desc: "Senior industry expertise on your side during critical boardroom negotiations." }
    ],
    process: [
      { step: "01", title: "Investment Scoping & Criteria", desc: "Defining strict technical, functional, and commercial evaluation criteria." },
      { step: "02", title: "Deep Due Diligence & Scoring", desc: "Conducting vendor workshops, code reviews, and reference checks." },
      { step: "03", title: "Negotiation & Business Case", desc: "Structuring SLAs, pricing terms, and risk mitigation clauses." },
      { step: "04", title: "Execution Governance", desc: "Overseeing vendor mobilization and initial project kickoff integrity." }
    ],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=75&w=1200&auto=format&fit=crop"
  },

  // ─── ANALYTICS ───
  {
    slug: "data-lake-solutions",
    title: "Data Lake Solutions",
    category: "Analytics",
    categorySlug: "analytics",
    desc: "Enterprise-scale data lake architecture on AWS, Azure, or GCP for centralized, governed data storage.",
    overview: "Centralize your structured, semi-structured, and unstructured data at petabyte scale with modern cloud data lakes. We design and build secure, high-throughput data lakes on AWS (S3/Glue), Azure Data Lake Storage (ADLS Gen2), or Google Cloud Storage, equipped with strict data governance.",
    features: [
      { title: "Multi-Tier Cloud Data Lake Architecture", desc: "Organizing data into Bronze (Raw), Silver (Cleaned), and Gold (Curated) zones." },
      { title: "Automated Data Catalog & Lineage", desc: "Deploying AWS Glue, Apache Atlas, or Microsoft Purview for instant data discovery." },
      { title: "High-Throughput Ingestion Pipelines", desc: "Real-time streaming (Kafka/Kinesis) and scheduled batch ETL processes." },
      { title: "Granular Data Security & Encryption", desc: "Role-based access controls, column-level masking, and encryption at rest/transit." }
    ],
    benefits: [
      { title: "Storage Cost", metric: "-65%", desc: "Utilizing cost-effective cloud object storage tiers instead of expensive databases." },
      { title: "Data Accessibility", metric: "100%", desc: "Single source of truth accessible by data scientists, analysts, and BI tools." },
      { title: "Query Performance", metric: "10x Faster", desc: "Optimized Parquet/Delta Lake file formats supporting massive analytical queries." },
      { title: "Data Governance", metric: "Compliant", desc: "Automated PII masking and audit logging meeting GDPR/DPDP mandates." }
    ],
    process: [
      { step: "01", title: "Data Inventory & Sizing", desc: "Auditing data sources, volume growth rates, and consumption patterns." },
      { step: "02", title: "Landing Zone & Security Setup", desc: "Configuring cloud storage buckets, IAM roles, and network security boundaries." },
      { step: "03", title: "ETL Pipeline Engineering", desc: "Building automated ingestion pipelines transforming raw data into Parquet/Delta." },
      { step: "04", title: "Cataloging & Consumer Onboarding", desc: "Indexing metadata and connecting BI/ML platforms to the curated data lake." }
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=75&w=1200&auto=format&fit=crop"
  },
  {
    slug: "data-visualization-reporting",
    title: "Data Visualization & Reporting",
    category: "Analytics",
    categorySlug: "analytics",
    desc: "Interactive dashboards and reports using Power BI, Tableau, and custom visualization platforms.",
    overview: "Transform complex datasets into intuitive, interactive visual narratives that drive instant executive action. We design and deploy high-performance enterprise dashboards using Microsoft Power BI, Tableau, Looker, and custom D3.js web portals, tailored specifically to department workflows.",
    features: [
      { title: "Executive & Operational BI Dashboards", desc: "Pixel-perfect reports tracking revenue, supply chain, and employee productivity." },
      { title: "Row-Level Security & Role Views", desc: "Single dashboard automatically displaying filtered data based on user login role." },
      { title: "Self-Service Ad-Hoc Reporting Models", desc: "Empowering business users with drag-and-drop semantic data models." },
      { title: "Automated Report Scheduling & Alerts", desc: "Automated PDF/Excel email digests and mobile push notifications for KPI anomalies." }
    ],
    benefits: [
      { title: "Reporting Cycle", metric: "Instant", desc: "Eliminating weekly manual Excel compilation with real-time automated data refreshes." },
      { title: "Decision Speed", metric: "5x Faster", desc: "Visual storytelling highlighting trends, outliers, and root causes immediately." },
      { title: "BI Adoption", metric: "+80%", desc: "Intuitive, clean UI design driving daily engagement across all management tiers." },
      { title: "Data Consistency", metric: "100%", desc: "Standardized enterprise KPI definitions ensuring single version of truth." }
    ],
    process: [
      { step: "01", title: "KPI Workshop & Wireframing", desc: "Defining critical metrics and mocking up dashboard layouts with stakeholders." },
      { step: "02", title: "Semantic Modeling & DAX/SQL Setup", desc: "Building optimized data models, measures, and relationship hierarchies." },
      { step: "03", title: "Dashboard Construction & Styling", desc: "Developing interactive visualizations aligned with brand design guidelines." },
      { step: "04", title: "UAT, Security Setup & Rollout", desc: "Validating data accuracy, setting role permissions, and conducting training." }
    ],
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=75&w=1200&auto=format&fit=crop"
  },
  {
    slug: "enterprise-data-warehousing",
    title: "Enterprise Data Warehousing",
    category: "Analytics",
    categorySlug: "analytics",
    desc: "Modern data warehouse design and implementation for high-performance analytical workloads.",
    overview: "Power your enterprise analytics with modern, elastic cloud data warehouses. We architect, migrate, and optimize data warehousing environments on Snowflake, Google BigQuery, and Amazon Redshift—providing columnar processing speed, zero-copy cloning, and compute-storage separation.",
    features: [
      { title: "Snowflake, BigQuery & Redshift Architecture", desc: "Deploying cloud-native data warehouses with elastic multi-cluster compute." },
      { title: "Star Schema & Data Vault Modeling", desc: "Structuring dimensional data tables for ultra-fast aggregations and history tracking." },
      { title: "Modern Data Stack Integration", desc: "Automated data transformation and orchestration using dbt (data build tool) and Airflow." },
      { title: "Continuous Query & Cost Optimization", desc: "Monitoring warehouse compute credits and clustering keys to minimize billing." }
    ],
    benefits: [
      { title: "Query Speed", metric: "50x Faster", desc: "Sub-second execution of complex multi-table joins across billions of rows." },
      { title: "Warehouse Concurrency", metric: "Unlimited", desc: "Zero performance degradation even during peak concurrent user reporting hours." },
      { title: "Infrastructure TCO", metric: "-40%", desc: "Paying only for exact compute seconds consumed with auto-suspend warehouses." },
      { title: "Data Freshness", metric: "<15 Mins", desc: "Near real-time micro-batch data loading powering up-to-the-minute dashboards." }
    ],
    process: [
      { step: "01", title: "Dimensional Modeling & Sizing", desc: "Designing star schemas and historical slowly changing dimensions (SCD)." },
      { step: "02", title: "Warehouse Provisioning & dbt Setup", desc: "Configuring cloud data warehouse clusters and staging transformation models." },
      { step: "03", title: "Historical Migration & Pipeline Sync", desc: "Migrating legacy data from on-premise warehouses and starting automated pipelines." },
      { step: "04", title: "Performance Tuning & Governance", desc: "Clustering tables, optimizing SQL queries, and setting resource monitors." }
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=75&w=1200&auto=format&fit=crop"
  },
  {
    slug: "analytics-advisory-services",
    title: "Analytics Advisory",
    category: "Analytics",
    categorySlug: "analytics",
    desc: "Data strategy consulting, governance frameworks, and analytics maturity assessments.",
    overview: "Establish a world-class data culture and strategy with our Analytics Advisory services. We help organizations assess their data maturity, design comprehensive data governance and quality frameworks, evaluate AI/ML readiness, and build clear roadmaps for monetization.",
    features: [
      { title: "Data Strategy & Roadmap Development", desc: "Aligning analytics capability building with 3-year corporate revenue targets." },
      { title: "Data Governance & Quality Frameworks", desc: "Establishing data stewardship councils, ownership matrices, and quality thresholds." },
      { title: "AI & GenAI Readiness Assessment", desc: "Auditing enterprise data cleanliness and availability for LLM and ML training." },
      { title: "Modern Data Platform Architecture Review", desc: "Evaluating existing tools and recommending optimal cost-effective stacks." }
    ],
    benefits: [
      { title: "Data Trust", metric: "99.5%", desc: "High confidence across executives in reported KPIs and underlying metrics." },
      { title: "Analytics ROI", metric: "3x", desc: "Prioritizing high-impact data use cases that deliver measurable revenue or savings." },
      { title: "AI Readiness", metric: "Accelerated", desc: "Clean, structured data pipelines prepared for rapid deployment of AI agents." },
      { title: "Compliance Risk", metric: "Zero", desc: "Full adherence to data privacy regulations through structured data lineage." }
    ],
    process: [
      { step: "01", title: "Data Maturity & Culture Assessment", desc: "Evaluating current data literacy, tool adoption, and governance gaps." },
      { step: "02", title: "Use Case Prioritization Matrix", desc: "Scoring potential analytics and AI use cases by feasibility and financial value." },
      { step: "03", title: "Governance & Roadmap Design", desc: "Drafting data stewardship policies and multi-year data architecture blueprints." },
      { step: "04", title: "Executive Presentation & Rollout", desc: "Presenting to C-suite leadership and mobilizing data transformation teams." }
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=75&w=1200&auto=format&fit=crop"
  }
];

export function getSubServiceBySlug(slug: string): SubServiceData | undefined {
  return SUB_SERVICES_DATA.find((s) => s.slug === slug);
}

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
