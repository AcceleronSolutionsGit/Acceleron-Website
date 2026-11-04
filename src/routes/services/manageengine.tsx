import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ArrowRight,
  MonitorSmartphone,
  Monitor,
  Activity,
  Headphones,
  KeyRound,
  ShieldCheck,
  Server,
  Workflow,
  Check,
  Mail,
  Phone,
} from "lucide-react";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { PageHero } from "../../components/ui/PageHero";
import { ProcessFlow } from "../../components/ui/ProductShowcase";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion";
import { Link } from "@tanstack/react-router";
import { getAssetUrl } from "../../lib/assets";

export const Route = createFileRoute("/services/manageengine")({
  head: () => ({
    meta: [
      { title: "ManageEngine Solutions — Acceleron Solutions" },
      {
        name: "description",
        content:
          "ManageEngine solutions for unified IT operations, endpoint control, ITOM, and security across enterprise digital workplaces.",
      },
    ],
  }),
  component: ManageEnginePage,
});

const VALUE_PILLARS = [
  {
    title: "360° Endpoint & Asset Control",
    desc: "Secure and manage remote, hybrid, and mobile devices across corporate and site networks.",
    icon: Monitor,
  },
  {
    title: "Proactive Network & Server Monitoring",
    desc: "Detect network bottlenecks, switch faults, and server performance anomalies before downtime occurs.",
    icon: Activity,
  },
  {
    title: "ITIL-Aligned Service Automation",
    desc: "Standardize ITSM workflows, incident management, and asset lifecycles for predictable IT delivery.",
    icon: Workflow,
  },
];

const CORE_PRODUCTS = [
  {
    title: "Endpoint Central & MDM",
    desc: "Centralized device management, OS deployment, automated patch management, and mobile device security.",
    icon: Monitor,
    href: "/services/manageengine/manageengine-endpoint-control",
    features: [
      "Automated patch management & vulnerability remediation",
      "Mobile Device Management (MDM) for iOS, Android, Windows",
      "Remote desktop troubleshooting & asset inventory tracking",
    ],
  },
  {
    title: "OpManager (Network Monitoring)",
    desc: "Real-time network performance monitoring, switch/router tracking, and bandwidth analysis.",
    icon: Activity,
    href: "/services/manageengine/manageengine-op-manager",
    features: [
      "Network switch, router & firewall performance monitoring",
      "Proactive fault detection & threshold alerts",
      "Custom network topology mapping & SLA reporting",
    ],
  },
  {
    title: "ServiceDesk Plus (ITSM)",
    desc: "ITIL-aligned service desk software for incident, problem, change, and IT asset management.",
    icon: Headphones,
    href: "/services/manageengine/manageengine-itsm",
    features: [
      "Automated ticketing & SLA escalation rules",
      "IT Asset Management (ITAM) & software license tracking",
      "Self-service portal & knowledge base management",
    ],
  },
  {
    title: "ADManager Plus & Security",
    desc: "Automated Active Directory management, user provisioning, access governance, and security auditing.",
    icon: KeyRound,
    href: "/contact",
    features: [
      "Bulk Active Directory user management & RBAC",
      "Automated employee onboarding/offboarding workflows",
      "Active Directory change auditing & compliance reporting",
    ],
  },
];

const IMPLEMENTATION_STEPS = [
  {
    step: "01",
    title: "Assessment & Architecture",
    desc: "Network topology mapping, inventory scan, and ITIL process alignment.",
  },
  {
    step: "02",
    title: "Configuration & Policies",
    desc: "Central console setup, patch repository configuration, and threshold tuning.",
  },
  {
    step: "03",
    title: "Agent Rollout & Integration",
    desc: "Silent endpoint distribution, Active Directory / SAP connector deployment.",
  },
  {
    step: "04",
    title: "Managed NOC/SOC & SLA Governance",
    desc: "24/7 proactive monitoring, incident triage, and continuous patch auditing.",
  },
];

const FAQS = [
  {
    q: "Can ManageEngine tools be integrated with our existing SAP or enterprise directory?",
    a: "Yes. Acceleron configures seamless Active Directory, SAP, and single sign-on (SSO) integrations for unified identity and asset governance.",
  },
  {
    q: "Does Acceleron provide ongoing managed support for ManageEngine tools?",
    a: "Yes. We offer round-the-clock (24/7) managed IT service desk support, patch deployment administration, and proactive network monitoring.",
  },
  {
    q: "How does Endpoint Central assist with regulatory compliance (ISO 27001, DPDP)?",
    a: "Endpoint Central automates vulnerability scanning, software license audits, and missing patch deployments, generating audit-ready compliance trails.",
  },
];

function ManageEnginePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* SECTION 1: HERO BANNER */}
      <PageHero
        title="ManageEngine Solutions for Unified IT Operations & Security"
        subtitle="Complete Visibility, Endpoint Control, and ITIL-Aligned Service Delivery Across Your Digital Workplace. Acceleron delivers end-to-end ManageEngine implementation, customization, and managed support. Protect endpoints, streamline IT service desks, and monitor infrastructure health with enterprise-grade precision."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "ManageEngine" },
        ]}
        image="/capital_goods.jpg"
        ctaText="Consult with Our ITOM Experts"
        ctaHref="/contact"
        secondaryCtaText="Explore Product Suite"
        secondaryCtaHref="#suite"
        icon={
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/20 shadow-xl">
            <MonitorSmartphone className="h-8 w-8 text-brand drop-shadow-lg" />
            <div className="border-l border-white/30 pl-3">
              <div className="text-[10px] font-bold uppercase tracking-wider text-brand-red">
                ITOM & ITSM Practice
              </div>
              <div className="text-xs font-bold text-white tracking-wide">
                Unified Endpoint & Operations
              </div>
            </div>
          </div>
        }
      />

      {/* SECTION 2: WHY ACCELERON FOR MANAGEENGINE (VALUE PILLARS) */}
      <section className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-14 sm:py-20 lg:py-24 border-b border-border/50">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red mb-3">
              Why Acceleron for ManageEngine
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
              Taming IT Complexity with{" "}
              <span className="text-gradient">Proactive Operations & Zero-Trust Governance</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Prevent downtime, ensure continuous compliance, and deliver consumer-grade support for modern distributed workforces.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {VALUE_PILLARS.map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.1} className="h-full">
              <div className="group rounded-3xl border border-border/70 bg-card p-7 sm:p-8 h-full shadow-soft hover:shadow-elevated hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="h-12 w-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-muted-foreground/60 group-hover:text-brand transition-colors">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-brand transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION 3: MANAGEENGINE CORE PRODUCT SUITE (4 FEATURED TILES) */}
      <section id="suite" className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-14 sm:py-20 lg:py-24">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red mb-3">
              Product Suite
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              ManageEngine <span className="text-gradient">Core Product Suite</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Comprehensive endpoint, network, service desk, and identity solutions tailored for enterprise IT.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {CORE_PRODUCTS.map((prod, i) => (
            <Reveal key={prod.title} delay={i * 0.08} className="h-full">
              <div className="group rounded-3xl border border-border/70 bg-card p-7 sm:p-9 h-full shadow-soft hover:shadow-elevated hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="h-12 w-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center group-hover:scale-110 transition-transform">
                      <prod.icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-muted-foreground/60 group-hover:text-brand transition-colors">
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-brand transition-colors">
                    {prod.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {prod.desc}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-border/50 mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground/80 mb-2">
                      Key Highlights
                    </div>
                    {prod.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/85">
                        <Check className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-border/50">
                  <Link
                    to={prod.href as any}
                    className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-brand-red transition-colors group/link"
                  >
                    <span>Explore Detail & Integration</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* IMPLEMENTATION METHODOLOGY */}
      <WaveDivider from="white" to="dark" />

      <section className="section-dark container mx-auto px-6 max-w-7xl relative z-10 py-20 sm:py-24">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red mb-3">
              Delivery Framework
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Implementation <span className="text-gradient">Methodology</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
              Structured 4-phase rollout ensuring zero network disruption, automated policy enforcement, and seamless user adoption.
            </p>
          </div>
        </Reveal>
        <ProcessFlow steps={IMPLEMENTATION_STEPS} />
      </section>

      <WaveDivider from="dark" to="white" />

      {/* SECTION 5: FREQUENTLY ASKED QUESTIONS */}
      <section className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10 py-16 sm:py-24">
        <Reveal>
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red mb-3">
              FAQ
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-muted-foreground text-base max-w-xl mx-auto">
              Key considerations regarding ManageEngine deployment, directory integration, and managed support.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-2xl border border-border/70 bg-card px-5 sm:px-6 data-[state=open]:border-brand/40 shadow-soft transition-all"
              >
                <AccordionTrigger className="text-base sm:text-lg font-bold text-foreground hover:no-underline py-5 text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </section>

      {/* SECTION 6: BOTTOM CTA BANNER */}
      <section className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 pb-16 sm:pb-24 text-center">
        <Reveal>
          <div className="rounded-3xl border border-brand/40 bg-brand-gradient/10 p-8 sm:p-12 md:p-16 backdrop-blur-xl relative overflow-hidden shadow-glow max-w-5xl mx-auto">
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red">
                Next Steps
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                Ready to Modernize Your <span className="text-gradient">IT Infrastructure & Endpoint Security?</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Schedule an ITOM architecture session with our certified ManageEngine specialists.
              </p>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="btn btn-primary btn-lg inline-flex items-center gap-2 shadow-lg shadow-brand-red/20"
                >
                  Request ITOM Consultation <ArrowUpRight className="h-5 w-5" />
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
                  href="tel:+913335346200"
                  className="inline-flex items-center gap-2 hover:text-brand transition-colors font-medium"
                >
                  <Phone className="h-4 w-4 text-brand" />
                  <span>+91 33 3534 6200 / +91 33 3534 6222</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
