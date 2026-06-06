const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, 'src/data/bira.js');

const extraBeers = `
  {
    id: 'bira_corona',
    isim: 'Corona Extra',
    ana_tur: 'bira',
    alt_tur: 'Pale Lager',
    icerik: 'Su, arpa maltı, mısır, şerbetçiotu',
    alkol_orani: '%4.5 ABV',
    tadim_notlari: 'Hafif, ferahlatıcı, temiz ve gevrek bir bitiş. Hafif tatlı malt profili.',
    aroma: 'Meyvemsi ve balımsı hafif notalar, çok az şerbetçiotu aroması.',
    puf_noktalari: 'Mutlaka soğuk ve bir dilim limon veya misket limonu (lime) şişenin ağzına sıkılarak içilmeli. Bu, tadını tamamlar.',
    uyumlu_tatlar: 'Taco, nachos, hafif deniz ürünleri, ızgara tavuk ve baharatlı Meksika yemekleri.',
    lore: 'Meksika\\'nın güneşli sahillerinden tüm dünyaya yayılan efsane. 1925 yılında Grupo Modelo tarafından üretilmeye başlanan Corona, şeffaf şişesiyle biranın rengini gururla sergileyen ilk markalardan biri oldu. Plajların ve rahatlamanın sembolü haline gelmiştir.'
  },
  {
    id: 'bira_heineken',
    isim: 'Heineken',
    ana_tur: 'bira',
    alt_tur: 'Premium Pilsner',
    icerik: 'Saf su, arpa maltı, şerbetçiotu ve özel Heineken A-Mayası',
    alkol_orani: '%5.0 ABV',
    tadim_notlari: 'Dengeli zengin tat, hafif meyvemsi notalar ile kusursuz bir acılık.',
    aroma: 'Kendine has yeşil şişesinden yayılan hafif şerbetçiotu ve malt aroması.',
    puf_noktalari: 'Tam kıvamında (yaklaşık 3-5°C) soğutulmuş olarak ve kendi özel bardağında iki parmak köpükle servis edilmeli.',
    uyumlu_tatlar: 'Burgerler, sosisler, pizza, hafif peynir tabakları ve Asya mutfağı.',
    lore: '1873 yılında Gerard Adriaan Heineken tarafından Amsterdam\\'da kurulan küçük bir aile bira fabrikasından doğdu. Heineken\\'e özgü o kusursuz tadı veren, 19. yüzyılda keşfedilen ve hala sır gibi saklanan "A-Mayası"dır. Kırmızı yıldızı, dünyanın dört bir yanındaki kaliteli biranın evrensel sembolüdür.'
  },
  {
    id: 'bira_budweiser',
    isim: 'Budweiser',
    ana_tur: 'bira',
    alt_tur: 'American-Style Lager',
    icerik: 'Su, arpa maltı, pirinç ve şerbetçiotu',
    alkol_orani: '%5.0 ABV',
    tadim_notlari: 'Son derece pürüzsüz, temiz, hafif tatlı ve gevrek bitişli. Kayın ağacı (beechwood) ile olgunlaştırma yöntemi ekstra yumuşaklık katar.',
    aroma: 'Hafif tahıl ve çok ince çiçeksi şerbetçiotu notaları.',
    puf_noktalari: 'Klasik Amerikan bar kültüründe olduğu gibi buz gibi servis edilmeli.',
    uyumlu_tatlar: 'Izgara etler, barbekü, baharatlı kanat (buffalo wings) ve klasik Amerikan fast food\\'u.',
    lore: '"The King of Beers" (Biraların Kralı) olarak bilinir. 1876\\'da Adolphus Busch tarafından Amerika\\'da yaratılan Budweiser, Çek bira yapım geleneğinden ilham alarak üretilmiştir. İçeriğindeki pirinç ve özel kayın ağacı olgunlaştırma süreci, onu eşsiz kılan ikonik özellikleridir.'
  },
  {
    id: 'bira_hoegaarden',
    isim: 'Hoegaarden',
    ana_tur: 'bira',
    alt_tur: 'Belgian White (Witbier)',
    icerik: 'Su, arpa maltı, buğday, kişniş, curaçao portakal kabuğu, şerbetçiotu, maya',
    alkol_orani: '%4.9 ABV',
    tadim_notlari: 'Tatlı ve ekşi tatların mükemmel dengesi. Kişniş ve narenciye notalarının ferahlatıcı dansı.',
    aroma: 'Kişniş baharatı, portakal kabuğu ve taze buğday ekmeği aroması.',
    puf_noktalari: 'Altıgen özel kalın bardağında soğuk servis edilir. Şişenin dibindeki tortu bardağa dökülmeden önce mutlaka hafifçe çalkalanmalıdır.',
    uyumlu_tatlar: 'Midye, beyaz balık, salatalar, keçi peyniri ve hafif baharatlı Asya yemekleri.',
    lore: 'Kökleri 1445 yılına, Belçika\\'nın Hoegaarden kasabasına uzanır. Yerel keşişlerin kişniş ve kurutulmuş portakal kabuğu gibi o zamanlar için egzotik olan baharatları biraya eklemesiyle doğan bu efsanevi beyaz bira, günümüzde Witbier tarzının dünya çapındaki en büyük temsilcisidir.'
  },
  {
    id: 'bira_leffe_blonde',
    isim: 'Leffe Blonde',
    ana_tur: 'bira',
    alt_tur: 'Belgian Abbey Ale',
    icerik: 'Su, soluk malt, mısır, şerbetçiotu, özel Leffe mayası',
    alkol_orani: '%6.6 ABV',
    tadim_notlari: 'Pürüzsüz ve dolgun gövdeli. Karanfil, vanilya ve hafif karamelmsi tatlılık, arkadan gelen çok hafif bir şerbetçiotu acılığıyla dengelenir.',
    aroma: 'Yoğun meyvemsi, hafif baharatlı, belirgin muz ve karanfil aromaları.',
    puf_noktalari: 'Kadeh şeklindeki özel Leffe bardağında 5-6°C\\'de servis edilmelidir ki aromalar tamamen açılabilsin.',
    uyumlu_tatlar: 'Kırmızı etler, tütsülenmiş şarküteri ürünleri, olgunlaştırılmış sert peynirler (özellikle gouda) ve zengin soslu yemekler.',
    lore: 'Tarihi 1240 yılına, Notre-Dame de Leffe Manastırı\\'na dayanır. Salgın hastalıkların yaygın olduğu Orta Çağ\\'da keşişler, suyu kaynatarak ve bira üreterek halka güvenli bir içecek sağlamıştır. O günlerin kadim bilgeliği ve sabrı, Leffe Blonde\\'un zengin karakterinde yaşamaya devam ediyor.'
  },
  {
    id: 'bira_carlsberg',
    isim: 'Carlsberg',
    ana_tur: 'bira',
    alt_tur: 'Danish Pilsner',
    icerik: 'Su, arpa maltı, şerbetçiotu, Carlsberg mayası',
    alkol_orani: '%5.0 ABV',
    tadim_notlari: 'Mükemmel dengeye sahip tam gövdeli bir pilsner. Elma benzeri hafif meyvemsi notalar, çam ve çiçeksi şerbetçiotu karakteri ile kusursuz bir acılık.',
    aroma: 'Taze şerbetçiotu ve temiz malt kokusu, çimenli ve hafif meyvemsi bir koku profili.',
    puf_noktalari: 'Özel lale formundaki ince kadehinde bol ve kalıcı bir köpükle sunulmalıdır.',
    uyumlu_tatlar: 'Kızartmalar, ızgara balık, baharatlı tavuk ve geleneksel Danimarka smørrebrød (açık sandviç).',
    lore: 'J.C. Jacobsen tarafından 1847\\'de Kopenhag\\'da kurulmuştur. Bira dünyasına yaptığı en büyük katkı, 1883\\'te saf bira mayasını (Saccharomyces carlsbergensis) izole etmesi ve bunu diğer bira üreticileriyle ücretsiz paylaşmasıdır. Sloganı "Probably the best beer in the world" iddialı ama köklü bir geleneğin ürünüdür.'
  }
`;

let content = fs.readFileSync(targetFile, 'utf8');

content = content.replace(/\n\];/, ',\n' + extraBeers + '\n];');

fs.writeFileSync(targetFile, content);
console.log('Beers added successfully.');
