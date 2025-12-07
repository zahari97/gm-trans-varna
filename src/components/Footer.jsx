const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: "Повдигане на товари", href: "#services" },
      { name: "Транспортиране", href: "#services" },
      { name: "Монтаж и демонтаж", href: "#services" },
      { name: "Спешни услуги", href: "#services" }
    ],
    company: [
      { name: "За нас", href: "#about" },
      { name: "Галерия", href: "#gallery" },
      { name: "Контакти", href: "#contacts" },
      { name: "Кариери", href: "#" }
    ],
    legal: [
      { name: "Политика за поверителност", href: "#" },
      { name: "Условия за ползване", href: "#" },
      { name: "Политика за бисквитки", href: "#" },
      { name: "GDPR", href: "#" }
    ]
  }

  const socialLinks = [
    {
      name: "Facebook",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: "Instagram",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.928-.875-1.418-2.026-1.418-3.323s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244z"/>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    }
  ]

  return (
        <footer className="bg-gradient-to-br from-brand-blue-dark via-brand-blue to-brand-steel text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-3xl font-black text-brand-blue-accent mb-4 uppercase tracking-tight">
              GM TRANS GROUP LTD
            </h3>
            <h4 className="text-white/90 mb-6 leading-relaxed font-bold text-lg">
              Премиум транспортен бранд
            </h4>
            <p className="text-white/80 mb-6 leading-relaxed text-base">
              GM TRANS GROUP LTD е българска компания, основана през 2010 година. Ние предлагаме премиум кранови услуги във Варна с над 15 години опит. 
              Индустриална мощ, прецизност и професионализъм.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-white/80">
              <p>📞 <a href="tel:+359886010737" className="hover:text-white underline">359 886 010 737</a></p>
              <p>📞 <a href="tel:+359988873730" className="hover:text-white underline">359 988 873 730</a></p>
              <p>📍Индустриална зона, Варна 9000</p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-12 h-12 bg-brand-blue/30 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-brand-blue-accent border border-brand-blue-accent/30 hover:border-brand-blue-accent transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-black mb-4 text-brand-blue-accent uppercase tracking-wide">Услуги</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-black mb-4 text-brand-blue-accent uppercase tracking-wide">Компания</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-black mb-4 text-brand-blue-accent uppercase tracking-wide">Правна информация</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gradient-to-r from-brand-blue-dark/80 to-brand-steel/80 backdrop-blur-sm border-t border-brand-blue-accent/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-white/80">
              © {currentYear} Kamion Kran Varna. Всички права запазени.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-white/80">
              <span>Изработено с ❤️ в България</span>
              <div className="flex items-center space-x-2">
                <span>🇧🇬</span>
                <span>Varna, Bulgaria</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
