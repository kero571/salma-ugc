// كل القيم الخارجية بتتنضّف هنا: https بس، والواتساب أرقام بس.
const httpsUrl = (v: string | undefined, fallback: string) => {
  try {
    const u = new URL((v ?? "").trim());
    return u.protocol === "https:" ? u.toString() : fallback;
  } catch {
    return fallback;
  }
};

export const SITE_URL = httpsUrl(process.env.NEXT_PUBLIC_SITE_URL, "https://www.example.com").replace(/\/$/, "");
export const INSTAGRAM = httpsUrl(process.env.NEXT_PUBLIC_INSTAGRAM, "https://www.instagram.com/");
export const TIKTOK = httpsUrl(process.env.NEXT_PUBLIC_TIKTOK, "https://www.tiktok.com/");
const WA_NUMBER = (process.env.NEXT_PUBLIC_WHATSAPP ?? "").replace(/\D/g, "") || "201000000000";
export const WHATSAPP = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Hi Salma, I'd love to collaborate with you!")}`;

export const NAME = "Salma";
export const TITLE = "Salma | Beauty & Lifestyle Content Creator – Honest Skincare & Haircare Reviews";
export const DESCRIPTION =
  "Salma is a beauty & lifestyle content creator sharing honest skincare and haircare reviews, cinematic Reels and daily stories. Available for brand collaborations.";
export const KEYWORDS = [
  "beauty content creator", "skincare reviews", "haircare reviews", "beauty influencer", "UGC creator",
  "lifestyle content creator", "Reels creator", "product reviews", "brand collaborations", "Salma",
];
