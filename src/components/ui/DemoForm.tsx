"use client";

import { useState } from "react";
import { PROJECTS } from "@/lib/projects";

export function DemoForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    purpose: "",
    project: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/demo-talep", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Gönderim başarısız.");
      }
      setStatus("success");
      setFormData({ name: "", company: "", email: "", phone: "", purpose: "", project: "" });
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
    <form onSubmit={handleSubmit} className="mx-auto max-w-xl space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-brand-dark">
          Ad Soyad
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          className="mt-1 w-full rounded-xl border border-brand-dark/20 bg-white px-4 py-3 text-brand-dark focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20"
        />
      </div>
      <div>
        <label htmlFor="company" className="block text-sm font-medium text-brand-dark">
          Şirket
        </label>
        <input
          id="company"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          className="mt-1 w-full rounded-xl border border-brand-dark/20 bg-white px-4 py-3 text-brand-dark focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20"
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-brand-dark">
            E-posta
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1 w-full rounded-xl border border-brand-dark/20 bg-white px-4 py-3 text-brand-dark focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-brand-dark">
            Telefon
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            className="mt-1 w-full rounded-xl border border-brand-dark/20 bg-white px-4 py-3 text-brand-dark focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20"
          />
        </div>
      </div>
      <div>
        <label htmlFor="project" className="block text-sm font-medium text-brand-dark">
          Proje
        </label>
        <select
          id="project"
          name="project"
          value={formData.project}
          onChange={handleChange}
          className="mt-1 w-full rounded-xl border border-brand-dark/20 bg-white px-4 py-3 text-brand-dark focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20"
        >
          <option value="">Proje seçin</option>
          {PROJECTS.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name} — {p.shortDescription}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="purpose" className="block text-sm font-medium text-brand-dark">
          Proje amacı
        </label>
        <textarea
          id="purpose"
          name="purpose"
          rows={4}
          value={formData.purpose}
          onChange={handleChange}
          className="mt-1 w-full rounded-xl border border-brand-dark/20 bg-white px-4 py-3 text-brand-dark focus:border-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-accent/20"
          placeholder="Demo talebinizi kısaca açıklayın..."
        />
      </div>
      {status === "success" && (
        <p className="rounded-xl bg-green-100 py-3 text-center text-sm text-green-800">
          Talebiniz alındı. En kısa sürede size dönüş yapacağız.
        </p>
      )}
      {status === "error" && (
        <p className="rounded-xl bg-red-100 py-3 text-center text-sm text-red-800">
          Bir hata oluştu. Lütfen tekrar deneyin veya doğrudan iletişime geçin.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center rounded-xl bg-brand-accent px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-brand-accent-hover hover:shadow-xl disabled:opacity-70"
      >
        {status === "sending" ? "Gönderiliyor..." : "Demo Talep Et"}
      </button>
    </form>
  );
}
