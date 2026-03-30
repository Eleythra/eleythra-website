import Image from "next/image";
import Link from "next/link";

const REFERENCE_HOTELS = [
  {
    slug: "kaila-beach",
    name: "Kaila Beach Hotel",
    location: "Alanya, Antalya",
    image: "/oteller/kaila-beach/otel.png",
    shortDescription:
      "Viona platformunun ilk uygulama noktalarından biri. Misafir deneyimini dijitalleştiren çözümler gerçek operasyon ortamında uygulanıyor.",
  },
];

export const metadata = {
  title: "Referans Otellerimiz | Eleythra Derin Teknoloji",
  description:
    "Eleythra'nın Viona platformunu kullanan referans otelleri. Pilot projelerimizi yürüttüğümüz otelleri keşfedin.",
};

const HERO_STYLE =
  "relative overflow-hidden bg-[#0B1320] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8";

export default function ReferansOtellerimizPage() {
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
            Referans Otellerimiz
          </h1>
          <p className="mt-4 text-lg text-white/85">
            Eleythra, geliştirdiği teknolojileri gerçek işletme ortamlarında test ederek misafir
            deneyimini iyileştirmeyi hedefler. Pilot uygulamalarımızı yürüttüğümüz referans
            otellerimiz aşağıda yer almaktadır.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto flex max-w-2xl justify-center">
          {REFERENCE_HOTELS.map((hotel) => (
            <Link
              key={hotel.slug}
              href={`/referans-otellerimiz/${hotel.slug}`}
              className="group w-full max-w-xl overflow-hidden rounded-2xl border border-brand-dark/10 bg-white shadow-lg transition-all hover:shadow-xl hover:ring-2 hover:ring-brand-accent/30"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-brand-dark-section">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 36rem"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <span className="absolute bottom-3 left-3 rounded-lg bg-white/95 px-3 py-2 text-sm font-semibold text-brand-dark shadow">
                  Detaylara gir →
                </span>
              </div>
              <div className="p-6">
                <h2 className="font-heading text-xl font-bold text-brand-dark sm:text-2xl">
                  {hotel.name}
                </h2>
                <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-brand-accent">
                  <span aria-hidden>📍</span> {hotel.location}
                </p>
                <p className="mt-3 text-brand-dark/85 leading-relaxed">
                  {hotel.shortDescription}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
