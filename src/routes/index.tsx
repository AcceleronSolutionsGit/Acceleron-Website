import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
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

export const Route = createFileRoute("/")(
{
  head: () => ({
    meta: [
      { title: "Acceleron Solutions — Engineering Digital Excellence" },
      { name: "description", content: "Enterprise transformation through SAP, AI, Zoho, and intelligent digital platforms. Built for scale. Designed for humans." },
    ],
  }),
  component: Home,
});

/* ═══════════════════ HERO ═══════════════════ */

const HOME_BANNERS = [
  "/ZOHO_CRM_Banner.png",
  "/SAP_Implementation_Banner.png",
  "/Threatcorp_Banner.png",
  "/Manage_Engine_Banner.png",
];

function Hero() {
  const [index, setIndex] = useState(0);
  const [videoPhase, setVideoPhase] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1, 0]);

  useEffect(() => {
    if (videoPhase) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % HOME_BANNERS.length), 6000);
    return () => clearInterval(t);
  }, [videoPhase]);

  const handleVideoEnd = () => {
    setVideoPhase(false);
  };

  return (
    <section ref={ref} id="top" className="relative min-h-[100svh] overflow-hidden bg-background">
      {/* ── Video intro phase ── */}
      <AnimatePresence>
        {videoPhase && (
           <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 z-30 bg-black"
           >
              <video 
                src={getAssetUrl("/Hero_BG_Video.mp4")}
                autoPlay 
                muted 
                playsInline
                onEnded={handleVideoEnd}
                className="absolute inset-0 h-full w-full object-cover"
              />
              
              {/* Dark scrim for text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/80 to-transparent" />

              {/* Text overlay & CTAs */}
              <div className="absolute inset-0 z-40 flex items-center">
                <div className="mx-auto w-full max-w-7xl px-6">
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-white/90 backdrop-blur-sm"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
                    </span>
                    Engineering Digital Excellence
                  </motion.div>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-7 max-w-3xl text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
                  >
                    Built on Legacy.{" "}
                    <span className="bg-gradient-to-r from-white via-white/90 to-red-400 bg-clip-text text-transparent">
                      Driven by Innovation.
                    </span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    className="mt-6 max-w-xl text-base leading-relaxed text-white/75 md:text-lg"
                  >
                    From the Gainwell Group — powering mining, manufacturing, and enterprise transformation with SAP, Zoho, AI, and custom-built digital platforms.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.7 }}
                    className="mt-9 flex flex-wrap items-center gap-4"
                  >
                    <a
                      href="#contact"
                      className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-red-600 to-red-500 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-red-600/25 transition-all hover:shadow-red-600/40 hover:scale-105"
                    >
                      Start Your Journey
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
                    <Link
                      to="/services"
                      className="group inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-7 py-4 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20"
                    >
                      <span className="grid h-6 w-6 place-items-center rounded-full border border-white/25 transition-transform group-hover:scale-110">
                        <Layers className="h-3 w-3 text-white/80" />
                      </span>
                      Explore Services
                    </Link>
                  </motion.div>
                </div>
              </div>

              {/* Skip button */}
              <button
                onClick={handleVideoEnd}
                className="absolute bottom-8 right-8 z-50 rounded-full border border-white/20 bg-black/40 px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-white/80 backdrop-blur-md transition-all hover:bg-black/60 hover:text-white"
              >
                Skip <ArrowRight className="ml-1.5 inline-block h-3 w-3" />
              </button>
           </motion.div>
        )}
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-0 bg-hero" />
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-[0.08]" />

      <motion.div
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative z-10 mx-auto flex min-h-[100svh] w-full items-center justify-center px-4 sm:px-6 pt-24 pb-12"
      >
        <div className="relative w-full max-w-7xl aspect-video sm:rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 backdrop-blur-3xl flex items-center justify-center">
          
          <AnimatePresence mode="wait">
             <motion.img 
                key={index}
                src={getAssetUrl(HOME_BANNERS[index])}
                alt="Acceleron Solutions Services"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0 h-full w-full object-contain drop-shadow-2xl"
             />
          </AnimatePresence>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
             {HOME_BANNERS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all shadow-sm ${i === index ? "w-10 bg-brand-red" : "w-3 bg-foreground/30 hover:bg-foreground/50"}`}
                />
             ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* ═══════════════════ ABOUT TEASER ═══════════════════ */

function AboutTeaser() {
  return (
    <section className="relative overflow-hidden bg-background py-24 border-b border-border/50">
      <div className="absolute inset-0 grid-lines opacity-[0.04]" />
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold">About Acceleron Solutions</div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-[1.1]">
                Empowering Enterprises with <span className="text-gradient">Digital Innovation</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                As the technology arm of the Gainwell Group, Acceleron Solutions delivers bespoke SAP consulting, full-stack Zoho business automation, predictive AI systems, and custom enterprise software built for scale.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="grid grid-cols-3 gap-4 pt-2 pb-2">
                <div className="rounded-2xl border border-border/60 bg-muted/20 p-4">
                  <div className="text-xl sm:text-2xl font-black text-brand-red">Kolkata & Delhi</div>
                  <div className="text-xs text-muted-foreground mt-1 font-medium">Delivery Hubs</div>
                </div>
                <div className="rounded-2xl border border-border/60 bg-muted/20 p-4">
                  <div className="text-xl sm:text-2xl font-black text-brand-red">Full-Stack</div>
                  <div className="text-xs text-muted-foreground mt-1 font-medium">Enterprise Tech</div>
                </div>
                <div className="rounded-2xl border border-border/60 bg-muted/20 p-4">
                  <div className="text-xl sm:text-2xl font-black text-brand-red">100%</div>
                  <div className="text-xs text-muted-foreground mt-1 font-medium">Outcome Driven</div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="pt-2">
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-brand-gradient px-8 py-4 text-sm font-semibold text-white shadow-glow transition-all hover:scale-105 hover:shadow-red-glow"
                >
                  Know More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="relative rounded-3xl overflow-hidden border border-border/60 bg-muted/20 shadow-glow p-2">
                <img
                  src={getAssetUrl("/Inaguration Photo.JPG")}
                  alt="Acceleron Solutions"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[340px] sm:h-[400px] object-cover rounded-2xl"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════ SCROLL STORYTELLING ═══════════════════ */

const STORY_CHAPTERS = [
  {
    n: "01",
    kicker: "The invitation",
    title: "Move fast without breaking what works.",
    body: "The enterprises we love are trying to become AI-native, without abandoning the systems that built them. That's the tension we resolve.",
    tone: "oklch(0.62 0.22 260)",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=75&w=1200",
  },
  {
    n: "02",
    kicker: "The method",
    title: "One partner. Whole stack. Accountable outcomes.",
    body: "SAP core. Zoho velocity. AI on top. We orchestrate the layers so your people don't have to.",
    tone: "oklch(0.82 0.14 210)",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=75&w=1200",
  },
  {
    n: "03",
    kicker: "The result",
    title: "Systems that feel less like software.",
    body: "Interfaces employees actually open. Data leaders trust. Automations that don't need babysitting. Enterprise-grade, human-shaped.",
    tone: "oklch(0.62 0.22 300)",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=75&w=1200",
  },
];

function ScrollStory() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const step = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 2]);
  const [active, setActive] = useState(0);
  useEffect(() => step.on("change", (v) => setActive(Math.max(0, Math.min(2, Math.round(v))))), [step]);

  return (
    <section ref={ref} id="story" className="relative bg-background h-[300vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center text-foreground">
        <div className="absolute inset-0 grid-lines opacity-10" />
        <motion.div
          animate={{ background: `radial-gradient(ellipse 70% 50% at 70% 40%, ${STORY_CHAPTERS[active].tone}55, transparent 60%)` }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        />
        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
          <div>
            <div className="text-xs uppercase tracking-[0.4em] text-brand-red">Our Story</div>
            {/* scroll progress indicator */}
            <div className="mt-6 flex gap-2">
              {STORY_CHAPTERS.map((_, i) => (
                <div key={i} className="h-0.5 flex-1 rounded-full overflow-hidden bg-muted/10">
                  <motion.div
                    animate={{ width: active >= i ? "100%" : "0%" }}
                    transition={{ duration: 0.6 }}
                    className="h-full rounded-full bg-brand-red"
                  />
                </div>
              ))}
            </div>
            
            <div className="mt-10 min-h-[280px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex items-center gap-4 text-sm text-foreground/50">
                    <span className="text-brand-red font-semibold">{STORY_CHAPTERS[active].n}</span>
                    <span>{STORY_CHAPTERS[active].kicker}</span>
                  </div>
                  <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
                    {STORY_CHAPTERS[active].title}
                  </h3>
                  <p className="mt-4 max-w-md text-base leading-relaxed text-foreground/60">
                    {STORY_CHAPTERS[active].body}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="relative hidden h-[520px] lg:block overflow-hidden rounded-3xl shadow-glow border border-border">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 bg-background"
              >
                <div className="absolute inset-0" style={{ background: `radial-gradient(circle at center, ${STORY_CHAPTERS[active].tone}66, transparent 60%)`, zIndex: 10 }} />
                <img src={getAssetUrl(STORY_CHAPTERS[active].image)} alt={STORY_CHAPTERS[active].title} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover opacity-70" style={{ zIndex: 0 }} />
                <div className="absolute inset-0 grid-lines opacity-30 z-20" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent z-20" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════ CHALLENGE ═══════════════════ */

function Challenge() {
  return (
    <section className="relative overflow-hidden bg-background py-32 text-foreground">
      <div className="absolute inset-0 grid-lines opacity-20" />
      <div className="absolute -top-40 left-1/2 h-96 w-[600px] -translate-x-1/2 rounded-full bg-electric/20 blur-[140px]" />
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.4em] text-brand-red">The Challenge</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight text-foreground md:text-6xl">
            Enterprises today face a paradox: <span className="text-foreground/75">move faster, without breaking what works.</span>
          </h2>
        </Reveal>
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {[
            { icon: Layers, t: "Fragmented systems", d: "Legacy stacks stitched together with tape. Data trapped in silos. Teams flying blind." },
            { icon: TrendingUp, t: "Compressed timelines", d: "Boards want AI-native results next quarter. Engineering needs stability. Someone has to bridge both." },
            { icon: Target, t: "Rising expectations", d: "Customers want Apple-grade experiences from B2B systems that were built in 2008." },
          ].map((p, i) => (
            <Reveal key={p.t} delay={i * 0.12}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group relative h-full rounded-2xl border border-border bg-muted/[0.04] p-8 transition-all hover:border-foreground/30 hover:bg-muted/[0.07]"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-gradient shadow-glow">
                  <p.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">{p.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">{p.d}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════ ABOUT ═══════════════════ */

function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-muted py-32">
      {/* diagonal stripes pattern — unique to About */}
      <div className="absolute inset-0 diagonal-stripes" />
      <div className="absolute top-20 -right-40 h-96 w-96 rounded-full bg-electric/10 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <Reveal>
              <div className="text-xs uppercase tracking-[0.4em] text-electric">The Acceleron Approach</div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                We don't sell software. <span className="text-gradient">We ship outcomes.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground">
                For 15 years we've partnered with enterprises across four continents to modernize
                what matters — from core ERP to customer intelligence — while keeping the people
                who use these systems at the center of every decision.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 grid grid-cols-2 gap-6">
                {[
                  { icon: Lightbulb, t: "Vision", d: "Every enterprise, intelligent by default." },
                  { icon: Compass, t: "Mission", d: "Turn transformation from risk into runway." },
                  { icon: HeartPulse, t: "Human-first", d: "Technology in service of people." },
                  { icon: Award, t: "Excellence", d: "Enterprise-grade, always." },
                ].map((v) => (
                  <motion.div key={v.t} whileHover={{ y: -4 }} className="rounded-xl border border-border bg-muted p-5 shadow-card transition-shadow hover:shadow-soft">
                    <v.icon className="h-5 w-5 text-electric" />
                    <div className="mt-3 text-sm font-semibold">{v.t}</div>
                    <div className="mt-1 text-xs leading-relaxed text-muted-foreground">{v.d}</div>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="relative">
            <Reveal delay={0.2}>
              <div className="relative rounded-3xl bg-background p-6 sm:p-10 text-foreground shadow-glow overflow-hidden">
                <div className="absolute inset-0 grid-lines opacity-20" />
                <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-brand-gradient opacity-30 blur-3xl" />
                <div className="relative">
                  <div className="text-xs uppercase tracking-[0.3em] text-brand-red">Milestones</div>
                  <div className="mt-8 space-y-6">
                    {[
                      { t: "Gainwell Group Heritage", d: "Built as the technology engine of the 80-year-old Gainwell Group, rooted in mining, engineering, and heavy-equipment operations." },
                      { t: "Global Delivery Expansion", d: "Established strategic delivery hubs across Kolkata (HQ), Delhi NCR, Bangalore, Singapore, West Virginia, and NSW." },
                      { t: "Enterprise Practice Leadership", d: "Scaled dedicated, certified centers of excellence in SAP S/4HANA, Zoho Suite, Cloud Infrastructure, and Cyber Security." },
                      { t: "Global Digital Transformation", d: "Modernized core ERP and customer intelligence for 200+ enterprise clients across 28 countries." },
                      { t: "Next-Gen Analytics & AI Deployment", d: "Launched advanced data lake architectures and predictive, generative AI agents running live in production." },
                    ].map((m, i) => (
                      <motion.div
                        key={m.t}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.6 }}
                        className="relative flex gap-4 border-l border-border pl-6 py-1"
                      >
                        <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-brand shadow-[0_0_20px_var(--brand)]" />
                        <div className="min-w-0">
                          <div className="text-sm font-bold text-foreground flex items-center gap-2">
                            <span className="text-xs font-semibold text-brand-red px-2 py-0.5 rounded bg-brand-red/10">0{i + 1}</span>
                            {m.t}
                          </div>
                          <div className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{m.d}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
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
    <section id="services" className="relative overflow-hidden bg-background py-32">
      {/* radial spotlight — unique to Services */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgb(58_73_127/0.06),transparent_70%)]" />
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.4em] text-electric">Services</div>
        </Reveal>
        <div className="mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal delay={0.1}>
            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
              A full-stack partner for the <span className="text-gradient">intelligent enterprise.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground">Eight practices. One team. One accountable partner from strategy through steady-state.</p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.06} className={i === 0 ? "lg:col-span-2" : ""}>
              <Link to={s.url as any} className="group relative overflow-hidden rounded-3xl h-[320px] sm:h-[400px] block cursor-pointer">
                {/* Base Image or Logo Container */}
                {s.img.endsWith(".png") || s.img.includes("LOGO") ? (
                  <div className="absolute inset-0 flex items-center justify-center p-8 z-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(225,29,72,0.2),transparent_70%)]" />
                    <div className="relative bg-white/95 backdrop-blur-md px-7 py-5 rounded-2xl shadow-2xl border border-white/20 transition-all duration-700 group-hover:scale-105 group-hover:bg-white group-hover:shadow-red-500/20 mb-12">
                      <img src={getAssetUrl(s.img)} alt={s.t} className="h-12 sm:h-16 w-auto max-w-[200px] sm:max-w-[240px] object-contain" />
                    </div>
                  </div>
                ) : (
                  <img src={getAssetUrl(s.img)} alt={s.t} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                )}
                
                {/* Dark Overlay (always partially there, gets darker on hover) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-300 group-hover:opacity-100 opacity-80" />
                
                {/* Content Container */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                  {/* Always visible title & icon */}
                  <div className="flex items-center gap-3 mb-4 transform transition-transform duration-300 group-hover:-translate-y-2">
                    <div className="h-10 w-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-white/20">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{s.t}</h3>
                  </div>
                  
                  {/* Hidden on idle, visible on hover */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-in-out">
                    <div className="overflow-hidden">
                      <p className="text-white/80 text-sm mb-6 leading-relaxed">{s.d}</p>
                      <div className="flex items-center gap-2 text-brand font-semibold text-sm transition-transform duration-300 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                        Learn more <ArrowUpRight className="h-4 w-4" />
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

/* ═══════════════════ TECH STACK — CIRCULAR ROULETTE CAROUSEL ═══════════════════ */

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
  const RADIUS = 280; /* radius of the circular orbit in px */
  const COUNT = TECH_ITEMS.length;

  useEffect(() => {
    let lastTime = performance.now();
    const speed = 0.008; /* slightly slower for half-carousel */
    const tick = (now: number) => {
      const dt = now - lastTime;
      lastTime = now;
      if (!isPaused.current) {
        // Decreasing rotation so items pass the right edge in array order (0, 1, 2...)
        setRotation((r) => (r - speed * dt) % 360);
      }
      animRef.current = requestAnimationFrame(tick);
    };
    animRef.current = requestAnimationFrame(tick);
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, []);

  // Dynamically calculate which item is closest to the right edge (angle = 0)
  const normalizedRotation = ((rotation % 360) + 360) % 360;
  const activeIdx = Math.round((360 - normalizedRotation) / (360 / COUNT)) % COUNT;
  
  const displayIdx = hoveredIdx !== null ? hoveredIdx : activeIdx;
  const activeTech = displayIdx !== null ? TECH_ITEMS[displayIdx] : null;

  return (
    <section className="relative overflow-hidden bg-background py-24 text-foreground">
      {/* starfield pattern — unique to Tech Stack */}
      <div className="absolute inset-0 starfield" />
      <div className="absolute inset-0 grid-lines opacity-[0.06]" />
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Half Circular Roulette Carousel */}
          <div className="relative h-[350px] sm:h-[450px] lg:h-[600px] flex items-center overflow-hidden lg:overflow-visible order-last lg:order-first">
            {/* Center the circle on the left edge */}
            <div className="absolute left-[-120px] sm:left-[-180px] lg:left-[-280px] top-1/2 -translate-y-1/2 h-[680px] w-[680px] scale-[0.6] sm:scale-[0.75] lg:scale-100 origin-center"
              onMouseEnter={() => { isPaused.current = true; }}
              onMouseLeave={() => { isPaused.current = false; setHoveredIdx(null); }}
            >
              {/* orbit ring visual */}
              <div className="absolute inset-8 rounded-full border border-white/[0.08]" />
              <div className="absolute inset-[100px] rounded-full border border-dashed border-white/[0.04]" />
              
              {/* center glow */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-brand-gradient blur-[100px] opacity-40" />
              
              {/* orbiting tech icons */}
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
                    <div className={`grid h-[70px] w-[70px] place-items-center rounded-2xl border backdrop-blur-xl transition-all duration-300 ${
                      isHovered
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

          {/* Right Side: Detail Card */}
          <div className="relative z-20 lg:pl-12">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.4em] text-brand-red">Technology</div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
                The stack behind <span className="text-gradient-light">every intelligent enterprise.</span>
              </h2>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="mt-12 h-[220px]">
                <AnimatePresence mode="wait">
                  {activeTech ? (
                    <motion.div
                      key={activeTech.n}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="rounded-3xl border border-white/20 bg-muted/[0.05] p-8 shadow-glow backdrop-blur-xl"
                      style={{ borderLeftColor: activeTech.color, borderLeftWidth: 4 }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="grid h-14 w-14 place-items-center rounded-2xl" style={{ background: `${activeTech.color}22`, border: `1px solid ${activeTech.color}44` }}>
                          <activeTech.Logo className="h-8 w-8 text-foreground" style={{ filter: `drop-shadow(0 0 8px ${activeTech.color}44)` }} />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-foreground">{activeTech.n}</div>
                          <div className="text-[10px] uppercase tracking-widest text-foreground/50 mt-1">Ecosystem Partner</div>
                        </div>
                      </div>
                      <div className="mt-6 flex items-center gap-8 border-t border-border pt-5">
                        <div>
                          <div className="text-3xl font-semibold text-foreground">{activeTech.projects}</div>
                          <div className="text-[10px] uppercase tracking-widest text-foreground/50 mt-1">Deployments</div>
                        </div>
                        <p className="text-sm leading-relaxed text-foreground/70 flex-1">
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
                      className="rounded-3xl border border-border bg-muted/[0.02] p-8 h-full flex flex-col justify-center items-center text-center backdrop-blur-md border-dashed"
                    >
                      <Layers className="h-8 w-8 text-foreground/20 mb-4" />
                      <div className="text-lg font-medium text-foreground/60">Hover over any technology</div>
                      <div className="text-sm text-foreground/40 mt-2">to see our enterprise footprint.</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
            
            {/* bottom info text */}
            <Reveal delay={0.3}>
              <div className="mt-12 flex items-center gap-6 text-sm text-foreground/60 border-l border-border pl-6">
                <div><span className="text-foreground font-medium">Cloud-native</span> architecture</div>
                <div className="h-1 w-1 rounded-full bg-muted/20" />
                <div><span className="text-foreground font-medium">AI-first</span> integrations</div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════ PRODUCTS ═══════════════════ */

const PRODUCT_DETAILS: Record<string, {
  tagline: string;
  body: string;
  stats: { label: string; value: string }[];
  features: string[];
  mock: () => ReactNode;
}> = {
  "Supplier Portal": {
    tagline: "Composable commerce for enterprise scale.",
    body: "Headless storefronts, unified catalog and AI-driven merchandising across web, mobile and in-store — deployed for retailers serving 40M+ customers.",
    stats: [{ label: "SKUs", value: "2.4M" }, { label: "Peak QPS", value: "38k" }, { label: "TTFB", value: "180ms" }],
    features: ["Headless PWA storefront", "Real-time inventory graph", "AI product recommendations", "Multi-tenant marketplaces"],
    mock: () => (
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="text-[10px] uppercase tracking-widest text-foreground/60">Live orders</div>
          <div className="text-lg font-semibold text-foreground">1,284/min</div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {[0,1,2,3,4,5,6,7].map((i) => (
            <div key={i} className="aspect-square rounded-lg border border-border bg-muted/[0.05] p-2">
              <div className="h-full rounded-md bg-gradient-to-br from-white/20 to-white/5" />
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-border bg-muted/[0.05] p-3">
          <div className="text-[10px] uppercase tracking-widest text-foreground/50">Conversion · today</div>
          <div className="mt-1 text-2xl font-semibold text-foreground">4.87%</div>
          <div className="mt-1.5 h-1 rounded-full bg-muted/10"><div className="h-full w-3/4 rounded-full bg-muted/80" /></div>
        </div>
      </div>
    ),
  },
  "Tyre Health": {
    tagline: "Dispatch, execute, invoice — one platform.",
    body: "AI-optimized routing, offline-first mobile execution and IoT-integrated diagnostics for enterprise field service organizations.",
    stats: [{ label: "Technicians", value: "12k+" }, { label: "First-time fix", value: "91%" }, { label: "Avg ETA", value: "-38%" }],
    features: ["Route optimization", "Offline-first mobile app", "IoT diagnostics", "SLA-aware scheduling"],
    mock: () => (
      <div className="space-y-3">
        <div className="rounded-lg border border-border bg-muted/[0.05] p-3">
          <div className="text-[10px] uppercase tracking-widest text-foreground/50">Today's routes</div>
          <div className="mt-2 h-24 rounded bg-[radial-gradient(ellipse_at_30%_50%,rgba(255,255,255,0.15),transparent_60%)] relative overflow-hidden">
            <svg viewBox="0 0 200 80" className="absolute inset-0 h-full w-full">
              <path d="M10,60 Q60,10 100,40 T190,20" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" strokeDasharray="3 3" />
              {[[10,60],[60,25],[100,40],[145,30],[190,20]].map(([x,y],i)=>(
                <circle key={i} cx={x} cy={y} r="3" fill="white" />
              ))}
            </svg>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[["Open","124"],["In transit","38"],["Completed","412"],["SLA at risk","3"]].map(([l,v])=>(
            <div key={l} className="rounded-lg border border-border bg-muted/[0.05] p-2.5">
              <div className="text-[9px] uppercase tracking-widest text-foreground/50">{l}</div>
              <div className="text-lg font-semibold text-foreground">{v}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  PJP: {
    tagline: "Every lead, scored and routed in seconds.",
    body: "Multi-touch attribution, AI lead scoring and auto-nurture flows that plug into leading CRMs — built for high-velocity sales orgs.",
    stats: [{ label: "Lead volume", value: "84k/mo" }, { label: "SQL rate", value: "+52%" }, { label: "Time to route", value: "8s" }],
    features: ["AI lead scoring", "Round-robin routing", "Multi-touch attribution", "Native CRM sync"],
    mock: () => (
      <div className="space-y-3">
        <div className="grid grid-cols-3 gap-2">
          {[["Hot","342","#de1e24"],["Warm","1,024","#4c5a8a"],["Cold","2,158","#3a497f"]].map(([l,v,c])=>(
            <div key={l} className="rounded-lg border border-border bg-muted/[0.05] p-2.5">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full" style={{background:c as string}}/>
                <span className="text-[9px] uppercase tracking-widest text-foreground/60">{l}</span>
              </div>
              <div className="mt-1 text-base font-semibold text-foreground">{v}</div>
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-border bg-muted/[0.05] p-3 space-y-2">
          {[["Acme Corp","96"],["Globex","88"],["Initech","71"]].map(([n,s])=>(
            <div key={n} className="flex items-center justify-between text-xs">
              <span className="text-foreground/85">{n}</span>
              <span className="rounded-full bg-muted/10 px-2 py-0.5 text-foreground">{s}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  CWMS: {
    tagline: "Work orders, from request to reconciliation.",
    body: "Approval graphs, cost centers, and vendor SLAs unified across facilities, procurement and finance.",
    stats: [{ label: "WOs / month", value: "48k" }, { label: "Cycle time", value: "-42%" }, { label: "Compliance", value: "99.2%" }],
    features: ["Approval workflows", "Vendor SLA tracking", "Cost center allocation", "Audit trail"],
    mock: () => (
      <div className="space-y-2">
        {[["WO-4821","Approved","#4c5a8a"],["WO-4822","Pending","#de1e24"],["WO-4823","In progress","#3a497f"],["WO-4824","Completed","#4c5a8a"]].map(([id,st,c])=>(
          <div key={id} className="flex items-center justify-between rounded-lg border border-border bg-muted/[0.05] px-3 py-2 text-xs">
            <span className="text-foreground/85 font-medium">{id}</span>
            <span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 rounded-full" style={{background:c as string}}/><span className="text-foreground/70">{st}</span></span>
          </div>
        ))}
      </div>
    ),
  },
  Suraksha: {
    tagline: "Zero-incident field operations.",
    body: "Real-time PPE detection, geofenced compliance and incident workflows for 12,000+ field workers.",
    stats: [{ label: "Workers", value: "12k+" }, { label: "Incidents", value: "-68%" }, { label: "Response", value: "<2 min" }],
    features: ["AI PPE detection", "Geofence alerts", "Incident triage", "Regulatory reporting"],
    mock: () => (
      <div className="space-y-3">
        <div className="rounded-lg border border-border bg-muted/[0.05] p-3">
          <div className="text-[10px] uppercase tracking-widest text-foreground/50">Compliance today</div>
          <div className="mt-2 flex items-end gap-2">
            <div className="text-3xl font-semibold text-foreground">98.6%</div>
            <div className="pb-1 text-[10px] text-foreground/60">+2.1 vs. week</div>
          </div>
          <div className="mt-2 flex gap-1">
            {[80,90,72,95,88,92,98].map((h,i)=>(
              <div key={i} className="flex-1 rounded-t bg-muted/70" style={{height:`${h*0.3}px`}}/>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="rounded-lg border border-border bg-muted/[0.05] p-2.5"><div className="text-[9px] uppercase tracking-widest text-foreground/50">PPE checks</div><div className="text-foreground font-semibold">14,208</div></div>
          <div className="rounded-lg border border-border bg-muted/[0.05] p-2.5"><div className="text-[9px] uppercase tracking-widest text-foreground/50">Open incidents</div><div className="text-foreground font-semibold">2</div></div>
        </div>
      </div>
    ),
  },
  QMS: {
    tagline: "Workshops that hit takt time, every time.",
    body: "Job cards, tool tracking, capacity planning and quality gates for automotive & industrial workshops.",
    stats: [{ label: "Job cards", value: "18k/mo" }, { label: "First-pass yield", value: "94%" }, { label: "OEE", value: "+22%" }],
    features: ["Job card lifecycle", "Tool & bay allocation", "Quality gates", "Warranty tracking"],
    mock: () => (
      <div className="space-y-3">
        <div className="grid grid-cols-4 gap-2">
          {[1,2,3,4,5,6,7,8].map(i=>(
            <div key={i} className={`aspect-square rounded-lg border ${i%3===0?"border-border bg-muted/15":"border-border bg-muted/[0.05]"}`}>
              <div className="grid h-full place-items-center text-[10px] text-foreground/70">B{i}</div>
            </div>
          ))}
        </div>
        <div className="rounded-lg border border-border bg-muted/[0.05] p-3">
          <div className="flex items-center justify-between text-xs">
            <span className="text-foreground/60">Takt time</span>
            <span className="font-semibold text-foreground">42s / 45s</span>
          </div>
          <div className="mt-1.5 h-1 rounded-full bg-muted/10"><div className="h-full w-[93%] rounded-full bg-muted/80"/></div>
        </div>
      </div>
    ),
  },
};

function ProductCard({ prod, index }: { prod: typeof PRODUCTS[0]; index: number }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const d = PRODUCT_DETAILS[prod.name] || {
    tagline: prod.desc,
    body: "Enterprise-grade solution for modern operations.",
    stats: [{ label: "Deployments", value: "24+" }, { label: "Uptime", value: "99.9%" }, { label: "ROI", value: "3.2x" }],
    features: ["Cloud-native architecture", "Real-time analytics", "Enterprise integrations"],
    mock: () => <div className="p-4 text-center text-sm text-muted-foreground">Preview not available</div>
  };

  return (
    <Reveal delay={index * 0.08}>
      <div
        className="group relative h-[420px] cursor-pointer"
        style={{ perspective: 1200 }}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
      >
        <motion.div
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-full w-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* ─── FRONT ─── */}
          <div
            className="absolute inset-0 overflow-hidden rounded-3xl border border-border bg-muted shadow-card"
            style={{ backfaceVisibility: "hidden" }}
          >
            {/* gradient header area */}
            <div className={`relative h-44 bg-gradient-to-br ${prod.gradient} overflow-hidden`}>
              <div className="absolute inset-0 grid-lines opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute left-5 top-5 rounded-lg bg-muted/15 backdrop-blur-md px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-white/90">
                0{index + 1}
              </div>
              <div className="absolute bottom-5 left-5 right-5">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-muted/20 backdrop-blur-md overflow-hidden p-1.5">
                  {prod.img ? <img src={prod.img} alt={prod.name} className="h-full w-full object-contain drop-shadow-md" /> : <prod.icon className="h-6 w-6 text-foreground" />}
                </div>
              </div>
            </div>
            {/* content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-foreground">{prod.name}</h3>
              <p className="mt-1 text-sm text-electric">{d.tagline}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">{d.body}</p>
              <div className="mt-5 grid grid-cols-3 gap-2">
                {d.stats.map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-lg font-semibold text-foreground">{s.value}</div>
                    <div className="text-[9px] uppercase tracking-widest text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* hover hint */}
            <div className="absolute bottom-4 right-4 flex items-center gap-1 text-[10px] font-medium uppercase tracking-widest text-muted-foreground/50 transition-opacity group-hover:opacity-100 opacity-60">
              Hover to explore
              <ArrowUpRight className="h-3 w-3" />
            </div>
          </div>

          {/* ─── BACK ─── */}
          <div
            className={`absolute inset-0 overflow-hidden rounded-3xl bg-gradient-to-br ${prod.gradient} shadow-glow`}
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <div className="absolute inset-0 grid-lines opacity-15" />
            <div className="relative flex h-full flex-col p-6 text-foreground">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-muted/15 backdrop-blur-md overflow-hidden p-1.5">
                  {prod.img ? <img src={prod.img} alt={prod.name} className="h-full w-full object-contain drop-shadow-md" /> : <prod.icon className="h-5 w-5 text-foreground" />}
                </div>
                <div>
                  <div className="text-lg font-semibold">{prod.name}</div>
                  <div className="text-xs text-foreground/70">{prod.desc}</div>
                </div>
              </div>

              <div className="mt-5 flex-1 overflow-hidden rounded-xl border border-border bg-muted/[0.06] backdrop-blur-md p-4">
                {d.mock()}
              </div>

              <div className="mt-4 space-y-1.5">
                {d.features.slice(0, 3).map((f) => (
                  <div key={f} className="flex items-center gap-2 text-xs text-foreground/80">
                    <span className="h-1 w-1 rounded-full bg-muted/60" />
                    {f}
                  </div>
                ))}
              </div>

              <a href="#contact" className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:gap-2.5 transition-all">
                See it in action <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </Reveal>
  );
}

function Products() {
  return (
    <section id="products" className="relative overflow-hidden bg-muted py-32">
      {/* soft wave SVG bg — unique to Products */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.03]" preserveAspectRatio="none">
        <defs>
          <pattern id="wave-bg" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <path d="M0,100 Q50,80 100,100 T200,100" fill="none" stroke="#212f60" strokeWidth="0.5"/>
            <path d="M0,140 Q50,120 100,140 T200,140" fill="none" stroke="#212f60" strokeWidth="0.3"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wave-bg)"/>
      </svg>
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.4em] text-electric">Products</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Six platforms. <span className="text-gradient">One promise.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">Hover over any card to explore — every product ships a distinct enterprise experience.</p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((prod: any, i: number) => (
            <ProductCard key={prod.name} prod={prod} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════ CASES ═══════════════════ */

function Cases() {
  const cases = [
    { client: "Global Manufacturing Leader", metric: "42%", label: "OEE improvement", desc: "SAP S/4HANA + IoT platform across 14 plants in 9 countries.", gradient: "from-blue-600 to-indigo-700", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=75&w=600" },
    { client: "Fortune 500 Retailer", metric: "3.2×", label: "Conversion lift", desc: "Enterprise Data Cloud + Vanijya storefront serving 40M customers.", gradient: "from-violet-600 to-fuchsia-700", image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=75&w=600" },
    { client: "National Logistics Provider", metric: "68%", label: "Fewer safety incidents", desc: "Suraksha rollout to 12,000 field workers with real-time compliance.", gradient: "from-cyan-600 to-blue-700", image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c15f5f?auto=format&fit=crop&q=75&w=600" },
  ];
  return (
    <section className="relative overflow-hidden bg-muted py-32">
      {/* spotlight — unique to Cases */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_50%_50%,rgb(58_73_127/0.04),transparent_70%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.4em] text-electric">Success Stories</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Outcomes that <span className="text-gradient">show up on the P&L.</span>
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {cases.map((c, i) => (
            <Reveal key={c.client} delay={i * 0.12}>
              <motion.div whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 300 }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-muted p-8 shadow-card transition-shadow hover:shadow-glow"
              >
                <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity mix-blend-overlay">
                  <img src={c.image} alt="" className="w-full h-full object-cover" />
                </div>
                <div className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${c.gradient} opacity-20 blur-2xl transition-opacity group-hover:opacity-40`} />
                {/* watermark number */}
                <div className="pointer-events-none absolute -right-4 -bottom-6 text-[120px] font-bold leading-none text-foreground/[0.03] select-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="relative">
                  <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">{c.client}</div>
                  <div className="mt-6">
                    <div className="text-6xl font-semibold tracking-tight text-gradient">{c.metric}</div>
                    <div className="mt-1 text-sm font-medium">{c.label}</div>
                  </div>
                  <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
                  <div className="mt-8 flex items-center gap-1.5 text-sm font-medium text-foreground">
                    Read case study <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════ INDUSTRIES ═══════════════════ */

const INDUSTRIES = [
  { t: "Manufacturing", desc: "Smart factories and Industry 4.0 automation.", icon: Factory, img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=75&w=600&auto=format&fit=crop" },
  { t: "Healthcare", desc: "Digital health records, telemedicine, and compliance.", icon: HeartPulse, img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=75&w=600&auto=format&fit=crop" },
  { t: "Retail", desc: "Omnichannel commerce and hyper-personalized CX.", icon: ShoppingBag, img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=75&w=600&auto=format&fit=crop" },
  { t: "Logistics", desc: "Supply chain visibility, fleet tracking, and optimization.", icon: Truck, img: "/logistics-img.jpg" },
  { t: "Education", desc: "EdTech platforms, e-learning, and campus management.", icon: GraduationCap, img: "/education-img.jpg" },
  { t: "Government", desc: "Secure public sector portals and civic tech.", icon: Landmark, img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=75&w=600&auto=format&fit=crop" },
  { t: "Finance", desc: "FinTech apps, secure transactions, and open banking.", icon: Banknote, img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=75&w=600&auto=format&fit=crop" },
  { t: "Construction", desc: "Project lifecycle management and IoT safety wearables.", icon: HardHat, img: "/construction-img.jpg" },
  { t: "Oil & Gas", desc: "Predictive maintenance and remote asset monitoring.", icon: Flame, img: "/oilandgas-img.jpg" },
];

function Industries() {
  return (
    <section id="industries" className="relative overflow-hidden bg-muted py-32 text-foreground">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgb(58_73_127/0.06),transparent_70%)] pointer-events-none" />
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.4em] text-brand-red">Industries</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Deep expertise across <span className="text-gradient-light">nine verticals.</span>
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {INDUSTRIES.map((it, i) => (
            <Reveal key={it.t} delay={i * 0.06}>
              <Link to="/contact" className="group relative overflow-hidden rounded-3xl h-[280px] block cursor-pointer border border-border shadow-soft">
                {/* Base Image */}
                <img src={it.img} alt={it.t} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-100 opacity-70" />
                
                {/* Content Container */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                  <div className="flex items-center gap-3 mb-2 transform transition-transform duration-300 group-hover:-translate-y-1">
                    <div className="h-10 w-10 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-white/20">
                      <it.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{it.t}</h3>
                  </div>
                  
                  {/* Hover Content */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300 ease-in-out">
                    <div className="overflow-hidden">
                      <p className="text-white/80 text-sm mb-4 leading-relaxed">{it.desc}</p>
                      <div className="flex items-center gap-2 text-brand font-semibold text-xs transition-transform duration-300 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                        Explore solutions <ArrowRight className="h-3.5 w-3.5" />
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

/* ═══════════════════ PROCESS ═══════════════════ */

function Process() {
  const steps = [
    { s: "Discover", d: "Immersion & audit" },
    { s: "Consult", d: "Roadmap & ROI" },
    { s: "Design", d: "UX + architecture" },
    { s: "Develop", d: "Ship in sprints" },
    { s: "Deploy", d: "Rollout & training" },
    { s: "Support", d: "24/7 steady-state" },
  ];
  return (
    <section className="relative overflow-hidden bg-muted py-32">
      {/* blueprint grid — unique to Process */}
      <div className="absolute inset-0 blueprint-grid" />
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.4em] text-electric">Process</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            Six steps from <span className="text-gradient">idea to impact.</span>
          </h2>
        </Reveal>

        <div className="relative mt-24">
          <div className="pointer-events-none absolute left-0 right-0 top-8 hidden md:block">
            <svg viewBox="0 0 1200 20" preserveAspectRatio="none" className="h-5 w-full">
              <defs>
                <linearGradient id="proc-line" x1="0" x2="1">
                  <stop offset="0" stopColor="#252F61" stopOpacity="0.1" />
                  <stop offset="0.5" stopColor="#3a497f" stopOpacity="0.7" />
                  <stop offset="1" stopColor="#de1e24" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <motion.line
                initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
                transition={{ duration: 2, ease: "easeOut" }}
                x1="60" y1="10" x2="1140" y2="10" stroke="url(#proc-line)" strokeWidth="2"
                strokeDasharray="6 6"
              />
            </svg>
          </div>
          <div className="relative grid gap-10 md:grid-cols-6 md:gap-4">
            {steps.map((step, i) => (
              <Reveal key={step.s} delay={i * 0.1}>
                <motion.div
                  whileHover="hover"
                  className="group relative flex flex-col items-center"
                >
                  <motion.div
                    variants={{ hover: { scale: 1.12, y: -4 } }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    className="relative z-10 grid h-16 w-16 place-items-center rounded-full bg-muted shadow-card"
                  >
                    <div className="absolute inset-0 rounded-full bg-brand-gradient opacity-90" />
                    <motion.div
                      variants={{ hover: { scale: 1.4, opacity: 0 } }}
                      transition={{ duration: 0.6 }}
                      className="absolute inset-0 rounded-full bg-brand-gradient opacity-30"
                    />
                    <span className="relative text-lg font-bold text-white tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                  </motion.div>
                  <div className="mt-5 text-center">
                    <div className="text-base font-semibold text-foreground">{step.s}</div>
                    <div className="mt-1 text-xs text-muted-foreground">{step.d}</div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════ EVENTS & SLIDESHOW ═══════════════════ */

function Events() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const eventSlides = [
    {
      id: 1,
      title: "EXCON International Expo 2024",
      date: "December 12–16, 2024",
      location: "BIEC, Bengaluru",
      category: "Conferences & Expo",
      desc: "Showcasing Acceleron Solutions' Suraksha Field Safety, Tyre Health, and SAP S/4HANA enterprise platforms to 50,000+ heavy industry delegates at Stall OD 4A01.",
      image: "/Excon pic 1.jpg",
    },
    {
      id: 2,
      title: "Global Enterprise Leadership Keynotes",
      date: "March 14, 2025",
      location: "Tech Innovation Center, Kolkata",
      category: "Leadership Summit",
      desc: "Arindam Hari, Meena Chaturvedi, and executive leaders sharing insights on SAP cloud migrations, AI agent deployment, and industrial digital transformation.",
      image: "/Arindam Hari Speaking.JPG",
    },
    {
      id: 3,
      title: "Tech Innovation & SAP Cloud Workshops",
      date: "February 20, 2025",
      location: "Acceleron Delivery Hub",
      category: "Workshops",
      desc: "Interactive technical deep-dives with enterprise solution architects on RISE with SAP, S/4HANA migration frameworks, and enterprise CRM integrations.",
      image: "/Rishabh Nair Speaking.JPG",
    },
    {
      id: 4,
      title: "Modern Tech Center Inauguration",
      date: "January 15, 2025",
      location: "STPI IT Park, Sector V, Kolkata",
      category: "Celebration",
      desc: "Grand opening of our expanded 3rd floor technology delivery hub in Kolkata, powering global projects across mining, manufacturing, and utilities.",
      image: "/Inaguration Photo.JPG",
    },
    {
      id: 5,
      title: "Annual Team Culture & Excellence Fest",
      date: "November 28, 2024",
      location: "Acceleron Campus",
      category: "Team & Culture",
      desc: "Recognizing outstanding engineering contributions and celebrating our shared journey, diversity, and team spirit.",
      image: "/DSC03909.JPG",
    },
    {
      id: 6,
      title: "Green Future Community CSR Drive",
      date: "June 20, 2025",
      location: "Kolkata & Regional Centers",
      category: "CSR Activities",
      desc: "Acceleron Cares community outreach initiative focusing on environmental sustainability, tree planting, and educational support.",
      image: "/IMG_20250620_083216430_HDR_AE.jpg",
    },
  ];

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % eventSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, eventSlides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % eventSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + eventSlides.length) % eventSlides.length);

  // Swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;
    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section id="events" className="section-dark relative overflow-hidden bg-muted py-32 text-foreground">
      <div className="absolute inset-0 diagonal-stripes opacity-10" />
      <div className="absolute top-1/4 right-10 h-80 w-80 rounded-full bg-brand/15 blur-[140px]" />
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <Reveal>
              <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold">Community & Highlights</div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
                Events & <span className="text-gradient">Moments in Tech</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <div className="flex items-center gap-3">
              <Link
                to="/gallery"
                className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-5 py-2.5 text-xs font-bold text-foreground hover:bg-brand hover:text-white hover:border-brand transition-all shadow-soft mr-2"
              >
                View Full Gallery <ArrowUpRight className="h-4 w-4" />
              </Link>
              <button
                onClick={prevSlide}
                aria-label="Previous Slide"
                className="grid h-12 w-12 place-items-center rounded-full border border-border bg-background/80 hover:bg-brand hover:text-white hover:border-brand transition-all shadow-soft"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next Slide"
                className="grid h-12 w-12 place-items-center rounded-full border border-border bg-background/80 hover:bg-brand hover:text-white hover:border-brand transition-all shadow-soft"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </Reveal>
        </div>

        {/* Slideshow Container with Touch / Swipe */}
        <div
          className="relative rounded-3xl border border-border bg-background/60 backdrop-blur-xl overflow-hidden shadow-glow"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="grid lg:grid-cols-12 min-h-[480px]">
            {/* Image Section */}
            <div className="lg:col-span-7 relative overflow-hidden min-h-[320px] lg:min-h-full bg-[#0d1330]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <img
                    src={getAssetUrl(eventSlides[currentSlide].image)}
                    alt={eventSlides[currentSlide].title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:hidden" />
                </motion.div>
              </AnimatePresence>
              <div className="absolute top-6 left-6 z-10">
                <span className="btn btn-primary btn-sm">
                  {eventSlides[currentSlide].category}
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-muted-foreground">
                    <span className="flex items-center gap-1.5 text-brand-red">
                      <Calendar className="h-4 w-4" /> {eventSlides[currentSlide].date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4 text-brand" /> {eventSlides[currentSlide].location}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-snug">
                    {eventSlides[currentSlide].title}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {eventSlides[currentSlide].desc}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Indicators & Thumbnails */}
              <div className="pt-8 border-t border-border mt-8 space-y-4">
                {/* Thumbnails strip */}
                <div className="grid grid-cols-6 gap-2">
                  {eventSlides.map((slide, idx) => (
                    <button
                      key={slide.id}
                      onClick={() => setCurrentSlide(idx)}
                      className={`relative h-12 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        idx === currentSlide ? "border-brand scale-105 shadow-md" : "border-transparent opacity-50 hover:opacity-100"
                      }`}
                    >
                      <img src={slide.image} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {eventSlides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          idx === currentSlide ? "w-8 bg-brand-gradient shadow-sm" : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-muted-foreground tabular-nums">
                    {String(currentSlide + 1).padStart(2, "0")} / {String(eventSlides.length).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════ CAREERS ═══════════════════ */

function Careers() {
  const jobs = [
    { r: "Senior SAP Consultant", loc: "Bangalore · Hybrid", d: "S/4HANA" },
    { r: "Cloud & CRM Architect", loc: "Remote · Global", d: "Enterprise CRM" },
    { r: "AI Engineer", loc: "London · Hybrid", d: "GenAI / RAG" },
    { r: "Product Designer", loc: "Bangalore · Onsite", d: "Design Systems" },
  ];
  return (
    <section id="careers" className="relative overflow-hidden bg-background py-32 text-foreground">
      <div className="absolute inset-0 grid-lines opacity-15" />
      {/* aurora effect — unique to Careers */}
      <div className="absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-electric/25 blur-[140px]" />
      <div className="absolute top-20 left-[10%] h-64 w-64 rounded-full bg-brand-red/15 blur-[120px]" />
      <div className="absolute bottom-40 right-[15%] h-48 w-48 rounded-full bg-cyan/20 blur-[100px]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <Reveal>
              <div className="text-xs uppercase tracking-[0.4em] text-brand-red">Careers</div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                Our greatest technology is <span className="text-gradient-light">our people.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-foreground/70">
                Join a team where craft meets scale — where the code you ship touches millions
                and the culture keeps you human.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-10 grid grid-cols-2 gap-4">
                {[
                  { t: "Learning budget", d: "$3K / year" },
                  { t: "Global mobility", d: "6 offices" },
                  { t: "Flex work", d: "Hybrid + remote" },
                  { t: "Equity", d: "For everyone" },
                ].map((b) => (
                  <motion.div key={b.t} whileHover={{ y: -3 }} className="rounded-xl border border-border bg-muted/[0.03] p-4 transition-all hover:bg-muted/[0.06]">
                    <div className="text-sm font-semibold">{b.t}</div>
                    <div className="text-xs text-foreground/60">{b.d}</div>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
          <div>
            <Reveal delay={0.2}>
              <div className="text-xs uppercase tracking-[0.3em] text-foreground/50">Open positions</div>
              <div className="mt-6 divide-y divide-border rounded-2xl border border-border bg-muted/[0.02] overflow-hidden">
                {jobs.map((j) => (
                  <motion.div key={j.r} whileHover={{ x: 4 }} className="relative z-10">
                    <Link
                      to="/careers"
                      className="group flex items-center justify-between p-6 transition-colors hover:bg-muted/[0.06] block w-full cursor-pointer"
                    >
                      <div className="min-w-0">
                        <div className="text-base font-medium text-foreground group-hover:text-brand-red transition-colors">{j.r}</div>
                        <div className="mt-1 text-xs text-muted-foreground">{j.loc} · {j.d}</div>
                      </div>
                      <span className="grid h-8 w-8 place-items-center rounded-full border border-border bg-background transition-all group-hover:border-brand-red group-hover:bg-brand-red/10">
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-brand-red" />
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  to="/careers"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-red-gradient px-7 py-3.5 text-sm font-medium text-[#FFFFFF] shadow-red-glow transition-all hover:scale-[1.02] hover:shadow-[0_28px_100px_-18px_rgba(222,30,36,0.75)] cursor-pointer relative z-10"
                >
                  Explore All Open Positions & Culture
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════ CONTACT ═══════════════════ */

function Contact() {
  return (
    <section id="contact" className="section-dark relative overflow-hidden bg-muted py-32">
      {/* animated gradient mesh blob — unique to Contact */}
      <div className="absolute top-40 left-1/4 h-96 w-96 rounded-full bg-brand/10 blur-[140px] animate-float-slow" />
      <div className="absolute bottom-20 right-1/3 h-64 w-64 rounded-full bg-brand-red/8 blur-[120px] animate-float-med" />
      <div className="absolute inset-0 diagonal-stripes opacity-20" />
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16">
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border/50 bg-background/50 p-10 backdrop-blur-xl h-full">
              <h2 className="text-2xl font-bold text-foreground mb-8">Send us a message</h2>
              <HomeContactForm />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-col justify-between h-full py-4">
              <div>
                <Reveal>
                  <div className="text-xs uppercase tracking-[0.4em] text-brand-red">Connect</div>
                </Reveal>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6 leading-tight">
                  Let's build the <span className="text-gradient">next chapter.</span>
                </h2>
              </div>
              <div className="space-y-6">
                <div className="rounded-2xl border border-border/60 bg-background/40 p-6 backdrop-blur-md">
                  <div className="text-xs uppercase tracking-wider font-bold text-brand-red mb-3">Direct Contact</div>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-brand shrink-0" />
                      <div className="flex flex-wrap items-center gap-x-2 font-semibold text-foreground">
                        <a href="tel:03335346200" className="hover:text-brand transition-colors">033-35346200</a>
                        <span className="text-muted-foreground">/</span>
                        <a href="tel:03335346222" className="hover:text-brand transition-colors">033-35346222</a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-brand shrink-0" />
                      <a href="mailto:enquiry@acceleronsolutions.io" className="font-semibold text-foreground hover:text-brand transition-colors">
                        enquiry@acceleronsolutions.io
                      </a>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Delivery Centers</h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    {[
                      "Kolkata, India",
                      "Delhi NCR, India",
                      "Bangalore, India",
                      "West Virginia, USA",
                      "NSW, Australia",
                      "Singapore"
                    ].map((loc, i) => (
                      <div key={i} className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4 text-brand shrink-0" /> <span>{loc}</span>
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
