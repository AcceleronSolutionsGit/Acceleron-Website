import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Sparkles,
  MapPin,
  Building2,
  Image as ImageIcon,
  CheckCircle2,
  Phone,
  Mail,
} from "lucide-react";
import { PageHero } from "../components/ui/PageHero";
import { Reveal, WaveDivider } from "../components/ui/Animations";
import { GALLERY_ITEMS, type GalleryItem, type GalleryCategory } from "../data/galleryData";
import { getAssetUrl } from "../lib/assets";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Corporate Gallery & Culture — Acceleron Solutions" },
      {
        name: "description",
        content:
          "A visual look inside our state-of-the-art delivery centers, collaborative engineering workspaces, team events, and office locations.",
      },
    ],
  }),
  component: GalleryPage,
});

const CATEGORIES: Array<"All Photos" | GalleryCategory> = [
  "All Photos",
  "Kolkata HQ (Salt Lake Sector V)",
  "Delhi NCR Office (Janpath)",
  "Team Culture & Events",
  "Technology Summits",
];

const DELIVERY_HUBS = [
  {
    name: "Kolkata HQ (Headquarters)",
    location: "Salt Lake Sector V",
    address: "3rd Floor, STPI IT Park, Sector V, Salt Lake, Kolkata 700091",
    desc: "Primary software development center, enterprise SAP center of excellence, and customer demo theater.",
    phone: "033 3534 6200 / 033 3534 6222",
    email: "enquiry@acceleronsolutions.io",
    highlight: "Primary Center of Excellence",
  },
  {
    name: "Delhi NCR Executive Office",
    location: "Janpath, Central Delhi",
    address: "801-802 Kailash Building, 26 KG Marg, Janpath, Central Delhi 110001",
    desc: "Executive strategic briefing center, North India client engagement hub, and enterprise cloud advisory.",
    phone: "033 3534 6222",
    email: "enquiry@acceleronsolutions.io",
    highlight: "Executive Briefing Center",
  },
];

function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Photos");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    selectedCategory === "All Photos"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* PAGE HEADER & INTRODUCTION */}
      <PageHero
        badge="VISUAL SHOWCASE • WORKSPACES &amp; CULTURE"
        title="Corporate Gallery &amp; Culture"
        subtitle="A visual look inside our state-of-the-art delivery centers, collaborative engineering workspaces, team events, and office locations."
        breadcrumbs={[{ label: "Gallery" }]}
        image={getAssetUrl("/Office Entrace Photo.JPG")}
        ctaText="Explore Delivery Hubs"
        ctaHref="#delivery-hubs"
        secondaryCtaText="Browse Photos"
        secondaryCtaHref="#gallery-grid"
      />

      {/* DELIVERY HUB LOCATIONS HIGHLIGHT SECTION */}
      <section
        id="delivery-hubs"
        className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-12 sm:py-16 border-b border-border/60"
      >
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand mb-3">
              Physical Presence &amp; Infrastructure
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Our Enterprise <span className="text-gradient">Delivery Hubs</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Equipped with high-security infrastructure, zero-trust cloud connectivity, and state-of-the-art collaborative workspaces.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {DELIVERY_HUBS.map((hub, idx) => (
            <Reveal key={hub.name} delay={idx * 0.1}>
              <div className="rounded-3xl border border-border/80 bg-gradient-to-br from-card via-card to-brand/5 p-6 sm:p-8 h-full flex flex-col justify-between shadow-card hover:border-brand/40 transition-all">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-red/10 text-brand-red border border-brand-red/20 px-3 py-1 rounded-full">
                      {hub.highlight}
                    </span>
                    <div className="h-9 w-9 rounded-xl bg-muted/60 flex items-center justify-center text-brand">
                      <Building2 className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                    {hub.name}
                  </h3>

                  <div className="flex items-start gap-2.5 text-xs text-muted-foreground font-medium">
                    <MapPin className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{hub.address}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-2 border-t border-border/50">
                    {hub.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-border/50 flex flex-wrap items-center justify-between gap-4 text-xs">
                  <div className="flex items-center gap-1.5 text-muted-foreground font-semibold">
                    <Phone className="h-3.5 w-3.5 text-brand" />
                    <span>{hub.phone}</span>
                  </div>
                  <a
                    href={`mailto:${hub.email}`}
                    className="text-brand font-bold hover:text-brand-red transition-colors flex items-center gap-1"
                  >
                    <Mail className="h-3.5 w-3.5" />
                    <span>{hub.email}</span>
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* GALLERY FILTER TABS & PHOTO GRID */}
      <section
        id="gallery-grid"
        className="section-dark container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 sm:py-24 border-b border-border/60"
      >
        <Reveal>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12">
            <div>
              <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold">
                Showcase &amp; Moments
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
                Explore Our <span className="text-gradient">Visual Highlights</span>
              </h2>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setLightboxIndex(null);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                    selectedCategory === cat
                      ? "bg-brand-gradient text-white shadow-glow"
                      : "bg-muted/40 text-muted-foreground hover:bg-muted/70 hover:text-foreground border border-border/60"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Gallery Grid - 2 columns on mobile for iOS and Android */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-5 md:gap-6">
          {filteredItems.map((item, idx) => (
            <Reveal key={item.id} delay={(idx % 6) * 0.05} className="h-full">
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                onClick={() => setLightboxIndex(idx)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl border border-border/80 bg-card p-2.5 sm:p-4 shadow-card hover:border-brand/50 transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden mb-2.5 sm:mb-3 bg-muted/40 flex items-center justify-center">
                    {/* Ambient blurred backdrop prevents blank space while avoiding crop */}
                    <img
                      src={getAssetUrl(item.src)}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-cover blur-md opacity-25 scale-110 pointer-events-none select-none"
                    />
                    {/* Uncropped foreground image */}
                    <img
                      src={getAssetUrl(item.src)}
                      alt={item.alt}
                      loading="lazy"
                      decoding="async"
                      className="relative z-10 max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2 sm:p-3">
                      <div className="flex items-center justify-between w-full text-white">
                        <span className="text-[9px] sm:text-[11px] font-semibold bg-brand px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full">
                          Enlarge
                        </span>
                        <Maximize2 className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1 sm:mb-1.5">
                    <span className="text-primary dark:text-cyan-400 truncate pr-1">{item.category}</span>
                  </div>

                  <h3 className="font-bold text-xs sm:text-base text-foreground group-hover:text-brand transition-colors mb-1 line-clamp-1 sm:line-clamp-none">
                    {item.title}
                  </h3>

                  {item.caption && (
                    <p className="text-[10px] sm:text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                      {item.caption}
                    </p>
                  )}
                </div>

                {item.location && (
                  <div className="pt-2 sm:pt-3 mt-2 sm:mt-3 border-t border-border/40 flex items-center gap-1 text-[10px] sm:text-[11px] text-muted-foreground font-medium">
                    <MapPin className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-brand shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </div>
                )}
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* LIGHTBOX / FULLSCREEN MODAL */}
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
              className="absolute top-4 right-4 z-50 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
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
              className="absolute left-4 z-50 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
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
              className="absolute right-4 z-50 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Modal Content */}
            <div
              className="relative max-h-[90vh] max-w-5xl rounded-3xl overflow-hidden bg-card border border-border shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative overflow-hidden bg-black flex items-center justify-center max-h-[70vh]">
                <img
                  src={getAssetUrl(currentItem.src)}
                  alt={currentItem.alt}
                  className="max-h-[70vh] w-auto object-contain"
                />
              </div>
              <div className="p-6 bg-card">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand">
                    {currentItem.category}
                  </span>
                  {currentItem.location && (
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-brand-red" />
                      {currentItem.location}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {currentItem.title}
                </h3>
                {currentItem.caption && (
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {currentItem.caption}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <WaveDivider from="dark" to="white" />
    </main>
  );
}
