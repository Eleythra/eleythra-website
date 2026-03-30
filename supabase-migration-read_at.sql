-- OKUNDU / BEKLEMEDE için ZORUNLU: Bu dosyayı Supabase → SQL Editor’da TEK SEFER çalıştırın.
-- (Projede read_at yoksa "Okundu" tıklanınca kayıt güncellenmez.)

alter table talepler add column if not exists read_at timestamptz;

-- Doğrulama (opsiyonel): hata vermeden satır dönmeli
-- select id, read_at from talepler limit 3;
