import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import {
  CheckCircle2, ArrowRight, ArrowLeft,
  Award, Phone, Mail, MapPin, ChevronRight
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
        title={data.title}
        subtitle={data.desc}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: data.category, href: `/services/${data.categorySlug}` },
          { label: data.title }
        ]}
        image="/capital_goods.jpg"
        icon={
          data.customLogo ? (
            <div className="h-20 w-auto bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20 shadow-xl flex items-center justify-center">
              <img src={getAssetUrl(data.customLogo)} alt={data.title} className="h-12 w-auto object-contain drop-shadow-lg" />
            </div>
          ) : undefined
        }
      />

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
                    <div>3rd Floor, STPI IT Park, Block-DP, Plot-5/1, Sector V, Salt Lake, Kolkata – 700091, West Bengal, India</div>
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
