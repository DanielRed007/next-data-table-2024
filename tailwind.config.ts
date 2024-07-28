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
  },
  plugins: [],
};
export default config;