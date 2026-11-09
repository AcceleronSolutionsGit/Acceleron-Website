import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, ArrowRight } from "lucide-react";
import { useLocation, useNavigate } from "@tanstack/react-router";

export function StickyContactCTA() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 250);
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
          initial={{ opacity: 0, scale: 0.85, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 20 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          className="fixed bottom-6 left-4 sm:left-auto sm:right-24 sm:bottom-8 z-40"
        >
          <a
            href="/contact#form"
            onClick={handleClick}
            className="group flex items-center gap-2.5 rounded-full bg-gradient-to-r from-red-600 via-red-600 to-rose-600 px-5 py-3 sm:px-6 sm:py-3.5 text-xs sm:text-sm font-bold text-white shadow-xl shadow-red-600/40 hover:from-red-500 hover:to-rose-500 hover:shadow-red-600/60 hover:scale-105 active:scale-95 border border-white/25 backdrop-blur-md transition-all duration-200 select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500"
            aria-label="Get in touch with Acceleron solutions experts"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
            </span>
            <MessageSquare className="h-4 w-4 text-white shrink-0 group-hover:scale-110 transition-transform" />
            <span className="tracking-wide">Get in touch</span>
            <ArrowRight className="h-3.5 w-3.5 text-white/90 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

