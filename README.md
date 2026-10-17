# Habibe Çınar — Portfolyo

Next.js + Tailwind CSS ile geliştirilmiş, iki dilli (TR/EN) kişisel portfolyo sitesi.

## Çalıştırma

```bash
npm install
npm run dev      # http://localhost:3000
```

## İçeriği düzenleme

Tüm metinler, yetenekler ve projeler tek dosyada: **`src/lib/content.js`**

- **Yeni proje:** `projects` dizisine bir nesne ekle, açıklamasını `dict.tr.projects.items` ve `dict.en.projects.items` içine aynı `id` ile yaz.
- **Ekran görüntüsü:** Görseli `public/projects/` klasörüne koy (ör. `kaeya.jpg`) ve projede `image: "/projects/kaeya.jpg"` yaz. Görsel yoksa renkli bir kapak gösterilir.

## İletişim formu (Formspree, ücretsiz)

1. https://formspree.io adresinde hesap aç → **New Form** oluştur.
2. Verilen adresteki ID'yi kopyala (`https://formspree.io/f/xyzabcd` → `xyzabcd`).
3. Proje kökünde `.env.local` dosyası oluştur:
   ```
   NEXT_PUBLIC_FORMSPREE_ID=xyzabcd
   ```
4. Vercel'de de aynı değişkeni **Settings → Environment Variables** altına ekle.

ID tanımlı değilse form, ziyaretçinin e-posta uygulamasını açar.

## Yayınlama (Vercel)

1. Projeyi GitHub'a yükle (ör. `habibecinar/portfolio`).
2. https://vercel.com → GitHub ile giriş → **Add New Project** → repoyu seç → **Deploy**.
3. Birkaç dakika içinde `xxx.vercel.app` adresinde yayında olur. İstersen sonra kendi alan adını bağlayabilirsin.
