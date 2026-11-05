import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Wrench,
  CheckCircle2,
  Layers,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Activity,
  Gauge,
  ThermometerSnowflake,
  TrendingDown,
  Phone,
  Mail,
  ShieldCheck,
  Radio,
} from "lucide-react";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { PageHero } from "../../components/ui/PageHero";
import { ProcessFlow } from "../../components/ui/ProductShowcase";
import { getAssetUrl } from "../../lib/assets";

export const Route = createFileRoute("/products/tyre-health")({
  head: () => ({
    meta: [
      {
        title: "Tyre Health Management | Acceleron Solutions",
      },
      {
        name: "description",
        content:
          "Enterprise Tyre Health Management solutions combining wireless TPMS telematics, tread wear analytics, thermal alerts, and lifecycle Cost-Per-Hour (CPH) tracking.",
      },
    ],
  }),
  component: TyreHealthProductPage,
});

const CORE_MODULES = [
  {
    title: "TPMS (Tyre Pressure Monitoring Systems)",
    desc: "Real-time wireless monitoring of tyre pressure and internal operating temperatures across all wheel positions.",
    icon: Radio,
    metric: "Wireless Telematics",
  },
  {
    title: "Tread Depth & Wear Analytics",
    desc: "Digital profiling to track wear patterns, identify mechanical alignment issues, and forecast replacement schedules.",
    icon: Activity,
    metric: "Digital Profiling",
  },
  {
    title: "Pressure & Temperature Compliance",
    desc: "Automated alerts for under-inflation, over-inflation, and thermal overload conditions on active routes.",
    icon: ThermometerSnowflake,
    metric: "Real-Time Alerts",
  },
  {
    title: "Lifecycle Cost Tracking (CPH)",
    desc: "Comprehensive cost-per-hour (CPH) tracking for individual tyres across the entire fleet from commissioning to retread.",
    icon: TrendingDown,
    metric: "CPH Optimization",
  },
];

const BUSINESS_BENEFITS = [
  {
    title: "Extended Operating Life",
    metric: "+25% Longevity",
    desc: "Extended tyre operating life through optimal pressure and temperature management.",
  },
  {
    title: "Reduced Blowout Risk",
    metric: "Zero Blowouts",
    desc: "Reduced risk of unexpected tyre blowouts on active haul roads and factory floors.",
  },
  {
    title: "Lower Overall Expenditure",
    metric: "Lower CPH",
    desc: "Lower overall tyre expenditure through proactive monitoring and lifecycle management.",
  },
  {
    title: "Improved Fleet Safety",
    metric: "100% Reliable",
    desc: "Improved fleet safety and operational reliability across demanding industrial duty cycles.",
  },
];

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Continuous Telematics",
    desc: "Wireless TPMS sensors stream pressure and temperature readings every few seconds to onboard gateways.",
  },
  {
    step: "02",
    title: "Automated Exception Alerts",
    desc: "Thermal spikes or pressure drops instantly trigger priority dashboard notifications and driver alerts.",
  },
  {
    step: "03",
    title: "Maintenance Intervention",
    desc: "System automatically dispatches scheduled service requests for pressure top-up, rotation, or alignment.",
  },
  {
    step: "04",
    title: "Retread & Replacement",
    desc: "Predictive tread-wear analytics forecast remaining lifespan, optimizing retread timing and parts ordering.",
  },
];

function TyreHealthProductPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* HERO BANNER */}
      <PageHero
        badge="INDUSTRIAL SOLUTIONS • FLEET TELEMATICS"
        title="Tyre Health Management"
        subtitle="Acceleron develops and implements Tyre Health Management solutions designed to optimize tyre performance, extend service life, and improve fleet safety. Combining sensor-based telematics, structured inspection schedules, and predictive analytics, our solutions help organizations manage tyre health across heavy off-highway machinery, mining trucks, and industrial transport fleets while controlling operating costs and preventing unexpected failures."
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: "Industrial Solutions", href: "/products" },
          { label: "Tyre Health" },
        ]}
        image="/Transportation_Industry.jpg"
        ctaText="Schedule a Live Demo"
        ctaHref="/contact"
        secondaryCtaText="Explore Modules"
        secondaryCtaHref="#modules"
        icon={
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2.5 shadow-glow">
            <Activity className="h-10 w-10 text-brand" />
          </div>
        }
      />

      {/* SECTION: OVERVIEW & OPERATIONAL FRAMEWORK */}
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
                Predictive Tyre Telematics for{" "}
                <span className="text-gradient">Heavy Fleets &amp; Haulage</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Tyres represent one of the single largest recurring operational expenses for heavy machinery and mining haul trucks. Acceleron's Tyre Health Management platform combines wireless IoT telemetry, structured pit-stop inspection apps, and algorithmic wear modeling to maximize hours before scrap.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="pt-4 flex flex-wrap gap-4">
                <div className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">Continuous TPMS</div>
                    <div className="text-xs text-muted-foreground">Wireless pressure &amp; heat tracking</div>
                  </div>
                </div>
                <div className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">CPH Cost Modeling</div>
                    <div className="text-xs text-muted-foreground">Full lifecycle unit economics</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-border/70 bg-muted/20 p-8 space-y-6 shadow-card">
                <div className="text-xs font-bold uppercase tracking-widest text-brand-red">
                  Tyre Health At A Glance
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Maximizing Heavy Fleet Uptime
                </h3>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Eliminates sudden catastrophic blowouts on haul roads and sites.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Enforces strict pressure compliance through automated deviation alerts.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Detects alignment and suspension abnormalities early via wear patterns.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Seamlessly integrates with WOMS and SAP PM for maintenance dispatch.</span>
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
              Core Modules &amp; <span className="text-gradient">Telematics Architecture</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Engineered for off-highway trucks, mining equipment, port handlers, and industrial transport fleets.
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
              Fleet Lifecycle Execution
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              4-Phase Operational Workflow
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Continuous monitoring, automated exception thresholds, scheduled rotation, and predictive retread planning.
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
              Direct cost savings and safety enhancements validated across demanding mining and logistics sites.
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
              Optimize Fleet Tyre Life &amp; Cut Haulage Costs
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Schedule a technical session with our fleet telematics specialists to discuss sensor hardware integration, CAN bus connectivity, and CPH dashboards.
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
