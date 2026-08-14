import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/ui/PageHero";
import { WaveDivider } from "../components/ui/Animations";

export const Route = createFileRoute("/news")({
  component: NewsPage,
});

function NewsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <PageHero
        title="Company News & Announcements"
        subtitle="Stay updated with the latest news, product launches, and corporate milestones from Acceleron Solutions."
        breadcrumbs={[{ label: "News" }]}
        image="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=75&w=1200&auto=format&fit=crop"
      />
      <section className="section-dark container mx-auto px-6 max-w-7xl relative z-10 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground">Latest Updates</h2>
          <p className="mt-4 text-muted-foreground">We will share our latest news and press releases here soon.</p>
        </div>
      </section>
      <WaveDivider from="dark" to="white" />
    </main>
  );
}
