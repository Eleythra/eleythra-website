import { redirect } from "next/navigation";
import Link from "next/link";
import { getSupabaseAdmin } from "@/lib/supabase";
import type { TaleplerRow } from "@/lib/supabase";
import { PROJECTS } from "@/lib/projects";

export const metadata = {
  title: "Talepler | Yönetim",
  robots: "noindex, nofollow",
};

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

async function getTalepler(): Promise<TaleplerRow[]> {
  const supabase = getSupabaseAdmin();
  if (!supabase) return [];
  const { data, error } = await supabase
    .from("talepler")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) {
    console.error("Talepler çekme hatası:", error);
    return [];
  }
  return (data as TaleplerRow[]) ?? [];
}

export default async function AdminTaleplerPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string }>;
}) {
  const { token } = await searchParams;
  const adminToken = process.env.ADMIN_DEMO_TOKEN;

  if (!adminToken || token !== adminToken) {
    redirect("/");
  }

  const talepler = await getTalepler();

  return (
    <div className="min-h-screen bg-brand-bg px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="font-heading text-2xl font-bold text-brand-dark sm:text-3xl">
            Demo Talepleri & Bize Ulaşın
          </h1>
          <Link
            href="/"
            className="text-sm font-medium text-brand-accent hover:underline"
          >
            ← Ana Sayfa
          </Link>
        </div>

        {talepler.length === 0 ? (
          <div className="rounded-2xl border border-brand-dark/10 bg-white p-10 text-center text-brand-dark/70">
            Henüz talep yok.
          </div>
        ) : (
          <div className="overflow-hidden rounded-2xl border border-brand-dark/10 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-brand-dark/10">
                <thead className="bg-brand-dark/5">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-brand-dark/70">
                      Tarih
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-brand-dark/70">
                      Tür
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-brand-dark/70">
                      Ad Soyad
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-brand-dark/70">
                      E-posta
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-brand-dark/70">
                      Şirket
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-brand-dark/70">
                      Telefon
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-brand-dark/70">
                      Proje
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-brand-dark/70">
                      Konu
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-brand-dark/70">
                      Amaç / Mesaj
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-dark/10">
                  {talepler.map((t) => (
                    <tr key={t.id} className="hover:bg-brand-dark/[0.02]">
                      <td className="whitespace-nowrap px-4 py-3 text-sm text-brand-dark/80">
                        {formatDate(t.created_at)}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3">
                        <span
                          className={
                            t.type === "demo"
                              ? "rounded-full bg-brand-accent/15 px-2.5 py-0.5 text-xs font-medium text-brand-accent"
                              : "rounded-full bg-brand-dark/10 px-2.5 py-0.5 text-xs font-medium text-brand-dark/80"
                          }
                        >
                          {t.type === "demo" ? "Demo Talep" : "Bize Ulaşın"}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-brand-dark">
                        {t.name}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-sm">
                        <a
                          href={`mailto:${t.email}`}
                          className="text-brand-accent hover:underline"
                        >
                          {t.email}
                        </a>
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-sm text-brand-dark/80">
                        {t.type === "demo" ? (t.company || "—") : "—"}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-sm text-brand-dark/80">
                        {t.type === "demo" ? (t.phone || "—") : "—"}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-sm text-brand-dark/80">
                        {t.type === "demo"
                          ? getProjectName(t.project)
                          : "—"}
                      </td>
                      <td className="max-w-[120px] px-4 py-3 text-sm text-brand-dark/80">
                        {t.type === "contact" ? (t.subject || "—") : "—"}
                      </td>
                      <td className="max-w-xs px-4 py-3 text-sm text-brand-dark/80">
                        <span
                          className="line-clamp-2"
                          title={
                            t.type === "demo"
                              ? (t.purpose || "")
                              : (t.message || "")
                          }
                        >
                          {t.type === "demo"
                            ? (t.purpose || "—")
                            : (t.message || "—")}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
