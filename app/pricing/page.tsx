import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Clock3 } from "lucide-react";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Soul Color Report Plans",
  description: "See what is included in the free Soul Color Test and which expanded report options are being considered.",
  alternates: { canonical: `${site.url}/pricing` },
  robots: { index: false, follow: true },
};

const plans = [
  {
    name: "Free Test",
    status: "Available now",
    items: ["Quick and Deep test modes", "Primary and supporting colors", "Strength, growth, relationships, and work", "Shareable and downloadable result"],
    cta: "Take the free test",
    href: "/#extractor",
    available: true,
  },
  {
    name: "Expanded Report",
    status: "In development",
    items: ["Longer mixed-color interpretation", "Decision and relationship patterns", "Printable report", "Additional reflection exercises"],
    cta: "View report depth",
    href: "/sample-report",
    available: false,
  },
  {
    name: "Color Compare",
    status: "Under consideration",
    items: ["Compare two completed profiles", "Shared strengths and friction points", "Conversation prompts", "Private comparison link"],
    cta: "Explore color meanings",
    href: "/what-is-a-soul-color",
    available: false,
  },
];

export default function PricingPage() {
  return (
    <main>
      <section className="page-copy">
        <span className="section-kicker">Report plans</span>
        <h1>The complete test is free today.</h1>
        <p>There is no checkout on this site yet. If paid reports are introduced, the price and deliverable will be shown before payment rather than hidden behind the result.</p>
      </section>
      <section className="pricing-grid">
        {plans.map((plan) => (
          <article key={plan.name} className={plan.available ? "price-card featured" : "price-card"}>
            <div>
              <span className="plan-status mono">{plan.available ? <Check size={14} aria-hidden="true" /> : <Clock3 size={14} aria-hidden="true" />}{plan.status}</span>
              <h2>{plan.name}</h2>
            </div>
            <ul>{plan.items.map((item) => <li key={item}><Check size={16} aria-hidden="true" />{item}</li>)}</ul>
            <Link className={plan.available ? "button primary" : "button secondary"} href={plan.href}>{plan.cta}<ArrowRight size={16} aria-hidden="true" /></Link>
          </article>
        ))}
      </section>
    </main>
  );
}
