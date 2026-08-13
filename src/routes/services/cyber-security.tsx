import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle, ArrowUpRight, ShieldCheck } from "lucide-react";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { PageHero } from "../../components/ui/PageHero";
import { ProcessFlow } from "../../components/ui/ProductShowcase";
import { Link } from "@tanstack/react-router";
import { getSubServicesByCategory } from "../../data/servicesData";
import { getAssetUrl } from "../../lib/assets";

export const Route = createFileRoute("/services/cyber-security")({
  component: CyberSecurityPage,
});

function CyberSecurityPage() {
  const subServices = getSubServicesByCategory("cyber-security");

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <PageHero
        title="Cyber Security"
        subtitle="Protect your enterprise assets, compliance posture, and digital reputation with end-to-end security architecture."
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "Cyber Security" }]}
        image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=75&w=1200&auto=format&fit=crop"
        icon={<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2 shadow-glow"><ShieldCheck className="h-10 w-10 text-brand" /></div>}
      />

      <section className="container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Security Capabilities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Proactive, multi-layered cyber defense strategies engineered for the modern threat landscape.</p>
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
                          <ShieldCheck className="h-6 w-6 text-brand shrink-0 mt-0.5" />
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Security Posture Lifecycle</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Continuous assessment and fortification of your digital perimeter.</p>
          </div>
        </Reveal>
        <ProcessFlow
          steps={[
            { step: "01", title: "Assess", desc: "Vulnerability scanning and risk analysis" },
            { step: "02", title: "Harden", desc: "Policy implementation and patching" },
            { step: "03", title: "Monitor", desc: "24/7 SOC and automated threat hunting" },
            { step: "04", title: "Respond", desc: "Incident containment and remediation" },
          ]}
        />
      </section>

      <WaveDivider from="dark" to="white" />

      <section className="container mx-auto px-6 max-w-7xl relative z-10 py-24 text-center">
        <Reveal>
          <h2 className="text-3xl font-bold text-foreground mb-6">Secure Your Enterprise</h2>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Get a Security Assessment <ArrowUpRight className="h-5 w-5" />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
