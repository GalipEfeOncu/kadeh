# Kadeh - Proje Dokümantasyonu

## 📌 Proje Bilgileri

* **İsim:** Kadeh
* **Tip:** Statik içerik sitesi (Backend yok, Database yok)
* **Amaç:** Türkçe alkol rehberi — her içki türü için lore, özellikler, nasıl içilir, karışımlar, yiyecek eşleşmesi, doz bilgisi.
* **Hedef Kitle:** Türk kullanıcılar, alkol kültürüne yeni başlayanlar ve merak edenler.

## 🛠️ Stack

* **Framework:** React (Vite)
* **Styling:** Tailwind CSS
* **İçerik:** Statik JSON / JS obje array (`src/data/`)
* **Deploy:** Vercel veya Netlify (GitHub push = otomatik deploy)
* **Domain:** Ücretsiz subdomain (`kadeh.vercel.app` ya da `kadeh.netlify.app`)
* **Lisans:** MIT

## 📁 Dosya Yapısı

Mantıklı bir Vite + React proje yapısı aşağıda gösterilmiştir:

```text
kadeh/
├── public/
│   ├── favicon.ico
│   └── images/              # Statik görseller (şişe, kadeh vb.)
├── src/
│   ├── components/          # Tekrar kullanılabilir, tek sorumlu UI bileşenleri
│   │   ├── DrinkCard.jsx
│   │   ├── FilterBar.jsx
│   │   └── Layout.jsx
│   ├── data/                # İçerik datası (Veritabanı görevi görür)
│   │   ├── spirits.js
│   │   ├── wines.js
│   │   ├── beers.js
│   │   └── schema.js        # Data tipleri / belgelendirme
│   ├── pages/               # Sayfa görünümleri
│   │   ├── Home.jsx         # Ana sayfa (Liste ve filtre)
│   │   ├── DrinkDetail.jsx  # İçki detay sayfası
│   │   └── Recommend.jsx    # "Ne içeyim?" interaktif akışı
│   ├── styles/
│   │   └── index.css        # Tailwind direktifleri ve global stiller
│   ├── App.jsx              # Router yapılandırması
│   └── main.jsx             # React entry point
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── PROJECT.md               # Proje belgesi (Bu dosya)
```

## 🗂️ İçerik Şeması (Data Modeli)

Her içki nesnesi aşağıdaki alanları içerecek şekilde tasarlanmalıdır. Kısa özet alanları listelerde ve kartlarda gösterilirken, detaylı alanlar ürünün kendi sayfasında sunulur.

### 1. Kimlik
* `id`: Eşsiz tanımlayıcı (Örn: `whiskey-scotch`)
* `name`: Görünür isim
* `emoji`: Listelerde görsel destek için (Örn: 🥃)
* `tag`: Filtreleme etiketleri
* `color`: UI için marka/içki baskın rengi (Örn: `#c68e17`)
* `aliases`: Diğer bilinen isimleri / eşanlamlıları
* `origin`: Ülke / bölge / şehir
* `category`: Ana kategori (`spirits` | `wine` | `beer` | `liqueur`)

### 2. Lore
* `lore_short`: 2-3 cümlelik özet. Kart görünümü için ideal.
* `lore_full`: Uzun form, bölümlü makale. Kelime sınırı yok, doyurucu olmalı. İçerebileceği alt başlıklar:
  * **Tarihsel köken:** İlk üretim, kim buldu, hangi kültür.
  * **Yayılma hikayesi:** Dünyaya nasıl yayıldı.
  * **Kültürel önemi:** Ritüeller, törenler, edebi yerleri.
  * **Modern dönem:** Craft hareketi, endüstriyel dönüşüm.
  * **Türkiye ile ilişkisi:** Varsa lokal tarihçe.

### 3. Üretim
* `hammadde`: Temel üretim maddesi (Örn: Arpa, Üzüm, Agav).
* `uretim_sureci`: Fermentasyon, damıtma, vb. adım adım açıklama.
* `dinlendirme`: Fıçı tipi, süre ve lezzete etkisi.
* `stiller`: Farklı stiller / alt tipler (Örn. Scotch için: Single Malt, Blended, Grain).
* `bolgeler`: Önemli üretim bölgeleri ve bölgesel karakterler.

### 4. Tadım Profili
* `renk`: Görsel tanım.
* `koku`: Aroma notaları (ön, orta, arka koku profili).
* `tat`: Damakta bıraktığı his ve lezzetler.
* `finish`: Yutkunma sonrası his, bitişin uzunluğu.
* `vucut`: Gövde yapısı (`Light` | `Medium` | `Full body`).

### 5. Nasıl İçilir
* `rakon`: İçim raconu (`sek` | `mix` | `ikisi de`).
* `sek_detay`:
  * Kadeh tipi, ideal sıcaklık, miktar.
  * Hazırlık ritüeli ve içilirken dikkat edilmesi gerekenler.
* `mix_detay`: En iyi 5 karışım tarifi. Her tarif için:
  * İsim, malzeme listesi (ölçülü), hazırlanış adımları.
  * Neden işe yarıyor? (Flavor logic - lezzet uyumu).
  * Hangi ortam/vakit için uygun?

### 6. Eşleşmeler
* `yiyecek`: Uyumlu yiyecekler ve eşleşmenin "neden" başarılı olduğu açıklaması.
* `muzik_his`: Hangi his / ortama uyuyor (Örn: "Yağmurlu gece, jazz", "Yaz akşamüstü kumsal").
* `mevsim`: En çok hangi mevsime yakışır.

### 7. Doz & Etki
* `abv_range`: Minimum - maksimum alkol oranı (% ABV).
* `standart_porsiyon`: 1 kadeh/bardak ölçüsü (ml).
* `kafa_dozu`: Ortalama 70kg bir birey için:
  * Hafif etki (Çakırkeyif)
  * İdeal bölge
  * Limit üstü
  * Ertesi gün riski (Hangover şiddeti: 1-5 arası puanlama)
* `etki_hizi`: Vücutta ne kadar sürede hissedilmeye başlar.
* `metabolizma`: Vücuttan atılma/kalma süresi.

### 8. Satın Alma Rehberi
* `baslangic_onerileri`: Türkiye'de bulunabilen, yeni başlayanlara uygun markalar.
* `orta_seviye`: Biraz daha deneyimliler için markalar.
* `premium`: Para kısıtı olmayanlar için koleksiyonluk/üst düzey markalar.
* `fiyat_araligi`: Türkiye piyasasında ortalama fiyat skalası (₺).
* `nereden_alinir`: Migros, CarrefourSA, Macrocenter, özel tekel veya şarapçılar vb. bulunabilirlik durumu.

### 9. Kültür & Trivia
* `pop_kultur`: Film, dizi, kitap veya şarkı referansları.
* `unlu_icenler`: Tarihi figürler ve ünlü kişilerin favorileri.
* `rekorlar`: İlginç istatistikler ve rekorlar.
* `yanlis_bilinenler`: Yaygın mitler ve aslında doğruları.
* `sozler`: O içkiyle ilgili tarihe geçmiş ünlü sözler ve alıntılar.

## 🧭 Planlanan Sayfalar ve Özellikler

* **Ana Sayfa:** Tüm içkilerin listesi ve gelişmiş etiket (tag) filtresi.
* **İçki Detay Sayfası:** İçki hakkında tüm bilgilerin düzenli bir Tab (sekme) yapısında sunulması.
* **"Ne İçeyim?" Sayfası:** Kullanıcıya birkaç basit soru sorarak interaktif bir akışla içki önerme.
* **Arama:** Client-side çalışan, basit string matching bazlı anında arama.
* **Mobil Uyumluluk:** Responsive tasarım, özellikle mobilde kusursuz, app benzeri deneyim.

## ⚖️ Kurallar / Kararlar

* **Dil:** Tüm içerik ve kullanıcı arayüzü Türkçe olacaktır. Kod içi yorum satırları Türkçe olabilir.
* **Tasarım Dili:** Koyu (Dark) tema ağırlıklı, premium, "editorial/dergi" hissiyatı veren şık bir estetik.
* **Context Önceliği:** Projede görev alacak her yeni AI agent bu dosyayı okuyarak projeye başlar. Context sağlamak bu dosyanın birinci görevidir.
* **Modülerlik:** Component'lar küçük ve Tek Sorumluluk Prensibi'ne (Single Responsibility) uygun tasarlanacaktır.
* **İzole Mimari:** İçerik verisi (`src/data/`) ile UI katmanı birbirinden tamamen ayrı tutulacaktır.

---

## 🚀 Katkı / Geliştirme Notları

*Bu bölüm, ileride projeye eklenebilecek yeni özellikleri ve fikirleri takip etmek içindir.*

* **Evdeki Malzemelerle Kokteyl:** Kullanıcının elindeki içkileri/malzemeleri seçip, yapabileceği kokteylleri listelemesi.
* **Favoriler:** LocalStorage kullanılarak kullanıcıların beğendikleri içkileri kaydetmesi.
* **Sosyal Paylaşım:** İçki detaylarının havalı bir görsel (Open Graph) eşliğinde kolayca paylaşılabilmesi.
* **Sesli Telaffuz:** Yabancı içki isimlerinin doğru okunuşlarını dinleyebilmek için ufak bir ses ikonu eklenmesi.
* **Yaş Doğrulama Modülü:** Siteye girişte legal yükümlülükler adına +18 yaş doğrulama popup'ı (Cookie tabanlı).
