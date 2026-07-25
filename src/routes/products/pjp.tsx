import { createFileRoute } from "@tanstack/react-router";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { ArrowUpRight, TrendingUp, CheckCircle, Sparkles } from "lucide-react";
import { UIMockup, ProcessFlow } from "../../components/ui/ProductShowcase";
import { PageHero } from "../../components/ui/PageHero";

export const Route = createFileRoute("/products/pjp")({
  component: ProductPage,
});

function ProductPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <PageHero
        title="Field Force Route Optimization and Fraud Prevention"
        subtitle="Plan optimized visit routes, monitor field sales activities with geo-fenced verify check-ins, and secure your marketing budgets."
        breadcrumbs={[{ label: "Products", href: "/products" }, { label: "PJP" }]}
        image="https://images.unsplash.com/photo-1548345680-f5475ea90f83?q=75&w=1200&auto=format&fit=crop"
        icon={<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2 shadow-glow"><img src="/IFSM.png" alt="PJP IFSM" className="h-10 w-10 object-contain" /></div>}
      />

      {/* Problem & Solution */}
      <section className="section-dark container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-16">
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border/50 bg-muted/20 p-10 h-full">
              <h2 className="text-2xl font-bold text-foreground mb-4">The Problem</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">Sales reps lose hours planning travel schedules, while managers suffer from manual mileage reporting fraud, poor dealer coverage, and a lack of real-time market visibility.</p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="rounded-3xl border border-brand/30 bg-brand/5 p-10 h-full shadow-glow">
              <h2 className="text-2xl font-bold text-brand mb-4">The Solution</h2>
              <p className="text-foreground leading-relaxed text-lg">A centralized field tracking app that automatically maps efficient routes and verifies dealer visits.</p>
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
                {[{"title":"Verify Visit Check-Ins","desc":"GPS tracking combined with strict geo-fenced checks prevents fake visit reporting."},{"title":"Dynamic Exception Handling","desc":"On-ground agents can instantly reschedule visits and request real-time approvals from managers."},{"title":"Performance Dashboards","desc":"Gives managers immediate analytical visibility into coverage, target achievements, and rep productivity."}].map((f, i) => (
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
                {[{"title":"AI-Powered Smart PJP Creation","desc":"Automatically structures weekly visit calendars by cross-referencing dealer values and sales targets."},{"title":"AI Route Optimization","desc":"Recommends the absolute fastest route choices based on active traffic patterns, priorities, and schedules."},{"title":"AI Expense & Fraud Control","desc":"Cross-references actual GPS distance covered with logged expense claims to flag anomalies automatically."}].map((f, i) => (
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
            <UIMockup title="Field Agent Route App" accentColor="#6366f1">
              <div className="space-y-4">
                <div className="bg-muted/30 border border-border/50 rounded-xl p-4">
                   <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Today's Itinerary</div>
                   <div className="space-y-4 relative before:absolute before:inset-y-0 before:left-3.5 before:w-0.5 before:bg-border">
                     <div className="relative pl-10">
                       <div className="absolute left-1 top-1 h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center border-2 border-background z-10">
                         <CheckCircle className="h-3 w-3 text-white" />
                       </div>
                       <div className="bg-background rounded-lg p-3 border border-border text-sm">
                         <div className="font-bold text-foreground">Raj Hardware Stores</div>
                         <div className="text-xs text-muted-foreground">Visited: 09:15 AM (Geo-verified)</div>
                       </div>
                     </div>
                     <div className="relative pl-10">
                       <div className="absolute left-1 top-1 h-5 w-5 rounded-full bg-brand flex items-center justify-center border-2 border-background z-10 shadow-glow">
                         <div className="h-2 w-2 rounded-full bg-white animate-pulse" />
                       </div>
                       <div className="bg-brand/10 rounded-lg p-3 border border-brand/30 text-sm shadow-soft">
                         <div className="font-bold text-brand">Pioneer Construction</div>
                         <div className="text-xs text-muted-foreground mb-2">ETA: 11:30 AM (2.4 km away)</div>
                         <div className="w-full py-1.5 bg-brand text-white text-xs text-center rounded font-bold cursor-pointer">Start Journey</div>
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
              <p className="text-muted-foreground mb-10 text-lg">Intelligent planning combined with strict geo-fenced enforcement ensures field reps maximize their time selling instead of driving.</p>
              <ProcessFlow 
                accentColor="#6366f1"
                steps={[
                  { step: "01", title: "Plan", desc: "AI generates optimal daily visit schedule based on targets" },
                  { step: "02", title: "Navigate", desc: "Agent follows fastest route to designated dealer" },
                  { step: "03", title: "Check-In", desc: "Strict geo-fence validates physical agent presence" },
                  { step: "04", title: "Report", desc: "Visit outcome and distance logged automatically" }
                ]}
              />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
