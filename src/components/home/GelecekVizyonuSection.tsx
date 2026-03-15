"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const VISION_ITEMS = [
  "Konaklama ve otel sektörü",
  "Seyahat ve ulaşım",
  "Etkinlik ve kongre",
  "Sağlık ve hasta deneyimi",
  "Genel hizmet sektörleri",
  "Eğitim ve kampüs deneyimi",
];

export function GelecekVizyonuSection() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="Misafirin Olduğu Her Yerde Teknoloji"
          subtitle="Eleythra, misafir deneyiminin kritik olduğu tüm sektörlerde akıllı çözümler sunmayı hedefliyor."
        />
        <motion.div
          className="mt-12 rounded-2xl bg-brand-bg/80 p-6 ring-1 ring-brand-dark/5 sm:p-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {VISION_ITEMS.map((item, i) => (
              <motion.li
                key={item}
                className="flex items-center gap-4 rounded-xl bg-white px-5 py-4 shadow-sm ring-1 ring-black/5 transition-shadow hover:shadow-md"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-accent/15 text-brand-accent">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="font-medium text-brand-dark">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
