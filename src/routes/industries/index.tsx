import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Pickaxe, Factory, Boxes, Truck, Zap, Building2, Activity } from "lucide-react";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { PageHero } from "../../components/ui/PageHero";
import { Link } from "@tanstack/react-router";
import { INDUSTRIES_DATA } from "../../data/industriesData";

export const Route = createFileRoute("/industries/")({
  head: () => ({
    meta: [
      { title: "Industries & Verticals — Acceleron Solutions" },
      { name: "description", content: "Deep operational tech solutions across Mining, Discrete Manufacturing, Capital Goods, Logistics, Healthcare, and Construction." },
    ],
  }),
  component: IndustriesHub,
});

const ICON_MAP: Record<string, any> = {
  mining: Pickaxe,
  "discrete-manufacturing": Factory,
  "capital-goods": Boxes,
  "transportation-services-logistics": Truck,
  healthcare: Activity,
  utilities: Zap,
  "engineering-construction-operations": Building2,
};

function IndustriesHub() {
  const industriesList = Object.values(INDUSTRIES_DATA);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <PageHero
        title="We Build for Heavy Industry & Enterprise Operations"
        subtitle="Our solutions are forged in the reality of mines, manufacturing plants, logistics hubs, and healthcare facilities—where software reliability directly impacts production and safety."
        breadcrumbs={[{ label: "Industries" }]}
        image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=75&w=1200&auto=format&fit=crop"
        ctaText="Discuss Your Industry Needs"
        ctaHref="/contact"
      />

      {/* Industries Grid */}
      <section className="section-dark container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-14 sm:py-20 lg:py-24">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold mb-3">Sectors We Transform</div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground">
              Industry Verticals &amp; <span className="text-gradient">Domain Mastery</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industriesList.map((ind, idx) => {
            const IconComp = ICON_MAP[ind.slug] || Factory;
            return (
              <Reveal key={ind.slug} delay={0.08 * idx}>
                <Link
                  to={`/industries/${ind.slug}` as any}
                  className="block group rounded-3xl overflow-hidden border border-border/50 bg-muted/20 hover:border-brand/40 hover:bg-muted/40 transition-all duration-300 hover:shadow-glow h-full flex flex-col justify-between"
                >
                  <div className="relative h-52 w-full overflow-hidden bg-muted">
                    <img
                      src={ind.image}
                      alt={ind.title}
                      loading="lazy"
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                    <div className="absolute bottom-4 left-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow">
                      <IconComp className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="p-8 pt-4 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-brand transition-colors">
                        {ind.slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ')}
                      </h3>
                      <p className="text-muted-foreground text-xs leading-relaxed mb-6">
                        {ind.overview}
                      </p>
                    </div>
                    <div className="flex items-center text-xs font-bold text-brand mt-auto group-hover:translate-x-1 transition-transform">
                      Explore Vertical Solutions <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>

      <WaveDivider from="dark" to="white" />
    </main>
  );
}
