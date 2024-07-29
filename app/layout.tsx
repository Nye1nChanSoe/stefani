import type { Metadata } from "next";
import {
  Barlow_Condensed,
  Open_Sans,
  DM_Sans,
  Noto_Sans_Myanmar,
  Montserrat,
} from "next/font/google";
import "./globals.css";
import Footer from "./Footer";

const barlowCondensed = Barlow_Condensed({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-barlow",
});
const openSans = Open_Sans({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-encode",
});
const dmSans = DM_Sans({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-encode",
});
const notoSansMyanmar = Noto_Sans_Myanmar({
  weight: "500",
  subsets: ["myanmar"],
  variable: "--font-encode",
});
const montserrat = Montserrat({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-encode",
});

export const metadata: Metadata = {
  title: "Stefani's Portfolio",
  description: "TODO:",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${barlowCondensed.variable}
          ${openSans.variable}
          ${dmSans.variable}
          ${notoSansMyanmar.variable}
          ${montserrat.variable}
        bg-background text-white`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
