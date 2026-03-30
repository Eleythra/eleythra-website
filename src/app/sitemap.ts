import type { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { getSiteUrl } from "@/lib/site-url";

const STATIC_PATHS = [
  "",
  "/biz-kimiz",
  "/projelerimiz",
  "/projelerimiz/viona",
  "/referans-otellerimiz",
  "/referans-otellerimiz/kaila-beach",
  "/is-birligi-destekleyen-kurumlar",
  "/referanslarimiz",
  "/blog",
  "/iletisim",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_PATHS.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.includes("/projelerimiz/viona") || path.includes("/blog") ? 0.85 : 0.8,
  }));

  const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticEntries, ...blogEntries];
}
