import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ShieldCheck,
  ShieldAlert,
  MonitorSmartphone,
  Activity,
  SlidersHorizontal,
  Cloud,
  Cpu,
  Mail,
  Phone,
  Check,
  ArrowRight,
  Server,
} from "lucide-react";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { PageHero } from "../../components/ui/PageHero";
import { ProcessFlow } from "../../components/ui/ProductShowcase";
import { Link } from "@tanstack/react-router";
import { getAssetUrl } from "../../lib/assets";

export const Route = createFileRoute("/services/it-infrastructure")({
  head: () => ({
    meta: [
      { title: "IT Infrastructure Services — Acceleron Solutions" },
      {
        name: "description",
        content:
          "Acceleron delivers secure, scalable IT infrastructure solutions, combining resilient networking, advanced cybersecurity, and proactive systems management to ensure operational continuity, high availability, and seamless digital growth.",
      },
    ],
  }),
  component: ITInfrastructurePage,
});

const PRACTICE_PILLARS = [
  {
    title: "Network Security Implementation",
    slug: "network-security-implementation",
    href: "/services/it-custom-solutions/network-security-implementation",
    desc: "High-performance software-defined networking (SD-WAN), secure VPN tunnels, zero-trust architecture, and robust perimeter defense ensuring secure plant-to-office connectivity.",
    icon: ShieldCheck,
    badge: "ZERO-TRUST & NETWORK DEFENSE",
    features: [
      "Software-defined networking (SD-WAN) & hybrid cloud connectivity",
      "Secure site-to-site & plant-to-office encrypted VPN tunnels",
      "Zero-Trust Network Access (ZTNA) & micro-segmentation",
      "Next-Gen Firewall (NGFW) deployment (Fortinet, Check Point, Sophos)",
    ],
  },
  {
    title: "Enterprise IT Security Audits & Vulnerability Assessment",
    slug: "security-audits",
    href: "/services/it-custom-solutions/security-audits",
    desc: "Comprehensive security evaluations, vulnerability scans, penetration testing, and thorough IT system audits to identify posture gaps, mitigate cyber risks, and ensure regulatory compliance.",
    icon: ShieldAlert,
    badge: "VAPT & REGULATORY AUDIT",
    features: [
      "Vulnerability Assessment & Penetration Testing (VAPT)",
      "Enterprise IT system audits & ITGC governance reviews",
      "Compliance & statutory risk mapping (ISO 27001, DPDP)",
      "Actionable remediation roadmaps & hardening guidance",
    ],
  },
  {
    title: "ManageEngine Solutions",
    slug: "manageengine",
    href: "/services/manageengine",
    desc: "Advanced IT service management (ITSM), endpoint control, operations monitoring, and unified IT management powered by ManageEngine integration.",
    icon: MonitorSmartphone,
    badge: "ITSM, MDM & IT OPERATIONS",
    features: [
      "Endpoint Central & Mobile Device Management (MDM)",
      "OpManager proactive network switch & server monitoring",
      "ServiceDesk Plus ITIL-aligned service desk automation",
      "Active Directory governance & security auditing",
    ],
  },
];

const BUSINESS_BENEFITS = [
  {
    title: "Maximized Uptime",
    metric: "99.99%",
    desc: "Maximized system uptime and application availability across corporate and operational environments.",
    icon: Activity,
  },
  {
    title: "Strengthened Security",
    metric: "Zero-Trust",
    desc: "Strengthened security posture protecting sensitive corporate data against sophisticated threats.",
    icon: ShieldCheck,
  },
  {
    title: "Streamlined Governance",
    metric: "Optimized TCO",
    desc: "Streamlined IT governance, automated monitoring, and optimized infrastructure total cost of ownership (TCO).",
    icon: SlidersHorizontal,
  },
];

const PARTNER_ECOSYSTEM = [
  {
    category: "Cloud & Hybrid Infrastructure",
    icon: Cloud,
    partners: ["AWS", "Microsoft Azure", "Google Cloud Platform", "Zimbra"],
  },
  {
    category: "Cybersecurity & Zero-Trust",
    icon: ShieldCheck,
    partners: ["Fortinet", "Zscaler", "Check Point", "CrowdStrike", "Sophos"],
  },
  {
    category: "Unified Operations & ITSM",
    icon: Server,
    partners: ["ManageEngine", "Cisco", "Matrix", "Honeywell"],
  },
];

const INFRASTRUCTURE_STEPS = [
  {
    step: "01",
    title: "Assessment & Topology Mapping",
    desc: "Evaluate existing on-premise, cloud, and network perimeter for capacity, vulnerabilities, and reliability.",
  },
  {
    step: "02",
    title: "Architecture & Security Hardening",
    desc: "Design high-availability SD-WAN fabrics, enterprise email domains, and zero-trust microsegmentation.",
  },
  {
    step: "03",
    title: "Deployment & Zero-Downtime Migration",
    desc: "Execute seamless cutovers, implement next-gen firewalls, and deploy redundant gateways.",
  },
  {
    step: "04",
    title: "24/7 Managed NOC & SOC Operations",
    desc: "Continuous proactive telemetry, hardware lifecycle AMC, and SLA-driven rapid incident response.",
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

function ITInfrastructurePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* SECTION 1: HERO */}
      <PageHero
        badge="HYBRID CLOUD, NETWORKING & ENTERPRISE SECURITY"
        title="IT Infrastructure Services"
        subtitle="Acceleron delivers secure, scalable IT infrastructure solutions, combining resilient networking, advanced cybersecurity, and proactive systems management to ensure operational continuity, high availability, and seamless digital growth."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "IT Infrastructure Services" },
        ]}
        image="/IT & Custom Solutions/IT & Custom Solutions - Acceleron Solutions.png"
        ctaText="Secure Your Infrastructure"
        ctaHref="/contact#form"
        secondaryCtaText="Explore ManageEngine"
        secondaryCtaHref="/services/manageengine"
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
              Resilient Infrastructure <span className="text-gradient">Engineered for 99.99% Uptime</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Comprehensive capabilities covering network defense, zero-trust perimeter security, penetration testing, compliance audits, and unified IT management.
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

      {/* SECTION 4: PARTNER ECOSYSTEM */}
      <section className="relative overflow-hidden bg-muted/20 py-14 sm:py-20 border-y border-border/50">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red mb-3">
                Partner Ecosystem
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
                Powered by <span className="text-gradient">World-Class Technology Leaders</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                We partner with global technology and cybersecurity pioneers to deliver zero-trust security and high-availability enterprise infrastructure.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {PARTNER_ECOSYSTEM.map((cat, idx) => (
              <Reveal key={cat.category} delay={idx * 0.1} className="h-full">
                <div className="rounded-3xl border border-border/70 bg-card p-6 sm:p-8 h-full shadow-soft hover:shadow-elevated hover:border-brand/30 transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3.5 mb-6">
                      <div className="h-11 w-11 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                        <cat.icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-lg font-bold text-foreground">
                        {cat.category}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2.5">
                      {cat.partners.map((partner) => (
                        <div
                          key={partner}
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-muted/40 hover:bg-muted/70 border border-border/60 text-xs sm:text-sm font-semibold text-foreground transition-colors"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                          {partner}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
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
              Our structured infrastructure lifecycle guarantees uninterrupted plant-to-office operations, zero-trust protection, and SLA-backed continuous support.
            </p>
          </div>
        </Reveal>
        <ProcessFlow steps={INFRASTRUCTURE_STEPS} />
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
                Securing Operations for <span className="text-gradient">Industry Leaders</span>
              </h2>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                Trusted by manufacturing giants, logistics leaders, and high-security enterprise environments.
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

      {/* SECTION 7: BOTTOM CTA BANNER */}
      <section className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 sm:py-24 text-center">
        <Reveal>
          <div className="rounded-3xl border border-brand/40 bg-brand-gradient/10 p-8 sm:p-12 md:p-16 backdrop-blur-xl relative overflow-hidden shadow-glow max-w-5xl mx-auto">
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red">
                Next Steps
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                Secure & Modernize Your <span className="text-gradient">Infrastructure</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Connect with our senior infrastructure and cybersecurity architects to evaluate your network posture, cloud roadmap, or IT operations.
              </p>

              <div className="pt-2">
                <Link
                  to="/contact"
                  hash="form"
                  className="btn btn-primary btn-lg inline-flex items-center gap-2 shadow-lg shadow-brand-red/20"
                >
                  Schedule an IT Assessment <ArrowUpRight className="h-5 w-5" />
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
