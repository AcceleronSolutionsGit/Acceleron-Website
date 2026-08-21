import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Code2 } from "lucide-react";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { PageHero } from "../../components/ui/PageHero";
import { Link } from "@tanstack/react-router";
import { getSubServicesByCategory } from "../../data/servicesData";
import { getAssetUrl } from "../../lib/assets";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export const Route = createFileRoute("/services/it-custom-solutions")({
  component: ITCustomSolutionsPage,
});

const IT_BANNERS = [
  "/CWMS_Banner.png",
  "/IFSM_Banner.png",
  "/AMMT_Banner.png",
];

function ITCustomSolutionsPage() {
  const subServices = getSubServicesByCategory("it-custom-solutions");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (IT_BANNERS.length <= 1) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % IT_BANNERS.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <PageHero
        title="IT & Custom Solutions"
        subtitle="From bespoke software to secure infrastructure, we deliver solutions tailored to your unique requirements."
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: "IT & Custom Solutions" }
        ]}
        image="/capital_goods.jpg"
        icon={
          <div className="h-20 w-auto bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20 shadow-xl flex items-center justify-center">
            <img src={getAssetUrl("/Acceleron_Short_Logo.png")} alt="Acceleron Solutions" className="h-12 w-auto object-contain drop-shadow-lg" />
          </div>
        }
      />

      <section className="container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our IT & Custom Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">From bespoke software to secure infrastructure, we deliver solutions tailored to your unique requirements.</p>
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
                        <Code2 className="h-6 w-6 text-brand shrink-0 mt-0.5" />
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
          <h2 className="text-3xl font-bold text-foreground mb-6">Build Your Custom Solution</h2>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Consult with our Architects <ArrowUpRight className="h-5 w-5" />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
