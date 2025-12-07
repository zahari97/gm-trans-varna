import bg from '../assets/kamioni.jpg'
import montajImg from '../assets/images/montaj-demontaj-1.jpg'
import mesteneImg from '../assets/images/mestene-1.jpg'
import drugiImg from '../assets/images/drugi-1.jpg'

const Services = () => {
  const services = [
    {
      icon: (
        <svg className="w-12 h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: "Повдигане на товари",
      description: "Професионално повдигане на тежки товари с модерни кранове до 100 тона капацитет.",
      bgImage: bg
    },
    {
      icon: (
        <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      title: "Транспортиране",
      description: "Безопасно транспортиране на големи и тежки предмети в цяла България.",
      bgImage: mesteneImg
    },
    {
      icon: (
        <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Монтаж и демонтаж",
      description: "Специализирани услуги за монтаж и демонтаж на индустриално оборудване.",
      bgImage: montajImg
    },
    {
      icon: (
        <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "24/7 Спешни услуги",
      description: "Непрекъснато дежурство за спешни случаи и аварийни ситуации.",
      bgImage: drugiImg
    },
    {
      icon: (
        <svg className="w-12 h-12 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Застрахователни сертификати",
      description: "Пълно застраховане и всички необходими разрешителни документи.",
      bgImage: bg
    },
    {
      icon: (
        <svg className="w-12 h-12 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Бърза реакция",
      description: "Бързо реагиране на заявки с време за пристигане до 30 минути.",
      bgImage: mesteneImg
    }
  ]

  return (
        <section id="services" className="py-24 bg-gradient-to-b from-white via-gray-50 to-brand-steel/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Premium */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="h-1.5 w-24 bg-gradient-to-r from-brand-blue to-brand-blue-accent mx-auto mb-4"></div>
            <div className="text-sm font-black uppercase tracking-[0.3em] text-brand-blue mb-6">Премиум услуги</div>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-8 tracking-tight">
            <span className="block">МОЩ</span>
            <span className="block bg-gradient-to-r from-brand-blue via-brand-blue-accent to-brand-blue bg-clip-text text-transparent">
              И ПРЕЦИЗНОСТ
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-semibold">
            Индустриална сила, подкрепена от професионализъм и най-модерно оборудване
          </p>
        </div>

        {/* Services Grid - Premium Industrial */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 border-gray-200 hover:border-brand-blue-accent overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Premium gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/0 via-brand-blue/0 to-brand-blue-dark/0 group-hover:from-brand-blue/5 group-hover:via-brand-blue-accent/5 group-hover:to-brand-blue-dark/5 transition-all duration-500"></div>
              
              {/* Icon - Industrial Premium */}
              <div className="relative z-10 inline-flex items-center justify-center w-28 h-28 bg-gradient-to-br from-brand-blue via-brand-blue-accent to-brand-blue-dark text-white rounded-2xl mb-8 shadow-2xl group-hover:shadow-[0_0_30px_rgba(10,46,92,0.5)] group-hover:scale-110 transition-all duration-500">
                <div className="flex items-center justify-center w-full h-full">
                  {service.icon}
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-5 group-hover:text-brand-blue transition-colors duration-300 text-center uppercase tracking-tight">
                  {service.title}
                </h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-center font-medium">
                  {service.description}
                </p>
              </div>

              {/* Premium Hover Effect Line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue via-brand-blue-accent to-brand-blue-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-brand-blue-accent/0 to-transparent group-hover:from-brand-blue-accent/10 transition-all duration-500 rounded-bl-full"></div>
            </div>
          ))}
        </div>

        {/* CTA Section - Premium */}
        <div className="text-center mt-24">
          <div className="relative bg-gradient-to-br from-brand-blue-dark via-brand-blue to-brand-steel rounded-3xl p-12 sm:p-16 text-white shadow-2xl border-2 border-brand-blue-accent/30 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 tracking-tight uppercase">
                Готови за следващия проект?
              </h3>
              <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed font-semibold">
                Премиум услуги с професионален подход. Свържете се сега за индивидуална консултация.
              </p>
              <button 
                onClick={() => {
                  const element = document.getElementById('contacts')
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="group relative bg-white text-brand-blue-dark px-12 py-5 rounded-xl font-black text-lg uppercase tracking-wide hover:bg-brand-blue-accent hover:text-white transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] border-2 border-white/50"
              >
                <span className="relative z-10">Свържи се сега</span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-accent to-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
