export const site = {
  name: "Soul Color Test",
  shortName: "Soul Color Test",
  url: "https://soulcolortest.online",
  ownerUrl: "https://github.com/joanjiaocn-rgb",
  repoUrl: "https://github.com/joanjiaocn-rgb/soul-trait-extractor",
  description: "Take a free soul color test and discover the color, leading virtue, strengths, relationships, and growth pattern reflected in your everyday choices.",
  keywords: [
    "what color is my soul",
    "what color is your soul",
    "soul color quiz",
    "soul color test free",
    "soul color meanings",
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

export const siteDates = {
  published: "2026-08-30",
  modified: "2026-09-08",
  publishedDisplay: "August 30, 2026",
  modifiedDisplay: "September 8, 2026",
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
  { path: "/soul-color-quiz", label: "Soul color quiz" },
  { path: "/soul-color-meanings", label: "Color meanings" },
  { path: "/pricing", label: "Report plans" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
  { path: "/privacy", label: "Privacy" },
  { path: "/terms", label: "Terms" },
];

export const sitemapRoutes = [
  "/",
  "/soul-color-quiz",
  "/soul-color-meanings",
  "/what-is-a-soul-color",
  "/sample-report",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
];

export const siteIds = {
  organization: `${site.url}/#organization`,
  website: `${site.url}/#website`,
  app: `${site.url}/#app`,
  repository: `${site.url}/#repository`,
};
