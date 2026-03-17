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
2. GitHub’dan **Eleythra/eleythra-website** repoyu import edin.
3. **Environment Variables** ekleyin:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `ADMIN_DEMO_TOKEN`
4. **Deploy** ile yayına alın.

Kendi domain’inizi bağlamak için: Project → **Settings** → **Domains**.

## Admin sayfası

Talepleri görüntülemek için (canlı veya local):

```
https://SITENIZIN-ADRESI/admin/demo-talepleri?token=ADMIN_DEMO_TOKEN
```

## Teknolojiler

- Next.js 16, React 19, TypeScript
- Tailwind CSS, Framer Motion
- Supabase (form kayıtları)
