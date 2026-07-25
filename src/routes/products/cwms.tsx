import { createFileRoute } from "@tanstack/react-router";
import { Reveal, WaveDivider } from "../../components/ui/Animations";
import { ArrowUpRight, Boxes, CheckCircle, Sparkles } from "lucide-react";
import { UIMockup, ProcessFlow } from "../../components/ui/ProductShowcase";
import { PageHero } from "../../components/ui/PageHero";

export const Route = createFileRoute("/products/cwms")({
  component: ProductPage,
});

function ProductPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <PageHero
        title="Biometric-Driven Workforce Oversight and Allocation"
        subtitle="Automate contractor registration, eliminate compliance risks, and track shift attendance with seamless on-site biometric and facial recognition."
        breadcrumbs={[{ label: "Products", href: "/products" }, { label: "CWMS" }]}
        image="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=75&w=1200&auto=format&fit=crop"
        icon={<div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white p-2 shadow-glow"><img src="/LMS.png" alt="CWMS LMS" className="h-10 w-10 object-contain" /></div>}
      />

      {/* Problem & Solution */}
      <section className="section-dark container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-16">
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border/50 bg-muted/20 p-10 h-full">
              <h2 className="text-2xl font-bold text-foreground mb-4">The Problem</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">Large industrial operations suffer from manual attendance leaks, compliance penalties, inaccurate payroll processing, and inefficient workforce-to-skill matching.</p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="rounded-3xl border border-brand/30 bg-brand/5 p-10 h-full shadow-glow">
              <h2 className="text-2xl font-bold text-brand mb-4">The Solution</h2>
              <p className="text-foreground leading-relaxed text-lg">An enterprise contractor management system that validates attendance in real time and automatically enforces budgetary constraints.</p>
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
                {[{"title":"Biometric & Facial Integration","desc":"Real-time, localized site attendance checking with manual override fallbacks."},{"title":"Requisition & Allocation Validation","desc":"Hard rules dynamically prevent contractor over-allocation, ensuring strict adherence to site budgets."},{"title":"Multi-Level Approval Engine","desc":"Easily configure automated requisition routing across HOD, HR, and external agency heads."}].map((f, i) => (
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
                {[{"title":"AI Skill Matching","desc":"Instantly recommends the most qualified contractors for incoming site tasks based on historical performance."},{"title":"Attendance Anomaly Detection","desc":"Automatically flags suspicious GPS patterns or mismatching biometric inputs."},{"title":"Predictive Compliance Alerts","desc":"Dynamically monitors expiration dates on contractor documentation to alert managers of impending non-compliance risks."}].map((f, i) => (
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
            <UIMockup title="Gate Security Access" accentColor="#06b6d4">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4 flex flex-col items-center justify-center text-center">
                     <div className="h-16 w-16 rounded-full bg-emerald-500/20 mb-3 flex items-center justify-center border-2 border-emerald-500">
                       <CheckCircle className="h-8 w-8 text-emerald-500" />
                     </div>
                     <div className="text-sm font-bold text-emerald-500">ACCESS GRANTED</div>
                     <div className="text-xs text-muted-foreground mt-1">ID: C-88492</div>
                  </div>
                  <div className="bg-muted/30 border border-border/50 rounded-xl p-4">
                     <div className="text-xs text-muted-foreground mb-1">Contractor Name</div>
                     <div className="text-sm font-bold text-foreground mb-3">Rajesh Kumar</div>
                     <div className="text-xs text-muted-foreground mb-1">Assigned Zone</div>
                     <div className="text-sm font-bold text-foreground mb-3">Blast Area 4</div>
                     <div className="text-xs text-muted-foreground mb-1">Safety Clearance</div>
                     <div className="text-xs font-bold text-emerald-500">Valid (Exp. 12/2026)</div>
                  </div>
                </div>
              </div>
            </UIMockup>
          </Reveal>
          <Reveal delay={0.2}>
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">How It Works</h2>
              <p className="text-muted-foreground mb-10 text-lg">A unified security and attendance pipeline that physically restricts site access to non-compliant or unassigned personnel.</p>
              <ProcessFlow 
                accentColor="#06b6d4"
                steps={[
                  { step: "01", title: "Enroll", desc: "Contractor biometric data captured during induction" },
                  { step: "02", title: "Validate", desc: "System cross-checks valid permits and training certs" },
                  { step: "03", title: "Clock-In", desc: "Gate access granted via facial or fingerprint scan" },
                  { step: "04", title: "Payroll", desc: "Verified shift hours pushed directly to ERP/Billing" }
                ]}
              />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
