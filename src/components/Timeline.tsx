import { useLanguage } from '../context/LanguageContext'

const Timeline = () => {
  const { t } = useLanguage()

  const events = [
    { 
      year: '2004', 
      title: t('Company Founded', 'تأسيس الشركة'), 
      desc: t('Started with 8 residential towers in Alexandria and 7 residential towers in Cairo. Established in cooperation with Gulf Countries.', 'بدأ بـ 8 أبراج سكنية في الإسكندرية و 7 أبراج سكنية في القاهرة. تأسست بالتعاون مع دول الخليج.'),
      image: '/images/tower-1.jpg',
      projects: ['8 Towers - Alexandria', '7 Towers - Cairo']
    },
    { 
      year: '2006-2010', 
      title: t('Fifth Settlement Expansion', 'التوسع في التجمع الخامس'), 
      desc: t('Executed luxury villas and residential buildings in Fifth Settlement compounds including El-Nakheel, El-Yasmeen, and Abo Al-Houl.', 'تنفيذ فيلات فاخرة ومباني سكنية في مجمعات التجمع الخامس بما في ذلك النخيل والياسمين وأبو الهول.'),
      image: '/images/villa-1.jpg',
      projects: ['Villas El-Nakheel', 'Buildings El-Yasmeen', 'Abo Al-Houl Towers']
    },
    { 
      year: '2011-2015', 
      title: t('Major Urban Projects', 'المشاريع الحضرية الكبرى'), 
      desc: t('Completed buildings in Obour City, Nasr City, and El-Waha. Built 3 residential towers in El-Waha and multiple buildings in Nasr City.', 'إنجاز مباني في مدينة العبور ومدينة نصر والواحة. بناء 3 أبراج سكنية في الواحة ومباني متعددة في مدينة نصر.'),
      image: '/images/building-1.jpg',
      projects: ['Obour City Buildings', 'Nasr City Towers', 'El-Waha Complex']
    },
    { 
      year: '2016-2017', 
      title: t('International Expansion', 'التوسع الدولي'), 
      desc: t('Expanded to Africa with VIP Lounge in Conakry International Airport, Guinea and Parking Lot in Julius Nyerere Airport, Tanzania.', 'التوسع إلى أفريقيا مع استراحة كبار الزوار في مطار كوناكري الدولي بغينيا وساحة انتظار في مطار جوليوس نيريري بتنزانيا.'),
      image: '/images/construction-1.jpg',
      projects: ['Conakry VIP Lounge', 'Tanzania Parking']
    },
    { 
      year: '2018-2019', 
      title: t('Government & Infrastructure', 'الحكومة والبنية التحتية'), 
      desc: t('Executed social housing project for Engineering Authority of Armed Forces and gas station construction.', 'تنفيذ مشروع الإسكان الاجتماعي لهيئة الهندسة للقوات المسلحة وبناء محطة تموين.'),
      image: '/images/construction-2.jpg',
      projects: ['Armed Forces Housing', 'Watanya Gas Station']
    },
    { 
      year: '2020-2021', 
      title: t('Maintenance & Renovation', 'الصيانة والتجديد'), 
      desc: t('Major renovation projects including Agricultural Bank branches, Suez Governorate buildings, and Asmarat Compound maintenance.', 'مشاريع تجديد رئيسية تشمل فروع البنك الزراعي ومباني محافظة السويس وصيانة مجمع الأسمرات.'),
      image: '/images/office-1.jpg',
      projects: ['Agricultural Bank', 'Suez Renovation', 'Asmarat Maintenance']
    },
    { 
      year: '2022-Present', 
      title: t('Current Major Projects', 'المشاريع الحالية الكبرى'), 
      desc: t('Executing Sabbia Resort in Marsa Matrouh, Core Complex in Autostrad, La Nova Towers, and design solutions for multiple projects.', 'تنفيذ منتجع صبية في مرسى مطروح ومجمع كور في الأتوستراد وأبراج لا نوفا وحلول تصميم لمشاريع متعددة.'),
      image: '/images/resort-1.jpg',
      projects: ['Sabbia Resort', 'Core Complex', 'La Nova Towers']
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#0a0a1a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#d4a017]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#d4a017]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="w-12 h-px bg-[#d4a017]"></div>
            <span className="text-[#d4a017] text-sm uppercase tracking-[0.3em] font-medium">
              {t('Our Journey', 'رحلتنا')}
            </span>
            <div className="w-12 h-px bg-[#d4a017]"></div>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            {t('Our Company History', 'تاريخ شركتنا')}
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            {t('From 2004 to present, over 90 projects across Egypt and international markets.', 'من 2004 حتى الآن، أكثر من 90 مشروع في مصر والأسواق الدولية.')}
          </p>
        </div>

        {/* Timeline - Desktop */}
        <div className="hidden lg:block">
          {events.map((e, i) => (
            <div key={i} className={`relative flex items-center mb-16 last:mb-0 ${i % 2 === 0 ? '' : 'flex-row-reverse'}`}>
              {/* Center line with year */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-[#d4a017] text-black font-bold text-lg px-4 py-2 rounded-full" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {e.year}
                </div>
              </div>

              {/* Content Card */}
              <div className={`w-[45%] ${i % 2 === 0 ? 'pr-16' : 'pl-16'}`}>
                <div className="group relative overflow-hidden bg-[#121226] border border-[#d4a017]/20 hover:border-[#d4a017]/50 transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={e.image} 
                      alt={e.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121226] via-[#121226]/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-heading text-xl font-bold text-white">{e.title}</h3>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-5">
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{e.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {e.projects.map((p, j) => (
                        <span key={j} className="text-xs px-3 py-1 bg-[#d4a017]/10 text-[#d4a017] border border-[#d4a017]/20 rounded-full">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#d4a017]/30 group-hover:border-[#d4a017]/60 transition-colors"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#d4a017]/30 group-hover:border-[#d4a017]/60 transition-colors"></div>
                </div>
              </div>

              {/* Spacer for the other side */}
              <div className="w-[45%]"></div>

              {/* Connecting line */}
              <div className={`absolute top-1/2 transform -translate-y-1/2 w-[10%] h-px bg-gradient-to-r from-[#d4a017]/50 via-[#d4a017] to-[#d4a017]/50 ${i % 2 === 0 ? 'left-[45%]' : 'right-[45%]'}`}></div>
            </div>
          ))}
        </div>

        {/* Timeline - Mobile/Tablet */}
        <div className="lg:hidden relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#d4a017]/50 via-[#d4a017] to-[#d4a017]/50"></div>

          <div className="space-y-8">
            {events.map((e, i) => (
              <div key={i} className="relative pl-16 sm:pl-20">
                {/* Year badge */}
                <div className="absolute left-0 top-0 bg-[#d4a017] text-black font-bold text-sm px-3 py-1.5 rounded-full" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {e.year}
                </div>

                {/* Card */}
                <div className="group bg-[#121226] border border-[#d4a017]/20 hover:border-[#d4a017]/50 transition-all duration-500 overflow-hidden">
                  {/* Image */}
                  <div className="relative h-40 overflow-hidden">
                    <img 
                      src={e.image} 
                      alt={e.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121226] via-transparent to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <h3 className="font-heading text-lg font-bold text-white mb-2">{e.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-3">{e.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {e.projects.map((p, j) => (
                        <span key={j} className="text-[10px] px-2 py-1 bg-[#d4a017]/10 text-[#d4a017] border border-[#d4a017]/20 rounded-full">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
