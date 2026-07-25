import { createFileRoute } from "@tanstack/react-router";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { ArrowUpRight, ShieldCheck, CheckCircle, Sparkles } from "lucide-react";
import { UIMockup, ProcessFlow } from "../../components/ui/ProductShowcase";
import { PageHero } from "../../components/ui/PageHero";

export const Route = createFileRoute("/products/suraksha")({
  component: ProductPage,
});

function ProductPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <PageHero
        title="Reducing Incident Response Time by 60%"
        subtitle="A centralized, PWA-based safety management platform built for real-time observation, automated CAPA management, and proactive safety compliance in hazardous mining and industrial environments."
        breadcrumbs={[{ label: "Products", href: "/products" }, { label: "Suraksha" }]}
        image="https://images.unsplash.com/photo-1541888081630-109033333306?q=75&w=1200&auto=format&fit=crop"
        icon={<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2 shadow-glow"><img src="/suraksha.png" alt="Suraksha" className="h-10 w-10 object-contain" /></div>}
      />

      {/* Problem & Solution */}
      <section className="section-dark container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-16">
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border/50 bg-muted/20 p-10 h-full">
              <h2 className="text-2xl font-bold text-foreground mb-4">The Problem</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">Traditional safety reporting relies on manual logging and disjointed follow-ups. Near-misses go undocumented, and compliance tracking for regulatory bodies (like the DGMS) is fragmented and reactive.</p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="rounded-3xl border border-brand/30 bg-brand/5 p-10 h-full shadow-glow">
              <h2 className="text-2xl font-bold text-brand mb-4">The Solution</h2>
              <p className="text-foreground leading-relaxed text-lg">A centralized digital platform that streams real-time incident reporting, automates corrective action (CAPA) tracking, and provides immediate visibility into site-wide risk profiles.</p>
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
                {[{"title":"Real-Time Incident Reporting & SOS","desc":"Instant alerts sent directly to supervisors from the field with image-based evidence capture."},{"title":"Automated Risk Indexing","desc":"Uses a standardized 5x5 matrix for objective prioritization of safety hazards."},{"title":"Geo-Location Tracking","desc":"Real-time tracking and geofencing to protect lone workers and coordinate incident response teams."}].map((f, i) => (
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
                {[{"title":"AI Risk Scoring","desc":"Automatically scores incident severity based on historical and contextual data patterns."},{"title":"Predictive Hazard Detection","desc":"Identifies high-risk zones and potential safety bottlenecks by scanning near-miss trends."},{"title":"NLP Incident Classification","desc":"Automatically categorizes and routes safety reports from free-text descriptions."}].map((f, i) => (
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
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <Reveal>
            <UIMockup title="Suraksha Field App" accentColor="#14b8a6">
              <div className="space-y-4">
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                    <ShieldCheck className="h-4 w-4 text-red-500" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-red-500">Critical Incident Logged</div>
                    <div className="text-xs text-muted-foreground mt-1">Zone B - Heavy Machinery Sector</div>
                    <div className="mt-2 text-[10px] bg-red-500/20 text-red-500 px-2 py-1 rounded w-max font-bold">SEVERITY: HIGH</div>
                  </div>
                </div>
                <div className="bg-muted/30 border border-border/50 rounded-xl p-4 flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                    <ShieldCheck className="h-4 w-4 text-amber-500" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">Near Miss Observation</div>
                    <div className="text-xs text-muted-foreground mt-1">Loading Bay 4 - Unsecured load</div>
                    <div className="mt-2 text-[10px] bg-amber-500/20 text-amber-500 px-2 py-1 rounded w-max font-bold">CAPA ASSIGNED</div>
                  </div>
                </div>
              </div>
            </UIMockup>
          </Reveal>
          <Reveal delay={0.2}>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">How It Works</h2>
              <p className="text-muted-foreground mb-10 text-lg">A closed-loop safety ecosystem that ensures no observation is ignored and every corrective action is tracked to resolution.</p>
              <ProcessFlow 
                accentColor="#14b8a6"
                steps={[
                  { step: "01", title: "Report", desc: "Field worker logs incident via mobile app" },
                  { step: "02", title: "Score", desc: "AI instantly calculates risk severity matrix" },
                  { step: "03", title: "Assign", desc: "CAPA automatically routed to safety officer" },
                  { step: "04", title: "Resolve", desc: "Compliance audit and case closure" }
                ]}
              />
            </div>
          </Reveal>
        </div>
      </section>

      <WaveDivider from="dark" to="white" />
      
      <section className="container mx-auto px-6 max-w-7xl relative z-10 py-24 text-center">
        <Reveal>
          <div className="max-w-3xl mx-auto rounded-3xl border border-teal-500/30 bg-gradient-to-br from-teal-500/20 to-cyan-600/20 p-12 shadow-glow backdrop-blur-xl">
            <h2 className="text-2xl font-bold mb-4 opacity-90 text-teal-500">Proven Impact</h2>
            <p className="text-2xl md:text-4xl font-black leading-tight text-foreground">
              "60% reduction in incident response times and an 85% increase in safety reporting compliance within 90 days of deployment."
            </p>
          </div>
        </Reveal>
      </section>
      
    </main>
  );
}
