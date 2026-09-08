import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock3, Layers3, LockKeyhole, Palette } from "lucide-react";
import { TraitExtractor } from "@/components/TraitExtractor";
import { soulColorList } from "@/lib/soul-colors";
import { site, siteDates, siteIds, socialImage } from "@/lib/site";

export const metadata: Metadata = {
  title: "What Color Is My Soul? Free Soul Color Test",
  description: "Take a free 7- or 16-question soul color quiz. Discover your primary color, supporting shade, strengths, relationships, work signals, and a practical reflection plan.",
  alternates: { canonical: site.url },
  openGraph: {
    title: "What Color Is My Soul? Free Soul Color Test",
    description: "Take a free 7- or 16-question soul color quiz and get a symbolic color, supporting shade, and practical reflection.",
    url: site.url,
    type: "website",
    siteName: site.name,
    images: [socialImage],
  },
  twitter: { card: "summary_large_image", title: "What Color Is My Soul? Free Soul Color Test", description: "Take a free 7- or 16-question soul color quiz and get a symbolic color, supporting shade, and practical reflection.", images: [socialImage] },
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

const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${site.url}/#webpage`,
  url: site.url,
  name: "Soul Color Test | What Color Is Your Soul?",
  description: metadata.description,
  isPartOf: { "@id": siteIds.website },
  about: { "@id": siteIds.app },
  datePublished: siteDates.published,
  dateModified: siteDates.modified,
  inLanguage: "en-US",
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
          <h2 id="colors-heading">What do the four soul colors mean?</h2>
          <p>Each color describes a different way of finding direction. None is better than another, and most people recognize parts of themselves in more than one. <Link href="/soul-color-meanings" title="Read the soul color meanings guide">Read the color meanings guide</Link>.</p>
        </div>
        <div className="color-preview-grid">
          {soulColorList.map((profile) => (
            <Link key={profile.slug} className="color-preview-item" href={`/results/${profile.slug}`} title={`Read the ${profile.colorName} soul color meaning`} style={{ "--profile-color": profile.color } as CSSProperties}>
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
          <h2 id="report-heading">What does your soul color result include?</h2>
          <p>The free reflection connects your color to a strength, a growth edge, relationships, work, and a five-day experiment. Read the complete red result before taking the test if you want to see the level of detail first.</p>
          <ul className="result-feature-list">
            <li><strong>1</strong> primary color and <strong>1</strong> supporting shade</li>
            <li><strong>4</strong> signal scores: depth, clarity, connection, and momentum</li>
            <li>Strengths, growth edge, relationship style, and work signals</li>
            <li>A practical <strong>5-day</strong> reflection plan</li>
          </ul>
        </div>
        <Link className="button secondary" href="/sample-report" title="Read the complete sample soul color report">Open the sample report <ArrowRight size={16} aria-hidden="true" /></Link>
      </section>

      <section className="content-section test-format-section" aria-labelledby="format-heading">
        <div className="section-head">
          <span className="section-kicker">Test formats</span>
          <h2 id="format-heading">How long does the Soul Color Test take?</h2>
          <p>Both modes use the same four dimensions. Deep mode adds more situations so close scores have more context. <Link href="/soul-color-quiz" title="Learn how the soul color quiz works">See how the quiz works</Link>.</p>
        </div>
        <div className="comparison-table-wrap">
          <table className="comparison-table">
            <caption>Quick and Deep Soul Color Test formats</caption>
            <thead>
              <tr>
                <th scope="col">Mode</th>
                <th scope="col">Questions</th>
                <th scope="col">Typical time</th>
                <th scope="col">Best for</th>
                <th scope="col">Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Quick</th>
                <td>7</td>
                <td>About 2 minutes</td>
                <td>A first read</td>
                <td>Color, shade, and signal map</td>
              </tr>
              <tr>
                <th scope="row">Deep</th>
                <td>16</td>
                <td>About 5-6 minutes</td>
                <td>More varied context</td>
                <td>Color, shade, signal map, and reflection</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="content-section split-section" aria-labelledby="faq-heading">
        <div>
          <span className="section-kicker">Questions</span>
          <h2 id="faq-heading">What should you know before you begin?</h2>
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

      <section className="content-section evidence-section" aria-labelledby="sources-heading">
        <div className="section-head">
          <span className="section-kicker">Sources and boundaries</span>
          <h2 id="sources-heading">What informs this test?</h2>
          <p>The color meanings are an original reflection vocabulary. These sources explain the limits around color interpretation and browser storage.</p>
        </div>
        <div className="source-grid">
          <article className="source-item">
            <span className="section-kicker mono">01 / COLOR CONTEXT</span>
            <h3>Color associations are not universal.</h3>
            <p>The American Psychological Association describes color effects as dependent on context, culture, and individual experience. That is why this site presents colors as prompts, not psychological measurements.</p>
            <cite><a href="https://www.apa.org/monitor/2011/07-08/colors" target="_blank" rel="noreferrer" title="Read the American Psychological Association overview of color">American Psychological Association, Color</a></cite>
          </article>
          <article className="source-item">
            <span className="section-kicker mono">02 / LOCAL PROGRESS</span>
            <h3>Your quiz progress uses browser storage.</h3>
            <p>This site uses the browser&apos;s local storage to keep progress on the same device. The Web Storage API is documented by MDN; individual answers are not sent to a report-generation server.</p>
            <cite><a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage" target="_blank" rel="noreferrer" title="Read the MDN localStorage documentation">MDN Web Docs, Window.localStorage</a></cite>
          </article>
        </div>
      </section>

      <section className="guide-cta home-final-cta">
        <div><span className="section-kicker">Ready?</span><h2>Ready to find your soul color?</h2><p>Begin with seven questions or switch to the deeper sixteen-question version.</p></div>
        <a className="button primary" href="#extractor" title="Start the Soul Color Test">Take the Soul Color Test <ArrowRight size={16} aria-hidden="true" /></a>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(soulColorFaqSchema) }} />
    </main>
  );
}
