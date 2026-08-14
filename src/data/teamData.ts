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
    image: "/sunil_kumar_chaturvedi_teams.webp",
    department: "Executive Leadership",
    linkedin: "https://www.linkedin.com/",
    email: "enquiry@acceleronsolutions.io"
  },
  {
    id: "2",
    name: "Meena Chaturvedi",
    role: "Vice Chairperson Gainwell Group",
    bio: "Pioneering enterprise growth, operational excellence, and customer success across SAP, Zoho, and digital transformation initiatives.",
    image: "/meena_chaturvedi_teams.webp",
    department: "Executive Leadership",
    linkedin: "https://www.linkedin.com/",
    email: "enquiry@acceleronsolutions.io"
  },
  {
    id: "3",
    name: "Arindam Hari",
    role: "Director & CEO",
    bio: "Veteran technologist leading enterprise application strategy, global delivery centers, and complex SAP S/4HANA transformations.",
    image: "/Arindam-Hari_teams.webp",
    department: "Executive Leadership",
    linkedin: "https://www.linkedin.com/",
    email: "arindam.hari@acceleronsolutions.io"
  },
  {
    id: "4",
    name: "Rishabh P Nair",
    role: "Director",
    bio: "Architecting cloud-native solutions, Applied AI agents, predictive systems, and high-performance enterprise platforms.",
    image: "/rishabh-p-nair_teamst.webp",
    department: "Technology & AI Leads",
    linkedin: "https://www.linkedin.com/",
    email: "rishabh.nair@acceleronsolutions.io"
  },
  {
    id: "4.5",
    name: "Tanay Khandelwal",
    role: "Director",
    bio: "Driving strategic initiatives and corporate growth at Acceleron Solutions.",
    image: "Tanay_Khandelwal.webp",
    department: "Executive Leadership",
    linkedin: "https://www.linkedin.com/",
    email: "tanay@acceleronsolutions.io"
  }
];
