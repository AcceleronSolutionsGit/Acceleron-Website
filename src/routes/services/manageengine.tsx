import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, MonitorSmartphone } from "lucide-react";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { PageHero } from "../../components/ui/PageHero";
import { ProcessFlow } from "../../components/ui/ProductShowcase";
import { Link } from "@tanstack/react-router";
import { getSubServicesByCategory } from "../../data/servicesData";
import { getAssetUrl } from "../../lib/assets";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export const Route = createFileRoute("/services/manageengine")({
  component: ManageEnginePage,
});

const MANAGEENGINE_BANNERS = [
  "/Manage_Engine_Banner.png",
];

function ManageEnginePage() {
  const subServices = getSubServicesByCategory("manageengine");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (MANAGEENGINE_BANNERS.length <= 1) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % MANAGEENGINE_BANNERS.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <PageHero
        title="ManageEngine Solutions"
        subtitle="Optimize your IT operations with ManageEngine's powerful suite."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "ManageEngine" }
        ]}
        image="/capital_goods.jpg"
      />

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
