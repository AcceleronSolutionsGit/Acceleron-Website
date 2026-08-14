import { createFileRoute } from "@tanstack/react-router";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { PageHero } from "../components/ui/PageHero";
import { Reveal, WaveDivider } from "../components/ui/Animations";
import { TEAM_MEMBERS } from "../data/teamData";
import { getAssetUrl } from "../lib/assets";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Team & Leadership — Acceleron Solutions" },
      { name: "description", content: "Meet the executive leaders and technical visionaries behind Acceleron Solutions enterprise digital transformation." },
    ],
  }),
  component: TeamPage,
});

function TeamPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <PageHero
        title="Engineering Excellence Driven by Experienced Leadership"
        subtitle="Guided by veterans of industrial technology, heavy enterprise operations, SAP practice leads, and AI solution architects."
        breadcrumbs={[
          { label: "About Us", href: "/about" },
          { label: "Our Team" }
        ]}
        image={getAssetUrl("https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=75&w=1200&auto=format&fit=crop")}
        ctaText="Explore Careers"
        ctaHref="/careers"
      />

      <section className="section-dark container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold mb-4">Leadership & Vision</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              The Minds Behind <span className="text-gradient">Acceleron</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our team combines deep operational heritage from the 80-year-old Gainwell Group with top-tier technology mastery.
            </p>
          </div>
        </Reveal>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <Reveal key={member.id} delay={0.1 * idx}>
              <div className="group relative flex flex-col items-center text-center h-full">
                {/* Minimalist Image Container */}
                <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden mb-6 relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] transition-all duration-500 group-hover:shadow-glow">
                  <img
                    src={getAssetUrl(member.image)}
                    alt={member.name}
                    loading="lazy"
                    decoding="async"
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Premium inner border and subtle gradient */}
                  <div className="absolute inset-0 border border-black/5 dark:border-white/10 rounded-3xl pointer-events-none" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>

                {/* Sleek Typography */}
                <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-brand transition-colors">
                  {member.name}
                </h3>
                <p className="text-brand-red font-semibold text-xs mt-2 uppercase tracking-[0.15em]">
                  {member.role}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <WaveDivider from="dark" to="white" />
    </main>
  );
}
