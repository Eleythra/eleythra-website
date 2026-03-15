"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { HeroNetworkBackground } from "./HeroNetworkBackground";

export function HeroSection() {
  return (
    <section className="relative min-h-[72vh] overflow-hidden bg-[#0B1320] px-4 pt-20 pb-20 text-white sm:px-6 sm:pt-24 sm:pb-24 lg:px-8 lg:pt-28 lg:pb-28">
      {/* Animasyonlu AI ağ arka planı — sağ tarafta, sol metin alanına taşmaz */}
      <HeroNetworkBackground />

      {/* Sol metin alanı: koyu gradient + hafif radial overlay (daha temiz, okunabilir) */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 80% 70% at 25% 50%, rgba(11,19,32,0.45) 0%, transparent 55%),
            linear-gradient(to right, rgba(11,19,32,0.88) 0%, rgba(11,19,32,0.5) 40%, transparent 58%)
          `,
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col lg:flex-row lg:items-center lg:gap-12">
        {/* Sol: Başlık, açıklama, butonlar */}
        <div className="max-w-xl flex-1 lg:max-w-2xl">
          <motion.h1
            className="font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Misafir Deneyiminin Geleceğini Tasarlıyoruz
          </motion.h1>
          <motion.p
            className="mt-6 text-lg text-white/90 sm:text-xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Eleythra Derin Teknoloji, misafirin bulunduğu her alanda deneyimi daha akıllı hale
            getiren yapay zekâ ve veri odaklı teknolojiler geliştirir.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <Button href="/biz-kimiz" variant="primary" className="min-w-[180px]">
              Bizi yakından tanıyın
            </Button>
            <Button
              href="/#demo"
              variant="outline"
              className="min-w-[180px] border-white text-white hover:border-white/90 hover:bg-white/5"
            >
              Demo Talep Et
            </Button>
          </motion.div>
        </div>
        {/* Sağ: Animasyon alanı (HeroNetworkBackground zaten arka planda; bu kolon mobilde boş, masaüstünde denge için) */}
        <div className="hidden flex-1 lg:block" aria-hidden />
      </div>
    </section>
  );
}
