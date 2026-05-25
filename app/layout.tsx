import type { Metadata } from "next";
import { Fraunces, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800"],
});

const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Local Trade Garden | Cash-Free Garden Trading for Local Growers",
  description:
    "Local Trade Garden helps backyard gardeners, small growers and homesteaders trade surplus produce, seedlings, eggs, honey, compost, tools and garden goods with nearby people, without cash.",
  keywords: [
    "local garden trade",
    "garden barter app",
    "trade produce locally",
    "backyard gardener app",
    "homestead trading",
    "local food exchange",
    "trade vegetables",
    "seedling swap",
    "garden surplus",
    "cash-free barter",
    "farmers market alternative",
    "community garden exchange",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
