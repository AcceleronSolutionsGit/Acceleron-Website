import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageHero } from "../components/ui/PageHero";
import { Reveal, WaveDivider } from "../components/ui/Animations";
import { getAssetUrl } from "../lib/assets";
import { ArrowRight, Building2, ShieldCheck, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Our Clients — Acceleron Solutions" },
      { name: "description", content: "Discover the global enterprise leaders, mining operators, OEMs, and Fortune 500 corporations that trust Acceleron Solutions for digital transformation." },
    ],
  }),
  component: ClientsPage,
});

interface ClientItem {
  id: number;
  name: string;
  logo: string;
  category: "Mining & Heavy Equipment" | "Manufacturing & Engineering" | "Technology & Infrastructure" | "Consumer & Services";
  description: string;
}

const ALL_CLIENTS: ClientItem[] = [
  { id: 1, name: "Enterprise Partner", logo: "/client (1).png", category: "Mining & Heavy Equipment", description: "SAP S/4HANA core modernisation and IoT telemetry architecture." },
  { id: 2, name: "Industrial Solutions", logo: "/client (2).png", category: "Manufacturing & Engineering", description: "Automated shop floor scheduling and real-time OEE analytics." },
  { id: 3, name: "Global Engineering", logo: "/client (3).png", category: "Manufacturing & Engineering", description: "Full-stack Zoho enterprise workflow automation." },
  { id: 4, name: "Mining Operator", logo: "/client (4).png", category: "Mining & Heavy Equipment", description: "Pit-to-port asset management and Suraksha field safety deployment." },
  { id: 5, name: "Infrastructure Tech", logo: "/client (5).png", category: "Technology & Infrastructure", description: "Multi-cloud migration, AWS data lake, and cyber defense SOC." },
  { id: 6, name: "Heavy Machinery OEM", logo: "/client (6).png", category: "Mining & Heavy Equipment", description: "Enterprise telemetry, warranty management, and parts catalog." },
  { id: 7, name: "Precision Manufacturing", logo: "/client (7).png", category: "Manufacturing & Engineering", description: "QMS implementation and zero-defect quality gate tracking." },
  { id: 8, name: "Smart Logistics", logo: "/client (8).png", category: "Consumer & Services", description: "Route optimization, tyre lifecycle management, and field PJP." },
  { id: 9, name: "Energy & Utilities", logo: "/client (9).png", category: "Technology & Infrastructure", description: "Grid IS-U integration and zero-trust OT cybersecurity architecture." },
  { id: 10, name: "Commercial Systems", logo: "/client (10).png", category: "Consumer & Services", description: "Supplier Portal for 2.4M active inventory SKUs." },
  { id: 11, name: "Capital Goods Group", logo: "/client (11).png", category: "Manufacturing & Engineering", description: "Engineer-to-Order SAP project system transformation." },
  { id: 12, name: "Industrial Automation", logo: "/client (12).png", category: "Technology & Infrastructure", description: "Real-time edge IoT gateways and predictive maintenance." },
  { id: 13, name: "Mining Logistics", logo: "/client (13).png", category: "Mining & Heavy Equipment", description: "Contractor workforce management system (CWMS) rollout." },
  { id: 14, name: "Global Heavy Equipment", logo: "/client (14).png", category: "Mining & Heavy Equipment", description: "Digital parts logistics and AI warranty triage." },
  { id: 15, name: "Advanced Engineering", logo: "/client (15).png", category: "Manufacturing & Engineering", description: "Unified data warehouse on Snowflake with executive Power BI." },
  { id: 16, name: "Infrastructure Services", logo: "/client (16).png", category: "Technology & Infrastructure", description: "Hybrid cloud orchestration and 24/7 AMS infrastructure." },
  { id: 17, name: "Industrial Operations", logo: "/client (17).png", category: "Manufacturing & Engineering", description: "Shop-floor job card and technician dispatch automation." },
  { id: 18, name: "Resource Corporation", logo: "/client (18).png", category: "Mining & Heavy Equipment", description: "Geofenced safety compliance and PPE detection." },
  { id: 19, name: "Enterprise Systems", logo: "/client (19).png", category: "Technology & Infrastructure", description: "Custom Node.js & React enterprise digital platform." },
  { id: 20, name: "Commercial Operations", logo: "/client (20).png", category: "Consumer & Services", description: "Zoho CRM, HRMS, and Finance end-to-end integration." },
  { id: 21, name: "Trimble", logo: "/TRIMBLE.png", category: "Technology & Infrastructure", description: "Advanced positioning and telemetry data integration for heavy industry." },
  { id: 22, name: "Tulip Compression", logo: "/TulipCompression.png", category: "Manufacturing & Engineering", description: "Industrial compression technology management and ERP support." },
  { id: 23, name: "Sitech", logo: "/SITECH.png", category: "Technology & Infrastructure", description: "Construction technology systems and connected site solutions." },
  { id: 24, name: "SEM", logo: "/SEM.png", category: "Mining & Heavy Equipment", description: "Heavy earthmoving equipment support and dealer management platform." },
  { id: 25, name: "RPM Global", logo: "/rpmglobal.png", category: "Mining & Heavy Equipment", description: "Mining software solutions and asset management integration." },
  { id: 26, name: "Ontrak", logo: "/ontrak.png", category: "Technology & Infrastructure", description: "Fleet tracking and mobile telematics systems." },
  { id: 27, name: "Lintec & Linnhoff", logo: "/lintec&linhoff.png", category: "Manufacturing & Engineering", description: "Asphalt & concrete batching plant software integration." },
  { id: 28, name: "Paus", logo: "/PAUS.png", category: "Mining & Heavy Equipment", description: "Underground mining vehicles and specialized engineering systems." },
  { id: 29, name: "TIPL CAT", logo: "/TIPL.jpg", category: "Mining & Heavy Equipment", description: "Cat dealership ERP modernization and equipment lifecycle services." },
  { id: 30, name: "TIL Tractors India", logo: "/TractorsIndia.jpg", category: "Manufacturing & Engineering", description: "Material handling solutions and custom engineering systems." },
  { id: 31, name: "Gainwell CAT", logo: "/GainwellCAT.jpg", category: "Mining & Heavy Equipment", description: "Heavy equipment operations, field service, and digital parts portal." },
  { id: 32, name: "Gainwell Engineering", logo: "/GainwellEngineering.jpg", category: "Manufacturing & Engineering", description: "Global manufacturing and underground mining equipment R&D systems." },
  { id: 33, name: "PCM", logo: "/PCM.png", category: "Technology & Infrastructure", description: "Power and control system analytics." },
  { id: 34, name: "Livpure", logo: "/Livpure_LOGO_Purple_2048x2048_8465dc4a-1c7e-472e-ab6c-b78e8af8446f.png", category: "Consumer & Services", description: "Customer experience, service management, and IoT water systems." },
  { id: 35, name: "Equipcare", logo: "/equipcare.png", category: "Technology & Infrastructure", description: "Connected fleet diagnostics and predictive health platform." },
  { id: 36, name: "Ambey Mining", logo: "/Ampl.png", category: "Mining & Heavy Equipment", description: "Opencast mining operations and fleet dispatch intelligence." },
];

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
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {ALL_CLIENTS.map((client, idx) => (
            <Reveal key={client.id} delay={Math.min(0.2, (idx % 6) * 0.04)}>
              <motion.div
                whileHover={{ y: -4, scale: 1.04 }}
                className="group relative flex items-center justify-center p-3 sm:p-5 rounded-2xl border border-border/60 bg-white/95 dark:bg-muted/20 backdrop-blur-md hover:border-brand/50 hover:shadow-glow transition-all h-32 sm:h-36 md:h-40 text-center"
              >
                <img
                  src={getAssetUrl(client.logo)}
                  alt={client.name}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full max-h-20 sm:max-h-24 md:max-h-28 max-w-[90%] object-contain filter transition-transform duration-300 group-hover:scale-110"
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
