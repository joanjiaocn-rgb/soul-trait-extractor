import { ArrowRight, Check, FileText, LockKeyhole, Shield } from "lucide-react";
import { TraitExtractor } from "@/components/TraitExtractor";

const pricing = [
  {
    name: "Free",
    price: "$0",
    description: "Basic preview for one reading.",
    items: ["Core virtue preview", "Strength and shadow edge", "Shareable preview"],
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
            <h2>Share-worthy output</h2>
            <p>Free previews are short enough to share, while the paid read holds the practical value.</p>
          </article>
        </div>
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
          <details>
            <summary>Is this a diagnosis?</summary>
            <p>No. It is a self-reflection tool that summarizes patterns from writing and prompt answers.</p>
          </details>
          <details>
            <summary>How does the prototype analyze virtues?</summary>
            <p>It uses local scoring rules to map text signals into a profile. Production can replace this with an AI API.</p>
          </details>
          <details>
            <summary>Where should payment connect?</summary>
            <p>The $12 unlock button is a placeholder for Stripe Checkout or a similar payment provider.</p>
          </details>
        </div>
      </section>
    </main>
  );
}
