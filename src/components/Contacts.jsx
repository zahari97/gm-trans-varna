const Contacts = () => {
  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Адрес",
      details: "Индустриална зона, Варна 9000",
      // link: "https://maps.google.com/?q=ул. Индустриална 15, Варна 9000"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Телефон",
      details: "359 886 010 737",
      link: "tel:+359886010737"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Телефон 2",
      details: "359 988 873 730",
      link: "tel:+359988873730"
    },
    
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Работно време",
      details: "24/7 - Спешни услуги",
      link: null
    }
  ]

  const workingHours = [
    { day: "Работно време", hours: "24/7 — Без почивен ден" }
  ]

  return (
    <section id="contacts" className="py-24 bg-gradient-to-b from-gray-50 via-white to-brand-steel/5 text-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Premium */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="h-1.5 w-24 bg-gradient-to-r from-brand-blue to-brand-blue-accent mx-auto mb-4"></div>
            <div className="text-sm font-black uppercase tracking-[0.3em] text-brand-blue mb-6">Свържи се</div>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-8 tracking-tight">
            <span className="block">Контакти</span>
            <span className="block bg-gradient-to-r from-brand-blue via-brand-blue-accent to-brand-blue bg-clip-text text-transparent">
              GM Transport Варна
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-semibold">
            Свържете се с нас за услуги с кран във Варна, транспорт на товари, вдигане на контейнери и камион под наем. Безплатна консултация и индивидуална оферта за всички кранови и транспортни услуги.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-gray-900">Контактна информация - Услуги с кран Варна</h3>
            
            <div className="space-y-6">
              {contactInfo.map((contact, index) => (
                <div key={index} className="group flex items-start space-x-5 p-6 rounded-2xl bg-white border-2 border-gray-200 hover:border-brand-blue-accent shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-blue-accent rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500">
                    {contact.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-black mb-2 text-gray-900 uppercase tracking-tight">{contact.title}</h4>
                    {contact.link ? (
                      <a 
                        href={contact.link}
                        className="text-brand-blue hover:text-brand-blue-accent transition-colors duration-300 text-lg font-bold"
                      >
                        {contact.details}
                      </a>
                    ) : (
                      <p className="text-gray-700 text-lg font-semibold">{contact.details}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Working Hours */}
            <div className="mt-12">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-2xl font-bold relative inline-flex items-center text-gray-900">
                  Работно време
                  <span className="absolute -right-8 inline-flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                </h4>
                <span className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-xl font-extrabold text-lg animate-pulse-scale shadow-lg">
                  24/7 — Без почивен ден
                </span>
              </div>
            </div>
          </div>

          {/* Map and Additional Info */}
          <div className="space-y-8">
            {/* Map Placeholder */}
            {/* <div className="bg-blue-900/30 rounded-md p-8 backdrop-blur-sm border border-blue-700/30">
              <h4 className="text-xl font-bold mb-4">Нашето местоположение</h4>
              <div className="bg-blue-700/50 rounded-md h-64 flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-12 h-12 mx-auto mb-3 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-sm opacity-80">Интерактивна карта</p>
                  <p className="text-xs opacity-60 mt-1">ул. Индустриална 15, Варна</p>
                </div>
              </div>
            </div> */}

            {/* Quick Contact - Premium */}
            <div className="relative bg-gradient-to-br from-brand-blue-dark via-brand-blue to-brand-steel rounded-2xl p-10 text-white shadow-2xl border-2 border-brand-blue-accent/30 overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '35px 35px' }}></div>
              </div>
              
              <div className="relative z-10">
                <h4 className="text-3xl sm:text-4xl font-black mb-4 uppercase tracking-tight">Спешен случай?</h4>
                <p className="mb-8 text-white/90 text-lg sm:text-xl font-semibold">
                  Обадете се сега за бърза и надеждна премиум помощ!
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="tel:+359886010737"
                    className="group relative bg-white text-brand-blue-dark px-10 py-5 rounded-xl font-black text-lg uppercase tracking-wide hover:bg-brand-blue-accent hover:text-white transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] text-center border-2 border-white/50"
                  >
                    <span className="relative z-10">Обади се сега</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-accent to-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  </a>
                  <a 
                    href="https://wa.me/359886010737"
                    className="bg-green-600 text-white px-10 py-5 rounded-xl font-black text-lg uppercase tracking-wide hover:bg-green-700 transform hover:scale-105 transition-all duration-300 shadow-2xl text-center border-2 border-green-500/50"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <h4 className="text-xl font-bold mb-4 text-gray-900">Обслужваме</h4>
              <div className="grid grid-cols-2 gap-3 text-base">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-brand-blue rounded-full"></div>
                  <span className="text-gray-700">Варна и окръга</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-brand-blue rounded-full"></div>
                  <span className="text-gray-700">Цяла България</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts
