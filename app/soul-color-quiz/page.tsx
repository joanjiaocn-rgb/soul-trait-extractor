import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Clock3, LockKeyhole, ShieldCheck } from "lucide-react";
import { site, siteDates, siteIds, socialImage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Soul Color Quiz: What Color Is My Soul?",
  description: "Take a free soul color quiz with 7-question Quick and 16-question Deep modes. Get a symbolic color, supporting shade, and practical reflection in minutes.",
  alternates: { canonical: `${site.url}/soul-color-quiz` },
  openGraph: {
    title: "Soul Color Quiz: What Color Is My Soul?",
    description: "Take a free 7- or 16-question soul color quiz and receive a symbolic color profile with practical reflection prompts.",
    url: `${site.url}/soul-color-quiz`,
    type: "article",
    siteName: site.name,
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soul Color Quiz: What Color Is My Soul?",
    description: "Take a free 7- or 16-question soul color quiz and receive a symbolic color profile with practical reflection prompts.",
    images: [socialImage],
  },
};

const quizFaq = [
  {
    question: "What is a soul color quiz?",
    answer: "A soul color quiz is a symbolic self-reflection exercise. It uses your choices in everyday situations to give a memorable color language to the qualities you may be drawing on most right now.",
  },
  {
    question: "How accurate is the soul color quiz?",
    answer: "It is not a clinically validated or scientific measurement, so it should not be treated as an objective personality score. Its value is in whether the description gives you a useful question to explore.",
  },
  {
    question: "Is the soul color quiz scientific?",
    answer: "No. The four color meanings are an original reflection vocabulary, not a diagnosis or psychological instrument. Color associations can also vary by context, culture, and personal experience.",
  },
  {
    question: "Can my soul color change?",
    answer: "Yes. The result is a snapshot of the answers you give in a particular moment. Your circumstances, priorities, and way of responding can change over time.",
  },
  {
    question: "Is this soul color test free?",
    answer: "Yes. The Quick and Deep tests, the color result, and the on-page personal reflection are currently free. No account is required.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: quizFaq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${site.url}/soul-color-quiz#article`,
  headline: "Soul Color Quiz: What Color Is My Soul?",
  description: "A practical guide to taking a free soul color quiz in Quick or Deep mode.",
  mainEntityOfPage: `${site.url}/soul-color-quiz`,
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
    { "@type": "ListItem", position: 2, name: "Soul Color Quiz", item: `${site.url}/soul-color-quiz` },
  ],
};

export default function SoulColorQuizPage() {
  return (
    <main>
      <section className="guide-hero">
        <span className="section-kicker">Free soul color quiz</span>
        <h1>Soul Color Quiz: What Color Is My Soul?</h1>
        <p>Answer ordinary situations, notice the pattern in your choices, and get a symbolic color with a practical reflection you can use today.</p>
        <p className="article-meta">By Soul Color Test | Published <time dateTime={siteDates.published}>{siteDates.publishedDisplay}</time> | Updated <time dateTime={siteDates.modified}>{siteDates.modifiedDisplay}</time></p>
        <Link className="button primary guide-hero-cta" href="/#extractor" title="Start the free soul color quiz">Start the free quiz <ArrowRight size={16} aria-hidden="true" /></Link>
      </section>

      <section className="guide-answer" aria-labelledby="quick-answer-heading">
        <div><span className="section-kicker mono">QUICK ANSWER</span><h2 id="quick-answer-heading">A soul color quiz turns your choices into a reflection prompt.</h2></div>
        <p>This quiz is designed to help you name a leading pattern, not to place you in a permanent category. Your answers are scored in your browser and produce one primary color, one supporting shade, four signal scores, and a short action plan.</p>
      </section>

      <nav className="guide-toc" aria-label="Soul color quiz sections">
        <span className="section-kicker mono">IN THIS GUIDE</span>
        <a href="#formats" title="Compare the Quick and Deep quiz modes">Quiz formats</a>
        <a href="#scoring" title="Learn how the soul color quiz is scored">How scoring works</a>
        <a href="#results" title="See what the soul color quiz includes">What you receive</a>
        <a href="#quiz-faq" title="Read soul color quiz questions">Questions</a>
      </nav>

      <section id="formats" className="guide-section" aria-labelledby="formats-heading">
        <div className="guide-section-heading"><span className="section-kicker mono">01 / CHOOSE A MODE</span><h2 id="formats-heading">Quick or Deep: which quiz fits today?</h2><p>Both modes use the same four dimensions. Deep mode gives close scores more situations to work with.</p></div>
        <div className="comparison-table-wrap">
          <table className="comparison-table">
            <caption>Soul Color Quiz modes</caption>
            <thead><tr><th scope="col">Mode</th><th scope="col">Questions</th><th scope="col">Time</th><th scope="col">Best for</th></tr></thead>
            <tbody>
              <tr><th scope="row">Quick</th><td>7</td><td>About 2 minutes</td><td>A fast first read</td></tr>
              <tr><th scope="row">Deep</th><td>16</td><td>About 5-6 minutes</td><td>More context between close colors</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="scoring" className="guide-section" aria-labelledby="scoring-heading">
        <div className="guide-section-heading"><span className="section-kicker mono">02 / THE METHOD</span><h2 id="scoring-heading">How does the soul color quiz work?</h2><p>There are no correct answers. Choose what feels most like your usual instinct, rather than the answer that sounds most admirable.</p></div>
        <ol className="guide-steps">
          <li><span className="guide-step-number">01</span><div><h3>Respond to everyday situations.</h3><p>You will choose between four responses to decisions, disagreements, feedback, relationships, and meaningful work.</p></div><Check size={18} aria-hidden="true" /></li>
          <li><span className="guide-step-number">02</span><div><h3>Build four signal scores.</h3><p>Choices add weight to depth, clarity, connection, and momentum. These signals map to Gold, Blue, Green, and Red.</p></div><Check size={18} aria-hidden="true" /></li>
          <li><span className="guide-step-number">03</span><div><h3>Read the strongest pattern with nuance.</h3><p>Your highest signal becomes the primary color and the next becomes a supporting shade. The result is a starting point for reflection, not a final verdict.</p></div><Check size={18} aria-hidden="true" /></li>
        </ol>
      </section>

      <section id="results" className="guide-section" aria-labelledby="results-heading">
        <div className="guide-section-heading"><span className="section-kicker mono">03 / YOUR RESULT</span><h2 id="results-heading">What does the free soul color test show?</h2><p>The result is built to give you more than a color label while keeping the interpretation easy to question.</p></div>
        <div className="guide-use-grid">
          <article><Clock3 size={21} aria-hidden="true" /><div><h3>Primary color and supporting shade</h3><p>See the leading virtue in your answers and the second signal that may shape how it appears.</p></div></article>
          <article><ShieldCheck size={21} aria-hidden="true" /><div><h3>Four signal scores</h3><p>Compare depth, clarity, connection, and momentum instead of reducing the whole result to one label.</p></div></article>
          <article><Check size={21} aria-hidden="true" /><div><h3>Strength and growth edge</h3><p>Read where your pattern can create value and where it may benefit from a little more balance.</p></div></article>
          <article><LockKeyhole size={21} aria-hidden="true" /><div><h3>Local, no-account experience</h3><p>Progress is stored on this device. Answers are not sent to a report-generation server.</p></div></article>
        </div>
      </section>

      <section className="guide-sources" aria-labelledby="next-reading-heading">
        <div className="guide-section-heading"><span className="section-kicker mono">KEEP EXPLORING</span><h2 id="next-reading-heading">Start with the meaning, then take the quiz.</h2><p>Knowing the limits of a symbolic test makes the result more useful.</p></div>
        <div className="source-list">
          <article><h3>What is a soul color?</h3><p>Read the grounded guide to symbolic color language, cultural context, and how to hold a result lightly.</p><Link href="/what-is-a-soul-color" title="Read what a soul color means">Read the soul color guide <ArrowRight size={15} aria-hidden="true" /></Link></article>
          <article><h3>See a complete report example</h3><p>Preview the sections that connect a color to strengths, relationships, work signals, and a seven-day reflection plan.</p><Link href="/sample-report" title="Read the complete sample soul color report">Read the sample report <ArrowRight size={15} aria-hidden="true" /></Link></article>
        </div>
      </section>

      <section id="quiz-faq" className="guide-faq" aria-labelledby="faq-heading">
        <div><span className="section-kicker">Questions</span><h2 id="faq-heading">Before you begin</h2></div>
        <div className="faq-list">{quizFaq.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div>
      </section>

      <section className="guide-cta"><div><span className="section-kicker">Ready?</span><h2>Find the color behind your choices.</h2><p>Start with seven questions, or choose Deep mode when you want a fuller reflection.</p></div><Link className="button primary" href="/#extractor" title="Start the free soul color quiz">Take the quiz <ArrowRight size={16} aria-hidden="true" /></Link></section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    </main>
  );
}
