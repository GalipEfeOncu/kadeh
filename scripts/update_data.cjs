const fs = require('fs');
const path = require('path');

const sarapPath = path.join(__dirname, 'src', 'data', 'sarap.js');
let sarapContent = fs.readFileSync(sarapPath, 'utf8');

const sarapExtraData = `  {
    id: 'cabernet-sauvignon-bordeaux',
    name: 'Cabernet Sauvignon-Bordeaux',
    emoji: '🍷',
    color: '#4a0e17',
    aliases: ['Bordeaux Blend'],
    origin: 'Fransa',
    ana_tur: 'şarap',
    alt_tur: 'kırmızı_uluslararası',
    gorunum: 'opak',
    olgunlasma: 'fıçılanmış',
    aroma: ['siyah frenk üzümü', 'sedir ağacı', 'tütün'],
    alkol_seviye: 'orta',
    lore_short: 'Dünyanın en asil şarap harmanının kalbi. Fransız meşesiyle olgunlaşmış, yıllanmaya meydan okuyan klasik.',
    lore_full: [
      { baslik: 'Köken', metin: 'Bordeaux bölgesinin Sol Yaka (Left Bank) şaraplarının temel taşıdır. Çakıllı topraklarda en iyi performansını gösterir.' },
      { baslik: 'Kültürel Etki', metin: 'Şarap dünyasında bir standarttır. İyi bir Bordeaux, koleksiyonerlerin en çok peşinden koştuğu şaraptır.' },
      { baslik: 'Türkiye ile İlişkisi', metin: 'Lüks restoranlarda ve özel kutlamalarda şarap listesinin zirvesinde yer alır.' }
    ],
    hammadde: '%100 Cabernet Sauvignon veya Merlot harmanı.',
    uretim_sureci: 'Uzun maserasyon ve dikkatli meşe fıçı yaşlandırması.',
    dinlendirme: 'Fransız meşesinde 18-24 ay.',
    renk: 'Derin yakut, yıllandıkça kiremit rengine döner.',
    koku: 'Siyah frenk üzümü, kurşun kalem talaşı, deri ve menekşe.',
    tat: 'Güçlü tanenler, dengeli asidite ve koyu orman meyveleri.',
    finish: 'Çok uzun, sek ve katmanlı.',
    vucut: 'Full body',
    rakon: 'sek',
    sek_detay: { kadeh: 'Büyük Bordeaux Kadehi', sicaklik: '16-18°C', miktar: '150 ml', hazirlik: 'İçilmeden 1-2 saat önce dekante edilmeli.' },
    mix_detay: [],
    yiyecek: 'Antrikot, kuzu pirzola, olgun peynirler.',
    muzik_his: 'Klasik Müzik, Orkestra.',
    mevsim: 'Sonbahar ve Kış',
    abv_range: '13.5 - 14.5',
    standart_porsiyon: '150',
    kafa_dozu: { hafif: '1 kadeh', ideal: '2 kadeh', limit_ustu: '3+ kadeh', ertesi_gun: 2 },
    etki_hizi: 'Yavaş', metabolizma: 'Orta', baslangic_onerileri: ['-'], orta_seviye: ['Bordeaux AOC'], premium: ['Grand Cru Classé'], fiyat_araligi: '1000 - 10000', nereden_alinir: 'Kavlar ve premium mağazalar.', pop_kultur: 'Filmlerde zenginlerin içtiği standart şarap.', yanlis_bilinenler: 'Her Bordeaux şarabının çok pahalı olduğu sanılır; oysa uygun fiyatlı olanları da vardır.', sozler: '\\'Zamanın şişelenmiş hali.\\''
  },
  {
    id: 'chianti',
    name: 'Chianti',
    emoji: '🍷',
    color: '#8b0000',
    aliases: ['Toskana Güneşi'],
    origin: 'İtalya',
    ana_tur: 'şarap',
    alt_tur: 'kırmızı_uluslararası',
    gorunum: 'berrak',
    olgunlasma: 'fıçılanmış',
    aroma: ['vişne', 'domates yaprağı', 'balsamik'],
    alkol_seviye: 'orta',
    lore_short: 'İtalya\\'nın romantik ruhu. Sangiovese üzümünün Toskana güneşinde olgunlaşıp asidik ve iştah açıcı bir şaraba dönüşmesi.',
    lore_full: [
      { baslik: 'Köken', metin: 'Toskana bölgesinin ikonik şarabıdır. Geleneksel olarak hasır kaplı şişelerde (fiasco) satılırdı.' },
      { baslik: 'Kültürel Etki', metin: 'İtalyan mutfağının dünya çapındaki elçisidir. Pizza ve makarnanın ayrılmaz yoldaşıdır.' },
      { baslik: 'Türkiye ile İlişkisi', metin: 'İtalyan restoranlarının vazgeçilmezidir. Domates soslu İtalyan yemekleriyle mükemmel uyumu sayesinde çok sevilir.' }
    ],
    hammadde: 'Ağırlıklı olarak Sangiovese üzümü.',
    uretim_sureci: 'Geleneksel fermantasyon, büyük fıçılarda (botti) dinlendirme.',
    dinlendirme: 'Chianti Classico için en az 12 ay.',
    renk: 'Canlı yakut kırmızısı.',
    koku: 'Ekşi kiraz, güneşte kurutulmuş domates, kekik ve toprak.',
    tat: 'Yüksek asidite, belirgin tanenler, kırmızı meyveler ve bitkisel notalar.',
    finish: 'Tazeleyici, uzun ve ağız sulandıran.',
    vucut: 'Medium body',
    rakon: 'sek',
    sek_detay: { kadeh: 'Standart Kırmızı Şarap Kadehi', sicaklik: '16-18°C', miktar: '150 ml', hazirlik: 'Genç olanlar hemen, yıllanmışlar dekante edilerek.' },
    mix_detay: [],
    yiyecek: 'Bolonez soslu makarna, pizza, pecorino peyniri.',
    muzik_his: 'İtalyan Operası, Neşeli Akustik.',
    mevsim: 'İlkbahar ve Sonbahar',
    abv_range: '12.5 - 14',
    standart_porsiyon: '150',
    kafa_dozu: { hafif: '1-2 kadeh', ideal: '3 kadeh', limit_ustu: '4+ kadeh', ertesi_gun: 1 },
    etki_hizi: 'Orta', metabolizma: 'Hızlı', baslangic_onerileri: ['Chianti DOCG'], orta_seviye: ['Chianti Classico'], premium: ['Chianti Classico Riserva'], fiyat_araligi: '500 - 2500', nereden_alinir: 'Şarap butikleri.', pop_kultur: 'Kuzuların Sessizliği filmindeki meşhur replik.', yanlis_bilinenler: 'Sadece hasır şişelerde satıldığı sanılır, modern üretimde standart şişeler kullanılır.', sozler: '\\'Toskana ruhu kadehte.\\''
  },
  {
    id: 'malbec',
    name: 'Malbec',
    emoji: '🍷',
    color: '#4b0082',
    aliases: ['Arjantin Ateşi'],
    origin: 'Arjantin',
    ana_tur: 'şarap',
    alt_tur: 'kırmızı_uluslararası',
    gorunum: 'opak',
    olgunlasma: 'fıçılanmış',
    aroma: ['böğürtlen', 'erik', 'çikolata'],
    alkol_seviye: 'orta',
    lore_short: 'Arjantin\\'in imza şarabı. Derin mor rengi, yumuşak tanenleri ve coşkulu meyve profiliyle et yemeklerinin en iyi dostu.',
    lore_full: [
      { baslik: 'Köken', metin: 'Aslen Fransa\\'nın Cahors bölgesinden gelse de, gerçek kimliğini Arjantin\\'in yüksek rakımlı Mendoza bölgesinde bulmuştur.' },
      { baslik: 'Kültürel Etki', metin: 'Steakhouse kültürünün ayrılmaz bir parçasıdır. Gevrek, meyvemsi ve ulaşılabilir yapısıyla çok sevilir.' },
      { baslik: 'Türkiye ile İlişkisi', metin: 'Et lokantalarında Cabernet Sauvignon\\'a güçlü bir alternatif olarak hızla popülerleşmiştir.' }
    ],
    hammadde: '%100 Malbec üzümü.',
    uretim_sureci: 'Rakımlı bağlardan elde edilen üzümlerle yoğun meyve karakterini koruyarak üretilir.',
    dinlendirme: 'Fransız veya Amerikan meşesinde 6-18 ay.',
    renk: 'Derin, mürekkep gibi mor.',
    koku: 'Tatlı erik, böğürtlen, kakao ve tatlı tütün.',
    tat: 'Yumuşak, kadifemsi tanenler. Yoğun koyu meyve ve çikolata notaları.',
    finish: 'Orta uzunlukta, tatlımsı baharatla biten.',
    vucut: 'Full body',
    rakon: 'sek',
    sek_detay: { kadeh: 'Geniş Ağızlı Kadeh', sicaklik: '16-18°C', miktar: '150 ml', hazirlik: 'Gerekirse hafifçe havalandırılır.' },
    mix_detay: [],
    yiyecek: 'Asado (Arjantin ızgara), ızgara etler, empanada.',
    muzik_his: 'Tango, Latin Akustik.',
    mevsim: 'Her mevsim',
    abv_range: '13.5 - 15',
    standart_porsiyon: '150',
    kafa_dozu: { hafif: '1 kadeh', ideal: '2 kadeh', limit_ustu: '3+ kadeh', ertesi_gun: 2 },
    etki_hizi: 'Orta', metabolizma: 'Orta', baslangic_onerileri: ['Mendoza Malbec'], orta_seviye: ['Reserva Malbec'], premium: ['Uco Valley Single Vineyard'], fiyat_araligi: '400 - 2000', nereden_alinir: 'Süpermarketler ve barlar.', pop_kultur: 'Et dendiğinde akla ilk gelen şarap.', yanlis_bilinenler: 'Sadece Arjantin\\'de üretildiği sanılır, asıl memleketi Fransa\\'dır.', sozler: '\\'Etin en iyi arkadaşı.\\''
  },
  {
    id: 'sauvignon-blanc-yeni-zelanda',
    name: 'Sauvignon Blanc-Yeni Zelanda',
    emoji: '🥂',
    color: '#f0fff0',
    aliases: ['Marlborough SB'],
    origin: 'Yeni Zelanda',
    ana_tur: 'şarap',
    alt_tur: 'beyaz_uluslararası',
    gorunum: 'berrak',
    olgunlasma: 'dinlendirilmemiş',
    aroma: ['çarkıfelek meyvesi', 'yeşil biber', 'greyfurt'],
    alkol_seviye: 'hafif',
    lore_short: 'Dünyayı sarsan beyaz. Yeni Zelanda\\'nın Marlborough bölgesinden gelen, adeta bardaktan dışarı fırlayan tropik ve yeşil aromalar.',
    lore_full: [
      { baslik: 'Köken', metin: '1980\\'lerde Yeni Zelanda\\'nın Marlborough bölgesinde ekilen Sauvignon Blanc asmaları, beklenmedik derecede canlı ve aromatik şaraplar üreterek dünyada devrim yarattı.' },
      { baslik: 'Kültürel Etki', metin: 'Canlı, asidik ve bol meyveli stiliyle modern beyaz şarap zevkini şekillendiren en önemli unsurdur.' },
      { baslik: 'Türkiye ile İlişkisi', metin: 'Özellikle yazın çok sevilir, ferahlığı ve yoğun kokusuyla popülerdir.' }
    ],
    hammadde: '%100 Sauvignon Blanc.',
    uretim_sureci: 'Aromaları maksimumda tutmak için soğuk fermentasyon.',
    dinlendirme: 'Çelik tank (meşe fıçı görmez).',
    renk: 'Soluk sarı, yeşilimsi röfleler.',
    koku: 'Çarkıfelek meyvesi (passion fruit), greyfurt, yeni kesilmiş çimen ve jalapeno.',
    tat: 'Canlı, jilet gibi keskin asidite, patlayan tropik meyve aromaları.',
    finish: 'Uzun, tazeleyici ve asidik.',
    vucut: 'Light body',
    rakon: 'sek',
    sek_detay: { kadeh: 'İnce Beyaz Şarap Kadehi', sicaklik: '8-10°C', miktar: '150 ml', hazirlik: 'İyi soğutulmalı.' },
    mix_detay: [],
    yiyecek: 'Keçi peyniri salatası, kuşkonmaz, deniz ürünleri.',
    muzik_his: 'Pop, Beach House.',
    mevsim: 'Yaz',
    abv_range: '12 - 13.5',
    standart_porsiyon: '150',
    kafa_dozu: { hafif: '1-2 kadeh', ideal: '3 kadeh', limit_ustu: '4+ kadeh', ertesi_gun: 1 },
    etki_hizi: 'Hızlı', metabolizma: 'Hızlı', baslangic_onerileri: ['Marlborough SB'], orta_seviye: ['Marlborough SB'], premium: ['Cloudy Bay SB'], fiyat_araligi: '500 - 1500', nereden_alinir: 'Şarap butikleri.', pop_kultur: 'Cloudy Bay efsanesiyle bilinen kategori.', yanlis_bilinenler: 'Tüm Sauvignon Blanc\\'ların aynı olduğu sanılır, oysa Fransız versiyonları daha mineraldir.', sozler: '\\'Kadehte patlayan yeşil enerji.\\''
  }`;

if (sarapContent.includes('cabernet-sauvignon-bordeaux')) {
  console.log('Şarap verisi zaten eklenmiş.');
} else {
  sarapContent = sarapContent.replace(/\\n\\];/, ',\\n' + sarapExtraData + '\\n];');
  fs.writeFileSync(sarapPath, sarapContent, 'utf8');
}

const kokteylPath = path.join(__dirname, 'src', 'data', 'kokteyl.js');
let kokteylContent = fs.readFileSync(kokteylPath, 'utf8');

const kokteylExtraData = `  {
    id: 'cosmopolitan',
    name: 'Cosmopolitan',
    emoji: '🍸',
    color: '#ff69b4',
    aliases: ['Cosmo'],
    origin: 'ABD',
    ana_tur: 'kokteyl',
    alt_tur: 'sour',
    gorunum: 'berrak',
    olgunlasma: 'dinlendirilmemiş',
    aroma: ['kızılcık', 'narenciye', 'votka'],
    alkol_seviye: 'orta',
    lore_short: 'Sex and the City ile ikonlaşan, zarif ve pembe klasik. Votka, Cointreau, taze lime ve kızılcık suyunun mükemmel uyumu.',
    lore_full: [
      { baslik: 'Köken', metin: '1980\\'lerin sonunda Toby Cecchini tarafından yaratıldığı kabul edilir. Absolut Citron ve taze malzemeler kullanılarak modern bir klasiğe dönüşmüştür.' },
      { baslik: 'Kültürel Etki', metin: 'Sex and the City dizisiyle küresel bir fenomene dönüştü. "Tatlı ama sert" kadın kokteyli imajının öncüsüdür.' },
      { baslik: 'Türkiye ile İlişkisi', metin: 'Kız kıza çıkılan gece eğlencelerinin en havalı ve popüler siparişlerindendir.' }
    ],
    hammadde: 'Narenciye aromalı Votka, Cointreau, Taze Lime Suyu, Kızılcık (Cranberry) Suyu.',
    uretim_sureci: 'Sert çalkalama (Shake).',
    dinlendirme: 'Dinlendirilmez.',
    renk: 'Parlak, uçuk pembe.',
    koku: 'Portakal yağı, lime tazeliği ve hafif kızılcık.',
    tat: 'Ekşi, ferah ve meyvemsi. Votka geri planda kalırken kızılcık ve narenciye öne çıkar.',
    finish: 'Kuru, asidik ve temizleyici.',
    vucut: 'Light to Medium body',
    rakon: 'sek',
    sek_detay: { kadeh: 'Martini kadehi', sicaklik: 'Çok Soğuk', miktar: '90 ml', hazirlik: 'Portakal kabuğu yağı kadehe sıkılıp içine atılır.' },
    mix_detay: [
      {
        isim: 'Klasik Cosmo',
        malzemeler: ['40 ml Citron Votka', '15 ml Cointreau', '15 ml Taze Lime Suyu', '30 ml Kızılcık Suyu'],
        hazirlanis: 'Tüm malzemeleri bol buzla shaker\\'da sertçe çalkalayın. Soğutulmuş Martini kadehine süzün. Üzerine portakal kabuğu sıkın.',
        neden: 'Kızılcık suyu sadece renk ve hafif bir mayhoşluk içindir, içkiyi tatlılaştırmak için değildir.',
        ortam: 'Gece kulübü, şık bar, kutlama.'
      }
    ],
    yiyecek: 'Hafif atıştırmalıklar, kanepeler.',
    muzik_his: 'Pop, R&B, Disco.',
    mevsim: 'Her mevsim',
    abv_range: '22',
    standart_porsiyon: '90',
    kafa_dozu: { hafif: '1 kadeh', ideal: '3 kadeh', limit_ustu: '4+ kadeh', ertesi_gun: 1 },
    etki_hizi: 'Hızlı', metabolizma: 'Hızlı', baslangic_onerileri: ['-'], orta_seviye: ['Cosmopolitan'], premium: ['-'], fiyat_araligi: '400 - 550', nereden_alinir: 'Kokteyl barları.', pop_kultur: 'Carrie Bradshaw\\'un favori içkisi.', yanlis_bilinenler: 'Tatlı bir içki olduğu sanılır, aslında oldukça mayhoş ve sek karakterlidir.', sozler: '\\'A Cosmo, please.\\''
  },
  {
    id: 'pina-colada',
    name: 'Piña Colada',
    emoji: '🍍',
    color: '#fffdd0',
    aliases: ['Tropikal Rüya'],
    origin: 'Porto Riko',
    ana_tur: 'kokteyl',
    alt_tur: 'tropikal',
    gorunum: 'opak',
    olgunlasma: 'dinlendirilmemiş',
    aroma: ['ananas', 'hindistan cevizi', 'rom'],
    alkol_seviye: 'hafif_orta',
    lore_short: 'Karayiplerin resmi içeceği. Beyaz rom, ananas suyu ve hindistan cevizi kreminin tatil kokan, zengin ve kremsi dansı.',
    lore_full: [
      { baslik: 'Köken', metin: '1954 yılında Porto Riko\\'nun başkenti San Juan\\'daki Caribe Hilton otelinde Ramón "Monchito" Marrero tarafından icat edildiği söylenir.' },
      { baslik: 'Kültürel Etki', metin: 'Tropikal tatil denilince akla gelen ilk içkidir. "Escape (The Piña Colada Song)" şarkısıyla 1970\\'lerde ölümsüzleşmiştir.' },
      { baslik: 'Türkiye ile İlişkisi', metin: 'Yaz tatili ve sahil barlarının kraliçesidir. Bol buzlu ve tatlı yapısıyla çok tercih edilir.' }
    ],
    hammadde: 'Beyaz Rom, Ananas Suyu, Hindistan Cevizi Kreması (Coconut Cream).',
    uretim_sureci: 'Blenderda buzla çekilme veya sert shake.',
    dinlendirme: 'Dinlendirilmez.',
    renk: 'Krem beyazı, açık sarı.',
    koku: 'Yoğun hindistan cevizi ve taze ananas.',
    tat: 'Çok tatlı, kremsi ve tropikal. Rom, meyve şöleninin içinde gizlenir.',
    finish: 'Uzun, tatlı ve sütlü.',
    vucut: 'Full body',
    rakon: 'mix',
    sek_detay: { kadeh: 'Hurricane (Tropikal) kadehi', sicaklik: 'Buzlu (Frozen)', miktar: '250 ml', hazirlik: 'Ananas dilimi ve kokteyl şemsiyesiyle süslenir.' },
    mix_detay: [
      {
        isim: 'Klasik Piña Colada',
        malzemeler: ['50 ml Beyaz Rom', '30 ml Hindistan Cevizi Kreması', '90 ml Taze Ananas Suyu'],
        hazirlanis: 'Tüm malzemeleri blender\\'a koyun. 1 fincan kırık buz ekleyip pürüzsüz olana kadar çekin. Kadehe dökün.',
        neden: 'Ananasın asiditesi, hindistan cevizi kreminin yoğun tatlılığını dengeler.',
        ortam: 'Havuz başı, plaj partisi, tatil.'
      }
    ],
    yiyecek: 'Karides, hafif deniz ürünleri.',
    muzik_his: 'Reggae, Calypso, Latin Pop.',
    mevsim: 'Yaz',
    abv_range: '10',
    standart_porsiyon: '250',
    kafa_dozu: { hafif: '1 kadeh', ideal: '2 kadeh', limit_ustu: '3+ kadeh', ertesi_gun: 1 },
    etki_hizi: 'Yavaş', metabolizma: 'Yavaş', baslangic_onerileri: ['-'], orta_seviye: ['Piña Colada'], premium: ['-'], fiyat_araligi: '350 - 500', nereden_alinir: 'Sahil barları.', pop_kultur: 'Tatil ve kaçamak ruhunu temsil eder.', yanlis_bilinenler: 'Çok hafif olduğu sanılır ama içerdiği krema ve şeker nedeniyle oldukça doyurucu ve kalori yüklüdür.', sozler: '\\'If you like Piña Coladas, and getting caught in the rain...\\''
  },
  {
    id: 'margarita-2',
    name: 'Margarita (Klasik)',
    emoji: '🍸',
    color: '#f4f4dc',
    aliases: ['Tequila Ekşisi'],
    origin: 'Meksika',
    ana_tur: 'kokteyl',
    alt_tur: 'sour',
    gorunum: 'berrak',
    olgunlasma: 'dinlendirilmemiş',
    aroma: ['agav', 'lime', 'tuz'],
    alkol_seviye: 'orta',
    lore_short: 'Meksika\\'nın ruhunu kadehe taşıyan, tuzlu kenarıyla ferahlatan efsane.',
    lore_full: [
      { baslik: 'Köken', metin: 'Tekila bazlı ekşi bir kokteyl olan Margarita, 1930\\'ların sonunda ABD-Meksika sınırında doğmuştur.' },
      { baslik: 'Kültürel Etki', metin: 'Tatlı-ekşi-tuzlu dengesiyle dünyanın en çok tüketilen kokteyllerinden biridir.' },
      { baslik: 'Türkiye ile İlişkisi', metin: 'Tekila sevenlerin ilk ve tek aşkı.' }
    ],
    hammadde: 'Tekila, Portakal Likörü (Triple Sec), Lime Suyu.',
    uretim_sureci: 'Sert Shake.',
    dinlendirme: 'Dinlendirilmez.',
    renk: 'Bulanık yeşilimsi beyaz.',
    koku: 'Lime asiditesi, agav notaları.',
    tat: 'Tuz, ekşi lime ve tekila karakteri arka arkaya vurur.',
    finish: 'Kuru ve ferah.',
    vucut: 'Medium body',
    rakon: 'mix',
    sek_detay: { kadeh: 'Margarita Kadehi', sicaklik: 'Soğuk', miktar: '90 ml', hazirlik: 'Kenarı tuzlanır.' },
    mix_detay: [
      {
        isim: 'Klasik Margarita',
        malzemeler: ['50 ml Tekila Blanco', '20 ml Triple Sec', '20 ml Lime Suyu'],
        hazirlanis: 'Kadeh kenarı tuzlanır. Malzemeler shake edilir, süzülür.',
        neden: 'Kusursuz denge.',
        ortam: 'Yaz akşamları, parti.'
      }
    ],
    yiyecek: 'Nachos, Taco.',
    muzik_his: 'Latin Pop.',
    mevsim: 'Yaz',
    abv_range: '26',
    standart_porsiyon: '90',
    kafa_dozu: { hafif: '1 kadeh', ideal: '3 kadeh', limit_ustu: '4+ kadeh', ertesi_gun: 3 },
    etki_hizi: 'Hızlı', metabolizma: 'Hızlı', baslangic_onerileri: ['-'], orta_seviye: ['Margarita'], premium: ['-'], fiyat_araligi: '400 - 550', nereden_alinir: 'Kokteyl barları.', pop_kultur: 'Meksika ateşinin simgesi.', yanlis_bilinenler: 'Tüm bardağın tuzlanması yanlıştır, sadece yarısı tuzlanmalıdır.', sozler: '\\'Tuz, lime, tekila.\\''
  }`;

if (kokteylContent.includes('cosmopolitan')) {
  console.log('Kokteyl verisi zaten eklenmiş.');
} else {
  kokteylContent = kokteylContent.replace(/\\n\\];/, ',\\n' + kokteylExtraData + '\\n];');
  fs.writeFileSync(kokteylPath, kokteylContent, 'utf8');
}

console.log('Tüm veriler dosyaya eklendi.');
