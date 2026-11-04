import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Salma – Beauty & Lifestyle Content Creator",
    short_name: "Salma",
    start_url: "/",
    display: "standalone",
    background_color: "#faf7f2",
    theme_color: "#faf7f2",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
