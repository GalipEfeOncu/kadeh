import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { drinks } from '../data/drinks';
import { kategoriler } from '../data/kategoriler';

const ALKOL_ETIKET = { hafif: 'Hafif (%0-15)', orta: 'Orta (%15-30)', sert: 'Sert (%30+)' };
const OLGUNLASMA_ETIKET = { fıçılanmış: 'Fıçılanmış', dinlendirilmemiş: 'Dinlendirilmemiş', karışım: 'Karışım' };

function AnimatedCard({ drink, index, isReversed, onClick }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onClick={onClick}
      className={`group flex flex-col md:flex-row gap-8 lg:gap-16 items-center cursor-pointer
        ${isReversed ? 'md:flex-row-reverse' : ''}
        transition-all duration-700 ease-out
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-14'}
      `}
      style={{ transitionDelay: `${Math.min(index * 90, 270)}ms` }}
    >
      <div
        className="w-full md:w-5/12 aspect-[4/3] bg-[#1a130c] rounded-3xl flex items-center justify-center text-8xl md:text-9xl border border-[#2a2015] transition-all duration-500 group-hover:border-amberAccent group-hover:scale-[1.02] shadow-xl"
        style={{ boxShadow: `0 20px 60px ${drink.color}10` }}
      >
        <span className="group-hover:scale-110 transition-transform duration-500">{drink.emoji}</span>
      </div>
      <div className="w-full md:w-7/12 flex flex-col justify-center px-4 md:px-0">
        <div className="flex flex-wrap gap-2 mb-6">
          {[drink.alt_tur, ...(drink.aroma || [])].filter(Boolean).map(t => (
            <span key={t} className="text-xs uppercase tracking-wider font-semibold px-4 py-1.5 rounded-full border border-[#3a2c1e] text-amberAccent bg-[#1a130c]">
              {t}
            </span>
          ))}
        </div>
        <h2 className="font-serif text-5xl md:text-7xl font-bold text-textMain mb-6 group-hover:text-amberAccent transition-colors duration-300">
          {drink.name}
        </h2>
        <p className="text-textMuted text-lg md:text-2xl leading-relaxed mb-8 max-w-2xl">
          {drink.lore_short}
        </p>
        <span className="inline-flex items-center gap-3 text-sm uppercase tracking-widest font-semibold text-textMain group-hover:text-amberAccent transition-colors">
          Hikayeyi Oku <span className="text-amberAccent text-xl transition-transform group-hover:translate-x-2">→</span>
        </span>
      </div>
    </div>
  );
}

export default function KategoriSayfasi() {
  const { ana_tur } = useParams();
  const navigate = useNavigate();

  const kategori = kategoriler.find(k => k.id === ana_tur);
  const tumDrinks = drinks.filter(d => d.ana_tur === ana_tur);

  const [altTur, setAltTur] = useState('hepsi');
  const [alkolSeviye, setAlkolSeviye] = useState('hepsi');
  const [olgunlasma, setOlgunlasma] = useState('hepsi');

  const mevcutOlgunlasma = [...new Set(tumDrinks.map(d => d.olgunlasma).filter(Boolean))];
  const mevcutAlkol = [...new Set(tumDrinks.map(d => d.alkol_seviye).filter(Boolean))];

  const filtrelenmis = tumDrinks.filter(d => {
    if (altTur !== 'hepsi' && d.alt_tur !== altTur) return false;
    if (alkolSeviye !== 'hepsi' && d.alkol_seviye !== alkolSeviye) return false;
    if (olgunlasma !== 'hepsi' && d.olgunlasma !== olgunlasma) return false;
    return true;
  });

  if (!kategori) {
    return (
      <div className="flex-1 flex items-center justify-center text-textMuted">
        Kategori bulunamadı.
      </div>
    );
  }

  const PillGrup = ({ baslik, secili, setSecili, secenekler, etiketler = {} }) => (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-xs uppercase tracking-widest text-textMuted font-semibold w-full mb-1">{baslik}</span>
      <button
        onClick={() => setSecili('hepsi')}
        className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-200
          ${secili === 'hepsi' ? 'bg-amberAccent text-darkBg border-amberAccent' : 'border-[#3a2c1e] text-textMuted hover:border-amberAccent hover:text-textMain'}`}
      >
        Hepsi
      </button>
      {secenekler.map(s => (
        <button
          key={s}
          onClick={() => setSecili(s)}
          className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-200
            ${secili === s ? 'bg-amberAccent text-darkBg border-amberAccent' : 'border-[#3a2c1e] text-textMuted hover:border-amberAccent hover:text-textMain'}`}
        >
          {etiketler[s] || s}
        </button>
      ))}
    </div>
  );

  return (
    <div className="flex-1 overflow-y-auto custom-scrollbar">

      {/* Üst bar */}
      <div className="sticky top-0 z-10 bg-darkBg border-b border-[#2a2015] px-4 lg:px-8 py-3 flex items-center gap-4">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-textMuted hover:text-amberAccent transition-colors group flex-shrink-0"
        >
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          <span className="text-sm font-medium uppercase tracking-widest hidden sm:block">Geri</span>
        </button>
        <div className="w-px h-5 bg-[#2a2015] flex-shrink-0" />
        <span className="font-serif text-lg text-textMain">{kategori.name}</span>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        {/* Kategori başlığı */}
        <div className="py-14 md:py-20 border-b border-[#2a2015] mb-12">
          <div className="flex items-start gap-6 md:gap-10">
            <div
              className="w-20 h-20 md:w-28 md:h-28 flex-shrink-0 rounded-2xl bg-[#1a130c] border border-[#2a2015] flex items-center justify-center text-4xl md:text-5xl"
              style={{ boxShadow: `0 10px 40px ${kategori.renk}15` }}
            >
              {kategori.emoji}
            </div>
            <div>
              <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4">{kategori.name}</h1>
              <p className="text-textMuted text-lg md:text-xl leading-relaxed max-w-2xl">{kategori.aciklama}</p>
            </div>
          </div>
        </div>

        {/* Filtreler */}
        <div className="mb-12 flex flex-col gap-5 p-6 bg-[#1a130c] border border-[#2a2015] rounded-2xl">
          <PillGrup
            baslik="Alt Tür"
            secili={altTur}
            setSecili={setAltTur}
            secenekler={kategori.alt_turler.map(a => a.id)}
            etiketler={Object.fromEntries(kategori.alt_turler.map(a => [a.id, a.label]))}
          />
          {mevcutAlkol.length > 1 && (
            <PillGrup
              baslik="Alkol Seviyesi"
              secili={alkolSeviye}
              setSecili={setAlkolSeviye}
              secenekler={mevcutAlkol}
              etiketler={ALKOL_ETIKET}
            />
          )}
          {mevcutOlgunlasma.length > 1 && (
            <PillGrup
              baslik="Olgunlaşma"
              secili={olgunlasma}
              setSecili={setOlgunlasma}
              secenekler={mevcutOlgunlasma}
              etiketler={OLGUNLASMA_ETIKET}
            />
          )}
        </div>

        {/* İçki listesi */}
        <div className="flex flex-col gap-24 md:gap-32 pb-32">
          {filtrelenmis.length > 0 ? (
            filtrelenmis.map((drink, index) => (
              <AnimatedCard
                key={drink.id}
                drink={drink}
                index={index}
                isReversed={index % 2 === 1}
                onClick={() => navigate(`/drink/${drink.id}`)}
              />
            ))
          ) : (
            <div className="text-center py-20 text-textMuted text-xl">
              Bu filtreye uygun içki bulunamadı.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
