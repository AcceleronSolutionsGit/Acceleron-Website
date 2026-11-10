import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquareText, ArrowRight } from "lucide-react";
import { useLocation, useNavigate } from "@tanstack/react-router";

export function StickyContactCTA() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 280);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (location.pathname === "/contact") {
      const formEl = document.getElementById("form") || document.getElementById("contact-form");
      if (formEl) {
        formEl.scrollIntoView({ behavior: "smooth", block: "start" });
        const input = formEl.querySelector<HTMLInputElement>("input[name='Full_Name']");
        if (input) input.focus({ preventScroll: true });
      }
    } else {
      navigate({ to: "/contact", hash: "form" });
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.82, y: 22 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.82, y: 22 }}
          transition={{ type: "spring", stiffness: 380, damping: 26 }}
          className="fixed bottom-6 left-4 sm:left-auto sm:right-24 sm:bottom-8 z-40"
          style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
        >
          <a
            href="/contact#form"
            onClick={handleClick}
            className="group relative flex items-center gap-2 sm:gap-2.5 rounded-full bg-gradient-to-r from-red-600 via-rose-600 to-red-700 pl-3.5 pr-4 py-2.5 sm:pl-4 sm:pr-5 sm:py-3 text-xs sm:text-sm font-bold text-white shadow-[0_1px_0_0_rgba(255,255,255,0.35)_inset,0_12px_32px_-4px_rgba(222,30,36,0.5)] hover:shadow-[0_1px_0_0_rgba(255,255,255,0.45)_inset,0_16px_36px_-2px_rgba(222,30,36,0.65)] hover:scale-105 active:scale-95 border border-white/30 backdrop-blur-md transition-all duration-300 select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 overflow-hidden"
            aria-label="Let's Connect — Connect directly with our enterprise consultants"
            title="Let's Connect — Connect with Acceleron specialists"
          >
            {/* Shimmer sweep effect on hover */}
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full pointer-events-none" />

            {/* Glowing online status beacon */}
            {/* <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-80" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span> */}

            {/* Circular frosted icon capsule */}
            <span className="grid h-6 w-6 sm:h-7 sm:w-7 place-items-center rounded-full bg-white/20 border border-white/30 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
              <MessageSquareText className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white" />
            </span>

            {/* Action Label */}
            <span className="font-display font-bold tracking-wide text-white text-xs sm:text-sm drop-shadow-sm whitespace-nowrap">
              Let's Connect
            </span>

            {/* Arrow chip */}
            <span className="grid h-5 w-5 place-items-center rounded-full bg-white/15 text-white/90 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:bg-white/25">
              <ArrowRight className="h-3 w-3" />
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

