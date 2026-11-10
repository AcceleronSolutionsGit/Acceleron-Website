import { createFileRoute } from "@tanstack/react-router";
import { IndustryTemplate } from "../../components/ui/IndustryTemplate";
import { INDUSTRIES_DATA } from "../../data/industriesData";

export const Route = createFileRoute("/industries/utilities")({
  head: () => ({
    meta: [
      { title: "Power & Utilities Solutions — Acceleron Solutions" },
      { name: "description", content: "Grid asset management, SAP IS-U, IT/OT zero-trust cybersecurity, and emergency field safety mobile tools." },
    ],
  }),
  component: () => <IndustryTemplate data={INDUSTRIES_DATA["utilities"]} />,
});
