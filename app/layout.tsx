import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import "./globals.css";
import { footerRoutes, routes, site, siteIds, socialImage } from "@/lib/site";

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

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "zmpMdrkl7mwajZcH2os7sGnYCAX2mZnz_aAXb9iFQko";
const googleAnalyticsId = "G-YK54PPG9WC";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Soul Color Test | What Color Is Your Soul?",
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
  verification: { google: googleVerification },
  openGraph: {
    title: "Soul Color Test | What Color Is Your Soul?",
    description: site.description,
    url: site.url,
    type: "website",
    locale: "en_US",
    siteName: site.name,
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soul Color Test | What Color Is Your Soul?",
    description: site.description,
    images: [socialImage],
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
        "@type": "Offer",
        price: "0",
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
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${googleAnalyticsId}');
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${plexMono.variable}`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <div className="page-shell">
          <header className="site-header">
            <Link className="brand" href="/" aria-label={`${site.name} home`}>
              <span className="brand-mark" aria-hidden="true">SC</span>
              <span>{site.shortName}</span>
            </Link>
            <nav className="nav-links" aria-label="Main navigation">
              {routes.slice(0, 3).map((route) => (
                <Link key={route.path} href={route.path}>
                  {route.label}
                </Link>
              ))}
            </nav>
            <div className="header-actions">
              <Link className="button secondary header-link" href="/sample-report">
                Sample
              </Link>
              <Link className="button primary header-link" href="/#extractor">
                Start
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </header>
          {children}
          <footer className="footer">
            <div className="footer-inner">
              <div className="footer-brand">
                <ShieldCheck size={18} aria-hidden="true" />
                <span>Symbolic soul color reflections, not medical or mental health diagnoses.</span>
              </div>
              <nav className="footer-links" aria-label="Footer navigation">
                {footerRoutes.map((route) => (
                  <Link key={route.path} href={route.path}>
                    {route.label}
                  </Link>
                ))}
              </nav>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
