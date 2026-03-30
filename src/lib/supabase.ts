import { createClient, SupabaseClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

let _admin: SupabaseClient | null = null;

/** Sadece sunucu tarafında kullanın (API route, Server Component). Env yoksa null döner. */
export function getSupabaseAdmin(): SupabaseClient | null {
  if (!url || !serviceKey) return null;
  if (!_admin) {
    _admin = createClient(url, serviceKey, { auth: { persistSession: false } });
  }
  return _admin;
}

export type TaleplerRow = {
  id: string;
  type: "demo" | "contact";
  name: string;
  email: string;
  company: string | null;
  phone: string | null;
  purpose: string | null;
  project: string | null;
  subject: string | null;
  message: string | null;
  /** null/undefined = beklemede, dolu = okundu */
  read_at?: string | null;
  created_at: string;
};
