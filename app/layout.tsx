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
  title: "Local Trade Garden | If You Made It, You Can Trade It",
  description:
    "Local Trade Garden is an early access local trade site for things made by hand, grown from the ground, raised with care, repaired with skill or earned through honest work.",
  keywords: [
    "local garden trade",
    "local trade",
    "handmade trade",
    "trade produce locally",
    "will work for food",
    "homestead trading",
    "local food exchange",
    "trade skills locally",
    "neighbor trade",
    "local labor trade",
    "handmade goods",
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
