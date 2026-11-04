export type IndustryCaseStudy = {
  id: string;
  title: string;
  badge: string;
  challenge: string;
  solution: string;
  impact: string;
};

export type IndustryDetail = {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  iconName: "Pickaxe" | "Factory" | "Boxes" | "Truck" | "Zap" | "Building2" | "Activity";
  overview: string;
  challenges: { title: string; desc: string }[];
  solutions: { title: string; desc: string }[];
  benefits: string[];
  whyAcceleron: string[];
  caseStudies: IndustryCaseStudy[];
};

export const INDUSTRIES_DATA: Record<string, IndustryDetail> = {
  mining: {
    slug: "mining",
    title: "Mining Operations Driven by Domain Mastery",
    subtitle: "Grounded in Gainwell Group's 80-year heavy mining lineage, we deliver SAP S/4HANA, asset management, and field safety systems built for extreme pit-to-port environments.",
    image: "/industries/Mining/mining-industry.webp",
    iconName: "Pickaxe",
    overview: "Mining operations require precision coordination across vast, remote geographies. Acceleron combines deep site-level operational heritage with cutting-edge ERP, IoT fleet monitoring, and Suraksha field safety platforms.",
    challenges: [
      { title: "Equipment Downtime", desc: "Unplanned failures on high-tonnage excavators and haul trucks cost up to $100K/hour." },
      { title: "Siloed Pit-to-Port Operations", desc: "Disconnected extraction, logistics, and port loading schedules create bottleneck delays." },
      { title: "Hazardous Field Safety Risks", desc: "Paper-based incident reporting delays emergency response times in hazardous extraction zones." },
      { title: "Strict ESG & Regulatory Audits", desc: "Managing tailings, carbon metrics, and community agreements manually introduces compliance risk." }
    ],
    solutions: [
      { title: "Integrated Mine ERP (SAP S/4HANA)", desc: "Unified asset management, maintenance scheduling, and material movement tracking." },
      { title: "Tyre Health & Fleet IoT Analytics", desc: "Real-time telemetry and predictive maintenance for heavy haulage fleets." },
      { title: "Suraksha Field Safety Platform", desc: "Mobile hazard reporting, contractor management, and digital permit-to-work systems." },
      { title: "ESG & Compliance Dashboards", desc: "Automated sustainability reporting aligned with global mining standards." }
    ],
    benefits: [
      "25% reduction in unplanned equipment downtime",
      "Real-time visibility into pit-to-port logistics costs",
      "60% faster emergency response times on site",
      "Zero compliance gap in contractor workforce tracking"
    ],
    whyAcceleron: [
      "Direct heritage from Gainwell Group — Caterpillar & heavy mining equipment pioneers",
      "Certified SAP, Zoho, and IoT solution architects with field experience",
      "Proven deployments across remote sites in APAC and Africa"
    ],
    caseStudies: [
      {
        id: "mining-cs-1",
        title: "Unified Greenfield SAP S/4HANA Core for Coal Mining Extraction",
        badge: "Case Study 1 • Digital Core Transformation",
        challenge: "Operating complex coal mining sites requires precision and seamless data flow across remote locations. This prominent coal mining enterprise faced operational roadblocks due to disconnected legacy systems that isolated financial ledgers from field procurement and inventory control. This fragmentation hindered real-time decisions and prolonged procurement cycles.",
        solution: "To establish a unified digital core, Acceleron executed a greenfield SAP S/4HANA implementation tailored to heavy extraction workflows. The engagement covered end-to-end data migration, cross-departmental process re-engineering, and standardized automated routines across operational hubs.",
        impact: "The organization gained real-time visibility into equipment utilization, stock levels, and financial performance across all sites. Streamlined processes eliminated manual data silos, accelerated procurement, and strengthened regulatory compliance. This modernization established a scalable, resilient platform for sustainable asset growth and data-driven operational control."
      },
      {
        id: "mining-cs-2",
        title: "Integrated Fleet Telematics & Automated Maintenance Management",
        badge: "Case Study 2 • Telemetry & Asset Maintenance",
        challenge: "As a provider of innovative, efficient, and sustainable services to the mining and infrastructure sectors, this enterprise managed extensive machinery fleets and remote project sites. However, legacy asset tracking and fragmented maintenance workflows caused avoidable equipment downtime and rising administrative overheads.",
        solution: "Our engineering practice deployed an integrated enterprise solution combining ERP workflows, real-time telemetry tracking, and automated service management. This architecture connected field operations with back-office accounting, enabling proactive asset monitoring, streamlined spare parts requisition, and automated compliance tracking.",
        impact: "Consequently, the organization reduced unscheduled equipment downtime and optimized maintenance scheduling across its machinery fleet. Improved operational efficiency enabled project managers to monitor milestones in real time and lower service delivery costs. This digital transformation provided an agile framework for expanding infrastructure commitments."
      }
    ]
  },
  "discrete-manufacturing": {
    slug: "discrete-manufacturing",
    title: "Agile Production & Smart Factory Intelligence",
    subtitle: "Modernizing discrete manufacturing with SAP RISE, shop-floor IoT, QMS quality controls, and supply chain automation.",
    image: "/industries/Manufacturing/manufacturing-industry.webp",
    iconName: "Factory",
    overview: "Discrete manufacturers face shifting customer demand, intricate multi-tier bills of materials (BOM), and rigorous quality tolerances. We bridge the gap between IT business systems and OT shop-floor execution.",
    challenges: [
      { title: "Complex Assembly Tracking", desc: "Managing multi-level BOMs across distributed assembly plants leads to inventory drift." },
      { title: "Quality Audit Overhead", desc: "Manual quality checks increase scrap rates and non-conformance penalties." },
      { title: "Supply Chain Disruptions", desc: "Lack of real-time supplier visibility leads to component shortages and line stops." },
      { title: "Legacy ERP Customization Bloat", desc: "Outdated legacy ERP systems prevent rapid deployment of smart factory IoT automation." }
    ],
    solutions: [
      { title: "Smart Factory SAP S/4HANA RISE", desc: "Streamlined production planning, MRP runs, and shop floor order execution." },
      { title: "Acceleron QMS Platform", desc: "Closed-loop quality management, CAPA workflows, and digital inspection sheets." },
      { title: "Supplier Portal & Vendor Onboarding", desc: "Automated RFQs, advance shipping notices (ASN), and 3-way invoice matching." },
      { title: "Real-Time OEE Telemetry", desc: "Live overall equipment effectiveness dashboards connected to CNC and assembly lines." }
    ],
    benefits: [
      "18% increase in Overall Equipment Effectiveness (OEE)",
      "40% reduction in supplier invoice processing cycle time",
      "Real-time traceability from raw component to finished goods",
      "Seamless ISO 9001 / IATF 16949 audit compliance"
    ],
    whyAcceleron: [
      "End-to-end integration capabilities from MES/PLC layers up to SAP ERP",
      "Pre-packaged industry solutions for machinery and component manufacturers",
      "Dedicated continuous delivery & post-go-live optimization teams"
    ],
    caseStudies: [
      {
        id: "mfg-cs-1",
        title: "Synchronizing Shop-Floor Production with Enterprise Financial Reporting",
        badge: "Case Study 1 • Manufacturing ERP Synchronization",
        challenge: "Synchronizing shop-floor production schedules with enterprise-wide financial reporting is a critical challenge for large manufacturers. This heavy manufacturing conglomerate faced operational bottlenecks in capacity planning, order fulfillment, and material reconciliation due to disconnected legacy software.",
        solution: "We implemented an integrated SAP manufacturing and ERP architecture to streamline discrete manufacturing workflows, automate shop-floor data collection, and establish real-time traceability from raw material procurement to final delivery. Custom interfaces connected legacy industrial machinery directly with central planning modules.",
        impact: "The deployment improved enterprise performance. Production planning accuracy increased, order cycle times fell by over 25%, and enhanced stock visibility reduced inventory holding costs. Seamless cross-departmental alignment gave leadership accurate analytics to improve plant productivity and client satisfaction."
      },
      {
        id: "mfg-cs-2",
        title: "Field Service Management (FSM) & Rapid Technician Dispatch",
        badge: "Case Study 2 • Field Service & Dispatch Automation",
        challenge: "Managing after-sales service operations, warranty tracking, and rapid field technician dispatch is vital for heavy machinery providers. This industrial equipment enterprise faced operational challenges as manual service logging caused delayed responses and high administrative overheads.",
        solution: "Our team deployed an advanced Field Service Management (FSM) and Work Order Management architecture integrated with its core enterprise system. The solution introduced digital job cards, real-time technician GPS tracking, automated spare parts requisition, and proactive maintenance scheduling.",
        impact: "The impact was significant: average call assignment times dropped from 60 minutes to under 2 minutes, first-time fix rates improved, and customer satisfaction increased. Field engineers gained mobile access to equipment service histories, eliminating paperwork and transforming after-sales support into a streamlined profit center."
      },
      {
        id: "mfg-cs-3",
        title: "Contractor Workforce Management (CWMS) & Safety Verification",
        badge: "Case Study 3 • Contractor Management & Compliance",
        challenge: "Managing large contractor workforces across industrial project locations creates administrative challenges in attendance tracking, shift rostering, wage processing, and statutory safety compliance. This infrastructure services provider needed a robust digital solution to eliminate manual errors.",
        solution: "We implemented a specialized Contractor Workforce Management System integrated with automated compliance and safety protocols. The platform streamlined biometric attendance, dynamic shift scheduling, wage calculations, and real-time safety induction verification for on-site contract personnel.",
        impact: "The deployment eliminated manual payroll discrepancies and reduced compliance audit preparation time by 40%. Project managers gained real-time workforce visibility, ensuring only certified personnel operated in hazardous zones. This enhanced site safety, mitigated legal liabilities, and improved contractor productivity."
      }
    ]
  },
  "capital-goods": {
    slug: "capital-goods",
    title: "Lifecycle Excellence for Capital Goods & Industrial Machinery",
    subtitle: "Orchestrating engineer-to-order (ETO) projects, warranty management, and field service operations for heavy machinery OEMs.",
    image: "/industries/Capital Goods/capital-goods-industry.webp",
    iconName: "Boxes",
    overview: "Capital goods OEMs operate complex engineer-to-order models where product delivery is just the beginning. Acceleron delivers connected solutions for product lifecycle management (PLM), SAP S/4HANA engineering, and field service.",
    challenges: [
      { title: "Long Lead Time ETO Projects", desc: "Engineering design changes during production cause scope creep and margin erosion." },
      { title: "Aftermarket Service Blind Spots", desc: "Missed warranty claims and spare parts inventory leakage reduce service profitability." },
      { title: "Contractor & Field Technician Visibility", desc: "Managing third-party technicians across global installation sites is fragmented." },
      { title: "Complex Milestone Billing", desc: "Delayed milestone sign-offs impede revenue recognition and working capital." }
    ],
    solutions: [
      { title: "SAP S/4HANA Project System (PS)", desc: "Milestone tracking, WBS cost control, and engineering change management (ECM)." },
      { title: "Enterprise CRM & Field Service", desc: "Intelligent dispatch, mobile work orders, and IoT-triggered technician scheduling." },
      { title: "CWMS Contractor Workforce Management", desc: "Digital onboarding, skill verification, and site access control for third-party crews." },
      { title: "Connected Equipment Telemetry", desc: "Live machine data feeds for remote diagnostics and preventative maintenance agreements." }
    ],
    benefits: [
      "15% improvement in project margin predictability",
      "35% increase in first-time fix rates for field service calls",
      "Full digital audit trail for warranty claims and spare parts consumption",
      "Accelerated milestone sign-off and billing cycles"
    ],
    whyAcceleron: [
      "Deep understanding of ETO & MTO manufacturing workflows",
      "Unified SAP & CRM integration accelerators",
      "Proven track record with Tier-1 industrial equipment leaders"
    ],
    caseStudies: [
      {
        id: "cg-cs-1",
        title: "Asset & Inventory Tracking for Gas Compression Equipment on SAP RISE",
        badge: "Case Study 1 • Industrial Asset Lifecycle",
        challenge: "Managing multi-location asset inventories and servicing schedules for specialized gas compression units at remote industrial plants requires rigorous tracking. This industrial compression and heavy equipment provider needed an advanced system for warranty compliance and parts distribution.",
        solution: "We developed a customized asset and inventory tracking solution integrated with enterprise ERP platforms, using SAP S/4HANA on RISE, SAP CPI for cloud integration, Fiori UX, and automated GST portal integration. The system provided equipment lifecycle visibility, automated preventive maintenance alerts, and streamlined spare parts distribution.",
        impact: "The initiative improved equipment uptime, reduced mean time to repair (MTTR), and optimized spare parts inventory. Proactive maintenance prevented costly failures, ensuring reliable gas compression operations while modernizing the technology landscape with a standardized, scalable platform."
      },
      {
        id: "cg-cs-2",
        title: "SAP CPI Automation for Multi-Location Dealer Purchase Orders",
        badge: "Case Study 2 • Dealer Network Platform Integration",
        challenge: "Managing multi-location purchase orders and cross-platform workflows across an international dealer network creates reconciliation and data-entry bottlenecks. This global heavy equipment and dealer-facing infrastructure provider needed an automated solution to connect digital systems and eliminate manual re-entry.",
        solution: "We delivered a platform integration using SAP Cloud Platform Integration (SAP CPI) to automate purchase order backfilling into dealer SAP systems. This streamlined data flow between the central enterprise platform, built on SAP Hybris, and regional networks.",
        impact: "The initiative eliminated manual data re-entry and major reconciliation bottlenecks across the global dealer network. Automated order processing accelerated workflows, improved collaboration with independent dealers, and established an agile foundation for continuous fulfilment."
      },
      {
        id: "cg-cs-3",
        title: "Intelligent Workshop Quality Management System (QMS) & AI Defect Triage",
        badge: "Case Study 3 • Workshop Quality Governance",
        challenge: "Maintaining quality benchmarks, tracking non-conformance defects, and managing inspection checklists across heavy component refurbishment lines demand rigorous oversight. This advanced workshop operation needed a digital overhaul to eliminate manual inspection bottlenecks.",
        solution: "We deployed an intelligent Workshop Quality Management System featuring AI-driven defect detection, automated inspection workflows, and real-time quality KPI dashboards. The solution replaced paper logs with digital verification checkpoints throughout the repair process.",
        impact: "As a result, defect leakage rates dropped, rework expenses decreased, and workshop throughput increased by 30%. Management gained real-time visibility into quality trends and technician performance, ensuring engineering precision and adherence to international manufacturing standards."
      }
    ]
  },
  "transportation-services-logistics": {
    slug: "transportation-services-logistics",
    title: "Next-Gen Logistics, Fleet Telemetry & Freight Management",
    subtitle: "Empowering fleet operators and logistics leaders with SAP Transportation Management, Tyre Health analytics, and Pre-Journey Planning.",
    image: "/industries/Transportation and Logistics/transportation-logistics-industry.webp",
    iconName: "Truck",
    overview: "Modern transportation demands real-time visibility over every route, vehicle asset, and payload. Acceleron equips logistics operators with integrated telematics, route optimization, tyre lifecycle management, and driver safety apps.",
    challenges: [
      { title: "High Operating & Fuel Costs", desc: "Inefficient routing, idling, and tire degradation represent over 40% of fleet expenditure." },
      { title: "Driver Safety & Route Compliance", desc: "Fatigue, speeding, and unauthorized route detours increase accident liability." },
      { title: "Customer Delivery SLA Pressure", desc: "Lack of real-time ETA tracking leads to missed delivery windows and penalty clauses." },
      { title: "Tyre Wear & Maintenance Leakage", desc: "Tyre theft, premature wear, and improper pressure lead to costly roadside breakdowns." }
    ],
    solutions: [
      { title: "Acceleron Tyre Health Platform", desc: "RFID & TPMS-based tyre lifecycle tracking, pressure alerts, and retread scheduling." },
      { title: "Pre-Journey Plan (PJP) & Safety App", desc: "Digital risk assessment, vehicle checklist, and GPS route adherence tracking." },
      { title: "SAP TM & Logistics Integration", desc: "Automated freight tendering, carrier settlement, and multi-modal route planning." },
      { title: "Real-Time Control Tower Analytics", desc: "Unified dashboard monitoring fleet position, driver behavior, and fuel metrics." }
    ],
    benefits: [
      "Up to 20% extension in tyre lifespan through proactive maintenance",
      "12% reduction in fleet fuel consumption via route optimization",
      "99% compliance with pre-journey safety checklists",
      "Real-time automated ETA notifications for end customers"
    ],
    whyAcceleron: [
      "Proprietary Tyre Health and PJP logistics platforms running on thousands of assets",
      "Seamless API connectivity with GPS telematics hardware and SAP ERP",
      "24/7 dedicated enterprise support for fleet dispatch operators"
    ],
    caseStudies: [
      {
        id: "trans-cs-1",
        title: "Automated Warehouse Management & Inventory Optimization",
        badge: "Case Study 1 • Distribution Hub Optimization",
        challenge: "Handling heavy industrial components across large distribution hubs often leads to inventory discrepancies, slow picking cycles, and inefficient space utilization. This prominent logistics and warehousing provider needed a modern warehouse management framework to optimize operations.",
        solution: "We implemented a warehouse management and inventory optimization solution integrated with enterprise ERP systems. It introduced barcode-driven putaway, automated stock replenishment, real-time bin tracking, and advanced dispatch scheduling.",
        impact: "Warehouse storage capacity utilization improved by 25%, order picking accuracy reached near-perfect levels, and dispatch turnaround times were halved. The enterprise gained supply chain transparency, enabling higher throughput and greater operational agility."
      },
      {
        id: "trans-cs-2",
        title: "Predictive Equipment Care & Telematics-Based Fleet Maintenance",
        badge: "Case Study 2 • Material Handling Equipment Care",
        challenge: "Preventing material handling equipment breakdowns in high-volume distribution centers is essential for uninterrupted fulfilment. This specialized equipment care provider needed a modern maintenance tracking framework to support its expanding operations.",
        solution: "Our team deployed an integrated equipment care and maintenance platform featuring telematics-based health monitoring, automated service dispatch, and spare parts inventory synchronization.",
        impact: "The initiative reduced material handling equipment downtime by 35%, extended machinery lifespans, and lowered maintenance costs. Operations teams could predict mechanical failures before they occurred, supporting uninterrupted warehouse fulfilment."
      }
    ]
  },
  healthcare: {
    slug: "healthcare",
    title: "Precision Technology & Quality Compliance in Healthcare",
    subtitle: "Enabling medical device innovators, pharmaceuticals, and precision ceramics manufacturers with automated regulatory compliance and end-to-end traceability.",
    image: "/industries/Healthcare/healthcare-industry.webp",
    iconName: "Activity",
    overview: "Healthcare and precision medical technology organizations face stringent global regulations, strict quality controls, and demanding traceability requirements. Acceleron provides validated digital platforms, automated audit trails, and end-to-end quality systems.",
    challenges: [
      { title: "Stringent Regulatory Compliance", desc: "Complex global and national health regulations require error-free digital documentation and validated audit histories." },
      { title: "Critical Material Traceability", desc: "Tracking raw materials to final precision medical components across distributed supply chains is error-prone manually." },
      { title: "Audit Readiness Overhead", desc: "Manual records slow down audit clearances and risk non-conformance penalties." },
      { title: "Quality Non-Conformance Risks", desc: "Microscopic defects in precision liquid dispensing require immediate root-cause CAPA intervention." }
    ],
    solutions: [
      { title: "End-to-End Quality Management (QMS)", desc: "Digital inspection checklists, CAPA remediation workflows, and automated ISO 13485 audit trails." },
      { title: "Precision Material Traceability", desc: "Digital tracking from raw ceramic and alloy sourcing to final certified delivery." },
      { title: "Regulatory Compliance Workflows", desc: "Pre-validated electronic batch records (eBR) and automated statutory compliance reporting." },
      { title: "Connected Equipment Diagnostics", desc: "Real-time telemetry and sensor integration for precision dispensing equipment." }
    ],
    benefits: [
      "100% audit readiness with automated compliance reporting",
      "Zero defect leakage across precision component assembly lines",
      "Accelerated clearance times for regulatory audits",
      "Full digital traceability across entire product lifecycle"
    ],
    whyAcceleron: [
      "Domain expertise in high-precision, regulated manufacturing and healthcare environments",
      "Certified quality governance and digital compliance accelerators",
      "Seamless integration with enterprise ERP and shop-floor testing equipment"
    ],
    caseStudies: [
      {
        id: "hc-cs-1",
        title: "Quality Management & Material Traceability in Precision Dispensing",
        badge: "Case Study 1 • Healthcare Precision & Compliance",
        challenge: "Specializing in superior ceramics and precision liquid dispensing technologies, this organization faced stringent regulatory compliance and material traceability requirements. It needed an automated system to streamline quality assurance and audit readiness.",
        solution: "We implemented an end-to-end quality management and compliance automation platform, enabling digital material traceability from raw metal sourcing to final inspection certification, supported by automated audit trails.",
        impact: "The organization eliminated compliance reporting errors, accelerated customer audit clearances, and strengthened its reputation for superior product quality and reliable delivery."
      }
    ]
  },
  "engineering-construction-operations": {
    slug: "engineering-construction-operations",
    title: "Digital Control for Heavy Construction & EPC Projects",
    subtitle: "Unifying mega-project estimation, sub-contractor management, equipment billing, and site safety into a single source of truth.",
    image: "/industries/Engineering & Construction/engineering-construction-industry.webp",
    iconName: "Building2",
    overview: "Engineering & Construction (EC&O) enterprises manage complex capital projects with razor-thin margins. Acceleron empowers EPC contractors with integrated SAP S/4HANA project controls, sub-contractor platforms, and safety digitization.",
    challenges: [
      { title: "Project Cost Overruns & Delays", desc: "Disconnected field reports prevent project managers from spotting budget variance early." },
      { title: "Sub-Contractor Compliance & Billing", desc: "Untracked labor hours and unverified contractor invoices drain project margins." },
      { title: "Site Equipment Utilization", desc: "Heavy machinery sitting idle on one site while needed urgently on another." },
      { title: "High-Risk Construction Safety", desc: "High worker turnover makes safety protocol enforcement and compliance audits difficult." }
    ],
    solutions: [
      { title: "SAP S/4HANA EC&O Project Controls", desc: "Earned value management, real-time cost forecasting, and variation orders." },
      { title: "CWMS Contractor Workforce Management", desc: "Biometric/RFID site access, skill qualification checks, and attendance verification." },
      { title: "Suraksha Construction Safety App", desc: "Toolbox talk logs, safety observation reports, and incident management." },
      { title: "Equipment Rental & Utilization Tracker", desc: "Live telematics tracking machine operating hours, fuel usage, and cross-site billing." }
    ],
    benefits: [
      "22% reduction in contractor billing leakage and overpayments",
      "Real-time Earned Value Analysis (EVA) across multi-year mega projects",
      "Significant reduction in Lost Time Injuries (LTI) on construction sites",
      "15% increase in heavy equipment cross-site utilization efficiency"
    ],
    whyAcceleron: [
      "Direct heritage in heavy civil engineering and infrastructure delivery",
      "Specialized solutions for EPCs, general contractors, and infrastructure builders",
      "Full mobile capability designed for offline field operations"
    ],
    caseStudies: [
      {
        id: "eco-cs-1",
        title: "Enterprise Digital Core Strategy for Capital Goods & Heavy Engineering",
        badge: "Case Study 1 • Digital Strategy & Project Controls",
        challenge: "Integrating engineering design, shop-floor assembly, aftermarket service, and corporate financial systems into a unified digital strategy is a major challenge for capital goods manufacturers. This premier heavy engineering enterprise required a comprehensive modernization plan.",
        solution: "We delivered an enterprise digital transformation strategy integrating next-generation ERP modules, advanced analytics, and custom workflow automation tailored to heavy capital goods manufacturing.",
        impact: "The enterprise achieved streamlined product development lifecycles, stronger cross-departmental collaboration, and better visibility into global project profitability. This modernization strengthened its position in heavy engineering innovation."
      },
      {
        id: "eco-cs-2",
        title: "Centralized Property & Warehouse Management for Logistics Parks",
        badge: "Case Study 2 • Multi-Tenant Industrial Parks",
        challenge: "Managing multi-tenant industrial parks creates operational inefficiencies in facility management, lease administration, and tenant logistics across sprawling logistics hubs. This strategic warehousing venture sought to streamline these workflows.",
        solution: "We implemented a centralized property and warehouse management suite that automated tenant billing, facility maintenance tickets, security access logging, and logistics tracking.",
        impact: "Facility management overheads fell by 25%, tenant satisfaction improved, and administrative workflows were standardized across regional warehousing parks, establishing a scalable platform for future expansion."
      }
    ]
  },
  utilities: {
    slug: "utilities",
    title: "Resilient Operations for Power, Water & Renewable Utilities",
    subtitle: "Modernizing utility infrastructure with SAP IS-U, asset performance management, outage response, and cybersecurity frameworks.",
    image: "/Utilities_Industry.jpg",
    iconName: "Zap",
    overview: "Utility providers operate critical infrastructure under strict regulatory oversight. Acceleron provides end-to-end IT/OT transformation, grid modernization, field crew dispatch, and zero-trust security solutions.",
    challenges: [
      { title: "Aging Grid Infrastructure", desc: "Legacy assets increase risk of unexpected grid outages and heavy penalty tariffs." },
      { title: "Converging IT / OT Security Threats", desc: "Connecting SCADA networks to cloud applications introduces ransomware vulnerabilities." },
      { title: "Field Workforce Safety & Dispatch", desc: "Coordinating emergency maintenance crews during severe weather events." },
      { title: "Renewables Integration & Metering", desc: "Ingesting high-frequency smart meter data streams for accurate billing." }
    ],
    solutions: [
      { title: "SAP IS-U & Asset Performance Management", desc: "Predictive maintenance for transformers, substations, and distribution lines." },
      { title: "Zero Trust OT/IT Cybersecurity", desc: "Network segmentation, continuous threat monitoring, and ISO 27001 compliance." },
      { title: "Suraksha Emergency Field Mobile", desc: "Rapid crew dispatch, digital permits, and real-time hazard isolation reporting." },
      { title: "Zoho Analytics Data Lake", desc: "High-throughput ingestion for smart meter telemetry and consumption forecasting." }
    ],
    benefits: [
      "30% faster outage response and crew dispatch times",
      "Zero breach incidents with OT network isolation & Zero Trust architecture",
      "Proactive health monitoring for high-value substation assets",
      "Scalable processing of millions of smart meter data points daily"
    ],
    whyAcceleron: [
      "Comprehensive IT & OT cybersecurity certification (ISO 27001 / VAPT)",
      "Deep expertise in utility billing and asset lifecycle management",
      "Proven crisis-tested field safety solutions"
    ],
    caseStudies: []
  }
};
