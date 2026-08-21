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
    { title: "Deep Domain Expertise", desc: "Proven deep domain expertise powering industrial & enterprise growth.", icon: ShieldCheck, img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=75&w=600&auto=format&fit=crop" },
    { title: "End-to-End Execution", desc: "From strategy to steady-state, we take full accountability.", icon: Zap, img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=75&w=600&auto=format&fit=crop" },
    { title: "Outcome Driven", desc: "We don't just ship code; we deliver measurable P&L impact.", icon: ArrowUpRight, img: "/outcome_driven.jpg" },
  ];
  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-28 md:py-32">
      <div className="absolute inset-0 grid-lines opacity-[0.03]" />
      <div className="absolute top-20 right-10 h-64 w-64 rounded-full bg-brand-red/5 blur-[100px] animate-float-gentle" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold">Why Choose Us</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight text-foreground">
            A partner built for the <span className="text-gradient">long haul.</span>
          </h2>
        </Reveal>
        <div className="mt-12 sm:mt-16 grid md:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.1}>
              <Link to="/contact" className="group relative overflow-hidden rounded-3xl h-[300px] sm:h-[340px] block cursor-pointer shadow-soft border border-white/5 hover:border-white/10 transition-all duration-500">
                {/* Base Image */}
                <img src={r.img} alt={r.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/5 transition-opacity duration-500 group-hover:opacity-100 opacity-75" />

                {/* Content Container */}
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end z-10">
                  <div className="flex items-center gap-3 mb-4 transform transition-transform duration-300 group-hover:-translate-y-2">
                    <div className="h-10 sm:h-12 w-10 sm:w-12 bg-brand-gradient/80 backdrop-blur-xl rounded-xl flex items-center justify-center text-white shadow-glow shrink-0 group-hover:shadow-[0_0_30px_-6px_rgba(222,30,36,0.4)] transition-all duration-300">
                      <r.icon className="h-5 sm:h-6 w-5 sm:w-6" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">{r.title}</h3>
                  </div>

                  {/* Hover Content */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-in-out">
                    <div className="overflow-hidden">
                      <p className="text-white/80 text-sm mb-4 sm:mb-6 leading-relaxed">{r.desc}</p>
                      <div className="flex items-center gap-2 text-red-300 font-semibold text-sm transition-all duration-300 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                        Partner with us <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
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
    <section className="relative overflow-hidden bg-muted py-20 sm:py-28 md:py-32">
      <div className="absolute inset-0 starfield opacity-30" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 items-center">
          <div>
            <Reveal>
              <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold">CSR & Sustainability</div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight text-foreground">
                Building a <span className="text-gradient">Better Tomorrow</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 sm:mt-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
                We believe technology should serve humanity. Through Acceleron Cares, we invest in environmental sustainability, digital literacy, and community well-being, ensuring our growth creates a positive ripple effect worldwide.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-6 sm:mt-8 flex flex-wrap gap-4 sm:gap-6">
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
              <div className="aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-elevated border border-border group relative">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=75&w=800" alt="Sustainability" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 z-20">
                  <p className="text-white font-bold text-base sm:text-lg" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.3)' }}>Acceleron Cares Initiative</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export interface LocationCardItem {
  city: string;
  country: string;
  label: string;
  address: string;
  lat: number;
  lng: number;
  directionsUrl: string;
  isHq?: boolean;
}

export const LOCATION_CARDS: LocationCardItem[] = [
  {
    city: "Kolkata",
    country: "India",
    label: "Global Headquarters & CoE",
    address: "3rd Floor, STPI IT Park, Block-DP, Plot-5/1, Sector V, Salt Lake, Kolkata – 700091, West Bengal, India",
    lat: 22.574625,
    lng: 88.438630,
    directionsUrl: "https://maps.app.goo.gl/PDjDU26TL5tt7HgD6",
    isHq: true,
  },
  {
    city: "Delhi NCR",
    country: "India",
    label: "Enterprise Delivery Hub",
    address: "Gainwell Ecotech II, 1-C/1, Udyog Vihar, Greater Noida, Delhi NCR – 201306, Uttar Pradesh, India",
    lat: 28.4986,
    lng: 77.5348,
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=28.4986,77.5348",
  },
];

export function GlobalPresence() {
  const [activeLoc, setActiveLoc] = useState<LocationCardItem | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-background py-20 sm:py-28 md:py-32">
      <div className="absolute inset-0 grid-lines opacity-[0.03]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <Reveal>
          <div className="text-center mb-12 sm:mb-16">
            <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold mb-4">Global Presence</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">Our Delivery Hubs</h2>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="flex flex-col gap-4">
            {LOCATION_CARDS.map((loc, i) => (
              <Reveal key={loc.city} delay={i * 0.08}>
                <motion.div
                  onClick={() => setActiveLoc(loc)}
                  whileHover={{ x: 6 }}
                  className={`rounded-2xl border p-5 sm:p-6 cursor-pointer transition-all ${
                    activeLoc?.city === loc.city
                      ? "border-brand bg-brand-gradient/10 shadow-glow"
                      : "border-border bg-muted/[0.05] hover:border-brand/40 hover:shadow-soft"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3 sm:gap-4">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div
                        className={`h-10 sm:h-11 w-10 sm:w-11 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          activeLoc?.city === loc.city
                            ? "bg-brand text-white shadow-glow"
                            : "bg-muted/10 text-brand"
                        }`}
                      >
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div className="space-y-1.5 min-w-0">
                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                          <h3 className="text-base sm:text-lg font-bold text-foreground">{loc.city}</h3>
                          {loc.isHq && (
                            <span className="text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-brand-red text-white animate-pulse">
                              HQ
                            </span>
                          )}
                          <span className="text-xs text-muted-foreground">• {loc.country}</span>
                        </div>
                        <p className="text-xs font-semibold text-brand-red">{loc.label}</p>
                        <p className="text-xs text-muted-foreground leading-relaxed pt-1 break-words">
                          {loc.address}
                        </p>
                        <div className="pt-2">
                          <a
                            href={loc.directionsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand hover:text-brand-red transition-colors"
                          >
                            <span>Get Directions</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <ArrowRight
                      className={`h-4 w-4 shrink-0 mt-1 transition-transform ${
                        activeLoc?.city === loc.city ? "text-brand translate-x-1" : "text-muted-foreground/30"
                      }`}
                    />
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>

          <div className="relative">
            <Reveal delay={0.2}>
              {mounted ? (
                <Suspense fallback={<div className="h-[320px] sm:h-[400px] md:h-[500px] w-full bg-muted/20 animate-pulse rounded-2xl sm:rounded-3xl" />}>
                  <LeafletMap activeLocation={activeLoc} />
                </Suspense>
              ) : (
                <div className="h-[320px] sm:h-[400px] md:h-[500px] w-full bg-muted/20 animate-pulse rounded-2xl sm:rounded-3xl" />
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
                    <img src={getAssetUrl(post.image)} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-[#212f60] to-[#3a497f] backdrop-blur-sm text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/10 text-white shadow-sm">
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
