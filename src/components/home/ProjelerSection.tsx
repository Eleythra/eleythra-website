"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { PROJECTS } from "@/lib/projects";

const viona = PROJECTS[0];

const VIONA_HIGHLIGHTS = [
  "QR ile giriş, check-in/out saniyeler içinde",
  "Spa, restoran, oda servisi tek uygulamada",
  "Yazılı ve sesli chatbot ile yapay zekâ ajanları",
  "Çevrimdışı bilgi erişimi",
  "Sadakat puanı ve kişiselleştirilmiş öneriler",
  "Yönetici paneli ile gerçek zamanlı izleme",
];

export function ProjelerSection() {
  return (
    <section id="projelerimiz" className="bg-brand-bg px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
            Projelerimizi Keşfedin
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-dark/80">
            Eleythra tarafından geliştirilen ürün ve platformlar.
          </p>
        </motion.div>

        <motion.article
          className="relative mt-12 overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-black/5"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid gap-0 lg:grid-cols-2">
            <div className="relative flex min-h-[280px] items-center justify-center bg-gradient-to-br from-brand-accent/10 via-brand-bg to-brand-highlight/10 p-8 sm:min-h-[320px]">
              <motion.div
                className="absolute inset-0 opacity-30"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.3 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{
                  backgroundImage: `radial-gradient(circle at 30% 70%, #00A8E8 0%, transparent 50%),
                    radial-gradient(circle at 70% 30%, #6C63FF 0%, transparent 50%)`,
                }}
              />
              <motion.div
                className="relative flex h-40 w-40 items-center justify-center rounded-2xl bg-white shadow-lg sm:h-48 sm:w-48"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <svg
                  className="h-20 w-20 text-brand-accent sm:h-24 sm:w-24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                  />
                </svg>
              </motion.div>
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              <motion.h3
                className="font-heading text-2xl font-bold text-brand-dark sm:text-3xl"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                {viona.name}
              </motion.h3>
              <motion.p
                className="mt-2 text-sm font-medium uppercase tracking-wide text-brand-accent"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.25 }}
              >
                Akıllı konaklama ve hizmet yönetim platformu
              </motion.p>
              <motion.p
                className="mt-3 text-lg leading-relaxed text-brand-dark/80"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                Otel misafirlerinin tüm konaklama deneyimini tek noktadan yöneten akıllı dijital asistan. Mobil uygulama, web ve kiosk ile 7&apos;den 70&apos;e herkes için erişim.
              </motion.p>
              <ul className="mt-5 space-y-2">
                {VIONA_HIGHLIGHTS.map((item, i) => (
                  <motion.li
                    key={item}
                    className="flex items-center gap-2 text-sm text-brand-dark/80"
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.35 + i * 0.05 }}
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-accent" />
                    {item}
                  </motion.li>
                ))}
              </ul>
              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                <Button href="/projelerimiz" variant="primary">
                  Daha fazlasını keşfet
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
