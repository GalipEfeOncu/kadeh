import { Link } from 'react-router-dom';

export default function DrinkCard({ drink }) {
  return (
    <Link to={`/drink/${drink.id}`} className="block group h-full">
      <div className="bg-darkCard border border-[#2a2015] rounded-xl p-6 h-full flex flex-col transition-all duration-300 hover:border-amberAccent hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(200,134,10,0.1)]">
        <div className="text-4xl mb-4 bg-[#2a2015] w-14 h-14 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
          {drink.emoji}
        </div>
        <h3 className="font-serif text-2xl font-semibold text-textMain mb-3">{drink.name}</h3>
        <p className="text-textMuted text-sm leading-relaxed mb-6 flex-1">
          {drink.lore_short}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {drink.tag.map((t) => (
            <span key={t} className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full border border-[#3a2c1e] text-amberAccent">
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
