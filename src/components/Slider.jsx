import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'flowbite-react'
import Testimonials from './Testimonials'
import { testimonials } from '../data'

const Slider = () => {
  return (
    <div>
      <Swiper
        pagination={{ clickable: true, el: '.custom-pagination' }}
        modules={[Pagination, Navigation]}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className='flex justify-center'>
              <Testimonials item={testimonial} />
            </div>
          </SwiperSlide>
        ))}

        <div className='custom-pagination mt-6'></div>
      </Swiper>
    </div>
  )
}

export default Slider
