import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ShieldCheck, Zap, Heart, Leaf, MapPin, ArrowRight, ArrowUpRight, Globe, Phone, Mail, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal, WaveDivider } from "../ui/Animations";
import { useEffect, useState, useCallback, lazy, Suspense } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { getAssetUrl } from "../../lib/assets";

// Dynamically import LeafletMap to prevent SSR window crashes
const LeafletMap = lazy(() => import('./LeafletMap'));

export function WhyChooseUs() {
  const reasons = [
    { title: "Deep Domain Expertise", desc: "Backed by Gainwell Group's industrial heritage, we speak the real operational language of mining, manufacturing, and heavy engineering.", icon: ShieldCheck, img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=75&w=600&auto=format&fit=crop" },
    { title: "End-to-End Execution", desc: "From board-level digital strategy through custom development to 24×7 steady-state managed operations, we take single-point accountability. ", icon: Zap, img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=75&w=600&auto=format&fit=crop" },
    { title: "Measurable P&L Impact", desc: "We don't just ship software code; we focus strictly on business outcomes—reducing downtime, improving safety, and optimizing operational costs.", icon: ArrowUpRight, img: "/outcome_driven.jpg" },
  ];
  return (
    <section className="relative overflow-hidden bg-background py-8 sm:py-12 md:py-16">
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
        <div className="mt-10 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {reasons.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-3xl min-h-[320px] sm:min-h-[360px] h-full flex flex-col justify-end p-6 sm:p-8 shadow-soft border border-white/10 hover:border-brand-red/40 hover:shadow-glow transition-all duration-500">
                {/* Base Image */}
                <img
                  src={r.img}
                  alt={r.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark Overlay for optimal readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20" />

                {/* Content Container - Heading & Sub-text constantly visible */}
                <div className="relative z-10 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 sm:h-12 w-10 sm:w-12 bg-brand-gradient/80 backdrop-blur-xl rounded-xl flex items-center justify-center text-white shadow-glow shrink-0 group-hover:shadow-[0_0_30px_-6px_rgba(222,30,36,0.4)] transition-all duration-300">
                      <r.icon className="h-5 sm:h-6 w-5 sm:w-6" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                      {r.title}
                    </h3>
                  </div>

                  <p className="text-white/85 text-xs sm:text-sm leading-relaxed pt-1">
                    {r.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Separate CTA button below the cards */}
        <Reveal delay={0.3}>
          <div className="mt-12 sm:mt-16 text-center">
            <a
              href="#contact"
              onClick={(e) => {
                const el = document.getElementById("contact") || document.getElementById("form");
                if (el) {
                  e.preventDefault();
                  el.scrollIntoView({ behavior: "smooth" });
                } else {
                  window.location.href = "/contact#form";
                }
              }}
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-gradient px-8 sm:px-10 py-3.5 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-glow hover:shadow-red-glow hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              Partner with us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export interface CsrCarouselImage {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
}

/**
 * Four (4) CSR showcase images for the auto-scrolling infinite carousel.
 * You can easily update, replace, or customize these 4 images and their titles.
 */
export const CSR_CAROUSEL_IMAGES: CsrCarouselImage[] = [
  // {
  //   src: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=75&w=800",
  //   alt: "Sustainability & Green Future",
  //   title: "Acceleron Cares Initiative",
  //   subtitle: "Environmental stewardship & sustainability",
  // },
  {
    src: "/csr/blood donation/Blood-donation-Acceleron-Solutions-3.png.webp",
    alt: "Blood Donation Drive",
    title: "Blood Donation Drive",
    subtitle: "Leadership in action with Philanthropic Technical Association",
  },
  {
    src: "/csr/winter clothes/Winter-Cloths-to-Elderly-People-CSR-Acceleron-Solutions-5.png.webp",
    alt: "Winter Warmth Initiative for Elderly",
    title: "Winter Warmth Campaign",
    subtitle: "Delivering blankets, warmth & care to senior citizens",
  },
  {
    src: "/csr/food donation/Food Donation - Acceleron Solution.webp",
    alt: "Community Food Relief & Nutrition",
    title: "Nourishing Communities",
    subtitle: "Nutritional staple kits for daily-wage households",
  },
];

export function CsrImageCarousel({
  images = CSR_CAROUSEL_IMAGES,
  autoScrollInterval = 3500,
}: {
  images?: CsrCarouselImage[];
  autoScrollInterval?: number;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    duration: 30,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Automatically scroll one after another in infinite loop (pauses on hover)
  useEffect(() => {
    if (!emblaApi || isPaused) return;

    const timer = setInterval(() => {
      emblaApi.scrollNext();
    }, autoScrollInterval);

    return () => clearInterval(timer);
  }, [emblaApi, isPaused, autoScrollInterval]);

  return (
    <div
      className="aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-elevated border border-border group relative select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="CSR Highlights Image Carousel"
    >
      {/* Embla Viewport */}
      <div className="overflow-hidden h-full w-full" ref={emblaRef}>
        <div className="flex h-full -ml-0">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="relative min-w-0 flex-[0_0_100%] h-full overflow-hidden"
            >
              {/* Gradient overlay for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent z-10 pointer-events-none" />

              <img
                src={img.src}
                alt={img.alt || img.title || "CSR Image"}
                loading={idx === 0 ? "eager" : "lazy"}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Title & subtitle badge */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 z-20 pointer-events-none max-w-[70%] sm:max-w-[75%]">
                <p
                  className="text-white font-bold text-base sm:text-lg leading-tight"
                  style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
                >
                  {img.title || "Acceleron Cares Initiative"}
                </p>
                {img.subtitle && (
                  <p
                    className="text-white/80 text-xs sm:text-sm mt-1 line-clamp-1"
                    style={{ textShadow: "0 1px 6px rgba(0,0,0,0.5)" }}
                  >
                    {img.subtitle}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows (visible on hover / focus) */}
      <button
        type="button"
        onClick={scrollPrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:opacity-100 shadow-md hover:scale-105 active:scale-95 cursor-pointer"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>

      <button
        type="button"
        onClick={scrollNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 focus:opacity-100 shadow-md hover:scale-105 active:scale-95 cursor-pointer"
        aria-label="Next image"
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      {/* Pagination Dot Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 z-20 flex items-center gap-1.5 bg-black/35 backdrop-blur-sm px-2.5 py-1.5 rounded-full border border-white/10">
        {images.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => scrollTo(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              selectedIndex === idx
                ? "w-5 bg-brand-red shadow-[0_0_8px_rgba(222,30,36,0.6)]"
                : "w-1.5 bg-white/40 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export function CSRSection({ images }: { images?: CsrCarouselImage[] }) {
  return (
    <section className="relative overflow-hidden bg-muted py-16 sm:py-12 md:py-16">
      <div className="absolute inset-0 starfield opacity-30" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 items-center">
          <div>
            <Reveal>
              <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold">Acceleron Cares: CSR</div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight text-foreground">
                Building a <span className="text-gradient">Better Tomorrow</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-4 sm:mt-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
                We believe technology should serve humanity. Through the ‘Acceleron Cares’ initiative, we invest in environmental sustainability, digital literacy, and community well-being, ensuring our growth creates a positive ripple effect worldwide.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                <div className="flex items-start gap-3.5 p-4 rounded-2xl border border-border/60 bg-background/60 dark:bg-card/40 backdrop-blur-md shadow-soft hover:border-brand-red/30 transition-all">
                  <div className="h-9 w-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Leaf className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">
                      Green Future
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      Environmental stewardship &amp; carbon reduction
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-2xl border border-border/60 bg-background/60 dark:bg-card/40 backdrop-blur-md shadow-soft hover:border-brand-red/30 transition-all">
                  <div className="h-9 w-9 rounded-xl bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Heart className="h-5 w-5 text-brand-red" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground">
                      Community First
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      Digital literacy &amp; workforce skill development
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  to="/csr"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white px-7 sm:px-8 py-3.5 text-xs sm:text-sm font-bold shadow-md shadow-red-600/30 hover:shadow-lg hover:shadow-red-600/50 hover:from-red-500 hover:to-rose-500 hover:scale-105 active:scale-95 transition-all duration-300"
                >
                  <span>Explore CSR Initiatives</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/csr"
                  hash="initiatives"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border/80 bg-background/60 hover:bg-muted/60 text-foreground px-6 py-3.5 text-xs sm:text-sm font-semibold shadow-soft hover:border-brand-red/40 hover:scale-105 transition-all duration-300"
                >
                  <span>View Impact &amp; Gallery</span>
                </Link>
              </div>
            </Reveal>
          </div>
          <div className="relative">
            <Reveal delay={0.2}>
              <CsrImageCarousel images={images} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export interface LocationCardItem {
  city: string;
  country?: string;
  label: string;
  address: string;
  email?: string;
  phone?: string;
  phones?: string[];
  lat?: number;
  lng?: number;
  zoomLevel?: number;
  directionsUrl?: string;
  isHq?: boolean;
  isInternational?: boolean;
}

export const LOCATION_CARDS: LocationCardItem[] = [
  {
    city: "Kolkata Headquarters",
    country: "India",
    label: "Global HQ & Center of Excellence (CoE)",
    address: "3rd Floor, STPI IT Park, Block-DP, Plot-5/1, Sector V, Salt Lake, Kolkata – 700091, West Bengal, India",
    email: "enquiry@acceleronsolutions.io",
    phone: "033-35346200 / 033-35346222",
    phones: ["033-35346200", "033-35346222"],
    lat: 22.574625,
    lng: 88.438630,
    zoomLevel: 14,
    directionsUrl: "https://maps.app.goo.gl/PDjDU26TL5tt7HgD6",
    isHq: true,
  },
  {
    city: "Delhi NCR Hub",
    country: "India",
    label: "Enterprise Delivery Center",
    address: "Gainwell Ecotech II, 1-C/1, Udyog Vihar, Greater Noida, Delhi NCR – 201306, Uttar Pradesh, India",
    email: "enquiry@acceleronsolutions.io",
    phone: "033-35346200 / 033-35346222",
    phones: ["033-35346200", "033-35346222"],
    lat: 28.4986,
    lng: 77.5348,
    zoomLevel: 14,
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=28.4986,77.5348",
  },
  {
    city: "International Footprint",
    country: "Global Reach",
    label: "Strategic Client Reach & Operations",
    address: "Active enterprise engagements across USA (West Virginia), Australia (NSW), Singapore, and the Middle East",
    email: "enquiry@acceleronsolutions.io",
    lat: 20.0,
    lng: 35.0,
    zoomLevel: 2,
    isInternational: true,
  },
];

export function GlobalPresence() {
  const [activeLoc, setActiveLoc] = useState<LocationCardItem | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-background pt-20 sm:pt-12 md:pt-16 pb-12 sm:pb-12 md:pb-16">
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
                        {loc.isInternational ? (
                        <Globe className="h-5 w-5" />
                      ) : (
                        <MapPin className="h-5 w-5" />
                      )}
                      </div>
                      <div className="space-y-1.5 min-w-0">
                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                          <h3 className="text-base sm:text-lg font-bold text-foreground">{loc.city}</h3>
                          {loc.isHq && (
                            <span className="text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-brand-red text-white animate-pulse">
                              HQ
                            </span>
                          )}
                          {loc.country && <span className="text-xs text-muted-foreground">• {loc.country}</span>}
                        </div>
                        <p className="text-xs font-semibold text-brand-red">{loc.label}</p>
                        <p className="text-xs text-muted-foreground leading-relaxed pt-1 break-words">
                          {loc.address}
                        </p>
                        {loc.phone && (
                          <div className="flex items-center gap-2 pt-1 text-xs text-foreground/90 font-medium">
                            <Phone className="h-3.5 w-3.5 text-brand shrink-0" />
                            <div className="flex flex-wrap items-center gap-x-2">
                              {loc.phones ? (
                                loc.phones.map((p, pIdx) => (
                                  <span key={pIdx} className="inline-flex items-center gap-1">
                                    {pIdx > 0 && <span className="text-muted-foreground">/</span>}
                                    <a
                                      href={`tel:${p.replace(/[^0-9+]/g, '')}`}
                                      onClick={(e) => e.stopPropagation()}
                                      className="hover:text-brand transition-colors"
                                    >
                                      {p}
                                    </a>
                                  </span>
                                ))
                              ) : (
                                <a
                                  href={`tel:${loc.phone.replace(/[^0-9+]/g, '')}`}
                                  onClick={(e) => e.stopPropagation()}
                                  className="hover:text-brand transition-colors"
                                >
                                  {loc.phone}
                                </a>
                              )}
                            </div>
                          </div>
                        )}
                        {loc.email && (
                          <div className="flex items-center gap-2 pt-0.5 text-xs text-muted-foreground">
                            <Mail className="h-3.5 w-3.5 text-brand shrink-0" />
                            <a
                              href={`mailto:${loc.email}`}
                              onClick={(e) => e.stopPropagation()}
                              className="hover:text-brand transition-colors"
                            >
                              {loc.email}
                            </a>
                          </div>
                        )}
                        {loc.directionsUrl && (
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
                        )}
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

// Set to true when you want to make the Insights section visible again
const SHOW_INSIGHTS_SECTION = false;

export function InsightsSection() {
  // Hidden for now; change SHOW_INSIGHTS_SECTION to true to display later
  if (!SHOW_INSIGHTS_SECTION) return null;

  const posts = [
    { title: "The Future of SAP S/4HANA", tag: "Tech Pulse", image: "/SAP_Homepage.jpg" },
    { title: "Zero-Trust Architecture in 2026", tag: "Security", image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=75&w=600&auto=format&fit=crop" },
    { title: "Acceleron Wins Excellence Award", tag: "Company News", image: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=75&w=600&auto=format&fit=crop" },
  ];
  return (
    <>
      <WaveDivider from="dark" to="light" />
      <section className="relative overflow-hidden bg-muted py-16 sm:py-24 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgb(58_73_127/0.06),transparent_70%)] pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
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
      <WaveDivider from="light" to="dark" />
    </>
  );
}
