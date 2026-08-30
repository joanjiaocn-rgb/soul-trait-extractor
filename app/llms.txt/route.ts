import { site } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  return new Response(
    `# Soul Color Test\n\nA free quick or deep soul color test that turns everyday choices into a primary color, supporting shade, and practical virtue reflection.\n\n## Key pages\n- Home and test: ${site.url}/\n- What is a soul color?: ${site.url}/what-is-a-soul-color\n- Sample report: ${site.url}/sample-report\n- Gold meaning: ${site.url}/results/gold\n- Blue meaning: ${site.url}/results/blue\n- Green meaning: ${site.url}/results/green\n- Red meaning: ${site.url}/results/red\n\nSoul color is used here as symbolic self-reflection, not as a medical or mental-health diagnosis. Quiz answers are scored locally in the browser.\n`,
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    }
  );
}
