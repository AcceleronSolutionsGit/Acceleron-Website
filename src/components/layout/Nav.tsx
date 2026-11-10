import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  ShoppingBag,
  Wrench,
  Boxes,
  ShieldCheck,
  Layers,
  Code2,
  Briefcase,
  Building2,
  Users,
  Pickaxe,
  Factory,
  Truck,
  Brain,
  Award,
  MonitorSmartphone,
  Leaf,
  FileText,
  Newspaper,
  Image as ImageIcon,
  Blocks,
  Calendar,
  Activity,
} from "lucide-react";
import { ThemeToggle } from "../ui/ThemeToggle";
import { Link, useLocation } from "@tanstack/react-router";
import { ZohoLogo } from "../ui/Icons";
import { SUB_SERVICES_DATA } from "../../data/servicesData";
import { getAssetUrl } from "../../lib/assets";

/** Great Place To Work Certified display window: June 1, 2026 through June 30, 2027. */
const GPTW_START_MS = Date.UTC(2026, 5, 1, 0, 0, 0);
const GPTW_END_MS = Date.UTC(2027, 5, 30, 23, 59, 59, 999);

function isWithinGptwWindow(timestamp: number = Date.now()): boolean {
  return timestamp >= GPTW_START_MS && timestamp <= GPTW_END_MS;
}

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
  { label: "Services", href: "/services", dropdown: "what-we-do" },
  { label: "Insights", href: "/blog", dropdown: "perspectives" },
  { label: "Who We Are", href: "/about", dropdown: "who-we-are" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact" },
];

type ProductItem = { name: string; desc: string; href: string; img?: string; icon: any; gradient: string };

export const PRODUCTS: ProductItem[] = [
  { name: "Suraksha", desc: "Field Safety Platform", href: "/products/suraksha", img: "/suraksha.png", icon: ShieldCheck, gradient: "from-teal-500 to-cyan-600" },
  { name: "iFMS", desc: "Intelligent Field Management", href: "/products/ifms", img: "/IFSM.png", icon: Truck, gradient: "from-amber-600 to-orange-700" },
  { name: "WOMS", desc: "Work Order Management System", href: "/products/woms", img: "/woms.png", icon: Wrench, gradient: "from-blue-600 to-indigo-700" },
  { name: "QMS", desc: "Quality Management System", href: "/products/qms", img: "/qms.png", icon: Layers, gradient: "from-fuchsia-500 to-violet-600" },
  { name: "Vanijya", desc: "Commercial Billing & Retail", href: "/products/vanijya", img: "/vanijya.png", icon: ShoppingBag, gradient: "from-indigo-500 to-blue-600" },
  { name: "CWMS", desc: "Contractor Workforce Management", href: "/products/cwms", img: "/LMS.png", icon: Boxes, gradient: "from-cyan-500 to-blue-600" },
  { name: "Inplant Logistics", desc: "Material & Fleet Flow", href: "/products/inplant-logistics", icon: Truck, gradient: "from-emerald-500 to-teal-600" },
  { name: "Tyre Health", desc: "Fleet Lifecycle Tracking", href: "/products/tyre-health", icon: Activity, gradient: "from-blue-500 to-indigo-600" },
];

export const PRODUCT_HUBS = [
  { name: "Industrial Solutions", desc: "QMS, WOMS, Logistics & Safety", href: "/products/industrial-solutions", icon: Factory },
  { name: "CX Solutions", desc: "iFMS, Vanijya, Loyalty & Sales", href: "/products/cx-solutions", icon: ShoppingBag },
  { name: "People Solutions", desc: "Workforce, Attendance & Appraisals", href: "/products/people-solutions", icon: Users },
  { name: "Office Digitization", desc: "Approvals, Treasury, AI & EDMS", href: "/products/office-digitization", icon: Brain },
];

type IndustryNavItem = { name: string; desc: string; href: string; icon: any; gradient: string };

export const INDUSTRIES_NAV: IndustryNavItem[] = [
  { name: "Mining", desc: "Pit-to-port ERP, fleet telemetry", href: "/industries/mining", icon: Pickaxe, gradient: "from-amber-600 to-orange-700" },
  { name: "Manufacturing", desc: "Smart factory SAP RISE, QMS", href: "/industries/discrete-manufacturing", icon: Factory, gradient: "from-blue-600 to-cyan-700" },
  { name: "Capital Goods", desc: "ETO project systems, service", href: "/industries/capital-goods", icon: Boxes, gradient: "from-violet-600 to-purple-700" },
  { name: "Transportation & Logistics", desc: "Tyre health, route PJP", href: "/industries/transportation-services-logistics", icon: Truck, gradient: "from-teal-600 to-emerald-700" },
  { name: "Healthcare", desc: "Precision tech, compliance, traceability", href: "/industries/healthcare", icon: Activity, gradient: "from-rose-500 to-red-600" },
  { name: "Engineering & Construction", desc: "EC&O controls, contractor CWMS", href: "/industries/engineering-construction-operations", icon: Building2, gradient: "from-slate-600 to-zinc-800" },
];

const MEGA_SERVICES = [
  { name: "SAP", categoryMap: ["SAP"], href: "/services/sap", icon: Blocks, desc: "S/4HANA, AMS & Migration" },
  { name: "IT & Custom Solutions", categoryMap: ["IT & Custom Solutions"], href: "/services/it-custom-solutions", icon: Code2, desc: "Infrastructure, Security & AI" },
  { name: "Zoho", categoryMap: ["Zoho"], href: "/services/zoho", icon: ZohoLogo, desc: "CRM, HRMS & Finance" },
  { name: "ManageEngine", categoryMap: ["ManageEngine"], href: "/services/manageengine", icon: MonitorSmartphone, desc: "ITSM, MDM & Operations" },
];

const WHO_WE_ARE = [
  { name: "About Us", href: "/about", icon: Building2, desc: "Company overview & heritage" },
  { name: "Our Clients", href: "/clients", icon: ShieldCheck, desc: "Enterprises that trust us" },
  { name: "Leadership & Team", href: "/team", icon: Users, desc: "Our executive and practice leads" },
  { name: "Culture", href: "/culture", icon: Award, desc: "Life at Acceleron" },
  { name: "CSR", href: "/csr", icon: Leaf, desc: "Community & social impact" },
  { name: "Partners", href: "/partners", icon: Briefcase, desc: "Our trusted ecosystem" },
];

const PERSPECTIVES = [
  { name: "Blog", href: "/blog", icon: FileText, desc: "Latest insights & articles" },
  { name: "News", href: "/news", icon: Newspaper, desc: "Company news & announcements" },
  { name: "Events", href: "/events", icon: Calendar, desc: "Upcoming webinars & meetups" },
  { name: "Gallery", href: "/gallery", icon: ImageIcon, desc: "Photos and highlights" },
];

export const SERVICE_CATEGORIES = MEGA_SERVICES;

function isNavLinkActive(pathname: string, link: (typeof NAV_LINKS)[number]): boolean {
  if (link.dropdown === "what-we-do") {
    return (
      pathname.startsWith("/services") ||
      pathname.startsWith("/products") ||
      pathname.startsWith("/industries")
    );
  }
  if (link.dropdown === "perspectives") {
    return PERSPECTIVES.some((item) => pathname === item.href || pathname.startsWith(`${item.href}/`));
  }
  if (link.dropdown === "who-we-are") {
    return WHO_WE_ARE.some((item) => pathname === item.href || pathname.startsWith(`${item.href}/`));
  }
  return pathname === link.href || pathname.startsWith(`${link.href}/`);
}

function Nav() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string>("SAP");
  const [showGptwBadge, setShowGptwBadge] = useState(() => isWithinGptwWindow());
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (dropdown: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setHoveredItem("SAP");
    }, 150);
  };

  // Close menus automatically upon route navigation
  useEffect(() => {
    setOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Re-evaluate certification display window on mount
  useEffect(() => {
    setShowGptwBadge(isWithinGptwWindow());
  }, []);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    h();
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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

  const renderGridDropdown = (
    heading: string,
    items: typeof WHO_WE_ARE,
  ) => (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6 }}
      transition={{ duration: 0.16, ease: "easeOut" }}
      className={`fixed left-1/2 ${scrolled ? "top-16" : "top-[72px]"} pt-2 w-[min(94vw,540px)] -translate-x-1/2 z-50`}
    >
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 sm:p-5 shadow-xl shadow-slate-900/10 dark:shadow-black/50 max-h-[80vh] overflow-y-auto">
        <div className="text-[11px] font-bold uppercase tracking-widest text-brand-red mb-3 px-1">
          {heading}
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          {items.map((item) => {
            const itemActive =
              location.pathname === item.href ||
              location.pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.name}
                to={item.href as any}
                onClick={() => setActiveDropdown(null)}
                className={`group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors border ${itemActive
                  ? "border-brand-red/25 bg-red-50/70 dark:bg-brand-red/10"
                  : "border-transparent hover:border-slate-200/80 dark:hover:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/70"
                  }`}
              >
                <div className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors ${itemActive
                  ? "bg-brand-red/15 text-brand-red"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-brand-red/10 group-hover:text-brand-red"
                  }`}>
                  <item.icon className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-1 text-sm font-semibold text-foreground group-hover:text-brand-red transition-colors">
                    <span className="truncate">{item.name}</span>
                    <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-brand-red shrink-0" />
                  </div>
                  {item.desc && (
                    <p className="text-[11px] text-muted-foreground mt-0.5 line-clamp-1">
                      {item.desc}
                    </p>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </motion.div>
  );

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 bg-white dark:bg-slate-950 transition-all duration-300 ${scrolled
        ? "border-b border-slate-200 dark:border-slate-800 shadow-md"
        : "border-b border-slate-200/80 dark:border-slate-800/80 shadow-xs"
        }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 transition-[height] duration-500 ${scrolled ? "h-14 lg:h-16" : "h-16 lg:h-[72px]"}`}
      >
        <Link
          to="/"
          className="flex items-center text-foreground shrink-0"
          aria-label="Acceleron Solutions Home"
          onClick={() => setOpen(false)}
        >
          <img
            src={getAssetUrl("/logo.png")}
            alt="Acceleron Solutions"
            className="h-10 sm:h-11 lg:h-12 w-auto object-contain dark:brightness-0 dark:invert opacity-95 transition-all hover:scale-105 hover:opacity-100"
          />
        </Link>
        <nav
          className="hidden items-center gap-1 xl:gap-1.5 lg:flex"
          role="navigation"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((l) => {
            const active = isNavLinkActive(location.pathname, l);
            const isOpen = Boolean(l.dropdown && activeDropdown === l.dropdown);
            const navPillClass = `flex items-center gap-1 rounded-full px-3 xl:px-4 py-2 text-sm xl:text-[15px] font-semibold transition-all whitespace-nowrap ${isOpen || active
              ? "text-brand-red dark:text-brand bg-red-50/80 dark:bg-slate-800/70"
              : "text-slate-800 dark:text-slate-200 hover:text-brand-red dark:hover:text-brand hover:bg-slate-100/80 dark:hover:bg-slate-800/50"
              }`;

            return (
              <div
                key={l.label}
                className="relative"
                onMouseEnter={() => {
                  if (l.dropdown) {
                    handleMouseEnter(l.dropdown);
                  } else {
                    if (timeoutRef.current) clearTimeout(timeoutRef.current);
                    setActiveDropdown(null);
                  }
                }}
                onMouseLeave={l.dropdown ? handleMouseLeave : undefined}
              >
                {l.dropdown ? (
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={activeDropdown === l.dropdown}
                    onClick={() =>
                      setActiveDropdown(activeDropdown === l.dropdown ? null : l.dropdown)
                    }
                    className={navPillClass}
                  >
                    {l.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === l.dropdown ? "rotate-180" : "opacity-70"
                        }`}
                    />
                  </button>
                ) : (
                  <Link
                    to={l.href as any}
                    onClick={() => setActiveDropdown(null)}
                    className={navPillClass}
                  >
                    {l.label}
                  </Link>
                )}

                {/* What We Do Mega Menu */}
                <AnimatePresence>
                  {l.dropdown === "what-we-do" && activeDropdown === "what-we-do" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.16, ease: "easeOut" }}
                      className={`fixed left-1/2 ${scrolled ? "top-16" : "top-[72px]"} pt-2 w-[min(94vw,760px)] -translate-x-1/2 z-50`}
                    >
                      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl shadow-slate-900/10 dark:shadow-black/50 overflow-hidden grid grid-cols-12">
                        {/* Left Column — Practice Categories + Products */}
                        <div className="col-span-4 bg-slate-50 dark:bg-slate-950/60 p-3 border-r border-slate-200/80 dark:border-slate-800">
                          <div className="px-3 pt-1 pb-2 text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                            Practices
                          </div>
                          <div className="space-y-0.5">
                            {MEGA_SERVICES.map((cat) => (
                              <Link
                                key={cat.name}
                                to={cat.href as any}
                                onClick={() => setActiveDropdown(null)}
                                onMouseEnter={() => setHoveredItem(cat.name)}
                                className={`group flex items-center justify-between w-full rounded-lg px-3 py-2 transition-colors text-left border ${hoveredItem === cat.name
                                  ? "bg-white dark:bg-slate-800 border-slate-200/80 dark:border-slate-700 text-brand-red shadow-xs"
                                  : "border-transparent text-slate-700 dark:text-slate-300 hover:bg-white/70 dark:hover:bg-slate-800/50 hover:text-brand-red"
                                  }`}
                              >
                                <span className="text-[13px] font-semibold leading-snug">
                                  {cat.name}
                                </span>
                                <ChevronDown
                                  className={`h-3.5 w-3.5 -rotate-90 shrink-0 transition-opacity ${hoveredItem === cat.name
                                    ? "opacity-100 text-brand-red"
                                    : "opacity-0 group-hover:opacity-50"
                                    }`}
                                />
                              </Link>
                            ))}
                            <div className="my-2 border-t border-slate-200/80 dark:border-slate-800" />
                            <Link
                              to="/products"
                              onClick={() => setActiveDropdown(null)}
                              onMouseEnter={() => setHoveredItem("products")}
                              className={`group flex items-center justify-between w-full rounded-lg px-3 py-2 transition-colors text-left border ${hoveredItem === "products"
                                ? "bg-white dark:bg-slate-800 border-slate-200/80 dark:border-slate-700 text-brand-red shadow-xs"
                                : "border-transparent text-slate-700 dark:text-slate-300 hover:bg-white/70 dark:hover:bg-slate-800/50 hover:text-brand-red"
                                }`}
                            >
                              <span className="text-[13px] font-semibold leading-snug">
                                Products
                              </span>
                              <ChevronDown
                                className={`h-3.5 w-3.5 -rotate-90 shrink-0 transition-opacity ${hoveredItem === "products"
                                  ? "opacity-100 text-brand-red"
                                  : "opacity-0 group-hover:opacity-50"
                                  }`}
                              />
                            </Link>
                          </div>
                        </div>

                        {/* Right Column — Sub-items */}
                        <div className="col-span-8 p-4 sm:p-5 bg-white dark:bg-slate-900 max-h-[75vh] overflow-y-auto">
                          {hoveredItem === "products" ? (
                            <>
                              <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-slate-100 dark:border-slate-800">
                                <Link
                                  to="/products"
                                  onClick={() => setActiveDropdown(null)}
                                  className="text-xs font-bold uppercase tracking-widest text-brand-red hover:text-brand transition-colors flex items-center gap-1.5 group/header"
                                >
                                  <span>Solution Hubs</span>
                                  <ArrowRight className="h-3 w-3 opacity-70 transition-transform group-hover/header:translate-x-0.5" />
                                </Link>
                                <Link
                                  to="/products"
                                  onClick={() => setActiveDropdown(null)}
                                  className="text-[11px] font-semibold text-muted-foreground hover:text-brand transition-colors flex items-center gap-1"
                                >
                                  <span>All 20 Products</span>
                                  <ArrowRight className="h-3 w-3" />
                                </Link>
                              </div>

                              {/* 4 Dedicated Category Landing Hubs */}
                              <div className="grid grid-cols-2 gap-2 mb-3">
                                {PRODUCT_HUBS.map((hub) => (
                                  <Link
                                    key={hub.name}
                                    to={hub.href as any}
                                    onClick={() => setActiveDropdown(null)}
                                    className="group rounded-xl border border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/40 hover:bg-red-50/60 dark:hover:bg-slate-800 hover:border-brand-red/30 p-2.5 transition-colors block"
                                  >
                                    <div className="flex items-center gap-2 mb-0.5">
                                      <hub.icon className="h-3.5 w-3.5 text-brand-red shrink-0" />
                                      <span className="text-xs font-bold text-foreground group-hover:text-brand-red transition-colors">
                                        {hub.name}
                                      </span>
                                    </div>
                                    <div className="text-[11px] text-muted-foreground line-clamp-1">
                                      {hub.desc}
                                    </div>
                                  </Link>
                                ))}
                              </div>

                              {/* Featured Applications */}
                              <div className="pt-2.5 border-t border-slate-100 dark:border-slate-800">
                                <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mb-1.5 px-1">
                                  Featured Applications
                                </div>
                                <div className="grid grid-cols-2 gap-1">
                                  {PRODUCTS.map((p) => (
                                    <Link
                                      key={p.name}
                                      to={p.href as any}
                                      onClick={() => setActiveDropdown(null)}
                                      className="group flex items-center justify-between rounded-lg px-2.5 py-1.5 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/70"
                                    >
                                      <div className="truncate pr-1">
                                        <div className="text-xs font-medium text-foreground group-hover:text-brand-red transition-colors truncate">
                                          {p.name}
                                        </div>
                                        <div className="text-[10px] text-muted-foreground truncate">
                                          {p.desc}
                                        </div>
                                      </div>
                                      <ArrowRight className="h-3 w-3 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 text-brand-red shrink-0" />
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </>
                          ) : (
                            (() => {
                              const activeService = MEGA_SERVICES.find(
                                (s) => s.name === hoveredItem,
                              );
                              const subServices = activeService
                                ? SUB_SERVICES_DATA.filter((sub) =>
                                  activeService.categoryMap.includes(sub.category),
                                )
                                : [];
                              return (
                                <>
                                  <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-slate-100 dark:border-slate-800">
                                    <Link
                                      to={(activeService?.href || "/services") as any}
                                      onClick={() => setActiveDropdown(null)}
                                      className="text-xs font-bold uppercase tracking-widest text-brand-red hover:text-brand transition-colors flex items-center gap-1.5 group/svc"
                                    >
                                      <span>{hoveredItem}</span>
                                      <ArrowRight className="h-3 w-3 opacity-70 transition-transform group-hover/svc:translate-x-0.5" />
                                    </Link>
                                    {activeService?.desc && (
                                      <span className="text-[11px] font-medium text-muted-foreground">
                                        {activeService.desc}
                                      </span>
                                    )}
                                  </div>
                                  <div className="space-y-0.5">
                                    {subServices.map((sub) => {
                                      const subUrl = getSubUrl(
                                        activeService?.href || "",
                                        sub.title,
                                      );
                                      const isSubActive = location.pathname === subUrl;
                                      return (
                                        <Link
                                          key={sub.slug}
                                          to={subUrl as any}
                                          onClick={() => setActiveDropdown(null)}
                                          className={`group flex items-center justify-between rounded-lg px-3 py-1.5 transition-colors ${isSubActive
                                            ? "bg-red-50/70 dark:bg-brand-red/10 text-brand-red"
                                            : "text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/70 hover:text-brand-red"
                                            }`}
                                        >
                                          <span className="text-[13px] font-medium">
                                            {sub.title}
                                          </span>
                                          <ArrowRight className={`h-3.5 w-3.5 transition-all text-brand-red shrink-0 ${isSubActive
                                            ? "opacity-100 translate-x-0"
                                            : "opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0"
                                            }`} />
                                        </Link>
                                      );
                                    })}
                                  </div>
                                </>
                              );
                            })()
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Who We Are Dropdown */}
                <AnimatePresence>
                  {l.dropdown === "who-we-are" &&
                    activeDropdown === "who-we-are" &&
                    renderGridDropdown("Discover Acceleron", WHO_WE_ARE)}
                </AnimatePresence>

                {/* Perspectives Dropdown */}
                <AnimatePresence>
                  {l.dropdown === "perspectives" &&
                    activeDropdown === "perspectives" &&
                    renderGridDropdown("Insights & News", PERSPECTIVES)}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* Right Actions — Desktop: Theme Toggle, GPTW Certification Badge (Jun 2026 - Jun 2027), Get in Touch */}
        <div className="hidden lg:flex h-full items-center gap-2.5 xl:gap-3 shrink-0">
          <ThemeToggle />
          {showGptwBadge && (
            <>
              <span className="h-6 w-px bg-border/70" aria-hidden="true" />
              <Link
                to="/culture"
                aria-label="Great Place To Work Certified — Jun 2026 to Jun 2027 India"
                className="group relative flex h-full items-center shrink-0 transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
              >
                <img
                  src={getAssetUrl("/batch.png")}
                  alt="Great Place To Work Certified (Jun 2026 - Jun 2027) India"
                  className="h-full w-auto object-contain block"
                />
                <div className="pointer-events-none absolute right-0 top-full mt-2 w-64 origin-top-right rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-3.5 opacity-0 shadow-xl shadow-slate-900/10 dark:shadow-black/50 transition-all duration-150 group-hover:opacity-100 group-focus-visible:opacity-100 z-50">
                  <div className="flex items-center gap-3">
                    <img
                      src={getAssetUrl("/batch.png")}
                      alt=""
                      aria-hidden="true"
                      className="h-14 w-auto object-contain shrink-0"
                    />
                    <div className="text-left">
                      <div className="text-[10px] font-bold uppercase tracking-wider text-brand-red">
                        Officially Certified
                      </div>
                      <div className="text-xs font-bold text-foreground leading-snug">
                        Great Place To Work®
                      </div>
                      <div className="text-[11px] font-medium text-muted-foreground mt-0.5">
                        Jun 2026 – Jun 2027 • India
                      </div>
                      <div className="text-[10px] font-semibold text-brand mt-1 flex items-center gap-1">
                        <span>Explore our culture</span>
                        <ArrowRight className="h-2.5 w-2.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </>
          )}
          <Link
            to="/contact"
            hash="form"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-red-600 via-red-600 to-rose-600 px-5 xl:px-6 py-2.5 text-sm font-bold text-white  transition-all hover:scale-[1.03]  focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 shrink-0 whitespace-nowrap"
          >
            Get in touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Mobile Right Actions */}
        <div className="flex h-full items-center gap-2 lg:hidden">
          {showGptwBadge && (
            <Link
              to="/culture"
              onClick={() => setOpen(false)}
              aria-label="Great Place To Work Certified — Jun 2026 to Jun 2027 India"
              className="flex h-full items-center shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-red"
            >
              <img
                src={getAssetUrl("/batch.png")}
                alt="Great Place To Work Certified (Jun 2026 - Jun 2027) India"
                className="h-full w-auto object-contain block"
              />
            </Link>
          )}
          <button
            type="button"
            className="text-foreground p-2 rounded-md hover:bg-muted/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle mobile menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 p-3 sm:p-4 shadow-2xl max-h-[85vh] overflow-y-auto"
          >
            <div className="mx-auto max-w-7xl px-1 sm:px-2 py-2 flex flex-col gap-1.5">
              {NAV_LINKS.map((l) => (
                <div key={l.label}>
                  {l.dropdown === "what-we-do" ? (
                    <>
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === "what-we-do" ? null : "what-we-do")}
                        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-bold text-foreground hover:bg-muted/50 transition-colors"
                        aria-expanded={mobileExpanded === "what-we-do"}
                      >
                        <span className="flex items-center gap-2">
                          <Layers className="h-4 w-4 text-brand-red" />
                          {l.label}
                        </span>
                        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${mobileExpanded === "what-we-do" ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === "what-we-do" && (
                          <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                            <div className="px-2 pb-4 space-y-4 pt-2">
                              {/* Services Grid */}
                              <div>
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-[11px] font-bold text-brand-red uppercase tracking-wider">Practice Areas</span>
                                  <Link to="/services" onClick={() => setOpen(false)} className="text-[11px] text-brand font-semibold hover:underline">
                                    All Services →
                                  </Link>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                  {MEGA_SERVICES.map((cat) => (
                                    <Link
                                      key={cat.name}
                                      to={cat.href as any}
                                      onClick={() => setOpen(false)}
                                      className="flex items-center gap-2 rounded-xl p-2.5 border border-border/60 bg-muted/20 hover:bg-muted/50 hover:border-brand/30 transition-all"
                                    >
                                      <cat.icon className="h-4 w-4 text-brand shrink-0" />
                                      <span className="text-xs font-semibold text-foreground truncate">{cat.name}</span>
                                    </Link>
                                  ))}
                                </div>
                              </div>

                              {/* Products & Hubs Grid */}
                              <div>
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-[11px] font-bold text-brand-red uppercase tracking-wider">Product Ecosystems</span>
                                  <Link to="/products" onClick={() => setOpen(false)} className="text-[11px] text-brand font-semibold hover:underline">
                                    All Products →
                                  </Link>
                                </div>
                                <div className="grid grid-cols-2 gap-2 mb-2">
                                  {PRODUCT_HUBS.map((hub) => (
                                    <Link
                                      key={hub.name}
                                      to={hub.href as any}
                                      onClick={() => setOpen(false)}
                                      className="flex items-center gap-2 rounded-xl p-2.5 border border-border/60 bg-card hover:bg-muted/40 hover:border-brand/30 transition-all"
                                    >
                                      <hub.icon className="h-4 w-4 text-brand-red shrink-0" />
                                      <span className="text-xs font-semibold text-foreground truncate">{hub.name}</span>
                                    </Link>
                                  ))}
                                </div>
                                <div className="grid grid-cols-2 gap-1.5 pt-2 border-t border-border/40">
                                  {PRODUCTS.slice(0, 6).map((p) => (
                                    <Link
                                      key={p.name}
                                      to={p.href as any}
                                      onClick={() => setOpen(false)}
                                      className="flex items-center gap-1.5 rounded-lg py-1 px-2 text-[11px] text-muted-foreground hover:text-brand transition-colors truncate"
                                    >
                                      <span className="h-1 w-1 rounded-full bg-brand shrink-0" />
                                      <span className="truncate">{p.name}</span>
                                    </Link>
                                  ))}
                                </div>
                              </div>

                              {/* Industries Grid */}
                              <div>
                                <div className="flex items-center justify-between mb-2">
                                  <span className="text-[11px] font-bold text-brand-red uppercase tracking-wider">Industry Verticals</span>
                                  <Link to="/industries" onClick={() => setOpen(false)} className="text-[11px] text-brand font-semibold hover:underline">
                                    All Verticals →
                                  </Link>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                  {INDUSTRIES_NAV.map((ind) => (
                                    <Link
                                      key={ind.name}
                                      to={ind.href as any}
                                      onClick={() => setOpen(false)}
                                      className="flex items-center gap-2 rounded-xl p-2.5 border border-border/60 bg-muted/20 hover:bg-muted/50 hover:border-brand/30 transition-all"
                                    >
                                      <ind.icon className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0" />
                                      <span className="text-xs font-semibold text-foreground truncate">{ind.name}</span>
                                    </Link>
                                  ))}
                                </div>
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
                        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-bold text-foreground hover:bg-muted/50 transition-colors"
                        aria-expanded={mobileExpanded === "who-we-are"}
                      >
                        <span className="flex items-center gap-2">
                          <Building2 className="h-4 w-4 text-brand-red" />
                          {l.label}
                        </span>
                        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${mobileExpanded === "who-we-are" ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === "who-we-are" && (
                          <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                            <div className="px-2 pb-3 pt-1">
                              <div className="grid grid-cols-2 gap-2">
                                {WHO_WE_ARE.map((item) => (
                                  <Link
                                    key={item.name}
                                    to={item.href as any}
                                    onClick={() => setOpen(false)}
                                    className="flex items-center gap-2 rounded-xl p-2.5 border border-border/60 bg-muted/20 hover:bg-muted/50 hover:border-brand/30 transition-all"
                                  >
                                    <item.icon className="h-4 w-4 text-brand-red shrink-0" />
                                    <span className="text-xs font-semibold text-foreground truncate">{item.name}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : l.dropdown === "perspectives" ? (
                    <>
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === "perspectives" ? null : "perspectives")}
                        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-bold text-foreground hover:bg-muted/50 transition-colors"
                        aria-expanded={mobileExpanded === "perspectives"}
                      >
                        <span className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-brand-red" />
                          {l.label}
                        </span>
                        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${mobileExpanded === "perspectives" ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === "perspectives" && (
                          <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                            <div className="px-2 pb-3 pt-1">
                              <div className="grid grid-cols-2 gap-2">
                                {PERSPECTIVES.map((item) => (
                                  <Link
                                    key={item.name}
                                    to={item.href as any}
                                    onClick={() => setOpen(false)}
                                    className="flex items-center gap-2 rounded-xl p-2.5 border border-border/60 bg-muted/20 hover:bg-muted/50 hover:border-brand/30 transition-all"
                                  >
                                    <item.icon className="h-4 w-4 text-brand-red shrink-0" />
                                    <span className="text-xs font-semibold text-foreground truncate">{item.name}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link to={l.href as any} onClick={() => setOpen(false)} className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-bold text-foreground hover:bg-muted/50 transition-colors">
                      <span>{l.label}</span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground/60" />
                    </Link>
                  )}
                </div>
              ))}
              <div className="mt-4 flex flex-col gap-3 border-t border-border pt-4 pb-2">
                {showGptwBadge && (
                  <Link
                    to="/culture"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-between gap-3 rounded-xl border border-border/60 bg-muted/30 px-3 py-2.5 transition-colors hover:border-brand-red/40"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={getAssetUrl("/batch.png")}
                        alt="Great Place To Work Certified (Jun 2026 - Jun 2027) India"
                        className="h-12 w-auto object-contain shrink-0"
                      />
                      <div>
                        <div className="text-[10px] font-bold uppercase tracking-wider text-brand-red">
                          Officially Certified
                        </div>
                        <div className="text-xs font-bold text-foreground">
                          Great Place To Work®
                        </div>
                        <div className="text-[11px] text-muted-foreground">
                          Jun 2026 – Jun 2027 • India
                        </div>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0" />
                  </Link>
                )}
                <div className="flex items-center justify-between px-3 py-2 bg-muted/40 rounded-xl border border-border/50">
                  <span className="text-xs font-semibold text-foreground/80">Appearance Mode</span>
                  <ThemeToggle />
                </div>
                <Link to="/contact" hash="form" onClick={() => setOpen(false)} className="btn btn-primary btn-md w-full justify-center">
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
