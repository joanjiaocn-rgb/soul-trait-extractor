import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HeartHandshake, Lightbulb, Target } from "lucide-react";
import { soulColorList } from "@/lib/soul-colors";
import { site, siteDates, siteIds, socialImage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Soul Color Meanings: Gold, Blue, Green & Red",
  description: "Explore the four Soul Color Test meanings: Gold curiosity, Blue integrity, Green kindness, and Red determination. Read each symbolic profile and start the free quiz.",
  alternates: { canonical: `${site.url}/soul-color-meanings` },
  openGraph: {
    title: "Soul Color Meanings: Gold, Blue, Green & Red",
    description: "Explore Gold, Blue, Green, and Red soul color meanings and see how each symbolic virtue can become a reflection prompt.",
    url: `${site.url}/soul-color-meanings`,
    type: "article",
    siteName: site.name,
    images: [socialImage],
  },
  twitter: { card: "summary_large_image", title: "Soul Color Meanings: Gold, Blue, Green & Red", description: "Explore Gold, Blue, Green, and Red soul color meanings and see how each symbolic virtue can become a reflection prompt.", images: [socialImage] },
};

const meaningFaq = [
  { question: "Can my soul color change?", answer: "Yes. A result reflects the choices you make in a particular moment. Priorities, experiences, and circumstances can change the pattern that feels strongest." },
  { question: "Is soul color scientific?", answer: "Soul color is symbolic self-reflection, not a scientific measurement, personality diagnosis, or medical assessment. Color associations also vary across cultures and contexts." },
  { question: "What is the difference between soul color and aura color?", answer: "Soul color is used here as a simple quiz vocabulary based on everyday choices. Aura color is a separate spiritual or visual practice with different traditions and interpretations." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: meaningFaq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })),
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${site.url}/soul-color-meanings#article`,
  headline: "Soul Color Meanings: Gold, Blue, Green & Red",
  description: "A guide to the four symbolic soul color meanings used by Soul Color Test.",
  mainEntityOfPage: `${site.url}/soul-color-meanings`,
  author: { "@id": siteIds.organization },
  publisher: { "@id": siteIds.organization },
  datePublished: siteDates.published,
  dateModified: siteDates.modified,
  inLanguage: "en-US",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Soul Color Test", item: site.url },
    { "@type": "ListItem", position: 2, name: "Soul Color Meanings", item: `${site.url}/soul-color-meanings` },
  ],
};

export default function SoulColorMeaningsPage() {
  return (
    <main>
      <section className="guide-hero">
        <span className="section-kicker">Soul color meanings</span>
        <h1>Soul Color Meanings: Gold, Blue, Green &amp; Red</h1>
        <p>Explore the four colors in this symbolic self-reflection test and find the virtue, strength, and question associated with each one.</p>
        <p className="article-meta">By Soul Color Test | Published <time dateTime={siteDates.published}>{siteDates.publishedDisplay}</time> | Updated <time dateTime={siteDates.modified}>{siteDates.modifiedDisplay}</time></p>
        <Link className="button primary guide-hero-cta" href="/#extractor" title="Take the free Soul Color Test">Find my soul color <ArrowRight size={16} aria-hidden="true" /></Link>
      </section>

      <section className="guide-answer" aria-labelledby="quick-answer-heading">
        <div><span className="section-kicker mono">QUICK ANSWER</span><h2 id="quick-answer-heading">Soul color meanings are a vocabulary, not a ranking.</h2></div>
        <p>This test currently uses four colors: Gold for curiosity, Blue for integrity, Green for kindness, and Red for determination. The colors are symbolic prompts based on your answers, not universal rules about who you are.</p>
      </section>

      <nav className="guide-toc" aria-label="Soul color meanings sections">
        <span className="section-kicker mono">IN THIS GUIDE</span>
        <a href="#comparison" title="Compare the four soul color meanings">Compare colors</a>
        <a href="#profiles" title="Read each soul color profile">Color profiles</a>
        <a href="#meaning-faq" title="Read questions about soul color meanings">Questions</a>
      </nav>

      <section id="comparison" className="guide-section" aria-labelledby="comparison-heading">
        <div className="guide-section-heading"><span className="section-kicker mono">01 / AT A GLANCE</span><h2 id="comparison-heading">What do the four soul colors mean?</h2><p>Each color emphasizes a different way of finding direction. A supporting shade can add another layer to your result.</p></div>
        <div className="comparison-table-wrap">
          <table className="comparison-table">
            <caption>Four Soul Color Test meanings</caption>
            <thead><tr><th scope="col">Color</th><th scope="col">Leading virtue</th><th scope="col">A useful question</th></tr></thead>
            <tbody>
              <tr><th scope="row">Gold</th><td>Curiosity</td><td>What is underneath the obvious answer?</td></tr>
              <tr><th scope="row">Blue</th><td>Integrity</td><td>What choice can I stand behind?</td></tr>
              <tr><th scope="row">Green</th><td>Kindness</td><td>What would make honesty and trust easier here?</td></tr>
              <tr><th scope="row">Red</th><td>Determination</td><td>What is the next useful move?</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="profiles" className="guide-section" aria-labelledby="profiles-heading">
        <div className="guide-section-heading"><span className="section-kicker mono">02 / THE PROFILES</span><h2 id="profiles-heading">Read the color, then test the fit.</h2><p>The strongest description is not necessarily the most flattering one. Look for the detail that feels specific enough to help you notice something.</p></div>
        <div className="color-guide-grid">
          {soulColorList.map((profile) => (
            <article className="color-guide-item" key={profile.slug}>
              <span className={`color-guide-swatch ${profile.slug}`} aria-hidden="true" />
              <div><span className="section-kicker mono">{profile.colorName}</span><h3>{profile.name}</h3><p>{profile.meaning}</p><Link className="text-link meaning-profile-link" href={`/results/${profile.slug}`} title={`Read the full ${profile.colorName} soul color meaning`}>Read the full {profile.colorName} profile <ArrowRight size={15} aria-hidden="true" /></Link></div>
            </article>
          ))}
        </div>
      </section>

      <section className="guide-section" aria-labelledby="use-heading">
        <div className="guide-section-heading"><span className="section-kicker mono">03 / USE THE RESULT</span><h2 id="use-heading">How should you use a soul color meaning?</h2><p>Keep the interpretation active. A label matters less than the choice it helps you see.</p></div>
        <div className="guide-use-grid">
          <article><Lightbulb size={21} aria-hidden="true" /><div><h3>Notice what rings true</h3><p>Keep the part that feels concrete and leave the part that does not match your experience.</p></div></article>
          <article><Target size={21} aria-hidden="true" /><div><h3>Try one small experiment</h3><p>Use the reflection question in a real decision, conversation, or piece of work.</p></div></article>
          <article><HeartHandshake size={21} aria-hidden="true" /><div><h3>Allow more than one color</h3><p>Your supporting shade can explain why a simple primary label never tells the whole story.</p></div></article>
        </div>
      </section>

      <section id="meaning-faq" className="guide-faq" aria-labelledby="faq-heading">
        <div><span className="section-kicker">Questions</span><h2 id="faq-heading">About soul color meanings</h2></div>
        <div className="faq-list">{meaningFaq.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div>
      </section>

      <section className="guide-cta"><div><span className="section-kicker">Curious?</span><h2>See which meaning fits your choices.</h2><p>Take the free Quick or Deep Soul Color Test and receive a primary color, supporting shade, and practical reflection.</p></div><Link className="button primary" href="/#extractor" title="Take the free Soul Color Test">Take the test <ArrowRight size={16} aria-hidden="true" /></Link></section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </main>
  );
}
