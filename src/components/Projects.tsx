import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { useLanguage } from '../context/LanguageContext'

const Projects = () => {
  const { t } = useLanguage()

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-[#0a0a1a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14 lg:mb-16">
          <div className="flex items-center justify-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
            <div className="w-8 sm:w-12 h-px bg-[#d4a017]"></div>
            <span className="text-[#d4a017] text-[10px] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-medium">{t('Our Work', 'أعمالنا')}</span>
            <div className="w-8 sm:w-12 h-px bg-[#d4a017]"></div>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">{t('Featured Projects', 'المشاريع المميزة')}</h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">{t('Showcasing our most significant residential, commercial, and international achievements.', 'عرض أهم إنجازاتنا السكنية والتجارية والدولية.')}</p>
        </div>
        
        {/* 3x3 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden border border-[#d4a017]/20 hover:border-[#d4a017]/50 transition-all duration-500 card-hover bg-[#121226]/30">
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={t(project.title.en, project.title.ar)} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                  loading="lazy" 
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-[#0a0a1a]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 lg:p-6">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-[#d4a017] text-[10px] sm:text-xs uppercase tracking-wider">{t(project.category.en, project.category.ar)}</span>
                    <span className="text-gray-600 text-[10px] sm:text-xs">•</span>
                    <span className="text-gray-500 text-[10px] sm:text-xs">{project.year}</span>
                  </div>
                  <h3 className="text-white text-sm sm:text-base lg:text-xl font-semibold mb-2 sm:mb-3">{t(project.title.en, project.title.ar)}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">{t(project.description.en, project.description.ar)}</p>
                  
                  {/* Read More Button */}
                  <Link 
                    to={`/project/${project.id}`}
                    className="inline-flex items-center space-x-2 text-[#d4a017] hover:text-[#f0d060] transition-colors group/btn"
                  >
                    <span className="text-xs sm:text-sm font-medium uppercase tracking-wider">{t('Read More', 'اقرأ المزيد')}</span>
                    <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              {/* Corner Decorations */}
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 border-t border-r border-[#d4a017]/0 group-hover:border-[#d4a017]/60 transition-all duration-500"></div>
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 border-b border-l border-[#d4a017]/0 group-hover:border-[#d4a017]/60 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* View All Button */}
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
