import { motion, useScroll, useTransform, useSpring, useMotionValue } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function useMouseParallax(strength = 20) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 60, damping: 20 });
  const sy = useSpring(y, { stiffness: 60, damping: 20 });
  useEffect(() => {
    const h = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * strength;
      const ny = (e.clientY / window.innerHeight - 0.5) * strength;
      x.set(nx); y.set(ny);
    };
    window.addEventListener("mousemove", h);
    return () => window.removeEventListener("mousemove", h);
  }, [strength, x, y]);
  return { x: sx, y: sy };
}

/* enhanced Reveal with direction variants */
export function Reveal({ children, delay = 0, y = 30, x = 0, scale = 1, className = "" }: { children: ReactNode; delay?: number; y?: number; x?: number; scale?: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y, x, scale }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function CharReveal({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={className} aria-label={text}>
      {text.split(" ").map((word, wi) => (
        <span key={wi} className="inline-block whitespace-nowrap">
          {word.split("").map((c, i) => (
            <motion.span
              key={i}
              className="inline-block"
              initial={{ opacity: 0, y: "0.6em", filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.2 + (wi * 5 + i) * 0.025, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {c}
            </motion.span>
          ))}
          <span className="inline-block">&nbsp;</span>
        </span>
      ))}
    </span>
  );
}

export function InitialLoader({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const t = setTimeout(onComplete, 2200);
    return () => clearTimeout(t);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-muted"
    >
      <motion.div
        animate={{ scale: [0.95, 1, 0.95], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <img src="/logo.png" alt="Acceleron Solutions" className="h-16 md:h-24 object-contain drop-shadow-xl dark:brightness-0 dark:invert" />
      </motion.div>
    </motion.div>
  );
}

export function MagneticButton({
  children, variant = "primary", href = "#", className = "",
}: { children: ReactNode; variant?: "primary" | "ghost"; href?: string; className?: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0); const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });
  const base = "group relative inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-medium transition-all duration-300";
  const styles = variant === "primary"
    ? "bg-red-gradient text-[#FFFFFF] shadow-red-glow hover:shadow-[0_28px_100px_-18px_rgba(222,30,36,0.75)] hover:scale-[1.02]"
    : "border border-border text-foreground hover:bg-muted/10 backdrop-blur hover:border-border";

  return (
    <motion.a
      ref={ref}
      href={href}
      className={`${base} ${styles} ${className}`}
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * 0.3);
        y.set((e.clientY - r.top - r.height / 2) * 0.3);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
    >
      {children}
    </motion.a>
  );
}

export function Counter({ to, suffix = "", duration = 2 }: { to: number; suffix?: string; duration?: number }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (t: number) => {
            const p = Math.min((t - start) / (duration * 1000), 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.floor(eased * to));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to, duration]);
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

/* ─────── wave section divider ─────── */

export function WaveDivider({ from = 'transparent', to = 'transparent', flip = false }: { from?: string; to?: string; flip?: boolean }) {
  const getBgClass = (type: string) => {
    if (type === "dark") return "wave-bg-dark";
    if (type === "white" || type === "background") return "wave-bg-white";
    if (type === "light" || type === "muted") return "wave-bg-light";
    return "wave-bg-transparent";
  };
  const getFillClass = (type: string) => {
    if (type === "dark") return "wave-fill-dark";
    if (type === "white" || type === "background") return "wave-fill-white";
    if (type === "light" || type === "muted") return "wave-fill-light";
    return "wave-fill-transparent";
  };

  return (
    <div className={`relative h-20 -mt-px ${getBgClass(from)}`} style={{ transform: flip ? "scaleY(-1)" : undefined }}>
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full">
        <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z" className={getFillClass(to)} />
      </svg>
    </div>
  );
}
