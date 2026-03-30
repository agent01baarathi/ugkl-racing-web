import type { MetadataRoute } from "next";
import { getAllNews } from "@/lib/news";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ugklracing.com";

  const staticPages = [
    "",
    "/racing-events",
    "/results",
    "/innovation",
    "/about",
    "/news",
    "/sponsorship",
    "/contact",
    "/privacy-policy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const newsArticles = getAllNews().map((article) => ({
    url: `${baseUrl}/news/${article.slug}`,
    lastModified: new Date(article.date),
  }));

  return [...staticPages, ...newsArticles];
}
