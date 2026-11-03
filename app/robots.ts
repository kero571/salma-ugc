import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

// الـ AI crawlers مسموحة عشان الموقع يظهر في إجابات ChatGPT / Perplexity / Claude (GEO). امسح السطر لو عايز تمنعها.
const AI_BOTS = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "PerplexityBot", "ClaudeBot", "Claude-SearchBot", "Google-Extended"];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }, { userAgent: AI_BOTS, allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
