import { useState, useEffect } from 'react'
import { api } from './api'

const AdminProjects = () => {
  const [projects, setProjects] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [editingProject, setEditingProject] = useState<any>(null)
  const [uploadingImage, setUploadingImage] = useState(false)

  const [form, setForm] = useState({
    titleEn: '',
    titleAr: '',
    categoryEn: '',
    categoryAr: '',
    locationEn: '',
    locationAr: '',
    descriptionEn: '',
    descriptionAr: '',
    year: '',
    status: 'current',
    image: ''
  })

  useEffect(() => {
    loadProjects()
  }, [])

  const loadProjects = async () => {
    try {
      const data = await api.getProjects()
      setProjects(data)
    } catch (err) {
      console.error('Failed to load projects:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      if (editingProject) {
        await api.updateProject(editingProject.id, form)
      } else {
        await api.createProject(form)
      }
      setShowModal(false)
      setEditingProject(null)
      resetForm()
      loadProjects()
    } catch (err) {
      console.error('Failed to save project:', err)
    }
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return
    try {
      await api.deleteProject(id)
      loadProjects()
    } catch (err) {
      console.error('Failed to delete project:', err)
    }
  }

  const handleEdit = (project: any) => {
    setEditingProject(project)
    setForm({
      titleEn: project.titleEn || '',
      titleAr: project.titleAr || '',
      categoryEn: project.categoryEn || '',
      categoryAr: project.categoryAr || '',
      locationEn: project.locationEn || '',
      locationAr: project.locationAr || '',
      descriptionEn: project.descriptionEn || '',
      descriptionAr: project.descriptionAr || '',
      year: project.year || '',
      status: project.status || 'current',
      image: project.image || ''
    })
    setShowModal(true)
  }

  const resetForm = () => {
    setForm({
      titleEn: '', titleAr: '', categoryEn: '', categoryAr: '',
      locationEn: '', locationAr: '', descriptionEn: '', descriptionAr: '',
      year: '', status: 'current', image: ''
    })
  }

  const openNew = () => {
    setEditingProject(null)
    resetForm()
    setShowModal(true)
  }

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploadingImage(true)
    try {
      const result = await api.uploadImage(file)
      setForm({ ...form, image: result.url })
    } catch (err) {
      console.error('Failed to upload image:', err)
    } finally {
      setUploadingImage(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Projects</h1>
        <button onClick={openNew} className="btn-gold text-sm">
          + Add Project
        </button>
      </div>

      <div className="bg-[#121226] border border-[#d4a017]/20 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#d4a017]/20">
                <th className="text-left px-6 py-4 text-gray-400 text-sm font-medium">Image</th>
                <th className="text-left px-6 py-4 text-gray-400 text-sm font-medium">Title</th>
                <th className="text-left px-6 py-4 text-gray-400 text-sm font-medium">Category</th>
                <th className="text-left px-6 py-4 text-gray-400 text-sm font-medium">Year</th>
                <th className="text-left px-6 py-4 text-gray-400 text-sm font-medium">Status</th>
                <th className="text-right px-6 py-4 text-gray-400 text-sm font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#d4a017]/10">
              {loading ? (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-gray-500">Loading...</td>
                </tr>
              ) : projects.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center text-gray-500">No projects found</td>
                </tr>
              ) : (
                projects.map((project) => (
                  <tr key={project.id} className="hover:bg-white/5">
                    <td className="px-6 py-4">
                      {project.image && (
                        <img src={project.image} alt="" className="w-16 h-12 object-cover" />
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-white text-sm">{project.titleEn}</p>
                      <p className="text-gray-500 text-xs">{project.titleAr}</p>
                    </td>
                    <td className="px-6 py-4 text-gray-400 text-sm">
                      {project.categoryEn}
                    </td>
                    <td className="px-6 py-4 text-gray-400 text-sm">{project.year}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs ${project.status === 'current' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'}`}>
                        {project.status === 'current' ? 'Current' : 'Completed'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => handleEdit(project)}
                        className="text-[#d4a017] hover:text-[#f0d060] text-sm mr-3"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(project.id)}
                        className="text-red-400 hover:text-red-300 text-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70" onClick={() => setShowModal(false)} />
          <div className="relative bg-[#121226] border border-[#d4a017]/20 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-[#121226] border-b border-[#d4a017]/20 px-6 py-4 flex items-center justify-between">
              <h2 className="text-white font-semibold">
                {editingProject ? 'Edit Project' : 'Add Project'}
              </h2>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Title (English)</label>
                  <input
                    type="text"
                    value={form.titleEn}
                    onChange={(e) => setForm({ ...form, titleEn: e.target.value })}
                    className="w-full bg-[#0a0a1a] border border-[#d4a017]/30 text-white px-4 py-2 text-sm focus:outline-none focus:border-[#d4a017]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Title (Arabic)</label>
                  <input
                    type="text"
                    value={form.titleAr}
                    onChange={(e) => setForm({ ...form, titleAr: e.target.value })}
                    className="w-full bg-[#0a0a1a] border border-[#d4a017]/30 text-white px-4 py-2 text-sm focus:outline-none focus:border-[#d4a017]"
                    dir="rtl"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Category (English)</label>
                  <input
                    type="text"
                    value={form.categoryEn}
                    onChange={(e) => setForm({ ...form, categoryEn: e.target.value })}
                    className="w-full bg-[#0a0a1a] border border-[#d4a017]/30 text-white px-4 py-2 text-sm focus:outline-none focus:border-[#d4a017]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Category (Arabic)</label>
                  <input
                    type="text"
                    value={form.categoryAr}
                    onChange={(e) => setForm({ ...form, categoryAr: e.target.value })}
                    className="w-full bg-[#0a0a1a] border border-[#d4a017]/30 text-white px-4 py-2 text-sm focus:outline-none focus:border-[#d4a017]"
                    dir="rtl"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Location (English)</label>
                  <input
                    type="text"
                    value={form.locationEn}
                    onChange={(e) => setForm({ ...form, locationEn: e.target.value })}
                    className="w-full bg-[#0a0a1a] border border-[#d4a017]/30 text-white px-4 py-2 text-sm focus:outline-none focus:border-[#d4a017]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Location (Arabic)</label>
                  <input
                    type="text"
                    value={form.locationAr}
                    onChange={(e) => setForm({ ...form, locationAr: e.target.value })}
                    className="w-full bg-[#0a0a1a] border border-[#d4a017]/30 text-white px-4 py-2 text-sm focus:outline-none focus:border-[#d4a017]"
                    dir="rtl"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Description (English)</label>
                <textarea
                  value={form.descriptionEn}
                  onChange={(e) => setForm({ ...form, descriptionEn: e.target.value })}
                  className="w-full bg-[#0a0a1a] border border-[#d4a017]/30 text-white px-4 py-2 text-sm focus:outline-none focus:border-[#d4a017] h-24 resize-none"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Description (Arabic)</label>
                <textarea
                  value={form.descriptionAr}
                  onChange={(e) => setForm({ ...form, descriptionAr: e.target.value })}
                  className="w-full bg-[#0a0a1a] border border-[#d4a017]/30 text-white px-4 py-2 text-sm focus:outline-none focus:border-[#d4a017] h-24 resize-none"
                  dir="rtl"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Year</label>
                  <input
                    type="text"
                    value={form.year}
                    onChange={(e) => setForm({ ...form, year: e.target.value })}
                    placeholder="2024"
                    className="w-full bg-[#0a0a1a] border border-[#d4a017]/30 text-white px-4 py-2 text-sm focus:outline-none focus:border-[#d4a017]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-2">Status</label>
                  <select
                    value={form.status}
                    onChange={(e) => setForm({ ...form, status: e.target.value })}
                    className="w-full bg-[#0a0a1a] border border-[#d4a017]/30 text-white px-4 py-2 text-sm focus:outline-none focus:border-[#d4a017]"
                  >
                    <option value="current">Current</option>
                    <option value="completed">Completed</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-400 text-sm mb-2">Project Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full bg-[#0a0a1a] border border-[#d4a017]/30 text-white px-4 py-2 text-sm focus:outline-none focus:border-[#d4a017]"
                />
                {uploadingImage && (
                  <p className="text-[#d4a017] text-xs mt-2">Uploading...</p>
                )}
                {form.image && (
                  <img src={form.image} alt="Preview" className="mt-2 w-32 h-24 object-cover" />
                )}
              </div>

              <div className="flex gap-3 pt-4">
                <button type="submit" className="btn-gold flex-1">
                  {editingProject ? 'Update Project' : 'Create Project'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-6 py-3 border border-[#d4a017]/30 text-gray-400 hover:text-white transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminProjects
