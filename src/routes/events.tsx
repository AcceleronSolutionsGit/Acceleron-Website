import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Calendar,
  Clock,
  MapPin,
  Video,
  ArrowRight,
  Sparkles,
  Users,
  Download,
  Share2,
  ExternalLink,
  CheckCircle2,
  Presentation,
  ShieldCheck,
  Building2,
} from "lucide-react";
import { PageHero } from "../components/ui/PageHero";
import { Reveal, WaveDivider } from "../components/ui/Animations";
import { getAssetUrl } from "../lib/assets";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Industry Events & Expert Webinars — Acceleron Solutions" },
      {
        name: "description",
        content:
          "Connect with our technology leaders, engineering experts, and industry specialists at upcoming conferences, executive roundtables, and technical webinars.",
      },
    ],
  }),
  component: EventsPage,
});

const UPCOMING_EVENTS = [
  {
    id: "sap-ai-roundtable",
    title: "Enterprise SAP S/4HANA & AI Transformation Roundtable",
    description:
      "An exclusive executive briefing on accelerating digital transformation, leveraging Joule AI, and migrating core workloads safely with zero business disruption.",
    date: "November 20, 2026",
    time: "3:00 PM - 4:30 PM IST",
    format: "Virtual Roundtable / Webinar",
    badge: "Upcoming Flagship Webinar",
    speakers: [
      { name: "Arindam Hari", role: "Director & CEO", org: "Acceleron Solutions" },
      { name: "Enterprise SAP Architects", role: "Specialist Panel", org: "Acceleron Practice" },
    ],
    agenda: [
      "Strategic evaluation: Greenfield vs. Brownfield S/4HANA transitions",
      "Deploying Joule AI & generative copilot capabilities across SAP ERP",
      "Real-world enterprise case studies & live interactive Q&A",
    ],
    ctaText: "Register Your Interest",
    ctaHref: "/contact",
  },
];

const PAST_EVENTS = [
  {
    id: "excon-expo",
    title: "EXCON 2024: Heavy Equipment & Industrial Telematics Expo",
    category: "Industry Exhibition",
    date: "December 2024",
    location: "BIEC, Bengaluru, India",
    description:
      "Showcasing Acceleron's proprietary industrial IoT platforms—Suraksha field safety and Tyre Health management—to global capital goods and mining leaders.",
    image: "/Excon pic 1.jpg",
    deckAvailable: true,
  },
  {
    id: "cloud-cybersecurity-workshop",
    title: "Enterprise Cloud Defense & Zero-Trust Architecture Workshop",
    category: "Technical Workshop",
    date: "August 2025",
    location: "Delhi NCR Executive Hub",
    description:
      "Interactive technical masterclass on threat intelligence, cloud micro-segmentation, and ISO 27001 posture management across hybrid enterprise clouds.",
    image: "/Office Photo 1.JPG",
    deckAvailable: true,
  },
  {
    id: "mining-digitization-summit",
    title: "National Mining & Heavy Manufacturing Digitization Summit",
    category: "Executive Summit",
    date: "May 2025",
    location: "Kolkata Tech Center",
    description:
      "Executive forum addressing pit-to-port automation, fleet telematics, predictive asset maintenance, and statutory worker safety in underground mining.",
    image: "/DSC03610.JPG",
    deckAvailable: true,
  },
  {
    id: "zoho-enterprise-webinar",
    title: "Zoho One & Custom ERP Orchestration Masterclass",
    category: "Virtual Masterclass",
    date: "January 2026",
    location: "Online / Virtual",
    description:
      "Deep dive into multi-entity commercial billing, Deluge custom functions, and bidirectional synchronization between Zoho CRM and SAP S/4HANA.",
    image: "/DSC03936.JPG",
    deckAvailable: true,
  },
];

function EventsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* PAGE HEADER & INTRODUCTION */}
      <PageHero
        badge="CONFERENCES, WEBINARS &amp; ROUNDTABLES"
        title="Industry Events &amp; Expert Webinars"
        subtitle="Connect with our technology leaders, engineering experts, and industry specialists at upcoming conferences, executive roundtables, and technical webinars."
        breadcrumbs={[{ label: "Events & Webinars" }]}
        image={getAssetUrl("https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=75&w=1200&auto=format&fit=crop")}
        ctaText="View Upcoming Sessions"
        ctaHref="#upcoming"
        secondaryCtaText="Past Event Archive"
        secondaryCtaHref="#past-events"
        icon={
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/20 shadow-xl">
            <Calendar className="h-8 w-8 text-brand drop-shadow-lg" />
            <div className="border-l border-white/30 pl-3">
              <div className="text-[10px] font-bold uppercase tracking-wider text-brand-red">
                Acceleron Events
              </div>
              <div className="text-xs font-bold text-white tracking-wide">
                Knowledge Sharing
              </div>
            </div>
          </div>
        }
      />

      {/* SECTION 1: UPCOMING EVENTS & WEBINARS */}
      <section
        id="upcoming"
        className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 sm:py-24 border-b border-border/60"
      >
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand mb-3">
              Mark Your Calendar
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Upcoming <span className="text-gradient">Events &amp; Webinars</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Reserve your seat for our exclusive executive roundtables and live engineering briefings.
            </p>
          </div>
        </Reveal>

        <div className="space-y-8">
          {UPCOMING_EVENTS.map((evt) => (
            <Reveal key={evt.id}>
              <div className="rounded-3xl border border-brand/40 bg-gradient-to-br from-card via-card to-brand/5 p-6 sm:p-10 shadow-glow relative overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-gradient text-white shadow-md">
                    <Sparkles className="h-3.5 w-3.5" />
                    {evt.badge}
                  </span>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-muted-foreground">
                    <span className="flex items-center gap-1.5 bg-muted/50 px-3 py-1.5 rounded-full border border-border">
                      <Calendar className="h-4 w-4 text-brand" /> {evt.date}
                    </span>
                    <span className="flex items-center gap-1.5 bg-muted/50 px-3 py-1.5 rounded-full border border-border">
                      <Clock className="h-4 w-4 text-brand" /> {evt.time}
                    </span>
                    <span className="flex items-center gap-1.5 bg-muted/50 px-3 py-1.5 rounded-full border border-border">
                      <Video className="h-4 w-4 text-brand-red" /> {evt.format}
                    </span>
                  </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-8 space-y-4">
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground leading-snug">
                      {evt.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {evt.description}
                    </p>

                    <div className="pt-4 border-t border-border/60">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-brand mb-3">
                        Executive Key Discussion Points:
                      </h4>
                      <ul className="space-y-2">
                        {evt.agenda.map((item, aIdx) => (
                          <li
                            key={aIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/80 font-medium"
                          >
                            <CheckCircle2 className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="lg:col-span-4 bg-muted/30 p-6 rounded-2xl border border-border space-y-6 flex flex-col justify-between h-full">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                        Featured Speakers
                      </div>
                      <div className="space-y-3">
                        {evt.speakers.map((spk, sIdx) => (
                          <div key={sIdx} className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-full bg-brand/10 text-brand flex items-center justify-center font-bold text-xs shrink-0">
                              <Users className="h-5 w-5" />
                            </div>
                            <div>
                              <div className="text-xs font-bold text-foreground">
                                {spk.name}
                              </div>
                              <div className="text-[11px] text-muted-foreground">
                                {spk.role} • {spk.org}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border/50">
                      <Link
                        to={evt.ctaHref as any}
                        className="inline-flex items-center justify-center gap-2 w-full rounded-xl bg-brand-gradient py-3.5 px-6 text-xs font-bold text-white shadow-glow hover:scale-[1.02] transition-transform"
                      >
                        <span>{evt.ctaText}</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      <p className="text-[11px] text-center text-muted-foreground mt-2">
                        Complimentary registration for enterprise executives.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION 2: PAST EVENTS & EVENT ARCHIVE */}
      <section
        id="past-events"
        className="section-dark container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 sm:py-24 border-b border-border/60"
      >
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/30 bg-brand-red/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red mb-3">
                Knowledge Repository
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Past Events &amp; <span className="text-gradient">Event Archive</span>
              </h2>
              <p className="text-muted-foreground text-sm sm:text-base mt-2">
                Listing of past industry tech summits, cybersecurity workshops, and cloud migration masterclasses hosted or co-sponsored by Acceleron Solutions.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:text-brand-red transition-colors shrink-0"
            >
              <span>Request Past Presentation Decks</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-2.5 sm:gap-6 md:gap-8">
          {PAST_EVENTS.map((past, pIdx) => (
            <Reveal key={past.id} delay={pIdx * 0.08} className="h-full">
              <div className="rounded-2xl sm:rounded-3xl border border-border/80 bg-card p-3 sm:p-6 md:p-8 h-full flex flex-col justify-between shadow-card hover:border-brand/40 hover:-translate-y-1 transition-all duration-300">
                <div>
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden mb-3 sm:mb-5 bg-muted/40 flex items-center justify-center">
                    {/* Ambient blurred backdrop prevents blank space while avoiding crop */}
                    <img
                      src={getAssetUrl(past.image)}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 w-full h-full object-cover blur-md opacity-25 scale-110 pointer-events-none select-none"
                    />
                    <img
                      src={getAssetUrl(past.image)}
                      alt={past.title}
                      loading="lazy"
                      className="relative z-10 max-h-full max-w-full object-contain transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute top-2 left-2 sm:top-3 sm:left-3 z-20 bg-black/70 backdrop-blur-md text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[8px] sm:text-[10px] font-bold uppercase tracking-wider">
                      {past.category}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-[10px] sm:text-xs text-muted-foreground mb-2 sm:mb-3 font-semibold">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-brand" /> {past.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5 text-brand" /> {past.location}
                    </span>
                  </div>

                  <h3 className="text-xs sm:text-lg md:text-xl font-bold text-foreground mb-1.5 sm:mb-2 leading-snug line-clamp-2">
                    {past.title}
                  </h3>

                  <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground leading-relaxed mb-2.5 sm:mb-4 line-clamp-2 sm:line-clamp-3">
                    {past.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/50 flex items-center justify-between text-xs font-bold">
                  <span className="text-muted-foreground">Session Completed</span>
                  <Link
                    to="/contact"
                    className="text-brand hover:text-brand-red transition-colors inline-flex items-center gap-1"
                  >
                    <span>Request Deck &amp; Video</span>
                    <Download className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION 3: EVENT REGISTRATION & ENGAGEMENT CTA */}
      <section className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10 py-16 sm:py-24">
        <Reveal>
          <div className="rounded-3xl border border-brand/30 bg-gradient-to-br from-card via-card to-brand/5 p-8 sm:p-14 shadow-glow text-center relative overflow-hidden">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-brand mb-4">
              Speaker &amp; Partner Inquiries
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground max-w-2xl mx-auto leading-tight mb-4">
              Looking for a Keynote Speaker or Technical Panelist?
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8">
              Visitors can register for upcoming sessions or request presentation decks and recordings from past webinars by reaching out via our contact page.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-8 py-3.5 text-xs font-bold text-white shadow-glow hover:scale-105 transition-all"
              >
                <span>Get in Touch with Our Events Team</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <WaveDivider from="dark" to="white" />
    </main>
  );
}
