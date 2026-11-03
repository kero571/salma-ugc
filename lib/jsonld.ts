import { DESCRIPTION, INSTAGRAM, NAME, SITE_URL, TIKTOK } from "./site";

const sameAs = [INSTAGRAM, TIKTOK].filter((u) => !/^https:\/\/www\.(instagram|tiktok)\.com\/?$/.test(u));

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: SITE_URL, name: `${NAME} – Beauty & Lifestyle Content Creator`, inLanguage: "en" },
    {
      "@type": "ProfilePage", "@id": `${SITE_URL}/#profile`, url: SITE_URL, name: `${NAME} | Beauty & Lifestyle Content Creator`,
      isPartOf: { "@id": `${SITE_URL}/#website` }, mainEntity: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "Person", "@id": `${SITE_URL}/#person`, name: NAME, url: SITE_URL, image: `${SITE_URL}/images/salma-hero.webp`,
      jobTitle: "Beauty & Lifestyle Content Creator", description: DESCRIPTION,
      knowsAbout: ["Skincare", "Haircare", "Product reviews", "Short-form video", "Instagram Reels", "Brand collaborations"],
      ...(sameAs.length ? { sameAs } : {}),
    },
  ],
};

// بيمنع إغلاق وسم <script> من جوه الـ JSON
export const safeJson = (o: unknown) => JSON.stringify(o).replace(/</g, "\\u003c");
