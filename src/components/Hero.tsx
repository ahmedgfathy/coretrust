import { useLanguage } from '../context/LanguageContext'

const Hero = () => {
  const { t } = useLanguage()

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#0a0a1a]/80"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full px-5 sm:px-8 lg:px-20 pt-28 sm:pt-32 lg:pt-40 pb-32 sm:pb-0">
          <div className="max-w-5xl mx-auto lg:mx-0">
            <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
              <div className="w-8 sm:w-12 h-px bg-[#d4a017]"></div>
              <span className="text-[#d4a017] text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-medium">
                {t('Est. 2004 - Architect Mohamed Yehia Group', 'تأسست عام 2004 - مجموعة المهندس محمد يحيى')}
              </span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
              {t('Innovating Spaces,', 'ابتكار المساحات،')} <span className="gold-shimmer block mt-1 sm:mt-2">{t('Building Futures', 'بناء المستقبل')}</span>
            </h1>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-10 max-w-3xl leading-relaxed">
              {t(
                'A multidisciplinary real estate and engineering company established in 2004, specializing in real estate development, architectural design, construction, interior design, maintenance services, castings, and aluminum profiles across Egypt and international markets.',
                'شركة عقارية وهندسية متعددة التخصصات تأسست عام 2004، متخصصة في التطوير العقاري والتصميم المعماري والبناء والتصميم الداخلي وخدمات الصيانة والمسبوكات وقطاعات الألومنيوم في مصر والأسواق الدولية.'
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="#projects" className="btn-gold text-sm sm:text-lg px-6 sm:px-10 py-3 sm:py-4 text-center">
                {t('Explore Our Projects', 'استكشف مشاريعنا')}
              </a>
              <a href="#about" className="inline-block px-6 sm:px-10 py-3 sm:py-4 border border-[#d4a017]/50 text-[#d4a017] hover:bg-[#d4a017]/10 transition-all duration-300 text-center uppercase tracking-wider text-xs sm:text-sm font-medium">
                {t('Learn More', 'اعرف المزيد')}
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:flex sm:items-center sm:space-x-8 lg:space-x-16 mt-10 sm:mt-16 gap-6 sm:gap-0">
              <div className="text-center sm:text-left">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#d4a017]" style={{ fontFamily: 'Playfair Display, serif' }}>90+</span>
                <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm mt-1 sm:mt-2 uppercase tracking-wider">
                  {t('Projects Completed', 'مشاريع مكتملة')}
                </p>
              </div>
              <div className="hidden sm:block w-px h-10 lg:h-14 bg-[#d4a017]/30"></div>
              <div className="text-center sm:text-left">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#d4a017]" style={{ fontFamily: 'Playfair Display, serif' }}>20+</span>
                <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm mt-1 sm:mt-2 uppercase tracking-wider">
                  {t('Years Experience', 'سنوات خبرة')}
                </p>
              </div>
              <div className="hidden sm:block w-px h-10 lg:h-14 bg-[#d4a017]/30"></div>
              <div className="text-center sm:text-left">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#d4a017]" style={{ fontFamily: 'Playfair Display, serif' }}>6</span>
                <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm mt-1 sm:mt-2 uppercase tracking-wider">
                  {t('Service Divisions', 'أقسام الخدمات')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-widest mb-1 sm:mb-2">
          {t('Scroll', 'مرر')}
        </span>
        <div className="w-5 sm:w-6 h-8 sm:h-10 border border-[#d4a017]/50 rounded-full flex justify-center">
          <div className="w-0.5 sm:w-1 h-2 sm:h-3 bg-[#d4a017] rounded-full mt-1.5 sm:mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
