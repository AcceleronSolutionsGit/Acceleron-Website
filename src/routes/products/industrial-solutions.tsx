import { createFileRoute } from "@tanstack/react-router";
import {
  Factory,
  Layers,
  Wrench,
  Truck,
  Activity,
  Boxes,
  Cpu,
  Workflow,
  ShieldCheck,
} from "lucide-react";
import {
  ProductCategoryTemplate,
  ProductCategoryData,
} from "../../components/products/ProductCategoryTemplate";

export const Route = createFileRoute("/products/industrial-solutions")({
  head: () => ({
    meta: [
      {
        title:
          "Industrial Solutions – An Integrated Engineering & Technology Ecosystem | Acceleron Solutions",
      },
      {
        name: "description",
        content:
          "Acceleron delivers integrated engineering and digital solutions that help industries optimize operations, improve productivity, and enhance asset performance.",
      },
    ],
  }),
  component: IndustrialSolutionsPage,
});

const INDUSTRIAL_SOLUTIONS_DATA: ProductCategoryData = {
  slug: "industrial-solutions",
  categoryTitle: "Industrial Solutions",
  pageTitle: "Industrial Solutions",
  subtitle:
    "Acceleron delivers integrated engineering and digital solutions that help industries optimize operations, improve productivity, and enhance asset performance.",
  badge: "INTEGRATED ENGINEERING & TECHNOLOGY ECOSYSTEM",
  overview:
    "Acceleron delivers integrated engineering and digital solutions that help industries optimize operations, improve productivity, and enhance asset performance. By combining intelligent software platforms, enterprise technology, and process automation, we help organizations improve productivity, minimize unplanned downtime, and optimize total cost of ownership (TCO).",
  heroImage: "/products/Industrial Solutions - Acceleron Solutions.png",
  icon: Factory,
  gradient: "from-blue-600 via-indigo-600 to-purple-600",
  products: [
    {
      name: "Quality Management System (QMS)",
      badge: "Quality & Compliance",
      desc: "Enterprise-grade quality and compliance framework aligned with ISO 9001:2015 requirements, featuring centralized Standard Operating Procedures (SOPs), automated audit tracking, Corrective and Preventive Actions (CAPA), and supplier quality assurance.",
      href: "/products/qms",
      icon: Layers,
      gradient: "from-fuchsia-600 to-purple-700",
      features: [
        "Digital SOP repository with role-based access control and audit trails",
        "Automated audit scheduling with closed-loop CAPA workflows",
        "Incoming supplier quality scorecards and batch inspection verification",
      ],
    },
    {
      name: "Work Order Management System (WOMS)",
      badge: "Maintenance & Ticketing",
      desc: "End-to-end digital maintenance and service tracking platform that streamlines automated ticketing, technician dispatch, spare parts inventory synchronization, and SLA monitoring to reduce mean time to repair (MTTR).",
      href: "/products/woms",
      icon: Wrench,
      gradient: "from-blue-600 to-indigo-700",
      features: [
        "Automated maintenance ticketing via web, mobile, and IoT triggers",
        "Intelligent technician dispatch based on skill, proximity, and parts availability",
        "Real-time spare parts ERP allocation and MTTR tracking dashboards",
      ],
    },
    {
      name: "Inplant Logistics",
      badge: "Material & Fleet Flow",
      desc: "Intelligent material flow and warehouse optimization solution for manufacturing facilities, featuring Just-in-Time (JIT) line-side replenishment, automated guided vehicle (AGV) routing, and real-time inventory tracking.",
      href: "/products/inplant-logistics",
      icon: Truck,
      gradient: "from-emerald-600 to-teal-700",
      features: [
        "Intelligent route planning and congestion reduction for forklifts and AGVs",
        "Line-side replenishment (JIT / JIS) preventing production line starvation",
        "Direct integration with plant MES and enterprise SAP ERP warehouses",
      ],
    },
    {
      name: "Tyre Health Management",
      badge: "Fleet Telematics",
      desc: "Sensor-based telematics and predictive analytics platform for off-highway machinery and heavy transport fleets, offering real-time Tyre Pressure Monitoring Systems (TPMS), tread wear analytics, and thermal overload alerts to extend tyre life and optimize cost-per-hour.",
      href: "/products/tyre-health",
      icon: Activity,
      gradient: "from-cyan-600 to-blue-700",
      features: [
        "Real-time wireless pressure and temperature sensors for off-highway machinery",
        "Digital tread depth tracking and abnormal alignment wear detection",
        "Cost-Per-Hour (CPH) lifecycle reporting and retreading schedule alerts",
      ],
    },
    {
      name: "Contractor Workforce Management System (CWMS)",
      badge: "Labor Governance",
      desc: "Centralized digital platform for contractor governance, covering workforce onboarding, statutory compliance tracking, biometric access control, safety inductions, and productivity monitoring.",
      href: "/products/cwms",
      icon: Boxes,
      gradient: "from-teal-600 to-cyan-700",
      features: [
        "Digital contractor onboarding with statutory PF, ESIC, and labor checks",
        "Biometric and RFID turnstiles linked to valid safety inductions and permits",
        "Automated muster roll reconciliation against vendor wage billing invoices",
      ],
    },
  ],
  pillars: [
    {
      title: "Enterprise Technology & Digital Solutions",
      desc: "Integrated software platforms, enterprise applications, intelligent analytics, and workflow automation designed to improve operational visibility and control.",
      icon: Cpu,
    },
    {
      title: "Process Integration & Automation",
      desc: "Connected digital workflows that bring together maintenance, quality, inventory, logistics, and workforce management for more coordinated industrial operations.",
      icon: Workflow,
    },
    {
      title: "Operational Excellence & Asset Management",
      desc: "Technology-enabled maintenance planning, resource optimization, performance monitoring, and lifecycle management to improve asset utilization and operational reliability.",
      icon: ShieldCheck,
    },
  ],
  sectors: [
    {
      title: "Manufacturing & Processing Plants",
      desc: "Optimizing factory operations, material movement, quality management, and equipment uptime across high-throughput production lines.",
    },
    {
      title: "Infrastructure & Construction",
      desc: "Supporting complex project operations through integrated equipment management, maintenance tracking, and workforce coordination.",
    },
    {
      title: "Mining & Material Handling",
      desc: "Enabling efficient asset monitoring, tyre health management, maintenance planning, and contractor safety compliance in extreme remote sites.",
    },
    {
      title: "Power & Energy Utilities",
      desc: "Supporting operational reliability through asset monitoring, maintenance management, and intelligent digital systems across distributed generation and distribution grids.",
    },
  ],
  whyPartner: [
    "Deep understanding of complex industrial operations and their evolving technology requirements.",
    "Integrated engineering and digital capabilities that connect business processes, assets, and people.",
    "Customized technology solutions aligned with specific operational challenges and business objectives.",
    "Scalable digital platforms that improve productivity, strengthen operational control, and support long-term business growth.",
  ],
};

function IndustrialSolutionsPage() {
  return <ProductCategoryTemplate data={INDUSTRIAL_SOLUTIONS_DATA} />;
}
