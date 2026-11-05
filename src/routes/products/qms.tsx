import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  CheckCircle2,
  Layers,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  ClipboardCheck,
  Award,
  Users,
  BarChart3,
  Mail,
  Phone,
} from "lucide-react";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { PageHero } from "../../components/ui/PageHero";
import { ProcessFlow } from "../../components/ui/ProductShowcase";
import { getAssetUrl } from "../../lib/assets";

export const Route = createFileRoute("/products/qms")({
  head: () => ({
    meta: [
      {
        title: "QMS - Quality Management System | Acceleron Solutions",
      },
      {
        name: "description",
        content:
          "Enterprise-grade Quality Management System (QMS) for standardized operating procedures, automated audit tracking, supplier QA, and CAPA workflows.",
      },
    ],
  }),
  component: QMSProductPage,
});

const CAPABILITIES = [
  {
    title: "Standard Operating Procedures (SOPs)",
    desc: "Centralized digital repositories for process guidelines, engineering drawings, and compliance manuals, accessible across operational locations.",
    icon: ClipboardCheck,
  },
  {
    title: "Audit & Compliance Tracking",
    desc: "Automated scheduling, execution, and monitoring of internal and external quality audits, supported by corrective and preventive action (CAPA) workflows.",
    icon: ShieldCheck,
  },
  {
    title: "Supplier Quality Assurance",
    desc: "Structured incoming inspection protocols, vendor grading metrics, and performance scorecards to maintain raw material and component quality.",
    icon: Award,
  },
  {
    title: "Customer Feedback & Resolution",
    desc: "Integrated feedback management linked to root-cause analysis, enabling systematic issue resolution and continuous improvement.",
    icon: Users,
  },
];

const BUSINESS_BENEFITS = [
  {
    title: "Reduced Defect Rates",
    metric: "Zero Defect Focus",
    desc: "Significant reduction in operational rework through standardized digital quality checklists.",
  },
  {
    title: "Audit Readiness",
    metric: "100% Compliant",
    desc: "Always-ready internal and external compliance across manufacturing and service operations.",
  },
  {
    title: "End-to-End Visibility",
    metric: "Real-Time",
    desc: "Comprehensive visibility into quality performance, supplier standards, and corrective actions.",
  },
  {
    title: "Customer Confidence",
    metric: "High Trust",
    desc: "Consistent product and service delivery backed by structured CAPA and ISO governance.",
  },
];

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "SOP Governance",
    desc: "Access digital process manuals, assembly drawings, and approved quality benchmarks.",
  },
  {
    step: "02",
    title: "Inspection & Checklists",
    desc: "Floor technicians execute guided digital inspections on tablets with barcode/RFID verification.",
  },
  {
    step: "03",
    title: "Automated CAPA & Triage",
    desc: "Non-conformances automatically trigger root-cause analysis, rework tickets, and supervisor reviews.",
  },
  {
    step: "04",
    title: "ERP Sign-Off & Analytics",
    desc: "Quality clearance certificates sync with SAP/ERP while live dashboards inform leadership.",
  },
];

function QMSProductPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* HERO BANNER */}
      <PageHero
        badge="INDUSTRIAL SOLUTIONS • QUALITY MANAGEMENT"
        title="Quality Management System (QMS)"
        subtitle="Acceleron develops and implements enterprise-grade Quality Management Systems (QMS) designed to help organizations uphold international quality standards, strengthen compliance, and improve process efficiency. Our solutions provide a structured framework for managing quality processes, ensuring audit readiness, and maintaining consistent standards across business operations."
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: "Industrial Solutions", href: "/products" },
          { label: "QMS" },
        ]}
        image="/capital_goods.jpg"
        ctaText="Schedule a Live Demo"
        ctaHref="/contact"
        secondaryCtaText="Explore Capabilities"
        secondaryCtaHref="#capabilities"
        icon={
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2.5 shadow-glow">
            <img
              src={getAssetUrl("/qms.png")}
              alt="QMS"
              className="h-10 w-10 object-contain"
            />
          </div>
        }
      />

      {/* SECTION: OVERVIEW & CORE FRAMEWORK */}
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
                Structured Quality Governance Built for{" "}
                <span className="text-gradient">Industrial Precision</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Acceleron configures QMS solutions around each client's operational structure, quality requirements, and compliance obligations. From manufacturing and rebuilding facilities to distributed service operations, the platform establishes standardized quality processes, centralized documentation, and consistent monitoring across locations.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="pt-4 flex flex-wrap gap-4">
                <div className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">Zero Defect Architecture</div>
                    <div className="text-xs text-muted-foreground">Standardized SOPs &amp; automated CAPA</div>
                  </div>
                </div>
                <div className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">ISO &amp; Audit Ready</div>
                    <div className="text-xs text-muted-foreground">1-click audit compliance logs</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-border/70 bg-muted/20 p-8 space-y-6 shadow-card">
                <div className="text-xs font-bold uppercase tracking-widest text-brand-red">
                  QMS At A Glance
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Transforming Workshop &amp; Plant Quality
                </h3>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Eliminates paper checklists and untracked assembly defects.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Provides continuous incoming supplier inspection protocols.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Automates CAPA workflows linked to root-cause analysis.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Seamless integration with SAP ECC, S/4HANA, and plant MES.</span>
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

      {/* SECTION: KEY CAPABILITIES & MODULES */}
      <section id="capabilities" className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 sm:py-24">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red mb-3">
              Capabilities &amp; Modules
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Core Capabilities &amp; <span className="text-gradient">Functional Modules</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Everything required to enforce rigorous quality standards across multi-location manufacturing and workshop facilities.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {CAPABILITIES.map((cap, idx) => (
            <Reveal key={cap.title} delay={idx * 0.1}>
              <div className="rounded-3xl border border-border/70 bg-card p-8 h-full shadow-card hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="h-12 w-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center mb-6">
                    <cap.icon className="h-6 w-6" />
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
      <WaveDivider from="white" to="dark" />

      <section className="section-dark container mx-auto px-6 max-w-7xl relative z-10 py-20 sm:py-24">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red mb-3">
              Operational Process
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              How the QMS Platform <span className="text-gradient">Works</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
              A structured 4-step execution flow transforming incoming parts inspection into certified quality sign-offs.
            </p>
          </div>
        </Reveal>

        <ProcessFlow accentColor="#d946ef" steps={WORKFLOW_STEPS} />
      </section>

      <WaveDivider from="dark" to="white" />

      {/* SECTION: BUSINESS BENEFITS */}
      <section className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 sm:py-24">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red mb-3">
              Delivered Value
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Measurable <span className="text-gradient">Business Benefits</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Proven outcomes delivered across manufacturing plants, rebuild facilities, and heavy industrial operations.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BUSINESS_BENEFITS.map((ben, idx) => (
            <Reveal key={ben.title} delay={idx * 0.1}>
              <div className="rounded-3xl border border-border/70 bg-card p-7 text-center h-full shadow-card flex flex-col justify-between">
                <div>
                  <div className="text-2xl font-black text-brand-red mb-2">{ben.metric}</div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{ben.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{ben.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION: BOTTOM CTA BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand/15 via-background to-brand-red/10 border-t border-border/60 py-20 sm:py-28">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand mb-6 shadow-sm">
              <Layers className="h-4 w-4" /> Ready to Elevate Workshop Quality?
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-5 leading-tight">
              Deploy Acceleron's <span className="text-gradient">Enterprise QMS</span>
            </h2>

            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Schedule a comprehensive live demo with our industrial software architects.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <Link
                to="/contact"
                className="btn btn-primary btn-lg shadow-glow inline-flex items-center gap-2"
              >
                Schedule a Demo <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="pt-8 border-t border-border/60 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-sm text-muted-foreground">
              <div className="flex items-center gap-2 font-medium">
                <Mail className="h-4 w-4 text-brand" />
                <a
                  href="mailto:enquiry@acceleronsolutions.io"
                  className="hover:text-foreground transition-colors"
                >
                  enquiry@acceleronsolutions.io
                </a>
              </div>
              <div className="hidden sm:block text-border">•</div>
              <div className="flex items-center gap-2 font-medium">
                <Phone className="h-4 w-4 text-brand" />
                <a href="tel:03335346222" className="hover:text-foreground transition-colors">
                  033 3534 6222 / 033 6644 2000
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
