import { createFileRoute, Link } from "@tanstack/react-router";
import {
  TrendingUp,
  CheckCircle2,
  Target,
  BarChart3,
  CalendarCheck,
  Smartphone,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Phone,
  Mail,
  ShieldCheck,
  Briefcase,
  Compass,
} from "lucide-react";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { PageHero } from "../../components/ui/PageHero";
import { ProcessFlow } from "../../components/ui/ProductShowcase";
import { getAssetUrl } from "../../lib/assets";

export const Route = createFileRoute("/products/salesorbit")({
  head: () => ({
    meta: [
      {
        title:
          "SalesOrbit - Intelligent Sales Pipeline & CRM Platform | Acceleron Solutions",
      },
      {
        name: "description",
        content:
          "SalesOrbit is an advanced sales automation and CRM platform designed for industrial equipment, capital goods, and enterprise B2B sales pipelines.",
      },
    ],
  }),
  component: SalesOrbitProductPage,
});

const CORE_FEATURES = [
  {
    title: "Lead & Opportunity Management",
    desc: "Centralized tracking of inbound inquiries, tender bids, and sales pipelines, supported by customizable stage milestones.",
    icon: Target,
    metric: "Stage Governance",
  },
  {
    title: "Sales Forecasting & Analytics",
    desc: "Predictive analytics delivering data-driven revenue projections, weighted pipeline values, and insights into win/loss ratios.",
    icon: BarChart3,
    metric: "Predictive Forecasts",
  },
  {
    title: "Activity & Task Coordination",
    desc: "Automated scheduling of client meetings, follow-ups, tender submission deadlines, and proposal milestones for sales reps.",
    icon: CalendarCheck,
    metric: "Automated Follow-ups",
  },
  {
    title: "Mobile Field Sales Access",
    desc: "Mobile CRM capabilities enabling sales executives to update pipeline statuses, check inventory, and access client profiles during client visits.",
    icon: Smartphone,
    metric: "Field Agile CRM",
  },
];

const BUSINESS_BENEFITS = [
  {
    title: "Faster Sales Cycles",
    metric: "+28% Conversion",
    desc: "Faster sales cycles and improved lead conversion opportunities through proactive pipeline alerts.",
  },
  {
    title: "Pipeline Visibility & Health",
    metric: "Live Forecasting",
    desc: "Greater visibility into team performance, weighted pipeline health, and accurate quarterly revenue forecasts.",
  },
  {
    title: "Relationship Continuity",
    metric: "360° Account View",
    desc: "Stronger customer relationship continuity through centralized interaction histories, equipment ownership, and past quotes.",
  },
  {
    title: "Streamlined ERP Handoff",
    metric: "Zero Friction",
    desc: "Won deals automatically feed into ERP order management, billing systems, and project delivery schedules.",
  },
];

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Lead & Tender Ingestion",
    desc: "Inquiries from RFP portals, industrial expos, website requests, and distributor networks ingested.",
  },
  {
    step: "02",
    title: "Qualification & Stage Scoping",
    desc: "Technical specs, budget authority, and client purchase timelines evaluated against pipeline criteria.",
  },
  {
    step: "03",
    title: "CPQ Proposal Generation",
    desc: "Configure-Price-Quote engine generates customized commercial bids factoring in equipment options and financing.",
  },
  {
    step: "04",
    title: "Deal Negotiation & Forecasting",
    desc: "Interactive deal staging updates weighted forecasts and triggers management review for high-value bids.",
  },
  {
    step: "05",
    title: "Order Award & ERP Booking",
    desc: "Contract signed, customer PO recorded, and order automatically transferred to ERP manufacturing/dispatch.",
  },
];

function SalesOrbitProductPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* HERO BANNER */}
      <PageHero
        badge="CX SOLUTIONS • SALES CRM"
        title="SalesOrbit – Intelligent Sales Pipeline & CRM Platform"
        subtitle="SalesOrbit is an advanced sales automation and Customer Relationship Management (CRM) platform designed for industrial solutions, heavy equipment and enterprise B2B sales. It enables sales teams to track leads, manage opportunities, forecast revenue and nurture client relationships across every stage of the sales cycle."
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: "CX Solutions", href: "/products" },
          { label: "SalesOrbit" },
        ]}
        image="/products/featured-applications/SalesOrbit - AI Powered Sales Journey Plan - Acceleron Solutions.png"
        ctaText="Schedule a Live Demo"
        ctaHref="/contact"
        secondaryCtaText="Explore Features"
        secondaryCtaHref="#features"
      />

      {/* SECTION: OVERVIEW & SYSTEM INTEGRATION */}
      <section className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 sm:py-24 border-b border-border/50">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red">
                Operational Framework
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Architected for Complex{" "}
                <span className="text-gradient">Industrial &amp; B2B Sales Cycles</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                SalesOrbit integrates with quotation engines, ERP billing systems, and marketing automation tools to provide unified customer intelligence and streamline sales processes. Tailored for multi-stakeholder capital equipment evaluations, it gives enterprise sales teams total control from initial prospect discovery to final contract execution.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="pt-4 flex flex-wrap gap-4">
                <div className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">ERP &amp; CPQ Integrated</div>
                    <div className="text-xs text-muted-foreground">Seamless handoff from quote to active order</div>
                  </div>
                </div>
                <div className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">Predictive Win Analytics</div>
                    <div className="text-xs text-muted-foreground">Data-driven probability &amp; revenue modeling</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-border/70 bg-muted/20 p-8 space-y-6 shadow-card">
                <div className="text-xs font-bold uppercase tracking-widest text-brand-red">
                  SalesOrbit At A Glance
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Accelerating Enterprise Deals
                </h3>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Eliminates pipeline blind spots across regional sales territories.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Standardizes multi-stage approvals for tender bids and custom discounts.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Mobile CRM gives reps immediate access to client equipment portfolios.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Provides executive leadership with reliable, weighted revenue forecasts.</span>
                  </li>
                </ul>
                <div className="pt-4 border-t border-border">
                  <Link
                    to="/contact"
                    className="w-full rounded-xl bg-brand-gradient py-3.5 text-center text-sm font-bold text-white shadow-glow block hover:scale-[1.01] transition-transform"
                  >
                    Request Technical Consultation
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION: CORE FEATURES */}
      <section id="features" className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 sm:py-24">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red mb-3">
              Capabilities &amp; Features
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Core Features &amp; <span className="text-gradient">Pipeline Engine</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Engineered for capital equipment manufacturers, industrial project contractors, and enterprise B2B sales forces.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {CORE_FEATURES.map((feat, idx) => (
            <Reveal key={feat.title} delay={idx * 0.1}>
              <div className="rounded-3xl border border-border/70 bg-card p-8 h-full shadow-card hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-12 w-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center">
                      <feat.icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-muted text-muted-foreground">
                      {feat.metric}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{feat.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feat.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-border flex items-center gap-2 text-xs font-semibold text-brand">
                  <CheckCircle2 className="h-4 w-4" /> Enterprise Module
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION: OPERATIONAL WORKFLOW */}
      <section className="section-dark container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 sm:py-24 rounded-3xl my-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand mb-3">
              Sales Lifecycle
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              5-Phase Sales Pipeline Workflow
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              From lead capture and opportunity qualification to CPQ bid generation, deal closing, and automated ERP booking.
            </p>
          </div>
        </Reveal>

        <ProcessFlow steps={WORKFLOW_STEPS} />
      </section>

      {/* SECTION: DELIVERED BUSINESS BENEFITS */}
      <section className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 sm:py-24">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red mb-3">
              Measurable P&amp;L Value
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Delivered <span className="text-gradient">Business Benefits</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Empowering sales leaders with predictable revenue forecasting, higher win rates, and seamless operations.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUSINESS_BENEFITS.map((ben, idx) => (
            <Reveal key={ben.title} delay={idx * 0.1}>
              <div className="rounded-3xl border border-border/70 bg-card p-6 h-full shadow-card hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-brand-red mb-2">
                    {ben.metric}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{ben.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{ben.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-border flex items-center gap-1.5 text-xs text-brand font-semibold">
                  <span>Verified Outcome</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION: ENTERPRISE CALL TO ACTION */}
      <section className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 pb-20">
        <div className="relative overflow-hidden rounded-3xl bg-slate-950 border border-slate-800 p-8 sm:p-12 lg:p-16 text-white shadow-2xl">
          <div className="absolute top-0 right-0 -mt-12 -mr-12 h-96 w-96 rounded-full bg-brand/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-12 -ml-12 h-96 w-96 rounded-full bg-brand-red/20 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-white">
              Ready For Deployment
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Elevate Your B2B Sales Performance with SalesOrbit
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Schedule a technical consultation with our CRM practice leads to explore pipeline stages, mobile sales capabilities, and quotation engine integrations.
            </p>
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <Link
                to="/contact"
                className="rounded-xl bg-brand-gradient px-8 py-4 text-sm font-bold text-white shadow-glow hover:scale-[1.02] transition-transform"
              >
                Schedule Technical Consultation
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
