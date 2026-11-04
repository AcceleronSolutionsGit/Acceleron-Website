import { Reveal } from "./Animations";
import { getAssetUrl } from "../../lib/assets";
import { motion } from "motion/react";

export type ValueItem = {
  title: string;
  description: string;
  img: string;
  alt: string;
};

export const VALUES_ITEMS: ValueItem[] = [
  {
    title: "Caring",
    description:
      "Demonstrating genuine care and empathy for our people, client goals, site safety protocols, and community well-being.",
    img: "/Values (2).png",
    alt: "Caring - People first in every decision",
  },
  {
    title: "Customer Centricity",
    description:
      "Placing long-term client objectives and operational success at the absolute center of every architecture we design.",
    img: "/Values (4).png",
    alt: "Customer Centricity - Your outcomes. Our responsibility",
  },
  {
    title: "Entrepreneurship",
    description:
      "Empowering proactive ownership, agility, and pragmatic problem-solving across all engagement levels.",
    img: "/Values (3).png",
    alt: "Entrepreneurship - Own it. Drive it. Deliver it",
  },
  {
    title: "Impact",
    description:
      "Focusing strictly on delivering tangible, high-value operational outcomes and measurable P&L results.",
    img: "/Values (1).png",
    alt: "Impact - Outcomes that outlast the project",
  },
  {
    title: "Integrity",
    description:
      "Upholding complete transparency, uncompromising business ethics, and mutual trust in every partnership.",
    img: "/Values (5).png",
    alt: "Integrity - Do right. Always",
  },
  {
    title: "Innovation",
    description:
      "Continuously harnessing cloud, predictive AI, and modern software paradigms to solve complex operational bottlenecks.",
    img: "/Values (6).png",
    alt: "Innovation - Think ahead. Build what's next",
  },
];

interface OurValuesSectionProps {
  className?: string;
  bg?: "default" | "muted" | "dark";
  kicker?: string;
  headline?: string;
  introCopy?: string;
}

export function OurValuesSection({
  className = "",
  bg = "default",
  kicker = "Guiding Principles",
  headline = "Our Values",
  introCopy = "The fundamental principles that shape our culture and guide every decision.",
}: OurValuesSectionProps) {
  return (
    <section
      className={`relative overflow-hidden py-24 ${
        bg === "muted"
          ? "bg-muted/30"
          : bg === "dark"
          ? "section-dark bg-background"
          : "bg-background"
      } ${className}`}
    >
      <div className="absolute inset-0 grid-lines opacity-[0.04]" />
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold mb-3">
              {kicker}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              {headline.includes("Principles") ? (
                <>
                  The People and Principles Behind{" "}
                  <span className="text-gradient">Every Client Partnership</span>
                </>
              ) : (
                headline
              )}
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              {introCopy}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {VALUES_ITEMS.map((val, idx) => (
            <Reveal key={val.title} delay={idx * 0.08} className="h-full">
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group relative rounded-3xl overflow-hidden border border-border/60 bg-card p-4 sm:p-5 shadow-soft hover:shadow-glow hover:border-brand-red/40 transition-all flex flex-col justify-between h-full"
              >
                {/* Visual Image Container */}
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 flex items-center justify-center p-2 mb-4 border border-border/40 group-hover:border-border/80 transition-colors">
                  <img
                    src={getAssetUrl(val.img)}
                    alt={val.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Text Details Below Image */}
                <div className="flex-1 flex flex-col justify-between pt-1">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 group-hover:text-brand-red transition-colors flex items-center gap-2.5">
                      <span className="text-xs font-bold text-brand-red uppercase tracking-wider px-2 py-0.5 rounded-full bg-brand-red/10 border border-brand-red/20 shrink-0">
                        0{idx + 1}
                      </span>
                      <span>{val.title}</span>
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {val.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
