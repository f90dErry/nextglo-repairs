import addo from '../assets/images/addo.jpg'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Addo Dee',
      image: addo,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sequi inventore architecto velit suscipit!',
    },
  ]
  return (
    <div className='py-16 px-4 bg-gray-50'>
      <div className='max-w-6xl mx-auto'>
        <h2 className=' text-2xl md:text-3xl font-bold text-center'>
          What Our Client Say
        </h2>

        <div className='md:grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
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
              </div>

              <div>
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
