import { useState } from "react";
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
  ChevronDown,
  Award,
  Users,
  Compass,
  FileCheck2,
  Lock,
  Headphones,
  Globe,
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
          "Comprehensive enterprise practices covering SAP transformation, custom software development, Zoho suite implementations, and IT infrastructure services.",
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
  iconImage?: string;
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
    hubUrl: "/service-category/sap",
    icon: Database,
    gradient: "from-blue-600 via-indigo-600 to-purple-600",
    img: "/sap_s4hana-transparentbg.png",
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
        href: "/service-category/sap/sap-ams",
        icon: Headphones,
        iconImage: "/icons/sap/SAP_AMS__1_-removebg-preview.png",
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
        href: "/service-category/sap/sap-s-4hana-implementation",
        icon: Database,
        iconImage: "/icons/sap/SAP_S4HNA-removebg-preview.png",
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
        href: "/service-category/sap/sap-integration",
        icon: Zap,
        iconImage: "/icons/sap/SAP_Integration_to_Cloud-removebg-preview.png",
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
        href: "/service-category/sap/rise-with-s-4hana-implementation",
        icon: Layers,
        iconImage: "/icons/sap/RISE_with_SAP_s4_HANA-removebg-preview.png",
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
        href: "/service-category/sap/sap-migration-to-cloud",
        icon: Server,
        iconImage: "/icons/sap/SAP_Migration_to_Cloud-removebg-preview.png",
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
        href: "/service-category/sap/sap-custom-development",
        icon: Code2,
        iconImage: "/icons/sap/SAP_Custom_Development-removebg-preview.png",
      },
    ],
  },
  {
    id: "software-development",
    anchorId: "software-development",
    title: "Custom Software Development",
    badge: "CUSTOM SOFTWARE, FULL-STACK & APPLIED AI",
    overview:
      "Custom, high-performance software, enterprise applications, and AI-driven solutions designed around unique business needs to streamline workflows and deliver measurable operational impact.",
    hubUrl: "/services/software-development",
    icon: Code2,
    gradient: "from-blue-600 via-indigo-600 to-cyan-600",
    img: "/services/custom-software-development.webp",
    capabilities: [
      {
        title: "Custom AI Application Development",
        subtitle: "Autonomous Agents & Predictive Intelligence",
        badge: "Applied AI",
        desc: "Intelligent automation, machine learning models, natural language processing tools, and predictive analytics embedded directly into enterprise workflows to unlock operational efficiency and smarter decision-making.",
        features: [
          "Intelligent automation & enterprise workflow copilots",
          "Custom machine learning models & NLP pipelines",
          "Predictive analytics embedded into business operations",
        ],
        href: "/services/it-custom-solutions/custom-ai-application-development",
        icon: Sparkles,
      },
      {
        title: "Custom Software Application Development",
        subtitle: "Bespoke Web, Mobile & Microservices",
        badge: "Software Engineering",
        desc: "Full-stack web and mobile applications engineered for high scalability, security, and seamless integration with legacy ERP systems.",
        features: [
          "Full-stack web apps (React, Node.js, Python, Java)",
          "Seamless integration with SAP, Zoho & legacy ERPs",
          "Role-based access governance & field workforce enablement",
        ],
        href: "/services/it-custom-solutions/custom-software-application-development",
        icon: Code2,
      },
      {
        title: "Modernization & API Integration",
        subtitle: "Cloud-Native Microservices & APIs",
        badge: "Microservices & APIs",
        desc: "Transforming legacy software architectures into cloud-native microservices with secure, high-throughput API connections.",
        features: [
          "Monolithic legacy refactoring into modular microservices",
          "High-throughput RESTful, GraphQL & event APIs",
          "Zero-downtime cutover with automated testing",
        ],
        href: "/contact#form",
        icon: Cpu,
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
        iconImage: "/icons/zoho/Zoho_CRM_Icon_-_Acceleron_Solution-removebg-preview.png",
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
        iconImage: "/icons/zoho/Zoho_Books_Icon_-_Acceleron_Solution-removebg-preview.png",
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
        iconImage: "/icons/zoho/Zoho_People_and_Payroll_-_Zoho_HRMS_-_Acceleron_Solutions-removebg-preview.png",
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
        iconImage: "/icons/zoho/Zoho_ERP_Icon_-_Acceleron_Solution-removebg-preview.png",
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
        iconImage: "/icons/zoho/Zoho_Mail_Icon_-_Acceleron_Solution-removebg-preview.png",
      },
    ],
  },
  {
    id: "it-infrastructure",
    anchorId: "it-infrastructure",
    title: "IT Infrastructure Services",
    badge: "HYBRID CLOUD, NETWORKING & ENTERPRISE SECURITY",
    overview:
      "Acceleron delivers secure, scalable IT infrastructure solutions, combining resilient networking, advanced cybersecurity, and proactive systems management to ensure operational continuity, high availability, and seamless digital growth.",
    hubUrl: "/services/it-infrastructure",
    icon: Server,
    gradient: "from-slate-700 via-zinc-800 to-slate-900",
    img: "/ManageEngine/ManageEngine Logo.png",
    capabilities: [
      {
        title: "Network Security Implementation",
        subtitle: "Zero-Trust & Next-Gen Perimeter Defense",
        badge: "Zero-Trust Defense",
        desc: "High-performance software-defined networking (SD-WAN), secure VPN tunnels, zero-trust architecture, and robust perimeter defense ensuring secure plant-to-office connectivity.",
        features: [
          "Software-defined networking (SD-WAN) & hybrid cloud connectivity",
          "Secure site-to-site & plant-to-office encrypted VPN tunnels",
          "Zero-Trust Network Access (ZTNA) & Next-Gen firewalls",
        ],
        href: "/services/it-custom-solutions/network-security-implementation",
        icon: ShieldCheck,
      },
      {
        title: "Enterprise IT & Security Audit & Vulnerability Assessment",
        subtitle: "VAPT & IT System Posture Review",
        badge: "VAPT & Governance",
        desc: "Comprehensive security evaluations, vulnerability scans, penetration testing, and thorough IT system audits to identify posture gaps, mitigate cyber risks, and ensure regulatory compliance.",
        features: [
          "Vulnerability Assessment & Penetration Testing (VAPT)",
          "Enterprise IT system audits & ITGC governance reviews",
          "Compliance & statutory risk mapping (ISO 27001, DPDP)",
        ],
        href: "/services/it-custom-solutions/security-audits",
        icon: Lock,
      },
      {
        title: "ManageEngine",
        subtitle: "Unified IT Operations & Endpoint Governance",
        badge: "ITSM & Operations",
        desc: "Advanced IT service management (ITSM), endpoint control, operations monitoring, and unified IT management powered by ManageEngine integration.",
        features: [
          "Endpoint Central & Mobile Device Management (MDM)",
          "OpManager proactive network switch & server monitoring",
          "ServiceDesk Plus ITIL-aligned service desk automation",
        ],
        href: "/services/manageengine",
        icon: Headphones,
        iconImage: "/ManageEngine/ManageEngine Logo.png",
      },
    ],
  },
];

const LOCATIONS = [
  {
    name: "Acceleron Solutions Pvt. Ltd.",
    badge: "GLOBAL DELIVERY HEADQUARTERS",
    city: "Kolkata Global HQ",
    address: "3rd Floor, STPI IT Park, Sector V, Salt Lake, Kolkata 700091",
    role: "Global Delivery Headquarters & Centers of Excellence",
    features: [
      "24/7 Global Network Operations Center (NOC) & SOC",
      "SAP Competency & Enterprise Innovation Lab",
      "Zoho Suite Unified Demonstration Center",
    ],
    icon: Building2,
    gradient: "from-blue-600 to-indigo-700",
  },
  {
    name: "Acceleron Solutions Pvt. Ltd.",
    badge: "STRATEGIC ADVISORY & CONSULTING",
    city: "Delhi NCR Executive Hub",
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
  {
    name: "Acceleron Global Network",
    badge: "NORTH AMERICA ENGAGEMENTS",
    city: "USA Engagement Hub",
    address: "West Virginia & North American Enterprise Delivery Network",
    role: "North America Client Engagements & Mining Operations",
    features: [
      "Heavy Equipment & Mining ERP Modernization",
      "Cloud Infrastructure Architecture & 24/7 Support",
      "Real-Time Telemetry & Field Mobility Systems",
    ],
    icon: Globe,
    gradient: "from-purple-600 to-indigo-800",
  },
  {
    name: "Acceleron Global Network",
    badge: "INTERNATIONAL FOOTPRINT",
    city: "APAC & Global Delivery Hub",
    address: "Active Engagements across Singapore, Australia (NSW) & Middle East",
    role: "International Client Delivery & Follow-the-Sun SLA Services",
    features: [
      "Follow-the-Sun SLA Governance & Support",
      "Multi-Regional Cloud Compliance & Security",
      "Cross-Border Digital Engineering & Integration",
    ],
    icon: Server,
    gradient: "from-emerald-600 to-teal-800",
  },
];

const FAQS = [
  {
    q: "How does Acceleron manage multi-practice enterprise engagements?",
    a: "Acceleron delivers unified governance through a designated Client Partner and Solution Lead. Whether your engagement combines SAP core ERP with Zoho CRM, custom software & AI development, or IT infrastructure services, all delivery streams adhere to standardized SLA frameworks, shared architectural blueprints, and unified project management.",
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

function CapabilityCardItem({
  cap,
  practiceGradient,
}: {
  cap: CapabilityCard;
  practiceGradient: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group rounded-2xl sm:rounded-3xl border border-border/70 bg-card p-5 sm:p-6 md:p-7 h-full shadow-card hover:shadow-elevated hover:border-brand-red/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-3 mb-4 sm:mb-5">
          {cap.iconImage ? (
            <div className="h-12 w-auto max-w-[140px] sm:h-14 sm:max-w-[160px] rounded-xl sm:rounded-2xl bg-white border border-border/60 px-3 py-1.5 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform shrink-0">
              <img
                src={getAssetUrl(cap.iconImage)}
                alt={cap.title}
                loading="lazy"
                decoding="async"
                className="h-full w-auto max-w-full object-contain"
              />
            </div>
          ) : (
            <div
              className={`h-11 w-11 sm:h-12 sm:w-12 rounded-xl sm:rounded-2xl bg-gradient-to-br ${practiceGradient} text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}
            >
              <cap.icon className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
          )}
          <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-muted-foreground bg-muted/60 px-2.5 sm:px-3 py-1 rounded-full border border-border/50 shrink-0">
            {cap.badge}
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1 group-hover:text-brand-red transition-colors">
          {cap.title}
        </h3>
        <div className="text-xs font-semibold text-brand-red mb-3 sm:mb-4">
          {cap.subtitle}
        </div>

        {/* Clamped description on mobile with toggle */}
        <p
          className={`text-muted-foreground text-xs sm:text-sm leading-relaxed mb-3 sm:mb-5 ${
            isExpanded ? "" : "line-clamp-2 sm:line-clamp-none"
          }`}
        >
          {cap.desc}
        </p>

        {/* Mobile toggle button */}
        <div className="sm:hidden mb-4">
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-red hover:text-red-700 transition-colors py-1 cursor-pointer"
            aria-expanded={isExpanded}
          >
            <span>{isExpanded ? "Show less" : "Read more & key deliverables"}</span>
            <ChevronDown
              className={`h-3.5 w-3.5 transition-transform duration-200 ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* Key Deliverables - collapsed by default on mobile, always visible on sm+ */}
        <div
          className={`${
            isExpanded ? "block" : "hidden sm:block"
          } space-y-2 sm:space-y-2.5 pt-3 sm:pt-4 border-t border-border/50 mb-5 sm:mb-6 animate-in fade-in duration-200`}
        >
          <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-muted-foreground/80 mb-2">
            Key Deliverables
          </div>
          {cap.features.map((feat: string, fIdx: number) => (
            <div
              key={fIdx}
              className="flex items-start gap-2 text-xs text-foreground/85"
            >
              <Check className="h-3.5 w-3.5 text-brand-red shrink-0 mt-0.5" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Prominent Red CTA Button */}
      <div className="pt-3.5 sm:pt-4 border-t border-border/50 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <Link
          to={cap.href as any}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white px-5 py-2.5 text-xs sm:text-sm font-bold shadow-md shadow-red-600/30 hover:shadow-lg hover:shadow-red-600/50 hover:from-red-500 hover:to-rose-500 hover:scale-[1.02] active:scale-[0.98] transition-all w-full sm:w-auto"
        >
          <span>Explore Capability</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
        <span className="text-[10px] sm:text-[11px] font-medium text-muted-foreground/60 text-center sm:text-right">
          Practice Service
        </span>
      </div>
    </div>
  );
}

function ServicesHub() {
  const [showAllPractices, setShowAllPractices] = useState(false);
  const [showAllLocations, setShowAllLocations] = useState(false);
  const [showAllReasons, setShowAllReasons] = useState(false);
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* SECTION 1: HERO BANNER */}
      <PageHero
        badge="ENTERPRISE PRACTICES & CONSULTING"
        title="Our Enterprise Service Offerings"
        subtitle="Comprehensive enterprise practices covering SAP transformation, custom software development, Zoho suite implementations, and IT infrastructure services."
        breadcrumbs={[{ label: "Services" }]}
        image="/Our_Enterprise_Service_Offerings-Acceleron_Solutions.png"
        ctaText="Explore Practice Offerings"
        ctaHref="#practices"
        secondaryCtaText="Consult Practice Leads"
        secondaryCtaHref="/contact"
      />

      {/* QUICK JUMP / PRACTICE ANCHOR BAR (Hidden on mobile) */}
      <div className="hidden md:block sticky top-14 lg:top-16 z-30 border-y border-border/60 bg-background/95 backdrop-blur-md py-2.5 sm:py-3 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl flex items-center justify-between gap-3 sm:gap-4 overflow-x-auto no-scrollbar scroll-smooth">
          <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-muted-foreground shrink-0 hidden md:block">
            Jump to Practice:
          </div>
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {PRACTICES.map((p) => (
              <a
                key={p.id}
                href={`#${p.anchorId}`}
                className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-border/80 bg-muted/40 hover:bg-brand-red/10 hover:border-brand-red/40 hover:text-brand-red px-3 sm:px-3.5 py-1.5 text-xs font-semibold text-foreground transition-all duration-200"
              >
                {p.useZohoLogo ? (
                  <ZohoLogo className="h-3.5 w-3.5" />
                ) : p.img ? (
                  <img
                    src={getAssetUrl(p.img)}
                    alt=""
                    aria-hidden="true"
                    className="h-3.5 w-auto max-w-[20px] object-contain"
                  />
                ) : (
                  <p.icon className="h-3.5 w-3.5 text-brand-red" />
                )}
                <span>{p.title}</span>
              </a>
            ))}
            <a
              href="#delivery-locations"
              className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-border/80 bg-muted/40 hover:bg-brand-red/10 hover:border-brand-red/40 hover:text-brand-red px-3 sm:px-3.5 py-1.5 text-xs font-semibold text-foreground transition-all duration-200"
            >
              <MapPin className="h-3.5 w-3.5 text-brand-red" />
              <span>Locations</span>
            </a>
          </div>
          <Link
            to="/contact"
            hash="form"
            className="hidden lg:inline-flex items-center gap-1.5 text-xs font-bold text-brand-red hover:text-red-700 transition-colors shrink-0"
          >
            <span>Talk to Solution Architects</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>

      {/* SECTION 2: EXECUTIVE PRACTICE DIRECTORY */}
      <section
        id="practices"
        className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-12 sm:py-16 md:py-20 border-b border-border/60"
      >
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red mb-3">
              Enterprise Practice Portfolio
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 sm:mb-4 leading-tight">
              One Technology Partner. <span className="text-gradient">Every Layer of Your Stack.</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              From enterprise SAP ERP consulting to custom software development, modern Zoho deployment, and resilient IT infrastructure services, our practices provide integrated end-to-end execution.
            </p>
          </div>
        </Reveal>

        {/* 4 PRACTICE SUMMARY CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {PRACTICES.map((practice, idx) => (
            <div key={practice.id} className={idx >= 3 && !showAllPractices ? "hidden sm:block h-full" : "block h-full"}>
              <Reveal delay={idx * 0.08} className="h-full">
                <div className="rounded-2xl sm:rounded-3xl border border-border/80 bg-card p-5 sm:p-6 h-full shadow-card hover:border-brand-red/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="mb-4">
                      <span className="inline-block text-[11px] font-semibold px-2.5 py-1 rounded-full bg-brand-red/10 text-brand-red">
                        {practice.capabilities.length} Capabilities
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">{practice.title}</h3>
                    <p className="text-xs text-muted-foreground mb-4 line-clamp-2">
                      {practice.overview}
                    </p>

                    <div className="space-y-1.5 pt-3 border-t border-border/60">
                      {practice.capabilities.map((c) => (
                        <Link
                          key={c.title}
                          to={c.href as any}
                          className="group flex items-center justify-between rounded-lg px-2.5 py-1.5 text-xs font-semibold text-foreground/85 hover:text-brand-red hover:bg-muted/40 transition-all"
                        >
                          <span className="flex items-center gap-2 truncate">
                            {c.iconImage ? (
                              <span className="h-5 w-5 rounded bg-white border border-border/50 p-0.5 flex items-center justify-center shrink-0 shadow-2xs">
                                <img
                                  src={getAssetUrl(c.iconImage)}
                                  alt=""
                                  aria-hidden="true"
                                  className="h-full w-full object-contain"
                                />
                              </span>
                            ) : (
                              <span className="h-1.5 w-1.5 rounded-full bg-brand-red/60 group-hover:bg-brand-red transition-colors shrink-0" />
                            )}
                            <span className="truncate">{c.title}</span>
                          </span>
                          <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60 group-hover:text-brand-red group-hover:translate-x-0.5 transition-all shrink-0" />
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-border/60">
                    <a
                      href={`#${practice.anchorId}`}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white px-4 py-2.5 text-xs sm:text-sm font-bold shadow-md shadow-red-600/25 hover:shadow-lg hover:shadow-red-600/40 hover:from-red-500 hover:to-rose-500 hover:scale-[1.02] active:scale-[0.98] transition-all w-full"
                    >
                      <span>Explore {practice.title}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>

        {PRACTICES.length > 3 && (
          <div className="sm:hidden pt-5 text-center">
            <button
              type="button"
              onClick={() => setShowAllPractices(!showAllPractices)}
              className="inline-flex items-center gap-2 text-xs font-bold text-brand-red hover:text-red-700 py-2.5 px-5 rounded-full border border-brand-red/30 bg-brand-red/5 hover:bg-brand-red/10 shadow-sm transition-all cursor-pointer"
              aria-expanded={showAllPractices}
            >
              <span>{showAllPractices ? "Show fewer practices" : `+ View ${PRACTICES.length - 3} more practice`}</span>
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${showAllPractices ? "rotate-180" : ""}`} />
            </button>
          </div>
        )}
      </section>

      {/* SECTION 3: 4 DEEP-DIVE PRACTICE SECTIONS WITH CAPABILITY CARDS */}
      {PRACTICES.map((practice, pIdx) => (
        <section
          key={practice.id}
          id={practice.anchorId}
          className={`container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 sm:py-24 ${pIdx < PRACTICES.length - 1 ? "border-b border-border/60" : ""
            }`}
        >
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 lg:mb-16 gap-6">
              <div className="max-w-3xl space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red">
                  {practice.badge}
                </div>
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  {practice.title}
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
                  {practice.overview}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
                <Link
                  to={practice.hubUrl as any}
                  className="btn btn-secondary btn-sm flex-1 sm:flex-initial"
                >
                  <span>Practice Hub</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                <Link
                  to="/contact"
                  hash="form"
                  className="btn btn-primary btn-sm flex-1 sm:flex-initial"
                >
                  Consult Specialists
                </Link>
              </div>
            </div>
          </Reveal>

          {/* CAPABILITY CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-7">
            {practice.capabilities.map((cap, cIdx) => (
              <Reveal key={cap.title} delay={cIdx * 0.08} className="h-full">
                <CapabilityCardItem
                  cap={cap}
                  practiceGradient={practice.gradient}
                />
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
              Global Delivery Infrastructure
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Global Delivery Hubs &amp; <span className="text-gradient">Strategic Network</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Serving enterprise clients worldwide with 24/7 follow-the-sun governance from our Global Delivery Headquarters, executive advisory centers, and cross-border international delivery network.
            </p>
          </div>
        </Reveal>

        {/* 4 GLOBAL DELIVERY HUBS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-8">
          {LOCATIONS.map((loc, idx) => (
            <div key={loc.city} className={idx >= 3 && !showAllLocations ? "hidden sm:block h-full" : "block h-full"}>
              <Reveal delay={idx * 0.08} className="h-full">
                <div className="rounded-2xl sm:rounded-3xl border border-border/80 bg-card p-6 h-full shadow-card hover:border-brand-red/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`h-11 w-11 rounded-2xl bg-gradient-to-br ${loc.gradient} text-white flex items-center justify-center shadow-sm`}
                      >
                        <loc.icon className="h-5 w-5" />
                      </div>
                      <span className="text-[9px] font-bold tracking-wider uppercase bg-brand/10 text-brand px-2.5 py-0.5 rounded-full border border-brand/20">
                        {loc.badge}
                      </span>
                    </div>

                    <div className="text-[11px] font-bold text-muted-foreground uppercase tracking-wider mb-1">
                      {loc.name}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2.5">{loc.city}</h3>

                    <div className="flex items-start gap-2.5 text-xs text-foreground/85 bg-muted/40 p-3 rounded-xl border border-border/60 mb-5">
                      <MapPin className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{loc.address}</span>
                    </div>

                    <div className="space-y-2 pt-1">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5">
                        Key Capabilities
                      </div>
                      {loc.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-foreground/80">
                          <Check className="h-3.5 w-3.5 text-brand-red shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-border/60">
                    <Link
                      to="/contact"
                      hash="form"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-foreground hover:text-brand-red transition-colors"
                    >
                      <span>Connect With Hub</span>
                      <ArrowRight className="h-3.5 w-3.5 text-brand-red" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>

        {LOCATIONS.length > 3 && (
          <div className="sm:hidden -mt-4 mb-8 text-center">
            <button
              type="button"
              onClick={() => setShowAllLocations(!showAllLocations)}
              className="inline-flex items-center gap-2 text-xs font-bold text-brand-red hover:text-red-700 py-2.5 px-5 rounded-full border border-brand-red/30 bg-brand-red/5 hover:bg-brand-red/10 shadow-sm transition-all cursor-pointer"
              aria-expanded={showAllLocations}
            >
              <span>{showAllLocations ? "Show fewer hubs" : `+ View ${LOCATIONS.length - 3} more delivery hub`}</span>
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${showAllLocations ? "rotate-180" : ""}`} />
            </button>
          </div>
        )}

        {/* DIRECT COMMUNICATIONS BANNER */}
        <Reveal delay={0.3}>
          <div className="rounded-2xl sm:rounded-3xl border border-brand-red/30 bg-gradient-to-r from-card via-card to-brand-red/5 p-6 sm:p-8 shadow-card flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 text-white flex items-center justify-center shadow-lg shadow-red-600/30 shrink-0">
                <Headphones className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 text-[10px] font-bold tracking-wider uppercase bg-brand-red/10 text-brand-red px-2.5 py-0.5 rounded-full border border-brand-red/20 mb-1">
                  24/7 Global Enterprise Support Desk
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground">Reach Our Global Delivery Specialists</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                  Direct escalation lines backed by defined enterprise SLAs and 24/7 NOC/SOC coverage.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
              <a
                href="mailto:enquiry@acceleronsolutions.io"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-border/80 bg-muted/40 hover:border-brand-red/40 hover:bg-brand-red/5 text-xs sm:text-sm font-bold text-foreground transition-all"
              >
                <Mail className="h-4 w-4 text-brand-red" />
                <span>enquiry@acceleronsolutions.io</span>
              </a>
              <a
                href="tel:+913335346222"
                className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-border/80 bg-muted/40 hover:border-brand-red/40 hover:bg-brand-red/5 text-xs sm:text-sm font-bold text-foreground transition-all"
              >
                <Phone className="h-4 w-4 text-brand-red" />
                <span>033 3534 6222</span>
              </a>
              <Link
                to="/contact"
                hash="form"
                className="btn btn-primary text-xs sm:text-sm px-5 py-2.5 justify-center"
              >
                <span>Consult Global Specialists</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* SECTION 5: ENTERPRISE DIFFERENTIATORS */}
      <section className="bg-muted/30 border-y border-border/60 py-12 sm:py-16 md:py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                Why Enterprises Partner With Acceleron
              </h2>
              <p className="text-muted-foreground text-xs sm:text-sm">
                Combining industrial engineering heritage with agile digital expertise to deliver measurable P&amp;L impact.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
              <div key={d.title} className={dIdx >= 3 && !showAllReasons ? "hidden sm:block h-full" : "block h-full"}>
                <Reveal delay={dIdx * 0.08} className="h-full">
                  <div className="rounded-2xl border border-border/60 bg-card p-5 sm:p-6 shadow-sm hover:border-brand-red/40 transition-colors h-full">
                    <div className="h-10 w-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center mb-4">
                      <d.icon className="h-5 w-5" />
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-foreground mb-1.5">{d.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{d.desc}</p>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>

          <div className="sm:hidden pt-5 text-center">
            <button
              type="button"
              onClick={() => setShowAllReasons(!showAllReasons)}
              className="inline-flex items-center gap-2 text-xs font-bold text-brand-red hover:text-red-700 py-2.5 px-5 rounded-full border border-brand-red/30 bg-brand-red/5 hover:bg-brand-red/10 shadow-sm transition-all cursor-pointer"
              aria-expanded={showAllReasons}
            >
              <span>{showAllReasons ? "Show fewer reasons" : "+ View more differentiators"}</span>
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${showAllReasons ? "rotate-180" : ""}`} />
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 6: FAQS */}
      <section className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10 py-14 sm:py-20 md:py-24">
        <Reveal>
          <div className="text-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red mb-3">
              Frequently Asked Questions
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              Enterprise Practice Inquiries
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="w-full space-y-3 sm:space-y-4">
            {FAQS.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="rounded-2xl border border-border/70 bg-card px-5 sm:px-6 py-1 shadow-sm data-[state=open]:border-brand-red/40 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-brand-red hover:no-underline py-3.5 sm:py-4 text-sm sm:text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-xs sm:text-sm leading-relaxed pb-4 pt-1">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </section>

      {/* BOTTOM CTA BANNER */}
      <section className="border-t border-border/60 bg-gradient-to-br from-card via-card to-brand-red/5 py-14 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl text-center">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Ready to Accelerate Your Enterprise Transformation?
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto mb-6 sm:mb-8">
              Discuss your architectural roadmap, ERP upgrades, or custom software requirements with our practice directors today.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Link
                to="/contact"
                hash="form"
                className="btn btn-primary btn-lg shadow-lg shadow-red-600/30"
              >
                Schedule Consultation
              </Link>
              <a
                href="tel:+913335346222"
                className="btn btn-secondary btn-lg inline-flex items-center justify-center gap-2"
              >
                <Phone className="h-4 w-4 text-brand-red" />
                <span>Call 033 3534 6222</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
