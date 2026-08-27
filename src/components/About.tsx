const About = () => {
  const features = [
    { title: 'Proven Experience', desc: 'Over 20 years delivering successful engineering and real estate projects.', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
    { title: 'Quality Assurance', desc: 'We follow strict quality standards to ensure premium project results.', icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.403 3.403 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.403 3.403 0 00.806 1.946 3.42 3.42 0 010 4.438 3.403 3.403 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.403 3.403 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.403 3.403 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.403 3.403 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.403 3.403 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' },
    { title: 'Professional Team', desc: 'Expert engineers and designers dedicated to excellence and innovation.', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
    { title: 'On-Time Delivery', desc: 'We deliver projects on schedule with full commitment and transparency.', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
  ]

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-[#0a0a1a] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-[#d4a017]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-[#d4a017]/5 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
              <div className="w-8 sm:w-12 h-px bg-[#d4a017]"></div>
              <span className="text-[#d4a017] text-[10px] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-medium">About Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Who We Are</h2>
            <p className="text-gray-500 text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">Founded by Architect Mohamed Yehia</p>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
              Architect Mohamed Yehia Group was established in 2004 in cooperation with Gulf Countries in Egypt's Love. We specialize in real estate development, architectural design, construction, interior design, and maintenance services.
            </p>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
              With over 20 years of experience and more than 90 completed projects across Egypt and international markets including Saudi Arabia, Oman, Guinea, and Tanzania, we deliver innovative, sustainable, and client-focused solutions that meet the highest engineering and quality standards.
            </p>
            <a href="#contact" className="btn-gold inline-block">Get Free Consultation</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-[#121226]/50 p-4 sm:p-6 border border-[#d4a017]/20 hover:border-[#d4a017]/50 transition-all duration-300 card-hover">
                <div className="w-10 sm:w-12 lg:w-14 h-10 sm:h-12 lg:h-14 bg-[#d4a017]/10 flex items-center justify-center mb-3 sm:mb-4 text-[#d4a017]">
                  <svg className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={f.icon} />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-sm sm:text-base lg:text-lg mb-1 sm:mb-2">{f.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
