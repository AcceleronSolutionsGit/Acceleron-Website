import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Briefcase, Users, Upload, CheckCircle2, Send, MapPin, Sparkles, Clock, FileText, Check } from "lucide-react";
import { Reveal, WaveDivider } from "../components/ui/Animations";
import { PageHero } from "../components/ui/PageHero";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers & Open Positions — Acceleron Solutions" },
      { name: "description", content: "Build your career at Acceleron Solutions. Explore open positions in SAP consulting, cloud engineering, Full Stack development, and submit your resume." },
    ],
  }),
  component: CareersPage,
});

const OPEN_POSITIONS = [
  { id: 1, title: "Senior SAP S/4HANA Functional Consultant", department: "SAP Practice", loc: "Kolkata, India (HQ)", type: "Full-Time", exp: "5+ Years" },
  { id: 2, title: "Cloud & CRM Solutions Architect", department: "Enterprise Cloud Practice", loc: "Kolkata / Remote", type: "Full-Time", exp: "6+ Years" },
  { id: 3, title: "Full Stack Engineer (React, Node & TypeScript)", department: "Product Engineering", loc: "Kolkata / Delhi NCR", type: "Full-Time", exp: "3+ Years" },
  { id: 4, title: "AI & Data Engineer (Python, RAG & Vector DB)", department: "Applied AI", loc: "Kolkata, India", type: "Full-Time", exp: "3+ Years" },
  { id: 5, title: "Cybersecurity & IT Infrastructure Specialist", department: "Infra & Security", loc: "Kolkata, India", type: "Full-Time", exp: "4+ Years" },
];

function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<string>("Senior SAP S/4HANA Functional Consultant");
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
      <PageHero
        title="Build Your Career at Acceleron Solutions"
        subtitle="Acceleron Solutions offers a culture of growth, innovation, and collaboration. We empower our team members with opportunities for career development, exposure to cutting-edge technologies, and a dynamic work environment."
        breadcrumbs={[{ label: "Careers" }]}
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=75&w=1200&auto=format&fit=crop"
        ctaText="Explore Open Roles"
        ctaHref="#roles"
      />

      {/* Why Join Us & Culture Section */}
      <section className="section-dark container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold mb-3">Life at Acceleron</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Why Join <span className="text-gradient">Acceleron?</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Growth & Development",
              desc: "We empower our team members with structured opportunities for career development, continuous learning, and mentorship.",
              icon: Sparkles
            },
            {
              title: "Cutting-Edge Technologies",
              desc: "Work with enterprise SAP RISE, Zoho, GenAI agents, IoT telemetry, and modern cloud architectures.",
              icon: Briefcase
            },
            {
              title: "Inclusive & Balanced Workplace",
              desc: "Enjoy a forward-thinking culture that values creativity, respects individuality, and promotes a healthy work-life balance.",
              icon: Users
            }
          ].map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.1}>
              <div className="rounded-3xl border border-border/60 bg-muted/20 p-8 backdrop-blur-xl hover:border-brand/40 transition-all h-full flex flex-col justify-between">
                <div>
                  <div className="h-12 w-12 rounded-2xl bg-brand-gradient text-white flex items-center justify-center mb-6 shadow-glow">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <WaveDivider from="dark" to="white" />

      {/* Open Positions List */}
      <section id="roles" className="container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold mb-2">Current Opportunities</div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                Open <span className="text-gradient">Positions</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-sm max-w-md">
              Select a position below to automatically pre-fill your application details.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6">
          {OPEN_POSITIONS.map((job, idx) => (
            <Reveal key={job.id} delay={0.08 * idx}>
              <motion.div
                whileHover={{ y: -2 }}
                className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 rounded-3xl border border-border/60 bg-muted/20 p-8 backdrop-blur-xl hover:border-brand/40 hover:bg-muted/40 transition-all shadow-soft"
              >
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-red/10 text-brand-red mb-3">
                    {job.department}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-6 text-xs text-muted-foreground font-semibold">
                    <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-brand" /> {job.loc}</span>
                    <span className="flex items-center gap-1.5"><Briefcase className="h-4 w-4 text-brand" /> {job.type}</span>
                    <span className="flex items-center gap-1.5"><Clock className="h-4 w-4 text-brand" /> {job.exp}</span>
                  </div>
                </div>

                <button
                  onClick={() => handleApplyClick(job.title)}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gradient px-7 py-3 text-sm font-bold text-white shadow-glow hover:scale-105 transition-all shrink-0"
                >
                  Apply Now <ArrowUpRight className="h-4 w-4" />
                </button>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      <WaveDivider from="white" to="dark" flip />

      {/* Submit Resume & Application Form Section */}
      <section id="apply-form" className="section-dark container mx-auto px-6 max-w-4xl relative z-10 py-24">
        <Reveal>
          <div className="text-center mb-12">
            <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold mb-3">Join Our Team</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Submit Your <span className="text-gradient">Resume & Details</span>
            </h2>
            <p className="text-muted-foreground text-sm max-w-lg mx-auto">
              Fill in your details and upload your CV/resume. Our Talent Acquisition team will review your profile and contact you within 48 hours.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-border/60 bg-background/50 p-8 sm:p-12 backdrop-blur-xl shadow-glow">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-6"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-gradient text-white shadow-glow">
                  <Check className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">Application Received Successfully!</h3>
                <p className="text-muted-foreground text-sm max-w-md mx-auto leading-relaxed">
                  Thank you for applying for <span className="text-brand font-bold">{selectedJob}</span>. We have logged your submission and resume attachment.
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
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full rounded-xl border border-border bg-background p-3.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-border bg-background p-3.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-border bg-background p-3.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Total Experience (Years)</label>
                    <input
                      type="text"
                      placeholder="e.g. 5 Years"
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full rounded-xl border border-border bg-background p-3.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Applying For Position *</label>
                    <select
                      value={selectedJob}
                      onChange={(e) => setSelectedJob(e.target.value)}
                      className="w-full rounded-xl border border-border bg-background p-3.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      {OPEN_POSITIONS.map((pos) => (
                        <option key={pos.id} value={pos.title}>{pos.title}</option>
                      ))}
                      <option value="General Spontaneous Application">Other / General Spontaneous Application</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">LinkedIn / Portfolio URL</label>
                    <input
                      type="url"
                      placeholder="https://linkedin.com/in/username"
                      value={formData.linkedin}
                      onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                      className="w-full rounded-xl border border-border bg-background p-3.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                </div>

                {/* File Upload Box */}
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Upload Resume / CV (.pdf, .doc, .docx) *</label>
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
                      <p className="text-xs text-muted-foreground">PDF, DOC, DOCX up to 10MB</p>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Cover Note / Key Achievements</label>
                  <textarea
                    rows={4}
                    placeholder="Briefly tell us about your expertise and what excites you about Acceleron Solutions..."
                    value={formData.coverNote}
                    onChange={(e) => setFormData({ ...formData, coverNote: e.target.value })}
                    className="w-full rounded-xl border border-border bg-background p-3.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-brand-gradient py-4 text-white font-bold text-sm shadow-glow hover:scale-[1.01] transition-transform flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" /> Submit Application
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </section>

      <WaveDivider from="dark" to="white" />
    </main>
  );
}
