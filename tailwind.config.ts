import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { cream: "#faf7f2", band: "#f0ebe3", brand: "#b8322a", ink: "#1a1a1a", muted: "#5a5651", sky: "#7db7e8", wa: "#2bd46b" },
    fontFamily: { sans: ["var(--font-sans)", "system-ui", "sans-serif"], serif: ["var(--font-serif)", "Times New Roman", "serif"] },
  } },
  plugins: [],
};
export default config;
