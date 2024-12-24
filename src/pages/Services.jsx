import React from 'react'
import { Link } from 'react-router-dom'
import iPhone16 from '../assets/images/iPhone16.jpg'
import M4mac from '../assets/images/M4mac.jpg'
import iPadpro from '../assets/images/iPadpro.jpg'
import iwatch from '../assets/images/iwatch.jpg'

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
      image: iPadpro,
    },
    {
      id: 3,
      title: 'iPad Repair',
      test: '',
      image: M4mac,
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
      <header className='container mx-auto py-7 text-center'>
        <h1 className='text-3xl font-bold text-blue-800'>Services</h1>
        <p className='font-medium text-gray-500'>
          Our services are the best in the Accra.
        </p>
      </header>

      <section></section>
    </div>
  )
}

export default Services
