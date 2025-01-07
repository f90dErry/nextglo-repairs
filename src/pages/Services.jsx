import React from 'react'
import { Link } from 'react-router-dom'
import iPhone16 from '../assets/images/iPhone16.jpg'
import M4mac from '../assets/images/M4mac.jpg'
import iPadpro from '../assets/images/iPadpro.jpg'
import iwatch from '../assets/images/iwatch.jpg'
import all from '../assets/images/all.png'

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'iPhone Repair',
      test: '',
      image: iPhone16,
    },
    {
      id: 2,
      title: 'Laptop Repair',
      test: '',
      image: M4mac,
    },
    {
      id: 3,
      title: 'iPad Repair',
      test: '',
      image: iPadpro,
    },
    {
      id: 4,
      title: 'Smart Watch Repair',
      test: '',
      image: iwatch,
    },
  ]

  return (
    <div className='bg-blue-50'>
      <header className='container mx-auto py-10 text-center'>
        <h1 className='text-3xl font-bold text-blue-800'>Services</h1>
        <p className='font-medium text-gray-500'>
          Our services are the best in the Accra.
        </p>
        <img
          src={all}
          alt='all.png'
          className='flex items-center  mx-auto md:mx-auto'
        />
      </header>

      <section>
        <div className='grid grid-cols-1 gap-4 px-4 mx-6 md:mx-10 md:grid-cols-2 lg:grid-cols-4 my-5'>
          {services.map((service) => (
            <div
              key={service.id}
              className='rounded-lg shadow-lg bg-white my-5'
            >
              <img
                src={service.image}
                alt={service.title}
                className='w-full h-48 rounded-t-lg'
              />
              <div className='p-4'>
                <h2 className='text-lg font-medium text-blue-800'>
                  {service.title}
                </h2>
                <p className='text-gray-500'>{service.test}</p>
                <Link
                  to='/booking'
                  className='block w-full px-4 py-2 mt-4 font-medium text-center text-white bg-blue-800 rounded-lg'
                >
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className='mx-auto px-4 py-10 text-center font-medium text-gray-500 md:w-3/4 '>
          <p>
            At NextGlo Lab, we understand how essential your devices are to your
            daily life, which is why we’re committed to providing fast,
            reliable, and high-quality repair services for iPhones, iPads, and
            MacBooks. With certified technicians, genuine parts, and a
            customer-first approach, we ensure your gadgets are restored to
            their best condition in no time, you can trust us to handle it with
            precision and care. Ready to get started? Book a service today and
            experience hassle-free repairs you can count on!
          </p>
        </div>
      </section>
    </div>
  )
}

export default Services
