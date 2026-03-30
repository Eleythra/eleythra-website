"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 },
};

export default function BizKimizPage() {
  return (
    <div className="bg-brand-bg">
      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-[#0B1320] px-4 pt-24 pb-16 text-white sm:px-6 sm:pt-28 sm:pb-20 lg:px-8 lg:pt-32 lg:pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-xl"
            >
              <h1 className="font-heading text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-[2.75rem]">
                Misafir Deneyiminin Geleceğini Tasarlıyoruz
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/90">
                Eleythra Derin Teknoloji, misafir deneyiminin olduğu alanlarda yapay zekâ ve veri
                odaklı teknolojiler geliştiren bir deep-tech girişimidir. Amacımız işletmeler ile
                misafirler arasındaki etkileşimi daha akıllı, hızlı ve kişisel hale getiren dijital
                altyapılar geliştirmektir.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-white/80">
                Misafir deneyimi yalnızca konaklama sektörüyle sınırlı değildir. Eleythra, misafirin
                bulunduğu her alanda daha akıllı ve sezgisel dijital deneyimler inşa etmeyi hedefler.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl ring-1 ring-white/10 lg:aspect-auto lg:min-h-[320px]"
            >
              <Image
                src="/biz-kimiz/misafir.png"
                alt="Misafir deneyimi ve teknoloji"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Eleythra Kimdir? + Vizyon + Misyon — tek bütün, başlıklar ortada, animasyonlu */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <motion.div
            className="overflow-hidden rounded-3xl bg-brand-bg shadow-xl ring-1 ring-black/5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <div className="p-8 text-center sm:p-10 lg:p-12">
              <motion.h2
                className="font-heading text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                Eleythra Kimdir?
              </motion.h2>
              <motion.div
                className="mx-auto mt-2 h-1 w-16 rounded-full bg-brand-accent"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                style={{ transformOrigin: "center" }}
              />
              <div className="mx-auto mt-8 max-w-2xl space-y-5 text-center text-lg leading-relaxed text-brand-dark/85">
                <p>
                  Eleythra Derin Teknoloji, işletmeler ile misafirler arasındaki etkileşimi yeniden
                  tasarlamak için yapay zekâ, veri analizi ve otomasyon teknolojileri geliştiren bir
                  teknoloji şirketidir.
                </p>
                <p>
                  Bugün birçok sektörde misafir deneyimi farklı sistemler, manuel süreçler ve kopuk
                  iletişim kanalları üzerinden yönetilmektedir. Bu durum hem işletmeler hem de misafirler
                  için verimsiz bir deneyim ortaya çıkarır.
                </p>
                <p>
                  Eleythra&apos;nın amacı bu parçalı yapıyı ortadan kaldırarak misafir deneyimini tek bir
                  akıllı dijital ekosistem içinde birleştirmektir.
                </p>
                <p>
                  İlk odak alanımız konaklama sektörüdür. Ancak geliştirdiğimiz teknoloji altyapısı
                  misafirin bulunduğu birçok sektöre uyarlanabilecek şekilde tasarlanmaktadır.
                </p>
              </div>
            </div>
            <div className="grid border-t border-brand-dark/10 sm:grid-cols-2">
              <motion.div
                className="border-brand-dark/10 p-8 text-center sm:border-r"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <h3 className="font-heading text-xl font-bold text-brand-accent sm:text-2xl">
                  Vizyonumuz
                </h3>
                <motion.div
                  className="mx-auto mt-2 h-0.5 w-12 rounded-full bg-brand-accent/60"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.2 }}
                  style={{ transformOrigin: "center" }}
                />
                <p className="mx-auto mt-4 max-w-sm text-center text-brand-dark/85 leading-relaxed">
                Misafirin bulunduğu her alanda yapay zekâ ve veri odaklı teknolojilerle daha akıllı, kişiselleştirilmiş ve sürdürülebilir dijital deneyimler inşa eden küresel bir teknoloji şirketi olmak.
                </p>
              </motion.div>
              <motion.div
                className="p-8 text-center"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                <h3 className="font-heading text-xl font-bold text-brand-accent sm:text-2xl">
                  Misyonumuz
                </h3>
                <motion.div
                  className="mx-auto mt-2 h-0.5 w-12 rounded-full bg-brand-accent/60"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.25 }}
                  style={{ transformOrigin: "center" }}
                />
                <p className="mx-auto mt-4 max-w-sm text-center text-brand-dark/85 leading-relaxed">
                Misafir deneyimini kapsayan sektörlerde yapay zekâ mimarileri geliştirerek işletmeler ile misafirler arasındaki etkileşimi daha akıllı ve verimli hale getiren teknolojiler üretmek.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. Teknoloji Yaklaşımımız */}
      <section className="bg-brand-bg px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            className="font-heading text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl"
            {...fadeIn}
          >
            Teknoloji Yaklaşımımız
          </motion.h2>
          <motion.p
            className="mt-4 max-w-2xl text-lg leading-relaxed text-brand-dark/85"
            {...fadeIn}
          >
            Eleythra, misafir deneyimini geliştirmek için insan odaklı tasarım, veri analizi ve akıllı otomasyonu bir araya getirir.
          </motion.p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "İnsan Odaklı Teknoloji",
                description:
                  "Misafir ve işletme ihtiyaçlarını merkeze alan, kullanımı kolay ve gerçek değer yaratan dijital çözümler geliştiriyoruz.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  />
                ),
              },
              {
                title: "Veri Odaklı Karar Sistemleri",
                description:
                  "Veriyi anlamlı içgörülere dönüştürerek işletmelerin daha hızlı ve doğru kararlar almasını sağlıyoruz.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                  />
                ),
              },
              {
                title: "Akıllı Otomasyon",
                description:
                  "Tekrarlayan süreçleri otomatikleştirerek ekiplerin operasyon yerine deneyime odaklanmasına yardımcı oluyoruz.",
                icon: (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                  />
                ),
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    {item.icon}
                  </svg>
                </div>
                <h3 className="mt-4 font-heading text-xl font-semibold text-brand-dark">
                  {item.title}
                </h3>
                <p className="mt-2 text-brand-dark/80 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Kurucumuz & Hikayemiz */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <motion.h2
            className="font-heading text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl"
            {...fadeIn}
          >
            Kurucumuz & Hikayemiz
          </motion.h2>
          <div className="mt-12 grid gap-10 lg:grid-cols-5 lg:items-center lg:gap-14">
            <motion.div
              className="relative aspect-[3/4] min-h-[360px] overflow-hidden rounded-2xl bg-brand-bg lg:col-span-2 lg:min-h-0"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <Image
                src="/biz-kimiz/ahmet.png"
                alt="Ahmet — Eleythra Kurucusu ve CEO"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 420px"
                quality={95}
              />
            </motion.div>
            <div className="flex flex-col justify-center space-y-6 text-lg leading-relaxed text-brand-dark/85 lg:col-span-3">
              <motion.p {...fadeIn}>
                Eleythra Derin Teknoloji&apos;nin kurucusu ve CEO&apos;su olarak teknolojiyi yalnızca
                bir araç değil; geleceği şekillendiren bir güç olarak görüyorum.
              </motion.p>
              <motion.p {...fadeIn}>
                Elektrik-Elektronik Mühendisliği eğitimimi Alanya Alaaddin Keykubat Üniversitesi&apos;nde
                %100 İngilizce olarak ve bölüm birinciliği ile tamamladıktan sonra kariyerimin erken
                döneminde savunma ve uzay teknolojileri alanında önemli deneyimler kazandım.
              </motion.p>
              <motion.p {...fadeIn}>
                ASELSAN&apos;da tank ve zırhlı araçlar üzerine sistem mühendisliği, TÜRKSAT&apos;ta ise
                uydu programları alanında çalışarak yüksek teknoloji projelerinin disiplinini ve
                karmaşıklığını yakından tanıma fırsatı buldum.
              </motion.p>
              <motion.p {...fadeIn}>
                Bu deneyimler; mühendislik bakış açımı, problem çözme yaklaşımımı ve büyük ölçekli
                sistem mimarilerine dair anlayışımı şekillendirdi. Donanım tasarımı, aviyonik
                sistemler, RF iletişimi, gömülü sistemler ve sistem mimarisi gibi teknik alanlardaki
                bilgi birikimim bugün Eleythra&apos;nın teknolojik vizyonunun temelini oluşturuyor.
              </motion.p>
              <motion.p {...fadeIn}>
                2023 yılında temellerini attığımız Eleythra, 2024 yılında geliştirdiğimiz iş planı ve
                girişimcilik süreçleriyle kurumsal kimliğini kazandı. 2025 yılında TÜBİTAK BİGG
                desteğiyle resmi olarak hayata geçerek profesyonel teknoloji yolculuğuna başladı.
              </motion.p>
              <motion.p {...fadeIn}>
                Bugün Eleythra Derin Teknoloji olarak yapay zekâ, otonom yazılım mimarileri ve akıllı
                sistemler alanlarında yenilikçi çözümler geliştiriyoruz. Özellikle Viona platformu ile
                misafir deneyimi alanında dijital dönüşümün yeni standardını oluşturmayı hedefliyoruz.
              </motion.p>
              <motion.p {...fadeIn}>
                Vizyonum; yapay zekâ çağında küresel ölçekte katma değer üreten ve genç mühendislerin
                gelişimini destekleyen güçlü bir teknoloji ekosistemi inşa etmektir.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* 6b. Eleythra'nın Yolculuğu — Kurucumuz altında */}
      <section className="bg-brand-bg px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <motion.h2
            className="font-heading text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl"
            {...fadeIn}
          >
            Eleythra&apos;nın Yolculuğu
          </motion.h2>
          <div className="mt-12 space-y-0">
            {[
              {
                year: "2024",
                title: "Fikir ve Temeller",
                text: "Eleythra'nın temelleri 2024 yılında misafir deneyimini daha akıllı ve verimli hale getirecek bir teknoloji platformu geliştirme fikriyle atıldı. Bu dönemde sektör ihtiyaçları analiz edilerek yapay zekâ ve veri odaklı çözümler üzerine ilk konsept ve iş planı oluşturuldu.",
              },
              {
                year: "2025",
                title: "Şirketin Kuruluşu",
                text: "2025 yılında TÜBİTAK BİGG 1812 programı kapsamında destek alarak Eleythra Derin Teknoloji resmi olarak kuruldu. Bu süreçte şirketin teknoloji vizyonu netleştirildi ve misafir deneyimine yönelik yapay zekâ tabanlı platform geliştirme çalışmaları başlatıldı.",
              },
              {
                year: "2026",
                title: "İlk Pilot Uygulama ve Ar-Ge Süreci",
                text: "2026 yılında ilk proje uygulaması için otel partneri ile anlaşma sağlandı ve platformun gerçek bir işletme ortamında uygulanmasına yönelik çalışmalar başlatıldı. Bu adımla birlikte Eleythra'nın geliştirdiği teknolojiler sahada test edilerek aktif Ar-Ge süreci başlamış oldu.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                className="relative flex gap-6 pb-12 last:pb-0 sm:gap-8"
              >
                <div className="flex shrink-0 flex-col items-center">
                  <div className="flex h-4 w-4 shrink-0 rounded-full border-2 border-brand-accent bg-white ring-4 ring-brand-bg" />
                  {i < 2 && (
                    <div className="mt-1 h-full w-px flex-1 bg-gradient-to-b from-brand-accent/50 to-brand-accent/20 sm:min-h-[72px]" />
                  )}
                </div>
                <div className="flex-1 pt-0.5">
                  <span className="inline-block rounded-xl bg-brand-accent/10 px-4 py-1.5 text-base font-bold text-brand-accent">
                    {item.year}
                  </span>
                  <h3 className="mt-2 font-heading text-xl font-bold text-brand-dark sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-brand-dark/85 leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA — footerdan ayrı, kendi bölümü */}
      <section className="border-t border-white/10 bg-[#0F1B2D] px-4 py-14 text-white sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            className="font-heading text-3xl font-bold tracking-tight sm:text-4xl"
            {...fadeIn}
          >
            Geleceğin misafir deneyimini birlikte inşa edelim
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-white/90"
            {...fadeIn}
          >
            Eleythra&apos;nın geliştirdiği teknolojileri keşfetmek veya iş birliği fırsatlarını
            değerlendirmek için bizimle iletişime geçebilirsiniz.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Button
              href="/projelerimiz"
              variant="outline"
              className="min-w-[200px] border-white text-white hover:bg-white/10 hover:text-white"
            >
              Projelerimizi İnceleyin
            </Button>
            <Button
              href="/iletisim"
              variant="outline"
              className="min-w-[200px] border-white text-white hover:bg-white/10 hover:text-white"
            >
              İletişime Geçin
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
