import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ShieldCheck,
  Wrench,
  Layers,
  Truck,
  Activity,
  Boxes,
  Users,
  Clock,
  HeartHandshake,
  Target,
  ShoppingBag,
  Gift,
  FileBadge,
  Compass,
  FileCheck2,
  Landmark,
  Brain,
  FolderLock,
  Factory,
  Zap,
  Workflow,
  Mail,
  Phone,
  Building2,
  Sparkles,
  ChevronRight,
  SlidersHorizontal,
} from "lucide-react";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { PageHero } from "../../components/ui/PageHero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      {
        title:
          "Enterprise Products & Proprietary IP Portfolio | Acceleron Solutions",
      },
      {
        name: "description",
        content:
          "Explore Acceleron's 20 purpose-built digital enterprise platforms across Industrial Solutions, People Solutions, CX Solutions, and Office Digitization.",
      },
    ],
  }),
  component: ProductsHub,
});

export interface ProductItem {
  id: string;
  name: string;
  subtitle: string;
  badge: string;
  overview: string;
  features: string[];
  href: string;
  icon: any;
  gradient: string;
}

export interface ProductCategory {
  id: string;
  anchorId: string;
  landingHref: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  icon: any;
  gradient: string;
  products: ProductItem[];
}

const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: "industrial-solutions",
    anchorId: "industrial-solutions",
    landingHref: "/products/industrial-solutions",
    title: "Industrial Solutions",
    subtitle: "Plant Maintenance, In-Plant Flow & Quality Governance",
    badge: "INDUSTRIAL SOLUTIONS",
    description:
      "Purpose-engineered applications designed to uphold international manufacturing standards, streamline maintenance operations, synchronize in-plant material flow, and ensure fleet safety.",
    icon: Factory,
    gradient: "from-blue-600 via-indigo-600 to-purple-600",
    products: [
      {
        id: "qms",
        name: "QMS - Quality Management System",
        subtitle: "Enterprise Quality Governance & ISO Compliance",
        badge: "Quality Governance",
        overview:
          "Standardized operating procedures, automated audit tracking, incoming supplier QA scorecards, and closed-loop CAPA workflows.",
        features: [
          "Standard Operating Procedures (SOPs) digital repository",
          "Automated audit scheduling & CAPA remediation workflows",
          "Supplier incoming QA inspection protocols & ISO readiness",
        ],
        href: "/products/qms",
        icon: Layers,
        gradient: "from-fuchsia-600 to-purple-700",
      },
      {
        id: "woms",
        name: "Work Order Management System (WOMS)",
        subtitle: "Field Technician Dispatch & Maintenance Tracking",
        badge: "Work Order System",
        overview:
          "Automated maintenance ticketing, intelligent technician skill matching, real-time spare parts ERP integration, and SLA adherence tracking.",
        features: [
          "Automated service ticketing via web, mobile & IoT triggers",
          "Skill, proximity & certification-based technician dispatch",
          "Real-time spare parts ERP inventory allocation & MTTR tracking",
        ],
        href: "/products/woms",
        icon: Wrench,
        gradient: "from-blue-600 to-indigo-700",
      },
      {
        id: "inplant-logistics",
        name: "Inplant Logistics",
        subtitle: "Shop-Floor Material & Fleet Flow Optimization",
        badge: "Internal Logistics",
        overview:
          "Internal material handling optimization, warehouse bin tracking, line-side JIT/JIS replenishment, and forklift/AGV fleet tracking.",
        features: [
          "Intelligent route planning & congestion reduction for AGVs",
          "Line-side replenishment (JIT / JIS) to prevent line starvation",
          "Direct integration with SAP ERP and plant MES systems",
        ],
        href: "/products/inplant-logistics",
        icon: Truck,
        gradient: "from-emerald-600 to-teal-700",
      },
      {
        id: "tyre-health",
        name: "Tyre Health Management",
        subtitle: "Fleet Telematics & Lifecycle Cost Optimization",
        badge: "Fleet Telematics",
        overview:
          "Continuous wireless TPMS telematics, tread depth wear analytics, thermal alerts, and lifecycle Cost-Per-Hour (CPH) tracking.",
        features: [
          "Real-time wireless pressure & temperature TPMS sensors",
          "Digital tread wear profiling & alignment anomaly detection",
          "Comprehensive Cost-Per-Hour (CPH) lifecycle tracking",
        ],
        href: "/products/tyre-health",
        icon: Activity,
        gradient: "from-cyan-600 to-blue-700",
      },
      {
        id: "cwms",
        name: "Contractor Workforce Management System (CWMS)",
        subtitle: "Statutory Labor Compliance & Gate Interlock",
        badge: "Contractor Workforce",
        overview:
          "Centralized contractor lifecycle management, statutory labor law compliance, biometric gate access control, and wage billing validation.",
        features: [
          "Digital contractor onboarding & statutory PF/ESI checks",
          "Biometric & RFID turnstiles linked to valid safety permits",
          "Reconciliation of vendor invoices against muster records",
        ],
        href: "/products/cwms",
        icon: Boxes,
        gradient: "from-teal-600 to-cyan-700",
      },
    ],
  },
  {
    id: "people-solutions",
    anchorId: "people-solutions",
    landingHref: "/products/people-solutions",
    title: "People Solutions",
    subtitle: "Labour Scheduling, Safety Governance & Performance Appraisal",
    badge: "PEOPLE SOLUTIONS",
    description:
      "Digital workforce platforms designed to maximize frontline productivity, instill a proactive zero-harm safety culture, automate attendance, and align employee growth.",
    icon: Users,
    gradient: "from-teal-600 via-emerald-600 to-cyan-600",
    products: [
      {
        id: "workforce-management",
        name: "Workforce Management",
        subtitle: "Labour Deployment & Rotational Rostering",
        badge: "Shift & Rostering",
        overview:
          "Automated rotational shift scheduling, task and activity allocation, labour utilization analytics, and frontline mobile access.",
        features: [
          "Smart shift scheduling factoring in statutory rest intervals",
          "Skill-matrix daily task assignment linked to active work orders",
          "Seamless ERP, biometric attendance, and payroll synchronization",
        ],
        href: "/products/workforce-management",
        icon: Users,
        gradient: "from-blue-600 to-indigo-700",
      },
      {
        id: "suraksha",
        name: "Suraksha",
        subtitle: "Industrial Safety Governance & Incident Management",
        badge: "Industrial Safety",
        overview:
          "Proactive digital industrial safety platform for incident reporting, Permit-to-Work (PTW) governance, safety audits, and ISO 45001 compliance.",
        features: [
          "Rapid digital logging of near-misses & incidents with photos",
          "Digital Permit-to-Work (PTW) for hot work, height & confined spaces",
          "Toolbox meeting logs & closed-loop CAPA action tracking",
        ],
        href: "/products/suraksha",
        icon: ShieldCheck,
        gradient: "from-teal-500 to-emerald-600",
      },
      {
        id: "attendance-management",
        name: "Attendance Management System",
        subtitle: "Multi-Modal Automated Time & Presence Tracking",
        badge: "Time & Presence",
        overview:
          "Multi-modal biometric capture, complex shift rules engine, leave synchronization, and pre-audited payroll export.",
        features: [
          "Biometric, facial recognition & geofenced mobile clock-in",
          "Multi-shift rotation rules with automated overtime calculations",
          "Zero proxy attendance with real-time supervisor alerts",
        ],
        href: "/products/attendance-management",
        icon: Clock,
        gradient: "from-cyan-600 to-teal-700",
      },
      {
        id: "yogdaan",
        name: "Yogdaan - Employee Engagement & Feedback",
        subtitle: "Continuous Dialogue & Kaizen Recognition",
        badge: "Employee Engagement",
        overview:
          "Interactive pulse surveys, digital suggestion & Kaizen innovation boxes, peer recognition frameworks, and transparent action tracking.",
        features: [
          "Continuous sentiment pulse surveys & wellness tracking",
          "Shop-floor Kaizen innovation pipelines with SLA tracking",
          "Digital peer-to-peer appreciation & milestone awards",
        ],
        href: "/products/yogdaan",
        icon: HeartHandshake,
        gradient: "from-pink-600 to-rose-700",
      },
      {
        id: "appraisal-management",
        name: "Employee Appraisal Management System",
        subtitle: "Performance Governance & Merit-Based Growth",
        badge: "Performance Appraisal",
        overview:
          "Cascaded corporate goal setting, continuous feedback journals, 360-degree multi-rater evaluations, and merit-based career calibration.",
        features: [
          "Cascading enterprise OKR and departmental KPI mapping",
          "Continuous milestone check-ins & performance coaching notes",
          "360-degree evaluations with fair calibration curves",
        ],
        href: "/products/appraisal-management",
        icon: Target,
        gradient: "from-purple-600 to-violet-800",
      },
    ],
  },
  {
    id: "cx-solutions",
    anchorId: "cx-solutions",
    landingHref: "/products/cx-solutions",
    title: "CX Solutions",
    subtitle: "Field Service, Order-to-Cash, Loyalty & Sales CRM",
    badge: "CX SOLUTIONS",
    description:
      "End-to-end customer experience frameworks designed to optimize field technicians, accelerate commercial billing, reward brand advocacy, and close enterprise B2B deals.",
    icon: ShoppingBag,
    gradient: "from-amber-600 via-orange-600 to-red-600",
    products: [
      {
        id: "ifms",
        name: "iFMS - Intelligent Field Management System",
        subtitle: "Mobile Workforce Dispatch & Equipment Servicing",
        badge: "Field Force Management",
        overview:
          "Field workforce dispatch, technician mobile execution, equipment maintenance histories, and strict SLA compliance monitoring.",
        features: [
          "Reduces call assignment time from 60 mins to under 2 mins",
          "Digital job cards, parts requests & customer e-signatures",
          "Real-time technician GPS tracking & SLA breach alerts",
        ],
        href: "/products/ifms",
        icon: Truck,
        gradient: "from-amber-600 to-orange-700",
      },
      {
        id: "vanijya",
        name: "Vanijya",
        subtitle: "Commercial Billing & Retail Customer Ecosystem",
        badge: "Commercial Billing",
        overview:
          "Commercial transaction and billing platform streamlining order-to-cash, digital invoicing, e-commerce parts sales, and retail engagement.",
        features: [
          "Automated invoicing & statutory e-invoicing compliance",
          "Digital self-service genuine parts e-commerce catalog",
          "Integrated banking payment gateways & receipt archives",
        ],
        href: "/products/vanijya",
        icon: ShoppingBag,
        gradient: "from-indigo-600 to-blue-800",
      },
      {
        id: "samriddhi",
        name: "Samriddhi - Customer Loyalty Management",
        subtitle: "Retention, Brand Advocacy & Reward Wallets",
        badge: "Customer Loyalty",
        overview:
          "Dedicated digital customer loyalty platform featuring tiered rewards, automated points accumulation, and personalized promotions.",
        features: [
          "Tiered reward structures (Silver, Gold, Platinum VIP perks)",
          "Automated points accumulation on parts and service orders",
          "Frictionless loyalty wallet & instant voucher checkout",
        ],
        href: "/products/samriddhi",
        icon: Gift,
        gradient: "from-amber-500 to-orange-600",
      },
      {
        id: "warranty-management",
        name: "Customer Warranty Management",
        subtitle: "Streamlining Claims, Validation & OEM Protection",
        badge: "Warranty Management",
        overview:
          "Point-of-sale digital warranty registration, automated claim triage, eligibility validation, and structured OEM cost recovery.",
        features: [
          "Digital POS equipment & sub-assembly registration",
          "Automated claim logging with diagnostic logs & photo proof",
          "Structured OEM cost recovery tracking & settlement dossiers",
        ],
        href: "/products/warranty-management",
        icon: FileBadge,
        gradient: "from-teal-600 to-cyan-700",
      },
      {
        id: "salesorbit",
        name: "SalesOrbit",
        subtitle: "Intelligent Sales Pipeline & CRM Platform",
        badge: "Enterprise CRM",
        overview:
          "Advanced sales automation and CRM platform for industrial solutions, tender bidding, opportunity stages, and revenue forecasting.",
        features: [
          "Centralized opportunity management with stage milestones",
          "Predictive sales forecasting & win/loss ratio analytics",
          "Mobile sales CRM for territory field representatives",
        ],
        href: "/products/salesorbit",
        icon: Compass,
        gradient: "from-rose-600 to-pink-700",
      },
    ],
  },
  {
    id: "office-digitization",
    anchorId: "office-digitization",
    landingHref: "/products/office-digitization",
    title: "Office Digitization",
    subtitle: "Enterprise Approvals, Treasury, AI & Supplier Portals",
    badge: "OFFICE DIGITIZATION",
    description:
      "Modern digital office platforms designed to automate administrative approvals, govern multi-bank treasury, apply cognitive AI, and synchronize vendor supply chains.",
    icon: Building2,
    gradient: "from-purple-600 via-violet-600 to-indigo-600",
    products: [
      {
        id: "approval-management",
        name: "Approval Management System",
        subtitle: "Enterprise Workflows & Delegation Sign-offs",
        badge: "Workflow Approvals",
        overview:
          "Dynamic approval hierarchies, mobile and web sign-offs, bottleneck SLA tracking, and audit-ready governance.",
        features: [
          "Dynamic multi-tier workflow designer based on capex limits",
          "One-click mobile & web executive approvals with comments",
          "Automated SLA tracking, reminders & escalation countdowns",
        ],
        href: "/products/approval-management",
        icon: FileCheck2,
        gradient: "from-blue-600 to-indigo-700",
      },
      {
        id: "treasury-management",
        name: "Treasury Management System",
        subtitle: "Liquidity & Multi-Bank Cash Flow Governance",
        badge: "Treasury & Cash Flow",
        overview:
          "Multi-bank cash visibility, automated statement reconciliation, predictive cash flow forecasting, and risk exposure governance.",
        features: [
          "Real-time aggregation across multi-bank cash positions",
          "Automated statement matching eliminating spreadsheets",
          "Predictive 30/60/90-day liquidity and cash flow models",
        ],
        href: "/products/treasury-management",
        icon: Landmark,
        gradient: "from-emerald-600 to-teal-700",
      },
      {
        id: "acceledge-ai",
        name: "AccelEdge.ai",
        subtitle: "Intelligent Automation & Cognitive Framework",
        badge: "Cognitive AI",
        overview:
          "Combines computer vision IDP, predictive operational analytics, conversational enterprise assistants, and process mining.",
        features: [
          "Intelligent document processing (IDP) for invoices & contracts",
          "Predictive machine learning models for equipment telemetry",
          "Cognitive enterprise assistants grounded on company SOPs",
        ],
        href: "/products/acceledge-ai",
        icon: Brain,
        gradient: "from-purple-600 to-fuchsia-700",
      },
      {
        id: "edms",
        name: "E-Document Management System",
        subtitle: "Secure Digital Archiving & OCR Retrieval",
        badge: "Document Archiving",
        overview:
          "Centralized cloud document repository, full-text OCR indexing, version control, and regulatory compliance archiving.",
        features: [
          "Secure encrypted vault for engineering drawings & contracts",
          "Instant full-text OCR search across millions of pages",
          "Strict check-in/check-out version control & audit trails",
        ],
        href: "/products/edms",
        icon: FolderLock,
        gradient: "from-cyan-600 to-blue-700",
      },
      {
        id: "supplier-portal",
        name: "Supplier Portal",
        subtitle: "Collaborative Vendor Management & Order Tracking",
        badge: "Vendor Collaboration",
        overview:
          "Centralized B2B vendor collaboration for digital purchase orders, self-service e-invoicing, delivery tracking, and performance scorecards.",
        features: [
          "Digital PO acknowledgment, revision tracking & ASNs",
          "Self-service e-invoicing with automated 3-way matching",
          "Objective supplier delivery and quality performance ratings",
        ],
        href: "/products/supplier-portal",
        icon: Boxes,
        gradient: "from-amber-600 to-orange-700",
      },
    ],
  },
];

const DIFFERENTIATORS = [
  {
    title: "Industrial Field-Tested",
    desc: "Built and battle-tested across Gainwell Group's heavy engineering, mining, and manufacturing operating environments.",
    icon: Factory,
  },
  {
    title: "Rapid Time-to-Value",
    desc: "Modular cloud-native architectures allow go-live in weeks rather than multi-year custom build cycles.",
    icon: Zap,
  },
  {
    title: "Deep ERP Connectivity",
    desc: "Pre-built integration connectors for SAP S/4HANA, ECC, Zoho, and enterprise legacy databases.",
    icon: Workflow,
  },
];

const FAQS = [
  {
    q: "Can Acceleron’s products be customized for our specific company workflows?",
    a: "Yes. All Acceleron products feature modular microservice architectures that can be configured to match your internal business rules, delegation matrices, and industry compliance mandates.",
  },
  {
    q: "Are these products available on a cloud/SaaS model or on-premise?",
    a: "Our products support flexible deployment models including dedicated cloud SaaS (AWS/Azure), private cloud infrastructure, and air-gapped on-premise hosting for sensitive plant operations.",
  },
  {
    q: "How do products like WOMS, iFMS, and Supplier Portal integrate with our ERP?",
    a: "We provide pre-built REST API middleware and certified connectors that automatically sync work orders, inventory, purchase orders, and invoices in real time with SAP, Oracle, and other ERP cores.",
  },
  {
    q: "How does Acceleron ensure security and statutory compliance?",
    a: "Our applications adhere to bank-grade encryption (TLS 1.3 / AES-256), ISO 27001 data protection protocols, role-based access control (RBAC), and full compliance with national tax, labour, and safety mandates.",
  },
];

function ProductsHub() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* SECTION 1: HERO BANNER */}
      <PageHero
        badge="PROPRIETARY ENTERPRISE IP &amp; INDUSTRY PLATFORMS"
        title="Purpose-Built Software Applications Designed for Operational Scale"
        subtitle="Explore Acceleron's comprehensive portfolio of 20 digital enterprise solutions organized across Industrial Solutions, People Solutions, Customer Experience, and Office Digitization. Engineered to solve concrete operational bottlenecks and deliver immediate bottom-line P&L value."
        breadcrumbs={[{ label: "Products" }]}
        image="/capital_goods.jpg"
        ctaText="Explore Product Directory"
        ctaHref="#directory"
        secondaryCtaText="Request Solution Demo"
        secondaryCtaHref="/contact"
        icon={
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/20 shadow-xl">
            <Boxes className="h-8 w-8 text-brand drop-shadow-lg" />
            <div className="border-l border-white/30 pl-3">
              <div className="text-[10px] font-bold uppercase tracking-wider text-brand-red">
                Acceleron Labs &amp; IP
              </div>
              <div className="text-xs font-bold text-white tracking-wide">
                20 Enterprise Applications
              </div>
            </div>
          </div>
        }
      />

      {/* QUICK JUMP / CATEGORY ANCHOR BAR */}
      <div className="sticky top-20 z-30 border-y border-border/60 bg-background/90 backdrop-blur-md py-3 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground shrink-0 hidden md:block">
            Explore Landing Hubs:
          </div>
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {PRODUCT_CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                to={cat.landingHref as any}
                className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-muted/40 hover:bg-brand/10 hover:border-brand/40 px-3.5 py-1.5 text-xs font-semibold text-foreground transition-all duration-200"
              >
                <cat.icon className="h-3.5 w-3.5 text-brand" />
                <span>{cat.title}</span>
                <ArrowUpRight className="h-3 w-3 opacity-60" />
              </Link>
            ))}
          </div>
          <a
            href="#directory"
            className="hidden lg:inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:text-brand-red transition-colors shrink-0"
          >
            <span>Jump to Directory</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* SECTION 2: 4 DEDICATED SOLUTION LANDING HUBS FEATURE */}
      <section className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 border-b border-border/60">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand mb-3">
              Specialized Product Landing Hubs
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Explore Our <span className="text-gradient">4 Product Ecosystems</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
              Each solution ecosystem features a dedicated master landing page detailing architectural pillars, industry sector applications, and integrated sub-platforms.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {PRODUCT_CATEGORIES.map((cat, cIdx) => (
            <Reveal key={cat.id} delay={cIdx * 0.08} className="h-full">
              <Link
                to={cat.landingHref as any}
                className="group rounded-3xl border border-border/80 bg-gradient-to-br from-card via-card to-brand/5 p-6 h-full shadow-card hover:border-brand/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between block"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${cat.gradient} text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}
                    >
                      <cat.icon className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-brand/10 text-brand px-2.5 py-1 rounded-full border border-brand/20">
                      Hub Landing Page
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-brand transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    {cat.subtitle}
                  </p>

                  <div className="text-[11px] font-semibold text-foreground/80 space-y-1 pt-3 border-t border-border/50">
                    <div className="text-muted-foreground text-[10px] uppercase font-bold tracking-wider mb-1">
                      Includes 5 Sub-Solutions:
                    </div>
                    {cat.products.slice(0, 3).map((p) => (
                      <div key={p.name} className="truncate text-muted-foreground group-hover:text-foreground transition-colors flex items-center gap-1.5">
                        <span className="h-1 w-1 rounded-full bg-brand" />
                        <span className="truncate">{p.name.split(" - ")[0]}</span>
                      </div>
                    ))}
                    <div className="text-xs text-brand font-semibold pt-1">
                      + 2 more platforms
                    </div>
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-border/60 flex items-center justify-between text-xs font-bold text-brand group-hover:text-brand-red transition-colors">
                  <span>Open Dedicated Hub</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION 3: EXECUTIVE SITEMAP & REDIRECTION DIRECTORY */}
      <section
        id="directory"
        className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 sm:py-20 border-b border-border/60"
      >
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red mb-3">
              Complete Product Directory
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Direct Navigation by <span className="text-gradient">Solution Category</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Select any of our 20 proprietary enterprise software solutions below to view dedicated architecture deep-dives, functional modules, and operational workflows.
            </p>
          </div>
        </Reveal>

        {/* 4 CATEGORY MATRICES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {PRODUCT_CATEGORIES.map((cat, idx) => (
            <Reveal key={cat.id} delay={idx * 0.08} className="h-full">
              <div className="rounded-3xl border border-border/80 bg-card p-6 h-full shadow-card hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-brand/10 text-brand">
                      {cat.title}
                    </span>
                    <div className="h-9 w-9 rounded-xl bg-muted/60 flex items-center justify-center text-foreground">
                      <cat.icon className="h-4 w-4" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-1">{cat.title}</h3>
                  <p className="text-xs text-muted-foreground mb-4 line-clamp-2">
                    {cat.subtitle}
                  </p>

                  <div className="space-y-1 pt-3 border-t border-border/60">
                    {cat.products.map((p) => (
                      <Link
                        key={p.id}
                        to={p.href as any}
                        className="group flex items-center justify-between rounded-lg px-2.5 py-2 text-xs font-semibold text-foreground/85 hover:text-brand hover:bg-muted/40 transition-all"
                      >
                        <span className="flex items-center gap-2 truncate">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand/60 group-hover:bg-brand transition-colors shrink-0" />
                          <span className="truncate">{p.name}</span>
                        </span>
                        <ChevronRight className="h-3.5 w-3.5 text-muted-foreground/60 group-hover:text-brand group-hover:translate-x-0.5 transition-all shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-border/60 space-y-2">
                  <Link
                    to={cat.landingHref as any}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:text-brand-red transition-colors w-full justify-between"
                  >
                    <span>Visit Dedicated {cat.title} Hub</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                  <a
                    href={`#${cat.anchorId}`}
                    className="inline-flex items-center gap-1 text-[11px] font-semibold text-muted-foreground hover:text-foreground transition-colors w-full justify-between"
                  >
                    <span>Scroll to on-page details</span>
                    <ChevronRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 4 DEDICATED PRODUCT SECTIONS */}
      {PRODUCT_CATEGORIES.map((cat, catIdx) => (
        <section
          key={cat.id}
          id={cat.anchorId}
          className={`container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 sm:py-24 ${
            catIdx < PRODUCT_CATEGORIES.length - 1 ? "border-b border-border/60" : ""
          }`}
        >
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
              <div className="max-w-3xl space-y-3">
                <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand">
                  {cat.badge}
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  {cat.title}
                </h2>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="shrink-0 flex flex-wrap sm:flex-nowrap items-center gap-2 sm:gap-3">
                <Link
                  to={cat.landingHref as any}
                  className="rounded-xl border border-brand/40 bg-brand/5 hover:bg-brand/10 text-brand px-4 py-2 text-xs font-bold transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Dedicated {cat.title} Hub</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
                <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider bg-muted/60 px-3.5 py-2 rounded-xl border border-border/60">
                  5 Sub-Solutions
                </span>
                <Link
                  to="/contact"
                  className="rounded-xl bg-brand-gradient px-4 py-2 text-xs font-bold text-white shadow-glow hover:scale-[1.02] transition-transform"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </Reveal>

          {/* 5 PRODUCT CARDS IN CATEGORY */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {cat.products.map((prod, pIdx) => (
              <Reveal key={prod.id} delay={pIdx * 0.08} className="h-full">
                <div className="group rounded-3xl border border-border/70 bg-card p-7 sm:p-8 h-full shadow-card hover:shadow-elevated hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${prod.gradient} text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}
                      >
                        <prod.icon className="h-6 w-6" />
                      </div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-muted-foreground bg-muted/60 px-3 py-1 rounded-full border border-border/50">
                        {prod.badge}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1 group-hover:text-brand transition-colors">
                      {prod.name}
                    </h3>
                    <div className="text-xs font-semibold text-brand mb-4">
                      {prod.subtitle}
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {prod.overview}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-border/50 mb-6">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground/80 mb-2">
                        Core Capabilities
                      </div>
                      {prod.features.map((feat, fIdx) => (
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
                      to={prod.href as any}
                      className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-brand-red transition-colors group/link"
                    >
                      <span>Explore Solution &amp; Demo</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                    <span className="text-[11px] font-semibold text-muted-foreground/60">
                      Acceleron IP
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      ))}

      {/* SECTION: WHY ACCELERON PROPRIETARY IP */}
      <WaveDivider from="white" to="dark" />

      <section className="section-dark container mx-auto px-6 max-w-7xl relative z-10 py-20 sm:py-24">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red mb-3">
              Why Acceleron Proprietary IP
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Engineered for{" "}
              <span className="text-gradient">
                Rapid Time-to-Value &amp; Industrial Integration
              </span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
              Solving deep operational bottlenecks with modular software frameworks built on Gainwell Group’s 80+ years of industrial leadership.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {DIFFERENTIATORS.map((diff, idx) => (
            <Reveal key={diff.title} delay={idx * 0.1} className="h-full">
              <div className="group rounded-3xl border border-border/70 bg-card p-8 h-full shadow-card hover:shadow-elevated hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-12 w-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center group-hover:scale-110 transition-transform">
                      <diff.icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-muted-foreground/60 group-hover:text-brand transition-colors">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-brand transition-colors">
                    {diff.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {diff.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <WaveDivider from="dark" to="white" />

      {/* SECTION: FREQUENTLY ASKED QUESTIONS */}
      <section className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10 py-16 sm:py-24">
        <Reveal>
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red mb-3">
              FAQ
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-muted-foreground text-base max-w-xl mx-auto">
              Key considerations regarding deployment models, customization, and enterprise ERP integration.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-2xl border border-border/80 bg-card px-6 py-2 shadow-sm transition-all hover:border-brand/30"
              >
                <AccordionTrigger className="text-left font-bold text-foreground hover:text-brand hover:no-underline py-4 text-base sm:text-lg">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </section>

      {/* SECTION: BOTTOM CALL TO ACTION */}
      <section className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-slate-950 border border-slate-800 p-8 sm:p-12 lg:p-16 text-white shadow-2xl">
          <div className="absolute top-0 right-0 -mt-12 -mr-12 h-96 w-96 rounded-full bg-brand/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-12 -ml-12 h-96 w-96 rounded-full bg-brand-red/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-white">
              Acceleron Solutions Hub
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Ready to Accelerate Your Operations with Purpose-Built IP?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Schedule an architecture consultation with our product specialists and enterprise solution architects to map our digital platforms to your P&amp;L goals.
            </p>
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <Link
                to="/contact"
                className="rounded-xl bg-brand-gradient px-8 py-4 text-sm font-bold text-white shadow-glow hover:scale-[1.02] transition-transform"
              >
                Request Product Demo
              </Link>
              <a
                href="tel:+913335346222"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-4 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+91 33 3534 6222</span>
              </a>
              <a
                href="mailto:enquiry@acceleronsolutions.io"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-4 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>enquiry@acceleronsolutions.io</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
