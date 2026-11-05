import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageHero } from "../components/ui/PageHero";
import { Reveal, WaveDivider } from "../components/ui/Animations";
import { getAssetUrl } from "../lib/assets";
import { ArrowRight, Building2, ShieldCheck, CheckCircle2 } from "lucide-react";
import { ALL_CLIENTS } from "../data/clientsData";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Our Clients — Acceleron Solutions" },
      { name: "description", content: "Discover the global enterprise leaders, mining operators, OEMs, and Fortune 500 corporations that trust Acceleron Solutions for digital transformation." },
    ],
  }),
  component: ClientsPage,
});

function ClientsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <PageHero
        title="Our Clients & Partnerships"
        subtitle="Trusted by leading enterprises, OEMs, and heavy industries across India, APAC, and North America."
        breadcrumbs={[{ label: "Who We Are", href: "/about" }, { label: "Our Clients" }]}
        image={getAssetUrl("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=75&w=1200&auto=format&fit=crop")}
      />

      {/* Clients Directory */}
      <section className="section-dark container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 sm:py-24">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold mb-3">Enterprise Footprint</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Industry Leaders Who <span className="text-gradient">Trust Us</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base mt-4">
              Partnering with global leaders, OEMs, heavy mining operators, and industrial enterprises.
            </p>
          </div>
        </Reveal>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5 sm:gap-4 md:gap-6">
          {ALL_CLIENTS.map((client, idx) => (
            <Reveal key={client.id} delay={Math.min(0.2, (idx % 6) * 0.04)}>
              <motion.div
                whileHover={{ y: -4, scale: 1.04 }}
                className="group relative flex items-center justify-center p-3 sm:p-5 rounded-2xl border border-slate-200/90 dark:border-white/10 bg-white dark:bg-white shadow-soft hover:border-brand/50 hover:shadow-glow transition-all h-24 sm:h-28 md:h-32 text-center"
              >
                <img
                  src={getAssetUrl(client.logo)}
                  alt={client.name}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full max-h-12 sm:max-h-14 md:max-h-16 max-w-[85%] object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      <WaveDivider from="dark" to="white" />

      {/* Why Clients Choose Acceleron */}
      <section className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 sm:py-24">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold mb-3">Value Delivered</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Why Global Enterprises <span className="text-gradient">Partner with Us</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {[
            {
              icon: Building2,
              title: "80-Year Gainwell Heritage",
              desc: "Deep industrial domain mastery in heavy equipment, mining, manufacturing, and supply chains.",
            },
            {
              icon: ShieldCheck,
              title: "Full-Stack Certified Teams",
              desc: "Dedicated centers of excellence across SAP S/4HANA, Zoho Suite, AWS Cloud, and Cyber Security.",
            },
            {
              icon: CheckCircle2,
              title: "Outcome-Driven Delivery",
              desc: "We don't sell hours; we deliver measurable operational velocity, uptime, and ROI.",
            },
          ].map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.1}>
              <div className="rounded-3xl border border-border/60 bg-muted/20 p-6 sm:p-8 hover:border-brand/40 transition-all shadow-soft h-full">
                <div className="h-12 w-12 rounded-2xl bg-brand-gradient flex items-center justify-center text-white shadow-glow mb-6">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div className="mt-16 sm:mt-20 rounded-3xl bg-gradient-to-r from-[#151f42] via-[#212f60] to-[#1a2650] border border-white/10 p-8 sm:p-12 text-white text-center shadow-glow relative overflow-hidden">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-red/15 blur-3xl pointer-events-none" />
            <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-4xl font-bold mb-4 text-white">Ready to accelerate your enterprise?</h3>
              <p className="max-w-2xl mx-auto text-sm sm:text-base text-white/85 mb-8 leading-relaxed">
                Join dozens of global market leaders who rely on Acceleron Solutions for mission-critical digital modernization.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-red-600/40 hover:shadow-red-600/60 hover:scale-105 transition-all w-full sm:w-auto border border-red-400/30"
              >
                Start a Conversation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <WaveDivider from="white" to="dark" />
    </main>
  );
}
