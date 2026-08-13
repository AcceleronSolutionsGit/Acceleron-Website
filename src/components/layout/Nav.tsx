import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ArrowUpRight, ArrowRight, Menu, X, ShoppingBag, Wrench, TrendingUp, Boxes, ShieldCheck, Layers, Code2, Server, Briefcase, BarChart3, Building2, Users, Pickaxe, Factory, Truck, Zap, Cloud, Brain, Rocket, Award, MonitorSmartphone, GraduationCap, Leaf, FileText, Newspaper, Image as ImageIcon, Blocks, Calendar } from "lucide-react";
import { ThemeToggle } from "../ui/ThemeToggle";
import { Link, useLocation } from "@tanstack/react-router";
import { ZohoLogo } from "../ui/Icons";
import { SUB_SERVICES_DATA } from "../../data/servicesData";

function getSubUrl(catHref: string, subTitle: string): string {
  const match = SUB_SERVICES_DATA.find(s => s.title.toLowerCase() === subTitle.toLowerCase());
  if (match) {
    return `/services/${match.categorySlug}/${match.slug}`;
  }
  const fallbackSlug = subTitle.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  const catSlug = catHref.split('/').pop() || "sap";
  return `/services/${catSlug}/${fallbackSlug}`;
}

const NAV_LINKS = [
  { label: "What We Do", href: "/services", dropdown: "what-we-do" },
  { label: "Perspectives", href: "/blog", dropdown: "perspectives" },
  { label: "Who We Are", href: "/about", dropdown: "who-we-are" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

type ProductItem = { name: string; desc: string; href: string; img?: string; icon: any; gradient: string };

export const PRODUCTS: ProductItem[] = [
  { name: "Suraksha", desc: "Field Safety Platform", href: "/products/suraksha", img: "/suraksha.png", icon: ShieldCheck, gradient: "from-teal-500 to-cyan-600" },
  { name: "Tyre Health", desc: "Fleet Lifecycle Tracking", href: "/products/tyre-health", img: "/woms.png", icon: Wrench, gradient: "from-blue-500 to-indigo-600" },
  { name: "QMS", desc: "Quality Management System", href: "/products/qms", img: "/qms.png", icon: Layers, gradient: "from-fuchsia-500 to-violet-600" },
  { name: "CWMS", desc: "Contractor Workforce Management", href: "/products/cwms", img: "/LMS.png", icon: Boxes, gradient: "from-cyan-500 to-blue-600" },
  { name: "Supplier Portal", desc: "Vendor Onboarding & SAP", href: "/products/supplier-portal", img: "/vanijya.png", icon: ShoppingBag, gradient: "from-violet-500 to-purple-600" },
  { name: "PJP", desc: "Pre Journey Plan & Tracking", href: "/products/pjp", img: "/IFSM.png", icon: TrendingUp, gradient: "from-indigo-500 to-blue-600" },
];

type IndustryNavItem = { name: string; desc: string; href: string; icon: any; gradient: string };

export const INDUSTRIES_NAV: IndustryNavItem[] = [
  { name: "Mining", desc: "Pit-to-port ERP, fleet telemetry", href: "/industries/mining", icon: Pickaxe, gradient: "from-amber-600 to-orange-700" },
  { name: "Discrete Manufacturing", desc: "Smart factory SAP RISE, QMS", href: "/industries/discrete-manufacturing", icon: Factory, gradient: "from-blue-600 to-cyan-700" },
  { name: "Capital Goods", desc: "ETO project systems, service", href: "/industries/capital-goods", icon: Boxes, gradient: "from-violet-600 to-purple-700" },
  { name: "Transportation & Logistics", desc: "Tyre health, route PJP", href: "/industries/transportation-services-logistics", icon: Truck, gradient: "from-teal-600 to-emerald-700" },
  { name: "Utilities", desc: "Grid IS-U, IT/OT zero-trust", href: "/industries/utilities", icon: Zap, gradient: "from-yellow-500 to-amber-600" },
  { name: "Engineering & Construction", desc: "EC&O controls, contractor CWMS", href: "/industries/engineering-construction-operations", icon: Building2, gradient: "from-slate-600 to-zinc-800" },
];

const MEGA_SERVICES = [
  { name: "Digital Transformation", categoryMap: ["CXO Advisory"], href: "/services/cxo-advisory", icon: Rocket, desc: "Strategic tech advisory" },
  { name: "Cloud Services", categoryMap: ["IT Infrastructure"], href: "/services/it-infrastructure", icon: Cloud, desc: "AWS, Azure, and Hybrid cloud" },
  { name: "AI & Machine Learning", categoryMap: ["Analytics"], href: "/services/analytics", icon: Brain, desc: "Predictive & Generative AI" },
  { name: "Data & Analytics", categoryMap: ["Analytics"], href: "/services/analytics", icon: BarChart3, desc: "Data lakes & BI dashboards" },
  { name: "Enterprise Applications", categoryMap: ["SAP", "Zoho"], href: "/services/sap", icon: Blocks, desc: "SAP S/4HANA & Zoho Suite" },
  { name: "IT Infrastructure", categoryMap: ["IT Infrastructure"], href: "/services/it-infrastructure", icon: Server, desc: "Network & hardware management" },
  { name: "Cybersecurity", categoryMap: ["Cyber Security"], href: "/services/cyber-security", icon: ShieldCheck, desc: "Zero-trust & ISO 27001" },
  { name: "Managed Services", categoryMap: ["IT Infrastructure"], href: "/services/it-infrastructure", icon: Wrench, desc: "24/7 AMC and operational support" },
  { name: "Software Development", categoryMap: ["Software Development"], href: "/services/software-development", icon: Code2, desc: "Custom web & mobile apps" },
];

const WHO_WE_ARE = [
  { name: "About Us", href: "/about", icon: Building2, desc: "Company overview & heritage" },
  { name: "Leadership & Team", href: "/team", icon: Users, desc: "Our executive and practice leads" },
  { name: "Culture", href: "/careers", icon: Award, desc: "Life at Acceleron" },
  { name: "CSR", href: "/csr", icon: Leaf, desc: "Community & sustainability" },
];

const PERSPECTIVES = [
  { name: "Blog", href: "/blog", icon: FileText, desc: "Latest insights & articles" },
  { name: "News", href: "/news", icon: Newspaper, desc: "Company news & announcements" },
  { name: "Events", href: "/events", icon: Calendar, desc: "Upcoming webinars & meetups" },
  { name: "Gallery", href: "/gallery", icon: ImageIcon, desc: "Photos and highlights" },
];

export const SERVICE_CATEGORIES = MEGA_SERVICES;

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [hoveredService, setHoveredService] = useState<typeof MEGA_SERVICES[0] | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (dropdown: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setHoveredService(null);
    }, 150);
  };

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    h(); window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveDropdown(null);
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 dark:bg-slate-950/90 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 py-1 shadow-md"
          : "bg-white/90 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-800/60 py-2 shadow-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center text-foreground" aria-label="Acceleron Solutions Home">
          <img
            src="/logo.png"
            alt="Acceleron Solutions"
            className="h-12 lg:h-16 object-contain dark:brightness-0 dark:invert opacity-95 transition-all hover:scale-105 hover:opacity-100"
          />
        </Link>
        <nav className="hidden items-center gap-2 lg:flex" role="navigation" aria-label="Main Navigation">
          {NAV_LINKS.map((l) => (
            <div 
              key={l.label} 
              className="relative"
              onMouseEnter={() => l.dropdown ? handleMouseEnter(l.dropdown) : undefined}
              onMouseLeave={l.dropdown ? handleMouseLeave : undefined}
            >
              {l.dropdown ? (
                <button
                  aria-haspopup="true"
                  aria-expanded={activeDropdown === l.dropdown}
                  onClick={() => setActiveDropdown(activeDropdown === l.dropdown ? null : l.dropdown)}
                  className={`flex items-center gap-1 rounded-full px-4 py-2 text-base font-semibold transition-all ${activeDropdown === l.dropdown ? 'text-brand-red dark:text-brand bg-slate-100 dark:bg-slate-800/50' : 'text-slate-800 dark:text-slate-200 hover:text-brand-red dark:hover:text-brand hover:bg-slate-100 dark:hover:bg-slate-800/50'}`}
                >
                  {l.label}
                  <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === l.dropdown ? 'rotate-180' : 'opacity-70'}`} />
                </button>
              ) : (
                <Link
                  to={l.href as any}
                  onClick={() => setActiveDropdown(null)}
                  className={`flex items-center gap-1 rounded-full px-4 py-2 text-base font-semibold transition-all ${activeDropdown === l.dropdown ? 'text-brand-red dark:text-brand bg-slate-100 dark:bg-slate-800/50' : 'text-slate-800 dark:text-slate-200 hover:text-brand-red dark:hover:text-brand hover:bg-slate-100 dark:hover:bg-slate-800/50'}`}
                >
                  {l.label}
                </Link>
              )}

              {/* What We Do Mega Menu */}
              <AnimatePresence>
                {l.dropdown === "what-we-do" && activeDropdown === "what-we-do" && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="fixed left-1/2 top-[76px] w-[min(95vw,1000px)] -translate-x-1/2 z-50 max-h-[85vh] overflow-y-auto"
                  >
                    <div className="bg-background/95 backdrop-blur-xl border border-border rounded-3xl p-6 shadow-glow grid grid-cols-12 gap-8">
                      {/* Services Column */}
                      <div className="col-span-5">
                        <div className="text-xs font-bold uppercase tracking-widest text-brand-red mb-4">Core Services</div>
                        <div className="grid gap-2">
                          {MEGA_SERVICES.map((cat) => (
                              <Link 
                                key={cat.name} 
                                to={cat.href as any} 
                                onClick={() => setActiveDropdown(null)} 
                                onMouseEnter={() => setHoveredService(cat)}
                                className={`group flex flex-col justify-center rounded-xl p-3 transition-all border ${hoveredService?.name === cat.name ? 'border-brand/30 bg-muted/60 dark:bg-muted/20 shadow-sm' : 'border-border/40 bg-muted/10 hover:border-brand/30 hover:bg-muted/40 dark:hover:bg-muted/10'}`}
                              >
                                <div className={`text-sm font-bold transition-colors flex items-center justify-between ${hoveredService?.name === cat.name ? 'text-brand' : 'text-foreground group-hover:text-brand'}`}>
                                  {cat.name}
                                  <ArrowRight className={`h-4 w-4 transition-all ${hoveredService?.name === cat.name ? 'opacity-100 translate-x-0 text-brand' : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-brand'}`} />
                                </div>
                              </Link>
                          ))}
                          <div className="my-1 border-t border-border/60" />
                          <button 
                            onMouseEnter={() => setHoveredService(null)}
                            onClick={() => {
                              setActiveDropdown(null);
                            }}
                            className={`group flex flex-col justify-center rounded-xl p-3 transition-all text-left border ${!hoveredService ? 'border-brand/30 bg-muted/60 dark:bg-muted/20 shadow-sm' : 'border-border/40 bg-muted/10 hover:border-brand/30 hover:bg-muted/40 dark:hover:bg-muted/10'}`}
                          >
                            <div className={`text-sm font-bold transition-colors flex items-center justify-between ${!hoveredService ? 'text-brand' : 'text-foreground group-hover:text-brand'}`}>
                              Products & Industries
                              <ArrowRight className={`h-4 w-4 transition-all ${!hoveredService ? 'opacity-100 translate-x-0 text-brand' : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 text-brand'}`} />
                            </div>
                          </button>
                        </div>
                      </div>
                      
                      {/* Products & Industries Columns / Sub-Services Column */}
                      <div className="col-span-7 border-l border-border pl-8">
                        {hoveredService ? (
                          <div>
                            <div className="text-xs font-bold uppercase tracking-widest text-brand-red mb-4 flex items-center gap-2">
                              {hoveredService.name} Sub-Services
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              {SUB_SERVICES_DATA.filter(sub => hoveredService.categoryMap.includes(sub.category)).map((sub) => {
                                const subUrl = getSubUrl(hoveredService.href, sub.title);
                                return (
                                  <Link 
                                    key={sub.slug} 
                                    to={subUrl as any} 
                                    onClick={() => setActiveDropdown(null)}
                                    className="group flex flex-col justify-center rounded-xl transition-all p-3 border border-border/40 bg-muted/10 hover:border-brand/30 hover:bg-muted/30 shadow-sm"
                                  >
                                    <div className="flex items-center justify-between text-sm font-semibold text-foreground group-hover:text-brand transition-colors w-full">
                                      <div className="flex items-center gap-1.5">
                                        {sub.title}
                                      </div>
                                      <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-brand" />
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        ) : (
                          <div className="grid grid-cols-2 gap-8 divide-x divide-border/50">
                        <div className="pr-4">
                          <div className="text-xs font-bold uppercase tracking-widest text-brand-red mb-4">Enterprise Products</div>
                          <div className="grid gap-3">
                            {PRODUCTS.map((p) => (
                              <Link key={p.name} to={p.href as any} onClick={() => setActiveDropdown(null)} className="group flex flex-col justify-center rounded-xl transition-all p-3 border border-border/40 bg-muted/10 hover:border-brand/30 hover:bg-muted/30 shadow-sm">
                                <div className="flex items-center justify-between text-sm font-semibold text-foreground group-hover:text-brand transition-colors w-full">
                                  <div className="flex items-center gap-1.5">
                                    {p.name}
                                  </div>
                                  <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-brand" />
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>

                        <div className="pl-4">
                          <div className="text-xs font-bold uppercase tracking-widest text-brand-red mb-4">Industries</div>
                          <div className="grid gap-3">
                            {INDUSTRIES_NAV.map((ind) => (
                              <Link key={ind.name} to={ind.href as any} onClick={() => setActiveDropdown(null)} className="group flex flex-col justify-center rounded-xl transition-all p-3 border border-border/40 bg-muted/10 hover:border-brand/30 hover:bg-muted/30 shadow-sm">
                                <div className="flex items-center justify-between text-sm font-semibold text-foreground group-hover:text-brand transition-colors w-full">
                                  <div className="flex items-center gap-1.5">
                                    {ind.name}
                                  </div>
                                  <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-brand" />
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                      )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Who We Are Dropdown */}
              <AnimatePresence>
                {l.dropdown === "who-we-are" && activeDropdown === "who-we-are" && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="fixed left-1/2 top-[76px] w-[min(95vw,600px)] -translate-x-1/2 z-50 max-h-[85vh] overflow-y-auto"
                  >
                    <div className="bg-background/95 backdrop-blur-xl border border-border rounded-3xl p-6 shadow-glow">
                      <div className="text-xs font-bold uppercase tracking-widest text-brand-red mb-4">Discover Acceleron</div>
                      <div className="grid grid-cols-2 gap-4">
                        {WHO_WE_ARE.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href as any}
                            onClick={() => setActiveDropdown(null)}
                            className="group flex flex-col justify-center rounded-xl transition-all p-3 border border-border/40 bg-muted/10 hover:border-brand/30 hover:bg-muted/30 shadow-sm"
                          >
                            <div className="flex items-center justify-between text-sm font-semibold text-foreground group-hover:text-brand transition-colors w-full">
                              <div className="flex items-center gap-1.5">
                                <item.icon className="h-4 w-4 text-brand-red group-hover:text-brand transition-colors" />
                                {item.name}
                              </div>
                              <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-brand" />
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Perspectives Dropdown */}
              <AnimatePresence>
                {l.dropdown === "perspectives" && activeDropdown === "perspectives" && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="fixed left-1/2 top-[76px] w-[min(95vw,600px)] -translate-x-1/2 z-50 max-h-[85vh] overflow-y-auto"
                  >
                    <div className="bg-background/95 backdrop-blur-xl border border-border rounded-3xl p-6 shadow-glow">
                      <div className="text-xs font-bold uppercase tracking-widest text-brand-red mb-4">Insights & News</div>
                      <div className="grid grid-cols-2 gap-4">
                        {PERSPECTIVES.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href as any}
                            onClick={() => setActiveDropdown(null)}
                            className="group flex flex-col justify-center rounded-xl transition-all p-3 border border-border/40 bg-muted/10 hover:border-brand/30 hover:bg-muted/30 shadow-sm"
                          >
                            <div className="flex items-center justify-between text-sm font-semibold text-foreground group-hover:text-brand transition-colors w-full">
                              <div className="flex items-center gap-1.5">
                                <item.icon className="h-4 w-4 text-brand-red group-hover:text-brand transition-colors" />
                                {item.name}
                              </div>
                              <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-brand" />
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-6 py-2.5 text-sm font-bold text-white shadow-glow transition-all hover:scale-105 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
            Get in touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <button 
          className="lg:hidden text-foreground p-2 rounded-md hover:bg-muted/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring" 
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle mobile menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-t border-border mt-3 p-4 shadow-xl max-h-[85vh] overflow-y-auto"
          >
            <div className="mx-auto max-w-7xl px-2 py-2 flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <div key={l.label}>
                  {l.dropdown === "what-we-do" ? (
                    <>
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === "what-we-do" ? null : "what-we-do")}
                        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-foreground/90 hover:bg-muted/50 transition-colors"
                        aria-expanded={mobileExpanded === "what-we-do"}
                      >
                        {l.label}
                        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${mobileExpanded === "what-we-do" ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === "what-we-do" && (
                          <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                            <div className="pl-6 pb-4 space-y-4 pt-2">
                              <div>
                                <div className="text-xs font-bold text-brand-red mb-2 uppercase tracking-wider">Services</div>
                                {MEGA_SERVICES.map((cat) => (
                                  <Link key={cat.name} to={cat.href as any} onClick={() => setOpen(false)} className="block rounded-lg py-2 text-sm text-foreground/70 hover:text-brand transition-colors">
                                    {cat.name}
                                  </Link>
                                ))}
                              </div>
                              <div>
                                <div className="text-xs font-bold text-brand-red mb-2 uppercase tracking-wider">Products</div>
                                {PRODUCTS.map((p) => (
                                  <Link key={p.name} to={p.href as any} onClick={() => setOpen(false)} className="block rounded-lg py-2 text-sm text-foreground/70 hover:text-brand transition-colors">
                                    {p.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : l.dropdown === "who-we-are" ? (
                    <>
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === "who-we-are" ? null : "who-we-are")}
                        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-foreground/90 hover:bg-muted/50 transition-colors"
                        aria-expanded={mobileExpanded === "who-we-are"}
                      >
                        {l.label}
                        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${mobileExpanded === "who-we-are" ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === "who-we-are" && (
                          <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                            <div className="pl-6 pb-2 space-y-1 pt-1">
                              {WHO_WE_ARE.map((item) => (
                                <Link key={item.name} to={item.href as any} onClick={() => setOpen(false)} className="block rounded-lg py-2.5 text-sm text-foreground/70 hover:text-brand transition-colors">
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : l.dropdown === "perspectives" ? (
                    <>
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === "perspectives" ? null : "perspectives")}
                        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-foreground/90 hover:bg-muted/50 transition-colors"
                        aria-expanded={mobileExpanded === "perspectives"}
                      >
                        {l.label}
                        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${mobileExpanded === "perspectives" ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === "perspectives" && (
                          <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                            <div className="pl-6 pb-2 space-y-1 pt-1">
                              {PERSPECTIVES.map((item) => (
                                <Link key={item.name} to={item.href as any} onClick={() => setOpen(false)} className="block rounded-lg py-2.5 text-sm text-foreground/70 hover:text-brand transition-colors">
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link to={l.href as any} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-semibold text-foreground/90 hover:bg-muted/50 transition-colors">
                      {l.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="mt-6 flex flex-col gap-4 border-t border-border pt-6 pb-2">
                <div className="flex items-center justify-between px-2">
                  <span className="text-sm font-semibold text-foreground/80">Theme</span>
                  <ThemeToggle />
                </div>
                <Link to="/contact" onClick={() => setOpen(false)} className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gradient py-3.5 text-sm font-bold text-white shadow-glow">
                  Get in touch <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export { Nav };
