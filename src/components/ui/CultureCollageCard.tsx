import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Maximize2, Sparkles } from "lucide-react";
import { getAssetUrl } from "../../lib/assets";
import type { CultureEvent } from "../../data/cultureData";

interface CultureCollageCardProps {
  event: CultureEvent;
  onOpenLightbox?: (imageSrc: string, title: string) => void;
  className?: string;
}

export function CultureCollageCard({
  event,
  onOpenLightbox,
  className = "",
}: CultureCollageCardProps) {
  const [activeImage, setActiveImage] = useState<string>(event.coverImage);

  return (
    <div
      className={`relative rounded-3xl border border-border/70 bg-card/60 backdrop-blur-md p-3.5 sm:p-4 shadow-elevated group ${className}`}
    >
      {/* Decorative corner accents */}
      <div className="absolute -top-1 -right-1 w-14 h-14 border-t-2 border-r-2 border-brand-red/40 rounded-tr-3xl pointer-events-none z-20" />
      <div className="absolute -bottom-1 -left-1 w-14 h-14 border-b-2 border-l-2 border-brand/30 rounded-bl-3xl pointer-events-none z-20" />

      {/* 1. Main Large Cover / Selected Image */}
      <div
        onClick={() => onOpenLightbox?.(activeImage, event.title)}
        className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-black/40 border border-border/50 cursor-pointer group/main shadow-soft flex items-center justify-center"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeImage}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex items-center justify-center overflow-hidden"
          >
            <img
              src={getAssetUrl(activeImage)}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover blur-md opacity-30 scale-110 pointer-events-none select-none"
            />
            <img
              src={getAssetUrl(activeImage)}
              alt={`${event.title} spotlight`}
              loading="lazy"
              decoding="async"
              className="relative z-10 max-h-full max-w-full object-contain transition-transform duration-500 group-hover/main:scale-105 drop-shadow-md"
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />

        {/* Hover Click to Expand Button */}
        <div className="absolute top-3 right-3 z-20 opacity-90 sm:opacity-0 sm:group-hover/main:opacity-100 transition-opacity duration-300">
          <button
            type="button"
            aria-label="View full image"
            onClick={(e) => {
              e.stopPropagation();
              onOpenLightbox?.(activeImage, event.title);
            }}
            className="h-8 w-8 rounded-full bg-black/70 hover:bg-brand-red text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-md"
          >
            <Maximize2 className="h-4 w-4" />
          </button>
        </div>

        {/* Bottom Title Bar overlay on large image */}
        <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-none">
          <p className="text-xs sm:text-sm font-medium text-white/95 truncate drop-shadow-md">
            {event.title}
          </p>
          <span className="text-[11px] font-semibold text-brand-red/90 bg-white/90 dark:bg-black/80 px-2 py-0.5 rounded-md shrink-0">
            {event.date}
          </span>
        </div>
      </div>

      {/* 2. Bottom 4 Images Row (Collage Thumbnails) */}
      {event.thumbnails.length > 0 ? (
        <div className="mt-3">
          <div className="flex items-center justify-between mb-2 px-1">
            <span className="text-[11px] uppercase tracking-wider font-bold text-muted-foreground">
              Event Highlights
            </span>
            {activeImage !== event.coverImage && (
              <button
                type="button"
                onClick={() => setActiveImage(event.coverImage)}
                className="text-[11px] text-brand hover:text-brand-red transition-colors font-semibold"
              >
                Reset to Cover
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
            {event.thumbnails.map((thumbSrc, idx) => {
              const isSelected = activeImage === thumbSrc;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImage(thumbSrc)}
                  aria-label={`View photo ${idx + 1}`}
                  className={`relative aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all duration-200 group/thumb bg-black/30 flex items-center justify-center ${
                    isSelected
                      ? "border-brand-red ring-2 ring-brand-red/40 scale-[1.03] shadow-md z-10"
                      : "border-border/60 hover:border-brand/60 opacity-80 hover:opacity-100 hover:scale-[1.02]"
                  }`}
                >
                  <img
                    src={getAssetUrl(thumbSrc)}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover blur-sm opacity-25 scale-110 pointer-events-none select-none"
                  />
                  <img
                    src={getAssetUrl(thumbSrc)}
                    alt={`${event.title} highlight ${idx + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="relative z-10 max-h-full max-w-full object-contain transition-transform duration-300 group-hover/thumb:scale-105"
                  />
                  {isSelected && (
                    <div className="absolute inset-0 z-20 bg-brand-red/10 pointer-events-none" />
                  )}
                  <div className="absolute bottom-1 right-1 z-20 h-2 w-2 rounded-full bg-black/60 backdrop-blur-sm border border-white/50" />
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="mt-2.5 px-2 py-1.5 rounded-xl bg-muted/30 border border-border/40 text-center">
          <p className="text-[11px] text-muted-foreground flex items-center justify-center gap-1.5">
            <Sparkles className="h-3 w-3 text-brand-red" />
            Special Focus Feature Session & Wellness Gallery
          </p>
        </div>
      )}
    </div>
  );
}

