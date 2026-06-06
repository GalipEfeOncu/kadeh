import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Wine, Search } from 'lucide-react';
import SearchOverlay from './SearchOverlay';

export default function Layout({ children }) {
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const activeEl = document.activeElement;
      if (activeEl && ['INPUT', 'TEXTAREA', 'SELECT'].includes(activeEl.tagName)) {
        return;
      }

      if (e.key === '/' || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k')) {
        e.preventDefault();
        setSearchOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="h-screen w-full flex flex-col bg-darkBg overflow-hidden">
      <header className="border-b border-[#2a2015] py-3 px-4 md:py-4 md:px-6 lg:px-12 flex-shrink-0 z-10 bg-darkBg relative">
        <div className="w-full flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 text-textMain hover:text-amberAccent transition-colors">
            <Wine className="w-5 h-5 md:w-7 md:h-7 text-amberAccent" />
            <span className="font-serif text-xl md:text-2xl font-semibold tracking-wide">Kadeh</span>
          </Link>
          <nav className="flex items-center gap-4 md:gap-6 text-sm font-medium tracking-widest uppercase text-textMuted">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Arama aç"
              className="flex items-center gap-2 hover:text-amberAccent transition-colors group relative"
            >
              <Search size={16} className="group-hover:scale-110 transition-transform" />
              <span>Ara</span>
              <span className="hidden sm:inline-block text-[10px] text-textMuted border border-[#2a2015] px-1.5 py-0.5 rounded font-mono leading-none bg-[#1a130c]">/</span>
            </button>
            <NavLink to="/hakkinda" className={({ isActive }) => `hover:text-amberAccent transition-colors ${isActive ? 'text-amberAccent' : ''}`}>Hakkında</NavLink>
          </nav>
        </div>
      </header>

      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      <main className="flex-1 overflow-hidden flex flex-col w-full relative">
        {children}
      </main>
    </div>
  );
}
