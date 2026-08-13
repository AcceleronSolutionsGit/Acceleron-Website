import { createFileRoute } from "@tanstack/react-router";
import { Boxes } from "lucide-react";
import { IndustryTemplate } from "../../components/ui/IndustryTemplate";
import { INDUSTRIES_DATA } from "../../data/industriesData";

export const Route = createFileRoute("/industries/capital-goods")({
  head: () => ({
    meta: [
      { title: "Capital Goods & Machinery Solutions — Acceleron Solutions" },
      { name: "description", content: "Engineer-to-Order (ETO) SAP Project System, CRM Field Service, and contractor workforce management for OEMs." },
    ],
  }),
  component: () => <IndustryTemplate data={INDUSTRIES_DATA["capital-goods"]} icon={<Boxes className="h-8 w-8" />} />,
});
