import { useState, useEffect, useRef } from 'react'
import { api } from './api'

const AdminImages = () => {
  const [images, setImages] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [uploading, setUploading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    loadImages()
  }, [])

  const loadImages = async () => {
    const token = localStorage.getItem('adminToken') || ''
    try {
      const data = await api.getImages(token)
      setImages(data)
    } catch (err) {
      console.error('Failed to load images:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return

    setUploading(true)
    const token = localStorage.getItem('adminToken') || ''

    try {
      for (let i = 0; i < files.length; i++) {
        await api.uploadImage(files[i], token)
      }
      loadImages()
    } catch (err) {
      console.error('Failed to upload:', err)
    } finally {
      setUploading(false)
      if (fileInputRef.current) fileInputRef.current.value = ''
    }
  }

  const handleDelete = async (filename: string) => {
    if (!confirm('Are you sure you want to delete this image?')) return
    const token = localStorage.getItem('adminToken') || ''
    try {
      await api.deleteImage(filename, token)
      loadImages()
    } catch (err) {
      console.error('Failed to delete:', err)
    }
  }

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B'
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Image Manager</h1>
        <div className="flex gap-3">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleUpload}
            accept="image/*"
            multiple
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            className="btn-gold text-sm"
          >
            {uploading ? 'Uploading...' : '+ Upload Images'}
          </button>
        </div>
      </div>

      {/* Images Grid */}
      <div className="bg-[#121226] border border-[#d4a017]/20 p-6">
        {loading ? (
          <div className="text-center py-12 text-gray-500">Loading images...</div>
        ) : images.length === 0 ? (
          <div className="text-center py-12 text-gray-500">No images uploaded yet</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {images.map((img) => (
              <div key={img.filename} className="group relative aspect-square bg-[#0a0a1a] border border-[#d4a017]/10 overflow-hidden">
                <img
                  src={api.getImageUrl(img.filename)}
                  alt={img.filename}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                  <p className="text-white text-xs text-center px-2 truncate w-full">
                    {img.filename}
                  </p>
                  <p className="text-gray-400 text-xs">{formatSize(img.size)}</p>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(api.getImageUrl(img.filename))
                        alert('URL copied!')
                      }}
                      className="px-2 py-1 bg-[#d4a017]/20 text-[#d4a017] text-xs hover:bg-[#d4a017]/30"
                    >
                      Copy URL
                    </button>
                    <button
                      onClick={() => handleDelete(img.filename)}
                      className="px-2 py-1 bg-red-500/20 text-red-400 text-xs hover:bg-red-500/30"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default AdminImages
