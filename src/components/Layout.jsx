import { Link } from 'react-router-dom';
import { Wine } from 'lucide-react';

export default function Layout({ children }) {
  return (
    <div className="h-screen w-full flex flex-col bg-darkBg overflow-hidden">
      <header className="border-b border-[#2a2015] py-4 px-6 lg:px-12 flex-shrink-0 z-10 bg-darkBg relative">
        <div className="w-full flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 text-textMain hover:text-amberAccent transition-colors">
            <Wine className="w-7 h-7 text-amberAccent" />
            <span className="font-serif text-2xl font-semibold tracking-wide">Kadeh</span>
          </Link>
          <nav className="flex gap-6 text-sm font-medium tracking-widest uppercase text-textMuted">
            <Link to="/" className="hover:text-amberAccent transition-colors">İçkiler</Link>
            <a href="#" className="hover:text-amberAccent transition-colors">Hakkında</a>
          </nav>
        </div>
      </header>
      
      <main className="flex-1 overflow-hidden flex flex-col w-full relative">
        {children}
      </main>
    </div>
  );
}
