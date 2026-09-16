import type { Metadata, Viewport } from "next";
import { Atkinson_Hyperlegible, Libre_Baskerville } from "next/font/google";
import { JsonLd } from "@/components/PageBlocks";
import { email, serviceArea, siteUrl } from "@/content/site";
import "./globals.css";
const display = Libre_Baskerville({ subsets: ["latin"], variable: "--font-display", weight: ["400", "700"] });
const body = Atkinson_Hyperlegible({ subsets: ["latin"], variable: "--font-body", weight: ["400", "700"] });
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Local Trade Garden | Grow Local. Trade Local. Eat Local.", template: "%s" },
  description: "Find, sell, trade or give away garden goods near you.",
  alternates: { canonical: "/" },
  openGraph: { title: "Local Trade Garden", description: "Find, sell, trade or give away garden goods near you.", url: siteUrl, siteName: "Local Trade Garden", type: "website" },
};
export const viewport: Viewport = { width: "device-width", initialScale: 1 };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans antialiased">
        <JsonLd data={{ "@context": "https://schema.org", "@type": "Organization", name: "Local Trade Garden", url: siteUrl, email, areaServed: serviceArea }} />
        {children}
      </body>
    </html>
  );
}
