import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/cxo-advisory")({
  beforeLoad: () => {
    throw redirect({
      to: "/services/$category/$service",
      params: {
        category: "it-custom-solutions",
        service: "it-system-audits",
      },
    });
  },
  component: () => null,
});
