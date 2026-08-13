export type IndustryDetail = {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  iconName: "Pickaxe" | "Factory" | "Boxes" | "Truck" | "Zap" | "Building2";
  overview: string;
  challenges: { title: string; desc: string }[];
  solutions: { title: string; desc: string }[];
  benefits: string[];
  whyAcceleron: string[];
};

export const INDUSTRIES_DATA: Record<string, IndustryDetail> = {
  mining: {
    slug: "mining",
    title: "Mining Operations Driven by Domain Mastery",
    subtitle: "Grounded in Gainwell Group's 80-year heavy mining lineage, we deliver SAP S/4HANA, asset management, and field safety systems built for extreme pit-to-port environments.",
    image: "/Mining_Industry.jpeg",
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
    ]
  },
  "discrete-manufacturing": {
    slug: "discrete-manufacturing",
    title: "Agile Production & Smart Factory Intelligence",
    subtitle: "Modernizing discrete manufacturing with SAP RISE, shop-floor IoT, QMS quality controls, and supply chain automation.",
    image: "/Distcrete_Manufacturing_Industry.jpg",
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
    ]
  },
  "capital-goods": {
    slug: "capital-goods",
    title: "Lifecycle Excellence for Capital Goods & Industrial Machinery",
    subtitle: "Orchestrating engineer-to-order (ETO) projects, warranty management, and field service operations for heavy machinery OEMs.",
    image: "/Capital_Good_Industry.jpg",
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
    ]
  },
  "transportation-services-logistics": {
    slug: "transportation-services-logistics",
    title: "Next-Gen Logistics, Fleet Telemetry & Freight Management",
    subtitle: "Empowering fleet operators and logistics leaders with SAP Transportation Management, Tyre Health analytics, and Pre-Journey Planning.",
    image: "/Transportation_Industry.jpg",
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
    ]
  },
  "engineering-construction-operations": {
    slug: "engineering-construction-operations",
    title: "Digital Control for Heavy Construction & EPC Projects",
    subtitle: "Unifying mega-project estimation, sub-contractor management, equipment billing, and site safety into a single source of truth.",
    image: "/Engineering_COnstruction_Industry.jpg",
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
    ]
  }
};
