import bg from '../assets/kamioni.jpg'

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background image */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        aria-hidden="true"
      ></div>

      {/* Dark overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-blue-dark/90 via-brand-blue/80 to-brand-steel/70" aria-hidden="true"></div>

      {/* Dynamic blue overlay with power */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/70 via-brand-blue-accent/60 to-brand-blue-dark/80" aria-hidden="true"></div>

      {/* Industrial texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(5,26,51,0.3)_100%)]" aria-hidden="true"></div>

      {/* Subtle blur for premium feel */}
      <div className="absolute inset-0 backdrop-blur-[2px]" aria-hidden="true"></div>

      {/* Dynamic Power Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-brand-blue-accent/20 rounded-full blur-2xl animate-power-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-brand-blue-light/15 rounded-full blur-3xl animate-power-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-brand-blue-accent/10 rounded-full blur-xl animate-power-pulse" style={{ animationDelay: '0.5s' }}></div>
      
      {/* Industrial lines for depth */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <div className="max-w-5xl mx-auto">
          {/* Main Heading - Premium Power */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tight">
            <span className="block mb-1 drop-shadow-2xl animate-fade-in-up">ПРЕМИУМ</span>
            <span className="block mb-1 bg-gradient-to-r from-white via-brand-blue-light to-white bg-clip-text text-transparent drop-shadow-2xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              ТРАНСПОРТ
            </span>
            <span className="block text-brand-blue-accent drop-shadow-xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              С МОЩ
            </span>
          </h1>

          {/* Subtitle - Premium Message */}
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white/95 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <span className="block mb-1">Прецизност. Професионализъм. Движение.</span>
            <span className="block text-brand-blue-light font-bold text-base sm:text-lg md:text-xl">Индустриална сила, която вдъхва доверие.</span>
          </p>

          {/* CTA Buttons - Premium Power */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <button 
              onClick={() => {
                const element = document.getElementById('services')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group relative bg-brand-blue text-white px-8 sm:px-10 py-4 rounded-lg font-black text-base sm:text-lg uppercase tracking-wide hover:bg-brand-blue-dark transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[0_0_30px_rgba(10,46,92,0.8)] border-2 border-brand-blue-accent/50 overflow-hidden"
            >
              <span className="relative z-10">Нашите услуги</span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-accent to-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button 
              onClick={() => {
                const element = document.getElementById('contacts')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="group relative bg-white text-brand-blue-dark px-8 sm:px-10 py-4 rounded-lg font-black text-base sm:text-lg uppercase tracking-wide hover:bg-brand-blue-light hover:text-white transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] border-2 border-white/50"
            >
              <span className="relative z-10">Обади се сега</span>
            </button>
          </div>

          {/* Stats - Premium Display */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="text-center p-4 sm:p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2 drop-shadow-lg">15+</div>
              <div className="text-brand-blue-light font-bold text-sm sm:text-base uppercase tracking-wide">Години опит</div>
            </div>
            <div className="text-center p-4 sm:p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2 drop-shadow-lg">500+</div>
              <div className="text-brand-blue-light font-bold text-sm sm:text-base uppercase tracking-wide">Успешни проекта</div>
            </div>
            <div className="text-center p-4 sm:p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-2 drop-shadow-lg">24/7</div>
              <div className="text-brand-blue-light font-bold text-sm sm:text-base uppercase tracking-wide">Доставка</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Premium */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-8 h-12 border-2 border-brand-blue-accent/60 rounded-full flex justify-center items-start pt-2 backdrop-blur-sm bg-white/5">
          <div className="w-1.5 h-4 bg-brand-blue-accent rounded-full animate-pulse"></div>
        </div>
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 text-white/70 text-xs font-semibold uppercase tracking-widest">
          Прокрути
        </div>
      </div>
    </section>
  )
}

export default Hero
