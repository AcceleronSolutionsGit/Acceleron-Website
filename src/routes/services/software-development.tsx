import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle, ArrowUpRight, Code2 } from "lucide-react";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { PageHero } from "../../components/ui/PageHero";
import { ProcessFlow } from "../../components/ui/ProductShowcase";
import { Link } from "@tanstack/react-router";
import { getSubServicesByCategory } from "../../data/servicesData";
import { getAssetUrl } from "../../lib/assets";

export const Route = createFileRoute("/services/software-development")({
  component: SoftwareDevPage,
});

function SoftwareDevPage() {
  const subServices = getSubServicesByCategory("software-development");

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <PageHero
        title="Software Development"
        subtitle="Custom enterprise software, modern web & mobile apps, microservices, and cloud-native solutions."
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Software Development" }]}
        image="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=75&w=1200&auto=format&fit=crop"
        icon={<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2 shadow-glow"><Code2 className="h-10 w-10 text-brand" /></div>}
      />

      <section className="container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Development Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Tailored software engineering built for performance, security, and enterprise scalability.</p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {subServices.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.08}>
              <Link to={`/services/${s.categorySlug}/${s.slug}` as any} className="block h-full group">
                <div className="rounded-2xl border border-border bg-card p-8 h-full transition-all hover:border-brand/30 hover:shadow-soft flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-start gap-3">
                        {s.customLogo ? (
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white p-1.5 shadow-sm border border-border/40">
                            <img src={getAssetUrl(s.customLogo)} alt={s.title} loading="lazy" decoding="async" className="h-full w-full object-contain" />
                          </div>
                        ) : (
                          <Code2 className="h-6 w-6 text-brand shrink-0 mt-0.5" />
                        )}
                        <h3 className="text-lg font-bold text-foreground group-hover:text-brand transition-colors">{s.title}</h3>
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-border/50 flex items-center text-xs font-bold text-brand">
                    Explore Detail & Pricing →
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <WaveDivider from="white" to="dark" />

      <section className="section-dark container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Development Lifecycle</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Agile methodology with continuous delivery and quality assurance.</p>
          </div>
        </Reveal>
        <ProcessFlow
          steps={[
            { step: "01", title: "Requirements", desc: "User stories and technical specs" },
            { step: "02", title: "Prototyping", desc: "UI/UX wireframes and architecture" },
            { step: "03", title: "Development", desc: "Sprints, code review, and QA" },
            { step: "04", title: "Maintenance", desc: "Monitoring, scaling, and support" },
          ]}
        />
      </section>

      <WaveDivider from="dark" to="white" />

      <section className="container mx-auto px-6 max-w-7xl relative z-10 py-24 text-center">
        <Reveal>
          <h2 className="text-3xl font-bold text-foreground mb-6">Let's Build Something Great</h2>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Start Your Project <ArrowUpRight className="h-5 w-5" />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
