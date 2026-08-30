import type { Metadata } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";
import { notFound } from "next/navigation";
import { ArrowRight, BriefcaseBusiness, HeartHandshake, Lightbulb, Target } from "lucide-react";
import { ResultShare } from "@/components/ResultShare";
import { isSoulColorSlug, soulColorList, soulColors } from "@/lib/soul-colors";
import { site, socialImage } from "@/lib/site";

type ResultPageProps = { params: Promise<{ color: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return soulColorList.map((profile) => ({ color: profile.slug }));
}

export async function generateMetadata({ params }: ResultPageProps): Promise<Metadata> {
  const { color } = await params;
  if (!isSoulColorSlug(color)) return {};
  const profile = soulColors[color];
  const title = `${profile.colorName} Soul Color Meaning: ${profile.name}, Strengths & Growth`;
  const description = `Discover the meaning of a ${profile.colorName.toLowerCase()} soul color, including ${profile.name.toLowerCase()}, core strengths, growth edges, relationships, work style, and reflection prompts.`;
  const url = `${site.url}/results/${profile.slug}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, type: "article", images: [socialImage] },
    twitter: { card: "summary_large_image", title, description, images: [socialImage] },
  };
}

export default async function SoulColorResultPage({ params }: ResultPageProps) {
  const { color } = await params;
  if (!isSoulColorSlug(color)) notFound();
  const profile = soulColors[color];
  const otherColors = soulColorList.filter((item) => item.slug !== profile.slug);
  const faqs = [
    {
      question: `What does a ${profile.colorName.toLowerCase()} soul color mean?`,
      answer: profile.meaning,
    },
    {
      question: `Is a ${profile.colorName.toLowerCase()} soul color good?`,
      answer: `No soul color is ranked above another. ${profile.colorName} describes a pattern led by ${profile.name.toLowerCase()}, with both useful strengths and a growth edge.`,
    },
    {
      question: "Can your soul color change?",
      answer: "Yes. A soul color result is best treated as a snapshot of your current answers rather than a permanent identity.",
    },
  ];
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: `${profile.colorName} Soul Color Meaning`,
        description: profile.meaning,
        mainEntityOfPage: `${site.url}/results/${profile.slug}`,
        publisher: { "@id": `${site.url}/#organization` },
        inLanguage: "en-US",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Soul Color Test", item: site.url },
          { "@type": "ListItem", position: 2, name: `${profile.colorName} Soul Color`, item: `${site.url}/results/${profile.slug}` },
        ],
      },
    ],
  };

  return (
    <main className="color-result-page" style={{ "--result-color": profile.color, "--result-soft": profile.softColor } as CSSProperties}>
      <section className="color-result-hero">
        <div className="color-result-copy">
          <span className="section-kicker mono">SOUL COLOR MEANING</span>
          <h1>{profile.colorName} Soul Color</h1>
          <p className="color-result-lead">{profile.meaning}</p>
          <div className="trait-pills">{profile.traits.map((trait) => <span key={trait}>{trait}</span>)}</div>
          <div className="color-result-actions"><Link className="button primary" href="/#extractor">Take the Soul Color Test <ArrowRight size={16} aria-hidden="true" /></Link><ResultShare profile={profile} /></div>
        </div>
        <div className="color-result-mark" aria-hidden="true"><span>{profile.colorName}</span><strong>{profile.name}</strong></div>
      </section>

      <section className="color-quick-answer" aria-labelledby="quick-answer-heading">
        <div><span className="section-kicker mono">QUICK ANSWER</span><h2 id="quick-answer-heading">What {profile.colorName.toLowerCase()} says about your pattern</h2></div>
        <p>{profile.overview}</p>
      </section>

      <section className="color-meaning-grid" aria-label={`${profile.colorName} soul color interpretation`}>
        <article><Lightbulb size={22} aria-hidden="true" /><div><span className="section-kicker mono">CORE GIFT</span><h2>{profile.strength}</h2><p>This is where your {profile.name.toLowerCase()} tends to become useful to other people, especially when a situation is uncertain or demanding.</p></div></article>
        <article><Target size={22} aria-hidden="true" /><div><span className="section-kicker mono">GROWTH EDGE</span><h2>{profile.blindSpot}</h2><p><strong>Question to carry:</strong> {profile.growthPrompt}</p></div></article>
        <article><HeartHandshake size={22} aria-hidden="true" /><div><span className="section-kicker mono">RELATIONSHIPS</span><h2>How {profile.colorName.toLowerCase()} builds trust</h2><p>{profile.relationship}</p><p><strong>Try this:</strong> {profile.relationshipPractice}</p></div></article>
        <article><BriefcaseBusiness size={22} aria-hidden="true" /><div><span className="section-kicker mono">WORK &amp; PURPOSE</span><h2>Where {profile.name.toLowerCase()} can thrive</h2><p>{profile.career}</p><p><strong>Best-fit environment:</strong> {profile.careerEnvironment}</p></div></article>
      </section>

      <section className="color-practice" aria-labelledby="practice-heading">
        <div><span className="section-kicker mono">5-DAY PRACTICE</span><h2 id="practice-heading">Use the color instead of collecting the label.</h2><p>Try one small action each day, then notice which part of the description becomes more specific in real life.</p></div>
        <ol>{profile.actions.map((action, index) => <li key={action}><span>{String(index + 1).padStart(2, "0")}</span>{action}</li>)}</ol>
      </section>

      <section className="other-colors" aria-labelledby="other-colors-heading">
        <div className="section-head"><span className="section-kicker">Compare colors</span><h2 id="other-colors-heading">A supporting shade can change the expression.</h2><p>Most test results contain more than one strong signal. Compare the other meanings before treating one label as the whole picture.</p></div>
        <div className="other-color-links">{otherColors.map((item) => <Link key={item.slug} href={`/results/${item.slug}`} style={{ "--profile-color": item.color } as CSSProperties}><span aria-hidden="true" /><div><strong>{item.colorName}</strong><small>{item.name}</small></div><ArrowRight size={16} aria-hidden="true" /></Link>)}</div>
      </section>

      <section className="guide-faq" aria-labelledby="color-faq-heading">
        <div><span className="section-kicker">Questions</span><h2 id="color-faq-heading">About the {profile.colorName.toLowerCase()} result</h2></div>
        <div className="faq-list">{faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div>
      </section>

      <section className="guide-cta"><div><span className="section-kicker">Your turn</span><h2>Is {profile.colorName.toLowerCase()} actually your color?</h2><p>Answer the everyday situations and see which pattern comes through first.</p></div><Link className="button primary" href="/#extractor">Find my soul color <ArrowRight size={16} aria-hidden="true" /></Link></section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  );
}
