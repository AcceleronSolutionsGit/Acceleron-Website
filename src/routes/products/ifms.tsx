import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Truck,
  CheckCircle2,
  Calendar,
  Smartphone,
  History,
  Timer,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Phone,
  Mail,
  ShieldCheck,
  Layers,
  Wrench,
  MapPin,
} from "lucide-react";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { PageHero } from "../../components/ui/PageHero";
import { ProcessFlow } from "../../components/ui/ProductShowcase";
import { getAssetUrl } from "../../lib/assets";

export const Route = createFileRoute("/products/ifms")({
  head: () => ({
    meta: [
      {
        title: "iFMS - Intelligent Field Management System | Acceleron Solutions",
      },
      {
        name: "description",
        content:
          "iFMS is an advanced field service management platform optimizing mobile workforce dispatch, machinery servicing, spare parts requisition, and SLA compliance.",
      },
    ],
  }),
  component: IFMSProductPage,
});

const CAPABILITIES = [
  {
    title: "Smart Dispatch & Scheduling",
    desc: "Automated allocation of service requests based on technician skill sets, certifications, tools, and geographic proximity.",
    icon: MapPin,
    metric: "Intelligent Triage",
  },
  {
    title: "Mobile Field Execution",
    desc: "An intuitive mobile application enabling technicians to access service histories, log work performed, capture digital signatures and request spare parts on-site.",
    icon: Smartphone,
    metric: "Offline-Ready App",
  },
  {
    title: "Asset & Service History Tracking",
    desc: "A centralized repository of machinery service records, maintenance schedules, telemetry logs, and warranty statuses.",
    icon: History,
    metric: "360° Equipment View",
  },
  {
    title: "SLA & Performance Monitoring",
    desc: "Real-time tracking of response and resolution timelines against agreed Service Level Agreements (SLAs).",
    icon: Timer,
    metric: "Guaranteed SLA",
  },
];

const BUSINESS_BENEFITS = [
  {
    title: "Reduced MTTR & First-Time Fix",
    metric: "Faster MTTR",
    desc: "Reduced mean time to repair (MTTR) and improved first-time fix performance through instant parts availability.",
  },
  {
    title: "Enhanced Customer Satisfaction",
    metric: "+40% CSAT",
    desc: "Enhanced customer satisfaction through transparent communication, live technician tracking, and faster service delivery.",
  },
  {
    title: "Paperless Field Operations",
    metric: "100% Digital",
    desc: "Streamlined field operations with eliminated paperwork, instant digital sign-offs, and automated job card audits.",
  },
  {
    title: "Unified Warranty & Inventory Sync",
    metric: "Zero Leakage",
    desc: "Direct integration connecting spare parts warehouses, warranty claim validation, and billing engines.",
  },
];

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Service Ticket Ingestion",
    desc: "Customer inquiries, web portal tickets, or IoT machinery alerts generate prioritized work orders.",
  },
  {
    step: "02",
    title: "Smart Dispatch",
    desc: "Dispatch engine allocates the nearest certified technician with matching equipment expertise.",
  },
  {
    step: "03",
    title: "Diagnostic & Parts Requisition",
    desc: "Technician inspects asset history on mobile app and requisitions required spare parts in real-time.",
  },
  {
    step: "04",
    title: "Execution & Digital Sign-Off",
    desc: "Repairs performed, checklists validated, and customer digital signature captured on-site.",
  },
  {
    step: "05",
    title: "ERP & SLA Closure",
    desc: "Job cards close, inventory decrements in ERP, and warranty claims or commercial billing fire automatically.",
  },
];

function IFMSProductPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* HERO BANNER */}
      <PageHero
        badge="CX SOLUTIONS • FIELD SERVICE MANAGEMENT"
        title="iFMS – Intelligent Field Management System"
        subtitle="iFMS (Intelligent Field Management System) is an advanced field service management platform designed to optimize mobile workforce operations, equipment servicing and customer support delivery. It connects dispatch centres with field technicians in real time, enabling faster response, efficient spare parts utilization and consistent service quality."
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: "CX Solutions", href: "/products" },
          { label: "iFMS" },
        ]}
        image="/products/featured-applications/Intelligent Feild Service Management.png"
        ctaText="Schedule a Live Demo"
        ctaHref="/contact"
        secondaryCtaText="Explore Capabilities"
        secondaryCtaHref="#capabilities"
        icon={
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2.5 shadow-glow">
            <img
              src={getAssetUrl("/IFSM.png")}
              alt="iFMS"
              className="h-10 w-10 object-contain"
            />
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
                Empowering Frontline Engineers with{" "}
                <span className="text-gradient">Real-Time Field Telemetry</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                iFMS integrates with Enterprise Resource Planning (ERP), inventory management, and customer warranty databases to provide end-to-end service visibility and support coordinated field operations. By giving technicians complete asset histories and direct parts requisition tools, field teams resolve machinery breakdowns on the first visit.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="pt-4 flex flex-wrap gap-4">
                <div className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">ERP &amp; Inventory Synced</div>
                    <div className="text-xs text-muted-foreground">Automated parts requisition &amp; billing</div>
                  </div>
                </div>
                <div className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">Intelligent Dispatch</div>
                    <div className="text-xs text-muted-foreground">Skill, proximity &amp; SLA-based allocation</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-border/70 bg-muted/20 p-8 space-y-6 shadow-card">
                <div className="text-xs font-bold uppercase tracking-widest text-brand-red">
                  iFMS At A Glance
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Transforming Field Service Execution
                </h3>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Reduces call assignment delay from 60 mins to under 2 mins.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Instant access to complete machinery service histories and manuals.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Captures digital customer signatures and photo evidence on-site.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Live GPS routing and proactive SLA breach warnings for supervisors.</span>
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

      {/* SECTION: CORE CAPABILITIES */}
      <section id="capabilities" className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 sm:py-24">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red mb-3">
              Capabilities &amp; Features
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Core Capabilities &amp; <span className="text-gradient">Field Modules</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Engineered for heavy industrial equipment, machinery dealerships, fleet operators, and field service contractors.
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
              Field Execution
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              5-Phase Field Service Lifecycle
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              From automated ticket creation and smart dispatch to on-site digital repair and ERP sign-off.
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
              Proven operational gains across customer retention, technician utilization, and warranty compliance.
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
              Optimize Your Field Service Operations with iFMS
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Consult with our field service software practice leads to review your dispatch protocols, mobile app customizations, and ERP inventory integration.
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
