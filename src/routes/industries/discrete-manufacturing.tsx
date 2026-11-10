import { createFileRoute } from "@tanstack/react-router";
import { IndustryTemplate } from "../../components/ui/IndustryTemplate";
import { INDUSTRIES_DATA } from "../../data/industriesData";

export const Route = createFileRoute("/industries/discrete-manufacturing")({
  head: () => ({
    meta: [
      { title: "Discrete Manufacturing Solutions — Acceleron Solutions" },
      { name: "description", content: "Smart factory digital transformations, SAP RISE, QMS, and shop floor IoT integrations for discrete manufacturers." },
    ],
  }),
  component: () => <IndustryTemplate data={INDUSTRIES_DATA["discrete-manufacturing"]} />,
});
