import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Tinos } from "next/font/google";
import "./globals.css";
import { DESCRIPTION, KEYWORDS, NAME, SITE_URL, TITLE } from "@/lib/site";
import { jsonLd, safeJson } from "@/lib/jsonld";

const sans = Plus_Jakarta_Sans({ subsets: ["latin"], display: "swap", variable: "--font-sans" });
const serif = Tinos({ subsets: ["latin"], weight: ["400", "700"], style: ["normal", "italic"], display: "swap", variable: "--font-serif" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: KEYWORDS,
  applicationName: `${NAME} Portfolio`,
  authors: [{ name: NAME, url: SITE_URL }],
  creator: NAME,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: {
    type: "website", url: SITE_URL, siteName: `${NAME} Portfolio`, title: TITLE, description: DESCRIPTION, locale: "en_US",
    images: [{ url: "/images/salma-hero.webp", width: 1200, height: 1600, alt: "Salma, beauty and lifestyle content creator" }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ["/images/salma-hero.webp"] },
  category: "beauty",
};
export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#faf7f2" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="font-sans">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: safeJson(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
