import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Salma – Beauty & Lifestyle Content Creator", short_name: "Salma", start_url: "/", display: "standalone",
    background_color: "#faf7f2", theme_color: "#faf7f2", icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
