import { ArrowUpRight } from "lucide-react";
import { Breadcrumbs, type BreadcrumbItem } from "./Breadcrumbs";
import { Reveal } from "./Animations";
import { Link } from "@tanstack/react-router";

import { getAssetUrl } from "../../lib/assets";

type PageHeroProps = {
  badge?: string;
  title: string;
  subtitle: string;
  breadcrumbs: BreadcrumbItem[];
  image: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  gradient?: string;
  icon?: React.ReactNode;
  imagePosition?: string;
  contentMaxWidth?: string;
  split?: boolean;
  splitOnMobile?: boolean;
};

export function PageHero({
  badge,
  title,
  subtitle,
  breadcrumbs,
  image,
  ctaText = "Talk to Our Experts",
  ctaHref = "/contact",
  secondaryCtaText,
  secondaryCtaHref,
  gradient = "from-[oklch(0.14_0.06_265)] to-[oklch(0.22_0.09_265)]",
  imagePosition,
  contentMaxWidth,
  split = false,
  splitOnMobile = false,
}: PageHeroProps) {
  return (
    <>
      {/* Split Hero Layout (Left: Text, Right: Framed Image) - Prevents text overlaying faces on desktop and mobile */}
      {split ? (
        <section className="relative min-h-[58vh] lg:min-h-[64vh] flex items-center overflow-hidden bg-gradient-to-b from-[#060a16] via-[#091024] to-[#0b132b] text-white mt-16 lg:mt-[72px]">
          {/* Ambient Lighting & Glows */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand/15 via-transparent to-transparent pointer-events-none" />
          <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-black/40 to-transparent z-[5] pointer-events-none" />
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-15 mix-blend-multiply pointer-events-none`} />

          <div className="container mx-auto px-4 sm:px-6 max-w-7xl py-10 sm:py-14 lg:py-16 relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Mobile / Tablet Image (Rendered on top so text never covers faces) */}
              {image && (
                <div className="lg:hidden w-full">
                  <Reveal>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/15 ring-1 ring-white/10 aspect-[16/10] bg-black/60">
                      <img
                        src={getAssetUrl(image)}
                        alt={title}
                        loading="eager"
                        decoding="async"
                        className={`w-full h-full object-cover ${imagePosition || "object-[center_20%]"}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </Reveal>
                </div>
              )}

              {/* Text Column (Left on desktop, below image on mobile) */}
              <div className="lg:col-span-7 xl:col-span-6 flex flex-col items-start">
                <Reveal>
                  <div className="flex flex-col items-start">
                    {badge && (
                      <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 sm:px-3.5 sm:py-1 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-white/90 backdrop-blur-md mb-3 sm:mb-4 shadow-sm">
                        {badge}
                      </div>
                    )}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4 sm:mb-6 leading-[1.15] break-words">
                      {title}
                    </h1>
                    <p className="text-sm sm:text-base md:text-lg text-white/80 leading-relaxed mb-6 sm:mb-8 max-w-xl">
                      {subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                      {ctaHref?.startsWith("#") ? (
                        <a
                          href={ctaHref}
                          className="btn btn-primary btn-md sm:btn-lg w-full sm:w-auto justify-center"
                        >
                          {ctaText} <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
                        </a>
                      ) : (
                        <Link
                          to={((ctaHref === "/contact" || !ctaHref) ? "/contact" : ctaHref) as any}
                          hash={(ctaHref === "/contact" || !ctaHref) ? "form" : undefined}
                          className="btn btn-primary btn-md sm:btn-lg w-full sm:w-auto justify-center"
                        >
                          {ctaText} <ArrowUpRight className="h-4 w-4 sm:h-5 sm:w-5" />
                        </Link>
                      )}
                      {secondaryCtaText && (
                        secondaryCtaHref?.startsWith("#") ? (
                          <a
                            href={secondaryCtaHref}
                            className="btn btn-secondary btn-md sm:btn-lg bg-white/10 hover:bg-white/20 text-white border-white/25 backdrop-blur-md w-full sm:w-auto justify-center"
                          >
                            {secondaryCtaText}
                          </a>
                        ) : (
                          <Link
                            to={(secondaryCtaHref === "/contact" ? "/contact" : (secondaryCtaHref || "/services")) as any}
                            hash={secondaryCtaHref === "/contact" ? "form" : undefined}
                            className="btn btn-secondary btn-md sm:btn-lg bg-white/10 hover:bg-white/20 text-white border-white/25 backdrop-blur-md w-full sm:w-auto justify-center"
                          >
                            {secondaryCtaText}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Desktop Image Column (Right side, framed, crisp, no text overlay) */}
              {image && (
                <div className="hidden lg:block lg:col-span-5 xl:col-span-6">
                  <Reveal delay={0.15}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/15 ring-1 ring-white/10 aspect-[16/10] bg-black/60 group">
                      <img
                        src={getAssetUrl(image)}
                        alt={title}
                        loading="eager"
                        decoding="async"
                        className={`w-full h-full object-cover ${imagePosition || "object-[center_20%]"} group-hover:scale-105 transition-transform duration-700 ease-out`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </Reveal>
                </div>
              )}
            </div>
          </div>
        </section>
      ) : (
        <>
          {/* Mobile Split Layout (Image on top, Content below) */}
          {splitOnMobile && (
            <div className="lg:hidden w-full flex flex-col bg-background mt-16">
              {image && (
                <div className="relative w-full h-64 sm:h-80 overflow-hidden bg-black">
                  <img
                    src={getAssetUrl(image)}
                    alt=""
                    aria-hidden="true"
                    loading="eager"
                    decoding="async"
                    className={`h-full w-full object-cover ${imagePosition || "object-[center_20%]"}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/20" />
                </div>
              )}
              <div className="px-4 sm:px-6 pt-5 pb-8 sm:pb-12">
                <Reveal>
                  <div className="flex flex-col items-start">
                    {badge && (
                      <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-foreground mb-3 shadow-sm">
                        {badge}
                      </div>
                    )}
                    <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground mb-3 leading-[1.15] break-words">
                      {title}
                    </h1>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
                      {subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                      {ctaHref?.startsWith("#") ? (
                        <a
                          href={ctaHref}
                          className="btn btn-primary btn-md w-full sm:w-auto justify-center"
                        >
                          {ctaText} <ArrowUpRight className="h-4 w-4" />
                        </a>
                      ) : (
                        <Link
                          to={((ctaHref === "/contact" || !ctaHref) ? "/contact" : ctaHref) as any}
                          hash={(ctaHref === "/contact" || !ctaHref) ? "form" : undefined}
                          className="btn btn-primary btn-md w-full sm:w-auto justify-center"
                        >
                          {ctaText} <ArrowUpRight className="h-4 w-4" />
                        </Link>
                      )}
                      {secondaryCtaText && (
                        secondaryCtaHref?.startsWith("#") ? (
                          <a
                            href={secondaryCtaHref}
                            className="btn btn-secondary btn-md w-full sm:w-auto justify-center"
                          >
                            {secondaryCtaText}
                          </a>
                        ) : (
                          <Link
                            to={(secondaryCtaHref === "/contact" ? "/contact" : (secondaryCtaHref || "/services")) as any}
                            hash={secondaryCtaHref === "/contact" ? "form" : undefined}
                            className="btn btn-secondary btn-md w-full sm:w-auto justify-center"
                          >
                            {secondaryCtaText}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          )}

          {/* Standard / Desktop Hero */}
          <section className={`relative min-h-[58vh] ${splitOnMobile ? "hidden lg:flex" : "flex"} items-end overflow-hidden bg-black mt-16 lg:mt-[72px]`}>
            {/* Full-Bleed Background Image */}
            {image && (
              <div className="absolute inset-0">
                <img
                  src={getAssetUrl(image)}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  decoding="async"
                  className={`absolute inset-0 h-full w-full object-cover ${imagePosition || "object-center"} opacity-90`}
                />
              </div>
            )}

            {/* Top Navbar Vignette */}
            <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-black/30 to-transparent z-[5] pointer-events-none" />

            {/* Light Mode Overlay */}
            <div className="dark:hidden absolute inset-0 bg-gradient-to-t from-[#0b132b]/95 via-[#0b132b]/60 to-transparent" />
            <div className="dark:hidden absolute inset-0 bg-gradient-to-r from-[#0b132b] via-[#0b132b]/85 to-transparent" />

            {/* Dark Mode Overlay */}
            <div className="hidden dark:block absolute inset-0 bg-gradient-to-t from-background/95 via-background/70 to-transparent" />
            <div className="hidden dark:block absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent" />
            <div className={`hidden dark:block absolute inset-0 bg-gradient-to-br ${gradient} opacity-20 mix-blend-multiply`} />

            {/* Banner Content Container */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 max-w-7xl pt-14 sm:pt-20 pb-12 sm:pb-20">
              <Reveal>
                <div className={`flex flex-col items-start ${contentMaxWidth || "max-w-4xl"}`}>
                  {badge && (
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 sm:px-3.5 sm:py-1 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-white/90 backdrop-blur-md mb-3 sm:mb-4 shadow-sm">
                      {badge}
                    </div>
                  )}
                  <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4 sm:mb-6 leading-[1.1] break-words">
                    {title}
                  </h1>
                  <p className="text-base sm:text-lg md:text-xl text-white/85 leading-relaxed mb-6 sm:mb-10 max-w-2xl">
                    {subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
                    {ctaHref?.startsWith("#") ? (
                      <a
                        href={ctaHref}
                        className="btn btn-primary btn-lg w-full sm:w-auto justify-center"
                      >
                        {ctaText} <ArrowUpRight className="h-5 w-5" />
                      </a>
                    ) : (
                      <Link
                        to={((ctaHref === "/contact" || !ctaHref) ? "/contact" : ctaHref) as any}
                        hash={(ctaHref === "/contact" || !ctaHref) ? "form" : undefined}
                        className="btn btn-primary btn-lg w-full sm:w-auto justify-center"
                      >
                        {ctaText} <ArrowUpRight className="h-5 w-5" />
                      </Link>
                    )}
                    {secondaryCtaText && (
                      secondaryCtaHref?.startsWith("#") ? (
                        <a
                          href={secondaryCtaHref}
                          className="btn btn-secondary btn-lg bg-white/10 hover:bg-white/20 text-white border-white/25 backdrop-blur-md w-full sm:w-auto justify-center"
                        >
                          {secondaryCtaText}
                        </a>
                      ) : (
                        <Link
                          to={(secondaryCtaHref === "/contact" ? "/contact" : (secondaryCtaHref || "/services")) as any}
                          hash={secondaryCtaHref === "/contact" ? "form" : undefined}
                          className="btn btn-secondary btn-lg bg-white/10 hover:bg-white/20 text-white border-white/25 backdrop-blur-md w-full sm:w-auto justify-center"
                        >
                          {secondaryCtaText}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              </Reveal>
            </div>
          </section>
        </>
      )}

      {/* Breadcrumbs Bar Below Banner */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <div className="w-full border-y border-border/50 bg-muted/40 py-2.5 sm:py-3.5 backdrop-blur-md relative z-20">
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            <Breadcrumbs items={breadcrumbs} />
          </div>
        </div>
      )}
    </>
  );
}
