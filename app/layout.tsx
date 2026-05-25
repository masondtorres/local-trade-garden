import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
