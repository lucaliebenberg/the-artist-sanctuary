import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";

interface PageMeta {
  title: string;
  description: string;
  path?: string;
}

export function createMetadata({ title, description, path }: PageMeta): Metadata {
  const url = path ? `${siteConfig.url}${path}` : siteConfig.url;

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
    },
  };
}
