import { createFileRoute } from "@tanstack/react-router";
import {
  CheckCircle,
  ArrowUpRight,
  ArrowRight,
  Briefcase,
  Layers,
  Headphones,
  Cloud,
  Bot,
  AlertOctagon,
  Gauge,
  TrendingDown,
  Sparkles,
  Compass,
  BarChart3,
  Rocket,
  Cpu,
  ShieldCheck,
  TrendingUp,
  ChevronDown,
} from "lucide-react";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { PageHero } from "../../components/ui/PageHero";
import { ProcessFlow } from "../../components/ui/ProductShowcase";
import { SAPLogo } from "../../components/ui/Icons";
import { Link } from "@tanstack/react-router";
import { getAssetUrl } from "../../lib/assets";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export const Route = createFileRoute("/services/sap")({
  component: SAPPage,
});

const SAP_BANNERS = [
  "/SAP_Implementation_Banner.png",
  "/SAP_Integration_Banner.png",
  "/SAP_AMS_Banner.png",
  "/SAP_EWS_Banner.png",
];

const SAP_METRICS = [
  {
    value: "40+",
    label: "Enterprise SAP Engagements",
    icon: Briefcase,
  },
  {
    value: "10+",
    label: "S/4HANA Implementations",
    subtext: "(Greenfield, Bluefield, Brownfield)",
    icon: Layers,
  },
  {
    value: "25+",
    label: "Support & AMS Engagements",
    icon: Headphones,
  },
  {
    value: "10+",
    label: "BTP & AI Cloud Deployments",
    subtext: "(BTP Architecture & Joule AI)",
    icon: Cloud,
  },
];

const CLIENT_CHALLENGES = [
  {
    title: "Business Disruption",
    text: "Preventing recurring module issues from impacting critical manufacturing, logistics, and financial operations.",
    icon: AlertOctagon,
  },
  {
    title: "Slow System Performance",
    text: "Eliminating database and transaction bottlenecks to improve productivity and user experience.",
    icon: Gauge,
  },
  {
    title: "Rising Support Overhead",
    text: "Moving from reactive maintenance to proactive, tool-based governance.",
    icon: TrendingDown,
  },
  {
    title: "Underutilised Capabilities",
    text: "Unlocking dormant SAP SAC analytics and Fiori mobile workflows.",
    icon: Sparkles,
  },
  {
    title: "Complex Cloud Migration",
    text: "Navigating S/4HANA on RISE or hybrid cloud with a low-risk roadmap.",
    icon: Compass,
  },
];

const SAP_CAPABILITIES = [
  {
    title: "SAP S/4HANA Implementation",
    text: "Greenfield, Bluefield, and Brownfield migrations to S/4HANA with minimal business disruption.",
    href: "/services/sap/sap-s-4hana-implementation",
    logo: "/sap_s4hana-transparentbg.png",
  },
  {
    title: "SAP Application Management Services (AMS)",
    text: "Proactive 24/7 monitoring, incident management, ITSM ticketing, and continuous process optimization.",
    href: "/services/sap/sap-ams",
    logo: "/sap_s4hana-transparentbg.png",
  },
  {
    title: "RISE with S/4HANA",
    text: "End-to-end business transformation as a service — infrastructure, platform, and enterprise applications.",
    href: "/services/sap/rise-with-s-4hana-implementation",
    logo: "/vital-wires-Rise-with-SAP-3.png",
  },
  {
    title: "SAP Cloud Integration (CPI & BTP)",
    text: "Seamless connectivity across SAP, non-SAP systems, IoT sensors, and dealer portals.",
    href: "/services/sap/sap-integration",
    logo: "/sap-cx-logo.jpg",
  },
  {
    title: "SAP Extended Warehouse Management (EWM)",
    text: "Optimize pit-to-port inventory, yard operations, and complex distribution networks.",
    href: "/contact",
    logo: "/sap_s4hana-transparentbg.png",
  },
  {
    title: "AuditComply & SAP Governance",
    text: "Automated SAP ECC and S/4HANA compliance covering Segregation of Duties (SoD), ITGC controls, and audit trails.",
    href: "/services/sap/audit-comply",
    logo: "/sap_s4hana-transparentbg.png",
  },
];

const BUSINESS_VALUES = [
  {
    title: "Better Visibility",
    desc: "Real-time SAC dashboards and reporting across supply chain, sales, and finance.",
    icon: BarChart3,
  },
  {
    title: "Faster Innovation",
    desc: "Adopt modern SAP S/4HANA features without operational disruption.",
    icon: Rocket,
  },
  {
    title: "Greater Efficiency",
    desc: "Automated workflows and reduced manual reconciliations.",
    icon: Cpu,
  },
  {
    title: "Sustainable Growth",
    desc: "Scalable SAP architecture aligned with long-term business goals.",
    icon: TrendingUp,
  },
  {
    title: "Business Continuity",
    desc: "24/7 proactive system monitoring and high-availability operations.",
    icon: ShieldCheck,
  },
];

function SAPPage() {
  const [index, setIndex] = useState(0);
  const [showAllChallenges, setShowAllChallenges] = useState(false);
  const [showAllCapabilities, setShowAllCapabilities] = useState(false);
  const [showAllValues, setShowAllValues] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % SAP_BANNERS.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <PageHero
        title="SAP Solutions"
        subtitle="Comprehensive SAP expertise across S/4HANA, RISE, BTP, and AMS — tailored for heavy industry and global enterprises."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "SAP" }
        ]}
        image="/sap/SAP Hub - SAP Home Cover page Acceleron Solutions.jpg"
        icon={
          <div className="h-20 w-auto bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20 shadow-xl flex items-center justify-center">
            <img src={getAssetUrl("/sap_s4hana-transparentbg.png")} alt="SAP" className="h-12 w-auto object-contain drop-shadow-lg" />
          </div>
        }
      />

      {/* SECTION 2: SAP AT A GLANCE (Key Metrics) */}
      <section className="relative overflow-hidden bg-background py-14 sm:py-20 border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red mb-3">
                SAP at a Glance
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Key Metrics Driving <span className="text-gradient">SAP Excellence</span>
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground mt-3">
                Proven scale, enterprise agility, and deep architectural depth across modern SAP ecosystems.
              </p>
            </div>
          </Reveal>

          {/* 4-GRID KEY METRICS (2x2 on Mobile, 4-col on Desktop) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {SAP_METRICS.map((item, idx) => (
              <Reveal key={item.label} delay={0.06 * idx} className="h-full">
                <div className="relative group h-full rounded-2xl border border-border/70 bg-card/60 hover:bg-card p-3.5 sm:p-6 backdrop-blur-md shadow-soft hover:shadow-elevated hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden">
                  <div className="absolute -top-12 -right-12 h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-brand/5 group-hover:bg-brand/10 blur-xl transition-all pointer-events-none" />
                  <div>
                    <div className="flex items-center justify-between mb-2.5 sm:mb-4">
                      <div className="h-8 w-8 sm:h-11 sm:w-11 rounded-lg sm:rounded-xl bg-brand/10 text-brand flex items-center justify-center group-hover:scale-110 transition-transform">
                        <item.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                      </div>
                    </div>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground group-hover:text-brand transition-colors tracking-tight mb-1 sm:mb-2">
                      {item.value}
                    </div>
                    <h3 className="text-xs sm:text-sm font-bold text-foreground leading-snug">
                      {item.label}
                    </h3>
                    {item.subtext && (
                      <p className="text-[10px] sm:text-xs text-muted-foreground mt-1 leading-relaxed">
                        {item.subtext}
                      </p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: STRATEGIC IMPERATIVE (CLIENT CHALLENGES) */}
      <section className="relative overflow-hidden bg-muted/20 py-14 sm:py-20 border-b border-border/50">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red mb-3">
                Strategic Imperative
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
                Your SAP environment should enable your business —{" "}
                <span className="text-gradient">not slow it down.</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mt-4 leading-relaxed">
                We help enterprise leaders overcome 5 core operational challenges:
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
            {CLIENT_CHALLENGES.map((card, i) => (
              <div key={card.title} className={i >= 3 && !showAllChallenges ? "hidden sm:block h-full" : "block h-full"}>
                <Reveal delay={0.06 * i} className="h-full">
                  <div className="group relative h-full rounded-2xl border border-border/70 bg-card p-5 sm:p-6 shadow-soft hover:shadow-elevated hover:border-brand-red/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                    <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-brand-red/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center group-hover:scale-110 transition-transform">
                          <card.icon className="h-5 w-5" />
                        </div>
                        <span className="text-xs font-mono font-bold text-muted-foreground/60 group-hover:text-brand-red transition-colors">
                          0{i + 1}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 group-hover:text-brand-red transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {card.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>

          {CLIENT_CHALLENGES.length > 3 && (
            <div className="sm:hidden pt-5 text-center">
              <button
                type="button"
                onClick={() => setShowAllChallenges(!showAllChallenges)}
                className="inline-flex items-center gap-2 text-xs font-bold text-brand-red hover:text-red-700 py-2.5 px-5 rounded-full border border-brand-red/30 bg-brand-red/5 hover:bg-brand-red/10 shadow-sm transition-all cursor-pointer"
                aria-expanded={showAllChallenges}
              >
                <span>{showAllChallenges ? "Show fewer challenges" : `+ View ${CLIENT_CHALLENGES.length - 3} more challenges`}</span>
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${showAllChallenges ? "rotate-180" : ""}`} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 4: OUR SAP CAPABILITIES */}
      <section className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-14 sm:py-20 lg:py-24">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red mb-3">
              Practice Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Core SAP <span className="text-gradient">Capabilities</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base">
              Comprehensive SAP expertise across the full product suite, tailored for heavy industry and global enterprises.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SAP_CAPABILITIES.map((cap, i) => (
            <div key={cap.title} className={i >= 3 && !showAllCapabilities ? "hidden md:block h-full" : "block h-full"}>
              <Reveal delay={i * 0.08} className="h-full">
                <Link to={cap.href as any} className="block h-full group">
                  <div className="rounded-2xl border border-border bg-card p-6 sm:p-8 h-full transition-all hover:border-brand/40 hover:shadow-glow flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-4">
                        <div className="flex items-start gap-3">
                          {cap.logo ? (
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white p-1.5 shadow-sm border border-border/40">
                              <img
                                src={getAssetUrl(cap.logo)}
                                alt={cap.title}
                                loading="lazy"
                                decoding="async"
                                className="h-full w-full object-contain"
                              />
                            </div>
                          ) : (
                            <img
                              src={getAssetUrl("/sap_s4hana-transparentbg.png")}
                              alt="SAP"
                              loading="lazy"
                              decoding="async"
                              className="h-7 w-7 object-contain shrink-0 mt-0.5"
                            />
                          )}
                          <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-brand transition-colors">
                            {cap.title}
                          </h3>
                        </div>
                        <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                      </div>
                      <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm">
                        {cap.text}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between">
                      <span className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white px-4 py-2.5 text-xs font-bold shadow-md shadow-red-600/25 group-hover:shadow-red-600/40 group-hover:from-red-500 group-hover:to-rose-500 transition-all w-full sm:w-auto">
                        <span>Explore Details & Solutions</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            </div>
          ))}
        </div>

        {SAP_CAPABILITIES.length > 3 && (
          <div className="md:hidden pt-5 text-center">
            <button
              type="button"
              onClick={() => setShowAllCapabilities(!showAllCapabilities)}
              className="inline-flex items-center gap-2 text-xs font-bold text-brand-red hover:text-red-700 py-2.5 px-5 rounded-full border border-brand-red/30 bg-brand-red/5 hover:bg-brand-red/10 shadow-sm transition-all cursor-pointer"
              aria-expanded={showAllCapabilities}
            >
              <span>{showAllCapabilities ? "Show fewer capabilities" : `+ View ${SAP_CAPABILITIES.length - 3} more capabilities`}</span>
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${showAllCapabilities ? "rotate-180" : ""}`} />
            </button>
          </div>
        )}
      </section>

      {/* SECTION 5: BUSINESS VALUE DELIVERED */}
      <section className="relative overflow-hidden bg-muted/20 py-14 sm:py-20 border-y border-border/50">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red mb-3">
                Value Realization
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Business Value <span className="text-gradient">Delivered</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mt-3">
                Measurable business outcomes driving agility, transparency, and operational resilience.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5">
            {BUSINESS_VALUES.map((val, idx) => (
              <div key={val.title} className={idx >= 3 && !showAllValues ? "hidden md:block h-full" : "block h-full"}>
                <Reveal delay={0.06 * idx} className="h-full">
                  <div className="group relative h-full rounded-2xl border border-border/70 bg-card p-5 sm:p-6 shadow-soft hover:shadow-elevated hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-brand/10 text-brand flex items-center justify-center group-hover:scale-110 transition-transform">
                          <val.icon className="h-5 w-5" />
                        </div>
                        <span className="text-xs font-mono font-bold text-muted-foreground/60 group-hover:text-brand transition-colors">
                          0{idx + 1}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 group-hover:text-brand transition-colors">
                        {val.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>

          {BUSINESS_VALUES.length > 3 && (
            <div className="md:hidden pt-5 text-center">
              <button
                type="button"
                onClick={() => setShowAllValues(!showAllValues)}
                className="inline-flex items-center gap-2 text-xs font-bold text-brand-red hover:text-red-700 py-2.5 px-5 rounded-full border border-brand-red/30 bg-brand-red/5 hover:bg-brand-red/10 shadow-sm transition-all cursor-pointer"
                aria-expanded={showAllValues}
              >
                <span>{showAllValues ? "Show fewer values" : `+ View ${BUSINESS_VALUES.length - 3} more value pillars`}</span>
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${showAllValues ? "rotate-180" : ""}`} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 6: IMPLEMENTATION METHODOLOGY */}
      <WaveDivider from="white" to="dark" />

      <section className="section-dark container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Implementation Methodology</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Our proven SAP delivery framework ensures zero business disruption.</p>
          </div>
        </Reveal>
        <ProcessFlow
          steps={[
            { step: "01", title: "Discovery", desc: "Process mapping and gap analysis" },
            { step: "02", title: "Design", desc: "Solution architecture and blueprinting" },
            { step: "03", title: "Build", desc: "Configuration and custom development" },
            { step: "04", title: "Deploy", desc: "Data migration, testing, and go-live" },
          ]}
        />
      </section>

      <WaveDivider from="dark" to="white" />

      {/* SECTION 7: BOTTOM CTA BANNER */}
      <section className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 sm:py-24 text-center">
        <Reveal>
          <div className="rounded-3xl border border-brand/40 bg-brand-gradient/10 p-8 sm:p-12 md:p-16 backdrop-blur-xl relative overflow-hidden shadow-glow max-w-5xl mx-auto">
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red">
                Next Steps
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                Ready to Transform with <span className="text-gradient">SAP?</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Connect with our certified SAP architects and enterprise specialists to architect your modernization journey.
              </p>
              <div className="pt-2">
                <Link to="/contact" className="btn btn-primary btn-lg inline-flex items-center gap-2 shadow-lg shadow-brand-red/20">
                  Talk to Our SAP Experts <ArrowUpRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
