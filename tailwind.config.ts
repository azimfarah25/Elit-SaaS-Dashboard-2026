import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        glass: {
          border: "rgba(255, 255, 255, 0.1)",
          background: "rgba(255, 255, 255, 0.05)",
        },
        primary: {
          DEFAULT: "#8b5cf6", // Violet
          hover: "#7c3aed",
        },
        secondary: {
          DEFAULT: "#3b82f6", // Blue
          hover: "#2563eb",
        },
        accent: {
          DEFAULT: "#f43f5e", // Rose
          hover: "#e11d48",
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
