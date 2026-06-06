import { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { drinks } from '../data/drinks';
import DrinkDetail from './DrinkDetail';
import Footer from '../components/Footer';

export default function DrinkPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const drink = drinks.find(d => d.id === id);

  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (drink) document.title = `${drink.name} | Kadeh`;
  }, [drink]);

  if (!drink) {
    return (
      <div className="flex-1 flex items-center justify-center text-textMuted">
        İçki bulunamadı.
      </div>
    );
  }

  return (
    <div ref={scrollRef} className="flex-1 overflow-y-auto custom-scrollbar">
      <div className="sticky top-0 z-10 bg-darkBg border-b border-[#2a2015] px-4 lg:px-8 py-3 flex items-center gap-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-textMuted hover:text-amberAccent transition-colors group flex-shrink-0"
        >
          <ArrowLeft size={18} className="transition-transform group-hover:-translate-x-1" />
          <span className="text-sm font-medium uppercase tracking-widest hidden sm:block">Geri</span>
        </button>
        <div className="w-px h-5 bg-[#2a2015] flex-shrink-0" />
        <span className="font-serif text-lg text-textMain truncate">{drink.name}</span>
      </div>
      <DrinkDetail drink={drink} />
      <Footer />
    </div>
  );
}
