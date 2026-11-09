import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/cyber-security")({
  beforeLoad: () => {
    throw redirect({
      to: "/services/$category/$service",
      params: {
        category: "it-custom-solutions",
        service: "network-security-implementation",
      },
    });
  },
  component: () => null,
});
