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
    <div className='bg-blue-5'>
      <div className='h-full'>
        <header className='container mx-auto py-7 text-center'>
          <h1 className='text-3xl font-bold text-blue-800'>Services</h1>
          <p className='font-medium text-gray-500'>
            Our services are the best in the Accra.
          </p>
          <img
            src={all}
            alt='all.png'
            className='flex items-center mx-auto md:mx-auto'
          />
        </header>

        <section className='my-10'>
          <div className='grid grid-cols-1 gap-4 px-4 mx-6 md:mx-10 md:grid-cols-2 lg:grid-cols-4'>
            {services.map((service) => (
              <div key={service.id} className='rounded-lg shadow-lg my-5'>
                <img
                  src={service.image}
                  alt={service.title}
                  className='object-cover w-full h-48 rounded-t-lg'
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

          <div></div>
        </section>
      </div>
    </div>
  )
}

export default Services
