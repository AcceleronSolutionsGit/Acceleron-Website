import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import {
  CheckCircle2, ArrowRight, ArrowLeft,
  Award, Phone, Mail, MapPin, ChevronRight, ShieldCheck
} from "lucide-react";
import { SubServiceData } from "../../data/servicesData";
import { Reveal, WaveDivider } from "../ui/Animations";
import { PageHero } from "../ui/PageHero";
import { getAssetUrl } from "../../lib/assets";
import { HomeContactForm } from "../ui/HomeContactForm";

interface SubServicePageProps {
  data: SubServiceData;
}

export function SubServicePageView({ data }: SubServicePageProps) {
  const [activeTab, setActiveTab] = useState<"overview" | "features" | "process">("overview");

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <PageHero
        badge={data.badge}
        title={data.title}
        subtitle={data.desc}
        ctaText={data.primaryCtaText || "Talk to Our Experts"}
        ctaHref={data.primaryCtaHref || "#consultation"}
        secondaryCtaText={data.secondaryCtaText}
        secondaryCtaHref={data.secondaryCtaHref}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: data.category, href: `/services/${data.categorySlug}` },
          { label: data.title }
        ]}
        image={data.image || "/SAP_Implementation_Banner.png"}
        icon={
          data.customLogo ? (
            <div className="h-20 w-auto bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20 shadow-xl flex items-center justify-center">
              <img src={getAssetUrl(data.customLogo)} alt={data.title} className="h-12 w-auto object-contain drop-shadow-lg" />
            </div>
          ) : undefined
        }
      />

      <WaveDivider from="dark" to="light" />

      {/* ═══════════════════ OVERVIEW & CORE CAPABILITIES ═══════════════════ */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold">
                  {data.featuresTitle || "Core Capabilities"}
                </div>
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
                    <Award className="h-5 w-5 text-brand" /> {data.benefitsTitle || `Why Acceleron for ${data.title}?`}
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
                      className="btn btn-primary btn-md w-full"
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

      {/* ═══════════════════ IMPLEMENTATION & SERVICE DELIVERY SCOPE ═══════════════════ */}
      {data.deliveryScope && data.deliveryScope.length > 0 && (
        <section className="py-20 bg-muted/20 border-t border-border/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <Reveal>
                <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold">Execution Framework</div>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-3 text-3xl md:text-5xl font-bold text-foreground">
                  {data.deliveryScopeTitle ? (
                    <span>{data.deliveryScopeTitle}</span>
                  ) : (
                    <>Implementation &amp; <span className="text-gradient">Service Delivery Scope</span></>
                  )}
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-4 text-muted-foreground text-sm md:text-base leading-relaxed">
                  Enterprise-grade deployment, seamless integrations, and ongoing operational governance.
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
              {data.deliveryScope.map((scope, idx) => (
                <Reveal key={idx} delay={idx * 0.12}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="relative rounded-2xl border border-border bg-card p-7 h-full shadow-card flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <span className="text-xs font-bold uppercase tracking-widest text-brand-red">Scope Item 0{idx + 1}</span>
                        <div className="h-9 w-9 rounded-xl bg-brand/10 text-brand flex items-center justify-center font-bold text-sm">
                          0{idx + 1}
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2.5">{scope.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{scope.desc}</p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-border flex items-center gap-2 text-xs font-semibold text-brand">
                      <CheckCircle2 className="h-4 w-4" /> Enterprise Service Delivery
                    </div>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <WaveDivider from="light" to="white" flip />

      {/* ═══════════════════ METHODOLOGY / PROCESS ═══════════════════ */}
      {data.process && data.process.length > 0 && (
        <section className="py-24 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Reveal>
                <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold">Methodology</div>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">
                  {data.processTitle ? (
                    <span>{data.processTitle}</span>
                  ) : (
                    <>Our 4-Step <span className="text-gradient">Delivery Process</span></>
                  )}
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-4 text-muted-foreground text-sm md:text-base">
                  Structured, low-risk execution modeled on industry best practices and our global delivery factory framework.
                </p>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
      )}

      {/* ═══════════════════ RECOMMENDED FOOTER CTA BANNER ═══════════════════ */}
      {data.ctaBanner && (
        <section className="relative py-16 bg-gradient-to-r from-brand/10 via-brand-red/10 to-brand/10 border-y border-border/50">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red mb-4">
                Recommended Consultation
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                {data.ctaBanner.headline}
              </h2>
              {data.ctaBanner.subheadline && (
                <p className="text-muted-foreground text-base max-w-2xl mx-auto mb-8 leading-relaxed">
                  {data.ctaBanner.subheadline}
                </p>
              )}
              <div className="flex justify-center">
                <a
                  href={data.ctaBanner.actionHref || "#consultation"}
                  className="btn btn-primary btn-lg inline-flex items-center gap-2 shadow-glow"
                >
                  {data.ctaBanner.actionText} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <WaveDivider from="white" to="dark" />

      {/* ═══════════════════ CONSULTATION / CONTACT FORM ═══════════════════ */}
      <section id="consultation" className="section-dark relative py-16 sm:py-24 lg:py-32 bg-muted text-foreground overflow-hidden">
        <div className="absolute inset-0 diagonal-stripes opacity-15" />
        <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-brand/15 blur-[120px]" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-brand-red/15 blur-[120px]" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start md:items-center">
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
                <div className="text-base font-bold text-foreground flex flex-wrap items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-brand shrink-0" />
                  <span>Acceleron Solutions Pvt. Ltd.</span>
                  {data.category === "Zoho" && (
                    <span className="text-xs font-semibold text-brand bg-brand/10 px-2 py-0.5 rounded-full border border-brand/20">
                      Advanced Partner with Zoho
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-4 text-muted-foreground text-sm">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">Phone Support</div>
                    <div className="flex flex-wrap items-center gap-x-2 font-medium">
                      <a href="tel:03335346222" className="hover:text-brand transition-colors">033 3534 6222</a>
                      <span>/</span>
                      <a href="tel:03366442000" className="hover:text-brand transition-colors">033 6644 2000</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-muted-foreground text-sm">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">Direct Email</div>
                    <div className="flex flex-wrap items-center gap-x-2 font-medium">
                      <a href="mailto:enquiry@acceleronsolutions.io" className="hover:text-brand transition-colors">
                        enquiry@acceleronsolutions.io
                      </a>
                      <span>|</span>
                      <a href="mailto:info@acceleronsolutions.io" className="hover:text-brand transition-colors">
                        info@acceleronsolutions.io
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-muted-foreground text-sm">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand shrink-0 mt-0.5">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">Kolkata HQ</div>
                    <div>3rd Floor, STPI IT Park, Sector V, Salt Lake, Kolkata 700091</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-muted-foreground text-sm">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand/10 text-brand shrink-0 mt-0.5">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground">Delhi NCR Office</div>
                    <div>801-802 Kailash Building, 26 KG Marg, Janpath, Central Delhi 110001</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Card */}
            <div>
              <Reveal delay={0.2}>
                <div className="rounded-3xl border border-border/60 bg-background/60 p-8 md:p-10 backdrop-blur-xl shadow-glow">
                  <h3 className="text-xl font-bold text-foreground mb-2">Request Technical Consultation</h3>
                  <p className="text-xs text-muted-foreground mb-6">Fill out the details below and our team will get in touch shortly.</p>
                  <HomeContactForm defaultInterest={data.title} />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
