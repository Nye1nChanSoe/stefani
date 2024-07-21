import type { Metadata } from "next";
import {
  Barlow_Condensed,
  Encode_Sans_Condensed,
  Nunito,
} from "next/font/google";
import "./globals.css";
import Footer from "./Footer";

const barlowCondensed = Barlow_Condensed({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-barlow",
});
const encodeSansCondensed = Encode_Sans_Condensed({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-encode",
});
const nunito = Nunito({ subsets: ["latin"], variable: "--font-barlow" });

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
          ${encodeSansCondensed.variable}
          ${nunito.variable}
        bg-background text-white`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
