export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  date: string;
  category: "SAP" | "AI & Analytics" | "Cloud & Security" | "Digital Transformation";
  tags: string[];
  image: string;
  readTime: string;
  featured?: boolean;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "navigating-sap-s4hana-migration-for-heavy-industry",
    title: "Navigating SAP S/4HANA Migration for Heavy Industry & Mining",
    excerpt: "Discover how industrial enterprises can transition from SAP ECC to S/4HANA with zero downtime, preserving core customizations while unlocking real-time operational analytics.",
    content: `
      <p class="lead text-lg text-foreground/80 font-medium mb-6">
        Transitioning to SAP S/4HANA is no longer just an IT upgrade—it is a foundational business modernization. For heavy industrial, mining, and manufacturing enterprises, the stakes are exceptionally high: operational downtime can cost millions per hour.
      </p>

      <h2 class="text-2xl font-bold text-foreground mt-8 mb-4">Why Brownfield & Greenfield Approaches Need a Hybrid Lens</h2>
      <p class="text-muted-foreground leading-relaxed mb-6">
        Traditional migration methodologies force companies to choose between starting fresh (Greenfield) or carrying over decades of legacy custom code (Brownfield). Acceleron's Selective Data Transition (SDT) approach bridges this gap by enabling organizations to clean historical data while retaining critical business logic.
      </p>

      <div class="my-8 p-6 rounded-2xl bg-muted/40 border border-border">
        <h3 class="text-lg font-bold text-foreground mb-2">Key Takeaways for C-Suite Leaders:</h3>
        <ul class="list-disc list-inside space-y-2 text-muted-foreground">
          <li>Eliminate up to 60% of legacy Z-code bloat before migration.</li>
          <li>Integrate SAP Business Technology Platform (BTP) for clean-core extensions.</li>
          <li>Achieve near-zero downtime deployment windows during weekend cutovers.</li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold text-foreground mt-8 mb-4">Unlocking Real-Time Asset Tracking & Fleet Intelligence</h2>
      <p class="text-muted-foreground leading-relaxed mb-6">
        With S/4HANA's in-memory computing power, maintenance teams can shift from reactive repairs to predictive maintenance schedules powered by live telemetry signals from heavy machinery and fleets.
      </p>
    `,
    author: {
      name: "Arindam Hari",
      role: "Head of Enterprise Solutions",
      avatar: "/Arindam Hari Speaking.JPG"
    },
    date: "July 12, 2026",
    category: "SAP",
    tags: ["SAP S/4HANA", "ERP", "Mining", "Asset Management"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=75",
    readTime: "6 min read",
    featured: true
  },
  {
    slug: "building-production-grade-rag-pipelines-for-enterprise",
    title: "Building Production-Grade RAG & AI Agent Pipelines",
    excerpt: "How enterprise data teams can deploy Retrieval-Augmented Generation architectures that enforce strict data governance, zero hallucinations, and low latency.",
    content: `
      <p class="lead text-lg text-foreground/80 font-medium mb-6">
        Generative AI has evolved past raw LLM prompts into orchestrating multi-agent systems connected to private enterprise data lakes.
      </p>
      <h2 class="text-2xl font-bold text-foreground mt-8 mb-4">Security First: Enterprise Vector Databases</h2>
      <p class="text-muted-foreground leading-relaxed mb-6">
        When connecting AI models to internal ERP records, ISO 27001 compliance and role-based access control (RBAC) must be enforced at the chunk embedding level.
      </p>
    `,
    author: {
      name: "Rishabh Nair",
      role: "Lead AI & Analytics Architect",
      avatar: "/Rishabh Nair Speaking.JPG"
    },
    date: "June 28, 2026",
    category: "AI & Analytics",
    tags: ["GenAI", "RAG", "Python", "Vector DB"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=75",
    readTime: "8 min read",
    featured: true
  },
  {
    slug: "enterprise-crm-and-customer-data-unification",
    title: "Enterprise CRM & Customer Data Unification Strategies",
    excerpt: "Unifying fragmented customer data streams across sales, field service, and ERP into a single customer 360 view.",
    content: `
      <p class="lead text-lg text-foreground/80 font-medium mb-6">
        Modern enterprise CRM platforms allow companies to ingest real-time data streams from SAP, web portals, and IoT sensors into unified customer profiles.
      </p>
    `,
    author: {
      name: "Meena Chaturvedi",
      role: "VP of Enterprise Services",
      avatar: "/Meena Chaturvedi Speaking.JPG"
    },
    date: "June 15, 2026",
    category: "Digital Transformation",
    tags: ["CRM", "Data Unification", "Customer 360", "Integration"],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=75",
    readTime: "5 min read"
  },
  {
    slug: "field-safety-digitization-suraksha-platform",
    title: "Digitizing Field Safety: Reducing Incidents in High-Hazard Workplaces",
    excerpt: "How real-time incident reporting, contractor workforce monitoring, and automated compliance checklists save lives on industrial shop floors.",
    content: `
      <p class="lead text-lg text-foreground/80 font-medium mb-6">
        Industrial safety shouldn't depend on paper forms and delayed shift reports. Our Suraksha platform brings mobile-first hazard reporting directly to site personnel.
      </p>
    `,
    author: {
      name: "Sunil Kumar Chaturvedi",
      role: "Director of Industry Practices",
      avatar: "/Sunik Kumar Chaturvedi Speaking.JPG"
    },
    date: "May 30, 2026",
    category: "Digital Transformation",
    tags: ["EHS", "Field Safety", "Suraksha", "Contractor Management"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=75",
    readTime: "7 min read"
  },
  {
    slug: "zero-trust-cybersecurity-for-critical-infrastructure",
    title: "Implementing Zero Trust Security Across Hybrid IT & OT Networks",
    excerpt: "Protecting operational technology (OT) networks and cloud ERP environments against targeted ransomware and industrial cyber threats.",
    content: `
      <p class="lead text-lg text-foreground/80 font-medium mb-6">
        As OT networks converge with cloud enterprise systems, traditional perimeter security becomes obsolete. Zero Trust architecture mandates continuous identity verification.
      </p>
    `,
    author: {
      name: "Arindam Hari",
      role: "Head of Enterprise Solutions",
      avatar: "/Arindam Hari Speaking.JPG"
    },
    date: "May 10, 2026",
    category: "Cloud & Security",
    tags: ["Cybersecurity", "Zero Trust", "VAPT", "ISO 27001"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=75",
    readTime: "9 min read"
  },
  {
    slug: "zoho-creator-and-analytics-for-agile-operations",
    title: "Custom Business Applications in Weeks with Zoho Creator & One Suite",
    excerpt: "Accelerating internal tool development and management dashboards without compromising security or scalability.",
    content: `
      <p class="lead text-lg text-foreground/80 font-medium mb-6">
        With Zoho Creator and Analytics, enterprise teams can rapidly deploy custom workflows, audit trackers, and executive dashboards.
      </p>
    `,
    author: {
      name: "Meena Chaturvedi",
      role: "VP of Enterprise Services",
      avatar: "/Meena Chaturvedi Speaking.JPG"
    },
    date: "April 22, 2026",
    category: "Digital Transformation",
    tags: ["Zoho", "Low-Code", "Analytics", "Workflow Automation"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=75",
    readTime: "4 min read"
  }
];
