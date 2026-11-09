import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Maximize2, Sparkles, Heart } from "lucide-react";
import { getAssetUrl } from "../../lib/assets";
import type { CsrInitiative } from "../../data/csrData";

interface CsrCollageCardProps {
  initiative: CsrInitiative;
  onOpenLightbox?: (imageSrc: string, title: string) => void;
  className?: string;
}

export function CsrCollageCard({
  initiative,
  onOpenLightbox,
  className = "",
}: CsrCollageCardProps) {
  const defaultImage =
    initiative.coverImage ||
    (initiative.thumbnails && initiative.thumbnails[0]) ||
    "";
  const [activeImage, setActiveImage] = useState<string>(defaultImage);

  const thumbnails = initiative.thumbnails || [];
  const hasThumbnails = thumbnails.length > 0;

  return (
    <div
      className={`relative rounded-3xl border border-border/70 bg-card/60 backdrop-blur-md p-3.5 sm:p-4 shadow-elevated group ${className}`}
    >
      {/* Decorative corner accents matching Culture cards */}
      <div className="absolute -top-1 -right-1 w-14 h-14 border-t-2 border-r-2 border-brand-red/40 rounded-tr-3xl pointer-events-none z-20" />
      <div className="absolute -bottom-1 -left-1 w-14 h-14 border-b-2 border-l-2 border-brand/30 rounded-bl-3xl pointer-events-none z-20" />

      {/* 1. Main Large Cover / Selected Image */}
      <div
        onClick={() => onOpenLightbox?.(activeImage, initiative.title)}
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
              alt={`${initiative.title} photo`}
              loading="lazy"
              decoding="async"
              className="relative z-10 max-h-full max-w-full object-contain transition-transform duration-500 group-hover/main:scale-105 drop-shadow-md"
            />
          </motion.div>
        </AnimatePresence>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/25 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 z-20 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-red/90 text-white backdrop-blur-md px-3 py-1 text-[11px] font-bold uppercase tracking-wider shadow-md">
            <Heart className="h-3 w-3 fill-white" />
            {initiative.kicker}
          </span>
        </div>

        {/* Hover Click to Expand Button */}
        <div className="absolute top-3 right-3 z-20 opacity-90 sm:opacity-0 sm:group-hover/main:opacity-100 transition-opacity duration-300">
          <button
            type="button"
            aria-label="View full image"
            onClick={(e) => {
              e.stopPropagation();
              onOpenLightbox?.(activeImage, initiative.title);
            }}
            className="h-8 w-8 rounded-full bg-black/70 hover:bg-brand-red text-white backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-md"
          >
            <Maximize2 className="h-4 w-4" />
          </button>
        </div>

        {/* Bottom Title Bar overlay on large image */}
        <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-none">
          <p className="text-xs sm:text-sm font-medium text-white/95 truncate drop-shadow-md pr-2">
            {initiative.title}
          </p>
          {initiative.date && (
            <span className="text-[11px] font-semibold text-brand-red/90 bg-white/95 dark:bg-black/80 px-2 py-0.5 rounded-md shrink-0 shadow-sm">
              {initiative.date}
            </span>
          )}
        </div>
      </div>

      {/* 2. Bottom 4 Images Row (Collage Thumbnails) */}
      {hasThumbnails ? (
        <div className="mt-3">
          <div className="flex items-center justify-between mb-2 px-1">
            <span className="text-[11px] uppercase tracking-wider font-bold text-muted-foreground">
              Photo Gallery ({thumbnails.length + 1} Photos)
            </span>
            {activeImage !== initiative.coverImage && (
              <button
                type="button"
                onClick={() =>
                  initiative.coverImage && setActiveImage(initiative.coverImage)
                }
                className="text-[11px] text-brand hover:text-brand-red transition-colors font-semibold"
              >
                Reset to Cover
              </button>
            )}
          </div>

          <div
            className={`grid gap-2 sm:gap-3 ${
              thumbnails.length >= 4 ? "grid-cols-2 sm:grid-cols-4" : thumbnails.length === 3 ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-2"
            }`}
          >
            {thumbnails.slice(0, 4).map((thumbSrc, idx) => {
              const isSelected = activeImage === thumbSrc;
              return (
                <button
                  key={idx}
                  type="button"
                  aria-label={`View photo ${idx + 1}`}
                  onClick={() => setActiveImage(thumbSrc)}
                  className={`relative aspect-[4/3] rounded-xl overflow-hidden bg-black/30 border-2 transition-all duration-200 group/thumb flex items-center justify-center ${
                    isSelected
                      ? "border-brand-red shadow-glow scale-[1.03] ring-2 ring-brand-red/40"
                      : "border-border/60 hover:border-brand-red/70 opacity-80 hover:opacity-100 hover:scale-[1.02]"
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
                    alt={`${initiative.title} highlight ${idx + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="relative z-10 max-h-full max-w-full object-contain transition-transform duration-300 group-hover/thumb:scale-105"
                  />
                  {isSelected && (
                    <div className="absolute inset-0 z-20 bg-brand-red/15 pointer-events-none" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="mt-2.5 px-1 flex items-center justify-between text-[11px] text-muted-foreground font-medium">
          <span className="flex items-center gap-1.5">
            <Sparkles className="h-3 w-3 text-brand-red" />
            Acceleron Cares Initiative Spotlight
          </span>
          <button
            type="button"
            onClick={() => onOpenLightbox?.(activeImage, initiative.title)}
            className="text-brand hover:text-brand-red font-semibold transition-colors flex items-center gap-1"
          >
            <Maximize2 className="h-3 w-3" />
            <span>Click to expand</span>
          </button>
        </div>
      )}
    </div>
  );
}

