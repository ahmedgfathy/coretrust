import { useState, useEffect } from 'react'
import Logo from './Logo'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a1a]/80 backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28">
          <Logo />
          <div className="hidden md:flex items-center space-x-8">
            {links.map((l) => (
              <a key={l.name} href={l.href} className="text-gray-300 hover:text-[#d4a017] transition-colors duration-300 text-sm uppercase tracking-wider font-medium">{l.name}</a>
            ))}
            <a href="#contact" className="btn-gold text-sm">Get a Quote</a>
          </div>
          <button className="md:hidden text-[#d4a017]" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a1a]/95 backdrop-blur-md px-4 pb-4 space-y-2">
          {links.map((l) => (
            <a key={l.name} href={l.href} className="block px-3 py-2 text-gray-300 hover:text-[#d4a017]" onClick={() => setMenuOpen(false)}>{l.name}</a>
          ))}
          <a href="#contact" className="block btn-gold text-center mt-4" onClick={() => setMenuOpen(false)}>Get a Quote</a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
