import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/software-development")({
  beforeLoad: () => {
    throw redirect({
      to: "/services/$category/$service",
      params: {
        category: "it-custom-solutions",
        service: "custom-software-application-development",
      },
    });
  },
  component: () => null,
});
