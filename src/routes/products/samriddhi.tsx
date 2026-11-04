import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Gift,
  CheckCircle2,
  Award,
  Coins,
  Sparkles,
  BarChart3,
  ArrowRight,
  ArrowUpRight,
  Phone,
  Mail,
  ShieldCheck,
  Crown,
  HeartHandshake,
  Percent,
} from "lucide-react";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { PageHero } from "../../components/ui/PageHero";
import { ProcessFlow } from "../../components/ui/ProductShowcase";
import { getAssetUrl } from "../../lib/assets";

export const Route = createFileRoute("/products/samriddhi")({
  head: () => ({
    meta: [
      {
        title:
          "Samriddhi - Customer Loyalty Management Platform | Acceleron Solutions",
      },
      {
        name: "description",
        content:
          "Samriddhi is a dedicated digital customer loyalty and engagement platform designed to encourage repeat business, reward brand advocacy, and strengthen long-term customer relationships.",
      },
    ],
  }),
  component: SamriddhiProductPage,
});

const CORE_MODULES = [
  {
    title: "Tiered Reward Structures",
    desc: "Customizable loyalty tiers (Silver, Gold, Platinum) offering progressive benefits, discounts, expedited shipping, and priority field services.",
    icon: Crown,
    metric: "Multi-Tier VIP",
  },
  {
    title: "Points & Redemption Engine",
    desc: "Automated points accumulation based on genuine parts purchases, service contracts, and equipment utilization milestones.",
    icon: Coins,
    metric: "Automated Accrual",
  },
  {
    title: "Personalized Promotions",
    desc: "Targeted campaigns featuring special rebates on maintenance packages, genuine spare parts, and complementary industrial solutions.",
    icon: Percent,
    metric: "Asset-Targeted",
  },
  {
    title: "Loyalty Analytics Dashboard",
    desc: "Comprehensive insights into customer lifetime value (LTV), redemption velocity, retention rates, and churn indicators.",
    icon: BarChart3,
    metric: "LTV Intelligence",
  },
];

const BUSINESS_BENEFITS = [
  {
    title: "Improved Customer Retention",
    metric: "+30% Repeat Sales",
    desc: "Improved customer retention and repeat purchase opportunities across genuine parts and annual maintenance agreements.",
  },
  {
    title: "Stronger Brand Advocacy",
    metric: "Max Lifetime Value",
    desc: "Stronger brand advocacy and long-term customer lifetime value across demanding industrial equipment sectors.",
  },
  {
    title: "Data-Driven Purchase Insights",
    metric: "Behavior Analytics",
    desc: "Data-driven insights into customer preferences, replacement cycles, and equipment maintenance behaviour.",
  },
  {
    title: "Frictionless Reward Redemption",
    metric: "Instant Checkout",
    desc: "Seamless integration with Vanijya e-commerce and ERP POS for instant point redemption on active invoices.",
  },
];

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Customer Enrollment",
    desc: "Customer and equipment fleet profiles enrolled and linked to machinery serial numbers in the platform.",
  },
  {
    step: "02",
    title: "Automated Point Accrual",
    desc: "Invoices settled in Vanijya or ERP automatically calculate and credit reward points to the loyalty wallet.",
  },
  {
    step: "03",
    title: "Tier Progression",
    desc: "Milestone spend automatically elevates clients from Silver to Gold and Platinum status with exclusive benefits.",
  },
  {
    step: "04",
    title: "Targeted Campaign Delivery",
    desc: "Smart triggers dispatch personalized maintenance kit discounts and seasonal parts rebates based on telematics.",
  },
  {
    step: "05",
    title: "Instant Voucher Redemption",
    desc: "Points redeemed at checkout for parts orders, technician travel discounts, or maintenance contract subsidies.",
  },
];

function SamriddhiProductPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* HERO BANNER */}
      <PageHero
        badge="CX SOLUTIONS • CUSTOMER LOYALTY"
        title="Samriddhi – Customer Loyalty Management Platform"
        subtitle="Samriddhi is a dedicated digital customer loyalty and engagement platform designed to encourage repeat business, reward brand advocacy and strengthen long-term customer relationships. By tracking customer interactions, equipment usage and purchase patterns, the platform enables targeted rewards and personalized engagement campaigns."
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: "CX Solutions", href: "/products" },
          { label: "Samriddhi" },
        ]}
        image="/Mining_Industry.jpg"
        ctaText="Schedule a Live Demo"
        ctaHref="/contact"
        secondaryCtaText="Explore Modules"
        secondaryCtaHref="#modules"
        icon={
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2.5 shadow-glow">
            <Gift className="h-10 w-10 text-brand" />
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
                Transforming Transactional Clients into{" "}
                <span className="text-gradient">Enduring Brand Advocates</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Samriddhi helps transform transactional customer relationships into lasting partnerships by recognizing customer engagement and rewarding loyalty. Designed specifically for asset-heavy capital goods, machinery dealerships, and aftermarket parts networks, it turns routine maintenance into repeat engagement.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="pt-4 flex flex-wrap gap-4">
                <div className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">Vanijya &amp; ERP Synced</div>
                    <div className="text-xs text-muted-foreground">Automated point accrual on paid invoices</div>
                  </div>
                </div>
                <div className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">Multi-Tier VIP Perks</div>
                    <div className="text-xs text-muted-foreground">Silver, Gold, Platinum priority benefits</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-border/70 bg-muted/20 p-8 space-y-6 shadow-card">
                <div className="text-xs font-bold uppercase tracking-widest text-brand-red">
                  Samriddhi At A Glance
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Rewarding Industrial Partnerships
                </h3>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Converts aftermarket parts sales into recurring customer loyalty.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Digital loyalty passbook accessible on web and mobile portals.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Automated birthday, anniversary, and machinery milestone rewards.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Seamless integration with Vanijya retail cart checkout.</span>
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
              Core Modules &amp; <span className="text-gradient">Reward Architecture</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Engineered to foster long-term loyalty across equipment fleet operators, contractors, and retail buyers.
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
              Loyalty Lifecycle
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              5-Phase Customer Retention Lifecycle
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              From customer onboarding to automated point accrual, VIP tier elevation, and frictionless voucher redemption.
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
              Strengthening customer lifetime value, preventing client churn, and accelerating aftermarket revenue.
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
              Turn Buyers into Loyal Partners with Samriddhi
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Consult with our customer experience specialists to design tier structures, points accumulation rules, and integrated e-commerce loyalty rewards.
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
