import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHolding, setIsHolding] = useState(false);

  const animFrameRef = useRef<number | null>(null);
  const holdTimerRef = useRef<NodeJS.Timeout | null>(null);
  const speedRef = useRef(14);
  const isHoldActionRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
      setVisible(scrollTop > 350);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      stopScrolling();
    };
  }, []);

  const stopScrolling = () => {
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = null;
    }
    if (holdTimerRef.current) {
      clearTimeout(holdTimerRef.current);
      holdTimerRef.current = null;
    }
    setIsHolding(false);
    speedRef.current = 14;
  };

  const startHoldScroll = () => {
    const scrollStep = () => {
      if (window.scrollY <= 0) {
        stopScrolling();
        return;
      }
      // Accelerate smoothly up to 45px per frame for a smooth continuous glide
      speedRef.current = Math.min(speedRef.current + 0.9, 45);
      window.scrollBy({ top: -speedRef.current, left: 0, behavior: "instant" });
      animFrameRef.current = requestAnimationFrame(scrollStep);
    };
    animFrameRef.current = requestAnimationFrame(scrollStep);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (e.button !== 0 && e.pointerType === "mouse") return;
    isHoldActionRef.current = false;
    speedRef.current = 14;

    // After 180ms hold, initiate continuous smooth scroll
    holdTimerRef.current = setTimeout(() => {
      isHoldActionRef.current = true;
      setIsHolding(true);
      startHoldScroll();
    }, 180);
  };

  const handlePointerUp = () => {
    const wasHold = isHoldActionRef.current;
    stopScrolling();

    // If it was a quick click rather than a hold, smooth scroll all the way to top
    if (!wasHold) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePointerCancel = () => {
    stopScrolling();
  };

  const handlePointerLeave = () => {
    stopScrolling();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Circular progress calculations (radius = 21, circumference ≈ 131.95)
  const radius = 21;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ type: "spring", stiffness: 350, damping: 25 }}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerLeave}
          onPointerCancel={handlePointerCancel}
          onKeyDown={handleKeyDown}
          aria-label="Scroll to top. Click to jump to top, click and hold to smoothly scroll up."
          title={isHolding ? "Scrolling up..." : "Click to go to top • Hold to scroll up"}
          className={`fixed bottom-6 right-4 sm:bottom-8 sm:right-8 z-50 group flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gradient-to-tr from-red-600 via-red-500 to-rose-600 text-white shadow-2xl shadow-red-600/45 hover:shadow-red-600/65 border-2 border-white/50 transition-all duration-300 select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-500 ${
            isHolding ? "scale-95 shadow-red-600/70" : "hover:scale-110 hover:-translate-y-0.5"
          }`}
          style={{ touchAction: "none" }}
        >
          {/* Circular SVG Progress Ring */}
          <svg className="absolute inset-0 h-full w-full -rotate-90 pointer-events-none p-0.5" viewBox="0 0 48 48">
            {/* Background track */}
            <circle
              cx="24"
              cy="24"
              r={radius}
              className="stroke-white/30 fill-none"
              strokeWidth="2.5"
            />
            {/* Active progress track */}
            <circle
              cx="24"
              cy="24"
              r={radius}
              className="stroke-white fill-none transition-[stroke-dashoffset] duration-150 ease-out"
              strokeWidth="2.5"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
            />
          </svg>

          {/* Up Arrow Icon */}
          <motion.div
            animate={
              isHolding
                ? { y: [-2, -6, -2] }
                : { y: 0 }
            }
            transition={
              isHolding
                ? { repeat: Infinity, duration: 0.6, ease: "easeInOut" }
                : { duration: 0.2 }
            }
            className="relative z-10 flex items-center justify-center"
          >
            <ArrowUp className="h-5 w-5 sm:h-6 sm:w-6 text-white transition-transform group-hover:-translate-y-0.5 drop-shadow-sm" />
          </motion.div>

          {/* Holding Ripple / Glow feedback */}
          {isHolding && (
            <span className="absolute inset-0 rounded-full animate-ping bg-white/25 pointer-events-none" />
          )}
        </motion.button>
      )}
    </AnimatePresence>
  );
}
