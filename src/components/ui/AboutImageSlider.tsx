import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getAssetUrl } from "../../lib/assets";

export interface AboutSlideImage {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
}

export const ABOUT_SLIDER_IMAGES: AboutSlideImage[] = [
  {
    src: "/aboutus/acceleron-event-photo-2.webp",
    alt: "Acceleron Solutions Office Inauguration & CoE Launch",
    title: "Acceleron Inauguration & CoE Launch",
    subtitle: "Grounding technology in 80+ years of industrial excellence.",
  },
  {
    src: "/aboutus/acceleron-kolkata-office-1.webp",
    alt: "Acceleron Solutions Kolkata Headquarters",
    title: "Kolkata Global HQ & Delivery Hub",
    subtitle: "State-of-the-art delivery hub in Sector V, Salt Lake.",
  },
  {
    src: "/aboutus/acceleron-team-1.webp",
    alt: "Acceleron Engineering and Practice Teams",
    title: "Engineering & Consulting Teams",
    subtitle: "Full-stack experts delivering domain-driven enterprise solutions.",
  },
  {
    src: "/aboutus/acceleron-collaboration-1.webp",
    alt: "Acceleron Collaborative Workspaces",
    title: "Collaborative Innovation Workspaces",
    subtitle: "Cross-functional teams solving mission-critical business challenges.",
  },
  {
    src: "/aboutus/acceleron-team-4.webp",
    alt: "Acceleron Team All-Hands & Celebrations",
    title: "Acceleron Team & Culture",
    subtitle: "Fostering continuous learning, ownership, and client success.",
  },
  {
    src: "/aboutus/acceleron-collaboration-4.webp",
    alt: "Strategic Planning & Enterprise Execution",
    title: "Strategic Planning & Delivery",
    subtitle: "Aligning shop-floor realities with high-performance architectures.",
  },
  {
    src: "/aboutus/acceleron-cio500-awards-delhi.webp",
    alt: "Acceleron Leadership at CIO500 Awards Delhi",
    title: "CIO500 Awards Recognition, Delhi",
    subtitle: "Recognized for delivering trusted digital transformation.",
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
  imageHeightClassName = "h-[280px] sm:h-[350px] md:h-[400px]",
  className = "",
  autoPlayInterval = 4500,
}: AboutImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (isPaused || images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [isPaused, images.length, autoPlayInterval]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
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
    <div
      className={`relative rounded-2xl sm:rounded-3xl overflow-hidden border border-border/60 bg-muted/20 shadow-elevated p-2 group ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Decorative corner accents */}
      <div className="absolute -top-1 -right-1 w-16 h-16 border-t-2 border-r-2 border-brand-red/40 rounded-tr-3xl pointer-events-none z-20" />
      <div className="absolute -bottom-1 -left-1 w-16 h-16 border-b-2 border-l-2 border-brand/30 rounded-bl-3xl pointer-events-none z-20" />

      {/* Main Image Frame */}
      <div className={`relative w-full ${imageHeightClassName} rounded-xl sm:rounded-2xl overflow-hidden bg-black/40`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <img
              src={getAssetUrl(currentSlide.src)}
              alt={currentSlide.alt}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Manual Arrow Controls */}
        {images.length > 1 && (
          <div className="absolute top-3.5 right-3.5 z-20 flex items-center gap-1.5 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous image"
              className="h-8 w-8 rounded-full bg-black/60 hover:bg-brand-red text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-md"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next image"
              className="h-8 w-8 rounded-full bg-black/60 hover:bg-brand-red text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 shadow-md"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}

        {/* Slide Indicators / Dots */}
        {images.length > 1 && (
          <div className="absolute bottom-4 right-4 z-20 flex items-center gap-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-5 sm:w-6 bg-brand-red shadow-glow"
                    : "w-1.5 bg-white/40 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Optional Caption Section */}
      {showCaption && (
        <div className="p-4 text-center min-h-[64px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.3 }}
            >
              {currentSlide.title && (
                <div className="text-xs uppercase tracking-widest text-brand-red font-bold">
                  {currentSlide.title}
                </div>
              )}
              {currentSlide.subtitle && (
                <p className="text-xs text-muted-foreground mt-1">
                  {currentSlide.subtitle}
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}

