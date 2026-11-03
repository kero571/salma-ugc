export type Testimonial = {
  kind: "instagram" | "whatsapp";
  initials: string;
  name: string;
  status: string;
  messages: string[];
  reaction?: string;
  time: string;
};

// ⚠️ لازم تكون آراء حقيقية بموافقة أصحابها. طول ما المصفوفة فاضية القسم بيختفي من الموقع المنشور.
export const TESTIMONIALS: Testimonial[] = [];

export const BRANDS = ["Glossier", "La Mer", "Dyson"]; // ⚠️ راجعها مع العميلة: لازم تكون براندات اشتغلت معاها فعلًا

export const STATS = [
  { value: "50+", label: "Products Reviewed" },
  { value: "2", label: "Core Niches (Skincare & Haircare)" },
  { value: "200+", label: "Reels Created" },
  { value: "500K+", label: "Community Reach" },
];

export const SERVICES = [
  { title: "Product Reviews", icon: "flask", text: "In-depth ingredient breakdowns, multi-day skin and scalp tests, and honest verdicts." },
  { title: "Reels Creation", icon: "video", text: "High-retention cinematic short-form video crafted with aesthetic color grading and macro textures." },
  { title: "Daily Story Coverage", icon: "book", text: "Real-time unboxings, event previews, and day-in-the-life product integrations." },
  { title: "Brand Collaborations", icon: "gem", text: "Long-term ambassador programs, co-created masterclasses, and curated campaign launches." },
] as const;

// الفيديوهات: public/videos/1.mp4 ... 9.mp4
// الكل بيستخدم صورة الـ Hero كـ cover. لو عايز cover مختلف لفيديو معين حط poster: "/images/reels/3.webp"
export const REEL_COVER = "/images/salma-hero.webp";
export const REELS: { src: string; poster?: string }[] = Array.from({ length: 9 }, (_, i) => ({ src: `/videos/${i + 1}.mp4` }));

export const NAV = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "reels", label: "Reels" },
  ...(TESTIMONIALS.length ? [{ id: "testimonials", label: "Testimonials" }] : []),
  { id: "contact", label: "Contact" },
];
