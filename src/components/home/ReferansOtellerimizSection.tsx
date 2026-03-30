"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const KAILA_IMAGES = [
  "/oteller/kaila-beach/otel.png",
  "/oteller/kaila-beach/otel2.png",
  "/oteller/kaila-beach/otel3.png",
];

const KAILA_HOTEL_URL = "https://kailabeachhotel.com/tr/anasayfa/";
const SLIDE_DURATION_MS = 4500;

export function ReferansOtellerimizSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % KAILA_IMAGES.length);
    }, SLIDE_DURATION_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
            Referans Otellerimiz
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-dark/80">
            Viona platformunu kullanan oteller. Misafir deneyimini tek noktadan yönetiyoruz.
          </p>
        </motion.div>

        <motion.article
          className="mt-12 overflow-hidden rounded-2xl bg-brand-bg shadow-xl ring-1 ring-black/5"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid gap-0 lg:grid-cols-2">
            <div className="relative aspect-[4/3] min-h-[240px] overflow-hidden bg-brand-dark-section sm:aspect-video lg:aspect-[4/3]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={KAILA_IMAGES[index]}
                    alt={`Alanya Kaila Beach Otel ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
                {KAILA_IMAGES.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Fotoğraf ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === index ? "w-8 bg-white" : "w-1.5 bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
              <h3 className="font-heading text-2xl font-bold text-brand-dark sm:text-3xl">
                Alanya Kaila Beach Otel
              </h3>
              <p className="mt-2 text-brand-accent font-medium">
                Viona ile akıllı misafir deneyimi
              </p>
              <p className="mt-4 text-brand-dark/80 leading-relaxed">
                Alanya Kaila Beach Otel, Viona platformunu 15 Nisan itibarıyla devreye aldı.
                Sezon açılışıyla birlikte misafirler check-in/out, rezervasyon, oda servisi ve
                tüm otel hizmetlerine tek uygulama üzerinden ulaşabiliyor.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-brand-dark/70">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                  Viona kurulumu tamamlandı
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                  15 Nisan 2025 — sezon açılışı ile kullanımda
                </li>
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/referans-otellerimiz/kaila-beach"
                  className="inline-flex items-center justify-center rounded-xl bg-brand-accent px-6 py-3.5 text-sm font-semibold text-white shadow transition-colors hover:bg-brand-accent-hover focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2"
                >
                  Detaylı bilgi
                </a>
                <a
                  href={KAILA_HOTEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-brand-accent px-6 py-3.5 text-sm font-semibold text-brand-accent transition-all duration-300 hover:bg-brand-accent hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2"
                >
                  Oteli ziyaret et
                </a>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
