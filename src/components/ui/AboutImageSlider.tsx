import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { getAssetUrl } from "../../lib/assets";

export interface AboutSlideImage {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
}

export const ABOUT_SLIDER_IMAGES: AboutSlideImage[] = [
  {
    src: "/aboutus/acceleron-team-1.webp",
    alt: "Acceleron Solutions Inauguration & COE Launch",
    title: "Acceleron Inauguration & COE Launch",
    subtitle: "Grounding technology in 80+ years of industrial excellence.",
  },
  {
    src: "/aboutus/acceleron-kolkata-office-1.webp",
    alt: "Acceleron Kolkata Office Global HQ",
    title: "Kolkata Global HQ & Delivery Hub",
    subtitle: "State-of-the-art infrastructure powering digital transformation.",
  },
  {
    src: "/aboutus/acceleron-team-4.webp",
    alt: "Acceleron Team Collaboration & Innovation",
    title: "Engineering & Consulting Teams",
    subtitle: "Fostering collective innovation across enterprise ecosystems.",
  },
  {
    src: "/aboutus/acceleron-cio500-awards-delhi.webp",
    alt: "Acceleron CIO500 Awards Recognition",
    title: "Industry Recognition & Thought Leadership",
    subtitle: "Celebrated among top enterprise digital transformation leaders.",
  },
  {
    src: "/aboutus/acceleron-event-photo-2.webp",
    alt: "Acceleron Corporate Event & Townhall",
    title: "Culture of Excellence & Collaboration",
    subtitle: "Empowering talent to solve high-impact industrial challenges.",
  },
  {
    src: "/aboutus/acceleron-collaboration-4.webp",
    alt: "Strategic Workshop & Solution Architecture",
    title: "Customer-Centric Solutioning",
    subtitle: "Collaborating with clients to drive measurable business ROI.",
  },
];

interface AboutImageSliderProps {
  images?: AboutSlideImage[];
  showCaption?: boolean;
  imageHeightClassName?: string;
  className?: string;
  autoPlayInterval?: number;
}

export function AboutImageSlider({
  images = ABOUT_SLIDER_IMAGES,
  showCaption = false,
  imageHeightClassName = "aspect-[16/10] w-full max-w-full min-h-[180px] sm:min-h-[300px] md:min-h-[380px] lg:min-h-[420px]",
  className = "",
  autoPlayInterval = 4500,
}: AboutImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const touchStartX = useRef<number | null>(null);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsLightboxOpen(false);
      }
      if (isLightboxOpen) {
        if (e.key === "ArrowLeft") handlePrev();
        if (e.key === "ArrowRight") handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isLightboxOpen, images.length]);

  useEffect(() => {
    if (isPaused || isLightboxOpen || images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [isPaused, isLightboxOpen, images.length, autoPlayInterval]);

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  const currentSlide = images[currentIndex] || images[0];

  return (
    <>
      <div
        className={`relative rounded-2xl sm:rounded-3xl overflow-hidden border border-border/60 bg-muted/20 shadow-elevated p-2 sm:p-2.5 group w-full max-w-full min-w-0 ${className}`}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Decorative corner accents */}
        <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary/40 dark:border-cyan-400/40 rounded-tr-2xl sm:rounded-tr-3xl pointer-events-none z-20" />
        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-brand/30 rounded-bl-2xl sm:rounded-bl-3xl pointer-events-none z-20" />

        {/* Main Image Frame */}
        <div
          onClick={() => setIsLightboxOpen(true)}
          className={`relative w-full ${imageHeightClassName} rounded-xl sm:rounded-2xl overflow-hidden bg-black/40 cursor-pointer group/frame shadow-soft flex items-center justify-center`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex items-center justify-center overflow-hidden"
            >
              <img
                src={getAssetUrl(currentSlide.src)}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover blur-md opacity-35 scale-110 pointer-events-none select-none"
              />
              <img
                src={getAssetUrl(currentSlide.src)}
                alt={currentSlide.alt}
                loading="lazy"
                decoding="async"
                className="relative z-10 max-h-full max-w-full object-contain transition-transform duration-500 group-hover/frame:scale-105 drop-shadow-md"
              />
            </motion.div>
          </AnimatePresence>

          {/* Gradient Overlay for Controls/Captions */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

          {/* Top-Right Action Controls (Arrows & Expand) */}
          <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous image"
                  className="h-8 w-8 rounded-full bg-black/60 hover:bg-primary dark:hover:bg-cyan-600 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-md"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next image"
                  className="h-8 w-8 rounded-full bg-black/60 hover:bg-primary dark:hover:bg-cyan-600 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-md"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </>
            )}

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsLightboxOpen(true);
              }}
              aria-label="View full image"
              className="h-8 w-8 rounded-full bg-black/60 hover:bg-primary dark:hover:bg-cyan-600 text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-md"
            >
              <Maximize2 className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Slide Indicators / Dots */}
          {images.length > 1 && (
            <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(idx);
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "w-5 sm:w-6 bg-primary dark:bg-cyan-400 shadow-sm"
                      : "w-1.5 bg-white/40 hover:bg-white/80"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Optional Caption Section */}
        {showCaption && (
          <div className="p-3 sm:p-4 text-center min-h-[56px] flex flex-col justify-center border-t border-border/40 mt-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.3 }}
              >
                {currentSlide.title && (
                  <div className="text-xs uppercase tracking-widest text-primary dark:text-cyan-400 font-bold">
                    {currentSlide.title}
                  </div>
                )}
                {currentSlide.subtitle && (
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {currentSlide.subtitle}
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLightboxOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-6xl w-full max-h-[92vh] flex flex-col items-center justify-center"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                aria-label="Close modal"
                className="absolute -top-12 right-0 sm:right-2 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-brand-red transition-all"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Title & Counter */}
              <div className="w-full flex items-center justify-between text-white text-xs sm:text-sm font-medium mb-3 px-2">
                <span className="truncate pr-4 font-semibold">
                  {currentSlide.title || currentSlide.alt}
                </span>
                <span className="shrink-0 bg-white/15 px-3 py-1 rounded-full text-xs">
                  {currentIndex + 1} / {images.length}
                </span>
              </div>

              {/* Main Image */}
              <div className="relative w-full max-h-[75vh] flex items-center justify-center overflow-hidden rounded-2xl bg-black/50 border border-white/10 shadow-2xl">
                <motion.img
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  src={getAssetUrl(currentSlide.src)}
                  alt={currentSlide.alt}
                  className="max-h-[75vh] w-auto max-w-full object-contain"
                />

                {/* Left Arrow */}
                {images.length > 1 && (
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Previous photo"
                    className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/60 hover:bg-primary dark:hover:bg-cyan-600 text-white border border-white/20 flex items-center justify-center transition-all hover:scale-110 active:scale-95"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                )}

                {/* Right Arrow */}
                {images.length > 1 && (
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Next photo"
                    className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/60 hover:bg-primary dark:hover:bg-cyan-600 text-white border border-white/20 flex items-center justify-center transition-all hover:scale-110 active:scale-95"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                )}
              </div>

              {/* Bottom Thumbnails */}
              {images.length > 1 && (
                <div className="flex items-center gap-2 mt-4 overflow-x-auto max-w-full py-1 px-2">
                  {images.map((img, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setCurrentIndex(i)}
                      className={`h-14 w-20 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                        currentIndex === i
                          ? "border-primary dark:border-cyan-400 scale-105 ring-2 ring-primary/50"
                          : "border-white/20 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img
                        src={getAssetUrl(img.src)}
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
    </>
  );
}
