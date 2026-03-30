"use client";

import { motion } from "framer-motion";

const PROBLEMS = [
  {
    title: "Parçalı sistemler",
    description:
      "Rezervasyon, iletişim ve hizmet talepleri farklı sistemlerde ve kanallarda dağınık şekilde yönetiliyor. Tek bir merkezi platform olmadığı için bilgi akışı kopuk hale geliyor.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
      </svg>
    ),
  },
  {
    title: "Manuel operasyonlar",
    description:
      "Tekrarlayan görevler ve bilgi talepleri çoğu zaman manuel olarak yönetiliyor. Bu durum hem zaman kaybına hem de operasyonel verimsizliğe yol açıyor.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Kopuk misafir deneyimi",
    description:
      "Misafir yolculuğu baştan sona kişiselleştirilemiyor ve anlık ihtiyaçlara hızlı şekilde cevap vermek zorlaşıyor.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
  },
];

export function ProblemSection() {
  return (
    <section className="bg-white px-4 pb-16 pt-10 sm:px-6 sm:pb-24 sm:pt-14 lg:px-8 lg:pt-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center md:mb-14">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl lg:text-5xl">
            Parçalı Sistemler Misafir Deneyimini Zorlaştırıyor
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-brand-dark/80">
            Misafir deneyimi birçok işletmede hâlâ farklı sistemler ve manuel süreçlerle yönetiliyor.
            Rezervasyon, iletişim, hizmet talepleri ve ödeme süreçleri tek bir akıllı merkezde birleşmediği
            için hem işletmeler hem de misafirler için verimsiz bir deneyim ortaya çıkıyor.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((item, i) => (
            <motion.div
              key={item.title}
              className="rounded-2xl border border-brand-dark/10 bg-brand-bg/50 p-6 transition-shadow hover:shadow-lg"
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/15 text-brand-accent"
                whileInView={{ rotate: 0 }}
                viewport={{ once: true }}
                initial={{ rotate: -10 }}
                transition={{ type: "spring", stiffness: 150, delay: i * 0.1 }}
              >
                {item.icon}
              </motion.div>
              <h3 className="font-heading text-lg font-semibold text-brand-dark">
                {item.title}
              </h3>
              <p className="mt-2 leading-relaxed text-brand-dark/80">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
