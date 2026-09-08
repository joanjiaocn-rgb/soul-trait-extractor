import type { MetadataRoute } from "next";
import { soulColorList } from "@/lib/soul-colors";
import { sitemapRoutes, site, siteDates } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = siteDates.modified;

  const staticPages = sitemapRoutes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified,
  }));

  const colorPages = soulColorList.map((profile) => ({
    url: `${site.url}/results/${profile.slug}`,
    lastModified,
  }));

  return [...staticPages, ...colorPages];
}
