import { useMemo, useState } from 'react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

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

  const galleryImages = useMemo(() => {
    let idCounter = 1
    return Object.entries(imageModules).map(([path, mod]) => {
      const src = mod.default || ''
      const title = humanize(path)
      return {
        id: idCounter++,
        src,
        alt: title,
        title,
        category: normalizeCategory(path)
      }
    })
  }, [])

  // Категоризация според името/пътя на файла
  const categories = ['Всички', 'Монтаж/Демонтаж', 'Транспорт', 'Други']
  const [activeCategory, setActiveCategory] = useState('Всички')

  const filteredImages = activeCategory === 'Всички'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory)

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
            Нашата <span className="text-brand-blue">галерия</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Разгледайте нашите успешни проекти и модерното краново оборудване
          </p>
        </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
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
