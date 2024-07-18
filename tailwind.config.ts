import type { Config } from "tailwindcss";
import {fontFamily} from "tailwindcss/defaultTheme"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#b388eb",
        white: "#f8f7ff",
        background: "#30343f",
        brown: "#ffd8be",
      },
      fontFamily: {
        "barlow-condensed": [
          "var(--font-barlow-condensed)",
          ...fontFamily.sans,
        ],
        "encode-sans-condensed": [
          "var(--font-encode-sans-condensed)",
          ...fontFamily.sans,
        ],
        nunito: ["var(--font-nunito)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
