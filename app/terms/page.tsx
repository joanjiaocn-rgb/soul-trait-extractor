import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Read the terms for using the Soul Color Test, reports, result pages, and share features.",
  alternates: { canonical: `${site.url}/terms` },
};

export default function TermsPage() {
  return (
    <main>
      <section className="page-copy legal-heading">
        <span className="section-kicker">Terms</span>
        <h1>Use the result as reflection, not certainty.</h1>
        <p>Last updated August 30, 2026. By using Soul Color Test, you agree to the terms below.</p>
      </section>
      <section className="copy-card legal-copy">
        <h2>What the test provides</h2>
        <p>Soul Color Test offers symbolic, entertainment, and self-reflection content. Results are generated from your selected answers using local scoring rules. They are not scientific measurements, diagnoses, predictions, or professional advice.</p>

        <h2>Important limits</h2>
        <p>Do not use a result to make medical, mental health, legal, employment, financial, safety, or other high-impact decisions about yourself or another person. Seek a qualified professional where appropriate.</p>

        <h2>Acceptable use</h2>
        <p>Do not interfere with the site, attempt unauthorized access, automate abusive traffic, misrepresent a result as a clinical assessment, or use the content to harass, discriminate against, or unfairly profile another person.</p>

        <h2>Content and sharing</h2>
        <p>You may share your own result card and links for personal, non-commercial use. Site copy, visual design, scoring logic, and branded assets may not be republished as a competing product without permission.</p>

        <h2>Availability and warranties</h2>
        <p>The service is provided as available. We do not guarantee that every description will fit you, that the site will always be available, or that a result will produce a particular outcome.</p>

        <h2>Payments</h2>
        <p>There is currently no checkout. Any future paid product will show its price, included deliverable, and applicable refund terms before purchase.</p>

        <h2>Changes</h2>
        <p>These terms may change as the service develops. Continued use after an update means the revised terms apply from the updated date shown above.</p>
      </section>
    </main>
  );
}
