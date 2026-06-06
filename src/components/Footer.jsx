import { Link } from 'react-router-dom';
import { Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-[#2a2015] bg-[#1a130c] mt-auto">
      <div className="max-w-5xl mx-auto px-6 lg:px-12 py-8 flex flex-col gap-4">

        {/* Legal warning */}
        <p className="text-xs text-textMuted text-center md:text-left">
          +18 | Bu site alkollü içecekler hakkında bilgi içerir. Alkolü sorumlu tüketin.
        </p>

        {/* Navigation + Copyright + GitHub */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-textMuted">
          <div className="flex items-center gap-4">
            <Link to="/" className="hover:text-amberAccent transition-colors">Ana Sayfa</Link>
            <span className="text-[#2a2015]">·</span>
            <Link to="/hakkinda" className="hover:text-amberAccent transition-colors">Hakkında</Link>
            <span className="text-[#2a2015]">·</span>
            <a
              href="https://github.com/GalipEfeOncu/kadeh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-amberAccent transition-colors"
            >
              <Github size={13} />
              GitHub
            </a>
          </div>
          <span>© 2026 Kadeh — Galip Efe Öncü</span>
        </div>

      </div>
    </footer>
  );
}
