import { useLanguage } from '../context/LanguageContext'

const Logo = () => {
  const { t, language } = useLanguage()
  const isArabic = language === 'ar'

  return (
    <a href="#home" className="flex items-center gap-3 sm:gap-4 lg:gap-5">
      <div className="relative flex-shrink-0">
        <div className="h-14 sm:h-18 md:h-20 lg:h-24 w-auto flex items-center justify-center">
          <span className="text-brand-600 font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight" style={{ fontFamily: 'Playfair Display, serif', textShadow: '0 2px 8px rgba(14,165,23,0.15)' }}>
            C
          </span>
        </div>
      </div>
      <span
        className={`font-black text-base sm:text-xl md:text-2xl lg:text-3xl tracking-[0.08em] sm:tracking-[0.12em] lg:tracking-[0.15em] hidden sm:block whitespace-nowrap text-brand-600 ${isArabic ? 'font-[Cairo]' : ''}`}
        style={{
          fontFamily: isArabic ? 'Cairo, sans-serif' : 'Playfair Display, serif',
          textShadow: '0 2px 8px rgba(14,165,23,0.15)',
        }}
      >
        {t('CORETRUST', 'كورتراست')}
      </span>
    </a>
  )
}

export default Logo
