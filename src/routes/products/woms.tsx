import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Wrench,
  CheckCircle2,
  Layers,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  ClipboardList,
  Users2,
  PackageCheck,
  Timer,
  Clock,
  Phone,
  Mail,
  ShieldCheck,
} from "lucide-react";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { PageHero } from "../../components/ui/PageHero";
import { ProcessFlow } from "../../components/ui/ProductShowcase";
import { getAssetUrl } from "../../lib/assets";

export const Route = createFileRoute("/products/woms")({
  head: () => ({
    meta: [
      {
        title: "Work Order Management System (WOMS) | Acceleron Solutions",
      },
      {
        name: "description",
        content:
          "Enterprise Work Order Management System (WOMS) to streamline maintenance operations, service scheduling, field technician dispatch, and spare parts requisition.",
      },
    ],
  }),
  component: WOMSProductPage,
});

const FUNCTIONALITIES = [
  {
    title: "Automated Ticketing & Creation",
    desc: "Automated logging of service requests through web portals, mobile applications, and IoT-enabled telematics triggers.",
    icon: ClipboardList,
    metric: "Instant Dispatch",
  },
  {
    title: "Resource & Technician Allocation",
    desc: "Intelligent scheduling tools that match technician skill sets, certifications, and geographic proximity to active service requests.",
    icon: Users2,
    metric: "Skill-Matched",
  },
  {
    title: "Parts & Inventory Integration",
    desc: "Real-time spare parts visibility, automated requisitioning, and integrated equipment service history tracking.",
    icon: PackageCheck,
    metric: "Real-Time Stock",
  },
  {
    title: "SLA & Performance Tracking",
    desc: "Built-in monitoring of response and resolution times to support adherence to Service Level Agreements (SLAs).",
    icon: Timer,
    metric: "SLA Guaranteed",
  },
];

const BUSINESS_BENEFITS = [
  {
    title: "Reduced MTTR & Downtime",
    metric: "Faster MTTR",
    desc: "Reduced mean time to repair (MTTR) and equipment downtime through streamlined maintenance workflows.",
  },
  {
    title: "Complete Digital Audit Trails",
    metric: "100% Traceable",
    desc: "Complete digital audit trails covering maintenance activities, service histories, and technician notes.",
  },
  {
    title: "Data-Driven Reliability",
    metric: "Predictable Ops",
    desc: "Data-driven insights into equipment reliability, recurring maintenance issues, and service bottlenecks.",
  },
  {
    title: "Service Coordination",
    metric: "Optimal Fleet",
    desc: "Improved service coordination, resource utilization, and maintenance visibility across operations.",
  },
];

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Request Initiation",
    desc: "Automated logging of service requests through web portals, mobile apps, and IoT telematics.",
  },
  {
    step: "02",
    title: "Triage & Prioritization",
    desc: "System evaluates priority levels, SLA mandates, and equipment history to triage tickets.",
  },
  {
    step: "03",
    title: "Technician Dispatch",
    desc: "Intelligent routing matches technician certifications, skill sets, and geographic proximity.",
  },
  {
    step: "04",
    title: "Field Execution & Parts",
    desc: "Technicians execute digital job cards with real-time spare parts consumption and checklist validation.",
  },
  {
    step: "05",
    title: "Quality Sign-off & Invoicing",
    desc: "Digital customer sign-off automatically triggers ERP synchronizations and service billing closure.",
  },
];

function WOMSProductPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* HERO BANNER */}
      <PageHero
        badge="INDUSTRIAL SOLUTIONS • WORK ORDER MANAGEMENT"
        title="Work Order Management System (WOMS)"
        subtitle="Acceleron develops and implements digital Work Order Management Systems (WOMS) designed to streamline maintenance operations, service scheduling, and field technician dispatch. Our solutions replace legacy paperwork with unified digital workflows, ensuring every equipment service request, preventive maintenance task, and repair job is tracked from initiation to closure with complete transparency."
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: "Industrial Solutions", href: "/products" },
          { label: "WOMS" },
        ]}
        image="/capital_goods.jpg"
        ctaText="Schedule a Live Demo"
        ctaHref="/contact"
        secondaryCtaText="Explore Functionalities"
        secondaryCtaHref="#functionalities"
        icon={
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 border border-slate-700/60 p-2.5 shadow-glow">
            <img
              src={getAssetUrl("/woms.png")}
              alt="WOMS"
              className="h-10 w-10 object-contain"
            />
          </div>
        }
      />

      {/* SECTION: OVERVIEW & OPERATIONAL FRAMEWORK */}
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
                Streamlining Field Service &amp;{" "}
                <span className="text-gradient">Plant Maintenance</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Acceleron WOMS eliminates maintenance paperwork bottlenecks by connecting service requesters, supervisors, field technicians, and inventory warehouses into a cohesive digital workflow. Our system guarantees end-to-end auditability and tight integration with core enterprise ERP platforms.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="pt-4 flex flex-wrap gap-4">
                <div className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">Zero Paper Leakage</div>
                    <div className="text-xs text-muted-foreground">Digital job cards &amp; automated triage</div>
                  </div>
                </div>
                <div className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">SAP &amp; ERP Synced</div>
                    <div className="text-xs text-muted-foreground">Real-time parts consumption &amp; billing</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-border/70 bg-muted/20 p-8 space-y-6 shadow-card">
                <div className="text-xs font-bold uppercase tracking-widest text-brand-red">
                  WOMS At A Glance
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Transforming Equipment Maintenance
                </h3>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Converts unstructured maintenance requests into trackable work orders.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Matches technician skills and proximity to reduce travel and wait time.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Ensures required spare parts are pre-allocated before dispatch.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Guarantees SLA adherence with proactive escalation triggers.</span>
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

      {/* SECTION: CORE FUNCTIONALITIES */}
      <section id="functionalities" className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 sm:py-24">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red mb-3">
              Capabilities &amp; Features
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Core Functionalities &amp; <span className="text-gradient">Architecture</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Engineered to support heavy equipment operations, factory plants, and distributed field service teams.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {FUNCTIONALITIES.map((func, idx) => (
            <Reveal key={func.title} delay={idx * 0.1}>
              <div className="rounded-3xl border border-border/70 bg-card p-8 h-full shadow-card hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-12 w-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center">
                      <func.icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-muted text-muted-foreground">
                      {func.metric}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{func.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{func.desc}</p>
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
              Lifecycle Execution
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              5-Phase Operational Workflow
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              From the initial incident report to final technician sign-off and ERP financial reconciliation.
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
              Concrete operational returns for asset-heavy enterprises, fleet managers, and plant operations.
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
              Digitize Your Maintenance Work Orders with Acceleron WOMS
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Schedule an architecture consultation with our industrial software engineering leads to review your maintenance workflows and SAP/ERP integration requirements.
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
