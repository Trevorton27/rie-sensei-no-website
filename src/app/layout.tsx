import type { Metadata } from "next";
import { Raleway, Cormorant_Garamond, Noto_Serif_JP } from "next/font/google";
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
  title: "Rie Takagi — Writer · Educator · Artist",
  description:
    "Rie Takagi is a writer, educator, and artist devoted to beauty, knowledge, and the art of meaningful connection.",
  openGraph: {
    title: "Rie Takagi — Writer · Educator · Artist",
    description:
      "Devoted to beauty, knowledge, and the art of meaningful connection.",
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
