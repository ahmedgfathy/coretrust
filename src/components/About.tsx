import { useLanguage } from '../context/LanguageContext'

const About = () => {
  const { t } = useLanguage()

  const features = [
    { 
      title: t('Real Estate Development', 'الاستثمار العقاري'), 
      desc: t('From residential towers to luxury villas and commercial complexes across Egypt.', 'من الأبراج السكنية إلى الفيلات الفاخرة والمجمعات التجارية في جميع أنحاء مصر.'), 
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' 
    },
    { 
      title: t('Contracting & Construction', 'المقاولات والبناء'), 
      desc: t('Executing residential, commercial, and government projects with quality standards.', 'تنفيذ المشاريع السكنية والتجارية والحكومية وفقاً لمعايير الجودة.'), 
      icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z' 
    },
    { 
      title: t('Interior Design', 'التصميم الداخلي'), 
      desc: t('Creating elegant, personalized interior spaces with 3D design solutions.', 'إنشاء مساحات داخلية أنيقة ومخصصة مع حلول تصميم ثلاثية الأبعاد.'), 
      icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' 
    },
    { 
      title: t('Maintenance Services', 'خدمات الصيانة'), 
      desc: t('Elevators, electromechanical systems, and building maintenance for compounds.', 'مصاعد وأنظمة كهربائية وميكانيكية وصيانة مباني للمجمعات السكنية.'), 
      icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z' 
    },
    { 
      title: t('Castings & Hardware', 'المسبوكات والخردوات'), 
      desc: t('Die cast castings, sand casting, and stamp manufacturing for industry.', 'إنتاج المسبوكات والسباكة بالقوالب وتصنيع الإسطمبات للصناعات.'), 
      icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' 
    },
    { 
      title: t('Aluminum Profiles', 'قطاعات الألومنيوم'), 
      desc: t('Hot extrusion aluminum profiles in various sizes and surface treatments.', 'قطاعات ألومنيوم بالبثق الساخن بأحجام ومعالجات سطح مختلفة.'), 
      icon: 'M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z' 
    },
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
              <span className="text-[#d4a017] text-[10px] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-medium">
                {t('About Us', 'من نحن')}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              {t('Who We Are', 'من نحن')}
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
              {t('Founded by Architect Mohamed Yehia in 2004', 'أسسها المهندس محمد يحيى عام 2004')}
            </p>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
              {t(
                'Architect Mohamed Yehia Group was established in 2004 in cooperation with Gulf Countries. We specialize in real estate development, architectural design, construction, interior design, and maintenance services.',
                'تأسست مجموعة المهندس محمد يحيى في عام 2004 بالتعاون مع دول الخليج. نحن متخصصون في التطوير العقاري والتصميم المعماري والبناء والتصميم الداخلي وخدمات الصيانة.'
              )}
            </p>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
              {t(
                'With over 20 years of experience and more than 90 completed projects, we have expanded internationally to Saudi Arabia, Oman, Guinea, and Tanzania. Our portfolio includes residential towers, luxury villas, commercial complexes, airport facilities, and government buildings.',
                'مع أكثر من 20 عامًا من الخبرة وأكثر من 90 مشروعًا مكتملاً، توسعنا دولياً في المملكة العربية المتحدة وعمان وغينيا وتنزانيا. تتضمن محفظتنا أبراجاً سكنية وفيلات فاخرة ومجمعات تجارية ومنشآت مطارات ومباني حكومية.'
              )}
            </p>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
              {t(
                'We operate through 6 specialized divisions: Real Estate Development, Contracting & Construction, Interior Design, Maintenance Services, Castings & Hardware, and Aluminum Profiles.',
                'نعمل من خلال 6 أقسام متخصصة: التطوير العقاري والمقاولات والبناء والتصميم الداخلي وخدمات الصيانة والمسبوكات والخردوات وقطاعات الألومنيوم.'
              )}
            </p>
            <a href="#contact" className="btn-gold inline-block">
              {t('Get Free Consultation', 'احصل على استشارة مجانية')}
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {features.map((f, i) => (
              <div key={i} className="bg-[#121226]/50 p-4 sm:p-5 border border-[#d4a017]/20 hover:border-[#d4a017]/50 transition-all duration-300 card-hover">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-[#d4a017]/10 flex items-center justify-center mb-3 sm:mb-4 text-[#d4a017]">
                  <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={f.icon} />
                  </svg>
                </div>
                <h3 className="text-white font-semibold text-sm sm:text-base mb-1 sm:mb-2">{f.title}</h3>
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
