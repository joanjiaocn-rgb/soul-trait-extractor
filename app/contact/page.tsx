import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Github, MessageCircleQuestion, ShieldCheck } from "lucide-react";
import { site, siteDates, siteIds, socialImage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Soul Color Test",
  description: "Contact Soul Color Test through its public project repository for feedback, corrections, accessibility notes, or site questions.",
  alternates: { canonical: `${site.url}/contact` },
  openGraph: {
    title: "Contact Soul Color Test",
    description: "Find the public contact channel for Soul Color Test.",
    url: `${site.url}/contact`,
    type: "article",
    images: [socialImage],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${site.url}/contact#webpage`,
  url: `${site.url}/contact`,
  name: "Contact Soul Color Test",
  description: metadata.description,
  isPartOf: { "@id": siteIds.website },
  about: { "@id": siteIds.organization },
  datePublished: siteDates.published,
  dateModified: siteDates.modified,
  inLanguage: "en-US",
  mainEntity: { "@id": siteIds.organization },
};

export default function ContactPage() {
  return (
    <main>
      <section className="page-copy guide-hero">
        <span className="section-kicker">Contact</span>
        <h1>Have a correction or a better question?</h1>
        <p>Use the public project repository to report a broken link, suggest an accessibility improvement, or ask about how the test works.</p>
        <p className="article-meta">Soul Color Test | Updated {siteDates.display}</p>
      </section>

      <section className="guide-section" aria-labelledby="contact-options-heading">
        <div className="guide-section-heading"><span className="section-kicker mono">PUBLIC CHANNEL</span><h2 id="contact-options-heading">Start with the project repository.</h2></div>
        <div className="guide-copy"><article className="guide-contact-option"><Github size={22} aria-hidden="true" /><div><h3>GitHub project</h3><p>Open the repository to review the source, report an issue, or leave feedback where it can be tracked publicly.</p><a href={site.repoUrl} target="_blank" rel="noreferrer">Open the Soul Color Test repository <ArrowRight size={15} aria-hidden="true" /></a></div></article><article className="guide-contact-option"><MessageCircleQuestion size={22} aria-hidden="true" /><div><h3>What to include</h3><p>Tell us the page URL, device or browser, what you expected, and what happened. Do not include private quiz answers or sensitive personal information.</p></div></article><div className="guide-note"><ShieldCheck size={19} aria-hidden="true" /><p><strong>Privacy first:</strong> there is no account or private support inbox on this site. Quiz answers remain in your browser.</p></div></div>
      </section>

      <section className="guide-cta"><div><span className="section-kicker">Need the test?</span><h2>Return to the color questions.</h2><p>Choose the Quick Test for a two-minute first read or Deep Test for a more varied reflection.</p></div><Link className="button primary" href="/#extractor">Take the test <ArrowRight size={16} aria-hidden="true" /></Link></section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  );
}
