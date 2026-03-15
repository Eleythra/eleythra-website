import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

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

export const metadata: Metadata = {
  title: "Eleythra Derin Teknoloji | Misafir Deneyiminin Geleceği",
  description:
    "Eleythra Derin Teknoloji, misafirin bulunduğu her alanda deneyimi daha akıllı hale getiren yapay zekâ ve veri odaklı teknolojiler geliştirir.",
  openGraph: {
    title: "Eleythra Derin Teknoloji",
    description:
      "Misafir deneyimini daha akıllı, hızlı ve kişisel hale getiren AI ve veri odaklı teknolojiler.",
  },
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
