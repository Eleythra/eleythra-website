import { VionaCard } from "@/components/projeler/VionaCard";

export const metadata = {
  title: "Projelerimiz | Eleythra Derin Teknoloji",
  description:
    "Eleythra'nın geliştirdiği teknoloji projeleri. Viona ile misafir deneyimini dijitalleştiriyoruz.",
};

const HERO_STYLE =
  "relative overflow-hidden bg-[#0B1320] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8";

export default function ProjelerimizPage() {
  return (
    <div className="bg-brand-bg">
      <section className={HERO_STYLE}>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 70% 40%, rgba(0,168,232,0.06) 0%, transparent 50%), linear-gradient(180deg, #0B1320 0%, #0F1B2D 100%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Projelerimiz
          </h1>
          <p className="mt-4 text-lg text-white/85">
            Misafir deneyimini akıllı hale getiren ürün ve platformlarımız. Gizlilik ilkesiyle
            yalnızca genel çerçeve paylaşılmaktadır.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <VionaCard />
      </section>
    </div>
  );
}
