"use client";

import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Brain, Check, ChevronRight, Eye, Lock, Radar, Target, Unlock } from "lucide-react";

type Dimension = "depth" | "clarity" | "connection" | "momentum";
type Scores = Record<Dimension, number>;
type Option = { label: string; score: Scores };
type Question = { prompt: string; options: Option[] };
type Profile = {
  name: string;
  color: string;
  signal: string;
  traits: string[];
  strength: string;
  blindSpot: string;
  relationship: string;
  career: string;
  actions: string[];
  scores: Scores;
};

const questions: Question[] = [
  {
    prompt: "You have an important decision, but the answer is not obvious. What do you do first?",
    options: [
      { label: "Look for the pattern and sit with the question a little longer.", score: { depth: 12, clarity: 3, connection: 2, momentum: 1 } },
      { label: "Turn the unknowns into a short list and choose a decision rule.", score: { depth: 2, clarity: 12, connection: 2, momentum: 2 } },
      { label: "Talk it through with someone who will be honest with me.", score: { depth: 2, clarity: 2, connection: 12, momentum: 2 } },
      { label: "Pick the smallest useful move and learn from doing it.", score: { depth: 2, clarity: 3, connection: 1, momentum: 12 } },
    ],
  },
  {
    prompt: "A friend is upset but says, 'I am fine.' What feels most natural?",
    options: [
      { label: "Notice what is not being said before I respond.", score: { depth: 10, clarity: 2, connection: 6, momentum: 1 } },
      { label: "Ask a clear question so they can say what they need.", score: { depth: 1, clarity: 8, connection: 8, momentum: 1 } },
      { label: "Make room for them and let them know I am here.", score: { depth: 2, clarity: 1, connection: 13, momentum: 2 } },
      { label: "Offer a practical next step once they are ready.", score: { depth: 1, clarity: 6, connection: 4, momentum: 9 } },
    ],
  },
  {
    prompt: "Your week becomes overloaded. How do you get your footing back?",
    options: [
      { label: "Step away briefly and work out what matters beneath the noise.", score: { depth: 12, clarity: 4, connection: 1, momentum: 1 } },
      { label: "Sort tasks by importance and make a realistic plan.", score: { depth: 2, clarity: 13, connection: 1, momentum: 3 } },
      { label: "Check in with the people affected before I reorganize everything.", score: { depth: 1, clarity: 2, connection: 12, momentum: 3 } },
      { label: "Start with the hardest useful task and build momentum.", score: { depth: 2, clarity: 3, connection: 1, momentum: 13 } },
    ],
  },
  {
    prompt: "Which kind of praise feels most meaningful to you?",
    options: [
      { label: "'You saw something important that others missed.'", score: { depth: 12, clarity: 2, connection: 3, momentum: 1 } },
      { label: "'You made a confusing situation clear and workable.'", score: { depth: 2, clarity: 12, connection: 2, momentum: 2 } },
      { label: "'People feel safe and understood around you.'", score: { depth: 2, clarity: 1, connection: 13, momentum: 2 } },
      { label: "'You made the thing happen when it counted.'", score: { depth: 1, clarity: 3, connection: 1, momentum: 13 } },
    ],
  },
  {
    prompt: "When a disagreement starts to harden, what is your best move?",
    options: [
      { label: "Name the underlying assumption that may be driving it.", score: { depth: 11, clarity: 4, connection: 3, momentum: 1 } },
      { label: "Separate facts, feelings, and the decision that needs making.", score: { depth: 2, clarity: 12, connection: 3, momentum: 2 } },
      { label: "Help each person feel heard before pushing for a solution.", score: { depth: 2, clarity: 2, connection: 13, momentum: 2 } },
      { label: "Move the conversation toward one concrete agreement.", score: { depth: 1, clarity: 6, connection: 3, momentum: 10 } },
    ],
  },
  {
    prompt: "What tends to drain you fastest?",
    options: [
      { label: "Shallow answers when something clearly has more depth.", score: { depth: 12, clarity: 2, connection: 2, momentum: 1 } },
      { label: "Vague priorities, moving goalposts, and messy systems.", score: { depth: 2, clarity: 13, connection: 1, momentum: 2 } },
      { label: "Coldness, silence, or relationships that only take.", score: { depth: 1, clarity: 1, connection: 13, momentum: 3 } },
      { label: "Endless discussion with no decision or next move.", score: { depth: 2, clarity: 4, connection: 1, momentum: 12 } },
    ],
  },
  {
    prompt: "At the end of a good day, what makes you feel most aligned?",
    options: [
      { label: "I learned something that changed how I see the bigger picture.", score: { depth: 13, clarity: 3, connection: 2, momentum: 1 } },
      { label: "I built order where there used to be uncertainty.", score: { depth: 2, clarity: 13, connection: 1, momentum: 3 } },
      { label: "I had a real moment of honesty or care with someone.", score: { depth: 2, clarity: 1, connection: 13, momentum: 2 } },
      { label: "I moved a meaningful project forward.", score: { depth: 1, clarity: 3, connection: 1, momentum: 13 } },
    ],
  },
];

const profiles: Record<string, Omit<Profile, "scores">> = {
  depth: {
    name: "Curiosity", color: "#d6a63a", signal: "Your soul color leans gold: observant, exploratory, and drawn to the pattern underneath the pattern.",
    traits: ["Observant", "Exploratory", "Adaptive", "Insight-driven"], strength: "You notice what most people miss and turn fragments into a useful picture.", blindSpot: "You may keep exploring after the answer is already visible.",
    relationship: "You want honesty, intellectual sparring, and room to think out loud.", career: "You may fit research, discovery, design, writing, strategy, or synthesis-heavy work.", actions: ["Write the question beneath the question.", "Test one direction for a week.", "Replace one guess with data.", "Share one incomplete idea.", "Close one open loop."],
  },
  clarity: {
    name: "Integrity", color: "#4f79d1", signal: "Your soul color leans blue: clear, structured, and built around fair decisions.",
    traits: ["Grounded", "Structured", "Reliable", "Fair-minded"], strength: "You can turn ambiguity into a working plan without losing sight of constraints.", blindSpot: "You may try to solve feelings before fully hearing them.",
    relationship: "You show care through consistency and practical support. Naming feelings before fixing helps.", career: "You may fit operations, product management, analytics, engineering, planning, or process design.", actions: ["Simplify one recurring system.", "Separate facts from assumptions.", "Create one decision rule.", "Ask before solving.", "Review what became easier."],
  },
  connection: {
    name: "Kindness", color: "#4b8f86", signal: "Your soul color leans green: warm, attentive, and tuned to the emotional weather around you.",
    traits: ["Empathic", "Warm", "Steady", "Meaning-seeking"], strength: "You help people feel seen, which makes hard conversations easier to enter.", blindSpot: "You may absorb emotional weight that was never yours to carry.",
    relationship: "You thrive with reciprocity and do best with people who answer openness with steadiness.", career: "You may fit community, teaching, facilitation, customer strategy, or care-centered leadership.", actions: ["Choose one cleaner boundary.", "Write the feeling without solving it.", "Ask for concrete support.", "Give energy to a reciprocal relationship.", "Review what felt nourishing."],
  },
  momentum: {
    name: "Determination", color: "#c64b45", signal: "Your soul color leans red: steady, focused, and harder to shake than people expect.",
    traits: ["Focused", "Persistent", "Self-directed", "Practical"], strength: "You stay with hard problems long enough to make progress visible.", blindSpot: "You may move into action before everyone has caught up emotionally.",
    relationship: "You value sincerity and follow-through. You open faster when the other person is direct and calm.", career: "You may fit building, strategy, operations, product work, or any role where follow-through matters.", actions: ["Choose one meaningful next move.", "State a deadline you can keep.", "Finish one delayed task.", "Turn one intention into a calendar block.", "Review what moved forward."],
  },
};

function getProfile(answers: number[]): Profile {
  const scores: Scores = { depth: 42, clarity: 42, connection: 42, momentum: 42 };
  answers.forEach((answer, questionIndex) => {
    const option = questions[questionIndex].options[answer];
    (Object.keys(scores) as Dimension[]).forEach((dimension) => { scores[dimension] += option.score[dimension]; });
  });
  (Object.keys(scores) as Dimension[]).forEach((dimension) => { scores[dimension] = Math.min(96, scores[dimension]); });
  const dominant = (Object.entries(scores) as [Dimension, number][]).sort((a, b) => b[1] - a[1])[0][0];
  return { ...profiles[dominant], scores };
}

function meterColor(key: Dimension) {
  if (key === "connection") return "var(--teal)";
  if (key === "clarity") return "var(--amber)";
  if (key === "momentum") return "var(--coral)";
  return "var(--ink)";
}

export function TraitExtractor() {
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [unlocked, setUnlocked] = useState(false);
  const [isReading, setIsReading] = useState(false);
  const quizRef = useRef<HTMLElement | null>(null);
  const resultRef = useRef<HTMLElement | null>(null);
  const question = questions[activeQuestion];
  const answeredCount = answers.filter((answer) => answer !== null).length;
  const selectedAnswer = answers[activeQuestion];
  const isLastQuestion = activeQuestion === questions.length - 1;

  function startQuiz() { quizRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }); }
  function selectAnswer(optionIndex: number) {
    setAnswers((current) => current.map((answer, index) => index === activeQuestion ? optionIndex : answer));
    setProfile(null); setUnlocked(false);
  }
  function nextQuestion() {
    if (selectedAnswer === null) return;
    if (!isLastQuestion) { setActiveQuestion((index) => index + 1); return; }
    setIsReading(true);
    window.setTimeout(() => {
      setProfile(getProfile(answers as number[])); setUnlocked(false); setIsReading(false);
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 480);
  }
  function restartQuiz() { setAnswers(Array(questions.length).fill(null)); setActiveQuestion(0); setProfile(null); setUnlocked(false); startQuiz(); }

  return (
    <section id="extractor" className="hero-shell" aria-labelledby="extractor-heading">
      <div className="hero-grid assessment-hero">
        <div className="hero-copy">
          <div className="eyebrow mono"><Radar size={15} aria-hidden="true" />SOUL VIRTUES TEST</div>
          <h1 id="extractor-heading">Soul Virtues Test</h1>
          <p>Seven choices. One color that reflects how you move through the world.</p>
          <div className="hero-actions"><button className="button primary" onClick={startQuiz}>Start the test<ArrowRight size={16} aria-hidden="true" /></button></div>
          <div className="hero-meta mono"><span>7 questions</span><span>about 2 min</span><span>private by default</span></div>
        </div>
        <div className="hero-visual" aria-label="A colorful portrait representing the soul color test">
          <div className="hero-visual-status mono"><span>YOUR COLOR</span><strong>AWAITING</strong></div>
          <div className="hero-swatch-rack" aria-label="Seven virtue colors"><i /><i /><i /><i /><i /><i /><i /></div>
        </div>
      </div>

      <div className="console-grid quiz-console">
        <article ref={quizRef} className="console-panel quiz-panel" aria-labelledby="question-heading">
          <div className="panel-heading"><div><span className="section-kicker mono">QUESTION {activeQuestion + 1} OF {questions.length}</span><h2 id="question-heading">{question.prompt}</h2></div><span className="profile-badge mono">{answeredCount}/{questions.length} answered</span></div>
          <div className="quiz-progress" aria-label={`${answeredCount} of ${questions.length} questions answered`}><span style={{ width: `${(answeredCount / questions.length) * 100}%` }} /></div>
          <div className="quiz-options" role="radiogroup" aria-label={question.prompt}>
            {question.options.map((option, index) => <button key={option.label} type="button" className={selectedAnswer === index ? "quiz-option selected" : "quiz-option"} role="radio" aria-checked={selectedAnswer === index} onClick={() => selectAnswer(index)}><span className="option-marker" aria-hidden="true">{String.fromCharCode(65 + index)}</span><span>{option.label}</span></button>)}
          </div>
          <div className="quiz-footer"><button className="button secondary" onClick={() => setActiveQuestion((index) => Math.max(0, index - 1))} disabled={activeQuestion === 0}><ArrowLeft size={16} aria-hidden="true" />Back</button><button className="button primary" onClick={nextQuestion} disabled={selectedAnswer === null || isReading}>{isLastQuestion ? "See my result" : "Next question"}<ArrowRight size={16} aria-hidden="true" /></button></div>
        </article>
        <article ref={resultRef} className={isReading ? "console-panel result-panel is-reading" : "console-panel result-panel"} aria-live="polite" aria-busy={isReading}>
          {!profile ? <div className="result-empty"><Eye size={22} aria-hidden="true" /><span className="section-kicker mono">YOUR RESULT</span><h2>{isReading ? "Reading your answers..." : "Your virtue reflection will appear here."}</h2><p>Complete all seven questions to reveal your leading virtue, core strength, and a practical next move.</p></div> : <>
            <div className="panel-heading"><div><span className="section-kicker mono">YOUR LEADING VIRTUE</span><h2>{profile.name}</h2></div><span className="profile-badge mono" style={{ borderColor: profile.color }}><Eye size={15} aria-hidden="true" />Complete</span></div>
            <p className="profile-signal">{profile.signal}</p>
            <div className="readout-strip mono"><span>7 answers mapped</span><span>strength named</span><span>next move ready</span></div>
            <div className="trait-pills">{profile.traits.map((trait) => <span key={trait}>{trait}</span>)}</div>
            <div className="score-grid">{(Object.entries(profile.scores) as [Dimension, number][]).map(([key, score]) => <div key={key} className="score-item"><div className="score-label mono"><span>{key}</span><strong>{score}</strong></div><div className="meter"><span style={{ width: `${score}%`, background: meterColor(key) }} /></div></div>)}</div>
            <div className="preview-list"><article><Brain size={18} aria-hidden="true" /><div><h3>Strength</h3><p>{profile.strength}</p></div></article><article><Target size={18} aria-hidden="true" /><div><h3>Shadow edge</h3><p>{profile.blindSpot}</p></div></article></div>
            <div className={unlocked ? "unlock-panel open" : "unlock-panel"}><div className="unlock-copy">{unlocked ? <Unlock size={18} aria-hidden="true" /> : <Lock size={18} aria-hidden="true" />}<div><h3>{unlocked ? "Full reflection open" : "Open the full reflection"}</h3><p>{unlocked ? "Relationship and career reflections are now shown below." : "Relationship patterns, career signals, and a 5-day alignment plan."}</p></div></div><button className="button dark" onClick={() => setUnlocked((value) => !value)}>{unlocked ? "Hide reflection" : "Preview full report"}<ChevronRight size={16} aria-hidden="true" /></button></div>
            <button className="restart-link" onClick={restartQuiz}>Retake the test</button>
          </>}
        </article>
      </div>
      {unlocked && profile && <div className="full-report"><div className="report-header"><div><span className="section-kicker mono">EXTENDED REFLECTION</span><h2>{profile.name}</h2><p>{profile.signal}</p></div></div><div className="report-grid"><article><Check size={20} aria-hidden="true" /><div><h3>Relationship style</h3><p>{profile.relationship}</p></div></article><article><Target size={20} aria-hidden="true" /><div><h3>Career signals</h3><p>{profile.career}</p></div></article><article><Brain size={20} aria-hidden="true" /><div><h3>5-day alignment plan</h3><ol>{profile.actions.map((action) => <li key={action}>{action}</li>)}</ol></div></article></div></div>}
    </section>
  );
}
