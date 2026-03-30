-- Supabase Dashboard → SQL Editor'da bu sorguyu çalıştırın.
-- Tek tabloda hem "Demo Talep" hem "Bize Ulaşın" kayıtları tutulur.

create table if not exists talepler (
  id uuid primary key default gen_random_uuid(),
  type text not null check (type in ('demo', 'contact')),
  name text not null,
  email text not null,
  company text,
  phone text,
  purpose text,
  project text,
  subject text,
  message text,
  read_at timestamptz,
  created_at timestamptz default now()
);

-- Mevcut projeler: sütun yoksa ekler (Supabase SQL Editor’da bir kez çalıştırın)
alter table talepler add column if not exists read_at timestamptz;

-- Sadece sunucu (service_role) erişsin; tarayıcıdan doğrudan okuma/yazma kapalı
alter table talepler enable row level security;

-- Anon/authenticated hiçbir şey yapamasın (API route service_role ile yazacak)
drop policy if exists "Sadece service role" on talepler;

create policy "Sadece service role"
  on talepler for all
  using (false)
  with check (false);

-- İsteğe bağlı: created_at için indeks (liste tarihe göre sıralı olsun)
create index if not exists talepler_created_at_idx on talepler (created_at desc);
