import { testimonials } from '../data'

const Testimonials = () => {
  return (
    <div className='py-8 md:py-12 px-4 bg-blue-400'>
      <div className='max-w-6xl mx-auto'>
        <h2 className=' text-2xl md:text-3xl text-white font-bold text-center mb-5'>
          What Our Client Say
        </h2>

        <div className='flex flex-col gap-3 md:grid md:gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className='bg-white p-6 rounded-lg shadow-md'
            >
              <div className='flex items-center mb'>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className='w-12 h-12 rounded-full mr-4 object-cover'
                />
                <h3 className='font-semibold'>{testimonial.name}</h3>
              </div>

              <p className='text-gray-700'> {testimonial.text} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials
