import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate, Outlet } from 'react-router-dom'

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const checkAuth = async () => {
      const user = JSON.parse(localStorage.getItem('adminUser') || '{}')
      if (!user.token) {
        navigate('/admin')
      }
    }
    checkAuth()
  }, [navigate])

  const handleLogout = async () => {
    localStorage.removeItem('adminUser')
    navigate('/admin')
  }

  const menuItems = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { name: 'Projects', href: '/admin/projects', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
    { name: 'Content', href: '/admin/content', icon: 'M4 6h16M4 10h16M4 14h16M4 18h16' },
    { name: 'Images', href: '/admin/images', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
  ]

  return (
    <div className="min-h-screen bg-white flex">
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-dark-800 border-r border-dark-700 transform transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="flex flex-col h-full">
          <div className="p-6 border-b border-dark-700">
            <Link to="/admin/dashboard" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-600 text-white flex items-center justify-center text-lg font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
                C
              </div>
              <span className="text-brand-400 font-bold text-sm">Admin Panel</span>
            </Link>
          </div>

          <nav className="flex-1 p-4 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors ${
                  location.pathname === item.href
                    ? 'bg-brand-600/10 text-brand-400 border-l-2 border-brand-500'
                    : 'text-dark-300 hover:text-white hover:bg-white/5'
                }`}
                onClick={() => setSidebarOpen(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                </svg>
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="p-4 border-t border-dark-700">
            <Link
              to="/"
              className="flex items-center gap-2 text-dark-400 hover:text-white text-sm mb-3 transition-colors"
              target="_blank"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View Website
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-dark-400 hover:text-red-400 text-sm transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </button>
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-h-screen">
        <header className="bg-white border-b border-brand-100 px-4 py-4 flex items-center justify-between">
          <button
            className="lg:hidden text-brand-600 p-2"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 className="text-dark-800 font-semibold">
            {menuItems.find(m => location.pathname === m.href)?.name || 'Dashboard'}
          </h1>
          <div className="text-dark-400 text-sm">
            {JSON.parse(localStorage.getItem('adminUser') || '{}').username}
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto bg-brand-50/30">
          <Outlet />
        </main>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}

export default AdminLayout
