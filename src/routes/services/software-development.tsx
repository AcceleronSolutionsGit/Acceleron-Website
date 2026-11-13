import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Code2,
  Sparkles,
  Cpu,
  CheckCircle2,
  TrendingUp,
  Layers,
  ArrowRight,
  Mail,
  Phone,
  Check,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { PageHero } from "../../components/ui/PageHero";
import { ProcessFlow } from "../../components/ui/ProductShowcase";
import { Link } from "@tanstack/react-router";
import { getAssetUrl } from "../../lib/assets";

export const Route = createFileRoute("/services/software-development")({
  head: () => ({
    meta: [
      { title: "Custom Software Development — Acceleron Solutions" },
      {
        name: "description",
        content:
          "Custom, high-performance software, enterprise applications, and AI-driven solutions designed around unique business needs to streamline workflows and deliver measurable operational impact.",
      },
    ],
  }),
  component: CustomSoftwareDevelopmentPage,
});

const PRACTICE_PILLARS = [
  {
    title: "Custom AI Application Development",
    slug: "custom-ai-application-development",
    href: "/services/it-custom-solutions/custom-ai-application-development",
    desc: "Intelligent automation, machine learning models, natural language processing tools, and predictive analytics embedded directly into enterprise workflows to unlock operational efficiency and smarter decision-making.",
    icon: Sparkles,
    badge: "APPLIED AI & AUTOMATION",
    features: [
      "Intelligent automation & enterprise workflow copilots",
      "Custom machine learning models & NLP pipelines",
      "Predictive analytics embedded into business operations",
      "Autonomous multi-agent swarms for data & document processing",
    ],
  },
  {
    title: "Bespoke Enterprise Application Development",
    slug: "custom-software-application-development",
    href: "/services/it-custom-solutions/custom-software-application-development",
    desc: "Full-stack web and mobile applications engineered for high scalability, security, and seamless integration with legacy ERP systems.",
    icon: Code2,
    badge: "FULL-STACK ENGINEERING",
    features: [
      "Full-stack web & mobile apps (React, Node.js, Python, Java)",
      "Enterprise-grade scalability & zero-trust security",
      "Seamless integration with SAP, Zoho & legacy ERP platforms",
      "Role-based access governance & field workforce enablement",
    ],
  },
  {
    title: "Modernization & API Integration",
    slug: "modernization-api-integration",
    href: "/contact#form",
    desc: "Transforming legacy software architectures into cloud-native microservices with secure, high-throughput API connections.",
    icon: Cpu,
    badge: "CLOUD-NATIVE & MICROSERVICES",
    features: [
      "Monolithic legacy refactoring into modular microservices",
      "High-throughput RESTful, GraphQL & event-driven APIs",
      "Containerized deployment with Kubernetes & CI/CD automation",
      "Zero-downtime cutover with automated regression testing",
    ],
  },
];

const BUSINESS_BENEFITS = [
  {
    title: "Operational Alignment",
    metric: "100% Tailored",
    desc: "Precisely aligned software solutions matching exact operational workflows without unnecessary bloat.",
    icon: CheckCircle2,
  },
  {
    title: "Competitive Edge",
    metric: "Proprietary AI",
    desc: "Competitive differentiation through proprietary digital tools and embedded AI capabilities.",
    icon: TrendingUp,
  },
  {
    title: "Scalable Architecture",
    metric: "Cloud-Native",
    desc: "Scalable architecture designed for long-term maintainability and future enterprise growth.",
    icon: Layers,
  },
];

const PROPRIETARY_IP = [
  {
    name: "WOMS",
    fullName: "Work Order Management System",
    logo: "/woms.png",
    desc: "Streamlined work order allocation, real-time task tracking, and ERP integration.",
    stat: "Real-Time Task Tracking",
    href: "/contact",
  },
  {
    name: "QMS",
    fullName: "Workshop Quality Management",
    logo: "/qms.png",
    desc: "AI-driven defect detection, smart KPI forecasting, and component tracking.",
    stat: "AI Defect Detection",
    href: "/products/qms",
  },
  {
    name: "iFSM",
    fullName: "Field Service Management",
    logo: "/IFSM.png",
    desc: "Digitized field operations reducing call assignment time from 60 mins to under 2 mins.",
    stat: "60 mins → <2 mins",
    href: "/contact",
  },
  {
    name: "e-CAS",
    fullName: "Compliance System",
    logo: "/Acceleron_Short_Logo.png",
    desc: "Automated compliance scheduling reducing administrative burden by 40%.",
    stat: "-40% Admin Burden",
    href: "/contact",
  },
];

const DELIVERY_STEPS = [
  {
    step: "01",
    title: "Discover & Blueprint",
    desc: "In-depth analysis of workflows, user journeys, technical constraints, and data schemas.",
  },
  {
    step: "02",
    title: "Agile Sprint Build",
    desc: "Iterative bi-weekly delivery cycles building production-grade UI, microservices, and APIs.",
  },
  {
    step: "03",
    title: "Security Hardening & VAPT",
    desc: "Automated unit testing, static/dynamic code scans, stress testing, and zero-trust verification.",
  },
  {
    step: "04",
    title: "Deploy & DevOps AMS",
    desc: "Containerized CI/CD rollout, user onboarding, and continuous SLA-backed support.",
  },
];

const CLIENT_SHOWCASE = [
  { name: "Caterpillar", logo: "/clientele/uniform/caterpillar.png" },
  { name: "Exide", isText: true },
  { name: "MP Birla Group", logo: "/clientele/uniform/mp-birla.png" },
  { name: "PCBL", logo: "/clientele/uniform/pcbl.png" },
  { name: "Resurgent Mining Solutions", logo: "/clientele/uniform/resurgent-mining.png" },
  { name: "mJunction", logo: "/clientele/uniform/mjunction.png" },
  { name: "Shyam Steel", logo: "/clientele/uniform/shyam-steel.png" },
  { name: "Skipper Pipes", logo: "/clientele/uniform/skipper-pipes.png" },
  { name: "Viacom18", logo: "/clientele/uniform/viacom-18.png" },
];

function CustomSoftwareDevelopmentPage() {
  const [showAllPlatforms, setShowAllPlatforms] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* SECTION 1: HERO */}
      <PageHero
        badge="CUSTOM SOFTWARE & ENTERPRISE ENGINEERING"
        title="Custom Software Development"
        subtitle="Custom, high-performance software, enterprise applications, and AI-driven solutions designed around unique business needs to streamline workflows and deliver measurable operational impact."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Custom Software Development" },
        ]}
        image="/IT & Custom Solutions/IT & Custom Solutions - Acceleron Solutions.png"
        ctaText="Build Your Custom Solution"
        ctaHref="/contact#form"
        secondaryCtaText="Explore Custom AI"
        secondaryCtaHref="/services/it-custom-solutions/custom-ai-application-development"
      />

      {/* SECTION 2: BUSINESS BENEFITS */}
      <section className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-12 sm:py-16 -mt-8 sm:-mt-12">
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {BUSINESS_BENEFITS.map((benefit, idx) => (
            <Reveal key={benefit.title} delay={idx * 0.1} className="h-full">
              <div className="rounded-3xl border border-border/70 bg-card/95 backdrop-blur-md p-6 sm:p-8 h-full shadow-elevated hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-12 w-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center">
                      <benefit.icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-brand px-2.5 py-1 rounded-full bg-brand/10">
                      {benefit.metric}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION 3: CORE PRACTICE PILLARS & SOLUTIONS */}
      <section id="offerings" className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-12 sm:py-20">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red mb-3">
              Core Practice Pillars & Solutions
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Enterprise Software <span className="text-gradient">Engineered for Scale</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              From applied artificial intelligence and bespoke full-stack applications to cloud modernization, we architect digital systems that drive measurable operational performance.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {PRACTICE_PILLARS.map((pillar, i) => (
            <Reveal key={pillar.slug} delay={i * 0.1} className="h-full">
              <div className="rounded-3xl border border-border/70 bg-card p-7 sm:p-8 h-full transition-all duration-300 hover:border-brand/40 hover:shadow-elevated hover:-translate-y-1 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="h-12 w-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center group-hover:scale-110 transition-transform">
                      <pillar.icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-muted-foreground/60 group-hover:text-brand transition-colors">
                      0{i + 1}
                    </span>
                  </div>

                  <div className="text-xs font-bold uppercase tracking-wider text-brand-red mb-2">
                    {pillar.badge}
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-brand transition-colors">
                    {pillar.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {pillar.desc}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-border/50 mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80 mb-2">
                      Key Capabilities
                    </div>
                    {pillar.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/80">
                        <Check className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <Link
                    to={pillar.href as any}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white px-5 py-2.5 text-xs sm:text-sm font-bold shadow-md shadow-red-600/30 hover:shadow-lg hover:shadow-red-600/50 hover:from-red-500 hover:to-rose-500 transition-all w-full sm:w-auto"
                  >
                    <span>Learn More & Solutions</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION 4: PROPRIETARY IP SHOWCASE */}
      <section className="relative overflow-hidden bg-muted/20 py-14 sm:py-20 border-y border-border/50">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red mb-3">
                Proprietary IP & Platforms
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
                Proven Custom Platforms <span className="text-gradient">Built by Acceleron</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore pre-engineered enterprise frameworks and custom digital platforms deployed across heavy industries and enterprise operations.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROPRIETARY_IP.map((ip, i) => (
              <div key={ip.name} className={i >= 3 && !showAllPlatforms ? "hidden sm:block h-full" : "block h-full"}>
                <Reveal delay={i * 0.08} className="h-full">
                  <Link to={ip.href as any} className="block h-full group">
                    <div className="rounded-3xl border border-border/70 bg-card p-6 h-full shadow-soft hover:shadow-elevated hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="h-12 w-28 rounded-xl bg-slate-900 dark:bg-slate-950 px-3 py-2 border border-slate-700/60 dark:border-slate-800 shadow-md flex items-center justify-center group-hover:border-brand/40 transition-colors">
                            <img
                              src={getAssetUrl(ip.logo)}
                              alt={ip.name}
                              loading="lazy"
                              decoding="async"
                              className="h-full w-full object-contain"
                            />
                          </div>
                          <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </div>

                        <div className="mb-2">
                          <div className="text-xs font-bold uppercase tracking-wider text-brand-red">
                            {ip.name}
                          </div>
                          <h3 className="text-lg font-bold text-foreground group-hover:text-brand transition-colors">
                            {ip.fullName}
                          </h3>
                        </div>

                        <div className="inline-block px-2.5 py-1 rounded-md bg-brand/10 text-brand text-[11px] font-bold mb-3">
                          {ip.stat}
                        </div>

                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {ip.desc}
                        </p>
                      </div>

                      <div className="mt-5 pt-3.5 border-t border-border/50 flex items-center justify-between">
                        <span className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white px-4 py-2 text-xs font-bold shadow-md shadow-red-600/25 group-hover:shadow-red-600/40 group-hover:from-red-500 group-hover:to-rose-500 transition-all w-full sm:w-auto">
                          <span>Explore Solution</span>
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              </div>
            ))}
          </div>

          {PROPRIETARY_IP.length > 3 && (
            <div className="sm:hidden pt-5 text-center">
              <button
                type="button"
                onClick={() => setShowAllPlatforms(!showAllPlatforms)}
                className="inline-flex items-center gap-2 text-xs font-bold text-brand-red hover:text-red-700 py-2.5 px-5 rounded-full border border-brand-red/30 bg-brand-red/5 hover:bg-brand-red/10 shadow-sm transition-all cursor-pointer"
                aria-expanded={showAllPlatforms}
              >
                <span>{showAllPlatforms ? "Show fewer platforms" : `+ View ${PROPRIETARY_IP.length - 3} more platform`}</span>
                <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${showAllPlatforms ? "rotate-180" : ""}`} />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 5: HOW WE DELIVER */}
      <WaveDivider from="white" to="dark" />

      <section className="section-dark container mx-auto px-6 max-w-7xl relative z-10 py-20 sm:py-24">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red mb-3">
              Delivery Methodology
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              How We <span className="text-gradient">Deliver</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
              Our proven engineering lifecycle guarantees zero operational disruption, enterprise-grade security, and transparent sprint milestones.
            </p>
          </div>
        </Reveal>
        <ProcessFlow steps={DELIVERY_STEPS} />
      </section>

      <WaveDivider from="dark" to="white" />

      {/* SECTION 6: CLIENT SHOWCASE */}
      <section className="relative overflow-hidden bg-muted/20 py-14 sm:py-20 border-y border-border/50">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red mb-3">
                Proven Client Impact
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
                Delivering Digital Excellence for <span className="text-gradient">Global Enterprises</span>
              </h2>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                Trusted by heavy industry leaders, multinational conglomerates, and fast-growing organizations.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
            {CLIENT_SHOWCASE.map((client, idx) => (
              <Reveal key={client.name} delay={idx * 0.05}>
                <div className="group flex items-center justify-center p-4 sm:p-5 rounded-2xl border border-border/70 bg-white/95 dark:bg-card/90 backdrop-blur-md hover:border-brand/50 hover:shadow-glow hover:-translate-y-0.5 transition-all h-28 sm:h-32 text-center">
                  {client.logo ? (
                    <img
                      src={getAssetUrl(client.logo)}
                      alt={client.name}
                      loading="lazy"
                      decoding="async"
                      className="max-h-14 sm:max-h-16 max-w-[85%] object-contain filter transition-transform group-hover:scale-105"
                    />
                  ) : (
                    <div className="text-base sm:text-lg font-black tracking-wider text-foreground group-hover:text-brand transition-colors">
                      {client.name}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: BOTTOM CTA */}
      <section className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 sm:py-24 text-center">
        <Reveal>
          <div className="rounded-3xl border border-brand/40 bg-brand-gradient/10 p-8 sm:p-12 md:p-16 backdrop-blur-xl relative overflow-hidden shadow-glow max-w-5xl mx-auto">
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red">
                Next Steps
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                Build Your Custom <span className="text-gradient">Enterprise Solution</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Schedule a consultation with our senior solution architects to evaluate your software, AI, or modernization roadmap.
              </p>

              <div className="pt-2">
                <Link
                  to="/contact"
                  hash="form"
                  className="btn btn-primary btn-lg inline-flex items-center gap-2 shadow-lg shadow-brand-red/20"
                >
                  Consult with Our Architects <ArrowUpRight className="h-5 w-5" />
                </Link>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs sm:text-sm text-foreground/80 border-t border-border/50 max-w-md mx-auto">
                <a
                  href="mailto:enquiry@acceleronsolutions.io"
                  className="inline-flex items-center gap-2 hover:text-brand transition-colors font-medium"
                >
                  <Mail className="h-4 w-4 text-brand" />
                  <span>enquiry@acceleronsolutions.io</span>
                </a>
                <span className="text-border">|</span>
                <a
                  href="tel:+913335346222"
                  className="inline-flex items-center gap-2 hover:text-brand transition-colors font-medium"
                >
                  <Phone className="h-4 w-4 text-brand" />
                  <span>+91 33 3534 6222</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
