import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Target,
  CheckCircle2,
  TrendingUp,
  MessageSquareCheck,
  Users2,
  SlidersHorizontal,
  GraduationCap,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Phone,
  Mail,
  ShieldCheck,
  Award,
} from "lucide-react";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { PageHero } from "../../components/ui/PageHero";
import { ProcessFlow } from "../../components/ui/ProductShowcase";
import { getAssetUrl } from "../../lib/assets";

export const Route = createFileRoute("/products/appraisal-management")({
  head: () => ({
    meta: [
      {
        title:
          "Employee Appraisal Management System (EAMS) | Acceleron Solutions",
      },
      {
        name: "description",
        content:
          "Enterprise Employee Appraisal Management System (EAMS) for OKR/KPI cascading, 360-degree evaluations, continuous coaching check-ins, and merit-based career development.",
      },
    ],
  }),
  component: AppraisalManagementProductPage,
});

const FUNCTIONALITIES = [
  {
    title: "Goal Setting & KPI Alignment",
    desc: "Cascading organizational objectives down to departmental and individual Key Performance Indicators (KPIs) or Objectives and Key Results (OKRs).",
    icon: Target,
    metric: "Cascaded OKRs",
  },
  {
    title: "Continuous Feedback & Check-ins",
    desc: "Digital records of regular milestone discussions, coaching inputs, performance journals, and mid-year progress reviews.",
    icon: MessageSquareCheck,
    metric: "Continuous Coaching",
  },
  {
    title: "Multi-Rater (360°) Evaluations",
    desc: "Comprehensive appraisal workflows incorporating self-assessments, manager reviews, peer feedback and cross-departmental inputs.",
    icon: Users2,
    metric: "360-Degree Inputs",
  },
  {
    title: "Calibration & Promotion Analytics",
    desc: "Structured review processes and analytics dashboards supporting fair, consistent ratings and transparent compensation and promotion decisions.",
    icon: SlidersHorizontal,
    metric: "Unbiased Calibration",
  },
];

const BUSINESS_BENEFITS = [
  {
    title: "Objective & Data-Driven",
    metric: "100% Merit-Based",
    desc: "More objective, transparent and data-driven performance appraisals eliminating subjective bias.",
  },
  {
    title: "Strategic Goal Alignment",
    metric: "Goal Harmony",
    desc: "Clear alignment between individual and workforce efforts and long-term strategic business goals.",
  },
  {
    title: "Motivation & Retention",
    metric: "High Retention",
    desc: "Improved employee motivation and retention through fair recognition and structured career growth.",
  },
  {
    title: "Structured Career Development",
    metric: "Targeted Upskilling",
    desc: "Connects performance evaluation outcomes with individual training recommendations and career roadmaps.",
  },
];

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Objective & KPI Cascading",
    desc: "Strategic enterprise goals cascade down into quantifiable quarterly and annual team OKRs.",
  },
  {
    step: "02",
    title: "Continuous Check-Ins",
    desc: "Managers and employees log regular milestone discussions, coaching notes, and deliverable progress.",
  },
  {
    step: "03",
    title: "360° Multi-Rater Assessment",
    desc: "Self-appraisals combined with peer reviews, cross-functional stakeholder inputs, and direct manager grading.",
  },
  {
    step: "04",
    title: "Leadership Calibration",
    desc: "Analytics dashboards guide calibration committees to normalize bell curves and prevent evaluation bias.",
  },
  {
    step: "05",
    title: "Development & Career Growth",
    desc: "Final ratings trigger tailored LMS learning modules, merit increment adjustments, and succession plans.",
  },
];

function AppraisalManagementProductPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* HERO BANNER */}
      <PageHero
        badge="PEOPLE SOLUTIONS • PERFORMANCE APPRAISAL"
        title="Employee Appraisal Management System (EAMS)"
        subtitle="The Employee Appraisal Management System (EAMS) is a comprehensive digital performance management platform designed to align individual employee goals with organizational strategic objectives. It enables continuous performance tracking, periodic evaluations, objective-setting through KPIs and OKRs, and merit-based career progression."
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: "People Solutions", href: "/products" },
          { label: "Appraisal Management" },
        ]}
        image="/products/featured-applications/Employee Appraisal Managemnt System - Acceleron Solutions.png"
        ctaText="Schedule a Live Demo"
        ctaHref="/contact"
        secondaryCtaText="Explore Functionalities"
        secondaryCtaHref="#functionalities"
        icon={
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2.5 shadow-glow">
            <Target className="h-10 w-10 text-brand" />
          </div>
        }
      />

      {/* SECTION: OVERVIEW & DEVELOPMENT PLANNING */}
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
                Performance Governance &amp;{" "}
                <span className="text-gradient">Merit-Based Growth</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Acceleron's EAMS connects performance evaluation outcomes directly with individual training recommendations and structured career development roadmaps. By replacing archaic once-a-year appraisals with continuous milestone tracking and multi-rater evaluations, enterprises cultivate high accountability and retain top talent.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="pt-4 flex flex-wrap gap-4">
                <div className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">Cascaded OKRs &amp; KPIs</div>
                    <div className="text-xs text-muted-foreground">Organizational goals linked to individual output</div>
                  </div>
                </div>
                <div className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">360° Multi-Rater</div>
                    <div className="text-xs text-muted-foreground">Peer, manager &amp; cross-functional feedback</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-border/70 bg-muted/20 p-8 space-y-6 shadow-card">
                <div className="text-xs font-bold uppercase tracking-widest text-brand-red">
                  EAMS At A Glance
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Transforming Performance Appraisal
                </h3>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Eliminates annual review stress with continuous coaching journals.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Provides objective, data-backed 360-degree review matrices.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Fair calibration dashboards to normalize ratings across departments.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Automatically maps skill gaps to enterprise LMS learning roadmaps.</span>
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
              Core Functionalities &amp; <span className="text-gradient">Appraisal Architecture</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Engineered to support modern enterprises, engineering teams, plant leadership, and corporate divisions.
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
              Performance Lifecycle
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              5-Phase Performance Governance Workflow
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              From strategic OKR cascading to continuous coaching, 360-degree review, and merit-based advancement.
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
              Aligning workforce objectives with enterprise P&L results while developing future leaders.
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
              Align Goals &amp; Elevate Performance with Acceleron EAMS
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Schedule an architecture consultation with our human capital systems experts to configure your OKR frameworks, 360 review workflows, and calibration matrices.
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
