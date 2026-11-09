import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Mail,
  MapPin,
  Building2,
  Globe,
  Phone,
  Navigation,
  ShieldCheck,
  Clock,
  FileText,
  Lock,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Loader2,
  Calendar,
  Video,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { toast } from "sonner";
import { Reveal, WaveDivider } from "../components/ui/Animations";
import { PageHero } from "../components/ui/PageHero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — Acceleron Solutions" },
      {
        name: "description",
        content:
          "Connect directly with Acceleron Solutions solution architects and practice leads across Kolkata, Delhi NCR, and our global delivery network.",
      },
    ],
  }),
  component: ContactPage,
});

const COUNTRY_CODES = [
  { code: "+91", country: "IN" },
  { code: "+1", country: "US/CA" },
  { code: "+44", country: "UK" },
  { code: "+61", country: "AU" },
  { code: "+65", country: "SG" },
  { code: "+971", country: "UAE" },
  { code: "+966", country: "KSA" },
  { code: "+49", country: "DE" },
  { code: "+33", country: "FR" },
];

const INTEREST_AREAS = [
  "SAP Transformation",
  "Zoho Suite Automation",
  "Analytics & Applied AI",
  "Custom Software Engineering",
  "Cloud & Infrastructure",
  "Cyber Security & OT Safety",
  "CXO Advisory",
  "Product/IP Inquiries",
];

const LOCATIONS = [
  {
    role: "Headquarters & Core Delivery Center",
    city: "Kolkata, India",
    entity: "Acceleron Solutions Pvt. Ltd.",
    badge: "Global HQ & Core CoE",
    isHq: true,
    mainAddress:
      "3rd Floor, STPI IT Park, Block-DP, Plot-5/1, Sector V, Salt Lake, Kolkata – 700091, West Bengal, India",
    secondaryAddress:
      "705, Godrej Waterside, Tower 2, 7th Floor, Block DP, Sector V, Bidhannagar, Kolkata – 700091",
    phones: ["+91 33 3534 6200", "+91 33 3534 6222", "033 6644 2000"],
    emails: ["enquiry@acceleronsolutions.io", "info@acceleronsolutions.io"],
    mapLink: "https://maps.app.goo.gl/PDjDU26TL5tt7HgD6",
  },
  {
    role: "Executive Office",
    city: "New Delhi, India",
    entity: "Acceleron Solutions Private Limited",
    badge: "Executive Office",
    mainAddress:
      "801-802 Kailash Building, 26 KG Marg, Janpath, Central Delhi – 110001, Delhi, India",
    phones: ["+91 33 3534 6222", "033 6644 2000"],
    emails: ["info@acceleronsolutions.io", "enquiry@acceleronsolutions.io"],
    mapLink: "https://maps.google.com/?q=801+Kailash+Building+26+KG+Marg+Janpath+Delhi",
  },
  {
    role: "Technology & Delivery Hub",
    city: "Delhi NCR, India",
    entity: "Acceleron Solutions / Gainwell Group",
    badge: "Enterprise Delivery Hub",
    mainAddress:
      "Gainwell Ecotech II, 1-C/1, Udyog Vihar, Greater Noida, Delhi NCR – 201306, Uttar Pradesh, India",
    phones: ["+91 33 3534 6200", "+91 33 3534 6222"],
    emails: ["enquiry@acceleronsolutions.io"],
    mapLink: "https://maps.google.com/?q=Gainwell+Ecotech+II+Greater+Noida",
  },
  {
    role: "Regional Hubs & Global Presence",
    city: "Global Footprint",
    entity: "Acceleron Solutions Network",
    badge: "Global Reach",
    mainAddress:
      "Active Delivery Hubs: Mumbai, Bengaluru | Global Client Engagements: USA, Australia, Singapore, Middle East (MEA)",
    phones: ["+91 33 3534 6222"],
    emails: ["enquiry@acceleronsolutions.io"],
    note: "Supporting global enterprises across North America, APAC, and MEA regions.",
  },
];

const ENGAGEMENT_COMMITMENTS = [
  {
    title: "24-Hour Executive Response",
    desc: "Every inquiry is reviewed directly by a practice lead or senior architect who reaches out within 24 business hours.",
    icon: Clock,
  },
  {
    title: "Confidential Discovery Call",
    desc: "We start with an initial technical and business alignment discussion to understand your objectives before recommending solutions.",
    icon: ShieldCheck,
  },
  {
    title: "Tailored Roadmap & Architecture",
    desc: "You receive a structured proposal, implementation roadmap, and transparent engagement plan tailored to your timeline.",
    icon: FileText,
  },
];

const FAQS = [
  {
    q: "How quickly will someone from Acceleron respond to my contact request?",
    a: "Our solution architects and practice leads respond to all business inquiries within 24 business hours.",
  },
  {
    q: "Can we schedule an in-person meeting or site visit at Acceleron offices?",
    a: "Yes. We welcome clients and partners at our Kolkata Headquarters (STPI Salt Lake & Godrej Waterside) and our Delhi NCR offices (Janpath & Greater Noida). Please schedule a time through the form or call our central office line directly.",
  },
  {
    q: "Does Acceleron handle international enterprise deployments?",
    a: "Yes. Acceleron delivers technology transformation for enterprise clients across India, North America, APAC, and the Middle East (MEA).",
  },
  {
    q: "Which email address should I use for job applications or career inquiries?",
    isCareer: true,
    a: "Explore opportunities to grow your career with us. Visit our Careers page to learn more about current openings and submit your application.",
  },
];

function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [selectedCountryCode, setSelectedCountryCode] = useState("+91");
  const [contactMethod, setContactMethod] = useState("Email");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleHash = () => {
        const hash = window.location.hash;
        if (hash === "#form" || hash === "#contact-form") {
          setTimeout(() => {
            const el = document.getElementById("form") || document.getElementById("contact-form");
            if (el) {
              el.scrollIntoView({ behavior: "smooth", block: "start" });
              const input = el.querySelector<HTMLInputElement>("input[name='Full_Name']");
              if (input) input.focus({ preventScroll: true });
            }
          }, 200);
        }
      };
      handleHash();
      window.addEventListener("hashchange", handleHash);
      return () => window.removeEventListener("hashchange", handleHash);
    }
  }, []);

  const validateForm = (formData: FormData) => {
    const newErrors: { [key: string]: string } = {};

    const fullName = formData.get("Full_Name") as string;
    if (!fullName || !fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }

    const email = formData.get("Email") as string;
    if (!email) {
      newErrors.email = "Business email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    const phone = formData.get("Phone") as string;
    if (!phone || !phone.trim()) {
      newErrors.phone = "Phone / WhatsApp number is required";
    }

    const company = formData.get("Company") as string;
    if (!company || !company.trim()) {
      newErrors.company = "Company / Organization name is required";
    }

    const interest = formData.get("Area_of_Interest") as string;
    if (!interest || interest === "") {
      newErrors.interest = "Please select your primary area of interest";
    }

    const scope = formData.get("Description") as string;
    if (!scope || !scope.trim()) {
      newErrors.scope = "Please describe your project scope or challenge";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (isSubmitting) {
      e.preventDefault();
      return;
    }

    const formData = new FormData(e.currentTarget);
    if (!validateForm(formData)) {
      e.preventDefault();
      toast.error("Please fill out all required fields marked with *");
      return;
    }

    setIsSubmitting(true);
  };

  const handleIframeLoad = () => {
    if (isSubmitting) {
      toast.success(
        "Thank you! Your architecture inquiry has been received. A senior practice lead will reach out within 24 business hours."
      );
      setIsSubmitting(false);
      formRef.current?.reset();
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* SECTION 1: HERO BANNER */}
      <PageHero
        title="Let’s Build the Next Chapter Together"
        subtitle="Ready to modernize your operations, optimize your enterprise platforms, or build custom digital software? Connect directly with our solution architects and enterprise practice leads across Kolkata, Delhi NCR, and our global delivery network."
        breadcrumbs={[{ label: "Contact" }]}
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=75&w=1200&auto=format&fit=crop"
        ctaText="Send Us a Message"
        ctaHref="#form"
        secondaryCtaText="View Office Locations"
        secondaryCtaHref="#locations"
      />

      {/* SECTION 2: INTERACTIVE ENTERPRISE INQUIRY FORM */}
      <section
        id="form"
        className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-14 sm:py-20 lg:py-24"
      >
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Main Inquiry Form */}
          <div className="lg:col-span-8">
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-border/80 bg-card p-6 sm:p-10 md:p-12 shadow-elevated relative overflow-hidden">
                <div className="mb-8 pb-6 border-b border-border/60">
                  <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red mb-3">
                    Enterprise Inquiry
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-tight">
                    Start a Conversation with <span className="text-gradient">Our Architects</span>
                  </h2>
                  <p className="text-sm sm:text-base text-muted-foreground mt-2">
                    Fill out the fields below, and a senior domain expert will respond within 24 business hours.
                  </p>
                </div>

                {/* Hidden iframe for Zoho WebToLeadForm submission */}
                <iframe
                  name="zoho_contact_iframe"
                  id="zoho_contact_iframe"
                  style={{ display: "none" }}
                  onLoad={handleIframeLoad}
                />

                <form
                  ref={formRef}
                  id="contact-form"
                  action="https://crm.zoho.in/crm/WebToLeadForm"
                  method="POST"
                  target="zoho_contact_iframe"
                  className="space-y-6"
                  onSubmit={handleSubmit}
                  acceptCharset="UTF-8"
                >
                  {/* Zoho Hidden CRM Fields */}
                  <input
                    type="text"
                    style={{ display: "none" }}
                    name="xnQsjsdp"
                    value="b362cc0ce650eb05df7d10c103416122c617a9324da256c366ed331db852f82e"
                    readOnly
                  />
                  <input type="hidden" name="zc_gad" id="zc_gad" value="" />
                  <input
                    type="text"
                    style={{ display: "none" }}
                    name="xmIwtLD"
                    value="2c8ffd65ddb0d96a6fc11ceedcce413e48715de4f32fff9d71e7381281e821ad8baedfcd7a51775a23ea2d4121233d59"
                    readOnly
                  />
                  <input
                    type="text"
                    style={{ display: "none" }}
                    name="actionType"
                    value="TGVhZHM="
                    readOnly
                  />
                  <input
                    type="text"
                    style={{ display: "none" }}
                    name="returnURL"
                    value="https://acceleronsolutions.com/"
                    readOnly
                  />
                  <input type="hidden" name="Lead Source" value="Website Contact Page" />
                  <input type="hidden" name="Lead Status" value="Not Contacted" />

                  {/* 1. Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-2">
                      Full Name <span className="text-brand-red">*</span>
                    </label>
                    <input
                      type="text"
                      name="Full_Name"
                      placeholder="e.g. Sarah Jenkins"
                      className={`w-full rounded-xl border ${
                        errors.fullName ? "border-brand-red focus:ring-brand-red" : "border-border"
                      } bg-background p-3.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-brand/40`}
                    />
                    {errors.fullName && (
                      <p className="text-xs text-brand-red mt-1 font-medium">{errors.fullName}</p>
                    )}
                  </div>

                  {/* 2. Business Email & 3. Phone */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-2">
                        Business Email <span className="text-brand-red">*</span>
                      </label>
                      <input
                        type="email"
                        name="Email"
                        placeholder="name@company.com"
                        className={`w-full rounded-xl border ${
                          errors.email ? "border-brand-red focus:ring-brand-red" : "border-border"
                        } bg-background p-3.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-brand/40`}
                      />
                      {errors.email && (
                        <p className="text-xs text-brand-red mt-1 font-medium">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-2">
                        Phone / WhatsApp Number <span className="text-brand-red">*</span>
                      </label>
                      <div className="flex gap-2">
                        <select
                          value={selectedCountryCode}
                          onChange={(e) => setSelectedCountryCode(e.target.value)}
                          className="rounded-xl border border-border bg-background px-3 py-3.5 text-xs font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-brand/40"
                        >
                          {COUNTRY_CODES.map((c) => (
                            <option key={c.code} value={c.code}>
                              {c.code} ({c.country})
                            </option>
                          ))}
                        </select>
                        <input
                          type="tel"
                          name="Phone"
                          placeholder="98765 43210"
                          className={`w-full rounded-xl border ${
                            errors.phone ? "border-brand-red focus:ring-brand-red" : "border-border"
                          } bg-background p-3.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-brand/40`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-xs text-brand-red mt-1 font-medium">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* 4. Company & 5. Primary Area of Interest */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-2">
                        Company / Organization Name <span className="text-brand-red">*</span>
                      </label>
                      <input
                        type="text"
                        name="Company"
                        placeholder="Enterprise Co."
                        className={`w-full rounded-xl border ${
                          errors.company ? "border-brand-red focus:ring-brand-red" : "border-border"
                        } bg-background p-3.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-brand/40`}
                      />
                      {errors.company && (
                        <p className="text-xs text-brand-red mt-1 font-medium">{errors.company}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-2">
                        Primary Area of Interest <span className="text-brand-red">*</span>
                      </label>
                      <select
                        name="Area_of_Interest"
                        defaultValue=""
                        className={`w-full rounded-xl border ${
                          errors.interest ? "border-brand-red focus:ring-brand-red" : "border-border"
                        } bg-background p-3.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand/40`}
                      >
                        <option value="" disabled>
                          Select an area of interest...
                        </option>
                        {INTEREST_AREAS.map((area) => (
                          <option key={area} value={area}>
                            {area}
                          </option>
                        ))}
                      </select>
                      {errors.interest && (
                        <p className="text-xs text-brand-red mt-1 font-medium">{errors.interest}</p>
                      )}
                    </div>
                  </div>

                  {/* 6. Project Scope / Requirements */}
                  <div>
                    <label className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-2">
                      Project Scope / Requirements <span className="text-brand-red">*</span>
                    </label>
                    <textarea
                      name="Description"
                      rows={4}
                      placeholder="Briefly describe your business challenge, technical environment, or transformation goals..."
                      className={`w-full rounded-xl border ${
                        errors.scope ? "border-brand-red focus:ring-brand-red" : "border-border"
                      } bg-background p-3.5 text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-brand/40`}
                    />
                    {errors.scope && (
                      <p className="text-xs text-brand-red mt-1 font-medium">{errors.scope}</p>
                    )}
                  </div>

                  {/* 7. Preferred Contact Method */}
                  <div>
                    <label className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-3">
                      Preferred Contact Method
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        { label: "Email", icon: Mail },
                        { label: "Phone Call", icon: Phone },
                        { label: "Virtual Discovery Meeting", icon: Video },
                      ].map((item) => (
                        <label
                          key={item.label}
                          className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                            contactMethod === item.label
                              ? "border-brand bg-brand/5 shadow-sm text-brand font-semibold"
                              : "border-border/80 bg-background hover:bg-muted/30 text-foreground"
                          }`}
                        >
                          <input
                            type="radio"
                            name="Contact_Method"
                            value={item.label}
                            checked={contactMethod === item.label}
                            onChange={() => setContactMethod(item.label)}
                            className="text-brand focus:ring-brand"
                          />
                          <item.icon className="h-4 w-4 shrink-0" />
                          <span className="text-xs sm:text-sm">{item.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary btn-lg w-full justify-center text-base font-bold shadow-lg shadow-brand-red/20 py-4"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Submitting Inquiry...
                        </>
                      ) : (
                        <>
                          Request Architecture Consultation <ArrowRight className="h-5 w-5 ml-2" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Guarantee Badge */}
                  <div className="flex items-center justify-center gap-2 pt-2 text-xs text-muted-foreground">
                    <Lock className="h-3.5 w-3.5 text-brand shrink-0" />
                    <span>
                      <strong>100% Privacy Guaranteed.</strong> Your details are secure and will never be shared with third parties.
                    </span>
                  </div>
                </form>
              </div>
            </Reveal>
          </div>

          {/* Direct Support & Escalation Card */}
          <div className="lg:col-span-4 space-y-6">
            <Reveal delay={0.2}>
              <div className="rounded-3xl border border-border/70 bg-card p-6 sm:p-8 shadow-soft space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-red mb-3">
                    Fast-Track Support
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    Direct Contact Channels
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                    Need immediate assistance or looking to speak directly with an enterprise advisor?
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-border/50 text-sm">
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-semibold text-muted-foreground">Call our Landlines</div>
                      <div className="space-y-1 mt-1 font-bold text-foreground">
                        <div>
                          <a href="tel:+913335346200" className="hover:text-brand-red transition-colors">
                            +91 33 3534 6200
                          </a>
                        </div>
                        <div>
                          <a href="tel:+913335346222" className="hover:text-brand-red transition-colors">
                            +91 33 3534 6222
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-semibold text-muted-foreground">Direct Inquiries</div>
                      <div className="space-y-1 mt-1 font-bold text-foreground">
                        <div>
                          <a
                            href="mailto:enquiry@acceleronsolutions.io"
                            className="hover:text-brand transition-colors"
                          >
                            enquiry@acceleronsolutions.io
                          </a>
                        </div>
                        <div>
                          <a
                            href="mailto:info@acceleronsolutions.io"
                            className="hover:text-brand transition-colors text-xs text-muted-foreground"
                          >
                            info@acceleronsolutions.io
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-semibold text-muted-foreground">Operating Hours</div>
                      <p className="text-xs font-medium text-foreground mt-0.5">
                        Mon – Fri: 9:30 AM – 6:30 PM IST
                      </p>
                      <p className="text-[11px] text-muted-foreground">
                        (24/7 Managed NOC/SOC & AMS SLA active for clients)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-muted/40 border border-border/60">
                  <div className="text-xs font-bold text-foreground mb-1">
                    Careers & Talent Acquisition
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                    Looking to join our engineering and consulting team?
                  </p>
                  <Link
                    to="/careers"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:text-brand-red transition-colors"
                  >
                    <span>View Career Openings</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 3: GLOBAL HUBS & CORPORATE OFFICES */}
      <section
        id="locations"
        className="relative overflow-hidden bg-muted/20 py-14 sm:py-20 border-y border-border/50"
      >
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red mb-3">
                Global Network
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4">
                Global Hubs & <span className="text-gradient">Corporate Offices</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Headquartered in Kolkata with enterprise delivery hubs across Delhi NCR and strategic client engagements worldwide.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {LOCATIONS.map((loc, idx) => (
              <Reveal key={loc.role} delay={idx * 0.08} className="h-full">
                <div
                  className={`rounded-3xl border p-6 sm:p-8 h-full transition-all duration-300 flex flex-col justify-between ${
                    loc.isHq
                      ? "border-brand bg-brand-gradient/5 shadow-elevated"
                      : "border-border/70 bg-card shadow-soft hover:shadow-elevated hover:border-brand/40"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-brand/10 text-brand">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>{loc.badge}</span>
                      </div>
                      <span className="text-xs font-bold text-muted-foreground">{loc.city}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-1">
                      {loc.role}
                    </h3>
                    <p className="text-xs font-semibold text-brand-red mb-4">{loc.entity}</p>

                    <div className="space-y-4 pt-4 border-t border-border/50 text-xs sm:text-sm text-foreground/85">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                          Address
                        </div>
                        <p className="leading-relaxed">{loc.mainAddress}</p>
                        {loc.secondaryAddress && (
                          <div className="mt-2 pt-2 border-t border-border/40 text-xs text-muted-foreground">
                            <strong>Secondary Office:</strong> {loc.secondaryAddress}
                          </div>
                        )}
                      </div>

                      {loc.note && (
                        <div className="p-3 rounded-xl bg-muted/40 text-xs text-muted-foreground">
                          {loc.note}
                        </div>
                      )}

                      <div className="grid sm:grid-cols-2 gap-3 pt-2">
                        <div>
                          <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                            Phone
                          </div>
                          <div className="space-y-0.5">
                            {loc.phones.map((phone) => (
                              <div key={phone}>
                                <a
                                  href={`tel:${phone.replace(/[^0-9+]/g, "")}`}
                                  className="hover:text-brand font-medium transition-colors"
                                >
                                  {phone}
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-1">
                            Email
                          </div>
                          <div className="space-y-0.5">
                            {loc.emails.map((email) => (
                              <div key={email}>
                                <a
                                  href={`mailto:${email}`}
                                  className="hover:text-brand font-medium transition-colors"
                                >
                                  {email}
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {loc.mapLink && (
                    <div className="pt-6 mt-6 border-t border-border/50">
                      <a
                        href={loc.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold text-brand hover:text-brand-red transition-colors"
                      >
                        <Navigation className="h-4 w-4" />
                        <span>Get Directions via Google Maps</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: OUR ENGAGEMENT SLA & DIRECT CONTACT COMMITMENT */}
      <section className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-14 sm:py-20 lg:py-24">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red mb-3">
              Direct Contact Commitment
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              What to Expect <span className="text-gradient">When You Reach Out</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Our engagement standards ensure rapid access to senior enterprise architects and full confidentiality.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {ENGAGEMENT_COMMITMENTS.map((comm, idx) => (
            <Reveal key={comm.title} delay={idx * 0.1} className="h-full">
              <div className="group rounded-3xl border border-border/70 bg-card p-7 sm:p-8 h-full shadow-soft hover:shadow-elevated hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="h-12 w-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center group-hover:scale-110 transition-transform">
                      <comm.icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-muted-foreground/60 group-hover:text-brand transition-colors">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-brand transition-colors">
                    {comm.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {comm.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION 5: FREQUENTLY ASKED QUESTIONS */}
      <section className="relative overflow-hidden bg-muted/20 py-14 sm:py-20 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl relative z-10">
          <Reveal>
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red mb-3">
                FAQ
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Frequently Asked <span className="text-gradient">Questions</span>
              </h2>
              <p className="text-muted-foreground text-base max-w-xl mx-auto">
                Quick answers regarding meetings, response SLAs, global coverage, and careers.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {FAQS.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="rounded-2xl border border-border/70 bg-card px-5 sm:px-6 data-[state=open]:border-brand/40 shadow-soft transition-all"
                >
                  <AccordionTrigger className="text-base sm:text-lg font-bold text-foreground hover:no-underline py-5 text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pb-5">
                    {faq.isCareer ? (
                      <>
                        Explore opportunities to grow your career with us. Visit our{" "}
                        <Link to="/careers" className="text-brand font-bold hover:underline">
                          Careers page
                        </Link>{" "}
                        to learn more about current openings.
                      </>
                    ) : (
                      faq.a
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* SECTION 6: BOTTOM CTA BANNER */}
      <section className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 sm:py-24 text-center">
        <Reveal>
          <div className="rounded-3xl border border-brand/40 bg-brand-gradient/10 p-8 sm:p-12 md:p-16 backdrop-blur-xl relative overflow-hidden shadow-glow max-w-5xl mx-auto">
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red">
                Next Steps
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                Ready to Engineer Your <span className="text-gradient">Digital Future?</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Speak directly with our solution architects today.
              </p>

              <div className="pt-2">
                <a
                  href="#form"
                  className="btn btn-primary btn-lg inline-flex items-center gap-2 shadow-lg shadow-brand-red/20"
                >
                  Request a Session <ArrowRight className="h-5 w-5" />
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 pt-4 text-xs sm:text-sm text-foreground/80 border-t border-border/50 max-w-md mx-auto">
                <a
                  href="mailto:enquiry@acceleronsolutions.io"
                  className="inline-flex items-center gap-2 hover:text-brand transition-colors font-medium"
                >
                  <Mail className="h-4 w-4 text-brand" />
                  <span>enquiry@acceleronsolutions.io</span>
                </a>
                <span className="text-border">|</span>
                <a
                  href="tel:+913335346200"
                  className="inline-flex items-center gap-2 hover:text-brand transition-colors font-medium"
                >
                  <Phone className="h-4 w-4 text-brand" />
                  <span>+91 33 3534 6200 / +91 33 3534 6222</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
