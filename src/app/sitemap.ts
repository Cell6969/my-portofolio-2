import type { MetadataRoute } from "next";
import { siteConfig, navItems } from "@/constants/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = navItems.map((item) => ({
    url: `${siteConfig.url}/${item.href}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: item.href === "#home" ? 1 : 0.8,
  }));

  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...routes,
  ];
}
