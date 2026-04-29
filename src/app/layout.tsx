import type { Metadata } from "next";
import { Raleway, Cormorant_Garamond, Noto_Serif_JP } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ["latin"],
  variable: "--font-noto-jp",
  display: "swap",
  weight: ["300", "400"],
});

export const metadata: Metadata = {
  title: "Rie Takagi — Online Business Partner · Educator · Japan Culture & Travel",
  description:
    "Rie Takagi helps people find their own way to work and live — in Japan and beyond. Online business support, coaching, and Japanese culture.",
  openGraph: {
    title: "Rie Takagi — Online Business Partner · Educator · Japan Culture & Travel",
    description:
      "Helping people find their own way to work and live — in Japan and beyond.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${raleway.variable} ${cormorant.variable} ${notoSerifJP.variable}`}
    >
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
