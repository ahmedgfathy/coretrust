import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import Logo from './Logo'

const socialLinks = [
  { name: 'Facebook', href: 'https://facebook.com', color: '#1877F2', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
  { name: 'Instagram', href: 'https://instagram.com', color: '#E4405F', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
  { name: 'LinkedIn', href: 'https://linkedin.com', color: '#0A66C2', path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
  { name: 'YouTube', href: 'https://youtube.com', color: '#FF0000', path: 'M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
  { name: 'Snapchat', href: 'https://snapchat.com', color: '#FFFC00', path: 'M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12.922-.214.092-.04.19-.06.29-.06.326 0 .584.18.652.445.06.24-.013.536-.214.71-.15.12-.356.18-.557.18-.18 0-.36-.042-.532-.112-.136.258-.328.462-.554.596-.276.15-.576.222-.887.222-.356 0-.639-.072-.894-.198-.255-.126-.45-.294-.666-.462-.396-.312-.852-.594-1.368-.594-.036 0-.072.006-.108.012-.222.012-.432.066-.648.108v-.006c.162-.432.378-.84.666-1.212.432-.558.966-.996 1.602-1.296-.636-.3-1.17-.762-1.548-1.35-.378-.588-.6-1.29-.6-2.034 0-.324.054-.636.15-.93.198-.588.528-1.092.966-1.47.438-.378.942-.63 1.488-.738.156-.036.312-.054.468-.054.222 0 .438.036.642.09-.162-.474-.402-.876-.708-1.188-.408-.408-.924-.648-1.482-.648zM12.206 0c-.216 0-.432.018-.648.054C9.93.378 8.862 1.59 8.394 3.132c-.36.054-.702.168-1.008.336-.306.168-.57.39-.774.654-.204.264-.342.576-.396.912-.036.222-.054.444-.054.666 0 .456.09.888.252 1.284.216.528.558.972 1 1.308-.036.168-.054.336-.054.504 0 .288.054.564.15.816.162.432.414.792.726 1.068.468.408 1.02.612 1.596.612.108 0 .216-.006.324-.018.246.276.528.516.846.708.474.288 1.026.456 1.596.456.378 0 .738-.072 1.062-.216.324-.144.606-.354.828-.612.252-.288.438-.642.528-1.026.12-.048.234-.108.342-.174.306-.186.546-.45.702-.762.156-.312.222-.672.174-1.032a3.72 3.72 0 00-.174-.684c.24.138.45.312.624.516.396.45.654 1.008.726 1.602.036.312.03.624-.018.93-.096.588-.348 1.128-.726 1.548-.378.42-.852.714-1.368.852-.162.042-.33.066-.498.066-.36 0-.708-.09-1.008-.252-.3-.162-.552-.39-.732-.666-.132-.21-.24-.438-.318-.678-.06.144-.156.276-.282.384-.36.312-.81.51-1.296.576-.108.012-.216.018-.324.018z' },
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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a1a]/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        {/* Full width container */}
        <div className="w-full px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/">
                <Logo />
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {links.map((l) => (
                <Link key={l.name} to={l.href} className="text-gray-300 hover:text-[#d4a017] transition-colors duration-300 text-sm uppercase tracking-wider font-medium whitespace-nowrap">{l.name}</Link>
              ))}
              
              {/* Social Icons - Desktop */}
              <div className="flex items-center gap-1 ml-2">
                {socialLinks.map((s) => (
                  <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full transition-all hover:scale-110" style={{ color: s.color }} title={s.name}>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={s.path}/></svg>
                  </a>
                ))}
              </div>
              
              {/* Language Switcher */}
              <div className="flex items-center border border-[#d4a017]/30 rounded overflow-hidden flex-shrink-0">
                <button onClick={() => setLanguage('en')} className={`px-3 py-1.5 text-xs font-medium transition-colors ${language === 'en' ? 'bg-[#d4a017] text-black' : 'text-gray-400 hover:text-[#d4a017]'}`}>EN</button>
                <button onClick={() => setLanguage('ar')} className={`px-3 py-1.5 text-xs font-medium transition-colors ${language === 'ar' ? 'bg-[#d4a017] text-black' : 'text-gray-400 hover:text-[#d4a017]'}`}>AR</button>
              </div>
              
              <Link to="/#contact" className="btn-gold text-sm whitespace-nowrap flex-shrink-0">{t('Get a Quote', 'احصل على عرض سعر')}</Link>
            </div>
            
            {/* Mobile Right Side */}
            <div className="flex lg:hidden items-center gap-2 flex-shrink-0">
              <div className="flex items-center border border-[#d4a017]/30 rounded overflow-hidden">
                <button onClick={() => setLanguage('en')} className={`px-2 py-1 text-[10px] font-medium transition-colors ${language === 'en' ? 'bg-[#d4a017] text-black' : 'text-gray-400'}`}>EN</button>
                <button onClick={() => setLanguage('ar')} className={`px-2 py-1 text-[10px] font-medium transition-colors ${language === 'ar' ? 'bg-[#d4a017] text-black' : 'text-gray-400'}`}>AR</button>
              </div>
              <button className="text-[#d4a017] p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
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

      {/* Mobile Menu Overlay - Fullscreen */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setMenuOpen(false)}></div>
          <div className={`absolute top-0 h-full w-full bg-[#0a0a1a] transform transition-transform duration-300 ease-in-out ${isArabic ? 'left-0' : 'right-0'}`}>
            <div className={`flex p-4 ${isArabic ? 'justify-start' : 'justify-end'}`}>
              <button className="text-[#d4a017] p-2" onClick={() => setMenuOpen(false)}>
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className={`px-6 py-2 ${isArabic ? 'text-right' : 'text-left'}`}>
              {links.map((l) => (
                <Link key={l.name} to={l.href} className={`block py-4 text-gray-300 hover:text-[#d4a017] transition-colors duration-300 text-xl font-medium border-b border-[#d4a017]/10 ${isArabic ? 'font-[Cairo]' : ''}`} onClick={() => setMenuOpen(false)}>
                  {l.name}
                </Link>
              ))}
              
              {/* Social Icons - Mobile Fullscreen */}
              <div className="flex items-center gap-3 mt-8 pt-6 border-t border-[#d4a017]/20">
                {socialLinks.map((s) => (
                  <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center rounded-full border border-[#d4a017]/20 hover:scale-110 transition-all" style={{ color: s.color }} title={s.name}>
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
