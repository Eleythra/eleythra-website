# Eleythra Derin Teknoloji – Web Sitesi

Next.js ile geliştirilmiş kurumsal web sitesi. Demo talep ve iletişim formları Supabase’e bağlıdır.

## Gereksinimler

- Node.js 20+
- npm veya yarn

## Yerel çalıştırma

```bash
npm install
cp .env.example .env.local
# .env.local içine Supabase ve ADMIN_DEMO_TOKEN değerlerini yazın
npm run dev
```

Tarayıcıda [http://localhost:3000](http://localhost:3000) açın.

## Deploy (Vercel)

1. [vercel.com](https://vercel.com) → **Add New** → **Project**.
2. GitHub’dan repoyu import edin.
3. **Environment Variables** ekleyin (Production için):
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `ADMIN_DEMO_TOKEN`
   - `NEXT_PUBLIC_SITE_URL` (örn. `https://eleythra.com`)
   - `ADMIN_HOST` — yalnızca canlıda alt alan adı kullanacaksanız (örn. `admin.eleythra.com`). İsterseniz bu değişkeni **sadece Production** ortamına ekleyin; böylece Preview URL’lerinde panel `…vercel.app/admin/...?token=...` ile test edilebilir.
4. **Deploy** ile yayına alın.

### Admin panelini alt alan adına bağlama (örn. admin.eleythra.com)

1. Vercel’de proje → **Settings** → **Domains** → **Add** ile `admin.eleythra.com` ekleyin (ana site `eleythra.com` zaten aynı projede olabilir).
2. Vercel size DNS için bir **CNAME** hedefi gösterir (çoğu zaman `cname.vercel-dns.com` veya proje özel değeri). Domain sağlayıcınızda (Cloudflare, Natro vb.) **subdomain `admin`** için bu CNAME kaydını oluşturun.
3. Vercel **Environment Variables** → **Production** → `ADMIN_HOST` = `admin.eleythra.com` (başında `https://` yok, küçük harf).
4. Yeni deploy sonrası panel: `https://admin.eleythra.com/?token=…`  
   Ana siteden `https://eleythra.com/admin/...` açılırsa tarayıcı otomatik olarak `admin` alt alan adına yönlendirilir (middleware).

## Admin sayfası

**Önerilen alt alan adı:** `admin.eleythra.com`.

`ADMIN_HOST=admin.eleythra.com` ayarlıyken panel adresi:

```
https://admin.eleythra.com/?token=ADMIN_DEMO_TOKEN
```

Yerelde `ADMIN_HOST` boş bırakıldığında:

```
http://localhost:3000/admin/demo-talepleri?token=ADMIN_DEMO_TOKEN
```

### Okundu çalışmıyorsa (Supabase)

Panelde “Okundu” tıklanınca durum değişmiyorsa büyük olasılıkla **`read_at` sütunu** projede yoktur. Supabase → **SQL Editor**’da bir kez çalıştırın (repoda `supabase-migration-read_at.sql`):

```sql
alter table talepler add column if not exists read_at timestamptz;
```

## Teknolojiler

- Next.js 16, React 19, TypeScript
- Tailwind CSS, Framer Motion
- Supabase (form kayıtları)
