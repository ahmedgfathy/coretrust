const services = [
  { title: 'Real Estate Development', desc: 'Research, site evaluation, and development of distinctive properties with innovative design and sustainable construction methods.', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
  { title: 'Interior Design & Execution', desc: 'Creating functional, elegant, and personalized interior spaces with 3D design solutions for residential and commercial projects.', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { title: 'Contracting & Construction', desc: 'Executing projects efficiently with quality materials and expert engineering supervision across residential, commercial, and industrial buildings.', icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z' },
  { title: 'Maintenance', desc: 'Providing comprehensive maintenance for residential compounds, commercial buildings, elevators, and electromechanical systems.', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z' },
]

const Services = () => {
  return (
    <section id="services" className="py-24 bg-[#0f0f22] relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4a017]/20 to-transparent"></div>
        <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4a017]/20 to-transparent"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4a017]/20 to-transparent"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-12 h-px bg-[#d4a017]"></div>
            <span className="text-[#d4a017] text-sm uppercase tracking-[0.3em] font-medium">Our Services</span>
            <div className="w-12 h-px bg-[#d4a017]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Our Services</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Comprehensive real estate and engineering solutions through our specialized divisions.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div key={i} className="group bg-[#121226]/50 border border-[#d4a017]/20 p-8 hover:border-[#d4a017]/50 transition-all duration-500 card-hover relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4a017]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-[#d4a017]/10 flex items-center justify-center mb-6 text-[#d4a017] group-hover:bg-[#d4a017]/20 transition-colors duration-300">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} />
                  </svg>
                </div>
                <h3 className="text-white text-xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-[#d4a017]/30 group-hover:border-[#d4a017]/60 transition-colors duration-300"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-[#d4a017]/30 group-hover:border-[#d4a017]/60 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
