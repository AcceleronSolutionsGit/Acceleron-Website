import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { motion } from "motion/react";
import { Search, Calendar, Clock, ArrowRight, Tag, User } from "lucide-react";
import { PageHero } from "../components/ui/PageHero";
import { Reveal, WaveDivider } from "../components/ui/Animations";
import { BLOG_POSTS, type BlogPost } from "../data/blogData";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog & Insights — Acceleron Solutions" },
      { name: "description", content: "Insights on SAP S/4HANA transformations, Salesforce, Applied AI, enterprise cybersecurity, and industrial software engineering." },
    ],
  }),
  component: BlogListingPage,
});

const CATEGORIES = ["All", "SAP", "Salesforce", "AI & Analytics", "Cloud & Security", "Digital Transformation"] as const;

function BlogListingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <PageHero
        title="Acceleron Insights & Tech Dispatch"
        subtitle="Perspectives on enterprise transformation, SAP migrations, Applied AI pipelines, and industrial software architecture."
        breadcrumbs={[{ label: "Blog" }]}
        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=75&w=1200&auto=format&fit=crop"
        ctaText="Explore Featured Article"
        ctaHref={`/blog/${featuredPost.slug}`}
      />

      {/* Main Section */}
      <section className="section-dark container mx-auto px-6 max-w-7xl relative z-10 py-16">
        
        {/* Search & Filter Controls */}
        <Reveal>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
            
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles, tags, topic..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-border bg-muted/30 pl-11 pr-5 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand/50 transition-all"
              />
            </div>

            {/* Category Filter Chips */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? "bg-brand-gradient text-white shadow-glow"
                      : "bg-muted/30 text-muted-foreground hover:bg-muted/60 hover:text-foreground border border-border/50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Featured Post Card */}
        {selectedCategory === "All" && !searchQuery && featuredPost && (
          <Reveal>
            <div className="mb-16">
              <Link
                to="/blog/$slug"
                params={{ slug: featuredPost.slug }}
                className="group grid lg:grid-cols-12 gap-8 items-center rounded-3xl border border-border bg-muted/20 p-6 md:p-8 hover:bg-muted/40 hover:border-brand/40 transition-all duration-300 shadow-glow overflow-hidden"
              >
                <div className="lg:col-span-7 relative h-72 lg:h-96 rounded-2xl overflow-hidden bg-muted">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center rounded-full bg-brand-gradient px-3 py-1 text-xs font-bold text-white shadow-md">
                      Featured
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex items-center gap-3 text-xs font-semibold text-muted-foreground mb-3">
                      <span className="text-brand-red font-bold uppercase tracking-wider">{featuredPost.category}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {featuredPost.readTime}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-brand transition-colors leading-tight mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="flex items-center gap-3">
                      <img
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        className="h-10 w-10 rounded-full object-cover border border-border"
                      />
                      <div>
                        <div className="text-xs font-bold text-foreground">{featuredPost.author.name}</div>
                        <div className="text-[10px] text-muted-foreground">{featuredPost.date}</div>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-brand group-hover:translate-x-1 transition-transform">
                      Read Article <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </Reveal>
        )}

        {/* Blog Post Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, idx) => (
              <Reveal key={post.slug} delay={idx * 0.08}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="group flex flex-col justify-between rounded-3xl border border-border/60 bg-muted/20 p-6 hover:bg-muted/40 hover:border-brand/40 transition-all duration-300 h-full shadow-soft hover:shadow-glow"
                >
                  <div>
                    {/* Image */}
                    <div className="relative h-48 rounded-2xl overflow-hidden mb-6 bg-muted">
                      <img
                        src={post.image}
                        alt={post.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="inline-block rounded-full bg-background/80 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-foreground border border-border">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Metadata */}
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3 font-medium">
                      <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5 text-brand-red" /> {post.date}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {post.readTime}</span>
                    </div>

                    {/* Title & Excerpt */}
                    <h3 className="text-xl font-bold text-foreground group-hover:text-brand transition-colors mb-3 leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed line-clamp-3 mb-6">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Author Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/50 mt-auto">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="h-8 w-8 rounded-full object-cover border border-border"
                      />
                      <span className="text-xs font-semibold text-foreground">{post.author.name}</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-brand" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 border border-dashed border-border rounded-3xl bg-muted/10">
            <h3 className="text-xl font-bold text-foreground mb-2">No articles found</h3>
            <p className="text-muted-foreground text-sm">Try refining your search terms or clearing filters.</p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-6 inline-flex items-center rounded-full bg-brand-gradient px-6 py-2.5 text-xs font-bold text-white shadow-glow"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      <WaveDivider from="dark" to="white" />
    </main>
  );
}
