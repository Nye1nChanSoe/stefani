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
      fontWeight: {
        thin: "100",
        hairline: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        "extra-bold": "800",
        black: "900",
      },
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
        "encode-sans-condensed": ["Encode Sans Condensed", ...fontFamily.sans],
        nunito: ["Nunito", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
