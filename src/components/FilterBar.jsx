export default function FilterBar({ activeFilter, setActiveFilter }) {
  const filters = ['Hepsi', 'Distilled', 'Fermented', 'Clear', 'Aged', 'Anise'];

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => setActiveFilter(filter)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
            activeFilter === filter
              ? 'bg-amberAccent text-darkBg border-amberAccent shadow-[0_0_15px_rgb(200,134,10,0.4)]'
              : 'bg-transparent text-textMuted border-[#3a2c1e] hover:border-amberAccent hover:text-textMain'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
