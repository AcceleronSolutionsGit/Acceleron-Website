import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Boxes,
  CheckCircle2,
  FileSpreadsheet,
  Receipt,
  Award,
  MessageSquare,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Phone,
  Mail,
  ShieldCheck,
  Truck,
  Building,
} from "lucide-react";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { PageHero } from "../../components/ui/PageHero";
import { ProcessFlow } from "../../components/ui/ProductShowcase";
import { getAssetUrl } from "../../lib/assets";

export const Route = createFileRoute("/products/supplier-portal")({
  head: () => ({
    meta: [
      {
        title:
          "Supplier Portal - Collaborative Vendor Management | Acceleron Solutions",
      },
      {
        name: "description",
        content:
          "Enterprise Supplier Portal for collaborative vendor management, digital PO tracking, self-service e-invoicing, vendor scorecards, and ERP supply chain synchronization.",
      },
    ],
  }),
  component: SupplierPortalProductPage,
});

const CORE_FEATURES = [
  {
    title: "Digital Purchase Order (PO) Management",
    desc: "Instant vendor notifications, online PO acknowledgements, amendment logs, and revision tracking.",
    icon: FileSpreadsheet,
    metric: "Instant PO Acknowledgment",
  },
  {
    title: "Self-Service Invoice Submission",
    desc: "A streamlined e-invoicing interface enabling vendors to submit bills, attach supporting Goods Receipt Notes (GRNs) and track payment statuses.",
    icon: Receipt,
    metric: "Automated 3-Way Match",
  },
  {
    title: "Vendor Performance Scorecards",
    desc: "Objective evaluation metrics covering on-time delivery rates, quality defect counts, and pricing competitiveness.",
    icon: Award,
    metric: "Objective Vendor Ratings",
  },
  {
    title: "Secure Collaboration & RFQ",
    desc: "Centralized messaging, technical drawing sharing, and Request for Quotation (RFQ) competitive bidding workflows.",
    icon: MessageSquare,
    metric: "Digital RFQ Bidding",
  },
];

const BUSINESS_BENEFITS = [
  {
    title: "Reduced Procurement Overhead",
    metric: "-60% Inquiries",
    desc: "Reduced vendor status inquiries and procurement-related administrative workload across buying teams.",
  },
  {
    title: "Faster Invoice Reconciliation",
    metric: "Faster Payments",
    desc: "Faster invoice processing, fewer discrepancies, and accelerated payment reconciliation cycles.",
  },
  {
    title: "Stronger Supplier Relationships",
    metric: "High Partner Trust",
    desc: "Stronger supplier relationships through complete operational transparency and streamlined collaboration.",
  },
  {
    title: "ERP Supply Chain Synchronization",
    metric: "Zero Discrepancies",
    desc: "Direct integration with ERP procurement and accounts payable modules to maintain consistent records.",
  },
];

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Digital PO Transmission",
    desc: "Procurement releases purchase orders from SAP/ERP directly to the supplier portal with instant alerts.",
  },
  {
    step: "02",
    title: "Vendor Acknowledgment & ASN",
    desc: "Vendor confirms delivery schedule and transmits Advanced Shipping Notices (ASN) with packing lists.",
  },
  {
    step: "03",
    title: "Goods Receipt & Quality Inspection",
    desc: "Plant warehouse logs receipt of goods (GRN) and links quality inspection reports digitally.",
  },
  {
    step: "04",
    title: "Self-Service Invoice Matching",
    desc: "Vendor uploads tax invoice; system performs automated 3-way matching against PO and approved GRN.",
  },
  {
    step: "05",
    title: "Payment Release & Scorecard Update",
    desc: "Accounts payable clears payment electronically, while delivery accuracy updates the vendor's scorecard.",
  },
];

function SupplierPortalProductPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* HERO BANNER */}
      <PageHero
        badge="OFFICE DIGITIZATION • SUPPLIER COLLABORATION"
        title="Supplier Portal – Collaborative Vendor Management & Order Tracking"
        subtitle="The Supplier Portal is a centralized B2B collaboration platform designed to streamline interactions between enterprise procurement teams and external vendors. By digitizing purchase orders, invoice submissions, delivery tracking and performance scorecards, the platform promotes transparency, operational efficiency and stronger supply chain partnerships."
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: "Office Digitization", href: "/products" },
          { label: "Supplier Portal" },
        ]}
        image="/products/featured-applications/Supplier Managemnt Portal - Acceleron Solutions.png"
        ctaText="Schedule a Live Demo"
        ctaHref="/contact"
        secondaryCtaText="Explore Features"
        secondaryCtaHref="#features"
        icon={
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2.5 shadow-glow">
            <Boxes className="h-10 w-10 text-brand" />
          </div>
        }
      />

      {/* SECTION: OVERVIEW & ENTERPRISE INTEGRATION */}
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
                Collaborative Vendor Management &amp;{" "}
                <span className="text-gradient">Procurement Synchronization</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Acceleron's Supplier Portal integrates with ERP procurement and accounts payable modules to enable end-to-end supply chain synchronization and maintain consistent procurement records. By establishing a single digital channel for vendors to acknowledge orders, upload invoices, and track payments, enterprises eliminate administrative friction.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="pt-4 flex flex-wrap gap-4">
                <div className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">ERP Procurement Synced</div>
                    <div className="text-xs text-muted-foreground">Automated PO release &amp; 3-way matching</div>
                  </div>
                </div>
                <div className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">Self-Service Invoicing</div>
                    <div className="text-xs text-muted-foreground">Vendors view live payment statuses 24/7</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-border/70 bg-muted/20 p-8 space-y-6 shadow-card">
                <div className="text-xs font-bold uppercase tracking-widest text-brand-red">
                  Supplier Portal At A Glance
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Transforming Vendor Collaboration
                </h3>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Eliminates endless phone calls and emails inquiring about invoice statuses.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Enables instant online PO acknowledgment and delivery revisions.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Automates 3-way matching between PO, GRN, and vendor tax bills.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Ranks vendors with objective on-time delivery and defect scorecards.</span>
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

      {/* SECTION: CORE FEATURES */}
      <section id="features" className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 sm:py-24">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red mb-3">
              Capabilities &amp; Features
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Core Features &amp; <span className="text-gradient">Procurement Architecture</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Engineered to support heavy equipment manufacturers, raw material supply networks, and component suppliers.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {CORE_FEATURES.map((feat, idx) => (
            <Reveal key={feat.title} delay={idx * 0.1}>
              <div className="rounded-3xl border border-border/70 bg-card p-8 h-full shadow-card hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="h-12 w-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center">
                      <feat.icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-muted text-muted-foreground">
                      {feat.metric}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{feat.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feat.desc}</p>
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
              Procurement Lifecycle
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              5-Phase Vendor Collaboration Lifecycle
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              From automated PO transmission to supplier acknowledgment, goods receipt, 3-way invoice matching, and payment release.
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
              Slashing accounts payable cycle times and cultivating a high-trust supplier ecosystem.
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
              Streamline Vendor Collaboration with Supplier Portal
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Consult with our procurement digitization leads to evaluate PO transmission protocols, e-invoicing workflows, and ERP accounts payable integration.
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
