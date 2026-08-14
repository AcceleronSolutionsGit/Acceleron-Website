import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, MonitorSmartphone } from "lucide-react";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { PageHero } from "../../components/ui/PageHero";
import { ProcessFlow } from "../../components/ui/ProductShowcase";
import { Link } from "@tanstack/react-router";
import { getSubServicesByCategory } from "../../data/servicesData";
import { getAssetUrl } from "../../lib/assets";

export const Route = createFileRoute("/services/manageengine")({
  component: ManageEnginePage,
});

function ManageEnginePage() {
  const subServices = getSubServicesByCategory("manageengine");

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* Hero Banner */}
      <section className="relative w-full min-h-[90vh] flex flex-col justify-center pt-24 pb-12 bg-background overflow-hidden border-b border-border/50">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,oklch(0.68_0.19_240/0.05),transparent_70%)]" />
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-[0.05]" />
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <div className="relative w-full aspect-video sm:rounded-3xl overflow-hidden shadow-2xl border border-border/50 bg-white/5 backdrop-blur-3xl flex items-center justify-center">
            <img src={getAssetUrl("/Manage_Engine_Banner.png")} alt="ManageEngine Services" className="absolute inset-0 h-full w-full object-contain drop-shadow-2xl" />
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="w-full border-b border-border/50 bg-muted/40 py-3.5 backdrop-blur-md relative z-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
            <Link to="/services" className="hover:text-foreground transition-colors">Services</Link>
            <span className="text-foreground/30">/</span>
            <span className="text-brand-red">ManageEngine</span>
          </div>
        </div>
      </div>

      <section className="container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">ManageEngine Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Optimize your IT operations with ManageEngine's powerful suite.</p>
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
                        <MonitorSmartphone className="h-6 w-6 text-brand shrink-0 mt-0.5" />
                        <h3 className="text-lg font-bold text-foreground group-hover:text-brand transition-colors">{s.title}</h3>
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-brand group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <WaveDivider from="white" to="dark" />

      <section className="section-dark container mx-auto px-6 max-w-7xl relative z-10 py-24 text-center">
        <Reveal>
          <h2 className="text-3xl font-bold text-foreground mb-6">Transform Your IT Operations</h2>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Talk to our Experts <ArrowUpRight className="h-5 w-5" />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
