import { createFileRoute } from "@tanstack/react-router";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { ArrowUpRight, ShoppingBag, CheckCircle, Sparkles } from "lucide-react";
import { UIMockup, ProcessFlow } from "../../components/ui/ProductShowcase";
import { PageHero } from "../../components/ui/PageHero";

export const Route = createFileRoute("/products/supplier-portal")({
  component: ProductPage,
});

function ProductPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <PageHero
        title="Streamlined Vendor Onboarding and SAP-Integrated Procurement"
        subtitle="Eliminate manual processing delays and optimize supply chains by automating POs, invoices, ASNs, and compliance tracking."
        breadcrumbs={[{ label: "Products", href: "/products" }, { label: "Supplier Portal" }]}
        image="https://images.unsplash.com/photo-1586528116311-ad8ed7c15f5f?q=75&w=1200&auto=format&fit=crop"
        icon={<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2 shadow-glow"><img src="/vanijya.png" alt="Vanijya Supplier Portal" className="h-10 w-10 object-contain" /></div>}
      />

      {/* Problem & Solution */}
      <section className="section-dark container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-16">
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border/50 bg-muted/20 p-10 h-full">
              <h2 className="text-2xl font-bold text-foreground mb-4">The Problem</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">Slow vendor onboarding, manual document verification, mismatched invoices, and poor visibility into shipping schedules strain supplier relationships and disrupt production.</p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="rounded-3xl border border-brand/30 bg-brand/5 p-10 h-full shadow-glow">
              <h2 className="text-2xl font-bold text-brand mb-4">The Solution</h2>
              <p className="text-foreground leading-relaxed text-lg">A unified portal that connects suppliers directly to your SAP core, introducing automated workflows from registration to payment.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <WaveDivider from="dark" to="white" />

      {/* Key Features & AI */}
      <section className="container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-16">
          <Reveal>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">Key Features</h2>
              <div className="space-y-6">
                {[{"title":"Bidirectional SAP Sync","desc":"Instantly exchange purchase order and invoicing data between the portal and your corporate ERP."},{"title":"Advanced Shipping Notice (ASN) & Logistics","desc":"Tracks supplier shipment schedules and transit details directly."},{"title":"Secure Invoice Processing","desc":"Complete digital invoice routing, matching, and payment status updates."}].map((f, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle className="h-6 w-6 text-brand shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1">{f.title}</h4>
                      <p className="text-muted-foreground">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                <Sparkles className="h-8 w-8 text-amber-500" />
                AI Intelligence Features
              </h2>
              <div className="space-y-6">
                {[{"title":"AI Invoice Validation","desc":"Automatically reconciles and matches incoming supplier invoices against corresponding POs and ASNs."},{"title":"Supplier Risk Scoring","desc":"Evaluates supplier risk profiles continuously by analyzing delivery delays, quality issues, and compliance gaps."},{"title":"Smart Onboarding Assistant","desc":"Validates corporate documentation, tax details, and compliance certifications automatically during vendor setup."}].map((f, i) => (
                  <div key={i} className="flex gap-4 p-6 rounded-2xl border border-amber-500/20 bg-amber-500/5">
                    <Sparkles className="h-6 w-6 text-amber-500 shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1">{f.title}</h4>
                      <p className="text-muted-foreground">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <WaveDivider from="white" to="dark" flip />

      {/* UI Mockup & Flow */}
      <section className="section-dark container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <UIMockup title="Vendor PO Management" accentColor="#8b5cf6">
              <div className="space-y-4">
                <div className="bg-muted/30 border border-border/50 rounded-xl overflow-hidden">
                   <div className="bg-background px-4 py-3 border-b border-border flex justify-between items-center">
                     <span className="text-xs font-bold text-foreground">PO-2026-9943</span>
                     <span className="text-[10px] bg-emerald-500/20 text-emerald-500 px-2 py-1 rounded font-bold uppercase">Approved</span>
                   </div>
                   <div className="p-4 space-y-3">
                     <div className="flex justify-between text-sm">
                       <span className="text-muted-foreground">Item:</span>
                       <span className="font-medium text-foreground">Hydraulic Cylinder (Heavy)</span>
                     </div>
                     <div className="flex justify-between text-sm">
                       <span className="text-muted-foreground">Qty:</span>
                       <span className="font-medium text-foreground">140 Units</span>
                     </div>
                     <div className="flex justify-between text-sm">
                       <span className="text-muted-foreground">Delivery Date:</span>
                       <span className="font-medium text-amber-500">Oct 14, 2026</span>
                     </div>
                     <div className="pt-3 border-t border-border">
                       <div className="w-full h-8 bg-brand-gradient rounded-lg flex items-center justify-center text-xs font-bold text-white cursor-pointer shadow-glow">
                         Generate ASN (Advanced Shipping Notice)
                       </div>
                     </div>
                   </div>
                </div>
              </div>
            </UIMockup>
          </Reveal>
          <Reveal delay={0.2}>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">How It Works</h2>
              <p className="text-muted-foreground mb-10 text-lg">Remove the email ping-pong. Suppliers interact with a unified digital portal that talks directly to your SAP backend.</p>
              <ProcessFlow 
                accentColor="#8b5cf6"
                steps={[
                  { step: "01", title: "PO Issue", desc: "Purchase order synced automatically from SAP" },
                  { step: "02", title: "Acknowledge", desc: "Supplier confirms quantity and delivery date" },
                  { step: "03", title: "Dispatch", desc: "Supplier generates ASN and ships materials" },
                  { step: "04", title: "Invoice", desc: "Auto-3-way match triggers payment processing" }
                ]}
              />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
