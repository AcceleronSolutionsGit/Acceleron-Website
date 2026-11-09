import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUpRight,
  Briefcase,
  Users,
  Upload,
  Send,
  MapPin,
  Sparkles,
  Clock,
  FileText,
  Check,
  Lightbulb,
  GraduationCap,
  HeartHandshake,
  Mail,
  ArrowRight,
  ShieldCheck,
  Building2,
  ChevronRight,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import { Reveal, WaveDivider } from "../components/ui/Animations";
import { PageHero } from "../components/ui/PageHero";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers at Acceleron — Culture, Growth & Open Positions" },
      {
        name: "description",
        content:
          "The best technology is built by people who care deeply about the problems they solve. Explore career opportunities, culture, and life at Acceleron Solutions.",
      },
    ],
  }),
  component: CareersPage,
});

interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

const WHY_WORK_WITH_US = [
  {
    title: "Innovation-Driven Culture",
    desc: "We encourage bold ideas, creative problem-solving, and hands-on experimentation with emerging technologies.",
    icon: Lightbulb,
    gradient: "from-amber-500 to-orange-600",
  },
  {
    title: "Continuous Growth",
    desc: "We invest heavily in your professional development through structured learning opportunities, mentorship, and certifications.",
    icon: GraduationCap,
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    title: "Collaborative Environment",
    desc: "Work alongside a diverse group of industry experts, enterprise architects, and engineers dedicated to making a tangible impact.",
    icon: Users,
    gradient: "from-teal-500 to-emerald-600",
  },
  {
    title: "Work-Life Balance",
    desc: "We believe in flexible, sustainable work arrangements and supportive environments to nurture your overall well-being.",
    icon: HeartHandshake,
    gradient: "from-purple-500 to-pink-600",
  },
];

const CURRENT_OPENINGS: JobOpening[] = [
  {
    id: "sap-consultant",
    title: "Senior SAP S/4HANA Functional Consultant",
    department: "Enterprise ERP Practice",
    location: "Kolkata, India / Hybrid",
    type: "Full-Time",
    experience: "5+ Years",
    description:
      "Drive large-scale SAP S/4HANA migrations, Greenfield implementations, and business process re-engineering for heavy engineering, capital goods, and discrete manufacturing clients.",
    responsibilities: [
      "Lead blueprinting workshops, functional specification design, and SAP module configuration (FICO / MM / SD / PP).",
      "Collaborate with ABAP developers and technical architects for custom WRICEF objects.",
      "Conduct user acceptance testing (UAT) and cutover go-live management.",
    ],
    requirements: [
      "5+ years of hands-on SAP ECC or S/4HANA implementation experience.",
      "Relevant SAP certifications and strong client-facing stakeholder management skills.",
      "Bachelor's degree in Computer Science, Engineering, or relevant business field.",
    ],
  },
  {
    id: "cloud-architect",
    title: "Enterprise Cloud & Solutions Architect",
    department: "Cloud & Infrastructure Practice",
    location: "Kolkata, India / Remote",
    type: "Full-Time",
    experience: "6+ Years",
    description:
      "Architect and deploy secure, resilient multi-cloud foundations on AWS/Azure, zero-trust infrastructure, and hybrid cloud connectivity for enterprise workloads.",
    responsibilities: [
      "Design containerized microservice architectures using Kubernetes, Terraform, and CI/CD pipelines.",
      "Ensure ISO 27001, SOC 2, and enterprise data residency compliance.",
      "Evaluate emerging cloud-native and serverless paradigms to optimize system performance.",
    ],
    requirements: [
      "AWS Certified Solutions Architect (Professional) or Microsoft Azure Solutions Architect Expert.",
      "Deep expertise in Terraform / OpenTofu, Kubernetes orchestration, and cloud networking.",
      "Experience with enterprise observability tools (Datadog, Prometheus, Grafana).",
    ],
  },
  {
    id: "full-stack-engineer",
    title: "Full Stack Product Engineer",
    department: "Proprietary IP & Products",
    location: "Kolkata / Delhi NCR / Remote",
    type: "Full-Time",
    experience: "3+ Years",
    description:
      "Build high-throughput web and mobile applications powering Acceleron's proprietary IP suites (QMS, WOMS, Inplant Logistics, and Suraksha).",
    responsibilities: [
      "Develop responsive, accessible interfaces with React, TanStack, and Tailwind CSS.",
      "Build robust Node.js / Go backend microservices, REST / GraphQL APIs, and message queues.",
      "Work closely with UI/UX designers and product managers to deliver intuitive user workflows.",
    ],
    requirements: [
      "Proficiency in modern TypeScript, React, Node.js, and relational databases (PostgreSQL, MySQL).",
      "Experience with state management, caching (Redis), and asynchronous event streaming.",
      "Track record of shipping clean, testable, and maintainable software.",
    ],
  },
  {
    id: "ai-data-engineer",
    title: "Applied AI & Data Engineer",
    department: "Applied AI & AccelEdge Labs",
    location: "Kolkata, India",
    type: "Full-Time",
    experience: "3+ Years",
    description:
      "Develop generative AI agents, retrieval-augmented generation (RAG) pipelines, and intelligent document processing systems for enterprise digitization.",
    responsibilities: [
      "Implement cognitive IDP pipelines combining OCR with Large Language Models for automated document understanding.",
      "Build vector databases, embedding workflows, and semantic search indexes.",
      "Fine-tune and evaluate LLM safety, latency, and hallucination guardrails.",
    ],
    requirements: [
      "Strong Python programming skills and familiarity with LangChain, LlamaIndex, or native LLM APIs.",
      "Hands-on experience with vector stores (Milvus, Pinecone, pgvector, Chroma).",
      "Background in machine learning, statistics, or data engineering.",
    ],
  },
  {
    id: "zoho-consultant",
    title: "Zoho Enterprise Technical Consultant",
    department: "Zoho Cloud Practice",
    location: "Kolkata, India",
    type: "Full-Time",
    experience: "3+ Years",
    description:
      "Implement and customize Zoho One, Zoho CRM, Zoho Creator, and Zoho Books integrations for enterprise clients seeking end-to-end operational automation.",
    responsibilities: [
      "Develop custom Deluge scripts, workflow automation rules, and webhooks.",
      "Integrate Zoho ecosystem with external ERPs (SAP, Oracle) and communication gateways.",
      "Configure role-based access control, custom dashboards, and executive KPI reporting.",
    ],
    requirements: [
      "Zoho Certified Consultant or demonstrable track record with Zoho One implementations.",
      "Proficient in Deluge, JavaScript, REST APIs, and relational data modeling.",
      "Excellent business process mapping and customer advisory capabilities.",
    ],
  },
];

function CareersPage() {
  const [showAllJobs, setShowAllJobs] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string>(
    "Senior SAP S/4HANA Functional Consultant"
  );
  const [expandedJobId, setExpandedJobId] = useState<string | null>(
    "sap-consultant"
  );
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    linkedin: "",
    coverNote: "",
  });

  const handleApplyClick = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setIsSubmitted(false);
    const element = document.getElementById("apply-form");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* SECTION 1: HERO */}
      <PageHero
        badge="JOIN OUR TEAM"
        title="Careers at Acceleron"
        subtitle="Driven by people who care deeply about solving problems, our culture thrives on curiosity and collaboration. Fostering shared ambition, we bring people together to create meaningful solutions that make a difference."
        breadcrumbs={[{ label: "Careers" }]}
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=75&w=1200&auto=format&fit=crop"
        ctaText="View Current Openings"
        ctaHref="#openings"
        secondaryCtaText="How to Apply"
        secondaryCtaHref="#how-to-apply"
        icon={
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/20 shadow-xl">
            <Users className="h-8 w-8 text-brand drop-shadow-lg" />
            <div className="border-l border-white/30 pl-3">
              <div className="text-[10px] font-bold uppercase tracking-wider text-brand-red">
                Life at Acceleron
              </div>
              <div className="text-xs font-bold text-white tracking-wide">
                Build What's Next
              </div>
            </div>
          </div>
        }
      />

      {/* SECTION 2: CULTURE & AMBITION NARRATIVE */}
      <section className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 sm:py-24 border-b border-border/60">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand">
                Our Shared Ambition
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mt-3">
                Shape Enterprise Transformation{" "}
                <span className="text-gradient">With A Close-Knit Team</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Here, you’ll work alongside a close-knit team of innovators, thinkers and builders, developing solutions that shape enterprise transformation. Whether it’s AI-powered systems, smarter operations or scalable digital platforms, you’ll have the opportunity to learn, experiment, contribute ideas and make a meaningful impact.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-2xl border border-brand/30 bg-gradient-to-br from-brand/5 via-card to-card p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-foreground mb-1">
                      A Workplace Where Your Voice Is Valued
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      If you’re looking for a workplace where your voice is valued, your growth is encouraged and your work makes a difference, we’d love to have you on board. Let’s build what’s next, together.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#openings"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-6 py-3 text-xs font-bold text-white shadow-glow hover:scale-105 transition-all"
                >
                  <span>Explore Open Positions</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#how-to-apply"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-xs font-bold text-foreground hover:bg-muted/40 transition-colors"
                >
                  <span>Spontaneous Application</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.15}>
              <div className="relative rounded-3xl overflow-hidden border border-border/80 shadow-2xl bg-card">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop"
                  alt="Team collaboration at Acceleron"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-red/90 text-white px-3 py-1 rounded-full">
                    Gainwell Group Heritage
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    Innovators, Thinkers &amp; Builders
                  </h3>
                  <p className="text-xs text-white/80 line-clamp-2">
                    Operating at the intersection of heavy industrial legacy and next-generation cloud architectures.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY WORK WITH US? */}
      <section className="section-dark container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 sm:py-24 border-b border-border/60">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand mb-3">
              Core Employee Value Proposition
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Work <span className="text-gradient">with Us?</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
              We provide an environment where ambitious talent can solve meaningful challenges, expand their expertise, and thrive sustainably.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_WORK_WITH_US.map((pillar, idx) => (
            <Reveal key={pillar.title} delay={idx * 0.08} className="h-full">
              <div className="rounded-3xl border border-border/70 bg-card/60 backdrop-blur-xl p-7 h-full flex flex-col justify-between shadow-card hover:border-brand/40 hover:-translate-y-1 transition-all duration-300">
                <div>
                  <div
                    className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${pillar.gradient} text-white flex items-center justify-center mb-6 shadow-glow`}
                  >
                    <pillar.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-border/40 flex items-center gap-1.5 text-[11px] font-bold text-brand uppercase tracking-wider">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Acceleron Commitment</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION 4: CURRENT OPENINGS */}
      <section
        id="openings"
        className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 sm:py-24 border-b border-border/60"
      >
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/20 bg-brand-red/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red mb-3">
                Career Opportunities
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Current <span className="text-gradient">Openings</span>
              </h2>
              <p className="text-muted-foreground text-base sm:text-lg mt-3">
                Discover active positions across our enterprise consulting, proprietary product development, and applied AI practices.
              </p>
            </div>
            <a
              href="#how-to-apply"
              className="inline-flex items-center gap-2 text-xs font-bold text-brand hover:text-brand-red transition-colors shrink-0"
            >
              <span>Can't find your role? Drop your resume</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        <div className="space-y-5">
          {CURRENT_OPENINGS.map((job, idx) => {
            const isExpanded = expandedJobId === job.id;
            return (
              <div key={job.id} className={idx >= 3 && !showAllJobs ? "hidden sm:block" : "block"}>
                <Reveal delay={idx * 0.06}>
                <div className="rounded-3xl border border-border/80 bg-card p-6 sm:p-8 backdrop-blur-xl hover:border-brand/40 transition-all shadow-card">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="space-y-2 max-w-3xl">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand/10 text-brand border border-brand/20">
                          {job.department}
                        </span>
                        <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-muted/60 text-muted-foreground">
                          {job.type}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                        {job.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                        {job.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-5 text-xs text-muted-foreground font-semibold pt-1">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-3.5 w-3.5 text-brand" /> {job.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5 text-brand" /> {job.experience}
                        </span>
                      </div>
                    </div>

                    <div className="flex sm:flex-col lg:flex-row items-center gap-3 shrink-0">
                      <button
                        onClick={() =>
                          setExpandedJobId(isExpanded ? null : job.id)
                        }
                        className="rounded-full border border-border bg-muted/30 px-5 py-2.5 text-xs font-bold text-foreground hover:bg-muted/60 transition-colors w-full sm:w-auto"
                      >
                        {isExpanded ? "Hide Details" : "View Responsibilities"}
                      </button>
                      <button
                        onClick={() => handleApplyClick(job.title)}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-6 py-2.5 text-xs font-bold text-white shadow-glow hover:scale-105 transition-all w-full sm:w-auto"
                      >
                        <span>Apply Now</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* EXPANDABLE RESPONSIBILITIES & REQUIREMENTS */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden pt-6 mt-6 border-t border-border/60"
                      >
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider text-brand mb-3 flex items-center gap-2">
                              <Briefcase className="h-3.5 w-3.5" /> Key Responsibilities
                            </h4>
                            <ul className="space-y-2">
                              {job.responsibilities.map((resp, rIdx) => (
                                <li
                                  key={rIdx}
                                  className="text-xs text-muted-foreground flex items-start gap-2"
                                >
                                  <span className="h-1.5 w-1.5 rounded-full bg-brand shrink-0 mt-1.5" />
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-red mb-3 flex items-center gap-2">
                              <ShieldCheck className="h-3.5 w-3.5" /> Qualifications &amp; Skills
                            </h4>
                            <ul className="space-y-2">
                              {job.requirements.map((req, reqIdx) => (
                                <li
                                  key={reqIdx}
                                  className="text-xs text-muted-foreground flex items-start gap-2"
                                >
                                  <span className="h-1.5 w-1.5 rounded-full bg-brand-red shrink-0 mt-1.5" />
                                  <span>{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            </div>
          );
        })}
      </div>

      {CURRENT_OPENINGS.length > 3 && (
        <div className="sm:hidden pt-6 text-center">
          <button
            type="button"
            onClick={() => setShowAllJobs(!showAllJobs)}
            className="inline-flex items-center gap-2 text-xs font-bold text-brand-red hover:text-red-700 py-2.5 px-6 rounded-full border border-brand-red/30 bg-brand-red/5 hover:bg-brand-red/10 shadow-sm transition-all cursor-pointer"
            aria-expanded={showAllJobs}
          >
            <span>{showAllJobs ? "Show fewer positions" : `+ View all ${CURRENT_OPENINGS.length} positions`}</span>
            <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${showAllJobs ? "rotate-180" : ""}`} />
          </button>
        </div>
      )}
      </section>

      {/* SECTION 5: HOW TO APPLY & GENERAL TALENT POOL */}
      <section
        id="how-to-apply"
        className="section-dark container mx-auto px-4 sm:px-6 max-w-5xl relative z-10 py-16 sm:py-24 border-b border-border/60"
      >
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand mb-3">
              Application Pathways
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              How to <span className="text-gradient">Apply</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Don't see a role that fits your exact background, but still want to be part of what we're building? Send your resume and a brief introduction to our talent team at{" "}
              <a
                href="mailto:careers@acceleronsolutions.io"
                className="font-bold text-brand hover:underline"
              >
                careers@acceleronsolutions.io
              </a>
              , and we will reach out if a matching opportunity opens up.
            </p>
          </div>
        </Reveal>

        {/* DIRECT TALENT EMAIL CARD */}
        <Reveal delay={0.08}>
          <div className="rounded-3xl border border-brand/30 bg-gradient-to-br from-card via-card to-brand/5 p-6 sm:p-8 mb-12 shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="h-14 w-14 rounded-2xl bg-brand-gradient text-white flex items-center justify-center shrink-0 shadow-glow">
                <Mail className="h-7 w-7" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-brand-red">
                  Direct Talent Acquisition Inbox
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  careers@acceleronsolutions.io
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  General spontaneous applications, executive CVs &amp; internship inquiries.
                </p>
              </div>
            </div>

            <a
              href="mailto:careers@acceleronsolutions.io?subject=Career%20Inquiry%20-%20Acceleron%20Solutions"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-7 py-3 text-xs font-bold text-white shadow-glow hover:scale-105 transition-all shrink-0 w-full md:w-auto"
            >
              <Send className="h-3.5 w-3.5" />
              <span>Email Your Resume Directly</span>
            </a>
          </div>
        </Reveal>

        {/* APPLICATION FORM */}
        <div id="apply-form">
          <Reveal delay={0.12}>
            <div className="rounded-3xl border border-border/80 bg-card p-6 sm:p-10 backdrop-blur-xl shadow-glow">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-foreground">
                  Online Candidate Application
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  Complete the form below to submit your profile directly to our recruitment team.
                </p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-6"
                >
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-gradient text-white shadow-glow">
                    <Check className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Application Received Successfully!
                  </h3>
                  <p className="text-muted-foreground text-sm max-w-md mx-auto leading-relaxed">
                    Thank you for applying for{" "}
                    <span className="text-brand font-bold">{selectedJob}</span>. We
                    have logged your submission and resume attachment. Our talent team will review your profile and reach out within 48 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 rounded-full bg-muted/60 px-8 py-3 text-xs font-bold text-foreground hover:bg-brand hover:text-white transition-colors"
                  >
                    Submit Another Application
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Jane Doe"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className="w-full rounded-xl border border-border bg-background p-3.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jane.doe@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full rounded-xl border border-border bg-background p-3.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full rounded-xl border border-border bg-background p-3.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                        Total Experience (Years)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 5 Years"
                        value={formData.experience}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            experience: e.target.value,
                          })
                        }
                        className="w-full rounded-xl border border-border bg-background p-3.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                        Applying For Position *
                      </label>
                      <select
                        value={selectedJob}
                        onChange={(e) => setSelectedJob(e.target.value)}
                        className="w-full rounded-xl border border-border bg-background p-3.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand"
                      >
                        {CURRENT_OPENINGS.map((pos) => (
                          <option key={pos.id} value={pos.title}>
                            {pos.title} ({pos.department})
                          </option>
                        ))}
                        <option value="General Spontaneous Application">
                          General Spontaneous Application / Future Openings
                        </option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                        LinkedIn / Portfolio URL
                      </label>
                      <input
                        type="url"
                        placeholder="https://linkedin.com/in/username"
                        value={formData.linkedin}
                        onChange={(e) =>
                          setFormData({ ...formData, linkedin: e.target.value })
                        }
                        className="w-full rounded-xl border border-border bg-background p-3.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand"
                      />
                    </div>
                  </div>

                  {/* FILE UPLOAD BOX */}
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      Upload Resume / CV (.pdf, .doc, .docx) *
                    </label>
                    <div className="relative rounded-2xl border-2 border-dashed border-border bg-muted/20 p-6 text-center hover:border-brand/50 transition-colors">
                      <input
                        type="file"
                        required
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => {
                          if (e.target.files && e.target.files[0]) {
                            setResumeFile(e.target.files[0]);
                          }
                        }}
                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                      />
                      <div className="flex flex-col items-center justify-center space-y-2">
                        <div className="h-10 w-10 rounded-full bg-brand/10 text-brand flex items-center justify-center">
                          <Upload className="h-5 w-5" />
                        </div>
                        <div className="text-sm font-semibold text-foreground">
                          {resumeFile ? (
                            <span className="text-brand font-bold flex items-center gap-1">
                              <FileText className="h-4 w-4" /> {resumeFile.name}
                            </span>
                          ) : (
                            "Click to browse or drop your resume file here"
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          PDF, DOC, DOCX up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      Brief Introduction / Cover Note
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Briefly tell us about your expertise and what excites you about building the next chapter of enterprise technology with Acceleron..."
                      value={formData.coverNote}
                      onChange={(e) =>
                        setFormData({ ...formData, coverNote: e.target.value })
                      }
                      className="w-full rounded-xl border border-border bg-background p-3.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-brand"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-xl bg-brand-gradient py-4 text-white font-bold text-sm shadow-glow hover:scale-[1.01] transition-transform flex items-center justify-center gap-2"
                  >
                    <Send className="h-4 w-4" />
                    <span>Submit Application</span>
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <WaveDivider from="dark" to="white" />
    </main>
  );
}
