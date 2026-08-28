import { supabase } from '../lib/supabase'

export const api = {
  // Auth - using Supabase Auth
  login: async (username: string, password: string) => {
    const email = `${username}@cortex-admin.local`
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    if (error) throw new Error(error.message)
    return {
      token: data.session.access_token,
      user: { id: data.user.id, username, role: 'admin' }
    }
  },

  verify: async (_token: string) => {
    const { data, error } = await supabase.auth.getSession()
    if (error || !data.session) throw new Error('Not authenticated')
    return { valid: true, user: data.session.user }
  },

  // Projects
  getProjects: async () => {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('createdAt', { ascending: false })
    if (error) throw error
    return data || []
  },

  getProject: async (id: string) => {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('id', id)
      .single()
    if (error) throw error
    return data
  },

  createProject: async (projectData: Record<string, any>) => {
    const { data, error } = await supabase
      .from('projects')
      .insert([{
        titleEn: projectData.titleEn || '',
        titleAr: projectData.titleAr || '',
        categoryEn: projectData.categoryEn || '',
        categoryAr: projectData.categoryAr || '',
        locationEn: projectData.locationEn || '',
        locationAr: projectData.locationAr || '',
        descriptionEn: projectData.descriptionEn || '',
        descriptionAr: projectData.descriptionAr || '',
        year: projectData.year || '',
        status: projectData.status || 'current',
        image: projectData.image || '',
        gallery: projectData.gallery || [],
        details: projectData.details || []
      }])
      .select()
      .single()
    if (error) throw error
    return data
  },

  updateProject: async (id: string, projectData: Record<string, any>) => {
    const { data, error } = await supabase
      .from('projects')
      .update({
        ...projectData,
        updatedAt: new Date().toISOString()
      })
      .eq('id', id)
      .select()
      .single()
    if (error) throw error
    return data
  },

  deleteProject: async (id: string) => {
    const { error } = await supabase
      .from('projects')
      .delete()
      .eq('id', id)
    if (error) throw error
    return { success: true }
  },

  // Content
  getContent: async () => {
    const { data, error } = await supabase
      .from('content')
      .select('data')
      .eq('id', 'main')
      .single()
    if (error) throw error
    return data?.data || {}
  },

  updateContent: async (section: string, sectionData: any) => {
    // First get current content
    const { data: current } = await supabase
      .from('content')
      .select('data')
      .eq('id', 'main')
      .single()

    const currentData = current?.data || {}
    const updatedData = { ...currentData, [section]: sectionData }

    const { data, error } = await supabase
      .from('content')
      .upsert({
        id: 'main',
        data: updatedData,
        updatedAt: new Date().toISOString()
      })
      .select('data')
      .single()
    if (error) throw error
    return data?.data?.[section] || sectionData
  },

  // Images - using Supabase Storage
  getImages: async () => {
    const { data, error } = await supabase
      .storage
      .from('images')
      .list('', {
        limit: 100,
        sortBy: { column: 'created_at', order: 'desc' }
      })
    if (error) throw error
    return (data || []).map((file: any) => ({
      filename: file.name,
      size: file.metadata?.size || 0,
      url: supabase.storage.from('images').getPublicUrl(file.name).data.publicUrl
    }))
  },

  uploadImage: async (file: File) => {
    const ext = file.name.split('.').pop()
    const filename = `${Date.now()}-${Math.random().toString(36).substring(7)}.${ext}`

    const { error } = await supabase
      .storage
      .from('images')
      .upload(filename, file, {
        cacheControl: '3600',
        upsert: false
      })
    if (error) throw error

    const { data: urlData } = supabase
      .storage
      .from('images')
      .getPublicUrl(filename)

    return {
      filename,
      url: urlData.publicUrl
    }
  },

  deleteImage: async (filename: string) => {
    const { error } = await supabase
      .storage
      .from('images')
      .remove([filename])
    if (error) throw error
    return { success: true }
  },

  getImageUrl: (filename: string) => {
    const { data } = supabase
      .storage
      .from('images')
      .getPublicUrl(filename)
    return data.publicUrl
  }
}
