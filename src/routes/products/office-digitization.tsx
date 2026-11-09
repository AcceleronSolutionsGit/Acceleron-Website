import { createFileRoute } from "@tanstack/react-router";
import {
  Building2,
  FileCheck2,
  Landmark,
  Brain,
  FolderLock,
  Boxes,
  Zap,
  DollarSign,
  ShieldAlert,
} from "lucide-react";
import {
  ProductCategoryTemplate,
  ProductCategoryData,
} from "../../components/products/ProductCategoryTemplate";

export const Route = createFileRoute("/products/office-digitization")({
  head: () => ({
    meta: [
      {
        title:
          "Office Digitization – Intelligent Enterprise Automation & Paperless Workflows | Acceleron Solutions",
      },
      {
        name: "description",
        content:
          "Office Digitization brings together a suite of enterprise automation solutions designed to reduce paperwork, streamline internal decision-making, strengthen information management and modernize administrative workflows.",
      },
    ],
  }),
  component: OfficeDigitizationPage,
});

const OFFICE_DIGITIZATION_DATA: ProductCategoryData = {
  slug: "office-digitization",
  categoryTitle: "Office Digitization",
  pageTitle:
    "Office Digitization – Intelligent Enterprise Automation & Paperless Workflows",
  subtitle:
    "Connecting digital approval systems, treasury management, AI-powered cognitive assistance, secure document repositories, and supplier collaboration portals.",
  badge: "INTELLIGENT ENTERPRISE AUTOMATION & PAPERLESS WORKFLOWS",
  overview:
    "Office Digitization brings together a suite of enterprise automation solutions designed to reduce paperwork, streamline internal decision-making, strengthen information management and modernize administrative workflows. By connecting digital approval systems, treasury management, AI-powered assistance, secure document repositories and supplier collaboration portals, this integrated ecosystem helps organizations improve operational efficiency, enhance transparency and simplify everyday business processes.",
  heroImage: "/products/Office Digitization - Acceleron Solutions.png",
  icon: Building2,
  gradient: "from-purple-600 via-violet-600 to-indigo-600",
  products: [
    {
      name: "Approval Management System",
      badge: "Delegation & Sign-Offs",
      desc: "An automated, multi-level workflow platform that streamlines internal approvals, tracks pending requests and maintains digital records of approval decisions.",
      href: "/products/approval-management",
      icon: FileCheck2,
      gradient: "from-blue-600 to-indigo-700",
      features: [
        "Dynamic multi-tier approval matrix configured by financial delegation limits",
        "One-click executive sign-offs via mobile, email, and web dashboard",
        "Automated SLA reminders, bottleneck tracking, and escalation countdowns",
      ],
    },
    {
      name: "Treasury Management System",
      badge: "Liquidity & Multi-Bank",
      desc: "A financial management platform providing visibility into cash positions, liquidity, bank reconciliation and working capital.",
      href: "/products/treasury-management",
      icon: Landmark,
      gradient: "from-emerald-600 to-teal-700",
      features: [
        "Real-time multi-bank cash aggregation and consolidated balance sheets",
        "Automated bank statement reconciliation eliminating manual spreadsheet work",
        "Predictive 30/60/90-day cash flow forecasting and liquidity models",
      ],
    },
    {
      name: "AccelEdge.ai",
      badge: "Cognitive AI Framework",
      desc: "An artificial intelligence and cognitive automation framework bringing together intelligent document processing, predictive insights and virtual assistants to support enterprise operations.",
      href: "/products/acceledge-ai",
      icon: Brain,
      gradient: "from-purple-600 to-fuchsia-700",
      features: [
        "Intelligent document processing (IDP) extracting data from invoices & contracts",
        "Predictive operational machine learning models for equipment telemetry",
        "Conversational AI assistants grounded in verified corporate SOP repositories",
      ],
    },
    {
      name: "E-Document Management System",
      badge: "Secure Cloud Archiving",
      desc: "A secure, searchable digital repository for enterprise records, enabling document archiving, version control and efficient information retrieval.",
      href: "/products/edms",
      icon: FolderLock,
      gradient: "from-cyan-600 to-blue-700",
      features: [
        "Encrypted enterprise vault with granular role-based folder permissions",
        "Instant full-text OCR indexing across scanned PDFs and engineering drawings",
        "Strict check-in/check-out version control with complete audit trails",
      ],
    },
    {
      name: "Supplier Portal",
      badge: "Vendor Collaboration",
      desc: "A collaborative B2B platform that streamlines purchase order management, invoice submissions, delivery tracking and vendor interactions.",
      href: "/products/supplier-portal",
      icon: Boxes,
      gradient: "from-amber-600 to-orange-700",
      features: [
        "Digital purchase order acknowledgment, revisions, and ASN notifications",
        "Vendor self-service e-invoicing with automated 3-way matching against ERP",
        "Objective supplier scorecards tracking delivery timeliness and defect rates",
      ],
    },
  ],
  pillars: [
    {
      title: "Workflow Acceleration & Automation",
      desc: "Replacing manual approvals and paper-based processes with structured digital workflows that help reduce delays and administrative effort.",
      icon: Zap,
    },
    {
      title: "Financial Visibility & Governance",
      desc: "Bringing treasury operations, cash positions and liquidity monitoring into a more connected environment to support informed financial management.",
      icon: DollarSign,
    },
    {
      title: "Cognitive Intelligence & Document Security",
      desc: "Applying AI-driven capabilities and secure digital repositories to make enterprise information more accessible, manageable and protected.",
      icon: ShieldAlert,
    },
  ],
  sectors: [
    {
      title: "Corporate & Enterprise Headquarters",
      desc: "Streamlining departmental approvals, vendor transactions, financial workflows and document management across business functions.",
    },
    {
      title: "Banking & Financial Institutions",
      desc: "Supporting treasury visibility, financial reconciliation, audit readiness and structured document governance.",
    },
    {
      title: "Heavy Manufacturing & Industrial Conglomerates",
      desc: "Connecting plants, field offices and corporate functions through integrated digital workflows and centralized information systems.",
    },
  ],
  whyPartner: [
    "A connected portfolio of enterprise software solutions addressing critical administrative, financial and operational workflows.",
    "Integration capabilities across ERP, financial systems, HRMS and collaborative business platforms.",
    "Scalable digital solutions designed to support evolving enterprise requirements, improve process efficiency and reduce administrative overhead.",
  ],
};

function OfficeDigitizationPage() {
  return <ProductCategoryTemplate data={OFFICE_DIGITIZATION_DATA} />;
}
