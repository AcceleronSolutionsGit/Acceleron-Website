import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle, ArrowUpRight } from "lucide-react";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { PageHero } from "../../components/ui/PageHero";
import { ProcessFlow } from "../../components/ui/ProductShowcase";
import { ZohoLogo } from "../../components/ui/Icons";
import { Link } from "@tanstack/react-router";
import { getSubServicesByCategory } from "../../data/servicesData";
import { getAssetUrl } from "../../lib/assets";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export const Route = createFileRoute("/services/zoho")({
  component: ZohoPage,
});

const ZOHO_BANNERS = [
  "/ZOHO_CRM_Banner.png",
  "/Zoho_HRMS_Banner.png",
];

function ZohoPage() {
  const subServices = getSubServicesByCategory("zoho");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % ZOHO_BANNERS.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <PageHero
        title="Zoho Solutions"
        subtitle="Full-suite Zoho expertise — from single-app deployments to enterprise-wide Zoho One rollouts."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "Zoho" }
        ]}
        image="/capital_goods.jpg"
        icon={
          <div className="h-20 w-auto bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20 shadow-xl flex items-center justify-center">
            <img src={getAssetUrl("/ZOHO_logo_2023.svg_.png")} alt="Zoho" className="h-12 w-auto object-contain drop-shadow-lg" />
          </div>
        }
      />

      <section className="container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Zoho Capabilities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Full-suite Zoho expertise — from single-app deployments to enterprise-wide Zoho One rollouts.</p>
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
                            <img src={getAssetUrl(s.customLogo)} alt={s.title} loading="lazy" decoding="async" className="h-full w-full object-contain" />
                          </div>
                        ) : (
                          <img src={getAssetUrl("/ZOHO_logo_2023.svg_.png")} alt="Zoho" loading="lazy" decoding="async" className="h-6 w-6 object-contain shrink-0 mt-0.5" />
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Deployment Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Rapid time-to-value with our accelerated Zoho implementation framework.</p>
          </div>
        </Reveal>
        <ProcessFlow
          steps={[
            { step: "01", title: "Discover", desc: "Workflow mapping and app selection" },
            { step: "02", title: "Configure", desc: "Customization and integration setup" },
            { step: "03", title: "Train", desc: "User adoption and change management" },
            { step: "04", title: "Optimize", desc: "Continuous improvement and scaling" },
          ]}
        />
      </section>

      <WaveDivider from="dark" to="white" />

      <section className="container mx-auto px-6 max-w-7xl relative z-10 py-24 text-center">
        <Reveal>
          <h2 className="text-3xl font-bold text-foreground mb-6">Ready to Deploy Zoho?</h2>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Talk to Our Zoho Experts <ArrowUpRight className="h-5 w-5" />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
