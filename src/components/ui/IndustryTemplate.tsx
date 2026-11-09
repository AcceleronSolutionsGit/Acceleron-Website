import { Link } from "@tanstack/react-router";
import { type ReactNode, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, CheckCircle2, ShieldCheck, Zap, Award, ArrowRight, FileText, Check, ChevronDown } from "lucide-react";
import { Reveal, WaveDivider } from "./Animations";
import { PageHero } from "./PageHero";
import { type IndustryDetail } from "../../data/industriesData";

type IndustryTemplateProps = {
  data: IndustryDetail;
  icon: ReactNode;
};

export function IndustryTemplate({ data, icon }: IndustryTemplateProps) {
  const hasCaseStudies = Boolean(data.caseStudies && data.caseStudies.length > 0);

  // Default to having the first case study expanded so users immediately see the content depth
  const [openIds, setOpenIds] = useState<Set<string>>(() => {
    return new Set(hasCaseStudies && data.caseStudies![0] ? [data.caseStudies![0].id] : []);
  });

  const toggleCaseStudy = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <PageHero
        title={data.title}
        subtitle={data.subtitle}
        breadcrumbs={[
          { label: "Industries", href: "/industries" },
          { label: data.slug.replace(/-/g, " ") }
        ]}
        image={data.image}
        icon={
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow">
            {icon}
          </div>
        }
        ctaText="Speak with Industry Practice Lead"
        ctaHref="/contact"
        secondaryCtaText={hasCaseStudies ? "View Case Studies" : undefined}
        secondaryCtaHref={hasCaseStudies ? "#case-studies" : undefined}
      />

      {/* Section 1: Overview & Challenges */}
      <section className="section-dark container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-14 sm:py-20 lg:py-24">
        <Reveal>
          <div className="max-w-3xl mb-16">
            <div className="text-xs uppercase tracking-[0.4em] text-primary dark:text-cyan-400 font-bold mb-3">Industry Overview</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Navigating Modern{" "}
              <span className="bg-gradient-to-r from-primary via-indigo-600 to-cyan-600 dark:from-white dark:via-cyan-200 dark:to-cyan-400 bg-clip-text text-transparent">
                Operational Realities
              </span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {data.overview}
            </p>
          </div>
        </Reveal>

        {/* Challenges Grid */}
        <div className="mb-8">
          <Reveal delay={0.1}>
            <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-primary dark:bg-cyan-400" />
              Core Industry Challenges We Solve
            </h3>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {data.challenges.map((c, i) => (
              <Reveal key={c.title} delay={0.1 * i}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="rounded-3xl border border-border/60 bg-muted/20 p-8 backdrop-blur-xl hover:border-brand/40 transition-all h-full"
                >
                  <div className="text-xs font-bold text-primary dark:text-cyan-400 uppercase tracking-wider mb-2">Challenge 0{i + 1}</div>
                  <h4 className="text-xl font-bold text-foreground mb-3">{c.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Proven Real-World Case Studies (MOVED UP WITH DOWNWARD ARROWS & EXPAND ON CLICK) */}
      {hasCaseStudies && (
        <>
          <WaveDivider from="dark" to="white" />
          <section id="case-studies" className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-14 sm:py-20 lg:py-24">
            <Reveal>
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-primary dark:text-cyan-400 mb-3">
                    Proven Real-World Impact
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                    Industry{" "}
                    <span className="bg-gradient-to-r from-primary via-indigo-600 to-cyan-600 dark:from-white dark:via-cyan-200 dark:to-cyan-400 bg-clip-text text-transparent">
                      Case Studies
                    </span>
                  </h2>
                </div>
                <p className="text-muted-foreground text-sm sm:text-base max-w-md leading-relaxed">
                  Click any case study below to expand and explore operational challenges, our architectural solutions, and measurable P&amp;L impact.
                </p>
              </div>
            </Reveal>

            {/* Interactive Expandable Case Studies List with Downward Arrow */}
            <div className="space-y-4 sm:space-y-5">
              {data.caseStudies!.map((cs, idx) => {
                const isOpen = openIds.has(cs.id);
                return (
                  <Reveal key={cs.id} delay={idx * 0.08}>
                    <div
                      className={`rounded-2xl sm:rounded-3xl border transition-all duration-300 overflow-hidden ${
                        isOpen
                          ? "border-primary/50 bg-card shadow-elevated"
                          : "border-border/70 bg-card/60 backdrop-blur-xl hover:border-primary/30 hover:bg-card/90 shadow-soft"
                      }`}
                    >
                      {/* Clickable Header with Downward Arrow Indicator */}
                      <button
                        type="button"
                        onClick={() => toggleCaseStudy(cs.id)}
                        className="w-full text-left p-5 sm:p-7 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary select-none group"
                        aria-expanded={isOpen}
                      >
                        <div className="flex-1 min-w-0 pr-2">
                          <div className="flex flex-wrap items-center gap-2.5 mb-2">
                            <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-bold uppercase tracking-wider bg-primary/10 text-primary dark:bg-cyan-500/10 dark:text-cyan-400 px-3 py-1 rounded-full border border-primary/20 dark:border-cyan-500/20">
                              <FileText className="h-3.5 w-3.5" />
                              {cs.badge}
                            </span>
                            <span className="text-[11px] text-muted-foreground hidden sm:inline-block">
                              • Acceleron Domain Engagement
                            </span>
                          </div>

                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground group-hover:text-primary dark:group-hover:text-cyan-400 transition-colors leading-snug">
                            {cs.title}
                          </h3>

                          {!isOpen && (
                            <p className="text-xs sm:text-sm text-muted-foreground line-clamp-1 mt-1.5">
                              {cs.challenge}
                            </p>
                          )}
                        </div>

                        {/* Downward Arrow Icon (Rotates 180deg when opened) */}
                        <div className="shrink-0 flex items-center gap-3">
                          <span className="text-xs font-semibold text-muted-foreground hidden md:inline-block">
                            {isOpen ? "Hide Details" : "View Details"}
                          </span>
                          <div
                            className={`h-10 w-10 sm:h-11 sm:w-11 rounded-full border flex items-center justify-center transition-all duration-300 shadow-sm ${
                              isOpen
                                ? "bg-primary text-primary-foreground border-primary rotate-180 dark:bg-cyan-500 dark:border-cyan-500 dark:text-slate-950"
                                : "bg-muted/40 border-border/80 text-foreground/70 group-hover:bg-primary/10 group-hover:text-primary group-hover:border-primary/40 dark:group-hover:text-cyan-400"
                            }`}
                          >
                            <ChevronDown className="h-5 w-5 transition-transform duration-300" />
                          </div>
                        </div>
                      </button>

                      {/* Expandable Case Study Details */}
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key={`content-${cs.id}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 sm:px-7 pb-6 sm:pb-8 pt-2 border-t border-border/60">
                              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 pt-4">
                                {/* Operational Challenge */}
                                <div className="rounded-2xl border border-red-500/25 bg-red-500/[0.04] p-5 sm:p-6 flex flex-col justify-between">
                                  <div>
                                    <div className="text-xs font-bold uppercase tracking-wider text-red-600 dark:text-red-400 mb-2.5 flex items-center gap-2">
                                      <span className="h-2 w-2 rounded-full bg-red-500" />
                                      Operational Challenge
                                    </div>
                                    <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed">
                                      {cs.challenge}
                                    </p>
                                  </div>
                                </div>

                                {/* Acceleron Solution */}
                                <div className="rounded-2xl border border-blue-500/25 bg-blue-500/[0.04] p-5 sm:p-6 flex flex-col justify-between">
                                  <div>
                                    <div className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2.5 flex items-center gap-2">
                                      <span className="h-2 w-2 rounded-full bg-blue-500" />
                                      Acceleron Solution
                                    </div>
                                    <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed">
                                      {cs.solution}
                                    </p>
                                  </div>
                                </div>

                                {/* Measurable Impact */}
                                <div className="rounded-2xl border border-emerald-500/25 bg-emerald-500/[0.04] p-5 sm:p-6 flex flex-col justify-between">
                                  <div>
                                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2.5 flex items-center gap-2">
                                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                                      Measurable Impact
                                    </div>
                                    <p className="text-xs sm:text-sm text-foreground/85 leading-relaxed">
                                      {cs.impact}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </section>
        </>
      )}

      {/* WaveDivider before Solutions */}
      {hasCaseStudies ? (
        <WaveDivider from="white" to="dark" flip />
      ) : (
        <WaveDivider from="dark" to="white" />
      )}

      {/* Section 3: Acceleron Solutions */}
      <section className={`${hasCaseStudies ? "section-dark" : ""} container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-14 sm:py-20 lg:py-24`}>
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-[0.4em] text-primary dark:text-cyan-400 font-bold mb-3">Tailored Architecture</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Acceleron Solutions &amp;{" "}
              <span className="bg-gradient-to-r from-primary via-indigo-600 to-cyan-600 dark:from-white dark:via-cyan-200 dark:to-cyan-400 bg-clip-text text-transparent">
                Capabilities
              </span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Enterprise platforms, custom applications, and domain-specific tools engineered to deliver measurable operational outcomes.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {data.solutions.map((s, idx) => (
            <Reveal key={s.title} delay={idx * 0.1}>
              <div className="group rounded-3xl border border-border/60 bg-muted/20 p-8 hover:bg-muted/40 hover:border-brand/40 transition-all duration-300 shadow-soft hover:shadow-glow flex items-start gap-5">
                <div className="h-12 w-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center shrink-0 group-hover:bg-brand-gradient group-hover:text-white transition-colors">
                  <Zap className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-brand transition-colors mb-2">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WaveDivider before Benefits */}
      {hasCaseStudies ? (
        <WaveDivider from="dark" to="white" />
      ) : (
        <WaveDivider from="white" to="dark" flip />
      )}

      {/* Section 4: Benefits & Why Acceleron */}
      <section className={`${hasCaseStudies ? "" : "section-dark"} container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-14 sm:py-20 lg:py-24`}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div>
              <div className="text-xs uppercase tracking-[0.4em] text-primary dark:text-cyan-400 font-bold mb-3">Measurable Impact</div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">
                Key Business{" "}
                <span className="bg-gradient-to-r from-primary via-indigo-600 to-cyan-600 dark:from-white dark:via-cyan-200 dark:to-cyan-400 bg-clip-text text-transparent">
                  Benefits
                </span>
              </h2>
              <div className="space-y-4">
                {data.benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl border border-border/50 bg-background/50 backdrop-blur-xl">
                    <CheckCircle2 className="h-6 w-6 text-brand shrink-0" />
                    <span className="text-base font-semibold text-foreground">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="rounded-3xl border border-brand/30 bg-brand-gradient/10 p-8 sm:p-10 backdrop-blur-xl shadow-glow">
              <div className="flex items-center gap-3 mb-6">
                <Award className="h-8 w-8 text-brand" />
                <h3 className="text-2xl font-bold text-foreground">Why Acceleron?</h3>
              </div>
              <ul className="space-y-4 text-sm text-muted-foreground leading-relaxed mb-8">
                {data.whyAcceleron.map((w, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="h-2 w-2 rounded-full bg-primary dark:bg-cyan-400 shrink-0 mt-2" />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                hash="form"
                className="btn btn-primary btn-lg"
              >
                Schedule Executive Briefing <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="border-t border-border/60 bg-gradient-to-br from-card via-card to-brand/5 py-16">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ready to Transform Your Industry Operations?
            </h2>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto mb-8">
              Consult with our industry practice architects to benchmark your technology roadmap against sector leaders.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                hash="form"
                className="btn btn-primary btn-lg"
              >
                Schedule Executive Discovery
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
