"use client";

import { motion } from "framer-motion";

const MODULES = [
  { label: "Bilgi", icon: "M12 21a9 9 0 0 0 8.72-6.75M12 21a9 9 0 0 1-8.72-6.75M12 21c2.49 0 4.5-4.03 4.5-9S14.49 3 12 3m0 18c-2.49 0-4.5-4.03-4.5-9S9.51 3 12 3m0 0a9 9 0 0 1 7.84 4.58M12 3a9 9 0 0 0-7.84 4.58" },
  { label: "Rezervasyon", icon: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" },
  { label: "Hizmet", icon: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.118a7.5 7.5 0 0 1 14.998 0A17.93 17.93 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" },
  { label: "İletişim", icon: "M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.76 9.76 0 0 1-2.555-.337A5.22 5.22 0 0 1 5.67 21c-1.256 0-2.557-.059-2.858-.412A4.5 4.5 0 0 1 2.25 18v-.75c0-1.59.77-2.92 2.09-3.66A48.85 48.85 0 0 1 12 12c2.5 0 4.85.66 6.88 1.59" },
];

export function CozumAnlatiSection() {
  return (
    <section className="bg-brand-bg px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            className="lg:pr-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
              Eleythra Bu Sorunu Nasıl Çözüyor?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-brand-dark/80">
              Eleythra, misafir deneyiminde karşılaşılan parçalı sistemleri tek bir akıllı platform
              altında birleştirir. Yapay zekâ ve veri odaklı teknolojiler sayesinde işletmeler ile
              misafirler arasındaki etkileşim daha hızlı, akıllı ve kişisel hale gelir.
            </p>
          </motion.div>

          <motion.div
            className="relative flex min-h-[280px] items-center justify-center rounded-2xl bg-brand-dark-section p-8 sm:min-h-[320px]"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="absolute inset-0 rounded-2xl opacity-30"
              style={{
                backgroundImage: `radial-gradient(circle at 70% 50%, rgba(0,168,232,0.15) 0%, transparent 55%),
                  radial-gradient(circle at 30% 50%, rgba(108,99,255,0.08) 0%, transparent 50%)`,
              }}
            />
            <div className="relative flex w-full max-w-md items-stretch gap-4">
              {/* Sol: 4 modül (dağınık kaynaklar) */}
              <div className="flex flex-col justify-center gap-3">
                {MODULES.map((m, i) => (
                  <motion.div
                    key={m.label}
                    className="flex items-center gap-3 rounded-xl bg-white/5 px-3 py-2.5 ring-1 ring-white/10"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <svg className="h-5 w-5 shrink-0 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={m.icon} />
                    </svg>
                    <span className="text-sm font-medium text-white/90">{m.label}</span>
                  </motion.div>
                ))}
              </div>
              {/* Oklar: soldan sağa akış */}
              <div className="flex flex-1 items-center justify-center">
                <svg className="h-full w-full max-w-[80px] text-brand-accent/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </div>
              {/* Sağ: tek merkez (platform) */}
              <motion.div
                className="flex flex-col items-center justify-center rounded-xl bg-brand-accent/20 px-6 py-8 ring-2 ring-brand-accent/40"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/30">
                  <svg className="h-6 w-6 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5A1.5 1.5 0 0 0 .75 4.5v1.5c0 1.516.732 2.75 1.75 3.45M3.75 3h1.5A1.5 1.5 0 0 1 6.75 4.5v1.5c0 1.516-.732 2.75-1.75 3.45M18.75 3v11.25A2.25 2.25 0 0 1 18 16.5h-2.25M18.75 3h1.5A1.5 1.5 0 0 1 23.25 4.5v1.5c0 1.516-.732 2.75-1.75 3.45M18.75 3h-1.5A1.5 1.5 0 0 0 17.25 4.5v1.5c0 1.516.732 2.75 1.75 3.45" />
                  </svg>
                </div>
                <span className="mt-3 text-center text-sm font-semibold text-white">Tek platform</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
