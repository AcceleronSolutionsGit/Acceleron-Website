import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/analytics")({
  beforeLoad: () => {
    throw redirect({
      to: "/services/$category/$service",
      params: {
        category: "it-custom-solutions",
        service: "custom-ai-application-development",
      },
    });
  },
  component: () => null,
});
