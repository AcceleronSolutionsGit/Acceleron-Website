import { createFileRoute, Link } from "@tanstack/react-router";
import { BLOG_POSTS } from "../data/blogData";
import { Calendar, Clock, ArrowLeft, Tag, Share2, Linkedin, Twitter } from "lucide-react";
import { PageHero } from "../components/ui/PageHero";
import { Reveal, WaveDivider } from "../components/ui/Animations";

export const Route = createFileRoute("/blog_/$slug")({
  component: BlogDetailPage,
});

function BlogDetailPage() {
  const { slug } = Route.useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug) || BLOG_POSTS[0];

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <PageHero
        title={post.title}
        subtitle={post.excerpt}
        breadcrumbs={[
          { label: "Blog", href: "/blog" },
          { label: post.category }
        ]}
        image={post.image}
        ctaText="Back to Blog"
        ctaHref="/blog"
      />

      <section className="section-dark container mx-auto px-6 max-w-4xl relative z-10 py-16">
        
        {/* Back Link */}
        <Reveal>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-muted-foreground hover:text-brand transition-colors mb-10"
          >
            <ArrowLeft className="h-4 w-4" /> Back to all articles
          </Link>
        </Reveal>

        {/* Article Header Metadata */}
        <Reveal delay={0.1}>
          <div className="flex flex-wrap items-center justify-between gap-6 pb-8 border-b border-border mb-12">
            <div className="flex items-center gap-4">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="h-12 w-12 rounded-full object-cover border-2 border-brand/50"
              />
              <div>
                <h4 className="text-base font-bold text-foreground">{post.author.name}</h4>
                <p className="text-xs text-muted-foreground">{post.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-6 text-xs text-muted-foreground font-semibold">
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4 text-brand-red" /> {post.date}</span>
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-brand" /> {post.readTime}</span>
            </div>
          </div>
        </Reveal>

        {/* Article Main Image */}
        <Reveal delay={0.2}>
          <div className="relative h-96 rounded-3xl overflow-hidden mb-12 shadow-glow border border-border">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </Reveal>

        {/* Article Body Content */}
        <Reveal delay={0.3}>
          <div
            className="prose prose-invert max-w-none text-foreground/90 leading-relaxed text-base space-y-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </Reveal>

        {/* Tags & Share */}
        <Reveal delay={0.4}>
          <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-2">
              <Tag className="h-4 w-4 text-brand-red mr-1" />
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-muted/40 px-3 py-1 text-xs font-semibold text-muted-foreground border border-border/50"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <WaveDivider from="dark" to="white" />

      {/* Related Articles */}
      <section className="container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <Reveal>
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold mb-2">Read Next</div>
            <h2 className="text-3xl font-bold text-foreground">Related <span className="text-gradient">Insights</span></h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {relatedPosts.map((rel, idx) => (
            <Reveal key={rel.slug} delay={idx * 0.1}>
              <Link
                to="/blog/$slug"
                params={{ slug: rel.slug }}
                className="group flex flex-col justify-between rounded-3xl border border-border/60 bg-muted/20 p-6 hover:bg-muted/40 hover:border-brand/40 transition-all duration-300 h-full shadow-soft"
              >
                <div>
                  <div className="relative h-44 rounded-2xl overflow-hidden mb-4 bg-muted">
                    <img src={rel.image} alt={rel.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="text-[10px] uppercase font-bold text-brand-red mb-2">{rel.category}</div>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-brand transition-colors mb-2 line-clamp-2">{rel.title}</h3>
                  <p className="text-xs text-muted-foreground line-clamp-2">{rel.excerpt}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
