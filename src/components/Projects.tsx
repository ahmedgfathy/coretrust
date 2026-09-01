import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'

const fallbackProjects = [
  { id: '1', titleEn: 'Sabbia Resort', titleAr: 'منتجع سببيا', categoryEn: 'Real Estate Development', categoryAr: 'التطوير العقاري', locationEn: 'Marsa Matrouh', locationAr: 'مرسى مطروح', descriptionEn: 'Luxury resort with private beach and modern architecture.', descriptionAr: 'منتجع فاخر بشاطئ خاص وعمارة عصرية.', year: '2024', status: 'current', image: '/images/sabbia-resort.jpg' },
  { id: '2', titleEn: 'Core Complex', titleAr: 'مجمع كور', categoryEn: 'Real Estate Development', categoryAr: 'التطوير العقاري', locationEn: 'Autostrad Road', locationAr: 'طريق الأوتوستراد', descriptionEn: 'Mixed-use residential and commercial complex.', descriptionAr: 'مجمع سكني تجاري متعدد الاستخدامات.', year: '2024', status: 'current', image: '/images/core-complex.jpg' },
  { id: '3', titleEn: 'La Nova Towers', titleAr: 'أبراج لانوفا', categoryEn: 'Real Estate Development', categoryAr: 'التطوير العقاري', locationEn: 'Nasr City', locationAr: 'مدينة نصر', descriptionEn: 'Modern residential towers in El-Waha neighborhood.', descriptionAr: 'أبراج سكنية عصرية في حي الواحة.', year: '2023', status: 'current', image: '/images/la-nova-towers.jpg' },
  { id: '4', titleEn: 'Suez Governorate HQ', titleAr: 'مبنى محافظة السويس', categoryEn: 'Government Projects', categoryAr: 'المشاريع الحكومية', locationEn: 'Suez', locationAr: 'السويس', descriptionEn: 'Renovation of the main government building.', descriptionAr: 'تجديد المبنى الحكومي الرئيسي.', year: '2022', status: 'completed', image: '/images/suez-governorate.jpg' },
  { id: '5', titleEn: 'Agricultural Bank Renovation', titleAr: 'تجديد البنك الزراعي', categoryEn: 'Government Projects', categoryAr: 'المشاريع الحكومية', locationEn: 'Minya', locationAr: 'المنيا', descriptionEn: 'Developing 5 branches of the Agricultural Bank.', descriptionAr: 'تطوير 5 فروع للبنك الزراعي.', year: '2023', status: 'completed', image: '/images/agricultural-bank.jpg' },
  { id: '6', titleEn: 'Villa El-Nakheel', titleAr: 'فيلات النخيل', categoryEn: 'Real Estate Development', categoryAr: 'التطوير العقاري', locationEn: '5th Settlement', locationAr: 'التجمع الخامس', descriptionEn: '7 luxury villas in El-Nakheel compound.', descriptionAr: '7 فيلات فاخرة في كمبوند النخيل.', year: '2018', status: 'completed', image: '/images/villa-nakheel.jpg' },
]

const Projects = () => {
  const { t } = useLanguage()
  const [projects, setProjects] = useState<any[]>([])

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

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <div className="flex items-center justify-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
            <div className="w-8 sm:w-12 h-px bg-brand-500"></div>
            <span className="text-brand-600 text-[10px] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-medium">{t('Our Work', 'أعمالنا')}</span>
            <div className="w-8 sm:w-12 h-px bg-brand-500"></div>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-dark-800 mb-4 sm:mb-6">{t('Featured Projects', 'المشاريع المميزة')}</h2>
          <p className="text-dark-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">{t('Showcasing our most significant residential, commercial, and international achievements.', 'عرض أهم إنجازاتنا السكنية والتجارية والدولية.')}</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projects.slice(0, 9).map((project) => (
            <div key={project.id} className="group relative overflow-hidden border border-brand-100 hover:border-brand-300 transition-all duration-500 card-hover bg-white">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={t(project.titleEn || project.title?.en, project.titleAr || project.title?.ar)} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                  loading="lazy" 
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 lg:p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-brand-600 text-[10px] sm:text-xs uppercase tracking-wider">{t(project.categoryEn || project.category?.en, project.categoryAr || project.category?.ar)}</span>
                    <span className="text-dark-300 text-[10px] sm:text-xs">•</span>
                    <span className="text-dark-400 text-[10px] sm:text-xs">{project.year}</span>
                  </div>
                  <h3 className="text-dark-800 text-sm sm:text-base lg:text-xl font-semibold mb-2 sm:mb-3">{t(project.titleEn || project.title?.en, project.titleAr || project.title?.ar)}</h3>
                  <p className="text-dark-500 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">{t(project.descriptionEn || project.description?.en, project.descriptionAr || project.description?.ar)}</p>
                  
                  <Link 
                    to={`/project/${project.id}`}
                    className="inline-flex items-center space-x-2 text-brand-600 hover:text-brand-700 transition-colors group/btn"
                  >
                    <span className="text-xs sm:text-sm font-medium uppercase tracking-wider">{t('Read More', 'اقرأ المزيد')}</span>
                    <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 border-t border-r border-brand-200 group-hover:border-brand-400 transition-all duration-500"></div>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 border-b border-l border-brand-200 group-hover:border-brand-400 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-12 lg:mt-16">
          <Link to="/projects" className="btn-gold inline-block text-sm sm:text-base">
            {t('View All Projects', 'عرض جميع المشاريع')}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Projects
