import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Clock,
  CheckCircle2,
  Fingerprint,
  CalendarDays,
  FileSpreadsheet,
  AlertTriangle,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Phone,
  Mail,
  ShieldCheck,
  Building,
} from "lucide-react";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { PageHero } from "../../components/ui/PageHero";
import { ProcessFlow } from "../../components/ui/ProductShowcase";
import { getAssetUrl } from "../../lib/assets";

export const Route = createFileRoute("/products/attendance-management")({
  head: () => ({
    meta: [
      {
        title: "Attendance Management System (AMS) | Acceleron Solutions",
      },
      {
        name: "description",
        content:
          "Enterprise Attendance Management System (AMS) for multi-modal biometric time-tracking, shift rules automation, geofenced mobile punching, and payroll synchronization.",
      },
    ],
  }),
  component: AttendanceManagementProductPage,
});

const CORE_FEATURES = [
  {
    title: "Multi-Modal Capturing",
    desc: "Integration with biometric fingerprint scanners, facial recognition terminals, RFID proximity cards and mobile geo-location punch-ins.",
    icon: Fingerprint,
    metric: "Biometrics & Geo-Punch",
  },
  {
    title: "Shift & Overtime Rules Engine",
    desc: "Flexible configuration of complex shift timings, grace periods, half-day rules and automated overtime calculations.",
    icon: Clock,
    metric: "Multi-Shift Rules",
  },
  {
    title: "Leave Management Integration",
    desc: "Real-time synchronization with leave applications, compensatory offs and holiday calendars.",
    icon: CalendarDays,
    metric: "Unified Leave Sync",
  },
  {
    title: "Real-Time Dashboard & Alerts",
    desc: "Live monitoring of late arrivals, early departures, absenteeism and missed punch-ins for supervisors.",
    icon: AlertTriangle,
    metric: "Live Exception Feed",
  },
];

const BUSINESS_BENEFITS = [
  {
    title: "Zero Proxy Attendance",
    metric: "Zero Proxy",
    desc: "Reduced manual timekeeping discrepancies and proxy attendance through verified multi-modal biometrics.",
  },
  {
    title: "Streamlined Payroll Processing",
    metric: "Instant Pay Sync",
    desc: "Streamlined payroll processing through pre-validated working hours and overtime data.",
  },
  {
    title: "Punctuality & Trend Visibility",
    metric: "Real-Time Roster",
    desc: "Comprehensive visibility into workforce punctuality and attendance trends across plant locations.",
  },
  {
    title: "Dynamic Shift Governance",
    metric: "100% Automated",
    desc: "Automated handling of rotating shift patterns, night allowances, and statutory working hour caps.",
  },
];

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Multi-Modal Clock-In",
    desc: "Employees punch in via facial recognition terminals, RFID turnstiles, or geofenced mobile app.",
  },
  {
    step: "02",
    title: "Shift Rule Validation",
    desc: "Engine verifies punch timestamps against roster shifts, grace intervals, and department calendars.",
  },
  {
    step: "03",
    title: "Exception Detection",
    desc: "Late entries, missed punches, or unplanned absences generate real-time alerts for shift leads.",
  },
  {
    step: "04",
    title: "Leave & Comp-Off Sync",
    desc: "Automated reconciliation with HR leave approvals, official on-duty travel, and regularizations.",
  },
  {
    step: "05",
    title: "Automated Payroll Export",
    desc: "Pre-audited total worked hours, overtime, and shift allowances push cleanly into payroll systems.",
  },
];

function AttendanceManagementProductPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* HERO BANNER */}
      <PageHero
        badge="PEOPLE SOLUTIONS • ATTENDANCE MANAGEMENT"
        title="Attendance Management System"
        subtitle="The Attendance Management Systems (AMS) helps automate time-tracking and workforce presence management across industrial and corporate environments. By integrating biometric devices, RFID turnstiles and geo-fenced mobile applications, our solutions enable accurate recording of working hours while helping eliminate proxy attendance and manual register errors."
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: "People Solutions", href: "/products" },
          { label: "Attendance Management" },
        ]}
        image="/products/People Solutions - Acceleron Solutions.png"
        ctaText="Schedule a Live Demo"
        ctaHref="/contact"
        secondaryCtaText="Explore Features"
        secondaryCtaHref="#features"
        icon={
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2.5 shadow-glow">
            <Clock className="h-10 w-10 text-brand" />
          </div>
        }
      />

      {/* SECTION: OVERVIEW & PAYROLL SYNCHRONIZATION */}
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
                Automated Time-Tracking &amp;{" "}
                <span className="text-gradient">Payroll Synchronization</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Our AMS solutions integrate with payroll and ERP systems, transferring verified attendance and worked-hour data to support accurate and timely salary processing. Designed for both plant shop-floors and distributed field operations, the system guarantees accurate muster records free from proxy punches and spreadsheet manipulation.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="pt-4 flex flex-wrap gap-4">
                <div className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">Multi-Device Integration</div>
                    <div className="text-xs text-muted-foreground">Facial recognition, RFID &amp; mobile GPS</div>
                  </div>
                </div>
                <div className="rounded-2xl border border-border bg-card p-5 flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">ERP &amp; Payroll Feed</div>
                    <div className="text-xs text-muted-foreground">Seamless push to SAP, Zoho &amp; HRMS</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-border/70 bg-muted/20 p-8 space-y-6 shadow-card">
                <div className="text-xs font-bold uppercase tracking-widest text-brand-red">
                  AMS At A Glance
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Enterprise Presence Control
                </h3>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Eliminates manual timekeeping errors and buddy-punching leaks.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Handles complex multi-shift rotations, grace times, and night premiums.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Real-time mobile geofencing for remote service engineers and sales reps.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <span>Exports pre-audited worked-hour files directly to payroll processing.</span>
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
              Core Features &amp; <span className="text-gradient">Rules Architecture</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Engineered to support distributed manufacturing plants, corporate headquarters, and mobile field personnel.
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
              Attendance Lifecycle
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              5-Phase Time &amp; Attendance Workflow
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              From biometric terminal punch to shift rule validation, exception detection, and automated payroll feed.
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
              Direct gains in payroll precision, punctuality transparency, and operational time discipline.
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
              Automate Your Attendance Tracking &amp; Payroll Reconciliation
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Connect with our workforce solution architects to discuss biometric hardware options, shift rule engines, and payroll connectors.
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
