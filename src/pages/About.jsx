import { Link } from 'react-router-dom';
import { Wine, BookOpen, Heart, Compass } from 'lucide-react';

const pillars = [
  {
    icon: BookOpen,
    baslik: 'Hikaye önce gelir',
    aciklama: `Her içkinin bir geçmişi var. Rakı'nın Anadolu'dan geçişi, viskinin İskoç adalarındaki sisi, şarabın antik Yunan sofrasındaki yeri. Bunları bilmek, bardağı farklı kılıyor.`,
  },
  {
    icon: Compass,
    baslik: 'Jargonsuz rehberlik',
    aciklama: 'Sommelier terimleri, puan sistemleri, yüzdelik dilimlere göre sıralamalar burada yok. Sadece ne içtiğini, nasıl bir his uyandırdığını ve nerede içmek isteyeceğini anlatıyoruz.',
  },
  {
    icon: Heart,
    baslik: 'Ritüele saygı',
    aciklama: 'İçmek, yalnızca alkol almak değil. Doğru kadeh, doğru sıcaklık, doğru ortam. Bunlar içkiyi deneyime dönüştürür. Her sayfada bunu aktarmaya çalışıyoruz.',
  },
];

export default function About() {
  return (
    <div className="flex-1 overflow-y-auto custom-scrollbar">
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-16 md:py-24">

        {/* Manifesto */}
        <div className="mb-20 md:mb-28">
          <div className="flex items-center gap-3 mb-10">
            <Wine className="text-amberAccent w-6 h-6" />
            <span className="text-xs uppercase tracking-widest text-textMuted font-semibold">Hakkında</span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl font-bold leading-[1.3] mb-8">
            Bardağa dökülen her şeyin{' '}
            <span className="text-amberAccent italic">bir hikayesi var.</span>
          </h1>
          <p className="text-textMuted text-lg md:text-xl leading-relaxed mb-6">
            Kadeh, içkileri anlamak isteyen ama uzman olmak zorunda olmadığını bilen insanlar için yazıldı. Şatafatlı barlara ya da sommelier jargonuna ihtiyaç duymadan, elindeki bardağı biraz daha iyi tanımak için bir yer.
          </p>
          <p className="text-textMuted text-lg md:text-xl leading-relaxed">
            Her içki, bir kültürün damıtılmış hali. Rakı'da Akdeniz sofrasının sesi var. Viskide İskoç sisinin kokusu. Bunları bilerek içmek başka bir şey.
          </p>
        </div>

        {/* Sütunlar */}
        <div className="mb-20 md:mb-28 space-y-12">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-textMain">Ne sunuyoruz</h2>
          <div className="space-y-10">
            {pillars.map(({ icon: Icon, baslik, aciklama }) => (
              <div key={baslik} className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-xl bg-[#1a130c] border border-[#2a2015] flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon size={18} className="text-amberAccent" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-textMain mb-2">{baslik}</h3>
                  <p className="text-textMuted leading-relaxed">{aciklama}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* İçeriklerin kapsamı */}
        <div className="mb-20 md:mb-28 bg-[#1a130c] border border-[#2a2015] rounded-2xl p-8 md:p-10">
          <h2 className="font-serif text-2xl font-bold mb-6">Her içki sayfasında neler var?</h2>
          <ul className="space-y-4 text-textMuted">
            {[
              'Köken hikayesi ve kültürel bağlamı',
              'Üretim süreci ve tadım profili',
              'Nasıl ve hangi kadeyle içilir',
              'Yemek, mevsim ve ortam eşleşmeleri',
              'Doz bilgisi ve popüler kültürdeki yeri',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-amberAccent mt-0.5 flex-shrink-0">›</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Yapan */}
        <div className="mb-20 md:mb-28 border-t border-[#2a2015] pt-12">
          <span className="text-xs uppercase tracking-widest text-textMuted font-semibold block mb-6">Yapan</span>
          <p className="font-serif text-2xl md:text-3xl font-bold text-textMain mb-3">Galip Efe Öncü</p>
          <p className="text-textMuted leading-relaxed">
            İçkilerin tadından çok hikayelerine meraklı biri. Bu site, o merakın birikiminden çıktı.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-textMuted mb-6">Okumaya başlamak için bir içki seç.</p>
          <Link
            to="/"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-amberAccent text-amberAccent font-semibold text-sm uppercase tracking-widest hover:bg-amberAccent hover:text-darkBg transition-all duration-300"
          >
            İçkileri Keşfet
          </Link>
        </div>

      </div>
    </div>
  );
}
