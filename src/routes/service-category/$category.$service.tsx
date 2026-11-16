import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { getSubServiceBySlug } from "../../data/servicesData";
import { SubServicePageView } from "../../components/services/SubServicePage";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/service-category/$category/$service")({
  component: CategorySubServiceRoute,
});

function CategorySubServiceRoute() {
  const { service } = useParams({ from: "/service-category/$category/$service" });
  const data = getSubServiceBySlug(service);

  if (!data) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-background text-foreground px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
        <p className="text-muted-foreground mb-8 max-w-md">
          The requested service page "{service}" could not be found or has been moved.
        </p>
        <Link
          to="/services"
          className="rounded-xl bg-brand-gradient px-6 py-3.5 text-sm font-bold text-white shadow-glow flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Services Hub
        </Link>
      </div>
    );
  }

  return <SubServicePageView data={data} />;
}
