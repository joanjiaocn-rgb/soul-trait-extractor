import { site } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  return new Response(
    `# Soul Virtues Extractor\n\nA reflective seven-question soul color test that turns everyday choices into a practical virtue profile.\n\n## Key pages\n- Home and test: ${site.url}/\n- What is a soul color?: ${site.url}/what-is-a-soul-color\n- Sample report: ${site.url}/sample-report\n- Pricing: ${site.url}/pricing\n\nSoul color is used here as symbolic self-reflection, not as a medical or mental-health diagnosis.\n`,
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    }
  );
}
