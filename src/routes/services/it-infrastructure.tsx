import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/it-infrastructure")({
  beforeLoad: () => {
    throw redirect({
      to: "/services/$category/$service",
      params: {
        category: "it-custom-solutions",
        service: "it-infrastructure-services",
      },
    });
  },
  component: () => null,
});
