import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { motion } from "motion/react";
import {
  Search,
  Calendar,
  Clock,
  ArrowRight,
  Tag,
  User,
  Sparkles,
  BookOpen,
  ArrowUpRight,
  Mail,
} from "lucide-react";
import { PageHero } from "../components/ui/PageHero";
import { Reveal, WaveDivider } from "../components/ui/Animations";
import { BLOG_POSTS, type BlogPost } from "../data/blogData";
import { getAssetUrl } from "../lib/assets";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Tech Pulse & Perspectives — Acceleron Solutions" },
      {
        name: "description",
        content:
          "Expert insights, engineering updates, and strategic perspectives on enterprise digital transformation, SAP modernization, cloud infrastructure, and cybersecurity.",
      },
    ],
  }),
  component: BlogListingPage,
});

const CATEGORIES = [
  "All Posts",
  "SAP & Enterprise",
  "AI & Analytics",
  "Cyber Security",
  "Cloud & Infrastructure",
  "Company News",
] as const;

function BlogListingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All Posts");

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === "All Posts" || post.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) =>
          t.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const featuredPost =
    BLOG_POSTS.find(
      (p) =>
        p.slug ===
        "navigating-the-journey-key-considerations-for-sap-s4hana-migration"
    ) || BLOG_POSTS[0];

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* PAGE HEADER & INTRODUCTION */}
      <PageHero
        badge="PERSPECTIVES &amp; INDUSTRY INSIGHTS"
        title="Tech Pulse &amp; Perspectives"
        subtitle="Expert insights, engineering updates, and strategic perspectives on enterprise digital transformation, SAP modernization, cloud infrastructure, and cybersecurity."
        breadcrumbs={[{ label: "Perspectives", href: "/blog" }]}
        image={getAssetUrl("/capital_goods.jpg")}
        ctaText="Read Featured Article"
        ctaHref={`#featured-article`}
        secondaryCtaText="Contact Our Experts"
        secondaryCtaHref="/contact"
        icon={
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/20 shadow-xl">
            <BookOpen className="h-8 w-8 text-brand drop-shadow-lg" />
            <div className="border-l border-white/30 pl-3">
              <div className="text-[10px] font-bold uppercase tracking-wider text-brand-red">
                Acceleron Insights
              </div>
              <div className="text-xs font-bold text-white tracking-wide">
                Thought Leadership
              </div>
            </div>
          </div>
        }
      />

      {/* MAIN CONTENT SECTION */}
      <section className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-12 sm:py-16">
        {/* SEARCH & CATEGORY FILTER BAR */}
        <Reveal>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12">
            {/* Search Input */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles, technology, tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-border bg-card pl-11 pr-5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand shadow-sm transition-all"
              />
            </div>

            {/* Category Filter Chips */}
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

        {/* FEATURED ARTICLE SECTION */}
        {selectedCategory === "All Posts" && !searchQuery && featuredPost && (
          <div id="featured-article" className="mb-16">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.3em] text-brand-red font-bold mb-4 flex items-center gap-2">
                <Sparkles className="h-4 w-4" /> Featured Perspective
              </div>
              <Link
                to="/blog/$slug"
                params={{ slug: featuredPost.slug }}
                className="group grid lg:grid-cols-12 gap-8 items-center rounded-3xl border border-brand/30 bg-gradient-to-br from-card via-card to-brand/5 p-6 sm:p-8 hover:border-brand/60 transition-all duration-300 shadow-card overflow-hidden block"
              >
                <div className="lg:col-span-7 relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden bg-muted">
                  <img
                    src={getAssetUrl(featuredPost.image)}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-brand-gradient text-white px-3.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-md">
                    Featured Article
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground font-semibold">
                      <span className="text-brand font-bold uppercase tracking-wider">
                        SAP &amp; Enterprise Technology
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {featuredPost.date}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground group-hover:text-brand transition-colors leading-tight">
                      {featuredPost.title}
                    </h2>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                    {featuredPost.author && (
                      <div className="flex items-center gap-3">
                        <img
                          src={getAssetUrl(featuredPost.author.avatar)}
                          alt={featuredPost.author.name}
                          className="h-10 w-10 rounded-full object-cover border border-border"
                        />
                        <div>
                          <div className="text-xs font-bold text-foreground">
                            {featuredPost.author.name}
                          </div>
                          <div className="text-[11px] text-muted-foreground">
                            {featuredPost.author.role}
                          </div>
                        </div>
                      </div>
                    )}
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand group-hover:text-brand-red transition-colors">
                      <span>Read Full Article</span>
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          </div>
        )}

        {/* RESPONSIVE 3-COLUMN GRID */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-foreground">
              {selectedCategory === "All Posts"
                ? "Recent Engineering & Advisory Articles"
                : `${selectedCategory} Articles`}
            </h3>
            <span className="text-xs text-muted-foreground">
              Showing {filteredPosts.length} article(s)
            </span>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-16 rounded-3xl border border-dashed border-border bg-card p-12">
              <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h4 className="text-lg font-bold text-foreground mb-1">
                No matching articles found
              </h4>
              <p className="text-sm text-muted-foreground mb-6">
                Try searching with different keywords or switch categories.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All Posts");
                  setSearchQuery("");
                }}
                className="rounded-full bg-brand-gradient px-6 py-2.5 text-xs font-bold text-white shadow-glow hover:scale-105 transition-all"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, idx) => (
                <Reveal key={post.slug} delay={(idx % 6) * 0.08}>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: post.slug }}
                    className="group rounded-3xl border border-border/80 bg-card p-5 h-full flex flex-col justify-between shadow-card hover:border-brand/40 hover:-translate-y-1 transition-all duration-300 block"
                  >
                    <div>
                      {/* Thumbnail */}
                      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-5 bg-muted">
                        <img
                          src={getAssetUrl(post.image)}
                          alt={post.title}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                          {post.category}
                        </div>
                      </div>

                      {/* Meta: Read time & Date */}
                      <div className="flex items-center gap-3 text-[11px] text-muted-foreground mb-2 font-medium">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" /> {post.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {post.readTime}
                        </span>
                      </div>

                      {/* Title & Excerpt */}
                      <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-brand transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </h4>
                      <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Author & Read More */}
                    <div className="pt-4 border-t border-border/50 flex items-center justify-between text-xs">
                      {post.author ? (
                        <div className="flex items-center gap-2 truncate pr-2">
                          <img
                            src={getAssetUrl(post.author.avatar)}
                            alt={post.author.name}
                            className="h-6 w-6 rounded-full object-cover shrink-0"
                          />
                          <span className="font-semibold text-foreground/80 truncate text-[11px]">
                            {post.author.name}
                          </span>
                        </div>
                      ) : (
                        <span className="text-[11px] font-semibold text-muted-foreground">
                          Acceleron Engineering
                        </span>
                      )}
                      <span className="font-bold text-brand group-hover:text-brand-red transition-colors flex items-center gap-1 shrink-0">
                        <span>Read</span>
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CALL TO ACTION (CTA) SECTION */}
      <section className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10 py-16 sm:py-24">
        <Reveal>
          <div className="rounded-3xl border border-brand/30 bg-gradient-to-br from-card via-card to-brand/5 p-8 sm:p-14 shadow-glow text-center relative overflow-hidden">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-brand mb-4">
              Stay Informed
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground max-w-2xl mx-auto leading-tight mb-4">
              Stay Ahead of <span className="text-gradient">Enterprise Technology Trends</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8">
              Subscribe to our tech pulse newsletter or connect with our advisory team to discuss your digital roadmap.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-8 py-3.5 text-xs font-bold text-white shadow-glow hover:scale-105 transition-all"
              >
                <span>Contact Our Experts</span>
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
