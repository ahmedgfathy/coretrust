import { useLanguage } from '../context/LanguageContext'

const Logo = () => {
  const { t, language } = useLanguage()
  const isArabic = language === 'ar'

  return (
    <a href="#home" className="flex items-center gap-2 sm:gap-3 lg:gap-4">
      <div className="relative flex-shrink-0">
        <div className="h-12 sm:h-16 md:h-18 lg:h-20 w-auto flex items-center justify-center">
          <span className="text-brand-600 font-bold text-xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            C
          </span>
        </div>
      </div>
      <span
        className={`font-bold text-sm sm:text-lg md:text-xl lg:text-2xl tracking-[0.1em] sm:tracking-[0.15em] lg:tracking-[0.2em] hidden sm:block whitespace-nowrap text-brand-600 ${isArabic ? 'font-[Cairo]' : ''}`}
        style={{
          fontFamily: isArabic ? 'Cairo, sans-serif' : 'Playfair Display, serif',
        }}
      >
        {t('CORETRUST', 'كورتراست')}
      </span>
    </a>
  )
}

export default Logo
