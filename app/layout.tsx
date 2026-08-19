import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import { ArrowRight, ShieldCheck } from "lucide-react";
import "./globals.css";
import { routes, site, siteIds } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-mono",
});

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Soul Virtues Extractor | Find Your Soul Color Profile",
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  keywords: site.keywords,
  authors: [{ name: site.name }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
  alternates: {
    canonical: site.url,
  },
  verification: googleVerification ? { google: googleVerification } : undefined,
  openGraph: {
    title: "Soul Virtues Extractor | Find Your Soul Color Profile",
    description: site.description,
    url: site.url,
    type: "website",
    locale: "en_US",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: "Soul Virtues Extractor | Find Your Soul Color Profile",
    description: site.description,
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": siteIds.organization,
      name: site.name,
      url: site.url,
    },
    {
      "@type": "WebSite",
      "@id": siteIds.website,
      url: site.url,
      name: site.name,
      description: site.description,
      publisher: { "@id": siteIds.organization },
      inLanguage: "en-US",
    },
    {
      "@type": "SoftwareApplication",
      "@id": siteIds.app,
      name: site.name,
      applicationCategory: "LifestyleApplication",
      operatingSystem: "Web",
      url: site.url,
      offers: {
        "@type": "AggregateOffer",
        lowPrice: "0",
        highPrice: "29",
        priceCurrency: "USD",
      },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script defer data-domain="soulcolortest.online" src="https://plausible.shipsolo.io/js/script.js" />
      </head>
      <body className={`${inter.variable} ${plexMono.variable}`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <div className="page-shell">
          <header className="site-header">
            <a className="brand" href="/" aria-label={`${site.name} home`}>
              <span className="brand-mark" aria-hidden="true">SV</span>
              <span>{site.shortName}</span>
            </a>
            <nav className="nav-links" aria-label="Main navigation">
              {routes.slice(0, 3).map((route) => (
                <a key={route.path} href={route.path}>
                  {route.label}
                </a>
              ))}
            </nav>
            <div className="header-actions">
              <a className="button secondary header-link" href="/sample-report">
                Sample
              </a>
              <a className="button primary header-link" href="/#extractor">
                Start
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </div>
          </header>
          {children}
          <footer className="footer">
            <div className="footer-inner">
              <div className="footer-brand">
                <ShieldCheck size={18} aria-hidden="true" />
                <span>Soul virtue reports, not medical or mental health diagnosis.</span>
              </div>
              <nav className="footer-links" aria-label="Footer navigation">
                {routes.map((route) => (
                  <a key={route.path} href={route.path}>
                    {route.label}
                  </a>
                ))}
              </nav>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
