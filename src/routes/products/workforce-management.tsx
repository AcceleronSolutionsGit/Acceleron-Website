import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Users,
  CheckCircle2,
  Calendar,
  ClipboardList,
  BarChart3,
  Smartphone,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Phone,
  Mail,
  ShieldCheck,
  Clock,
  Layers,
} from "lucide-react";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { PageHero } from "../../components/ui/PageHero";
import { ProcessFlow } from "../../components/ui/ProductShowcase";
import { getAssetUrl } from "../../lib/assets";

export const Route = createFileRoute("/products/workforce-management")({
  head: () => ({
    meta: [
      {
        title: "Workforce Management (WFM) | Acceleron Solutions",
      },
      {
        name: "description",
        content:
          "Enterprise Workforce Management (WFM) solutions to streamline labour scheduling, rotational shift planning, task allocation, and productivity tracking across industrial plants.",
      },
    ],
  }),
  component: WorkforceManagementProductPage,
});

const CAPABILITIES = [
  {
    title: "Smart Shift Scheduling",
    desc: "Automated roster generation accommodating rotational shifts, skill matrices, overtime rules and statutory rest periods.",
    icon: Calendar,
    metric: "Automated Rosters",
  },
  {
    title: "Task & Activity Allocation",
    desc: "Real-time assignment of daily tasks linked to active work orders, shop-floor priority lines, and production targets.",
    icon: ClipboardList,
    metric: "Skill-Matched Dispatch",
  },
  {
    title: "Labour Utilization Analytics",
    desc: "Comprehensive reporting on productivity metrics, idle time, absenteeism, pacing, and labour cost variance.",
    icon: BarChart3,
    metric: "Live P&L Insights",
  },
  {
    title: "Mobile Field Access",
    desc: "Intuitive mobile interfaces enabling field technicians and supervisors to view schedules, log task completions and report updates instantly.",
    icon: Smartphone,
    metric: "Frontline Mobile",
  },
];

const BUSINESS_BENEFITS = [
  {
    title: "Maximized Labour Productivity",
    metric: "+20% Productivity",
    desc: "Maximized labour productivity and optimized workforce deployment across plant shifts.",
  },
  {
    title: "Reduced Admin Overhead",
    metric: "-60% Admin Effort",
    desc: "Reduced administrative overhead associated with manual rostering, shift swaps, and overtime calculations.",
  },
  {
    title: "Statutory Labour Compliance",
    metric: "100% Compliant",
    desc: "Support for compliance with applicable labour laws and internal company policies governing working hours and rest intervals.",
  },
  {
    title: "Unified Workforce Records",
    metric: "Zero Discrepancies",
    desc: "Synchronized integration across ERP, Attendance Management, and Payroll systems.",
  },
];

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Roster Generation",
    desc: "Intelligent scheduling engine generates rotational rosters factoring in statutory rest rules and shifts.",
  },
  {
    step: "02",
    title: "Skill & Safety Verification",
    desc: "Verifies operator certifications, medical clearances, and technical qualifications before allocation.",
  },
  {
    step: "03",
    title: "Real-Time Task Dispatch",
    desc: "Tasks and work orders routed to workers via supervisor shop-floor dashboards or frontline mobile apps.",
  },
  {
    step: "04",
    title: "Live Execution & Utilization",
    desc: "Tracks active work milestones, idle time, and shift pacing against manufacturing output benchmarks.",
  },
  {
    step: "05",
    title: "Payroll & ERP Sync",
    desc: "Pre-verified shift hours, overtime calculations, and productivity metrics push directly to payroll engines.",
  },
];

function WorkforceManagementProductPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* HERO BANNER */}
      <PageHero
        badge="PEOPLE SOLUTIONS • WORKFORCE MANAGEMENT"
        title="Workforce Management"
        subtitle="Acceleron develops and delivers advanced digital Workforce Management (WFM) solutions designed to streamline labour scheduling, shift planning, task allocation and productivity tracking across heavy industrial operations and manufacturing plants. Our solutions minimize manual scheduling inefficiencies, helping organizations deploy the right personnel, with the required skills and certifications, at the right place and time."
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: "People Solutions", href: "/products" },
          { label: "Workforce Management" },
        ]}
        image="/products/featured-applications/Performace Based Incentive Management Software - Acceleron Solutions.png"
        ctaText="Schedule a Live Demo"
        ctaHref="/contact"
        secondaryCtaText="Explore Capabilities"
        secondaryCtaHref="#capabilities"
        icon={
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2.5 shadow-glow">
            <Users className="h-10 w-10 text-brand" />
          </div>
        }
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
                Optimizing Labour Deployment &amp;{" "}
                <span className="text-gradient">Industrial Productivity</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Acceleron's WFM solutions integrate seamlessly with Enterprise Resource Planning (ERP), Attendance Management, and Payroll systems to maintain unified workforce records and support accurate payroll processing. By automating rotational shift planning and skill matching, we eliminate frontline bottlenecks and reduce labor cost variances.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="pt-4 flex flex-wrap gap-4">
                <div className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">ERP &amp; Payroll Synced</div>
                    <div className="text-xs text-muted-foreground">Automated overtime &amp; wage reconciliations</div>
                  </div>
                </div>
                <div className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">Skill Matrix Allocation</div>
                    <div className="text-xs text-muted-foreground">Certified operators matched to work orders</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-border/70 bg-muted/20 p-8 space-y-6 shadow-card">
                <div className="text-xs font-bold uppercase tracking-widest text-brand-red">
                  WFM At A Glance
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Transforming Plant Labour Operations
                </h3>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Eliminates scheduling friction across complex multi-shift rosters.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Enforces statutory rest periods and maximum work hour regulations.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Provides live supervisory dashboards on line pacing and idle hours.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Integrates with SAP HCM, SuccessFactors, and biometric gates.</span>
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

      {/* SECTION: CORE CAPABILITIES & MODULES */}
      <section id="capabilities" className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 sm:py-24">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red mb-3">
              Capabilities &amp; Features
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Core Capabilities &amp; <span className="text-gradient">Functional Modules</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Engineered to support manufacturing lines, industrial plants, maintenance depots, and field teams.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {CAPABILITIES.map((cap, idx) => (
            <Reveal key={cap.title} delay={idx * 0.1}>
              <div className="rounded-3xl border border-border/70 bg-card p-8 h-full shadow-card hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-12 w-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center">
                      <cap.icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-muted text-muted-foreground">
                      {cap.metric}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{cap.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{cap.desc}</p>
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
              Workforce Operations
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              5-Phase Workforce Execution Workflow
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              From automated shift roster creation to live shop-floor tracking and payroll reconciliation.
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
              Measurable outcomes in plant throughput, overtime reduction, and labour compliance governance.
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
              Transform Your Workforce Scheduling &amp; Labour Productivity
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Schedule an architecture consultation with our workforce engineering leads to review your shift rosters, biometric integrations, and ERP payroll sync.
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
