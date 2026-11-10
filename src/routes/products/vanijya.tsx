import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShoppingBag,
  CheckCircle2,
  Receipt,
  CreditCard,
  FileCheck,
  BarChart4,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Phone,
  Mail,
  ShieldCheck,
  Smartphone,
  Tag,
  Headphones,
  Boxes,
} from "lucide-react";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { PageHero } from "../../components/ui/PageHero";
import { ProcessFlow } from "../../components/ui/ProductShowcase";
import { getAssetUrl } from "../../lib/assets";

export const Route = createFileRoute("/products/vanijya")({
  head: () => ({
    meta: [
      {
        title:
          "Vanijya - Commercial Transaction, Billing & Retail Ecosystem | Acceleron Solutions",
      },
      {
        name: "description",
        content:
          "Vanijya is an enterprise-grade commercial transaction and billing platform designed to streamline the order-to-cash lifecycle, e-commerce parts sales, digital invoicing, and retail customer engagement.",
      },
    ],
  }),
  component: VanijyaProductPage,
});

const COMMERCIAL_FUNCTIONALITIES = [
  {
    title: "Automated Invoicing & Billing",
    desc: "Flexible invoice generation based on completed service orders, retail parts sales, maintenance contracts and milestone achievements.",
    icon: Receipt,
    metric: "Instant Invoicing",
  },
  {
    title: "Order-to-Cash Tracking",
    desc: "End-to-end monitoring of commercial orders, from initial quotation and credit checks to final payment reconciliation.",
    icon: CreditCard,
    metric: "Unified O2C",
  },
  {
    title: "Tax & Regulatory Compliance",
    desc: "Configurable capabilities supporting regional tax frameworks, e-invoicing requirements and statutory financial reporting.",
    icon: FileCheck,
    metric: "E-Invoicing Ready",
  },
  {
    title: "Financial Dashboard & Analytics",
    desc: "Real-time visibility into outstanding receivables, revenue streams, aging debt, and cash flow performance.",
    icon: BarChart4,
    metric: "Live Receivables",
  },
];

const RETAIL_CAPABILITIES = [
  {
    title: "Digital Self-Service Portals",
    desc: "User-friendly mobile and web interfaces enabling customers to browse genuine parts, check real-time pricing, place orders securely and track deliveries.",
    icon: Smartphone,
    metric: "24/7 Self-Service",
  },
  {
    title: "Simplified E-Commerce & Checkout",
    desc: "Secure checkout options with integrated digital payment gateways, instant e-invoice generation and digital receipt archives for individual equipment owners.",
    icon: ShoppingBag,
    metric: "Instant Checkout",
  },
  {
    title: "Personalized Offers & History",
    desc: "Tailored promotions, service reminders and maintenance package recommendations based on individual customer asset profiles and purchase history.",
    icon: Tag,
    metric: "Asset-Tailored",
  },
  {
    title: "Dedicated Retail Support Channels",
    desc: "Digital helpdesks and feedback mechanisms providing assistance with parts inquiries, warranty support, and delivery updates.",
    icon: Headphones,
    metric: "Rapid Helpdesk",
  },
];

const BUSINESS_BENEFITS = [
  {
    title: "Faster Order-to-Cash",
    metric: "Instant O2C",
    desc: "Faster order-to-cash cycles, accelerated revenue recognition, and improved cash flow visibility.",
  },
  {
    title: "Reduced Invoicing Errors",
    metric: "99.9% Accuracy",
    desc: "Reduced manual invoicing errors and administrative reconciliation effort across high-volume transactions.",
  },
  {
    title: "Retail Buyer Convenience",
    metric: "24/7 Commerce",
    desc: "Greater convenience across retail purchasing, digital payment gateways, and self-service parts ordering.",
  },
  {
    title: "Tax & Regulatory Compliance",
    metric: "100% Compliant",
    desc: "Automated GST/tax compliance, statutory e-invoicing, and digital auditability for corporate finance teams.",
  },
];

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Quotation & Order Placement",
    desc: "B2B enterprise purchase orders or retail online cart checkouts with real-time inventory and pricing checks.",
  },
  {
    step: "02",
    title: "Credit Check & Payment Gateway",
    desc: "Automated corporate credit limit validation or consumer instant payment via integrated banking gateways.",
  },
  {
    step: "03",
    title: "Automated E-Invoicing",
    desc: "System generates statutory compliant tax invoices and e-way bills with direct government portal integration.",
  },
  {
    step: "04",
    title: "Fulfillment & Dispatch",
    desc: "Warehouse management receives pick-pack instructions, and customers receive real-time courier tracking links.",
  },
  {
    step: "05",
    title: "Reconciliation & Loyalty Sync",
    desc: "Bank settlement reconciles automatically into ERP ledgers, while loyalty points credit instantly into Samriddhi.",
  },
];

function VanijyaProductPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* HERO BANNER */}
      <PageHero
        badge="CX SOLUTIONS • COMMERCIAL BILLING"
        title="Vanijya – Commercial Transaction, Billing & Retail Ecosystem"
        subtitle="Vanijya is an enterprise-grade commercial transaction and billing platform designed to streamline the order-to-cash lifecycle, invoice generation, financial reconciliation and customer engagement. Built to support both industrial B2B environments and retail customers, the platform enables faster, more accurate and transparent commercial transactions."
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: "CX Solutions", href: "/products" },
          { label: "Vanijya" },
        ]}
        image="/products/featured-applications/Vanijya Heavy Machinery Marketplace- Ecommerce - Acceleron Solutions.png"
        ctaText="Schedule a Live Demo"
        ctaHref="/contact"
        secondaryCtaText="Explore Capabilities"
        secondaryCtaHref="#commercial"
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
                Streamlining Order-to-Cash &amp;{" "}
                <span className="text-gradient">Retail Commerce</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Vanijya integrates with core ERP platforms, banking gateways, inventory management systems, and customer loyalty frameworks such as Samriddhi, helping maintain unified financial and customer records. It bridges large-scale corporate contract invoicing with effortless digital retail checkout for spare parts buyers.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="pt-4 flex flex-wrap gap-4">
                <div className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">ERP &amp; Bank Gateway Synced</div>
                    <div className="text-xs text-muted-foreground">Automated receipts &amp; bank reconciliations</div>
                  </div>
                </div>
                <div className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">Statutory E-Invoicing</div>
                    <div className="text-xs text-muted-foreground">Instant GST and e-way bill generation</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-border/70 bg-muted/20 p-8 space-y-6 shadow-card">
                <div className="text-xs font-bold uppercase tracking-widest text-brand-red">
                  Vanijya At A Glance
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Unified Commercial Billing
                </h3>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Speeds up billing cycles from completed work orders to invoicing.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Self-service genuine parts catalog with real-time stock availability.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Instant digital payment gateways and electronic receipts.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Synchronizes purchase point rewards directly with Samriddhi.</span>
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

      {/* SECTION: COMMERCIAL FUNCTIONALITIES */}
      <section id="commercial" className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 sm:py-24">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red mb-3">
              Commercial Engine
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Core Commercial &amp; <span className="text-gradient">Billing Architecture</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Automating contract invoicing, credit terms, and cash flow tracking for enterprise operations.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {COMMERCIAL_FUNCTIONALITIES.map((func, idx) => (
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
                  <CheckCircle2 className="h-4 w-4" /> Commercial Module
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION: RETAIL & INDIVIDUAL CUSTOMER EMPOWERMENT */}
      <section className="section-dark container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 sm:py-24 rounded-3xl my-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand mb-3">
              Retail Ecosystem
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Empowering Retail Buyers &amp; Equipment Owners
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Extending digital commerce directly to individual asset owners, independent mechanics, and retail spare parts buyers.
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RETAIL_CAPABILITIES.map((cap, idx) => (
            <Reveal key={cap.title} delay={idx * 0.1}>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 h-full shadow-card hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="h-10 w-10 rounded-xl bg-brand/20 text-brand flex items-center justify-center mb-4">
                    <cap.icon className="h-5 w-5" />
                  </div>
                  <span className="text-[11px] font-bold text-brand uppercase tracking-wider block mb-2">
                    {cap.metric}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">{cap.title}</h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{cap.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION: OPERATIONAL WORKFLOW */}
      <section className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 sm:py-24">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red mb-3">
              Order-to-Cash
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              5-Phase Commercial Workflow
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              From initial quotation or shopping cart checkout to statutory e-invoicing, fulfillment, and loyalty reward crediting.
            </p>
          </div>
        </Reveal>

        <ProcessFlow steps={WORKFLOW_STEPS} />
      </section>

      {/* SECTION: DELIVERED BUSINESS BENEFITS */}
      <section className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 sm:py-24 border-t border-border/50">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red mb-3">
              Measurable P&amp;L Value
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Delivered <span className="text-gradient">Business Benefits</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Measurable returns for equipment dealerships, spare parts distribution networks, and industrial manufacturers.
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
              Modernize Your Commercial Transactions with Vanijya
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Schedule a demonstration with our digital commerce and ERP billing architects to explore B2B quotation workflows, retail web portals, and payment gateway integrations.
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
