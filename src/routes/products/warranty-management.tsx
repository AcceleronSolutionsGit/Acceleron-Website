import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  CheckCircle2,
  FileBadge,
  FileText,
  SlidersHorizontal,
  RefreshCw,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Phone,
  Mail,
  Wrench,
  Layers,
  History,
} from "lucide-react";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { PageHero } from "../../components/ui/PageHero";
import { ProcessFlow } from "../../components/ui/ProductShowcase";
import { getAssetUrl } from "../../lib/assets";

export const Route = createFileRoute("/products/warranty-management")({
  head: () => ({
    meta: [
      {
        title:
          "Customer Warranty Management - Claims & Protection | Acceleron Solutions",
      },
      {
        name: "description",
        content:
          "Enterprise Customer Warranty Management platform designed to streamline digital warranty registration, claim processing, validation workflows, and OEM cost recovery.",
      },
    ],
  }),
  component: WarrantyManagementProductPage,
});

const FUNCTIONALITIES = [
  {
    title: "Digital Warranty Registration",
    desc: "Seamless registration of equipment warranties, sub-assembly serial numbers, commissioning dates, and coverage periods at point of sale.",
    icon: FileBadge,
    metric: "Instant Commissioning",
  },
  {
    title: "Automated Claim Submission & Triage",
    desc: "Digital logging of warranty claims supported by IoT diagnostic logs, machine photos, failure codes, and technician notes.",
    icon: FileText,
    metric: "Fast-Track Logging",
  },
  {
    title: "Validation & Approval Workflows",
    desc: "Multi-tier approval routing to ensure adherence to warranty terms, excluded wear-and-tear items, and parts return policies.",
    icon: SlidersHorizontal,
    metric: "Fraud-Resistant",
  },
  {
    title: "OEM Recovery & Settlement",
    desc: "Tracking warranty claims against Original Equipment Manufacturers (OEMs) to facilitate structured, efficient cost recovery.",
    icon: RefreshCw,
    metric: "100% OEM Recovery",
  },
];

const BUSINESS_BENEFITS = [
  {
    title: "Reduced Claim Turnaround Time",
    metric: "-60% Turnaround",
    desc: "Reduced warranty claim processing time and administrative costs through automated eligibility checks.",
  },
  {
    title: "Transparent Dispute Resolution",
    metric: "Zero Ambiguity",
    desc: "More transparent dispute resolution, helping strengthen customer trust, brand credibility, and satisfaction.",
  },
  {
    title: "Improved OEM Cost Recovery",
    metric: "100% Traceable",
    desc: "Improved OEM cost recovery through structured failure data tracking, failed part tags, and digital audit trails.",
  },
  {
    title: "iFMS & Inventory Integration",
    metric: "Unified Sync",
    desc: "Direct synchronization with iFMS for instant validation of maintenance logs, component serial numbers, and replacements.",
  },
];

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Digital Warranty Enrollment",
    desc: "Equipment serial numbers, sub-assemblies, and warranty certificates logged upon commissioning.",
  },
  {
    step: "02",
    title: "Claim Submission & Telematics",
    desc: "Field technician or customer logs failure with machine photos, sensor telemetry, and diagnostic logs.",
  },
  {
    step: "03",
    title: "Eligibility Verification",
    desc: "System verifies maintenance adherence, active policy windows, and contractual coverage clauses.",
  },
  {
    step: "04",
    title: "Part Requisition & Repair",
    desc: "Approved claim automatically dispatches replacement parts via inventory sync without billing friction.",
  },
  {
    step: "05",
    title: "OEM Settlement & Closure",
    desc: "Scrap/return part logistics completed, and recovery claim dossier submitted to OEM for financial reimbursement.",
  },
];

function WarrantyManagementProductPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* HERO BANNER */}
      <PageHero
        badge="CX SOLUTIONS • WARRANTY MANAGEMENT"
        title="Customer Warranty Management"
        subtitle="Customer Warranty Management is an enterprise digital platform designed to streamline warranty registration, claim processing and validation workflows. By bringing greater transparency and efficiency to both customer-facing and service operations, the platform helps minimize dispute resolution time and supports compliance with OEM and internal warranty guidelines."
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: "CX Solutions", href: "/products" },
          { label: "Customer Warranty Management" },
        ]}
        image="/products/featured-applications/Customer Warranty Management Software - Acceleron Solutions.png"
        ctaText="Schedule a Live Demo"
        ctaHref="/contact"
        secondaryCtaText="Explore Functionalities"
        secondaryCtaHref="#functionalities"
        icon={
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2.5 shadow-glow">
            <ShieldCheck className="h-10 w-10 text-brand" />
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
                Streamlining Claims &amp;{" "}
                <span className="text-gradient">OEM Protection</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Our Customer Warranty Management platform integrates with iFMS and inventory management systems to automatically verify parts replacement history and service validity during claim processing. It protects dealerships and industrial distributors from unrecoverable warranty leakage while ensuring clients enjoy prompt warranty fulfillment.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="pt-4 flex flex-wrap gap-4">
                <div className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">iFMS &amp; Inventory Synced</div>
                    <div className="text-xs text-muted-foreground">Automated verification of service logs</div>
                  </div>
                </div>
                <div className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">OEM Cost Recovery</div>
                    <div className="text-xs text-muted-foreground">Complete audit trail for manufacturer settlements</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-border/70 bg-muted/20 p-8 space-y-6 shadow-card">
                <div className="text-xs font-bold uppercase tracking-widest text-brand-red">
                  Warranty At A Glance
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Protecting Margins &amp; Trust
                </h3>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Eliminates fraudulent and expired warranty claims automatically.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Verifies serial numbers and scheduled maintenance history in real-time.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Speeds up claim approvals from weeks to minutes with digital evidence.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Streamlines OEM reimbursement dossiers and scrap part tracking.</span>
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
              Core Functionalities &amp; <span className="text-gradient">Claims Architecture</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Engineered for capital machinery dealers, automotive suppliers, equipment builders, and field networks.
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
              Warranty Lifecycle
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              5-Phase Warranty &amp; Claims Lifecycle
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              From digital registration at commissioning to diagnostic logging, triage, replacement dispatch, and OEM settlement.
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
              Mitigating financial leakage, boosting claim settlement speed, and reinforcing client peace of mind.
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
              Protect Your Margins with Customer Warranty Management
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Schedule an architecture consultation with our warranty solutions practice to evaluate your claim validation rules, OEM recovery dossiers, and iFMS integration.
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
