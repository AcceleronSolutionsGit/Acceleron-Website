import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/ui/PageHero";
import { WaveDivider } from "../components/ui/Animations";

export const Route = createFileRoute("/csr")({
  component: CsrPage,
});

function CsrPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <PageHero
        title="Corporate Social Responsibility"
        subtitle="Empowering communities, driving sustainable initiatives, and making a positive impact on the world around us."
        breadcrumbs={[{ label: "CSR" }]}
        image="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=75&w=1200&auto=format&fit=crop"
      />
      <section className="section-dark container mx-auto px-6 max-w-7xl relative z-10 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground">Our Initiatives</h2>
          <p className="mt-4 text-muted-foreground">Discover how Acceleron Solutions is committed to sustainability and social impact. Content coming soon.</p>
        </div>
      </section>
      <WaveDivider from="dark" to="white" />
    </main>
  );
}
