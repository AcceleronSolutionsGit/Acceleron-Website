import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Heart,
  Droplets,
  Users,
  HandHeart,
  Sparkles,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Shirt,
  UtensilsCrossed,
  HeartPulse,
  Leaf,
  ShieldCheck,
  Building2,
  Award,
  Sun,
  Mail,
} from "lucide-react";
import { Reveal, WaveDivider } from "../components/ui/Animations";
import { PageHero } from "../components/ui/PageHero";

export const Route = createFileRoute("/csr")({
  head: () => ({
    meta: [
      { title: "Acceleron Cares — CSR, Community Outreach & Sustainability" },
      {
        name: "description",
        content:
          "Acceleron Cares is our commitment to responsibility, empathy, and collective social action. Explore our blood donation drives, food & clothing distributions, and elder care initiatives.",
      },
    ],
  }),
  component: CsrPage,
});

const COMMUNITY_INITIATIVES = [
  {
    id: "clothes-essentials",
    title: "Pre-Loved Clothes & Essentials Donation Drive",
    badge: "Sustainable Reuse",
    icon: Shirt,
    gradient: "from-blue-500 to-indigo-600",
    description:
      "An ongoing office initiative that encourages our team members to declutter with purpose. By contributing pre-loved clothing, books, and daily essentials, we promote sustainable reuse while providing meaningful material support to local families in need.",
    highlights: [
      "Promotes circular economy and sustainable textile reuse",
      "Regular doorstep drops to verified community shelter homes",
      "Active employee engagement across all office locations",
    ],
  },
  {
    id: "food-drives",
    title: "Nourishing Communities: Food Donation Drives",
    badge: "Food Security",
    icon: UtensilsCrossed,
    gradient: "from-amber-500 to-orange-600",
    description:
      "Food security is a fundamental human right. Through regular community food distribution campaigns, our teams collect and distribute nutritional essentials to underprivileged neighborhoods, ensuring that wholesome meals reach those who need them most.",
    highlights: [
      "Nutrient-rich staple kits distributed to daily-wage households",
      "Partnerships with local community distribution centers",
      "Direct volunteer participation in packaging and field drives",
    ],
  },
  {
    id: "winter-warmth",
    title: "Winter Warmth: Blanket & Winter Clothing Drive for Elderly People",
    badge: "Elder Dignity & Care",
    icon: Sun,
    gradient: "from-rose-500 to-red-600",
    description:
      "Winters can be exceptionally harsh for vulnerable elderly populations. Our dedicated seasonal warmth drives focus on gathering and distributing warm blankets and woolens directly to senior citizens in our community, offering comfort, dignity, and care during the coldest months.",
    highlights: [
      "High-grade thermal blankets and heavy winter woolens",
      "Direct visits and care conversations with senior citizens",
      "Carefully mapped outreach to unhoused elderly individuals",
    ],
  },
  {
    id: "volunteer-engagement",
    title: "Grassroots Empathy & Volunteer Engagement",
    badge: "Hands-on Service",
    icon: HandHeart,
    gradient: "from-teal-500 to-emerald-600",
    description:
      "Beyond structured campaigns, our workplace culture encourages employees to volunteer their time and energy for local community centers, educational support for underprivileged children, and neighborhood welfare programs.",
    highlights: [
      "Paid volunteer hours and mentorship workshops",
      "Digital literacy and foundational STEM sessions for students",
      "Neighborhood civic cleanup and environmental conservation",
    ],
  },
];

const IMPACT_METRICS = [
  { value: "100%", label: "Employee-Driven Participation", desc: "Grassroots collective action across teams" },
  { value: "20+", label: "CIOs & Senior Leaders", desc: "Leading by example in our blood donation drive" },
  { value: "4+", label: "Ongoing Welfare Pillars", desc: "Health, warmth, food security & education" },
  { value: "365", label: "Days of Commitment", desc: "CSR woven into our everyday corporate fabric" },
];

function CsrPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* SECTION 1: HERO BANNER */}
      <PageHero
        badge="ACCELERON CARES: CSR &amp; SUSTAINABILITY"
        title="Transformation Driven by Responsibility, Empathy &amp; Collective Action"
        subtitle="We believe that true transformation goes far beyond technology—it is driven by responsibility, empathy, and collective action. Through our 'Acceleron Cares' initiative, we remain deeply committed to creating a positive ripple effect across our communities. Because when people come together with purpose, meaningful change becomes inevitable."
        breadcrumbs={[{ label: "CSR &amp; Sustainability" }]}
        image="/DSC03626.JPG"
        ctaText="Blood Donation Drive"
        ctaHref="#blood-donation"
        secondaryCtaText="Explore Initiatives"
        secondaryCtaHref="#initiatives"
        icon={
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/20 shadow-xl">
            <Heart className="h-8 w-8 text-brand-red drop-shadow-lg" />
            <div className="border-l border-white/30 pl-3">
              <div className="text-[10px] font-bold uppercase tracking-wider text-brand-red">
                Acceleron Cares
              </div>
              <div className="text-xs font-bold text-white tracking-wide">
                Social Responsibility
              </div>
            </div>
          </div>
        }
      />

      {/* METRICS STRIP */}
      <section className="border-y border-border/60 bg-muted/30 py-8 relative z-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {IMPACT_METRICS.map((metric, idx) => (
              <Reveal key={metric.label} delay={idx * 0.08}>
                <div className="text-center sm:text-left border-l-2 border-brand/60 pl-4">
                  <div className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    <span className="text-gradient">{metric.value}</span>
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-foreground mt-0.5">
                    {metric.label}
                  </div>
                  <div className="text-[11px] text-muted-foreground mt-0.5 hidden sm:block">
                    {metric.desc}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: LEADERSHIP IN ACTION - BLOOD DONATION DRIVE */}
      <section
        id="blood-donation"
        className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 sm:py-24 border-b border-border/60"
      >
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/30 bg-brand-red/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red">
                <Calendar className="h-3.5 w-3.5" /> 21st February 2026 • Landmark Initiative
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mt-3">
                Leadership in Action:{" "}
                <span className="text-gradient">Blood Donation Drive</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-border/80 bg-card p-6 shadow-sm space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-brand uppercase tracking-wider">
                  <HeartPulse className="h-4 w-4 text-brand-red" />
                  <span>Organized in Association With</span>
                </div>
                <div className="grid sm:grid-cols-2 gap-3 text-sm font-semibold text-foreground">
                  <div className="flex items-center gap-2 bg-muted/40 p-3 rounded-xl border border-border/60">
                    <Building2 className="h-4 w-4 text-brand shrink-0" />
                    <span>Philanthropic Technical Association</span>
                  </div>
                  <div className="flex items-center gap-2 bg-muted/40 p-3 rounded-xl border border-border/60">
                    <Droplets className="h-4 w-4 text-brand-red shrink-0" />
                    <span>Associates of Voluntary Blood Donors, West Bengal</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                On 21st February 2026, we organized a landmark Blood Donation Drive in association with the Philanthropic Technical Association and Associates of Voluntary Blood Donors, West Bengal. This initiative brought together our team and esteemed industry leaders who stepped forward to contribute to a life-saving cause.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="rounded-2xl border border-brand/30 bg-gradient-to-br from-brand/5 via-card to-card p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center shrink-0 mt-1">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-foreground mb-1">
                      Leading by Example Beyond the Boardroom
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      What made this drive truly special was the active participation of several CIOs and senior executives who led by example—demonstrating that true leadership extends far beyond boardrooms and into society. Their involvement added immense inspiration to the initiative, reinforcing that even small acts carry the power to save lives and inspire communities.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.18}>
              <div className="relative rounded-3xl overflow-hidden border border-border/80 shadow-2xl bg-card">
                <img
                  src="/DSC03626.JPG"
                  alt="Blood Donation Drive at Acceleron Solutions"
                  className="w-full h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-red text-white">
                    <Droplets className="h-3 w-3" /> Life-Saving Cause
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Acceleron Blood Donation Camp
                  </h3>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Senior executives, partner CIOs, and Acceleron employees uniting to replenish life-saving blood banks across West Bengal.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 3: COMMUNITY OUTREACH & GIVING INITIATIVES */}
      <section
        id="initiatives"
        className="section-dark container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 sm:py-24 border-b border-border/60"
      >
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand mb-3">
              Year-Round Impact
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Community Outreach &amp; <span className="text-gradient">Giving Initiatives</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              At Acceleron, giving back is woven into the everyday fabric of our workplace culture. We believe that a thriving community is built on empathy, shared warmth, and proactive local engagement. Our year-round outreach calendar is driven by employee participation and heartfelt collective action:
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-8">
          {COMMUNITY_INITIATIVES.map((init, idx) => (
            <Reveal key={init.id} delay={idx * 0.08} className="h-full">
              <div className="rounded-3xl border border-border/80 bg-card/70 backdrop-blur-xl p-8 h-full flex flex-col justify-between shadow-card hover:border-brand/40 hover:-translate-y-1 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${init.gradient} text-white flex items-center justify-center shadow-glow`}
                    >
                      <init.icon className="h-7 w-7" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider bg-brand/10 text-brand px-3 py-1 rounded-full border border-brand/20">
                      {init.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                    {init.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {init.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-border/50">
                    {init.highlights.map((item, hIdx) => (
                      <div
                        key={hIdx}
                        className="flex items-start gap-2.5 text-xs text-foreground/80 font-medium"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-brand shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-border/40 flex items-center justify-between text-xs font-bold text-brand">
                  <span>Acceleron Cares Outreach</span>
                  <Heart className="h-4 w-4 text-brand-red" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION 4: OUR ONGOING PLEDGE */}
      <section className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10 py-16 sm:py-24">
        <Reveal>
          <div className="rounded-3xl border border-brand/30 bg-gradient-to-br from-card via-card to-brand/5 p-8 sm:p-14 shadow-glow text-center relative overflow-hidden">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-brand mb-6">
              Our Ongoing Pledge
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground max-w-3xl mx-auto leading-snug mb-6">
              "At Acceleron, CSR is never just a checkbox—it is a reflection of our core values in action."
            </h2>

            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8">
              Whether through blood donation camps, clothing and food drives, or community welfare programs, we remain steadfast in our commitment to creating positive, lasting change that touches lives and uplifts society.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto pt-6 border-t border-border/60 mb-8">
              <div className="p-3">
                <div className="text-brand font-bold text-sm mb-1">Responsibility</div>
                <div className="text-xs text-muted-foreground">Accountability to society &amp; environment</div>
              </div>
              <div className="p-3">
                <div className="text-brand font-bold text-sm mb-1">Empathy</div>
                <div className="text-xs text-muted-foreground">Human-first compassion for vulnerable communities</div>
              </div>
              <div className="p-3">
                <div className="text-brand font-bold text-sm mb-1">Collective Action</div>
                <div className="text-xs text-muted-foreground">Every team member making a tangible difference</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/careers"
                className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-8 py-3.5 text-xs font-bold text-white shadow-glow hover:scale-105 transition-all"
              >
                <span>Join Our Purpose-Driven Team</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-8 py-3.5 text-xs font-bold text-foreground hover:bg-muted/40 transition-colors"
              >
                <span>Partner with Acceleron Cares</span>
                <Mail className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <WaveDivider from="dark" to="white" />
    </main>
  );
}
