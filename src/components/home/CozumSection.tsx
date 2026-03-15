"use client";

import { motion } from "framer-motion";

const PILLARS = [
  {
    label: "Bilgi",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    label: "Hizmet talebi",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    label: "Rezervasyon",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
      </svg>
    ),
  },
  {
    label: "İletişim",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.222 5.222 0 015.672 21c-1.256 0-2.557-.059-2.857-.412A4.5 4.5 0 012.25 18v-.75c0-1.591.769-2.924 2.086-3.662A48.849 48.849 0 0112 12c2.5 0 4.847.655 6.879 1.588 1.317.738 2.086 2.071 2.086 3.662V18c0 .621-.332 1.14-.857 1.412-.3.353-1.6.412-2.857.412z" />
      </svg>
    ),
  },
];

export function CozumSection() {
  return (
    <section className="bg-brand-dark-section px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center md:mb-14">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Misafir Deneyimi İçin Akıllı Platformlar
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-200">
            Tek bir platformda bilgi, hizmet talebi, rezervasyon ve iletişim; yapay zekâ ve veri ile güçlendirilmiş.
          </p>
        </div>

        {/* Destekleyen görsel: dört sütun */}
        <motion.div
          className="mb-10 grid grid-cols-2 gap-4 sm:grid-cols-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {PILLARS.map((item, i) => (
            <motion.div
              key={item.label}
              className="flex flex-col items-center rounded-xl bg-white/10 px-4 py-5 ring-1 ring-white/20 backdrop-blur-sm"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.08 }}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.15)" }}
            >
              <span className="text-brand-accent">{item.icon}</span>
              <span className="mt-2 text-center text-sm font-medium text-white">{item.label}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="rounded-2xl bg-white p-8 shadow-xl ring-1 ring-black/10 sm:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-center text-lg leading-relaxed text-brand-dark">
            Eleythra, konaklama ve misafir deneyiminin olduğu tüm sektörlerde kullanılabilecek
            yapay zekâ, veri analizi ve otomasyon tabanlı çözümler geliştiriyor. Misafirler
            bilgi alabilir, hizmet talep edebilir, rezervasyon yapabilir ve süreçlerini tek
            bir arayüzden yönetebilir; işletmeler ise veri odaklı kararlar alarak operasyonlarını
            optimize edebilir.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
