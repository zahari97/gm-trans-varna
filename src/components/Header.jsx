import { useState, useEffect } from 'react'
import MobileMenu from './MobileMenu'
import logo from '../assets/logo1GM.png'

const Header = ({ activeSection, scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'home', label: 'Начало' },
    { id: 'services', label: 'Услуги' },
    { id: 'about', label: 'За нас' },
    { id: 'gallery', label: 'Галерия' },
    { id: 'contacts', label: 'Контакти' }
  ]

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-blue-dark/95 backdrop-blur-xl shadow-2xl border-b border-brand-blue-accent/30' : 'bg-brand-blue-dark/80 backdrop-blur-xl border-b border-brand-blue-accent/20'}`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center h-full py-2">
              <button 
                onClick={() => scrollToSection('home')}
                className="transition-opacity duration-200 hover:opacity-80 bg-transparent border-0 p-0 m-0 flex items-center h-full"
              >
                <img 
                  src={logo} 
                  alt="GM TRANS GROUP Logo" 
                  className="h-[144px] w-[144px] sm:h-[160px] sm:w-[160px] lg:h-[184px] lg:w-[184px] object-contain block"
                />
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                className={`px-5 py-3 text-sm font-bold uppercase tracking-wide rounded-lg border-2 transition-all duration-300 transform hover:scale-105 ${
                    activeSection === item.id
                      ? 'bg-brand-blue-accent text-white shadow-xl border-brand-blue-accent animate-glow'
                      : 'bg-white/10 text-white border-white/20 hover:bg-brand-blue-accent hover:text-white hover:shadow-xl hover:border-brand-blue-accent backdrop-blur-sm'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 rounded-md transition-all duration-200 bg-brand-blue border-2 border-white hover:bg-brand-blue-dark hover:scale-105"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        scrollToSection={scrollToSection}
      />
    </>
  )
}

export default Header
