import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Code2, Server, ShieldCheck, Briefcase, BarChart3, Cloud, Database, Blocks, Rocket } from "lucide-react";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { PageHero } from "../../components/ui/PageHero";
import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import { getSubServiceUrlByTitle } from "../../data/servicesData";
import { getAssetUrl } from "../../lib/assets";

export const Route = createFileRoute("/services/")({
  component: ServicesHub,
});

type ServiceCategoryCard = {
  title: string;
  desc: string;
  url: string;
  Logo?: any;
  useLogo?: boolean;
  icon?: any;
  gradient: string;
  subs: string[];
  img?: string;
};

const SERVICES: ServiceCategoryCard[] = [
  {
    title: "SAP",
    desc: "End-to-end SAP consulting — from S/4HANA transformation and RISE with SAP to managed services and cloud migration.",
    url: "/services/sap",
    icon: Database,
    gradient: "from-blue-600 to-indigo-700",
    subs: ["SAP AMS", "SAP S/4HANA implementation", "SAP integration", "RISE with S/4HANA implementation", "SAP Migration to Cloud", "SAP Custom Development"],
    img: "/SAP_Homepage.jpg",
  },
  {
    title: "IT & Custom Solutions",
    desc: "Custom software, AI development, network security, and comprehensive IT infrastructure services.",
    url: "/services/it-custom-solutions",
    icon: Code2,
    gradient: "from-emerald-500 to-teal-600",
    subs: ["IT Infrastructure Services", "Custom Software Application Development", "Custom AI Application Development", "Network Security Implementation", "Security Audits", "IT System Audits"],
  },
  {
    title: "Zoho",
    desc: "Premium Zoho partner deploying CRM, ERP, Analytics, and the full Zoho suite.",
    url: "/services/zoho",
    icon: Blocks,
    gradient: "from-red-500 to-orange-600",
    subs: ["Zoho CRM", "Zoho Books", "Zoho HRMS (People and Payroll)", "Zoho ERP", "Zoho Mail"],
    img: "/ZOHO_LOGO.png",
  },
  {
    title: "ManageEngine",
    desc: "Comprehensive IT management software for all your business needs.",
    url: "/services/manageengine",
    icon: Server,
    gradient: "from-slate-500 to-zinc-600",
    subs: ["ManageEngine-ITSM", "ManageEngine-Op Manager", "ManageEngine-Endpoint Control", "ManageEngine-MDM Plus"],
  },
];

function ServicesHub() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <PageHero
        title="One Technology Partner. Every Layer of Your Stack."
        subtitle="From SAP transformation to cybersecurity, we help enterprise and industrial businesses simplify their technology instead of adding to the pile."
        breadcrumbs={[{ label: "Services" }]}
        image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=75&w=1200&auto=format&fit=crop"
      />

      {/* Services Grid */}
      <section className="container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-8">
          {SERVICES.map((srv, idx) => {
            const IconComp = srv.icon;
            return (
              <Reveal key={srv.title} delay={0.08 * idx}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="rounded-3xl border border-border bg-card p-10 hover:border-brand/30 transition-all hover:shadow-soft group h-full flex flex-col justify-between"
                >
                  <div>
                    <Link to={srv.url as any} className="block cursor-pointer">
                      <div className="mb-8 flex items-center gap-4">
                        <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${srv.gradient} overflow-hidden p-2 shadow-glow group-hover:scale-110 transition-transform`}>
                          {srv.img ? (
                            <img
                              src={getAssetUrl(srv.img)}
                              alt={srv.title}
                              loading="lazy"
                              decoding="async"
                              className={srv.img.endsWith('.png') || srv.img.includes('LOGO') ? "h-full w-full object-contain p-1 bg-white/95 rounded-xl shadow-sm" : "h-full w-full object-cover rounded-xl"}
                            />
                          ) : srv.useLogo && srv.Logo ? (
                            <srv.Logo className="h-8 w-8" />
                          ) : IconComp ? (
                            <IconComp className="h-7 w-7 text-white" />
                          ) : null}
                        </div>
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-brand transition-colors">{srv.title}</h3>
                      </div>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{srv.desc}</p>
                    </Link>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {srv.subs.map((sub) => (
                        <Link
                          key={sub}
                          to={getSubServiceUrlByTitle(srv.url, sub) as any}
                          className="inline-block rounded-full border border-border bg-muted/50 px-3 py-1.5 text-xs text-muted-foreground hover:border-brand hover:bg-brand/10 hover:text-brand transition-all font-medium cursor-pointer"
                        >
                          {sub} →
                        </Link>
                      ))}
                    </div>
                  </div>

                  <Link to={srv.url as any} className="mt-auto flex items-center text-sm font-semibold text-brand pt-4 border-t border-border/40 hover:gap-2 transition-all cursor-pointer block">
                    Explore {srv.title} Hub <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 inline" />
                  </Link>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </section>
    </main>
  );
}
