# Siteyi Netlify ile Canlıya Alma – Adım Adım Rehber

Bu rehberde üç şeyi yapacaksınız:

1. **Projeyi GitHub’a push etmek**
2. **Netlify’da canlıya almak** (web sitesi yayında olsun)
3. **Kendi domain’inizi bağlamak** (örn. eleythra.com)
4. **Canlı sitede demo taleplerine bakmak** (admin sayfası)

---

# BÖLÜM 1: GitHub’a Push Etmek

Proje şu an sadece sizin bilgisayarınızda. Netlify’ın projeyi alabilmesi için önce GitHub’a yüklemeniz gerekir.

## 1.1 Git kurulu mu?

Terminal (veya VS Code / Cursor içindeki Terminal) açın ve yazın:

```bash
git --version
```

`git version 2.x.x` gibi bir çıktı görürseniz kuruludur. “Komut bulunamadı” derse [git-scm.com](https://git-scm.com) adresinden Git’i indirip kurun.

## 1.2 GitHub hesabı

- [github.com](https://github.com) → **Sign up** ile ücretsiz hesap açın (yoksa).
- Giriş yapın.

## 1.3 Proje klasöründe Git’i başlatma

Terminalde **projenizin kök klasörüne** gidin (içinde `package.json` ve `src` olan klasör). Örnek:

```bash
cd /home/eleythra-derin-teknoloji/Masaüstü/eleythra-website
```

Sonra sırayla:

```bash
# Bu klasörü Git deposu yap
git init

# Tüm dosyaları “ekle” (staging)
git add .

# İlk commit
git commit -m "İlk commit: Eleythra web sitesi"
```

`.env.local` ve `node_modules` zaten `.gitignore` içinde olduğu için Git’e **eklenmez** (güvenli).

## 1.4 GitHub’da yeni depo (repository) oluşturma

1. [github.com](https://github.com) → sağ üst **+** → **New repository**.
2. **Repository name:** Örn. `eleythra-website` (küçük harf, tire kullanın).
3. **Public** seçin.
4. **“Add a README file”** vb. işaretlemeyin; depo boş kalsın.
5. **Create repository**’e tıklayın.

Açılan sayfada şuna benzer komutlar görürsünüz (repo adınız farklı olabilir):

```text
…or push an existing repository from the command line
git remote add origin https://github.com/KULLANICI_ADINIZ/eleythra-website.git
git branch -M main
git push -u origin main
```

## 1.5 Projeyi GitHub’a gönderme (push)

Terminalde **yine proje klasöründe** şunları çalıştırın. `KULLANICI_ADINIZ` ve `eleythra-website` kısımlarını kendi GitHub kullanıcı adınız ve repo adınızla değiştirin:

```bash
# GitHub’daki depoyu “origin” adıyla ekle
git remote add origin https://github.com/KULLANICI_ADINIZ/eleythra-website.git

# Ana dalı main yap
git branch -M main

# GitHub’a gönder
git push -u origin main
```

Şifre/erişim istenirse:

- **Şifre:** GitHub artık hesap şifresi kabul etmiyor. **Personal Access Token** kullanmanız gerekir.
- GitHub → **Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)** → **Generate new token**. “repo” yetkisini işaretleyin, token’ı kopyalayın.
- `git push` istediğinde **Username:** GitHub kullanıcı adınız, **Password:** bu token’ı yapıştırın.

Push başarılı olunca GitHub’da depo sayfasında tüm dosyalarınızı görürsünüz.

---

# BÖLÜM 2: Netlify’da Canlıya Almak

## 2.1 Netlify hesabı ve giriş

1. [netlify.com](https://netlify.com) → **Sign up** / **Log in**.
2. **Sign up with GitHub** ile giriş yapın (önerilir; repo’ya otomatik bağlanır).

## 2.2 Yeni site – GitHub’dan import

1. Netlify panelinde **Add new site** → **Import an existing project**.
2. **Deploy with GitHub** (veya **Connect to Git provider** → **GitHub**) seçin.
3. GitHub yetkisi istenirse **Authorize Netlify** deyin; gerekirse GitHub şifrenizi veya token’ı girin.
4. **Repository** listesinden **eleythra-website** (veya verdiğiniz repo adını) seçin.

## 2.3 Build ayarları

Netlify bir sonraki ekranda **Build settings** sorar. Şöyle bırakın veya kontrol edin:

| Ayar | Değer |
|------|--------|
| **Branch to deploy** | `main` |
| **Build command** | `npm run build` |
| **Publish directory** | *(Boş bırakın veya Netlify’ın önerdiği değer; Next.js için Netlify genelde otomatik ayarlar.)* |

Projede `netlify.toml` dosyası var; Netlify bunu okuyacak. Ekstra bir şey yazmanız gerekmez.

## 2.4 Ortam değişkenleri (çok önemli)

Aynı ekranda **Environment variables** / **Advanced build settings** → **New variable** veya **Add environment variables** bölümüne gidin. Şu üç değişkeni **tek tek** ekleyin:

| Key | Value | Scopes |
|-----|--------|--------|
| `NEXT_PUBLIC_SUPABASE_URL` | `https://slgaengkpgaqgazylmjd.supabase.co` | All (veya Production) |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase’ten kopyaladığınız **service_role** anahtarı (eyJ… ile başlayan) | All (veya Production) |
| `ADMIN_DEMO_TOKEN` | Örn. `eleythra2025gizli` (localhost’takiyle aynı veya yeni bir şifre) | All (veya Production) |

- **NEXT_PUBLIC_SUPABASE_URL:** Sabit; yukarıdaki gibi yapıştırın.
- **SUPABASE_SERVICE_ROLE_KEY:** Supabase → Project Settings → API → **service_role** → Reveal → kopyala.
- **ADMIN_DEMO_TOKEN:** İleride canlı sitede admin sayfasına girmek için kullanacağınız şifre.

Kaydedin.

## 2.5 Deploy’u başlatma

**Deploy site** / **Deploy eleythra-website** benzeri butona tıklayın. Netlify:

- GitHub’dan kodu çeker
- `npm run build` çalıştırır
- Siteyi yayınlar

Build 2–5 dakika sürebilir. **Site is live** veya **Published** görünce canlıya almış olursunuz.

## 2.6 Canlı adres

Netlify size rastgele bir adres verir:

- Örnek: `https://rastgele-isim-12345.netlify.app`

Bu adres **web sitenizin canlı hali**dir. Buradan:

- Ana sayfayı,
- İletişim formunu,
- Demo talep formunu

test edebilirsiniz. Formlar Supabase’e yazmaya devam eder (env değişkenlerini eklediyseniz).

---

# BÖLÜM 3: Kendi Domain’inizi Bağlama

Sitenin `eleythra.com` veya `www.eleythra.com` gibi kendi adresinizle açılmasını istiyorsanız:

## 3.1 Domain’i nereden aldınız?

Domain’i bir **alan adı sağlayıcısından** (GoDaddy, Namecheap, GetDomain, Turhost, vs.) aldıysanız orada yönetirsiniz. Netlify’da sadece “bu domain bu siteye gitsin” diyeceksiniz.

## 3.2 Netlify’da domain ekleme

1. Netlify’da sitenize tıklayın (Site overview).
2. **Domain management** / **Domain settings** veya **Set up a custom domain** bölümüne girin.
3. **Add custom domain** / **Add a domain** deyin.
4. Sahibi olduğunuz domain’i yazın (örn. `eleythra.com`) → **Verify** / **Add**.
5. Netlify size iki seçenek sunar:
   - **Netlify DNS:** Domain’in DNS’ini Netlify’a taşımak (en kolay).
   - **External DNS:** Domain’i başka yerde tutup sadece kayıt eklemek.

## 3.3 Seçenek A: Netlify DNS (önerilen)

1. Netlify, domain sağlayıcınızda **Nameserver (NS)** değiştirmenizi ister.
2. Örnek:
   - `dns1.p01.nsone.net`
   - `dns2.p01.nsone.net`
   - (Netlify’da yazdığı tam listeyi kullanın.)
3. Domain sağlayıcınıza gidin (GoDaddy, Namecheap vb.) → Domain’i seçin → **DNS / Nameservers** → **Change** → Netlify’ın verdiği NS’leri yapıştırın → Kaydedin.
4. Yayılması  birkaç saat (bazen 24 saate kadar) sürebilir. Sonra `eleythra.com` ve `www.eleythra.com` Netlify sitenize gider.

## 3.4 Seçenek B: Domain başka yerde kalacak (External DNS)

Domain’in DNS’ini değiştirmek istemiyorsanız:

1. Netlify **Domain settings**’te domain’i ekledikten sonra **DNS configuration** veya **Set up external DNS** deyin.
2. Netlify size bir **A** veya **CNAME** kaydı gösterir. Örnek:
   - **A:** `75.2.60.5` (Netlify’ın IP’si; Netlify’da yazan güncel değeri kullanın.)
   - **CNAME (www):** `rastgele-isim-12345.netlify.app`
3. Domain sağlayıcınızda DNS sayfasına gidin; bu A veya CNAME kaydını ekleyin.
4. Kök domain için (`eleythra.com`) genelde A veya ALIAS/ANAME; `www` için CNAME kullanılır. Netlify’daki talimatları takip edin.

## 3.5 HTTPS (kilit)

Domain bağlandıktan sonra Netlify otomatik **Let’s Encrypt** sertifikası alır. Bir süre bekleyin; adres çubuğunda kilit ikonu çıkar. Ekstra bir şey yapmanız gerekmez.

---

# BÖLÜM 4: Canlı Sitede Demo Taleplerine Bakma

Formlar canlı sitede de Supabase’e yazar. Siz bu kayıtları **admin sayfası**ndan görürsünüz.

## 4.1 Admin sayfası adresi

Canlı sitede admin sayfası şu formattadır:

```text
https://SITENIZIN-ADRESI/admin/demo-talepleri?token=ADMIN_DEMO_TOKEN
```

Örnekler:

- Netlify adresi kullanıyorsanız:  
  `https://rastgele-isim-12345.netlify.app/admin/demo-talepleri?token=eleythra2025gizli`
- Kendi domain’iniz varsa:  
  `https://eleythra.com/admin/demo-talepleri?token=eleythra2025gizli`

`ADMIN_DEMO_TOKEN` kısmına Netlify’da tanımladığınız değeri (örn. `eleythra2025gizli`) yazın.

## 4.2 Sayfada ne görürsünüz?

- **Demo Talep** ve **Bize Ulaşın** formlarından gelen tüm kayıtlar tek tabloda listelenir.
- Tarih, tür (Demo / Bize Ulaşın), ad soyad, e-posta, şirket, telefon, proje, konu, amaç/mesaj sütunları vardır.
- E-posta sütununa tıklayarak mail istemcinizi açabilirsiniz.

Bu sayfayı **sadece siz** token ile açarsınız; token’ı kimseyle paylaşmayın.

---

# Özet Kontrol Listesi

| Adım | Yapıldı mı? |
|------|-------------|
| Git kurulu, `git init` + `git add .` + `git commit` | ☐ |
| GitHub’da repo oluşturuldu, `git remote` + `git push` | ☐ |
| Netlify’da “Import from GitHub” ile site oluşturuldu | ☐ |
| Netlify’da 3 env değişkeni eklendi (Supabase URL, service_role, ADMIN_DEMO_TOKEN) | ☐ |
| Deploy başarılı, “Site is live” | ☐ |
| İsteğe bağlı: Kendi domain Netlify’a eklendi, DNS ayarlandı | ☐ |
| Admin: `https://SITENIZ/admin/demo-talepleri?token=ŞİFRENİZ` ile talepleri görüntüleme | ☐ |

---

# Sık Karşılaşılan Sorunlar

- **Build failed:** Netlify’da **Build log**’a bakın. Eksik paket ise `npm run build` local’de çalışıyor mu kontrol edin. Node sürümü için `netlify.toml` içinde `NODE_VERSION = "20"` var.
- **Form gönderilince hata:** Netlify’da **Site settings** → **Environment variables**’ta üç değişkenin de tanımlı ve doğru olduğundan emin olun. Değişiklikten sonra **Trigger deploy** → **Deploy site** ile yeniden deploy edin.
- **Admin sayfası boş veya ana sayfaya atıyor:** URL’deki `?token=...` kısmı, Netlify’daki `ADMIN_DEMO_TOKEN` ile **birebir aynı** olmalı (boşluk, fazla karakter yok).

Bu rehber Netlify ile canlıya alma, kendi domain’i bağlama ve demo taleplerini görme adımlarını kapsar. Takıldığınız yeri (örn. “GitHub’da repo nasıl açılır”, “Netlify’da env nereye yazılır”) yazarsanız o adımı daha da detaylandırabilirim.
