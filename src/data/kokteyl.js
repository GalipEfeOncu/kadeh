export const kokteyl = [
  {
    id: 'negroni',
    name: 'Negroni',
    emoji: '🥃',
    color: '#d60000',
    aliases: ['İtalyan Klasiği'],
    origin: 'İtalya',
    ana_tur: 'kokteyl',
    alt_tur: 'spirit_forward',
    gorunum: 'berrak',
    olgunlasma: 'dinlendirilmemiş',
    aroma: ['acı portakal', 'ardıç', 'baharat', 'kuru üzüm'],
    alkol_seviye: 'sert',
    lore_short: 'Tarihin en saygın ve asil kokteyli. Gin, tatlı vermut ve Campari\'nin 1-1-1 oranındaki sihirli dansı. Acı, tatlı ve güçlü.',
    lore_full: [
      {
        baslik: 'Köken',
        metin: '1919 yılında İtalya\'nın Floransa kentindeki Caffè Casoni\'de doğdu. Kont Camillo Negroni, barmenden her zaman içtiği "Americano" kokteylini (Campari, Vermut, Soda) biraz sertleştirmesini istedi. Barmen Fosco Scarselli, soda yerine Gin koydu. Ortaya çıkan bu yeni formül, kokteyl tarihini değiştirdi.'
      },
      {
        baslik: 'Kültürel Etki',
        metin: 'Negroni, bir içicinin "damak olgunluğunu" test eden içkidir. Yeni başlayanlar için çok acı ve sert gelir. Ancak bir kez alışıldığında, dünyanın en kusursuz ve dengeli içkisi olduğu anlaşılır. "Barmenlerin en sevdiği kokteyl" unvanına sahiptir.'
      },
      {
        baslik: 'Türkiye ile İlişkisi',
        metin: 'Son 5 yılda İstanbul ve diğer büyük şehirlerdeki kokteyl kültürünün patlamasıyla en çok sipariş edilen "havalı" içki haline geldi.'
      }
    ],
    hammadde: 'Gin, Campari, Tatlı Kırmızı Vermut (Sweet Vermouth).',
    uretim_sureci: 'Yap (build) tekniği. Bardağın içinde karıştırılır.',
    dinlendirme: 'Bazı barlar "Barrel Aged Negroni" (Fıçıda dinlenmiş) versiyonlarını yapar.',
    renk: 'Parlak ve derin kırmızı.',
    koku: 'Acı portakal, ardıç (gin), karanfil ve tarçın (vermut).',
    tat: 'İlk yudumda tatlı vermutun baharatlı meyveliği, ardından cinin sert botanik vuruşu ve finalde Campari\'nin uzun süren acılığı (bitterliği).',
    finish: 'Uzun, kuru, acı ve temizleyici.',
    vucut: 'Medium body',
    rakon: 'sek',
    sek_detay: {
      kadeh: 'Rock glass (Kısa viski kadehi)',
      sicaklik: 'Buzlu',
      miktar: '90 ml',
      hazirlik: 'Tek bir büyük parça (clear) buz ile.'
    },
    mix_detay: [
      {
        isim: 'Orijinal Negroni Reçetesi',
        malzemeler: ['30 ml London Dry Gin', '30 ml Campari', '30 ml Sweet Vermouth (Tatlı Kırmızı Vermut)', 'Portakal Kabuğu'],
        hazirlanis: 'Büyük bir buz kübü konmuş bardağa tüm malzemeleri dökün. Kaşıkla 20-30 saniye kadar (buz eriyip içkiyi seyreltene kadar) yavaşça karıştırın. Portakal kabuğunun yağını kadehin üzerinde sıkıp içine bırakın.',
        neden: '1:1:1 oranı, dünyadaki en hatasız formüldür. Gin omurgayı, Vermut gövdeyi, Campari ise karakteri oluşturur.',
        ortam: 'Akşam yemeği öncesi, şık bir bar, sofistike bir gece.'
      }
    ],
    yiyecek: 'Peynir tabakları, zeytin, şarküteri, tuzlu krakerler.',
    muzik_his: 'Jazz, klasik, İtalyan romantizmi.',
    mevsim: 'Her mevsim',
    abv_range: '24',
    standart_porsiyon: '90',
    kafa_dozu: { hafif: '1 kadeh', ideal: '2 kadeh', limit_ustu: '3+ kadeh', ertesi_gun: 2 },
    etki_hizi: 'Orta (20 dk)',
    metabolizma: 'Orta',
    baslangic_onerileri: ['Boulevardier (Gin yerine Viski)'],
    orta_seviye: ['Klasik Negroni'],
    premium: ['Mezcal Negroni'],
    fiyat_araligi: '400 - 600',
    nereden_alinir: 'Tüm kokteyl barları.',
    pop_kultur: 'Stanley Tucci\'nin karantina günlerinde Instagram\'da Negroni yaptığı video milyonlarca izlenmiştir.',
    yanlis_bilinenler: 'Shaker\'da çalkalanarak yapılacağı sanılır. Ancak içinde narenciye suyu olmayan tüm kokteyller (Negroni, Old Fashioned vb.) sadece kaşıkla karıştırılır (Stir).',
    sozler: '"A balance of bitterness, sweetness, and botanical strength."'
  },
  {
    id: 'old-fashioned',
    name: 'Old Fashioned',
    emoji: '🥃',
    color: '#8b4513',
    aliases: ['Klasik', 'Eski Usül'],
    origin: 'ABD',
    ana_tur: 'kokteyl',
    alt_tur: 'spirit_forward',
    gorunum: 'amber',
    olgunlasma: 'dinlendirilmemiş',
    aroma: ['viski', 'portakal yağı', 'baharat', 'şeker'],
    alkol_seviye: 'sert',
    lore_short: 'Kokteyl kelimesinin sözlük anlamı. Sadece 4 malzeme: Viski, şeker, bitter (acı damla) ve su. Sadeliğin ulaştığı en yüksek zirve.',
    lore_full: [
      {
        baslik: 'Köken',
        metin: '1806 tarihli bir gazetede "kokteyl" kelimesi şu şekilde tanımlanmıştır: "Alkol, şeker, su ve bitterden oluşan canlandırıcı bir likör." 1880\'lerde barmenler kokteylleri çok karmaşık hale getirdiğinde, müşteriler "bana eski usul (old fashioned) bir kokteyl yap" demeye başladılar.'
      },
      {
        baslik: 'Kültürel Etki',
        metin: 'Mad Men dizisindeki Don Draper karakteriyle 2000\'lerde muazzam bir geri dönüş yaşadı ve "Erkeksi, güçlü, klasik" imajını pekiştirdi.'
      },
      {
        baslik: 'Türkiye ile İlişkisi',
        metin: 'Türkiye\'de viski severlerin kokteyle geçerken en çok güvendiği kapıdır. "İçinde tatlı şuruplar olmasın, viskinin tadını alayım" diyenlerin siparişidir.'
      }
    ],
    hammadde: 'Bourbon veya Rye viski, Şeker (veya şurup), Angostura Bitter.',
    uretim_sureci: 'Bardağın içinde karıştırma (Build).',
    dinlendirme: 'Dinlendirilmez.',
    renk: 'Koyu kehribar.',
    koku: 'Viskinin kendi meşe notalarına eklenen portakal kabuğu yağı ve aromatik baharatlar.',
    tat: 'Tatlı bir ilk dokunuş (şeker), hemen ardından viskinin ısısı ve bitterin verdiği baharatlı derinlik.',
    finish: 'Uzun, sıcak ve odunsu.',
    vucut: 'Medium body',
    rakon: 'sek',
    sek_detay: {
      kadeh: 'Old Fashioned kadehi (Rock)',
      sicaklik: 'Buzlu',
      miktar: '60 ml',
      hazirlik: 'Büyük buz, portakal kabuğu süslemesi.'
    },
    mix_detay: [
      {
        isim: 'Klasik Old Fashioned',
        malzemeler: ['60 ml Bourbon (örn: Buffalo Trace) veya Çavdar (Rye) Viskisi', '1 Küp şeker (veya 5 ml basit şurup)', '2-3 dash (damla) Angostura Bitter', 'Portakal kabuğu'],
        hazirlanis: 'Bardağa şekeri ve bitteri koyun. Biraz su ekleyip şekeri ezin (veya şurup kullanın). Viskinin yarısını koyup buz ekleyin, karıştırın. Viskinin kalanını koyup karıştırmaya devam edin. Portakal kabuğunun yağını kadehe sıkın.',
        neden: 'Bu tarif viskinin tadını örtmez, tam tersine onun en iyi yönlerini (vanilya, meşe) öne çıkarır ve keskinliğini törpüler.',
        ortam: 'Deri koltuk, puro, sessiz sohbet.'
      }
    ],
    yiyecek: 'Puro, füme etler, tuzlu krakerler.',
    muzik_his: 'Klasik caz, blues, lo-fi.',
    mevsim: 'Sonbahar ve Kış',
    abv_range: '32',
    standart_porsiyon: '60',
    kafa_dozu: { hafif: '1 kadeh', ideal: '2 kadeh', limit_ustu: '3+ kadeh', ertesi_gun: 2 },
    etki_hizi: 'Orta (20 dk)',
    metabolizma: 'Orta',
    baslangic_onerileri: ['Bourbon Old Fashioned'],
    orta_seviye: ['Rye Old Fashioned (Daha baharatlı)'],
    premium: ['Rum Old Fashioned (Aged rom ile)'],
    fiyat_araligi: '400 - 600',
    nereden_alinir: 'Barlar.',
    pop_kultur: 'Don Draper (Mad Men).',
    yanlis_bilinenler: 'İçine ezilmiş meyve (kiraz, portakal dilimi) konulduğu sanılır; bu Prohibition döneminde kötü viskiyi saklamak için uydurulan bir Amerikan icadıdır, gerçek Old Fashioned meyve salatası değildir.',
    sozler: '"Make it Old Fashioned."'
  },
  {
    id: 'margarita',
    name: 'Margarita',
    emoji: '🍸',
    color: '#f4f4dc',
    aliases: ['Margarita', 'Tequila Kokteyli'],
    origin: 'Meksika / ABD',
    ana_tur: 'kokteyl',
    alt_tur: 'sour',
    gorunum: 'berrak',
    olgunlasma: 'dinlendirilmemiş',
    aroma: ['agav', 'lime (misket limonu)', 'portakal', 'tuz'],
    alkol_seviye: 'orta',
    lore_short: 'Kuzey Amerika\'nın en popüler kokteyli. Tekila, portakal likörü ve misket limonu suyunun tuzlu bir kadeh kenarıyla buluştuğu mükemmel ekşi deneyimi.',
    lore_full: [
      {
        baslik: 'Köken',
        metin: '1930\'lar ve 40\'larda Meksika-ABD sınırı civarında, "Daisy" (İngilizce\'de papatya, İspanyolca\'da Margarita) adlı geleneksel bir kokteyl formülünün (İçki + Portakal Likörü + Narenciye) tekila kullanılarak uyarlanmasıyla ortaya çıktı.'
      },
      {
        baslik: 'Kültürel Etki',
        metin: 'Meksika restoranlarının, Cinco de Mayo kutlamalarının ve yaz tatillerinin resmi içeceğidir. Donmuş (Frozen) versiyonları turistik yerlerin vazgeçilmezidir.'
      },
      {
        baslik: 'Türkiye ile İlişkisi',
        metin: 'Türkiye\'de "Tatlı-Ekşi kadın kokteyli" gibi yanlış bir imaja sahip olsa da, aslında iyi bir Margarita oldukça sert ve ekşidir. Kokteyl barlarında en çok sipariş edilen 3 içkiden biridir.'
      }
    ],
    hammadde: 'Blanco Tekila, Cointreau (veya Triple Sec), Taze Lime Suyu.',
    uretim_sureci: 'Shaker ile çalkalama (Shake).',
    dinlendirme: 'Dinlendirilmez.',
    renk: 'Bulanık beyazımsı/yeşilimsi.',
    koku: 'Keskin lime asiditesi, tekilanın agav kokusu ve portakal.',
    tat: 'Dudaktaki tuzla başlayan, anında vuran güçlü bir ekşilik ve arkasından gelen tekila sıcaklığı. Tatlılık sadece asiditeyi dengelemek içindir.',
    finish: 'Kuru, ferahlatıcı ve tuzlu.',
    vucut: 'Medium body',
    rakon: 'mix',
    sek_detay: {
      kadeh: 'Margarita kadehi veya Coupe',
      sicaklik: 'Soğuk (Buzsuz servis edilir)',
      miktar: '90 ml',
      hazirlik: 'Kadehin kenarının yarısı (hepsi değil) tuzlanır.'
    },
    mix_detay: [
      {
        isim: 'Klasik Margarita',
        malzemeler: ['50 ml %100 Agav Blanco Tekila (örn: Olmeca Altos)', '20 ml Cointreau', '20 ml Taze Lime Suyu', 'Bardak kenarı için tuz'],
        hazirlanis: 'Kadehin dış kenarını lime ile ıslatıp tuza batırın. Tekila, Cointreau ve lime suyunu shaker\'da bol buzla 10 saniye sertçe çalkalayın. Kadehe süzün.',
        neden: 'Şeker şurubuna ihtiyaç yoktur, tatlılığı Cointreau sağlar. Tekilanın otsu yapısı lime asidiyle birleştiğinde dünyanın en ferahlatıcı ekşisi ortaya çıkar.',
        ortam: 'Taco gecesi, sahil partisi.'
      }
    ],
    yiyecek: 'Meksika yemekleri, nachos, guacamole, ceviche.',
    muzik_his: 'Mariachi, Latin Pop, neşeli yaz şarkıları.',
    mevsim: 'Yaz',
    abv_range: '26',
    standart_porsiyon: '90',
    kafa_dozu: { hafif: '1 kadeh', ideal: '3 kadeh', limit_ustu: '4+ kadeh', ertesi_gun: 3 },
    etki_hizi: 'Çok Hızlı (10 dk)',
    metabolizma: 'Hızlı',
    baslangic_onerileri: ['Tommy\'s Margarita (Cointreau yerine agav şurubu kullanılır, daha kolay içimlidir)'],
    orta_seviye: ['Klasik Margarita'],
    premium: ['Mezcal Margarita'],
    fiyat_araligi: '350 - 500',
    nereden_alinir: 'Barlar.',
    pop_kultur: 'Kendi kadeh şekline (Margarita glass - iki katlı geniş kase) sahip nadir kokteyllerdendir.',
    yanlis_bilinenler: 'Bardağın tüm kenarının tuza bulanması gerektiği sanılır; doğrusu sadece dış yüzeyin yarısının tuzlanmasıdır ki, içen kişi tuzu isteyip istemediğini ayarlayabilsin.',
    sozler: '"Salt, lime, and a good time."'
  },
  {
    id: 'daiquiri',
    name: 'Daiquiri',
    emoji: '🍸',
    color: '#e6f0c2',
    aliases: ['Küba Ekşisi'],
    origin: 'Küba',
    ana_tur: 'kokteyl',
    alt_tur: 'sour',
    gorunum: 'berrak',
    olgunlasma: 'dinlendirilmemiş',
    aroma: ['beyaz rom', 'lime', 'şeker'],
    alkol_seviye: 'orta',
    lore_short: 'Küba\'nın miksoloji dünyasına en büyük armağanı. Sadece üç malzeme: Beyaz rom, taze lime ve şeker. Bir barmenin yeteneğini ölçen test içkisidir.',
    lore_full: [
      {
        baslik: 'Köken',
        metin: '1898\'de Küba\'nın Daiquirí adlı maden kasabasında Amerikalı maden mühendisi Jennings Cox tarafından icat edildiği söylenir. Aslında rom, şeker ve limon, Karayip denizcilerinin yüzyıllardır içtiği bir karışımdı (Grog).'
      },
      {
        baslik: 'Kültürel Etki',
        metin: 'Ernest Hemingway, Havana\'daki El Floridita barında oturup şekersiz, çift romlu (Papa Doble) versiyonundan peş peşe içmesiyle bu kokteyli efsaneleştirmiştir.'
      },
      {
        baslik: 'Türkiye ile İlişkisi',
        metin: 'Turistik mekanlarda blenderda buzla ezilmiş, şuruplu ve şekerli "Çilekli Daiquiri" (Frozen) olarak tanınır. Klasik kokteyl barlarında ise sek ve orijinal versiyonu saygı görür.'
      }
    ],
    hammadde: 'Beyaz Rom (örn: Havana Club 3), Taze Lime, Şeker Şurubu.',
    uretim_sureci: 'Sert çalkalama (Shake).',
    dinlendirme: 'Dinlendirilmez.',
    renk: 'Soluk yeşilimsi beyaz.',
    koku: 'Taze kesilmiş lime, romun meyvemsi ve vanilyalı hafif notası.',
    tat: 'Mükemmel denge (Sweet & Sour). Asla çok ekşi veya çok tatlı olmamalı. Romun tadı arkadan gelmeli.',
    finish: 'Çok keskin, ferahlatıcı ve temiz.',
    vucut: 'Light to Medium body',
    rakon: 'sek',
    sek_detay: {
      kadeh: 'Coupe kadehi',
      sicaklik: 'Çok Soğuk (Buzsuz servis edilir)',
      miktar: '90 ml',
      hazirlik: 'Kadeh önceden mutlaka soğutulmalıdır.'
    },
    mix_detay: [
      {
        isim: 'Klasik Daiquiri',
        malzemeler: ['60 ml Beyaz Rom', '30 ml Taze Lime Suyu', '15 ml Basit Şurup'],
        hazirlanis: 'Tüm malzemeleri shakerda bol buzla 10-12 saniye çok sert çalkalayın. (Soğukluk bu içkinin can damarıdır). Soğutulmuş coupe kadehine süzün.',
        neden: 'Kutsal üçlü (İçki, Asit, Şeker) dengesinin en çıplak halidir. Saklanacak hiçbir yer yoktur; malzeme kötüyse veya oran bozuksa içki çöker.',
        ortam: 'Yaz akşamüstü, Havana rüyası.'
      }
    ],
    yiyecek: 'Deniz ürünleri, hafif tapas.',
    muzik_his: 'Küba cazı, Buena Vista Social Club.',
    mevsim: 'Yaz',
    abv_range: '20',
    standart_porsiyon: '90',
    kafa_dozu: { hafif: '1-2 kadeh', ideal: '3 kadeh', limit_ustu: '4+ kadeh', ertesi_gun: 2 },
    etki_hizi: 'Hızlı (15 dk)',
    metabolizma: 'Hızlı',
    baslangic_onerileri: ['Çilekli Daiquiri (Frozen)'],
    orta_seviye: ['Klasik Daiquiri'],
    premium: ['Hemingway Daiquiri (Maraschino ve greyfurt eklenir)'],
    fiyat_araligi: '350 - 500',
    nereden_alinir: 'Barlar.',
    pop_kultur: 'Hemingway\'in yazma yakıtı.',
    yanlis_bilinenler: 'Daiquiri\'nin buzlaşmalı (slushie) tatlı bir çilek içeceği olduğu sanılır; orijinali son derece şık, asidik ve yetişkin bir içkidir.',
    sozler: '"My mojito in La Bodeguita, my daiquiri in El Floridita." (Hemingway)'
  },
  {
    id: 'gin-tonic',
    name: 'Gin & Tonic',
    emoji: '🧊',
    color: '#e0ffff',
    aliases: ['G&T', 'Cin Tonik'],
    origin: 'Hindistan (İngiliz Kolonisi)',
    ana_tur: 'kokteyl',
    alt_tur: 'highball',
    gorunum: 'berrak',
    olgunlasma: 'dinlendirilmemiş',
    aroma: ['ardıç', 'kinin (acı)', 'sitrus', 'botanik'],
    alkol_seviye: 'hafif_orta',
    lore_short: 'Dünyanın en çok içilen ikili karışımlarından biri. Basit, canlandırıcı ve kusursuz. Kinin acılığı ile ardıç aromasının efsanevi dostluğu.',
    lore_full: [
      {
        baslik: 'Köken',
        metin: '19. yüzyılda Hindistan\'daki İngiliz askerleri ve yöneticileri sıtmaya (malaria) karşı korunmak için kinin tozu tüketmek zorundaydı. Kinin aşırı acı olduğu için bunu şeker, su, limon ve gin ile karıştırarak içilebilir hale getirdiler.'
      },
      {
        baslik: 'Kültürel Etki',
        metin: 'İspanya\'da 2000\'lerde başlayan "Gin Tonica" devrimiyle, basit bir karışım olmaktan çıkıp balon kadehlerde bol taze botanikle sunulan bir gastronomi deneyimine dönüştü.'
      },
      {
        baslik: 'Türkiye ile İlişkisi',
        metin: 'Gece hayatının ve plajların tartışmasız en risksiz, en ferah siparişidir. Kalorisinin düşük olduğu düşüncesiyle (tonikteki şekeri unutarak) çok tercih edilir.'
      }
    ],
    hammadde: 'London Dry Gin (örn: Tanqueray, Bombay), Premium Tonik Suyu, Garnitür (Limon/Salatalık/Biberiye).',
    uretim_sureci: 'Bardağın içinde yapım (Build).',
    dinlendirme: 'Dinlendirilmez.',
    renk: 'Kristal berrak, kabarcıklı.',
    koku: 'Seçilen cinin botaniği ve narenciye tazeliği.',
    tat: 'Tonikten gelen tatlımsı kinin acılığı ve cinin botanik (ardıç) omurgası. Ferahlatıcı bir acılık.',
    finish: 'Uzun, asidik, gazlı ve temizleyici.',
    vucut: 'Light body',
    rakon: 'mix',
    sek_detay: {
      kadeh: 'Highball (Uzun) veya Copa (Balon) kadehi',
      sicaklik: 'Çok Soğuk',
      miktar: '200 ml',
      hazirlik: 'Ağzına kadar büyük buz küpleriyle doldurulmuş bardakta.'
    },
    mix_detay: [
      {
        isim: 'Mükemmel G&T (İspanyol Stili)',
        malzemeler: ['50 ml Gin', '150 ml Premium Tonic Water', 'Garnitür (Hendrick\'s için Salatalık, Bombay için Limon)'],
        hazirlanis: 'Balon kadehi buzla doldurun. Cini ekleyin. Toniği yavaşça (mümkünse bir kaşık üzerinden kaydırarak gazını kaçırmadan) dökün. Sadece bir kez nazikçe karıştırın.',
        neden: 'İyi bir G&T\'nin sırrı oranda (1:3 veya 1:4) ve buzun kalitesindedir. Asla ucuz tonik kullanılmamalıdır, çünkü içkinin %75\'i toniktir.',
        ortam: 'Her an, her yerde.'
      }
    ],
    yiyecek: 'Kuruyemiş, zeytin, hafif mezeler.',
    muzik_his: 'Pop, House, bar uğultusu.',
    mevsim: 'İlkbahar ve Yaz',
    abv_range: '10',
    standart_porsiyon: '200',
    kafa_dozu: { hafif: '2 kadeh', ideal: '4 kadeh', limit_ustu: '6+ kadeh', ertesi_gun: 1 },
    etki_hizi: 'Orta (20 dk)',
    metabolizma: 'Hızlı',
    baslangic_onerileri: ['Klasik Gin & Tonic'],
    orta_seviye: ['Pembe Cin Tonik (Aromalı cinlerle)'],
    premium: ['Premium Botanik G&T'],
    fiyat_araligi: '300 - 500',
    nereden_alinir: 'Her yerde.',
    pop_kultur: '"Sıtmayı önlediği için tıbbi bir mecburiyettir" şakası her barda yapılır.',
    yanlis_bilinenler: 'Toniğin sadece asitli su olduğu sanılır; içinde şeker ve "kinin" (ağaç kabuğu özü) vardır, bu da ona kendine has acımtırak tadı verir.',
    sozler: '"Save water, drink gin and tonic."'
  },
  {
    id: 'mojito',
    name: 'Mojito',
    emoji: '🌿',
    color: '#e0ffd4',
    aliases: ['Mohito'],
    origin: 'Küba',
    ana_tur: 'kokteyl',
    alt_tur: 'highball',
    gorunum: 'berrak',
    olgunlasma: 'dinlendirilmemiş',
    aroma: ['nane', 'lime', 'beyaz rom', 'şeker'],
    alkol_seviye: 'hafif_orta',
    lore_short: 'Dünyanın en ferah kokteyli. Taze nane, lime, esmer şeker ve beyaz romun Karayip sıcaklarına karşı en iyi savunması.',
    lore_full: [
      {
        baslik: 'Köken',
        metin: '16. yüzyılda Küba\'yı vuran İngiliz korsan Francis Drake\'in mürettebatı hastalandığında, yerel yerliler onlara aguardiente (ilkel rom), lime, şeker kamışı suyu ve nane karışımından bir ilaç verdiler ("El Draque"). Modern Mojito, Bacardi rumun sahneye çıkmasıyla bu formülün rafine edilmiş halidir.'
      },
      {
        baslik: 'Kültürel Etki',
        metin: 'Havana\'daki La Bodeguita del Medio barı, bu kokteylin mabedi kabul edilir. Yaz mevsiminde dünya genelinde barmenlerin en çok yaptığı (ve hazırlaması zahmetli olduğu için en çok söylendiği) kokteyldir.'
      },
      {
        baslik: 'Türkiye ile İlişkisi',
        metin: 'Yazlık beldelerin, plajların ve tatil köylerinin kraliçesidir. Kötü yapıldığında dişlerinize nane parçaları yapışan tatlı bir şuruba döner; iyi yapıldığında ise şaheserdir.'
      }
    ],
    hammadde: 'Beyaz Rom, Taze Nane, Taze Lime, Esmer Şeker (veya şurup), Soda.',
    uretim_sureci: 'Ezme (Muddle) ve Bardağın içinde yapım (Build).',
    dinlendirme: 'Dinlendirilmez.',
    renk: 'Açık yeşil, buzlu ve şeffaf.',
    koku: 'Taze ezilmiş nane yaprakları ve misket limonu.',
    tat: 'Çok ferah, tatlı ve asidik. Rom, nane aromasının taşıyıcısı görevini görür.',
    finish: 'Uzun, naneli ve serinletici.',
    vucut: 'Light body',
    rakon: 'mix',
    sek_detay: {
      kadeh: 'Highball (Uzun) veya Collins kadehi',
      sicaklik: 'Buzlu (Kırık buz tavsiye edilir)',
      miktar: '200 ml',
      hazirlik: 'Nane ve lime bardakta ezilir, üzeri buzla doldurulur.'
    },
    mix_detay: [
      {
        isim: 'Klasik Mojito',
        malzemeler: ['50 ml Beyaz Rom (örn: Bacardi)', 'Yarım Lime (4 parçaya bölünmüş)', '2 tatlı kaşığı esmer şeker', '8-10 taze nane yaprağı', 'Soda'],
        hazirlanis: 'Bardağın dibinde lime parçalarını ve şekeri tokmakla ezin (şeker erisin). Nane yapraklarını avucunuzda bir kez şaplatıp bardağa atın (çok ezip parçalamayın, acılaşır). Rom ekleyin, kırık buz doldurun, alttan üste doğru karıştırın. Üzerini sodayla tamamlayın.',
        neden: 'Mükemmel denge: Şeker ve asit dengelenir, nane ferahlık katar, rom ruhu verir, buz ve soda susuzluğu giderir.',
        ortam: 'Gündüz plaj partisi, sıcak bir yaz akşamı.'
      }
    ],
    yiyecek: 'Tropikal meyveler, hafif deniz ürünleri.',
    muzik_his: 'Latin, Salsa, Reggae.',
    mevsim: 'Yaz',
    abv_range: '13',
    standart_porsiyon: '200',
    kafa_dozu: { hafif: '2 kadeh', ideal: '4 kadeh', limit_ustu: '6+ kadeh', ertesi_gun: 1 },
    etki_hizi: 'Orta (20 dk)',
    metabolizma: 'Hızlı',
    baslangic_onerileri: ['Meyveli Mojito (Çilek, Karpuz)'],
    orta_seviye: ['Klasik Mojito'],
    premium: ['Aged Rum Mojito'],
    fiyat_araligi: '350 - 500',
    nereden_alinir: 'Her bar ve kafede.',
    pop_kultur: 'Miami Vice dizisinde ve James Bond (Die Another Day) filminde boy göstermiştir.',
    yanlis_bilinenler: 'Nanenin havan tokmağıyla parçalanarak ezilmesi gerektiği sanılır; bu bitkinin acı (klorofil) salmasına neden olur. Nane sadece hafifçe bastırılmalı veya tokatlanmalıdır.',
    sozler: '"Summer in a glass."'
  },
  {
    id: 'espresso-martini',
    name: 'Espresso Martini',
    emoji: '☕',
    color: '#362312',
    aliases: ['Kahveli Kokteyl'],
    origin: 'İngiltere',
    ana_tur: 'kokteyl',
    alt_tur: 'spirit_forward',
    gorunum: 'opak',
    olgunlasma: 'dinlendirilmemiş',
    aroma: ['espresso', 'vanilya', 'kavrulmuş kahve', 'tatlı'],
    alkol_seviye: 'orta',
    lore_short: '"Beni uyandır ve sonra sarhoş et" (Wake me up, and then f*ck me up). Bu efsanevi sipariş üzerine 1980\'lerde Londra\'da yaratılan modern klasik.',
    lore_full: [
      {
        baslik: 'Köken',
        metin: '1983 yılında Londra\'daki Soho Brasserie\'de ünlü barmen Dick Bradsell tarafından yaratıldı. Söylentiye göre ünlü bir top model (bazıları Kate Moss veya Naomi Campbell olduğunu iddia eder) bara gelip kendisini canlandıracak bir içki istemiş, Bradsell de kahve makinesinden yeni çekilmiş espresso, votka ve kahve likörünü shaker\'da çalkalayarak bu efsaneyi yaratmıştır.'
      },
      {
        baslik: 'Kültürel Etki',
        metin: 'Dünya genelinde akşam yemeklerinden sonra en çok tercih edilen kokteyldir. Kahve bağımlılığı ile kokteyl kültürünü birleştirerek devasa bir hit olmuştur.'
      },
      {
        baslik: 'Türkiye ile İlişkisi',
        metin: 'Şık restoranların ve mekanların gece yarısı enerji toplayıcı içkisidir. Red Bull & Votka\'nın sofistike, elit ve lezzetli versiyonu olarak görülür.'
      }
    ],
    hammadde: 'Votka, Kahve Likörü (Kahlua), Taze Sıcak Espresso, Basit Şurup.',
    uretim_sureci: 'Çok sert çalkalama (Shake) - köpük (crema) yaratmak için.',
    dinlendirme: 'Dinlendirilmez.',
    renk: 'Koyu kahverengi/siyah, üstünde kalın bej rengi köpük.',
    koku: 'Yoğun, taze çekilmiş kahve, vanilya ve çikolata.',
    tat: 'Soğuk bir espresso. Votka tamamen arkada kaybolur, kahvenin acılığı ve likörün tatlılığı muazzam bir denge oluşturur.',
    finish: 'Uzun, uyanık tutan, kahve kavrukluğu.',
    vucut: 'Medium body',
    rakon: 'sek',
    sek_detay: {
      kadeh: 'Martini kadehi veya Coupe',
      sicaklik: 'Çok Soğuk',
      miktar: '90 ml',
      hazirlik: 'Üzerinde mutlaka 3 adet kahve çekirdeği süslemesi olur.'
    },
    mix_detay: [
      {
        isim: 'Klasik Espresso Martini',
        malzemeler: ['50 ml Votka', '25 ml Kahve Likörü (Kahlúa)', '25 ml Sıcak Espresso (Taze yapılmış)'],
        hazirlanis: 'Sıcak espresso ve buzun shaker\'da yarattığı şok, kokteylin o meşhur köpüğünü (crema) oluşturur. Bu yüzden en az 15-20 saniye çok agresif şekilde çalkalayın. Soğutulmuş kadehe süzün ve üzerine 3 kahve çekirdeği bırakın.',
        neden: 'Votka sadece alkol sağlar (tat profiline karışmaz), Kahlua tatlılığı, Espresso ise gövdeyi ve acılığı verir.',
        ortam: 'Gece kulübüne geçmeden önceki son durak, after-dinner.'
      }
    ],
    yiyecek: 'Tiramisu, çikolatalı tatlılar.',
    muzik_his: 'Deep House, Lounge, Elektronik.',
    mevsim: 'Her mevsim',
    abv_range: '20',
    standart_porsiyon: '90',
    kafa_dozu: { hafif: '1 kadeh', ideal: '2 kadeh', limit_ustu: '3+ kadeh (Uyutmaz!)', ertesi_gun: 3 },
    etki_hizi: 'Çok Hızlı (Kafein ve alkol çarpışması)',
    metabolizma: 'Orta',
    baslangic_onerileri: ['Klasik Espresso Martini'],
    orta_seviye: ['Baileys Espresso Martini (Daha kremamsı)'],
    premium: ['Tequila/Mezcal Espresso Martini'],
    fiyat_araligi: '400 - 600',
    nereden_alinir: 'Kokteyl barları.',
    pop_kultur: 'Üzerindeki 3 kahve çekirdeği geleneksel olarak İtalyan kültüründeki "Sağlık, Zenginlik ve Mutluluk" dileklerini temsil eder.',
    yanlis_bilinenler: 'Espressonun soğumasının beklenmesi gerektiği sanılır; tam tersine sıcak espresso buza çarptığında mükemmel köpüğü (crema) yaratır.',
    sozler: '"Wake me up, and then f*ck me up."'
  },
  {
    id: 'whisky-sour',
    name: 'Whisky Sour',
    emoji: '🥃',
    color: '#e8c97b',
    aliases: ['Viski Ekşisi'],
    origin: 'ABD',
    ana_tur: 'kokteyl',
    alt_tur: 'sour',
    gorunum: 'opak',
    olgunlasma: 'dinlendirilmemiş',
    aroma: ['limon', 'viski', 'vanilya', 'tatlı'],
    alkol_seviye: 'orta',
    lore_short: 'Dünyanın en iyi tanımlanmış Sour (ekşi) kokteyli. Bourbon viski, limon suyu, şeker ve ipeksi bir doku için yumurta akı. Tatlı-ekşi dengesinin ders kitabıdır.',
    lore_full: [
      {
        baslik: 'Köken',
        metin: '19. yüzyılın ortalarında denizciler arasında doğdu. Denizciler iskorbüt hastalığını önlemek için limon, suları bozulmasın diye içine alkol, içilebilir olsun diye de şeker koyarlardı. Bu formül (Sour) daha sonra barlara taşındı.'
      },
      {
        baslik: 'Kültürel Etki',
        metin: 'Yumurta akı kullanımı (Boston Sour olarak da bilinir) kokteyle sadece bir köpük katmaz, aynı zamanda limonun keskin asiditesini yumuşatıp viskinin sertliğini kadifemsi bir hale getirir.'
      },
      {
        baslik: 'Türkiye ile İlişkisi',
        metin: 'Barmen yeteneğini ölçmek için en çok sipariş edilen kokteyllerdendir. "İçinde çiğ yumurta mı var?" önyargısı aşıldıktan sonra genelde favori kokteyle dönüşür.'
      }
    ],
    hammadde: 'Bourbon Viski, Taze Limon Suyu, Şeker Şurubu, Yumurta Akı (veya Aquafaba), Angostura Bitter.',
    uretim_sureci: 'Dry Shake (buzsuz) ve ardından buzlu Shake.',
    dinlendirme: 'Dinlendirilmez.',
    renk: 'Soluk sarımsı altın, üzerinde kalın beyaz köpük tabakası.',
    koku: 'Köpüğün üzerine damlatılan Angostura bitterin baharatlı kokusu ve hafif limonata ferahlığı.',
    tat: 'Mükemmel uyum. Viskinin meşe ve karamel notaları, limonun ferahlatıcı asiditesiyle ve şekerin tatlılığıyla sarılır.',
    finish: 'İpeksi, asidik ve çok tatmin edici.',
    vucut: 'Medium body',
    rakon: 'sek',
    sek_detay: {
      kadeh: 'Rock glass veya Coupe',
      sicaklik: 'Soğuk',
      miktar: '90 ml',
      hazirlik: 'Köpüğün üzerine 3 damla Angostura bitter damlatılır.'
    },
    mix_detay: [
      {
        isim: 'Klasik Whisky Sour',
        malzemeler: ['50 ml Bourbon Viski', '25 ml Taze Limon Suyu', '15 ml Basit Şurup', 'Yarım Yumurta Akı'],
        hazirlanis: 'Tüm malzemeleri shaker\'a koyun. Önce buz koymadan (Dry Shake) sertçe çalkalayın ki yumurta akı köpürsün (protein bağları kırılsın). Sonra bol buz ekleyip tekrar çalkalayın. Bardağa süzün.',
        neden: 'Bourbon\'un tatlı mısır karakteri, bu ekşi yapıyı İskoç viskisine kıyasla çok daha iyi taşır.',
        ortam: 'Lounge, akşam yemeği öncesi veya sonrası.'
      }
    ],
    yiyecek: 'Fındık, fıstık, et yemekleri.',
    muzik_his: 'Klasik Jazz, Blues, Frank Sinatra.',
    mevsim: 'Sonbahar ve Kış',
    abv_range: '18',
    standart_porsiyon: '90',
    kafa_dozu: { hafif: '1 kadeh', ideal: '3 kadeh', limit_ustu: '5+ kadeh', ertesi_gun: 2 },
    etki_hizi: 'Orta (20 dk)',
    metabolizma: 'Orta',
    baslangic_onerileri: ['Amaretto Sour (Viski yerine Amaretto, daha tatlı)'],
    orta_seviye: ['Klasik Whisky Sour'],
    premium: ['New York Sour (Üzerine kırmızı şarap yüzdürülmüş versiyon)'],
    fiyat_araligi: '400 - 550',
    nereden_alinir: 'Kokteyl barları.',
    pop_kultur: 'Vintage kokteyl rönesansının (2010\'lar) poster çocuğudur.',
    yanlis_bilinenler: 'Çiğ yumurta akının koku veya tat vereceği sanılır; oysa alkol ve limon asidi içinde "pişer" (denatüre olur), sadece doku ve köpük verir, tadı yoktur.',
    sozler: '"Smooth as silk."'
  },
  {
    id: 'manhattan',
    name: 'Manhattan',
    emoji: '🍸',
    color: '#8b1a1a',
    aliases: ['Viskinin Kralı'],
    origin: 'ABD',
    ana_tur: 'kokteyl',
    alt_tur: 'spirit_forward',
    gorunum: 'berrak',
    olgunlasma: 'dinlendirilmemiş',
    aroma: ['çavdar viskisi', 'kırmızı vermut', 'karanfil', 'kiraz'],
    alkol_seviye: 'sert',
    lore_short: 'Martini\'nin karanlık, güçlü ve viskili kuzeni. Gökdelenler gibi keskin, gece gibi derin. Çavdar viskisinin baharatı ve tatlı vermutun kucaklaşması.',
    lore_full: [
      {
        baslik: 'Köken',
        metin: 'Efsaneye göre 1870\'lerde Winston Churchill\'in annesi Lady Randolph Churchill için New York\'taki Manhattan Club\'da verilen bir partide icat edilmiştir. Bir başka güçlü iddia ise Broadway barmenlerinden "Black" lakaplı bir barmenin icadıdır.'
      },
      {
        baslik: 'Kültürel Etki',
        metin: 'New York şehrinin sofistike ruhunu temsil eder. Frank Sinatra, Dean Martin gibi "Rat Pack" üyelerinin değişmez içkisidir. Klasik kokteyller piramidinin en üstündeki 3 içkiden biridir.'
      },
      {
        baslik: 'Türkiye ile İlişkisi',
        metin: 'Viskisini buz ve suyla bozmak istemeyen, sek viski içmekten de sıkılan "gusto" sahibi içicilerin favorisidir.'
      }
    ],
    hammadde: 'Rye (Çavdar) Viskisi veya Bourbon, Tatlı Kırmızı Vermut, Angostura Bitter, Maraschino Kirazı.',
    uretim_sureci: 'Bardağın içinde karıştırma (Stir) - Asla çalkalanmaz.',
    dinlendirme: 'Dinlendirilmez.',
    renk: 'Derin yakut, koyu bakır.',
    koku: 'Baharat (çavdar), karanfil, kuru üzüm (vermut) ve vanilya.',
    tat: 'Güçlü viski çarpması, vermuttan gelen tatlı-baharatlı şarap notaları ve bitterin verdiği derinlik.',
    finish: 'Uzun, kompleks, sıcak ve zengin.',
    vucut: 'Medium body',
    rakon: 'sek',
    sek_detay: {
      kadeh: 'Coupe veya Martini kadehi',
      sicaklik: 'Soğuk (Buzsuz servis edilir)',
      miktar: '80 ml',
      hazirlik: 'Garnitür olarak mutlaka gerçek bir Maraschino kirazı (şurup içinde) kullanılır.'
    },
    mix_detay: [
      {
        isim: 'Klasik Manhattan',
        malzemeler: ['50 ml Rye Viskisi (veya Bourbon)', '25 ml Tatlı Kırmızı Vermut', '2 dash Angostura Bitter'],
        hazirlanis: 'Buz dolu bir karıştırma bardağında (mixing glass) kaşıkla 30-40 saniye usulca karıştırın. Soğutulmuş kadehe süzün, içine bir adet kiraz bırakın.',
        neden: 'Çavdar (Rye) viskisi, bourbona göre daha baharatlı ve kurudur; bu da tatlı vermutun ağırlığını mükemmel dengeler.',
        ortam: 'Jazz kulübü, lüks otel barı, gece yarısı New York.'
      }
    ],
    yiyecek: 'Puro, steak, bitter çikolata.',
    muzik_his: 'Bebop, Caz, New York sokak sesleri.',
    mevsim: 'Kış',
    abv_range: '30',
    standart_porsiyon: '80',
    kafa_dozu: { hafif: '1 kadeh', ideal: '2 kadeh', limit_ustu: '3+ kadeh', ertesi_gun: 3 },
    etki_hizi: 'Hızlı (15 dk)',
    metabolizma: 'Orta',
    baslangic_onerileri: ['Rob Roy (İskoç viskisiyle yapılan Manhattan)'],
    orta_seviye: ['Bourbon Manhattan'],
    premium: ['Klasik Rye Manhattan'],
    fiyat_araligi: '450 - 650',
    nereden_alinir: 'Kokteyl barları.',
    pop_kultur: 'Marilyn Monroe "Some Like It Hot" filminde trende sıcak su torbasında bu kokteyli karıştırır.',
    yanlis_bilinenler: 'Shaker\'da çalkalanacağı sanılır; ancak berrak ve sek karakterli olması gereken bu içki çalkalanırsa bulanıklaşır ve dokusu bozulur.',
    sozler: '"A drink for adults."'
  },
  {
    id: 'raki-sour',
    name: 'Rakı Sour',
    emoji: '🍋',
    color: '#f4f4dc',
    aliases: ['Meyhane Ekşisi'],
    origin: 'Türkiye',
    ana_tur: 'kokteyl',
    alt_tur: 'raki_bazli',
    gorunum: 'opak',
    olgunlasma: 'dinlendirilmemiş',
    aroma: ['anason', 'limon', 'şeker'],
    alkol_seviye: 'orta',
    lore_short: 'Türk miksolojisinin dünyaya hediyesi. Rakının anason gücünü, limonun asiditesiyle ve ipeksi bir köpükle dengeleyen modern bir sentez.',
    lore_full: [
      {
        baslik: 'Köken',
        metin: 'Türkiye\'de kokteyl kültürünün gelişmesiyle, "Milli içkimizden neden kokteyl olmasın?" sorusunun en başarılı cevabı olarak ortaya çıktı. Klasik "Sour" (Ekşi) şablonunun (İçki + Limon + Şeker + Yumurta akı) rakıya uyarlanmasıdır.'
      },
      {
        baslik: 'Kültürel Etki',
        metin: 'Rakıyı sek veya suyla sevmeyen ama o anason lezzetine yabancı kalmak istemeyen gençler ve yeni nesil içiciler için muhteşem bir köprüdür.'
      },
      {
        baslik: 'Türkiye ile İlişkisi',
        metin: 'Gastropub\'ların, modern meyhanelerin ve lokal kokteyl barlarının menülerinde "imza" veya "yerel klasikler" bölümünde her zaman bulunur.'
      }
    ],
    hammadde: 'Rakı (tercihen klasik veya yaş üzüm), Taze Limon Suyu, Basit Şurup, Yumurta Akı.',
    uretim_sureci: 'Dry Shake ve ardından buzlu Shake.',
    dinlendirme: 'Dinlendirilmez.',
    renk: 'Bulanık beyaz (Rakının suyla beyazlaması) ve kalın köpük.',
    koku: 'Keskin anason kokusunun limon kabuğuyla yumuşamış hali.',
    tat: 'İlk anda tatlı-ekşi limonata gibi başlar, yutulurken ve bitişte rakının karakteristik anasonu ağzı doldurur.',
    finish: 'Ferahlatıcı, tatlımsı ve anasonlu.',
    vucut: 'Medium body',
    rakon: 'mix',
    sek_detay: {
      kadeh: 'Coupe veya Rock glass',
      sicaklik: 'Soğuk',
      miktar: '90 ml',
      hazirlik: 'Genelde üzerine nane yaprağı veya kurutulmuş limon dilimi konur.'
    },
    mix_detay: [
      {
        isim: 'Klasik Rakı Sour',
        malzemeler: ['50 ml Rakı (örn: Yeni Rakı)', '25 ml Taze Limon Suyu', '15 ml Şeker Şurubu', 'Yarım Yumurta Akı'],
        hazirlanis: 'Buzsuz olarak kuvvetlice çalkalayın (Dry shake). Sonra buz ekleyip tekrar çalkalayın. Bardağa süzün.',
        neden: 'Rakıdaki anason ve üzüm distilatı, limonun asidiyle beklenen çok daha uyumlu bir profil çizer.',
        ortam: 'Modern meyhane, boğaz manzarası, yaz akşamı.'
      }
    ],
    yiyecek: 'Klasik Türk mezeleri, beyaz peynir, kavun.',
    muzik_his: 'Alternatif Türkçe Pop, Müzeyyen Senar remixleri.',
    mevsim: 'İlkbahar ve Yaz',
    abv_range: '18',
    standart_porsiyon: '90',
    kafa_dozu: { hafif: '1-2 kadeh', ideal: '3 kadeh', limit_ustu: '4+ kadeh', ertesi_gun: 2 },
    etki_hizi: 'Hızlı (15 dk)',
    metabolizma: 'Orta',
    baslangic_onerileri: ['-'],
    orta_seviye: ['Rakı Sour'],
    premium: ['-'],
    fiyat_araligi: '350 - 500',
    nereden_alinir: 'Lokal kokteyl barları, modern meyhaneler.',
    pop_kultur: 'Türk gastronomi rönesansının sembol içeceklerinden biridir.',
    yanlis_bilinenler: 'Rakıdan kokteyl olmaz kuralını yıkan en net kanıttır.',
    sozler: '"Anason kokarken hayat."'
  },
  {
    id: 'meyhane-mule',
    name: 'Meyhane Mule (Rakı Mule)',
    emoji: '🥃',
    color: '#f0f0f0',
    aliases: ['Rakı Mule', 'Turkish Mule'],
    origin: 'Türkiye',
    ana_tur: 'kokteyl',
    alt_tur: 'raki_bazli',
    gorunum: 'bulanık',
    olgunlasma: 'dinlendirilmemiş',
    aroma: ['anason', 'zencefil', 'nane', 'lime'],
    alkol_seviye: 'hafif_orta',
    lore_short: 'Moscow Mule\'un (Votka, zencefil gazozu, lime) Boğaz\'a uyarlanmış hali. Zencefilin acılığı ile anasonun baharatı birbirine aşık olur.',
    lore_full: [
      {
        baslik: 'Köken',
        metin: 'Rakıyı "uzun" (highball) ve bol buzlu, ferahlatıcı bir yaz içkisi formatına sokma çabasıyla doğmuştur. Moscow Mule kokteylindeki nötr votka yerine rakı konularak yapılmıştır.'
      },
      {
        baslik: 'Kültürel Etki',
        metin: 'İstanbul\'un teras barlarında, ağır rakı sofrası kurmadan da rakı keyfi yapmak isteyenlerin favorisidir.'
      },
      {
        baslik: 'Türkiye ile İlişkisi',
        metin: 'Rakı Sour kadar popülerleşmeye başlamıştır; özellikle ginger ale (zencefil gazozu) veya taze zencefil ile anasonun uyumu şaşırtıcı derecede başarılıdır.'
      }
    ],
    hammadde: 'Rakı, Zencefil Gazozu (Ginger Ale) veya Zencefil Birası (Ginger Beer), Taze Lime, Nane.',
    uretim_sureci: 'Bardağın içinde yapım (Build).',
    dinlendirme: 'Dinlendirilmez.',
    renk: 'Opak beyazımsı/bulutlu.',
    koku: 'Yoğun zencefil, taze lime asiditesi ve arkada anason.',
    tat: 'Çok canlandırıcı. Zencefilin acımsı/baharatlı vuruşu, rakının anasonuyla birleştiğinde egzotik ve ferah bir tat profili çıkarır.',
    finish: 'Uzun, zencefilli, naneli ve serin.',
    vucut: 'Light body',
    rakon: 'mix',
    sek_detay: {
      kadeh: 'Bakır Kupa (Mule Mug) veya Highball bardağı',
      sicaklik: 'Çok Soğuk',
      miktar: '200 ml',
      hazirlik: 'Bol buzla servis edilir.'
    },
    mix_detay: [
      {
        isim: 'Meyhane Mule',
        malzemeler: ['50 ml Rakı', '150 ml Zencefil Gazozu (Ginger Ale)', 'Yarım Lime\'ın suyu', 'Taze Nane'],
        hazirlanis: 'Bardağa buzu koyun, rakıyı ve lime suyunu ekleyin. Üzerini ginger ale ile tamamlayın. Nane yaprağı ve bir dilim zencefil ile süsleyin.',
        neden: 'Zencefil ve anason aynı "baharat" ailesinin uzak kuzenleri gibi çalışır; birbirlerini bastırmaz, yükseltirler.',
        ortam: 'Yaz akşamüstü, teras partisi, meze masası öncesi.'
      }
    ],
    yiyecek: 'Hafif Türk tapasları, deniz börülcesi, kalamar.',
    muzik_his: 'Deep House, Türkçe chill out.',
    mevsim: 'Yaz',
    abv_range: '12',
    standart_porsiyon: '200',
    kafa_dozu: { hafif: '2 kadeh', ideal: '4 kadeh', limit_ustu: '6+ kadeh', ertesi_gun: 1 },
    etki_hizi: 'Orta (20 dk)',
    metabolizma: 'Hızlı',
    baslangic_onerileri: ['-'],
    orta_seviye: ['Meyhane Mule'],
    premium: ['-'],
    fiyat_araligi: '350 - 500',
    nereden_alinir: 'Modern barlar ve bistrolar.',
    pop_kultur: 'Bakır kupada sunumuyla masaya geldiğinde tüm gözleri üzerine çeker.',
    yanlis_bilinenler: 'Rakı ve gazlı içeceğin uyuşmayacağı sanılır; tonik veya ginger ale gibi asidik/acımsı gazlılar rakıyla çok iyi eşleşir.',
    sozler: '"Anatolian Kick."'
  },
  {
    id: 'aperol-spritz',
    name: 'Aperol Spritz',
    emoji: '🍹',
    color: '#ff6600',
    aliases: ['Spritz'],
    origin: 'İtalya',
    ana_tur: 'kokteyl',
    alt_tur: 'aperitif',
    gorunum: 'berrak',
    olgunlasma: 'dinlendirilmemiş',
    aroma: ['acı portakal', 'prosecco', 'soda'],
    alkol_seviye: 'hafif',
    lore_short: 'Dünyanın en popüler yaz aperitifi. İtalyan güneşinin kadehe dolmuş hali. 3 birim Prosecco, 2 birim Aperol, 1 birim soda kuralı her zaman kazanır.',
    lore_full: [
      {
        baslik: 'Köken',
        metin: '19. yüzyılda İtalya\'nın Veneto bölgesindeki Avusturyalı askerler, yerel şarapları çok sert buldukları için içine soda "püskürtürlerdi" (Almanca "spritzen"). 1919\'da Aperol\'ün icadıyla Spritz kültürü farklı bir boyut kazandı ve 1950\'lerde bildiğimiz Aperol Spritz doğdu.'
      },
      {
        baslik: 'Kültürel Etki',
        metin: 'İtalyanların yemekten önce (aperitivo) saatlerinde midelerini yemeğe hazırlamak için içtikleri hafif içki kültürünün küresel yüzüdür. Günümüzde Instagram\'ın turuncu filtreli yıldızıdır.'
      },
      {
        baslik: 'Türkiye ile İlişkisi',
        metin: 'Özellikle yazlık bölgelerde, Ege ve Akdeniz kıyılarında sıcak öğleden sonraları şarap veya biraya çok daha havalı ve ferah bir alternatif olarak tercih edilir.'
      }
    ],
    hammadde: 'Aperol, Prosecco, Soda, Portakal Dilimi.',
    uretim_sureci: 'Yap (build) tekniği. Bardağın içinde karıştırılır.',
    dinlendirme: 'Dinlendirilmez.',
    renk: 'Parlak turuncu.',
    koku: 'Tatlı portakal, hafif bitkisel notalar ve şarabın meyvemsi kokusu.',
    tat: 'Kusursuz denge: Aperol\'ün tatlı ve hafif acımtırak tadı, Prosecco\'nun asiditesi ve sodanın ferahlığıyla buluşur.',
    finish: 'Kısa, çok ferah ve hafif acı-tatlı.',
    vucut: 'Light body',
    rakon: 'mix',
    sek_detay: {
      kadeh: 'Büyük balon (Copa) veya beyaz şarap kadehi',
      sicaklik: 'Çok Soğuk',
      miktar: '150 ml',
      hazirlik: 'Kadeh ağzına kadar buzla doldurulur.'
    },
    mix_detay: [
      {
        isim: 'Orijinal 3-2-1 Spritz',
        malzemeler: ['90 ml Prosecco (3 ölçü)', '60 ml Aperol (2 ölçü)', '30 ml Soda (1 ölçü)'],
        hazirlanis: 'Buzlu bardağa önce Prosecco, sonra Aperol (böylece dibe çökmez), en son soda eklenir. Bir kez hafifçe karıştırılıp içine portakal dilimi atılır.',
        neden: 'Şampanya yerine Prosecco kullanılır çünkü daha meyvemsi ve tatlıdır. Soda içkiyi hafifletir ve ferahlık katar.',
        ortam: 'Güneş batarken, teras, brunch.'
      }
    ],
    yiyecek: 'Cicchetti (Venedik tapasları), zeytin, cips, hafif kanepeler.',
    muzik_his: 'Lounge, Chill out, İtalyan pop.',
    mevsim: 'Yaz',
    abv_range: '11',
    standart_porsiyon: '150',
    kafa_dozu: { hafif: '1-2 kadeh', ideal: '3-4 kadeh', limit_ustu: '5+ kadeh', ertesi_gun: 1 },
    etki_hizi: 'Orta (20 dk)',
    metabolizma: 'Hızlı',
    baslangic_onerileri: ['Limoncello Spritz'],
    orta_seviye: ['Aperol Spritz'],
    premium: ['Campari Spritz (Daha acı)'],
    fiyat_araligi: '350 - 500',
    nereden_alinir: 'Tüm barlar ve kafeler.',
    pop_kultur: 'Yaz mevsiminde sosyal medyada kadeh tokuşturma videolarının demirbaşıdır.',
    yanlis_bilinenler: 'Shakerda çalkalanacağı sanılır; asla çalkalanmaz, gazlı içecekler çalkalanırsa patlar.',
    sozler: '"Spritz time is the best time."'
  }

];
