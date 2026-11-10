import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Heart,
  Droplets,
  HandHeart,
  Sparkles,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  X,
  Mail,
  Users,
} from "lucide-react";
import { Reveal, WaveDivider } from "../components/ui/Animations";
import { PageHero } from "../components/ui/PageHero";
import { CsrCollageCard } from "../components/ui/CsrCollageCard";
import { CsrVideoCard } from "../components/ui/CsrVideoCard";
import {
  CSR_INITIATIVES,
  CSR_METRICS,
  type CsrInitiative,
} from "../data/csrData";
import { getAssetUrl } from "../lib/assets";

export const Route = createFileRoute("/csr")({
  head: () => ({
    meta: [
      { title: "Transformation Through Collective Action — Acceleron Cares CSR" },
      {
        name: "description",
        content:
          "Through 'Acceleron Cares', we bring people together to create meaningful change. Guided by empathy and responsibility, our initiatives aim to make a positive difference in the communities around us.",
      },
    ],
  }),
  component: CsrPage,
});

function CsrPage() {
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

  const openLightboxForInitiative = (
    initiative: CsrInitiative,
    initialImageSrc?: string
  ) => {
    const allImages: string[] = [];
    if (initiative.coverImage) allImages.push(initiative.coverImage);
    if (initiative.thumbnails) allImages.push(...initiative.thumbnails);

    if (allImages.length === 0) return;

    const initialIndex = initialImageSrc
      ? Math.max(0, allImages.indexOf(initialImageSrc))
      : 0;

    setActiveLightbox({
      images: allImages,
      currentIndex: initialIndex,
      title: initiative.title,
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
      {/* SECTION 1: HERO BANNER */}
      <PageHero
        badge="ACCELERON CARES: CSR"
        title="Transformation Through Collective Action"
        subtitle="Through 'Acceleron Cares', we bring people together to create meaningful change. Guided by empathy and responsibility, our initiatives aim to make a positive difference in the communities around us."
        breadcrumbs={[{ label: "CSR" }]}
        image="/DSC03626.JPG"
        split={true}
        imagePosition="object-[center_20%]"
        ctaText="Explore Initiatives"
        ctaHref="#initiatives"
        secondaryCtaText="Blood Donation Drive"
        secondaryCtaHref="#blood-donation"
      />

      {/* METRICS STRIP (4-Grid on Mobile & Desktop) */}
      <section className="border-y border-border/60 bg-muted/30 py-8 sm:py-10 relative z-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
            {CSR_METRICS.map((metric, idx) => (
              <Reveal key={metric.label} delay={idx * 0.08} className="h-full">
                <div className="h-full rounded-2xl border border-border/70 bg-card/70 p-4 sm:p-5 shadow-soft hover:shadow-elevated hover:border-brand/40 transition-all text-center sm:text-left flex flex-col justify-between">
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                      <span className="text-gradient">{metric.value}</span>
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-foreground mt-1 leading-snug">
                      {metric.label}
                    </div>
                  </div>
                  <div className="text-[11px] text-muted-foreground mt-2 hidden sm:block leading-relaxed">
                    {metric.desc}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: ALTERNATING COLLAGE & VIDEO INITIATIVES FLOW */}
      <section
        id="initiatives"
        className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 sm:py-24"
      >
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold mb-3">
              Moments of Purpose
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Community Outreach &amp; <span className="text-gradient">Giving Initiatives</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-4 leading-relaxed">
              At Acceleron, giving back is woven into the everyday fabric of our workplace culture. We believe that a thriving community is built on empathy, shared warmth, and proactive local engagement. Take a closer look at our continuous social impact initiatives.
            </p>
          </div>
        </Reveal>

        <div className="space-y-20 sm:space-y-28">
          {CSR_INITIATIVES.map((item, idx) => {
            const isMediaLeft = idx % 2 === 0;

            return (
              <div
                key={item.id}
                id={item.id}
                className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center"
              >
                {/* Media Showcase Column (Video or Collage) */}
                <div
                  className={`lg:col-span-6 ${
                    isMediaLeft ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Reveal delay={0.15}>
                    {item.mediaType === "video" && item.videoUrl ? (
                      <CsrVideoCard
                        videoUrl={item.videoUrl}
                        title={item.title}
                        partner={item.partner}
                        poster={item.coverImage}
                      />
                    ) : (
                      <CsrCollageCard
                        initiative={item}
                        onOpenLightbox={(imgSrc) =>
                          openLightboxForInitiative(item, imgSrc)
                        }
                      />
                    )}
                  </Reveal>
                </div>

                {/* Text Content Column */}
                <div
                  className={`lg:col-span-6 space-y-5 ${
                    isMediaLeft ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Reveal delay={0.25}>
                    {/* Header Badges */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-red/30 bg-brand-red/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-red">
                        <Sparkles className="h-3 w-3" />
                        {item.kicker}
                      </span>

                      {item.partner && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-[11px] font-semibold text-brand">
                          <HandHeart className="h-3 w-3" />
                          {item.partner}
                        </span>
                      )}

                      {item.date && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-border/70 bg-muted/30 px-3 py-1 text-[11px] font-semibold text-muted-foreground">
                          <Calendar className="h-3 w-3 text-brand" />
                          {item.date}
                        </span>
                      )}
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base font-medium text-brand italic pt-1">
                      “{item.tagline}”
                    </p>

                    {/* Description Paragraphs */}
                    <div className="space-y-3 pt-2 text-muted-foreground text-sm sm:text-base leading-relaxed">
                      <p>{item.description}</p>
                      {item.extendedDescription && (
                        <p>{item.extendedDescription}</p>
                      )}
                    </div>

                    {/* Quick Stats & Action Buttons */}
                    <div className="pt-4 flex flex-wrap items-center gap-4">
                      {item.stats?.map((s) => (
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

                      {item.mediaType !== "video" &&
                        ((item.thumbnails && item.thumbnails.length > 0) ||
                          item.coverImage) && (
                          <button
                            type="button"
                            onClick={() => openLightboxForInitiative(item)}
                            className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/10 hover:bg-brand-red hover:text-white px-5 py-2.5 text-xs font-semibold text-brand transition-all duration-200 hover:shadow-soft"
                          >
                            <Maximize2 className="h-3.5 w-3.5" />
                            <span>
                              View{" "}
                              {item.thumbnails && item.thumbnails.length > 0
                                ? "All Photos"
                                : "Photo"}
                            </span>
                          </button>
                        )}
                    </div>
                  </Reveal>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 3: VOLUNTEER ENGAGEMENT SPOTLIGHT */}
      <section className="section-dark container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 sm:py-24 border-t border-border/60">
        <Reveal>
          <div className="rounded-3xl border border-brand/30 bg-card/80 backdrop-blur-xl p-8 sm:p-14 shadow-card">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/30 bg-brand-red/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red">
                  <HandHeart className="h-3.5 w-3.5" /> Hands-on Service
                </div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
                  Grassroots Empathy &amp; Volunteer Engagement
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  Beyond structured campaigns, our workplace culture encourages employees to volunteer their time and energy for local community centers, educational support for underprivileged children, and neighborhood welfare programs.
                </p>
                <div className="grid sm:grid-cols-3 gap-3 pt-2">
                  <div className="flex items-center gap-2 text-xs font-medium text-foreground/80">
                    <CheckCircle2 className="h-4 w-4 text-brand-red shrink-0" />
                    <span>Paid volunteer hours &amp; youth mentorship</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-foreground/80">
                    <CheckCircle2 className="h-4 w-4 text-brand-red shrink-0" />
                    <span>Digital literacy &amp; STEM foundational support</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-medium text-foreground/80">
                    <CheckCircle2 className="h-4 w-4 text-brand-red shrink-0" />
                    <span>Neighborhood civic cleanup &amp; green initiatives</span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-brand/5 border border-brand/20">
                <Users className="h-10 w-10 text-brand mb-2" />
                <div className="text-3xl font-extrabold text-foreground">100%</div>
                <div className="text-xs font-bold uppercase tracking-wider text-brand-red mt-1">
                  Team-Driven Impact
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Every Acceleron team member has the opportunity to lead and participate in local social action.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* SECTION 4: OUR ONGOING PLEDGE */}
      <section className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10 py-16 sm:py-24">
        <Reveal>
          <div className="rounded-3xl border border-brand/30 bg-gradient-to-br from-card via-card to-brand/5 p-8 sm:p-14 shadow-glow text-center relative overflow-hidden">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-brand mb-6">
              Our Ongoing Pledge
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground max-w-3xl mx-auto leading-snug mb-6">
              "At Acceleron, CSR is never just a checkbox—it is a reflection of our core values in action."
            </h2>

            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8">
              Whether through blood donation camps, clothing and food drives, or community welfare programs, we remain steadfast in our commitment to creating positive, lasting change that touches lives and uplifts society.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto pt-6 border-t border-border/60 mb-8">
              <div className="p-3">
                <div className="text-brand font-bold text-sm mb-1">Responsibility</div>
                <div className="text-xs text-muted-foreground">Accountability to society &amp; local communities</div>
              </div>
              <div className="p-3">
                <div className="text-brand font-bold text-sm mb-1">Empathy</div>
                <div className="text-xs text-muted-foreground">Human-first compassion for vulnerable populations</div>
              </div>
              <div className="p-3">
                <div className="text-brand font-bold text-sm mb-1">Collective Action</div>
                <div className="text-xs text-muted-foreground">Every team member making a tangible difference</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/careers"
                className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-8 py-3.5 text-xs font-bold text-white shadow-glow hover:scale-105 transition-all"
              >
                <span>Join Our Purpose-Driven Team</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                hash="form"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-8 py-3.5 text-xs font-bold text-foreground hover:bg-muted/40 transition-colors"
              >
                <span>Partner with Acceleron Cares</span>
                <Mail className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {/* LIGHTBOX MODAL */}
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

      <WaveDivider from="dark" to="white" />
    </main>
  );
}
