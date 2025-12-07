import { useState } from 'react'

const MobileMenu = ({ isOpen, onClose, scrollToSection }) => {
  const navItems = [
    { id: 'home', label: 'Начало' },
    { id: 'services', label: 'Услуги' },
    { id: 'about', label: 'За нас' },
    { id: 'gallery', label: 'Галерия' },
    { id: 'contacts', label: 'Контакти' }
  ]

  if (!isOpen) return null

  return (
    <div className="md:hidden fixed inset-0 z-50">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/30 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Menu */}
      <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl border-l-2 border-gray-300 z-50">
        <div className="flex items-center justify-between p-6 border-b-2 border-brand-blue/30 bg-brand-blue">
          <h2 className="text-2xl font-black text-white uppercase tracking-wide">Меню</h2>
          <button
            onClick={onClose}
            className="p-2 bg-brand-blue-dark hover:bg-brand-blue-accent rounded-md transition-colors duration-200"
          >
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <nav className="p-6 bg-white">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    scrollToSection(item.id)
                    onClose()
                  }}
                  className="block w-full text-left px-5 py-4 text-lg font-bold text-white bg-brand-blue hover:bg-brand-blue-dark rounded-lg transition-all duration-200 border-2 border-brand-blue hover:border-brand-blue-dark shadow-md hover:shadow-lg"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          
          {/* Contact Info - Modern */}
          <div className="mt-8">
            <h3 className="font-black text-gray-900 mb-4 text-lg uppercase tracking-wide">Бърз контакт</h3>
            
            {/* Phone Button 1 - Modern */}
            <a 
              href="tel:+359886010737"
              className="flex items-center justify-between p-4 mb-3 bg-gradient-to-r from-brand-blue to-brand-blue-accent rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-white/80 font-medium uppercase tracking-wide">Обади се</div>
                  <div className="text-lg font-black text-white">359 886 010 737</div>
                </div>
              </div>
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>

            {/* Phone Button 2 - Modern */}
            <a 
              href="tel:+359988873730"
              className="flex items-center justify-between p-4 mb-3 bg-gradient-to-r from-brand-blue-accent to-brand-blue rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-white/80 font-medium uppercase tracking-wide">Обади се</div>
                  <div className="text-lg font-black text-white">359 988 873 730</div>
                </div>
              </div>
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>

            {/* Location */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
              <div className="w-10 h-10 bg-brand-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-1">Адрес</div>
                <div className="text-sm font-semibold text-gray-800">Индустриална зона, Варна 9000</div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default MobileMenu
