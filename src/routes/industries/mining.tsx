import { createFileRoute } from "@tanstack/react-router";
import { IndustryTemplate } from "../../components/ui/IndustryTemplate";
import { INDUSTRIES_DATA } from "../../data/industriesData";

export const Route = createFileRoute("/industries/mining")({
  head: () => ({
    meta: [
      { title: "Mining & Heavy Industry Solutions — Acceleron Solutions" },
      { name: "description", content: "SAP S/4HANA ERP, Tyre Health fleet IoT telemetry, and Suraksha field safety systems for mining enterprises." },
    ],
  }),
  component: () => <IndustryTemplate data={INDUSTRIES_DATA["mining"]} />,
});
