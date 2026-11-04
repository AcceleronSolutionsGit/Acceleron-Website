import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ShoppingBag, ShieldCheck, Wrench, Boxes, TrendingUp, Layers } from "lucide-react";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { PageHero } from "../../components/ui/PageHero";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/products/")({
  component: ProductsHub,
});

function ProductsHub() {
  const PRODUCTS = [
    {
      name: "Suraksha",
      desc: "Enterprise Safety Management",
      url: "/products/suraksha",
      icon: ShieldCheck,
      gradient: "from-teal-500 to-cyan-600"
    },
    {
      name: "Tyre Health Management",
      desc: "Fleet Lifecycle Tracking",
      url: "/products/tyre-health",
      icon: Wrench,
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      name: "QMS",
      desc: "Quality Management System",
      url: "/products/qms",
      icon: Layers,
      gradient: "from-fuchsia-500 to-violet-600"
    },
    {
      name: "CWMS",
      desc: "Contractor Workforce Management",
      url: "/products/cwms",
      icon: Boxes,
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      name: "Supplier Portal",
      desc: "Vendor Onboarding & SAP Integration",
      url: "/products/supplier-portal",
      icon: ShoppingBag,
      gradient: "from-violet-500 to-purple-600"
    },
    {
      name: "PJP",
      desc: "Pre Journey Plan & Field Tracking",
      url: "/products/pjp",
      icon: TrendingUp,
      gradient: "from-indigo-500 to-blue-600"
    }
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <PageHero
        title="Products We Built Because We Needed Them Too"
        subtitle="Off-the-shelf tools were either too rigid for mining and manufacturing, or too broad to solve the specific problem in front of us. So we built the solutions ourselves, refined them in the field, and made them enterprise-ready."
        breadcrumbs={[{ label: "Products" }]}
        image="https://images.unsplash.com/photo-1504917595217-d4bffc64684d?q=75&w=1200&auto=format&fit=crop"
        ctaText="Request a Demo"
      />

      {/* Products Grid */}
      <section className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-14 sm:py-20 lg:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((prod, idx) => (
            <Reveal key={prod.name} delay={0.1 * idx}>
              <Link to={prod.url as any} className="block group rounded-3xl border border-border/50 bg-background/50 p-6 sm:p-8 hover:border-brand/30 transition-all hover:shadow-soft hover:-translate-y-1 backdrop-blur-xl h-full flex flex-col">
                <div className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${prod.gradient} text-white shadow-glow transition-transform group-hover:scale-110`}>
                  <prod.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-brand transition-colors">{prod.name}</h3>
                <p className="text-muted-foreground mb-8 flex-1">
                  {prod.desc}
                </p>
                <div className="flex items-center text-sm font-semibold text-brand mt-auto">
                  Explore Product <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
