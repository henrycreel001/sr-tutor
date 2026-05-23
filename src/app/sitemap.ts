import { MetadataRoute } from "next";

const BASE_URL = "https://srtutor.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/courses", "/results", "/gallery", "/contact"];
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
