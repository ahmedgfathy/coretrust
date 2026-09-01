import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const categories = [
  { id: 'all', en: 'All', ar: 'الكل' },
  { id: 'real-estate-development', en: 'Real Estate', ar: 'التطوير العقاري' },
  { id: 'government-projects', en: 'Government', ar: 'المشاريع الحكومية' },
  { id: 'contracting', en: 'Contracting', ar: 'المقاولات' },
  { id: 'interior-design', en: 'Interior Design', ar: 'التصميم الداخلي' },
  { id: 'finishing-works', en: 'Finishing', ar: 'التشطيبات' },
]

const fallbackProjects = [
  { id: '1', titleEn: 'Sabbia Resort', titleAr: 'منتجع سببيا', categoryEn: 'Real Estate Development', categoryAr: 'التطوير العقاري', locationEn: 'Marsa Matrouh', locationAr: 'مرسى مطروح', descriptionEn: 'Luxury resort with private beach.', descriptionAr: 'منتجع فاخر بشاطئ خاص.', year: '2024', status: 'current', image: '/images/sabbia-resort.jpg' },
  { id: '2', titleEn: 'Core Complex', titleAr: 'مجمع كور', categoryEn: 'Real Estate Development', categoryAr: 'التطوير العقاري', locationEn: 'Autostrad Road', locationAr: 'طريق الأوتوستراد', descriptionEn: 'Mixed-use complex.', descriptionAr: 'مجمع متعدد الاستخدامات.', year: '2024', status: 'current', image: '/images/core-complex.jpg' },
  { id: '3', titleEn: 'La Nova Towers', titleAr: 'أبراج لانوفا', categoryEn: 'Real Estate Development', categoryAr: 'التطوير العقاري', locationEn: 'Nasr City', locationAr: 'مدينة نصر', descriptionEn: 'Modern residential towers.', descriptionAr: 'أبراج سكنية عصرية.', year: '2023', status: 'current', image: '/images/la-nova-towers.jpg' },
  { id: '4', titleEn: 'Suez Governorate HQ', titleAr: 'مبنى محافظة السويس', categoryEn: 'Government Projects', categoryAr: 'المشاريع الحكومية', locationEn: 'Suez', locationAr: 'السويس', descriptionEn: 'Government building renovation.', descriptionAr: 'تجديد مبنى حكومي.', year: '2022', status: 'completed', image: '/images/suez-governorate.jpg' },
  { id: '5', titleEn: 'Agricultural Bank', titleAr: 'البنك الزراعي', categoryEn: 'Government Projects', categoryAr: 'المشاريع الحكومية', locationEn: 'Minya', locationAr: 'المنيا', descriptionEn: 'Bank branch renovation.', descriptionAr: 'تجديد فروع البنك.', year: '2023', status: 'completed', image: '/images/agricultural-bank.jpg' },
  { id: '6', titleEn: 'Villa El-Nakheel', titleAr: 'فيلات النخيل', categoryEn: 'Real Estate Development', categoryAr: 'التطوير العقاري', locationEn: '5th Settlement', locationAr: 'التجمع الخامس', descriptionEn: '7 luxury villas.', descriptionAr: '7 فيلات فاخرة.', year: '2018', status: 'completed', image: '/images/villa-nakheel.jpg' },
  { id: '7', titleEn: 'Narges Building', titleAr: 'مبنى النرجس', categoryEn: 'Real Estate Development', categoryAr: 'التطوير العقاري', locationEn: '5th Settlement', locationAr: 'التجمع الخامس', descriptionEn: 'Residential villa.', descriptionAr: 'فيلا سكنية.', year: '2019', status: 'completed', image: '/images/narges-building.jpg' },
  { id: '8', titleEn: 'Yasmine Building', titleAr: 'مبنى الياسمين', categoryEn: 'Real Estate Development', categoryAr: 'التطوير العقاري', locationEn: '5th Settlement', locationAr: 'التجمع الخامس', descriptionEn: 'Residential buildings.', descriptionAr: 'عمارات سكنية.', year: '2018', status: 'completed', image: '/images/yasmine-building.jpg' },
  { id: '9', titleEn: 'Moroccan Bath Spa', titleAr: 'سبا الحمام المغربي', categoryEn: 'Interior Design', categoryAr: 'التصميم الداخلي', locationEn: 'New Cairo', locationAr: 'القاهرة الجديدة', descriptionEn: 'Traditional hammam design.', descriptionAr: 'تصميم حمام تقليدي.', year: '2023', status: 'completed', image: '/images/interior-design.jpg' },
]

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [projects, setProjects] = useState<any[]>([])
  const { t } = useLanguage()

  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => {
        if (data && data.length > 0) {
          setProjects(data)
        } else {
          setProjects(fallbackProjects)
        }
      })
      .catch(() => setProjects(fallbackProjects))
  }, [])

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => {
        const catEn = (p.categoryEn || p.category?.en || '').toLowerCase().replace(/\s+/g, '-')
        return catEn === activeCategory
      })

  return (
    <div className="min-h-screen bg-white">
      <div className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50 via-white to-brand-50/30"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent"></div>
          <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-200 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="mb-8 sm:mb-12">
            <Link to="/" className="flex items-center space-x-2 text-brand-600 hover:text-brand-700 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="font-medium">{t('Back to Home', 'العودة للرئيسية')}</span>
            </Link>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
              <div className="w-8 sm:w-12 h-px bg-brand-500"></div>
              <span className="text-brand-600 text-[10px] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-medium">{t('Our Portfolio', 'محفظتنا')}</span>
              <div className="w-8 sm:w-12 h-px bg-brand-500"></div>
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-dark-800 mb-4 sm:mb-6">
              {t('All Projects', 'جميع المشاريع')}
            </h1>
            <p className="text-dark-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
              {t('Explore our complete portfolio spanning over 20 years of excellence.', 'استكشف محفظتنا الكاملة على مدى أكثر من 20 عاماً من التميز.')}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-brand-600 text-white font-semibold'
                  : 'bg-white text-dark-500 border border-brand-200 hover:border-brand-400 hover:text-brand-600'
              }`}
            >
              {t(cat.en, cat.ar)}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden border border-brand-100 hover:border-brand-300 transition-all duration-500 card-hover bg-white">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={t(project.titleEn || project.title?.en, project.titleAr || project.title?.ar)} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                  loading="lazy" 
                />
              </div>
              
              <div className="p-4 sm:p-5 lg:p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-brand-600 text-[10px] sm:text-xs uppercase tracking-wider">{t(project.categoryEn || project.category?.en, project.categoryAr || project.category?.ar)}</span>
                  <span className="text-dark-300 text-[10px] sm:text-xs">•</span>
                  <span className="text-dark-400 text-[10px] sm:text-xs">{project.year}</span>
                </div>
                <h3 className="text-dark-800 text-sm sm:text-base lg:text-lg font-semibold mb-2">{t(project.titleEn || project.title?.en, project.titleAr || project.title?.ar)}</h3>
                <p className="text-dark-400 text-xs sm:text-sm mb-3 line-clamp-2">{t(project.descriptionEn || project.description?.en, project.descriptionAr || project.description?.ar)}</p>
                <div className="flex items-center justify-between">
                  <span className="text-dark-400 text-xs">{t(project.locationEn || project.location?.en, project.locationAr || project.location?.ar)}</span>
                  <Link 
                    to={`/project/${project.id}`}
                    className="inline-flex items-center space-x-1 text-brand-600 hover:text-brand-700 transition-colors"
                  >
                    <span className="text-xs font-medium">{t('Details', 'التفاصيل')}</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-dark-400 text-lg">{t('No projects found in this category.', 'لا توجد مشاريع في هذا التصنيف.')}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectsPage
