import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { api } from './api'

const AdminDashboard = () => {
  const [stats, setStats] = useState({ projects: 0, images: 0 })
  const [recentProjects, setRecentProjects] = useState<any[]>([])

  useEffect(() => {
    const loadData = async () => {
      try {
        const [projects, images] = await Promise.all([
          api.getProjects(),
          api.getImages()
        ])
        setStats({ projects: projects.length, images: images.length })
        setRecentProjects(projects.slice(0, 5))
      } catch (err) {
        console.error('Failed to load data:', err)
      }
    }
    loadData()
  }, [])

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#121226] border border-[#d4a017]/20 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Projects</p>
              <p className="text-3xl font-bold text-white mt-1">{stats.projects}</p>
            </div>
            <div className="w-12 h-12 bg-[#d4a017]/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-[#d4a017]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-[#121226] border border-[#d4a017]/20 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Images</p>
              <p className="text-3xl font-bold text-white mt-1">{stats.images}</p>
            </div>
            <div className="w-12 h-12 bg-[#d4a017]/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-[#d4a017]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>

        <Link to="/admin/projects" className="bg-[#121226] border border-[#d4a017]/20 p-6 hover:border-[#d4a017]/50 transition-colors">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Manage Projects</p>
              <p className="text-[#d4a017] text-sm mt-1 font-medium">Add / Edit / Delete →</p>
            </div>
            <div className="w-12 h-12 bg-[#d4a017]/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-[#d4a017]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
          </div>
        </Link>

        <Link to="/admin/content" className="bg-[#121226] border border-[#d4a017]/20 p-6 hover:border-[#d4a017]/50 transition-colors">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Edit Content</p>
              <p className="text-[#d4a017] text-sm mt-1 font-medium">Text & Settings →</p>
            </div>
            <div className="w-12 h-12 bg-[#d4a017]/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-[#d4a017]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
          </div>
        </Link>
      </div>

      <div className="bg-[#121226] border border-[#d4a017]/20">
        <div className="px-6 py-4 border-b border-[#d4a017]/20 flex items-center justify-between">
          <h2 className="text-white font-semibold">Recent Projects</h2>
          <Link to="/admin/projects" className="text-[#d4a017] text-sm hover:underline">
            View All
          </Link>
        </div>
        <div className="divide-y divide-[#d4a017]/10">
          {recentProjects.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              No projects yet. <Link to="/admin/projects" className="text-[#d4a017] hover:underline">Add one</Link>
            </div>
          ) : (
            recentProjects.map((project: any) => (
              <div key={project.id} className="px-6 py-4 flex items-center justify-between hover:bg-white/5">
                <div className="flex items-center gap-4">
                  {project.image && (
                    <img src={project.image} alt="" className="w-12 h-12 object-cover" />
                  )}
                  <div>
                    <p className="text-white text-sm font-medium">{project.titleEn || 'Untitled'}</p>
                    <p className="text-gray-500 text-xs">{project.categoryEn || ''}</p>
                  </div>
                </div>
                <Link to={`/admin/projects/edit/${project.id}`} className="text-[#d4a017] text-sm hover:underline">
                  Edit
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
