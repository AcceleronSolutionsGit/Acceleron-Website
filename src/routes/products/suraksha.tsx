import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldAlert,
  ShieldCheck,
  CheckCircle2,
  FileText,
  ClipboardCheck,
  GraduationCap,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Phone,
  Mail,
  HardHat,
  Flame,
} from "lucide-react";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { PageHero } from "../../components/ui/PageHero";
import { ProcessFlow } from "../../components/ui/ProductShowcase";
import { getAssetUrl } from "../../lib/assets";

export const Route = createFileRoute("/products/suraksha")({
  head: () => ({
    meta: [
      {
        title: "SURAKSHA - Industrial Safety Governance | Acceleron Solutions",
      },
      {
        name: "description",
        content:
          "SURAKSHA digital industrial safety management platform for incident reporting, Permit-to-Work (PTW) governance, safety audits, and ISO 45001 compliance.",
      },
    ],
  }),
  component: SurakshaProductPage,
});

const FUNCTIONALITIES = [
  {
    title: "Incident & Accident Reporting",
    desc: "Rapid digital logging of near-misses, unsafe acts and incidents, supported by automated escalation workflows.",
    icon: ShieldAlert,
    metric: "Instant Logging",
  },
  {
    title: "Permit-to-Work (PTW) Governance",
    desc: "Digital authorization workflows for high-risk activities such as hot work, confined space entry and working at height.",
    icon: Flame,
    metric: "Zero-Paper PTW",
  },
  {
    title: "Safety Audits & Inspections",
    desc: "Scheduled, checklist-based walkthroughs and audits linked to Corrective and Preventive Action (CAPA) tracking.",
    icon: ClipboardCheck,
    metric: "Closed-Loop CAPA",
  },
  {
    title: "Safety Training & Toolbox Talks",
    desc: "Digital record-keeping of mandatory safety inductions, toolbox meeting attendance and certification validity.",
    icon: GraduationCap,
    metric: "Induction Verified",
  },
];

const BUSINESS_BENEFITS = [
  {
    title: "Proactive Risk Reduction",
    metric: "Zero Harm Target",
    desc: "Proactive reporting and risk identification to help reduce workplace accidents and environmental hazards.",
  },
  {
    title: "Centralized Audit Trails",
    metric: "100% Traceable",
    desc: "Centralized digital audit trails for safety interventions, investigations and corrective actions.",
  },
  {
    title: "Greater Employee Confidence",
    metric: "High Safety Morale",
    desc: "Greater employee confidence through improved safety visibility, accountability and workplace practices.",
  },
  {
    title: "ISO 45001 & Statutory Readiness",
    metric: "ISO 45001 Ready",
    desc: "Continuous compliance monitoring aligned with ISO 45001 and national occupational safety regulations.",
  },
];

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Hazard / Incident Capture",
    desc: "Frontline worker logs unsafe condition, near-miss, or incident with photo proof and geo-location.",
  },
  {
    step: "02",
    title: "Automated Triage & Escalation",
    desc: "Safety officers receive immediate mobile alerts with standardized severity matrix scoring.",
  },
  {
    step: "03",
    title: "PTW Digital Clearance",
    desc: "High-risk tasks (hot work, confined space) undergo structured digital checklist verification and sign-off.",
  },
  {
    step: "04",
    title: "CAPA Assignment & Remediation",
    desc: "Corrective and preventive actions are routed to maintenance leads with SLA response countdowns.",
  },
  {
    step: "05",
    title: "Audit Sign-Off & ISO Reporting",
    desc: "Verified remediation closes the ticket and updates plant compliance dashboards and audit registries.",
  },
];

function SurakshaProductPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* HERO BANNER */}
      <PageHero
        badge="PEOPLE SOLUTIONS • INDUSTRIAL SAFETY"
        title="SURAKSHA"
        subtitle="SURAKSHA is a digital industrial safety management solution designed to foster a proactive safety culture and strengthen compliance across plants, mines and project sites. By digitizing safety inspections, incident reporting and hazard identification, SURAKSHA helps organizations monitor workplace risks, improve safety governance and work towards their zero-harm objectives."
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: "People Solutions", href: "/products" },
          { label: "Suraksha" },
        ]}
        image="/utilities.jpg"
        ctaText="Schedule a Live Demo"
        ctaHref="/contact"
        secondaryCtaText="Explore Functionalities"
        secondaryCtaHref="#functionalities"
        icon={
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2.5 shadow-glow">
            <img
              src={getAssetUrl("/suraksha.png")}
              alt="Suraksha"
              className="h-10 w-10 object-contain"
            />
          </div>
        }
      />

      {/* SECTION: OVERVIEW & COMPLIANCE STANDARDS */}
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
                Industrial Safety Governance &amp;{" "}
                <span className="text-gradient">Incident Management</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                SURAKSHA is designed with reference to ISO 45001 and applicable statutory industrial health and safety regulations, supporting structured compliance monitoring and audit readiness. By shifting from reactive incident handling to proactive hazard reporting, enterprises instill accountability from shop floor to the executive boardroom.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="pt-4 flex flex-wrap gap-4">
                <div className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">ISO 45001 Aligned</div>
                    <div className="text-xs text-muted-foreground">Standardized EHS compliance &amp; audits</div>
                  </div>
                </div>
                <div className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">Digital PTW Workflows</div>
                    <div className="text-xs text-muted-foreground">Hot work, height &amp; confined spaces</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-border/70 bg-muted/20 p-8 space-y-6 shadow-card">
                <div className="text-xs font-bold uppercase tracking-widest text-brand-red">
                  SURAKSHA At A Glance
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Zero-Harm Workplace Safety
                </h3>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Instant near-miss and incident reporting with photo evidence.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Eliminates hazardous paper permits with multi-stage digital authorizations.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Tracks safety induction validity and daily toolbox meeting participation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Automated escalation triggers for unresolved CAPA action items.</span>
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
              Core Functionalities &amp; <span className="text-gradient">Safety Governance</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Built for mining sites, heavy fabrication plants, refinery infrastructure, and power installations.
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
              Safety Lifecycle
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              5-Phase Safety Governance Workflow
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Continuous vigilance from initial hazard detection to permit authorization, CAPA, and ISO audits.
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
              Empowering frontline safety culture while guaranteeing statutory compliance across dangerous operations.
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
              Build a Zero-Harm Workplace with SURAKSHA
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Consult with our industrial safety architects to evaluate your plant permit workflows, incident registries, and ISO 45001 readiness.
            </p>
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <Link
                to="/contact"
                className="rounded-xl bg-brand-gradient px-8 py-4 text-sm font-bold text-white shadow-glow hover:scale-[1.02] transition-transform"
              >
                Schedule Safety Consultation
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
