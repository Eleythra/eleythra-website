import Image from "next/image";

const INSTITUTIONS = [
  {
    name: "TÜBİTAK",
    shortLabel: "TÜBİTAK BİGG",
    image: "/kurumlar/tubitak.png",
    description:
      "Eleythra Derin Teknoloji, TÜBİTAK BİGG 1812 programı kapsamında destek alarak şirketleşme sürecini tamamlamıştır. Bu destek, girişimimizin Ar-Ge odaklı büyümesine önemli katkı sağlamıştır.",
  },
  {
    name: "Teknopark İstanbul",
    shortLabel: "Teknopark İstanbul",
    image: "/kurumlar/teknopark-istanbul.png",
    description:
      "Eleythra, Teknopark İstanbul ekosisteminde Ar-Ge faaliyetlerini sürdürmektedir. Teknopark altyapısı ve ağ imkânlarıyla yenilikçi projelerimizi hayata geçiriyoruz.",
  },
  {
    name: "Cube Incubation",
    shortLabel: "Cube Incubation",
    image: "/kurumlar/cube-incubation.png",
    description:
      "Eleythra girişimcilik süreçlerinde Cube Incubation programının desteğinden faydalanmaktadır. Mentorluk ve hızlandırma programlarıyla büyüme yolculuğumuzu güçlendiriyoruz.",
  },
  {
    name: "Alanya Alaaddin Keykubat Üniversitesi",
    shortLabel: "Alanya Alaaddin Keykubat Üniversitesi",
    image: "/kurumlar/alanya-universitesi.png",
    description:
      "Eleythra'nın kuruluş sürecinde akademik altyapı ve mühendislik bilgi birikimi Alanya Alaaddin Keykubat Üniversitesi ile güçlü bir bağ kurmuştur. Üniversite-sanayi iş birliği projelerimiz devam etmektedir.",
  },
];

export const metadata = {
  title: "İş Birliği ve Destekleyen Kurumlar | Eleythra Derin Teknoloji",
  description:
    "Eleythra Derin Teknoloji'nin TÜBİTAK, Teknopark İstanbul, Cube Incubation ve Alanya Üniversitesi ile iş birlikleri.",
};

const HERO_STYLE =
  "relative overflow-hidden bg-[#0B1320] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8";

export default function IsBirligiDestekleyenKurumlarPage() {
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
            İş Birliği ve Destekleyen Kurumlar
          </h1>
          <p className="mt-4 text-lg text-white/85">
            Eleythra Derin Teknoloji, girişimcilik ve teknoloji ekosistemindeki güçlü kurumların
            desteğiyle gelişimini sürdürmektedir. Aşağıda iş birliği yaptığımız ve bizi destekleyen
            kurumları bulabilirsiniz.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 sm:grid-cols-2">
            {INSTITUTIONS.map((inst) => (
              <article
                key={inst.name}
                className="flex flex-col overflow-hidden rounded-2xl border border-brand-dark/10 bg-white shadow-lg transition-shadow hover:shadow-xl"
              >
                <div className="relative flex h-32 flex-shrink-0 items-center justify-center bg-brand-bg/50 px-6 py-6 sm:h-36">
                  <div className="relative h-full w-full">
                    <Image
                      src={inst.image}
                      alt={inst.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 100vw, 50vw"
                      unoptimized
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-heading text-xl font-bold text-brand-dark sm:text-2xl">
                    {inst.shortLabel}
                  </h2>
                  <p className="mt-3 flex-1 leading-relaxed text-brand-dark/85">
                    {inst.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
