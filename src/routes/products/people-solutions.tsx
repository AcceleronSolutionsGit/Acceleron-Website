import { createFileRoute } from "@tanstack/react-router";
import {
  Users,
  ShieldCheck,
  Clock,
  HeartHandshake,
  Target,
  Briefcase,
  UserCheck,
  Smile,
} from "lucide-react";
import {
  ProductCategoryTemplate,
  ProductCategoryData,
} from "../../components/products/ProductCategoryTemplate";

export const Route = createFileRoute("/products/people-solutions")({
  head: () => ({
    meta: [
      {
        title:
          "People Solutions – Empowering Workforce Excellence & Human Capital | Acceleron Solutions",
      },
      {
        name: "description",
        content:
          "We develop and deliver integrated digital People Solutions designed to streamline human capital management, strengthen workforce governance, and improve organizational productivity.",
      },
    ],
  }),
  component: PeopleSolutionsPage,
});

const PEOPLE_SOLUTIONS_DATA: ProductCategoryData = {
  slug: "people-solutions",
  categoryTitle: "People Solutions",
  pageTitle: "People Solutions – Empowering Workforce Excellence & Human Capital",
  subtitle:
    "Intelligent digital workflows, statutory compliance tracking, workplace safety management, and employee engagement platforms to build a secure, connected, and high-performing workforce.",
  badge: "WORKFORCE EXCELLENCE & HUMAN CAPITAL",
  overview:
    "We develop and deliver integrated digital People Solutions designed to streamline human capital management, strengthen workforce governance, and improve organizational productivity. By bringing together intelligent digital workflows, statutory compliance tracking, workplace safety management, and employee engagement platforms, our solutions help enterprises build a secure, connected, and high-performing workforce.",
  heroImage: "/construction-img.jpg",
  icon: Users,
  gradient: "from-teal-600 via-emerald-600 to-cyan-600",
  products: [
    {
      name: "Workforce Management",
      badge: "Deployment & Rostering",
      desc: "Comprehensive workforce deployment, shift scheduling, and productivity tracking platform designed to optimize labour allocation across complex manufacturing and service environments.",
      href: "/products/workforce-management",
      icon: Users,
      gradient: "from-blue-600 to-indigo-700",
      features: [
        "Smart rotational shift scheduling factoring in statutory rest intervals",
        "Dynamic task assignment linked to active maintenance work orders",
        "Frontline mobile access for schedule visibility and shift swapping",
      ],
    },
    {
      name: "Suraksha (Safety Management)",
      badge: "Industrial HSE & Safety",
      desc: "Digital industrial safety management platform supporting incident reporting, safety audits, hazard identification, and compliance tracking to protect personnel and assets.",
      href: "/products/suraksha",
      icon: ShieldCheck,
      gradient: "from-teal-500 to-emerald-600",
      features: [
        "Rapid digital logging of near-misses and safety incidents with photo proof",
        "Digital Permit-to-Work (PTW) for hot work, height, and confined spaces",
        "Toolbox meeting logs and closed-loop CAPA action tracking",
      ],
    },
    {
      name: "Attendance Management System",
      badge: "Time & Presence",
      desc: "Automated biometric and mobile-based attendance tracking integrated with shift rosters, leave management, and payroll synchronization.",
      href: "/products/attendance-management",
      icon: Clock,
      gradient: "from-cyan-600 to-teal-700",
      features: [
        "Multi-modal biometric, facial recognition, and geofenced mobile clock-in",
        "Shift rotation engine with automated overtime and late-coming calculations",
        "Zero proxy attendance with real-time supervisor exception alerts",
      ],
    },
    {
      name: "Yogdaan – Employee Engagement & Feedback",
      badge: "Kaizen & Dialogue",
      desc: "Interactive employee feedback, sentiment tracking, and engagement platform designed to encourage transparent communication and continuous workplace improvement.",
      href: "/products/yogdaan",
      icon: HeartHandshake,
      gradient: "from-pink-600 to-rose-700",
      features: [
        "Continuous anonymous pulse surveys and workplace sentiment tracking",
        "Shop-floor Kaizen suggestion box with automated SLA review pipelines",
        "Peer-to-peer digital recognition and milestone celebration awards",
      ],
    },
    {
      name: "Employee Appraisal Management System",
      badge: "Performance & OKRs",
      desc: "Structured performance evaluation platform supporting goal setting (KPIs/OKRs), continuous feedback, periodic reviews, and merit-based career progression tracking.",
      href: "/products/appraisal-management",
      icon: Target,
      gradient: "from-purple-600 to-violet-800",
      features: [
        "Cascading corporate OKRs down to departmental and individual KPIs",
        "Continuous performance check-ins and coaching notes throughout the year",
        "360-degree multi-rater reviews with fair rating calibration curves",
      ],
    },
  ],
  pillars: [
    {
      title: "Talent Lifecycle & Operations",
      desc: "Digital management of the employee lifecycle, covering onboarding, attendance, performance appraisals, and exit workflows.",
      icon: UserCheck,
    },
    {
      title: "Workplace Health & Safety (HSE)",
      desc: "Integrated risk monitoring, safety inductions, incident management, and compliance frameworks to strengthen workplace safety across industrial operations.",
      icon: ShieldCheck,
    },
    {
      title: "Employee Experience & Engagement",
      desc: "Digital platforms that facilitate two-way communication, employee recognition, feedback, and engagement initiatives to support workforce satisfaction and retention.",
      icon: Smile,
    },
  ],
  sectors: [
    {
      title: "Heavy Manufacturing & Engineering",
      desc: "Streamlining complex shift schedules, factory floor safety enforcement, and large-scale workforce deployment across multi-plant facilities.",
    },
    {
      title: "Mining & Construction",
      desc: "Supporting stringent safety protocols, contractor compliance, and attendance tracking across remote and hazardous project locations.",
    },
    {
      title: "Corporate & Enterprise Services",
      desc: "Simplifying performance appraisals, continuous employee engagement, and centralized human resource operations.",
    },
  ],
  whyPartner: [
    "Strong understanding of industrial workforce dynamics and enterprise human capital requirements.",
    "Integrated digital solutions combining workforce management, statutory compliance, safety, and employee engagement.",
    "Scalable technology architecture designed to support organizations of varying sizes, from growing enterprises to large industrial conglomerates.",
    "Customized platforms that align workforce processes with organizational goals and operational requirements.",
  ],
};

function PeopleSolutionsPage() {
  return <ProductCategoryTemplate data={PEOPLE_SOLUTIONS_DATA} />;
}
