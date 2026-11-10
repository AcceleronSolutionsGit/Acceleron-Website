import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Truck,
  CheckCircle2,
  Layers,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Boxes,
  Compass,
  Workflow,
  Gauge,
  Phone,
  Mail,
  ShieldCheck,
  Cpu,
} from "lucide-react";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { PageHero } from "../../components/ui/PageHero";
import { ProcessFlow } from "../../components/ui/ProductShowcase";
import { getAssetUrl } from "../../lib/assets";

export const Route = createFileRoute("/products/inplant-logistics")({
  head: () => ({
    meta: [
      {
        title: "Inplant Logistics Solutions | Acceleron Solutions",
      },
      {
        name: "description",
        content:
          "Enterprise Inplant Logistics solutions for material flow optimization, warehouse bin tracking, line-side JIT/JIS replenishment, and internal fleet tracking.",
      },
    ],
  }),
  component: InplantLogisticsProductPage,
});

const CORE_FEATURES = [
  {
    title: "Material Flow Optimization",
    desc: "Intelligent route planning and congestion reduction for forklifts, automated guided vehicles (AGVs), and internal transport fleets.",
    icon: Compass,
    metric: "Congestion-Free",
  },
  {
    title: "Warehouse Management & Inventory Control",
    desc: "Real-time bin tracking, barcode/RFID scanning, and automated stock replenishment.",
    icon: Boxes,
    metric: "100% Bin Accuracy",
  },
  {
    title: "Line-Side Replenishment (JIT / JIS)",
    desc: "Just-in-Time (JIT) and Just-in-Sequence (JIS) material staging to prevent workstation shortages and reduce Work-in-Progress (WIP) inventory.",
    icon: Workflow,
    metric: "Zero Shortage",
  },
  {
    title: "Fleet & Equipment Tracking",
    desc: "Monitoring equipment utilization, fuel consumption, and operator safety metrics across in-plant material handling fleets.",
    icon: Gauge,
    metric: "Fleet Telematics",
  },
];

const BUSINESS_BENEFITS = [
  {
    title: "Increased Throughput",
    metric: "Max Output",
    desc: "Increased manufacturing throughput and reduced factory floor bottlenecks.",
  },
  {
    title: "Lower Holding Costs",
    metric: "Reduced WIP",
    desc: "Lower inventory holding costs and reduced risks of material obsolescence or damage.",
  },
  {
    title: "Improved Workplace Safety",
    metric: "Zero Incident",
    desc: "Improved workplace safety through structured traffic management and material handling protocols.",
  },
  {
    title: "End-to-End Visibility",
    metric: "Unified Sync",
    desc: "Greater visibility and coordination across internal logistics and production workflows.",
  },
];

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Inbound Receiving & Staging",
    desc: "Raw materials unloaded, scanned with barcode/RFID tags, and verified against ERP purchase orders.",
  },
  {
    step: "02",
    title: "Dynamic Slotting & Binning",
    desc: "Slotting algorithms assign items to optimal storage bins based on velocity and production proximity.",
  },
  {
    step: "03",
    title: "Production Call-Off (JIT/JIS)",
    desc: "Assembly line signals automatically trigger pull requests for components sequenced by job order.",
  },
  {
    step: "04",
    title: "Line-Side Dispatch",
    desc: "Forklifts, tuggers, and AGVs receive guided travel paths via in-plant navigation terminals.",
  },
  {
    step: "05",
    title: "Consumption & ERP Sync",
    desc: "Workstation consumption decrements stock in real-time, triggering automated supplier replenishments.",
  },
];

function InplantLogisticsProductPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* HERO BANNER */}
      <PageHero
        badge="INDUSTRIAL SOLUTIONS • INPLANT LOGISTICS"
        title="Inplant Logistics"
        subtitle="Acceleron develops and implements Inplant Logistics solutions designed to optimize internal material handling, warehouse storage, and shop-floor supply chains. Tailored for heavy manufacturing plants and large industrial facilities, our solutions ensure raw materials and components reach the right workstations at the right time, supporting uninterrupted production flow."
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: "Industrial Solutions", href: "/products" },
          { label: "Inplant Logistics" },
        ]}
        image="/products/featured-applications/Inplant Logistics Application  - Acceleron Solutions.png"
        ctaText="Schedule a Live Demo"
        ctaHref="/contact"
        secondaryCtaText="Explore Features"
        secondaryCtaHref="#features"
      />

      {/* SECTION: OVERVIEW & OPERATIONAL INTEGRATION */}
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
                Synchronizing Shop-Floor Movement with{" "}
                <span className="text-gradient">Manufacturing Schedules</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Acceleron's Inplant Logistics solutions integrate with Enterprise Resource Planning (ERP) and Manufacturing Execution Systems (MES), synchronizing production schedules with material movement across factory operations. Our algorithms optimize traffic corridors, eliminate idle transit time, and prevent costly line stoppages.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="pt-4 flex flex-wrap gap-4">
                <div className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">ERP &amp; MES Synced</div>
                    <div className="text-xs text-muted-foreground">Automated line-side pull requests</div>
                  </div>
                </div>
                <div className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">JIT &amp; JIS Staging</div>
                    <div className="text-xs text-muted-foreground">Minimizes WIP &amp; factory congestion</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-border/70 bg-muted/20 p-8 space-y-6 shadow-card">
                <div className="text-xs font-bold uppercase tracking-widest text-brand-red">
                  Inplant Logistics At A Glance
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Factory Material Orchestration
                </h3>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Eliminates line starvation with automated JIT buffer monitoring.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Tracks material handling equipment, driver hours, and safety zones.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Integrates RFID gates and mobile scanners for zero-error binning.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Native synchronization with SAP WM/EWM and MES shop-floor engines.</span>
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
              Core Capabilities &amp; <span className="text-gradient">Functional Features</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Engineered specifically for discrete manufacturing plants, assembly facilities, and industrial warehouses.
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
              Internal Supply Chain
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              5-Phase Material Handling Workflow
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              From inbound dock receiving to automated line-side staging and ERP inventory reconciliation.
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
              Proven returns across plant logistics operations, safety enforcement, and WIP capital reduction.
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
              Optimize Your In-Plant Material Handling Today
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Schedule an operational review with our industrial logistics engineers to map your plant corridors, line-side replenishment, and ERP integration.
            </p>
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <Link
                to="/contact"
                className="rounded-xl bg-brand-gradient px-8 py-4 text-sm font-bold text-white shadow-glow hover:scale-[1.02] transition-transform"
              >
                Schedule Logistics Consultation
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
