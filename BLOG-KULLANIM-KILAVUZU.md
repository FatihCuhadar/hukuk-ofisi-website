# Blog Sayfaları Kullanım Kılavuzu

Bu dokümantasyon, blog.html ve blog-detail.html sayfalarının nasıl kullanılacağını açıklar.

---

## 📋 Genel Bakış

Statik HTML/CSS tabanlı, modern ve profesyonel bir hukuk ofisi blog sistemi oluşturulmuştur. Framework veya build tool kullanılmadan, saf HTML/CSS ile geliştirilmiştir.

### Dosya Yapısı
```
avukat/
├── blog.html              # Blog liste sayfası
├── blog-detail.html       # Blog detay template'i
├── style.css              # Tüm stil dosyası (blog stilleri dahil)
├── script.js              # JavaScript dosyası
└── BLOG-KULLANIM-KILAVUZU.md  # Bu dosya
```

---

## 🎨 Tasarım Özellikleri

### Blog Liste Sayfası (blog.html)
- ✅ 3 sütunlu grid düzeni (desktop)
- ✅ 2 sütunlu düzen (tablet)
- ✅ 1 sütunlu düzen (mobil)
- ✅ Tutarlı card tasarımı
- ✅ Kategori etiketleri (styled tags)
- ✅ Meta bilgileri (tarih, yazar)
- ✅ 3 satırla sınırlı özet metni
- ✅ "Devamını Oku" butonu
- ✅ Modern sayfalama (pagination)
- ✅ Call-to-action bölümü

### Blog Detay Sayfası (blog-detail.html)
- ✅ İki kolonlu düzen (içerik + sidebar)
- ✅ Kategori etiketi
- ✅ Başlık (H1)
- ✅ Meta bilgileri (tarih, yazar, okuma süresi)
- ✅ Featured image (öne çıkan görsel)
- ✅ Zengin içerik formatlaması (H2, H3, liste, blockquote)
- ✅ Etiket sistemi
- ✅ Sosyal medya paylaşım butonları
- ✅ Sidebar widgets (arama, kategoriler, son yazılar, CTA)
- ✅ Call-to-action bölümü
- ✅ Footer'da güven unsurları

---

## 📝 Yeni Blog Yazısı Ekleme

### 1. Blog Liste Sayfasına Yeni Kart Ekleme (blog.html)

`blog.html` dosyasını açın ve aşağıdaki blog card yapısını kopyalayın:

```html
<article class="blog-card">
    <a href="blog-yazi-linki.html" class="blog-image-link">
        <div class="blog-image">
            <img src="GORSEL_URL" alt="Yazı Başlığı">
            <span class="blog-category-tag">Kategori Adı</span>
        </div>
    </a>
    <div class="blog-content">
        <div class="blog-meta">
            <span class="blog-date">
                <i class="far fa-calendar-alt"></i>
                15 Ocak 2024
            </span>
            <span class="blog-author">
                <i class="far fa-user"></i>
                Av. İsim Soyisim
            </span>
        </div>
        <h2 class="blog-title">
            <a href="blog-yazi-linki.html">Yazı Başlığınız Buraya</a>
        </h2>
        <p class="blog-excerpt">
            Kısa özet metni buraya. Maksimum 2-3 cümle olmalı.
        </p>
        <a href="blog-yazi-linki.html" class="blog-read-more">
            Devamını Oku
            <i class="fas fa-arrow-right"></i>
        </a>
    </div>
</article>
```

**Değiştirmeniz Gerekenler:**
- `blog-yazi-linki.html` → Detay sayfasının adı
- `GORSEL_URL` → Unsplash veya kendi görselinizin URL'si
- `Kategori Adı` → İcra Hukuku, Aile Hukuku vb.
- `15 Ocak 2024` → Yayın tarihi
- `Av. İsim Soyisim` → Yazar adı
- `Yazı Başlığınız Buraya` → Makalenin başlığı
- `Kısa özet metni` → 2-3 cümlelik özet

### 2. Blog Detay Sayfası Oluşturma

`blog-detail.html` dosyasını kopyalayın ve yeni bir isimle kaydedin (örn: `nafaka-haklari.html`)

**Değiştirmeniz Gereken Bölümler:**

#### A. Head Bölümü (SEO)
```html
<meta name="description" content="Makalenizin kısa açıklaması">
<title>Makale Başlığı - Hukuk & Danışmanlık Ofisi</title>
```

#### B. Kategori Etiketi
```html
<span class="article-category-tag">Aile Hukuku</span>
```

#### C. Başlık
```html
<h1 class="article-title">Makalenizin Tam Başlığı</h1>
```

#### D. Meta Bilgileri
```html
<div class="article-meta">
    <span class="article-date">
        <i class="far fa-calendar-alt"></i>
        15 Ocak 2024
    </span>
    <span class="article-author">
        <i class="far fa-user"></i>
        Av. Ahmet Yılmaz
    </span>
    <span class="article-read-time">
        <i class="far fa-clock"></i>
        8 dk okuma
    </span>
</div>
```

#### E. Featured Image (Öne Çıkan Görsel)
```html
<div class="article-featured-image">
    <img src="GORSEL_URL" alt="Makale Başlığı">
</div>
```

#### F. Makale İçeriği
`<div class="article-content">` içindeki tüm içeriği kendi yazınızla değiştirin.

**İçerik Formatları:**
```html
<!-- Giriş Paragrafı -->
<p class="article-intro">
    Önemli giriş metni buraya...
</p>

<!-- Ana Başlık -->
<h2>Ana Başlık</h2>

<!-- Alt Başlık -->
<h3>Alt Başlık</h3>

<!-- Normal Paragraf -->
<p>
    Normal metin buraya...
</p>

<!-- Liste -->
<ul>
    <li>Liste öğesi 1</li>
    <li>Liste öğesi 2</li>
</ul>

<!-- Alıntı -->
<blockquote class="article-quote">
    Önemli bir alıntı veya vurgulanması gereken metin.
</blockquote>
```

#### G. Etiketler
```html
<div class="article-tags">
    <span class="tag-label">
        <i class="fas fa-tags"></i>
        Etiketler:
    </span>
    <a href="#" class="article-tag">Etiket1</a>
    <a href="#" class="article-tag">Etiket2</a>
    <a href="#" class="article-tag">Etiket3</a>
</div>
```

#### H. Sidebar - Son Yazılar
```html
<article class="recent-post-item">
    <a href="yazi-linki.html" class="recent-post-image">
        <img src="GORSEL_URL" alt="Yazı Başlığı">
    </a>
    <div class="recent-post-content">
        <h4 class="recent-post-title">
            <a href="yazi-linki.html">Yazı Başlığı</a>
        </h4>
        <span class="recent-post-date">
            <i class="far fa-calendar-alt"></i>
            12 Ocak 2024
        </span>
    </div>
</article>
```

---

## 🎯 Kullanılan Kategoriler

Mevcut kategori etiketleri:
- **Aile Hukuku** - Boşanma, nafaka, velayet
- **İş Hukuku** - İş sözleşmeleri, işçi hakları
- **Ceza Hukuku** - Savunma, dava süreçleri
- **Gayrimenkul Hukuku** - Alım-satım, kira
- **Ticaret Hukuku** - Şirket kuruluşu, ticari uyuşmazlıklar
- **Genel Hukuk** - Kanun değişiklikleri, genel bilgilendirme

Yeni kategori eklemek için sidebar'daki kategori listesini güncelleyin.

---

## 🖼️ Görsel Önerileri

### Blog Liste Kartları
- Boyut: 800x600px (önerilen)
- Format: JPG veya PNG
- Kalite: Yüksek çözünürlük
- Kaynak: Unsplash (ücretsiz) veya kendi görselleriniz

### Blog Detay Featured Image
- Boyut: 1200x600px (önerilen)
- Format: JPG
- Kalite: Yüksek çözünürlük

**Unsplash Örnek URL Formatı:**
```
https://images.unsplash.com/photo-XXXXX?auto=format&fit=crop&w=800&q=80
```

---

## 🎨 Renk Paleti

CSS değişkenleri `style.css` dosyasında tanımlanmıştır:

```css
--primary-navy: #0f172a;  /* Ana lacivert */
--gold: #c5a059;          /* Altın renk (vurgu) */
--white: #ffffff;          /* Beyaz */
--light-bg: #f8f9fa;      /* Açık arka plan */
--text-dark: #333333;      /* Koyu metin */
--text-gray: #6b7280;      /* Gri metin */
--border-color: #e5e7eb;   /* Kenar rengi */
```

---

## 📱 Responsive Breakpoints

```css
/* Desktop: 1200px ve üzeri - 3 sütun */
/* Tablet: 768px - 992px - 2 sütun */
/* Mobil: 768px altı - 1 sütun */
```

Blog grid otomatik olarak ekran boyutuna göre ayarlanır.

---

## ✅ SEO İpuçları

Her blog sayfası için:
1. Unique (benzersiz) `<title>` etiketi
2. Açıklayıcı `<meta name="description">` (150-160 karakter)
3. Anlamlı alt text'ler (img alt attribute)
4. Semantic HTML5 kullanımı (article, aside, nav)
5. Başlık hiyerarşisi (H1 → H2 → H3)

**Örnek:**
```html
<meta name="description" content="Boşanma davalarında nafaka türleri, hesaplama yöntemleri ve hukuki süreç hakkında detaylı bilgiler.">
<title>Boşanma Davalarında Nafaka Hakları - Hukuk & Danışmanlık Ofisi</title>
```

---

## 🔗 İç Linkleme

Blog yazılarınızda diğer sayfalara linkler ekleyin:
```html
<a href="hizmetler.html">hizmetlerimiz</a>
<a href="iletisim.html">bizimle iletişime geçin</a>
<a href="blog.html">diğer makaleler</a>
```

---

## 🚀 Sayfa Hızı Optimizasyonu

1. **Görselleri optimize edin:**
   - Boyutları küçültün (max 200KB)
   - WebP formatı kullanın (opsiyonel)
   - Lazy loading ekleyin (gelecekte)

2. **CDN kullanımı:**
   - Google Fonts: ✅ Mevcut
   - FontAwesome: ✅ Mevcut

---

## 📋 Kontrol Listesi - Yeni Yazı Eklerken

- [ ] blog.html'e yeni kart eklendi
- [ ] blog-detail.html kopyalandı ve yeniden adlandırıldı
- [ ] SEO bilgileri güncellendi (title, description)
- [ ] Kategori etiketi eklendi
- [ ] Tarih ve yazar bilgisi eklendi
- [ ] Featured image eklendi
- [ ] İçerik yazıldı (başlıklar, paragraflar, listeler)
- [ ] Etiketler eklendi
- [ ] Sidebar'daki son yazılar listesi güncellendi
- [ ] Footer'daki son yazılar güncellendi
- [ ] Görseller optimize edildi
- [ ] Tüm linkler kontrol edildi

---

## 🔧 Özelleştirme

### Sayfalama Değişikliği
`blog.html` içindeki pagination bölümünü düzenleyin:
```html
<nav class="pagination">
    <a href="blog-sayfa-1.html" class="pagination-btn active">1</a>
    <a href="blog-sayfa-2.html" class="pagination-btn">2</a>
    <!-- Daha fazla sayfa ekleyebilirsiniz -->
</nav>
```

### Call-to-Action Metni Değiştirme
Blog listesi ve detay sayfalarının sonundaki CTA bölümünü özelleştirin:
```html
<h2 class="blog-cta-title">Kendi CTA Başlığınız</h2>
<p class="blog-cta-text">Kendi açıklamanız...</p>
```

---

## 📞 Destek

Sorularınız için:
- CSS düzenlemeleri: `style.css` dosyasını inceleyin
- HTML yapısı: Mevcut `blog-detail.html` template'ini referans alın
- Responsive sorunlar: Chrome DevTools ile test edin

---

## 🎉 Sonuç

Bu blog sistemi tamamen statik, SEO-friendly ve modern bir tasarıma sahiptir. Framework gerektirmez, doğrudan HTML/CSS dosyalarını düzenleyerek içerik ekleyebilirsiniz.

**Önemli:** Her yeni blog yazısı için `blog-detail.html`'i kopyalayıp yeni bir dosya oluşturun ve içeriği özelleştirin.

---

**Oluşturulma Tarihi:** 13 Şubat 2026  
**Versiyon:** 1.0  
**Son Güncelleme:** 13 Şubat 2026
