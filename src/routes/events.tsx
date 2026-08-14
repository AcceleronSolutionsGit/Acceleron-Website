import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/ui/PageHero";
import { WaveDivider } from "../components/ui/Animations";

export const Route = createFileRoute("/events")({
  component: EventsPage,
});

function EventsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <PageHero
        title="Upcoming Events & Webinars"
        subtitle="Join Acceleron Solutions at industry conferences, technical workshops, and thought leadership webinars."
        breadcrumbs={[{ label: "Events" }]}
        image="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=75&w=1200&auto=format&fit=crop"
      />
      <section className="section-dark container mx-auto px-6 max-w-7xl relative z-10 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground">Stay Tuned</h2>
          <p className="mt-4 text-muted-foreground">We are preparing an exciting lineup of events. Check back soon for updates!</p>
        </div>
      </section>
      <WaveDivider from="dark" to="white" />
    </main>
  );
}
