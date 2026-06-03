export const ANA_TURLER = ['Hepsi', 'rakı', 'viski', 'votka', 'bira'];

const ETIKET = {
  'Hepsi': 'Hepsi',
  'rakı': 'Rakı',
  'viski': 'Viski',
  'votka': 'Votka',
  'bira': 'Bira',
};

export default function FilterBar({ activeFilter, setActiveFilter, compact = false }) {
  return (
    <div className={`flex flex-nowrap justify-center gap-2 ${compact ? '' : 'mb-12'}`}>
      {ANA_TURLER.map((tur) => (
        <button
          key={tur}
          onClick={() => setActiveFilter(tur)}
          className={`rounded-full font-medium transition-all duration-300 border whitespace-nowrap
            ${compact ? 'px-4 py-1.5 text-xs' : 'px-5 py-2 text-sm'}
            ${activeFilter === tur
              ? 'bg-amberAccent text-darkBg border-amberAccent shadow-[0_0_12px_rgb(200,134,10,0.4)]'
              : 'bg-transparent text-textMuted border-[#3a2c1e] hover:border-amberAccent hover:text-textMain'
            }`}
        >
          {ETIKET[tur]}
        </button>
      ))}
    </div>
  );
}
