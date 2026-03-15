"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function VionaCard() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col items-center">
      <Link href="/projelerimiz/viona" className="w-full max-w-xl">
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="group relative overflow-hidden rounded-2xl border border-brand-dark/10 bg-white shadow-lg transition-all hover:shadow-xl hover:ring-2 hover:ring-brand-accent/30"
        >
          <div className="relative aspect-[16/10] overflow-hidden bg-[#0B1320]">
            <Image
              src="/projeler/dashboard.png"
              alt="Viona otel yönetim paneli"
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 640px) 100vw, 36rem"
              unoptimized
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1320]/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <span className="absolute bottom-3 left-3 rounded-lg bg-white/95 px-3 py-2 text-sm font-semibold text-brand-dark shadow">
              Detaylara gir →
            </span>
          </div>
          <div className="p-6">
            <h2 className="font-heading text-2xl font-bold text-brand-dark sm:text-3xl">
              Viona
            </h2>
            <p className="mt-2 text-sm font-medium text-brand-accent">
              Akıllı otel yönetim platformu
            </p>
            <p className="mt-3 text-brand-dark/85 leading-relaxed">
              Misafir deneyimini tek noktadan yöneten, rezervasyondan oda servisine kadar
              operasyonları dijitalleştiren modern platform.
            </p>
          </div>
        </motion.article>
      </Link>
    </div>
  );
}
