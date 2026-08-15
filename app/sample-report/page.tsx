import { ArrowRight, Check, Download, Share2 } from "lucide-react";

const sections = [
  {
    title: "Primary virtue",
    body: "Determination. You notice patterns early and prefer to move after you understand the shape of the situation.",
  },
  {
    title: "Relationship style",
    body: "You want steadiness, honesty, and a little more directness than most people give by default.",
  },
  {
    title: "Career signals",
    body: "You may do well in roles that reward structured thinking, analysis, writing, or advisory judgment.",
  },
  {
    title: "7-day alignment plan",
    body: "Use one small direct ask, one boundary, one public action, and one weekly review to turn insight into momentum.",
  },
];

export default function SampleReportPage() {
  return (
    <main>
      <section className="page-copy">
        <span className="section-kicker">Sample report</span>
        <h1>A fuller read looks like this</h1>
        <p>
          A paid report should feel like a composed profile, not a pile of generated paragraphs.
        </p>
      </section>

      <section className="sample-layout">
        <article className="copy-card">
          <h2>Determination</h2>
          <p>
            You process the world through observation before action. You are not passive; you are selective. You want
            enough signal to trust your next move.
          </p>
          <div className="trait-pills" style={{ marginBottom: 16 }}>
            <span>Focused</span>
            <span>Persistent</span>
            <span>Pattern-aware</span>
            <span>Self-directed</span>
          </div>
          <a className="button primary" href="/#extractor">
            Open the reader
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </article>
        <div className="faq-list">
          {sections.map((section) => (
            <article key={section.title} className="copy-card">
              <h3>{section.title}</h3>
              <p>{section.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="pricing-grid">
          <article className="price-card">
            <Check size={18} aria-hidden="true" />
            <h3>What is included</h3>
            <ul>
              <li>Virtue profile</li>
              <li>Relationship style</li>
              <li>Career signals</li>
              <li>Triggers and shadow edges</li>
              <li>7-day alignment plan</li>
            </ul>
          </article>
          <article className="price-card">
            <Share2 size={18} aria-hidden="true" />
            <h3>How it is shared</h3>
            <p>Share a preview link, export a PDF, or paste the result into a note, DM, or profile card.</p>
          </article>
          <article className="price-card">
            <Download size={18} aria-hidden="true" />
            <h3>What is next</h3>
            <p>Production can add payment, saved history, comparison mode, and coach workflows.</p>
          </article>
        </div>
      </section>
    </main>
  );
}
