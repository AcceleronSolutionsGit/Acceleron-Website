import { motion } from "motion/react";
import { Reveal } from "./Animations";
import type { ReactNode } from "react";

/* ═══════════════════ UI SCREENSHOT MOCKUP ═══════════════════ */

type MockupProps = {
  title: string;
  accentColor?: string;
  children: ReactNode;
};

export function UIMockup({ title, accentColor = "#4c5a8a", children }: MockupProps) {
  return (
    <div className="rounded-3xl border border-border bg-muted/[0.04] backdrop-blur-xl shadow-glow overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center justify-between border-b border-border px-5 py-3">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        </div>
        <div className="text-[10px] font-medium uppercase tracking-[0.25em] text-foreground/55">
          {title}
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: accentColor }} />
          <span className="text-[9px] uppercase tracking-widest text-foreground/45">live</span>
        </div>
      </div>
      {/* Content */}
      <div className="p-6">{children}</div>
    </div>
  );
}

/* ═══════════════════ PROCESS FLOW ═══════════════════ */

type FlowStep = {
  step: string;
  title: string;
  desc: string;
};

export function ProcessFlow({ steps, accentColor = "#4c5a8a" }: { steps: FlowStep[]; accentColor?: string }) {
  return (
    <div className="relative">
      {/* Connecting line */}
      <div className="pointer-events-none absolute left-0 right-0 top-8 hidden md:block">
        <svg viewBox="0 0 1200 20" preserveAspectRatio="none" className="h-5 w-full">
          <defs>
            <linearGradient id="flow-line-grad" x1="0" x2="1">
              <stop offset="0" stopColor={accentColor} stopOpacity="0.2" />
              <stop offset="0.5" stopColor={accentColor} stopOpacity="0.7" />
              <stop offset="1" stopColor={accentColor} stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <motion.line
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeOut" }}
            x1="60" y1="10" x2="1140" y2="10"
            stroke="url(#flow-line-grad)" strokeWidth="2"
            strokeDasharray="6 6"
          />
        </svg>
      </div>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-4">
        {steps.map((s, i) => (
          <Reveal key={s.step} delay={i * 0.1}>
            <motion.div
              whileHover="hover"
              className="group relative flex flex-col items-center"
            >
              <motion.div
                variants={{ hover: { scale: 1.12, y: -4 } }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="relative z-10 grid h-14 w-14 place-items-center rounded-full shadow-card"
                style={{ background: `linear-gradient(135deg, ${accentColor}, ${accentColor}cc)` }}
              >
                <span className="relative text-base font-bold text-white tabular-nums">{s.step}</span>
              </motion.div>
              <div className="mt-4 text-center">
                <div className="text-sm font-semibold text-foreground">{s.title}</div>
                <div className="mt-1 text-xs text-muted-foreground max-w-[180px] mx-auto">{s.desc}</div>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════ STAT METRIC CARD ═══════════════════ */

export function MetricBar({ label, value, color = "#4c5a8a" }: { label: string; value: number; color?: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-20 text-[10px] uppercase tracking-widest text-foreground/50">{label}</span>
      <div className="h-2 flex-1 rounded-full bg-muted/10 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.9 }}
          className="h-full rounded-full"
          style={{ background: color }}
        />
      </div>
      <span className="w-10 text-right text-[10px] text-foreground/50">{value}%</span>
    </div>
  );
}
