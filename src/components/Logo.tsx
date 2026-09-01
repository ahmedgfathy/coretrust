import { useLanguage } from '../context/LanguageContext'

const Logo = () => {
  const { t, language } = useLanguage()
  const isArabic = language === 'ar'

  return (
    <a href="#home" className="flex items-center gap-2 sm:gap-3 lg:gap-4">
      <div className="relative flex-shrink-0">
        <div className="h-10 sm:h-14 md:h-18 lg:h-20 w-auto flex items-center justify-center">
          <span className="text-brand-600 font-bold text-lg sm:text-2xl lg:text-3xl tracking-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
            C
          </span>
        </div>
      </div>
      <span
        className={`font-bold text-[10px] sm:text-xs md:text-sm lg:text-lg tracking-[0.15em] sm:tracking-[0.2em] lg:tracking-[0.3em] hidden sm:block whitespace-nowrap text-brand-600 ${isArabic ? 'font-[Cairo]' : ''}`}
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
