import { Link } from 'react-router-dom';
import { Wine } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <div className="flex-1 overflow-y-auto custom-scrollbar">
      <SEO title="404 - Sayfa Bulunamadı" description="Aradığınız sayfa bulunamadı." />
      <div className="flex flex-col items-center justify-center min-h-full px-6 py-20 text-center">
        <Wine size={64} className="text-amberAccent mb-6 opacity-60" />
        <h1 className="font-serif text-8xl md:text-9xl font-bold text-amberAccent mb-4 select-none">
          404
        </h1>
        <p className="font-serif text-2xl md:text-3xl text-textMain mb-3">
          Bu kadeh boş kalmış...
        </p>
        <p className="text-textMuted text-base md:text-lg mb-10 max-w-md">
          Aradığın sayfa bulunamadı. Belki yanlış bir yol izledin, belki de bu içki henüz keşfedilmedi.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-8 py-3 bg-amberAccent text-darkBg font-semibold rounded-full hover:bg-[#e09b1a] transition-colors text-sm uppercase tracking-widest"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
}
