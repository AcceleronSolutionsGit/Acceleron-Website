import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ShieldCheck, Zap, Heart, Leaf, MapPin, ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "../ui/Animations";
import { useEffect, useState, lazy, Suspense } from "react";
import { getAssetUrl } from "../../lib/assets";

// Dynamically import LeafletMap to prevent SSR window crashes
const LeafletMap = lazy(() => import('./LeafletMap'));

export function WhyChooseUs() {
  const reasons = [
    { title: "Deep Domain Expertise", desc: "75+ years of legacy powering industrial & enterprise growth.", icon: ShieldCheck, img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=75&w=600&auto=format&fit=crop" },
    { title: "End-to-End Execution", desc: "From strategy to steady-state, we take full accountability.", icon: Zap, img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=75&w=600&auto=format&fit=crop" },
    { title: "Outcome Driven", desc: "We don't just ship code; we deliver measurable P&L impact.", icon: ArrowUpRight, img: "/outcome_driven.jpg" },
  ];
  return (
    <section className="relative overflow-hidden bg-background py-32">
      <div className="absolute inset-0 grid-lines opacity-[0.03]" />
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold">Why Choose Us</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl text-foreground">
            A partner built for the <span className="text-gradient">long haul.</span>
          </h2>
        </Reveal>
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.1}>
              <Link to="/contact" className="group relative overflow-hidden rounded-3xl h-[340px] block cursor-pointer shadow-soft border border-border">
                {/* Base Image */}
                <img src={r.img} alt={r.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-300 group-hover:opacity-100 opacity-80" />

                {/* Content Container */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                  <div className="flex items-center gap-3 mb-4 transform transition-transform duration-300 group-hover:-translate-y-2">
                    <div className="h-12 w-12 bg-brand-gradient/80 backdrop-blur-md rounded-xl flex items-center justify-center text-white shadow-glow">
                      <r.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-white leading-tight">{r.title}</h3>
                  </div>

                  {/* Hover Content */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-in-out">
                    <div className="overflow-hidden">
                      <p className="text-white/80 text-sm mb-6 leading-relaxed">{r.desc}</p>
                      <div className="flex items-center gap-2 text-brand font-semibold text-sm transition-transform duration-300 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                        Partner with us <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CSRSection() {
  return (
    <section className="relative overflow-hidden bg-muted py-32">
      <div className="absolute inset-0 starfield opacity-30" />
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Reveal>
              <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold">CSR & Sustainability</div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl text-foreground">
                Building a <span className="text-gradient">Better Tomorrow</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-base text-muted-foreground leading-relaxed">
                We believe technology should serve humanity. Through Acceleron Cares, we invest in environmental sustainability, digital literacy, and community well-being, ensuring our growth creates a positive ripple effect worldwide.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8 flex gap-6">
                <div className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-brand" />
                  <span className="text-sm font-semibold text-foreground">Green Future</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-brand" />
                  <span className="text-sm font-semibold text-foreground">Community First</span>
                </div>
              </div>
            </Reveal>
          </div>
          <div className="relative">
            <Reveal delay={0.2}>
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-glow border border-border group relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=75&w=800" alt="Sustainability" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute bottom-6 left-6 z-20">
                  <p className="text-white font-bold text-lg">Acceleron Cares Initiative</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export const LOCATION_CARDS = [
  { city: "Kolkata", country: "India", flagUrl: "https://flagcdn.com/w40/in.png", label: "Global Headquarters", lat: 22.5726, lng: 88.3639, isHq: true },
  { city: "Delhi NCR", country: "India", flagUrl: "https://flagcdn.com/w40/in.png", label: "Enterprise Delivery Hub", lat: 28.5355, lng: 77.3910 },
  { city: "Singapore", country: "Singapore", flagUrl: "https://flagcdn.com/w40/sg.png", label: "APAC Regional Hub", lat: 1.3521, lng: 103.8198 },
  { city: "West Virginia", country: "USA", flagUrl: "https://flagcdn.com/w40/us.png", label: "Americas Regional Hub", lat: 38.5976, lng: -80.4549 },
  { city: "NSW", country: "Australia", flagUrl: "https://flagcdn.com/w40/au.png", label: "Australasia Office", lat: -31.2532, lng: 146.9211 },
];

export function GlobalPresence() {
  const [activeLoc, setActiveLoc] = useState<typeof LOCATION_CARDS[0] | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-background py-32">
      <div className="absolute inset-0 grid-lines opacity-[0.03]" />
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <Reveal>
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold mb-4">Global Presence</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Our Delivery Hubs</h2>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-4">
            {LOCATION_CARDS.map((loc, i) => (
              <Reveal key={loc.city} delay={i * 0.08}>
                <motion.div
                  onClick={() => setActiveLoc(loc)}
                  whileHover={{ x: 6 }}
                  className={`rounded-2xl border p-5 cursor-pointer transition-all ${activeLoc?.city === loc.city
                      ? "border-brand bg-brand-gradient/10 shadow-glow"
                      : "border-border bg-muted/[0.05] hover:border-brand/40 hover:shadow-soft"
                    }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`h-10 w-10 rounded-xl flex items-center justify-center transition-colors ${activeLoc?.city === loc.city ? "bg-brand text-white shadow-glow" : "bg-muted/10 text-muted-foreground"}`}>
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                          <img src={loc.flagUrl} alt={loc.country} className="h-4 w-auto rounded-[2px] shadow-sm" /> {loc.city}
                          {loc.isHq && <span className="text-[9px] px-1.5 py-0.5 rounded bg-brand-red text-white uppercase">HQ</span>}
                        </h3>
                        <p className="text-xs text-muted-foreground">{loc.country} — {loc.label}</p>
                      </div>
                    </div>
                    <ArrowRight className={`h-4 w-4 transition-transform ${activeLoc?.city === loc.city ? "text-brand translate-x-1" : "text-muted-foreground/30"}`} />
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>

          <div className="relative">
            <Reveal delay={0.2}>
              {mounted ? (
                <Suspense fallback={<div className="h-[400px] md:h-[500px] w-full bg-muted/20 animate-pulse rounded-3xl" />}>
                  <LeafletMap activeLocation={activeLoc} />
                </Suspense>
              ) : (
                <div className="h-[400px] md:h-[500px] w-full bg-muted/20 animate-pulse rounded-3xl" />
              )}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function InsightsSection() {
  const posts = [
    { title: "The Future of SAP S/4HANA", tag: "Tech Pulse", image: "/SAP_Homepage.jpg" },
    { title: "Zero-Trust Architecture in 2026", tag: "Security", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=75&w=600&auto=format&fit=crop" },
    { title: "Acceleron Wins Excellence Award", tag: "Company News", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=75&w=600&auto=format&fit=crop" },
  ];
  return (
    <section className="relative overflow-hidden bg-muted py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgb(58_73_127/0.06),transparent_70%)] pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
            <div>
              <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold">Insights</div>
              <h2 className="mt-4 text-3xl md:text-5xl font-bold text-foreground">
                Perspectives & <span className="text-gradient">Tech Pulse</span>
              </h2>
            </div>
            <Link to="/blog" className="flex items-center gap-2 text-brand hover:text-brand-red font-semibold transition-colors">
              Read all perspectives <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.1}>
              <Link to="/blog" className="group block h-full">
                <div className="rounded-3xl border border-border bg-background overflow-hidden hover:shadow-glow transition-all h-full">
                  <div className="h-48 overflow-hidden relative">
                    <img src={getAssetUrl(post.image)} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-4 left-4 bg-background/80 backdrop-blur text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-border/50 text-foreground">
                      {post.tag}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-brand transition-colors line-clamp-2">{post.title}</h3>
                    <div className="mt-4 text-xs font-semibold text-muted-foreground flex items-center gap-1 group-hover:text-brand transition-colors">
                      Read article <ArrowUpRight className="h-3 w-3" />
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
