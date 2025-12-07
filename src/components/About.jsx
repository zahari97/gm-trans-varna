const About = () => {
  const features = [
    "Модерно краново оборудване с висок капацитет",
    "Професионален и опитен екип",
    "Пълно застраховане на всички операции",
    "24/7 наличност за спешни случаи",
    "Конкурентни цени и прозрачно ценообразуване",
    "Сертификати и разрешителни документи"
  ]

  const stats = [
    { number: "15+", label: "Години опит" },
    { number: "500+", label: "Успешни проекта" },
    { number: "100+", label: "Доволни клиенти" },
    { number: "24/7", label: "Наличност" }
  ]

  return (
        <section id="about" className="py-24 bg-gradient-to-b from-brand-steel/5 via-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Column - Content */}
          <div>
            {/* Section Header - Premium */}
            <div className="mb-10">
              <div className="inline-block mb-6">
                <div className="h-1.5 w-20 bg-gradient-to-r from-brand-blue to-brand-blue-accent mb-4"></div>
                <div className="text-sm font-black uppercase tracking-[0.3em] text-brand-blue mb-6">Премиум бранд</div>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 tracking-tight">
                <span className="block">ПРОФЕСИОНАЛИЗЪМ</span>
                <span className="block bg-gradient-to-r from-brand-blue via-brand-blue-accent to-brand-blue bg-clip-text text-transparent">
                  С ДОВЕРИЕ
                </span>
              </h2>
            </div>

            {/* Main Content - Premium */}
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg sm:text-xl font-semibold">
                <strong className="text-brand-blue-dark font-black">GM TRANS GROUP</strong> е премиум транспортен бранд, който комбинира индустриална мощ с безупречна прецизност. 
                С над 15 години опит, ние гарантираме професионални услуги, които вдъхват доверие.
              </p>
              
              <p className="text-base sm:text-lg">
                Нашият екип от експерти работи с най-модерното оборудване и следва най-високите стандарти за безопасност и качество. 
                Всяка операция е изпълнена с внимание към детайла и професионален подход.
              </p>
              
              <p className="text-base sm:text-lg">
                Премиум качество, подкрепено от надеждност и конкурентни цени. Безопасността и удовлетвореността на клиентите са в основата на всичко, което правим.
              </p>
            </div>

            {/* Features List - Premium */}
            <div className="mt-10">
              <h3 className="text-2xl font-black text-gray-900 mb-6 uppercase tracking-tight">Предимства:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 p-3 rounded-lg hover:bg-brand-blue/5 transition-colors duration-300">
                    <div className="flex-shrink-0 mt-1.5 w-3 h-3 bg-gradient-to-br from-brand-blue to-brand-blue-accent rounded-full shadow-lg"></div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Image */}
          <div className="space-y-8">
            {/* Stats Grid - Premium */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="group relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 text-center border-2 border-gray-200 hover:border-brand-blue-accent shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
                >
                  {/* Premium gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/0 to-brand-blue-dark/0 group-hover:from-brand-blue/5 group-hover:to-brand-blue-dark/5 transition-all duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="text-4xl sm:text-5xl font-black text-brand-blue mb-3 group-hover:text-brand-blue-accent transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-gray-700 font-bold uppercase tracking-wide text-sm">
                      {stat.label}
                    </div>
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue via-brand-blue-accent to-brand-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              ))}
            </div>

            {/* Image Placeholder - Premium */}
            <div className="relative">
              <div className="group relative bg-gradient-to-br from-brand-blue-dark via-brand-blue to-brand-steel rounded-2xl p-10 h-80 flex items-center justify-center text-white shadow-2xl hover:shadow-[0_0_40px_rgba(10,46,92,0.6)] transition-all duration-500 transform hover:-translate-y-2 border-2 border-brand-blue-accent/30 overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
                </div>
                
                <div className="relative z-10 text-center">
                  <svg className="w-24 h-24 mx-auto mb-6 text-brand-blue-accent drop-shadow-lg group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                  <p className="text-3xl font-black mb-2 uppercase tracking-tight">Премиум оборудване</p>
                  <p className="text-lg font-semibold text-white/90">Индустриална мощ и прецизност</p>
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-accent/0 to-transparent group-hover:from-brand-blue-accent/20 transition-all duration-500"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement - Premium */}
        <div className="mt-24 text-center">
          <div className="max-w-5xl mx-auto">
            <div className="inline-block mb-8">
              <div className="h-1.5 w-32 bg-gradient-to-r from-brand-blue to-brand-blue-accent mx-auto mb-4"></div>
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-8 tracking-tight uppercase">
              Нашата мисия
            </h3>
            <div className="relative bg-gradient-to-br from-brand-blue/10 via-white to-brand-steel/5 rounded-2xl p-10 sm:p-12 border-2 border-brand-blue/20 shadow-xl">
              <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed font-semibold italic">
                "Да бъдем <strong className="text-brand-blue-dark not-italic">най-надеждният</strong> партньор за транспортен услуги, като предоставяме премиум качество, 
                безопасност и професионализъм във всяка операция. Стремим се да надхвърляме очакванията 
                на нашите клиенти с индустриална мощ и прецизност."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
