"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  BookOpen,
  Brain,
  BriefcaseBusiness,
  CalendarCheck,
  Check,
  Download,
  Eye,
  HeartHandshake,
  Link as LinkIcon,
  Radar,
  Share2,
  Target,
} from "lucide-react";
import {
  dimensionKeys,
  soulColorByDimension,
  type Dimension,
  type Scores,
  type SoulColorProfile,
} from "@/lib/soul-colors";

type QuizMode = "quick" | "deep";
type Option = { label: string; score: Scores };
type Question = { prompt: string; options: Option[] };
type QuizResult = {
  primary: SoulColorProfile;
  secondary: SoulColorProfile;
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
      { label: "You saw something important that others missed.", score: { depth: 12, clarity: 2, connection: 3, momentum: 1 } },
      { label: "You made a confusing situation clear and workable.", score: { depth: 2, clarity: 12, connection: 2, momentum: 2 } },
      { label: "People feel safe and understood around you.", score: { depth: 2, clarity: 1, connection: 13, momentum: 2 } },
      { label: "You made the thing happen when it counted.", score: { depth: 1, clarity: 3, connection: 1, momentum: 13 } },
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
  {
    prompt: "A free afternoon opens up unexpectedly. Where does your energy go?",
    options: [
      { label: "Into a book, idea, place, or question I have wanted to explore.", score: { depth: 13, clarity: 2, connection: 2, momentum: 2 } },
      { label: "Into clearing a few things that have been quietly bothering me.", score: { depth: 2, clarity: 12, connection: 1, momentum: 5 } },
      { label: "Toward someone I have missed or wanted to check in on.", score: { depth: 2, clarity: 1, connection: 13, momentum: 2 } },
      { label: "Into making, fixing, training, or going somewhere new.", score: { depth: 3, clarity: 2, connection: 1, momentum: 13 } },
    ],
  },
  {
    prompt: "A team misses an important deadline. What do you notice first?",
    options: [
      { label: "The hidden pattern that made the miss predictable.", score: { depth: 12, clarity: 5, connection: 1, momentum: 2 } },
      { label: "The broken expectation or unclear ownership behind it.", score: { depth: 3, clarity: 13, connection: 2, momentum: 2 } },
      { label: "Who is carrying blame or pressure alone.", score: { depth: 3, clarity: 2, connection: 13, momentum: 1 } },
      { label: "What can still be recovered and who will own the next move.", score: { depth: 2, clarity: 4, connection: 2, momentum: 13 } },
    ],
  },
  {
    prompt: "Someone gives you criticism you did not expect. What happens next?",
    options: [
      { label: "I turn it over privately and look for the part I cannot see yet.", score: { depth: 13, clarity: 3, connection: 3, momentum: 1 } },
      { label: "I ask for an example so I can judge the feedback fairly.", score: { depth: 3, clarity: 13, connection: 2, momentum: 2 } },
      { label: "I notice the tone and whether the conversation still feels respectful.", score: { depth: 2, clarity: 2, connection: 13, momentum: 2 } },
      { label: "I decide what is useful, adjust, and keep going.", score: { depth: 2, clarity: 4, connection: 1, momentum: 13 } },
    ],
  },
  {
    prompt: "When you learn something difficult, which approach feels most like you?",
    options: [
      { label: "Follow the interesting threads until the whole idea clicks.", score: { depth: 13, clarity: 3, connection: 1, momentum: 3 } },
      { label: "Build a framework, sequence, or set of rules I can reuse.", score: { depth: 3, clarity: 13, connection: 1, momentum: 3 } },
      { label: "Learn with someone else and talk through what each of us sees.", score: { depth: 3, clarity: 2, connection: 12, momentum: 2 } },
      { label: "Try it early, make mistakes, and improve through repetition.", score: { depth: 2, clarity: 3, connection: 1, momentum: 13 } },
    ],
  },
  {
    prompt: "Which promise matters most to you?",
    options: [
      { label: "Stay open to a truth that changes my mind.", score: { depth: 13, clarity: 4, connection: 1, momentum: 1 } },
      { label: "Say what I mean and do what I said I would do.", score: { depth: 2, clarity: 13, connection: 3, momentum: 3 } },
      { label: "Do not let achievement make me careless with people.", score: { depth: 2, clarity: 2, connection: 13, momentum: 2 } },
      { label: "Keep moving toward what matters, especially when it gets hard.", score: { depth: 2, clarity: 3, connection: 1, momentum: 13 } },
    ],
  },
  {
    prompt: "A plan you cared about falls apart. How do you recover?",
    options: [
      { label: "Revisit what the plan was really trying to make possible.", score: { depth: 13, clarity: 3, connection: 2, momentum: 2 } },
      { label: "Work out exactly what failed and rebuild from firmer assumptions.", score: { depth: 4, clarity: 13, connection: 1, momentum: 3 } },
      { label: "Reconnect with the people involved before deciding what comes next.", score: { depth: 2, clarity: 2, connection: 13, momentum: 2 } },
      { label: "Salvage the useful pieces and start the next version quickly.", score: { depth: 2, clarity: 3, connection: 1, momentum: 13 } },
    ],
  },
  {
    prompt: "When you enter a new room, what are you most likely to register?",
    options: [
      { label: "The unusual details and what they might reveal.", score: { depth: 13, clarity: 2, connection: 3, momentum: 1 } },
      { label: "How the room works and where everything belongs.", score: { depth: 2, clarity: 13, connection: 2, momentum: 2 } },
      { label: "Who seems comfortable, left out, or eager to connect.", score: { depth: 3, clarity: 1, connection: 13, momentum: 2 } },
      { label: "Where the activity is and how I can join in.", score: { depth: 2, clarity: 2, connection: 4, momentum: 12 } },
    ],
  },
  {
    prompt: "A meaningful project has stalled. What would unlock you fastest?",
    options: [
      { label: "A new angle that makes the problem interesting again.", score: { depth: 13, clarity: 2, connection: 1, momentum: 4 } },
      { label: "A smaller scope and a clearer definition of done.", score: { depth: 2, clarity: 13, connection: 1, momentum: 4 } },
      { label: "A conversation with someone who understands why it matters.", score: { depth: 3, clarity: 2, connection: 13, momentum: 2 } },
      { label: "One visible win I can finish today.", score: { depth: 2, clarity: 3, connection: 1, momentum: 13 } },
    ],
  },
  {
    prompt: "What do you hope your future self thanks you for?",
    options: [
      { label: "Remaining curious enough to outgrow an old story.", score: { depth: 13, clarity: 3, connection: 2, momentum: 2 } },
      { label: "Building a life that matches my values in ordinary decisions.", score: { depth: 3, clarity: 13, connection: 2, momentum: 2 } },
      { label: "Protecting the relationships where both people could be real.", score: { depth: 3, clarity: 2, connection: 13, momentum: 2 } },
      { label: "Taking the brave step instead of waiting to feel completely ready.", score: { depth: 2, clarity: 3, connection: 2, momentum: 13 } },
    ],
  },
];

function getResult(activeQuestions: Question[], answers: number[]): QuizResult {
  const raw: Scores = { depth: 0, clarity: 0, connection: 0, momentum: 0 };
  const maximum: Scores = { depth: 0, clarity: 0, connection: 0, momentum: 0 };

  activeQuestions.forEach((question, questionIndex) => {
    const selected = question.options[answers[questionIndex]];
    dimensionKeys.forEach((dimension) => {
      raw[dimension] += selected.score[dimension];
      maximum[dimension] += Math.max(...question.options.map((option) => option.score[dimension]));
    });
  });

  const scores = Object.fromEntries(
    dimensionKeys.map((dimension) => [dimension, Math.round(28 + (raw[dimension] / maximum[dimension]) * 68)]),
  ) as Scores;
  const ranked = [...dimensionKeys].sort((a, b) => scores[b] - scores[a]);

  return {
    primary: soulColorByDimension[ranked[0]],
    secondary: soulColorByDimension[ranked[1]],
    scores,
  };
}

function meterColor(key: Dimension) {
  if (key === "connection") return "var(--teal)";
  if (key === "clarity") return "var(--amber)";
  if (key === "momentum") return "var(--coral)";
  return "var(--ink)";
}

function trackEvent(name: string, params: Record<string, string | number> = {}) {
  const analyticsWindow = window as Window & {
    dataLayer?: unknown[];
    plausible?: (eventName: string, options?: { props: Record<string, string | number> }) => void;
  };
  analyticsWindow.dataLayer?.push({ event: name, ...params });
  analyticsWindow.plausible?.(name, { props: params });
}

function wrapCanvasText(context: CanvasRenderingContext2D, text: string, x: number, y: number, maxWidth: number, lineHeight: number) {
  const words = text.split(" ");
  let line = "";
  let currentY = y;
  words.forEach((word) => {
    const testLine = `${line}${word} `;
    if (context.measureText(testLine).width > maxWidth && line) {
      context.fillText(line.trim(), x, currentY);
      line = `${word} `;
      currentY += lineHeight;
    } else {
      line = testLine;
    }
  });
  context.fillText(line.trim(), x, currentY);
}

export function TraitExtractor() {
  const [mode, setMode] = useState<QuizMode>("quick");
  const [answers, setAnswers] = useState<(number | null)[]>(Array(7).fill(null));
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [result, setResult] = useState<QuizResult | null>(null);
  const [reportOpen, setReportOpen] = useState(false);
  const [isReading, setIsReading] = useState(false);
  const [actionStatus, setActionStatus] = useState("");
  const [progressLoaded, setProgressLoaded] = useState(false);
  const quizRef = useRef<HTMLElement | null>(null);
  const resultRef = useRef<HTMLElement | null>(null);
  const reportRef = useRef<HTMLElement | null>(null);
  const activeQuestions = mode === "quick" ? questions.slice(0, 7) : questions;
  const question = activeQuestions[activeQuestion];
  const answeredCount = answers.filter((answer) => answer !== null).length;
  const selectedAnswer = answers[activeQuestion];
  const isLastQuestion = activeQuestion === activeQuestions.length - 1;

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("soul-color-progress");
      if (saved) {
        const parsed = JSON.parse(saved) as { mode?: QuizMode; answers?: (number | null)[] };
        const savedMode = parsed.mode === "deep" ? "deep" : "quick";
        const expectedLength = savedMode === "deep" ? questions.length : 7;
        if (Array.isArray(parsed.answers) && parsed.answers.length === expectedLength) {
          setMode(savedMode);
          setAnswers(parsed.answers);
          const firstUnanswered = parsed.answers.findIndex((answer) => answer === null);
          setActiveQuestion(firstUnanswered === -1 ? expectedLength - 1 : firstUnanswered);
        }
      }
    } catch {
      window.localStorage.removeItem("soul-color-progress");
    }
    setProgressLoaded(true);
  }, []);

  useEffect(() => {
    if (!progressLoaded) return;
    window.localStorage.setItem("soul-color-progress", JSON.stringify({ mode, answers }));
  }, [answers, mode, progressLoaded]);

  function startQuiz() {
    trackEvent("quiz_start", { mode });
    quizRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function changeMode(nextMode: QuizMode) {
    if (nextMode === mode) return;
    setMode(nextMode);
    setAnswers(Array(nextMode === "quick" ? 7 : questions.length).fill(null));
    setActiveQuestion(0);
    setResult(null);
    setReportOpen(false);
    setActionStatus("");
    trackEvent("quiz_mode_change", { mode: nextMode });
  }

  function selectAnswer(optionIndex: number) {
    setAnswers((current) => current.map((answer, index) => index === activeQuestion ? optionIndex : answer));
    setResult(null);
    setReportOpen(false);
  }

  function nextQuestion() {
    if (selectedAnswer === null) return;
    if (!isLastQuestion) {
      setActiveQuestion((index) => index + 1);
      return;
    }
    setIsReading(true);
    window.setTimeout(() => {
      const nextResult = getResult(activeQuestions, answers as number[]);
      setResult(nextResult);
      setReportOpen(false);
      setIsReading(false);
      trackEvent("quiz_complete", { mode, color: nextResult.primary.slug, questions: activeQuestions.length });
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 480);
  }

  function restartQuiz() {
    setAnswers(Array(activeQuestions.length).fill(null));
    setActiveQuestion(0);
    setResult(null);
    setReportOpen(false);
    setActionStatus("");
    quizRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    trackEvent("quiz_retake", { mode });
  }

  function toggleReportPreview() {
    const willOpen = !reportOpen;
    setReportOpen(willOpen);
    if (willOpen) {
      trackEvent("report_preview_open", { mode, color: result?.primary.slug ?? "unknown" });
      window.setTimeout(() => reportRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
    } else {
      resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  async function copyResultLink() {
    if (!result) return;
    const url = `${window.location.origin}/results/${result.primary.slug}`;
    await navigator.clipboard.writeText(url);
    setActionStatus("Result link copied");
    trackEvent("result_copy_link", { mode, color: result.primary.slug });
  }

  async function shareResult() {
    if (!result) return;
    const url = `${window.location.origin}/results/${result.primary.slug}`;
    const text = `My soul color is ${result.primary.colorName}, led by ${result.primary.name}.`;
    if (navigator.share) {
      await navigator.share({ title: `My soul color is ${result.primary.colorName}`, text, url });
      setActionStatus("Result shared");
    } else {
      await navigator.clipboard.writeText(`${text} ${url}`);
      setActionStatus("Share text copied");
    }
    trackEvent("result_share", { mode, color: result.primary.slug });
  }

  function downloadResultCard() {
    if (!result) return;
    const canvas = document.createElement("canvas");
    canvas.width = 1200;
    canvas.height = 630;
    const context = canvas.getContext("2d");
    if (!context) return;
    context.fillStyle = "#070a09";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = result.primary.color;
    context.fillRect(0, 0, 28, canvas.height);
    context.fillRect(78, 78, 92, 12);
    context.strokeStyle = "rgba(241, 241, 232, 0.22)";
    context.lineWidth = 2;
    context.strokeRect(58, 58, 1084, 514);
    context.fillStyle = "#aab0a8";
    context.font = "600 24px Arial";
    context.fillText("SOUL COLOR TEST", 78, 138);
    context.fillStyle = "#f1f1e8";
    context.font = "700 76px Arial";
    context.fillText(`My soul color is ${result.primary.colorName}.`, 78, 245);
    context.fillStyle = result.primary.softColor;
    context.font = "600 34px Arial";
    context.fillText(`${result.primary.name} / ${result.secondary.colorName} secondary`, 82, 305);
    context.fillStyle = "#b8bdb5";
    context.font = "400 28px Arial";
    wrapCanvasText(context, result.primary.strength, 82, 385, 820, 40);
    context.fillStyle = result.primary.color;
    context.beginPath();
    context.arc(1020, 300, 82, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = "#f1f1e8";
    context.font = "600 22px Arial";
    context.fillText("soulcolortest.online", 82, 530);
    const link = document.createElement("a");
    link.download = `my-${result.primary.slug}-soul-color.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
    setActionStatus("Result card downloaded");
    trackEvent("result_download", { mode, color: result.primary.slug });
  }

  const profile = result?.primary;

  return (
    <section id="extractor" className="hero-shell" aria-labelledby="extractor-heading">
      <div className="hero-grid assessment-hero">
        <div className="hero-copy">
          <div className="eyebrow mono"><Radar size={15} aria-hidden="true" />FREE SOUL COLOR TEST</div>
          <h1 id="extractor-heading">What color is your soul?</h1>
          <p>Choose how you respond in everyday moments. Your answers reveal a leading color, a supporting shade, and the virtue pattern behind both.</p>
          <div className="hero-actions"><button className="button primary" onClick={startQuiz}>Take the free test<ArrowRight size={16} aria-hidden="true" /></button></div>
          <div className="hero-meta mono"><span>7 or 16 questions</span><span>2-6 min</span><span>answers stay on device</span></div>
        </div>
        <div className="hero-visual" aria-label="A colorful portrait representing the soul color test">
          <div className="hero-visual-status mono"><span>YOUR COLOR</span><strong>AWAITING</strong></div>
          <div className="hero-swatch-rack" aria-label="Soul color spectrum"><i /><i /><i /><i /><i /><i /><i /></div>
        </div>
      </div>

      <div className="quiz-mode-bar" aria-label="Choose test length">
        <div><span className="section-kicker mono">CHOOSE YOUR TEST</span><p>Quick gives a useful first read. Deep uses more situations to separate close color scores.</p></div>
        <div className="segmented-control" role="group" aria-label="Test length">
          <button type="button" className={mode === "quick" ? "active" : ""} onClick={() => changeMode("quick")} aria-pressed={mode === "quick"}><strong>Quick</strong><span>7 questions / 2 min</span></button>
          <button type="button" className={mode === "deep" ? "active" : ""} onClick={() => changeMode("deep")} aria-pressed={mode === "deep"}><strong>Deep</strong><span>16 questions / 5-6 min</span></button>
        </div>
      </div>

      <div className="console-grid quiz-console">
        <article ref={quizRef} className="console-panel quiz-panel" aria-labelledby="question-heading">
          <div className="panel-heading"><div><span className="section-kicker mono">QUESTION {activeQuestion + 1} OF {activeQuestions.length}</span><h2 id="question-heading">{question.prompt}</h2></div><span className="profile-badge mono">{answeredCount}/{activeQuestions.length} answered</span></div>
          <div className="quiz-progress" aria-label={`${answeredCount} of ${activeQuestions.length} questions answered`}><span style={{ width: `${(answeredCount / activeQuestions.length) * 100}%` }} /></div>
          <div className="quiz-options" role="radiogroup" aria-label={question.prompt}>
            {question.options.map((option, index) => <button key={option.label} type="button" className={selectedAnswer === index ? "quiz-option selected" : "quiz-option"} role="radio" aria-checked={selectedAnswer === index} onClick={() => selectAnswer(index)}><span className="option-marker" aria-hidden="true">{String.fromCharCode(65 + index)}</span><span>{option.label}</span></button>)}
          </div>
          <div className="quiz-footer"><button className="button secondary" onClick={() => setActiveQuestion((index) => Math.max(0, index - 1))} disabled={activeQuestion === 0}><ArrowLeft size={16} aria-hidden="true" />Back</button><button className="button primary" onClick={result ? () => resultRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }) : nextQuestion} disabled={selectedAnswer === null || isReading}>{result ? "Review result" : isLastQuestion ? "Reveal my color" : "Next question"}{result ? <Eye size={16} aria-hidden="true" /> : <ArrowRight size={16} aria-hidden="true" />}</button></div>
        </article>

        <article ref={resultRef} className={isReading ? "console-panel result-panel is-reading" : "console-panel result-panel"} aria-live="polite" aria-busy={isReading}>
          {!result || !profile ? <div className="result-empty"><Eye size={22} aria-hidden="true" /><span className="section-kicker mono">YOUR RESULT</span><h2>{isReading ? "Reading the pattern in your answers..." : "Your soul color will appear here."}</h2><p>Finish the questions to see your primary color, supporting shade, leading virtue, and a practical next step.</p></div> : <>
            <div className="panel-heading"><div><span className="section-kicker mono">YOUR SOUL COLOR</span><h2>{profile.colorName} / {profile.name}</h2></div><span className="result-color-chip compact" style={{ borderColor: profile.color }}><i style={{ background: profile.color }} />{profile.colorName}</span></div>
            <p className="profile-signal">{profile.signal}</p>
            <div className="readout-strip mono"><span>{activeQuestions.length} answers mapped</span><span>{result.secondary.colorName} secondary</span><span>{mode} read</span></div>
            <div className="trait-pills">{profile.traits.map((trait) => <span key={trait}>{trait}</span>)}</div>
            <div className="score-grid">{(Object.entries(result.scores) as [Dimension, number][]).map(([key, score]) => <div key={key} className="score-item"><div className="score-label mono"><span>{key}</span><strong>{score}</strong></div><div className="meter"><span style={{ width: `${score}%`, background: meterColor(key) }} /></div></div>)}</div>
            <div className="preview-list"><article><Brain size={18} aria-hidden="true" /><div><h3>Core strength</h3><p>{profile.strength}</p></div></article><article><Target size={18} aria-hidden="true" /><div><h3>Growth edge</h3><p>{profile.blindSpot}</p></div></article></div>
            <div className="result-share-actions" aria-label="Share or save your result">
              <button className="button secondary" type="button" onClick={shareResult}><Share2 size={16} aria-hidden="true" />Share</button>
              <button className="icon-button" type="button" onClick={copyResultLink} title="Copy result link" aria-label="Copy result link"><LinkIcon size={17} aria-hidden="true" /></button>
              <button className="icon-button" type="button" onClick={downloadResultCard} title="Download result card" aria-label="Download result card"><Download size={17} aria-hidden="true" /></button>
              <Link className="button secondary" href={`/results/${profile.slug}`}>Color meaning<ArrowRight size={16} aria-hidden="true" /></Link>
            </div>
            <p className="action-status" aria-live="polite">{actionStatus}</p>
            <div className={reportOpen ? "report-entry open" : "report-entry"}><div className="report-entry-copy"><BookOpen size={19} aria-hidden="true" /><div><h3>{reportOpen ? "Your report is open" : "Read your personal reflection"}</h3><p>5 sections / about 3 minutes / based on your answers</p></div></div><button className="button dark" onClick={toggleReportPreview} aria-expanded={reportOpen} aria-controls="personal-report">{reportOpen ? "Close report" : "Open free report"}{reportOpen ? <ArrowUp size={16} aria-hidden="true" /> : <ArrowDown size={16} aria-hidden="true" />}</button></div>
            <button className="restart-link" onClick={restartQuiz}>Retake the test</button>
          </>}
        </article>
      </div>

      {reportOpen && result && profile && <section ref={reportRef} id="personal-report" className="result-report" aria-labelledby="personal-report-heading"><div className="result-report-intro"><div><span className="section-kicker mono">YOUR FREE REPORT / 5 SECTIONS</span><h2 id="personal-report-heading">The {profile.colorName} {profile.name} profile</h2><p>{profile.overview}</p><p className="secondary-color-note"><i style={{ background: result.secondary.color }} aria-hidden="true" /><span>Your supporting shade is <strong>{result.secondary.colorName} {result.secondary.name}</strong>, which may shape how your primary color appears in different situations.</span></p></div><div className="report-color-mark" style={{ background: profile.color }} aria-label={`${profile.colorName} soul color`}><span>{profile.colorName}</span></div></div><div className="result-report-sections"><article><Brain size={21} aria-hidden="true" /><div><span className="section-kicker mono">01 / CORE STRENGTH</span><h3>{profile.strength}</h3><p>Your strongest signal is not only a trait; it is the way you create value when a situation becomes uncertain or demanding.</p></div></article><article><Target size={21} aria-hidden="true" /><div><span className="section-kicker mono">02 / GROWTH EDGE</span><h3>{profile.blindSpot}</h3><p className="report-question">Reflect on this: {profile.growthPrompt}</p></div></article><article><HeartHandshake size={21} aria-hidden="true" /><div><span className="section-kicker mono">03 / RELATIONSHIPS</span><h3>How you build trust</h3><p>{profile.relationship}</p><p><strong>Try this:</strong> {profile.relationshipPractice}</p></div></article><article><BriefcaseBusiness size={21} aria-hidden="true" /><div><span className="section-kicker mono">04 / WORK &amp; PURPOSE</span><h3>Where this color does its best work</h3><p>{profile.career}</p><p><strong>Best-fit environment:</strong> {profile.careerEnvironment}</p></div></article></div><div className="result-action-plan"><div className="result-action-heading"><div><span className="section-kicker mono">05 / 5-DAY ALIGNMENT PLAN</span><h3>Turn the result into a small experiment.</h3></div><CalendarCheck size={24} aria-hidden="true" /></div><ol>{profile.actions.map((action, index) => <li key={action}><span>{String(index + 1).padStart(2, "0")}</span><div><strong>Day {index + 1}</strong><p>{action}</p></div><Check size={17} aria-hidden="true" /></li>)}</ol></div><div className="result-report-footer"><p>This report is a symbolic reflection, not a diagnosis. Keep what helps and leave what does not fit.</p><button className="restart-link" onClick={restartQuiz}>Retake with fresh answers</button></div></section>}
    </section>
  );
}
