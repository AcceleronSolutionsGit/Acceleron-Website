export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author?: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  category: "SAP & Enterprise" | "AI & Analytics" | "Cyber Security" | "Cloud & Infrastructure" | "Company News";
  tags: string[];
  image: string;
  readTime: string;
  featured?: boolean;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "navigating-the-journey-key-considerations-for-sap-s4hana-migration",
    title: "Navigating the Journey: Key Considerations for SAP S/4HANA Migration",
    excerpt: "Explore strategic approaches for moving from legacy systems to SAP S/4HANA, minimizing downtime, and unlocking real-time operational insights.",
    content: `
      <p class="lead text-lg text-foreground/80 font-medium mb-6">
        As enterprises navigate volatile global supply chains and intensifying market competition, legacy ERP architectures are becoming significant bottlenecks. The journey to SAP S/4HANA represents more than a routine technical upgrade—it is a fundamental reinvention of how an enterprise processes transactions, orchestrates operations, and extracts real-time operational intelligence.
      </p>

      <h2 class="text-2xl font-bold text-foreground mt-8 mb-4">1. Greenfield vs. Brownfield: Selecting the Optimal Migration Trajectory</h2>
      <p class="text-muted-foreground leading-relaxed mb-6">
        One of the most consequential decisions an enterprise leadership team faces is whether to embark on a Greenfield reimplementation or a Brownfield system conversion. A Greenfield approach offers a pristine canvas—allowing organizations to purge decades of obsolete custom ABAP code and align with standard SAP Best Practices. Conversely, Brownfield preserves historical transactional data and customized workflows, significantly reducing change management cycles.
      </p>

      <blockquote class="border-l-4 border-brand pl-4 italic text-muted-foreground my-6">
        "Successful S/4HANA transformations are not measured simply by go-live dates, but by the operational speed and data transparency unlocked on Day 2."
      </blockquote>

      <h2 class="text-2xl font-bold text-foreground mt-8 mb-4">2. Minimizing Operational Downtime Through Zero Downtime Option (ZDO)</h2>
      <p class="text-muted-foreground leading-relaxed mb-6">
        In continuous manufacturing, mining, and heavy capital goods environments, prolonged operational downtime is unacceptable. Leveraging SAP's Zero Downtime Option (ZDO) and Near Zero Downtime (NZDT) methodologies allows cutover windows to shrink from days to hours, ensuring business continuity across critical plant operations.
      </p>

      <h2 class="text-2xl font-bold text-foreground mt-8 mb-4">3. Unlocking Real-Time Analytical Velocity with SAP Fiori & Embedded Analytics</h2>
      <p class="text-muted-foreground leading-relaxed mb-6">
        By transitioning from traditional batch reporting to in-memory computing with embedded SAP Fiori analytics, executives and line managers gain immediate visibility into order-to-cash cycles, supply chain bottlenecks, and equipment maintenance schedules without intermediate data warehouse lag.
      </p>
    `,
    author: {
      name: "Arindam Hari",
      role: "Director & CEO",
      avatar: "/Arindam-Hari_teams.webp"
    },
    date: "Published Q4 2026",
    category: "SAP & Enterprise",
    tags: ["SAP S/4HANA", "ERP Migration", "Enterprise Architecture", "RISE with SAP"],
    image: "/capital_goods.jpg",
    readTime: "5 min read",
    featured: true
  },
  {
    slug: "applied-ai-transforming-shop-floor-and-industrial-workflows",
    title: "Applied AI: Revolutionizing Industrial Telematics & Shop-Floor Decision Engines",
    excerpt: "How cognitive algorithms, computer vision, and edge telemetry are redefining predictive maintenance and quality assurance in discrete manufacturing.",
    content: `
      <p class="lead text-lg text-foreground/80 font-medium mb-6">
        Artificial intelligence in industrial settings has moved rapidly beyond proof-of-concept experiments into mission-critical shop floor operations. By deploying edge computing nodes and intelligent computer vision at critical assembly points, manufacturers can identify defects in microseconds.
      </p>
      <h2 class="text-2xl font-bold text-foreground mt-8 mb-4">Edge Telemetry Meets Predictive Maintenance</h2>
      <p class="text-muted-foreground leading-relaxed mb-6">
        Real-time vibration, thermal, and acoustic sensors continuously stream telemetry data to machine learning models, predicting bearing failures and hydraulic anomalies before catastrophic breakdowns occur.
      </p>
    `,
    author: {
      name: "Rishabh P Nair",
      role: "Director",
      avatar: "/rishabh-p-nair_teamst.webp"
    },
    date: "October 2026",
    category: "AI & Analytics",
    tags: ["Applied AI", "Predictive Maintenance", "Computer Vision", "Industrial IoT"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=75&w=1200&auto=format&fit=crop",
    readTime: "6 min read"
  },
  {
    slug: "zero-trust-cloud-security-for-modern-heavy-enterprises",
    title: "Zero-Trust Architecture: Hardening Industrial Cloud & Hybrid Infrastructure",
    excerpt: "Practical frameworks for implementing micro-segmentation, identity-first governance, and resilient endpoint security across distributed OT/IT networks.",
    content: `
      <p class="lead text-lg text-foreground/80 font-medium mb-6">
        The convergence of Operational Technology (OT) on plant floors with Enterprise IT cloud backbones has expanded the corporate attack surface. Zero-trust architecture ensures that every access request is rigorously verified, regardless of originating network perimeter.
      </p>
      <h2 class="text-2xl font-bold text-foreground mt-8 mb-4">Identity-First Boundary Protection</h2>
      <p class="text-muted-foreground leading-relaxed mb-6">
        Eliminating perimeter-only defenses by adopting continuous authentication, automated threat telemetry, and immutable audit trails protects critical IP and industrial controls.
      </p>
    `,
    author: {
      name: "Infra & Security Practice",
      role: "Enterprise Security Team",
      avatar: "/Acceleron_Short_Logo.png"
    },
    date: "October 2026",
    category: "Cyber Security",
    tags: ["Cyber Security", "Zero Trust", "Cloud Defense", "OT Security"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=75&w=1200&auto=format&fit=crop",
    readTime: "5 min read"
  },
  {
    slug: "cloud-native-scalability-with-multi-cloud-resilience",
    title: "Architecting Multi-Cloud Foundations for High-Throughput Enterprise Workloads",
    excerpt: "Best practices for deploying containerized microservices, Terraform OpenTofu infrastructure-as-code, and disaster-resilient cloud fabrics on AWS and Azure.",
    content: `
      <p class="lead text-lg text-foreground/80 font-medium mb-6">
        Modern enterprise platforms demand 99.99% availability and regional latency optimization. Designing cloud-native foundations with Kubernetes orchestration ensures predictable scale and multi-region failover.
      </p>
    `,
    author: {
      name: "Cloud Practice Leads",
      role: "Enterprise Solutions",
      avatar: "/Acceleron_Short_Logo.png"
    },
    date: "September 2026",
    category: "Cloud & Infrastructure",
    tags: ["Cloud Architecture", "AWS", "Azure", "Kubernetes", "DevOps"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=75&w=1200&auto=format&fit=crop",
    readTime: "4 min read"
  },
  {
    slug: "acceleron-solutions-expands-enterprise-delivery-footprint-delhi-ncr",
    title: "Acceleron Solutions Expands Enterprise Delivery Footprint with New Delhi NCR Office",
    excerpt: "Highlighting our growing presence at KG Marg, Janpath, enhancing direct support and delivery capabilities for enterprise clients across North India.",
    content: `
      <p class="lead text-lg text-foreground/80 font-medium mb-6">
        Acceleron Solutions is proud to announce the strategic expansion of its national delivery footprint with the opening of our new corporate and delivery hub at 801-802 Kailash Building, 26 KG Marg, Janpath, Central Delhi.
      </p>
      <p class="text-muted-foreground leading-relaxed mb-6">
        This expansion directly supports the rising demand for our SAP S/4HANA transformation practices, Zoho implementations, and proprietary industrial software suites across North India's industrial and corporate corridors.
      </p>
    `,
    author: {
      name: "Corporate Communications",
      role: "Acceleron News Desk",
      avatar: "/Acceleron_Short_Logo.png"
    },
    date: "Published Q4 2026",
    category: "Company News",
    tags: ["Corporate Expansion", "Delhi NCR", "Growth", "Enterprise Delivery"],
    image: "/Office Entrace Photo.JPG",
    readTime: "3 min read"
  },
  {
    slug: "urgent-need-for-digitization-in-mining-companies",
    title: "The Urgent Need for Digitization in Mining Companies",
    excerpt: "The current state of the mining industry and why end-to-end pit-to-port ERP and telemetry digitization is no longer optional.",
    content: `
      <p class="lead text-lg text-foreground/80 font-medium mb-6">
        As one of the world's foundational industries, mining is navigating volatile commodity cycles, ore grade shifts, and stricter ESG environmental standards. Embracing digital transformation from fleet telemetry to pit-to-port logistics is essential for sustained profitability.
      </p>
    `,
    author: {
      name: "Mining & Heavy Industry Practice",
      role: "Acceleron Advisory",
      avatar: "/Acceleron_Short_Logo.png"
    },
    date: "September 2026",
    category: "SAP & Enterprise",
    tags: ["Mining", "Industrial Solutions", "Digitization", "Supply Chain"],
    image: "/mining.jpg",
    readTime: "7 min read"
  }
];
