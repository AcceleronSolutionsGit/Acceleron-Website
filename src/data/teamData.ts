export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  department: "Executive Leadership" | "Enterprise Practice Leads" | "Technology & AI Leads";
  linkedin?: string;
  email?: string;
};

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "1",
    name: "Sunil Kumar Chaturvedi",
    role: "Chairman & Executive Director",
    bio: "Over 35 years of industrial, government, and technology leadership. Driving strategic direction and growth across global operations.",
    image: "/Sunik Kumar Chaturvedi Speaking.JPG",
    department: "Executive Leadership",
    linkedin: "https://www.linkedin.com/",
    email: "enquiry@acceleronsolutions.io"
  },
  {
    id: "2",
    name: "Meena Chaturvedi",
    role: "Managing Director",
    bio: "Pioneering enterprise growth, operational excellence, and customer success across SAP, Zoho, and digital transformation initiatives.",
    image: "/Meena Chaturvedi Speaking.JPG",
    department: "Executive Leadership",
    linkedin: "https://www.linkedin.com/",
    email: "enquiry@acceleronsolutions.io"
  },
  {
    id: "3",
    name: "Arindam Hari",
    role: "Chief Executive Officer & Practice Lead",
    bio: "Veteran technologist leading enterprise application strategy, global delivery centers, and complex SAP S/4HANA transformations.",
    image: "/Arindam Hari Speaking.JPG",
    department: "Executive Leadership",
    linkedin: "https://www.linkedin.com/",
    email: "arindam.hari@acceleronsolutions.io"
  },
  {
    id: "4",
    name: "Rishabh Nair",
    role: "Chief Technology Officer & Head of AI",
    bio: "Architecting cloud-native solutions, Applied AI agents, predictive systems, and high-performance enterprise platforms.",
    image: "/Rishabh Nair Speaking.JPG",
    department: "Technology & AI Leads",
    linkedin: "https://www.linkedin.com/",
    email: "rishabh.nair@acceleronsolutions.io"
  },
  {
    id: "5",
    name: "Enterprise Solutions Lead",
    role: "Head of SAP S/4HANA Practice",
    bio: "Directing 100+ certified SAP functional and technical consultants delivering RISE with SAP and cloud migrations.",
    image: "/Employee 1.JPG",
    department: "Enterprise Practice Leads",
    linkedin: "https://www.linkedin.com/",
    email: "sap.practice@acceleronsolutions.io"
  },
  {
    id: "6",
    name: "Global Delivery Director",
    role: "Head of Cloud & Enterprise Services",
    bio: "Leading multi-region delivery across USA, APAC, and India centers with focus on CRM excellence and cloud security.",
    image: "/Employee 2.JPG",
    department: "Enterprise Practice Leads",
    linkedin: "https://www.linkedin.com/",
    email: "delivery@acceleronsolutions.io"
  }
];
