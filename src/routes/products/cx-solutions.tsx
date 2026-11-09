import { createFileRoute } from "@tanstack/react-router";
import {
  ShoppingBag,
  Truck,
  Gift,
  FileBadge,
  Compass,
  Headphones,
  DollarSign,
  HeartHandshake,
  ShieldCheck,
  Check,
} from "lucide-react";
import {
  ProductCategoryTemplate,
  ProductCategoryData,
} from "../../components/products/ProductCategoryTemplate";

export const Route = createFileRoute("/products/cx-solutions")({
  head: () => ({
    meta: [
      {
        title:
          "CX Solutions – Elevating Customer Experience & Lifecycle Engagement | Acceleron Solutions",
      },
      {
        name: "description",
        content:
          "Acceleron's CX Solutions bring together a suite of digital platforms designed to enhance customer experience, streamline field service management, simplify commercial transactions and strengthen long-term customer relationships.",
      },
    ],
  }),
  component: CXSolutionsPage,
});

const CX_SOLUTIONS_DATA: ProductCategoryData = {
  slug: "cx-solutions",
  categoryTitle: "CX Solutions",
  pageTitle: "CX Solutions",
  subtitle:
    "An integrated ecosystem combining CRM capabilities, warranty management, loyalty programmes, and automated field support to deliver connected customer journeys.",
  badge: "CUSTOMER EXPERIENCE & LIFECYCLE ENGAGEMENT",
  overview:
    "Acceleron's CX Solutions bring together a suite of digital platforms designed to enhance customer experience, streamline field service management, simplify commercial transactions and strengthen long-term customer relationships. Combining CRM capabilities, warranty management, loyalty programmes and automated field support, this integrated ecosystem helps enterprises deliver more connected customer experiences and build lasting relationships.",
  heroImage: "/capital_goods.jpg",
  icon: ShoppingBag,
  gradient: "from-amber-600 via-orange-600 to-red-600",
  products: [
    {
      name: "iFMS (Intelligent Field Management System)",
      badge: "Field Force Dispatch",
      desc: "An advanced field service management platform that streamlines technician dispatch, mobile work orders, spare parts fulfilment and real-time SLA tracking.",
      href: "/products/ifms",
      icon: Truck,
      gradient: "from-amber-600 to-orange-700",
      features: [
        "Dynamic technician dispatch factoring in skill, proximity & inventory",
        "Mobile job cards with offline capabilities & customer e-signatures",
        "Real-time GPS technician tracking & SLA escalation alerting",
      ],
    },
    {
      name: "Vanijya",
      badge: "Commercial Billing",
      desc: "A comprehensive commercial transaction and billing platform designed to streamline order-to-cash cycles, invoicing and enterprise financial processes.",
      href: "/products/vanijya",
      icon: ShoppingBag,
      gradient: "from-indigo-600 to-blue-800",
      features: [
        "Automated order-to-cash workflow with statutory e-invoicing compliance",
        "Digital self-service catalog for genuine spare parts ordering",
        "Integrated multi-gateway payment processing & real-time reconciliation",
      ],
    },
    {
      name: "Samriddhi – Customer Loyalty Management",
      badge: "Loyalty & Retention",
      desc: "A digital loyalty and rewards platform designed to encourage repeat business, track customer engagement tiers and strengthen brand advocacy.",
      href: "/products/samriddhi",
      icon: Gift,
      gradient: "from-amber-500 to-orange-600",
      features: [
        "Tiered reward frameworks (Silver, Gold, Platinum VIP perks)",
        "Automated reward point accrual across parts purchases & service orders",
        "Frictionless digital wallet redemption & instant voucher generation",
      ],
    },
    {
      name: "Customer Warranty Management",
      badge: "Warranty Administration",
      desc: "An end-to-end digital platform for warranty tracking, claim processing and validation, supporting transparent policy administration and timely service resolution.",
      href: "/products/warranty-management",
      icon: FileBadge,
      gradient: "from-teal-600 to-cyan-700",
      features: [
        "Digital POS warranty registration with serial number traceability",
        "Automated claim triage against operating hours & coverage clauses",
        "Structured OEM recovery settlement dossiers & reimbursement tracking",
      ],
    },
    {
      name: "SalesOrbit",
      badge: "Sales CRM Automation",
      desc: "A sales automation and pipeline management platform that enables sales teams to track leads, forecast revenue and optimize conversion opportunities.",
      href: "/products/salesorbit",
      icon: Compass,
      gradient: "from-rose-600 to-pink-700",
      features: [
        "Full opportunity stage tracking for heavy industrial & tender sales",
        "Predictive sales forecasting & historical win/loss analytics",
        "Mobile CRM app for territory sales representatives and site visits",
      ],
    },
  ],
  pillars: [
    {
      title: "Field Service Excellence",
      desc: "Equipping mobile workforces with digital tools to coordinate onsite support, maintenance and service delivery more efficiently.",
      icon: Headphones,
    },
    {
      title: "Commercial & Financial Transparency",
      desc: "Streamlining transactions, warranty processes and billing to simplify customer interactions and commercial workflows.",
      icon: DollarSign,
    },
    {
      title: "Engagement & Retention",
      desc: "Strengthening long-term customer relationships through structured loyalty programmes, engagement tracking and responsive feedback channels.",
      icon: HeartHandshake,
    },
  ],
  sectors: [
    {
      title: "Heavy Machinery & Industrial Equipment",
      desc: "Managing warranty claims, field repairs and end-to-end customer service lifecycles across distributed dealer and customer footprints.",
    },
    {
      title: "Automotive & Fleet Operations",
      desc: "Supporting roadside and depot service coordination alongside customer loyalty programmes and rapid spare parts replenishment.",
    },
    {
      title: "Enterprise B2B & Distribution",
      desc: "Optimizing sales pipelines, commercial billing and business-to-business customer relationship management across multi-tiered regional distribution networks.",
    },
  ],
  whyPartner: [
    "Understanding of Complex Service Environments: Digital solutions designed around the demands of industrial service delivery and customer lifecycle management.",
    "Connected CX Capabilities: Integrated platforms spanning field operations, warranty management, commercial transactions and sales intelligence.",
    "Scalable Digital Architecture: Flexible technology solutions aligned with evolving business requirements, customer expectations and long-term relationship value.",
  ],
};

function CXSolutionsPage() {
  return <ProductCategoryTemplate data={CX_SOLUTIONS_DATA} />;
}
