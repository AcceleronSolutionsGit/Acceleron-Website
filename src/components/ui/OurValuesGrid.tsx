import { Reveal } from "./Animations";
import { getAssetUrl } from "../../lib/assets";
import { motion } from "motion/react";

const VALUES_ITEMS = [
  { img: "/Values (1).png", alt: "Our Value 1" },
  { img: "/Values (2).png", alt: "Our Value 2" },
  { img: "/Values (3).png", alt: "Our Value 3" },
  { img: "/Values (4).png", alt: "Our Value 4" },
  { img: "/Values (5).png", alt: "Our Value 5" },
  { img: "/Values (6).png", alt: "Our Value 6" },
];

export function OurValuesSection({ className = "", bg = "default" }: { className?: string; bg?: "default" | "muted" | "dark" }) {
  return (
    <section className={`relative overflow-hidden py-24 ${bg === "muted" ? "bg-muted/30" : bg === "dark" ? "section-dark bg-background" : "bg-background"} ${className}`}>
      <div className="absolute inset-0 grid-lines opacity-[0.04]" />
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold mb-3">Guiding Principles</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              The fundamental beliefs and principles that shape our culture, guide our decisions, and inspire everything we do.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {VALUES_ITEMS.map((val, idx) => (
            <Reveal key={idx} delay={idx * 0.08}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group relative rounded-3xl overflow-hidden border border-border/60 bg-card p-3 shadow-soft hover:shadow-glow hover:border-brand/40 transition-all"
              >
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 flex items-center justify-center">
                  <img
                    src={getAssetUrl(val.img)}
                    alt={val.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain p-1 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
