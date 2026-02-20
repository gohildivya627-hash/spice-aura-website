import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        aura: {
          50: "#f7fbf7",
          100: "#eef7ee",
          200: "#d8edd9",
          300: "#b9ddb9",
          400: "#8dc48f",
          500: "#5aa560",
          600: "#3d8746",
          700: "#2f6a37",
          800: "#26562f",
          900: "#204828"
        },
        sand: {
          50: "#fcfaf6",
          100: "#f8f2e6",
          200: "#f0e2c8",
          300: "#e6cfa6",
          400: "#d8b47b",
          500: "#c8944f",
          600: "#b47837",
          700: "#925d2c",
          800: "#764a27",
          900: "#603e23"
        }
      }
    },
  },
  plugins: [],
};
export default config;
