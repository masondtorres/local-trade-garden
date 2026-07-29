import type { Metadata, Viewport } from "next";
import { Atkinson_Hyperlegible, Libre_Baskerville } from "next/font/google";
import { JsonLd } from "@/components/PageBlocks";
import { email, serviceArea, siteUrl } from "@/content/site";
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
  metadataBase: new URL(siteUrl),
  title: {
    default: "Local Trade Garden | Trade What You Made, Grew, Raised or Repaired",
    template: "%s",
  },
  description:
    "A peer-to-peer barter board for Sevier County, Knox County and nearby East Tennessee.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Local Trade Garden | Trade What You Made, Grew, Raised or Repaired",
    description:
      "A peer-to-peer barter board for Sevier County, Knox County and nearby East Tennessee.",
    url: siteUrl,
    siteName: "Local Trade Garden",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local Trade Garden | Trade What You Made, Grew, Raised or Repaired",
    description:
      "A peer-to-peer barter board for Sevier County, Knox County and nearby East Tennessee.",
  },
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Local Trade Garden",
    url: siteUrl,
    email,
    areaServed: serviceArea,
    description:
      "Local Trade Garden is a peer-to-peer barter board for Sevier County, Knox County and nearby East Tennessee.",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Local Trade Garden",
    url: siteUrl,
    description:
      "A local trade site for plants, seeds, produce, eggs, honey, handmade goods, tools, repairs, skills, local labor and lawful farm goods.",
    publisher: {
      "@type": "Organization",
      name: "Local Trade Garden",
    },
  };

  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans antialiased">
        <JsonLd data={[organizationSchema, websiteSchema]} />
        {children}
      </body>
    </html>
  );
}
