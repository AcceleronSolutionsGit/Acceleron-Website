import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { PageHero } from "../components/ui/PageHero";
import { Reveal, WaveDivider } from "../components/ui/Animations";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
import { getAssetUrl } from "../lib/assets";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Our Partners — Acceleron Solutions" },
      { name: "description", content: "Discover our trusted ecosystem of partners, including SAP, Zoho, AWS, Microsoft, and more." },
    ],
  }),
  component: PartnersPage,
});

const PARTNERS = [
  { name: "SAP S/4HANA", logo: "/sap_s4hana-transparentbg.png", description: "Empower your business with next-generation ERP capabilities. As a certified SAP partner, we provide comprehensive end-to-end implementation and support for SAP S/4HANA to streamline operations." },
  { name: "RISE with SAP", logo: "/vital-wires-Rise-with-SAP-3.png", description: "Accelerate your transition to the cloud with RISE with SAP. We deliver tailored cloud migration strategies that drive innovation and business transformation with zero disruption." },
  { name: "Zoho Suite", logo: "/ZOHO_logo_2023.svg_.png", description: "Unify your business operations with Zoho's comprehensive suite of applications. As a Zoho Premium Implementation Partner, we customize and deploy CRM, HRMS, and finance tools." },
  { name: "AWS Cloud", logo: "/AWS_Logo.png", description: "Scale your infrastructure reliably with Amazon Web Services. We provide robust cloud computing solutions, secure data management, and highly available architectures." },
  { name: "Microsoft", logo: "/Microsoft_logo.png", description: "Enhance productivity and enterprise collaboration with Microsoft's ecosystem. We integrate Azure, Microsoft 365, and enterprise solutions tailored to your unique workflows." },
  { name: "Trimble", logo: "/TRIMBLE.png", description: "Leverage advanced positioning and telemetry data for heavy industry and construction. Our partnership with Trimble enables seamless IoT integrations and real-time asset tracking." },
];

function PartnersPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <PageHero
        title="Our Trusted Ecosystem"
        subtitle="We partner with industry-leading technology providers and forward-thinking enterprises to deliver transformative solutions."
        breadcrumbs={[{ label: "Partners" }]}
        image={getAssetUrl("https://images.unsplash.com/photo-1557804506-669a67965ba0?q=75&w=1200&auto=format&fit=crop")}
      />

      <section className="section-dark container mx-auto px-6 max-w-7xl relative z-10 py-16 md:py-24">
        <Reveal>
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold">Trusted By</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4">
              Our <span className="text-gradient">Partners</span>
            </h2>
          </div>
        </Reveal>

        <div className="max-w-4xl mx-auto">
          <Reveal>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {PARTNERS.map((item, idx) => (
                <AccordionItem 
                  key={idx} 
                  value={`item-${idx}`} 
                  className="border border-border/50 bg-muted/10 rounded-xl px-6 data-[state=open]:bg-muted/20 transition-colors"
                >
                  <AccordionTrigger className="text-lg md:text-xl font-semibold hover:no-underline py-6">
                    {item.name}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                      <div className="w-48 shrink-0 flex items-center justify-center bg-white rounded-xl p-4 border border-border/50 shadow-sm">
                        <img 
                          src={getAssetUrl(item.logo)} 
                          alt={item.name} 
                          loading="lazy" 
                          decoding="async" 
                          className="max-h-20 w-auto object-contain"
                        />
                      </div>
                      <p className="text-foreground/80 text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      <WaveDivider from="dark" to="white" />
    </main>
  );
}
