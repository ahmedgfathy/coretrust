const API_BASE = '';

export const api = {
  // Auth
  login: async (username: string, password: string) => {
    const res = await fetch(`${API_BASE}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    if (!res.ok) throw new Error('Invalid credentials');
    return res.json();
  },

  verify: async (token: string) => {
    const res = await fetch(`${API_BASE}/api/auth/verify`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return res.json();
  },

  // Projects
  getProjects: async () => {
    const res = await fetch(`${API_BASE}/api/projects`);
    return res.json();
  },

  getProject: async (id: string) => {
    const res = await fetch(`${API_BASE}/api/projects/${id}`);
    return res.json();
  },

  createProject: async (data: FormData, token: string) => {
    const res = await fetch(`${API_BASE}/api/projects`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: data
    });
    return res.json();
  },

  updateProject: async (id: string, data: FormData, token: string) => {
    const res = await fetch(`${API_BASE}/api/projects/${id}`, {
      method: 'PUT',
      headers: { Authorization: `Bearer ${token}` },
      body: data
    });
    return res.json();
  },

  deleteProject: async (id: string, token: string) => {
    const res = await fetch(`${API_BASE}/api/projects/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    });
    return res.json();
  },

  // Content
  getContent: async () => {
    const res = await fetch(`${API_BASE}/api/content`);
    return res.json();
  },

  updateContent: async (section: string, data: any, token: string) => {
    const res = await fetch(`${API_BASE}/api/content/${section}`, {
      method: 'PUT',
      headers: { 
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}` 
      },
      body: JSON.stringify(data)
    });
    return res.json();
  },

  // Images
  getImages: async (token: string) => {
    const res = await fetch(`${API_BASE}/api/images`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return res.json();
  },

  uploadImage: async (file: File, token: string) => {
    const formData = new FormData();
    formData.append('image', file);
    const res = await fetch(`${API_BASE}/api/upload`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
      body: formData
    });
    return res.json();
  },

  deleteImage: async (filename: string, token: string) => {
    const res = await fetch(`${API_BASE}/api/images/${filename}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` }
    });
    return res.json();
  },

  getImageUrl: (filename: string) => `${API_BASE}/images/${filename}`
};
