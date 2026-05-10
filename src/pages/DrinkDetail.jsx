import { useState, useEffect } from 'react';
import { BookOpen, Droplets, Utensils, GlassWater, BarChart } from 'lucide-react';

export default function DrinkDetail({ drink }) {
  const [activeTab, setActiveTab] = useState('lore');

  useEffect(() => {
    setActiveTab('lore');
  }, [drink.id]);

  const tabs = [
    { id: 'lore', label: 'Hikaye', icon: BookOpen },
    { id: 'uretim', label: 'Üretim & Profil', icon: Droplets },
    { id: 'nasil_icilir', label: 'Nasıl İçilir', icon: GlassWater },
    { id: 'eslesme', label: 'Eşleşmeler', icon: Utensils },
    { id: 'doz_kultur', label: 'Doz & Kültür', icon: BarChart },
  ];

  return (
    <div className="w-full px-6 lg:px-16 py-12 lg:py-16 max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-10 items-start mb-16">
        <div 
          className="w-32 h-32 lg:w-48 lg:h-48 flex-shrink-0 rounded-3xl flex items-center justify-center text-6xl lg:text-8xl border border-[#2a2015] bg-[#1a130c] shadow-2xl"
          style={{ boxShadow: `0 20px 60px ${drink.color}15` }}
        >
          {drink.emoji}
        </div>
        <div className="flex-1">
          <h1 className="font-serif text-5xl lg:text-7xl font-bold mb-6">{drink.name}</h1>
          <div className="flex flex-wrap gap-3 mb-8">
            {drink.tag.map(t => (
              <span key={t} className="text-sm uppercase tracking-wider font-semibold px-4 py-1.5 rounded-full border border-[#3a2c1e] text-amberAccent bg-[#1a130c]">
                {t}
              </span>
            ))}
          </div>
          <p className="text-xl lg:text-2xl text-textMuted leading-relaxed max-w-4xl">
            {drink.lore_short}
          </p>
        </div>
      </div>

      <div className="flex overflow-x-auto gap-2 lg:gap-4 mb-12 border-b border-[#2a2015] pb-px custom-scrollbar">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 px-5 py-4 text-sm lg:text-base font-medium whitespace-nowrap border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-amberAccent text-amberAccent bg-[#2a2015]/30 rounded-t-lg'
                  : 'border-transparent text-textMuted hover:text-textMain hover:bg-[#1a130c] rounded-t-lg'
              }`}
            >
              <Icon size={18} />
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="bg-[#1a130c] border border-[#2a2015] rounded-3xl p-8 lg:p-12 min-h-[500px] shadow-xl">
        {activeTab === 'lore' && (
          <div>
            {/* Özet */}
            <div className="mb-12 pb-12 border-b border-[#2a2015]">
              <span className="text-xs uppercase tracking-widest text-amberAccent font-semibold mb-5 block">Özet</span>
              <p className="font-serif text-2xl md:text-3xl lg:text-4xl leading-relaxed text-textMain max-w-3xl">
                {drink.lore_short}
              </p>
              <div className="flex flex-wrap gap-8 mt-8">
                <div>
                  <span className="text-xs text-textMuted block mb-1 uppercase tracking-widest">Köken</span>
                  <span className="text-base font-medium">{drink.origin}</span>
                </div>
                {drink.aliases && drink.aliases.length > 0 && (
                  <div>
                    <span className="text-xs text-textMuted block mb-1 uppercase tracking-widest">Diğer İsimler</span>
                    <span className="text-base font-medium">{drink.aliases.join(', ')}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Derin Dalış */}
            {Array.isArray(drink.lore_full) && drink.lore_full.length > 0 && (
              <div>
                <span className="text-xs uppercase tracking-widest text-amberAccent font-semibold mb-10 block">Derin Dalış</span>
                <div className="space-y-12">
                  {drink.lore_full.map((bolum, idx) => (
                    <div key={idx}>
                      <h4 className="font-serif text-xl lg:text-2xl text-textMain mb-5 flex items-center gap-4">
                        <span className="w-8 h-px bg-amberAccent inline-block flex-shrink-0" />
                        {bolum.baslik}
                      </h4>
                      <div className="space-y-5 pl-12">
                        {bolum.metin.split('\n\n').map((paragraf, pIdx) => (
                          <p key={pIdx} className="text-textMuted leading-loose text-base lg:text-lg">
                            {paragraf}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'uretim' && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
              <div className="space-y-10">
                <div>
                  <h4 className="font-serif text-2xl text-amberAccent mb-3">Hammadde</h4>
                  <p className="text-textMain text-lg leading-relaxed">{drink.hammadde}</p>
                </div>
                <div>
                  <h4 className="font-serif text-2xl text-amberAccent mb-3">Üretim Süreci</h4>
                  <p className="text-textMain text-lg leading-relaxed">{drink.uretim_sureci}</p>
                </div>
                <div>
                  <h4 className="font-serif text-2xl text-amberAccent mb-3">Dinlendirme</h4>
                  <p className="text-textMain text-lg leading-relaxed">{drink.dinlendirme}</p>
                </div>
              </div>
              <div className="bg-[#0f0a06] p-8 lg:p-10 rounded-2xl border border-[#2a2015] space-y-6">
                <h4 className="font-serif text-3xl text-amberAccent mb-6">Tadım Profili</h4>
                <div className="space-y-5 text-lg">
                  <div className="flex flex-col"><span className="text-textMuted uppercase text-sm tracking-widest mb-1">Renk</span>{drink.renk}</div>
                  <div className="flex flex-col"><span className="text-textMuted uppercase text-sm tracking-widest mb-1">Koku</span>{drink.koku}</div>
                  <div className="flex flex-col"><span className="text-textMuted uppercase text-sm tracking-widest mb-1">Tat</span>{drink.tat}</div>
                  <div className="flex flex-col"><span className="text-textMuted uppercase text-sm tracking-widest mb-1">Finish</span>{drink.finish}</div>
                  <div className="flex flex-col"><span className="text-textMuted uppercase text-sm tracking-widest mb-1">Body</span>{drink.vucut}</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'nasil_icilir' && (
          <div className="space-y-12">
            {drink.sek_detay && drink.sek_detay.kadeh && (
              <div className="mb-12">
                <h3 className="font-serif text-3xl text-amberAccent mb-6">Sek İçim</h3>
                <div className="bg-[#0f0a06] p-8 rounded-2xl border border-[#2a2015] grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div><span className="text-textMuted block text-sm uppercase tracking-widest mb-2">Kadeh</span><span className="text-lg">{drink.sek_detay.kadeh}</span></div>
                  <div><span className="text-textMuted block text-sm uppercase tracking-widest mb-2">Sıcaklık</span><span className="text-lg">{drink.sek_detay.sicaklik || '-'}</span></div>
                  <div><span className="text-textMuted block text-sm uppercase tracking-widest mb-2">Miktar</span><span className="text-lg">{drink.sek_detay.miktar || '-'}</span></div>
                  <div className="md:col-span-3 pt-4 border-t border-[#2a2015]"><span className="text-textMuted block text-sm uppercase tracking-widest mb-2">Hazırlık</span><span className="text-lg leading-relaxed">{drink.sek_detay.hazirlik || '-'}</span></div>
                </div>
              </div>
            )}
            
            {drink.mix_detay && drink.mix_detay.length > 0 && (
              <div>
                <h3 className="font-serif text-3xl text-amberAccent mb-6">Karışımlar & Kokteyller</h3>
                <div className="space-y-8">
                  {drink.mix_detay.map((mix, idx) => (
                    <div key={idx} className="bg-[#0f0a06] p-8 rounded-2xl border border-[#2a2015]">
                      <h4 className="font-serif text-2xl font-semibold mb-4">{mix.isim}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <span className="text-textMuted block text-sm uppercase tracking-widest mb-3">Malzemeler</span>
                          <ul className="list-disc list-inside text-lg text-textMain space-y-2">
                            {mix.malzemeler.map((item, i) => <li key={i}>{item}</li>)}
                          </ul>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <span className="text-amberAccent block text-sm uppercase tracking-widest mb-1">Nasıl</span>
                            <p className="text-lg">{mix.hazirlanis}</p>
                          </div>
                          <div>
                            <span className="text-amberAccent block text-sm uppercase tracking-widest mb-1">Neden İşliyor</span>
                            <p className="text-lg">{mix.neden}</p>
                          </div>
                          <div>
                            <span className="text-amberAccent block text-sm uppercase tracking-widest mb-1">İdeal Ortam</span>
                            <p className="text-lg">{mix.ortam}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'eslesme' && (
          <div className="space-y-10">
            <div>
              <h3 className="font-serif text-3xl text-amberAccent mb-6">Yemek Eşleşmesi</h3>
              <p className="text-textMain text-xl leading-relaxed bg-[#0f0a06] p-8 rounded-2xl border border-[#2a2015]">{drink.yiyecek}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="bg-[#0f0a06] p-8 rounded-2xl border border-[#2a2015]">
                 <span className="text-sm text-textMuted block mb-3 uppercase tracking-widest">Müzik & His</span>
                 <p className="text-xl leading-relaxed">{drink.muzik_his}</p>
               </div>
               <div className="bg-[#0f0a06] p-8 rounded-2xl border border-[#2a2015]">
                 <span className="text-sm text-textMuted block mb-3 uppercase tracking-widest">İdeal Mevsim</span>
                 <p className="text-xl leading-relaxed">{drink.mevsim}</p>
               </div>
            </div>
          </div>
        )}

        {activeTab === 'doz_kultur' && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
              <div>
                <h3 className="font-serif text-3xl text-amberAccent mb-6">Doz (70kg birey)</h3>
                <div className="bg-[#0f0a06] p-8 rounded-2xl border border-[#2a2015] space-y-6 text-lg">
                  <div className="flex justify-between items-center border-b border-[#2a2015] pb-4">
                    <span className="text-textMuted uppercase tracking-widest text-sm">ABV</span>
                    <span className="font-semibold text-xl">%{drink.abv_range}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-[#2a2015] pb-4">
                    <span className="text-textMuted">Çakırkeyif</span>
                    <span className="text-xl">{drink.kafa_dozu?.hafif}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-[#2a2015] pb-4">
                    <span className="text-textMuted">İdeal Bölge</span>
                    <span className="text-amberAccent font-bold text-xl">{drink.kafa_dozu?.ideal}</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-[#2a2015] pb-4">
                    <span className="text-textMuted">Limit Üstü</span>
                    <span className="text-red-400 text-xl">{drink.kafa_dozu?.limit_ustu}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-textMuted">Akşamdan Kalma Riski</span>
                    <span className="text-xl">{drink.kafa_dozu?.ertesi_gun} / 5</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-3xl text-amberAccent mb-6">Trivia</h3>
                <div className="space-y-8">
                  {drink.sozler && (
                    <blockquote className="border-l-4 border-amberAccent pl-6 italic text-2xl text-textMuted leading-relaxed">
                      {drink.sozler}
                    </blockquote>
                  )}
                  {drink.yanlis_bilinenler && (
                    <div className="bg-[#1a130c] border border-[#2a2015] p-6 rounded-xl">
                      <span className="text-amberAccent block mb-2 font-semibold uppercase tracking-widest text-sm">Biliyor muydunuz?</span>
                      <p className="text-lg leading-relaxed">{drink.yanlis_bilinenler}</p>
                    </div>
                  )}
                  {drink.pop_kultur && (
                    <div className="bg-[#1a130c] border border-[#2a2015] p-6 rounded-xl">
                      <span className="text-textMuted block mb-2 uppercase tracking-widest text-sm">Popüler Kültür</span>
                      <p className="text-lg leading-relaxed">{drink.pop_kultur}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
