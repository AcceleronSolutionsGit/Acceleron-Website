export type CultureCategory =
  | "Innovation & Impact"
  | "People & Celebrations"
  | "Wellness & Care";

export interface CultureEvent {
  id: string;
  folderName: string;
  category: CultureCategory;
  title: string;
  kicker: string;
  tagline: string;
  date: string;
  coverImage: string;
  thumbnails: string[];
  description: string;
  extendedDescription: string;
  stats?: { label: string; value: string }[];
}

export const CULTURE_CATEGORIES: Array<"All Events" | CultureCategory> = [
  "All Events",
  "Innovation & Impact",
  "People & Celebrations",
  "Wellness & Care",
];

export const CULTURE_EVENTS: CultureEvent[] = [
  {
    id: "it-meet-4-0",
    folderName: "IT Meet 4.0 2026",
    category: "Innovation & Impact",
    title: "Tech IT Easy — Acceleron IT Meet 4.0",
    kicker: "Technology & Innovation Summit",
    tagline:
      "Connecting engineering minds to debate, build, and accelerate digital innovation.",
    date: "2026 Annual Meet",
    coverImage: "/culture/IT Meet 4.0 2026/cover.jpg",
    thumbnails: [
      "/culture/IT Meet 4.0 2026/Tech IT Easy - IT Meet 4.0 - 1.jpg",
      "/culture/IT Meet 4.0 2026/Tech IT Easy - IT Meet 4.0 - 2.jpg",
      "/culture/IT Meet 4.0 2026/Tech IT Easy - IT Meet 4.0 - 9.jpg",
      "/culture/IT Meet 4.0 2026/Tech IT Easy - IT Meet 4.0 - 17.jpg",
    ],
    description:
      "Our flagship annual technology symposium brings together cross-functional architects, developers, practice leads, and industry veterans for deep-dive technical sessions, platform demos, and agile problem solving.",
    extendedDescription:
      "From exploring next-gen SAP S/4HANA workflows to applied AI architectures and cloud-native security, IT Meet 4.0 embodies our engineering-first culture—grounded in real operational results.",
    stats: [
      { label: "Attendees", value: "200+" },
      { label: "Tech Tracks", value: "12 Sessions" },
    ],
  },
  {
    id: "womens-day-2026",
    folderName: "Women's Day 2026",
    category: "People & Celebrations",
    title: "Acceleron International Women's Day 2026",
    kicker: "Diversity & Leadership",
    tagline:
      "Honoring our women leaders, engineers, and changemakers shaping modern enterprise technology.",
    date: "March 2026",
    coverImage: "/culture/Women's Day 2026/cover.png",
    thumbnails: [
      "/culture/Women's Day 2026/Women's Day - Acceleron Solutions 2026 1.png",
      "/culture/Women's Day 2026/Women's Day - Acceleron Solutions 2026 2.png",
      "/culture/Women's Day 2026/Women's Day - Acceleron Solutions 2026 3.png",
      "/culture/Women's Day 2026/Women's Day - Acceleron Solutions 2026 5.png",
    ],
    description:
      "At Acceleron Solutions, diversity is not a metric—it is the cornerstone of our creativity and engineering resilience. On International Women's Day, we celebrated the visionary women who lead our delivery hubs, technical practices, and corporate teams.",
    extendedDescription:
      "The day featured inspiring panel discussions on breaking technical barriers, leadership fireside chats, personalized wellness gifts, and interactive team celebrations across Kolkata and Delhi hubs.",
    stats: [
      { label: "Women in Leadership", value: "35%+" },
      { label: "Community Chapters", value: "All Hubs" },
    ],
  },
  {
    id: "sustainability",
    folderName: "Sustainability",
    category: "Innovation & Impact",
    title: "The Sustainability Lens — Green IT & Impact",
    kicker: "Corporate Responsibility & Planet",
    tagline:
      "Embedding environmental stewardship into software architecture and community outreach.",
    date: "Annual Sustainability Drive",
    coverImage: "/culture/Sustainability/cover.png",
    thumbnails: [
      "/culture/Sustainability/Acceleron ROR 1.jpg",
      "/culture/Sustainability/Acceleron ROR 2.jpg",
      "/culture/Sustainability/Acceleron ROR 3.jpg",
      "/culture/Sustainability/Acceleron ROR 4.jpg",
    ],
    description:
      "True engineering excellence considers its ecological footprint. Acceleron Solutions prioritizes sustainable IT practices—optimizing cloud workloads for reduced compute emissions and organizing tangible environmental action.",
    extendedDescription:
      "Our team led plantation drives, sustainable waste reduction programs at our offices, and employee awareness campaigns focused on conscious computing and responsible consumption.",
    stats: [
      { label: "Saplings Planted", value: "500+" },
      { label: "Paperless Workflows", value: "98%" },
    ],
  },
  {
    id: "international-yoga-day-2026",
    folderName: "International Yoga Day 2026",
    category: "Wellness & Care",
    title: "International Yoga Day — Mind, Body & Focus",
    kicker: "Workplace Wellness",
    tagline:
      "Cultivating mindfulness, ergonomic awareness, and holistic health for tech professionals.",
    date: "June 2026",
    coverImage: "/culture/International Yoga Day 2026/cover.jpg",
    thumbnails: [
      "/culture/International Yoga Day 2026/International Yoga Day - Acceleron Solutions 2.jpg",
      "/culture/International Yoga Day 2026/International Yoga Day - Acceleron Solutions 3.jpg",
      "/culture/International Yoga Day 2026/International Yoga Day - Acceleron Solutions 4.jpg",
      "/culture/International Yoga Day 2026/International Yoga Day - Acceleron Solutions 5.jpg",
    ],
    description:
      "In the fast-paced world of digital engineering, sustainable high performance begins with physical vitality and mental tranquility. International Yoga Day at Acceleron united our teams in shared breath and movement.",
    extendedDescription:
      "Led by certified wellness instructors, our Kolkata and Delhi teams experienced guided asanas, desk yoga stretches tailored for software engineers, and breathwork techniques to relieve fatigue.",
    stats: [
      { label: "Participating Teams", value: "100%" },
      { label: "Wellness Sessions", value: "Interactive" },
    ],
  },
  {
    id: "friendship-day-2026",
    folderName: "Friendship Day 2026",
    category: "People & Celebrations",
    title: "Friendship Day — The Power of Peer Connections",
    kicker: "Team Bonding & Camaraderie",
    tagline:
      "Celebrating the trust, laughter, and unbreakable bonds that make Acceleron feel like family.",
    date: "August 2026",
    coverImage: "/culture/Friendship Day 2026/cover.jpg",
    thumbnails: [
      "/culture/Friendship Day 2026/Friendship Day - Acceleron Solutions 1.jpg",
      "/culture/Friendship Day 2026/Friendship Day - Acceleron Solutions 2.jpg",
      "/culture/Friendship Day 2026/Friendship Day - Acceleron Solutions 3.jpg",
      "/culture/Friendship Day 2026/Friendship Day - Acceleron Solutions 4.jpg",
    ],
    description:
      "Beyond sprint deadlines and architecture diagrams, our culture is defined by genuine friendship. Friendship Day is a cherished annual tradition where colleagues exchange gratitude, appreciation bands, and personal memories.",
    extendedDescription:
      "With lively photo booths, music, team games, and peer appreciation wall messages, the event was a heartfelt celebration of the human connection at the heart of Acceleron.",
    stats: [
      { label: "Appreciation Notes", value: "350+" },
      { label: "Participation", value: "All Hubs" },
    ],
  },
  {
    id: "happy-holi-2026",
    folderName: "Happy Holi 2026",
    category: "People & Celebrations",
    title: "Happy Holi — Colors of Joy & Togetherness",
    kicker: "Cultural Celebrations & Joy",
    tagline:
      "Spreading colors, warmth, and festive cheer across our offices and teams.",
    date: "March 2026",
    coverImage: "/culture/Happy Holi 2026/cover.jpg",
    thumbnails: [
      "/culture/Happy Holi 2026/Happy Holi Acceleron Solutions 1.jpg",
      "/culture/Happy Holi 2026/Happy Holi Acceleron Solutions 2.png",
      "/culture/Happy Holi 2026/Happy Holi Acceleron Solutions 3.png",
      "/culture/Happy Holi 2026/Happy Holi Acceleron Solutions 4.png",
    ],
    description:
      "Holi at Acceleron was an explosion of color, rhythm, and joy. Teams gathered in vibrant ethnic wear to play with organic gulal, exchange traditional sweets, and celebrate the arrival of spring.",
    extendedDescription:
      "Festivities featured traditional music, festive gujiyas and thandai, team dance performances, and vibrant memories captured across all our delivery centers.",
    stats: [
      { label: "Eco-Friendly Colors", value: "100% Organic" },
      { label: "Delivery Centers", value: "Pan-India" },
    ],
  },
  {
    id: "world-health-day-2026",
    folderName: "World Health Day 2026",
    category: "Wellness & Care",
    title: "World Health Day — Prioritizing Health & Well-being",
    kicker: "Health & Vitality",
    tagline:
      "Promoting physical fitness, comprehensive checkups, and proactive health habits.",
    date: "April 2026",
    coverImage: "/culture/World Health Day 2026/cover.png",
    thumbnails: [
      "/culture/World Health Day 2026/World Health Day Acceleron Solutions 1.jpg",
      "/culture/World Health Day 2026/World Health Day Acceleron Solutions 2.jpg",
      "/culture/World Health Day 2026/World Health Day Acceleron Solutions 3.jpg",
      "/culture/World Health Day 2026/World Health Day Acceleron Solutions 4.jpg",
    ],
    description:
      "Health is our greatest asset. On World Health Day, Acceleron hosted a comprehensive on-site wellness camp featuring general health screenings, eye tests for digital workers, and ergonomic consultations.",
    extendedDescription:
      "Medical experts conducted one-on-one health consultations, shared lifestyle recommendations, and provided personalized guidance to help team members stay active and fit.",
    stats: [
      { label: "Health Screenings", value: "150+" },
      { label: "Medical Partners", value: "Certified" },
    ],
  },
  {
    id: "session-with-psychologist-2026",
    folderName: "Session with Psychologist  2026",
    category: "Wellness & Care",
    title: "Mental Wellness — Session with Senior Psychologist",
    kicker: "Mental Health & Empathy",
    tagline:
      "Creating an open, supportive culture where mental wellness and emotional health come first.",
    date: "2026 Wellness Series",
    coverImage: "/culture/Session with Psychologist  2026/cover.png",
    thumbnails: [],
    description:
      "Mental health is just as critical as physical health. As part of our continuous employee care programs, Acceleron hosted an interactive workshop with an esteemed senior psychologist to discuss stress management, work-life boundaries, and emotional resilience.",
    extendedDescription:
      "The session provided a safe, confidential space for team members to ask questions, learn cognitive techniques for workplace mindfulness, and understand the confidential support resources available at Acceleron.",
    stats: [
      { label: "Confidentiality", value: "100%" },
      { label: "Support Model", value: "Ongoing" },
    ],
  },
];
