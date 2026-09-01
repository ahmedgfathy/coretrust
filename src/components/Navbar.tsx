import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import Logo from './Logo'

const socialLinks = [
  { name: 'Facebook', href: 'https://facebook.com', color: '#1877F2', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
  { name: 'Instagram', href: 'https://instagram.com', color: '#E4405F', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
  { name: 'LinkedIn', href: 'https://linkedin.com', color: '#0A66C2', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
  { name: 'WhatsApp', href: 'https://wa.me/', color: '#25D366', path: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

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

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = language
  }, [language])

  const links = [
    { name: t('Home', 'الرئيسية'), href: '/' },
    { name: t('About', 'من نحن'), href: '/#about' },
    { name: t('Services', 'خدماتنا'), href: '/#services' },
    { name: t('Projects', 'المشاريع'), href: '/projects' },
    { name: t('Contact', 'اتصل بنا'), href: '/#contact' },
  ]

  const isArabic = language === 'ar'

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'}`}>
        <div className="w-full px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
            <div className="flex-shrink-0">
              <Link to="/">
                <Logo />
              </Link>
            </div>
            
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {links.map((l) => (
                <Link key={l.name} to={l.href} className="text-dark-500 hover:text-brand-600 transition-colors duration-300 text-sm uppercase tracking-wider font-medium whitespace-nowrap">{l.name}</Link>
              ))}
              
              <div className="flex items-center gap-1 ml-2">
                {socialLinks.map((s) => (
                  <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full transition-all hover:scale-110 text-dark-400 hover:text-brand-600" title={s.name}>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={s.path}/></svg>
                  </a>
                ))}
              </div>
              
              <div className="flex items-center border border-brand-300 rounded overflow-hidden flex-shrink-0">
                <button onClick={() => setLanguage('en')} className={`px-3 py-1.5 text-xs font-medium transition-colors ${language === 'en' ? 'bg-brand-600 text-white' : 'text-dark-400 hover:text-brand-600'}`}>EN</button>
                <button onClick={() => setLanguage('ar')} className={`px-3 py-1.5 text-xs font-medium transition-colors ${language === 'ar' ? 'bg-brand-600 text-white' : 'text-dark-400 hover:text-brand-600'}`}>AR</button>
              </div>
              
              <Link to="/#contact" className="btn-gold text-sm whitespace-nowrap flex-shrink-0">{t('Get a Quote', 'احصل على عرض سعر')}</Link>
            </div>
            
            <div className="flex lg:hidden items-center gap-2 flex-shrink-0">
              <div className="flex items-center border border-brand-300 rounded overflow-hidden">
                <button onClick={() => setLanguage('en')} className={`px-2 py-1 text-[10px] font-medium transition-colors ${language === 'en' ? 'bg-brand-600 text-white' : 'text-dark-400'}`}>EN</button>
                <button onClick={() => setLanguage('ar')} className={`px-2 py-1 text-[10px] font-medium transition-colors ${language === 'ar' ? 'bg-brand-600 text-white' : 'text-dark-400'}`}>AR</button>
              </div>
              <button className="text-brand-600 p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {menuOpen
                    ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/30" onClick={() => setMenuOpen(false)}></div>
          <div className={`absolute top-0 h-full w-full bg-white transform transition-transform duration-300 ease-in-out ${isArabic ? 'left-0' : 'right-0'}`}>
            <div className={`flex p-4 ${isArabic ? 'justify-start' : 'justify-end'}`}>
              <button className="text-brand-600 p-2" onClick={() => setMenuOpen(false)}>
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className={`px-6 py-2 ${isArabic ? 'text-right' : 'text-left'}`}>
              {links.map((l) => (
                <Link key={l.name} to={l.href} className={`block py-4 text-dark-700 hover:text-brand-600 transition-colors duration-300 text-xl font-medium border-b border-brand-100 ${isArabic ? 'font-[Cairo]' : ''}`} onClick={() => setMenuOpen(false)}>
                  {l.name}
                </Link>
              ))}
              
              <div className="flex items-center gap-3 mt-8 pt-6 border-t border-brand-100">
                {socialLinks.map((s) => (
                  <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full border border-brand-200 hover:scale-110 transition-all text-dark-400 hover:text-brand-600" title={s.name}>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d={s.path}/></svg>
                  </a>
                ))}
              </div>
              
              <Link to="/#contact" className="block btn-gold text-center mt-8 py-4 text-lg" onClick={() => setMenuOpen(false)}>
                {t('Get a Quote', 'احصل على عرض سعر')}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
