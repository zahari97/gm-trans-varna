import { useMemo, useState } from 'react'
import MobileGalleryCarousel from './MobileGalleryCarousel'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [visibleCount, setVisibleCount] = useState(12)

  // Автоматично зареждане на всички изображения от src/assets/images
  // Поддържани формати: jpg, jpeg, png, webp
  const imageModules = import.meta.glob('../assets/images/**/*.{jpg,jpeg,png,webp}', { eager: true })

  const humanize = (filename) => {
    const base = filename.split('/').pop() || filename
    const name = base.replace(/\.[^.]+$/, '') // remove extension
      .replace(/[-_]+/g, ' ')
      .trim()
    return name.charAt(0).toUpperCase() + name.slice(1)
  }

  const normalizeCategory = (src) => {
    const lower = (src || '').toLowerCase()
    if (lower.includes('montaj') || lower.includes('demontaj') || lower.includes('montaj-demontaj')) return 'Монтаж/Демонтаж'
    if (lower.includes('mestene') || lower.includes('transport')) return 'Транспорт'
    return 'Други'
  }

  const getSEOAltText = (path, category) => {
    const lower = path.toLowerCase()
    if (lower.includes('montaj') || lower.includes('demontaj')) {
      return `Монтаж и демонтаж с кран във Варна - GM Transport Варна`
    }
    if (lower.includes('mestene') || lower.includes('transport')) {
      return `Транспорт на товари с камион във Варна - услуги с кран Варна`
    }
    return `Кранови услуги във Варна - автокран под наем GM Transport`
  }

  const galleryImages = useMemo(() => {
    let idCounter = 1
    return Object.entries(imageModules).map(([path, mod]) => {
      const src = mod.default || ''
      const title = humanize(path)
      const category = normalizeCategory(path)
      return {
        id: idCounter++,
        src,
        alt: getSEOAltText(path, category),
        title,
        category
      }
    })
  }, [])

  // Категоризация според името/пътя на файла
  const categories = ['Всички', 'Монтаж/Демонтаж', 'Транспорт', 'Други']
  const [activeCategory, setActiveCategory] = useState('Всички')

  const filteredImages = activeCategory === 'Всички'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory)

  // Reset visible count when category changes
  const handleCategoryChange = (category) => {
    setActiveCategory(category)
    setVisibleCount(12)
  }

  const visibleImages = filteredImages.slice(0, visibleCount)
  const hasMore = filteredImages.length > visibleCount

  const loadMore = () => {
    setVisibleCount(prev => prev + 12)
  }

  const openModal = (image) => {
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id)
    const nextIndex = (currentIndex + 1) % filteredImages.length
    setSelectedImage(filteredImages[nextIndex])
  }

  const prevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id)
    const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1
    setSelectedImage(filteredImages[prevIndex])
  }

  return (
        <section id="gallery" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Галерия - <span className="text-brand-blue">Услуги с кран Варна</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Разгледайте нашите успешни проекти с кран във Варна - автокран под наем, транспорт на товари, вдигане на контейнери и монтажни работи. GM Transport Варна - професионални кранови услуги.
          </p>
        </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    activeCategory === category
                      ? 'bg-brand-blue text-white shadow-lg animate-glow'
                      : 'bg-white text-brand-blue border-2 border-brand-blue/30 hover:bg-brand-blue hover:text-white hover:shadow-lg'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

        {/* Mobile Swiper Carousel */}
        <MobileGalleryCarousel 
          images={visibleImages} 
          onImageClick={openModal}
        />

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visibleImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl border border-brand-blue/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-fade-in-up"
              onClick={() => openModal(image)}
            >
              {/* Real image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300"></div>
              </div>

            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="text-center mt-12">
            <button
              onClick={loadMore}
              className="group relative bg-brand-blue text-white px-10 py-4 rounded-xl font-black text-lg uppercase tracking-wide hover:bg-brand-blue-dark transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-[0_0_30px_rgba(10,46,92,0.8)] border-2 border-brand-blue-accent/50"
            >
              <span className="relative z-10">Покажи още ({filteredImages.length - visibleCount} остават)</span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-accent to-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </button>
          </div>
        )}

        {/* Image Count Info */}
        <div className="text-center mt-8 text-gray-600 font-semibold">
          Показване на {visibleImages.length} от {filteredImages.length} снимки
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <div className="relative max-w-4xl max-h-[90vh] mx-4">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-300"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-300"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-300"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Modal Content */}
              <div className="bg-white rounded-md overflow-hidden border border-gray-200">
                {/* Real image */}
                <div className="bg-black">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Gallery
