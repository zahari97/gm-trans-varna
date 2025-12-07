import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const MobileGalleryCarousel = ({ images, onImageClick }) => {
  return (
    <div className="block md:hidden w-full px-4 py-6">
      <Swiper
        modules={[Pagination]}
        pagination={{
          clickable: true,
        }}
        spaceBetween={16}
        slidesPerView={1.1}
        centeredSlides={true}
        className="w-full"
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <div 
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
              onClick={() => onImageClick(image)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default MobileGalleryCarousel

