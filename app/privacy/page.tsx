import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Soul Color Test handles quiz answers, local progress, analytics data, and browser controls.",
  alternates: { canonical: `${site.url}/privacy` },
};

export default function PrivacyPage() {
  return (
    <main>
      <section className="page-copy legal-heading">
        <span className="section-kicker">Privacy</span>
        <h1>Your answers stay on your device.</h1>
        <p>Last updated August 30, 2026. This policy describes the current public version of Soul Color Test.</p>
      </section>
      <section className="copy-card legal-copy">
        <h2>Quiz answers and progress</h2>
        <p>Your selected quiz answers are processed in your browser. We use local browser storage named <code>soul-color-progress</code> so you can continue the test on the same device. We do not send individual answers to a report-generation server.</p>

        <h2>Analytics</h2>
        <p>We use Google Analytics 4 and a Plausible analytics service to understand page visits and actions such as starting or completing a test. These services may receive information such as page URL, device and browser type, approximate location, referrer, and interaction events. Google Analytics may use browser identifiers or cookies according to Google&apos;s own policies.</p>

        <h2>Sharing and downloads</h2>
        <p>Result cards are created locally in your browser. Sharing uses your device&apos;s share sheet when available. Copying or sharing a result sends only the text and result-page link you choose to share, not your full answer history.</p>

        <h2>Accounts and payments</h2>
        <p>The site currently has no user accounts and no checkout. We therefore do not collect account passwords or payment card information. This policy will be updated before those features are introduced.</p>

        <h2>Your controls</h2>
        <p>You can remove saved quiz progress by clearing site data for <strong>soulcolortest.online</strong> in your browser. Browser privacy controls and content blockers may also limit analytics.</p>

        <h2>Limits and changes</h2>
        <p>This site is not intended to collect sensitive personal information or to provide medical or mental health assessment. We may update this policy when the service changes and will revise the date above.</p>
      </section>
    </main>
  );
}
