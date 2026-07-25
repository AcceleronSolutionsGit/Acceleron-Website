import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Users, Target, HeartPulse, Rocket, Award, MapPin, Mail, Phone, Compass, ShieldCheck, Zap, Globe, Sparkles, Building2, ArrowRight, CheckCircle2, Trophy, Heart, Cpu } from "lucide-react";
import { Reveal, WaveDivider } from "../components/ui/Animations";
import { PageHero } from "../components/ui/PageHero";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Acceleron Solutions" },
      { name: "description", content: "Learn about Acceleron Solutions — part of the 75-year-old Gainwell Group. Explore our mission, vision, history, core essence, values, clients, and culture of excellence." },
    ],
  }),
  component: AboutPage,
});

export const OFFICIAL_HQ = {
  company: "Acceleron Solutions Pvt. Ltd.",
  address: "3rd Floor, STPI IT Park, Salt Lake, Sector V, Kolkata – 700091, India",
  email: "enquiry@acceleronsolutions.io",
  phone: "033-35346200 / 033-35346222",
  phones: ["033-35346200", "033-35346222"],
};

// SVG Outline maps for locations
function IndiaMapSvg({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M45,10 C50,15 55,20 52,28 C50,32 55,35 60,38 C68,42 72,50 68,58 C62,68 55,80 48,92 C45,86 40,78 35,70 C30,62 25,52 28,45 C30,40 25,32 28,24 Z" />
    </svg>
  );
}

function USAMapSvg({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M10,25 C30,22 60,20 90,25 C88,40 85,60 80,75 C60,78 30,80 15,70 C12,55 10,40 10,25 Z M85,75 L95,85" />
    </svg>
  );
}

function SingaporeMapSvg({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M15,45 C25,30 65,28 85,40 C90,55 75,70 50,72 C30,72 10,60 15,45 Z" />
    </svg>
  );
}

function AustraliaMapSvg({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M20,25 C40,20 70,22 85,32 C92,48 88,68 75,82 C55,85 30,78 15,62 C10,48 12,32 20,25 Z" />
    </svg>
  );
}

const LOCATION_CARDS = [
  {
    city: "Kolkata (HQ)",
    country: "India",
    label: "Global Headquarters & Center of Excellence",
    address: "3rd Floor, STPI IT Park, Salt Lake, Sector V, Kolkata – 700091, India",
    email: "enquiry@acceleronsolutions.io",
    phone: "033-35346200 / 033-35346222",
    phones: ["033-35346200", "033-35346222"],
    MapComponent: IndiaMapSvg,
    isHq: true,
  },
  {
    city: "Delhi NCR",
    country: "India",
    label: "Enterprise Delivery Hub",
    MapComponent: IndiaMapSvg,
  },
  {
    city: "Singapore",
    country: "Singapore",
    label: "APAC Regional Hub",
    MapComponent: SingaporeMapSvg,
  },
  {
    city: "West Virginia",
    country: "USA",
    label: "Americas Regional Hub",
    MapComponent: USAMapSvg,
  },
  {
    city: "NSW",
    country: "Australia",
    label: "Australasia Office",
    MapComponent: AustraliaMapSvg,
  },
];

export const CLIENT_LOGOS = [
  { name: "Trimble", logo: "/TRIMBLE.png" },
  { name: "Tulip Compression", logo: "/TulipCompression.png" },
  { name: "Sitech", logo: "/SITECH.png" },
  { name: "SEM", logo: "/SEM.png" },
  { name: "RPM Global", logo: "/rpmglobal.png" },
  { name: "Ontrak", logo: "/ontrak.png" },
  { name: "Lintec & Linnhoff", logo: "/lintec&linhoff.png" },
  { name: "Paus", logo: "/PAUS.png" },
  { name: "TIPL CAT", logo: "/TIPL.jpg" },
  { name: "TIL", logo: "/TractorsIndia.jpg" },
  { name: "Gainwell", logo: "/Gainwell.jpg" },
  { name: "Gainwell CAT", logo: "/GainwellCAT.jpg" },
  { name: "Gainwell Engineering", logo: "/GainwellEngineering.jpg" },
  { name: "PCM", logo: "/PCM.png" },
  { name: "TMC", logo: "/TMC-removebg-preview.png" },
  { name: "Livpure", logo: "/Livpure_LOGO_Purple_2048x2048_8465dc4a-1c7e-472e-ab6c-b78e8af8446f.png" },
  { name: "Equipcare", logo: "/equipcare.png" },
  { name: "Ambey Mining", logo: "/Ampl.png" },
];

function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <PageHero
        title="Driving Digital Transformation & Enterprise Growth"
        subtitle="Acceleron Solutions is committed to delivering tailored IT solutions that drive business transformation, cloud adoption, cybersecurity, and strategic SAP consulting."
        breadcrumbs={[{ label: "About Us" }]}
        image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=75&w=1200&auto=format&fit=crop"
        ctaText="Explore Career Opportunities"
        ctaHref="/careers"
      />

      {/* About Overview & History Section */}
      <section className="section-dark container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold">About Acceleron Solutions</div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
                Empowering Businesses to <span className="text-gradient">Stay Ahead</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Acceleron Solutions is committed to delivering tailored IT solutions that drive business transformation and growth. With a focus on IT infrastructure, cloud services, and cybersecurity, we help our clients navigate the complexities of the digital world.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Our approach emphasizes innovation, collaboration, and creating value through technology, positioning our clients to stay ahead in a dynamic marketplace.
              </p>
            </Reveal>

            {/* Our History Callout */}
            <Reveal delay={0.4}>
              <div className="rounded-3xl border border-brand/30 bg-brand-gradient/10 p-6 sm:p-8 backdrop-blur-xl mt-8">
                <div className="text-xs font-bold uppercase tracking-widest text-brand-red mb-2">Our History & Heritage</div>
                <p className="text-foreground text-base font-semibold leading-relaxed">
                  Acceleron Solutions is a part of the 75-year-old Gainwell Group, a diversified conglomerate headquartered in Kolkata, India, with branches and subsidiaries across India, USA, Australia, Singapore, Nepal, and Bhutan.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="relative rounded-3xl overflow-hidden border border-border bg-muted/20 shadow-glow p-2">
                <img
                  src="/Inaguration Photo.JPG"
                  alt="Acceleron Solutions History & Growth"
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <WaveDivider from="dark" to="white" />

      {/* Mission & Vision Cards */}
      <section className="container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold mb-3">Guiding Principles</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Our Mission & <span className="text-gradient">Vision</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          <Reveal delay={0.1}>
            <div className="group rounded-3xl border border-border/60 bg-muted/20 p-8 sm:p-10 hover:bg-muted/40 hover:border-brand/40 transition-all duration-300 shadow-soft hover:shadow-glow h-full flex flex-col justify-between">
              <div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow">
                  <Target className="h-7 w-7" />
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-brand-red mb-2">Our Mission</div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Empowering Business Transformation</h3>
                <p className="text-muted-foreground leading-relaxed text-base">
                  To empower businesses with strategic SAP consulting, custom web applications, and innovative technology solutions that drive efficiency, growth, and digital transformation.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="group rounded-3xl border border-border/60 bg-muted/20 p-8 sm:p-10 hover:bg-muted/40 hover:border-brand/40 transition-all duration-300 shadow-soft hover:shadow-glow h-full flex flex-col justify-between">
              <div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow">
                  <Compass className="h-7 w-7" />
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-brand-red mb-2">Our Vision</div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Shaping Tomorrow's Digital Landscape</h3>
                <p className="text-muted-foreground leading-relaxed text-base">
                  Our vision is to empower clients with transformative technology solutions that drive growth, agility, and efficiency, enabling them to thrive in an evolving digital landscape.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <WaveDivider from="white" to="dark" flip />

      {/* Defining Our Core Essence */}
      <section className="section-dark container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold mb-3">Pillars of Growth</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Defining Our <span className="text-gradient">Core Essence</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Our Culture",
              desc: "Our culture promotes innovation, collaboration, and continuous improvement. We value teamwork, integrity, and a commitment to delivering top-quality IT services. By fostering creativity and inclusivity, we empower our team to exceed customer expectations.",
              icon: Users,
            },
            {
              title: "Our USP",
              desc: "Our USP lies in delivering tailored IT solutions that combine cutting-edge technology with personalized support. We offer fast, reliable service, ensuring seamless operations for our clients. Our expert team goes beyond the standard to provide proactive and innovative solutions that drive business growth.",
              icon: Sparkles,
            },
            {
              title: "Business Model",
              desc: "Our business model is centered on providing flexible, scalable IT services tailored to client needs. We offer a mix of on-demand support, managed services, and custom solutions, ensuring seamless technology integration. By focusing on innovation and customer satisfaction, we deliver value through proactive and reliable IT management.",
              icon: Cpu,
            },
            {
              title: "Our CSR Initiatives",
              desc: "Our CSR initiatives focus on leveraging technology to support education, environmental sustainability, and community well-being. We invest in programs that promote digital literacy, reduce our carbon footprint, and foster diversity and inclusion. Through partnerships and employee engagement, we aim to make a positive impact locally and globally.",
              icon: Heart,
            },
          ].map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                className="rounded-3xl border border-border/60 bg-muted/20 p-8 backdrop-blur-xl hover:border-brand/40 transition-all h-full"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-2xl bg-brand/10 text-brand flex items-center justify-center">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      <WaveDivider from="dark" to="white" />

      {/* Core Values Section */}
      <section className="container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold mb-3">What Drives Us</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground text-base md:text-lg">
              We prioritize customer success, foster innovation, act with integrity, encourage collaboration, and pursue excellence in every project. These core values drive our mission to create impactful technology solutions that make a difference.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Collaboration", desc: "Working in a team to achieve a common goal.", icon: Users },
            { title: "Customer Centricity", desc: "Creating superior customer relationships to drive business sustainability.", icon: Target },
            { title: "Caring", desc: "A positive workplace built on respect, empathy, and well-being for others.", icon: HeartPulse },
            { title: "Entrepreneurship", desc: "Providing an empowering environment to facilitate independent decision-making.", icon: Rocket },
            { title: "Excellence", desc: "Adding value to every activity to achieve a higher level of standards across the organization.", icon: Award },
          ].map((val, i) => (
            <Reveal key={val.title} delay={0.1 * i}>
              <motion.div
                whileHover={{ y: -4 }}
                className="group rounded-2xl border border-border/50 bg-muted/20 p-8 hover:bg-muted/40 transition-all h-full hover:shadow-soft"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow">
                  <val.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{val.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{val.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      <WaveDivider from="white" to="dark" flip />

      {/* The Foundation of Excellence */}
      <section className="section-dark container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold mb-3">Commitment to Quality</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              The Foundation of <span className="text-gradient">Excellence</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-8">
          {[
            {
              title: "Innovative Culture",
              desc: "We cultivate a culture of creativity, collaboration, and continuous improvement. By embracing diverse ideas and encouraging experimentation, we drive innovation that delivers impactful solutions for our clients.",
              icon: Sparkles
            },
            {
              title: "Building a Culture of Excellence",
              desc: "We uphold the highest standards of quality and accountability. Our culture is built on continuous improvement, dedication, and responsibility, ensuring our team consistently delivers outstanding results for our clients.",
              icon: Trophy
            },
            {
              title: "Empowering Excellence",
              desc: "We foster a culture of continuous growth, collaboration, and accountability. By providing the right support and opportunities, we empower our team to excel and deliver outstanding results that drive client success.",
              icon: Award
            }
          ].map((item, idx) => (
            <Reveal key={item.title} delay={idx * 0.1}>
              <div className="rounded-3xl border border-border/60 bg-muted/20 p-8 backdrop-blur-xl flex flex-col justify-between h-full hover:border-brand/40 transition-all">
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

      {/* Achievements & Company Milestones */}
      <section className="container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold">Track Record</div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                Our Achievements & <span className="text-gradient">Company Milestones</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Our company has consistently delivered cutting-edge IT solutions, earning multiple industry awards for innovation and service excellence. We've successfully completed high-impact projects across diverse sectors, driving client success. Our team has grown exponentially, with a strong global presence.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Milestones showcase significant achievements and pivotal moments in our journey. These milestones highlight our growth, innovative solutions, and successful projects that have shaped our company’s evolution. Each milestone represents our dedication to advancing technology and delivering exceptional IT services.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { metric: "75+", label: "Years Group History" },
                  { metric: "200+", label: "Enterprise Projects" },
                  { metric: "28+", label: "Countries Served" },
                  { metric: "99.8%", label: "Client Satisfaction" },
                ].map((stat, i) => (
                  <div key={i} className="rounded-3xl border border-border/60 bg-muted/20 p-6 text-center backdrop-blur-xl shadow-soft">
                    <div className="text-3xl sm:text-4xl font-extrabold text-brand mb-1">{stat.metric}</div>
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <WaveDivider from="white" to="dark" flip />

      {/* Clients Showcase with Real Logos */}
      <section className="section-dark container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold mb-3">Trusted Partnerships</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Our Industry <span className="text-gradient">Clients</span>
            </h2>
            <p className="text-muted-foreground text-base">
              Partnering with global leaders, OEMs, heavy mining operators, and industrial enterprises.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {CLIENT_LOGOS.map((client, idx) => (
            <Reveal key={client.name} delay={idx * 0.03}>
              <motion.div
                whileHover={{ y: -4, scale: 1.03 }}
                className="group flex flex-col items-center justify-center p-4 rounded-2xl border border-border/60 bg-white/90 dark:bg-muted/30 backdrop-blur-md hover:border-brand/50 hover:shadow-glow transition-all h-28 text-center"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  loading="lazy"
                  className="max-h-12 max-w-[85%] object-contain filter transition-all group-hover:scale-105"
                />
                <span className="text-[10px] font-semibold text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {client.name}
                </span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      <WaveDivider from="dark" to="white" />

      {/* Global Presence */}
      <section className="container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <Reveal>
          <div className="text-center mb-16">
            <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold mb-4">Global Presence</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Our Offices & Delivery Hubs</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Strategic delivery hubs and regional offices supporting enterprise clients worldwide.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {LOCATION_CARDS.map((loc, i) => (
            <Reveal key={loc.city} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6, scale: 1.02 }}
                className={`relative rounded-3xl border p-8 transition-all duration-300 flex flex-col justify-between h-full ${
                  loc.isHq
                    ? "border-brand bg-brand-gradient/10 shadow-glow"
                    : "border-border/60 bg-background/50 hover:border-brand/40 hover:shadow-soft"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-2xl bg-brand-gradient/20 p-2 text-brand border border-brand/30 flex items-center justify-center">
                        <loc.MapComponent className="h-8 w-8 text-brand" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                          {loc.city}
                          {loc.isHq && (
                            <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-brand-red text-white">
                              HQ
                            </span>
                          )}
                        </h3>
                        <p className="text-xs text-muted-foreground font-semibold">{loc.country}</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs font-bold text-brand-red uppercase tracking-wider mb-2">{loc.label}</p>

                  {(loc.address || loc.email || loc.phone) && (
                    <div className="space-y-3 text-xs text-muted-foreground leading-relaxed mt-4 pt-4 border-t border-border/50">
                      {loc.address && (
                        <div className="flex items-start gap-2.5">
                          <MapPin className="h-4 w-4 text-brand shrink-0 mt-0.5" />
                          <span>{loc.address}</span>
                        </div>
                      )}
                      {loc.phone && (
                        <div className="flex items-center gap-2.5">
                          <Phone className="h-4 w-4 text-brand shrink-0" />
                          <div className="flex flex-wrap items-center gap-x-2 font-medium text-foreground">
                            <a href="tel:03335346200" className="hover:text-brand transition-colors">033-35346200</a>
                            <span className="text-muted-foreground">/</span>
                            <a href="tel:03335346222" className="hover:text-brand transition-colors">033-35346222</a>
                          </div>
                        </div>
                      )}
                      {loc.email && (
                        <div className="flex items-center gap-2.5">
                          <Mail className="h-4 w-4 text-brand shrink-0" />
                          <a href={`mailto:${loc.email}`} className="hover:text-brand transition-colors">
                            {loc.email}
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why Join Us / Careers CTA */}
      <section className="section-dark container mx-auto px-6 max-w-7xl relative z-10 pb-24 pt-12">
        <Reveal>
          <div className="rounded-3xl border border-brand/40 bg-brand-gradient/10 p-10 sm:p-14 text-center backdrop-blur-xl relative overflow-hidden shadow-glow">
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold">Careers & Opportunities</div>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                Why Join <span className="text-gradient">Acceleron Solutions?</span>
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                Acceleron Solutions offers a culture of growth, innovation, and collaboration. We empower our team members with opportunities for career development, exposure to cutting-edge technologies, and a dynamic work environment. At Acceleron, you’ll be part of a forward-thinking company that values creativity, respects individuality, and encourages learning.
              </p>
              <div className="pt-4">
                <Link
                  to="/careers"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-8 py-4 text-base font-bold text-white shadow-glow hover:scale-105 transition-transform"
                >
                  Find Right Opportunities For You <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
