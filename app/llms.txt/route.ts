export const dynamic = "force-static";

export function GET() {
  return new Response(
    `# Soul Virtues Extractor\n\nA self-reflection tool that turns short writing samples into a practical soul color and virtue report.\n`,
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    }
  );
}
