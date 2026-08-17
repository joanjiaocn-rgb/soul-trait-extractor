import type { MetadataRoute } from "next";
import { routes, site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route.path}`,
    lastModified: new Date(),
  }));
}
