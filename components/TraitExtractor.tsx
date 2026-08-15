"use client";

import { useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  Brain,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Clipboard,
  Download,
  Eye,
  HeartHandshake,
  Lock,
  MessageSquareText,
  Radar,
  RefreshCcw,
  Target,
  Unlock,
} from "lucide-react";

type Archetype = {
  id: string;
  name: string;
  color: string;
  signal: string;
  summary: string;
  traits: string[];
  strength: string;
  blindSpot: string;
  relationship: string;
  career: string;
  triggers: string[];
  actions: string[];
  scores: Record<string, number>;
};

const samples = [
  {
    label: "Journal",
    text:
      "I keep noticing patterns before people say them out loud. I want deeper work and calmer relationships, but I often wait too long to ask directly. I need space to think, then I can act with real focus.",
  },
  {
    label: "Dating",
    text:
      "I like consistency and emotional honesty. I lose interest when someone is performative or vague. I am warm when I feel safe, but I can disappear into my head when I feel pressured.",
  },
  {
    label: "Career",
    text:
      "I want work that lets me connect ideas, build useful systems, and make decisions with care. I get drained by constant noise, unclear priorities, and people who confuse urgency with importance.",
  },
];

const virtueScale = [
  { label: "Determination", color: "#c64b45" },
  { label: "Bravery", color: "#ff9a55" },
  { label: "Justice", color: "#f5dc5f" },
  { label: "Kindness", color: "#4b8f86" },
  { label: "Patience", color: "#6bd8df" },
  { label: "Integrity", color: "#4f79d1" },
  { label: "Perseverance", color: "#c18cff" },
];

const archetypes: Archetype[] = [
  {
    id: "determination",
    name: "Determination",
    color: "#c64b45",
    signal: "Your soul color leans red: steady, focused, and harder to shake than people expect.",
    summary:
      "You keep moving when the shape is still forming. You want enough truth to trust the next step, and once you have it, you can commit with real force.",
    traits: ["Focused", "Persistent", "Pattern-aware", "Self-directed"],
    strength: "You stay with hard problems long enough to make them legible.",
    blindSpot: "You may delay the ask while waiting for a cleaner moment.",
    relationship:
      "You need sincerity and consistency. You open faster when the other person is direct, calm, and not playing games.",
    career:
      "You may fit strategy, research, product thinking, writing, analysis, or any role where follow-through matters.",
    triggers: ["Vague expectations", "performative urgency", "being pushed before context is clear"],
    actions: [
      "Write down one decision you are delaying.",
      "Name the missing information you still need.",
      "Ask one direct question instead of guessing.",
      "Share one unfinished thought with someone safe.",
      "Choose one small public action.",
      "Notice what drained you this week.",
      "Decide what to keep, stop, or change.",
    ],
    scores: { depth: 88, clarity: 74, connection: 68, momentum: 61 },
  },
  {
    id: "kindness",
    name: "Kindness",
    color: "#4b8f86",
    signal: "Your soul color leans green: warm, attentive, and tuned to the emotional weather around you.",
    summary:
      "You sense people quickly and respond with care. You can turn tension into a softer landing, but you need your own boundaries to stay bright.",
    traits: ["Empathic", "Warm", "Steady", "Meaning-seeking"],
    strength: "You help people feel seen, which makes hard conversations easier to enter.",
    blindSpot: "You may absorb emotional weight that was never yours to carry.",
    relationship:
      "You thrive with reciprocity. You do best with people who answer your openness with steadiness and real follow-through.",
    career:
      "You may fit coaching, community, teaching, facilitation, brand, customer strategy, or care-centered leadership.",
    triggers: ["Cold silence", "unspoken resentment", "relationships that only take"],
    actions: [
      "Choose one conversation that needs a cleaner boundary.",
      "Write the feeling without solving it.",
      "Ask for one concrete form of support.",
      "Stop one emotional task you were never assigned.",
      "Give your energy to one reciprocal relationship.",
      "Turn one insight into a calendar action.",
      "Review what felt nourishing versus depleting.",
    ],
    scores: { depth: 78, clarity: 66, connection: 91, momentum: 72 },
  },
  {
    id: "integrity",
    name: "Integrity",
    color: "#4f79d1",
    signal: "Your soul color leans blue: clear, structured, and built around fair decisions.",
    summary:
      "You like ideas that become usable. You are drawn to clean systems, good judgment, and plans that reduce noise instead of adding to it.",
    traits: ["Grounded", "Structured", "Reliable", "Improvement-oriented"],
    strength: "You can turn ambiguity into a working plan without losing sight of real constraints.",
    blindSpot: "You may dismiss emotional information when it does not arrive in a tidy form.",
    relationship:
      "You show care through consistency and practical support. You benefit from naming feelings before trying to fix the situation.",
    career:
      "You may fit operations, product management, analytics, engineering, finance, planning, or process design.",
    triggers: ["Moving goals", "unfinished loops", "emotional chaos with no next step"],
    actions: [
      "List one messy area that needs a simpler system.",
      "Separate facts, feelings, and assumptions.",
      "Create one decision rule for the week.",
      "Ask what support looks like before solving.",
      "Remove one repeated friction point.",
      "Schedule time for reflection, not only execution.",
      "Review what became easier after structure.",
    ],
    scores: { depth: 63, clarity: 89, connection: 58, momentum: 80 },
  },
  {
    id: "curiosity",
    name: "Curiosity",
    color: "#d6a63a",
    signal: "Your soul color leans gold: alert, inquisitive, and hungry for the pattern underneath the pattern.",
    summary:
      "You like to understand before you decide. You ask good questions, connect clues quickly, and tend to grow when the environment gives you room to explore.",
    traits: ["Exploratory", "Observant", "Adaptive", "Insight-driven"],
    strength: "You notice what most people miss and can turn fragments into a useful picture.",
    blindSpot: "You may keep exploring after the answer is already visible.",
    relationship:
      "You want honesty, intellectual sparring, and a little room to think out loud. Predictability helps, but boredom does not.",
    career:
      "You may fit research, product discovery, design, writing, strategy, or any role that rewards synthesis.",
    triggers: ["Closed-minded answers", "premature certainty", "having to choose without enough signal"],
    actions: [
      "Write the question underneath the question.",
      "Choose one direction and test it for a week.",
      "Ask for a concrete example instead of a general impression.",
      "Share one incomplete idea before it feels perfect.",
      "Replace one guess with one real data point.",
      "Notice where curiosity is helping versus stalling.",
      "Close one open loop today.",
    ],
    scores: { depth: 86, clarity: 71, connection: 62, momentum: 66 },
  },
];

const keywordMap = {
  depth: ["meaning", "deep", "patterns", "subtle", "reflect", "understand", "journal", "inner", "quiet", "think"],
  clarity: ["clear", "structure", "decision", "plan", "specific", "systems", "priorities", "order", "useful", "practical"],
  connection: ["relationship", "emotion", "people", "safe", "warm", "honest", "trust", "support", "care", "seen"],
  momentum: ["act", "action", "build", "move", "career", "work", "focus", "change", "public", "energy"],
};

const fallbackText =
  "I want a clearer view of my personality. I care about meaningful work, honest relationships, and making better decisions without overthinking every move.";

function scoreText(text: string) {
  const normalized = text.toLowerCase();
  const scores = Object.fromEntries(Object.keys(keywordMap).map((key) => [key, 45])) as Record<string, number>;

  Object.entries(keywordMap).forEach(([key, words]) => {
    words.forEach((word) => {
      const matches = normalized.match(new RegExp(`\\b${word}\\b`, "g"));
      scores[key] += (matches?.length ?? 0) * 7;
    });
  });

  const lengthBoost = Math.min(18, Math.floor(text.length / 80));
  scores.depth += lengthBoost;
  scores.clarity += normalized.includes("need") || normalized.includes("want") ? 8 : 0;
  scores.connection += normalized.includes("relationship") || normalized.includes("trust") ? 10 : 0;
  scores.momentum += normalized.includes("work") || normalized.includes("career") ? 10 : 0;

  Object.keys(scores).forEach((key) => {
    scores[key] = Math.min(96, Math.max(34, scores[key]));
  });

  return scores;
}

function chooseArchetype(scores: Record<string, number>) {
  if (scores.connection >= scores.clarity && scores.connection >= scores.depth) return archetypes[1];
  if (scores.clarity >= scores.depth && scores.clarity >= scores.momentum) return archetypes[2];
  if (scores.depth >= scores.momentum) return archetypes[3];
  return archetypes[0];
}

function buildProfile(input: string) {
  const text = input.trim().length > 24 ? input : fallbackText;
  const scores = scoreText(text);
  const base = chooseArchetype(scores);
  return { ...base, scores };
}

function meterColor(key: string) {
  if (key === "connection") return "var(--teal)";
  if (key === "clarity") return "var(--amber)";
  if (key === "momentum") return "var(--coral)";
  return "var(--ink)";
}

function SignalBoard({ profile, statusLabel, readCount }: { profile: Archetype; statusLabel: string; readCount: number }) {
  const averageSignal = Math.round(
    Object.values(profile.scores).reduce((total, value) => total + value, 0) / Object.keys(profile.scores).length,
  );
  const dominantSignal = Object.entries(profile.scores).sort((a, b) => b[1] - a[1])[0][0];
  const nodes = [
    { key: "depth", label: "Depth", x: 20 + profile.scores.depth * 0.38, y: 68 - profile.scores.depth * 0.28, color: "var(--coral)" },
    { key: "clarity", label: "Clarity", x: 78 - profile.scores.clarity * 0.34, y: 26 + profile.scores.clarity * 0.26, color: "var(--amber)" },
    { key: "connection", label: "Connection", x: 26 + profile.scores.connection * 0.28, y: 26 + profile.scores.connection * 0.18, color: "var(--teal)" },
    { key: "momentum", label: "Momentum", x: 80 - profile.scores.momentum * 0.31, y: 74 - profile.scores.momentum * 0.24, color: "var(--accent-soft)" },
  ];

  return (
    <aside className="signal-board" aria-label="Signal board">
      <div className="signal-board-head">
        <span>SUBJECT // UNRESOLVED</span>
        <span>{profile.name.toUpperCase()}</span>
      </div>
      <div className="signal-grid">
        <span className="axis-label north mono">Depth</span>
        <span className="axis-label east mono">Clarity</span>
        <span className="axis-label south mono">Momentum</span>
        <span className="axis-label west mono">Connection</span>
        <div className="signal-core" />
        <div className="signal-core-label mono">
          <span>primary virtue</span>
          <strong>{profile.name}</strong>
        </div>
        {nodes.map((node) => (
          <span
            key={node.key}
            className="signal-node"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              background: node.color,
            }}
            aria-hidden="true"
            title={node.label}
          />
        ))}
        <div className="signal-diamond" />
      </div>
      <div className="signal-readout mono" aria-label="Reading status">
        <span>
          <strong>{averageSignal}</strong>
          coherence
        </span>
        <span>
          <strong>{profile.traits.length}</strong>
          markers
        </span>
        <span>
          <strong>{dominantSignal}</strong>
          dominant
        </span>
      </div>
      <div className="virtue-scale mono" aria-label="Seven virtues scale">
        {virtueScale.map((virtue) => (
          <span key={virtue.label} className={profile.name === virtue.label ? "active" : ""}>
            <i style={{ background: virtue.color }} aria-hidden="true" />
            {virtue.label}
          </span>
        ))}
      </div>
      <div className="signal-board-foot">
        <span>
          {statusLabel} / pass {String(readCount).padStart(2, "0")}
        </span>
        <span>signal spread {Math.max(profile.scores.depth, profile.scores.connection, profile.scores.clarity, profile.scores.momentum)}%</span>
      </div>
    </aside>
  );
}

export function TraitExtractor() {
  const [text, setText] = useState(samples[0].text);
  const [profile, setProfile] = useState<Archetype>(() => buildProfile(samples[0].text));
  const [unlocked, setUnlocked] = useState(false);
  const [sampleIndex, setSampleIndex] = useState<number | null>(0);
  const [isReading, setIsReading] = useState(false);
  const [readCount, setReadCount] = useState(1);
  const [statusLabel, setStatusLabel] = useState("sample loaded");
  const resultRef = useRef<HTMLElement | null>(null);

  const wordCount = useMemo(() => text.trim().split(/\s+/).filter(Boolean).length, [text]);
  const nextSampleIndex = sampleIndex === null ? 0 : (sampleIndex + 1) % samples.length;

  function pulseReadout(label: string, shouldScroll = true) {
    setIsReading(true);
    setStatusLabel(label);
    setReadCount((count) => count + 1);
    window.setTimeout(() => setIsReading(false), 520);

    if (shouldScroll) {
      window.setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    }
  }

  function loadSample(index: number, shouldScroll = false) {
    const sample = samples[index];
    setSampleIndex(index);
    setText(sample.text);
    setProfile(buildProfile(sample.text));
    setUnlocked(false);
    pulseReadout(`${sample.label.toLowerCase()} sample`, shouldScroll);
  }

  function analyze() {
    setProfile(buildProfile(text));
    setUnlocked(false);
    setSampleIndex(null);
    pulseReadout("read complete");
  }

  return (
    <section id="extractor" className="hero-shell" aria-labelledby="extractor-heading">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="eyebrow mono">
            <Radar size={15} aria-hidden="true" />
            VIRTUE SIGNAL READER
          </div>
          <h1 id="extractor-heading">Read the signal in your writing.</h1>
          <p>
            Paste a note, journal line, or reply draft. Get a quiet reading of your virtues, shadow edges, and the next
            move.
          </p>
          <div className="hero-actions">
            <button className="button primary" onClick={analyze}>
              {isReading ? "Reading..." : "Reveal virtues"}
              <ArrowRight size={16} aria-hidden="true" />
            </button>
            <button className="button secondary" onClick={() => loadSample(nextSampleIndex, true)}>
              Load {samples[nextSampleIndex].label}
            </button>
          </div>
          <div className="hero-meta mono" aria-label="Product guardrails">
            <span>private read</span>
            <span>no signup</span>
            <span>shareable output</span>
          </div>
          <div className="hero-protocol mono" aria-label="Reading protocol">
            <span>
              <strong>01</strong>
              text sample
            </span>
            <span>
              <strong>02</strong>
              virtue map
            </span>
            <span>
              <strong>03</strong>
              next move
            </span>
          </div>
        </div>

        <SignalBoard profile={profile} statusLabel={statusLabel} readCount={readCount} />
      </div>

      <div className="console-grid">
        <article className="console-panel input-panel">
          <div className="panel-heading">
            <div>
              <span className="section-kicker mono">INPUT</span>
              <h2>Text to read</h2>
            </div>
            <button
              className="icon-button"
              onClick={() => {
                setText("");
                setSampleIndex(null);
                setStatusLabel("input cleared");
              }}
              aria-label="Clear text"
              title="Clear text"
            >
              <RefreshCcw size={17} aria-hidden="true" />
            </button>
          </div>
          <textarea
            value={text}
            onChange={(event) => {
              setText(event.target.value);
              setSampleIndex(null);
            }}
            aria-label="Writing sample to analyze"
            placeholder="Paste a journal entry, chat excerpt, or answer: What do you want more of right now?"
          />
          <div className="sample-row mono" aria-label="Sample inputs">
            {samples.map((sample, index) => (
              <button
                key={sample.label}
                type="button"
                className={sampleIndex === index ? "active" : ""}
                onClick={() => loadSample(index)}
              >
                {sample.label}
              </button>
            ))}
          </div>
          <div className="input-footer mono">
            <span>{wordCount} words</span>
            <button className="button primary" onClick={analyze}>
              {isReading ? "Reading..." : "Read now"}
              <ArrowRight size={16} aria-hidden="true" />
            </button>
          </div>
        </article>

        <article
          ref={resultRef}
          className={isReading ? "console-panel result-panel is-reading" : "console-panel result-panel"}
          aria-live="polite"
          aria-busy={isReading}
        >
          <div className="panel-heading">
            <div>
              <span className="section-kicker mono">READOUT</span>
              <h2>{profile.name}</h2>
            </div>
            <span className="profile-badge mono">
              <Eye size={15} aria-hidden="true" />
              Live
            </span>
          </div>

          <p className="profile-signal">{profile.signal}</p>

          <div className="readout-strip mono" aria-label="Report coverage">
            <span>core mapped</span>
            <span>edge marked</span>
            <span>plan ready</span>
          </div>

          <div className="trait-pills">
            {profile.traits.map((trait) => (
              <span key={trait}>{trait}</span>
            ))}
          </div>

          <div className="score-grid">
            {Object.entries(profile.scores).map(([key, score]) => (
              <div key={key} className="score-item">
                <div className="score-label mono">
                  <span>{key}</span>
                  <strong>{score}</strong>
                </div>
                <div className="meter">
                  <span style={{ width: `${score}%`, background: meterColor(key) }} />
                </div>
              </div>
            ))}
          </div>

          <div className="preview-list">
            <article>
              <Brain size={18} aria-hidden="true" />
              <div>
                <h3>Strength</h3>
                <p>{profile.strength}</p>
              </div>
            </article>
            <article>
              <Target size={18} aria-hidden="true" />
              <div>
                <h3>Shadow edge</h3>
                <p>{profile.blindSpot}</p>
              </div>
            </article>
          </div>

          <div className={unlocked ? "unlock-panel open" : "unlock-panel"}>
            <div className="unlock-copy">
              {unlocked ? <Unlock size={18} aria-hidden="true" /> : <Lock size={18} aria-hidden="true" />}
              <div>
                <h3>{unlocked ? "Full dossier unlocked" : "Unlock the full dossier"}</h3>
                <p>
                  {unlocked
                    ? "Prototype mode shows the paid report inline."
                    : "Relationship patterns, career signals, triggers, and a 7-day alignment plan."}
                </p>
              </div>
            </div>
            <button className="button dark" onClick={() => setUnlocked((value) => !value)}>
              {unlocked ? "Hide dossier" : "Unlock for $12"}
              <ChevronRight size={16} aria-hidden="true" />
            </button>
          </div>
        </article>
      </div>

      {unlocked && (
        <div className="full-report">
          <div className="report-header">
            <div>
              <span className="section-kicker mono">DEEP REPORT</span>
              <h2>{profile.name}</h2>
              <p>{profile.summary}</p>
            </div>
            <div className="report-actions">
              <button className="icon-button" aria-label="Copy report" title="Copy report">
                <Clipboard size={18} aria-hidden="true" />
              </button>
              <button className="icon-button" aria-label="Download PDF" title="Download PDF">
                <Download size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="report-grid">
            <article>
              <HeartHandshake size={20} aria-hidden="true" />
              <h3>Relationship style</h3>
              <p>{profile.relationship}</p>
            </article>
            <article>
              <BriefcaseBusiness size={20} aria-hidden="true" />
              <h3>Career signals</h3>
              <p>{profile.career}</p>
            </article>
            <article>
              <MessageSquareText size={20} aria-hidden="true" />
              <h3>Triggers</h3>
              <ul>
                {profile.triggers.map((trigger) => (
                  <li key={trigger}>{trigger}</li>
                ))}
              </ul>
            </article>
            <article>
              <Check size={20} aria-hidden="true" />
              <h3>7-day alignment plan</h3>
              <ol>
                {profile.actions.map((action) => (
                  <li key={action}>{action}</li>
                ))}
              </ol>
            </article>
          </div>
        </div>
      )}
    </section>
  );
}
