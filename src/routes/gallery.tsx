import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles, Filter } from "lucide-react";
import { PageHero } from "../components/ui/PageHero";
import { Reveal, WaveDivider } from "../components/ui/Animations";
import { GALLERY_ITEMS, type GalleryItem } from "../data/galleryData";
import { getAssetUrl } from "../lib/assets";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery & Tech Events — Acceleron Solutions" },
      { name: "description", content: "Explore event photographs, tech summits, hackathons, team culture, CSR activities, and celebrations at Acceleron Solutions." },
    ],
  }),
  component: GalleryPage,
});

const CATEGORIES = ["All", "Conferences", "Office", "Culture & Team", "CSR & Events"] as const;

function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = selectedCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <PageHero
        title="Events, Culture & Moments in Tech"
        subtitle="Inside Acceleron Solutions — showcasing our conferences, workshops, team celebrations, global offices, and community initiatives."
        breadcrumbs={[{ label: "Gallery" }]}
        image={getAssetUrl("https://images.unsplash.com/photo-1511578314322-379afb476865?q=75&w=1200&auto=format&fit=crop")}
        ctaText="Join Our Team"
        ctaHref="/careers"
      />

      {/* Category Filter Tabs */}
      <section className="section-dark container mx-auto px-6 max-w-7xl relative z-10 py-16">
        <Reveal>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div>
              <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold">Showcase</div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
                Explore Our <span className="text-gradient">Highlights</span>
              </h2>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 bg-muted/40 p-1.5 rounded-full border border-border">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setLightboxIndex(null);
                  }}
                  className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                    selectedCategory === cat
                      ? "bg-brand-gradient text-white shadow-glow"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Gallery Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item, idx) => (
            <Reveal key={item.id} delay={(idx % 6) * 0.05}>
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                onClick={() => setLightboxIndex(idx)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-border/60 bg-muted/20 shadow-soft hover:shadow-glow transition-all duration-300 break-inside-avoid"
              >
                <div className="relative overflow-hidden bg-muted/40">
                  <img
                    src={getAssetUrl(item.src)}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1 rounded-full bg-background/80 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-foreground border border-border/50">
                      {item.category}
                    </span>
                  </div>

                  {/* Hover Overlay Content */}
                  <div className="absolute bottom-0 inset-x-0 p-6 z-10 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold text-lg text-white">{item.title}</h3>
                      <Maximize2 className="h-4 w-4 text-cyan" />
                    </div>
                    {item.caption && (
                      <p className="text-xs text-white/80 line-clamp-2">{item.caption}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      <WaveDivider from="dark" to="white" />

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && currentItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-8"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 md:left-8 z-50 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 md:right-8 z-50 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Main Modal Content */}
            <div
              className="relative max-w-5xl max-h-[85vh] flex flex-col items-center overflow-hidden rounded-2xl border border-white/10 bg-black/60 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={getAssetUrl(currentItem.src)}
                alt={currentItem.alt}
                decoding="async"
                className="max-h-[70vh] w-auto max-w-full object-contain"
              />
              <div className="w-full p-6 bg-muted/90 backdrop-blur-md text-foreground border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-brand-red/10 text-brand-red mb-2">
                    {currentItem.category}
                  </span>
                  <h3 className="text-xl font-bold">{currentItem.title}</h3>
                  {currentItem.caption && (
                    <p className="text-sm text-muted-foreground mt-1">{currentItem.caption}</p>
                  )}
                </div>
                <div className="text-xs text-muted-foreground font-semibold tabular-nums shrink-0">
                  {lightboxIndex + 1} of {filteredItems.length}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
