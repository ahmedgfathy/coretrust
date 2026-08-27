import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => { document.body.style.overflow = 'unset' }
  }, [menuOpen])

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/#contact' },
  ]

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a1a]/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
            <Link to="/">
              <Logo />
            </Link>
            <div className="hidden lg:flex items-center space-x-8">
              {links.map((l) => (
                <Link key={l.name} to={l.href} className="text-gray-300 hover:text-[#d4a017] transition-colors duration-300 text-sm uppercase tracking-wider font-medium">{l.name}</Link>
              ))}
              <Link to="/#contact" className="btn-gold text-sm">Get a Quote</Link>
            </div>
            <button className="lg:hidden text-[#d4a017] p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="absolute inset-0 bg-black/60" onClick={() => setMenuOpen(false)}></div>
        <div className={`absolute top-0 right-0 h-full w-72 sm:w-80 bg-[#0a0a1a] border-l border-[#d4a017]/20 transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-end p-4">
            <button className="text-[#d4a017] p-2" onClick={() => setMenuOpen(false)}>
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="px-6 py-4 space-y-1">
            {links.map((l, i) => (
              <Link key={l.name} to={l.href} className="block py-3 text-gray-300 hover:text-[#d4a017] transition-colors duration-300 text-lg font-medium border-b border-[#d4a017]/10" onClick={() => setMenuOpen(false)} style={{ animationDelay: `${i * 50}ms` }}>{l.name}</Link>
            ))}
            <Link to="/#contact" className="block btn-gold text-center mt-6 py-3" onClick={() => setMenuOpen(false)}>Get a Quote</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
