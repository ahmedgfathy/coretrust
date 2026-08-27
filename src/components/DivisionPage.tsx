import { useParams, Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { useContent } from '../hooks/useContent'

const defaultDivisions: Record<string, any> = {
  'real-estate': {
    titleEn: 'Real Estate Development', titleAr: 'التطوير العقاري',
    subtitleEn: 'Building Tomorrow\'s Landmarks', subtitleAr: 'بناء معالم الغد',
    descriptionEn: 'Our Real Estate Development division is dedicated to creating distinctive properties across Egypt. From luxury residential towers to commercial complexes and coastal resorts.',
    descriptionAr: 'قسم التطوير العقاري مكرس لإنشاء عقارات مميزة في جميع أنحاء مصر. من الأبراج السكنية الفاخرة إلى المجمعات التجارية والمنتجعات الساحلية.',
    featuresEn: ['Site Research & Evaluation', 'Architectural Design', 'Project Execution', 'Delivery & Handover'],
    featuresAr: ['بحث وتقييم المواقع', 'التصميم المعماري', 'تنفيذ المشاريع', 'التسليم'],
    projectsEn: ['Sabbia Resort', 'Core Complex', 'La Nova Towers', 'Obour Building'],
    projectsAr: ['منتجع سببيا', 'مجمع كور', 'أبراج لانوفا', 'مبنى العبور'],
    statsValue1: '90+', statsLabel1En: 'Projects Completed', statsLabel1Ar: 'مشروع منجز',
    statsValue2: '20+', statsLabel2En: 'Years Experience', statsLabel2Ar: 'سنة خبرة',
    statsValue3: '15+', statsLabel3En: 'Cities Covered', statsLabel3Ar: 'مدينة نغطيها',
    image: '/images/sabbia-resort.jpg'
  },
  'contracting': {
    titleEn: 'Contracting & Construction', titleAr: 'المقاولات والبناء',
    subtitleEn: 'Quality Execution, Lasting Results', subtitleAr: 'تنفيذ عالي الجودة، نتائج دائمة',
    descriptionEn: 'Our Contracting division executes projects with precision and quality. From residential buildings to government facilities and infrastructure projects.',
    descriptionAr: 'قسم المقاولات ينفذ المشاريع بدقة وجودة. من المباني السكنية إلى المرافق الحكومية ومشاريع البنية التحتية.',
    featuresEn: ['Residential Construction', 'Government Projects', 'Structural Works', 'Road & Infrastructure'],
    featuresAr: ['البناء السكني', 'المشاريع الحكومية', 'أعمال هيكلية', 'طرق وبنية تحتية'],
    projectsEn: ['Agricultural Bank', 'Suez Governorate', 'Civil Defense'],
    projectsAr: ['البنك الزراعي', 'محافظة السويس', 'الدفاع المدني'],
    statsValue1: '50+', statsLabel1En: 'Buildings Constructed', statsLabel1Ar: 'مبنى تم بناؤه',
    statsValue2: '10+', statsLabel2En: 'Gov. Projects', statsLabel2Ar: 'مشاريع حكومية',
    statsValue3: '100%', statsLabel3En: 'On-Time Delivery', statsLabel3Ar: 'تسليم في الموعد',
    image: '/images/construction-1.jpg'
  },
  'interior-design': {
    titleEn: 'Interior Design & Execution', titleAr: 'التصميم الداخلي والتنفيذ',
    subtitleEn: 'Creating Inspiring Spaces', subtitleAr: 'إنشاء مساحات ملهمة',
    descriptionEn: 'Our Interior Design division transforms spaces into functional, elegant, and personalized environments using 3D design solutions and premium materials.',
    descriptionAr: 'قسم التصميم الداخلي يحول المساحات إلى بيئات عملية وأنيقة ومخصصة باستخدام حلول التصميم ثلاثية الأبعاد والمواد الفاخرة.',
    featuresEn: ['3D Design Solutions', 'Luxury Finishes', 'Custom Furniture', 'Complete Execution'],
    featuresAr: ['حلول تصميم ثلاثية الأبعاد', 'تشطيبات فاخرة', 'أثاث مخصص', 'تنفيذ كامل'],
    projectsEn: ['Nesreen Tafesh Center', 'Moroccan Bath Spa', 'Dr. Youssef Apartment'],
    projectsAr: ['مركز نسرين طافش', 'سبا الحمام المغربي', 'شقة د. يوسف'],
    statsValue1: '100+', statsLabel1En: 'Interiors Designed', statsLabel1Ar: 'تصميم داخلي',
    statsValue2: '50+', statsLabel2En: 'Villas Finished', statsLabel2Ar: 'فيلا تم تشطيبها',
    statsValue3: '100%', statsLabel3En: 'Client Satisfaction', statsLabel3Ar: 'رضا العملاء',
    image: '/images/interior-design.jpg'
  },
  'maintenance': {
    titleEn: 'Maintenance Services', titleAr: 'خدمات الصيانة',
    subtitleEn: 'Preserving Value, Ensuring Performance', subtitleAr: 'الحفاظ على القيمة، ضمان الأداء',
    descriptionEn: 'Our Maintenance division provides comprehensive solutions for residential compounds, commercial buildings, and government facilities.',
    descriptionAr: 'قسم الصيانة يوفر حلولاً شاملة للمجمعات السكنية والمباني التجارية والمرافق الحكومية.',
    featuresEn: ['Elevator Systems', 'Electromechanical', 'Facade Maintenance', 'Infrastructure'],
    featuresAr: ['أنظمة المصاعد', 'كهرباء وميكانيكا', 'صيانة الواجهات', 'بنية تحتية'],
    projectsEn: ['Asmarat Compound', 'Suez Buildings', 'Agricultural Bank'],
    projectsAr: ['كمبوند أسمرات', 'عمارات السويس', 'البنك الزراعي'],
    statsValue1: '42+', statsLabel1En: 'Elevators Maintained', statsLabel1Ar: 'مصعد نصونه',
    statsValue2: '24/7', statsLabel2En: 'Emergency Response', statsLabel2Ar: 'استجابة طوارئ',
    statsValue3: '100%', statsLabel3En: 'Uptime Guarantee', statsLabel3Ar: 'ضمان التشغيل',
    image: '/images/office-1.jpg'
  },
  'castings': {
    titleEn: 'Castings & Hardware', titleAr: 'المسبوكات والخردوات',
    subtitleEn: 'Precision Manufacturing', subtitleAr: 'تصنيع عالي الدقة',
    descriptionEn: 'Our Castings division specializes in producing high-quality die cast castings, sand castings, and hardware components for industrial applications.',
    descriptionAr: 'قسم المسبوكات متخصص في إنتاج مسبوكات عالية الجودة بالقوالب والمسبوكات الرملية ومكونات الخردوات.',
    featuresEn: ['Die Cast Production', 'Sand Casting', 'Stamp Manufacturing', 'Quality Control'],
    featuresAr: ['إنتاج المسبوكات بالقوالب', 'المسبوكات الرملية', 'تصنيع الإسطمبات', 'مراقبة الجودة'],
    projectsEn: ['Die Cast Products', 'Sand Cast Components', 'Industrial Hardware'],
    projectsAr: ['منتجات المسبوكات', 'قطع المسبوكات الرملية', 'الخردوات الصناعية'],
    statsValue1: '1000+', statsLabel1En: 'Parts Monthly', statsLabel1Ar: 'قطعة شهرياً',
    statsValue2: '99%', statsLabel2En: 'Quality Rate', statsLabel2Ar: 'معدل الجودة',
    statsValue3: '10+', statsLabel3En: 'Years Experience', statsLabel3Ar: 'سنة خبرة',
    image: '/images/construction-2.jpg'
  },
  'aluminum': {
    titleEn: 'Aluminum Profiles', titleAr: 'قطاعات الألومنيوم',
    subtitleEn: 'Excellence in Extrusion', subtitleAr: 'التميز في البثق',
    descriptionEn: 'Our Aluminum Profiles division produces high-quality aluminum profiles using the hot extrusion method for architectural, industrial, and transportation applications.',
    descriptionAr: 'قسم قطاعات الألومنيوم ينتج قطاعات ألومنيوم عالية الجودة باستخدام طريقة البثق الساخن للاستخدامات المعمارية والصناعية والنقل.',
    featuresEn: ['Hot Extrusion', 'Surface Treatment', 'Custom Shapes', 'Architectural Systems'],
    featuresAr: ['البثق الساخن', 'معالجة الأسطح', 'أشكال مخصصة', 'أنظمة معمارية'],
    projectsEn: ['Architectural Applications', 'Industrial Profiles', 'Transportation'],
    projectsAr: ['تطبيقات معمارية', 'قطاعات صناعية', 'أنظمة النقل'],
    statsValue1: '500+', statsLabel1En: 'Profile Designs', statsLabel1Ar: 'تصميم قطاع',
    statsValue2: '50+', statsLabel2En: 'Surface Colors', statsLabel2Ar: 'لون سطح',
    statsValue3: '100%', statsLabel3En: 'Quality Certified', statsLabel3Ar: 'معتمد الجودة',
    image: '/images/construction-1.jpg'
  }
}

const DivisionPage = () => {
  const { id } = useParams<{ id: string }>()
  const { t } = useLanguage()
  const { content } = useContent()
  
  const apiDivision = content.divisions?.[id || '']
  const division = apiDivision && Object.keys(apiDivision).length > 0 ? { ...defaultDivisions[id || 'real-estate'], ...apiDivision } : defaultDivisions[id || '']

  if (!division) {
    return (
      <div className="min-h-screen bg-[#0a0a1a] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-4xl font-bold text-white mb-4">{t('Division Not Found', 'القسم غير موجود')}</h1>
          <Link to="/" className="btn-gold">{t('Return Home', 'العودة للرئيسية')}</Link>
        </div>
      </div>
    )
  }

  const featuresEn = division.featuresEn || []
  const featuresAr = division.featuresAr || []
  const projectsEn = division.projectsEn || []
  const projectsAr = division.projectsAr || []

  return (
    <div className="min-h-screen bg-[#0a0a1a]">
      {/* Hero Section */}
      <div className="relative h-[60vh] sm:h-[70vh] overflow-hidden">
        <img src={division.image} alt={t(division.titleEn, division.titleAr)} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-[#0a0a1a]/60 to-transparent"></div>
        
        {/* Back Button */}
        <div className="absolute top-4 left-4 sm:top-8 sm:left-8 z-20">
          <Link to="/#services" className="flex items-center space-x-2 text-[#d4a017] hover:text-[#f0d060] transition-colors">
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-sm sm:text-base font-medium">{t('Back to Divisions', 'العودة للأقسام')}</span>
          </Link>
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 lg:p-12">
          <div className="max-w-7xl mx-auto">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-4">
              {t(division.titleEn, division.titleAr)}
            </h1>
            <p className="text-[#d4a017] text-lg sm:text-xl font-medium">{t(division.subtitleEn, division.subtitleAr)}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 mb-12 sm:mb-16">
          <div className="text-center p-4 sm:p-6 bg-[#121226]/50 border border-[#d4a017]/20">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#d4a017] mb-2">{division.statsValue1}</div>
            <div className="text-gray-400 text-xs sm:text-sm">{t(division.statsLabel1En, division.statsLabel1Ar)}</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-[#121226]/50 border border-[#d4a017]/20">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#d4a017] mb-2">{division.statsValue2}</div>
            <div className="text-gray-400 text-xs sm:text-sm">{t(division.statsLabel2En, division.statsLabel2Ar)}</div>
          </div>
          <div className="text-center p-4 sm:p-6 bg-[#121226]/50 border border-[#d4a017]/20">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#d4a017] mb-2">{division.statsValue3}</div>
            <div className="text-gray-400 text-xs sm:text-sm">{t(division.statsLabel3En, division.statsLabel3Ar)}</div>
          </div>
        </div>

        {/* Description */}
        <div className="mb-12 sm:mb-16">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-6">{t('About This Division', 'عن هذا القسم')}</h2>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed">{t(division.descriptionEn, division.descriptionAr)}</p>
        </div>

        {/* Features */}
        <div className="mb-12 sm:mb-16">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-6">{t('Our Services', 'خدماتنا')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {featuresEn.map((feature: string, i: number) => (
              <div key={i} className="bg-[#121226]/50 border border-[#d4a017]/20 p-5 sm:p-6 hover:border-[#d4a017]/50 transition-colors">
                <h3 className="text-white text-base sm:text-lg font-semibold mb-2">{t(feature, featuresAr[i] || feature)}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="mb-12 sm:mb-16">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-6">{t('Featured Projects', 'مشاريع مميزة')}</h2>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {projectsEn.map((project: string, i: number) => (
              <span key={i} className="px-3 sm:px-4 py-2 bg-[#d4a017]/10 text-[#d4a017] border border-[#d4a017]/20 text-xs sm:text-sm">
                {t(project, projectsAr[i] || project)}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-[#d4a017]/20 to-[#d4a017]/5 border border-[#d4a017]/30 p-6 sm:p-8 text-center">
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-white mb-4">{t('Start Your Project', 'ابدأ مشروعك')}</h3>
          <p className="text-gray-400 text-sm sm:text-base mb-6">{t('Ready to work with us? Contact us for a free consultation.', 'مستعد للعمل معنا؟ تواصل معنا لاستشارة مجانية.')}</p>
          <Link to="/#contact" className="btn-gold inline-block">{t('Get Free Consultation', 'احصل على استشارة مجانية')}</Link>
        </div>
      </div>
    </div>
  )
}

export default DivisionPage
