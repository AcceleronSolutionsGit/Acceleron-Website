import { createFileRoute, Link } from "@tanstack/react-router";
import {
  FileCheck2,
  CheckCircle2,
  GitBranch,
  Smartphone,
  Timer,
  History,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Phone,
  Mail,
  ShieldCheck,
  Building,
} from "lucide-react";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { PageHero } from "../../components/ui/PageHero";
import { ProcessFlow } from "../../components/ui/ProductShowcase";
import { getAssetUrl } from "../../lib/assets";

export const Route = createFileRoute("/products/approval-management")({
  head: () => ({
    meta: [
      {
        title:
          "Approval Management System (AMS) | Acceleron Solutions",
      },
      {
        name: "description",
        content:
          "Enterprise Approval Management System (AMS) for dynamic workflow routing, mobile sign-offs, bottleneck SLA tracking, and audit-ready governance.",
      },
    ],
  }),
  component: ApprovalManagementProductPage,
});

const FUNCTIONALITIES = [
  {
    title: "Dynamic Workflow Designer",
    desc: "Flexible configuration of approval routes based on departmental requirements, financial thresholds and organizational hierarchies.",
    icon: GitBranch,
    metric: "Custom Hierarchies",
  },
  {
    title: "Mobile & Web Approvals",
    desc: "Instant notifications and convenient approval capabilities, enabling executives and managers to review and process requests remotely.",
    icon: Smartphone,
    metric: "One-Click Sign-off",
  },
  {
    title: "Bottleneck & SLA Tracking",
    desc: "Real-time monitoring of pending approvals, supported by automated reminders and escalation triggers to help minimize delays.",
    icon: Timer,
    metric: "Zero Bottlenecks",
  },
  {
    title: "Complete Audit Trail",
    desc: "Comprehensive logging of actions, timestamps, comments and approval decisions to support compliance and governance reviews.",
    icon: History,
    metric: "100% Traceable",
  },
];

const BUSINESS_BENEFITS = [
  {
    title: "Accelerated Approval Cycles",
    metric: "-75% Cycle Time",
    desc: "Reduces approval cycle times and administrative delays across corporate and plant requests.",
  },
  {
    title: "Transparency & Accountability",
    metric: "Total Visibility",
    desc: "Improves transparency and accountability across departmental decision-making and DOA policies.",
  },
  {
    title: "Strengthened Governance",
    metric: "Audit-Ready",
    desc: "Strengthens governance and audit readiness through centralized, tamper-evident digital records.",
  },
  {
    title: "Seamless ERP Coordination",
    metric: "Instant Handshake",
    desc: "Automatically triggers downstream financial and procurement actions upon final executive sign-off.",
  },
];

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Request Initiation",
    desc: "Employee initiates capex request, policy deviation, or purchase requisition with digital attachments.",
  },
  {
    step: "02",
    title: "Hierarchical Routing",
    desc: "Rules engine directs request along defined delegation-of-authority matrix based on financial thresholds.",
  },
  {
    step: "03",
    title: "Notification & Mobile Review",
    desc: "Authorizers receive push alerts, view summary dossiers, and approve or reject with comments.",
  },
  {
    step: "04",
    title: "Escalation & SLA Countdown",
    desc: "Automated countdown alerts re-route stalled requests to designated secondary delegates.",
  },
  {
    step: "05",
    title: "ERP & Downstream Trigger",
    desc: "Final authorization automatically releases purchase orders, contract awards, or ledger allocations in ERP.",
  },
];

function ApprovalManagementProductPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* HERO BANNER */}
      <PageHero
        badge="OFFICE DIGITIZATION • WORKFLOW APPROVALS"
        title="Approval Management System (AMS)"
        subtitle="The Approval Management System (AMS) is an enterprise workflow automation platform designed to simplify internal decision-making and reduce bottlenecks, delays and paper-based processes. By digitizing approval hierarchies, delegation rules and multi-level sign-offs, the platform enables corporate requests—from capital expenditure proposals to operational policy changes—to move through defined workflows with greater efficiency, transparency and traceability."
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: "Office Digitization", href: "/products" },
          { label: "Approval Management" },
        ]}
        image="/Office_View_1.jpg"
        ctaText="Schedule a Live Demo"
        ctaHref="/contact"
        secondaryCtaText="Explore Functionalities"
        secondaryCtaHref="#functionalities"
        icon={
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2.5 shadow-glow">
            <FileCheck2 className="h-10 w-10 text-brand" />
          </div>
        }
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
                Streamlining Enterprise Workflows &amp;{" "}
                <span className="text-gradient">Multi-Tier Sign-offs</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Acceleron's AMS integrates with ERP, HRMS, and financial software to trigger relevant downstream processes once approvals are finalized, ensuring smoother coordination across enterprise functions. It completely eliminates lost email threads, paper chasing, and opaque decision delays.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="pt-4 flex flex-wrap gap-4">
                <div className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">ERP &amp; HRMS Synced</div>
                    <div className="text-xs text-muted-foreground">Automated trigger upon final sign-off</div>
                  </div>
                </div>
                <div className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">DOA Matrix Governance</div>
                    <div className="text-xs text-muted-foreground">Enforces delegations of authority strictly</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-border/70 bg-muted/20 p-8 space-y-6 shadow-card">
                <div className="text-xs font-bold uppercase tracking-widest text-brand-red">
                  AMS At A Glance
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Transforming Corporate Approvals
                </h3>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Eliminates slow, lost paper memos and unstructured email approvals.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Enforces delegation-of-authority matrices based on capex limits.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Enables instant mobile reviews with full supporting documents.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Provides unalterable audit trails for internal and external audits.</span>
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
              Core Functionalities &amp; <span className="text-gradient">Workflow Engine</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Engineered to support corporate headquarters, multi-plant operations, and distributed leadership teams.
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
              Approval Lifecycle
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              5-Phase Enterprise Sign-off Workflow
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              From request submission and DOA matrix routing to mobile review, escalation tracking, and downstream ERP execution.
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
              Accelerating corporate agility while enforcing iron-clad financial governance.
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
              Digitize Your Enterprise Approvals with Acceleron AMS
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Schedule an architecture consultation with our digital workplace practice to map your approval hierarchies, delegation matrices, and ERP triggers.
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
