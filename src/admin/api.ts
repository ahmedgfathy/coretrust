const API_BASE = '/api'

export const api = {
  login: async (username: string, password: string) => {
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    })
    if (!res.ok) {
      const err = await res.json()
      throw new Error(err.error || 'Login failed')
    }
    return res.json()
  },

  verify: async (token: string) => {
    const res = await fetch(`${API_BASE}/auth/verify`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    if (!res.ok) throw new Error('Not authenticated')
    return res.json()
  },

  getProjects: async () => {
    const res = await fetch(`${API_BASE}/projects`)
    if (!res.ok) throw new Error('Failed to fetch projects')
    return res.json()
  },

  getProject: async (id: string) => {
    const res = await fetch(`${API_BASE}/projects/${id}`)
    if (!res.ok) throw new Error('Project not found')
    return res.json()
  },

  createProject: async (projectData: Record<string, any>) => {
    const token = JSON.parse(localStorage.getItem('adminUser') || '{}')?.token || ''
    const res = await fetch(`${API_BASE}/projects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(projectData)
    })
    if (!res.ok) throw new Error('Failed to create project')
    return res.json()
  },

  updateProject: async (id: string, projectData: Record<string, any>) => {
    const token = JSON.parse(localStorage.getItem('adminUser') || '{}')?.token || ''
    const res = await fetch(`${API_BASE}/projects/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(projectData)
    })
    if (!res.ok) throw new Error('Failed to update project')
    return res.json()
  },

  deleteProject: async (id: string) => {
    const token = JSON.parse(localStorage.getItem('adminUser') || '{}')?.token || ''
    const res = await fetch(`${API_BASE}/projects/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    })
    if (!res.ok) throw new Error('Failed to delete project')
    return { success: true }
  },

  getContent: async () => {
    const res = await fetch(`${API_BASE}/content`)
    if (!res.ok) throw new Error('Failed to fetch content')
    return res.json()
  },

  updateContent: async (section: string, sectionData: any) => {
    const token = JSON.parse(localStorage.getItem('adminUser') || '{}')?.token || ''
    const res = await fetch(`${API_BASE}/content/${section}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(sectionData)
    })
    if (!res.ok) throw new Error('Failed to update content')
    return res.json()
  },

  getImages: async () => {
    const token = JSON.parse(localStorage.getItem('adminUser') || '{}')?.token || ''
    const res = await fetch(`${API_BASE}/images`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    if (!res.ok) throw new Error('Failed to fetch images')
    return res.json()
  },

  uploadImage: async (file: File) => {
    const token = JSON.parse(localStorage.getItem('adminUser') || '{}')?.token || ''
    const formData = new FormData()
    formData.append('image', file)
    const res = await fetch(`${API_BASE}/upload`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: formData
    })
    if (!res.ok) throw new Error('Failed to upload image')
    return res.json()
  },

  deleteImage: async (filename: string) => {
    const token = JSON.parse(localStorage.getItem('adminUser') || '{}')?.token || ''
    const res = await fetch(`${API_BASE}/images/${filename}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    })
    if (!res.ok) throw new Error('Failed to delete image')
    return { success: true }
  },

  getImageUrl: (filename: string) => {
    return `/images/${filename}`
  }
}
