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
      <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl border-l border-gray-200">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Меню</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-md transition-colors duration-200"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <nav className="p-6">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    scrollToSection(item.id)
                    onClose()
                  }}
                  className="block w-full text-left px-4 py-3 text-lg font-medium text-gray-800 hover:text-blue-700 hover:bg-gray-100 rounded-md transition-colors duration-200"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          
          {/* Contact Info */}
          <div className="mt-8 p-4 bg-gray-50 rounded-md border border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-2">Бърз контакт</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>📞 359 886 010 730</p>
              <p>📍Индустриална зона, Варна 9000</p>
            </div>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default MobileMenu
