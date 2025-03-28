import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination, Navigation } from 'swiper/modules'
import Testimonials from './Testimonials'
import { clients } from '../data'
import '../slider.css'

const Slider = () => {
  return (
    <div>
      <Swiper
        pagination={{ clickable: true, el: '.custom-pagination' }}
        modules={[Pagination, Navigation]}
        slidesPerView={1}
        spaceBetween={0}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2, spaceBetween: 2 },
          1024: { slidesPerView: 3, spaceBetween: 5 },
        }}
      >
        {clients.map((item, index) => (
          <SwiperSlide key={index} className='flex justify-center'>
            <Testimonials item={item} />
          </SwiperSlide>
        ))}

        <div className='custom-pagination mt-6'></div>
      </Swiper>
    </div>
  )
}

export default Slider
