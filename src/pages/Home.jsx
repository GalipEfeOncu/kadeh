import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { drinks } from '../data/drinks';
import { kategoriler } from '../data/kategoriler';
import Footer from '../components/Footer';

function KategoriKart({ kategori, drinkSayisi, index, onClick }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); } },
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
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } }}
      role="button"
      tabIndex={0}
      aria-label={kategori.name}
      className={`group cursor-pointer transition-all duration-700 ease-out
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        ${isRaki ? 'col-span-full' : ''}
      `}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className={`bg-[#1a130c] border border-[#2a2015] rounded-2xl overflow-hidden
          hover:border-amberAccent transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between
          ${isRaki ? 'p-6 sm:p-10 min-h-[220px]' : 'p-6 md:p-8 h-[220px]'}
        `}
      >
        {isRaki ? (
          /* Rakı (Hero Category Card) */
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            {/* Emoji */}
            <div className="flex-shrink-0 w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-[#0f0a06] border border-[#2a2015] flex items-center justify-center text-4xl md:text-5xl group-hover:border-amberAccent group-hover:scale-105 transition-all duration-300">
              {kategori.emoji}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-3">
                <h2 className="font-serif font-bold text-3xl md:text-4xl text-textMain group-hover:text-amberAccent transition-colors">
                  {kategori.name}
                </h2>
                {drinkSayisi > 0 && (
                  <span className="text-xs uppercase tracking-widest text-amberAccent border border-[#3a2c1e] bg-[#0f0a06] px-2.5 py-1 rounded-full flex-shrink-0">
                    {drinkSayisi} çeşit
                  </span>
                )}
              </div>
              <p className="text-textMuted leading-relaxed text-sm md:text-base max-w-2xl">
                {kategori.aciklama}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {kategori.alt_turler.map(a => (
                  <span key={a.id} className="text-[10px] uppercase tracking-wider text-textMuted border border-[#2a2015] px-2.5 py-0.5 rounded-full">
                    {a.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex-shrink-0 text-amberAccent text-xl transition-transform duration-300 group-hover:translate-x-1 self-end md:self-center">
              →
            </div>
          </div>
        ) : (
          /* Standard Category Card Layout */
          <>
            <div className="flex justify-between items-center w-full">
              <div className="flex items-center gap-3">
                {/* Emoji */}
                <div className="w-12 h-12 rounded-xl bg-[#0f0a06] border border-[#2a2015] flex items-center justify-center text-2xl group-hover:border-amberAccent group-hover:scale-105 transition-all duration-300 flex-shrink-0">
                  {kategori.emoji}
                </div>
                {/* Title */}
                <h3 className="font-serif font-bold text-lg md:text-xl text-textMain group-hover:text-amberAccent transition-colors leading-tight">
                  {kategori.name}
                </h3>
              </div>
              {drinkSayisi > 0 && (
                <span className="text-[10px] uppercase tracking-widest text-amberAccent border border-[#3a2c1e] bg-[#0f0a06] px-2 py-0.5 rounded-full flex-shrink-0">
                  {drinkSayisi} çeşit
                </span>
              )}
            </div>

            <div className="mt-4 flex-1">
              <p className="text-textMuted text-xs md:text-sm leading-relaxed line-clamp-3">
                {kategori.aciklama}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  const navigate = useNavigate();
  const scrollRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    document.title = 'Kadeh — Türkçe Alkol Rehberi';
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    const heroEl = heroRef.current;
    if (!el || !heroEl) return;

    const onScroll = () => {
      const top = el.scrollTop;
      const heroHeight = heroEl.offsetHeight || 1;
      const progress = Math.min(1, top / heroHeight);
      
      heroEl.style.opacity = String(Math.max(0, 1 - progress * 1.4));
      heroEl.style.transform = `translateY(${-progress * 80}px)`;
      heroEl.style.pointerEvents = progress > 0.5 ? 'none' : 'auto';

      // Toggle scroll snapping dynamically to allow free scroll once scrolled past hero
      if (top >= heroHeight - 10) {
        if (el.classList.contains('snap-y')) {
          el.classList.remove('snap-y', 'snap-mandatory');
        }
      } else {
        if (!el.classList.contains('snap-y')) {
          el.classList.add('snap-y', 'snap-mandatory');
        }
      }
    };

    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  const drinkSayilari = {};
  drinks.forEach(d => {
    drinkSayilari[d.ana_tur] = (drinkSayilari[d.ana_tur] || 0) + 1;
  });

  return (
    <div className="flex flex-col flex-1 w-full h-full overflow-hidden bg-darkBg relative">
      <div ref={scrollRef} className="flex-1 overflow-y-auto custom-scrollbar snap-y snap-mandatory scroll-smooth">

        {/* Hero */}
        <div
          ref={heroRef}
          className="relative flex flex-col items-center justify-center text-center px-6 min-h-[calc(100vh-64px)] min-h-[calc(100dvh-64px)] snap-start"
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
        <div className="px-6 lg:px-12 pt-16 pb-32 max-w-5xl mx-auto snap-start">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

        <Footer />
      </div>
    </div>
  );
}
