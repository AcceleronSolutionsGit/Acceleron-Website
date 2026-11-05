import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ShieldCheck,
  Layers,
  Database,
  Code2,
  Server,
  Blocks,
  Cpu,
  Zap,
  Activity,
  Briefcase,
  Building2,
  MapPin,
  Mail,
  Phone,
  Clock,
  Sparkles,
  ChevronRight,
  Award,
  Users,
  Compass,
  FileCheck2,
  Lock,
  Headphones,
} from "lucide-react";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { PageHero } from "../../components/ui/PageHero";
import { ZohoLogo } from "../../components/ui/Icons";
import { getAssetUrl } from "../../lib/assets";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      {
        title: "Our Enterprise Service Offerings | Acceleron Solutions",
      },
      {
        name: "description",
        content:
          "Comprehensive enterprise practices covering SAP transformation, custom IT solutions, Zoho suite implementations, and ManageEngine infrastructure management.",
      },
    ],
  }),
  component: ServicesHub,
});

export interface CapabilityCard {
  title: string;
  subtitle: string;
  badge: string;
  desc: string;
  features: string[];
  href: string;
  icon: any;
}

export interface PracticeSection {
  id: string;
  anchorId: string;
  title: string;
  badge: string;
  overview: string;
  hubUrl: string;
  icon: any;
  gradient: string;
  img?: string;
  useZohoLogo?: boolean;
  capabilities: CapabilityCard[];
}

const PRACTICES: PracticeSection[] = [
  {
    id: "sap",
    anchorId: "sap",
    title: "SAP Practice",
    badge: "ENTERPRISE ERP & S/4HANA TRANSFORMATION",
    overview:
      "End-to-end SAP consulting — from S/4HANA transformation and RISE with SAP to managed services and cloud migration.",
    hubUrl: "/services/sap",
    icon: Database,
    gradient: "from-blue-600 via-indigo-600 to-purple-600",
    img: "/SAP_Homepage.jpg",
    capabilities: [
      {
        title: "SAP AMS",
        subtitle: "Application Management Services",
        badge: "24/7 Managed Services",
        desc: "Transition from reactive troubleshooting to SLA-backed continuous SAP system optimization, Basis hygiene, and functional module support.",
        features: [
          "24/7 L1-L4 incident & ticket governance with strict SLAs",
          "Continuous Basis health monitoring & background job tuning",
          "Routine Support Package Stacks (SPS) & legal patch application",
        ],
        href: "/services/sap/sap-ams",
        icon: Headphones,
      },
      {
        title: "SAP S/4HANA Implementation",
        subtitle: "Enterprise Digital Core Transition",
        badge: "Next-Gen ERP",
        desc: "Full-lifecycle Greenfield, Brownfield, or Selective Data Transition to SAP S/4HANA with industry-specific best practice templates.",
        features: [
          "Pre-configured industry templates for manufacturing & EPC",
          "Automated custom code remediation (SPAU/SPDD adjustments)",
          "Accelerated cutover planning with zero operational disruption",
        ],
        href: "/services/sap/sap-s-4hana-implementation",
        icon: Database,
      },
      {
        title: "SAP Integration",
        subtitle: "CPI, PI/PO & BAPI Orchestration",
        badge: "Seamless Connectivity",
        desc: "Secure API orchestration connecting SAP with legacy systems, shop-floor PLCs, bank gateways, and modern cloud applications.",
        features: [
          "SAP Integration Suite (CPI) & PI/PO microservices",
          "Direct RFC, BAPI, and OData REST API connectors",
          "Encrypted payload transmission & tokenized OAuth governance",
        ],
        href: "/services/sap/sap-integration",
        icon: Zap,
      },
      {
        title: "RISE with S/4HANA Implementation",
        subtitle: "Business Transformation as a Service",
        badge: "Cloud Transformation",
        desc: "Holistic modernization combining S/4HANA Cloud, Business Process Intelligence (Signavio), and hyperscaler hosting under one unified SLA.",
        features: [
          "Business Process Intelligence & Signavio workflow optimization",
          "Single-contract cloud infrastructure on AWS, Azure, or GCP",
          "Clean-core extensibility ensuring seamless future updates",
        ],
        href: "/services/sap/rise-with-s-4hana-implementation",
        icon: Layers,
      },
      {
        title: "SAP Migration to Cloud",
        subtitle: "Hyperscaler Migration & Modernization",
        badge: "Zero-Downtime Migration",
        desc: "Structured migration of on-premise ECC and S/4HANA landscapes to leading cloud providers with certified SAP on Cloud architectures.",
        features: [
          "Near-Zero Downtime (NZDT) data replication methodologies",
          "Right-sized hyperscaler sizing for compute, RAM, and HANA storage",
          "Automated multi-region disaster recovery (RPO < 15m, RTO < 2h)",
        ],
        href: "/services/sap/sap-migration-to-cloud",
        icon: Server,
      },
      {
        title: "SAP Custom Development",
        subtitle: "BTP, Clean Core ABAP & Fiori Apps",
        badge: "Clean Core Innovation",
        desc: "Modern extension development on SAP Business Technology Platform (BTP), ABAP RESTful Application Programming (RAP), and custom Fiori apps.",
        features: [
          "Clean-core side-by-side extensions built on SAP BTP",
          "Responsive SAP Fiori & UI5 mobile and web applications",
          "Custom SAC analytics dashboards and Core Data Services (CDS)",
        ],
        href: "/services/sap/sap-custom-development",
        icon: Code2,
      },
    ],
  },
  {
    id: "it-custom-solutions",
    anchorId: "it-custom-solutions",
    title: "IT & Custom Solutions",
    badge: "CUSTOM SOFTWARE, CLOUD & CYBERSECURITY",
    overview:
      "Custom software, AI development, network security, and comprehensive IT infrastructure services.",
    hubUrl: "/services/it-custom-solutions",
    icon: Code2,
    gradient: "from-emerald-600 via-teal-600 to-cyan-600",
    capabilities: [
      {
        title: "IT Infrastructure Services",
        subtitle: "Cloud, Networks & 24/7 SLA Management",
        badge: "Infrastructure",
        desc: "Robust, scalable, and secure IT infrastructure design and management.",
        features: [
          "Cloud infrastructure management across AWS, Azure, and GCP",
          "Enterprise email management (M365, Google Workspace, Zimbra)",
          "Network setup, SD-WAN, managed switches & firewall policies",
        ],
        href: "/services/it-custom-solutions/it-infrastructure-services",
        icon: Server,
      },
      {
        title: "Custom Software Application Development",
        subtitle: "Bespoke Web, Mobile & Microservices",
        badge: "Software Engineering",
        desc: "Tailor-made software solutions designed to solve your unique business challenges.",
        features: [
          "Full-stack web apps (React, Angular, Node.js, Python, Java)",
          "Enterprise mobile applications for field workforce enablement",
          "Legacy software modernization into modular microservices",
        ],
        href: "/services/it-custom-solutions/custom-software-application-development",
        icon: Code2,
      },
      {
        title: "Custom AI Application Development",
        subtitle: "Autonomous Agents & Predictive Intelligence",
        badge: "Applied AI",
        desc: "Intelligent AI-driven applications to automate processes and generate insights.",
        features: [
          "Autonomous multi-agent AI swarms for complex decision execution",
          "Predictive analytics engines for maintenance & demand forecasting",
          "Intelligent document processing (IDP) for invoices & contracts",
        ],
        href: "/services/it-custom-solutions/custom-ai-application-development",
        icon: Cpu,
      },
      {
        title: "Network Security Implementation",
        subtitle: "Zero-Trust & Next-Gen Perimeter Defense",
        badge: "Zero-Trust Defense",
        desc: "Robust cybersecurity architectures to protect your data and network perimeter.",
        features: [
          "Next-Generation Firewalls (Fortinet, Check Point, Sophos, Cisco)",
          "Zero Trust Network Access (ZTNA) & Zscaler micro-segmentation",
          "Endpoint Detection & Response (CrowdStrike, Sophos EDR/XDR)",
        ],
        href: "/services/it-custom-solutions/network-security-implementation",
        icon: Lock,
      },
      {
        title: "Security Audits",
        subtitle: "VAPT & ISO 27001 Posture Review",
        badge: "Vulnerability & VAPT",
        desc: "Comprehensive vulnerability assessments and penetration testing to identify risks.",
        features: [
          "Black-box, grey-box, and white-box penetration testing (VAPT)",
          "ISO 27001 & DPDP compliance readiness gap analysis",
          "Source code security review (SAST/DAST) & phishing simulations",
        ],
        href: "/services/it-custom-solutions/security-audits",
        icon: ShieldCheck,
      },
      {
        title: "IT System Audits",
        subtitle: "ITGC Governance, FinOps & BCP/DR Audits",
        badge: "Compliance & Governance",
        desc: "In-depth evaluations of your IT infrastructure for performance, efficiency, and alignment.",
        features: [
          "IT General Controls (ITGC) access, changes & audit trails",
          "Cloud FinOps reviews eliminating idle compute to reduce spend",
          "Disaster recovery (DR/BCP) simulation validating RTO/RPO targets",
        ],
        href: "/services/it-custom-solutions/it-system-audits",
        icon: FileCheck2,
      },
    ],
  },
  {
    id: "zoho",
    anchorId: "zoho",
    title: "Zoho Practice",
    badge: "PREMIUM ZOHO ENTERPRISE SUITE",
    overview:
      "Premium Zoho partner deploying CRM, ERP, Analytics, and the full Zoho suite.",
    hubUrl: "/services/zoho",
    icon: Blocks,
    gradient: "from-red-600 via-rose-600 to-orange-600",
    useZohoLogo: true,
    capabilities: [
      {
        title: "Zoho CRM",
        subtitle: "Sales Automation & Pipeline Governance",
        badge: "Lead-to-Cash",
        desc: "End-to-end sales lifecycle automation, Zia AI predictive lead scoring, multi-channel communication, and executive pipeline dashboards.",
        features: [
          "Custom pipeline stages, blueprint rules, and deal progression SLAs",
          "Zia AI predictive win-rate scoring and workflow recommendations",
          "Seamless telephony, WhatsApp, and email communication logging",
        ],
        href: "/services/zoho/zoho-crm",
        icon: Users,
      },
      {
        title: "Zoho Books",
        subtitle: "Financial Accounting & GST Compliance",
        badge: "Smart Finance",
        desc: "Automated GST-compliant invoicing, multi-bank reconciliation, expense management, and automated tax filing for enterprises.",
        features: [
          "Direct e-invoicing & e-way bill generation with tax authorities",
          "Automated bank statement feeds and rule-based reconciliation",
          "Multi-currency support and real-time financial reporting (P&L, Balance Sheet)",
        ],
        href: "/services/zoho/zoho-books",
        icon: Award,
      },
      {
        title: "Zoho HRMS (People and Payroll)",
        subtitle: "Hire-to-Retire Employee Lifecycle",
        badge: "Human Capital",
        desc: "Centralized employee database, biometric attendance integration, leave management, performance appraisals, and statutory payroll processing.",
        features: [
          "Biometric and mobile attendance syncing with shift scheduling",
          "Automated statutory payroll calculations (PF, ESI, TDS, PT)",
          "Employee self-service (ESS) portal for leave, claims, and tax slips",
        ],
        href: "/services/zoho/zoho-hrms-people-and-payroll",
        icon: Briefcase,
      },
      {
        title: "Zoho ERP",
        subtitle: "Zoho One Unified Enterprise Suite",
        badge: "Unified Ecosystem",
        desc: "Unified operating system integrating inventory, finance, project management, and custom low-code Zoho Creator applications.",
        features: [
          "Multi-warehouse inventory tracking and purchase automation",
          "Milestone-based project management with billable time tracking",
          "Custom low-code operational tools engineered on Zoho Creator",
        ],
        href: "/services/zoho/zoho-erp",
        icon: Layers,
      },
      {
        title: "Zoho Mail",
        subtitle: "Secure Business Email & Collaboration",
        badge: "Corporate Email",
        desc: "Encrypted, ad-free enterprise email hosting featuring integrated calendar, task management, notes, and strict DLP compliance.",
        features: [
          "Custom business domain email hosting with 99.9% uptime SLA",
          "Comprehensive administrative controls, e-discovery, and backup policies",
          "Built-in calendar, tasks, notes, and file attachments suite",
        ],
        href: "/services/zoho/zoho-mail",
        icon: Mail,
      },
    ],
  },
  {
    id: "manageengine",
    anchorId: "manageengine",
    title: "ManageEngine Practice",
    badge: "UNIFIED IT INFRASTRUCTURE & ENDPOINT GOVERNANCE",
    overview:
      "Comprehensive IT management software for all your business needs.",
    hubUrl: "/services/manageengine",
    icon: Server,
    gradient: "from-slate-600 via-zinc-700 to-slate-800",
    img: "/ManageEngine-logo.png",
    capabilities: [
      {
        title: "ManageEngine-ITSM",
        subtitle: "ServiceDesk Plus Enterprise ITSM",
        badge: "ITIL Service Desk",
        desc: "ITIL-aligned service catalog, incident governance, problem resolution, change workflows, and CMDB asset relationship mapping.",
        features: [
          "ITIL-aligned incident, problem, and change management workflows",
          "Automated SLA escalation matrices and service request catalog",
          "CMDB configuration tracking with asset lifecycle governance",
        ],
        href: "/services/manageengine/manageengine-itsm",
        icon: Headphones,
      },
      {
        title: "ManageEngine-Op Manager",
        subtitle: "Network & Server Infrastructure Monitoring",
        badge: "Network Telemetry",
        desc: "Real-time network performance monitoring, switch/router tracking, server availability metrics, and proactive bandwidth analysis.",
        features: [
          "Live monitoring of routers, switches, firewalls, and virtual servers",
          "Threshold-based multi-channel alerting (SMS, Email, Webhooks)",
          "NetFlow bandwidth analysis and traffic bottleneck identification",
        ],
        href: "/services/manageengine/manageengine-op-manager",
        icon: Activity,
      },
      {
        title: "ManageEngine-Endpoint Control",
        subtitle: "Endpoint Central Unified Management",
        badge: "Endpoint Security",
        desc: "Centralized patch management, automated software deployment, remote troubleshooting, and asset vulnerability remediation.",
        features: [
          "Automated OS and third-party software patch management",
          "Standardized software package deployment across distributed fleets",
          "Remote desktop control with integrated audit logging",
        ],
        href: "/services/manageengine/manageengine-endpoint-control",
        icon: ShieldCheck,
      },
      {
        title: "ManageEngine-MDM Plus",
        subtitle: "Mobile Device & Fleet Management",
        badge: "Enterprise Mobility",
        desc: "Enterprise mobility management for smartphones, tablets, and ruggedized devices, enforcing containerization and corporate security.",
        features: [
          "Zero-touch enrollment for iOS, Android, macOS, and Windows",
          "Corporate containerization ensuring personal/work data isolation",
          "Single and multi-app kiosk mode for shop-floor field tablets",
        ],
        href: "/services/manageengine/manageengine-mdm-plus",
        icon: Server,
      },
    ],
  },
];

const LOCATIONS = [
  {
    name: "Acceleron Solutions Pvt. Ltd.",
    badge: "GLOBAL DELIVERY HEADQUARTERS",
    city: "Kolkata HQ",
    address: "3rd Floor, STPI IT Park, Sector V, Salt Lake, Kolkata 700091",
    role: "Global Delivery Headquarters & Centers of Excellence",
    features: [
      "24/7 Network Operations Center (NOC)",
      "SAP Competency & Innovation Lab",
      "Zoho Suite Solution Demonstration Center",
    ],
    icon: Building2,
    gradient: "from-blue-600 to-indigo-700",
  },
  {
    name: "Acceleron Solutions Pvt. Ltd.",
    badge: "STRATEGIC ADVISORY & CONSULTING",
    city: "Delhi NCR Office",
    address: "801-802 Kailash Building, 26 KG Marg, Janpath, Central Delhi 110001",
    role: "Strategic Client Advisory & Executive Office",
    features: [
      "Enterprise Solution Architect Advisory",
      "PSU & Government Transformation Office",
      "Executive Briefing & Strategy Suite",
    ],
    icon: Compass,
    gradient: "from-teal-600 to-emerald-700",
  },
];

const FAQS = [
  {
    q: "How does Acceleron manage multi-practice enterprise engagements?",
    a: "Acceleron delivers unified governance through a designated Client Partner and Solution Lead. Whether your engagement combines SAP core ERP with Zoho CRM, custom AI microservices, and ManageEngine infrastructure monitoring, all delivery streams adhere to standardized SLA frameworks, shared architectural blueprints, and unified project management.",
  },
  {
    q: "What SLA commitments are backed by Acceleron's Managed Services?",
    a: "Our Managed Services (AMS and IT Infrastructure) feature tiered SLAs with guaranteed response times under 15 minutes for critical P1 incidents. We commit to 99.9%+ system availability, proactive system hygiene checks, and root-cause remediation rather than temporary ticket closures.",
  },
  {
    q: "Can Acceleron help transition existing legacy systems to SAP or Cloud?",
    a: "Yes. Our team specializes in complex data transitions, cloud migrations, and ERP modernizations. Utilizing Near-Zero Downtime (NZDT) data replication, pre-built migration accelerators, and phased cutover roadmaps, we migrate mission-critical systems with minimal impact on daily manufacturing and business operations.",
  },
  {
    q: "How can we engage Acceleron for a preliminary assessment or POC?",
    a: "Engaging us begins with an initial technical discovery session with our practice leaders. We assess your existing landscape, define concrete ROI objectives, and can deliver a time-boxed Proof of Concept (POC) or readiness audit (such as S/4HANA Readiness or VAPT Security Audit) before full-scale deployment.",
  },
];

function ServicesHub() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* SECTION 1: HERO BANNER */}
      <PageHero
        badge="ENTERPRISE PRACTICES & CONSULTING"
        title="Our Enterprise Service Offerings"
        subtitle="Comprehensive enterprise practices covering SAP transformation, custom IT solutions, Zoho suite implementations, and ManageEngine infrastructure management."
        breadcrumbs={[{ label: "Services" }]}
        image="/capital_goods.jpg"
        ctaText="Explore Practice Offerings"
        ctaHref="#practices"
        secondaryCtaText="Consult Practice Leads"
        secondaryCtaHref="/contact"
        icon={
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/20 shadow-xl">
            <Briefcase className="h-8 w-8 text-brand drop-shadow-lg" />
            <div className="border-l border-white/30 pl-3">
              <div className="text-[10px] font-bold uppercase tracking-wider text-brand-red">
                Acceleron Practices
              </div>
              <div className="text-xs font-bold text-white tracking-wide">
                4 Core Practices • 21 Capabilities
              </div>
            </div>
          </div>
        }
      />

      {/* QUICK JUMP / PRACTICE ANCHOR BAR */}
      <div className="sticky top-20 z-30 border-y border-border/60 bg-background/90 backdrop-blur-md py-3 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground shrink-0 hidden md:block">
            Jump to Practice:
          </div>
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {PRACTICES.map((p) => (
              <a
                key={p.id}
                href={`#${p.anchorId}`}
                className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-muted/40 hover:bg-brand/10 hover:border-brand/40 px-3.5 py-1.5 text-xs font-semibold text-foreground transition-all duration-200"
              >
                <p.icon className="h-3.5 w-3.5 text-brand" />
                <span>{p.title}</span>
              </a>
            ))}
            <a
              href="#delivery-locations"
              className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-muted/40 hover:bg-brand/10 hover:border-brand/40 px-3.5 py-1.5 text-xs font-semibold text-foreground transition-all duration-200"
            >
              <MapPin className="h-3.5 w-3.5 text-brand" />
              <span>Contact & Locations</span>
            </a>
          </div>
          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:text-brand-red transition-colors shrink-0"
          >
            <span>Talk to Solution Architects</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      {/* SECTION 2: EXECUTIVE PRACTICE DIRECTORY */}
      <section
        id="practices"
        className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 sm:py-20 border-b border-border/60"
      >
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red mb-3">
              Enterprise Practice Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              One Technology Partner. <span className="text-gradient">Every Layer of Your Stack.</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              From enterprise SAP ERP consulting to custom AI development, modern Zoho deployment, and ManageEngine infrastructure monitoring, our practices provide integrated end-to-end execution.
            </p>
          </div>
        </Reveal>

        {/* 4 PRACTICE SUMMARY CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {PRACTICES.map((practice, idx) => (
            <Reveal key={practice.id} delay={idx * 0.08} className="h-full">
              <div className="rounded-3xl border border-border/80 bg-card p-6 h-full shadow-card hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-brand/10 text-brand">
                      {practice.capabilities.length} Capabilities
                    </span>
                    <div className="h-9 w-9 rounded-xl bg-muted/60 flex items-center justify-center text-foreground">
                      {practice.useZohoLogo ? (
                        <ZohoLogo className="h-4 w-4" />
                      ) : (
                        <practice.icon className="h-4 w-4" />
                      )}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-1">{practice.title}</h3>
                  <p className="text-xs text-muted-foreground mb-4 line-clamp-2">
                    {practice.overview}
                  </p>

                  <div className="space-y-1 pt-3 border-t border-border/60">
                    {practice.capabilities.map((c) => (
                      <Link
                        key={c.title}
                        to={c.href as any}
                        className="group flex items-center justify-between rounded-lg px-2.5 py-2 text-xs font-semibold text-foreground/85 hover:text-brand hover:bg-muted/40 transition-all"
                      >
                        <span className="flex items-center gap-2 truncate">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand/60 group-hover:bg-brand transition-colors shrink-0" />
                          <span className="truncate">{c.title}</span>
                        </span>
                        <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60 group-hover:text-brand group-hover:translate-x-0.5 transition-all shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-border/60">
                  <a
                    href={`#${practice.anchorId}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:text-brand-red transition-colors w-full justify-between"
                  >
                    <span>Explore {practice.title}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION 3: 4 DEEP-DIVE PRACTICE SECTIONS WITH CAPABILITY CARDS */}
      {PRACTICES.map((practice, pIdx) => (
        <section
          key={practice.id}
          id={practice.anchorId}
          className={`container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 sm:py-24 ${
            pIdx < PRACTICES.length - 1 ? "border-b border-border/60" : ""
          }`}
        >
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
              <div className="max-w-3xl space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand">
                  {practice.badge}
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  {practice.title}
                </h2>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                  {practice.overview}
                </p>
              </div>

              <div className="shrink-0 flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3">
                <Link
                  to={practice.hubUrl as any}
                  className="rounded-xl border border-brand/40 bg-brand/5 hover:bg-brand/10 text-brand px-4 py-2 text-xs font-bold transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Practice Hub</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  to="/contact"
                  className="rounded-xl bg-brand-gradient px-4 py-2 text-xs font-bold text-white shadow-glow hover:scale-[1.02] transition-transform"
                >
                  Consult Specialists
                </Link>
              </div>
            </div>
          </Reveal>

          {/* CAPABILITY CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {practice.capabilities.map((cap, cIdx) => (
              <Reveal key={cap.title} delay={cIdx * 0.08} className="h-full">
                <div className="group rounded-3xl border border-border/70 bg-card p-7 sm:p-8 h-full shadow-card hover:shadow-elevated hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${practice.gradient} text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}
                      >
                        <cap.icon className="h-6 w-6" />
                      </div>
                      <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground bg-muted/60 px-3 py-1 rounded-full border border-border/50">
                        {cap.badge}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1 group-hover:text-brand transition-colors">
                      {cap.title}
                    </h3>
                    <div className="text-xs font-semibold text-brand mb-4">
                      {cap.subtitle}
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {cap.desc}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-border/50 mb-6">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground/80 mb-2">
                        Key Deliverables
                      </div>
                      {cap.features.map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-start gap-2.5 text-xs text-foreground/85"
                        >
                          <Check className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                    <Link
                      to={cap.href as any}
                      className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-brand-red transition-colors group/link"
                    >
                      <span>Explore Capability</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                    <span className="text-[11px] font-semibold text-muted-foreground/60">
                      Practice Service
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      ))}

      {/* SECTION 4: CONTACT & DELIVERY LOCATIONS */}
      <section
        id="delivery-locations"
        className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 sm:py-24 border-t border-border/60"
      >
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand mb-3">
              National Presence &amp; Delivery Centers
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Contact &amp; <span className="text-gradient">Delivery Locations</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Acceleron Solutions Pvt. Ltd. operates strategic delivery centers and Centers of Excellence to support enterprise clients across India and globally.
            </p>
          </div>
        </Reveal>

        {/* 2 MAIN OFFICE CARDS + DIRECT COMMUNICATIONS */}
        <div className="grid lg:grid-cols-3 gap-8">
          {LOCATIONS.map((loc, idx) => (
            <Reveal key={loc.city} delay={idx * 0.1} className="h-full">
              <div className="rounded-3xl border border-border/80 bg-card p-8 h-full shadow-card hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${loc.gradient} text-white flex items-center justify-center shadow-sm`}
                    >
                      <loc.icon className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] font-bold tracking-wider uppercase bg-brand/10 text-brand px-3 py-1 rounded-full border border-brand/20">
                      {loc.badge}
                    </span>
                  </div>

                  <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">
                    {loc.name}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">{loc.city}</h3>

                  <div className="flex items-start gap-3 text-sm text-foreground/85 bg-muted/40 p-4 rounded-2xl border border-border/60 mb-6">
                    <MapPin className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{loc.address}</span>
                  </div>

                  <div className="space-y-2.5 pt-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                      Key Office Capabilities
                    </div>
                    {loc.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-xs text-foreground/80">
                        <Check className="h-3.5 w-3.5 text-brand shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-border/60">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-brand hover:text-brand-red transition-colors"
                  >
                    <span>Schedule Visit or Meeting</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}

          {/* DIRECT COMMUNICATIONS CARD */}
          <Reveal delay={0.2} className="h-full">
            <div className="rounded-3xl border border-brand/30 bg-gradient-to-br from-card via-card to-brand/5 p-8 h-full shadow-card hover:border-brand/50 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="h-12 w-12 rounded-2xl bg-brand-gradient text-white flex items-center justify-center shadow-glow">
                    <Headphones className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] font-bold tracking-wider uppercase bg-brand-red/10 text-brand-red px-3 py-1 rounded-full border border-brand-red/20">
                    24/7 Enterprise Desk
                  </span>
                </div>

                <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">
                  Connect Directly
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">Reach Our Specialists</h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  Have an urgent requirement or want to discuss enterprise architecture? Our practice specialists respond within 2 business hours.
                </p>

                <div className="space-y-4 mb-6">
                  <a
                    href="mailto:enquiry@acceleronsolutions.io"
                    className="flex items-center gap-3 p-3.5 rounded-2xl border border-border/70 bg-muted/30 hover:border-brand/40 hover:bg-brand/5 transition-all text-sm group"
                  >
                    <div className="h-9 w-9 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-[11px] font-medium text-muted-foreground">General Enquiries</div>
                      <div className="font-semibold text-foreground group-hover:text-brand transition-colors truncate">
                        enquiry@acceleronsolutions.io
                      </div>
                    </div>
                  </a>

                  <a
                    href="tel:03335346222"
                    className="flex items-center gap-3 p-3.5 rounded-2xl border border-border/70 bg-muted/30 hover:border-brand/40 hover:bg-brand/5 transition-all text-sm group"
                  >
                    <div className="h-9 w-9 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-medium text-muted-foreground">Phone Support Desk</div>
                      <div className="font-semibold text-foreground group-hover:text-brand transition-colors">
                        033 3534 6222
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-border/60">
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-gradient py-3.5 text-xs font-bold text-white shadow-glow hover:opacity-95 transition-opacity"
                >
                  <span>Request Practice Consultation</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 5: ENTERPRISE DIFFERENTIATORS */}
      <section className="bg-muted/30 border-y border-border/60 py-16 sm:py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                Why Enterprises Partner With Acceleron
              </h2>
              <p className="text-muted-foreground text-sm">
                Combining industrial engineering heritage with agile digital expertise to deliver measurable P&amp;L impact.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "80+ Years Industrial Pedigree",
                desc: "Rooted in Gainwell Group's heavy industry legacy, understanding plant operations from the ground up.",
                icon: Building2,
              },
              {
                title: "Guaranteed SLA Governance",
                desc: "Strict enterprise response commitments with real-time ITSM monitoring and dedicated account partners.",
                icon: Clock,
              },
              {
                title: "Certified Multi-Cloud Teams",
                desc: "Certified professionals across SAP S/4HANA, BTP, AWS, Azure, Zoho, and ManageEngine.",
                icon: Award,
              },
              {
                title: "Accelerated Value Realization",
                desc: "Pre-built integration accelerators, industry templates, and modular delivery models for rapid time-to-value.",
                icon: Zap,
              },
            ].map((d, dIdx) => (
              <Reveal key={d.title} delay={dIdx * 0.08}>
                <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm hover:border-brand/40 transition-colors h-full">
                  <div className="h-10 w-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4">
                    <d.icon className="h-5 w-5" />
                  </div>
                  <h4 className="text-base font-bold text-foreground mb-2">{d.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{d.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: FAQS */}
      <section className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10 py-16 sm:py-24">
        <Reveal>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand mb-3">
              Frequently Asked Questions
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Enterprise Practice Inquiries
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {FAQS.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="rounded-2xl border border-border/70 bg-card px-6 py-1 shadow-sm data-[state=open]:border-brand/40 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-brand hover:no-underline py-4 text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4 pt-1">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </section>

      {/* BOTTOM CTA BANNER */}
      <section className="border-t border-border/60 bg-gradient-to-br from-card via-card to-brand/5 py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ready to Accelerate Your Enterprise Transformation?
            </h2>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto mb-8">
              Discuss your architectural roadmap, ERP upgrades, or custom software requirements with our practice directors today.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="rounded-2xl bg-brand-gradient px-8 py-4 text-sm font-bold text-white shadow-glow hover:opacity-95 transition-opacity"
              >
                Schedule Consultation
              </Link>
              <a
                href="tel:03335346222"
                className="rounded-2xl border border-border bg-card px-8 py-4 text-sm font-bold text-foreground hover:bg-muted/50 transition-colors inline-flex items-center gap-2"
              >
                <Phone className="h-4 w-4 text-brand" />
                <span>Call 033 3534 6222</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
