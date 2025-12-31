import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://cafe-shop-frontend-gamma.vercel.app/", priority: 1 },
    { url: "https://cafe-shop-frontend-gamma.vercel.app/about", priority: 0.9 },
    { url: "https://cafe-shop-frontend-gamma.vercel.app/shop", priority: 0.9 },
  ];
}
