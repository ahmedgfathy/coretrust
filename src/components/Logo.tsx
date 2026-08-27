import { useLanguage } from '../context/LanguageContext'

const Logo = () => {
  const { t, language } = useLanguage()
  const isArabic = language === 'ar'

  return (
    <a href="#home" className="flex items-center gap-2 sm:gap-3 lg:gap-4">
      <div className="relative flex-shrink-0">
        <img
          src="https://mygroup-eg.com/wp-content/uploads/2026/02/لقطة_شاشة_2026-02-15_160729-removebg-preview.png"
          alt="Mohammed Yahia Group"
          className="h-10 sm:h-14 md:h-18 lg:h-20 w-auto"
        />
        <div className="absolute inset-0 bg-[#d4a017]/25 blur-2xl rounded-full"></div>
      </div>
      <span
        className={`gold-shimmer font-bold text-[10px] sm:text-xs md:text-sm lg:text-lg tracking-[0.15em] sm:tracking-[0.2em] lg:tracking-[0.3em] hidden sm:block whitespace-nowrap ${isArabic ? 'font-[Cairo]' : ''}`}
        style={{
          fontFamily: isArabic ? 'Cairo, sans-serif' : 'Playfair Display, serif',
          textShadow: '0 0 15px rgba(212,160,23,0.9), 0 0 30px rgba(212,160,23,0.6), 0 0 50px rgba(212,160,23,0.4)',
        }}
      >
        {t('MOHAMED YAHIA GROUP', 'مجموعة محمد يحيى')}
      </span>
    </a>
  )
}

export default Logo
