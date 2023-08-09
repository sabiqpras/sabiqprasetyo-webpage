import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://sabiqprasetyo.vercel.app/",
      lastModified: new Date(),
    },
    {
      url: "https://sabiqprasetyo.vercel.app/About",
      lastModified: new Date(),
    },
    {
      url: "https://sabiqprasetyo.vercel.app/Archive",
      lastModified: new Date(),
    },
    {
      url: "https://sabiqprasetyo.vercel.app/Ask",
      lastModified: new Date(),
    },
  ];
}
