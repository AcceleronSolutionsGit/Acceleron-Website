import { createFileRoute } from "@tanstack/react-router";
import { Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { PageHero } from "../components/ui/PageHero";
import { Reveal, WaveDivider } from "../components/ui/Animations";
import { TEAM_MEMBERS } from "../data/teamData";

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
        image="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=75&w=1200&auto=format&fit=crop"
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <Reveal key={member.id} delay={0.1 * idx}>
              <div className="group relative rounded-3xl border border-border/60 bg-muted/20 overflow-hidden backdrop-blur-xl hover:bg-muted/40 hover:border-brand/40 transition-all duration-500 shadow-soft hover:shadow-glow flex flex-col justify-between h-full">
                
                {/* Image Container with Grayscale-to-Color hover */}
                <div className="aspect-[4/4] bg-muted/50 relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  
                  <div className="absolute top-4 right-4">
                    <span className="inline-block rounded-full bg-background/80 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-foreground border border-border">
                      {member.department}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-8 relative flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-brand transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-brand-red font-semibold text-sm mt-1 mb-4">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-xs leading-relaxed mb-6">
                      {member.bio}
                    </p>
                  </div>

                  {/* Social / Contact Links */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border/50 mt-auto">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-muted/60 text-muted-foreground hover:bg-brand hover:text-white transition-all duration-300"
                        aria-label={`${member.name} LinkedIn Profile`}
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    )}
                    {member.email && (
                      <a
                        href={`mailto:${member.email}`}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-muted/60 text-muted-foreground hover:bg-brand hover:text-white transition-all duration-300"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <WaveDivider from="dark" to="white" />
    </main>
  );
}
