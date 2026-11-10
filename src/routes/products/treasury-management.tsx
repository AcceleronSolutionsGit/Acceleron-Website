import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Landmark,
  CheckCircle2,
  Wallet,
  RefreshCw,
  TrendingUp,
  ShieldAlert,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Phone,
  Mail,
  ShieldCheck,
  Building2,
  FileSpreadsheet,
} from "lucide-react";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { PageHero } from "../../components/ui/PageHero";
import { ProcessFlow } from "../../components/ui/ProductShowcase";
import { getAssetUrl } from "../../lib/assets";

export const Route = createFileRoute("/products/treasury-management")({
  head: () => ({
    meta: [
      {
        title:
          "Treasury Management System (TMS) | Acceleron Solutions",
      },
      {
        name: "description",
        content:
          "Enterprise Treasury Management System (TMS) for multi-bank cash visibility, automated bank reconciliation, predictive cash flow forecasting, and risk exposure governance.",
      },
    ],
  }),
  component: TreasuryManagementProductPage,
});

const CORE_MODULES = [
  {
    title: "Cash Visibility & Positioning",
    desc: "Real-time aggregation of multi-bank balances, daily cash positions and liquidity metrics across global and domestic accounts.",
    icon: Wallet,
    metric: "Multi-Bank Aggregation",
  },
  {
    title: "Automated Bank Reconciliation",
    desc: "Streamlined matching of ledger entries with bank statements to identify discrepancies and reconcile transactions efficiently.",
    icon: RefreshCw,
    metric: "99% Auto-Match",
  },
  {
    title: "Cash Flow Forecasting",
    desc: "Predictive analytics to model short- and long-term liquidity requirements based on historical data and pending receivables and payables.",
    icon: TrendingUp,
    metric: "Predictive Liquidity",
  },
  {
    title: "Risk & Exposure Management",
    desc: "Monitoring of currency (FX), interest rate and counterparty risks to support the management of organizational financial exposure.",
    icon: ShieldAlert,
    metric: "Hedging Governance",
  },
];

const BUSINESS_BENEFITS = [
  {
    title: "Working Capital Optimization",
    metric: "Optimal Yield",
    desc: "Supports working capital optimization and more effective management of surplus cash across enterprise entities.",
  },
  {
    title: "Exposure Monitoring",
    metric: "Hedging Control",
    desc: "Improves visibility into financial exposure through timely monitoring and predictive forecasting.",
  },
  {
    title: "Automated Reconciliation",
    metric: "Zero Spreadsheets",
    desc: "Streamlines treasury operations while eliminating manual, error-prone spreadsheet reconciliations.",
  },
  {
    title: "Synchronized ERP Finance",
    metric: "Real-Time Ledger",
    desc: "Native connectivity syncing multi-bank statement lines with SAP, Oracle, and enterprise general ledgers.",
  },
];

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Multi-Bank Data Ingestion",
    desc: "Automatic electronic statement feeds (MT940, CAMT.053, Host-to-Host) ingested across all banking partners.",
  },
  {
    step: "02",
    title: "Global Cash Positioning",
    desc: "Platform aggregates operating accounts, cash pools, and overdraft limits into an executive liquidity dashboard.",
  },
  {
    step: "03",
    title: "Algorithmic Reconciliation",
    desc: "Rules engines auto-match statement lines against open AP/AR ledger items, flagging unmatched variances.",
  },
  {
    step: "04",
    title: "Predictive Cash Forecasting",
    desc: "AI models future 30/60/90-day cash requirements based on sales receivables, supplier schedules, and debt obligations.",
  },
  {
    step: "05",
    title: "Risk Hedging & Liquidity Actions",
    desc: "Treasury officers execute sweeps, intercompany lending, short-term investments, or FX hedges with high confidence.",
  },
];

function TreasuryManagementProductPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* HERO BANNER */}
      <PageHero
        badge="OFFICE DIGITIZATION • TREASURY MANAGEMENT"
        title="Treasury Management System (TMS)"
        subtitle="The Treasury Management System (TMS) provides comprehensive visibility and control over enterprise liquidity, cash positions, bank reconciliations and financial risk. Designed to support complex organizational needs, the platform equips finance teams to manage working capital more effectively, forecast cash flows and make informed financial decisions."
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: "Office Digitization", href: "/products" },
          { label: "Treasury Management" },
        ]}
        image="/products/featured-applications/Treasury Management Portal - Acceleron Solutions.png"
        ctaText="Schedule a Live Demo"
        ctaHref="/contact"
        secondaryCtaText="Explore Modules"
        secondaryCtaHref="#modules"
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
                Liquidity &amp; Cash Flow{" "}
                <span className="text-gradient">Governance Architecture</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Acceleron's TMS integrates with ERP financial modules, banking networks, and billing systems to maintain synchronized financial records and improve visibility across treasury operations. By consolidating complex multi-entity bank accounts, CFOs gain instant transparency over global liquidity.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="pt-4 flex flex-wrap gap-4">
                <div className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">Multi-Bank Connectivity</div>
                    <div className="text-xs text-muted-foreground">Host-to-Host &amp; SWIFT statement feeds</div>
                  </div>
                </div>
                <div className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">Predictive Liquidity</div>
                    <div className="text-xs text-muted-foreground">AI-driven 30/60/90-day cash forecasting</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-border/70 bg-muted/20 p-8 space-y-6 shadow-card">
                <div className="text-xs font-bold uppercase tracking-widest text-brand-red">
                  TMS At A Glance
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Transforming Corporate Treasury
                </h3>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Real-time aggregation across dozens of banks and currencies.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Automated reconciliation eliminates manual spreadsheet matching.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Forecasts future liquidity needs based on pending AP/AR ledgers.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Monitors FX exposure, interest rate shifts, and counterparty limits.</span>
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
              Core Modules &amp; <span className="text-gradient">Treasury Architecture</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Engineered to support corporate treasury departments, multi-entity conglomerates, and financial controllers.
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
              Treasury Lifecycle
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              5-Phase Treasury Governance Workflow
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              From automated multi-bank statement ingestion to ledger reconciliation, predictive liquidity forecasting, and exposure hedging.
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
              Optimizing idle working capital, reducing borrowing costs, and guarding against market volatility.
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
              Take Total Control of Your Corporate Liquidity with TMS
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Connect with our treasury systems architects to discuss host-to-host bank connectors, automated reconciliation logic, and cash flow models.
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
