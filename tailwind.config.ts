import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Zen Browser Payload
        primary: {
          50: "#FFF1F0",
          100: "#FFE4E1",
          200: "#FFC9C4",
          300: "#FFAEA6",
          400: "#FF786B",
          500: "#FF5F56", // Main Zen Orange
          600: "#E6453C",
          700: "#CC2E26",
          800: "#B32019",
          900: "#99140F"
        },
        bg: "rgb(var(--bg))",
        surface: "rgb(var(--surface))",
        border: "rgb(var(--border))",
        text: "rgb(var(--text))",
        muted: "rgb(var(--muted))",
        ring: "rgb(var(--ring))"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui"],
        heading: ["var(--font-bricolage)", "ui-serif", "Georgia"],
      },
      boxShadow: {
        subtle: "0 1px 2px 0 rgba(0,0,0,0.05)",
      },
      borderRadius: {
        sm: "0.25rem",
        DEFAULT: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
        "2xl": "2rem",
      },
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
      }
    },
  },
  plugins: [],
};

export default config;


