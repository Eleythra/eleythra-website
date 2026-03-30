"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const FLOW_STEPS = [
  { label: "Misafir Mobil Uygulaması", icon: "📱" },
  { label: "API ve Servis Katmanı", icon: "⚙️" },
  { label: "Otel Yönetim Paneli", icon: "🖥️" },
  { label: "Veri Analizi ve Yapay Zekâ Modülleri", icon: "🧠" },
  { label: "Operasyon ve Hizmet Yönetimi", icon: "✅" },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

export default function VionaDetailPage() {
  const flowRef = useRef(null);
  const visionRef = useRef(null);
  const flowInView = useInView(flowRef, { once: true, margin: "-80px" });
  const visionInView = useInView(visionRef, { once: true, margin: "-100px" });

  return (
    <div className="bg-brand-bg">
      {/* Hero — dashboard arka plan, başlık, alt başlık, açıklama, butonlar */}
      <section className="relative min-h-[70vh] overflow-hidden bg-[#0B1320] px-4 pt-24 pb-16 text-white sm:px-6 sm:pt-28 sm:pb-20 lg:px-8 lg:pt-32 lg:pb-24">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 70% 40%, rgba(0,168,232,0.08) 0%, transparent 50%), linear-gradient(180deg, #0B1320 0%, #0F1B2D 100%)",
          }}
        />
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/projeler/dashboard.png"
            alt=""
            fill
            className="object-cover object-top"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-[#0B1320]/85" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <Link
            href="/projelerimiz"
            className="inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white"
          >
            ← Projelerimiz
          </Link>
          <motion.h1
            className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            Viona
          </motion.h1>
          <motion.p
            className="mt-3 text-xl font-medium text-white/95"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Misafir deneyimini tek platformdan yöneten yeni nesil dijital sistem
          </motion.p>
          <motion.p
            className="mt-6 max-w-2xl text-lg leading-relaxed text-white/90"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Viona, otellerde misafir deneyimini daha akıllı, hızlı ve bağlantılı hale getirmek için
            geliştirilen yapay zekâ destekli bir dijital platformdur. Rezervasyon, iletişim, hizmet
            talepleri ve operasyon süreçleri tek bir sistem üzerinden yönetilebilir hale gelir.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <Link
              href="/iletisim"
              className="inline-flex items-center justify-center rounded-xl bg-brand-accent px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-brand-accent-hover focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2 focus:ring-offset-[#0B1320]"
            >
              Demo Talep Et
            </Link>
            <Link
              href="/referans-otellerimiz"
              className="inline-flex items-center justify-center rounded-xl border-2 border-white/60 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15 hover:border-white/80 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#0B1320]"
            >
              Referans Otellerimizi Gör
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Viona Nedir? */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <motion.h2
            className="font-heading text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl"
            {...fadeIn}
          >
            Viona Nedir?
          </motion.h2>
          <motion.div
            className="mt-6 space-y-4 text-brand-dark/85 leading-relaxed"
            {...fadeIn}
            transition={{ delay: 0.1 }}
          >
            <p>
              Viona, misafir deneyimini tek bir dijital platform altında birleştiren akıllı bir
              yazılım altyapısıdır. Otellerde farklı sistemlerde bulunan hizmetleri tek bir
              uygulama üzerinden erişilebilir hale getirir. Misafirler otel ile kolayca iletişim
              kurabilir, hizmet taleplerini iletebilir ve oteldeki birçok işlemi hızlı şekilde
              gerçekleştirebilir.
            </p>
            <p>
              İşletmeler için ise Viona, operasyonları daha verimli hale getiren ve misafir
              taleplerini merkezi olarak yöneten bir yönetim paneli sunar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Misafir Deneyimini Yeniden Tasarlamak */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <motion.h2
            className="font-heading text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl"
            {...fadeIn}
          >
            Misafir Deneyimini Yeniden Tasarlamak
          </motion.h2>
          <motion.p
            className="mt-6 text-brand-dark/85 leading-relaxed"
            {...fadeIn}
            transition={{ delay: 0.05 }}
          >
            Modern misafirler hızlı ve dijital hizmetler bekliyor. Viona, misafirlerin oteldeki
            deneyimini daha akıcı hale getirerek hizmetlere tek noktadan erişim sağlar.
          </motion.p>
          <motion.p
            className="mt-4 text-brand-dark/85 leading-relaxed"
            {...fadeIn}
            transition={{ delay: 0.1 }}
          >
            Misafirler platform üzerinden
          </motion.p>
          <motion.ul
            className="mt-4 space-y-3"
            {...fadeIn}
            transition={{ delay: 0.15 }}
          >
            {[
              "check-in ve check-out işlemlerini gerçekleştirebilir",
              "rezervasyon bilgilerine ulaşabilir",
              "oda servisi ve otel hizmetlerini talep edebilir",
              "otel ile anlık iletişim kurabilir",
              "otel hakkında bilgi alabilir",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-brand-dark/85">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-accent/20 text-sm text-brand-accent">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </motion.ul>
          <motion.p
            className="mt-6 text-brand-dark/85 leading-relaxed"
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            Bu sayede misafir deneyimi daha hızlı, daha bağlantılı ve daha kişisel hale gelir.
          </motion.p>
        </div>
      </section>

      {/* İşletmeler İçin Merkezi Yönetim */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <motion.h2
            className="font-heading text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl"
            {...fadeIn}
          >
            İşletmeler İçin Merkezi Yönetim
          </motion.h2>
          <motion.p
            className="mt-6 text-brand-dark/85 leading-relaxed"
            {...fadeIn}
            transition={{ delay: 0.05 }}
          >
            Viona yalnızca misafirler için değil, otel operasyonları için de güçlü bir yönetim
            platformu sunar. Otel ekipleri misafir taleplerini merkezi bir panel üzerinden takip
            edebilir ve hizmet süreçlerini daha verimli şekilde yönetebilir.
          </motion.p>
          <motion.p
            className="mt-4 text-brand-dark/85 leading-relaxed"
            {...fadeIn}
            transition={{ delay: 0.1 }}
          >
            Viona sayesinde
          </motion.p>
          <motion.ul
            className="mt-4 space-y-3"
            {...fadeIn}
            transition={{ delay: 0.15 }}
          >
            {[
              "misafir talepleri tek merkezde toplanır",
              "operasyon süreçleri daha hızlı yönetilir",
              "ekipler arası koordinasyon artar",
              "misafir memnuniyeti yükselir",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-brand-dark/85">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-accent/20 text-sm text-brand-accent">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Dashboard — yönetim paneli görseli */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <motion.h2
            className="font-heading text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl"
            {...fadeIn}
          >
            Yönetim Paneli (Dashboard)
          </motion.h2>
          <motion.p
            className="mt-4 max-w-3xl text-brand-dark/85 leading-relaxed"
            {...fadeIn}
            transition={{ delay: 0.05 }}
          >
            Otel ekipleri tüm operasyonu tek ekrandan takip eder. Misafir özeti, canlı talepler,
            rezervasyonlar ve performans göstergeleri anlık olarak görüntülenir.
          </motion.p>
          <motion.div
            className="mt-10 overflow-hidden rounded-2xl border border-brand-dark/10 bg-[#0B1320] shadow-xl"
            {...fadeIn}
            transition={{ delay: 0.1 }}
          >
            <div className="relative aspect-[16/10] w-full">
              <Image
                src="/projeler/dashboard.png"
                alt="Viona yönetim paneli — misafir özeti, rezervasyon ve canlı talepler"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 80rem"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Viona Yazılım Mimarisi — animasyonlu flowchart */}
      <section className="bg-brand-bg px-4 py-16 sm:px-6 sm:py-20 lg:px-8" ref={flowRef}>
        <div className="mx-auto max-w-2xl">
          <motion.h2
            className="font-heading text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl text-center"
            initial={{ opacity: 0, y: 16 }}
            animate={flowInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
          >
            Viona Yazılım Mimarisi
          </motion.h2>
          <motion.p
            className="mt-6 text-center text-brand-dark/85 leading-relaxed"
            initial={{ opacity: 0, y: 12 }}
            animate={flowInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            Viona, modern yazılım mimarisi ve ölçeklenebilir altyapı üzerine inşa edilmiştir.
            Platform, misafir uygulaması ile işletme yönetim paneli arasında kesintisiz veri akışı
            sağlayarak tüm hizmet süreçlerini merkezi bir yapı altında toplar.
          </motion.p>
          <motion.p
            className="mt-4 text-center text-brand-dark/80 text-sm leading-relaxed"
            initial={{ opacity: 0, y: 12 }}
            animate={flowInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Sistem mimarisi; kullanıcı arayüzleri, servis katmanı ve veri altyapısından oluşan
            modüler bir yapı ile tasarlanmıştır. Bu yapı sayesinde platform farklı işletme
            ihtiyaçlarına kolayca uyarlanabilir.
          </motion.p>

          <div className="mt-12 flex flex-col items-center gap-0">
            {FLOW_STEPS.map((step, i) => (
              <motion.div
                key={step.label}
                className="flex flex-col items-center"
                initial={{ opacity: 0, x: -24 }}
                animate={flowInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.12 }}
              >
                <div className="flex items-center gap-4 rounded-2xl border border-brand-dark/10 bg-white px-5 py-4 shadow-md transition-shadow hover:shadow-lg w-full max-w-xs sm:max-w-sm">
                  <span className="text-2xl" aria-hidden>{step.icon}</span>
                  <span className="font-medium text-brand-dark text-center sm:text-left">{step.label}</span>
                </div>
                {i < FLOW_STEPS.length - 1 && (
                  <motion.div
                    className="h-6 w-0.5 bg-brand-accent/50"
                    initial={{ scaleY: 0 }}
                    animate={flowInView ? { scaleY: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.2 + i * 0.12 }}
                    style={{ originY: 0 }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Özellik kartları — yazılım mimarisi ile aynı kısımda */}
          <div className="mt-16 max-w-4xl mx-auto">
            <motion.h3
              className="font-heading text-xl font-bold tracking-tight text-brand-dark text-center sm:text-2xl"
              initial={{ opacity: 0, y: 12 }}
              animate={flowInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              Platform özellikleri
            </motion.h3>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {[
                {
                  icon: "📱",
                  title: "Web & mobil, çok kanallı",
                  text: "Viona masaüstü, tablet ve mobilde aynı deneyimi sunar. Misafirler ve ekipler istedikleri cihazdan kesintisiz erişir; veri tek merkezde toplanır.",
                },
                {
                  icon: "🖥️",
                  title: "Merkezi yönetim paneli",
                  text: "Tüm operasyon tek ekrandan yönetilir. Rezervasyon, talepler, misafir özeti ve performans göstergeleri anlık görüntülenir.",
                },
                {
                  icon: "🔒",
                  title: "Güvenli ve ölçeklenebilir altyapı",
                  text: "Modern mimari ve modüler yapı sayesinde platform güvenle büyütülebilir ve farklı işletme ihtiyaçlarına uyarlanabilir.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  className="rounded-2xl border border-brand-dark/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
                  initial={{ opacity: 0, y: 16 }}
                  animate={flowInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.55 + i * 0.08 }}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent/15 text-xl">
                      {item.icon}
                    </span>
                    <h4 className="font-heading font-bold text-brand-dark">{item.title}</h4>
                  </div>
                  <p className="mt-3 text-sm text-brand-dark/85 leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Küçük CTA */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <motion.div
            className="rounded-2xl border border-brand-dark/10 bg-white p-8 shadow-sm"
            {...fadeIn}
          >
            <h3 className="font-heading text-xl font-bold text-brand-dark">
              Viona hakkında daha fazla bilgi almak ister misiniz?
            </h3>
            <p className="mt-3 text-brand-dark/85 leading-relaxed text-sm">
              Platformun nasıl çalıştığını görmek veya iş birliği fırsatlarını değerlendirmek için
              bizimle iletişime geçebilirsiniz.
            </p>
            <Link
              href="/iletisim"
              className="mt-5 inline-flex items-center justify-center rounded-xl bg-brand-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-accent-hover focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2"
            >
              Demo Talep Et
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Gelecek Vizyonu — sadece başlık ve metin */}
      <section
        ref={visionRef}
        className="relative overflow-hidden bg-[#0B1320] px-4 pt-14 pb-24 sm:px-6 sm:pt-16 sm:pb-28 lg:px-8 lg:pt-20 lg:pb-32"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(0,168,232,0.08) 0%, transparent 50%), linear-gradient(180deg, #0B1320 0%, #0d1625 100%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={visionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl lg:leading-snug">
              Her otel için özel eğitilmiş{" "}
              <span className="bg-gradient-to-r from-brand-accent to-cyan-400 bg-clip-text text-transparent">
                yapay zeka personelleri
              </span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/90 sm:text-lg">
              Eleythra&apos;nın asıl hedefi, her işletmeye otele özel eğitilmiş yapay zeka
              personelleri sunmaktır. Viona bu vizyonun ilk adımıdır. Misafir deneyiminin olduğu
              tüm sektörlere uyarlanabilir; her alanda daha akıllı, bağlantılı ve veri odaklı
              dijital deneyimler hedefliyoruz.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
