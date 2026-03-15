# Supabase Kurulum Rehberi (Adım Adım)

Bu rehber, web sitenizin "Demo Talep Et" ve "Bize Ulaşın" formlarını Supabase veritabanına bağlamak için gereken tüm adımları anlatır.

---

## 1. Supabase hesabı ve proje

- Zaten bir proje oluşturduysanız (URL: `https://slgaengkpgaqgazylmjd.supabase.co`) bu adımı atlayın.
- Henüz oluşturmadıysanız: [supabase.com](https://supabase.com) → **Start your project** → Giriş yapın → **New project** → İsim ve şifre verin → **Create new project**.

---

## 2. Veritabanı tablosunu oluşturma

Formlardan gelen kayıtların yazılacağı tabloyu oluşturacağız.

1. Supabase’te projenize girin.
2. Sol menüden **SQL Editor**’ı açın.
3. **New query**’e tıklayın.
4. Bu projedeki **`supabase-talepler.sql`** dosyasının içeriğini kopyalayıp büyük metin kutusuna yapıştırın.
5. Sağ alttaki **Run** (veya Ctrl+Enter) ile çalıştırın.
6. “Success. No rows returned” benzeri bir mesaj görürseniz tablo oluşmuştur.
7. Sol menüden **Table Editor**’a girin; **talepler** adında bir tablo görmelisiniz (şu an boş).

---

## 3. API anahtarlarını bulma

Sitede iki tür anahtar kullanıyoruz:

- **Project URL** → Tarayıcıdan erişim adresi (zaten veriyorsunuz).
- **service_role key** → Sunucu tarafında formları kaydetmek ve admin sayfasında listelemek için **gizli** anahtar. Bunu **asla** tarayıcıda veya public kodda göstermeyin.

Yapmanız gerekenler:

1. Supabase’te projenizdeyken sol menüden **Project Settings** (dişli ikonu) açın.
2. **API** sekmesine tıklayın.
3. Şunları not alın:
   - **Project URL**  
     Örnek: `https://slgaengkpgaqgazylmjd.supabase.co`  
     Bunu zaten biliyorsunuz.
   - **Project API keys** bölümünde:
     - **anon / public** → Sitede halka açık işler için (şu an kullanmıyoruz).
     - **service_role** → **Reveal** / **Göster** deyip kopyalayın. Uzun, `eyJ...` ile başlayan bir metindir.  
       Bu anahtarı sadece `.env.local` içinde kullanacağız; kimseyle paylaşmayın.

---

## 4. .env.local dosyasını oluşturma

Projenizin **kök klasöründe** (package.json’ın olduğu yerde) `.env.local` adında bir dosya oluşturun. Bu dosya git’e **commit edilmez** (güvenlik için).

Dosya içeriği (değerleri kendinize göre doldurun):

```env
# Supabase - Project URL (API ayarlarından)
NEXT_PUBLIC_SUPABASE_URL=https://slgaengkpgaqgazylmjd.supabase.co

# Supabase - service_role anahtarı (API → Project API keys → service_role → Reveal → kopyala)
SUPABASE_SERVICE_ROLE_KEY=buraya_service_role_anahtarini_yapistirin

# Admin sayfası için gizli token (kendiniz belirleyin, örn: eleythra2025gizli)
ADMIN_DEMO_TOKEN=buraya_gizli_bir_sifre_yazin
```

Önemli:

- **SUPABASE_SERVICE_ROLE_KEY**: Supabase → Project Settings → API → **service_role** → Reveal → kopyaladığınız tam anahtar (`eyJ...` ile başlar).
- **ADMIN_DEMO_TOKEN**: İleride talepleri göreceğiniz sayfayı açmak için kullanacağınız şifre (örn. `eleythra2025gizli`). Bu token’ı sadece siz bilin.

**Doğrudan bağlantı dizesi** (postgresql://postgres:...) ve **Yayınlanabilir anahtar** bu proje için gerekli değil; sadece **Project URL** ve **service_role** yeterli.

---

## 5. Projeyi çalıştırıp test etme

1. Terminalde proje klasöründe:
   ```bash
   npm run dev
   ```
2. Tarayıcıda:
   - Ana sayfada aşağı kaydırın → **Demo Talep Et** formunu doldurup gönderin.
   - **İletişim** sayfasına gidin → **Bize Ulaşın** formunu doldurup gönderin.
3. Supabase’te **Table Editor** → **talepler** tablosunu açın; yeni satırlar görünmeli.
4. Admin sayfasını açın:
   ```
   http://localhost:3000/admin/demo-talepleri?token=ADMIN_DEMO_TOKEN_olarak_yazdiginiz_sifre
   ```
   Burada hem “Demo Talep” hem “Bize Ulaşın” kayıtlarını tek tabloda görmelisiniz.

---

## 6. Özet: Hangi bilgi nerede?

| Ne | Nerede kullanılıyor |
|----|----------------------|
| **Project URL** | `.env.local` → `NEXT_PUBLIC_SUPABASE_URL` |
| **service_role key** | `.env.local` → `SUPABASE_SERVICE_ROLE_KEY` |
| **ADMIN_DEMO_TOKEN** | Siz belirliyorsunuz; admin sayfası için `?token=...` |
| Doğrudan bağlantı dizesi (PostgreSQL) | Bu Next.js projesinde **kullanmıyorsunuz** |
| Yayınlanabilir (anon) anahtar | Bu projede **kullanmıyorsunuz** (sadece service_role kullanılıyor) |

Takıldığınız bir adım olursa, hangi adımda ve ne gördüğünüzü yazarsanız oradan devam edebiliriz.
