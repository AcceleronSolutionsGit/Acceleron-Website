import { Link } from "@tanstack/react-router";
import { type ReactNode } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Award,
  Layers,
  Building2,
  ChevronRight,
  ArrowLeft,
  Sparkles,
} from "lucide-react";
import { Reveal, WaveDivider } from "../ui/Animations";
import { PageHero } from "../ui/PageHero";

export interface CategorySubProduct {
  name: string;
  badge: string;
  desc: string;
  href: string;
  icon: any;
  gradient: string;
  features?: string[];
}

export interface CategoryPillar {
  title: string;
  desc: string;
  icon: any;
}

export interface CategorySector {
  title: string;
  desc: string;
  icon?: any;
}

export interface ProductCategoryData {
  slug: string;
  categoryTitle: string;
  pageTitle: string;
  subtitle: string;
  badge: string;
  overview: string;
  heroImage: string;
  icon: any;
  gradient: string;
  products: CategorySubProduct[];
  pillars: CategoryPillar[];
  sectors: CategorySector[];
  whyPartner: string[];
}

interface ProductCategoryTemplateProps {
  data: ProductCategoryData;
}

export function ProductCategoryTemplate({ data }: ProductCategoryTemplateProps) {
  const IconComp = data.icon;

  const OTHER_CATEGORIES = [
    {
      title: "Industrial Solutions",
      desc: "Plant maintenance, inplant logistics, QMS, tyre telematics & CWMS.",
      href: "/products/industrial-solutions",
      slug: "industrial-solutions",
    },
    {
      title: "People Solutions",
      desc: "Workforce scheduling, Suraksha safety, attendance & appraisals.",
      href: "/products/people-solutions",
      slug: "people-solutions",
    },
    {
      title: "CX Solutions",
      desc: "Field service, Vanijya billing, loyalty, warranty & sales CRM.",
      href: "/products/cx-solutions",
      slug: "cx-solutions",
    },
    {
      title: "Office Digitization",
      desc: "Approvals, multi-bank treasury, AccelEdge AI, EDMS & supplier portal.",
      href: "/products/office-digitization",
      slug: "office-digitization",
    },
  ].filter((c) => c.slug !== data.slug);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* SECTION 1: HERO */}
      <PageHero
        badge={data.badge}
        title={data.pageTitle}
        subtitle={data.subtitle}
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: data.categoryTitle },
        ]}
        image={data.heroImage}
        ctaText="Explore Sub-Solutions"
        ctaHref="#sub-solutions"
        secondaryCtaText="Consult Practice Architects"
        secondaryCtaHref="/contact#form"
        icon={
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow">
            <IconComp className="h-8 w-8" />
          </div>
        }
      />

      {/* QUICK BREADCRUMB / HUB BAR */}
      <div className="border-b border-border/60 bg-muted/30 py-3">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl flex items-center justify-between text-xs">
          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 font-bold text-muted-foreground hover:text-brand transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to All 20 Enterprise Products Hub</span>
          </Link>
          <div className="hidden sm:flex items-center gap-2 text-muted-foreground">
            <span>Specialized Category Hub:</span>
            <span className="font-bold text-foreground">{data.categoryTitle}</span>
          </div>
        </div>
      </div>

      {/* SECTION 2: CATEGORY OVERVIEW */}
      <section className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 sm:py-24 border-b border-border/60">
        <Reveal>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand">
              Executive Overview
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
              An Integrated Approach to <span className="text-gradient">{data.categoryTitle}</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed">
              {data.overview}
            </p>
          </div>
        </Reveal>
      </section>

      {/* SECTION 3: CORE SOLUTIONS & SUB-PAGES */}
      <section id="sub-solutions" className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 sm:py-24">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div className="max-w-3xl space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red">
                Core Platforms &amp; Sub-Pages
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Specialized Digital Platforms
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg">
                Explore dedicated functional deep-dives, architectural workflows, and implementation scopes for each platform.
              </p>
            </div>
            <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider bg-muted/60 px-4 py-2 rounded-xl border border-border/60 shrink-0">
              {data.products.length} Purpose-Built Solutions
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {data.products.map((prod, pIdx) => (
            <Reveal key={prod.name} delay={pIdx * 0.08} className="h-full">
              <div className="group rounded-3xl border border-border/70 bg-card p-7 sm:p-8 h-full shadow-card hover:shadow-elevated hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${prod.gradient} text-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}
                    >
                      <prod.icon className="h-6 w-6" />
                    </div>
                    <span className="text-[11px] font-medium uppercase tracking-wider text-muted-foreground bg-muted/60 px-3 py-1 rounded-full border border-border/50">
                      {prod.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-brand transition-colors">
                    {prod.name}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {prod.desc}
                  </p>

                  {prod.features && prod.features.length > 0 && (
                    <div className="space-y-2 pt-4 border-t border-border/50 mb-6">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground/80 mb-2">
                        Key Capabilities
                      </div>
                      {prod.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs text-foreground/85">
                          <Check className="h-3.5 w-3.5 text-brand shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                  <Link
                    to={prod.href as any}
                    className="inline-flex items-center gap-2 text-sm font-bold text-brand hover:text-brand-red transition-colors group/link"
                  >
                    <span>Explore Solution &amp; Demo</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                  <span className="text-[11px] font-semibold text-muted-foreground/60">
                    Proprietary IP
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION 4: CORE PILLARS OF THE ECOSYSTEM */}
      <section className="bg-muted/30 border-y border-border/60 py-16 sm:py-24 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand mb-3">
                Architectural Foundation
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight">
                Core Pillars of Our Ecosystem
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg">
                Engineered for maximum reliability, cross-functional visibility, and rapid time-to-value.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {data.pillars.map((pillar, idx) => (
              <Reveal key={pillar.title} delay={idx * 0.1}>
                <div className="rounded-3xl border border-border/70 bg-card p-8 shadow-card hover:border-brand/40 transition-all h-full flex flex-col justify-between">
                  <div>
                    <div className="h-12 w-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center mb-6">
                      <pillar.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: KEY INDUSTRY SECTORS WE SERVE & WHY PARTNER */}
      <section className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 sm:py-24">
        <div className="grid lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          {/* Left Column: Key Industry Sectors */}
          <div className="lg:col-span-7 space-y-8">
            <Reveal>
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red mb-3">
                  Sector Application
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-4">
                  Key Industry Sectors We Serve
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Tailored solutions engineered to withstand the operational complexities of heavy industrial, commercial, and enterprise domains.
                </p>
              </div>
            </Reveal>

            <div className="space-y-4">
              {data.sectors.map((sec, sIdx) => (
                <Reveal key={sec.title} delay={sIdx * 0.08}>
                  <div className="rounded-2xl border border-border/70 bg-card p-6 shadow-sm hover:border-brand/40 transition-colors flex items-start gap-4">
                    <div className="h-10 w-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0 mt-0.5">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-foreground mb-1">
                        {sec.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {sec.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right Column: Why Partner with Acceleron */}
          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-brand/30 bg-gradient-to-br from-card via-card to-brand/5 p-8 sm:p-10 shadow-card">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="h-8 w-8 text-brand" />
                  <h3 className="text-2xl font-bold text-foreground">
                    Why Partner with Acceleron?
                  </h3>
                </div>

                <div className="space-y-4 mb-8">
                  {data.whyPartner.map((reason, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-3.5">
                      <CheckCircle2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/85 leading-relaxed">
                        {reason}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-gradient py-4 text-xs font-bold text-white shadow-glow hover:opacity-95 transition-opacity"
                >
                  <span>Request Solution Consultation</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 6: EXPLORE OTHER PRODUCT HUBS */}
      <section className="bg-muted/20 border-t border-border/60 py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                Portfolio Navigation
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                Explore Other Product Solution Hubs
              </h3>
            </div>
            <Link
              to="/products"
              className="text-xs font-bold text-brand hover:text-brand-red transition-colors inline-flex items-center gap-1.5"
            >
              <span>View All 20 Solutions Matrix</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {OTHER_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                to={cat.href as any}
                className="group rounded-2xl border border-border/70 bg-card p-6 shadow-sm hover:border-brand/40 hover:-translate-y-1 transition-all flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-lg font-bold text-foreground group-hover:text-brand transition-colors mb-2">
                    {cat.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    {cat.desc}
                  </p>
                </div>
                <div className="flex items-center text-xs font-bold text-brand group-hover:translate-x-1 transition-transform">
                  <span>Open Hub</span>
                  <ArrowRight className="h-3.5 w-3.5 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA BANNER */}
      <section className="border-t border-border/60 bg-gradient-to-br from-card via-card to-brand/5 py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-5xl text-center">
          <Reveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Accelerate Your {data.categoryTitle} Transformation
            </h2>
            <p className="text-muted-foreground text-base max-w-2xl mx-auto mb-8">
              Schedule a technical discovery session with our solution architects to evaluate platform fit and pilot deployment timelines.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
              <Link
                to="/contact#form"
                className="btn btn-primary btn-lg shadow-lg shadow-red-600/30"
              >
                Schedule Architecture Discovery
              </Link>
              <Link
                to="/products"
                className="rounded-2xl border border-border bg-card px-8 py-4 text-sm font-bold text-foreground hover:bg-muted/50 transition-colors inline-flex items-center gap-2"
              >
                <span>View Full Product Directory</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
