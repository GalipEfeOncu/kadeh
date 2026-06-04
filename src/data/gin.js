export const gin = [
  {
    id: 'tanqueray',
    name: 'Tanqueray',
    emoji: '🍸',
    color: '#2d6a3f',
    aliases: ['TQ', 'London Dry'],
    origin: 'İngiltere',
    ana_tur: 'gin',
    alt_tur: 'london_dry',
    gorunum: 'berrak',
    olgunlasma: 'dinlendirilmemiş',
    aroma: ['ardıç', 'sitrus', 'kişniş', 'kuru'],
    alkol_seviye: 'sert',
    lore_short: `London Dry'ın sözlük tanımı. Ardıç öne çıkar, her şey ardıcın etrafında döner. Sade yeşil şişe, dört botanik, bir tutarlılık yüzyılı. Gin&Tonic'in olmazsa olmazı, barmenin güvendiği standart.`,
    lore_full: [
      {
        baslik: 'Köken',
        metin: `Charles Tanqueray, 1830'da Londra'nın Bloomsbury semtinde küçük bir damıtıcı kurdu. Genç ve hırslı bir damıtıcıydı; o dönem Londra'sında ucuz ve kalitesiz "Gin Craze" içkilerinin gölgesinde kaliteli gin üretmek için farklı bir formül arıyordu. Dört botanik seçti: Ardıç meyvesi, kişniş, melek otu kökü ve licorice. Bu basit ama güçlü formül bugün hâlâ aynıdır.\n\nOrijinal damıtıcı binası İkinci Dünya Savaşı sırasında Londra bombalamasında tahrip oldu; üretim İskoçya'ya taşındı. Formül değişmedi.`
      },
      {
        baslik: 'Yayılma',
        metin: `Tanqueray, özellikle İngiliz Britanya İmparatorluğu'nun sömürge yöneticileri aracılığıyla Hindistan, Afrika ve Uzakdoğu'ya yayıldı. Tropikal bölgelerde malarya önlemi olarak tüketilen kinin (tonic water) ile karıştırılması, Gin&Tonic'in doğumunu mümkün kıldı. Tonic'in acılığını bastırmak için eklenen gin, Tanqueray gibi ardıç ağırlıklı profillerde çok iyi çalışıyordu.\n\nBugün Diageo bünyesinde 180'den fazla ülkede satılan Tanqueray, Premium London Dry kategorisinin küresel referansıdır.`
      },
      {
        baslik: 'Kültürel Etki',
        metin: `Tanqueray'ın yeşil "fire hydrant" (yangın musluğu) şişesi, bardak tasarımının efsaneleri arasındadır. Sade, fonksiyonel ve anında tanınabilir. Bu şişeyi bir kez görürsen unutamazsın.\n\nGin&Tonic kültürünün dünya genelinde patlamasında Tanqueray merkezi bir rol oynadı. İspanya'nın "gin-tonic" kültürü ve dünya genelinde "craft G&T" akımı, ardıç merkezli gin stilini öne çıkardı; Tanqueray bu stilin standardıdır.`
      },
      {
        baslik: 'Modern Dönem',
        metin: `Tanqueray No. Ten (Nº TEN) ve Sevilla serileri, markanın premium ve flavoured segmentlerindeki büyümesini yansıtır. No. Ten taze botanikler (greyfurt, portakal, camomile) kullanarak Tanqueray formülünü farklı bir yönde genişletir.\n\nCraft gin hareketi büyüdükçe Tanqueray'a "boring classic" yaftası yapıştırmak isteyen eleştirmenler oldu. Ama barmenlerin çoğu buna katılmaz: Tutarlılık, bir bardak üstünde tasarımcı çalışırken en değerli özellik haline gelir.`
      },
      {
        baslik: `Türkiye ile İlişkisi`,
        metin: `Türkiye'de gin kültürü 2010'lardan itibaren İstanbul'un kokteyl barlarıyla birlikte büyüdü. Tanqueray bu büyümede hem öğretici hem de referans marka oldu. "Gin nedir?" sorusu Tanqueray'la cevaplanır; "iyi G&T nasıl yapılır?" sorusu da.\n\nBarmenler ve ev içicileri için Tanqueray, "güvenilir standart" anlamına gelir. Daha egzotik botaniğe sahip craft gin'leri denemeden önce ardıç ağırlıklı klasik profili anlamak için ideal başlangıç noktasıdır.`
      }
    ],
    hammadde: 'Ardıç meyvesi, kişniş, melek otu kökü, licorice kökü + tahıl bazlı nötr alkol',
    uretim_sureci: `Dört botanik, nötr tahıl alkoluyle pot still damıtması. London Dry standardı: damıtma sonrası şekerleme yok.`,
    dinlendirme: `Dinlendirilmez. Damıtmadan hemen sonra seyreltilip şişelenir.`,
    renk: `Kristal berrak.`,
    koku: `Güçlü ardıç, limon kabuğu, kişniş, hafif bitkisel (melek otu).`,
    tat: `Kuru ve güçlü. Ardıç egemen, sitrus ve baharatlı notlar destekler. Şeker yok.`,
    finish: `Kısa-orta, temiz ve kuru. Ardıç uzun süre damakta kalır.`,
    vucut: 'Medium body',
    rakon: 'mix',
    sek_detay: {
      kadeh: 'Martini kadehi',
      sicaklik: `Çok soğuk (-18°C'de dondurulmuş kadeh)`,
      miktar: '45-60 ml',
      hazirlik: `Sek Martini için: 6:1 oranında vermouth ile. Veya tonic ile klasik G&T.`
    },
    mix_detay: [
      {
        isim: 'Tanqueray G&T',
        malzemeler: ['50 ml Tanqueray', '150 ml Premium Tonic Water', 'Limon veya greyfurt dilimi', 'Buz'],
        hazirlanis: `Büyük buz dolu balon kadehin içine Tanqueray dök. Toniği yavaşça ekle. Meyveyle süsle.`,
        neden: `Tanqueray'ın ardıç ve sitrus karakteri tonikle mükemmel denge kurar; bu ikilinin klasiği.`,
        ortam: `Aperitif saati, yaz akşamı, balkon.`
      }
    ],
    yiyecek: `Deniz ürünleri, hafif salatalar, zeytin, prosciutto.`,
    muzik_his: `Brit pop, indie, şehrin gece uğultusu, neon ışıklar.`,
    mevsim: `İlkbahar ve yaz`,
    abv_range: '43.1 - 47.3',
    standart_porsiyon: '50',
    kafa_dozu: { hafif: '1-2 kadeh', ideal: '3 kadeh', limit_ustu: '4+ kadeh', ertesi_gun: 2 },
    etki_hizi: 'Hızlı (15-20 dk)',
    metabolizma: 'Hızlı',
    baslangic_onerileri: ['Tanqueray London Dry'],
    orta_seviye: ['Tanqueray No. Ten'],
    premium: ['Tanqueray Nº TEN Old Tom'],
    fiyat_araligi: '600 - 1100',
    nereden_alinir: `Tekel bayiler, barlar, her yerde.`,
    pop_kultur: `Gin&Tonic'in DNA'sı. Londra'dan sömürge barlarına taşınan ardıç ruhu.`,
    yanlis_bilinenler: `"Klasik" olmak "sıradan" demek değildir. Tanqueray, 190 yıldır aynı formülü uyguluyor; bu istikrar bir zaaftır değil, erdem.`,
    sozler: '"Simplicity is the ultimate sophistication." (Leonardo da Vinci)'
  },
  {
    id: 'bombay-sapphire',
    name: 'Bombay Sapphire',
    emoji: '🍸',
    color: '#1a4080',
    aliases: ['Bombay', 'Sapphire', 'Mavi Şişe'],
    origin: 'İngiltere',
    ana_tur: 'gin',
    alt_tur: 'london_dry',
    gorunum: 'berrak',
    olgunlasma: 'dinlendirilmemiş',
    aroma: ['ardıç', 'sitrus', 'çiçeksi', 'egzotik baharatlar'],
    alkol_seviye: 'sert',
    lore_short: `Mavi şişe, gin dünyasının en ikonik ambalajıdır. 10 botanik, buhar infüzyon yöntemi; Tanqueray'dan daha narin, daha çiçeksi ve daha egzotik. Bar tezgahında her zaman göze çarpar; tadı da buna yalan söylemez.`,
    lore_full: [
      {
        baslik: 'Köken',
        metin: `Bombay Sapphire'ın kökeni 1761'de Londra'da üretilen "Bombay Dry Gin" tarifiyle başlar. Ama modern Bombay Sapphire, 1987'de IDV (International Distillers and Vintners) tarafından piyasaya sürüldü. İsim hem Hindistan'a hem de etiket üzerindeki Star of Bombay elmasına atıfta bulunur.\n\nEn önemli fark, üretim yöntemindedir: Buhar infüzyon (vapor infusion). Botanikler, nötr alkol vapurunun içinden geçtiği metal sepetlere yerleştirilir. Alkol, botaniklere doğrudan temas etmez; sadece buharı onların içinden süzülür. Sonuç: Daha narin, daha aromatik ve daha hafif bir gin.`
      },
      {
        baslik: 'Yayılma',
        metin: `1980'lerde mavi şişe, bar tezgahlarında devrim yarattı. O güne kadar gin şişeleri ya şeffaf ya da yeşildi; Bombay Sapphire'ın safir mavisi hem estetik hem de psikolojik bir ayrışma yarattı. "Beni tercih et" demek için renk yeterliydi.\n\nBacardi Limited 1997'de markayı satın aldı ve küresel bir premium ürün haline getirdi. Bugün 170'ten fazla ülkede satılan Bombay Sapphire, dünya genelinde üçüncü en çok satan premium gin konumundadır.`
      },
      {
        baslik: 'Kültürel Etki',
        metin: `Bombay Sapphire'ın mavi şişesi, iç mekan tasarımından moda kampanyalarına kadar pek çok kreatif alanda referans gösterilmiştir. 2014'te Whitchurch, Hampshire'da açılan Laverstoke Mill damıtıcı tesisi de bir mimarlık harikası olarak kabul görmektedir: Thomas Heatherwick tasarımı seraları olan bu yapı, gin üretimiyle sanatı buluşturur.\n\nMarka, "Stir Creativity" kampanyasıyla sanat ve tasarım sponsorluklarına yatırım yapmaktadır. Gin şişesini bir tasarım objesi olarak konumlandırma stratejisi sektörde öncü bir yaklaşım oldu.`
      },
      {
        baslik: 'Modern Dönem',
        metin: `Bombay Sapphire London Dry'ın yanında daha premium Star of Bombay (47.5%), Amber ve çeşitli limited edition versiyonlar üretilmektedir. Amber serisi, kısa süreli fıçı yaşlandırmasıyla gin ve viski arasında ilginç bir köprü kurmaktadır.\n\nCraft gin hareketinin büyümesiyle birlikte "10 botanik yeterli mi, 47 botanik mi daha iyi?" tartışması gin dünyasında heyecanlı bir soruya dönüştü. Bombay Sapphire, az ama öz botanik felsefesini koruyarak bu tartışmada tutarlı bir pozisyon aldı.`
      },
      {
        baslik: `Türkiye ile İlişkisi`,
        metin: `Türkiye'de Bombay Sapphire, Tanqueray ile birlikte gin kültürünün iki öncü markasıdır. Farkı ise görselliğindedir: Mavi şişe fotoğraflanmayı sever, sosyal medyada iyi görünür ve sofistike bir masa düzenini tamamlar.\n\nGin barlarının ortaya çıkmasıyla birlikte İstanbul ve Ankara'da Bombay Sapphire standart menü varlığı haline geldi. Buhar infüzyon yöntemi ve 10 botanik listesi, gin meraklılarının "damıtıcılığa giriş" sorularını yanıtlamak için iyi bir başlangıç noktası sunmaktadır.`
      }
    ],
    hammadde: `10 botanik: ardıç, kişniş, limon kabuğu, melek otu, kubeb biberi, yılan kökü, cenneti tohumu, meyan kökü, badem, kasatura. Nötr tahıl alkolü.`,
    uretim_sureci: `Vapor infusion (buhar infüzyon): botanikler bakır sepetlerde, alkol buharı içinden geçer. Doğrudan kaynatma değil.`,
    dinlendirme: `Dinlendirilmez.`,
    renk: `Kristal berrak.`,
    koku: `Tanqueray'dan daha narin. Ardıç, sitrus çiçeği, egzotik baharat (kubeb, cenneti tohumu), hafif meyan.`,
    tat: `Yumuşak ve çok yönlü. Ardıç var ama egemen değil; çiçeksi ve egzotik notlar öne çıkar.`,
    finish: `Orta uzunlukta, temiz ve hafif baharatlı.`,
    vucut: 'Medium body',
    rakon: 'mix',
    sek_detay: {
      kadeh: 'Martini kadehi veya copa kadehi',
      sicaklik: `Soğuk`,
      miktar: '45 ml',
      hazirlik: `Martini ya da G&T. Sitrus ağırlıklı tonic ile mükemmel.`
    },
    mix_detay: [
      {
        isim: 'Bombay Sapphire Martini',
        malzemeler: ['60 ml Bombay Sapphire', '15 ml Kuru Vermouth', 'Limon kabuğu'],
        hazirlanis: `Buz ile shaker ya da mixing glass'ta karıştır. Süzerek soğuk Martini kadehi içine dök. Limon kabuğunu bükün, üstüne bırakın.`,
        neden: `Sapphire'ın çiçeksi ve narin profili, bir dry Martini'de Tanqueray'dan farklı, daha zarif bir sonuç verir.`,
        ortam: `Kokteyl barı, özel davet, fine dining öncesi.`
      }
    ],
    yiyecek: `Deniz taratları, füme salmon, hafif peynirler, taşımalı zeytin.`,
    muzik_his: `Lounge, deep house, neon ışıklı kokteyl barı.`,
    mevsim: `İlkbahar ve yaz`,
    abv_range: '40 - 47.5',
    standart_porsiyon: '50',
    kafa_dozu: { hafif: '1-2 kadeh', ideal: '3 kadeh', limit_ustu: '4+ kadeh', ertesi_gun: 2 },
    etki_hizi: 'Hızlı (15-20 dk)',
    metabolizma: 'Hızlı',
    baslangic_onerileri: ['Bombay Sapphire'],
    orta_seviye: ['Bombay Sapphire Star of Bombay'],
    premium: ['Bombay Sapphire Amber'],
    fiyat_araligi: '600 - 1200',
    nereden_alinir: `Tekel bayiler, barlar, büyük marketler.`,
    pop_kultur: `Bar tasarımının ikonu. Mavi şişe, sosyal medyanın gin fotoğraflarında en sık görülendir.`,
    yanlis_bilinenler: `Mavi rengin botaniklerden geldiği sanılır; renk şişenin kendisinden gelir, içki tamamen şeffaftır.`,
    sozler: '"Imagine the possibilities."'
  },
  {
    id: 'hendricks',
    name: `Hendrick's Gin`,
    emoji: '🍸',
    color: '#3d1c3d',
    aliases: [`Hendrick's`, 'Salatalıklı Gin'],
    origin: 'İskoçya',
    ana_tur: 'gin',
    alt_tur: 'contemporary',
    gorunum: 'berrak',
    olgunlasma: 'dinlendirilmemiş',
    aroma: ['salatalık', 'gül', 'ardıç', 'çiçeksi'],
    alkol_seviye: 'sert',
    lore_short: `Salatalık ve gül yaprakları. Kimse daha önce gin'e bunları koymamıştı. İskoçya'da üretilen, Viktorya dönemi estetikli, tuhaf ve güzel. Contemporary gin'in kapısını ardına kadar açan öncü marka.`,
    lore_full: [
      {
        baslik: 'Köken',
        metin: `Hendrick's, 1999'da William Grant & Sons (Glenfiddich ve Monkey Shoulder'ın da sahibi) tarafından Ayrshire, İskoçya'daki Girvan Distillery'de piyasaya sürüldü. İki nadir ve farklı still kullanılır: 1860 yapımı Bennet still ve 1948 yapımı Carter-Head still. Bu iki farklı teknoloji, farklı distilasyon karakterleri üretir; ardından harmanlanır.\n\nAma Hendrick's'i gerçekten farklı kılan şey botanik listesindeki iki sürprizdir: Salatalık ve gül yaprakları. Bu iki malzeme, ginlerde geleneksel olarak yer almaz. Damıtma sonrası eklenen bu iki "infüzyon", Hendrick's'in o kendine özgü çiçeksi ve serin karakterini yaratır.`
      },
      {
        baslik: 'Yayılma',
        metin: `Hendrick's piyasaya çıktığında gin dünyası London Dry egemenliği altındaydı. "Salatalık ve gül" kombinasyonu yalnızca bir tat tercihi değil, bir tutum bildirgesiydi: "Gin böyle olmak zorunda değil." Bu duruş, contemporary gin kategorisini fiilen yaratmıştır.\n\nViktorya dönemi estetiğiyle tasarlanmış siyah şişe ve garip, biraz gotik ambalaj tasarımı, premium ürünün farklı bir yoldan da anlatılabileceğini gösterdi. Bugün Hendrick's 100+ ülkede satılmakta ve hâlâ craft/contemporary gin kategorisinin en tanınmış markası olarak kalmaktadır.`
      },
      {
        baslik: 'Kültürel Etki',
        metin: `"Gin&Tonic'e salatalık dilimi koy" önerisi bugün sıradan bir bar pratiği haline geldi; bu pratiği standartlaştıran Hendrick's'tir. Limon yerine salatalık, bir marka tercihinden ötede, bir içim kültürü değişimine dönüştü.\n\nHendrick's, "absürd İngiliz mizahı" estetiğiyle pazarlama iletişimi kurdu: Viktorya dönemi kaşifler, tuhaf buluşlar, saçma reklamlar. Bu tutum, gin içicilerinin kendilerine çok ciddiye almayan, keyifli bir kimlik inşa etmesine alan açtı.`
      },
      {
        baslik: 'Modern Dönem',
        metin: `Hendrick's, Lunar (mavi çiçekler), Midsummer Solstice (botanik) ve Neptunia (deniz otu) gibi seasonal limited edition serilerle ana formülü çeşitlendirmektedir. Her seri bir mevsim ya da temayı keşfeder.\n\nCabinet of Curiosities deneyim merkezi, markanın "tuhaf ve meraklı" kimliğini somutlaştırmaktadır. Ziyaretçiler sıra dışı araç-gereçler, eski buluşlar ve Hendrick's'in hikayesiyle çevrelenmiş bir deneyim yaşar.`
      },
      {
        baslik: `Türkiye ile İlişkisi`,
        metin: `Türkiye'de Hendrick's, gin meraklısının "bir sonraki adımı"dır. London Dry'dan sonra farklı bir şey aramaya başlayanlar için salatalık ve gül kombinasyonu tam anlamıyla bir keşif anı sunar.\n\nİstanbul'un craft barlarında Hendrick's, hem barmenlerin hem müşterilerin başvurduğu contemporary gin referansıdır. Salatalık dilimi ile servis edilmesi, misafiri şaşırtma ve meraklandırma açısından işlev görür. "Neden salatalık var?" sorusu, gin kültürüne giriş konuşmasının başlangıcıdır.`
      }
    ],
    hammadde: `11 botanik (ardıç, kişniş, melek otu, çuha çiçeği kökü, limon kabuğu, portakal kabuğu, badem, çay, zencefil, yılan kökü, kastoreum) + salatalık ve gül yaprakları infüzyonu`,
    uretim_sureci: `İki farklı still (Bennet ve Carter-Head) paralel damıtır. Damıtma sonrası salatalık ve gül infüzyonu eklenir.`,
    dinlendirme: `Dinlendirilmez.`,
    renk: `Kristal berrak.`,
    koku: `Taze salatalık, gül, ardıç, çiçeksi notlar. Serin ve davetkar.`,
    tat: `Narin ve çiçeksi. Salatalık ferahlaması belirgin, ardıç arka planda. London Dry'dan çok farklı.`,
    finish: `Temiz, hafif çiçeksi ve taze bitiş.`,
    vucut: 'Light to Medium body',
    rakon: 'mix',
    sek_detay: {
      kadeh: 'Copa de Balon (balon kadeh)',
      sicaklik: `Çok soğuk`,
      miktar: '50 ml',
      hazirlik: `Klasik servis: balon kadehin içinde büyük buz, tonic ve salatalık dilimi. Limon değil, salatalık.`
    },
    mix_detay: [
      {
        isim: `Hendrick's G&T`,
        malzemeler: [`50 ml Hendrick's`, '150 ml Premium Tonic', 'Salatalık dilimi (3-4 adet)', 'Buz'],
        hazirlanis: `Balon kadehin içine büyük buz ekle. Hendrick's'i dök. Toniği yavaşça ekle. Salatalık dilimleriyle süsle.`,
        neden: `Salatalık, Hendrick's'in salatalık infüzyonunu tamamlar; bu servis yöntemi markanın kendi önerisidir.`,
        ortam: `Yaz bahçesi, aperitif saati, hafif ve ferah bir akşam.`
      }
    ],
    yiyecek: `Salatalık sandviçleri, hafif sebzeli mezeler, keçi peyniri, füme somon.`,
    muzik_his: `İngiliz indie, pastoral, yaz bahçesi ve kır partisi.`,
    mevsim: `İlkbahar ve yaz`,
    abv_range: '41.4 - 44',
    standart_porsiyon: '50',
    kafa_dozu: { hafif: '1-2 kadeh', ideal: '3 kadeh', limit_ustu: '4+ kadeh', ertesi_gun: 2 },
    etki_hizi: 'Hızlı (15-20 dk)',
    metabolizma: 'Hızlı',
    baslangic_onerileri: [`Hendrick's Gin`],
    orta_seviye: [`Hendrick's Lunar`, `Hendrick's Midsummer Solstice`],
    premium: [`Hendrick's Grand Cabaret`],
    fiyat_araligi: '800 - 1400',
    nereden_alinir: `Viski ve gin mağazaları, premium barlar.`,
    pop_kultur: `Contemporary gin'in anne babası. Salatalık diliminin servis geleneğini başlatan marka.`,
    yanlis_bilinenler: `"Çiçeksi profil zayıflıktır" önyargısı. Hendrick's'in narin yapısı, klasik London Dry'dan farklı ama eşdeğer bir kompleksite taşır.`,
    sozler: '"Peculiar indeed."'
  },
  {
    id: 'monkey-47',
    name: 'Monkey 47',
    emoji: '🍸',
    color: '#1a3320',
    aliases: ['Monkey', 'Schwarzwald Gin', 'Kara Orman Gini'],
    origin: 'Almanya',
    ana_tur: 'gin',
    alt_tur: 'contemporary',
    gorunum: 'berrak',
    olgunlasma: 'dinlendirilmemiş',
    aroma: ['çam', 'bitkisel', 'ardıç', 'narenciye', 'karmaşık'],
    alkol_seviye: 'sert',
    lore_short: `47 botanik, %47 alkol, Kara Orman'dan. Almanya'nın gin dünyasına verdiği en iyi cevap. Bir şişeyi koklamak bile başlı başına bir deneyimdir; her yudumda önce farklı bir botanik konuşur.`,
    lore_full: [
      {
        baslik: 'Köken',
        metin: `Monkey 47'nin kökeni, 1951'de İkinci Dünya Savaşı'ndan sonra Almanya'da kalan bir İngiliz subayı olan Montgomery Collins'e dayanır. Collins, Kara Orman'a (Schwarzwald) yerleşti ve "Black Forest Dry Gin" üretmeye başladı; yerel botanikleri kullandı ve 47 tanesini bir araya getirdi.\n\nModern Monkey 47, 2006'da Alexander Stein tarafından orijinal tarifi yeniden hayata geçirerek piyasaya sürüldü. Kara Orman botanikleri (çam sürgünleri, böğürtlen, biberiye, kediotu), egzotik kaynaklar ve geleneksel gin botanikleri bir arada; 47 malzeme bu karmaşıklığı açıklar.`
      },
      {
        baslik: 'Yayılma',
        metin: `Monkey 47, başlangıçta küçük ölçekli ve yalnızca Almanya'da dağıtılan bir marka olarak faaliyete geçti. Premium fiyatı ve sınırlı miktarı "gizli hazine" algısı yarattı; bu algı küresel ilgiyi hızla ateşledi.\n\nPernod Ricard'ın 2018'de çoğunluk hissesini satın alması, markanın küresel dağıtıma geçişini sağladı. Ama üretim yeri değişmedi: Almanya, Schwarzwald. Bu coğrafi özgünlük, markanın en büyük değer kaynağı olmaya devam etmektedir.`
      },
      {
        baslik: 'Kültürel Etki',
        metin: `Monkey 47, "daha fazlası her zaman iyidir mi?" sorusunu gin dünyasına taşıdı. 47 botanik, salt "meraklı ve kompleks" demek değildir; bu botaniklerin neden o sayıda seçildiği, hangi profili hedeflediği sorusu tartışma açmaktadır. Tatma deneyimi bu soruyu yanıtlar: Kaotik değil, dengeli bir karmaşıklık.\n\nAlman kalite ve titizlik imajının gin dünyasındaki yansıması olarak Monkey 47, "Alman gini mümkün mü?" sorusuna en güçlü cevaptır. London Dry'ın İngiliz tekeline meydan okuma, öngörülmeden gerçekleşti.`
      },
      {
        baslik: 'Modern Dönem',
        metin: `Distillers Cut serileri her yıl sınırlı sayıda üretilmekte ve o yılın öne çıkan botanik bileşimini paylaşmaktadır. Bu koleksiyonculuk boyutu, marka etrafındaki bağlılığı derinleştirmektedir.\n\nSloe Gin versiyonu (Schwarze Katz) ve diğer varyantlarla Monkey 47 ailesi büyümektedir. Ama ana ürün, 47 botanikli classic, hâlâ markanın özüdür.`
      },
      {
        baslik: `Türkiye ile İlişkisi`,
        metin: `Türkiye'de Monkey 47, gin meraklısının "keşif hiyerarşisinin" üst basamaklarındadır. Tanqueray ya da Bombay'dan sonra, contemporary gin'e geçişin ardından, gerçekten kompleks bir profil arayanlar için Monkey 47 doğal bir adımdır.\n\nFiyatı Türkiye'de oldukça yüksektir; bu durum onu özel bir içki olarak konumlandırır. İstanbul'un premium gin barlarında Monkey 47 standart menüde yer alır ve çoğunlukla "en kompleks gin" olarak tanıtılır. Bu tanıtım hak edilmiştir.`
      }
    ],
    hammadde: `47 botanik (Schwarzwald çam sürgünü, böğürtlen, biberiye, ardıç, limon kabuğu, portakal kabuğu, kubeb, koriander ve daha birçoğu) + nötr tahıl alkolü`,
    uretim_sureci: `Botanikler iki farklı işlemde: önce küçük miktarda distilat, sonra ana damıtma. Ardından doğal Schwarzwald kaynağından su ile seyreltilir.`,
    dinlendirme: `Doğal Schwarzwald suyuyla seyreltmeden önce kısa dinlendirme.`,
    renk: `Kristal berrak.`,
    koku: `Karmaşık ve katmanlı. Çam, böğürtlen, ardıç, portakal, biberiye. Her sniff farklı bir şey söyler.`,
    tat: `Olağanüstü kompleks. 47 botanik sırayla konuşur; ama kaotik değil, dengeli. Hem kuru hem meyveli hem bitkisel.`,
    finish: `Uzun ve gelişen bitiş. Dakikalar sonra hâlâ yeni notlar fark edersiniz.`,
    vucut: 'Full body',
    rakon: 'sek',
    sek_detay: {
      kadeh: 'Glencairn veya küçük brandy balonu',
      sicaklik: '12-15°C',
      miktar: '40 ml',
      hazirlik: `Sek içilmesi şiddetle önerilir. Birkaç damla su da açabilir. G&T olarak da mükemmel.`
    },
    mix_detay: [
      {
        isim: 'Monkey 47 G&T',
        malzemeler: ['50 ml Monkey 47', '150 ml Ferah Tonic', 'Limon kabuğu', 'Bir dal biberiye'],
        hazirlanis: `Balon kadehin içine büyük buz. Monkey 47'yi ekle. Toniği dök. Biberiye dalıyla süsle.`,
        neden: `Kara Orman'ın bitkisel botanikleri, biberiye ile güçlü bir sinerji kurar.`,
        ortam: `Sofistike bir akşam, viski barı düzeyinde bir gin deneyimi.`
      }
    ],
    yiyecek: `Avcı yemekleri (geyik, yaban domuzu), sert peynirler, çam fıstığı, kara orman pastası.`,
    muzik_his: `Klasik Alman müziği, keman, ormanlık bir akşam.`,
    mevsim: `Sonbahar ve kış`,
    abv_range: '47',
    standart_porsiyon: '40',
    kafa_dozu: { hafif: '1 kadeh', ideal: '2 kadeh', limit_ustu: '3+ kadeh', ertesi_gun: 2 },
    etki_hizi: 'Hızlı (15-20 dk)',
    metabolizma: 'Hızlı',
    baslangic_onerileri: ['Monkey 47'],
    orta_seviye: ['Monkey 47 Distillers Cut'],
    premium: ['Monkey 47 Sloe Gin'],
    fiyat_araligi: '1200 - 2000',
    nereden_alinir: `Premium barlar, viski ve gin mağazaları, online sipariş.`,
    pop_kultur: `"En kompleks gin" olarak her gin listesinin zirvesinde. Almanya'nın gin dünyasına gövde gösterisi.`,
    yanlis_bilinenler: `"47 botanik = kaotik tat" önyargısı. Monkey 47'nin başarısı tam da bu botanikleri harmonik bir bütüne dönüştürmesindedir.`,
    sozler: '"47 malzeme, bir karakter."'
  },
  {
    id: 'ethen-gin',
    name: 'Ethen Gin',
    emoji: '🍸',
    color: '#c8a830',
    aliases: ['Ethen', 'Türk Gin'],
    origin: 'Türkiye',
    ana_tur: 'gin',
    alt_tur: 'yerli_craft',
    gorunum: 'berrak',
    olgunlasma: 'dinlendirilmemiş',
    aroma: ['ardıç', 'Ege botanikleri', 'sitrus', 'çiçeksi'],
    alkol_seviye: 'sert',
    lore_short: `Türkiye'nin craft gin sahnesinden yükselen bir isim. Ege'nin bitkisel zenginliği, İstanbul'un kozmopolit bakışı ve yerel botaniklerin uluslararası bir dilde konuşması. "Türkiye'de de iyi gin yapılır mı?" sorusunun en güçlü cevaplarından biri.`,
    lore_full: [
      {
        baslik: 'Köken',
        metin: `Ethen Gin, Türkiye'de craft distillation hareketinin olgunlaşmasıyla birlikte piyasaya çıktı. "Ethen" adı etilenin kimyasal adından gelir; damıtma sürecinde alkolün kimyasal dönüşümüne yapılan bir gönderme.\n\nTürkiye'nin gin sahnesinde yerli marka geliştirme çabası, hem bir iş girişimi hem de bir kültürel iddia olarak okunabilir. Ege ve Anadolu'nun bitkisel zenginliğini uluslararası gin diline çevirmek; lavanta, kekik, mersin ve Türk gülü gibi yerel botanikleri ardıç ile bir araya getirmek, bu markanın temel misyonudur.`
      },
      {
        baslik: 'Yayılma',
        metin: `Ethen Gin, öncelikle İstanbul'un premium bar sahnesiyle tanışarak büyüdü. Yerli ürünlere artan ilgi ve "Türk terroir'ı" tartışmalarının güçlenmesi, markanın dikkat çekmesini kolaylaştırdı.\n\nUluslararası craft gin yarışmalarına katılım ve yurt dışı ihracat denemeleri, Ethen'in yalnızca yerel bir hikaye olmadığını göstermektedir. "Made in Turkey" etiketini gin şişesinde taşımak, hem bir meydan okuma hem de bir gurur meselesidir.`
      },
      {
        baslik: 'Kültürel Etki',
        metin: `Türkiye'de yerli craft alkol üretimi kısıtlı bir yasal çerçevede yürümektedir. Bu ortamda Ethen gibi markaların var olması, sektörün koşullar ne olursa olsun gelişim arayışında olduğunu göstermektedir.\n\nYerel botaniklerle uluslararası bir ürün yaratmak, Türkiye'nin mutfak ve tarım mirasını farklı bir çerçevede sunmaktır. Kekiği yemek yerine içmek; gülü yalnızca görmek değil, damakta hissetmek. Bu dönüşüm, marka kimliğinin özüdür.`
      },
      {
        baslik: 'Modern Dönem',
        metin: `Craft distillation hareketi Türkiye'de büyümektedir. Ethen bu büyümenin öncü isimlerinden biri olarak sektöre hem içerik hem de ilham sunmaktadır.\n\nYerel tarım işletmeleriyle kurulan direkt tedarik ilişkileri ve küçük batch üretim anlayışı, her şişeyi tutarlı ama canlı kılmaktadır. Küçük ölçeğin büyüklüğü buradadır: Her serideki botaniklerin kalitesini doğrudan kontrol edebilmek.`
      },
      {
        baslik: `Türkiye ile İlişkisi`,
        metin: `Türkiye'de gin içmek üstelik yerli bir gin tercih etmek, farkında bir içici kimliğinin işaretidir. Ethen içen biri hem gin kültürüne hem de yerel üreticiye destek verdiğinin bilincindedir.\n\nBu marka, Türkiye'de craft üretiminin mümkün olduğunu ispatlayan örneklerden biridir. Rakı'nın yanına gin; bira'nın yanına yerli craft; ithal markaların yanına Türk üretimi. Bu çeşitlilik, Türk içki kültürünün olgunlaşma sürecinin işaretidir. Ethen Gin bu süreçte küçük ama anlamlı bir yer tutar.`
      }
    ],
    hammadde: `Ardıç meyvesi, Ege botanikleri (lavanta, kekik, mersin), Türk gülü, sitrus kabukları, nötr tahıl alkolü`,
    uretim_sureci: `Küçük batch pot still damıtması. Yerel botaniklerle macerasyon ve/veya vapour infusion.`,
    dinlendirme: `Dinlendirilmez.`,
    renk: `Kristal berrak.`,
    koku: `Ardıç, lavanta, kekik, hafif sitrus. Anadolu doğasının kokusu.`,
    tat: `Dengeli ve botanik odaklı. Yerli bitkisel notlar öne çıkar; ardıç omurga sağlar.`,
    finish: `Orta uzunlukta, bitkisel ve hoş.`,
    vucut: 'Medium body',
    rakon: 'mix',
    sek_detay: {
      kadeh: 'Copa kadehi',
      sicaklik: `Soğuk`,
      miktar: '45-50 ml',
      hazirlik: `G&T olarak Türk botaniklerini tamamlayan nötr bir tonic ile.`
    },
    mix_detay: [
      {
        isim: 'Ethen G&T',
        malzemeler: ['50 ml Ethen Gin', '150 ml Tonic', 'Lavanta dalı veya kekik', 'Portakal dilimi', 'Buz'],
        hazirlanis: `Copa kadehin içine buz, Ethen Gin, tonic. Lavanta veya kekik dalıyla süsle.`,
        neden: `Yerli botaniklerin G&T formatındaki en saf ifadesi. Lavanta ile servis, Ege ruhunu masaya taşır.`,
        ortam: `Türk misafirperverliği, yerel ve uluslararası buluşma.`
      }
    ],
    yiyecek: `Türk mezeleri, zeytinler, otlu peynirler, deniz ürünleri.`,
    muzik_his: `Türk indie, Ege rüzgarı, İstanbul'un modern sahnesi.`,
    mevsim: `İlkbahar ve yaz`,
    abv_range: '42 - 45',
    standart_porsiyon: '50',
    kafa_dozu: { hafif: '1-2 kadeh', ideal: '3 kadeh', limit_ustu: '4+ kadeh', ertesi_gun: 2 },
    etki_hizi: 'Hızlı (15-20 dk)',
    metabolizma: 'Hızlı',
    baslangic_onerileri: ['Ethen Gin'],
    orta_seviye: ['Ethen Gin sezonluk sürümler'],
    premium: ['Ethen Gin özel batch'],
    fiyat_araligi: '700 - 1200',
    nereden_alinir: `Premium barlar, craft içki mağazaları, üretici web sitesi.`,
    pop_kultur: `Türkiye'nin craft gin sahnesinin öne çıkan yüzlerinden biri. "Yerli ve milli" gin tartışmasının somut cevabı.`,
    yanlis_bilinenler: `"Türkiye'de iyi gin yapılamaz" önyargısı. Ethen bu önyargıya pratik bir yanıt sunmaktadır.`,
    sozler: '"Bu toprakların botanikleri, dünya sahnesine taşınmayı hak ediyor."'
  }
];
