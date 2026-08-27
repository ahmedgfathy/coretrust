import { Link } from 'react-router-dom'
import { projects, projectCategories } from '../data/projects'
import { useState } from 'react'

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category.toLowerCase().replace(' ', '-') === activeCategory)

  return (
    <div className="min-h-screen bg-[#0a0a1a]">
      {/* Hero Section */}
      <div className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a1a] via-[#0f0f22] to-[#0a0a1a]"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4a017]/20 to-transparent"></div>
          <div className="absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4a017]/20 to-transparent"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#d4a017]/20 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Back Button */}
          <div className="mb-8 sm:mb-12">
            <Link to="/" className="flex items-center space-x-2 text-[#d4a017] hover:text-[#f0d060] transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span className="font-medium">Back to Home</span>
            </Link>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
              <div className="w-8 sm:w-12 h-px bg-[#d4a017]"></div>
              <span className="text-[#d4a017] text-[10px] sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] font-medium">Our Portfolio</span>
              <div className="w-8 sm:w-12 h-px bg-[#d4a017]"></div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              All Projects
            </h1>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4">
              Explore our complete portfolio of residential, commercial, and international projects spanning over 20 years of excellence.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {projectCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-[#d4a017] text-black font-semibold'
                  : 'bg-[#121226]/50 text-gray-400 border border-[#d4a017]/20 hover:border-[#d4a017]/50 hover:text-[#d4a017]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden border border-[#d4a017]/20 hover:border-[#d4a017]/50 transition-all duration-500 card-hover bg-[#121226]/30">
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                  loading="lazy" 
                />
              </div>
              
              {/* Content */}
              <div className="p-4 sm:p-5 lg:p-6">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-[#d4a017] text-[10px] sm:text-xs uppercase tracking-wider">{project.category}</span>
                  <span className="text-gray-600 text-[10px] sm:text-xs">•</span>
                  <span className="text-gray-500 text-[10px] sm:text-xs">{project.year}</span>
                </div>
                <h3 className="text-white text-sm sm:text-base lg:text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm mb-3 line-clamp-2">{project.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600 text-xs">{project.location}</span>
                  <Link 
                    to={`/project/${project.id}`}
                    className="inline-flex items-center space-x-1 text-[#d4a017] hover:text-[#f0d060] transition-colors"
                  >
                    <span className="text-xs font-medium">Details</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectsPage
