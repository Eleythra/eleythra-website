"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DemoForm } from "@/components/ui/DemoForm";

export function DemoTalepSection() {
  return (
    <section id="demo" className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          title="Projelerimizi Yakından Görmek İster Misiniz?"
          subtitle="Demo talebi için formu doldurun; size en kısa sürede dönüş yapalım."
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <DemoForm />
        </motion.div>
      </div>
    </section>
  );
}
