import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Brain, BriefcaseBusiness, Compass, HeartHandshake, MessageCircleQuestion, Target } from "lucide-react";
import { site, socialImage } from "@/lib/site";

export const metadata: Metadata = {
  title: "Soul Color Report Example: Red Determination Profile",
  description: "Read a complete soul color report example with color meaning, strengths, growth edge, relationships, career signals, decision style, and a 7-day plan.",
  alternates: { canonical: `${site.url}/sample-report` },
  openGraph: {
    title: "Soul Color Report Example: Red Determination Profile",
    description: "See the depth and sections included in a completed Soul Color Test reflection.",
    url: `${site.url}/sample-report`,
    type: "article",
    images: [socialImage],
  },
  twitter: { card: "summary_large_image", title: "Soul Color Report Example: Red Determination Profile", description: "See the depth and sections included in a completed Soul Color Test reflection.", images: [socialImage] },
};

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
          <p>This is the kind of reflection a completed Soul Color Test can produce.</p>
        </div>
        <div className="report-intro-mark" aria-hidden="true"><span>SC</span></div>
      </section>

      <section className="report-result-shell" aria-labelledby="result-heading">
        <div className="report-result-main">
          <div className="report-result-heading">
            <div><span className="section-kicker mono">LEADING VIRTUE / 01</span><h2 id="result-heading">Determination</h2></div>
            <span className="result-color-chip"><i />Red</span>
          </div>
          <p className="report-lead">You process the world through movement. Once a goal feels meaningful, you narrow the distance between intention and action and help other people see what can happen next.</p>
          <div className="trait-pills"><span>Focused</span><span>Persistent</span><span>Pattern-aware</span><span>Self-directed</span></div>
          <div className="report-callout"><span className="section-kicker mono">THE SHORT READ</span><p>You are at your best when a difficult situation can become a clear next step. Your edge is follow-through. Your work is learning when to move before every variable is resolved.</p></div>
        </div>

        <aside className="report-score-panel" aria-label="Example virtue scores">
          <div className="report-score-head"><span className="mono">SIGNAL MAP</span><strong>71 / 100</strong></div>
          {dimensions.map((dimension) => <div className="report-score-item" key={dimension.label}><div><span>{dimension.label}</span><strong>{dimension.value}</strong></div><div className="meter"><span style={{ width: `${dimension.value}%`, background: dimension.color }} /></div></div>)}
          <p className="mono">A reflective pattern, not a diagnosis.</p>
        </aside>
      </section>

      <section className="report-narrative" aria-labelledby="pattern-heading">
        <div><span className="section-kicker mono">YOUR PATTERN IN MOTION</span><h2 id="pattern-heading">Momentum is how you make meaning.</h2></div>
        <div className="report-narrative-copy"><p>You are likely to feel most like yourself when effort has direction. A vague possibility becomes energizing when it can be named, scheduled, built, or tested. This does not mean you are always impatient; it means progress helps you think.</p><p>Others may experience you as steady in moments that make them hesitate. Your growth is not to become less decisive. It is to leave enough room for emotion, uncertainty, and other people&apos;s timing to add useful information before the next move is set.</p></div>
      </section>

      <section className="report-sections" aria-label="Example report sections">
        <article className="report-detail-card"><Brain size={21} aria-hidden="true" /><div><span className="section-kicker mono">01 / STRENGTH</span><h2>Make progress visible.</h2><p>You stay with difficult work long enough for movement to become real. People may look to you when a plan needs an owner, a decision needs courage, or energy has started to scatter.</p><p className="report-detail-note"><strong>At your best:</strong> You turn pressure into focus without confusing speed with importance.</p></div></article>
        <article className="report-detail-card"><Target size={21} aria-hidden="true" /><div><span className="section-kicker mono">02 / SHADOW EDGE</span><h2>Moving before everyone arrives.</h2><p>Your decisiveness can outrun the emotional pace of a room. When that happens, a good solution may still feel imposed to people who needed one more question or one more minute.</p><p className="report-detail-note"><strong>Growth question:</strong> What deserves to be heard before the next move becomes final?</p></div></article>
        <article className="report-detail-card"><HeartHandshake size={21} aria-hidden="true" /><div><span className="section-kicker mono">03 / RELATIONSHIP STYLE</span><h2>Steady, honest, and low-drama.</h2><p>You want consistency more than performance. You often express care by showing up, solving what can be solved, and keeping the promises you make.</p><p className="report-detail-note"><strong>Practice:</strong> Ask whether the other person wants comfort, perspective, or a plan before offering the next step.</p></div></article>
        <article className="report-detail-card"><BriefcaseBusiness size={21} aria-hidden="true" /><div><span className="section-kicker mono">04 / CAREER SIGNALS</span><h2>Follow-through is your unfair advantage.</h2><p>You may thrive in product work, operations, entrepreneurship, strategy, or any role where judgment has to become something concrete and useful.</p><p className="report-detail-note"><strong>Best-fit environment:</strong> Clear ownership, visible outcomes, and enough autonomy to move without constant consensus.</p></div></article>
        <article className="report-detail-card"><Compass size={21} aria-hidden="true" /><div><span className="section-kicker mono">05 / DECISION STYLE</span><h2>Find the useful move.</h2><p>You reduce uncertainty by testing reality. Small, reversible action often gives you better information than prolonged speculation.</p><p className="report-detail-note"><strong>Watch for:</strong> Treating every pause as resistance instead of a chance to improve the decision.</p></div></article>
        <article className="report-detail-card"><MessageCircleQuestion size={21} aria-hidden="true" /><div><span className="section-kicker mono">06 / REFLECTION PROMPT</span><h2>What is urgency protecting?</h2><p>Think of one decision you want to finish quickly. Is the urgency coming from genuine timing, excitement, discomfort, or someone else&apos;s expectations?</p><p className="report-detail-note"><strong>Write for five minutes:</strong> If I slowed down without stopping, I would notice...</p></div></article>
      </section>

      <section className="alignment-card">
        <div className="alignment-heading"><div><span className="section-kicker mono">07 / 7-DAY ALIGNMENT PLAN</span><h2>Turn the read into a small experiment.</h2></div><span className="alignment-count mono">7 DAYS</span></div>
        <ol>{alignmentPlan.map((action, index) => <li key={action}><span>{String(index + 1).padStart(2, "0")}</span>{action}</li>)}</ol>
      </section>

      <section className="report-cta"><div><span className="section-kicker">Ready for yours?</span><h2>Find the pattern behind your color.</h2><p>Choose the 7-question Quick Test or the 16-question Deep Test. Your on-page reflection is free.</p></div><Link className="button primary" href="/#extractor">Take the test<ArrowRight size={16} aria-hidden="true" /></Link></section>
    </main>
  );
}
