import type { Metadata } from "next";
import { Atkinson_Hyperlegible, Libre_Baskerville } from "next/font/google";
import "./globals.css";

const display = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "700"],
});

const body = Atkinson_Hyperlegible({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Local Trade Garden | Cash-Free Garden Trading for Local Growers",
  description:
    "Local Trade Garden is an early access waitlist and prototype for cash-free local trades between backyard gardeners, small growers and homesteaders.",
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
