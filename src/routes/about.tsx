import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Users, Target, HeartPulse, Rocket, Award, MapPin, Mail, Phone, Compass, ShieldCheck, Zap, Globe, Sparkles, Building2, ArrowRight, CheckCircle2, Trophy, Heart, Cpu } from "lucide-react";
import { Reveal, WaveDivider } from "../components/ui/Animations";
import { PageHero } from "../components/ui/PageHero";
import { OFFICIAL_HQ } from "../constants/company";
import { getAssetUrl } from "../lib/assets";
import { OurValuesSection } from "../components/ui/OurValuesGrid";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Acceleron Solutions" },
      { name: "description", content: "Learn about Acceleron Solutions — part of the Gainwell Group. Explore our mission, vision, history, core essence, values, clients, and culture of excellence." },
    ],
  }),
  component: AboutPage,
});

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
    address: "3rd Floor, STPI IT Park, Block-DP, Plot-5/1, Sector V, Salt Lake, Kolkata – 700091, West Bengal, India",
    email: "enquiry@acceleronsolutions.io",
    phone: "033-35346200 / 033-35346222",
    phones: ["033-35346200", "033-35346222"],
    directionsUrl: "https://maps.app.goo.gl/PDjDU26TL5tt7HgD6",
    MapComponent: IndiaMapSvg,
    isHq: true,
  },
  {
    city: "Delhi NCR",
    country: "India",
    label: "Enterprise Delivery Hub",
    address: "Gainwell Ecotech II, 1-C/1, Udyog Vihar, Greater Noida, Delhi NCR – 201306, Uttar Pradesh, India",
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=28.4986,77.5348",
    MapComponent: IndiaMapSvg,
  },
];

const CLIENT_LOGOS = [
  { name: "Client 1", logo: "/client (1).png" },
  { name: "Client 2", logo: "/client (2).png" },
  { name: "Client 3", logo: "/client (3).png" },
  { name: "Client 4", logo: "/client (4).png" },
  { name: "Client 5", logo: "/client (5).png" },
  { name: "Client 6", logo: "/client (6).png" },
  { name: "Client 7", logo: "/client (7).png" },
  { name: "Client 8", logo: "/client (8).png" },
  { name: "Client 9", logo: "/client (9).png" },
  { name: "Client 10", logo: "/client (10).png" },
  { name: "Client 11", logo: "/client (11).png" },
  { name: "Client 12", logo: "/client (12).png" },
  { name: "Client 13", logo: "/client (13).png" },
  { name: "Client 14", logo: "/client (14).png" },
  { name: "Client 15", logo: "/client (15).png" },
  { name: "Client 16", logo: "/client (16).png" },
  { name: "Client 17", logo: "/client (17).png" },
  { name: "Client 18", logo: "/client (18).png" },
  { name: "Client 19", logo: "/client (19).png" },
  { name: "Client 20", logo: "/client (20).png" },
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
  { name: "Gainwell CAT", logo: "/GainwellCAT.jpg" },
  { name: "Gainwell Engineering", logo: "/GainwellEngineering.jpg" },
  { name: "PCM", logo: "/PCM.png" },
  { name: "TMC", logo: "/TMC-removebg-preview.png" },
  { name: "Livpure", logo: "/Livpure_LOGO_Purple_2048x2048_8465dc4a-1c7e-472e-ab6c-b78e8af8446f.png" },
  { name: "Equipcare", logo: "/equipcare.png" },
  { name: "Ambey Mining", logo: "/Ampl.png" },
];

const TESTIMONIALS = [
  {
    quote: "Acceleron didn't just upgrade our ERP; they fundamentally transformed how our field teams operate and interact with data.",
    name: "Sarah Jenkins",
    role: "Chief Operating Officer, Global Manufacturing",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=75&w=150&h=150",
  },
  {
    quote: "Their dual expertise in SAP and IoT is unmatched. They deployed Suraksha across our plants in record time with zero disruption.",
    name: "David Chen",
    role: "VP of Engineering, Industrial Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=75&w=150&h=150",
  },
  {
    quote: "Acceleron is not just a vendor, but a strategic partner that truly understands the stakes of digital transformation in heavy industry.",
    name: "Elena Rodriguez",
    role: "CTO, National Logistics",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=75&w=150&h=150",
  }
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
                  Acceleron Solutions is a part of the Gainwell Group, delivering tailored IT solutions, SAP consulting, and digital engineering from our delivery hubs in Kolkata and Delhi NCR.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="relative rounded-3xl overflow-hidden border border-border bg-muted/20 shadow-glow p-2">
                <img
                  src={getAssetUrl("/Inaguration Photo.JPG")}
                  alt="Acceleron Solutions History & Growth"
                  loading="lazy"
                  decoding="async"
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
      <OurValuesSection />

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

      {/* Customer Stories / Testimonials */}
      <section className="section-dark container mx-auto px-6 max-w-7xl relative z-10 py-24">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs uppercase tracking-[0.4em] text-brand-red font-bold mb-3">Customer Stories</div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Hear from our <span className="text-gradient">Partners</span>
            </h2>
            <p className="text-muted-foreground text-base mt-4">
              Real outcomes from enterprise leaders who chose Acceleron Solutions to lead their digital transformation.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <Reveal key={testimonial.name} delay={idx * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-border/60 bg-muted/20 p-8 sm:p-10 hover:border-brand/40 transition-all shadow-soft hover:shadow-glow h-full flex flex-col justify-between relative"
              >
                <div className="absolute top-8 right-8 text-6xl text-brand/20 font-serif leading-none">"</div>
                <div>
                  <p className="text-foreground text-lg italic leading-relaxed relative z-10 mb-8">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="flex items-center gap-4 border-t border-border/50 pt-6">
                  <img src={testimonial.image} alt={testimonial.name} className="h-12 w-12 rounded-full object-cover border-2 border-brand/20" />
                  <div>
                    <h4 className="text-foreground font-bold text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      <WaveDivider from="dark" to="white" />

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

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {CLIENT_LOGOS.map((client, idx) => (
            <Reveal key={client.name} delay={idx * 0.02}>
              <motion.div
                whileHover={{ y: -4, scale: 1.04 }}
                className="group flex items-center justify-center p-3 sm:p-5 rounded-2xl border border-border/60 bg-white/95 dark:bg-muted/30 backdrop-blur-md hover:border-brand/50 hover:shadow-glow transition-all h-32 sm:h-36 md:h-40 text-center"
              >
                <img
                  src={getAssetUrl(client.logo)}
                  alt={client.name}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full max-h-20 sm:max-h-24 md:max-h-28 max-w-[90%] object-contain filter transition-all group-hover:scale-110"
                />
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
                      {loc.directionsUrl && (
                        <div className="pt-2">
                          <a
                            href={loc.directionsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand hover:text-brand-red transition-colors"
                          >
                            <span>Get Directions</span>
                            <ArrowRight className="h-3.5 w-3.5" />
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
                  className="btn btn-primary btn-lg"
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
