import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Brain,
  CheckCircle2,
  FileScan,
  TrendingUp,
  Bot,
  Workflow,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Phone,
  Mail,
  ShieldCheck,
  Cpu,
  Layers,
} from "lucide-react";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { PageHero } from "../../components/ui/PageHero";
import { ProcessFlow } from "../../components/ui/ProductShowcase";
import { getAssetUrl } from "../../lib/assets";

export const Route = createFileRoute("/products/acceledge-ai")({
  head: () => ({
    meta: [
      {
        title:
          "AccelEdge.ai - Intelligent Automation & Cognitive AI | Acceleron Solutions",
      },
      {
        name: "description",
        content:
          "AccelEdge.ai is an enterprise artificial intelligence and cognitive automation framework combining IDP, predictive operational analytics, process mining, and cognitive virtual assistants.",
      },
    ],
  }),
  component: AccelEdgeAIProductPage,
});

const CAPABILITIES = [
  {
    title: "Intelligent Document Processing (IDP)",
    desc: "Automated extraction, classification and validation of data from unstructured documents, including invoices, customs forms, and technical contracts.",
    icon: FileScan,
    metric: "99%+ Accuracy",
  },
  {
    title: "Predictive Operational Analytics",
    desc: "Advanced AI models that help forecast equipment failures, parts demand fluctuations, and potential supply chain bottlenecks.",
    icon: TrendingUp,
    metric: "Predictive Uptime",
  },
  {
    title: "Cognitive Virtual Assistants",
    desc: "Intelligent conversational interfaces that provide employees and customers with convenient access to enterprise knowledge, manuals, and support.",
    icon: Bot,
    metric: "24/7 Cognitive Support",
  },
  {
    title: "Process Mining & Optimization",
    desc: "AI-driven discovery and analysis of workflow inefficiencies, helping identify opportunities for continuous process improvement and cycle-time reduction.",
    icon: Workflow,
    metric: "Continuous Kaizen",
  },
];

const BUSINESS_BENEFITS = [
  {
    title: "Automated Document Processing",
    metric: "-80% Data Entry",
    desc: "Reduces manual data entry and repetitive information-processing tasks through automated cognitive document extraction.",
  },
  {
    title: "Informed Decision-Making",
    metric: "Insight-Led Ops",
    desc: "Supports informed, proactive decision-making through predictive operational insights and demand forecasting.",
  },
  {
    title: "Operational Agility & Scale",
    metric: "Cognitive Scale",
    desc: "Improves organizational agility and creates opportunities for continuous innovation across enterprise business functions.",
  },
  {
    title: "Continuous Workflow Optimization",
    metric: "Zero Bottlenecks",
    desc: "Process mining algorithms identify hidden operational friction, unblocking cross-departmental bottlenecks.",
  },
];

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Unstructured Data Ingestion",
    desc: "Invoices, paper scans, engineering manuals, sensory telemetry, and contracts ingested across touchpoints.",
  },
  {
    step: "02",
    title: "Cognitive Parsing & Extraction",
    desc: "Deep neural models classify documents, extract tabular line items, and validate entity fields with OCR.",
  },
  {
    step: "03",
    title: "Enterprise Master Validation",
    desc: "Extracted data cross-referenced against ERP purchase orders, vendor registers, and statutory tax rules.",
  },
  {
    step: "04",
    title: "Predictive AI & Anomaly Flagging",
    desc: "Predictive models detect operational anomalies, demand trends, and failure patterns before disruptions happen.",
  },
  {
    step: "05",
    title: "Automated Action & ERP Execution",
    desc: "Clean data writes directly to core ERP tables, while cognitive agents handle complex employee and client queries.",
  },
];

function AccelEdgeAIProductPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* HERO BANNER */}
      <PageHero
        badge="OFFICE DIGITIZATION • COGNITIVE AI"
        title="AccelEdge.ai – Intelligent Automation & Cognitive Enterprise Framework"
        subtitle="AccelEdge.ai is an artificial intelligence and cognitive automation framework designed to bring intelligence into enterprise operations. By combining machine learning, natural language processing and predictive analytics, the platform transforms enterprise data into actionable insights while automating complex, information-intensive tasks."
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: "Office Digitization", href: "/products" },
          { label: "AccelEdge.ai" },
        ]}
        image="/products/featured-applications/AccelEdge AI - AI Governance - Acceleron Solutions.png"
        ctaText="Schedule a Live Demo"
        ctaHref="/contact"
        secondaryCtaText="Explore Capabilities"
        secondaryCtaHref="#capabilities"
        icon={
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2.5 shadow-glow">
            <Brain className="h-10 w-10 text-brand" />
          </div>
        }
      />

      {/* SECTION: OVERVIEW & STRATEGIC IMPACT */}
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
                Bringing Applied Intelligence into{" "}
                <span className="text-gradient">Mission-Critical Operations</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                AccelEdge.ai enables organizations to move beyond reactive management towards proactive, insight-led and data-driven decision-making. By uniting computer vision for document processing, NLP for enterprise knowledge retrieval, and predictive machine learning, it turns dark enterprise data into a competitive moat.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="pt-4 flex flex-wrap gap-4">
                <div className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">Computer Vision &amp; IDP</div>
                    <div className="text-xs text-muted-foreground">Automated tabular invoice extraction</div>
                  </div>
                </div>
                <div className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">Process Mining Insights</div>
                    <div className="text-xs text-muted-foreground">Detects workflow drag &amp; bottlenecks</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-border/70 bg-muted/20 p-8 space-y-6 shadow-card">
                <div className="text-xs font-bold uppercase tracking-widest text-brand-red">
                  AccelEdge.ai At A Glance
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Transforming Operational AI
                </h3>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Eliminates 80% of repetitive data entry across accounting &amp; logistics.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Predicts heavy machinery component wear and maintenance intervals.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Grounds enterprise virtual assistants strictly on company SOPs and data.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Native connectors to SAP ECC, S/4HANA, Zoho, and legacy SQL cores.</span>
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
              Core Capabilities &amp; <span className="text-gradient">AI Architecture</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Engineered to bring automated cognitive processing and predictive intelligence to asset-heavy enterprises.
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
              Cognitive Execution
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              5-Phase Cognitive Intelligence Pipeline
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              From raw unstructured ingestion to deep-learning parsing, master validation, predictive modeling, and automated ERP execution.
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
              Concrete operational returns in processing speed, predictive reliability, and worker productivity.
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
              Ignite Enterprise Cognitive Intelligence with AccelEdge.ai
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Consult with our Applied AI architects to explore custom IDP models for your documents, predictive maintenance pipelines, and process mining tools.
            </p>
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <Link
                to="/contact"
                className="rounded-xl bg-brand-gradient px-8 py-4 text-sm font-bold text-white shadow-glow hover:scale-[1.02] transition-transform"
              >
                Schedule AI Architecture Consultation
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
