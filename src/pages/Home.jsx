import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { drinks } from '../data/drinks';
import FilterBar from '../components/FilterBar';
import DrinkDetail from './DrinkDetail';

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
        <div className="flex gap-2 mb-6">
          {drink.tag.map(t => (
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

export default function Home() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('Hepsi');
  const scrollRef = useRef(null);
  const heroRef = useRef(null);
  const isSnapping = useRef(false);
  const prevScrollY = useRef(0);
  const [scrollY, setScrollY] = useState(0);

  const filteredDrinks = drinks.filter((drink) => {
    if (activeFilter === 'Hepsi') return true;
    return drink.tag.includes(activeFilter);
  });

  const selectedDrink = id ? drinks.find(d => d.id === id) : null;
  const isDetailMode = !!selectedDrink;

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || isDetailMode) return;

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
  }, [isDetailMode]);

  useEffect(() => {
    if (!isDetailMode && scrollRef.current) {
      scrollRef.current.scrollTop = 0;
      setScrollY(0);
    }
  }, [isDetailMode]);

  const heroHeight = heroRef.current?.offsetHeight || 1;
  const heroProgress = Math.min(1, scrollY / heroHeight);
  const heroStyle = {
    opacity: Math.max(0, 1 - heroProgress * 1.4),
    transform: `translateY(${-heroProgress * 80}px)`,
    pointerEvents: heroProgress > 0.5 ? 'none' : 'auto',
  };

  return (
    <div className="flex flex-col flex-1 w-full h-full overflow-hidden bg-darkBg relative">
      {isDetailMode ? (
        <>
          <div className="px-4 lg:px-6 py-3 border-b border-[#2a2015] flex-shrink-0 z-10 bg-darkBg flex items-center gap-4">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-textMuted hover:text-amberAccent transition-colors group flex-shrink-0"
            >
              <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
              <span className="text-sm font-medium uppercase tracking-widest">Geri</span>
            </button>
            <div className="w-px h-5 bg-[#2a2015] flex-shrink-0" />
            <span className="font-serif text-lg text-textMain truncate">{selectedDrink.name}</span>
          </div>
          <div className="flex flex-1 overflow-hidden relative w-full">
            <div className="hidden md:block h-full overflow-y-auto custom-scrollbar absolute left-0 top-0 bottom-0 md:w-80 lg:w-96 border-r border-[#2a2015]">
              <div className="px-3 py-3 border-b border-[#2a2015]">
                <FilterBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} compact />
              </div>
              <div className="flex flex-col gap-2 p-4 lg:p-6">
                {filteredDrinks.map((drink) => (
                  <button
                    key={drink.id}
                    onClick={() => navigate(`/drink/${drink.id}`)}
                    className={`flex items-center gap-4 w-full p-4 rounded-xl transition-all duration-300 text-left group ${
                      selectedDrink.id === drink.id
                        ? 'bg-[#2a2015] border-amberAccent border shadow-[0_0_15px_rgb(200,134,10,0.1)]'
                        : 'bg-transparent border border-transparent hover:bg-[#1a130c] hover:border-[#2a2015]'
                    }`}
                  >
                    <div className="text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">{drink.emoji}</div>
                    <div className="overflow-hidden">
                      <h3 className={`font-serif text-lg font-semibold truncate transition-colors ${selectedDrink.id === drink.id ? 'text-amberAccent' : 'text-textMain group-hover:text-amberAccent'}`}>
                        {drink.name}
                      </h3>
                      <p className="text-xs text-textMuted uppercase tracking-wider truncate mt-1">
                        {drink.tag.slice(0, 2).join(' • ')}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <div className="h-full overflow-y-auto custom-scrollbar bg-darkBg absolute right-0 top-0 bottom-0 w-full md:w-[calc(100%-20rem)] lg:w-[calc(100%-24rem)] md:left-auto left-0">
              {selectedDrink && <DrinkDetail drink={selectedDrink} />}
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Floating FilterBar — hero çıkınca altta belirir */}
          <div
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500"
            style={{
              opacity: heroProgress >= 1 ? 1 : 0,
              transform: `translateX(-50%) translateY(${heroProgress >= 1 ? '0px' : '20px'})`,
              pointerEvents: heroProgress >= 1 ? 'auto' : 'none',
            }}
          >
            <div className="px-3 py-2.5 rounded-2xl border border-[#3a2c1e] bg-[#0f0a06]/85 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.7)]">
              <FilterBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} compact />
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto custom-scrollbar">

          {/* Hero — full screen, scrolls away */}
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
              <div className="mt-14">
                <FilterBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
              </div>
            </div>

            <div className="absolute bottom-10 flex flex-col items-center gap-2 text-textMuted opacity-50">
              <span className="text-xs uppercase tracking-widest">Kaydır</span>
              <svg width="14" height="22" viewBox="0 0 14 22" fill="none" className="animate-bounce">
                <path d="M7 2 L7 18 M2 13 L7 18 L12 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* Drink cards */}
          <div className="px-6 lg:px-12 pt-16 pb-32 flex flex-col gap-24 md:gap-32 max-w-7xl mx-auto">
            {filteredDrinks.map((drink, index) => (
              <AnimatedCard
                key={drink.id}
                drink={drink}
                index={index}
                isReversed={index % 2 === 1}
                onClick={() => navigate(`/drink/${drink.id}`)}
              />
            ))}
            {filteredDrinks.length === 0 && (
              <div className="text-center py-20 text-textMuted text-xl">
                Bu filtreye uygun içki bulunamadı.
              </div>
            )}
          </div>

        </div>
        </>
      )}
    </div>
  );
}
