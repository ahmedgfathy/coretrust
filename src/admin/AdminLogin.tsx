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
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-brand-600 text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
            C
          </div>
          <h1 className="text-2xl font-bold text-dark-800">Admin Panel</h1>
          <p className="text-dark-400 text-sm mt-2">CoreTrust</p>
        </div>

        <div className="bg-brand-50 border border-brand-100 p-8">
          <h2 className="text-xl font-bold text-dark-800 mb-6 text-center">Sign In</h2>
          
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 mb-6 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-dark-500 text-sm mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-white border border-brand-200 text-dark-800 px-4 py-3 focus:outline-none focus:border-brand-500 transition-colors"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-dark-500 text-sm mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white border border-brand-200 text-dark-800 px-4 py-3 focus:outline-none focus:border-brand-500 transition-colors"
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

        <p className="text-center text-dark-400 text-xs mt-6">
          © 2024 CoreTrust. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default AdminLogin
