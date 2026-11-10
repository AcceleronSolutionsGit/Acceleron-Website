import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ShieldCheck,
  Sparkles,
  Users,
  Compass,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { PageHero } from "../components/ui/PageHero";
import { Reveal, WaveDivider } from "../components/ui/Animations";
import { TEAM_MEMBERS } from "../data/teamData";
import { getAssetUrl } from "../lib/assets";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Leadership & Team — Acceleron Solutions" },
      {
        name: "description",
        content:
          "Our leadership guides Acceleron with a unified vision: to pioneer cutting-edge solutions, foster a culture of continuous growth, and maintain the highest standards of professional integrity.",
      },
    ],
  }),
  component: TeamPage,
});

const LEADERSHIP_PILLARS = [
  {
    title: "Pioneering Cutting-Edge Solutions",
    desc: "Spearheading modern SAP S/4HANA migrations, Applied AI cognitive systems, and proprietary industrial platforms engineered for scale.",
    icon: Sparkles,
  },
  {
    title: "Culture of Continuous Growth",
    desc: "Nurturing an innovation-first mindset where multidisciplinary talent experiments boldly and expands their technical leadership.",
    icon: Compass,
  },
  {
    title: "Highest Standards of Professional Integrity",
    desc: "Unwavering commitment to enterprise governance, data privacy, and trusted partnerships across heavy engineering and commercial sectors.",
    icon: ShieldCheck,
  },
];

function TeamPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* SECTION 1: HERO */}
      <PageHero
        badge="WHO WE ARE • EXECUTIVE LEADERSHIP"
        title="Leadership & Team"
        subtitle="Our leadership guides Acceleron with a unified vision: to pioneer cutting-edge solutions, foster a culture of continuous growth, and maintain the highest standards of professional integrity."
        breadcrumbs={[
          { label: "Who We Are", href: "/about" },
          { label: "Leadership & Team" },
        ]}
        image={getAssetUrl(
          "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=75&w=1200&auto=format&fit=crop"
        )}
        ctaText="Meet the Leadership"
        ctaHref="#leadership"
        secondaryCtaText="Explore Careers"
        secondaryCtaHref="/careers"
        icon={
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/20 shadow-xl">
            <Users className="h-8 w-8 text-brand drop-shadow-lg" />
            <div className="border-l border-white/30 pl-3">
              <div className="text-[10px] font-bold uppercase tracking-wider text-brand-red">
                Acceleron Leadership
              </div>
              <div className="text-xs font-bold text-white tracking-wide">
                Excellence in Action
              </div>
            </div>
          </div>
        }
      />

      {/* SECTION 2: DRIVING EXCELLENCE THROUGH EXPERIENCE */}
      <section className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 sm:py-24 border-b border-border/60">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand mb-3">
              Driving Excellence Through Experience
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Visionary Thinking, <span className="text-gradient">Decades of Expertise</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              At Acceleron, our strength lies in our people. Our leadership team brings decades of industry expertise, visionary thinking, and an unwavering commitment to driving innovation and delivering exceptional value for our clients.
            </p>
          </div>
        </Reveal>

        {/* 3 CORE LEADERSHIP PILLARS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {LEADERSHIP_PILLARS.map((pillar, idx) => (
            <Reveal key={pillar.title} delay={idx * 0.1}>
              <div className="rounded-3xl border border-border/80 bg-card p-6 sm:p-8 h-full flex flex-col justify-between shadow-card hover:border-brand/40 hover:-translate-y-1 transition-all duration-300">
                <div>
                  <div className="h-12 w-12 rounded-2xl bg-brand-gradient text-white flex items-center justify-center mb-6 shadow-glow">
                    <pillar.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-border/50 flex items-center gap-2 text-xs font-bold text-brand">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Executive Commitment</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION 3: LEADERSHIP DIRECTORY */}
      <section
        id="leadership"
        className="section-dark container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 sm:py-24 border-b border-border/60"
      >
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold mb-2">
                Executive Leadership
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                The Minds Behind <span className="text-gradient">Acceleron</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
              Combining deep operational heritage from the 80-year-old Gainwell Group with modern cloud architectures, enterprise ERP, and AI systems.
            </p>
          </div>
        </Reveal>

        {/* TEAM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <Reveal key={member.id} delay={0.08 * idx}>
              <div className="group relative flex flex-col h-full rounded-3xl border border-border/80 bg-card/70 backdrop-blur-xl p-5 shadow-card hover:border-brand/40 hover:-translate-y-1 transition-all duration-300">
                {/* Image Container */}
                <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden mb-4 relative bg-muted/40 shadow-inner">
                  <img
                    src={getAssetUrl(member.image)}
                    alt={member.name}
                    loading="lazy"
                    decoding="async"
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Typography */}
                <div className="flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-foreground group-hover:text-brand transition-colors leading-snug">
                      {member.name}
                    </h3>
                    <p className="text-brand-red font-bold text-[11px] mt-1.5 uppercase tracking-wider leading-relaxed">
                      {member.role}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION 4: CALL TO ACTION */}
      <section className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10 py-16 sm:py-24">
        <Reveal>
          <div className="rounded-3xl border border-brand/30 bg-gradient-to-br from-card via-card to-brand/5 p-8 sm:p-14 shadow-glow text-center relative overflow-hidden">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-brand mb-4">
              Collaborate With Us
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground max-w-2xl mx-auto leading-tight mb-4">
              Looking to Accelerate Your Enterprise Digital Transformation?
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8">
              Connect directly with our practice directors, enterprise architects, and technology leads to discuss your operational roadmap.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-8 py-3.5 text-xs font-bold text-white shadow-glow hover:scale-105 transition-all"
              >
                <span>Schedule an Executive Briefing</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/careers"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-8 py-3.5 text-xs font-bold text-foreground hover:bg-muted/40 transition-colors"
              >
                <span>Join Our Growing Team</span>
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <WaveDivider from="dark" to="white" />
    </main>
  );
}
