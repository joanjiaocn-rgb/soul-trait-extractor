import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Github, ShieldCheck } from "lucide-react";
import { site, siteDates, siteIds, socialImage } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Soul Color Test",
  description: "Learn who publishes Soul Color Test, how the reflective quiz works, and why its results are designed as prompts rather than diagnoses.",
  alternates: { canonical: `${site.url}/about` },
  openGraph: {
    title: "About Soul Color Test",
    description: "Learn how Soul Color Test turns everyday choices into a symbolic color reflection.",
    url: `${site.url}/about`,
    type: "article",
    images: [socialImage],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${site.url}/about#webpage`,
      url: `${site.url}/about`,
      name: "About Soul Color Test",
      description: metadata.description,
      isPartOf: { "@id": siteIds.website },
      about: { "@id": siteIds.organization },
      datePublished: siteDates.published,
      dateModified: siteDates.modified,
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": siteIds.organization,
      name: site.name,
      url: site.url,
      sameAs: [site.ownerUrl],
    },
  ],
};

export default function AboutPage() {
  return (
    <main>
      <section className="page-copy guide-hero">
        <span className="section-kicker">About</span>
        <h1>A small test for noticing your patterns.</h1>
        <p>Soul Color Test is a free web quiz for symbolic self-reflection. It uses everyday choices to give four recurring virtues a memorable color language.</p>
        <p className="article-meta">By Soul Color Test | Published {siteDates.display} | Updated {siteDates.display}</p>
      </section>

      <section className="guide-section" aria-labelledby="purpose-heading">
        <div className="guide-section-heading"><span className="section-kicker mono">01 / PURPOSE</span><h2 id="purpose-heading">What is this site for?</h2></div>
        <div className="guide-copy"><p>The test is designed to help you pause, recognize a familiar way of responding, and carry one useful question into real life. A result can be interesting without needing to define you.</p><p>The four colors represent curiosity, integrity, kindness, and determination. Your result reflects the answers you chose in this session, so it is better understood as a snapshot than a permanent identity.</p><div className="guide-note"><ShieldCheck size={19} aria-hidden="true" /><p><strong>Our boundary:</strong> this is entertainment and self-reflection content, not a medical, mental health, hiring, or diagnostic assessment.</p></div></div>
      </section>

      <section className="guide-section" aria-labelledby="method-heading">
        <div className="guide-section-heading"><span className="section-kicker mono">02 / METHOD</span><h2 id="method-heading">How are results made?</h2></div>
        <div className="guide-copy"><p>Quick mode maps seven choices. Deep mode maps sixteen. Each choice adds local scoring weight to four dimensions: depth, clarity, connection, and momentum.</p><p>The highest dimension becomes the primary color and the next highest becomes the supporting shade. The calculation runs in your browser, and the quiz answers are saved locally so you can continue on the same device.</p></div>
      </section>

      <section className="guide-cta"><div><span className="section-kicker">Explore the work</span><h2>Read the source or take the test.</h2><p>The public repository contains the site code and the scoring implementation.</p></div><div className="hero-actions"><a className="button secondary" href={site.repoUrl} target="_blank" rel="noreferrer"><Github size={16} aria-hidden="true" /> View source <ArrowRight size={16} aria-hidden="true" /></a><Link className="button primary" href="/#extractor">Take the test <ArrowRight size={16} aria-hidden="true" /></Link></div></section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  );
}
