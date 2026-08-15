import { ArrowRight, Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    items: ["Preview virtue snapshot", "Strength and shadow edge", "Shareable result"],
  },
  {
    name: "Pro Report",
    price: "$12",
    items: ["Full profile", "Relationship and career signals", "7-day alignment plan"],
    featured: true,
  },
  {
    name: "Deep Report",
    price: "$29",
    items: ["Deeper pattern analysis", "Comparison mode preview", "PDF export"],
  },
];

export default function PricingPage() {
  return (
    <main>
      <section className="page-copy">
        <span className="section-kicker">Pricing</span>
        <h1>Simple one-time reads first</h1>
        <p>The first paid version should prove that people buy the read. Subscription logic can come later.</p>
      </section>
      <section className="pricing-grid">
        {plans.map((plan) => (
          <article key={plan.name} className={plan.featured ? "price-card featured" : "price-card"}>
            <div>
              <h2>{plan.name}</h2>
              <p>Best for a first signal read.</p>
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
            <a className={plan.featured ? "button primary" : "button secondary"} href="/#extractor">
              Start here
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </article>
        ))}
      </section>
    </main>
  );
}
