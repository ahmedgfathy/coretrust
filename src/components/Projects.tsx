const projects = [
  { title: 'Residential Towers - Alexandria', cat: 'Real Estate', img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80' },
  { title: 'Interior Design - Mountain View', cat: 'Interior Design', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80' },
  { title: 'Commercial Mall - Maadi', cat: 'Construction', img: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&q=80' },
  { title: 'VIP Lounge - Guinea Airport', cat: 'International', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80' },
  { title: 'Duplex Villa - Fifth Settlement', cat: 'Interior Design', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80' },
  { title: 'Asmarat Compound - Maintenance', cat: 'Maintenance', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80' },
]

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-[#0a0a1a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-12 h-px bg-[#d4a017]"></div>
            <span className="text-[#d4a017] text-sm uppercase tracking-[0.3em] font-medium">Our Work</span>
            <div className="w-12 h-px bg-[#d4a017]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Latest Projects</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Showcasing our most recent residential, commercial, and interior design achievements.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="group relative overflow-hidden border border-[#d4a017]/20 hover:border-[#d4a017]/50 transition-all duration-500">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-[#0a0a1a]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-[#d4a017] text-sm uppercase tracking-wider">{p.cat}</span>
                  <h3 className="text-white text-xl font-semibold mt-2">{p.title}</h3>
                </div>
              </div>
              <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[#d4a017]/0 group-hover:border-[#d4a017]/60 transition-all duration-500"></div>
              <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-[#d4a017]/0 group-hover:border-[#d4a017]/60 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
