import { createFileRoute } from "@tanstack/react-router";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { ArrowUpRight, Layers, CheckCircle, Sparkles } from "lucide-react";
import { UIMockup, ProcessFlow, MetricBar } from "../../components/ui/ProductShowcase";
import { PageHero } from "../../components/ui/PageHero";

export const Route = createFileRoute("/products/qms")({
  component: ProductPage,
});

function ProductPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <PageHero
        title="Automated Inspections and Component Tracking for Modern Workshops"
        subtitle="Drive workshop efficiency, maintain regulatory compliance, and eliminate quality non-conformances with an SAP-integrated floor management engine."
        breadcrumbs={[{ label: "Products", href: "/products" }, { label: "QMS" }]}
        image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=75&w=1200&auto=format&fit=crop"
        icon={<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2 shadow-glow"><img src="/qms.png" alt="QMS" className="h-10 w-10 object-contain" /></div>}
      />

      {/* Problem & Solution */}
      <section className="section-dark container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-16">
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border/50 bg-muted/20 p-10 h-full">
              <h2 className="text-2xl font-bold text-foreground mb-4">The Problem</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">Paper-based checklists and siloed spreadsheets result in delayed quality audits, untracked assembly defects, and extended repair cycles that ultimately erode customer trust.</p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="rounded-3xl border border-brand/30 bg-brand/5 p-10 h-full shadow-glow">
              <h2 className="text-2xl font-bold text-brand mb-4">The Solution</h2>
              <p className="text-foreground leading-relaxed text-lg">A unified digital QMS that provides workshop floor control, end-to-end component visibility, and real-time KPI tracking.</p>
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
                {[{"title":"End-to-End Component Tracking","desc":"Follow critical parts through every stage of receiving, inspection, assembly, and dispatch."},{"title":"Smart Floor Dashboard","desc":"Dynamic shop-floor screens display live technician hours, shift management, and part allocations."},{"title":"Role-Based Security & ERP Integration","desc":"Integrates directly into corporate ERPs while keeping floor actions secure."}].map((f, i) => (
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
                {[{"title":"AI Defect Detection","desc":"Identifies structural and surface anomalies automatically from inspection photographs."},{"title":"Smart KPI Forecasting","desc":"Predicts downstream quality bottlenecks by evaluating historical production metrics."},{"title":"Root Cause Recommendation","desc":"Matches current defects to historical repair logs to instantly suggest probable root causes."}].map((f, i) => (
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
            <UIMockup title="Workshop QA Terminal" accentColor="#d946ef">
              <div className="space-y-4">
                <div className="bg-muted/30 border border-border/50 rounded-xl p-4">
                   <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Inspection WO-8842</div>
                   <div className="space-y-3">
                     <div className="flex items-center gap-3 bg-background rounded-lg p-3 border border-border">
                       <CheckCircle className="h-5 w-5 text-emerald-500" />
                       <span className="text-sm">Hydraulic Pressure Test</span>
                     </div>
                     <div className="flex items-center gap-3 bg-background rounded-lg p-3 border border-border">
                       <CheckCircle className="h-5 w-5 text-emerald-500" />
                       <span className="text-sm">Structural Integrity Scan</span>
                     </div>
                     <div className="flex flex-col gap-2 bg-red-500/10 rounded-lg p-3 border border-red-500/30">
                       <div className="flex items-center gap-3">
                         <div className="h-5 w-5 rounded-full border-2 border-red-500 flex items-center justify-center shrink-0">
                           <span className="text-[10px] text-red-500">X</span>
                         </div>
                         <span className="text-sm text-red-500 font-bold">Surface Tolerance Check</span>
                       </div>
                       <div className="ml-8 text-xs text-muted-foreground">Variance of 0.04mm detected. Requires rework.</div>
                     </div>
                   </div>
                </div>
              </div>
            </UIMockup>
          </Reveal>
          <Reveal delay={0.2}>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">How It Works</h2>
              <p className="text-muted-foreground mb-10 text-lg">Digitize paper checklists to enforce rigorous quality standards at every stage of the assembly and repair process.</p>
              <ProcessFlow 
                accentColor="#d946ef"
                steps={[
                  { step: "01", title: "Receive", desc: "Component logged via barcode or RFID scan" },
                  { step: "02", title: "Inspect", desc: "Technician completes guided digital checklist" },
                  { step: "03", title: "Verify", desc: "AI validates photo evidence of completed work" },
                  { step: "04", title: "Dispatch", desc: "Quality certificate generated and sent to ERP" }
                ]}
              />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
