import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { getSiteUrl } from "@/lib/site-url";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Eleythra Derin Teknoloji | Misafir Deneyiminin Geleceği",
  description:
    "Eleythra Derin Teknoloji, misafirin bulunduğu her alanda deneyimi daha akıllı hale getiren yapay zekâ ve veri odaklı teknolojiler geliştirir.",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    siteName: "Eleythra Derin Teknoloji",
    title: "Eleythra Derin Teknoloji",
    description:
      "Misafir deneyimini daha akıllı, hızlı ve kişisel hale getiren AI ve veri odaklı teknolojiler.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eleythra Derin Teknoloji",
    description:
      "Misafir deneyimini daha akıllı, hızlı ve kişisel hale getiren AI ve veri odaklı teknolojiler.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F1B2D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${sora.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-brand-bg font-sans antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
