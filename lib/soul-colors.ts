export const dimensionKeys = ["depth", "clarity", "connection", "momentum"] as const;

export type Dimension = (typeof dimensionKeys)[number];
export type Scores = Record<Dimension, number>;
export type SoulColorSlug = "gold" | "blue" | "green" | "red";

export type SoulColorProfile = {
  slug: SoulColorSlug;
  dimension: Dimension;
  name: string;
  colorName: string;
  color: string;
  softColor: string;
  signal: string;
  overview: string;
  meaning: string;
  traits: string[];
  strength: string;
  blindSpot: string;
  growthPrompt: string;
  relationship: string;
  relationshipPractice: string;
  career: string;
  careerEnvironment: string;
  actions: string[];
};

export const soulColors: Record<SoulColorSlug, SoulColorProfile> = {
  gold: {
    slug: "gold",
    dimension: "depth",
    name: "Curiosity",
    colorName: "Gold",
    color: "#d6a63a",
    softColor: "#f4df9c",
    signal: "Your soul color leans gold: observant, exploratory, and drawn to the pattern underneath the pattern.",
    overview: "You tend to understand life by looking beneath the first answer. New information energizes you, especially when it changes the shape of a question you thought you already understood.",
    meaning: "A gold soul color represents curiosity, perspective, and the desire to understand what lies beneath the obvious. Gold types often find meaning by connecting ideas and noticing details other people pass over.",
    traits: ["Observant", "Exploratory", "Adaptive", "Insight-driven"],
    strength: "You notice what most people miss and turn fragments into a useful picture.",
    blindSpot: "You may keep exploring after the answer is already visible.",
    growthPrompt: "What would become possible if you treated today's best answer as enough to begin?",
    relationship: "You want honesty, intellectual spark, and enough room to think out loud.",
    relationshipPractice: "Tell people whether you need listening, perspective, or a decision. It keeps curiosity from feeling like distance.",
    career: "You may fit research, discovery, design, writing, strategy, or synthesis-heavy work.",
    careerEnvironment: "Look for open questions, protected thinking time, and a clear point when insight must become action.",
    actions: ["Write the question beneath the question.", "Test one direction for a week.", "Replace one guess with data.", "Share one unfinished idea.", "Close one open loop."],
  },
  blue: {
    slug: "blue",
    dimension: "clarity",
    name: "Integrity",
    colorName: "Blue",
    color: "#4f79d1",
    softColor: "#b8c9f1",
    signal: "Your soul color leans blue: clear, structured, and guided by decisions you can stand behind.",
    overview: "You feel most grounded when words, choices, and values line up. People often trust your judgment because you make expectations visible and try to apply the same standard to yourself.",
    meaning: "A blue soul color represents integrity, discernment, and steadiness. Blue types are often most comfortable when expectations are clear and choices can be traced back to a fair principle.",
    traits: ["Grounded", "Structured", "Reliable", "Fair-minded"],
    strength: "You can turn ambiguity into a workable plan without losing sight of constraints.",
    blindSpot: "You may try to solve feelings before fully hearing them.",
    growthPrompt: "Where would understanding matter more than reaching the cleanest answer?",
    relationship: "You show care through consistency and practical support. Naming feelings before fixing helps.",
    relationshipPractice: "Reflect back the feeling you heard, then ask whether advice is wanted.",
    career: "You may fit operations, product management, analytics, engineering, planning, or process design.",
    careerEnvironment: "You are likely to do well where ownership is explicit, quality matters, and better systems are welcomed.",
    actions: ["Simplify one recurring system.", "Separate facts from assumptions.", "Create one decision rule.", "Ask before solving.", "Review what became easier."],
  },
  green: {
    slug: "green",
    dimension: "connection",
    name: "Kindness",
    colorName: "Green",
    color: "#4b8f86",
    softColor: "#afdcd4",
    signal: "Your soul color leans green: warm, attentive, and tuned to the emotional weather around you.",
    overview: "You read a room through tone, trust, and what people may be carrying silently. Your instinct is to create enough safety for honesty, belonging, and repair to become possible.",
    meaning: "A green soul color represents kindness, reciprocity, and emotional awareness. Green types tend to notice whether people feel included and often help a group return to trust after tension.",
    traits: ["Empathic", "Warm", "Steady", "Meaning-seeking"],
    strength: "You help people feel seen, which makes hard conversations easier to enter.",
    blindSpot: "You may absorb emotional weight that was never yours to carry.",
    growthPrompt: "What care can you offer without taking responsibility for another person's whole experience?",
    relationship: "You thrive with reciprocity and do best with people who answer openness with steadiness.",
    relationshipPractice: "Name one need directly instead of hoping it will be noticed.",
    career: "You may fit community, teaching, facilitation, customer strategy, or care-centered leadership.",
    careerEnvironment: "Choose teams that value emotional intelligence without making you the container for every problem.",
    actions: ["Choose one cleaner boundary.", "Write the feeling without solving it.", "Ask for concrete support.", "Invest in a reciprocal relationship.", "Review what felt nourishing."],
  },
  red: {
    slug: "red",
    dimension: "momentum",
    name: "Determination",
    colorName: "Red",
    color: "#c64b45",
    softColor: "#efb1ad",
    signal: "Your soul color leans red: focused, purposeful, and harder to shake than people expect.",
    overview: "You understand yourself through movement. A meaningful goal sharpens your attention, and you are often the person who turns a difficult conversation or vague intention into a concrete next step.",
    meaning: "A red soul color represents determination, agency, and purposeful momentum. Red types tend to learn by engaging with reality and are often the people who keep a difficult plan moving.",
    traits: ["Focused", "Persistent", "Self-directed", "Practical"],
    strength: "You stay with hard problems long enough to make progress visible.",
    blindSpot: "You may move into action before everyone has caught up emotionally.",
    growthPrompt: "Which conversation deserves one more minute of listening before you decide what happens next?",
    relationship: "You value sincerity and follow-through. You open faster when the other person is direct and calm.",
    relationshipPractice: "Ask what the other person needs you to understand before you act.",
    career: "You may fit building, strategy, operations, product work, or any role where follow-through matters.",
    careerEnvironment: "Look for clear ownership, visible outcomes, and enough autonomy to move.",
    actions: ["Choose one meaningful next move.", "State a deadline you can keep.", "Finish one delayed task.", "Put one intention on the calendar.", "Review what moved forward."],
  },
};

export const soulColorList = Object.values(soulColors);

export const soulColorByDimension = Object.fromEntries(
  soulColorList.map((profile) => [profile.dimension, profile]),
) as Record<Dimension, SoulColorProfile>;

export function isSoulColorSlug(value: string): value is SoulColorSlug {
  return value in soulColors;
}
