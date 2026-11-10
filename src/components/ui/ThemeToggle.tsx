import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { MoonStar, Sun } from "lucide-react";

/**
 * Tactile theme switcher button with duo-tone MoonStar / Sun icons
 * and SSR-safe hydration against the document root `.dark` class.
 */
export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // Ignore storage access errors in restricted browsing contexts
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="group relative inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200/90 bg-slate-100/75 text-slate-700 shadow-xs transition-all duration-200 hover:border-brand-red/35 hover:bg-red-50/70 hover:text-brand-red hover:shadow-sm active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red dark:border-slate-700/80 dark:bg-slate-800/90 dark:text-amber-400 dark:hover:border-amber-400/40 dark:hover:bg-slate-800 cursor-pointer"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="sun"
            initial={{ opacity: 0, rotate: -60, scale: 0.7 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 60, scale: 0.7 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="inline-flex items-center justify-center"
          >
            <Sun
              className="h-[18px] w-[18px] transition-transform duration-300 group-hover:rotate-45 [&_circle]:fill-current/20"
              strokeWidth={1.9}
              aria-hidden="true"
            />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ opacity: 0, rotate: 45, scale: 0.7 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -45, scale: 0.7 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="inline-flex items-center justify-center"
          >
            <MoonStar
              className="h-[18px] w-[18px] transition-transform duration-300 group-hover:-rotate-12 [&_path:first-of-type]:fill-current/15"
              strokeWidth={1.9}
              aria-hidden="true"
            />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}


