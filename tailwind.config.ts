import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f2f6ff",
          100: "#e6efff",
          200: "#c8dcff",
          300: "#a9c9ff",
          400: "#7da9ff",
          500: "#4b82ff",   // LinkedIn-ish blue
          600: "#2f66e6",
          700: "#244fba",
          800: "#1e4296",
          900: "#193776"
        }
      },
      boxShadow: {
        soft: "0 8px 32px rgba(0,0,0,0.06)"
      },
      borderRadius: {
        card: "1.25rem"
      }
    },
  },
  plugins: [],
};
export default config;
