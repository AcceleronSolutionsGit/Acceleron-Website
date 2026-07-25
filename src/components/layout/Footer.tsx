import { motion } from "motion/react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { LinkedInIcon, XTwitterIcon, GitHubIcon } from "../ui/Icons";
import { Link } from "@tanstack/react-router";
import { OFFICIAL_HQ } from "../../routes/about";

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-4">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-block mb-6 cursor-pointer"
            >
              <img src="/logo.png" alt="Acceleron Solutions" className="h-10 object-contain dark:brightness-0 dark:invert opacity-90 transition-opacity hover:opacity-100" />
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-sm text-sm">
              Engineering digital excellence through modern enterprise platforms, SAP S/4HANA, Salesforce, Applied AI, and field safety systems. Part of the Gainwell Group.
            </p>
            <div className="flex gap-4 mb-10">
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="h-10 w-10 flex items-center justify-center rounded-full bg-muted/50 text-muted-foreground hover:bg-brand hover:text-white transition-colors" aria-label="LinkedIn">
                <LinkedInIcon className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-muted/50 text-muted-foreground hover:bg-brand hover:text-white transition-colors" aria-label="Twitter">
                <XTwitterIcon className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full bg-muted/50 text-muted-foreground hover:bg-brand hover:text-white transition-colors" aria-label="GitHub">
                <GitHubIcon className="h-5 w-5" />
              </a>
            </div>

            <div className="mt-2">
              <div className="text-base font-semibold text-foreground">Get the Acceleron dispatch</div>
              <div className="text-xs text-muted-foreground mt-1 mb-4">Enterprise transformation, SAP updates, and AI insights.</div>
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3">
                <input type="email" placeholder="Email Address" className="w-full sm:w-auto min-w-0 flex-1 rounded-full border border-border bg-muted/5 px-5 py-3 text-sm outline-none placeholder:text-foreground/40 focus:border-cyan" />
                <button className="w-full sm:w-auto rounded-full bg-brand-gradient px-6 py-3 text-sm font-medium text-[#FFFFFF] shadow-glow transition-all hover:scale-105">Subscribe</button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-semibold text-foreground mb-6 text-sm uppercase tracking-wider text-brand-red">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-muted-foreground hover:text-brand transition-colors">About Us</Link></li>
              <li><Link to="/team" className="text-muted-foreground hover:text-brand transition-colors">Our Team</Link></li>
              <li><Link to="/gallery" className="text-muted-foreground hover:text-brand transition-colors">Gallery</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-brand transition-colors">Blog</Link></li>
              <li><Link to="/careers" className="text-muted-foreground hover:text-brand transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-brand transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-semibold text-foreground mb-6 text-sm uppercase tracking-wider text-brand-red">Services & Apps</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/services/sap" className="text-muted-foreground hover:text-brand transition-colors">SAP S/4HANA</Link></li>
              <li><Link to="/services/salesforce" className="text-muted-foreground hover:text-brand transition-colors">Salesforce</Link></li>
              <li><Link to="/services/zoho" className="text-muted-foreground hover:text-brand transition-colors">Zoho Suite</Link></li>
              <li><Link to="/products/suraksha" className="text-muted-foreground hover:text-brand transition-colors">Suraksha</Link></li>
              <li><Link to="/products/tyre-health" className="text-muted-foreground hover:text-brand transition-colors">Tyre Health</Link></li>
              <li><Link to="/products/qms" className="text-muted-foreground hover:text-brand transition-colors">QMS & CWMS</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="font-semibold text-foreground mb-6 text-sm uppercase tracking-wider text-brand-red">Headquarters</h4>
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

        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Acceleron Solutions Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
