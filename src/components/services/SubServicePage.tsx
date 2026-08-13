import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "@tanstack/react-router";
import {
  CheckCircle2, ArrowRight, ArrowLeft, Sparkles, TrendingUp, ShieldCheck,
  Layers, Cpu, Clock, Award, Phone, Mail, MapPin, ChevronRight
} from "lucide-react";
import { SubServiceData } from "../../data/servicesData";
import { Reveal, WaveDivider } from "../ui/Animations";

interface SubServicePageProps {
  data: SubServiceData;
}

export function SubServicePageView({ data }: SubServicePageProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "features" | "process">("overview");

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* ═══════════════════ HERO SECTION ═══════════════════ */}
      <section className="section-dark relative pt-36 pb-20 bg-muted overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-15" />
        <div className="absolute top-1/4 right-10 h-96 w-96 rounded-full bg-brand/20 blur-[140px]" />
        <div className="absolute bottom-10 left-1/4 h-80 w-80 rounded-full bg-brand-red/15 blur-[120px]" />

        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-3 rounded-full border border-border bg-background/80 backdrop-blur-md px-4 py-2 text-xs font-bold text-foreground shadow-soft">
                {data.customLogo ? (
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white p-1 shadow-sm shrink-0">
                    <img src={data.customLogo} alt={data.title} className="h-full w-full object-contain" />
                  </span>
                ) : (
                  <Sparkles className="h-4 w-4 text-brand-red" />
                )}
                <span>Acceleron {data.category} Practice</span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.08] text-foreground">
                {data.title.split(' ')[0]} <span className="text-gradient">{data.title.split(' ').slice(1).join(' ')}</span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                {data.desc}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#consultation"
                  className="rounded-xl bg-brand-gradient px-8 py-4 text-sm font-bold text-white shadow-glow hover:scale-[1.02] transition-transform flex items-center gap-2"
                >
                  Schedule Consultation <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  to={`/services/${data.categorySlug}` as any}
                  className="rounded-xl border border-border bg-background/50 px-6 py-4 text-sm font-bold text-foreground hover:bg-background/80 transition-colors flex items-center gap-2"
                >
                  <ArrowLeft className="h-4 w-4" /> Back to {data.category}
                </Link>
              </div>

              {/* Quick Highlights */}
              <div className="pt-6 border-t border-border flex flex-wrap gap-6 text-xs font-semibold text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand-red" /> SLA-Backed Delivery
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-brand" /> Certified Architects
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Enterprise Scale
                </div>
              </div>
            </div>

            {/* Right Hero Image / Slot */}
            <div className="lg:col-span-5 relative">
              <Reveal delay={0.2}>
                <div className="relative rounded-3xl overflow-hidden border border-border shadow-2xl bg-background/30 group">
                  <div className="aspect-[4/3] w-full relative overflow-hidden bg-black/40 flex items-center justify-center">
                    <img
                      src={data.customImage || data.image}
                      alt={data.title}
                      className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  </div>

                  {/* Floating Glassmorphic Stat Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="absolute bottom-6 left-6 right-6 rounded-2xl border border-border bg-background/85 backdrop-blur-xl p-5 text-foreground shadow-lg"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs text-muted-foreground font-medium">Enterprise Impact</div>
                        <div className="text-xl font-bold mt-0.5">{data.benefits[0]?.title || "Operational ROI"}</div>
                      </div>
                      <div className="text-3xl font-black text-brand-red">
                        {data.benefits[0]?.metric || "10x"}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumbs Bar Below Banner */}
      <div className="w-full border-y border-border/50 bg-muted/40 py-3.5 backdrop-blur-md relative z-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <nav className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
            <Link to="/services" className="hover:text-foreground transition-colors">Services</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link to={`/services/${data.categorySlug}` as any} className="hover:text-foreground transition-colors">{data.category}</Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-brand-red">{data.title}</span>
          </nav>
        </div>
      </div>

      <WaveDivider from="dark" to="light" />

      {/* ═══════════════════ OVERVIEW & DEEP DIVE ═══════════════════ */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold">Deep Dive</div>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="text-3xl md:text-5xl font-bold leading-tight text-foreground">
                  Empowering scale with <span className="text-gradient">proven expertise.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {data.overview}
                </p>
              </Reveal>

              <div className="grid sm:grid-cols-2 gap-4 pt-6">
                {data.features.map((feat, idx) => (
                  <Reveal key={idx} delay={idx * 0.1}>
                    <div className="p-5 rounded-2xl border border-border bg-muted/20 hover:bg-muted/40 transition-colors">
                      <div className="h-8 w-8 rounded-lg bg-brand-gradient flex items-center justify-center text-white mb-3 shadow-sm">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>
                      <h3 className="font-bold text-foreground text-base mb-1">{feat.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{feat.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Right Quick Navigation Card */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <Reveal delay={0.2}>
                <div className="rounded-3xl border border-border bg-muted/30 p-8 space-y-8 shadow-card">
                  <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                    <Award className="h-5 w-5 text-brand" /> Why Acceleron for {data.title}?
                  </h3>

                  <div className="space-y-6">
                    {data.benefits.map((ben, idx) => (
                      <div key={idx} className="flex gap-4 items-start border-b border-border/50 pb-4 last:border-0 last:pb-0">
                        <div className="min-w-[70px] text-right">
                          <span className="text-xl font-black text-brand-red">{ben.metric || "SLA"}</span>
                        </div>
                        <div>
                          <div className="font-bold text-sm text-foreground">{ben.title}</div>
                          <div className="text-xs text-muted-foreground mt-0.5">{ben.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-border">
                    <a
                      href="#consultation"
                      className="w-full rounded-xl bg-brand-gradient py-3.5 text-center text-sm font-bold text-white shadow-glow block hover:scale-[1.01] transition-transform"
                    >
                      Talk to a {data.category} Specialist
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider from="light" to="white" flip />

      {/* ═══════════════════ METHODOLOGY / PROCESS ═══════════════════ */}
      <section className="py-24 bg-muted/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold">Methodology</div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">
                Our 4-Step <span className="text-gradient">Delivery Process</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 text-muted-foreground text-sm md:text-base">
                Structured, low-risk execution modeled on industry best practices and our global delivery factory framework.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {data.process.map((step, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="relative rounded-2xl border border-border bg-background p-8 flex flex-col justify-between h-full shadow-card group"
                >
                  <div>
                    <div className="text-3xl font-black text-brand-red/30 group-hover:text-brand-red transition-colors mb-6 tabular-nums">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-xs font-semibold text-brand">
                    <span>Phase {idx + 1}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider from="white" to="dark" />

      {/* ═══════════════════ CONSULTATION / CONTACT FORM ═══════════════════ */}
      <section id="consultation" className="section-dark relative py-32 bg-muted text-foreground overflow-hidden">
        <div className="absolute inset-0 diagonal-stripes opacity-15" />
        <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-brand/15 blur-[120px]" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-brand-red/15 blur-[120px]" />

        <div className="mx-auto max-w-7xl px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <Reveal>
                <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold">Initiate Project</div>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
                  Ready to accelerate your <span className="text-gradient">{data.title}</span> journey?
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 text-muted-foreground text-sm md:text-base leading-relaxed">
                  Connect directly with our senior solution architects for a tailored technical roadmap, pricing estimate, and readiness evaluation.
                </p>
              </Reveal>

              <div className="mt-10 space-y-6">
                <div className="flex items-center gap-4 text-muted-foreground text-sm">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">Phone Support</div>
                    <div className="flex flex-wrap items-center gap-x-2 font-medium">
                      <a href="tel:03335346200" className="hover:text-brand transition-colors">033-35346200</a>
                      <span>/</span>
                      <a href="tel:03335346222" className="hover:text-brand transition-colors">033-35346222</a>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground text-sm">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">Direct Email</div>
                    <a href="mailto:enquiry@acceleronsolutions.io" className="hover:text-brand transition-colors">
                      enquiry@acceleronsolutions.io
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 text-muted-foreground text-sm">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand shrink-0 mt-0.5">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">Headquarters</div>
                    <div>3rd Floor, STPI IT Park, Salt Lake, Sector V, Kolkata – 700091, India</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Card */}
            <div>
              <Reveal delay={0.2}>
                <div className="rounded-3xl border border-border/60 bg-background/60 p-8 md:p-10 backdrop-blur-xl shadow-glow">
                  <h3 className="text-xl font-bold text-foreground mb-6">Request Technical Consultation</h3>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-muted-foreground mb-1.5">First Name *</label>
                        <input type="text" placeholder="First Name" className="w-full rounded-xl border border-border bg-background p-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-muted-foreground mb-1.5">Last Name *</label>
                        <input type="text" placeholder="Last Name" className="w-full rounded-xl border border-border bg-background p-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground mb-1.5">Work Email *</label>
                      <input type="email" placeholder="Work Email" className="w-full rounded-xl border border-border bg-background p-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground mb-1.5">Company Name & Role *</label>
                      <input type="text" placeholder="Company Name & Role" className="w-full rounded-xl border border-border bg-background p-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground mb-1.5">Project Scope / Requirements</label>
                      <textarea rows={3} placeholder="Project Scope / Requirements" className="w-full rounded-xl border border-border bg-background p-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring" />
                    </div>
                    <button
                      type="submit"
                      className="w-full rounded-xl bg-brand-gradient py-4 text-sm font-bold text-white shadow-glow hover:scale-[1.02] transition-transform"
                    >
                      Submit Consultation Request
                    </button>
                    <p className="text-[11px] text-center text-muted-foreground">
                      We reply within 4 business hours under strict NDA.
                    </p>
                  </form>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
