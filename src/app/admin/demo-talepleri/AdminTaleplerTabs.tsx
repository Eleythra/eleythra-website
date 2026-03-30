"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import type { TaleplerRow } from "@/lib/supabase";
import { PROJECTS } from "@/lib/projects";

function getProjectName(projectId: string | null): string {
  if (!projectId) return "—";
  const p = PROJECTS.find((x) => x.id === projectId);
  return p ? p.name : projectId;
}

function formatDate(iso: string) {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("tr-TR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return iso;
  }
}

function isPending(t: TaleplerRow) {
  return !(t.read_at ?? null);
}

/** Okundu: beyaz satır; beklemede: sarı ton + sol şerit */
function rowToneClass(isRead: boolean) {
  return isRead
    ? "border-l-4 border-l-transparent bg-white transition-colors hover:bg-neutral-50/90"
    : "border-l-4 border-l-amber-400 bg-amber-50 transition-colors hover:bg-amber-100/90";
}

function DurumBadge({ readAt }: { readAt: string | null }) {
  const isRead = !!readAt;
  return isRead ? (
    <span className="inline-flex rounded-md border border-neutral-200 bg-white px-2.5 py-0.5 text-xs font-medium text-neutral-700 shadow-sm">
      Okundu
    </span>
  ) : (
    <span className="inline-flex rounded-md border border-amber-300/80 bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-950">
      Beklemede
    </span>
  );
}

function TalepActions({
  id,
  readAt,
  onReadConfirmed,
  onDeleted,
}: {
  id: string;
  readAt: string | null;
  onReadConfirmed: (readAtIso: string | null) => void;
  onDeleted: () => void;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token") ?? "";
  const [busy, setBusy] = useState(false);
  const isRead = !!readAt;

  async function patchRead(read: boolean) {
    if (!token) {
      alert("Oturum anahtarı (token) bulunamadı. URL’de ?token=... olmalı.");
      return;
    }
    setBusy(true);
    try {
      const res = await fetch(`/api/admin/talepler/${id}`, {
        method: "PATCH",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
          "x-admin-token": token,
        },
        body: JSON.stringify({ read }),
      });
      if (!res.ok) {
        const j = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(j.error || "İşlem başarısız");
      }
      const j = (await res.json()) as { ok?: boolean; read_at?: string | null };
      onReadConfirmed(j.read_at ?? (read ? new Date().toISOString() : null));
      router.refresh();
    } catch (e) {
      alert(e instanceof Error ? e.message : "Bir hata oluştu.");
    } finally {
      setBusy(false);
    }
  }

  async function remove() {
    if (!confirm("Bu kaydı kalıcı olarak silmek istiyor musunuz?")) return;
    if (!token) {
      alert("Oturum anahtarı (token) bulunamadı.");
      return;
    }
    setBusy(true);
    try {
      const res = await fetch(`/api/admin/talepler/${id}`, {
        method: "DELETE",
        cache: "no-store",
        headers: { "x-admin-token": token },
      });
      if (!res.ok) {
        const j = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(j.error || "Silinemedi");
      }
      onDeleted();
      router.refresh();
    } catch (e) {
      alert(e instanceof Error ? e.message : "Bir hata oluştu.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="flex flex-wrap items-center justify-end gap-2">
      {!isRead && (
        <button
          type="button"
          disabled={busy}
          onClick={() => patchRead(true)}
          className="rounded-lg bg-emerald-600 px-2.5 py-1 text-xs font-medium text-white hover:bg-emerald-700 disabled:opacity-50"
        >
          Okundu
        </button>
      )}
      <button
        type="button"
        disabled={busy}
        onClick={remove}
        className="rounded-lg border border-red-200 bg-white px-2.5 py-1 text-xs font-medium text-red-700 hover:bg-red-50 disabled:opacity-50"
      >
        Sil
      </button>
    </div>
  );
}

type Props = {
  talepler: TaleplerRow[];
};

export function AdminTaleplerTabs({ talepler: taleplerProp }: Props) {
  const [rows, setRows] = useState<TaleplerRow[]>(taleplerProp);

  /** Sunucu verisi yenilenince birleştir: refresh eski read_at getirirse yerel okundu bilgisini silme */
  useEffect(() => {
    setRows((prev) =>
      taleplerProp.map((server) => {
        const local = prev.find((p) => p.id === server.id);
        const serverRead = server.read_at ?? null;
        const localRead = local?.read_at ?? null;
        if (localRead && !serverRead) {
          return { ...server, read_at: localRead };
        }
        return server;
      })
    );
  }, [taleplerProp]);

  const [tab, setTab] = useState<"demo" | "contact">("demo");
  const demos = rows.filter((t) => t.type === "demo");
  const contacts = rows.filter((t) => t.type === "contact");
  const demosPending = demos.filter(isPending).length;
  const contactsPending = contacts.filter(isPending).length;

  const tableShell =
    "overflow-hidden rounded-2xl border border-brand-dark/15 bg-white shadow-sm";
  const theadClass = "bg-brand-dark/[0.06]";
  const thClass =
    "px-3 py-3 text-left text-xs font-semibold uppercase tracking-wider text-brand-dark/75";

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2 border-b border-brand-dark/10">
        <button
          type="button"
          onClick={() => setTab("demo")}
          className={
            tab === "demo"
              ? "-mb-px border-b-2 border-brand-accent px-4 py-3 text-sm font-semibold text-brand-accent"
              : "px-4 py-3 text-sm font-medium text-brand-dark/60 hover:text-brand-dark"
          }
        >
          Demo talepleri
          <span
            className="ml-2 inline-flex items-center gap-1.5"
            title="Bekleyen (okunmamış) demo talebi"
          >
            <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-950">
              {demosPending} bekleyen
            </span>
            <span className="text-xs font-normal text-brand-dark/45">
              ({demos.length} toplam)
            </span>
          </span>
        </button>
        <button
          type="button"
          onClick={() => setTab("contact")}
          className={
            tab === "contact"
              ? "-mb-px border-b-2 border-brand-accent px-4 py-3 text-sm font-semibold text-brand-accent"
              : "px-4 py-3 text-sm font-medium text-brand-dark/60 hover:text-brand-dark"
          }
        >
          Bize ulaşın
          <span
            className="ml-2 inline-flex items-center gap-1.5"
            title="Bekleyen (okunmamış) mesaj"
          >
            <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-950">
              {contactsPending} bekleyen
            </span>
            <span className="text-xs font-normal text-brand-dark/45">
              ({contacts.length} toplam)
            </span>
          </span>
        </button>
      </div>

      <p className="mb-3 text-sm text-brand-dark/55">
        <span className="mr-3 inline-flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-sm border border-amber-400 bg-amber-50" />
          Beklemede (sarı)
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-sm border border-neutral-200 bg-white" />
          Okundu (beyaz)
        </span>
      </p>

      {tab === "demo" && (
        <>
          {demos.length === 0 ? (
            <div className="rounded-2xl border border-brand-dark/10 bg-white p-10 text-center text-brand-dark/70">
              Henüz demo talebi yok.
            </div>
          ) : (
            <div className={tableShell}>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse text-sm">
                  <thead className={theadClass}>
                    <tr className="border-b border-brand-dark/10">
                      <th className={thClass}>Durum</th>
                      <th className={thClass}>Tarih</th>
                      <th className={thClass}>Ad Soyad</th>
                      <th className={thClass}>E-posta</th>
                      <th className={thClass}>Şirket</th>
                      <th className={thClass}>Telefon</th>
                      <th className={thClass}>Proje</th>
                      <th className={thClass}>Amaç</th>
                      <th className={`${thClass} text-right`}>İşlem</th>
                    </tr>
                  </thead>
                  <tbody>
                    {demos.map((t) => {
                      const readAt = t.read_at ?? null;
                      const isRead = !!readAt;
                      return (
                        <tr
                          key={t.id}
                          className={`border-b border-brand-dark/10 ${rowToneClass(isRead)}`}
                        >
                          <td className="whitespace-nowrap px-3 py-3 align-middle">
                            <DurumBadge readAt={readAt} />
                          </td>
                          <td className="whitespace-nowrap px-3 py-3 align-middle text-brand-dark/80">
                            {formatDate(t.created_at)}
                          </td>
                          <td className="whitespace-nowrap px-3 py-3 align-middle font-medium text-brand-dark">
                            {t.name}
                          </td>
                          <td className="whitespace-nowrap px-3 py-3 align-middle">
                            <a
                              href={`mailto:${t.email}`}
                              className="text-brand-accent hover:underline"
                            >
                              {t.email}
                            </a>
                          </td>
                          <td className="whitespace-nowrap px-3 py-3 align-middle text-brand-dark/80">
                            {t.company || "—"}
                          </td>
                          <td className="whitespace-nowrap px-3 py-3 align-middle text-brand-dark/80">
                            {t.phone || "—"}
                          </td>
                          <td className="whitespace-nowrap px-3 py-3 align-middle text-brand-dark/80">
                            {getProjectName(t.project)}
                          </td>
                          <td className="max-w-xs px-3 py-3 align-middle text-brand-dark/80">
                            <span className="line-clamp-3" title={t.purpose || ""}>
                              {t.purpose || "—"}
                            </span>
                          </td>
                          <td className="whitespace-nowrap px-3 py-3 text-right align-middle">
                            <TalepActions
                              id={t.id}
                              readAt={readAt}
                              onReadConfirmed={(iso) =>
                                setRows((prev) =>
                                  prev.map((r) =>
                                    r.id === t.id ? { ...r, read_at: iso } : r
                                  )
                                )
                              }
                              onDeleted={() =>
                                setRows((prev) => prev.filter((r) => r.id !== t.id))
                              }
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </>
      )}

      {tab === "contact" && (
        <>
          {contacts.length === 0 ? (
            <div className="rounded-2xl border border-brand-dark/10 bg-white p-10 text-center text-brand-dark/70">
              Henüz “bize ulaşın” mesajı yok.
            </div>
          ) : (
            <div className={tableShell}>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse text-sm">
                  <thead className={theadClass}>
                    <tr className="border-b border-brand-dark/10">
                      <th className={thClass}>Durum</th>
                      <th className={thClass}>Tarih</th>
                      <th className={thClass}>Ad Soyad</th>
                      <th className={thClass}>E-posta</th>
                      <th className={thClass}>Konu</th>
                      <th className={thClass}>Mesaj</th>
                      <th className={`${thClass} text-right`}>İşlem</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.map((t) => {
                      const readAt = t.read_at ?? null;
                      const isRead = !!readAt;
                      return (
                        <tr
                          key={t.id}
                          className={`border-b border-brand-dark/10 ${rowToneClass(isRead)}`}
                        >
                          <td className="whitespace-nowrap px-3 py-3 align-middle">
                            <DurumBadge readAt={readAt} />
                          </td>
                          <td className="whitespace-nowrap px-3 py-3 align-middle text-brand-dark/80">
                            {formatDate(t.created_at)}
                          </td>
                          <td className="whitespace-nowrap px-3 py-3 align-middle font-medium text-brand-dark">
                            {t.name}
                          </td>
                          <td className="whitespace-nowrap px-3 py-3 align-middle">
                            <a
                              href={`mailto:${t.email}`}
                              className="text-brand-accent hover:underline"
                            >
                              {t.email}
                            </a>
                          </td>
                          <td className="max-w-[180px] px-3 py-3 align-middle text-brand-dark/80">
                            {t.subject || "—"}
                          </td>
                          <td className="max-w-md px-3 py-3 align-middle text-brand-dark/80">
                            <span className="whitespace-pre-wrap">{t.message || "—"}</span>
                          </td>
                          <td className="whitespace-nowrap px-3 py-3 text-right align-middle">
                            <TalepActions
                              id={t.id}
                              readAt={readAt}
                              onReadConfirmed={(iso) =>
                                setRows((prev) =>
                                  prev.map((r) =>
                                    r.id === t.id ? { ...r, read_at: iso } : r
                                  )
                                )
                              }
                              onDeleted={() =>
                                setRows((prev) => prev.filter((r) => r.id !== t.id))
                              }
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
