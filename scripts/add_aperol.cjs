const fs = require('fs');

const aperol = `  {
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
        metin: '19. yüzyılda İtalya\\'nın Veneto bölgesindeki Avusturyalı askerler, yerel şarapları çok sert buldukları için içine soda "püskürtürlerdi" (Almanca "spritzen"). 1919\\'da Aperol\\'ün icadıyla Spritz kültürü farklı bir boyut kazandı ve 1950\\'lerde bildiğimiz Aperol Spritz doğdu.'
      },
      {
        baslik: 'Kültürel Etki',
        metin: 'İtalyanların yemekten önce (aperitivo) saatlerinde midelerini yemeğe hazırlamak için içtikleri hafif içki kültürünün küresel yüzüdür. Günümüzde Instagram\\'ın turuncu filtreli yıldızıdır.'
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
    tat: 'Kusursuz denge: Aperol\\'ün tatlı ve hafif acımtırak tadı, Prosecco\\'nun asiditesi ve sodanın ferahlığıyla buluşur.',
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
`;

let content = fs.readFileSync('src/data/kokteyl.js', 'utf-8');
content = content.replace(/\n\];/, `,\n${aperol}\n];`);
fs.writeFileSync('src/data/kokteyl.js', content);
console.log("Aperol Spritz added to kokteyl.js");
