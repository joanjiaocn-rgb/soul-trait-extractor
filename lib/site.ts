export const site = {
  name: "Soul Color Test",
  shortName: "Soul Color Test",
  url: "https://soulcolortest.online",
  description: "Take a free soul color test and discover the color, leading virtue, strengths, relationships, and growth pattern reflected in your everyday choices.",
  keywords: [
    "what color is my soul",
    "what color is your soul",
    "soul color finder",
    "soul color test",
    "what is a soul color",
    "soul shade test",
    "find my soul color",
    "virtue reading",
    "signal reading",
    "self discovery tool",
    "relationship style reading",
    "career signal report",
  ],
};

export const socialImage = {
  url: `${site.url}/opengraph-image`,
  width: 1200,
  height: 630,
  alt: "Soul Color Test color spectrum and title",
};

export const routes = [
  { path: "/", label: "Test" },
  { path: "/what-is-a-soul-color", label: "Color guide" },
  { path: "/sample-report", label: "Sample report" },
];

export const footerRoutes = [
  ...routes,
  { path: "/pricing", label: "Report plans" },
  { path: "/privacy", label: "Privacy" },
  { path: "/terms", label: "Terms" },
];

export const sitemapRoutes = [
  "/",
  "/what-is-a-soul-color",
  "/sample-report",
  "/privacy",
  "/terms",
];

export const siteIds = {
  organization: `${site.url}/#organization`,
  website: `${site.url}/#website`,
  app: `${site.url}/#app`,
};
