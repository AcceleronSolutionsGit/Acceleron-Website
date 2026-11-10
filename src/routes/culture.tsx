import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect, useMemo, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowRight,
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
} from "lucide-react";
import { PageHero } from "../components/ui/PageHero";
import { Reveal, WaveDivider } from "../components/ui/Animations";
import { CultureCollageCard } from "../components/ui/CultureCollageCard";
import {
  CULTURE_CATEGORIES,
  CULTURE_EVENTS,
  type CultureCategory,
  type CultureEvent,
} from "../data/cultureData";
import { getAssetUrl } from "../lib/assets";

const INITIAL_VISIBLE_COUNT = 3;

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
  const [selectedCategory, setSelectedCategory] = useState<
    "All Events" | CultureCategory
  >("All Events");
  const [showAllEvents, setShowAllEvents] = useState(false);
  const eventsSectionRef = useRef<HTMLElement>(null);

  const [activeLightbox, setActiveLightbox] = useState<{
    images: string[];
    currentIndex: number;
    title: string;
  } | null>(null);

  // Support deep links to events beyond the initial 3 (e.g., /culture#happy-holi-2026)
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;

    const targetIndex = CULTURE_EVENTS.findIndex((ev) => ev.id === hash);
    if (targetIndex >= INITIAL_VISIBLE_COUNT) {
      setSelectedCategory("All Events");
      setShowAllEvents(true);
    }

    if (targetIndex !== -1) {
      const timer = window.setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      }, 150);
      return () => window.clearTimeout(timer);
    }
  }, []);

  const isLightboxOpen = activeLightbox !== null;

  // Lightbox keyboard navigation & body scroll lock
  useEffect(() => {
    if (!isLightboxOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveLightbox(null);
      } else if (e.key === "ArrowLeft") {
        setActiveLightbox((prev) =>
          prev
            ? {
                ...prev,
                currentIndex:
                  (prev.currentIndex - 1 + prev.images.length) %
                  prev.images.length,
              }
            : null
        );
      } else if (e.key === "ArrowRight") {
        setActiveLightbox((prev) =>
          prev
            ? {
                ...prev,
                currentIndex: (prev.currentIndex + 1) % prev.images.length,
              }
            : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen]);

  const categoryCounts = useMemo(() => {
    const counts: Record<"All Events" | CultureCategory, number> = {
      "All Events": CULTURE_EVENTS.length,
      "Innovation & Impact": 0,
      "People & Celebrations": 0,
      "Wellness & Care": 0,
    };
    for (const event of CULTURE_EVENTS) {
      counts[event.category] += 1;
    }
    return counts;
  }, []);

  const filteredEvents = useMemo(() => {
    if (selectedCategory === "All Events") return CULTURE_EVENTS;
    return CULTURE_EVENTS.filter(
      (event) => event.category === selectedCategory
    );
  }, [selectedCategory]);

  const visibleEvents = useMemo(() => {
    if (showAllEvents || selectedCategory !== "All Events") {
      return filteredEvents;
    }
    return filteredEvents.slice(0, INITIAL_VISIBLE_COUNT);
  }, [filteredEvents, selectedCategory, showAllEvents]);

  const remainingCount = Math.max(
    0,
    filteredEvents.length - visibleEvents.length
  );

  const handleToggleViewMore = () => {
    if (showAllEvents) {
      setShowAllEvents(false);
      eventsSectionRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      setShowAllEvents(true);
    }
  };

  const openLightboxForEvent = (
    event: CultureEvent,
    initialImageSrc?: string
  ) => {
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
        breadcrumbs={[
          { label: "Who We Are", href: "/about" },
          { label: "Culture" },
        ]}
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=75&w=1200&auto=format&fit=crop"
        ctaText="Join Our Team"
        ctaHref="/careers"
        secondaryCtaText="Consult With Us"
        secondaryCtaHref="/contact"
      />

      {/* 2. CULTURE EVENTS SHOWCASE */}
      <section
        id="events-showcase"
        ref={eventsSectionRef}
        className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-14 sm:py-20"
      >
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <div className="text-xs uppercase tracking-[0.35em] text-brand-red font-bold mb-2.5">
              Moments &amp; Memories
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Life, Celebrations &amp;{" "}
              <span className="text-gradient">Team Spirit</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-3 leading-relaxed">
              Every milestone at Acceleron is driven by our people. Explore our
              technology summits, wellness programs, festivals, and sustainability
              initiatives.
            </p>
          </div>
        </Reveal>

        {/* Category Filter Tabs */}
        <div
          role="group"
          aria-label="Filter culture events by category"
          className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-14"
        >
          {CULTURE_CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                aria-pressed={isActive}
                onClick={() => {
                  setSelectedCategory(category);
                  setShowAllEvents(false);
                }}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-brand-gradient text-white shadow-sm"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground border border-border/60"
                }`}
              >
                <span>{category}</span>
                <span
                  className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold leading-none ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-background text-muted-foreground"
                  }`}
                >
                  {categoryCounts[category]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Alternating Event Rows */}
        <div className="divide-y divide-border/50">
          {visibleEvents.map((event, idx) => {
            const isCollageLeft = idx % 2 === 0;
            const totalPhotos = event.thumbnails.length + 1;

            return (
              <motion.article
                key={event.id}
                id={event.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.35,
                  delay: Math.min((idx % 3) * 0.06, 0.18),
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="py-10 sm:py-14 first:pt-2 last:pb-2 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Collage Column */}
                <div
                  className={`lg:col-span-6 ${
                    isCollageLeft ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <CultureCollageCard
                    event={event}
                    onOpenLightbox={(imgSrc) =>
                      openLightboxForEvent(event, imgSrc)
                    }
                  />
                </div>

                {/* Text Content Column */}
                <div
                  className={`lg:col-span-6 space-y-4 ${
                    isCollageLeft ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  {/* Eyebrow Metadata */}
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs">
                    <span className="font-bold uppercase tracking-[0.16em] text-brand-red">
                      {event.kicker}
                    </span>
                    <span className="text-border" aria-hidden="true">
                      •
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-medium text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5 text-brand/80" />
                      {event.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight leading-snug">
                    {event.title}
                  </h3>

                  {/* Editorial Tagline */}
                  <p className="border-l-2 border-brand-red/70 pl-3.5 text-sm sm:text-base font-medium text-foreground/85 leading-relaxed">
                    {event.tagline}
                  </p>

                  {/* Narrative Paragraphs */}
                  <div className="space-y-3 text-muted-foreground text-sm sm:text-[15px] leading-relaxed">
                    <p>{event.description}</p>
                    {event.extendedDescription && (
                      <p>{event.extendedDescription}</p>
                    )}
                  </div>

                  {/* Metrics & Lightbox Action */}
                  <div className="pt-5 border-t border-border/60 flex flex-wrap items-center justify-between gap-4">
                    {event.stats && event.stats.length > 0 && (
                      <div className="flex flex-wrap items-center gap-6">
                        {event.stats.map((s, statIdx) => (
                          <div
                            key={s.label}
                            className={
                              statIdx > 0
                                ? "border-l border-border/70 pl-6"
                                : ""
                            }
                          >
                            <div className="text-base sm:text-lg font-extrabold text-foreground leading-none">
                              {s.value}
                            </div>
                            <div className="text-[11px] font-medium text-muted-foreground mt-1">
                              {s.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    <button
                      type="button"
                      onClick={() => openLightboxForEvent(event)}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-card hover:bg-brand-red hover:text-white hover:border-brand-red px-4 py-2 text-xs font-semibold text-foreground transition-all duration-200 shadow-xs cursor-pointer"
                    >
                      <Maximize2 className="h-3.5 w-3.5" />
                      <span>
                        {totalPhotos > 1
                          ? `View Gallery (${totalPhotos})`
                          : "View Photo"}
                      </span>
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* View More / Show Fewer Toggle */}
        {selectedCategory === "All Events" &&
          filteredEvents.length > INITIAL_VISIBLE_COUNT && (
            <div className="mt-10 sm:mt-14 pt-8 border-t border-border/60 flex flex-col items-center gap-3 text-center">
              <p className="text-xs font-medium text-muted-foreground">
                Showing {visibleEvents.length} of {filteredEvents.length}{" "}
                events
              </p>
              <button
                type="button"
                onClick={handleToggleViewMore}
                aria-expanded={showAllEvents}
                className="inline-flex items-center gap-2.5 rounded-full border border-brand-red/35 bg-brand-red/5 hover:bg-brand-red text-brand-red hover:text-white hover:border-brand-red px-7 py-3 text-sm font-semibold transition-all duration-200 shadow-soft cursor-pointer"
              >
                <span>
                  {showAllEvents
                    ? "Show Fewer Events"
                    : `View More Events (${remainingCount})`}
                </span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    showAllEvents ? "rotate-180" : ""
                  }`}
                />
              </button>
            </div>
          )}
      </section>

      <WaveDivider from="white" to="dark" />

      {/* 3. CAREERS CALL TO ACTION */}
      <section className="section-dark w-full relative z-10 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <Reveal>
            <div className="rounded-3xl border border-brand/30 bg-gradient-to-br from-card via-card to-brand/5 p-8 sm:p-12 md:p-16 text-center backdrop-blur-xl relative overflow-hidden shadow-glow max-w-5xl mx-auto">
              <div className="relative z-10 space-y-6">
                <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold">
                  Join Our Family
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                  Ready to Experience{" "}
                  <span className="text-gradient">Life at Acceleron?</span>
                </h2>
                <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                  We are always seeking curious, innovative, and driven
                  individuals to join our engineering and consulting practices
                  across India and global delivery hubs.
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
        </div>
      </section>

      <WaveDivider from="dark" to="white" />

      {/* 4. LIGHTBOX MODAL */}
      <AnimatePresence>
        {activeLightbox && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={activeLightbox.title}
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
                className="absolute -top-12 right-0 sm:right-2 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-brand-red transition-all cursor-pointer"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Title & Counter */}
              <div className="w-full flex items-center justify-between text-white text-xs sm:text-sm font-medium mb-3 px-2">
                <span className="truncate pr-4">{activeLightbox.title}</span>
                <span className="shrink-0 bg-white/15 px-3 py-1 rounded-full text-xs">
                  {activeLightbox.currentIndex + 1} /{" "}
                  {activeLightbox.images.length}
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
                  alt={`${activeLightbox.title} — Photo ${activeLightbox.currentIndex + 1} of ${activeLightbox.images.length}`}
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
                    className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/60 hover:bg-brand-red text-white border border-white/20 flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer"
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
                    className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/60 hover:bg-brand-red text-white border border-white/20 flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer"
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
                      aria-label={`View photo ${i + 1}`}
                      className={`h-14 w-20 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                        activeLightbox.currentIndex === i
                          ? "border-brand-red scale-105 ring-2 ring-brand-red/50"
                          : "border-white/20 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={getAssetUrl(img)}
                        alt={`Thumbnail ${i + 1}`}
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
