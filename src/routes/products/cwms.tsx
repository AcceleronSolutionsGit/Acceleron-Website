import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Boxes,
  CheckCircle2,
  Layers,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  UserCheck,
  ShieldAlert,
  Fingerprint,
  BarChart4,
  Phone,
  Mail,
  ShieldCheck,
  FileBadge,
} from "lucide-react";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { PageHero } from "../../components/ui/PageHero";
import { ProcessFlow } from "../../components/ui/ProductShowcase";
import { getAssetUrl } from "../../lib/assets";

export const Route = createFileRoute("/products/cwms")({
  head: () => ({
    meta: [
      {
        title:
          "Contractor Workforce Management System (CWMS) | Acceleron Solutions",
      },
      {
        name: "description",
        content:
          "Enterprise Contractor Workforce Management System (CWMS) for digital onboarding, statutory compliance, biometric gate access, safety inductions, and contractor billing.",
      },
    ],
  }),
  component: CWMSProductPage,
});

const FUNCTIONALITIES = [
  {
    title: "Digital Onboarding & Credentialing",
    desc: "Verification of contractor licenses, statutory compliance documents (PF, ESI, insurance), and professional certifications.",
    icon: FileBadge,
    metric: "100% Verified",
  },
  {
    title: "Safety Induction & Training Records",
    desc: "Digital safety training modules, certification validity tracking, and site-specific permit-to-work approvals.",
    icon: ShieldCheck,
    metric: "Safety Certified",
  },
  {
    title: "Attendance & Access Control",
    desc: "Biometric and RFID-based gate entry integrated with valid safety inductions and active work orders.",
    icon: Fingerprint,
    metric: "Biometric Gates",
  },
  {
    title: "Productivity & KPI Monitoring",
    desc: "Tracking task completion, milestone achievements, and compliance with site safety protocols.",
    icon: BarChart4,
    metric: "Output Tracking",
  },
];

const BUSINESS_BENEFITS = [
  {
    title: "Reduced Legal & Financial Risks",
    metric: "100% Compliant",
    desc: "Reduced legal, financial, and operational risks associated with third-party workforce management.",
  },
  {
    title: "Improved Site Safety",
    metric: "Zero Violations",
    desc: "Improved site safety through verification of training records and certifications before site entry.",
  },
  {
    title: "Streamlined Contractor Billing",
    metric: "Zero Ghost Hours",
    desc: "Streamlined contractor billing and transparent productivity tracking against biometric muster rolls.",
  },
  {
    title: "Greater Visibility & Control",
    metric: "Real-Time Roster",
    desc: "Greater visibility and control over contractor activities across industrial sites.",
  },
];

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Vendor & Worker Pre-Enrollment",
    desc: "Vendors upload worker KYC, medical certificates, PF/ESI registrations, and skill credentials via portal.",
  },
  {
    step: "02",
    title: "Verification & Safety Induction",
    desc: "Compliance teams review documents while workers undergo digital safety modules and site hazard training.",
  },
  {
    step: "03",
    title: "Biometric Credential Issuance",
    desc: "Workers receive RFID smartcards or facial biometric enrollment tied to authorized gates and shift rosters.",
  },
  {
    step: "04",
    title: "Gate Entry & Shift Logging",
    desc: "Automated turnstiles reject entry if safety certificates have expired or shift schedules do not align.",
  },
  {
    step: "05",
    title: "Billing & Audit Reconciliation",
    desc: "Biometric timestamps validate contractor invoices, eliminating ghost labor and overbilling discrepancies.",
  },
];

function CWMSProductPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* HERO BANNER */}
      <PageHero
        badge="INDUSTRIAL SOLUTIONS • CONTRACTOR WORKFORCE"
        title="Contractor Workforce Management System (CWMS)"
        subtitle="Acceleron develops and implements Contractor Workforce Management Systems (CWMS) designed to streamline contractor administration, strengthen compliance, and improve workforce productivity across large industrial sites. Our solutions provide a centralized digital platform to manage the entire contractor lifecycle, from onboarding and credential verification to daily attendance, safety compliance, and payroll validation."
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: "Industrial Solutions", href: "/products" },
          { label: "CWMS" },
        ]}
        image="/CWMS_Banner.png"
        ctaText="Schedule a Live Demo"
        ctaHref="/contact"
        secondaryCtaText="Explore Functionalities"
        secondaryCtaHref="#functionalities"
        icon={
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2.5 shadow-glow">
            <UserCheck className="h-10 w-10 text-brand" />
          </div>
        }
      />

      {/* SECTION: OVERVIEW & COMPLIANCE GOVERNANCE */}
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
                Statutory Compliance &amp; Gate Control for{" "}
                <span className="text-gradient">Industrial Plants</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Acceleron's CWMS solutions support statutory labour law compliance, internal corporate governance standards, and plant safety requirements through centralized documentation, verification, and monitoring. Automated gate barriers ensure no worker enters without active insurance, validated medical certificates, and current safety training.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="pt-4 flex flex-wrap gap-4">
                <div className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">Statutory Labor Law</div>
                    <div className="text-xs text-muted-foreground">Automated PF, ESI, and wage audit</div>
                  </div>
                </div>
                <div className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">Biometric Gate Interlock</div>
                    <div className="text-xs text-muted-foreground">Blocks uncertified entry automatically</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-border/70 bg-muted/20 p-8 space-y-6 shadow-card">
                <div className="text-xs font-bold uppercase tracking-widest text-brand-red">
                  CWMS At A Glance
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Transforming Contract Labor Governance
                </h3>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Eliminates labor law non-compliance fines and statutory violations.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Enforces safety induction renewal before turnstile badge activation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Cross-verifies vendor invoices against biometric muster records.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Real-time evacuation muster lists in event of plant emergency.</span>
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
              Core Functionalities &amp; <span className="text-gradient">Governance Architecture</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Engineered to handle thousands of contract workers across complex plant gates, refineries, and mining sites.
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
              Contractor Lifecycle
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              5-Phase Workforce Governance Workflow
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              From online vendor onboarding to automated biometric gate access and wage invoice audit.
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
              Mitigates legal liability, secures work zones, and stops billing leakage across complex facilities.
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
              Secure Your Plant Gates and Automate Contractor Compliance
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Connect with our workforce compliance practice leads to discuss biometric gate hardware, statutory compliance modules, and ERP muster integrations.
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
