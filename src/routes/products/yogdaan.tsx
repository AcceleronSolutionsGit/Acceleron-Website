import { createFileRoute, Link } from "@tanstack/react-router";
import {
  HeartHandshake,
  CheckCircle2,
  Smile,
  Lightbulb,
  Award,
  CheckSquare,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Phone,
  Mail,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { PageHero } from "../../components/ui/PageHero";
import { ProcessFlow } from "../../components/ui/ProductShowcase";
import { getAssetUrl } from "../../lib/assets";

export const Route = createFileRoute("/products/yogdaan")({
  head: () => ({
    meta: [
      {
        title:
          "YOGDAAN - Employee Engagement & Feedback Platform | Acceleron Solutions",
      },
      {
        name: "description",
        content:
          "YOGDAAN digital employee engagement and feedback platform for pulse surveys, suggestion innovation boxes, peer recognition rewards, and continuous feedback loops.",
      },
    ],
  }),
  component: YogdaanProductPage,
});

const CORE_MODULES = [
  {
    title: "Pulse Surveys & Feedback Portals",
    desc: "Regular, short digital surveys to capture employee sentiment, workplace satisfaction and well-being metrics.",
    icon: Smile,
    metric: "Live Sentiment Pulse",
  },
  {
    title: "Suggestion & Innovation Boxes",
    desc: "Structured channels for employees across shop floors and offices to share process improvement ideas and operational innovations.",
    icon: Lightbulb,
    metric: "Grassroots Kaizen",
  },
  {
    title: "Recognition & Reward Frameworks",
    desc: "Digital peer-to-peer and manager-led recognition through badges, milestone celebrations and appreciation notes.",
    icon: Award,
    metric: "Peer Appreciation",
  },
  {
    title: "Action Tracking & Resolution",
    desc: "Transparent feedback mechanisms that enable employee submissions to be reviewed, assigned and addressed by management.",
    icon: CheckSquare,
    metric: "Closed-Loop Action",
  },
];

const BUSINESS_BENEFITS = [
  {
    title: "Stronger Organizational Loyalty",
    metric: "+35% Engagement",
    desc: "Improved employee morale, engagement and organizational loyalty across industrial sites.",
  },
  {
    title: "Grassroots Operational Insights",
    metric: "Grassroots Kaizen",
    desc: "Valuable grassroots insights into operational bottlenecks and opportunities to improve workplace practices.",
  },
  {
    title: "Pre-Empts Attrition Risk",
    metric: "Lower Churn",
    desc: "Measurable employee sentiment tracking over time to help identify potential attrition risks early.",
  },
  {
    title: "Continuous Workplace Dialogue",
    metric: "100% Transparent",
    desc: "Transforms feedback from an annual HR exercise into an ongoing, organization-wide dialogue.",
  },
];

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Idea & Feedback Submission",
    desc: "Employees submit improvement ideas, safety suggestions, or quick pulse survey responses.",
  },
  {
    step: "02",
    title: "Category & Sentiment Tagging",
    desc: "Input is categorized by plant section, topic, and sentiment severity for swift triage.",
  },
  {
    step: "03",
    title: "Departmental Review",
    desc: "Department heads review suggestions, assess feasibility, and assign implementation owners.",
  },
  {
    step: "04",
    title: "Transparent Action Tracking",
    desc: "Submitters receive real-time notifications on the status, testing, and rollout of their ideas.",
  },
  {
    step: "05",
    title: "Recognition & Milestone Awards",
    desc: "High-impact innovations rewarded with digital badges, company-wide spotlights, and reward points.",
  },
];

function YogdaanProductPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* HERO BANNER */}
      <PageHero
        badge="PEOPLE SOLUTIONS • EMPLOYEE ENGAGEMENT"
        title="YOGDAAN"
        subtitle="YOGDAN is an interactive digital employee engagement and feedback platform designed to bridge communication gaps between leadership and employees. Through accessible channels for sharing feedback, conducting pulse surveys and exchanging ideas, the platform helps organizations foster an inclusive workplace culture and drive continuous improvement."
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: "People Solutions", href: "/products" },
          { label: "Yogdaan" },
        ]}
        image="/Office_View_1.jpg"
        ctaText="Schedule a Live Demo"
        ctaHref="/contact"
        secondaryCtaText="Explore Modules"
        secondaryCtaHref="#modules"
        icon={
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2.5 shadow-glow">
            <HeartHandshake className="h-10 w-10 text-brand" />
          </div>
        }
      />

      {/* SECTION: OVERVIEW & CULTURAL IMPACT */}
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
                Employee Engagement &amp;{" "}
                <span className="text-gradient">Continuous Dialogue</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                YOGDAN helps transform feedback from an annual HR exercise into an ongoing, organization-wide dialogue, supporting stronger employee morale, participation, and retention. Whether deployed across industrial assembly plants or corporate offices, it empowers frontline workers to voice ideas that improve productivity and safety.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="pt-4 flex flex-wrap gap-4">
                <div className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">Grassroots Kaizen</div>
                    <div className="text-xs text-muted-foreground">Shop-floor ideas linked to action plans</div>
                  </div>
                </div>
                <div className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">Gamified Recognition</div>
                    <div className="text-xs text-muted-foreground">Digital badges &amp; milestone celebrations</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-border/70 bg-muted/20 p-8 space-y-6 shadow-card">
                <div className="text-xs font-bold uppercase tracking-widest text-brand-red">
                  YOGDAAN At A Glance
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Transforming Workplace Culture
                </h3>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Anonymous &amp; identified suggestion pipelines with SLA tracking.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Quarterly and monthly pulse surveys assessing team wellness and morale.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Peer-to-peer appreciation badges building mutual trust across shifts.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Actionable executive dashboards highlighting department sentiment trends.</span>
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

      {/* SECTION: CORE MODULES */}
      <section id="modules" className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 sm:py-24">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red mb-3">
              Capabilities &amp; Features
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Core Modules &amp; <span className="text-gradient">Engagement Framework</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Engineered to foster transparent communication and celebrate high-performance contributions.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {CORE_MODULES.map((mod, idx) => (
            <Reveal key={mod.title} delay={idx * 0.1}>
              <div className="rounded-3xl border border-border/70 bg-card p-8 h-full shadow-card hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-12 w-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center">
                      <mod.icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-muted text-muted-foreground">
                      {mod.metric}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{mod.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{mod.desc}</p>
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
              Engagement Lifecycle
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              5-Phase Continuous Engagement Workflow
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              From employee idea submission to leadership assignment, transparent tracking, and celebration.
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
              Strengthening operational retention, workplace culture, and proactive problem-solving.
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
              Foster a Culture of Innovation &amp; Recognition with YOGDAAN
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Schedule a demonstration with our employee experience consultants to see how YOGDAAN transforms workplace engagement and sentiment analytics.
            </p>
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <Link
                to="/contact"
                className="rounded-xl bg-brand-gradient px-8 py-4 text-sm font-bold text-white shadow-glow hover:scale-[1.02] transition-transform"
              >
                Schedule Platform Demo
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
