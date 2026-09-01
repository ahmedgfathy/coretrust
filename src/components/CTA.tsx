import { useLanguage } from '../context/LanguageContext'
import { useContent } from '../hooks/useContent'

const CTA = () => {
  const { t } = useLanguage()
  const { content } = useContent()

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-brand-600 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-700 via-brand-600/95 to-brand-700"></div>
      </div>
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
            <div className="w-8 sm:w-12 h-px bg-white/50"></div>
            <span className="text-white/80 text-[10px] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-medium">
              {t('Get Started', 'ابدأ الآن')}
            </span>
            <div className="w-8 sm:w-12 h-px bg-white/50"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t(content.cta.titleEn, content.cta.titleAr)}
          </h2>
          <p className="text-white/70 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 px-4">
            {t(content.cta.descriptionEn, content.cta.descriptionAr)}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a href="#contact" className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-white text-brand-600 hover:bg-brand-50 transition-all duration-300 font-semibold uppercase tracking-wider text-xs sm:text-sm">
              {t(content.cta.buttonEn, content.cta.buttonAr)}
            </a>
            <a href="tel:0220776044" className="inline-block px-6 sm:px-8 py-3 sm:py-4 border border-white/50 text-white hover:bg-white/10 transition-all duration-300 text-center uppercase tracking-wider text-xs sm:text-sm font-medium">
              {t('Call Us Now', 'اتصل بنا الآن')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
