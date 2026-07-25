import { createFileRoute } from "@tanstack/react-router";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { ArrowUpRight, Wrench, CheckCircle, Sparkles } from "lucide-react";
import { UIMockup, ProcessFlow, MetricBar } from "../../components/ui/ProductShowcase";
import { PageHero } from "../../components/ui/PageHero";

export const Route = createFileRoute("/products/tyre-health")({
  component: ProductPage,
});

function ProductPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <PageHero
        title="Optimizing Fleet Run-Times and Slashing Premature Wear"
        subtitle="Complete tyre lifecycle tracking from purchase to deployment, designed to eliminate unexpected breakdowns and reduce operational fleet costs."
        breadcrumbs={[{ label: "Products", href: "/products" }, { label: "Tyre Health" }]}
        image="https://images.unsplash.com/photo-1610668961726-538411985cb9?q=75&w=1200&auto=format&fit=crop"
        icon={<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2 shadow-glow"><img src="/woms.png" alt="Tyre Health WOMS" className="h-10 w-10 object-contain" /></div>}
      />

      {/* Problem & Solution */}
      <section className="section-dark container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-16">
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border/50 bg-muted/20 p-10 h-full">
              <h2 className="text-2xl font-bold text-foreground mb-4">The Problem</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">Tyres represent one of the highest operating expenses for heavy machinery. Without structured tracking of Service Unit Hours (SMU), rotation history, and repair status, premature tyre failure and unscheduled vehicle downtime run rampantly.</p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="rounded-3xl border border-brand/30 bg-brand/5 p-10 h-full shadow-glow">
              <h2 className="text-2xl font-bold text-brand mb-4">The Solution</h2>
              <p className="text-foreground leading-relaxed text-lg">An end-to-end visual inventory and tracking engine that logs the precise status of every tyre across its journey, signaling maintenance actions before failures occur.</p>
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
                {[{"title":"Comprehensive Tyre Log History","desc":"Granular SMU and repair history logged continuously from deployment to scrap."},{"title":"Visual Equipment Dashboard","desc":"Graphical representations of machinery with interactive tyre position visualization."},{"title":"Inventory & Master Data Management","desc":"Secure, role-based site configurations and complete technical specifications tracked in a centralized model repository."}].map((f, i) => (
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
                {[{"title":"Predictive Wear Analytics","desc":"Forecasts remaining tyre life using historical SMU, terrain, temperature, and load indicators."},{"title":"Anomaly Detection","desc":"Flag abnormal pressure, temperature, or structural behavior in real time."},{"title":"AI Replacement Scheduling","desc":"Recommends optimal rotation and replacement cycles to maximize tyre utility."}].map((f, i) => (
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
            <UIMockup title="Fleet Asset Dashboard" accentColor="#3b82f6">
              <div className="space-y-6">
                <div className="bg-muted/30 border border-border/50 rounded-xl p-4">
                   <div className="text-sm font-bold text-foreground mb-4">Haul Truck HT-402 (CAT 797F)</div>
                   <div className="grid grid-cols-2 gap-4">
                     <div className="bg-background rounded-lg p-3 text-center border border-border">
                       <div className="text-[10px] text-muted-foreground uppercase mb-1">Front Left</div>
                       <div className="text-lg font-bold text-emerald-500">84%</div>
                     </div>
                     <div className="bg-background rounded-lg p-3 text-center border border-border">
                       <div className="text-[10px] text-muted-foreground uppercase mb-1">Front Right</div>
                       <div className="text-lg font-bold text-emerald-500">82%</div>
                     </div>
                     <div className="bg-background rounded-lg p-3 text-center border border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                       <div className="text-[10px] text-red-500 font-bold uppercase mb-1">Rear Left (Inner)</div>
                       <div className="text-lg font-bold text-red-500">12%</div>
                       <div className="text-[8px] text-red-500 mt-1 uppercase">Rotate Immed.</div>
                     </div>
                     <div className="bg-background rounded-lg p-3 text-center border border-border">
                       <div className="text-[10px] text-muted-foreground uppercase mb-1">Rear Right</div>
                       <div className="text-lg font-bold text-amber-500">45%</div>
                     </div>
                   </div>
                </div>
              </div>
            </UIMockup>
          </Reveal>
          <Reveal delay={0.2}>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">How It Works</h2>
              <p className="text-muted-foreground mb-10 text-lg">A systematic approach to extending tyre life through continuous data logging and predictive maintenance algorithms.</p>
              <ProcessFlow 
                accentColor="#3b82f6"
                steps={[
                  { step: "01", title: "Mount", desc: "Tyre scanned and assigned to specific axle position" },
                  { step: "02", title: "Track", desc: "SMU hours and operating conditions logged daily" },
                  { step: "03", title: "Analyze", desc: "AI forecasts wear rate and optimal rotation time" },
                  { step: "04", title: "Rotate", desc: "Work order generated for preventative maintenance" }
                ]}
              />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
