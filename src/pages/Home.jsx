import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { drinks } from '../data/drinks';
import FilterBar from '../components/FilterBar';
import DrinkDetail from './DrinkDetail';

export default function Home() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('Hepsi');

  const filteredDrinks = drinks.filter((drink) => {
    if (activeFilter === 'Hepsi') return true;
    return drink.tag.includes(activeFilter);
  });

  const selectedDrink = id ? drinks.find(d => d.id === id) : null;
  const isDetailMode = !!selectedDrink;

  return (
    <div className="flex flex-col flex-1 w-full h-full overflow-hidden bg-darkBg relative">
      {/* Header text and filters */}
      <div className={`px-6 lg:px-12 pt-8 flex-shrink-0 transition-all duration-300 z-10 bg-darkBg ${isDetailMode ? 'pb-4 border-b border-[#2a2015]' : 'pb-8'}`}>
        {!isDetailMode && (
          <div className="text-center mb-12 max-w-5xl mx-auto">
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
              Bardağa dökülen her şeyin hikayesi, <br className="hidden md:block" />
              <span className="text-amberAccent italic">kadehten kadehe yazıldı.</span>
            </h1>
            <p className="text-textMuted text-xl md:text-2xl leading-relaxed mt-6">
              Şatafatlı kokteyl barlara, havalı sommelier terimlerine gerek yok. Sadece ne içtiğin, tadının nasıl olduğu ve masaya neden geldiği hakkında samimi notlar.
            </p>
          </div>
        )}
        <FilterBar activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden relative w-full">
        
        {/* List / Sidebar Area */}
        <div 
          className={`h-full overflow-y-auto custom-scrollbar transition-all duration-300 ease-in-out absolute left-0 top-0 bottom-0
            ${isDetailMode ? 'w-full md:w-80 lg:w-96 border-r border-[#2a2015]' : 'w-full border-transparent'}
          `}
        >
          <div className={`p-6 lg:p-12 ${isDetailMode ? 'p-4 lg:p-6' : ''}`}>
            {isDetailMode ? (
              /* SIDEBAR MODE */
              <div className="flex flex-col gap-2">
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
                        {drink.tag.slice(0,2).join(' • ')}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              /* EDITORIAL LIST MODE */
              <div className="flex flex-col gap-12 md:gap-24 max-w-7xl mx-auto pb-24">
                {filteredDrinks.map((drink, index) => (
                  <div 
                    key={drink.id} 
                    onClick={() => navigate(`/drink/${drink.id}`)}
                    className={`group flex flex-col md:flex-row gap-8 lg:gap-16 items-center cursor-pointer ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                  >
                    <div className="w-full md:w-5/12 aspect-[4/3] bg-[#1a130c] rounded-3xl flex items-center justify-center text-8xl md:text-9xl border border-[#2a2015] transition-all duration-500 group-hover:border-amberAccent group-hover:scale-[1.02] shadow-xl" style={{ boxShadow: `0 20px 60px ${drink.color}10` }}>
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
                ))}
              </div>
            )}
            
            {filteredDrinks.length === 0 && (
              <div className="text-center py-20 text-textMuted text-xl">
                Bu filtreye uygun içki bulunamadı.
              </div>
            )}
          </div>
        </div>

        {/* Detail Area */}
        <div 
          className={`h-full overflow-y-auto custom-scrollbar bg-darkBg transition-all duration-300 ease-in-out absolute right-0 top-0 bottom-0
            ${isDetailMode ? 'w-full md:w-[calc(100%-20rem)] lg:w-[calc(100%-24rem)] translate-x-0 opacity-100 z-0' : 'w-full md:w-[calc(100%-20rem)] lg:w-[calc(100%-24rem)] translate-x-full opacity-0 pointer-events-none z-0'}
          `}
        >
          {selectedDrink && <DrinkDetail drink={selectedDrink} />}
        </div>
      </div>
    </div>
  );
}
