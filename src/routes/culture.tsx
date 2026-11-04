import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Heart,
  Sparkles,
  Users,
  PartyPopper,
  CalendarHeart,
  HeartPulse,
  Brain,
  Sprout,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sun,
  Smile,
  Compass,
  ArrowUpRight,
  Leaf,
  ImageIcon,
} from "lucide-react";
import { PageHero } from "../components/ui/PageHero";
import { Reveal, WaveDivider } from "../components/ui/Animations";
import { getAssetUrl } from "../lib/assets";

export const Route = createFileRoute("/culture")({
  head: () => ({
    meta: [
      { title: "People & Culture — Acceleron Solutions" },
      {
        name: "description",
        content:
          "A Culture That Empowers People, Inspires Innovation and Drives Possibilities. Discover our celebrations, holistic mental well-being, and Roots of Responsibility at Acceleron.",
      },
    ],
  }),
  component: CulturePage,
});

const CELEBRATIONS = [
  {
    id: "festivals",
    title: "Festivals & Cultural Joy",
    badge: "Vibrant Community",
    icon: PartyPopper,
    gradient: "from-fuchsia-500 to-pink-600",
    description:
      "We celebrate occasions like Holi with vibrant colors and cheer, fostering a close-knit, joyful atmosphere across our hubs where cultural diversity is honored and embraced.",
    highlights: [
      "Festivals of colors, lights, and harvest celebrated across all offices",
      "Traditional cuisines, creative desk styling, and interactive events",
      "Cross-cultural appreciation uniting regional teams",
    ],
  },
  {
    id: "milestones",
    title: "Special Days & Milestones",
    badge: "Milestones & Bonds",
    icon: CalendarHeart,
    gradient: "from-blue-500 to-indigo-600",
    description:
      "From honoring achievements on International Women’s Day and celebrating bonds on Friendship Day, to bringing tech leaders together at our annual IT Meet, our calendar is filled with moments that unite us.",
    highlights: [
      "International Women’s Day leadership dialogues and recognition",
      "Friendship Day camaraderie and peer-to-peer appreciation notes",
      "Annual IT Meet bringing enterprise architects & innovators together",
    ],
  },
  {
    id: "health-awareness",
    title: "Global & Health Awareness",
    badge: "Mindful Living",
    icon: HeartPulse,
    gradient: "from-teal-500 to-emerald-600",
    description:
      "We actively observe World Health Day and International Yoga Day, encouraging mindful living, daily physical fitness, and holistic preventive care for all team members.",
    highlights: [
      "Guided International Yoga Day sessions and ergonomic workshops",
      "World Health Day health kiosks and preventive screenings",
      "Team fitness challenges and hydration/mindfulness pauses",
    ],
  },
];

const WELLBEING_PILLARS = [
  {
    title: "Psychiatrist & Expert Sessions",
    desc: "Direct access to certified mental health clinicians and psychiatrists for private, professional guidance.",
    icon: Brain,
  },
  {
    title: "100% Stigma-Free Sanctuary",
    desc: "A completely safe, confidential, and empathetic space where emotional well-being is spoken of openly without judgment.",
    icon: ShieldCheck,
  },
  {
    title: "Empathetic Leadership",
    desc: "Managers trained in psychological safety, active listening, and supporting life milestones with warmth.",
    icon: Heart,
  },
  {
    title: "Holistic Health Balance",
    desc: "Flexible work arrangements, mindful pauses, and supportive systems to nurture your overall peace of mind.",
    icon: Sun,
  },
];

function CulturePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* SECTION 1: HERO */}
      <PageHero
        badge="WHO WE ARE • PEOPLE &amp; CULTURE"
        title="People & Culture"
        subtitle="A Culture That Empowers People, Inspires Innovation and Drives Possibilities. We believe that exceptional technology is only born when exceptional people are given the space, trust, and support to thrive."
        breadcrumbs={[
          { label: "Who We Are", href: "/about" },
          { label: "People & Culture" },
        ]}
        image={getAssetUrl("/IMG_20250704_172405529_HDR_AE.jpg")}
        ctaText="Explore Celebrations"
        ctaHref="#celebrations"
        secondaryCtaText="Join Our Journey"
        secondaryCtaHref="#join-us"
        icon={
          <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/20 shadow-xl">
            <Heart className="h-8 w-8 text-brand drop-shadow-lg" />
            <div className="border-l border-white/30 pl-3">
              <div className="text-[10px] font-bold uppercase tracking-wider text-brand-red">
                Acceleron Family
              </div>
              <div className="text-xs font-bold text-white tracking-wide">
                Thrive Together
              </div>
            </div>
          </div>
        }
      />

      {/* SECTION 2: CULTURE MANIFESTO & PHILOSOPHY */}
      <section className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 sm:py-24 border-b border-border/60">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand">
                Our Cultural DNA
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mt-3">
                More Than Everyday Engineering:{" "}
                <span className="text-gradient">A Vibrant, Caring Family</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Here, you aren't just an employee—you are a vital part of a warm, vibrant, and collaborative family united by curiosity, empathy, and a shared drive to build things that matter.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-3xl border border-brand/30 bg-gradient-to-br from-brand/5 via-card to-card p-6 sm:p-8 shadow-sm space-y-4">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-brand-gradient text-white flex items-center justify-center shrink-0 shadow-glow">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                      Valued as a Whole Person
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Our culture goes beyond everyday engineering. We celebrate life, honor our community, champion holistic well-being, and stand together through every milestone. If you are looking for a workplace that values you as a whole person—supporting your mental health, celebrating your individuality, and empowering you to make a real impact—you belong here with us.
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-3 pt-4 border-t border-border/60">
                  <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
                    <span>Holistic Mental Care</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
                    <span>Joyful Celebrations</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-brand shrink-0" />
                    <span>Green Stewardship</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.18}>
              <div className="relative rounded-3xl overflow-hidden border border-border/80 shadow-2xl bg-card">
                <img
                  src="/IMG_20250704_172405529_HDR_AE.jpg"
                  alt="Team outdoor retreat and celebration"
                  className="w-full h-[440px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-red text-white px-3 py-1 rounded-full">
                    Together We Grow
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    Uniting Curiosity &amp; Empathy
                  </h3>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Celebrating milestones, outdoor retreats, and everyday shared triumphs across our teams.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 3: CELEBRATIONS, EVENTS & COMMUNITY LIFE */}
      <section
        id="celebrations"
        className="section-dark container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 sm:py-24 border-b border-border/60"
      >
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand mb-3">
              Moments That Unite Us
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
              Celebrations, Events &amp; <span className="text-gradient">Community Life</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              At Acceleron, we believe in celebrating together and building a vibrant, joyous workplace where traditions and connections come alive:
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {CELEBRATIONS.map((event, idx) => (
            <Reveal key={event.id} delay={idx * 0.1} className="h-full">
              <div className="rounded-3xl border border-border/80 bg-card/70 backdrop-blur-xl p-8 h-full flex flex-col justify-between shadow-card hover:border-brand/40 hover:-translate-y-1 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${event.gradient} text-white flex items-center justify-center shadow-glow`}
                    >
                      <event.icon className="h-7 w-7" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-brand/10 text-brand px-3 py-1 rounded-full border border-brand/20">
                      {event.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                    {event.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {event.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-border/50">
                    {event.highlights.map((item, hIdx) => (
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
                  <span>Acceleron Moments</span>
                  <Sparkles className="h-4 w-4" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SECTION 4: EMPLOYEE WELL-BEING & MENTAL HEALTH */}
      <section className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 sm:py-24 border-b border-border/60">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <Reveal>
              <div className="rounded-3xl border border-border/80 bg-gradient-to-br from-card via-card to-brand/5 p-8 shadow-card space-y-6">
                <div className="h-14 w-14 rounded-2xl bg-brand-gradient text-white flex items-center justify-center shadow-glow">
                  <Brain className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Safe, Compassionate &amp; Stigma-Free Care
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We believe that mental wellness is as essential as physical health. Through expert-led psychiatric counseling, safe conversational channels, and compassionate leave structures, our team members always have a listening ear.
                </p>
                <div className="p-4 rounded-2xl bg-brand/10 border border-brand/20 text-xs text-foreground font-semibold flex items-center gap-3">
                  <Heart className="h-5 w-5 text-brand-red shrink-0" />
                  <span>Dedicated sessions with professional psychiatrists &amp; counselors.</span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-red/30 bg-brand-red/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-brand-red">
                Mental Health &amp; Holistic Care
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mt-3">
                Employee Well-being &amp;{" "}
                <span className="text-gradient">Mental Health</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Your health, happiness, and peace of mind matter deeply to us. To ensure our team receives holistic care, we provide robust well-being support systems, including dedicated sessions with professional psychiatrists and mental health experts. We are committed to maintaining a safe, compassionate, and stigma-free environment where every team member feels supported, heard, and cared for.
              </p>
            </Reveal>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {WELLBEING_PILLARS.map((item, idx) => (
                <Reveal key={item.title} delay={0.12 + idx * 0.06}>
                  <div className="rounded-2xl border border-border/80 bg-card p-5 h-full flex flex-col justify-between shadow-sm">
                    <div>
                      <div className="h-9 w-9 rounded-xl bg-muted/60 text-brand flex items-center justify-center mb-3">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <h4 className="text-sm font-bold text-foreground mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: SUSTAINABILITY - ROOTS OF RESPONSIBILITY */}
      <section className="section-dark container mx-auto px-4 sm:px-6 max-w-7xl relative z-10 py-16 sm:py-24 border-b border-border/60">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-emerald-500">
                <Leaf className="h-3.5 w-3.5" /> Environmental Stewardship
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mt-3">
                Roots of Responsibility:{" "}
                <span className="text-gradient">Plantation &amp; Sustainability</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                We believe that technology and corporate growth must go hand-in-hand with environmental stewardship. Through our 'Acceleron Cares' initiative, we proudly introduced 'Roots of Responsibility'—a dedicated plantation initiative aimed at creating a meaningful, lasting ecological impact, fostering environmental consciousness, and building a greener, sustainable tomorrow for future generations.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="grid sm:grid-cols-3 gap-4 pt-2">
                <div className="rounded-2xl border border-border/80 bg-card/60 p-4">
                  <div className="text-emerald-500 font-bold text-sm mb-1 flex items-center gap-1.5">
                    <Sprout className="h-4 w-4" /> Green Future
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Tree plantation drives across our local regions
                  </div>
                </div>
                <div className="rounded-2xl border border-border/80 bg-card/60 p-4">
                  <div className="text-emerald-500 font-bold text-sm mb-1 flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4" /> Eco Awareness
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Zero-waste, paperless workflows &amp; eco consciousness
                  </div>
                </div>
                <div className="rounded-2xl border border-border/80 bg-card/60 p-4">
                  <div className="text-emerald-500 font-bold text-sm mb-1 flex items-center gap-1.5">
                    <Users className="h-4 w-4" /> Collective Action
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Hands-on employee planting and nurturing pledge
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.18}>
              <div className="relative rounded-3xl overflow-hidden border border-border/80 shadow-2xl bg-card">
                <img
                  src="/IMG_20250620_083216430_HDR_AE.jpg"
                  alt="Roots of Responsibility Plantation Drive"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-600 text-white">
                    <Leaf className="h-3 w-3" /> Acceleron Cares
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Roots of Responsibility
                  </h3>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Nurturing a sustainable tomorrow through active green plantation and environmental responsibility.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SECTION 6: JOIN OUR JOURNEY (CTA) */}
      <section
        id="join-us"
        className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10 py-16 sm:py-24"
      >
        <Reveal>
          <div className="rounded-3xl border border-brand/30 bg-gradient-to-br from-card via-card to-brand/5 p-8 sm:p-14 shadow-glow text-center relative overflow-hidden">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.25em] text-brand mb-4">
              Your Next Career Chapter
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground max-w-2xl mx-auto leading-tight mb-4">
              Join Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8">
              Ready to be part of a culture that cares, celebrates, and grows together? Explore our current openings or reach out to our team to start a conversation about your next career chapter.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/careers"
                className="inline-flex items-center gap-2 rounded-full bg-brand-gradient px-8 py-3.5 text-xs font-bold text-white shadow-glow hover:scale-105 transition-all"
              >
                <span>Explore Current Openings</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-8 py-3.5 text-xs font-bold text-foreground hover:bg-muted/40 transition-colors"
              >
                <ImageIcon className="h-4 w-4 text-brand" />
                <span>View Moments &amp; Celebrations</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      <WaveDivider from="dark" to="white" />
    </main>
  );
}
