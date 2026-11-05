import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Calendar,
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
} from "lucide-react";
import { PageHero } from "../components/ui/PageHero";
import { Reveal, WaveDivider } from "../components/ui/Animations";
import { CultureCollageCard } from "../components/ui/CultureCollageCard";
import { CULTURE_EVENTS, type CultureEvent } from "../data/cultureData";
import { getAssetUrl } from "../lib/assets";

export const Route = createFileRoute("/culture")({
  head: () => ({
    meta: [
      { title: "Culture & Life at Acceleron — Innovation, Celebrations & People" },
      {
        name: "description",
        content:
          "Discover what makes Acceleron Solutions unique. Explore our tech symposiums, women in leadership, employee wellness drives, festival celebrations, and sustainability programs.",
      },
    ],
  }),
  component: CulturePage,
});

function CulturePage() {
  // Lightbox modal state
  const [activeLightbox, setActiveLightbox] = useState<{
    images: string[];
    currentIndex: number;
    title: string;
  } | null>(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveLightbox(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const openLightboxForEvent = (event: CultureEvent, initialImageSrc?: string) => {
    const allImages = [event.coverImage, ...event.thumbnails];
    const initialIndex = initialImageSrc
      ? Math.max(0, allImages.indexOf(initialImageSrc))
      : 0;

    setActiveLightbox({
      images: allImages,
      currentIndex: initialIndex,
      title: event.title,
    });
  };

  const handleLightboxPrev = () => {
    if (!activeLightbox) return;
    setActiveLightbox((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        currentIndex:
          (prev.currentIndex - 1 + prev.images.length) % prev.images.length,
      };
    });
  };

  const handleLightboxNext = () => {
    if (!activeLightbox) return;
    setActiveLightbox((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        currentIndex: (prev.currentIndex + 1) % prev.images.length,
      };
    });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* 1. HERO SECTION */}
      <PageHero
        title="Culture & Life at Acceleron"
        subtitle="Where industrial heritage meets modern digital ambition. We foster an environment of continuous learning, deep mutual respect, purposeful innovation, and shared celebrations."
        breadcrumbs={[{ label: "Who We Are", href: "/about" }, { label: "Culture" }]}
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=75&w=1200&auto=format&fit=crop"
        ctaText="Join Our Team"
        ctaHref="/careers"
        secondaryCtaText="Consult With Us"
        secondaryCtaHref="/contact"
      />

      {/* 2. ALTERNATING CULTURE COLLAGE SECTIONS (LEFT & RIGHT FLOW) */}
      <section className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 sm:py-24">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold mb-3">
              Moments & Memories
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Life, Celebrations & <span className="text-gradient">Team Spirit</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-4 leading-relaxed">
              Every milestone at Acceleron is driven by our people. Take a glimpse inside our hackathons, wellness workshops, festivals, and community drives.
            </p>
          </div>
        </Reveal>

        <div className="space-y-20 sm:space-y-28">
          {CULTURE_EVENTS.map((event, idx) => {
            const isCollageLeft = idx % 2 === 0;

            return (
              <div
                key={event.id}
                id={event.id}
                className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center"
              >
                {/* Collage Column */}
                <div
                  className={`lg:col-span-6 ${
                    isCollageLeft ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Reveal delay={0.15}>
                    <CultureCollageCard
                      event={event}
                      onOpenLightbox={(imgSrc) =>
                        openLightboxForEvent(event, imgSrc)
                      }
                    />
                  </Reveal>
                </div>

                {/* Text Content Column */}
                <div
                  className={`lg:col-span-6 space-y-5 ${
                    isCollageLeft ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Reveal delay={0.25}>
                    {/* Header Badges */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-red/30 bg-brand-red/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-red">
                        <Sparkles className="h-3 w-3" />
                        {event.kicker}
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full border border-border/70 bg-muted/30 px-3 py-1 text-[11px] font-semibold text-muted-foreground">
                        <Calendar className="h-3 w-3 text-brand" />
                        {event.date}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
                      {event.title}
                    </h3>
                    <p className="text-sm sm:text-base font-medium text-brand italic pt-1">
                      “{event.tagline}”
                    </p>

                    {/* Paragraphs */}
                    <div className="space-y-3 pt-2 text-muted-foreground text-sm sm:text-base leading-relaxed">
                      <p>{event.description}</p>
                      {event.extendedDescription && (
                        <p>{event.extendedDescription}</p>
                      )}
                    </div>

                    {/* Highlights Bullet List */}
                    {event.highlights && event.highlights.length > 0 && (
                      <div className="pt-3 space-y-2.5">
                        <div className="text-xs uppercase tracking-wider font-bold text-foreground">
                          Key Highlights:
                        </div>
                        <div className="grid sm:grid-cols-1 gap-2">
                          {event.highlights.map((h, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/80 leading-relaxed"
                            >
                              <CheckCircle2 className="h-4 w-4 text-brand-red shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Quick Stats & Action Buttons */}
                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      {event.stats?.map((s) => (
                        <div
                          key={s.label}
                          className="rounded-xl border border-border/70 bg-muted/20 px-3.5 py-2"
                        >
                          <div className="text-base font-extrabold text-foreground">
                            {s.value}
                          </div>
                          <div className="text-[11px] text-muted-foreground">
                            {s.label}
                          </div>
                        </div>
                      ))}

                      <button
                        type="button"
                        onClick={() => openLightboxForEvent(event)}
                        className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 hover:bg-brand-red hover:text-white px-5 py-2.5 text-xs font-semibold text-brand transition-all duration-200 hover:shadow-soft"
                      >
                        <Maximize2 className="h-3.5 w-3.5" />
                        <span>View All Photos</span>
                      </button>
                    </div>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <WaveDivider from="white" to="dark" flip />

      {/* 3. CAREERS CALL TO ACTION */}
      <section className="section-dark container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 sm:py-24">
        <Reveal>
          <div className="rounded-3xl border border-brand/40 bg-brand-gradient/10 p-8 sm:p-12 md:p-16 text-center backdrop-blur-xl relative overflow-hidden shadow-glow max-w-5xl mx-auto">
            <div className="relative z-10 space-y-6">
              <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold">
                Join Our Family
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                Ready to Experience <span className="text-gradient">Life at Acceleron?</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                We are always seeking curious, innovative, and driven individuals to join our engineering and consulting practices across India and global delivery hubs.
              </p>
              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/careers"
                  className="btn btn-primary btn-lg inline-flex items-center gap-2"
                >
                  View Open Opportunities <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-border bg-card/80 px-7 py-3 text-sm font-semibold text-foreground hover:border-brand transition-colors"
                >
                  Contact Our Team
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 4. LIGHTBOX MODAL */}
      <AnimatePresence>
        {activeLightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveLightbox(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
          >
            {/* Modal Container */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveLightbox(null)}
                aria-label="Close modal"
                className="absolute -top-12 right-0 sm:right-2 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-brand-red transition-all"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Title & Counter */}
              <div className="w-full flex items-center justify-between text-white text-xs sm:text-sm font-medium mb-3 px-2">
                <span className="truncate pr-4">{activeLightbox.title}</span>
                <span className="shrink-0 bg-white/15 px-3 py-1 rounded-full text-xs">
                  {activeLightbox.currentIndex + 1} / {activeLightbox.images.length}
                </span>
              </div>

              {/* Main Image in Lightbox */}
              <div className="relative w-full max-h-[75vh] flex items-center justify-center overflow-hidden rounded-2xl bg-black/50 border border-white/10 shadow-2xl">
                <motion.img
                  key={activeLightbox.currentIndex}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  src={getAssetUrl(
                    activeLightbox.images[activeLightbox.currentIndex]
                  )}
                  alt="Expanded view"
                  className="max-h-[75vh] w-auto max-w-full object-contain"
                />

                {/* Left Arrow */}
                {activeLightbox.images.length > 1 && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLightboxPrev();
                    }}
                    aria-label="Previous photo"
                    className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/60 hover:bg-brand-red text-white border border-white/20 flex items-center justify-center transition-all hover:scale-110 active:scale-95"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                )}

                {/* Right Arrow */}
                {activeLightbox.images.length > 1 && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLightboxNext();
                    }}
                    aria-label="Next photo"
                    className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/60 hover:bg-brand-red text-white border border-white/20 flex items-center justify-center transition-all hover:scale-110 active:scale-95"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                )}
              </div>

              {/* Thumbnails strip inside lightbox */}
              {activeLightbox.images.length > 1 && (
                <div className="flex items-center gap-2 mt-4 overflow-x-auto max-w-full py-1 px-2">
                  {activeLightbox.images.map((img, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() =>
                        setActiveLightbox((prev) =>
                          prev ? { ...prev, currentIndex: i } : null
                        )
                      }
                      className={`h-14 w-20 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                        activeLightbox.currentIndex === i
                          ? "border-brand-red scale-105 ring-2 ring-brand-red/50"
                          : "border-white/20 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={getAssetUrl(img)}
                        alt={`Thumb ${i + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
