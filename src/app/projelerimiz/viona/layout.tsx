import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Viona | Projelerimiz | Eleythra Derin Teknoloji",
  description:
    "Viona: Misafir deneyimini tek platformdan yöneten yeni nesil dijital sistem. Yapay zekâ destekli otel platformu.",
};

export default function VionaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
