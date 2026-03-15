import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referanslarımız | Eleythra Derin Teknoloji",
  description:
    "Pilot projelerimizi yürüttüğümüz referans oteller ve iş birliği yaptığımız kurumlar: TÜBİTAK, Teknopark İstanbul, Cube Incubation, Alanya Alaaddin Keykubat Üniversitesi.",
};

export default function ReferanslarimizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
