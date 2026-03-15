"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ_ITEMS = [
  {
    question: "Eleythra Derin Teknoloji nedir?",
    answer:
      "Eleythra Derin Teknoloji, misafir deneyiminin olduğu alanlarda yapay zekâ ve veri odaklı teknolojiler geliştiren bir deep-tech girişimidir. Şirket, işletmeler ile misafirler arasındaki etkileşimi daha akıllı, hızlı ve kişisel hale getiren dijital platformlar geliştirmeyi hedefler.",
  },
  {
    question: "Viona nedir ve ne işe yarar?",
    answer:
      "Viona, Eleythra tarafından geliştirilen yapay zekâ destekli misafir deneyimi platformudur. Misafirlerin rezervasyon yapmasını, bilgi almasını, hizmet talep etmesini ve işletme ile iletişim kurmasını tek bir dijital platform üzerinden yönetmelerini sağlar.",
  },
  {
    question: "Eleythra sadece otel sektörü için mi teknoloji geliştiriyor?",
    answer:
      "Hayır. Eleythra'nın ilk odak noktası konaklama sektörüdür ancak şirketin vizyonu misafir deneyiminin olduğu tüm sektörlerde teknoloji geliştirmektir. Bu alanlar arasında seyahat, etkinlik, sağlık ve diğer hizmet sektörleri de bulunmaktadır.",
  },
  {
    question: "Viona platformu işletmelere hangi avantajları sağlar?",
    answer:
      "Viona işletmelere misafir taleplerinin daha hızlı yönetilmesi, operasyonel verimliliğin artması, misafir memnuniyetinin yükselmesi, hizmet süreçlerinin dijitalleşmesi ve veri odaklı karar alma imkânı sunar.",
  },
  {
    question: "Viona mevcut otel sistemleri ile entegre çalışabilir mi?",
    answer:
      "Evet. Viona mevcut otel yönetim sistemleri ve diğer dijital altyapılarla entegre çalışabilecek şekilde tasarlanmaktadır. Bu sayede işletmeler mevcut sistemlerini değiştirmeden platformu kullanabilir.",
  },
  {
    question: "Viona platformunu nasıl deneyebilirim?",
    answer:
      "Viona platformunu deneyimlemek için ana sayfadaki Demo Talep Et formunu doldurabilirsiniz. Ekibimiz sizinle iletişime geçerek platformu tanıtacak ve işletmenize nasıl değer katabileceğini gösterecektir.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-brand-bg px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 flex items-center gap-4">
          <span className="h-1 w-12 shrink-0 rounded-full bg-brand-accent" />
          <h2 className="font-heading text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">
            Sıkça Sorulan Sorular
          </h2>
        </div>
        <ul className="space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <motion.li
              key={item.question}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="rounded-xl border border-brand-dark/10 bg-white shadow-sm overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-medium text-brand-dark transition-colors hover:bg-brand-bg/50"
              >
                <span>{item.question}</span>
                <span
                  className={`shrink-0 text-brand-accent transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="border-t border-brand-dark/10 px-5 py-4 text-brand-dark/80 leading-relaxed">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
