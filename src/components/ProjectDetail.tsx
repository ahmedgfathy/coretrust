import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { useLanguage } from '../context/LanguageContext'

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>()
  const { t } = useLanguage()
  const project = projects.find(p => p.id === id)

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0a0a1a] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-4xl font-bold text-white mb-4">{t('Project Not Found', 'المشروع غير موجود')}</h1>
          <Link to="/" className="btn-gold">{t('Return Home', 'العودة للرئيسية')}</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0a0a1a]">
      {/* Hero Section */}
      <div className="relative h-[60vh] sm:h-[70vh] overflow-hidden">
        <img src={project.image} alt={t(project.title.en, project.title.ar)} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-[#0a0a1a]/60 to-transparent"></div>
        
        {/* Back Button */}
        <div className="absolute top-4 left-4 sm:top-8 sm:left-8 z-20">
          <Link to="/" className="flex items-center space-x-2 text-[#d4a017] hover:text-[#f0d060] transition-colors">
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="text-sm sm:text-base font-medium">{t('Back to Projects', 'العودة للمشاريع')}</span>
          </Link>
        </div>

        {/* Project Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 lg:p-12">
          <div className="max-w-7xl mx-auto">
            <span className="inline-block px-3 py-1 bg-[#d4a017]/20 border border-[#d4a017]/50 text-[#d4a017] text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4">
              {t(project.category.en, project.category.ar)}
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-4">
              {t(project.title.en, project.title.ar)}
            </h1>
            <p className="text-[#d4a017] text-base sm:text-lg md:text-xl font-medium">{t(project.location.en, project.location.ar)}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <div className="mb-8 sm:mb-12">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">{t('Project Overview', 'نظرة عامة على المشروع')}</h2>
              <p className="text-gray-400 text-sm sm:text-base lg:text-lg leading-relaxed mb-4">{t(project.description.en, project.description.ar)}</p>
            </div>

            {/* Details */}
            <div className="mb-8 sm:mb-12">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">{t('Project Details', 'تفاصيل المشروع')}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {project.details.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 sm:p-4 bg-[#121226]/50 border border-[#d4a017]/20">
                    <div className="w-2 h-2 bg-[#d4a017] rounded-full flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm sm:text-base">{t(item.en, item.ar)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Project Details Card */}
              <div className="bg-[#121226]/50 border border-[#d4a017]/20 p-5 sm:p-6">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">{t('Project Info', 'معلومات المشروع')}</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-[#d4a017]/10">
                    <span className="text-gray-500 text-sm">{t('Year', 'السنة')}</span>
                    <span className="text-white text-sm">{project.year}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-[#d4a017]/10">
                    <span className="text-gray-500 text-sm">{t('Status', 'الحالة')}</span>
                    <span className="text-white text-sm">{t(project.status === 'current' ? 'Current' : 'Completed', project.status === 'current' ? 'جاري' : 'مكتمل')}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-500 text-sm">{t('Location', 'الموقع')}</span>
                    <span className="text-white text-sm text-right">{t(project.location.en, project.location.ar)}</span>
                  </div>
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-gradient-to-br from-[#d4a017]/20 to-[#d4a017]/5 border border-[#d4a017]/30 p-5 sm:p-6">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{t('Start Your Project', 'ابدأ مشروعك')}</h3>
                <p className="text-gray-400 text-sm mb-4 sm:mb-6">{t('Ready to bring your vision to life? Contact us for a free consultation.', 'مستعد لتحويل رؤيتك إلى واقع؟ تواصل معنا لاستشارة مجانية.')}</p>
                <Link to="/#contact" className="btn-gold block text-center text-sm sm:text-base">
                  {t('Get Free Consultation', 'احصل على استشارة مجانية')}
                </Link>
              </div>

              {/* Gallery Preview */}
              <div className="bg-[#121226]/50 border border-[#d4a017]/20 p-5 sm:p-6">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">{t('Project Gallery', 'معرض الصور')}</h3>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {project.gallery.slice(0, 4).map((img, index) => (
                    <div key={index} className="aspect-square overflow-hidden">
                      <img src={img} alt={`${t(project.title.en, project.title.ar)} ${index + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-[#d4a017]/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <Link to="/" className="flex items-center space-x-2 text-[#d4a017] hover:text-[#f0d060] transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="font-medium">{t('Back to All Projects', 'العودة لجميع المشاريع')}</span>
            </Link>
            <Link to="/projects" className="btn-gold text-sm sm:text-base">
              {t('View More Projects', 'عرض مزيد من المشاريع')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail
