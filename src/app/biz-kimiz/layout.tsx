import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Biz Kimiz | Eleythra Derin Teknoloji",
  description:
    "Misafir deneyiminin geleceğini inşa ediyoruz. Eleythra Derin Teknoloji olarak yapay zekâ ve veri odaklı teknolojiler geliştiriyoruz.",
};

export default function BizKimizLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
