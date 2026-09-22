/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#05070a",
        foreground: "#f3f6f8",
        card: {
          DEFAULT: "rgba(13, 17, 23, 0.7)",
          foreground: "#f3f6f8",
          border: "rgba(255, 255, 255, 0.08)",
        },
        cyber: {
          cyan: "#00f2fe",
          acid: "#d1ff56",
          blue: "#4facfe",
          purple: "#9d4edd",
          emerald: "#10b981",
          dark: "#080c10",
          panel: "#0e141b",
          border: "rgba(115, 228, 232, 0.18)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "DM Mono", "monospace"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 20s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "scan": "scan 3s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 15px rgba(209, 255, 86, 0.2)" },
          "100%": { boxShadow: "0 0 35px rgba(209, 255, 86, 0.6)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(1000%)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
