import { HeroSection } from "@/components/home/HeroSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { CozumAnlatiSection } from "@/components/home/CozumAnlatiSection";
import { EleythraNedirSection } from "@/components/home/EleythraNedirSection";
import { CozumSection } from "@/components/home/CozumSection";
import { ProjelerSection } from "@/components/home/ProjelerSection";
import { ReferansOtellerimizSection } from "@/components/home/ReferansOtellerimizSection";
import { GelecekVizyonuSection } from "@/components/home/GelecekVizyonuSection";
import { DestekleyenKurumlarSection } from "@/components/home/DestekleyenKurumlarSection";
import { DemoTalepSection } from "@/components/home/DemoTalepSection";
import { FaqSection } from "@/components/home/FaqSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <CozumAnlatiSection />
      <EleythraNedirSection />
      <CozumSection />
      <ProjelerSection />
      <ReferansOtellerimizSection />
      <GelecekVizyonuSection />
      <DestekleyenKurumlarSection />
      <DemoTalepSection />
      <FaqSection />
    </>
  );
}
