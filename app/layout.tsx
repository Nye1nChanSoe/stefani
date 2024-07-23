import type { Metadata } from "next";
import { Barlow_Condensed, Open_Sans } from "next/font/google";
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
        bg-background text-white`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
