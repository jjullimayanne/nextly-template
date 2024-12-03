import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const config: Config = {
  mode: "jit", // Habilita o Just-In-Time Mode
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Habilita modo escuro com a classe `dark`
  theme: {
    extend: {
      colors: {
        trueGray: colors.neutral,
        customBlue: "#68b2f8", // Adiciona a cor personalizada ao tema
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        stock: [defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

export default config;
