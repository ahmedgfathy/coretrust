import { useState, useEffect } from 'react'
import { api } from './api'

const AdminContent = () => {
  const [content, setContent] = useState<any>({})
  const [activeTab, setActiveTab] = useState('hero')
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    loadContent()
  }, [])

  const loadContent = async () => {
    try {
      const data = await api.getContent()
      setContent(data)
    } catch (err) {
      console.error('Failed to load content:', err)
    }
  }

  const handleSave = async () => {
    setSaving(true)
    setMessage('')
    const token = localStorage.getItem('adminToken') || ''
    try {
      await api.updateContent(activeTab, content[activeTab], token)
      setMessage('Saved successfully!')
      setTimeout(() => setMessage(''), 3000)
    } catch (err) {
      setMessage('Failed to save')
    } finally {
      setSaving(false)
    }
  }

  const updateField = (field: string, value: string) => {
    setContent({
      ...content,
      [activeTab]: {
        ...content[activeTab],
        [field]: value
      }
    })
  }

  const tabs = [
    { id: 'hero', name: 'Hero Section' },
    { id: 'about', name: 'About Section' },
    { id: 'services', name: 'Services/Divisions Header' },
    { id: 'divisions', name: 'Divisions Content' },
    { id: 'stats', name: 'Statistics' },
    { id: 'cta', name: 'Call to Action' },
    { id: 'contact', name: 'Contact Info' },
    { id: 'footer', name: 'Footer' },
  ]

  const divisionTabs = [
    { id: 'real-estate', name: 'Real Estate' },
    { id: 'contracting', name: 'Contracting' },
    { id: 'interior-design', name: 'Interior Design' },
    { id: 'maintenance', name: 'Maintenance' },
    { id: 'castings', name: 'Castings' },
    { id: 'aluminum', name: 'Aluminum' },
  ]

  const [activeDivision, setActiveDivision] = useState('real-estate')

  const renderFields = () => {
    if (activeTab === 'divisions') {
      return renderDivisionFields()
    }
    const section = content[activeTab] || {}
    return Object.entries(section).map(([key, value]) => {
      if (typeof value !== 'string') return null
      const label = key
        .replace(/([A-Z])/g, ' $1')
        .replace(/^./, str => str.toUpperCase())
      
      const isLong = key.includes('description') || key.includes('Description') || key.includes('mission') || key.includes('vision')

      return (
        <div key={key} className="mb-4">
          <label className="block text-gray-400 text-sm mb-2">{label}</label>
          {isLong ? (
            <textarea
              value={value}
              onChange={(e) => updateField(key, e.target.value)}
              className="w-full bg-[#0a0a1a] border border-[#d4a017]/30 text-white px-4 py-2 text-sm focus:outline-none focus:border-[#d4a017] h-24 resize-none"
              dir={key.includes('Ar') || key.includes('ar') ? 'rtl' : 'ltr'}
            />
          ) : (
            <input
              type="text"
              value={value}
              onChange={(e) => updateField(key, e.target.value)}
              className="w-full bg-[#0a0a1a] border border-[#d4a017]/30 text-white px-4 py-2 text-sm focus:outline-none focus:border-[#d4a017]"
              dir={key.includes('Ar') || key.includes('ar') ? 'rtl' : 'ltr'}
            />
          )}
        </div>
      )
    })
  }

  const renderDivisionFields = () => {
    const divisions = content.divisions || {}
    const division = divisions[activeDivision] || {}
    
    return (
      <div>
        <div className="flex gap-2 mb-6 flex-wrap">
          {divisionTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveDivision(tab.id)}
              className={`px-3 py-1.5 text-xs transition-colors ${
                activeDivision === tab.id
                  ? 'bg-[#d4a017]/20 text-[#d4a017] border border-[#d4a017]/40'
                  : 'bg-[#0a0a1a] text-gray-400 border border-[#d4a017]/20 hover:text-white'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
        
        {Object.entries(division).map(([key, value]) => {
          if (typeof value !== 'string') return null
          const label = key
            .replace(/([A-Z])/g, ' $1')
            .replace(/^./, str => str.toUpperCase())
          
          const isLong = key.includes('description') || key.includes('Description')

          return (
            <div key={key} className="mb-4">
              <label className="block text-gray-400 text-sm mb-2">{label}</label>
              {isLong ? (
                <textarea
                  value={value}
                  onChange={(e) => {
                    const newDivisions = { ...divisions }
                    newDivisions[activeDivision] = { ...division, [key]: e.target.value }
                    setContent({ ...content, divisions: newDivisions })
                  }}
                  className="w-full bg-[#0a0a1a] border border-[#d4a017]/30 text-white px-4 py-2 text-sm focus:outline-none focus:border-[#d4a017] h-24 resize-none"
                  dir={key.includes('Ar') || key.includes('ar') ? 'rtl' : 'ltr'}
                />
              ) : (
                <input
                  type="text"
                  value={value}
                  onChange={(e) => {
                    const newDivisions = { ...divisions }
                    newDivisions[activeDivision] = { ...division, [key]: e.target.value }
                    setContent({ ...content, divisions: newDivisions })
                  }}
                  className="w-full bg-[#0a0a1a] border border-[#d4a017]/30 text-white px-4 py-2 text-sm focus:outline-none focus:border-[#d4a017]"
                  dir={key.includes('Ar') || key.includes('ar') ? 'rtl' : 'ltr'}
                />
              )}
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Content Management</h1>
        <button onClick={handleSave} disabled={saving} className="btn-gold text-sm">
          {saving ? 'Saving...' : 'Save Changes'}
        </button>
      </div>

      {message && (
        <div className={`px-4 py-3 text-sm ${message.includes('success') ? 'bg-green-500/10 border border-green-500/30 text-green-400' : 'bg-red-500/10 border border-red-500/30 text-red-400'}`}>
          {message}
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Tabs */}
        <div className="lg:w-48 flex-shrink-0">
          <div className="bg-[#121226] border border-[#d4a017]/20 p-2 flex lg:flex-col gap-2 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-sm whitespace-nowrap transition-colors ${
                  activeTab === tab.id
                    ? 'bg-[#d4a017]/10 text-[#d4a017]'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 bg-[#121226] border border-[#d4a017]/20 p-6">
          <h2 className="text-white font-semibold mb-6">
            {activeTab === 'divisions' ? 'Divisions Content' : tabs.find(t => t.id === activeTab)?.name}
          </h2>
          {renderFields()}
        </div>
      </div>
    </div>
  )
}

export default AdminContent
