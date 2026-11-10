import { createFileRoute } from "@tanstack/react-router";
import { IndustryTemplate } from "../../components/ui/IndustryTemplate";
import { INDUSTRIES_DATA } from "../../data/industriesData";

export const Route = createFileRoute("/industries/healthcare")({
  head: () => ({
    meta: [
      { title: "Healthcare & Precision Technology Solutions — Acceleron Solutions" },
      {
        name: "description",
        content:
          "End-to-end quality management, precision material traceability, and automated compliance solutions for healthcare and precision technology enterprises.",
      },
    ],
  }),
  component: () => (
    <IndustryTemplate
      data={INDUSTRIES_DATA["healthcare"]}
    />
  ),
});
