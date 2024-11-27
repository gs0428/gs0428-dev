import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#D9C5B4",
      neutral: "#E7DED3",
      "neutral-light": "#ECE7E2",
      accent: "#735448",
      text: "#260101",
    },
    maxWidth: {
      stack: "25rem",
      screen: "1280px",
    },
  },
  darkMode: "class",
  plugins: [nextui()],
} satisfies Config;
