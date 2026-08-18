import { routes, site } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const body = routes.map((route) => `${site.url}${route.path}`).join("\n");

  return new Response(`${body}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
