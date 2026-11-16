import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/sap")({
  beforeLoad: () => {
    throw redirect({
      to: "/service-category/sap",
    });
  },
  component: () => null,
});
