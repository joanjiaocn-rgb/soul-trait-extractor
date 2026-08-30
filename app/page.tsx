import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock3, Layers3, LockKeyhole, Palette } from "lucide-react";
import { TraitExtractor } from "@/components/TraitExtractor";
import { soulColorList } from "@/lib/soul-colors";
import { site, socialImage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Soul Color Test | What Color Is Your Soul?",
  description: "Take the free Soul Color Test in 2-6 minutes. Discover your primary soul color, supporting shade, leading virtue, strengths, relationships, and growth edge.",
  alternates: { canonical: site.url },
  openGraph: {
    title: "Soul Color Test | What Color Is Your Soul?",
    description: "Answer everyday questions and reveal your soul color, supporting shade, and leading virtue.",
    url: site.url,
    type: "website",
    images: [socialImage],
  },
  twitter: { card: "summary_large_image", title: "Soul Color Test | What Color Is Your Soul?", description: "Answer everyday questions and reveal your soul color, supporting shade, and leading virtue.", images: [socialImage] },
};

const soulColorFaq = [
  {
    question: "What is a soul color?",
    answer: "A soul color is a symbolic way to reflect on the qualities that shape how you think, connect, decide, and act. It is a prompt for self-understanding, not a scientific diagnosis or fixed label.",
  },
  {
    question: "How does the Soul Color Test work?",
    answer: "Each answer adds weight to four patterns: curiosity, integrity, kindness, and determination. Your strongest pattern becomes your primary color, while the next strongest becomes your supporting shade.",
  },
  {
    question: "Should I take the Quick or Deep test?",
    answer: "Choose Quick for a two-minute first read. Choose Deep if you want more varied situations and a better chance of separating two close color scores.",
  },
  {
    question: "Can my soul color change?",
    answer: "It can. The result reflects how you answered today, and your priorities or circumstances may change. Treat it as a useful snapshot rather than a permanent identity.",
  },
  {
    question: "Is the Soul Color Test free?",
    answer: "Yes. Both test modes and the on-page personal reflection are currently free. Optional expanded report products may be added later and will be clearly labeled before any payment step.",
  },
];

const soulColorFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: soulColorFaq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function Home() {
  return (
    <main>
      <TraitExtractor />

      <section className="band test-proof-band" aria-label="Test details">
        <div className="band-inner proof-grid">
          <article className="band-item">
            <Clock3 size={22} aria-hidden="true" />
            <h2>Start in two minutes</h2>
            <p>The Quick Test uses seven everyday choices. You can switch to the 16-question Deep Test whenever you want a more considered result.</p>
          </article>
          <article className="band-item">
            <Layers3 size={22} aria-hidden="true" />
            <h2>See more than one label</h2>
            <p>Your result includes a primary color, a supporting shade, four signal scores, and a reflection you can use in relationships and work.</p>
          </article>
          <article className="band-item">
            <LockKeyhole size={22} aria-hidden="true" />
            <h2>Your answers stay here</h2>
            <p>Quiz progress is saved on this device so you can continue. Your answers are not sent to a report-generation server.</p>
          </article>
        </div>
      </section>

      <section className="content-section color-preview-section" aria-labelledby="colors-heading">
        <div className="section-head color-preview-head">
          <span className="section-kicker"><Palette size={15} aria-hidden="true" /> The four results</span>
          <h2 id="colors-heading">One leading color. One supporting shade.</h2>
          <p>Each color describes a different way of finding direction. None is better than another, and most people recognize parts of themselves in more than one.</p>
        </div>
        <div className="color-preview-grid">
          {soulColorList.map((profile) => (
            <Link key={profile.slug} className="color-preview-item" href={`/results/${profile.slug}`} style={{ "--profile-color": profile.color } as CSSProperties}>
              <span className="color-preview-swatch" aria-hidden="true" />
              <span className="section-kicker mono">{profile.colorName}</span>
              <h3>{profile.name}</h3>
              <p>{profile.meaning}</p>
              <span className="text-link">Explore {profile.colorName} <ArrowRight size={15} aria-hidden="true" /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="content-section report-invitation" aria-labelledby="report-heading">
        <div>
          <span className="section-kicker"><BookOpen size={15} aria-hidden="true" /> Beyond the color</span>
          <h2 id="report-heading">A result should give you something to notice.</h2>
          <p>The free reflection connects your color to a strength, a growth edge, relationships, work, and a five-day experiment. Read the complete red result before taking the test if you want to see the level of detail first.</p>
        </div>
        <Link className="button secondary" href="/sample-report">Open the sample report <ArrowRight size={16} aria-hidden="true" /></Link>
      </section>

      <section className="content-section split-section" aria-labelledby="faq-heading">
        <div>
          <span className="section-kicker">Questions</span>
          <h2 id="faq-heading">Before you begin</h2>
          <p>Choose the answer closest to your usual instinct. There are no correct colors and no result you need to perform toward.</p>
        </div>
        <div className="faq-list">
          {soulColorFaq.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="guide-cta home-final-cta">
        <div><span className="section-kicker">Ready?</span><h2>Find the color behind your choices.</h2><p>Begin with seven questions or switch to the deeper sixteen-question version.</p></div>
        <a className="button primary" href="#extractor">Take the Soul Color Test <ArrowRight size={16} aria-hidden="true" /></a>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(soulColorFaqSchema) }} />
    </main>
  );
}
