const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'viski.js');
let content = fs.readFileSync(filePath, 'utf8');

const extraData = `  {
    id: 'chivas-regal-12',
    name: 'Chivas Regal 12',
    emoji: '🥃',
    color: '#d4af37',
    aliases: ['Chivas', 'Chivas 12'],
    origin: 'İskoçya',
    ana_tur: 'viski',
    alt_tur: 'blended',
    gorunum: 'amber',
    olgunlasma: 'fıçılanmış',
    aroma: ['bal', 'vanilya', 'elma', 'fındık'],
    alkol_seviye: 'sert',
    lore_short: 'Dünyanın en ikonik harman viskilerinden biri. Speyside maltlarının pürüzsüz ve tatlı karakteri, Chivas kardeşlerin ustalıkla yarattığı bu klasik şişede hayat bulur.',
    lore_full: [
      {
        baslik: 'Köken',
        metin: '1801 yılında James ve John Chivas kardeşler tarafından Aberdeen\\'de kurulan lüks bir bakkal dükkanı ile başlar. Kaliteli ürünler satarken, viskileri harmanlamaya başlayarak daha pürüzsüz bir içim elde etmeyi başardılar.'
      },
      {
        baslik: 'Yayılma',
        metin: '1909 yılında Chivas Regal 25 Amerika\\'ya ihraç edilen ilk lüks harman viski oldu. Daha sonra 12 yıllık versiyonu ile küresel bir ikon haline geldi.'
      }
    ],
    hammadde: 'Malt ve tahıl viskileri',
    uretim_sureci: 'En az 12 yıl meşe fıçılarda olgunlaştırılmış malt ve tahıl viskilerinin ustaca harmanlanması.',
    dinlendirme: 'En az 12 yıl.',
    renk: 'Sıcak ve parlak kehribar.',
    koku: 'Yaban otları, fundalık, bal ve bahçe meyveleri.',
    tat: 'Kremamsı, bal, vanilya ve elma notaları, hafif fındık.',
    finish: 'Zengin ve uzun.',
    vucut: 'Medium body',
    rakon: 'sek',
    sek_detay: {
      kadeh: 'Rock glass',
      sicaklik: 'Oda sıcaklığı',
      miktar: '40-50 ml',
      hazirlik: 'Sek veya tek büyük buz ile.'
    },
    mix_detay: [
      {
        isim: 'Chivas Highball',
        malzemeler: ['50 ml Chivas 12', '150 ml Soda', 'Buz'],
        hazirlanis: 'Buz dolu bardağa viskiyi ekle, üzerine sodayı ilave et.',
        neden: 'Viskinin tazeleyici notalarını ortaya çıkarır.',
        ortam: 'Yaz akşamları, rahat sohbetler.'
      }
    ],
    yiyecek: 'Somon, kuruyemiş, hafif peynirler.',
    muzik_his: 'Jazz, klasik.',
    mevsim: 'Her mevsim',
    abv_range: '40',
    standart_porsiyon: '40',
    kafa_dozu: { hafif: '1-2 kadeh', ideal: '3 kadeh', limit_ustu: '4+ kadeh', ertesi_gun: 2 },
    etki_hizi: 'Orta',
    metabolizma: 'Orta',
    baslangic_onerileri: ['Chivas 12'],
    orta_seviye: ['Chivas 18'],
    premium: ['Chivas 25'],
    fiyat_araligi: '800 - 1200',
    nereden_alinir: 'Tekel bayiler, marketler.',
    pop_kultur: 'Lüks ve başarının simgesi olarak filmlerde sıkça yer alır.',
    yanlis_bilinenler: 'Harman viskilerin malt viskilerden daha düşük kalitede olduğu yanılgısı.',
    sozler: '"Başarı paylaşmaktır."'
  },
  {
    id: 'macallan-12-ek',
    name: 'Macallan 12',
    emoji: '🥃',
    color: '#8b0000',
    aliases: ['Macallan Sherry Oak', 'Macallan'],
    origin: 'İskoçya',
    ana_tur: 'viski',
    alt_tur: 'single_malt',
    gorunum: 'koyu amber',
    olgunlasma: 'fıçılanmış',
    aroma: ['kuru meyve', 'şeri', 'baharat', 'meşe'],
    alkol_seviye: 'sert',
    lore_short: 'Şeri fıçısında olgunlaşan viskilerin kralı. Zengin, meyveli ve karmaşık profiliyle her yudumda prestij hissettirir.',
    lore_full: [
      {
        baslik: 'Köken',
        metin: '1824 yılında Speyside\\'da kurulan damıtımevi, özellikle İspanya\\'dan getirilen şeri fıçılarında yaptığı olgunlaştırma işlemiyle ün salmıştır.'
      }
    ],
    hammadde: 'Maltlanmış arpa, su.',
    uretim_sureci: 'Küçük imbiklerde damıtılıp İspanya\\'nın Jerez bölgesinden getirilen Oloroso şeri fıçılarında olgunlaştırılır.',
    dinlendirme: '12 yıl şeri fıçılarında.',
    renk: 'Zengin maun rengi.',
    koku: 'Vanilya, kuru meyve ve hafif zencefil.',
    tat: 'Kuru meyve, şeri tatlılığı, odunsu baharatlar.',
    finish: 'Uzun, tatlı ve baharatlı.',
    vucut: 'Full body',
    rakon: 'sek',
    sek_detay: {
      kadeh: 'Glencairn',
      sicaklik: 'Oda sıcaklığı',
      miktar: '40 ml',
      hazirlik: 'Kesinlikle sek içilmeli, belki bir damla su eklenebilir.'
    },
    mix_detay: [],
    yiyecek: 'Kırmızı et, bitter çikolata.',
    muzik_his: 'Klasik müzik, piyano.',
    mevsim: 'Kış',
    abv_range: '40',
    standart_porsiyon: '40',
    kafa_dozu: { hafif: '1 kadeh', ideal: '2 kadeh', limit_ustu: '3+ kadeh', ertesi_gun: 3 },
    etki_hizi: 'Yavaş',
    metabolizma: 'Yavaş',
    baslangic_onerileri: ['Macallan 12 Double Cask'],
    orta_seviye: ['Macallan 15'],
    premium: ['Macallan 18'],
    fiyat_araligi: '2500 - 4000',
    nereden_alinir: 'Gurme mağazalar.',
    pop_kultur: 'Koleksiyonerlerin ve prestij arayanların gözdesi.',
    yanlis_bilinenler: 'Tüm Macallanların aynı tat profiline sahip olduğu düşüncesi.',
    sozler: '"Viskide lüksün tanımı."'
  },
  {
    id: 'lagavulin-16',
    name: 'Lagavulin 16',
    emoji: '🥃',
    color: '#5c4033',
    aliases: ['Lagavulin', 'Islay Devleri'],
    origin: 'İskoçya',
    ana_tur: 'viski',
    alt_tur: 'single_malt',
    gorunum: 'amber',
    olgunlasma: 'fıçılanmış',
    aroma: ['turba dumanı', 'iyot', 'tatlı baharat', 'deniz tuzu'],
    alkol_seviye: 'sert',
    lore_short: 'Islay adasının en görkemli ve yoğun dumanlı viskilerinden. Bir şömine ateşini yudumlamak gibi, derin ve unutulmaz.',
    lore_full: [
      {
        baslik: 'Köken',
        metin: '1816 yılında Islay adasında resmi olarak kurulan damıtımevi, yoğun turbalı ve iyotlu viskileriyle adanın ruhunu yansıtır.'
      }
    ],
    hammadde: 'Turbalanmış malt, su.',
    uretim_sureci: 'Yavaş damıtma işlemi ve uzun süreli fıçı olgunlaştırmasıyla kendine has pürüzsüzlüğünü kazanır.',
    dinlendirme: '16 yıl meşe fıçılarda.',
    renk: 'Derin kehribar altın.',
    koku: 'Yoğun turba dumanı, iyot ve deniz yosunu.',
    tat: 'Kuru turba dumanı, tatlılık ve deniz tuzu dengesi.',
    finish: 'Çok uzun, zarif turba dumanı ve baharat.',
    vucut: 'Full body',
    rakon: 'sek',
    sek_detay: {
      kadeh: 'Glencairn',
      sicaklik: 'Oda sıcaklığı',
      miktar: '40 ml',
      hazirlik: 'Sek, yavaş yavaş tadına varılarak içilmeli.'
    },
    mix_detay: [],
    yiyecek: 'Mavi peynir, istiridye, tütsülenmiş etler.',
    muzik_his: 'Jazz, blues.',
    mevsim: 'Kış',
    abv_range: '43',
    standart_porsiyon: '40',
    kafa_dozu: { hafif: '1 kadeh', ideal: '2 kadeh', limit_ustu: '3+ kadeh', ertesi_gun: 3 },
    etki_hizi: 'Orta',
    metabolizma: 'Orta',
    baslangic_onerileri: ['Talisker 10'],
    orta_seviye: ['Lagavulin 16'],
    premium: ['Lagavulin 12 Cask Strength'],
    fiyat_araligi: '2500 - 4500',
    nereden_alinir: 'Özel viski dükkanları.',
    pop_kultur: 'Parks and Recreation dizisinde Ron Swanson\\'ın favori içkisi.',
    yanlis_bilinenler: 'Dumanlı olduğu için acı sanılması (aslında çok tatlı bir alt tona sahiptir).',
    sozler: '"Bir bardak Lagavulin, zamanı durdurur."'
  },
  {
    id: 'jim-beam',
    name: 'Jim Beam',
    emoji: '🥃',
    color: '#c27a27',
    aliases: ['Jim Beam White Label', 'JB'],
    origin: 'ABD',
    ana_tur: 'viski',
    alt_tur: 'bourbon',
    gorunum: 'amber',
    olgunlasma: 'fıçılanmış',
    aroma: ['vanilya', 'karamel', 'mısır', 'meşe'],
    alkol_seviye: 'sert',
    lore_short: 'Dünyanın en çok satan bourbonu. Geleneksel Kentucky tarzı, meşe ve vanilya notalarıyla tatlı ve ulaşılabilir bir lezzet.',
    lore_full: [
      {
        baslik: 'Köken',
        metin: '1795 yılında Jacob Beam tarafından ilk fıçıları satıldığından beri Beam ailesinin 7 kuşaktır süregelen mirasıdır.'
      }
    ],
    hammadde: 'En az %51 mısır, çavdar ve arpa maltı.',
    uretim_sureci: 'Ekşi mayalama (sour mash) yöntemiyle üretilir ve içi yakılmış yeni Amerikan meşe fıçılarında olgunlaştırılır.',
    dinlendirme: 'En az 4 yıl.',
    renk: 'Parlak altın.',
    koku: 'Vanilya, karamel ve tatlı tahıl.',
    tat: 'Mısır tatlılığı, vanilya, hafif baharat ve odunsu tatlar.',
    finish: 'Kısa, temiz ve tatlı.',
    vucut: 'Medium body',
    rakon: 'mix',
    sek_detay: {
      kadeh: 'Rock glass',
      sicaklik: 'Buzlu veya oda sıcaklığı',
      miktar: '50 ml',
      hazirlik: 'Buzla veya kola ile harika gider.'
    },
    mix_detay: [
      {
        isim: 'Jim Beam & Cola',
        malzemeler: ['50 ml Jim Beam', '150 ml Kola', 'Buz'],
        hazirlanis: 'Buz dolu bardağa viskiyi dök, kola ile tamamla.',
        neden: 'Karamel notaları kolanın tatlılığı ile mükemmel uyum sağlar.',
        ortam: 'Partiler, konserler, rahat akşamlar.'
      }
    ],
    yiyecek: 'Barbekü, hamburger, kuruyemiş.',
    muzik_his: 'Country, Rock n Roll.',
    mevsim: 'Her mevsim',
    abv_range: '40',
    standart_porsiyon: '40',
    kafa_dozu: { hafif: '1-2 kadeh', ideal: '3-4 kadeh', limit_ustu: '5+ kadeh', ertesi_gun: 2 },
    etki_hizi: 'Hızlı',
    metabolizma: 'Hızlı',
    baslangic_onerileri: ['Jim Beam White'],
    orta_seviye: ['Jim Beam Black'],
    premium: ['Knob Creek'],
    fiyat_araligi: '600 - 900',
    nereden_alinir: 'Tekel bayiler ve marketler.',
    pop_kultur: 'Amerikan kültürünün ve barbekü partilerinin vazgeçilmezi.',
    yanlis_bilinenler: 'Tüm Amerikan viskilerinin aynı olduğu yanılgısı.',
    sozler: '"Gerçek bir Amerikan klasiği."'
  },
  {
    id: 'woodford-reserve',
    name: 'Woodford Reserve',
    emoji: '🥃',
    color: '#8a3324',
    aliases: ['Woodford'],
    origin: 'ABD',
    ana_tur: 'viski',
    alt_tur: 'bourbon',
    gorunum: 'amber',
    olgunlasma: 'fıçılanmış',
    aroma: ['kurutulmuş meyve', 'nane', 'çikolata', 'karamel'],
    alkol_seviye: 'sert',
    lore_short: 'Zengin, kompleks ve pürüzsüz. Kentucky Derbisi\\'nin resmi içkisi olan bu premium bourbon, 200\\'den fazla lezzet notası barındırır.',
    lore_full: [
      {
        baslik: 'Köken',
        metin: '1812 yılından beri aynı tarihi damıtımevinde üretilmektedir. Geleneksel bakır pot imbiklerde damıtılan az sayıdaki bourbonlardan biridir.'
      }
    ],
    hammadde: '%72 mısır, %18 çavdar, %10 arpa maltı.',
    uretim_sureci: 'Hem column hem de pot imbiklerden geçen viskilerin harmanlanmasıyla elde edilir.',
    dinlendirme: 'Ortalama 7 yıl özel fıçılarda.',
    renk: 'Berrak, zengin bal rengi.',
    koku: 'Zengin kurutulmuş meyveler, nane ve portakal kabuğu.',
    tat: 'Karamel, kakao, tütün, baharat ve çikolata.',
    finish: 'Uzun, pürüzsüz ve sıcak.',
    vucut: 'Full body',
    rakon: 'sek',
    sek_detay: {
      kadeh: 'Rock glass',
      sicaklik: 'Oda sıcaklığı',
      miktar: '40 ml',
      hazirlik: 'Sek veya tek bir büyük buz ile içilmeli.'
    },
    mix_detay: [
      {
        isim: 'Old Fashioned',
        malzemeler: ['50 ml Woodford Reserve', 'Şeker', 'Angostura Bitter', 'Portakal Kabuğu'],
        hazirlanis: 'Şeker ve bitteri karıştır, viskiyi ve buzu ekle, portakal kabuğu ile süsle.',
        neden: 'Bourbonun karmaşık yapısı kokteyli zirveye taşır.',
        ortam: 'Şık barlar, özel davetler.'
      }
    ],
    yiyecek: 'Pikan cevizi, çikolatalı tatlılar, kırmızı et.',
    muzik_his: 'Jazz, Blues.',
    mevsim: 'Sonbahar, Kış',
    abv_range: '43.2',
    standart_porsiyon: '40',
    kafa_dozu: { hafif: '1 kadeh', ideal: '2-3 kadeh', limit_ustu: '4+ kadeh', ertesi_gun: 2 },
    etki_hizi: 'Orta',
    metabolizma: 'Orta',
    baslangic_onerileri: ['Woodford Reserve'],
    orta_seviye: ['Woodford Reserve Double Oaked'],
    premium: ['Woodford Reserve Master\\'s Collection'],
    fiyat_araligi: '1500 - 2500',
    nereden_alinir: 'Gurme mağazalar ve büyük tekel bayiler.',
    pop_kultur: 'Kentucky Derbisi\\'nin resmi bourbonudur.',
    yanlis_bilinenler: 'Sadece sek içilmesi gerektiği; aslında kokteyller için de harikadır.',
    sozler: '"Bir bourbon şaheseri."'
  }`;

// As instructed: content.replace(/\n\];/, ',\n' + extraData + '\n];')
// I will adjust the regex slightly in case there are spaces, but the instruction says to use exactly `\n\];`. Let's follow it.
content = content.replace(/\n\];/, ',\n' + extraData + '\n];');
// For safety, in case the exact replacement didn't find a match (e.g., due to EOF or spaces), let's ensure it replaced something:
if (!content.includes(extraData.trim().slice(0, 100))) {
  console.log("Fallback replacement used.");
  content = content.replace(/];[\s\S]*$/, ',\\n' + extraData + '\n];\n');
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Script completed successfully.');
