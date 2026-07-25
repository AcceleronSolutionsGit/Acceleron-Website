import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ArrowUpRight, ArrowRight, Menu, X, ShoppingBag, Wrench, TrendingUp, Boxes, ShieldCheck, Layers, Code2, Server, Briefcase, BarChart3, Building2, Users, Pickaxe, Factory, Truck, Zap } from "lucide-react";
import { ThemeToggle } from "../ui/ThemeToggle";
import { Link } from "@tanstack/react-router";
import { SAPLogo, SalesforceLogo, ZohoLogo } from "../ui/Icons";
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
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about", dropdown: "about" },
  { label: "Services", href: "/services", dropdown: "services" },
  { label: "Products", href: "/products", dropdown: "products" },
  { label: "Industries", href: "/industries", dropdown: "industries" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
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
  { name: "Mining", desc: "Pit-to-port ERP, fleet telemetry & safety", href: "/industries/mining", icon: Pickaxe, gradient: "from-amber-600 to-orange-700" },
  { name: "Discrete Manufacturing", desc: "Smart factory SAP RISE, QMS & IoT", href: "/industries/discrete-manufacturing", icon: Factory, gradient: "from-blue-600 to-cyan-700" },
  { name: "Capital Goods", desc: "ETO project systems, warranty & service", href: "/industries/capital-goods", icon: Boxes, gradient: "from-violet-600 to-purple-700" },
  { name: "Transportation Services & Logistics", desc: "Tyre health, route PJP & freight TM", href: "/industries/transportation-services-logistics", icon: Truck, gradient: "from-teal-600 to-emerald-700" },
  { name: "Utilities", desc: "Grid IS-U, IT/OT zero-trust & metering", href: "/industries/utilities", icon: Zap, gradient: "from-yellow-500 to-amber-600" },
  { name: "Engineering, Construction & Ops", desc: "EC&O controls, contractor CWMS & safety", href: "/industries/engineering-construction-operations", icon: Building2, gradient: "from-slate-600 to-zinc-800" },
];

type ServiceCategory = {
  name: string;
  href: string;
  icon?: any;
  Logo?: any;
  useLogo?: boolean;
  img?: string;
  gradient: string;
  subs: string[];
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  { name: "SAP", href: "/services/sap", img: "/sap_s4hana-transparentbg.png", gradient: "from-blue-600 to-indigo-700", subs: ["SAP HXM, CX", "SAP Analytics", "SAP Cloud Migration", "SAP Managed Services", "RISE with SAP", "S/4 HANA Transformation"] },
  { name: "Zoho", href: "/services/zoho", img: "/ZOHO_logo_2023.svg_.png", gradient: "from-red-500 to-orange-600", subs: ["Zoho WorkDrive", "Zoho Analytics", "Zoho CRM", "Zoho People & Payroll", "Zoho Books", "Zoho ERP"] },
  { name: "Software Dev", href: "/services/software-development", icon: Code2, gradient: "from-emerald-500 to-teal-600", subs: ["Automation Solutions", "Web Development", "Mobile/Web Apps"] },
  { name: "IT Infra & Cloud", href: "/services/it-infrastructure", img: "/AWS_Logo.png", gradient: "from-slate-500 to-zinc-600", subs: ["Infrastructure AMC", "Network Monitoring", "Cloud Infra", "Email Management"] },
  { name: "Salesforce", href: "/services/salesforce", Logo: SalesforceLogo, useLogo: true, gradient: "from-sky-500 to-blue-600", subs: ["Migration", "Implementation", "Lightning Platform", "Service Cloud", "Sales Cloud", "CPQ"] },
  { name: "Cyber Security", href: "/services/cyber-security", icon: ShieldCheck, gradient: "from-amber-500 to-orange-600", subs: ["ISO 27001", "VAPT", "Email Security", "Network Security", "Endpoint Security"] },
  { name: "CXO Advisory", href: "/services/cxo-advisory", icon: Briefcase, gradient: "from-violet-500 to-purple-600", subs: ["Digital Transformation", "IT Roadmap", "Strategic IT Investment"] },
  { name: "Analytics", href: "/services/analytics", img: "/Sap_analytics-cloud.png", gradient: "from-cyan-500 to-blue-600", subs: ["Data Lake", "Visualization & Reporting", "Data Warehousing"] },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    h(); window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 dark:bg-slate-950/90 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 py-3 shadow-md"
          : "bg-white/90 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-800/60 py-4 shadow-sm"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center text-foreground">
          <img
            src="/logo.png"
            alt="Acceleron Solutions"
            className="h-8 object-contain dark:brightness-0 dark:invert opacity-95 transition-opacity hover:opacity-100"
          />
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <div key={l.label}
              className="relative"
              onMouseEnter={() => l.dropdown && setActiveDropdown(l.dropdown)}
              onMouseLeave={() => l.dropdown && setActiveDropdown(null)}
            >
              <Link
                to={l.href as any}
                className="flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-semibold text-slate-800 dark:text-slate-200 transition-colors hover:text-brand-red dark:hover:text-brand hover:bg-slate-100 dark:hover:bg-slate-800/50"
              >
                {l.label}
                {l.dropdown && <ChevronDown className="h-3.5 w-3.5 opacity-70" />}
              </Link>

              {/* About Us Dropdown */}
              <AnimatePresence>
                {l.dropdown === "about" && activeDropdown === "about" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 top-[45px] w-56 z-50"
                  >
                    <div className="bg-background/95 backdrop-blur-md border border-border rounded-2xl p-2 shadow-glow space-y-1">
                      <Link
                        to="/about"
                        onClick={() => setActiveDropdown(null)}
                        className="flex items-center gap-3 rounded-xl p-2.5 transition-colors hover:bg-muted/40 text-sm font-medium text-foreground group"
                      >
                        <div className="h-8 w-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-colors">
                          <Building2 className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="font-semibold text-xs">Company Overview</div>
                          <div className="text-[10px] text-muted-foreground">Gainwell heritage & story</div>
                        </div>
                      </Link>
                      <Link
                        to="/team"
                        onClick={() => setActiveDropdown(null)}
                        className="flex items-center gap-3 rounded-xl p-2.5 transition-colors hover:bg-muted/40 text-sm font-medium text-foreground group"
                      >
                        <div className="h-8 w-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-colors">
                          <Users className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="font-semibold text-xs">Our Team</div>
                          <div className="text-[10px] text-muted-foreground">Leadership & leads</div>
                        </div>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Industries Dropdown */}
              <AnimatePresence>
                {l.dropdown === "industries" && activeDropdown === "industries" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25 }}
                    className="fixed left-1/2 top-[76px] w-[min(95vw,720px)] -translate-x-1/2 z-50"
                  >
                    <div className="bg-background/95 backdrop-blur-md border border-border rounded-2xl p-4 shadow-glow">
                      <div className="grid grid-cols-2 gap-2">
                        {INDUSTRIES_NAV.map((ind) => (
                          <Link key={ind.name} to={ind.href as any} onClick={() => setActiveDropdown(null)} className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-muted/40 dark:hover:bg-muted/10">
                            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-transparent p-0">
                              <ind.icon className="h-5 w-5 text-brand" />
                            </div>
                            <div className="min-w-0">
                              <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
                                {ind.name}
                                <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100 text-brand" />
                              </div>
                              <div className="truncate text-[11px] text-muted-foreground">{ind.desc}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Products Dropdown */}
              <AnimatePresence>
                {l.dropdown === "products" && activeDropdown === "products" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25 }}
                    className="fixed left-1/2 top-[76px] w-[min(95vw,680px)] -translate-x-1/2 z-50"
                  >
                    <div className="bg-background/95 backdrop-blur-md border border-border rounded-2xl p-4 shadow-glow">
                      <div className="grid grid-cols-2 gap-2">
                        {PRODUCTS.map((p) => (
                          <Link key={p.name} to={p.href as any} onClick={() => setActiveDropdown(null)} className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-muted/40 dark:hover:bg-muted/10">
                            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-transparent p-0">
                              {p.img ? <img src={p.img} alt={p.name} className="h-8 w-8 object-contain" /> : <p.icon className="h-5 w-5 text-brand" />}
                            </div>
                            <div className="min-w-0">
                              <div className="flex items-center gap-1.5 text-sm font-medium text-foreground">
                                {p.name}
                                <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                              </div>
                              <div className="truncate text-xs text-foreground/60">{p.desc}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Services Mega-menu Dropdown */}
              <AnimatePresence>
                {l.dropdown === "services" && activeDropdown === "services" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.25 }}
                    className="fixed left-1/2 top-[76px] w-[min(95vw,880px)] -translate-x-1/2 z-50 max-h-[82vh] overflow-y-auto"
                  >
                    <div className="bg-background/95 backdrop-blur-md border border-border rounded-2xl p-5 shadow-glow">
                      <div className="grid grid-cols-4 gap-4">
                        {SERVICE_CATEGORIES.map((cat) => {
                          const IconComp = cat.icon;
                          return (
                            <div key={cat.name} className="group flex flex-col">
                              <Link to={cat.href as any} onClick={() => setActiveDropdown(null)} className="flex items-center gap-2.5 rounded-lg p-2 transition-colors hover:bg-muted/40 dark:hover:bg-muted/10 mb-2">
                                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-transparent p-0">
                                  {cat.img ? (
                                    <img src={cat.img} alt={cat.name} className="h-8 w-8 object-contain" />
                                  ) : cat.useLogo && cat.Logo ? (
                                    <cat.Logo className="h-6 w-6" />
                                  ) : IconComp ? (
                                    <IconComp className="h-5 w-5 text-brand" />
                                  ) : null}
                                </div>
                                <span className="text-sm font-bold text-foreground group-hover:text-brand transition-colors">{cat.name}</span>
                              </Link>
                              <ul className="space-y-1 pl-2 flex-1">
                                {cat.subs.map((sub) => (
                                  <li key={sub}>
                                    <Link to={getSubUrl(cat.href, sub) as any} onClick={() => setActiveDropdown(null)} className="block rounded-md px-2 py-1 text-xs text-muted-foreground transition-colors hover:text-foreground hover:bg-muted/30">
                                      {sub}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-2">
          <ThemeToggle />
          <Link to="/contact" className="inline-flex items-center gap-1.5 rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-bold text-white shadow-glow transition-all hover:scale-105">
            Get in touch <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-t border-border mt-3 p-4 shadow-xl"
          >
            <div className="mx-auto max-w-7xl px-2 py-2 flex flex-col gap-1">
              {NAV_LINKS.map((l) => (
                <div key={l.label}>
                  {l.dropdown === "about" ? (
                    <>
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === "about" ? null : "about")}
                        className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm text-foreground/80 hover:bg-muted/5"
                      >
                        {l.label}
                        <ChevronDown className={`h-4 w-4 transition-transform ${mobileExpanded === "about" ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === "about" && (
                          <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                            <div className="pl-4 pb-2 space-y-1">
                              <Link to="/about" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-muted/5">
                                Company Overview
                              </Link>
                              <Link to="/team" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-muted/5">
                                Our Team
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : l.dropdown === "industries" ? (
                    <>
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === "industries" ? null : "industries")}
                        className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm text-foreground/80 hover:bg-muted/5"
                      >
                        {l.label}
                        <ChevronDown className={`h-4 w-4 transition-transform ${mobileExpanded === "industries" ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === "industries" && (
                          <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                            <div className="pl-4 pb-2 space-y-1">
                              <Link to="/industries" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-muted/5">
                                All Industries
                              </Link>
                              {INDUSTRIES_NAV.map((ind) => (
                                <Link key={ind.name} to={ind.href as any} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm text-foreground/60 hover:bg-muted/5">
                                  {ind.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : l.dropdown === "services" ? (
                    <>
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === "services" ? null : "services")}
                        className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm text-foreground/80 hover:bg-muted/5"
                      >
                        {l.label}
                        <ChevronDown className={`h-4 w-4 transition-transform ${mobileExpanded === "services" ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === "services" && (
                          <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                            <div className="pl-4 pb-2 space-y-1">
                              <Link to="/services" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-muted/5">
                                All Services
                              </Link>
                              {SERVICE_CATEGORIES.map((cat) => (
                                <Link key={cat.name} to={cat.href as any} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm text-foreground/60 hover:bg-muted/5">
                                  {cat.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : l.dropdown === "products" ? (
                    <>
                      <button
                        onClick={() => setMobileExpanded(mobileExpanded === "products" ? null : "products")}
                        className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-sm text-foreground/80 hover:bg-muted/5"
                      >
                        {l.label}
                        <ChevronDown className={`h-4 w-4 transition-transform ${mobileExpanded === "products" ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileExpanded === "products" && (
                          <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                            <div className="pl-4 pb-2 space-y-1">
                              <Link to="/products" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-muted/5">
                                All Products
                              </Link>
                              {PRODUCTS.map((p) => (
                                <Link key={p.name} to={p.href as any} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm text-foreground/60 hover:bg-muted/5">
                                  {p.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link to={l.href as any} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm text-foreground/80 hover:bg-muted/5 block">
                      {l.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-border pt-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-foreground/80">Theme</span>
                  <ThemeToggle />
                </div>
                <Link to="/contact" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-1.5 rounded-full bg-brand-gradient px-5 py-2.5 text-sm font-bold text-white shadow-glow">
                  Get in touch <ArrowRight className="h-3.5 w-3.5" />
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
