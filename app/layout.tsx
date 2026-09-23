import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "For Rizwana ❤️",
  description: "A little something I made from my heart, just for you.",
  keywords: ["Rizwana", "love letter", "apology", "from the heart"],
  icons: {
    icon: "❤️",
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
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
