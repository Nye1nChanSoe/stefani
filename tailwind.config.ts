import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

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
        "barlow-condensed": ["Barlow Condensed", ...fontFamily.sans],
        "open-sans": ["Open Sans", ...fontFamily.sans],
        "dm-sans": ["DM Sans", ...fontFamily.sans],
        "noto-sans-myanmar": ["Noto Sans Myanmar", ...fontFamily.sans],
        montserrat: ["Montserrat", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
