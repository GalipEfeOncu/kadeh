import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { drinks } from '../data/drinks';

export default function SearchOverlay({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const results = query.trim().length > 0
    ? drinks.filter(d =>
        d.name.toLowerCase().includes(query.toLowerCase()) ||
        d.aroma?.some(t => t.toLowerCase().includes(query.toLowerCase())) ||
        d.ana_tur?.toLowerCase().includes(query.toLowerCase()) ||
        (d.aliases && d.aliases.some(a => a.toLowerCase().includes(query.toLowerCase())))
      )
    : drinks;

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setTimeout(() => inputRef.current?.focus(), 60);
    }
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

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 px-4">
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-lg animate-in">
        <div className="bg-[#1a130c] border border-[#3a2c1e] rounded-2xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.8)]">

          {/* Input */}
          <div className="flex items-center gap-3 px-5 py-4 border-b border-[#2a2015]">
            <Search size={17} className="text-textMuted flex-shrink-0" />
            <input
              ref={inputRef}
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="İçki ara..."
              className="flex-1 bg-transparent text-textMain placeholder-textMuted text-base outline-none"
            />
            <button onClick={onClose} className="text-textMuted hover:text-textMain transition-colors">
              <X size={17} />
            </button>
          </div>

          {/* Results */}
          <ul className="max-h-80 overflow-y-auto custom-scrollbar">
            {results.map((drink) => (
              <li key={drink.id}>
                <button
                  onClick={() => handleSelect(drink)}
                  className="w-full flex items-center gap-4 px-5 py-3.5 hover:bg-[#2a2015] transition-colors text-left group"
                >
                  <span className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">{drink.emoji}</span>
                  <div className="min-w-0">
                    <p className="font-serif text-base text-textMain group-hover:text-amberAccent transition-colors truncate">{drink.name}</p>
                    <p className="text-xs text-textMuted uppercase tracking-wider truncate">{[drink.ana_tur, drink.alt_tur].filter(Boolean).join(' • ')}</p>
                  </div>
                </button>
              </li>
            ))}
            {query.trim().length > 0 && results.length === 0 && (
              <li className="px-5 py-8 text-center text-textMuted text-sm">Sonuç bulunamadı.</li>
            )}
          </ul>

        </div>
      </div>
    </div>
  );
}
