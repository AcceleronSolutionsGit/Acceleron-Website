export interface CsrStat {
  label: string;
  value: string;
}

export interface CsrInitiative {
  id: string;
  title: string;
  kicker: string;
  badge?: string;
  partner?: string;
  date?: string;
  tagline: string;
  description: string;
  extendedDescription?: string;
  highlights: string[];
  stats?: CsrStat[];
  mediaType: "video" | "collage" | "single";
  videoUrl?: string;
  coverImage?: string;
  thumbnails?: string[];
}

export const CSR_INITIATIVES: CsrInitiative[] = [
  {
    id: "clothes-essentials",
    title: "Pre-Loved Clothes & Essentials Donation Drive",
    kicker: "Sustainable Reuse",
    badge: "Community Outreach",
    partner: "In Partnership with Goonj",
    date: "Continuous Initiative",
    tagline: "Small Acts, Big Change — Turning surplus essentials into warmth and dignity.",
    description:
      "An ongoing office initiative that encourages our team members to declutter with purpose. By contributing pre-loved clothing, books, and daily essentials, we promote sustainable reuse while providing meaningful material support to local families in need.",
    extendedDescription:
      "Partnered with Goonj, our teams actively gather, sort, and package high-quality wearable clothes and household essentials to reach underserved communities across urban and rural belts with zero waste.",
    highlights: [
      "Promotes circular economy and sustainable textile reuse",
      "Regular doorstep drops to verified community shelter homes",
      "Active employee engagement across all office locations",
      "Comprehensive sorting, quality-checking, and hygiene packing drives",
    ],
    stats: [
      { label: "Community Partner", value: "Goonj" },
      { label: "Drive Frequency", value: "Year-Round" },
    ],
    mediaType: "video",
    videoUrl: "/csr/preloved-clothes-donation.mp4",
    coverImage: "/csr/preloved-clothes-poster.webp",
  },
  {
    id: "blood-donation",
    title: "Leadership in Action: Blood Donation Drive",
    kicker: "Life-Saving Cause",
    badge: "Landmark Event",
    partner: "Philanthropic Technical Association & AVBD",
    date: "21st February 2026",
    tagline: "True leadership extends far beyond boardrooms and into the heart of community welfare.",
    description:
      "On 21st February 2026, we organized a landmark Blood Donation Drive in association with the Philanthropic Technical Association and Associates of Voluntary Blood Donors, West Bengal. This initiative brought together our team and esteemed industry leaders who stepped forward to contribute to a life-saving cause.",
    extendedDescription:
      "What made this drive truly special was the active participation of several CIOs and senior executives who led by example—demonstrating that true leadership extends far beyond boardrooms and into society. Their involvement added immense inspiration to the initiative, reinforcing that even small acts carry the power to save lives and inspire communities.",
    highlights: [
      "Active participation of 20+ CIOs and senior corporate leaders leading by example",
      "Over 100+ units of life-saving blood collected for regional blood banks",
      "Organized with Philanthropic Technical Association & AVBD, West Bengal",
      "Certified clinical stations ensuring utmost donor hygiene and post-donation care",
    ],
    stats: [
      { label: "Leaders Joined", value: "20+ CIOs" },
      { label: "Life-Saving Impact", value: "100+ Donors" },
    ],
    mediaType: "collage",
    coverImage:
      "/csr/blood donation/Blood-donation-Collaboration-with-Philanthropic-Technical-Association-Acceleron-Solutions-1.jpg.webp",
    thumbnails: [
      "/csr/blood donation/Blood-donation-Acceleron-Solutions-1.png.webp",
      "/csr/blood donation/Blood-donation-Acceleron-Solutions-2.png.webp",
      "/csr/blood donation/Blood-donation-Acceleron-Solutions-3.png.webp",
    ],
  },
  {
    id: "winter-warmth",
    title: "Winter Warmth: Blanket & Winter Clothing Drive for Elderly People",
    kicker: "Elder Dignity & Care",
    badge: "Seasonal Warmth Campaign",
    partner: "Community Elder Care",
    date: "Annual Winter Drive",
    tagline: "Delivering warmth, comfort, and heartfelt human connection to our senior citizens.",
    description:
      "Winters can be exceptionally harsh for vulnerable elderly populations. Our dedicated seasonal warmth drives focus on gathering and distributing warm blankets and woolens directly to senior citizens in our community, offering comfort, dignity, and care during the coldest months.",
    extendedDescription:
      "Acceleron volunteers personally visit community elderly care facilities and unhoused senior shelters, spending quality time, offering heartfelt conversations, and distributing high-grade winter blankets.",
    highlights: [
      "High-grade thermal blankets and heavy winter woolens distributed",
      "Direct visits and care conversations with senior citizens",
      "Carefully mapped outreach to unhoused elderly individuals",
      "Compassionate employee-led volunteer distribution teams",
    ],
    stats: [
      { label: "Beneficiaries", value: "Senior Citizens" },
      { label: "Care Factor", value: "100% Direct" },
    ],
    mediaType: "collage",
    coverImage:
      "/csr/winter clothes/Winter-Cloths-to-Elderly-People-CSR-Acceleron-Solutions-1.png.webp",
    thumbnails: [
      "/csr/winter clothes/Winter-Cloths-to-Elderly-People-CSR-Acceleron-Solutions-2.png.webp",
      "/csr/winter clothes/Winter-Cloths-to-Elderly-People-CSR-Acceleron-Solutions-3.png.webp",
      "/csr/winter clothes/Winter-Cloths-to-Elderly-People-CSR-Acceleron-Solutions-4.png.webp",
      "/csr/winter clothes/Winter-Cloths-to-Elderly-People-CSR-Acceleron-Solutions-5.png.webp",
    ],
  },
  {
    id: "food-drives",
    title: "Nourishing Communities: Food Donation Drives",
    kicker: "Food Security",
    badge: "Nutritional Essentials",
    partner: "Local Community Outposts",
    date: "Direct Food Relief",
    tagline: "Wholesome meals and nutritional essentials for daily-wage households.",
    description:
      "Food security is a fundamental human right. Through regular community food distribution campaigns, our teams collect and distribute nutritional essentials to underprivileged neighborhoods, ensuring that wholesome meals reach those who need them most.",
    extendedDescription:
      "Working closely with verified local community distribution partners, Acceleron volunteers pack and supply balanced nutrition kits containing rice, lentils, healthy cooking oils, and fortified staples to daily-wage households.",
    highlights: [
      "Nutrient-rich staple kits distributed to daily-wage households",
      "Partnerships with local community distribution centers",
      "Direct volunteer participation in packaging and field drives",
      "Prioritized nutritional support for families with young children and seniors",
    ],
    stats: [
      { label: "Core Pillar", value: "Zero Hunger" },
      { label: "Relief Kits", value: "Nutrient-Rich" },
    ],
    mediaType: "single",
    coverImage: "/csr/food donation/Food Donation - Acceleron Solution.webp",
    thumbnails: [],
  },
];

export const CSR_METRICS = [
  { value: "100%", label: "Employee-Driven Participation", desc: "Grassroots collective action across teams" },
  { value: "20+", label: "CIOs & Senior Leaders", desc: "Leading by example in our blood donation drive" },
  { value: "4+", label: "Ongoing Welfare Pillars", desc: "Health, warmth, food security & education" },
  { value: "365", label: "Days of Commitment", desc: "CSR woven into our everyday corporate fabric" },
];

