import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "İletişim | Eleythra Derin Teknoloji",
  description:
    "Projelerimiz, demo talebi veya iş birliği için bizimle iletişime geçin. E-posta, adres ve harita.",
};

export default function IletisimLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
