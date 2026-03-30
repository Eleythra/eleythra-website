import Image from "next/image";
import Link from "next/link";

const KAILA_HERO_IMAGE = "/oteller/kaila-beach/otel.png";
const KAILA_HOTEL_URL = "https://kailabeachhotel.com/tr/anasayfa/";

export const metadata = {
  title: "Kaila Beach Hotel | Referans Otellerimiz | Eleythra",
  description:
    "Alanya Kaila Beach Otel'de Viona platformu nasıl kuruldu? Eleythra ile iş birliği hikayesi ve kurulum süreci.",
};

export default function KailaBeachPage() {
  return (
    <div className="bg-brand-bg">
      {/* Hero: otel görseli, aynı koyu arka plan stili */}
      <section className="relative overflow-hidden bg-[#0B1320] px-4 pt-24 pb-16 text-white sm:px-6 sm:pt-28 sm:pb-20 lg:px-8 lg:pt-32 lg:pb-24">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 70% 40%, rgba(0,168,232,0.06) 0%, transparent 50%), linear-gradient(180deg, #0B1320 0%, #0F1B2D 100%)",
          }}
        />
        <div className="absolute inset-0">
          <Image
            src={KAILA_HERO_IMAGE}
            alt="Kaila Beach Hotel"
            fill
            className="object-cover opacity-40"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-[#0B1320]/70" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl">
          <Link
            href="/referans-otellerimiz"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white"
          >
            ← Referans Otellerimiz
          </Link>
          <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            Kaila Beach Hotel
          </h1>
          <p className="mt-2 flex items-center gap-1.5 text-white/90 font-medium">
            <span aria-hidden>📍</span> Alanya, Antalya
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
            Kaila Beach Hotel, Eleythra&apos;nın geliştirdiği Viona platformunun ilk uygulama
            noktalarından biri olarak misafir deneyiminin dijitalleşmesi yolunda önemli bir pilot
            çalışma alanı olmuştur. Bu iş birliği kapsamında geliştirilen teknolojiler gerçek bir
            otel operasyonu içerisinde test edilmekte ve geliştirilerek ilerletilmektedir.
          </p>
        </div>
      </section>

      {/* Nasıl Kurduk? */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
            Nasıl Kurduk?
          </h2>
          <p className="mt-4 leading-relaxed text-brand-dark/85">
            Alanya&apos;da bulunan Kaila Beach Hotel ile yapılan iş birliği kapsamında Viona
            platformu otelin operasyonel yapısına entegre edilmiştir. Kurulum sürecinde Eleythra
            teknik ekibi ile otel yönetimi birlikte çalışarak sistemin mevcut operasyonlara sorunsuz
            şekilde uyum sağlamasını hedeflemiştir.
          </p>
          <p className="mt-4 leading-relaxed text-brand-dark/85">
            Bu süreçte platform:
          </p>
          <ul className="mt-3 space-y-2 text-brand-dark/85">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
              otel operasyonlarına uygun şekilde yapılandırılmış
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
              misafir deneyimi akışları yeniden tasarlanmış
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
              teknik entegrasyonlar tamamlanmıştır
            </li>
          </ul>
        </div>
      </section>

      {/* Viona Platformu Devrede */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
            Viona Platformu Devrede
          </h2>
          <p className="mt-4 leading-relaxed text-brand-dark/85">
            Kaila Beach Hotel, Viona platformunu sezon açılışıyla birlikte aktif olarak kullanmaya
            başlamıştır. Misafirler platform üzerinden:
          </p>
          <ul className="mt-4 space-y-2 text-brand-dark/85">
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
              check-in ve check-out işlemlerini gerçekleştirebilir
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
              rezervasyon bilgilerine ulaşabilir
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
              oda servisi ve otel hizmetlerine erişebilir
            </li>
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
              otel ile doğrudan iletişim kurabilir
            </li>
          </ul>
        </div>
      </section>

      {/* Uygulama Bilgileri kartları */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
            Uygulama Bilgileri
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-brand-dark/10 bg-brand-bg p-6 shadow-sm">
              <p className="text-sm font-semibold text-brand-accent">Kurulum Tamamlandı</p>
              <p className="mt-1 text-xl font-bold text-brand-dark">15 Nisan 2025</p>
            </div>
            <div className="rounded-2xl border border-brand-dark/10 bg-brand-bg p-6 shadow-sm">
              <p className="text-sm font-semibold text-brand-accent">Pilot Otel</p>
              <p className="mt-1 text-xl font-bold text-brand-dark">Kaila Beach Hotel</p>
            </div>
            <div className="rounded-2xl border border-brand-dark/10 bg-brand-bg p-6 shadow-sm">
              <p className="text-sm font-semibold text-brand-accent">Lokasyon</p>
              <p className="mt-1 text-xl font-bold text-brand-dark">Alanya, Antalya</p>
            </div>
          </div>
          <div className="mt-10">
            <a
              href={KAILA_HOTEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-brand-accent px-6 py-3.5 text-sm font-semibold text-white shadow transition-colors hover:bg-brand-accent-hover focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2"
            >
              Oteli ziyaret et
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
