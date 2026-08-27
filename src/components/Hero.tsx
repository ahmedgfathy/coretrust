const Hero = () => {
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Video Background - Luxury Interior Design */}
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0a0a1a]/80"></div>

      {/* Content - Wide Layout */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full px-8 sm:px-12 lg:px-20">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-px bg-[#d4a017]"></div>
              <span className="text-[#d4a017] text-sm uppercase tracking-[0.3em] font-medium">Est. 2004 - Founded by Arch. Mohamed Yehia</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              Innovating Spaces, <span className="gold-shimmer block mt-2">Building Futures</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-3xl leading-relaxed">
              A multidisciplinary real estate and engineering company established in 2004, specializing in real estate development, architectural design, construction, interior design, and maintenance services across Egypt and international markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#projects" className="btn-gold text-lg px-10 py-4">Explore Our Projects</a>
              <a href="#about" className="inline-block px-10 py-4 border border-[#d4a017]/50 text-[#d4a017] hover:bg-[#d4a017]/10 transition-all duration-300 text-center uppercase tracking-wider text-sm font-medium">Learn More</a>
            </div>
            <div className="flex items-center space-x-16 mt-16">
              <div>
                <span className="text-5xl font-bold text-[#d4a017]" style={{ fontFamily: 'Playfair Display, serif' }}>90+</span>
                <p className="text-gray-400 text-sm mt-2">Projects Completed</p>
              </div>
              <div className="w-px h-14 bg-[#d4a017]/30"></div>
              <div>
                <span className="text-5xl font-bold text-[#d4a017]" style={{ fontFamily: 'Playfair Display, serif' }}>20+</span>
                <p className="text-gray-400 text-sm mt-2">Years Experience</p>
              </div>
              <div className="w-px h-14 bg-[#d4a017]/30"></div>
              <div>
                <span className="text-5xl font-bold text-[#d4a017]" style={{ fontFamily: 'Playfair Display, serif' }}>100%</span>
                <p className="text-gray-400 text-sm mt-2">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-gray-400 text-xs uppercase tracking-widest mb-2">Scroll</span>
        <div className="w-6 h-10 border border-[#d4a017]/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#d4a017] rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
