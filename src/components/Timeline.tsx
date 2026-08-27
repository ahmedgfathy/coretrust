const events = [
  { 
    year: '2004', 
    title: 'Company Founded', 
    desc: 'Started with 8 residential towers in Alexandria and 7 residential towers in Cairo. Established in cooperation with Gulf Countries.',
    projects: ['8 Towers - Alexandria', '7 Towers - Cairo']
  },
  { 
    year: '2006-2010', 
    title: 'Fifth Settlement Expansion', 
    desc: 'Executed luxury villas and residential buildings in Fifth Settlement compounds including El-Nakheel, El-Yasmeen, and Abo Al-Houl.',
    projects: ['Villas El-Nakheel', 'Buildings El-Yasmeen', 'Abo Al-Houl Towers']
  },
  { 
    year: '2011-2015', 
    title: 'Major Urban Projects', 
    desc: 'Completed buildings in Obour City, Nasr City, and El-Waha. Built 3 residential towers in El-Waha and multiple buildings in Nasr City.',
    projects: ['Obour City Buildings', 'Nasr City Towers', 'El-Waha Complex']
  },
  { 
    year: '2016-2017', 
    title: 'International Expansion', 
    desc: 'Expanded to Africa with VIP Lounge in Conakry International Airport, Guinea and Parking Lot in Julius Nyerere Airport, Tanzania.',
    projects: ['Conakry VIP Lounge', 'Tanzania Parking']
  },
  { 
    year: '2018-2019', 
    title: 'Government & Infrastructure', 
    desc: 'Executed social housing project for Engineering Authority of Armed Forces and gas station construction.',
    projects: ['Armed Forces Housing', 'Watanya Gas Station']
  },
  { 
    year: '2020-2021', 
    title: 'Maintenance & Renovation', 
    desc: 'Major renovation projects including Agricultural Bank branches, Suez Governorate buildings, and Asmarat Compound maintenance.',
    projects: ['Agricultural Bank', 'Suez Renovation', 'Asmarat Maintenance']
  },
  { 
    year: '2022-Present', 
    title: 'Current Major Projects', 
    desc: 'Executing Sabbia Resort in Marsa Matrouh, Core Complex in Autostrad, La Nova Towers, and design solutions for multiple projects.',
    projects: ['Sabbia Resort', 'Core Complex', 'La Nova Towers']
  },
]

const Timeline = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#0f0f22] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <div className="flex items-center justify-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
            <div className="w-8 sm:w-12 h-px bg-[#d4a017]"></div>
            <span className="text-[#d4a017] text-[10px] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-medium">Our Journey</span>
            <div className="w-8 sm:w-12 h-px bg-[#d4a017]"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Our Company History</h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">From 2004 to present, over 90 projects across Egypt and international markets.</p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-[#d4a017]/50 via-[#d4a017] to-[#d4a017]/50"></div>
          <div className="space-y-12">
            {events.map((e, i) => (
              <div key={i} className={`flex items-center ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className={`w-1/2 ${i % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                  <div className="bg-[#121226]/50 border border-[#d4a017]/20 p-6 hover:border-[#d4a017]/50 transition-all duration-300">
                    <span className="text-[#d4a017] text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>{e.year}</span>
                    <h3 className="text-white text-xl font-semibold mt-2 mb-3">{e.title}</h3>
                    <p className="text-gray-500 text-sm mb-3">{e.desc}</p>
                    <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                      {e.projects.map((p, j) => (
                        <span key={j} className="text-xs px-2 py-1 bg-[#d4a017]/10 text-[#d4a017] border border-[#d4a017]/20">{p}</span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#d4a017] rounded-full border-4 border-[#0f0f22] z-10"></div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Timeline */}
        <div className="lg:hidden relative">
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#d4a017]/50 via-[#d4a017] to-[#d4a017]/50"></div>
          <div className="space-y-6 sm:space-y-8">
            {events.map((e, i) => (
              <div key={i} className="relative pl-12 sm:pl-16">
                <div className="absolute left-3 sm:left-5 top-6 w-3 h-3 sm:w-4 sm:h-4 bg-[#d4a017] rounded-full border-2 sm:border-4 border-[#0f0f22] z-10"></div>
                <div className="bg-[#121226]/50 border border-[#d4a017]/20 p-4 sm:p-5 hover:border-[#d4a017]/50 transition-all duration-300">
                  <span className="text-[#d4a017] text-xl sm:text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>{e.year}</span>
                  <h3 className="text-white text-base sm:text-lg font-semibold mt-1 sm:mt-2 mb-2 sm:mb-3">{e.title}</h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-3">{e.desc}</p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {e.projects.map((p, j) => (
                      <span key={j} className="text-[10px] sm:text-xs px-2 py-1 bg-[#d4a017]/10 text-[#d4a017] border border-[#d4a017]/20">{p}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
