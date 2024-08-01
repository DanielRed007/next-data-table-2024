import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-bg": "#ffffff",
        "light-text": "#000000",
        "dark-bg": "#000000",
        "dark-text": "#ffffff",
      },
    },
    transitionDuration: {
      "0": "0ms",
      "2000": "2000ms",
    },
    transitionTimingFunction: {
      bounce: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
