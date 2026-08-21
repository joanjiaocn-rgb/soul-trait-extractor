"use client";

import { useRef, useState } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, BookOpen, Brain, BriefcaseBusiness, CalendarCheck, Check, Eye, HeartHandshake, Radar, Target } from "lucide-react";

type Dimension = "depth" | "clarity" | "connection" | "momentum";
type Scores = Record<Dimension, number>;
type Option = { label: string; score: Scores };
type Question = { prompt: string; options: Option[] };
type Profile = {
  name: string;
  colorName: string;
  color: string;
  signal: string;
  overview: string;
  traits: string[];
  strength: string;
  blindSpot: string;
  growthPrompt: string;
  relationship: string;
  relationshipPractice: string;
  career: string;
  careerEnvironment: string;
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
    name: "Curiosity", colorName: "Gold", color: "#d6a63a", signal: "Your soul color leans gold: observant, exploratory, and drawn to the pattern underneath the pattern.",
    overview: "You tend to understand life by looking beneath the first answer. New information energizes you, especially when it changes the shape of a question you thought you already understood.",
    traits: ["Observant", "Exploratory", "Adaptive", "Insight-driven"], strength: "You notice what most people miss and turn fragments into a useful picture.", blindSpot: "You may keep exploring after the answer is already visible.", growthPrompt: "What would become possible if you treated today's best answer as enough to begin?",
    relationship: "You want honesty, intellectual sparring, and room to think out loud.", relationshipPractice: "Tell people whether you need listening, perspective, or a decision. It keeps curiosity from feeling like distance.", career: "You may fit research, discovery, design, writing, strategy, or synthesis-heavy work.", careerEnvironment: "Look for work with open questions, protected thinking time, and a clear moment when insight must become action.", actions: ["Write the question beneath the question.", "Test one direction for a week.", "Replace one guess with data.", "Share one incomplete idea.", "Close one open loop."],
  },
  clarity: {
    name: "Integrity", colorName: "Blue", color: "#4f79d1", signal: "Your soul color leans blue: clear, structured, and built around fair decisions.",
    overview: "You feel most grounded when words, choices, and values line up. People often trust your judgment because you make expectations visible and try to apply the same standard to yourself.",
    traits: ["Grounded", "Structured", "Reliable", "Fair-minded"], strength: "You can turn ambiguity into a working plan without losing sight of constraints.", blindSpot: "You may try to solve feelings before fully hearing them.", growthPrompt: "Where would understanding matter more than reaching the cleanest answer?",
    relationship: "You show care through consistency and practical support. Naming feelings before fixing helps.", relationshipPractice: "Before offering a solution, reflect back the feeling you heard and ask whether advice is wanted.", career: "You may fit operations, product management, analytics, engineering, planning, or process design.", careerEnvironment: "You are likely to do well where ownership is explicit, quality matters, and better systems are welcomed rather than resisted.", actions: ["Simplify one recurring system.", "Separate facts from assumptions.", "Create one decision rule.", "Ask before solving.", "Review what became easier."],
  },
  connection: {
    name: "Kindness", colorName: "Green", color: "#4b8f86", signal: "Your soul color leans green: warm, attentive, and tuned to the emotional weather around you.",
    overview: "You read a room through tone, trust, and what people may be carrying silently. Your instinct is to create enough safety for honesty, belonging, and repair to become possible.",
    traits: ["Empathic", "Warm", "Steady", "Meaning-seeking"], strength: "You help people feel seen, which makes hard conversations easier to enter.", blindSpot: "You may absorb emotional weight that was never yours to carry.", growthPrompt: "What care can you offer without taking responsibility for another person's whole experience?",
    relationship: "You thrive with reciprocity and do best with people who answer openness with steadiness.", relationshipPractice: "Name one need directly instead of hoping it will be noticed. Reciprocity becomes easier when your care has a clear boundary.", career: "You may fit community, teaching, facilitation, customer strategy, or care-centered leadership.", careerEnvironment: "Choose teams that value emotional intelligence and also protect you from becoming the unofficial container for every problem.", actions: ["Choose one cleaner boundary.", "Write the feeling without solving it.", "Ask for concrete support.", "Give energy to a reciprocal relationship.", "Review what felt nourishing."],
  },
  momentum: {
    name: "Determination", colorName: "Red", color: "#c64b45", signal: "Your soul color leans red: steady, focused, and harder to shake than people expect.",
    overview: "You understand yourself through movement. A meaningful goal sharpens your attention, and you are often the person who turns a difficult conversation or vague intention into a concrete next step.",
    traits: ["Focused", "Persistent", "Self-directed", "Practical"], strength: "You stay with hard problems long enough to make progress visible.", blindSpot: "You may move into action before everyone has caught up emotionally.", growthPrompt: "Which conversation deserves one more minute of listening before you decide what happens next?",
    relationship: "You value sincerity and follow-through. You open faster when the other person is direct and calm.", relationshipPractice: "Slow down at the point of tension and ask what the other person needs you to understand before you act.", career: "You may fit building, strategy, operations, product work, or any role where follow-through matters.", careerEnvironment: "Look for clear ownership, visible outcomes, and enough autonomy to move. Constant consensus-seeking will drain your best energy.", actions: ["Choose one meaningful next move.", "State a deadline you can keep.", "Finish one delayed task.", "Turn one intention into a calendar block.", "Review what moved forward."],
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
  const reportRef = useRef<HTMLElement | null>(null);
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
  function toggleReportPreview() {
    if (unlocked) {
      setUnlocked(false);
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    setUnlocked(true);
    window.setTimeout(() => reportRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
  }

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
          <div className="quiz-footer"><button className="button secondary" onClick={() => setActiveQuestion((index) => Math.max(0, index - 1))} disabled={activeQuestion === 0}><ArrowLeft size={16} aria-hidden="true" />Back</button><button className="button primary" onClick={profile ? () => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }) : nextQuestion} disabled={selectedAnswer === null || isReading}>{profile ? "Review result" : isLastQuestion ? "See my result" : "Next question"}{profile ? <Eye size={16} aria-hidden="true" /> : <ArrowRight size={16} aria-hidden="true" />}</button></div>
        </article>
        <article ref={resultRef} className={isReading ? "console-panel result-panel is-reading" : "console-panel result-panel"} aria-live="polite" aria-busy={isReading}>
          {!profile ? <div className="result-empty"><Eye size={22} aria-hidden="true" /><span className="section-kicker mono">YOUR RESULT</span><h2>{isReading ? "Reading your answers..." : "Your virtue reflection will appear here."}</h2><p>Complete all seven questions to reveal your leading virtue, core strength, and a practical next move.</p></div> : <>
            <div className="panel-heading"><div><span className="section-kicker mono">YOUR LEADING VIRTUE</span><h2>{profile.name}</h2></div><span className="result-color-chip compact" style={{ borderColor: profile.color }}><i style={{ background: profile.color }} />{profile.colorName}</span></div>
            <p className="profile-signal">{profile.signal}</p>
            <div className="readout-strip mono"><span>7 answers mapped</span><span>4 signals scored</span><span>5 sections ready</span></div>
            <div className="trait-pills">{profile.traits.map((trait) => <span key={trait}>{trait}</span>)}</div>
            <div className="score-grid">{(Object.entries(profile.scores) as [Dimension, number][]).map(([key, score]) => <div key={key} className="score-item"><div className="score-label mono"><span>{key}</span><strong>{score}</strong></div><div className="meter"><span style={{ width: `${score}%`, background: meterColor(key) }} /></div></div>)}</div>
            <div className="preview-list"><article><Brain size={18} aria-hidden="true" /><div><h3>Strength</h3><p>{profile.strength}</p></div></article><article><Target size={18} aria-hidden="true" /><div><h3>Shadow edge</h3><p>{profile.blindSpot}</p></div></article></div>
            <div className={unlocked ? "report-entry open" : "report-entry"}><div className="report-entry-copy"><BookOpen size={19} aria-hidden="true" /><div><h3>{unlocked ? "Report preview is open" : "Continue into your report"}</h3><p>5 sections · about 3 minutes · personalized to your answers</p></div></div><button className="button dark" onClick={toggleReportPreview} aria-expanded={unlocked} aria-controls="personal-report">{unlocked ? "Close preview" : "Read report preview"}{unlocked ? <ArrowUp size={16} aria-hidden="true" /> : <ArrowDown size={16} aria-hidden="true" />}</button></div>
            <button className="restart-link" onClick={restartQuiz}>Retake the test</button>
          </>}
        </article>
      </div>
      {unlocked && profile && <section ref={reportRef} id="personal-report" className="result-report" aria-labelledby="personal-report-heading"><div className="result-report-intro"><div><span className="section-kicker mono">YOUR REPORT PREVIEW / 5 SECTIONS</span><h2 id="personal-report-heading">The {profile.colorName} {profile.name} profile</h2><p>{profile.overview}</p></div><div className="report-color-mark" style={{ background: profile.color }} aria-label={`${profile.colorName} soul color`}><span>{profile.colorName}</span></div></div><div className="result-report-sections"><article><Brain size={21} aria-hidden="true" /><div><span className="section-kicker mono">01 / CORE STRENGTH</span><h3>{profile.strength}</h3><p>Your strongest signal is not only a trait; it is the way you create value when a situation becomes uncertain or demanding.</p></div></article><article><Target size={21} aria-hidden="true" /><div><span className="section-kicker mono">02 / GROWTH EDGE</span><h3>{profile.blindSpot}</h3><p className="report-question">Reflect on this: {profile.growthPrompt}</p></div></article><article><HeartHandshake size={21} aria-hidden="true" /><div><span className="section-kicker mono">03 / RELATIONSHIPS</span><h3>How you build trust</h3><p>{profile.relationship}</p><p><strong>Try this:</strong> {profile.relationshipPractice}</p></div></article><article><BriefcaseBusiness size={21} aria-hidden="true" /><div><span className="section-kicker mono">04 / WORK &amp; PURPOSE</span><h3>Where this virtue does its best work</h3><p>{profile.career}</p><p><strong>Best-fit environment:</strong> {profile.careerEnvironment}</p></div></article></div><div className="result-action-plan"><div className="result-action-heading"><div><span className="section-kicker mono">05 / 5-DAY ALIGNMENT PLAN</span><h3>Turn insight into one small experiment.</h3></div><CalendarCheck size={24} aria-hidden="true" /></div><ol>{profile.actions.map((action, index) => <li key={action}><span>{String(index + 1).padStart(2, "0")}</span><div><strong>Day {index + 1}</strong><p>{action}</p></div><Check size={17} aria-hidden="true" /></li>)}</ol></div><div className="result-report-footer"><p>This preview is a reflection tool, not a diagnosis. Notice what feels useful and leave the rest.</p><button className="restart-link" onClick={restartQuiz}>Retake with fresh answers</button></div></section>}
    </section>
  );
}
