"use client";

import { useState } from "react";
import {
  CONTACT_EMAIL,
  CONTACT_WEBSITE,
  CONTACT_ADDRESS,
} from "@/lib/constants";
import { IletisimHeroBackground } from "@/components/iletisim/IletisimHeroBackground";

const CARDS = [
  {
    title: "E-posta",
    value: CONTACT_EMAIL,
    description:
      "Her türlü soru, iş birliği ve bilgi talebi için bizimle e-posta üzerinden iletişime geçebilirsiniz.",
    href: `mailto:${CONTACT_EMAIL}`,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    ),
  },
  {
    title: "Web",
    value: "eleythra.com",
    description:
      "Projelerimiz ve teknolojilerimiz hakkında detaylı bilgi almak için web sitemizi ziyaret edebilirsiniz.",
    href: CONTACT_WEBSITE,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
      />
    ),
  },
  {
    title: "Adres",
    value: CONTACT_ADDRESS,
    description:
      "Teknopark İstanbul yerleşkesinde faaliyet göstermekteyiz.",
    href: null,
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      />
    ),
  },
];

const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Teknopark+İstanbul+Sanayi+Mah.+Teknopark+Bulvarı+Pendik+İstanbul&output=embed";

export default function IletisimPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/iletisim", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Gönderim başarısız.");
      }
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="bg-brand-bg">
      {/* 1. Hero — sade, çok büyük değil */}
      <section className="relative overflow-hidden bg-[#0B1320] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 70% 40%, rgba(0,168,232,0.06) 0%, transparent 50%), linear-gradient(180deg, #0B1320 0%, #0F1B2D 100%)",
          }}
        />
        <IletisimHeroBackground />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
            Bizimle İletişime Geçin
          </h1>
          <p className="mt-4 text-lg text-white/85">
            Projelerimiz hakkında bilgi almak, iş birliği fırsatlarını değerlendirmek
            veya demo talebinde bulunmak için bizimle iletişime geçebilirsiniz.
          </p>
        </div>
      </section>

      {/* 2. İletişim kartları */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-3">
            {CARDS.map((card) => {
              const className =
                "group flex flex-col rounded-2xl border border-brand-dark/10 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md";
              const content = (
                <>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent transition-colors group-hover:bg-brand-accent/15">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      {card.icon}
                    </svg>
                  </div>
                  <h2 className="mt-4 font-heading text-lg font-semibold text-brand-dark">
                    {card.title}
                  </h2>
                  <p className="mt-1 text-sm font-medium text-brand-accent">
                    {card.value}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-brand-dark/75">
                    {card.description}
                  </p>
                </>
              );
              if (card.href) {
                return (
                  <a
                    key={card.title}
                    href={card.href}
                    target={card.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      card.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className={className}
                  >
                    {content}
                  </a>
                );
              }
              return (
                <div key={card.title} className={className}>
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Harita */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
            Konumumuz
          </h2>
          <p className="mt-2 text-brand-dark/80">
            Teknopark İstanbul yerleşkesinde bulunan ofisimizde faaliyet göstermekteyiz.
          </p>
          <div className="mt-6 overflow-hidden rounded-2xl border border-brand-dark/10 shadow-sm">
            <iframe
              src={MAP_EMBED_URL}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Eleythra Konum — Teknopark İstanbul"
              className="block w-full"
            />
          </div>
        </div>
      </section>

      {/* 4. İletişim formu */}
      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-xl">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-brand-dark sm:text-3xl">
            Bize Ulaşın
          </h2>
          <p className="mt-2 text-brand-dark/80">
            Formu doldurarak bize ulaşabilirsiniz.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5 rounded-2xl border border-brand-dark/10 bg-white p-6 shadow-sm sm:p-8"
          >
            <div>
              <label
                htmlFor="contact-name"
                className="block text-sm font-medium text-brand-dark"
              >
                Ad Soyad
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-1 w-full rounded-xl border border-brand-dark/20 bg-white px-4 py-3 text-brand-dark focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20"
              />
            </div>
            <div>
              <label
                htmlFor="contact-email"
                className="block text-sm font-medium text-brand-dark"
              >
                E-posta
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-1 w-full rounded-xl border border-brand-dark/20 bg-white px-4 py-3 text-brand-dark focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20"
              />
            </div>
            <div>
              <label
                htmlFor="contact-subject"
                className="block text-sm font-medium text-brand-dark"
              >
                Konu
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                className="mt-1 w-full rounded-xl border border-brand-dark/20 bg-white px-4 py-3 text-brand-dark focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20"
              />
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm font-medium text-brand-dark"
              >
                Mesaj
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="mt-1 w-full resize-none rounded-xl border border-brand-dark/20 bg-white px-4 py-3 text-brand-dark focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20"
              />
            </div>
            {status === "success" && (
              <p className="text-sm font-medium text-green-600">
                Mesajınız alındı. En kısa sürede size dönüş yapacağız.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm font-medium text-red-600">
                Bir hata oluştu. Lütfen tekrar deneyin veya e-posta ile iletişime geçin.
              </p>
            )}
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-xl bg-brand-accent px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-brand-accent-hover disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:ring-offset-2"
            >
              {status === "sending" ? "Gönderiliyor…" : "Mesaj Gönder"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
