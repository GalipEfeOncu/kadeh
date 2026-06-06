import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { drinks } from '../data/drinks';

export default function SearchOverlay({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const results = query.trim().length > 0
    ? drinks.filter(d =>
        d.name.toLowerCase().includes(query.toLowerCase()) ||
        d.aroma?.some(t => t.toLowerCase().includes(query.toLowerCase())) ||
        d.ana_tur?.toLowerCase().includes(query.toLowerCase()) ||
        (d.aliases && d.aliases.some(a => a.toLowerCase().includes(query.toLowerCase())))
      )
    : [];

  // Reset activeIndex when query changes
  useEffect(() => {
    setActiveIndex(-1);
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setTimeout(() => inputRef.current?.focus(), 60);
    }
  }, [isOpen]);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!isOpen) return null;

  const handleSelect = (drink) => {
    navigate(`/drink/${drink.id}`);
    onClose();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex(prev => (prev + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(prev => (prev - 1 + results.length) % results.length);
    } else if (e.key === 'Enter' && activeIndex >= 0 && activeIndex < results.length) {
      e.preventDefault();
      handleSelect(results[activeIndex]);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4" role="dialog" aria-modal="true" aria-label="İçki ara">
      <div
        className="absolute inset-0 bg-black/80"
        onClick={onClose}
      />
      <div className="relative w-full max-w-lg animate-in">
        <div className="bg-[#1a130c] border border-[#3a2c1e] rounded-2xl overflow-hidden shadow-2xl">

          {/* Input */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-[#2a2015]">
            <Search size={17} className="text-textMuted flex-shrink-0" />
            <input
              ref={inputRef}
              value={query}
              onChange={e => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="İçki ara..."
              aria-label="İçki ara"
              className="flex-1 bg-transparent text-textMain placeholder-textMuted text-base outline-none"
            />
            <button onClick={onClose} className="text-textMuted hover:text-textMain transition-colors">
              <X size={17} />
            </button>
          </div>

          {/* Results */}
          <ul className="max-h-80 overflow-y-auto custom-scrollbar" role="listbox">
            {query.trim().length === 0 ? (
              <li className="px-5 py-8 text-center text-textMuted text-sm">Bir içki adı, türü veya aroması yazın...</li>
            ) : results.length > 0 ? (
              results.map((drink, index) => (
                <li key={drink.id} role="option" aria-selected={index === activeIndex}>
                  <button
                    onClick={() => handleSelect(drink)}
                    className={`w-full flex items-center gap-4 px-5 py-3.5 transition-colors text-left group ${
                      index === activeIndex ? 'bg-[#2a2015]' : 'hover:bg-[#2a2015]'
                    }`}
                  >
                    <span className="text-2xl flex-shrink-0 group-hover:scale-105 transition-transform">{drink.emoji}</span>
                    <div className="min-w-0 flex-1">
                      <div className="flex justify-between items-center gap-2">
                        <p className="font-serif text-base text-textMain group-hover:text-amberAccent transition-colors truncate">{drink.name}</p>
                        <span className="text-[10px] uppercase tracking-wider text-amberAccent border border-[#2a2015] px-2 py-0.5 rounded bg-[#0f0a06] flex-shrink-0">
                          {drink.ana_tur}
                        </span>
                      </div>
                      <p className="text-xs text-textMuted uppercase tracking-wider truncate mt-0.5">{drink.alt_tur}</p>
                    </div>
                  </button>
                </li>
              ))
            ) : (
              <li className="px-5 py-8 text-center text-textMuted text-sm">Sonuç bulunamadı.</li>
            )}
          </ul>

        </div>
      </div>
    </div>
  );
}
