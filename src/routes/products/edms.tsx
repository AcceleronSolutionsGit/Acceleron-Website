import { createFileRoute, Link } from "@tanstack/react-router";
import {
  FolderLock,
  CheckCircle2,
  Search,
  History,
  ShieldCheck,
  FileText,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Phone,
  Mail,
  Lock,
  Database,
  Layers,
} from "lucide-react";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { PageHero } from "../../components/ui/PageHero";
import { ProcessFlow } from "../../components/ui/ProductShowcase";
import { getAssetUrl } from "../../lib/assets";

export const Route = createFileRoute("/products/edms")({
  head: () => ({
    meta: [
      {
        title:
          "E-Document Management System (EDMS) | Acceleron Solutions",
      },
      {
        name: "description",
        content:
          "Enterprise E-Document Management System (EDMS) for secure cloud-enabled digital archiving, OCR search indexing, version control, and regulatory document governance.",
      },
    ],
  }),
  component: EDMSProductPage,
});

const FUNCTIONALITIES = [
  {
    title: "Centralized Digital Repository",
    desc: "Secure storage for organizational documents, standard operating procedures, contracts, supplier files, and engineering blueprints.",
    icon: Database,
    metric: "Encrypted Cloud Vault",
  },
  {
    title: "Advanced Search & Indexing",
    desc: "Optical Character Recognition (OCR) and rich metadata tagging enable fast, accurate full-text document retrieval inside scanned PDFs.",
    icon: Search,
    metric: "<3 Sec Retrieval",
  },
  {
    title: "Version Control & Audit Trails",
    desc: "Comprehensive tracking of document modifications, checkout histories, and access logs to maintain version integrity and accountability.",
    icon: History,
    metric: "Tamper-Evident Logs",
  },
  {
    title: "Granular Access Permissions",
    desc: "Role-based security controls (RBAC) and watermarking help protect sensitive corporate intellectual property and confidential files.",
    icon: Lock,
    metric: "Role-Based Security",
  },
];

const BUSINESS_BENEFITS = [
  {
    title: "Eliminates Paper-Based Filing",
    metric: "Zero Paper Waste",
    desc: "Eliminates paper-based filing costs, warehouse storage fees, and the overhead associated with misplaced records.",
  },
  {
    title: "Rapid Information Retrieval",
    metric: "Instant Search",
    desc: "Enables instant information retrieval across millions of pages, boosting workforce productivity.",
  },
  {
    title: "Robust Document Security",
    metric: "ISO 27001 Aligned",
    desc: "Strengthens document security, intellectual property privacy, and granular role-based encryption.",
  },
  {
    title: "Audit & Governance Readiness",
    metric: "100% Traceable",
    desc: "Supports regulatory compliance and audit readiness through structured lifecycle retention schedules.",
  },
];

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Multi-Source Document Ingestion",
    desc: "Bulk scanner feeds, email attachments, CAD engineering files, and digital forms captured into secure vaults.",
  },
  {
    step: "02",
    title: "OCR & Metadata Indexing",
    desc: "Automated OCR engines index every word within scanned files, extracting key tags, authors, and dates.",
  },
  {
    step: "03",
    title: "Role-Based Access Enforcement",
    desc: "Granular permission models enforce read, edit, print, or watermark privileges based on employee role.",
  },
  {
    step: "04",
    title: "Version Control & Review",
    desc: "Check-in/check-out mechanisms prevent file collision while logging all annotations and approvals.",
  },
  {
    step: "05",
    title: "Statutory Archival & Retention",
    desc: "Automated retention policies preserve records for statutory durations (e.g. 7-10 years) for audit readiness.",
  },
];

function EDMSProductPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* HERO BANNER */}
      <PageHero
        badge="OFFICE DIGITIZATION • DOCUMENT MANAGEMENT"
        title="E-Document Management System (EDMS)"
        subtitle="The E-Document Management System (EDMS) is a secure, cloud-enabled platform designed to centralize enterprise document creation, storage, indexing and retrieval. By replacing physical filing systems and disorganized shared drives with a structured digital repository, EDMS enables authorized personnel to access verified documents quickly while maintaining robust security controls."
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: "Office Digitization", href: "/products" },
          { label: "EDMS" },
        ]}
        image="/products/featured-applications/E-Document Managemnt - Acceleron Solutions.png"
        ctaText="Schedule a Live Demo"
        ctaHref="/contact"
        secondaryCtaText="Explore Functionalities"
        secondaryCtaHref="#functionalities"
        icon={
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2.5 shadow-glow">
            <FolderLock className="h-10 w-10 text-brand" />
          </div>
        }
      />

      {/* SECTION: OVERVIEW & REGULATORY COMPLIANCE */}
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
                Secure Digital Archiving &amp;{" "}
                <span className="text-gradient">Instant Retrieval</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Acceleron's EDMS supports data protection and document governance requirements, helping organizations maintain organized records and improve audit readiness for internal and external audits. By structuring enterprise knowledge in an encrypted cloud repository, critical assets are protected from loss, disaster, or unauthorized access.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="pt-4 flex flex-wrap gap-4">
                <div className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">Deep OCR Search</div>
                    <div className="text-xs text-muted-foreground">Full-text search inside scanned PDFs &amp; CAD</div>
                  </div>
                </div>
                <div className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">Audit &amp; Version History</div>
                    <div className="text-xs text-muted-foreground">Immutable logs of edits &amp; downloads</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-border/70 bg-muted/20 p-8 space-y-6 shadow-card">
                <div className="text-xs font-bold uppercase tracking-widest text-brand-red">
                  EDMS At A Glance
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Transforming Document Archiving
                </h3>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Eliminates paper records and physical filing space overhead.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Locates any drawing, contract, or policy in under 3 seconds.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Controls versions strictly to prevent outdated drawing fabrication.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Bank-grade encryption meeting ISO 27001 and GDPR data mandates.</span>
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
              Core Functionalities &amp; <span className="text-gradient">Archival Architecture</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Engineered for manufacturing blueprints, legal agreements, corporate records, and regulatory filings.
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
              Document Lifecycle
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              5-Phase Document Governance Lifecycle
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              From multi-source document capture to OCR indexing, access enforcement, revision tracking, and legal archival.
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
              Safeguarding corporate memory, ensuring ISO audit compliance, and accelerating knowledge discovery.
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
              Centralize &amp; Protect Your Corporate Records with EDMS
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Schedule an architecture session with our enterprise document governance team to explore OCR engines, retention schedules, and cloud storage security.
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
