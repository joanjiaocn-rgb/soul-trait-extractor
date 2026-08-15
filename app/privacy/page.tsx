export default function PrivacyPage() {
  return (
    <main>
      <section className="page-copy">
        <span className="section-kicker">Privacy</span>
        <h1>Private by default, explicit about limits</h1>
        <p>
          This prototype keeps input local in the browser. A production version should document retention, payment,
          analytics, and deletion controls in plain language.
        </p>
      </section>
      <section className="copy-card">
        <h2>Core policy</h2>
        <p>
          We do not present the product as a diagnosis, therapy, hiring decision tool, or a substitute for
          professional advice.
        </p>
        <p>
          If you add accounts, payments, or saved reports later, keep the consent flow short and the data deletion path
          obvious.
        </p>
      </section>
    </main>
  );
}
