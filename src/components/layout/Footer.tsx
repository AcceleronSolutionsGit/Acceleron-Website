import { motion } from "motion/react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { OFFICIAL_HQ } from "../../constants/company";

export function Footer() {
  return (
    <footer className="relative bg-background pt-24 pb-12 overflow-hidden text-foreground">
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

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-8 mb-16">
          <div>
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

          <div className="flex md:justify-end">
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
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Acceleron Solutions Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <Link to="/contact" className="hover:text-foreground transition-colors">Contact Us</Link>
            <Link to="/privacy-policy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
