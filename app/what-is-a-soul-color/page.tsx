import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Brain, Check, HeartHandshake, Target } from "lucide-react";
import { site, siteDates, siteIds, socialImage } from "@/lib/site";

export const metadata: Metadata = {
  title: "What Is a Soul Color?",
  description: "Learn what soul color means, how symbolic shades are used for reflection, and how to find your own color with a free quick or deep test.",
  alternates: { canonical: `${site.url}/what-is-a-soul-color` },
  openGraph: {
    title: "What Is a Soul Color? | Soul Color Test",
    description: "A grounded guide to soul colors, symbolic shades, and finding your own reflective color profile.",
    url: `${site.url}/what-is-a-soul-color`,
    type: "article",
    images: [socialImage],
  },
  twitter: { card: "summary_large_image", title: "What Is a Soul Color? | Soul Color Test", description: "A grounded guide to soul colors, symbolic shades, and finding your own reflective color profile.", images: [socialImage] },
};

const colorProfiles = [
  { color: "Gold", virtue: "Curiosity", detail: "Gold represents an exploratory mind: noticing patterns, asking better questions, and staying open to what a new perspective can reveal.", className: "gold" },
  { color: "Blue", virtue: "Integrity", detail: "Blue represents clarity and steadiness: making values visible, creating order, and trying to make decisions you can stand behind.", className: "blue" },
  { color: "Green", virtue: "Kindness", detail: "Green represents connection and care: reading the emotional weather, making room for honesty, and building trust through reciprocity.", className: "green" },
  { color: "Red", virtue: "Determination", detail: "Red represents purposeful movement: turning intention into action, staying with difficult work, and making progress visible.", className: "red" },
];

const testSteps = [
  { number: "01", title: "Choose the answer that feels most like you.", detail: "There are no correct answers. The useful answer is the one that reflects your usual instinct, not the version of yourself you think you should be." },
  { number: "02", title: "Let the pattern build across several situations.", detail: "The Quick Test uses seven questions and the Deep Test uses sixteen. Both map choices across depth, clarity, connection, and momentum." },
  { number: "03", title: "Read the result as a starting point.", detail: "Your color names a leading virtue, a growth edge, relationship and work signals, and a small alignment plan to try." },
];

const guideFaq = [
  { question: "Can my soul color change?", answer: "It can. Your result reflects the pattern in your answers at a particular moment, and your priorities or circumstances may change over time." },
  { question: "Is a soul color scientific?", answer: "The color is symbolic, not a scientific measurement. Use it as a self-reflection prompt rather than proof of a personality trait." },
  { question: "How long does the soul color test take?", answer: "The seven-question Quick Test takes about two minutes. The sixteen-question Deep Test usually takes five to six minutes." },
];

const guideFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: guideFaq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const guideArticleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${site.url}/what-is-a-soul-color#article`,
  headline: "What Is a Soul Color?",
  description: "A grounded guide to soul colors, symbolic shades, and finding your own reflective color profile.",
  mainEntityOfPage: `${site.url}/what-is-a-soul-color`,
  author: { "@id": siteIds.organization },
  publisher: { "@id": siteIds.organization },
  datePublished: siteDates.published,
  dateModified: siteDates.modified,
  inLanguage: "en-US",
};

export default function SoulColorGuidePage() {
  return (
    <main>
      <section className="page-copy guide-hero">
        <span className="section-kicker">Soul color guide</span>
        <h1>What Is a Soul Color?</h1>
        <p>A soul color is a symbolic way to reflect on the qualities that shape how you think, connect, decide, and act.</p>
        <p className="article-meta">By Soul Color Test | Published {siteDates.display} | Updated {siteDates.display}</p>
        <Link className="button primary guide-hero-cta" href="/#extractor">Find my soul color <ArrowRight size={16} aria-hidden="true" /></Link>
      </section>

      <section className="guide-answer" aria-labelledby="quick-answer-heading">
        <div><span className="section-kicker mono">QUICK ANSWER</span><h2 id="quick-answer-heading">A soul color is a mirror, not a verdict.</h2></div>
        <p>There is no universal color assigned to every soul. In reflective practices, color gives an abstract quality a memorable shape. In this test, your color is generated from everyday choices and paired with a virtue, so the result gives you language to explore rather than a fixed identity to accept.</p>
      </section>

      <nav className="guide-toc" aria-label="Guide sections">
        <span className="section-kicker mono">IN THIS GUIDE</span>
        <a href="#meaning">What it means</a>
        <a href="#colors">Color and virtue</a>
        <a href="#find-your-shade">How to find your shade</a>
        <a href="#use-your-result">How to use your result</a>
      </nav>

      <section id="meaning" className="guide-section" aria-labelledby="meaning-heading">
        <div className="guide-section-heading"><span className="section-kicker mono">01 / MEANING</span><h2 id="meaning-heading">What does a soul color describe?</h2></div>
        <div className="guide-copy"><p>The phrase <em>soul color</em> is best understood as a creative language for self-reflection. It can help you name a quality you already recognize in yourself, or notice a pattern that is easier to feel than to explain.</p><p>It is not a medical measure, a personality diagnosis, or a prediction about your future. People change with context and experience, so a useful reading should leave room for nuance, disagreement, and growth.</p><div className="guide-note"><Target size={19} aria-hidden="true" /><p><strong>A grounded way to read it:</strong> keep what helps you notice something true, and leave what does not fit.</p></div></div>
      </section>

      <section id="colors" className="guide-section" aria-labelledby="colors-heading">
        <div className="guide-section-heading"><span className="section-kicker mono">02 / COLOR &amp; VIRTUE</span><h2 id="colors-heading">What color is associated with the soul?</h2><p>Different cultures and traditions give colors different meanings. This test uses four colors as a simple vocabulary for four reflective virtues.</p></div>
        <div className="color-guide-grid">
          {colorProfiles.map((profile) => (
            <article key={profile.color} className="color-guide-item">
              <span className={`color-guide-swatch ${profile.className}`} aria-hidden="true" />
              <div><span className="section-kicker mono">{profile.color}</span><h3>{profile.virtue}</h3><p>{profile.detail}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section id="find-your-shade" className="guide-section guide-process" aria-labelledby="find-heading">
        <div className="guide-section-heading"><span className="section-kicker mono">03 / FIND YOUR SHADE</span><h2 id="find-heading">How do you find your soul shade?</h2><p>Your shade is more useful when it comes from recognizable choices instead of a random color picker.</p></div>
        <ol className="guide-steps">
          {testSteps.map((step) => <li key={step.number}><span className="guide-step-number">{step.number}</span><div><h3>{step.title}</h3><p>{step.detail}</p></div><Check size={18} aria-hidden="true" /></li>)}
        </ol>
      </section>

      <section id="use-your-result" className="guide-section" aria-labelledby="result-heading">
        <div className="guide-section-heading"><span className="section-kicker mono">04 / USE THE RESULT</span><h2 id="result-heading">What color would your soul be?</h2></div>
        <div className="guide-use-grid">
          <article><Brain size={21} aria-hidden="true" /><div><h3>Start with recognition</h3><p>Notice which part of the description feels specific rather than flattering. That is usually where the reflection becomes useful.</p></div></article>
          <article><HeartHandshake size={21} aria-hidden="true" /><div><h3>Test it in real life</h3><p>Bring one question into a conversation, a work decision, or a boundary. A result gains meaning when it changes what you notice or do.</p></div></article>
        </div>
      </section>

      <section className="guide-sources" aria-labelledby="sources-heading">
        <div className="guide-section-heading"><span className="section-kicker mono">SOURCES</span><h2 id="sources-heading">What informed this guide?</h2><p>This page separates symbolic interpretation from established research about color and perception.</p></div>
        <div className="source-list">
          <article>
            <h3>Color and psychology</h3>
            <p>The American Psychological Association discusses how color can influence emotion, attention, and behavior while also noting that responses vary by context and culture.</p>
            <a href="https://www.apa.org/monitor/2011/07-08/colors" target="_blank" rel="noreferrer">Read the APA overview <ArrowRight size={15} aria-hidden="true" /></a>
          </article>
          <article>
            <h3>How to interpret this test</h3>
            <p>Soul Color Test uses four colors as an original reflection vocabulary. The result is generated from your answers and is not presented as a validated psychological instrument.</p>
          </article>
        </div>
      </section>

      <section className="guide-faq" aria-labelledby="guide-faq-heading">
        <div><span className="section-kicker">More questions</span><h2 id="guide-faq-heading">Keep the interpretation open.</h2></div>
        <div className="faq-list">
          {guideFaq.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}
        </div>
      </section>

      <section className="guide-cta"><div><span className="section-kicker">Ready to explore yours?</span><h2>Choose a quick or deep read.</h2><p>Take the Soul Color Test and see which color gives your current pattern the clearest language.</p></div><Link className="button primary" href="/#extractor">Take the test <ArrowRight size={16} aria-hidden="true" /></Link></section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(guideArticleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(guideFaqSchema) }} />
    </main>
  );
}
