import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ArrowRight,
  Award,
  Layers,
  Building2,
  Users,
  CreditCard,
  Database,
  Cpu,
  Mail,
  Phone,
  HelpCircle,
  Sparkles,
  DollarSign,
  Briefcase,
  Check,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { PageHero } from "../../components/ui/PageHero";
import { ProcessFlow } from "../../components/ui/ProductShowcase";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Link } from "@tanstack/react-router";
import { getAssetUrl } from "../../lib/assets";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export const Route = createFileRoute("/services/zoho")({
  head: () => ({
    meta: [
      { title: "Zoho Solutions — Acceleron Solutions" },
      {
        name: "description",
        content:
          "Full-suite Zoho solutions from single-app rollouts to enterprise Zoho One and Zoho ERP implementations with custom SAP and legacy integrations.",
      },
    ],
  }),
  component: ZohoPage,
});

const VALUE_PILLARS = [
  {
    title: "Zoho Advanced Partner",
    desc: "Certified architects ensuring best-practice governance, security, and optimal licensing strategy across 45+ applications.",
    icon: Award,
  },
  {
    title: "Deep ERP & Legacy Integration",
    desc: "Seamless integration connecting Zoho applications directly with SAP S/4HANA, custom databases, and legacy operational platforms.",
    icon: Layers,
  },
  {
    title: "Industrial & Enterprise Domain Mastery",
    desc: "Grounded in Gainwell Group’s 80+ year lineage, bringing real operational domain knowledge across manufacturing, logistics, mining, construction, and retail.",
    icon: Building2,
  },
];

const ZOHO_ECOSYSTEM_TABS = [
  {
    id: "sales-cx",
    tabLabel: "Sales & CX",
    fullTitle: "Sales & Customer Experience",
    icon: Users,
    summary:
      "Drive lead conversions, automate field sales, and unify customer touchpoints across digital and offline channels.",
    apps: [
      "Zoho CRM",
      "Zoho Bigin",
      "Zoho SalesIQ",
      "Zoho Forms",
      "Zoho Sign",
      "Zoho Bookings",
    ],
    featured: {
      title: "Zoho CRM",
      slug: "zoho-crm",
      desc: "Unified customer relationship management to accelerate sales cycles and pipeline tracking.",
      logo: "/icons/zoho/Zoho_CRM_Icon_-_Acceleron_Solution-removebg-preview.png",
    },
  },
  {
    id: "finance-accounting",
    tabLabel: "Finance & Accounting",
    fullTitle: "Finance & Accounting",
    icon: DollarSign,
    summary:
      "Streamline GST compliance, accounts payable, receivables, bank reconciliations, and automated expense approvals.",
    apps: [
      "Zoho Books",
      "Zoho Invoice",
      "Zoho Expense",
      "Zoho Billing",
      "Zoho Checkout",
    ],
    featured: {
      title: "Zoho Books",
      slug: "zoho-books",
      desc: "Smart, automated online accounting software for real-time compliance and cash flow control.",
      logo: "/icons/zoho/Zoho_Books_Icon_-_Acceleron_Solution-removebg-preview.png",
    },
  },
  {
    id: "people-hr",
    tabLabel: "People & HR",
    fullTitle: "People & HR Operations",
    icon: Briefcase,
    summary:
      "Automate India & global payroll processing, attendance tracking, performance management, and talent acquisition.",
    apps: [
      "Zoho People",
      "Zoho Payroll",
      "Zoho Recruit",
      "Zoho Shifts",
      "Zoho Workerly",
    ],
    featured: {
      title: "Zoho HRMS (People & Payroll)",
      slug: "zoho-hrms-people-and-payroll",
      desc: "Comprehensive HR management and automated payroll for a modern workforce.",
      logo: "/icons/zoho/Zoho_People_and_Payroll_-_Zoho_HRMS_-_Acceleron_Solutions-removebg-preview.png",
    },
  },
  {
    id: "enterprise-erp",
    tabLabel: "Enterprise ERP (Zoho One)",
    fullTitle: "Business Process & Enterprise ERP (Zoho One)",
    icon: Layers,
    summary:
      "Connect 45+ applications on a single database with low-code custom workflow development and business intelligence.",
    apps: [
      "Zoho ERP / Zoho One",
      "Zoho Creator",
      "Zoho Analytics",
      "Zoho Flow",
      "Zoho DataPrep",
    ],
    featured: {
      title: "Zoho ERP",
      slug: "zoho-erp",
      desc: "Unified cloud ERP ecosystem connecting finance, HR, sales, and operations under one platform.",
      logo: "/icons/zoho/Zoho_ERP_Icon_-_Acceleron_Solution-removebg-preview.png",
    },
  },
  {
    id: "workplace-collab",
    tabLabel: "Workplace & Collaboration",
    fullTitle: "Workplace & Collaboration",
    icon: Mail,
    summary:
      "Ad-free enterprise email hosting, secure enterprise cloud storage, projects, and team communication tools.",
    apps: [
      "Zoho Mail",
      "Zoho WorkDrive",
      "Zoho Cliq",
      "Zoho Meeting",
      "Zoho Projects",
      "Zoho Desk",
      "Zoho Writer",
      "Zoho Sheet",
    ],
    featured: {
      title: "Zoho Mail",
      slug: "zoho-mail",
      desc: "Secure business email hosting with zero-ad privacy and collaborative workspace tools.",
      logo: "/icons/zoho/Zoho_Mail_Icon_-_Acceleron_Solution-removebg-preview.png",
    },
  },
];

const INTEGRATION_MATRIX = [
  {
    category: "Core ERP Systems",
    desc: "Bi-directional master data and transactional sync",
    systems: ["SAP S/4HANA", "SAP ECC", "Microsoft Dynamics", "Legacy ERPs"],
    icon: Layers,
  },
  {
    category: "Financial & Payment Gateways",
    desc: "Automated settlements, invoicing, and tax statutory filing",
    systems: ["Banking APIs", "Razorpay", "Stripe", "GST Portal"],
    icon: CreditCard,
  },
  {
    category: "Custom Databases & Mobile Apps",
    desc: "Custom middleware and secure API endpoints",
    systems: ["SQL", "PostgreSQL", "REST APIs", "Custom Mobile SDKs"],
    icon: Database,
  },
  {
    category: "Industrial Hardware & IoT",
    desc: "Edge telematics and shopfloor hardware feeds",
    systems: [
      "Telemetry devices",
      "Biometric attendance hardware",
      "Field sensors",
    ],
    icon: Cpu,
  },
];

const DEPLOYMENT_LIFECYCLE = [
  {
    step: "01",
    title: "Discover & Blueprint (Weeks 1–2)",
    desc: "Workflow mapping, license optimization, and custom integration scoping.",
  },
  {
    step: "02",
    title: "Configure & Integrate (Weeks 3–5)",
    desc: "Application setup, custom blueprinting, data migration, and API middleware development.",
  },
  {
    step: "03",
    title: "Train & Enable (Weeks 6–7)",
    desc: "Role-based user training, change management, and User Acceptance Testing (UAT).",
  },
  {
    step: "04",
    title: "Go-Live & Optimize (Weeks 8+)",
    desc: "Smooth cutover, post-go-live hypercare, and 24/7 SLA-backed managed support.",
  },
];

const FAQS = [
  {
    q: "What is the difference between implementing individual Zoho apps vs. Zoho One / Zoho ERP?",
    a: "Single application rollouts (like Zoho CRM or Zoho Books) target specific department needs. Zoho One / Zoho ERP provides 45+ integrated applications under a single license and unified database, running your entire business from a single platform.",
  },
  {
    q: "Can Zoho Books handle complex Indian GST compliance and e-invoicing?",
    a: "Yes. Zoho Books natively supports Indian GST filing, automated e-invoicing generation, e-way bill creation, and real-time bank reconciliation in compliance with statutory requirements.",
  },
  {
    q: "How does Acceleron integrate Zoho with existing SAP or legacy ERP systems?",
    a: "As both an SAP and Zoho partner, Acceleron builds secure API connectors and custom middleware that synchronize master data, financial transactions, and sales pipelines between SAP and Zoho without manual data entry.",
  },
  {
    q: "How long does a typical Zoho deployment take with Acceleron?",
    a: "Single application deployments are completed in 2 to 4 weeks, while enterprise-wide Zoho One or Zoho ERP implementations typically take 6 to 10 weeks, including custom integrations and user training.",
  },
];

function ZohoPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [showAllIntegrations, setShowAllIntegrations] = useState(false);

  const currentTab = ZOHO_ECOSYSTEM_TABS[activeTab];

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* SECTION 1: HERO BANNER (With Partner Badge) */}
      <PageHero
        title="Zoho Solutions for Connected Businesses"
        subtitle="From individual Zoho applications to enterprise-wide Zoho One and ERP deployments, we deliver seamless automation, custom integrations with SAP and legacy systems, and faster business value."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Zoho" },
        ]}
        image="/zoho/Zoho Experts - Acceleron Solutions.jpeg"
        ctaText="Talk to Our Zoho Experts"
        ctaHref="/contact#form"
        secondaryCtaText="Explore Application Ecosystem"
        secondaryCtaHref="#ecosystem"
      />

      {/* SECTION 2: WHY ACCELERON FOR ZOHO */}
      <section className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-14 sm:py-20 lg:py-24 border-b border-border/50">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red mb-3">
              Why Acceleron for Zoho
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Enterprise Automation Deployed in{" "}
              <span className="text-gradient">Weeks, Not Quarters</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Accelerate time-to-value with certified architects, enterprise integration capabilities, and 80+ years of industrial heritage.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {VALUE_PILLARS.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.1} className="h-full">
              <div className="group rounded-3xl border border-border/70 bg-card p-7 sm:p-8 h-full shadow-soft hover:shadow-elevated hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="h-12 w-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-muted-foreground/60 group-hover:text-brand transition-colors">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-brand transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION 3: INTERACTIVE ZOHO ECOSYSTEM DIRECTORY (Tab Switcher) */}
      <section id="ecosystem" className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-14 sm:py-20 lg:py-24">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red mb-3">
              Application Ecosystem
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Interactive Zoho <span className="text-gradient">Ecosystem Directory</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Explore interconnected Zoho applications tailored across five core business functions.
            </p>
          </div>
        </Reveal>

        {/* Tab Selection Bar */}
        <div className="flex items-center justify-center mb-8 sm:mb-12">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl bg-muted/40 border border-border/70 backdrop-blur-md max-w-full">
            {ZOHO_ECOSYSTEM_TABS.map((tab, idx) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(idx)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === idx
                    ? "bg-brand text-white shadow-glow"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.tabLabel}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Tab Panel */}
        <div className="rounded-3xl border border-border/70 bg-card p-6 sm:p-10 shadow-soft">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTab.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
            >
              {/* Left Column: Category Summary & Apps List */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-red mb-2">
                    Business Domain
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                    {currentTab.fullTitle}
                  </h3>
                  <p className="text-muted-foreground text-base leading-relaxed mt-3">
                    {currentTab.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <div className="text-xs font-bold uppercase tracking-wider text-foreground/80 mb-3">
                    Applications Included in this Domain
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {currentTab.apps.map((app) => (
                      <div
                        key={app}
                        className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-muted/30 border border-border/60 text-xs sm:text-sm font-medium text-foreground hover:border-brand/40 transition-colors"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-brand shrink-0" />
                        <span className="truncate">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Featured Sub-Page Card */}
              <div className="lg:col-span-5">
                <div className="rounded-2xl border border-brand/30 bg-brand-gradient/5 p-6 sm:p-8 relative overflow-hidden shadow-soft">
                  <div className="absolute top-3 right-3 text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-brand text-white">
                    Featured Application
                  </div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="h-14 w-14 rounded-xl bg-white p-2 shadow-sm border border-border/50 flex items-center justify-center shrink-0">
                      <img
                        src={getAssetUrl(currentTab.featured.logo)}
                        alt={currentTab.featured.title}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground">
                        {currentTab.featured.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">Certified Implementation</p>
                    </div>
                  </div>

                  <p className="text-sm text-foreground/85 leading-relaxed mb-6">
                    {currentTab.featured.desc}
                  </p>

                  <Link
                    to={`/services/zoho/${currentTab.featured.slug}` as any}
                    className="btn btn-primary btn-lg w-full justify-center text-sm sm:text-base font-bold shadow-md shadow-brand-red/25 min-h-[48px] sm:min-h-[52px] py-3.5 sm:py-4"
                  >
                    Explore Detail & Pricing <ArrowRight className="h-4 w-4 ml-1.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* SECTION 4: SYSTEM INTEGRATION MATRIX */}
      <section className="relative overflow-hidden bg-muted/20 py-14 sm:py-20 border-y border-border/50">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red mb-3">
                Enterprise Connectivity
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
                Seamless Integration with Your{" "}
                <span className="text-gradient">Existing Enterprise Ecosystem</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Zoho doesn't operate in a silo. Acceleron’s custom integration middleware connects your Zoho applications directly with your core enterprise infrastructure:
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INTEGRATION_MATRIX.map((item, idx) => (
              <div key={item.category} className={idx >= 3 && !showAllIntegrations ? "hidden md:block h-full" : "block h-full"}>
                <Reveal delay={idx * 0.08} className="h-full">
                  <div className="group rounded-3xl border border-border/70 bg-card p-6 sm:p-7 h-full shadow-soft hover:shadow-elevated hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <div className="h-11 w-11 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-brand transition-colors">
                        {item.category}
                      </h3>
                      <p className="text-xs text-muted-foreground mb-4">
                        {item.desc}
                      </p>

                      <div className="space-y-2 border-t border-border/50 pt-3">
                        {item.systems.map((sys) => (
                          <div key={sys} className="flex items-center gap-2 text-xs text-foreground/80 font-medium">
                            <Check className="h-3.5 w-3.5 text-brand shrink-0" />
                            <span>{sys}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>

          {INTEGRATION_MATRIX.length > 3 && (
            <div className="md:hidden pt-5 text-center">
              <button
                type="button"
                onClick={() => setShowAllIntegrations(!showAllIntegrations)}
                className="inline-flex items-center gap-2 text-xs font-bold text-brand-red hover:text-red-700 py-2.5 px-5 rounded-full border border-brand-red/30 bg-brand-red/5 hover:bg-brand-red/10 shadow-sm transition-all cursor-pointer"
                aria-expanded={showAllIntegrations}
              >
                <span>{showAllIntegrations ? "Show fewer integrations" : `+ View ${INTEGRATION_MATRIX.length - 3} more integration`}</span>
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${showAllIntegrations ? "rotate-180" : ""}`} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 5: RAPID DEPLOYMENT LIFECYCLE */}
      <WaveDivider from="white" to="dark" />

      <section className="section-dark container mx-auto px-6 max-w-7xl relative z-10 py-20 sm:py-24">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red mb-3">
              Deployment Framework
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Rapid Deployment <span className="text-gradient">Lifecycle</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
              A 4-phase implementation framework designed for rapid speed, high user adoption, and zero business interruption.
            </p>
          </div>
        </Reveal>
        <ProcessFlow steps={DEPLOYMENT_LIFECYCLE} />
      </section>

      <WaveDivider from="dark" to="white" />

      {/* FREQUENTLY ASKED QUESTIONS */}
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
              Key considerations for enterprise Zoho adoption, licensing, and systems integration.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-2xl border border-border/70 bg-card px-5 sm:px-6 data-[state=open]:border-brand/40 shadow-soft transition-all"
              >
                <AccordionTrigger className="text-base sm:text-lg font-bold text-foreground hover:no-underline py-5 text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </section>

      {/* SECTION 7: BOTTOM CTA BANNER */}
      <section className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 pb-16 sm:pb-24 text-center">
        <Reveal>
          <div className="rounded-3xl border border-brand/40 bg-brand-gradient/10 p-8 sm:p-12 md:p-16 backdrop-blur-xl relative overflow-hidden shadow-glow max-w-5xl mx-auto">
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red">
                Next Steps
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                Ready to Automate Your Enterprise with <span className="text-gradient">Zoho?</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Schedule a consultation with our certified Zoho Advanced architects to map your application strategy.
              </p>

              <div className="pt-2">
                <Link
                  to="/contact"
                  hash="form"
                  className="btn btn-primary btn-lg inline-flex items-center gap-2 shadow-lg shadow-brand-red/20"
                >
                  Schedule a Zoho Architecture Session <ArrowUpRight className="h-5 w-5" />
                </Link>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs sm:text-sm text-foreground/80 border-t border-border/50 max-w-md mx-auto">
                <a
                  href="mailto:enquiry@acceleronsolutions.io"
                  className="inline-flex items-center gap-2 hover:text-brand transition-colors font-medium"
                >
                  <Mail className="h-4 w-4 text-brand" />
                  <span>enquiry@acceleronsolutions.io</span>
                </a>
                <span className="text-border">|</span>
                <a
                  href="tel:+913335346222"
                  className="inline-flex items-center gap-2 hover:text-brand transition-colors font-medium"
                >
                  <Phone className="h-4 w-4 text-brand" />
                  <span>+91 33 3534 6222</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
