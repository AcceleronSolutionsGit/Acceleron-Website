export type GalleryCategory =
  | "Kolkata HQ (Salt Lake Sector V)"
  | "Delhi NCR Office (Janpath)"
  | "Team Culture & Events"
  | "Technology Summits";

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  title: string;
  caption?: string;
  location?: string;
};

export const GALLERY_ITEMS: GalleryItem[] = [
  // Kolkata HQ
  {
    id: "kol-1",
    src: "/Office Entrace Photo.JPG",
    alt: "Kolkata HQ Reception & Entrance",
    category: "Kolkata HQ (Salt Lake Sector V)",
    title: "Reception & Visitor Gallery",
    caption: "State-of-the-art entrance welcoming global enterprise clients and technology partners.",
    location: "3rd Floor, STPI IT Park, Sector V, Salt Lake, Kolkata"
  },
  {
    id: "kol-2",
    src: "/Inaguration Photo.JPG",
    alt: "Grand Inauguration Ceremony at Kolkata HQ",
    category: "Kolkata HQ (Salt Lake Sector V)",
    title: "Inauguration Ceremony",
    caption: "Executive ribbon cutting inaugurating Acceleron's advanced digital center of excellence.",
    location: "STPI IT Park, Sector V, Salt Lake, Kolkata"
  },
  {
    id: "kol-3",
    src: "/Office Photo 1.JPG",
    alt: "Collaborative Open Workstations in Kolkata",
    category: "Kolkata HQ (Salt Lake Sector V)",
    title: "Collaborative Engineering Bay",
    caption: "High-throughput workstations designed for cross-functional scrum teams and cloud architects.",
    location: "Kolkata Delivery Center"
  },
  {
    id: "kol-4",
    src: "/Office Photo 2.JPG",
    alt: "Modern Meeting Suites & Innovation Pods",
    category: "Kolkata HQ (Salt Lake Sector V)",
    title: "Strategy & Innovation Pods",
    caption: "Equipped with immersive hybrid conferencing and interactive architecture ideation screens.",
    location: "Kolkata Delivery Center"
  },

  // Delhi NCR Office
  {
    id: "del-1",
    src: "/Office Photo 1.JPG",
    alt: "Delhi NCR Executive Hub at Janpath",
    category: "Delhi NCR Office (Janpath)",
    title: "Executive Advisory Suite",
    caption: "Central Delhi office delivering strategic consultation for North India enterprise accounts.",
    location: "801-802 Kailash Building, 26 KG Marg, Janpath, Central Delhi"
  },
  {
    id: "del-2",
    src: "/Office Photo 2.JPG",
    alt: "Delhi NCR Client Briefing Center",
    category: "Delhi NCR Office (Janpath)",
    title: "Client Briefing Center",
    caption: "Dedicated executive briefing room for SAP transformation discovery and roadmapping.",
    location: "Kailash Building, Janpath, New Delhi"
  },

  // Technology Summits
  {
    id: "sum-1",
    src: "/Arindam Hari Speaking.JPG",
    alt: "Arindam Hari Keynote Address",
    category: "Technology Summits",
    title: "Enterprise Leadership Keynote",
    caption: "Director & CEO Arindam Hari discussing SAP modernization and operational speed at the summit.",
    location: "Enterprise Tech Leadership Summit"
  },
  {
    id: "sum-2",
    src: "/Meena Chaturvedi Speaking.JPG",
    alt: "Meena Chaturvedi Keynote Speech",
    category: "Technology Summits",
    title: "Executive Keynote Address",
    caption: "Meena Chaturvedi delivering insights on customer lifecycle transformation and people-first culture.",
    location: "Industry Leadership Forum"
  },
  {
    id: "sum-3",
    src: "/Rishabh Nair Speaking.JPG",
    alt: "Rishabh Nair AI Architecture Talk",
    category: "Technology Summits",
    title: "Applied AI & Cloud Session",
    caption: "Director Rishabh P Nair sharing engineering breakthroughs in edge telematics and cognitive workflows.",
    location: "Applied AI & Cloud Symposium"
  },
  {
    id: "sum-4",
    src: "/Sunik Kumar Chaturvedi Speaking.JPG",
    alt: "Sunil Kumar Chaturvedi Industry Vision Talk",
    category: "Technology Summits",
    title: "Industrial Transformation Vision",
    caption: "Chairman Sunil Kumar Chaturvedi outlining the convergence of industrial heritage with digital scale.",
    location: "Global Industry Leaders Forum"
  },
  {
    id: "sum-5",
    src: "/Excon pic 1.jpg",
    alt: "Acceleron Stall at EXCON Exhibition",
    category: "Technology Summits",
    title: "EXCON 2024 Showcase",
    caption: "Live demonstrations of Suraksha and Tyre Health Management IoT systems to global heavy industry delegates.",
    location: "BIEC, Bengaluru"
  },
  {
    id: "sum-6",
    src: "/Excon pic 2.jpg",
    alt: "Team EXCON Partner Interactions",
    category: "Technology Summits",
    title: "EXCON Partner Demonstrations",
    caption: "Engaging delegates with live edge device telemetry and work order optimization workflows.",
    location: "Stall OD 4A01, EXCON"
  },

  // Team Culture & Events
  {
    id: "cul-1",
    src: "/IMG_20250704_172405529_HDR_AE.jpg",
    alt: "Team Building Outdoor Wellness Retreat",
    category: "Team Culture & Events",
    title: "Annual Team Retreat & Wellness",
    caption: "Outdoor retreat uniting team members for mindful rejuvenation, sports, and team bonding.",
    location: "Acceleron Wellness Retreat"
  },
  {
    id: "cul-2",
    src: "/DSC03909.JPG",
    alt: "Acceleron Excellence Awards Night",
    category: "Team Culture & Events",
    title: "Annual Excellence Awards Night",
    caption: "Honoring outstanding engineering contributions, customer champion awards, and cultural values.",
    location: "Grand Annual Gala"
  },
  {
    id: "cul-3",
    src: "/DSC03626.JPG",
    alt: "Acceleron Cares Blood Donation & Community Drive",
    category: "Team Culture & Events",
    title: "Acceleron Cares Community Drive",
    caption: "CIOs and Acceleron employees volunteering together for our landmark blood donation drive.",
    location: "Kolkata HQ Community Camp"
  },
  {
    id: "cul-4",
    src: "/IMG_20250620_083216430_HDR_AE.jpg",
    alt: "Roots of Responsibility Tree Plantation",
    category: "Team Culture & Events",
    title: "Roots of Responsibility Plantation",
    caption: "Acceleron team members planting saplings to drive environmental consciousness and a greener future.",
    location: "Environmental Stewardship Drive"
  },
  {
    id: "cul-5",
    src: "/DSC03610.JPG",
    alt: "Interactive Engineering Workshop",
    category: "Team Culture & Events",
    title: "Tech Innovation Hack-Day",
    caption: "Collaborative sprint sessions solving complex customer challenges through rapid prototyping.",
    location: "Acceleron Innovation Lab"
  },
  {
    id: "cul-6",
    src: "/DSC03936.JPG",
    alt: "Team Celebrations and Partner Appreciation",
    category: "Team Culture & Events",
    title: "Partner & Milestone Celebration",
    caption: "Celebrating project milestones, customer go-lives, and festive traditions as one family.",
    location: "Acceleron Social Hub"
  }
];
