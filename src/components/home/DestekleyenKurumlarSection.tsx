"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const INSTITUTIONS = [
  { name: "TÜBİTAK", image: "/kurumlar/tubitak.png" },
  { name: "Teknopark İstanbul", image: "/kurumlar/teknopark-istanbul.png" },
  { name: "Cube Incubation", image: "/kurumlar/cube-incubation.png" },
  { name: "Alanya Alaaddin Keykubat Üniversitesi", image: "/kurumlar/alanya-universitesi.png" },
];

const DURATION_MS = 3000;

function InstitutionLogo({ name, image, isActive }: { name: string; image: string; isActive: boolean }) {
  return (
    <div
      className={`flex h-28 w-56 flex-shrink-0 items-center justify-center rounded-xl bg-white px-5 shadow-md ring-1 ring-black/5 transition-all duration-500 sm:h-32 sm:w-64 ${
        isActive ? "grayscale-0 opacity-100 scale-100" : "grayscale opacity-60 scale-95"
      }`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image}
        alt={name}
        className="max-h-full w-auto max-w-full object-contain"
      />
    </div>
  );
}

export function DestekleyenKurumlarSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % INSTITUTIONS.length);
    }, DURATION_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="bg-brand-bg px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="Destekleyen Kurumlar"
          subtitle="Eleythra'yı destekleyen ve iş birliği yaptığımız kurumlar."
        />
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative flex min-h-[140px] w-full max-w-3xl items-center justify-center rounded-2xl bg-white/80 p-8 shadow-inner ring-1 ring-black/5 sm:min-h-[180px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4 }}
                className="flex items-center justify-center"
              >
                <InstitutionLogo
                  name={INSTITUTIONS[index].name}
                  image={INSTITUTIONS[index].image}
                  isActive
                />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="mt-6 flex justify-center gap-2">
            {INSTITUTIONS.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Kurum ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-brand-accent" : "w-2 bg-brand-dark/20"
                }`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
