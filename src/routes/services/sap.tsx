import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle, ArrowUpRight } from "lucide-react";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { PageHero } from "../../components/ui/PageHero";
import { ProcessFlow } from "../../components/ui/ProductShowcase";
import { SAPLogo } from "../../components/ui/Icons";
import { Link } from "@tanstack/react-router";
import { getSubServicesByCategory } from "../../data/servicesData";

export const Route = createFileRoute("/services/sap")({
  component: SAPPage,
});

function SAPPage() {
  const subServices = getSubServicesByCategory("sap");

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <PageHero
        title="SAP Services"
        subtitle="End-to-end SAP consulting, implementation, and managed services — from S/4HANA transformation to RISE with SAP."
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: "SAP" }]}
        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=75&w=1200&auto=format&fit=crop"
        icon={<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2 shadow-glow"><img src="/sap_s4hana-transparentbg.png" alt="SAP S/4HANA" className="h-10 w-10 object-contain" /></div>}
      />

      {/* Sub-services grid */}
      <section className="container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our SAP Capabilities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive SAP expertise across the full product suite, tailored for heavy industry and enterprise.</p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subServices.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.08}>
              <Link to={`/services/${s.categorySlug}/${s.slug}` as any} className="block h-full group">
                <div className="rounded-2xl border border-border bg-card p-8 h-full transition-all hover:border-brand/30 hover:shadow-soft flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-start gap-3">
                        {s.customLogo ? (
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white p-1.5 shadow-sm border border-border/40">
                            <img src={s.customLogo} alt={s.title} className="h-full w-full object-contain" />
                          </div>
                        ) : (
                          <img src="/sap_s4hana-transparentbg.png" alt="SAP" className="h-6 w-6 object-contain shrink-0 mt-0.5" />
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Implementation Methodology</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Our proven SAP delivery framework ensures zero business disruption.</p>
          </div>
        </Reveal>
        <ProcessFlow
          steps={[
            { step: "01", title: "Discovery", desc: "Process mapping and gap analysis" },
            { step: "02", title: "Design", desc: "Solution architecture and blueprinting" },
            { step: "03", title: "Build", desc: "Configuration and custom development" },
            { step: "04", title: "Deploy", desc: "Data migration, testing, and go-live" },
          ]}
        />
      </section>

      <WaveDivider from="dark" to="white" />

      <section className="container mx-auto px-6 max-w-7xl relative z-10 py-24 text-center">
        <Reveal>
          <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Transform with SAP?</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-8 py-4 text-base font-bold text-white shadow-glow transition-all hover:scale-105">
            Talk to Our SAP Experts <ArrowUpRight className="h-5 w-5" />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
