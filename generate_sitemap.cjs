const fs = require('fs');
const path = require('path');

// Domain configuration (can be overridden with SITE_URL environment variable)
const BASE_URL = (process.env.SITE_URL || 'https://acceleronsolutions.io').replace(/\/+$/, '');
const TODAY = new Date().toISOString().split('T')[0];

// Static core routes with priorities and change frequencies
const staticRoutes = [
  // Homepage
  { path: '/', priority: '1.0', changefreq: 'weekly', lastmod: TODAY },

  // Core Sections
  { path: '/services', priority: '0.9', changefreq: 'weekly', lastmod: TODAY },
  { path: '/products', priority: '0.9', changefreq: 'weekly', lastmod: TODAY },
  { path: '/industries', priority: '0.9', changefreq: 'weekly', lastmod: TODAY },
  { path: '/about', priority: '0.8', changefreq: 'monthly', lastmod: TODAY },
  { path: '/contact', priority: '0.8', changefreq: 'monthly', lastmod: TODAY },
  { path: '/careers', priority: '0.8', changefreq: 'weekly', lastmod: TODAY },
  { path: '/blog', priority: '0.8', changefreq: 'weekly', lastmod: TODAY },
  { path: '/clients', priority: '0.7', changefreq: 'monthly', lastmod: TODAY },
  { path: '/partners', priority: '0.7', changefreq: 'monthly', lastmod: TODAY },
  { path: '/team', priority: '0.7', changefreq: 'monthly', lastmod: TODAY },
  { path: '/news', priority: '0.7', changefreq: 'weekly', lastmod: TODAY },
  { path: '/events', priority: '0.7', changefreq: 'weekly', lastmod: TODAY },
  { path: '/csr', priority: '0.6', changefreq: 'monthly', lastmod: TODAY },
  { path: '/gallery', priority: '0.6', changefreq: 'monthly', lastmod: TODAY },

  // Products
  { path: '/products/suraksha', priority: '0.8', changefreq: 'weekly', lastmod: TODAY },
  { path: '/products/tyre-health', priority: '0.8', changefreq: 'weekly', lastmod: TODAY },
  { path: '/products/qms', priority: '0.8', changefreq: 'weekly', lastmod: TODAY },
  { path: '/products/cwms', priority: '0.8', changefreq: 'weekly', lastmod: TODAY },
  { path: '/products/supplier-portal', priority: '0.8', changefreq: 'weekly', lastmod: TODAY },
  { path: '/products/pjp', priority: '0.8', changefreq: 'weekly', lastmod: TODAY },

  // Industries
  { path: '/industries/mining', priority: '0.8', changefreq: 'monthly', lastmod: TODAY },
  { path: '/industries/discrete-manufacturing', priority: '0.8', changefreq: 'monthly', lastmod: TODAY },
  { path: '/industries/capital-goods', priority: '0.8', changefreq: 'monthly', lastmod: TODAY },
  { path: '/industries/transportation-services-logistics', priority: '0.8', changefreq: 'monthly', lastmod: TODAY },
  { path: '/industries/utilities', priority: '0.8', changefreq: 'monthly', lastmod: TODAY },
  { path: '/industries/engineering-construction-operations', priority: '0.8', changefreq: 'monthly', lastmod: TODAY },

  // Service Hubs
  { path: '/services/sap', priority: '0.85', changefreq: 'weekly', lastmod: TODAY },
  { path: '/services/zoho', priority: '0.85', changefreq: 'weekly', lastmod: TODAY },
  { path: '/services/manageengine', priority: '0.85', changefreq: 'weekly', lastmod: TODAY },
  { path: '/services/it-custom-solutions', priority: '0.85', changefreq: 'weekly', lastmod: TODAY }
];

// Extract dynamic sub-services from servicesData.ts
const servicesFilePath = path.join(__dirname, 'src/data/servicesData.ts');
let dynamicServiceRoutes = [];

if (fs.existsSync(servicesFilePath)) {
  const servicesContent = fs.readFileSync(servicesFilePath, 'utf8');
  const regex = /slug:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*category:\s*"([^"]+)",\s*categorySlug:\s*"([^"]+)"/g;
  let match;
  while ((match = regex.exec(servicesContent)) !== null) {
    dynamicServiceRoutes.push({
      path: `/services/${match[4]}/${match[1]}`,
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: TODAY
    });
  }
}

// Extract dynamic blog posts from blogData.ts
const blogFilePath = path.join(__dirname, 'src/data/blogData.ts');
let dynamicBlogRoutes = [];

if (fs.existsSync(blogFilePath)) {
  const blogContent = fs.readFileSync(blogFilePath, 'utf8');
  const regex = /slug:\s*"([^"]+)"/g;
  let match;
  while ((match = regex.exec(blogContent)) !== null) {
    dynamicBlogRoutes.push({
      path: `/blog/${match[1]}`,
      priority: '0.7',
      changefreq: 'monthly',
      lastmod: TODAY
    });
  }
}

// Combine all routes and ensure uniqueness
const allRoutes = [...staticRoutes, ...dynamicServiceRoutes, ...dynamicBlogRoutes];
const seen = new Set();
const uniqueRoutes = allRoutes.filter(item => {
  if (seen.has(item.path)) return false;
  seen.add(item.path);
  return true;
});

// Build XML string
const xmlEntries = uniqueRoutes
  .map(route => {
    const loc = route.path === '/' ? `${BASE_URL}/` : `${BASE_URL}${route.path}`;
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${route.lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  })
  .join('\n');

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${xmlEntries}
</urlset>
`;

const sitemapOutputPath = path.join(__dirname, 'public/sitemap.xml');
fs.writeFileSync(sitemapOutputPath, sitemapXml, 'utf8');
console.log(`Successfully generated sitemap.xml with ${uniqueRoutes.length} URLs at ${sitemapOutputPath}`);

// Also generate robots.txt if not present or update sitemap pointer
const robotsTxt = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /
Disallow: /admin
Disallow: /admin/
Disallow: /login

# Sitemap location
Sitemap: ${BASE_URL}/sitemap.xml
`;

const robotsOutputPath = path.join(__dirname, 'public/robots.txt');
fs.writeFileSync(robotsOutputPath, robotsTxt, 'utf8');
console.log(`Successfully generated robots.txt at ${robotsOutputPath}`);
