import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { drinks } from '../data/drinks';
import { kategoriler } from '../data/kategoriler';

function KategoriKart({ kategori, drinkSayisi, index, onClick }) {
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

  const isRaki = kategori.id === 'rakı';

  return (
    <div
      ref={ref}
      onClick={onClick}
      className={`group cursor-pointer transition-all duration-700 ease-out
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        ${isRaki ? 'md:col-span-2' : ''}
      `}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className={`relative bg-[#1a130c] border border-[#2a2015] rounded-3xl overflow-hidden
          hover:border-amberAccent transition-all duration-500 hover:shadow-[0_0_40px_rgba(200,134,10,0.12)]
          ${isRaki ? 'p-10 md:p-14' : 'p-8'}
        `}
        style={{ boxShadow: `0 20px 60px ${kategori.renk}08` }}
      >
        {/* Arka plan dekor */}
        <div
          className="absolute right-0 top-0 w-48 h-48 rounded-full opacity-5 blur-3xl pointer-events-none"
          style={{ background: kategori.renk || '#c8860a' }}
        />

        <div className={`flex ${isRaki ? 'flex-col md:flex-row md:items-center gap-8' : 'flex-col gap-6'}`}>
          {/* Emoji */}
          <div
            className={`flex-shrink-0 rounded-2xl bg-[#0f0a06] border border-[#2a2015] flex items-center justify-center
              group-hover:border-amberAccent group-hover:scale-105 transition-all duration-500
              ${isRaki ? 'w-24 h-24 md:w-32 md:h-32 text-5xl md:text-6xl' : 'w-16 h-16 text-3xl'}
            `}
          >
            {kategori.emoji}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-3">
              <h2 className={`font-serif font-bold text-textMain group-hover:text-amberAccent transition-colors
                ${isRaki ? 'text-4xl md:text-5xl' : 'text-2xl md:text-3xl'}
              `}>
                {kategori.name}
              </h2>
              {drinkSayisi > 0 && (
                <span className="text-xs uppercase tracking-widest text-amberAccent border border-[#3a2c1e] bg-[#0f0a06] px-2.5 py-1 rounded-full flex-shrink-0">
                  {drinkSayisi} çeşit
                </span>
              )}
            </div>
            <p className={`text-textMuted leading-relaxed ${isRaki ? 'text-lg md:text-xl max-w-xl' : 'text-sm md:text-base'}`}>
              {kategori.aciklama}
            </p>
            {isRaki && (
              <div className="flex flex-wrap gap-2 mt-5">
                {kategori.alt_turler.map(a => (
                  <span key={a.id} className="text-xs uppercase tracking-wider text-textMuted border border-[#2a2015] px-3 py-1 rounded-full">
                    {a.label}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="flex-shrink-0 text-amberAccent text-xl transition-transform duration-300 group-hover:translate-x-1 self-end md:self-center">
            →
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const heroRef = useRef(null);
  const isSnapping = useRef(false);
  const prevScrollY = useRef(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      const top = el.scrollTop;
      const goingDown = top > prevScrollY.current;
      prevScrollY.current = top;
      setScrollY(top);

      if (isSnapping.current) return;

      const heroHeight = heroRef.current?.offsetHeight ?? 0;
      if (top > 0 && top < heroHeight) {
        isSnapping.current = true;
        el.scrollTo({ top: goingDown ? heroHeight : 0, behavior: 'smooth' });
        setTimeout(() => { isSnapping.current = false; }, 900);
      }
    };

    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  const heroHeight = heroRef.current?.offsetHeight || 1;
  const heroProgress = Math.min(1, scrollY / heroHeight);
  const heroStyle = {
    opacity: Math.max(0, 1 - heroProgress * 1.4),
    transform: `translateY(${-heroProgress * 80}px)`,
    pointerEvents: heroProgress > 0.5 ? 'none' : 'auto',
  };

  const drinkSayilari = {};
  drinks.forEach(d => {
    drinkSayilari[d.ana_tur] = (drinkSayilari[d.ana_tur] || 0) + 1;
  });

  return (
    <div className="flex flex-col flex-1 w-full h-full overflow-hidden bg-darkBg relative">
      <div ref={scrollRef} className="flex-1 overflow-y-auto custom-scrollbar">

        {/* Hero */}
        <div
          ref={heroRef}
          className="relative flex flex-col items-center justify-center text-center px-6 min-h-[calc(100dvh-64px)]"
          style={heroStyle}
        >
          <div className="max-w-5xl mx-auto">
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-balance leading-[1.15] md:leading-[1.1]">
              Bardağa dökülen her şeyin hikayesi,{' '}
              <br className="hidden md:block" />
              <span className="text-amberAccent italic">kadehten kadehe yazıldı.</span>
            </h1>
            <p className="text-textMuted text-xl md:text-2xl leading-relaxed mt-6 max-w-2xl mx-auto">
              Süslü barlara ya da sommelier sözlüğüne gerek yok. Ne içtiğin, damağında nasıl bir iz bıraktığı ve o kadehe nasıl kavuştuğun. Hepsi burada, olduğu gibi.
            </p>
          </div>
          <div className="absolute bottom-10 flex flex-col items-center gap-2 text-textMuted opacity-50">
            <span className="text-xs uppercase tracking-widest">Keşfet</span>
            <svg width="14" height="22" viewBox="0 0 14 22" fill="none" className="animate-bounce">
              <path d="M7 2 L7 18 M2 13 L7 18 L12 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Kategori kartları */}
        <div className="px-6 lg:px-12 pt-16 pb-32 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {kategoriler.map((kategori, index) => (
              <KategoriKart
                key={kategori.id}
                kategori={kategori}
                drinkSayisi={drinkSayilari[kategori.id] || 0}
                index={index}
                onClick={() => navigate(`/tur/${kategori.id}`)}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
