import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, '..', 'src', 'data', 'servicesData.ts');
let content = fs.readFileSync(filePath, 'utf-8');

const replacements = [
  // SAP
  { pattern: /slug: "sap-ams",[\s\S]*?image: "(https:\/\/images\.unsplash\.com[^"]+)"/, replace: 'image: "/SAP_AMS_Banner.png"' },
  { pattern: /slug: "sap-s-4hana-implementation",[\s\S]*?image: "(https:\/\/images\.unsplash\.com[^"]+)"/, replace: 'image: "/SAP_Implementation_Banner.png"' },
  { pattern: /slug: "sap-integration",[\s\S]*?image: "(https:\/\/images\.unsplash\.com[^"]+)"/, replace: 'image: "/SAP_Integration_Banner.png"' },
  { pattern: /slug: "rise-with-s-4hana-implementation",[\s\S]*?image: "(https:\/\/images\.unsplash\.com[^"]+)"/, replace: 'image: "/SAP_Implementation_Banner.png"' },
  { pattern: /slug: "sap-migration-to-cloud",[\s\S]*?image: "(https:\/\/images\.unsplash\.com[^"]+)"/, replace: 'image: "/SAP_Implementation_Banner.png"' },
  { pattern: /slug: "sap-custom-development",[\s\S]*?image: "(https:\/\/images\.unsplash\.com[^"]+)"/, replace: 'image: "/SAP_Implementation_Banner.png"' },
  { pattern: /slug: "sap-technical-upgrade",[\s\S]*?image: "(https:\/\/images\.unsplash\.com[^"]+)"/, replace: 'image: "/SAP_Implementation_Banner.png"' },
  { pattern: /slug: "sap-resource-augmentation",[\s\S]*?image: "(https:\/\/images\.unsplash\.com[^"]+)"/, replace: 'image: "/SAP_Implementation_Banner.png"' },
  { pattern: /slug: "sap-others",[\s\S]*?image: "(https:\/\/images\.unsplash\.com[^"]+)"/, replace: 'image: "/SAP_Implementation_Banner.png"' },
  
  // Zoho
  { pattern: /slug: "zoho-crm",[\s\S]*?image: "(https:\/\/images\.unsplash\.com[^"]+)"/, replace: 'image: "/ZOHO_CRM_Banner.png"' },
  { pattern: /slug: "zoho-books",[\s\S]*?image: "(https:\/\/images\.unsplash\.com[^"]+)"/, replace: 'image: "/ZOHO_CRM_Banner.png"' },
  { pattern: /slug: "zoho-hrms-people-and-payroll",[\s\S]*?image: "(https:\/\/images\.unsplash\.com[^"]+)"/, replace: 'image: "/Zoho_HRMS_Banner.png"' },
  { pattern: /slug: "zoho-erp",[\s\S]*?image: "(https:\/\/images\.unsplash\.com[^"]+)"/, replace: 'image: "/ZOHO_CRM_Banner.png"' },
  { pattern: /slug: "zoho-mail",[\s\S]*?image: "(https:\/\/images\.unsplash\.com[^"]+)"/, replace: 'image: "/ZOHO_CRM_Banner.png"' },

  // ManageEngine
  { pattern: /slug: "manageengine-itsm",[\s\S]*?image: "(https:\/\/images\.unsplash\.com[^"]+)"/, replace: 'image: "/Manage_Engine_Banner.png"' },
  { pattern: /slug: "manageengine-op-manager",[\s\S]*?image: "(https:\/\/images\.unsplash\.com[^"]+)"/, replace: 'image: "/Manage_Engine_Banner.png"' },
  { pattern: /slug: "manageengine-endpoint-control",[\s\S]*?image: "(https:\/\/images\.unsplash\.com[^"]+)"/, replace: 'image: "/Manage_Engine_Banner.png"' },
  { pattern: /slug: "manageengine-mdm-plus",[\s\S]*?image: "(https:\/\/images\.unsplash\.com[^"]+)"/, replace: 'image: "/Manage_Engine_Banner.png"' },

  // IT Custom Solutions
  { pattern: /slug: "it-infrastructure-services",[\s\S]*?image: "(https:\/\/images\.unsplash\.com[^"]+)"/, replace: 'image: "/Threatcorp_Banner.png"' },
  { pattern: /slug: "custom-software-application-development",[\s\S]*?image: "(https:\/\/images\.unsplash\.com[^"]+)"/, replace: 'image: "/Threatcorp_Banner.png"' },
  { pattern: /slug: "cyber-security",[\s\S]*?image: "(https:\/\/images\.unsplash\.com[^"]+)"/, replace: 'image: "/Threatcorp_Banner.png"' }
];

let newContent = content;

replacements.forEach(r => {
  newContent = newContent.replace(r.pattern, (match, p1) => {
    return match.replace(`image: "${p1}"`, r.replace);
  });
});

fs.writeFileSync(filePath, newContent);
console.log('Updated servicesData.ts');
