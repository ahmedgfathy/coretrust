import { useParams, Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const divisionsData: Record<string, any> = {
  'real-estate': {
    titleEn: 'Real Estate Development',
    titleAr: 'التطوير العقاري',
    subtitleEn: 'Building Tomorrow\'s Landmarks',
    subtitleAr: 'بناء معالم الغد',
    descriptionEn: 'Our Real Estate Development division is dedicated to creating distinctive properties across Egypt. From luxury residential towers to commercial complexes and coastal resorts, we combine innovative design with strategic location selection to deliver projects that exceed expectations.',
    descriptionAr: 'قسم التطوير العقاري مكرس لإنشاء عقارات مميزة في جميع أنحاء مصر. من الأبراج السكنية الفاخرة إلى المجمعات التجارية والمنتجعات الساحلية، نجمع بين التصميم المبتكر واختيار الموقع الاستراتيجي لتقديم مشاريع تفوق التوقعات.',
    features: [
      { titleEn: 'Site Research & Evaluation', titleAr: 'بحث وتقييم المواقع', descEn: 'Strategic location analysis for maximum investment value', descAr: 'تحليل المواقع الاستراتيجية لأقصى قيمة استثمارية' },
      { titleEn: 'Architectural Design', titleAr: 'التصميم المعماري', descEn: 'Innovative designs by specialized engineers', descEn: 'تصميمات مبتكرة من مهندسين متخصصين', descAr: 'تصميمات مبتكرة من مهندسين متخصصين' },
      { titleEn: 'Project Execution', titleAr: 'تنفيذ المشاريع', descEn: 'Quality construction with modern techniques', descAr: 'بناء عالي الجودة بتقنيات حديثة' },
      { titleEn: 'Delivery & Handover', titleAr: 'التسليم', descEn: 'On-time delivery as per contract terms', descAr: 'تسليم في الموعد المحدد وفقاً لشروط العقد' },
    ],
    stats: [
      { value: '90+', labelEn: 'Projects Completed', labelAr: 'مشروع منجز' },
      { value: '20+', labelEn: 'Years Experience', labelAr: 'سنة خبرة' },
      { value: '15+', labelEn: 'Cities Covered', labelAr: 'مدينة نغطيها' },
    ],
    projects: ['Sabbia Resort', 'Core Complex', 'La Nova Towers', 'Obour Building', 'Andalous Building', 'Villa El-Nakheel'],
    image: '/images/sabbia-resort.jpg'
  },
  'contracting': {
    titleEn: 'Contracting & Construction',
    titleAr: 'المقاولات والبناء',
    subtitleEn: 'Quality Execution, Lasting Results',
    subtitleAr: 'تنفيذ عالي الجودة، نتائج دائمة',
    descriptionEn: 'Our Contracting division executes projects with precision and quality. From residential buildings to government facilities and infrastructure projects, we ensure every construction meets the highest standards of engineering excellence.',
    descriptionAr: 'قسم المقاولات ينفذ المشاريع بدقة وجودة. من المباني السكنية إلى المرافق الحكومية ومشاريع البنية التحتية، نضمن أن كل بناء يلبي أعلى معايير التميز الهندسي.',
    features: [
      { titleEn: 'Residential Construction', titleAr: 'البناء السكني', descEn: 'Apartment buildings, villas, and residential towers', descAr: 'عمارات سكنية وأبراج وفيلات' },
      { titleEn: 'Government Projects', titleAr: 'المشاريع الحكومية', descEn: 'Public facilities and infrastructure', descAr: 'مرافق عامة وبنية تحتية' },
      { titleEn: 'Structural Works', titleAr: 'أعمال هيكلية', descEn: 'Concrete, steel, and foundation works', descAr: 'أعمال خرسانة وحديد وأسس' },
      { titleEn: 'Road & Infrastructure', titleAr: 'طرق وبنية تحتية', descEn: 'Paving, asphalt, and utility networks', descAr: 'أعمال رصف وأسفلت وشبكات' },
    ],
    stats: [
      { value: '50+', labelEn: 'Buildings Constructed', labelAr: 'مبنى تم بناؤه' },
      { value: '10+', labelEn: 'Gov. Projects', labelAr: 'مشاريع حكومية' },
      { value: '100%', labelEn: 'On-Time Delivery', labelAr: 'تسليم في الموعد' },
    ],
    projects: ['Agricultural Bank Renovation', 'Suez Governorate', 'Civil Defense Unit', 'Engineers Club'],
    image: '/images/construction-1.jpg'
  },
  'interior-design': {
    titleEn: 'Interior Design & Execution',
    titleAr: 'التصميم الداخلي والتنفيذ',
    subtitleEn: 'Creating Inspiring Spaces',
    subtitleAr: 'إنشاء مساحات ملهمة',
    descriptionEn: 'Our Interior Design division transforms spaces into functional, elegant, and personalized environments. Using 3D design solutions and premium materials, we create interiors that reflect our clients\' vision and lifestyle.',
    descriptionAr: 'قسم التصميم الداخلي يحول المساحات إلى بيئات عملية وأنيقة ومخصصة. باستخدام حلول التصميم ثلاثية الأبعاد والمواد الفاخرة، نقوم بإنشاء تصاميم تعكس رؤية عملائنا وأسلوب حياتهم.',
    features: [
      { titleEn: '3D Design Solutions', titleAr: 'حلول تصميم ثلاثية الأبعاد', descEn: 'Visualize your space before execution', descAr: 'تصور مساحتك قبل التنفيذ' },
      { titleEn: 'Luxury Finishes', titleAr: 'تشطيبات فاخرة', descEn: 'Premium materials and craftsmanship', descAr: 'مواد فاخرة وحرفية عالية' },
      { titleEn: 'Custom Furniture', titleAr: 'أثاث مخصص', descEn: 'Tailored furniture design and production', descAr: 'تصميم وإنتاج أثاث مخصص' },
      { titleEn: 'Complete Execution', titleAr: 'تنفيذ كامل', descEn: 'From design to final handover', descAr: 'من التصميم إلى التسليم النهائي' },
    ],
    stats: [
      { value: '100+', labelEn: 'Interiors Designed', labelAr: 'تصميم داخلي' },
      { value: '50+', labelEn: 'Villas Finished', labelAr: 'فيلا تم تشطيبها' },
      { value: '100%', labelEn: 'Client Satisfaction', labelAr: 'رضا العملاء' },
    ],
    projects: ['Nesreen Tafesh Center', 'Moroccan Bath Spa', 'Dr. Youssef Apartment', 'Home Friend Showroom'],
    image: '/images/interior-design.jpg'
  },
  'maintenance': {
    titleEn: 'Maintenance Services',
    titleAr: 'خدمات الصيانة',
    subtitleEn: 'Preserving Value, Ensuring Performance',
    subtitleAr: ' الحفاظ على القيمة، ضمان الأداء',
    descriptionEn: 'Our Maintenance division provides comprehensive solutions for residential compounds, commercial buildings, and government facilities. From elevator systems to electromechanical works and facade maintenance, we ensure buildings operate at peak efficiency.',
    descriptionAr: 'قسم الصيانة يوفر حلولاً شاملة للمجمعات السكنية والمباني التجارية والمرافق الحكومية. من أنظمة المصاعد إلى الأعمال الكهربائية والميكانيكية وصيانة الواجهات، نضمن عمل المباني بكفاءة عالية.',
    features: [
      { titleEn: 'Elevator Systems', titleAr: 'أنظمة المصاعد', descEn: 'Maintenance and modernization of elevator systems', descAr: 'صيانة وتحديث أنظمة المصاعد' },
      { titleEn: 'Electromechanical', titleAr: 'كهرباء وميكانيكا', descEn: 'Complete electrical and mechanical maintenance', descAr: 'صيانة كهربائية وميكانيكية شاملة' },
      { titleEn: 'Facade Maintenance', titleAr: 'صيانة الواجهات', descEn: 'Cleaning, repair, and restoration', descAr: 'تنظيف وإصلاح وترميم' },
      { titleEn: 'Infrastructure', titleAr: 'بنية تحتية', descEn: 'Roads, lighting, and utility networks', descAr: 'طرق وإضاءة وشبكات' },
    ],
    stats: [
      { value: '42+', labelEn: 'Elevators Maintained', labelAr: 'مصعد نصونه' },
      { value: '24/7', labelEn: 'Emergency Response', labelAr: 'استجابة طوارئ' },
      { value: '100%', labelEn: 'Uptime Guarantee', labelAr: 'ضمان التشغيل' },
    ],
    projects: ['Asmarat Compound', 'Suez Buildings', 'Agricultural Bank Branches'],
    image: '/images/office-1.jpg'
  },
  'castings': {
    titleEn: 'Castings & Hardware',
    titleAr: 'المسبوكات والخردوات',
    subtitleEn: 'Precision Manufacturing',
    subtitleAr: 'تصنيع عالي الدقة',
    descriptionEn: 'Our Castings division specializes in producing high-quality die cast castings, sand castings, and hardware components. Using advanced manufacturing techniques, we serve industrial clients across Egypt and the region.',
    descriptionAr: 'قسم المسبوكات متخصص في إنتاج مسبوكات عالية الجودة بالقوالب والمسبوكات الرملية ومكونات الخردوات. باستخدام تقنيات تصنيع متقدمة، نخدم العملاء الصناعيين في مصر والمنطقة.',
    features: [
      { titleEn: 'Die Cast Production', titleAr: 'إنتاج المسبوكات بالقوالب', descEn: 'High-precision aluminum and zinc casting', descAr: 'سبك الألمنيوم والزنك عالي الدقة' },
      { titleEn: 'Sand Casting', titleAr: 'المسبوكات الرملية', descEn: 'Custom casting for various applications', descAr: 'سبك مخصص لتطبيقات مختلفة' },
      { titleEn: 'Stamp Manufacturing', titleAr: 'تصنيع الإسطمبات', descEn: 'Production dies and molds', descAr: 'قوالب الإنتاج' },
      { titleEn: 'Quality Control', titleAr: 'مراقبة الجودة', descEn: 'Strict quality standards at every stage', descAr: 'معايير جودة صارمة في كل مرحلة' },
    ],
    stats: [
      { value: '1000+', labelEn: 'Parts Produced Monthly', labelAr: 'قطعة شهرياً' },
      { value: '99%', labelEn: 'Quality Rate', labelAr: 'معدل الجودة' },
      { value: '10+', labelEn: 'Years Experience', labelAr: 'سنة خبرة' },
    ],
    projects: ['Die Cast Products', 'Sand Cast Components', 'Industrial Hardware'],
    image: '/images/construction-2.jpg'
  },
  'aluminum': {
    titleEn: 'Aluminum Profiles',
    titleAr: 'قطاعات الألومنيوم',
    subtitleEn: 'Excellence in Extrusion',
    subtitleAr: 'التميز في البثق',
    descriptionEn: 'Our Aluminum Profiles division produces high-quality aluminum profiles using the hot extrusion method. Available in various sizes, shapes, and surface treatments for architectural, industrial, and transportation applications.',
    descriptionAr: 'قسم قطاعات الألومنيوم ينتج قطاعات ألومنيوم عالية الجودة باستخدام طريقة البثق الساخن. متوفرة بأحجام وأشكال ومعالجات سطح مختلفة للاستخدامات المعمارية والصناعية والنقل.',
    features: [
      { titleEn: 'Hot Extrusion', titleAr: 'البثق الساخن', descEn: 'Precision extrusion for various profiles', descAr: 'بثق عالي الدقة لقطاعات مختلفة' },
      { titleEn: 'Surface Treatment', titleAr: 'معالجة الأسطح', descEn: 'Anodizing, powder coating, and finishing', descAr: 'أكسدة وتغية بالبودرة وتشطيب' },
      { titleEn: 'Custom Shapes', titleAr: 'أشكال مخصصة', descEn: 'Tailored profiles for specific needs', descAr: 'قطاعات مخصصة لاحتياجات محددة' },
      { titleEn: 'Architectural Systems', titleAr: 'أنظمة معمارية', descEn: 'Windows, doors, and curtain walls', descAr: 'نوافذ وأبواب وواجهات زجاجية' },
    ],
    stats: [
      { value: '500+', labelEn: 'Profile Designs', labelAr: 'تصميم قطاع' },
      { value: '50+', labelEn: 'Surface Colors', labelAr: 'لون سطح' },
      { value: '100%', labelEn: 'Quality Certified', labelAr: 'معتمد الجودة' },
    ],
    projects: ['Architectural Applications', 'Industrial Profiles', 'Transportation Systems'],
    image: '/images/construction-1.jpg'
  }
}

const DivisionPage = () => {
  const { id } = useParams<{ id: string }>()
  const { t } = useLanguage()
  const division = divisionsData[id || '']

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
          {division.stats.map((stat: any, i: number) => (
            <div key={i} className="text-center p-4 sm:p-6 bg-[#121226]/50 border border-[#d4a017]/20">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#d4a017] mb-2">{stat.value}</div>
              <div className="text-gray-400 text-xs sm:text-sm">{t(stat.labelEn, stat.labelAr)}</div>
            </div>
          ))}
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
            {division.features.map((feature: any, i: number) => (
              <div key={i} className="bg-[#121226]/50 border border-[#d4a017]/20 p-5 sm:p-6 hover:border-[#d4a017]/50 transition-colors">
                <h3 className="text-white text-base sm:text-lg font-semibold mb-2">{t(feature.titleEn, feature.titleAr)}</h3>
                <p className="text-gray-500 text-xs sm:text-sm">{t(feature.descEn, feature.descAr)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="mb-12 sm:mb-16">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-6">{t('Featured Projects', 'مشاريع مميزة')}</h2>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {division.projects.map((project: string, i: number) => (
              <span key={i} className="px-3 sm:px-4 py-2 bg-[#d4a017]/10 text-[#d4a017] border border-[#d4a017]/20 text-xs sm:text-sm">
                {project}
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
