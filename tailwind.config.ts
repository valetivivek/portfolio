import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Solid, professional palette: teal + olive greens + neutrals
        primary: {
          50: "#ECFDF5",
          100: "#D1FAE5",
          200: "#A7F3D0",
          300: "#6EE7B7",
          400: "#34D399",
          500: "#10B981", // emerald/teal
          600: "#059669",
          700: "#047857",
          800: "#065F46",
          900: "#064E3B"
        },
        accent: {
          50: "#F2F8F3",
          100: "#E4F1E6",
          200: "#C9E3CD",
          300: "#A0C9A6",
          400: "#7AAF81",
          500: "#5C9463", // olive/green
          600: "#4A7750",
          700: "#3A5E40",
          800: "#2C4631",
          900: "#1F3123"
        },
        bg: "rgb(var(--bg))",
        surface: "rgb(var(--surface))",
        border: "rgb(var(--border))",
        text: "rgb(var(--text))",
        muted: "rgb(var(--muted))",
        ring: "rgb(var(--ring))"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Ubuntu", "Cantarell", "Noto Sans", "Helvetica Neue", "Arial", "sans-serif"]
      },
      boxShadow: {
        subtle: "0 1px 2px 0 rgba(16,24,40,0.08)",
      },
      borderRadius: {
        sm: "0.375rem",
        DEFAULT: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
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


