import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/manage-engine")({
  beforeLoad: () => {
    throw redirect({ to: "/services/manageengine" });
  },
  component: () => null,
});
