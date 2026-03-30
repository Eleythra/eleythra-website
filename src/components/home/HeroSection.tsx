"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { VionaHeroVideo } from "./VionaHeroVideo";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-[#0B1320] px-4 pb-12 pt-12 text-white sm:px-6 sm:pb-14 sm:pt-14 lg:px-8 lg:pb-16 lg:pt-16"
      aria-labelledby="hero-heading"
    >
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 88% 80% at 22% 48%, rgba(11,19,32,0.88) 0%, transparent 52%),
            radial-gradient(ellipse 52% 48% at 88% 42%, rgba(0,168,232,0.07) 0%, transparent 46%),
            linear-gradient(168deg, #0B1320 0%, #070b12 50%, #0B1320 100%)
          `,
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Videoyla dikey ortalama: satır yüksekliği iki kolondan büyük olana göre; sol kolon içeriği ortalanır */}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.06fr)_minmax(0,0.94fr)] lg:items-center lg:gap-12 xl:gap-14">
          <div className="flex min-h-0 min-w-0 flex-col justify-center lg:max-w-xl lg:py-2 xl:max-w-[36rem]">
            <motion.h1
              id="hero-heading"
              className="font-heading text-[1.875rem] font-bold leading-[1.14] tracking-[-0.02em] sm:text-5xl sm:leading-[1.08] lg:text-[2.75rem] lg:leading-[1.06] xl:text-[2.875rem]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              Misafir Deneyiminin Geleceğini Tasarlıyoruz
            </motion.h1>
            <motion.p
              className="mt-4 max-w-xl text-[0.9375rem] leading-[1.65] text-white/[0.92] sm:mt-5 sm:text-[1.0625rem] sm:leading-relaxed"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.11 }}
            >
              Eleythra Derin Teknoloji, misafirin bulunduğu her alanda deneyimi daha akıllı hale
              getiren yapay zekâ ve veri odaklı teknolojiler geliştirir.
            </motion.p>
            <motion.div
              className="mt-8 flex flex-wrap gap-3 sm:mt-9 sm:gap-4"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.18 }}
            >
              <Button href="/biz-kimiz" variant="primary" className="min-w-[180px] shadow-lg shadow-brand-accent/25">
                Bizi yakından tanıyın
              </Button>
              <Button
                href="/#demo"
                variant="outline"
                className="min-w-[180px] border-white/85 bg-white/[0.04] text-white backdrop-blur-sm hover:border-white hover:bg-white/10"
              >
                Demo Talep Et
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="relative flex w-full min-w-0 items-center justify-center lg:justify-end"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            <VionaHeroVideo />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
