import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Building2, Globe, Phone } from "lucide-react";
import { Reveal, WaveDivider } from "../components/ui/Animations";
import { PageHero } from "../components/ui/PageHero";
import { OFFICIAL_HQ } from "../constants/company";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Acceleron Solutions" },
      { name: "description", content: "Get in touch with Acceleron Solutions headquarters in Kolkata, India or global offices in USA, Singapore, Australia, and Delhi NCR." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <PageHero
        title="Let's Build The Next Chapter Together"
        subtitle="Ready to transform your enterprise operations? Connect directly with our SAP, Salesforce, and custom software practice leads."
        breadcrumbs={[{ label: "Contact" }]}
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=75&w=1200&auto=format&fit=crop"
        ctaText="Send us a message"
        ctaHref="#form"
      />

      <section id="form" className="section-dark container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Contact Form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-border/50 bg-background/50 p-8 sm:p-10 backdrop-blur-xl h-full shadow-glow">
                <h2 className="text-2xl font-bold text-foreground mb-2">Send us a message</h2>
                <p className="text-sm text-muted-foreground mb-8">Fill out the form below and our strategic solutions team will reach out within 24 hours.</p>
                
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Your Name</label>
                      <input type="text" placeholder="John Doe" className="w-full rounded-xl border border-border bg-background p-3.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand/50" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Work Email</label>
                      <input type="email" placeholder="john@company.com" className="w-full rounded-xl border border-border bg-background p-3.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand/50" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Phone Number</label>
                      <input type="tel" placeholder="+91 98765 43210" className="w-full rounded-xl border border-border bg-background p-3.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand/50" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Area of Interest</label>
                      <select className="w-full rounded-xl border border-border bg-background p-3.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand/50">
                        <option>SAP S/4HANA & RISE</option>
                        <option>Salesforce Cloud</option>
                        <option>Applied AI & Analytics</option>
                        <option>Products (Suraksha / Tyre Health)</option>
                        <option>Cybersecurity & Infra</option>
                        <option>Other Enquiry</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Project Details / Message</label>
                    <textarea rows={4} placeholder="Tell us about your objectives and timeline..." className="w-full rounded-xl border border-border bg-background p-3.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand/50" />
                  </div>
                  <button type="submit" className="w-full rounded-xl bg-brand-gradient py-4 text-white font-bold text-sm shadow-glow hover:scale-[1.01] transition-transform">
                    Send Message
                  </button>
                </form>
              </div>
            </Reveal>
          </div>

          {/* Headquarters & Direct Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-border/60 bg-muted/20 p-8 backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="h-6 w-6 text-brand" />
                  <span className="text-xs uppercase tracking-[0.3em] font-bold text-brand-red">Headquarters</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{OFFICIAL_HQ.company}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {OFFICIAL_HQ.address}
                </p>

                <div className="space-y-4 pt-6 border-t border-border/50 text-sm">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-brand shrink-0" />
                    <div>
                      <div className="text-xs text-muted-foreground">Phone Numbers</div>
                      <div className="flex flex-wrap items-center gap-x-2 font-semibold text-foreground">
                        <a href="tel:03335346200" className="hover:text-brand transition-colors">033-35346200</a>
                        <span className="text-muted-foreground">/</span>
                        <a href="tel:03335346222" className="hover:text-brand transition-colors">033-35346222</a>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-brand shrink-0" />
                    <div>
                      <div className="text-xs text-muted-foreground">General Enquiries</div>
                      <a href={`mailto:${OFFICIAL_HQ.email}`} className="font-semibold text-foreground hover:text-brand transition-colors">
                        {OFFICIAL_HQ.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="rounded-3xl border border-border/60 bg-muted/20 p-8 backdrop-blur-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="h-6 w-6 text-brand" />
                  <span className="text-xs uppercase tracking-[0.3em] font-bold text-brand-red">Global Network</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  Operating delivery hubs and offices across Kolkata, Delhi NCR, Singapore, West Virginia (USA), and NSW (Australia).
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <WaveDivider from="dark" to="white" />
    </main>
  );
}
