import { Suspense } from "react";
import { redirect } from "next/navigation";
import Link from "next/link";
import { unstable_noStore as noStore } from "next/cache";
import { getSupabaseAdmin } from "@/lib/supabase";
import type { TaleplerRow } from "@/lib/supabase";
import { AdminTaleplerTabs } from "./AdminTaleplerTabs";

export const metadata = {
  title: "Talepler | Yönetim",
  robots: "noindex, nofollow",
};

/** Liste her istekte yenilensin; okundu işaretinden sonra önbellekte kalmaması için */
export const dynamic = "force-dynamic";
export const revalidate = 0;

const publicSiteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://eleythra.com";

const READ_AT_SQL = `alter table talepler add column if not exists read_at timestamptz;`;

/** Okundu özelliği için read_at sütunu var mı (canlı DB’de çoğu zaman eksik kalır) */
async function hasReadAtColumn(): Promise<boolean> {
  noStore();
  const supabase = getSupabaseAdmin();
  if (!supabase) return true;
  const { error } = await supabase.from("talepler").select("read_at").limit(1);
  return !error;
}

async function getTalepler(): Promise<TaleplerRow[]> {
  noStore();
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
    redirect(publicSiteUrl);
  }

  const [talepler, readAtOk] = await Promise.all([getTalepler(), hasReadAtColumn()]);

  return (
    <div className="min-h-screen bg-brand-bg px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {!readAtOk && (
          <div
            className="mb-6 rounded-xl border border-amber-400/80 bg-amber-50 px-4 py-4 text-sm text-amber-950 shadow-sm"
            role="alert"
          >
            <p className="font-semibold">Supabase: “Okundu” çalışmıyor — veritabanında `read_at` sütunu yok.</p>
            <p className="mt-2 text-amber-950/90">
              Supabase Dashboard → <strong>SQL Editor</strong> → aşağıdaki komutu yapıştırıp{" "}
              <strong>Run</strong> deyin. Ardından bu sayfayı yenileyin.
            </p>
            <pre className="mt-3 overflow-x-auto rounded-lg border border-amber-200/80 bg-white p-3 font-mono text-xs text-brand-dark">
              {READ_AT_SQL}
            </pre>
            <p className="mt-2 text-xs text-amber-900/80">
              Dosya: <code className="rounded bg-white/80 px-1">supabase-migration-read_at.sql</code>
            </p>
          </div>
        )}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h1 className="font-heading text-2xl font-bold text-brand-dark sm:text-3xl">
            Talepler
          </h1>
          <Link
            href={publicSiteUrl}
            className="text-sm font-medium text-brand-accent hover:underline"
          >
            ← Ana site
          </Link>
        </div>

        {talepler.length === 0 ? (
          <div className="rounded-2xl border border-brand-dark/10 bg-white p-10 text-center text-brand-dark/70">
            Henüz talep yok.
          </div>
        ) : (
          <Suspense
            fallback={
              <div className="rounded-2xl border border-brand-dark/10 bg-white p-10 text-center text-brand-dark/70">
                Yükleniyor…
              </div>
            }
          >
            <AdminTaleplerTabs talepler={talepler} />
          </Suspense>
        )}
      </div>
    </div>
  );
}
