import { useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'

const clients = [
  { id: 1, name: 'Agricultural Bank of Egypt', nameAr: 'البنك الزراعي المصري', logo: '/clients/logo-1.svg' },
  { id: 2, name: 'Egyptian Engineers Syndicate', nameAr: 'نقابة المهندسين المصرية', logo: '/clients/logo-2.svg' },
  { id: 3, name: 'Suez Governorate', nameAr: 'محافظة السويس', logo: '/clients/logo-3.svg' },
  { id: 4, name: 'Armed Forces Engineering', nameAr: 'الهيئة الهندسية للقوات المسلحة', logo: '/clients/logo-4.svg' },
  { id: 5, name: 'Cairo University', nameAr: 'جامعة القاهرة', logo: '/clients/logo-5.svg' },
  { id: 6, name: 'Egyptian Tabletop Trading (ETTC)', nameAr: 'الشركة المصرية لتجارة أدوات المائدة', logo: '/clients/logo-6.svg' },
  { id: 7, name: 'Civil Defense', nameAr: 'الدفاع المدني', logo: '/clients/logo-7.svg' },
]

const Clients = () => {
  const { t } = useLanguage()
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0
    const speed = 0.5

    const animate = () => {
      scrollPosition += speed
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }
      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId)
    }

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate)
    }

    scrollContainer.addEventListener('mouseenter', handleMouseEnter)
    scrollContainer.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter)
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden border-t border-b border-brand-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <div className="flex items-center justify-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
            <div className="w-8 sm:w-12 h-px bg-brand-500"></div>
            <span className="text-brand-600 text-[10px] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-medium">
              {t('Our Clients', 'عملاؤنا')}
            </span>
            <div className="w-8 sm:w-12 h-px bg-brand-500"></div>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-dark-800 mb-4">
            {t('Trusted Partners', 'شركاء موثوقون')}
          </h2>
          <p className="text-dark-500 text-sm sm:text-base max-w-2xl mx-auto">
            {t('We are proud to work with leading organizations across Egypt and the Gulf region.', 'نحن فخورون بالعمل مع المؤسسات الرائدة في مصر ودول الخليج.')}</p>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="overflow-hidden whitespace-nowrap cursor-pointer"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style>{`.clients-scroll::-webkit-scrollbar { display: none; }`}</style>
        <div className="inline-flex items-center space-x-8 sm:space-x-12 lg:space-x-16 px-8 clients-scroll">
          {[...clients, ...clients].map((client, index) => (
            <div 
              key={`${client.id}-${index}`} 
              className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40"
            >
              <img 
                src={client.logo} 
                alt={t(client.name, client.nameAr)}
                className="w-full h-full object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
    </section>
  )
}

export default Clients
