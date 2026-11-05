import { motion } from "motion/react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { OFFICIAL_HQ } from "../../constants/company";
import { getAssetUrl } from "../../lib/assets";

// Gainwell Group Logo constant
export const GAINWELL_GROUP_LOGO = "/Gainwell_Group_SVG_logo file.svg";

export function Footer() {
  return (
    <footer className="relative bg-background pt-16 sm:pt-24 pb-10 sm:pb-12 overflow-hidden text-foreground">
      <div className="absolute inset-0 grid-lines opacity-10" />
      <svg className="absolute inset-x-0 top-0 h-16 w-full" preserveAspectRatio="none" viewBox="0 0 1440 60">
        <motion.path
          initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 2 }}
          d="M0,30 Q360,60 720,30 T1440,30" fill="none" stroke="url(#g-footer)" strokeWidth="1.5" />
        <defs>
          <linearGradient id="g-footer" x1="0" x2="1">
            <stop offset="0" stopColor="oklch(0.82 0.14 210)" />
            <stop offset="0.5" stopColor="oklch(0.62 0.22 260)" />
            <stop offset="1" stopColor="oklch(0.62 0.22 300)" />
          </linearGradient>
        </defs>
      </svg>

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 mb-10 sm:mb-16">
          <div className="lg:col-span-4">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-block mb-6 cursor-pointer"
            >
              <img src="/logo.png" alt="Acceleron Solutions" className="h-16 md:h-20 object-contain dark:brightness-0 dark:invert opacity-90 transition-all hover:scale-105 hover:opacity-100 origin-left" />
            </Link>
            <p className="text-muted-foreground leading-relaxed max-w-sm text-sm">
              Engineering digital excellence through modern enterprise platforms, SAP S/4HANA, Applied AI, Zoho, and field safety systems. Part of the Gainwell Group.
            </p>
          </div>

          <div className="lg:col-span-5 flex lg:justify-center">
            <div>
              <h4 className="font-semibold text-foreground mb-6 text-sm uppercase tracking-wider text-brand-red">Contact Us</h4>
              <ul className="space-y-4 text-xs text-muted-foreground leading-relaxed">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-foreground block">{OFFICIAL_HQ.company}</span>
                    <span>{OFFICIAL_HQ.address}</span>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-brand shrink-0" />
                  <div className="flex flex-wrap items-center gap-x-2 font-medium">
                    <a href="tel:03335346200" className="hover:text-brand transition-colors">033-35346200</a>
                    <span>/</span>
                    <a href="tel:03335346222" className="hover:text-brand transition-colors">033-35346222</a>
                  </div>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-brand shrink-0" />
                  <a href={`mailto:${OFFICIAL_HQ.email}`} className="hover:text-brand transition-colors font-medium">
                    {OFFICIAL_HQ.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3 flex lg:justify-end">
            <div>
              {/* Gainwell Group Logo on top */}
              <div className="mb-4">
                <img
                  src={getAssetUrl(GAINWELL_GROUP_LOGO)}
                  alt="Gainwell Group"
                  className="h-12 md:h-14 w-auto object-contain rounded-md dark:brightness-0 dark:invert opacity-95 transition-all hover:scale-105 origin-left"
                />
              </div>
              {/* Text below logo */}
              <h4 className="font-semibold text-foreground mb-2 text-sm uppercase tracking-wider text-brand-red">
                Part of The Gainwell Group
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed max-w-xs">
                Backed by an 80-year industrial legacy of engineering excellence, heavy equipment, and global enterprise leadership.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Acceleron Solutions Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/contact" className="hover:text-foreground transition-colors">Contact Us</Link>
            <a href="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
