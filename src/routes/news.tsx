import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Newspaper,
  Calendar,
  Tag,
  ArrowRight,
  Phone,
  Mail,
  Building2,
  Sparkles,
  ExternalLink,
  X,
  Share2,
  CheckCircle2,
  MapPin,
  ChevronRight,
  ChevronDown,
} from "lucide-react";
import { PageHero } from "../components/ui/PageHero";
import { Reveal, WaveDivider } from "../components/ui/Animations";
import { getAssetUrl } from "../lib/assets";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "Company News & Announcements — Acceleron Solutions" },
      {
        name: "description",
        content:
          "Stay informed on Acceleron Solutions' latest corporate developments, strategic partnerships, expansion updates, and media features.",
      },
    ],
  }),
  component: NewsPage,
});

type NewsCategory =
  | "Partnerships & Alliances"
  | "Corporate Milestones"
  | "Technology Announcements";

interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: NewsCategory;
  summary: string;
  image: string;
  content: string[];
  featured?: boolean;
}

const CATEGORIES: Array<"All News" | NewsCategory> = [
  "All News",
  "Partnerships & Alliances",
  "Corporate Milestones",
  "Technology Announcements",
];

const NEWS_ARTICLES: NewsItem[] = [
  {
    id: "delhi-ncr-expansion",
    title:
      "Acceleron Solutions Expands Enterprise Delivery Footprint with New Delhi NCR Office",
    date: "Q4 2026",
    category: "Corporate Milestones",
    summary:
      "Highlighting our growing presence at KG Marg, Janpath, enhancing direct support and delivery capabilities for enterprise clients across North India.",
    image: "/Office Entrace Photo.JPG",
    featured: true,
    content: [
      "NEW DELHI / KOLKATA — Acceleron Solutions Pvt. Ltd. today announced the formal inauguration of its new corporate and executive consulting hub located at 801-802 Kailash Building, 26 KG Marg, Janpath, Central Delhi.",
      "The new facility significantly expands Acceleron's national delivery footprint, providing dedicated client briefing centers and advisory capabilities for enterprise clients across the National Capital Region, Uttar Pradesh, Haryana, and Rajasthan.",
      "With enterprises accelerating their cloud modernizations and SAP S/4HANA migrations, our Janpath hub establishes a permanent co-innovation space for executives seeking rapid, battle-tested digital transformation.",
      "The office will host senior SAP enterprise architects, cloud consultants, and Zoho practice leads, providing continuous support for heavy engineering, manufacturing, and capital goods enterprises.",
    ],
  },
  {
    id: "acros-iot-alliance",
    title:
      "Acceleron Solutions Signs Strategic Ecosystem Alliance to Advance Industrial IoT Deployments",
    date: "Q3 2026",
    category: "Partnerships & Alliances",
    summary:
      "Strategic partnership bringing together certified industrial hardware telematics and Acceleron's Suraksha & Tyre Health cloud intelligence platforms.",
    image: "/Excon pic 1.jpg",
    content: [
      "Acceleron Solutions has signed a strategic collaboration agreement with leading industrial sensor manufacturers to accelerate the rollout of IoT-driven predictive maintenance platforms.",
      "Under this alliance, Acceleron will bundle certified wireless temperature and pressure telematics with its proprietary Tyre Health Management and Inplant Logistics platforms.",
      "This integration enables heavy mining fleets and industrial operators to achieve immediate cost-per-hour (CPH) savings and eliminate catastrophic blowout hazards on haul roads.",
    ],
  },
  {
    id: "acceledge-ai-launch",
    title:
      "Launch of AccelEdge.ai: Next-Gen Enterprise Cognitive Framework & Intelligent Document Processing",
    date: "Q3 2026",
    category: "Technology Announcements",
    summary:
      "Introducing an end-to-end cognitive framework combining computer vision, OCR, and Large Language Model agents for automated business document processing.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=75&w=1200&auto=format&fit=crop",
    content: [
      "Acceleron Labs today unveiled AccelEdge.ai, a proprietary artificial intelligence platform designed to eliminate paper-based latency across enterprise supply chains.",
      "Featuring hybrid OCR and contextual LLM validation, AccelEdge.ai extracts unstructured invoice data, engineering drawings, and purchase orders with 99.4% precision.",
      "The solution features native, bidirectional connectivity with SAP ERP cores and custom databases, slashing procurement cycle times by up to 75%.",
    ],
  },
  {
    id: "blood-donation-drive-csr",
    title:
      "Acceleron Solutions Organizes Landmark Blood Donation Camp with Voluntary Blood Donors WB",
    date: "Q1 2026",
    category: "Corporate Milestones",
    summary:
      "Leadership in action: senior CIOs, technology directors, and Acceleron employees unite on 21st February 2026 to contribute to life-saving community causes.",
    image: "/DSC03626.JPG",
    content: [
      "Demonstrating that leadership extends far beyond the boardroom, Acceleron Solutions, in association with the Philanthropic Technical Association and Associates of Voluntary Blood Donors (West Bengal), conducted a landmark blood donation camp.",
      "Distinguished CIOs from leading corporate groups joined Acceleron team members in donating blood, setting a high standard for corporate social responsibility and community welfare.",
    ],
  },
  {
    id: "sap-summit-recognition",
    title:
      "Acceleron Recognized at National Industry Summit for Excellence in SAP S/4HANA Transformations",
    date: "Q2 2026",
    category: "Corporate Milestones",
    summary:
      "Honored for delivering near-zero-downtime S/4HANA migrations and enterprise cloud modernizations across discrete manufacturing sectors.",
    image: "/Arindam Hari Speaking.JPG",
    content: [
      "Acceleron Solutions was recognized at the National Enterprise Transformation Summit for its pioneering Zero Downtime Option (ZDO) SAP migration methodologies.",
      "The award acknowledges Acceleron's successful delivery of complex S/4HANA conversions across heavy engineering, capital goods, and mining clients.",
    ],
  },
  {
    id: "suraksha-lms-launch",
    title:
      "Launch of Suraksha Field Safety & LMS Platform for Hazardous Industrial Environments",
    date: "Q2 2026",
    category: "Technology Announcements",
    summary:
      "Digital permit-to-work, job safety analysis, and worker compliance governance now live across leading engineering sites.",
    image: "/suraksha.png",
    content: [
      "Acceleron has launched the enterprise edition of Suraksha, an integrated field safety and contractor workforce management system engineered for high-risk plant floors.",
      "Suraksha digitizes hot-work permits, height-work authorizations, automated safety checklists, and biometric contractor compliance.",
    ],
  },
];

function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All News");
  const [activeArticle, setActiveArticle] = useState<NewsItem | null>(null);
  const [showAllNews, setShowAllNews] = useState(false);

  const filteredArticles = useMemo(() => {
    return selectedCategory === "All News"
      ? NEWS_ARTICLES
      : NEWS_ARTICLES.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const featuredArticle =
    NEWS_ARTICLES.find((a) => a.featured) || NEWS_ARTICLES[0];

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* PAGE HEADER & INTRODUCTION */}
      <PageHero
        badge="PRESS RELEASES &amp; CORPORATE DISPATCH"
        title="Company News &amp; Announcements"
        subtitle="Stay informed on Acceleron Solutions' latest corporate developments, strategic partnerships, expansion updates, and media features."
        breadcrumbs={[{ label: "News" }]}
        image={getAssetUrl("https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=75&w=1200&auto=format&fit=crop")}
        ctaText="Featured Expansion Release"
        ctaHref="#featured-news"
        secondaryCtaText="Media Contacts"
        secondaryCtaHref="#media-contact"
        icon={
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/20 shadow-xl">
            <Newspaper className="h-8 w-8 text-brand drop-shadow-lg" />
            <div className="border-l border-white/30 pl-3">
              <div className="text-[10px] font-bold uppercase tracking-wider text-brand-red">
                Acceleron Newsroom
              </div>
              <div className="text-xs font-bold text-white tracking-wide">
                Press &amp; Media
              </div>
            </div>
          </div>
        }
      />

      {/* FEATURED NEWS SECTION */}
      <section
        id="featured-news"
        className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-12 sm:py-16 border-b border-border/60"
      >
        <Reveal>
          <div className="text-xs uppercase tracking-[0.3em] text-brand-red font-bold mb-4 flex items-center gap-2">
            <Sparkles className="h-4 w-4" /> Top Corporate Story
          </div>
          <div className="rounded-3xl border border-brand/40 bg-gradient-to-br from-card via-card to-brand/5 p-6 sm:p-10 shadow-glow relative overflow-hidden">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 relative h-64 sm:h-80 lg:h-[380px] rounded-2xl overflow-hidden bg-muted">
                <img
                  src={getAssetUrl(featuredArticle.image)}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-brand-red text-white px-3.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-md">
                  Corporate Expansion
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center gap-3 text-xs text-muted-foreground font-semibold">
                  <span className="text-brand font-bold uppercase tracking-wider">
                    {featuredArticle.category}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-brand-red" />
                    {featuredArticle.date}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-foreground leading-tight">
                  {featuredArticle.title}
                </h2>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {featuredArticle.summary}
                </p>

                <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                  <button
                    onClick={() => setActiveArticle(featuredArticle)}
                    className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-2.5 text-xs font-bold text-white shadow-glow hover:scale-105 transition-all"
                  >
                    <span>Read Full Release</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                  <span className="text-xs text-muted-foreground font-medium">
                    New Delhi Hub
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* NEWS FEED & CATEGORIZATION */}
      <section className="section-dark container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 sm:py-24 border-b border-border/60">
        <Reveal>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12">
            <div>
              <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold">
                Announcements
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
                Latest <span className="text-gradient">Press Releases &amp; Updates</span>
              </h2>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                    selectedCategory === cat
                      ? "bg-brand-gradient text-white shadow-glow"
                      : "bg-muted/40 text-muted-foreground hover:bg-muted/70 hover:text-foreground border border-border/60"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* 3-COLUMN CARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, idx) => (
            <div key={article.id} className={idx >= 3 && !showAllNews ? "hidden md:block h-full" : "block h-full"}>
              <Reveal delay={(idx % 6) * 0.08} className="h-full">
                <div className="rounded-3xl border border-border/80 bg-card p-6 h-full flex flex-col justify-between shadow-card hover:border-brand/40 hover:-translate-y-1 transition-all duration-300">
                  <div>
                    <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-muted">
                      <img
                        src={getAssetUrl(article.image)}
                        alt={article.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                        {article.category}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-[11px] text-muted-foreground mb-2 font-medium">
                      <Calendar className="h-3 w-3 text-brand" />
                      <span>{article.date}</span>
                    </div>

                    <h3 className="text-lg font-bold text-foreground mb-2 leading-snug line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed mb-4">
                      {article.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border/50 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-muted-foreground font-semibold">
                      Official Release
                    </span>
                    <button
                      onClick={() => setActiveArticle(article)}
                      className="font-bold text-brand hover:text-brand-red transition-colors inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Read Full Release</span>
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>

        {filteredArticles.length > 3 && (
          <div className="md:hidden mt-8 text-center">
            <button
              type="button"
              onClick={() => setShowAllNews(!showAllNews)}
              className="inline-flex items-center gap-2 text-xs font-bold text-brand-red hover:text-red-700 py-2.5 px-6 rounded-full border border-brand-red/30 bg-brand-red/5 hover:bg-brand-red/10 shadow-sm transition-all cursor-pointer"
              aria-expanded={showAllNews}
            >
              <span>{showAllNews ? "Show fewer articles" : `+ View all ${filteredArticles.length} releases`}</span>
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${showAllNews ? "rotate-180" : ""}`} />
            </button>
          </div>
        )}
      </section>

      {/* MEDIA & PRESS CONTACT SECTION */}
      <section
        id="media-contact"
        className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10 py-16 sm:py-24"
      >
        <Reveal>
          <div className="rounded-3xl border border-brand/30 bg-gradient-to-br from-card via-card to-brand/5 p-8 sm:p-12 shadow-glow flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl text-center md:text-left">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-red/10 text-brand-red px-3 py-1 rounded-full border border-brand-red/20">
                Media &amp; Press Relations
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                Media Inquiries &amp; Interview Requests
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                For media inquiries, press releases, or interview requests, please contact our communications team at{" "}
                <a
                  href="mailto:enquiry@acceleronsolutions.io"
                  className="font-bold text-brand hover:underline"
                >
                  enquiry@acceleronsolutions.io
                </a>{" "}
                or call{" "}
                <a
                  href="tel:03335346222"
                  className="font-bold text-brand hover:underline"
                >
                  033 3534 6222
                </a>
                .
              </p>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col gap-3 shrink-0 w-full sm:w-auto">
              <a
                href="mailto:enquiry@acceleronsolutions.io?subject=Media%20Inquiry%20-%20Acceleron%20Solutions"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-xs font-bold text-white shadow-glow hover:scale-105 transition-all text-center"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>Email Media Desk</span>
              </a>
              <a
                href="tel:03335346222"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-xs font-bold text-foreground hover:bg-muted/40 transition-colors text-center"
              >
                <Phone className="h-3.5 w-3.5 text-brand" />
                <span>Call 033 3534 6222</span>
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ARTICLE FULL RELEASE MODAL */}
      <AnimatePresence>
        {activeArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6"
            onClick={() => setActiveArticle(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-3xl w-full rounded-3xl overflow-hidden bg-card border border-border shadow-2xl flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-border/60 bg-muted/20">
                <div className="flex items-center gap-2 text-xs font-semibold text-brand">
                  <span className="uppercase tracking-wider">
                    {activeArticle.category}
                  </span>
                  <span>•</span>
                  <span className="text-muted-foreground">{activeArticle.date}</span>
                </div>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="h-8 w-8 rounded-full bg-muted/60 text-foreground flex items-center justify-center hover:bg-brand hover:text-white transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="overflow-y-auto p-6 sm:p-8 space-y-5">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground leading-tight">
                  {activeArticle.title}
                </h2>

                <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-muted">
                  <img
                    src={getAssetUrl(activeArticle.image)}
                    alt={activeArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-4 pt-2">
                  {activeArticle.content.map((paragraph, pIdx) => (
                    <p
                      key={pIdx}
                      className="text-sm sm:text-base text-muted-foreground leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div className="p-4 border-t border-border/60 bg-muted/20 flex items-center justify-between text-xs">
                <span className="text-muted-foreground">
                  Acceleron Corporate Communications
                </span>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="rounded-full bg-brand-gradient px-5 py-2 text-white font-bold text-xs shadow-glow hover:scale-105 transition-all"
                >
                  Close Release
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <WaveDivider from="dark" to="white" />
    </main>
  );
}
