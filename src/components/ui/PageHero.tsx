import { type ReactNode } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Breadcrumbs, type BreadcrumbItem } from "./Breadcrumbs";
import { Reveal, WaveDivider } from "./Animations";
import { Link } from "@tanstack/react-router";

import { getAssetUrl } from "../../lib/assets";

type PageHeroProps = {
  title: string;
  subtitle: string;
  breadcrumbs: BreadcrumbItem[];
  image: string;
  ctaText?: string;
  ctaHref?: string;
  icon?: ReactNode;
  gradient?: string;
};

export function PageHero({
  title,
  subtitle,
  breadcrumbs,
  image,
  ctaText = "Talk to Our Experts",
  ctaHref = "/contact",
  icon,
  gradient = "from-[oklch(0.14_0.06_265)] to-[oklch(0.22_0.09_265)]",
}: PageHeroProps) {
  return (
    <>
      <section className="relative min-h-[58vh] flex items-end overflow-hidden bg-black">
        {/* Full-Bleed Background Image */}
        {image && (
          <div className="absolute inset-0">
            <img
              src={getAssetUrl(image)}
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-center opacity-90"
            />
          </div>
        )}

        {/* Top Navbar Vignette */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black/70 via-black/30 to-transparent z-[5] pointer-events-none" />

        {/* Light Mode Overlay */}
        <div className="dark:hidden absolute inset-0 bg-gradient-to-t from-[#0b132b]/90 via-[#0b132b]/50 to-transparent" />
        <div className="dark:hidden absolute inset-0 bg-gradient-to-r from-[#0b132b]/85 via-[#0b132b]/40 to-transparent" />

        {/* Dark Mode Overlay */}
        <div className="hidden dark:block absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-transparent" />
        <div className="hidden dark:block absolute inset-0 bg-gradient-to-r from-background/85 via-background/50 to-transparent" />
        <div className={`hidden dark:block absolute inset-0 bg-gradient-to-br ${gradient} opacity-20 mix-blend-multiply`} />

        {/* Banner Content Container */}
        <div className="relative z-10 container mx-auto px-6 max-w-7xl pt-36 pb-20">
          <Reveal>
            <div className="flex flex-col items-start max-w-4xl">
              {icon && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                  className="mb-6"
                >
                  {icon}
                </motion.div>
              )}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.05]">
                {title}
              </h1>
              <p className="text-lg md:text-xl text-white/85 leading-relaxed mb-10 max-w-2xl">
                {subtitle}
              </p>
              <Link
                to={ctaHref as any}
                className="btn btn-primary btn-lg"
              >
                {ctaText} <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Breadcrumbs Bar Below Banner */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <div className="w-full border-y border-border/50 bg-muted/40 py-3.5 backdrop-blur-md relative z-20">
          <div className="container mx-auto px-6 max-w-7xl">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        </div>
      )}
    </>
  );
}
