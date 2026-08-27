import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const Services = () => {
  const { t } = useLanguage()

  const services = [
    { 
      slug: 'real-estate',
      title: t('Real Estate Development', 'الاستثمار العقاري'), 
      desc: t('Research, site evaluation, and development of distinctive properties. From residential towers to luxury villas and commercial complexes across Egypt.', 'بحث وتقييم المواقع وتطوير العقارات المميزة. من الأبراج السكنية إلى الفيلات الفاخرة والمجمعات التجارية في جميع أنحاء مصر.'), 
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      projects: ['Sabbia Resort', 'Core Complex', 'La Nova Towers']
    },
    { 
      slug: 'contracting',
      title: t('Contracting & Construction', 'المقاولات والبناء'), 
      desc: t('Executing projects with quality materials and expert engineering. From residential buildings to government projects and infrastructure.', 'تنفيذ المشاريع بمواد عالية الجودة وهندسة متخصصة. من المباني السكنية إلى المشاريع الحكومية والبنية التحتية.'), 
      icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z',
      projects: ['Agricultural Bank', 'Engineers Syndicate Club']
    },
    { 
      slug: 'interior-design',
      title: t('Interior Design & Execution', 'التصميم الداخلي والتنفيذ'), 
      desc: t('Creating functional, elegant, and personalized interior spaces with 3D design solutions for residential and commercial projects.', 'إنشاء مساحات داخلية عملية وأنيقة ومخصصة مع حلول تصميم ثلاثية الأبعاد للمشاريع السكنية والتجارية.'), 
      icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
      projects: ['Golf West Villa', 'Nesreen Tafesh Center', 'Maadi Mall']
    },
    { 
      slug: 'maintenance',
      title: t('Maintenance Services', 'خدمات الصيانة'), 
      desc: t('Comprehensive maintenance for residential compounds, elevators, electromechanical systems, and building facades.', 'صيانة شاملة للمجمعات السكنية والمصاعد والأنظمة الكهربائية والميكانيكية والواجهات الخارجية.'), 
      icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
      projects: ['Asmarat Compound', 'Suez Governorate', 'Agricultural Bank']
    },
    { 
      slug: 'castings',
      title: t('Castings & Hardware', 'المسبوكات والخردوات'), 
      desc: t('Production of die cast castings, sand casting, aluminum profiles, and stamp manufacturing for industrial applications.', 'إنتاج المسبوكات والسباكة بالقوالب وقطاعات الألومنيوم وتصنيع الإسطمبات للتطبيقات الصناعية.'), 
      icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
      projects: ['Die Cast Production', 'Aluminum Profiles', 'Stamp Manufacturing']
    },
    { 
      slug: 'aluminum',
      title: t('Aluminum Profiles', 'قطاعات الألومنيوم'), 
      desc: t('Production of aluminum profiles by hot extrusion method in various sizes, shapes and surface treatment for architectural and industrial uses.', 'إنتاج قطاعات الألومنيوم بالبثق الساخن بأحجام وأشكال ومعالجات سطح مختلفة للاستخدامات المعمارية والصناعية.'), 
      icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z',
      projects: ['Architectural Applications', 'Industrial Uses', 'Transportation']
    },
  ]

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-[#0f0f22] relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4a017]/20 to-transparent"></div>
        <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4a017]/20 to-transparent"></div>
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4a017]/20 to-transparent"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <div className="flex items-center justify-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
            <div className="w-8 sm:w-12 h-px bg-[#d4a017]"></div>
            <span className="text-[#d4a017] text-[10px] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-medium">
              {t('Our Divisions', 'أقسامنا')}
            </span>
            <div className="w-8 sm:w-12 h-px bg-[#d4a017]"></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            {t('Our Divisions', 'أقسامنا')}
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto px-4">
            {t('A multidisciplinary company with 6 specialized divisions serving Egypt and international markets since 2004.', 'شركة متعددة التخصصات مع 6 أقسام متخصصة تخدم مصر والأسواق الدولية منذ عام 2004.')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((s, i) => (
            <Link 
              key={i} 
              to={`/division/${s.slug}`}
              className="group bg-[#121226]/50 border border-[#d4a017]/20 p-5 sm:p-6 lg:p-8 hover:border-[#d4a017]/50 transition-all duration-500 card-hover relative overflow-hidden block"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#d4a017]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative">
                <div className="w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-[#d4a017]/10 flex items-center justify-center mb-4 sm:mb-5 lg:mb-6 text-[#d4a017] group-hover:bg-[#d4a017]/20 transition-colors duration-300">
                  <svg className="w-7 sm:w-8 lg:w-10 h-7 sm:h-8 lg:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} />
                  </svg>
                </div>
                <h3 className="text-white text-base sm:text-lg lg:text-xl font-semibold mb-1 sm:mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>{s.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">{s.desc}</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                  {s.projects.map((p, j) => (
                    <span key={j} className="text-[10px] sm:text-xs px-2 py-1 bg-[#d4a017]/10 text-[#d4a017] border border-[#d4a017]/20">{p}</span>
                  ))}
                </div>
                <div className="flex items-center text-[#d4a017] text-xs sm:text-sm font-medium group-hover:translate-x-1 transition-transform">
                  {t('Learn More', 'اعرف المزيد')}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 border-t border-r border-[#d4a017]/30 group-hover:border-[#d4a017]/60 transition-colors duration-300"></div>
              <div className="absolute bottom-0 left-0 w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 border-b border-l border-[#d4a017]/30 group-hover:border-[#d4a017]/60 transition-colors duration-300"></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
