import { ArrowRight, Brain, BriefcaseBusiness, HeartHandshake, Target } from "lucide-react";

const dimensions = [
  { label: "Depth", value: 78, color: "var(--ink)" },
  { label: "Clarity", value: 66, color: "var(--amber)" },
  { label: "Connection", value: 58, color: "var(--teal)" },
  { label: "Momentum", value: 84, color: "var(--coral)" },
];

const alignmentPlan = [
  "Choose one decision you have been keeping open.",
  "Write down the missing information instead of replaying the whole situation.",
  "Ask one direct question before making another assumption.",
  "Share one unfinished idea with someone you trust.",
  "Put the next concrete move on your calendar.",
  "Notice whether urgency is real or borrowed from someone else.",
  "Review what moved, what stayed stuck, and what you learned.",
];

export default function SampleReportPage() {
  return (
    <main>
      <section className="report-intro">
        <div>
          <span className="section-kicker">Example result</span>
          <h1>Your soul color is red.</h1>
          <p>This is the kind of reflection a completed Soul Virtues Test can produce.</p>
        </div>
        <div className="report-intro-mark" aria-hidden="true"><span>SV</span></div>
      </section>

      <section className="report-result-shell" aria-labelledby="result-heading">
        <div className="report-result-main">
          <div className="report-result-heading">
            <div><span className="section-kicker mono">LEADING VIRTUE / 01</span><h2 id="result-heading">Determination</h2></div>
            <span className="result-color-chip"><i />Red</span>
          </div>
          <p className="report-lead">You process the world through observation before action. You are not passive; you are selective. You want enough signal to trust your next move.</p>
          <div className="trait-pills"><span>Focused</span><span>Persistent</span><span>Pattern-aware</span><span>Self-directed</span></div>
          <div className="report-callout"><span className="section-kicker mono">THE SHORT READ</span><p>You are at your best when a difficult situation can become a clear next step. Your edge is follow-through. Your work is learning when to move before every variable is resolved.</p></div>
        </div>

        <aside className="report-score-panel" aria-label="Example virtue scores">
          <div className="report-score-head"><span className="mono">SIGNAL MAP</span><strong>71 / 100</strong></div>
          {dimensions.map((dimension) => <div className="report-score-item" key={dimension.label}><div><span>{dimension.label}</span><strong>{dimension.value}</strong></div><div className="meter"><span style={{ width: `${dimension.value}%`, background: dimension.color }} /></div></div>)}
          <p className="mono">A reflective pattern, not a diagnosis.</p>
        </aside>
      </section>

      <section className="report-sections" aria-label="Example report sections">
        <article className="report-detail-card"><Brain size={21} aria-hidden="true" /><div><span className="section-kicker mono">01 / STRENGTH</span><h2>Make the hard thing legible.</h2><p>You stay with complex problems long enough to find the thread. People may come to you when a situation feels too tangled to name.</p></div></article>
        <article className="report-detail-card"><Target size={21} aria-hidden="true" /><div><span className="section-kicker mono">02 / SHADOW EDGE</span><h2>Waiting for perfect signal.</h2><p>Your caution can look like patience, but sometimes it is a way to avoid the vulnerability of asking directly or being seen mid-process.</p></div></article>
        <article className="report-detail-card"><HeartHandshake size={21} aria-hidden="true" /><div><span className="section-kicker mono">03 / RELATIONSHIP STYLE</span><h2>Steady, honest, and low-drama.</h2><p>You want consistency more than performance. You open faster with people who communicate clearly and do what they say they will do.</p></div></article>
        <article className="report-detail-card"><BriefcaseBusiness size={21} aria-hidden="true" /><div><span className="section-kicker mono">04 / CAREER SIGNALS</span><h2>Follow-through is your unfair advantage.</h2><p>You may thrive in strategy, research, product work, writing, analysis, or any role where judgment has to become something useful.</p></div></article>
      </section>

      <section className="alignment-card">
        <div className="alignment-heading"><div><span className="section-kicker mono">05 / 7-DAY ALIGNMENT PLAN</span><h2>Turn the read into a small experiment.</h2></div><span className="alignment-count mono">7 DAYS</span></div>
        <ol>{alignmentPlan.map((action, index) => <li key={action}><span>{String(index + 1).padStart(2, "0")}</span>{action}</li>)}</ol>
      </section>

      <section className="report-cta"><div><span className="section-kicker">Ready for yours?</span><h2>Seven choices. A clearer next move.</h2><p>Take the free test first. The extended report opens the patterns behind your result.</p></div><a className="button primary" href="/#extractor">Take the test<ArrowRight size={16} aria-hidden="true" /></a></section>
    </main>
  );
}
