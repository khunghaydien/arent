import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./component/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      darkMode: 'class',
    },
    colors: {
      white: "#FFFFFF",
      dark: {
        600: "#2E2E2E",
        500: "#414141",
        400: "#777777"
      },
      primary: {
        300: "#FFCC21",
        400: "#FF963C",
        500: "#EA6C00",
      },
      secondary: {
        300: "#8FE9D0",
      },
    },
    fontFamily: {
      sans: ["'Noto Sans JP'", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
