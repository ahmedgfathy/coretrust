const stats = [
  { number: '90+', label: 'Projects Completed' },
  { number: '20+', label: 'Years Experience' },
  { number: '6', label: 'Service Divisions' },
  { number: '4+', label: 'Countries Served' },
]

const Stats = () => {
  return (
    <section className="py-14 sm:py-18 lg:py-20 bg-[#0a0a1a] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#d4a017]/10 to-transparent"></div>
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-[#d4a017]/10 to-transparent"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-[#d4a017]/10 to-transparent"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold gold-shimmer" style={{ fontFamily: 'Playfair Display, serif' }}>{s.number}</span>
              <p className="text-gray-500 mt-2 sm:mt-3 text-[10px] sm:text-xs md:text-sm uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
