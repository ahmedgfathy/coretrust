import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from './api'

const AdminLogin = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const result = await api.login(username, password)
      localStorage.setItem('adminUser', JSON.stringify(result.user))
      navigate('/admin/dashboard')
    } catch (err) {
      setError('Invalid username or password')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a1a] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <img
            src="https://mygroup-eg.com/wp-content/uploads/2026/02/لقطة_شاشة_2026-02-15_160729-removebg-preview.png"
            alt="Logo"
            className="h-16 mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
          <p className="text-gray-500 text-sm mt-2">Architect Mohamed Yehia Group</p>
        </div>

        <div className="bg-[#121226] border border-[#d4a017]/20 p-8">
          <h2 className="text-xl font-bold text-white mb-6 text-center">Sign In</h2>
          
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 mb-6 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-400 text-sm mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-[#0a0a1a] border border-[#d4a017]/30 text-white px-4 py-3 focus:outline-none focus:border-[#d4a017] transition-colors"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-400 text-sm mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#0a0a1a] border border-[#d4a017]/30 text-white px-4 py-3 focus:outline-none focus:border-[#d4a017] transition-colors"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full btn-gold py-3 text-center disabled:opacity-50"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </div>

        <p className="text-center text-gray-600 text-xs mt-6">
          © 2024 Mohamed Yahia Group. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default AdminLogin
