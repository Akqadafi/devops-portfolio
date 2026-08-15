import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/projects", "/projects/data/teen-participation", "/projects/data/virtual-club-ux", "/projects/data/diy-stem", "/projects/data/marginalized-youth", "/projects/data/community-health-intelligence"];
  return routes.map((route, index) => ({ url: `https://akqadafi.com${route}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: index === 0 ? 1 : index === 1 ? 0.9 : 0.8 }));
}
