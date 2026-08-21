import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, ArrowUpRight, Sparkles, Cpu, Cloud, ShieldCheck, LineChart, Boxes,
  Blocks, Rocket, Compass, Layers, Code2, Wrench, HeartPulse, ShoppingBag, Truck,
  GraduationCap, Landmark, Banknote, HardHat, Factory, Flame, MapPin, Mail, Phone,
  ChevronDown, ChevronLeft, ChevronRight, Calendar, Menu, X, Play, Zap, Globe, Users, Award, Briefcase, Database, Palette,
  ArrowDown, Star, TrendingUp, Building2, Lightbulb, Target, Sun, Moon,
} from "lucide-react";

import { LinkedInIcon, XTwitterIcon, GitHubIcon, InstagramIcon, SAPLogo, ZohoLogo, AWSLogo, MicrosoftLogo, DockerLogo, KubernetesLogo, PythonLogo, NodejsLogo, ReactLogo, NextjsLogo, OpenAILogo, SnowflakeLogo, FlutterLogo, PowerBILogo, DatabricksLogo } from '../components/ui/Icons';
import { ThemeToggle } from '../components/ui/ThemeToggle';
import { useMouseParallax, Reveal, CharReveal, InitialLoader, MagneticButton, Counter, WaveDivider } from '../components/ui/Animations';
import { HomeContactForm } from '../components/ui/HomeContactForm';
import { Nav, PRODUCTS } from '../components/layout/Nav';
import { getAssetUrl } from '../lib/assets';
import { WhyChooseUs, CSRSection, GlobalPresence, InsightsSection } from '../components/home/HomeSections';
import { OurValuesSection } from '../components/ui/OurValuesGrid';

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Acceleron Solutions — Engineering Digital Excellence" },
      { name: "description", content: "Enterprise transformation through SAP, AI, Zoho, and intelligent digital platforms. Built for scale. Designed for humans." },
    ],
  }),
  component: Home,
});

/* ═══════════════════ HERO ═══════════════════ */

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1, 0]);

  return (
    <section ref={ref} id="top" className="relative min-h-[100svh] overflow-hidden bg-black">
      {/* Background Video Looping */}
      <div className="absolute inset-0 z-0">
        <video
          src={getAssetUrl("/Hero_BG_Video.mp4")}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark scrim for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/90 to-transparent" />
      </div>

      {/* Floating ambient decorative orbs */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-brand-red/10 blur-[120px] animate-float-gentle" />
        <div className="absolute top-1/3 right-10 h-56 w-56 rounded-full bg-blue-500/8 blur-[100px] animate-float-gentle" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-20 left-1/4 h-40 w-40 rounded-full bg-violet-500/6 blur-[90px] animate-float-gentle" style={{ animationDelay: '8s' }} />
      </div>

      {/* Text overlay & CTAs */}
      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative z-10 mx-auto flex min-h-[100svh] w-full items-center px-4 sm:px-6 pt-24 sm:pt-28 pb-12"
      >
        <div className="mx-auto w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.25em] text-white/90 backdrop-blur-sm shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
            </span>
            Engineering Digital Excellence
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 sm:mt-7 max-w-3xl text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight text-white"
            style={{ textShadow: '0 2px 20px rgba(0,0,0,0.3)' }}
          >
            Built on Legacy.{" "}
            <span className="bg-gradient-to-r from-white via-white/90 to-red-400 bg-clip-text text-transparent drop-shadow-sm">
              Driven by Innovation.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-4 sm:mt-6 max-w-xl text-sm sm:text-base md:text-lg leading-relaxed text-white/75"
            style={{ textShadow: '0 1px 8px rgba(0,0,0,0.2)' }}
          >
            From the Gainwell Group — powering mining, manufacturing, and enterprise transformation with SAP, Zoho, AI, and custom-built digital platforms.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
            className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-red-600 to-red-500 px-6 sm:px-7 py-3.5 sm:py-4 text-sm font-semibold text-white shadow-lg shadow-red-600/25 transition-all hover:shadow-red-600/40 hover:scale-105 border border-red-400/20"
            >
              Start Your Journey
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <Link
              to="/services"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-6 sm:px-7 py-3.5 sm:py-4 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/30"
            >
              <span className="grid h-6 w-6 place-items-center rounded-full border border-white/25 transition-transform group-hover:scale-110">
                <Layers className="h-3 w-3 text-white/80" />
              </span>
              Explore Services
            </Link>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40 font-medium">Scroll</span>
        <div className="h-8 w-5 rounded-full border border-white/25 flex justify-center pt-1.5">
          <motion.div
            className="h-1.5 w-1.5 rounded-full bg-white/60"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}

/* ═══════════════════ ABOUT TEASER ═══════════════════ */

function AboutTeaser() {
  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-24 border-b border-border/50">
      <div className="absolute inset-0 grid-lines opacity-[0.04]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold">About Acceleron Solutions</div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-foreground leading-[1.15]">
                Empowering Enterprises with <span className="text-gradient">Digital Innovation</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
                As the technology arm of the Gainwell Group, Acceleron Solutions delivers bespoke SAP consulting, full-stack Zoho business automation, predictive AI systems, and custom enterprise software built for scale.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-2 pb-2">
                <div className="rounded-2xl border border-border/60 bg-muted/20 p-4 border-l-2 border-l-brand-red/60 hover:-translate-y-0.5 hover:shadow-soft transition-all duration-300">
                  <div className="text-lg sm:text-2xl font-black text-brand-red">Kolkata & Delhi</div>
                  <div className="text-xs text-muted-foreground mt-1 font-medium">Delivery Hubs</div>
                </div>
                <div className="rounded-2xl border border-border/60 bg-muted/20 p-4 border-l-2 border-l-brand-red/60 hover:-translate-y-0.5 hover:shadow-soft transition-all duration-300">
                  <div className="text-lg sm:text-2xl font-black text-brand-red">Full-Stack</div>
                  <div className="text-xs text-muted-foreground mt-1 font-medium">Enterprise Tech</div>
                </div>
                <div className="rounded-2xl border border-border/60 bg-muted/20 p-4 border-l-2 border-l-brand-red/60 hover:-translate-y-0.5 hover:shadow-soft transition-all duration-300">
                  <div className="text-lg sm:text-2xl font-black text-brand-red">100%</div>
                  <div className="text-xs text-muted-foreground mt-1 font-medium">Outcome Driven</div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-brand-gradient px-8 py-3.5 sm:py-4 text-sm font-semibold text-white shadow-glow transition-all hover:scale-105 hover:shadow-red-glow w-full sm:w-auto"
                >
                  Know More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-border/60 bg-muted/20 shadow-elevated p-2 group">
                <div className="absolute -top-1 -right-1 w-16 h-16 border-t-2 border-r-2 border-brand-red/40 rounded-tr-3xl pointer-events-none z-10" />
                <div className="absolute -bottom-1 -left-1 w-16 h-16 border-b-2 border-l-2 border-brand/30 rounded-bl-3xl pointer-events-none z-10" />
                <img
                  src={getAssetUrl("/Inaguration Photo.JPG")}
                  alt="Acceleron Solutions"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[260px] sm:h-[340px] md:h-[400px] object-cover rounded-xl sm:rounded-2xl transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════ SERVICES ═══════════════════ */

const SERVICES = [
  { icon: Database, t: "SAP", d: "S/4HANA, BTP, RISE — end-to-end SAP transformation for the intelligent enterprise.", url: "/services/sap", img: "/SAP_Homepage.jpg" },
  { icon: LineChart, t: "Analytics & AI", d: "From dashboards to generative agents. Turn data into direction.", url: "/services/analytics", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=75&w=600&auto=format&fit=crop" },
  { icon: Blocks, t: "Zoho Suite", d: "Rapid business apps across finance, ops, CX — deployed in weeks, not quarters.", url: "/services/zoho", img: "/ZOHO_LOGO.png" },
  { icon: Code2, t: "Software Development", d: "Custom platforms in React, Node, Flutter — enterprise-grade code, product-grade craft.", url: "/services/software-development", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=75&w=600&auto=format&fit=crop" },
  { icon: Cpu, t: "IT Infrastructure", d: "Cloud, hybrid, on-prem. AWS, Azure, Kubernetes — resilient by design.", url: "/services/it-infrastructure", img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=75&w=600&auto=format&fit=crop" },
  { icon: Briefcase, t: "CXO Advisory", d: "Board-level guidance on tech strategy, M&A, and digital operating models.", url: "/services/cxo-advisory", img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=75&w=600&auto=format&fit=crop" },
  { icon: ShieldCheck, t: "Cyber Security", d: "Zero-trust architectures, SOC modernization, and compliance you can prove.", url: "/services/cyber-security", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=75&w=600&auto=format&fit=crop" },
];

function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-background py-20 sm:py-28 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgb(58_73_127/0.06),transparent_70%)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold">Services</div>
        </Reveal>
        <div className="mt-4 sm:mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal delay={0.1}>
            <h2 className="max-w-3xl text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight">
              A full-stack partner for the <span className="text-gradient">intelligent enterprise.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="max-w-md text-sm sm:text-base leading-relaxed text-muted-foreground">Comprehensive enterprise practices from strategy through steady-state operations.</p>
          </Reveal>
        </div>

        <div className="mt-12 sm:mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.06} className={i === 0 ? "lg:col-span-2" : ""}>
              <Link to={s.url as any} className="group relative overflow-hidden rounded-3xl h-[300px] sm:h-[380px] block cursor-pointer border border-transparent hover:border-white/10 transition-colors duration-500">
                {s.img.endsWith(".png") || s.img.includes("LOGO") ? (
                  <div className="absolute inset-0 flex items-center justify-center p-8 z-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(225,29,72,0.15),transparent_70%)]" />
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(33,47,96,0.2),transparent_60%)]" />
                    <div className="relative bg-white/95 backdrop-blur-md px-7 py-5 rounded-2xl shadow-2xl border border-white/20 transition-all duration-700 group-hover:scale-105 group-hover:bg-white group-hover:shadow-red-500/20 mb-12">
                      <img src={getAssetUrl(s.img)} alt={s.t} className="h-12 sm:h-16 w-auto max-w-[200px] sm:max-w-[240px] object-contain" />
                    </div>
                  </div>
                ) : (
                  <img src={getAssetUrl(s.img)} alt={s.t} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/5 transition-opacity duration-500 group-hover:opacity-100 opacity-75" />

                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end z-10">
                  <div className="flex items-center gap-3 mb-3 sm:mb-4 transform transition-transform duration-300 group-hover:-translate-y-2">
                    <div className="h-10 w-10 bg-white/10 backdrop-blur-xl rounded-xl flex items-center justify-center text-white border border-white/20 group-hover:bg-white/20 group-hover:shadow-[0_0_20px_-4px_rgba(255,255,255,0.3)] transition-all duration-300">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">{s.t}</h3>
                  </div>

                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-in-out">
                    <div className="overflow-hidden">
                      <p className="text-white/80 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">{s.d}</p>
                      <div className="flex items-center gap-2 font-semibold text-xs sm:text-sm transition-all duration-300 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 text-red-300">
                        Learn more <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════ TECH STACK ═══════════════════ */

const TECH_ITEMS = [
  { n: "SAP", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg", Logo: SAPLogo, color: "#0FAAFF", projects: "42", desc: "Core ERP implementations for global manufacturing and retail clients." },
  { n: "AWS", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", Logo: AWSLogo, color: "#FF9900", projects: "120+", desc: "Cloud architecture, serverless, and resilient data lakes." },
  { n: "Azure", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg", Logo: MicrosoftLogo, color: "#0089D6", projects: "84", desc: "Hybrid cloud solutions and enterprise AI integrations." },
  { n: "Docker", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg", Logo: DockerLogo, color: "#2496ED", projects: "180+", desc: "Containerized microservices running at global scale." },
  { n: "Kubernetes", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg", Logo: KubernetesLogo, color: "#326CE5", projects: "65", desc: "Orchestrating high-availability clusters for critical workloads." },
  { n: "Python", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", Logo: PythonLogo, color: "#3776AB", projects: "210+", desc: "Backend services, ML pipelines, and custom AI agents." },
  { n: "Node.js", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg", Logo: NodejsLogo, color: "#8CC84B", projects: "185", desc: "High-performance APIs and real-time enterprise event buses." },
  { n: "React", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", Logo: ReactLogo, color: "#61DAFB", projects: "140+", desc: "Complex frontends and mission-critical enterprise dashboards." },
  { n: "Next.js", Logo: NextjsLogo, color: "#888888", projects: "72", desc: "High-conversion commerce and headless CMS architectures." },
  { n: "Flutter", iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg", Logo: FlutterLogo, color: "#02569B", projects: "48", desc: "Cross-platform mobile apps for field service and B2B workflows." },
  { n: "OpenAI", Logo: OpenAILogo, color: "#888888", projects: "35", desc: "Generative AI, RAG, and copilot integrations in production." },
  { n: "Power BI", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg", Logo: PowerBILogo, color: "#F2C811", projects: "94", desc: "Business intelligence and board-level reporting dashboards." },
  { n: "Snowflake", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Snowflake_Logo.svg", Logo: SnowflakeLogo, color: "#29B5E8", projects: "28", desc: "Enterprise data warehousing and unified analytics." },
  { n: "Databricks", iconUrl: "https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png", Logo: DatabricksLogo, color: "#FF3621", projects: "19", desc: "Unified analytics platforms for massive-scale data processing." },
];

function TechStack() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [rotation, setRotation] = useState(0);
  const animRef = useRef<number | null>(null);
  const isPaused = useRef(false);
  const RADIUS = 280;
  const COUNT = TECH_ITEMS.length;

  useEffect(() => {
    let lastTime = performance.now();
    const speed = 0.008;
    const tick = (now: number) => {
      const dt = now - lastTime;
      lastTime = now;
      if (!isPaused.current) {
        setRotation((r) => (r - speed * dt) % 360);
      }
      animRef.current = requestAnimationFrame(tick);
    };
    animRef.current = requestAnimationFrame(tick);
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, []);

  const normalizedRotation = ((rotation % 360) + 360) % 360;
  const activeIdx = Math.round((360 - normalizedRotation) / (360 / COUNT)) % COUNT;
  const displayIdx = hoveredIdx !== null ? hoveredIdx : activeIdx;
  const activeTech = displayIdx !== null ? TECH_ITEMS[displayIdx] : null;

  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-24 text-foreground">
      <div className="absolute inset-0 starfield" />
      <div className="absolute inset-0 grid-lines opacity-[0.06]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="relative h-[280px] sm:h-[400px] lg:h-[600px] flex items-center overflow-hidden lg:overflow-visible order-last lg:order-first">
            <div
              className="absolute left-[-140px] sm:left-[-180px] lg:left-[-280px] top-1/2 -translate-y-1/2 h-[680px] w-[680px] scale-[0.48] sm:scale-[0.7] lg:scale-100 origin-center"
              onMouseEnter={() => { isPaused.current = true; }}
              onMouseLeave={() => { isPaused.current = false; setHoveredIdx(null); }}
            >
              <div className="absolute inset-4 rounded-full border border-white/[0.06] animate-glow-pulse" />
              <div className="absolute inset-8 rounded-full border border-white/[0.08]" />
              <div className="absolute inset-[100px] rounded-full border border-dashed border-white/[0.04]" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-brand-gradient blur-[100px] opacity-40 animate-glow-pulse" />

              {TECH_ITEMS.map((tech, i) => {
                const angle = (360 / COUNT) * i + rotation;
                const rad = (angle * Math.PI) / 180;
                const x = Math.cos(rad) * RADIUS;
                const y = Math.sin(rad) * RADIUS;
                const isHovered = hoveredIdx === i;

                return (
                  <motion.div
                    key={tech.n}
                    className="absolute left-1/2 top-1/2 z-10 cursor-pointer"
                    style={{ x: x - 35, y: y - 35 }}
                    animate={{
                      scale: isHovered ? 1.3 : 1,
                      zIndex: isHovered ? 30 : 10,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    onMouseEnter={() => setHoveredIdx(i)}
                    onMouseLeave={() => setHoveredIdx(null)}
                  >
                    <div className={`grid h-[70px] w-[70px] place-items-center rounded-2xl border backdrop-blur-xl transition-all duration-300 ${isHovered
                        ? "border-border bg-muted/[0.18] shadow-[0_0_50px_-10px_rgba(255,255,255,0.3)]"
                        : "border-border bg-muted/[0.06]"
                      }`} style={isHovered ? { borderColor: `${tech.color}88`, boxShadow: `0 0 40px -8px ${tech.color}55` } : {}}>
                      <tech.Logo className="h-8 w-8 text-foreground" style={{ filter: `drop-shadow(0 0 8px ${tech.color}44)` }} />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="relative z-20 lg:pl-12">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold">Technology</div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight">
                The stack behind <span className="text-gradient-light">every intelligent enterprise.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 sm:mt-12 min-h-[200px]">
                <AnimatePresence mode="wait">
                  {activeTech ? (
                    <motion.div
                      key={activeTech.n}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="rounded-2xl sm:rounded-3xl border border-white/20 bg-muted/[0.05] p-5 sm:p-8 shadow-glow backdrop-blur-xl"
                      style={{ borderLeftColor: activeTech.color, borderLeftWidth: 4 }}
                    >
                      <div className="flex items-center gap-3.5 sm:gap-4">
                        <div className="grid h-12 sm:h-14 w-12 sm:w-14 place-items-center rounded-xl sm:rounded-2xl shrink-0" style={{ background: `${activeTech.color}22`, border: `1px solid ${activeTech.color}44` }}>
                          <activeTech.Logo className="h-6 sm:h-8 w-6 sm:w-8 text-foreground" style={{ filter: `drop-shadow(0 0 8px ${activeTech.color}44)` }} />
                        </div>
                        <div>
                          <div className="text-xl sm:text-2xl font-bold text-foreground">{activeTech.n}</div>
                          <div className="text-[10px] uppercase tracking-widest text-foreground/50 mt-0.5">Ecosystem Partner</div>
                        </div>
                      </div>
                      <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 border-t border-border pt-4 sm:pt-5">
                        <div className="shrink-0">
                          <div className="text-2xl sm:text-3xl font-semibold text-foreground">{activeTech.projects}</div>
                          <div className="text-[10px] uppercase tracking-widest text-foreground/50 mt-0.5">Deployments</div>
                        </div>
                        <p className="text-xs sm:text-sm leading-relaxed text-foreground/70 flex-1">
                          {activeTech.desc}
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="default"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="rounded-2xl sm:rounded-3xl border border-border bg-muted/[0.02] p-6 sm:p-8 h-full flex flex-col justify-center items-center text-center backdrop-blur-md border-dashed"
                    >
                      <Layers className="h-8 w-8 text-foreground/20 mb-3" />
                      <div className="text-base sm:text-lg font-medium text-foreground/60">Hover or tap any technology</div>
                      <div className="text-xs sm:text-sm text-foreground/40 mt-1">to see our enterprise footprint.</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 sm:mt-12 flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm text-foreground/60 border-l border-border pl-4 sm:pl-6">
                <div><span className="text-foreground font-medium">Cloud-native</span> architecture</div>
                <div className="hidden sm:block h-1 w-1 rounded-full bg-muted/20" />
                <div><span className="text-foreground font-medium">AI-first</span> integrations</div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════ INDUSTRIES ═══════════════════ */

const INDUSTRIES = [
  { t: "Mining", desc: "Pit-to-port ERP, fleet telemetry, and predictive maintenance.", icon: Factory, img: "/mining-industry.jpg" },
  { t: "Discrete Manufacturing", desc: "Smart factories, OEE tracking, and Industry 4.0 automation.", icon: Factory, img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=75&w=600&auto=format&fit=crop" },
  { t: "Capital Goods", desc: "ETO project systems, field service, and heavy equipment warranty.", icon: Boxes, img: "/capital_goods.jpg" },
  { t: "Transportation & Logistics", desc: "Supply chain visibility, tyre health, and fleet route planning.", icon: Truck, img: "/logistics-img.jpg" },
  { t: "Utilities", desc: "Grid management, IS-U billing, and OT cybersecurity.", icon: Zap, img: "/Utilities_Industry.jpg" },
  { t: "Engineering & Construction", desc: "Project lifecycle management, contractor safety, and CWMS.", icon: HardHat, img: "/construction-img.jpg" },
];

function Industries() {
  return (
    <section id="industries" className="relative overflow-hidden bg-muted py-20 sm:py-28 md:py-32 text-foreground">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgb(58_73_127/0.06),transparent_70%)] pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold">Industries</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 sm:mt-6 max-w-3xl text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.1] tracking-tight">
            Deep expertise across <span className="text-gradient">core industry sectors.</span>
          </h2>
        </Reveal>
        <div className="mt-12 sm:mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {INDUSTRIES.map((it, i) => (
            <Reveal key={it.t} delay={i * 0.06}>
              <Link to="/contact" className="group relative overflow-hidden rounded-3xl h-[300px] sm:h-[320px] block cursor-pointer border border-white/5 hover:border-white/10 shadow-soft transition-all duration-500">
                <img src={it.img} alt={it.t} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-black/5 transition-opacity duration-500 group-hover:opacity-100 opacity-70" />

                <div className="absolute inset-0 p-6 sm:p-7 flex flex-col justify-end z-10">
                  <div className="flex items-center gap-3 mb-2 transform transition-transform duration-300 group-hover:-translate-y-1">
                    <div className="h-10 w-10 bg-white/10 backdrop-blur-xl rounded-xl flex items-center justify-center text-white border border-white/20 group-hover:bg-white/20 group-hover:shadow-[0_0_20px_-4px_rgba(255,255,255,0.25)] transition-all duration-300">
                      <it.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{it.t}</h3>
                  </div>

                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-in-out">
                    <div className="overflow-hidden">
                      <p className="text-white/80 text-sm mb-4 leading-relaxed">{it.desc}</p>
                      <div className="flex items-center gap-2 text-red-300 font-semibold text-xs transition-all duration-300 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                        Explore solutions <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════ CONTACT ═══════════════════ */

function Contact() {
  return (
    <section id="contact" className="section-dark relative overflow-hidden bg-muted py-20 sm:py-28 md:py-32">
      {/* Animated gradient mesh background */}
      <div className="absolute top-40 left-1/4 h-96 w-96 rounded-full bg-brand/10 blur-[140px] animate-float-slow" />
      <div className="absolute bottom-20 right-1/3 h-64 w-64 rounded-full bg-brand-red/8 blur-[120px] animate-float-med" />
      <div className="absolute top-1/4 right-1/4 h-48 w-48 rounded-full bg-violet-500/5 blur-[100px] animate-float-gentle" />
      <div className="absolute inset-0 diagonal-stripes opacity-20" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 sm:gap-16">
          <Reveal delay={0.1}>
            <div className="rounded-2xl sm:rounded-3xl border border-border/40 bg-background/60 p-6 sm:p-8 md:p-10 backdrop-blur-2xl h-full shadow-elevated" style={{ boxShadow: 'var(--shadow-elevated), var(--shadow-inner-glow)' }}>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8">Send us a message</h2>
              <HomeContactForm />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-col justify-between h-full py-2 sm:py-4">
              <div>
                <Reveal>
                  <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold">Connect</div>
                </Reveal>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 sm:mt-4 mb-4 sm:mb-6 leading-tight">
                  Let's build the <span className="text-gradient">next chapter.</span>
                </h2>
              </div>
              <div className="space-y-6">
                <div className="rounded-2xl border border-border/40 bg-background/40 p-5 sm:p-6 backdrop-blur-xl shadow-soft">
                  <div className="text-xs uppercase tracking-wider font-bold text-brand-red mb-3">Direct Contact</div>
                  <div className="space-y-3 text-xs sm:text-sm">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-brand/10 flex items-center justify-center shrink-0">
                        <Phone className="h-4 w-4 text-brand" />
                      </div>
                      <div className="flex flex-wrap items-center gap-x-2 font-semibold text-foreground">
                        <a href="tel:03335346200" className="hover:text-brand-red transition-colors">033-35346200</a>
                        <span className="text-muted-foreground">/</span>
                        <a href="tel:03335346222" className="hover:text-brand-red transition-colors">033-35346222</a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-brand/10 flex items-center justify-center shrink-0">
                        <Mail className="h-4 w-4 text-brand" />
                      </div>
                      <a href="mailto:enquiry@acceleronsolutions.io" className="font-semibold text-foreground hover:text-brand-red transition-colors break-all">
                        enquiry@acceleronsolutions.io
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">Delivery Centers</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs sm:text-sm">
                    {[
                      "Kolkata, India",
                      "Delhi NCR, India",
                    ].map((loc, i) => (
                      <div key={i} className="flex items-center gap-2 text-muted-foreground group/loc hover:text-foreground transition-colors cursor-default">
                        <div className="h-6 w-6 rounded-md bg-brand-red/10 flex items-center justify-center shrink-0 group-hover/loc:bg-brand-red/20 transition-colors">
                          <MapPin className="h-3.5 w-3.5 text-brand-red" />
                        </div>
                        <span>{loc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative">
      <AnimatePresence>
        {loading && <InitialLoader onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      <Nav />
      <main>
        <Hero />
        <AboutTeaser />
        <WaveDivider from="dark" to="light" />
        <Services />
        <WaveDivider from="light" to="dark" />
        <Industries />
        <WhyChooseUs />
        <OurValuesSection />
        <WaveDivider from="dark" to="light" />
        <CSRSection />
        <WaveDivider from="light" to="dark" />
        <GlobalPresence />
        <WaveDivider from="dark" to="light" />
        <InsightsSection />
        <WaveDivider from="light" to="dark" />
        <Contact />
      </main>
    </div>
  );
}
