import { useLanguage } from '../context/LanguageContext'
import { useContent } from '../hooks/useContent'

const Hero = () => {
  const { t } = useLanguage()
  const { content } = useContent()

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src={content.hero.video || '/bg-video.mp4'} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-white/75 to-brand-50/80"></div>

      <div className="relative z-10 h-full flex items-center">
        <div className="w-full px-5 sm:px-8 lg:px-20 pt-28 sm:pt-32 lg:pt-40 pb-32 sm:pb-0">
          <div className="max-w-5xl mx-auto lg:mx-0">
            <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
              <div className="w-8 sm:w-12 h-px bg-brand-500"></div>
              <span className="text-brand-600 text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-medium">
                {t(content.hero.subtitleEn, content.hero.subtitleAr)}
              </span>
            </div>
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-dark-800 mb-4 sm:mb-6 leading-tight">
              {t(content.hero.titleEn?.split(',')[0] || 'Innovating Spaces', content.hero.titleAr?.split('،')[0] || 'ابتكار المساحات')} <span className="brand-text block mt-1 sm:mt-2">{t(content.hero.titleEn?.split(',')[1]?.trim() || 'Building Futures', content.hero.titleAr?.split('،')[1]?.trim() || 'بناء المستقبل')}</span>
            </h1>
            <p className="text-dark-500 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-10 max-w-3xl leading-relaxed">
              {t(content.hero.descriptionEn, content.hero.descriptionAr)}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="#projects" className="btn-gold text-sm sm:text-lg px-6 sm:px-10 py-3 sm:py-4 text-center">
                {t('Explore Our Projects', 'استكشف مشاريعنا')}
              </a>
              <a href="#about" className="inline-block px-6 sm:px-10 py-3 sm:py-4 border-2 border-brand-500 text-brand-600 hover:bg-brand-50 transition-all duration-300 text-center uppercase tracking-wider text-xs sm:text-sm font-medium">
                {t('Learn More', 'اعرف المزيد')}
              </a>
            </div>

            <div className="grid grid-cols-2 sm:flex sm:items-center sm:space-x-8 lg:space-x-16 mt-10 sm:mt-16 gap-6 sm:gap-0">
              <div className="text-center sm:text-left">
                <span className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-600">{content.stats.value1 || '90+'}</span>
                <p className="text-dark-400 text-[10px] sm:text-xs md:text-sm mt-1 sm:mt-2 uppercase tracking-wider">
                  {t(content.stats.label1En || 'Projects Completed', content.stats.label1Ar || 'مشاريع مكتملة')}
                </p>
              </div>
              <div className="hidden sm:block w-px h-10 lg:h-14 bg-brand-200"></div>
              <div className="text-center sm:text-left">
                <span className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-600">{content.stats.value2 || '20+'}</span>
                <p className="text-dark-400 text-[10px] sm:text-xs md:text-sm mt-1 sm:mt-2 uppercase tracking-wider">
                  {t(content.stats.label2En || 'Years Experience', content.stats.label2Ar || 'سنوات خبرة')}
                </p>
              </div>
              <div className="hidden sm:block w-px h-10 lg:h-14 bg-brand-200"></div>
              <div className="text-center sm:text-left">
                <span className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-600">{content.stats.value3 || '6'}</span>
                <p className="text-dark-400 text-[10px] sm:text-xs md:text-sm mt-1 sm:mt-2 uppercase tracking-wider">
                  {t(content.stats.label3En || 'Service Divisions', content.stats.label3Ar || 'أقسام الخدمات')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-dark-400 text-[10px] sm:text-xs uppercase tracking-widest mb-1 sm:mb-2">
          {t('Scroll', 'مرر')}
        </span>
        <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-brand-300 rounded-full flex justify-center">
          <div className="w-0.5 sm:w-1 h-2 sm:h-3 bg-brand-500 rounded-full mt-1.5 sm:mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
