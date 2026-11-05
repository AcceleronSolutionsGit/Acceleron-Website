import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Users,
  Target,
  Compass,
  Building2,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  MapPin,
  Mail,
  Phone,
  Layers,
  Award,
  ShieldCheck,
  TrendingUp,
  AlertCircle,
  Lightbulb,
} from "lucide-react";
import { Reveal, WaveDivider } from "../components/ui/Animations";
import { PageHero } from "../components/ui/PageHero";
import { getAssetUrl } from "../lib/assets";
import { AboutImageSlider } from "../components/ui/AboutImageSlider";
import { OurValuesSection } from "../components/ui/OurValuesGrid";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Acceleron Solutions" },
      {
        name: "description",
        content:
          "Acceleron Solutions bridges decades of industrial lineage with modern enterprise engineering to deliver grounded digital transformation and measurable bottom-line P&L impact.",
      },
    ],
  }),
  component: AboutPage,
});

// SVG Outline maps for locations
function IndiaMapSvg({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M45,10 C50,15 55,20 52,28 C50,32 55,35 60,38 C68,42 72,50 68,58 C62,68 55,80 48,92 C45,86 40,78 35,70 C30,62 25,52 28,45 C30,40 25,32 28,24 Z" />
    </svg>
  );
}

function SingaporeMapSvg({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M15,45 C25,30 65,28 85,40 C90,55 75,70 50,72 C30,72 10,60 15,45 Z" />
    </svg>
  );
}

const LOCATION_CARDS = [
  {
    city: "Kolkata Headquarters",
    country: "India",
    label: "Global HQ & Center of Excellence (CoE)",
    address:
      "3rd Floor, STPI IT Park, Block-DP, Plot-5/1, Sector V, Salt Lake, Kolkata – 700091, West Bengal, India",
    email: "enquiry@acceleronsolutions.io",
    phone: "033-35346200 / 033-35346222",
    phones: ["033-35346200", "033-35346222"],
    directionsUrl: "https://maps.app.goo.gl/PDjDU26TL5tt7HgD6",
    MapComponent: IndiaMapSvg,
    isHq: true,
  },
  {
    city: "Delhi NCR Hub",
    country: "India",
    label: "Enterprise Delivery Center",
    address:
      "Gainwell Ecotech II, 1-C/1, Udyog Vihar, Greater Noida, Delhi NCR – 201306, Uttar Pradesh, India",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=28.4986,77.5348",
    MapComponent: IndiaMapSvg,
  },
  {
    city: "International Footprint",
    country: "Global Reach",
    label: "Strategic Client Reach & Operations",
    address:
      "Active enterprise engagements across USA (West Virginia), Australia (NSW), Singapore, and the Middle East",
    MapComponent: SingaporeMapSvg,
  },
];

const PERFORMANCE_METRICS = [
  {
    metric: "250+",
    label: "Skilled Employees & Enterprise Specialists",
    icon: Users,
  },
  {
    metric: "120+",
    label: "Enterprise Projects Completed On-Time & On-Budget",
    icon: CheckCircle2,
  },
  {
    metric: "80+",
    label: "Strategic Customers Worldwide",
    icon: Building2,
  },
  {
    metric: "20+",
    label: "Core Technological Skills & Practice Competencies",
    icon: Sparkles,
  },
  {
    metric: "4",
    label: "Strategic Delivery Locations & Hubs",
    icon: MapPin,
  },
];

const CLIENT_LOGOS = [
  { name: "Client 2", logo: "/client (2).png" },
  { name: "Client 3", logo: "/client (3).png" },
  { name: "Client 4", logo: "/client (4).png" },
  { name: "Client 5", logo: "/client (5).png" },
  { name: "Client 6", logo: "/client (6).png" },
  { name: "Client 7", logo: "/client (7).png" },
  { name: "Client 8", logo: "/client (8).png" },
  { name: "Client 9", logo: "/client (9).png" },
  { name: "Client 10", logo: "/client (10).png" },
  { name: "Client 11", logo: "/client (11).png" },
  { name: "Client 12", logo: "/client (12).png" },
  { name: "Client 13", logo: "/client (13).png" },
  { name: "Client 14", logo: "/client (14).png" },
  { name: "Client 15", logo: "/client (15).png" },
  { name: "Client 16", logo: "/client (16).png" },
  { name: "Client 17", logo: "/client (17).png" },
  { name: "Client 18", logo: "/client (18).png" },
  { name: "Client 19", logo: "/client (19).png" },
  { name: "Client 20", logo: "/client (20).png" },
  { name: "Trimble", logo: "/TRIMBLE.png" },
  { name: "Tulip Compression", logo: "/TulipCompression.png" },
  { name: "Sitech", logo: "/SITECH.png" },
  { name: "SEM", logo: "/SEM.png" },
  { name: "RPM Global", logo: "/rpmglobal.png" },
  { name: "Ontrak", logo: "/ontrak.png" },
  { name: "Lintec & Linnhoff", logo: "/lintec&linhoff.png" },
  { name: "Paus", logo: "/PAUS.png" },
  { name: "TIPL CAT", logo: "/TIPL.jpg" },
  { name: "TIL", logo: "/TractorsIndia.jpg" },
  { name: "Gainwell CAT", logo: "/GainwellCAT.jpg" },
  { name: "Gainwell Engineering", logo: "/GainwellEngineering.jpg" },
  { name: "PCM", logo: "/PCM.png" },
  { name: "TMC", logo: "/TMC-removebg-preview.png" },
  { name: "Livpure", logo: "/Livpure_LOGO_Purple_2048x2048_8465dc4a-1c7e-472e-ab6c-b78e8af8446f.png" },
  { name: "Equipcare", logo: "/equipcare.png" },
  { name: "Ambey Mining", logo: "/Ampl.png" },
];

function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* 1. CLEAR VALUE PROPOSITION */}
      <PageHero
        title="Grounded Digital Engineering Built for Complex Operating Realities"
        subtitle="Acceleron Solutions bridges decades of industrial lineage with modern enterprise engineering to optimize core operations, modernize technology architectures, and deliver measurable bottom-line P&L impact."
        breadcrumbs={[{ label: "About Us" }]}
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=75&w=1200&auto=format&fit=crop"
        ctaText="Explore Our Capabilities"
        ctaHref="/services"
        secondaryCtaText="Consult with Our Architects"
        secondaryCtaHref="/contact"
      />

      {/* 2. THE ORIGIN STORY & PROBLEM SOLVED */}
      <section className="section-dark container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-14 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-5 space-y-5">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red">
                Origin & Heritage
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Technology Built Around{" "}
                <span className="text-gradient">Real Business Needs</span>
              </h2>
            </Reveal>

            {/* The Problem We Solve */}
            <Reveal delay={0.2}>
              <div className="p-6 rounded-2xl border border-border/70 bg-card/60 backdrop-blur-md">
                <div className="flex items-center gap-2.5 text-brand-red font-bold text-sm uppercase tracking-wider mb-2">
                  <AlertCircle className="h-4 w-4" />
                  <span>The Problem We Solve</span>
                </div>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  Enterprise digital transformation frequently falters when software implementations are disconnected from ground-level operating realities. Heavy industrial sectors, plant operations, and complex supply chains require technology that respects shop-floor mechanics, asset lifecycles, and commercial compliance.
                </p>
              </div>
            </Reveal>

            {/* Our Lineage */}
            <Reveal delay={0.3}>
              <div className="p-6 rounded-2xl border border-brand/30 bg-brand-gradient/10 backdrop-blur-md">
                <div className="flex items-center gap-2.5 text-brand font-bold text-sm uppercase tracking-wider mb-2">
                  <Building2 className="h-4 w-4" />
                  <span>Our Lineage</span>
                </div>
                <p className="text-foreground/90 text-sm sm:text-base leading-relaxed">
                  Established as the specialized technology and consulting company of the Gainwell Group, Acceleron was born out of <strong>80+ years of industrial leadership</strong> across heavy engineering, mining, and capital goods. Our engineering teams inherit an intrinsic understanding of business operations, positioning us as a <strong>'Solutions &gt; Services'</strong> partner.
                </p>
              </div>
            </Reveal>

            {/* Our Approach */}
            <Reveal delay={0.4}>
              <div className="p-6 rounded-2xl border border-border/70 bg-card/60 backdrop-blur-md">
                <div className="flex items-center gap-2.5 text-foreground font-bold text-sm uppercase tracking-wider mb-2">
                  <Lightbulb className="h-4 w-4 text-amber-500" />
                  <span>Our Approach</span>
                </div>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  We combine domain-aware Subject Matter Experts (SMEs) with full-stack technical execution—ensuring every SAP migration, Zoho automation, custom software deployment, and AI model solves concrete business bottlenecks rather than adding technical debt.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.2}>
              <AboutImageSlider showCaption={true} />
            </Reveal>
          </div>
        </div>
      </section>

      <WaveDivider from="dark" to="white" />

      {/* 3. CORE MISSION & VISION */}
      <section className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-20 sm:py-24">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold mb-3">
              Guiding Principles
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Our Vision & <span className="text-gradient">Mission</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision */}
          <Reveal delay={0.1}>
            <div className="group rounded-3xl border border-border/70 bg-card p-8 sm:p-10 hover:border-brand/40 transition-all duration-300 shadow-soft hover:shadow-elevated h-full flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 h-32 w-32 bg-brand/5 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow">
                  <Compass className="h-7 w-7" />
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-brand-red mb-2">
                  Our Vision
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Trusted Global Solution Partner
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base sm:text-lg italic">
                  “To be a trusted global solution partner to our clients, delivering industry-leading digital transformation, operational resilience, and long-term business impact.”
                </p>
              </div>
            </div>
          </Reveal>

          {/* Mission */}
          <Reveal delay={0.2}>
            <div className="group rounded-3xl border border-border/70 bg-card p-8 sm:p-10 hover:border-brand/40 transition-all duration-300 shadow-soft hover:shadow-elevated h-full flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 h-32 w-32 bg-brand-red/5 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow">
                  <Target className="h-7 w-7" />
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-brand-red mb-2">
                  Our Mission
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Eliminating Friction. Driving Growth.
                </h3>
                <p className="text-muted-foreground leading-relaxed text-base sm:text-lg italic">
                  “To empower enterprises with intelligent cloud platforms, automated workflows, and robust IT governance—eliminating operational friction and driving predictable growth through expert-led innovation.”
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <WaveDivider from="white" to="dark" flip />

      {/* 4. COMPANY CULTURE & CORE VALUES */}
      <OurValuesSection
        bg="dark"
        kicker="Company Culture & Core Values"
        headline="The People and Principles Behind Every Client Partnership"
        introCopy="At Acceleron Solutions, great work starts with great people. We build teams that are curious, collaborative, and accountable, and we give them room to learn, speak up, and take ownership of the outcomes they deliver. That human-centric approach is what lets us pair technical ambition with sound operational ethics, and it shows in how our global teams work together and in how we show up for every client."
      />

      <WaveDivider from="dark" to="white" />

      {/* 5. TRUST SIGNALS & PERFORMANCE METRICS */}
      <section className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-20 sm:py-24">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold mb-3">
              Performance Metrics
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Proven Scale, Industry Standards & <span className="text-gradient">Battle-Tested Assets</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground">
              Measurable benchmarks reflecting decades of enterprise reliability and technical rigor.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3.5 sm:gap-5">
          {PERFORMANCE_METRICS.map((item, idx) => (
            <Reveal key={item.label} delay={idx * 0.08} className="h-full">
              <div className="group rounded-3xl border border-border/70 bg-card p-6 h-full shadow-soft hover:shadow-elevated hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="h-11 w-11 rounded-xl bg-brand/10 text-brand flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-foreground group-hover:text-brand transition-colors tracking-tight mb-2">
                    {item.metric}
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-foreground/80 leading-snug">
                    {item.label}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <WaveDivider from="white" to="dark" flip />

      {/* Industry Clients Showcase */}
      <section className="section-dark container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 sm:py-20 lg:py-24">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold mb-3">
              Trusted Partnerships
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Our Industry <span className="text-gradient">Clients</span>
            </h2>
            <p className="text-muted-foreground text-base">
              Partnering with global leaders, OEMs, heavy mining operators, and industrial enterprises.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 sm:gap-4 md:gap-6">
          {CLIENT_LOGOS.map((client, idx) => (
            <Reveal key={client.name} delay={idx * 0.02}>
              <motion.div
                whileHover={{ y: -4, scale: 1.04 }}
                className="group flex items-center justify-center p-3 sm:p-5 rounded-2xl border border-border/60 bg-white/95 dark:bg-muted/30 backdrop-blur-md hover:border-brand/50 hover:shadow-glow transition-all h-24 sm:h-32 md:h-40 text-center"
              >
                <img
                  src={getAssetUrl(client.logo)}
                  alt={client.name}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full max-h-20 sm:max-h-24 md:max-h-28 max-w-[90%] object-contain filter transition-all group-hover:scale-110"
                />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      <WaveDivider from="dark" to="white" />

      {/* Global Presence */}
      <section className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-20 sm:py-24">
        <Reveal>
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold mb-4">
              Global Presence
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Our Offices & Delivery Hubs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Strategic delivery hubs and regional offices supporting enterprise clients worldwide.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {LOCATION_CARDS.map((loc, i) => (
            <Reveal key={loc.city} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                className={`relative rounded-3xl border p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between h-full ${loc.isHq
                  ? "border-brand bg-brand-gradient/10 shadow-glow"
                  : "border-border/60 bg-background/50 hover:border-brand/40 hover:shadow-soft"
                  }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-2xl bg-brand-gradient/20 p-2 text-brand border border-brand/30 flex items-center justify-center">
                        <loc.MapComponent className="h-8 w-8 text-brand" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                          {loc.city}
                          {loc.isHq && (
                            <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-brand-red text-white">
                              HQ
                            </span>
                          )}
                        </h3>
                        <p className="text-xs text-muted-foreground font-semibold">{loc.country}</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs font-bold text-brand-red uppercase tracking-wider mb-2">
                    {loc.label}
                  </p>

                  {(loc.address || loc.email || loc.phone) && (
                    <div className="space-y-3 text-xs text-muted-foreground leading-relaxed mt-4 pt-4 border-t border-border/50">
                      {loc.address && (
                        <div className="flex items-start gap-2.5">
                          <MapPin className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                          <span>{loc.address}</span>
                        </div>
                      )}
                      {/* {loc.phone && (
                        <div className="flex items-center gap-2.5">
                          <Phone className="h-4 w-4 text-brand shrink-0" />
                          <div className="flex flex-wrap items-center gap-x-2 font-medium text-foreground">
                            <a href="tel:03335346200" className="hover:text-brand transition-colors">
                              033-35346200
                            </a>
                            <span className="text-muted-foreground">/</span>
                            <a href="tel:03335346222" className="hover:text-brand transition-colors">
                              033-35346222
                            </a>
                          </div>
                        </div>
                      )} */}
                      {loc.email && (
                        <div className="flex items-center gap-2.5">
                          <Mail className="h-4 w-4 text-brand shrink-0" />
                          <a href={`mailto:${loc.email}`} className="hover:text-brand transition-colors">
                            {loc.email}
                          </a>
                        </div>
                      )}
                      {loc.directionsUrl && (
                        <div className="pt-2">
                          <a
                            href={loc.directionsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand hover:text-brand-red transition-colors"
                          >
                            <span>Get Directions</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 6. CALL TO ACTION / BOTTOM BANNER */}
      <section className="section-dark container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 pb-16 sm:pb-24 pt-8 sm:pt-12">
        <Reveal>
          <div className="rounded-3xl border border-brand/40 bg-brand-gradient/10 p-8 sm:p-12 md:p-16 text-center backdrop-blur-xl relative overflow-hidden shadow-glow max-w-5xl mx-auto">
            <div className="relative z-10 space-y-6">
              <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold">
                Explore Acceleron & Partner with Us
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                Ready to Discuss Your <span className="text-gradient">Enterprise Transformation?</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                Schedule a consultation with our technology architects and domain experts.
              </p>
              <div className="pt-4">
                <Link to="/contact" className="btn btn-primary btn-lg inline-flex items-center gap-2">
                  Connect with our Experts <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
