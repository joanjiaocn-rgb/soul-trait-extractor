import { ArrowRight, BookOpen, Check, FileText, LockKeyhole, Shield } from "lucide-react";
import { TraitExtractor } from "@/components/TraitExtractor";

const pricing = [
  {
    name: "Free",
    price: "$0",
    description: "A complete first reflection.",
    items: ["Soul color and leading virtue", "Strength and growth edge", "5-day alignment plan"],
    cta: "Start free",
    href: "#extractor",
  },
  {
    name: "Pro Report",
    price: "$12",
    description: "Full report for one analysis.",
    items: ["Full virtue profile", "Relationship and career signals", "7-day alignment plan"],
    cta: "Unlock report",
    href: "#extractor",
    featured: true,
  },
  {
    name: "Deep Report",
    price: "$29",
    description: "Advanced report for deeper reflection.",
    items: ["Pattern analysis", "Comparison mode preview", "Downloadable PDF"],
    cta: "See sample",
    href: "/sample-report",
  },
];

const soulColorFaq = [
  {
    question: "What is a soul color?",
    answer: "A soul color is a symbolic language for reflecting on the qualities that shape how you think, connect, decide, and act. It is a prompt for self-understanding, not a scientific diagnosis or a fixed label.",
  },
  {
    question: "What color is associated with the soul?",
    answer: "There is no single color associated with every soul. Different traditions use colors in different ways, so this test treats color as personal symbolism: your answers shape the color and virtue that best fit your current pattern.",
  },
  {
    question: "How do I find my soul shade?",
    answer: "Start with seven everyday questions and choose the response that feels most like you. The test maps your answers across depth, clarity, connection, and momentum to create a reflective soul color profile.",
  },
  {
    question: "What color would my soul be?",
    answer: "Your result depends on the choices you make in the test. You may receive a gold, blue, green, or red profile, along with a leading virtue, a growth edge, relationship insight, and a small action plan.",
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

export default function Home() {
  return (
    <main>
      <TraitExtractor />

      <section className="band">
        <div className="band-inner proof-grid">
          <article className="band-item">
            <Shield size={22} aria-hidden="true" />
            <h2>Built for reflection</h2>
            <p>Reports stay in self-insight territory, not diagnosis, therapy, hiring advice, or clinical evaluation.</p>
          </article>
          <article className="band-item">
            <LockKeyhole size={22} aria-hidden="true" />
            <h2>Private by default</h2>
            <p>The prototype runs locally in the browser. A production version should add explicit retention controls.</p>
          </article>
          <article className="band-item">
            <FileText size={22} aria-hidden="true" />
            <h2>Useful before checkout</h2>
            <p>Your free result includes a real reflection and action plan. Deeper paid reads can add context, comparisons, and export.</p>
          </article>
        </div>
      </section>

      <section className="content-section soul-color-explainer" aria-labelledby="soul-color-heading">
        <div className="section-head">
          <span className="section-kicker"><BookOpen size={15} aria-hidden="true" /> Soul color guide</span>
          <h2 id="soul-color-heading">A color can be a useful mirror.</h2>
          <p>Soul color is a reflective idea, not a promise about who you are forever. Use it to notice a pattern, name a virtue, and choose one next move.</p>
        </div>
        <div className="explainer-grid">
          <article><span className="section-kicker mono">01 / SYMBOL</span><h3>Not a fixed identity</h3><p>Color gives an abstract feeling a shape you can remember. Your result is a snapshot of the tendencies you bring to the questions today.</p></article>
          <article><span className="section-kicker mono">02 / SIGNALS</span><h3>Four ways of moving</h3><p>The test looks at depth, clarity, connection, and momentum, then turns the strongest signal into a virtue-led color profile.</p></article>
          <article><span className="section-kicker mono">03 / REFLECTION</span><h3>Useful when it leads somewhere</h3><p>A good result should give you language for relationships, work, and growth, plus a small action you can try in real life.</p></article>
        </div>
        <a className="text-link" href="/what-is-a-soul-color">Read the soul color guide <ArrowRight size={16} aria-hidden="true" /></a>
      </section>

      <section className="content-section" aria-labelledby="pricing-heading">
        <div className="section-head">
          <span className="section-kicker">Pricing</span>
          <h2 id="pricing-heading">Start with one-time reads</h2>
          <p>Subscriptions can come later. The first paid test should prove that people will buy the read.</p>
        </div>
        <div className="pricing-grid">
          {pricing.map((plan) => (
            <article key={plan.name} className={plan.featured ? "price-card featured" : "price-card"}>
              <div>
                <h3>{plan.name}</h3>
                <p>{plan.description}</p>
              </div>
              <strong>{plan.price}</strong>
              <ul>
                {plan.items.map((item) => (
                  <li key={item}>
                    <Check size={16} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <a className={plan.featured ? "button primary" : "button secondary"} href={plan.href}>
                {plan.cta}
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section split-section" aria-labelledby="faq-heading">
        <div>
          <span className="section-kicker">FAQ</span>
          <h2 id="faq-heading">Clear boundaries sell better</h2>
          <p>
            This product should feel useful and grounded. Avoid claims that imply clinical accuracy, fate prediction,
            or guaranteed life outcomes.
          </p>
        </div>
        <div className="faq-list">
          {soulColorFaq.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
          <details>
            <summary>Is this a diagnosis?</summary>
            <p>No. It is a self-reflection tool that summarizes patterns from prompt answers. It should not replace medical, mental-health, legal, or professional advice.</p>
          </details>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(soulColorFaqSchema) }} />
    </main>
  );
}
