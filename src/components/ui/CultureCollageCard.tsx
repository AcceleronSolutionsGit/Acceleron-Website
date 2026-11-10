import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Maximize2, RotateCcw } from "lucide-react";
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
  const isShowingCover = activeImage === event.coverImage;

  return (
    <div
      className={`rounded-2xl border border-border/70 bg-card/80 backdrop-blur-sm p-2.5 sm:p-3 shadow-card ${className}`}
    >
      {/* Main Cover / Active Preview */}
      <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-muted/60 dark:bg-black/40 border border-border/50 group/main">
        <button
          type="button"
          onClick={() => onOpenLightbox?.(activeImage, event.title)}
          aria-label={`Open full-size photo for ${event.title}`}
          className="relative block w-full h-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeImage}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.99 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex items-center justify-center overflow-hidden"
            >
              <img
                src={getAssetUrl(activeImage)}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover blur-md opacity-25 scale-110 pointer-events-none select-none"
              />
              <img
                src={getAssetUrl(activeImage)}
                alt={`${event.title} photo`}
                loading="lazy"
                decoding="async"
                className="relative z-10 max-h-full max-w-full object-contain transition-transform duration-500 group-hover/main:scale-[1.03]"
              />
            </motion.div>
          </AnimatePresence>

          {/* Subtle hover tint & expand badge */}
          <div className="absolute inset-0 z-20 bg-black/0 group-hover/main:bg-black/15 transition-colors duration-200 pointer-events-none" />
          <span
            aria-hidden="true"
            className="absolute top-3 right-3 z-20 h-8 w-8 rounded-full bg-black/65 group-hover/main:bg-brand-red text-white backdrop-blur-md border border-white/20 flex items-center justify-center opacity-85 sm:opacity-0 sm:group-hover/main:opacity-100 transition-all duration-200 shadow-sm"
          >
            <Maximize2 className="h-3.5 w-3.5" />
          </span>
        </button>

        {/* Quick return to cover when previewing a thumbnail */}
        {!isShowingCover && (
          <button
            type="button"
            onClick={() => setActiveImage(event.coverImage)}
            className="absolute top-3 left-3 z-30 inline-flex items-center gap-1.5 rounded-full bg-black/70 hover:bg-brand-red text-white backdrop-blur-md border border-white/20 px-3 py-1 text-[11px] font-semibold transition-colors cursor-pointer shadow-sm"
          >
            <RotateCcw className="h-3 w-3" />
            <span>Cover</span>
          </button>
        )}
      </div>

      {/* Compact 4-Thumbnail Strip */}
      {event.thumbnails.length > 0 && (
        <div className="grid grid-cols-4 gap-2 sm:gap-2.5 mt-2.5">
          {event.thumbnails.map((thumbSrc, idx) => {
            const isSelected = activeImage === thumbSrc;
            return (
              <button
                key={thumbSrc}
                type="button"
                onClick={() => setActiveImage(thumbSrc)}
                aria-label={`Select photo ${idx + 1} for ${event.title}`}
                aria-pressed={isSelected}
                className={`relative aspect-[4/3] rounded-lg overflow-hidden border transition-all duration-200 group/thumb bg-muted/50 dark:bg-black/30 flex items-center justify-center cursor-pointer ${
                  isSelected
                    ? "border-brand-red ring-2 ring-brand-red/30 opacity-100"
                    : "border-border/60 hover:border-brand/60 opacity-75 hover:opacity-100"
                }`}
              >
                <img
                  src={getAssetUrl(thumbSrc)}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover blur-sm opacity-20 scale-110 pointer-events-none select-none"
                />
                <img
                  src={getAssetUrl(thumbSrc)}
                  alt={`${event.title} photo ${idx + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="relative z-10 max-h-full max-w-full object-contain transition-transform duration-300 group-hover/thumb:scale-105"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
