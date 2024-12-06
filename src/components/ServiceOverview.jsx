import React from 'react'
import ipadVector from '../assets/images/ipadVector.png'
import iphoneVector from '../assets/images/iphoneVector.png'
import laptop from '../assets/images/laptop.png'

const ServiceOverview = () => {
  const repairs = [
    {
      title: 'iPhone Repairs',
      note: `Get your iPhone repaired quickly and reliably by our expert
          technicians. From screen replacements to battery fixes, we use
          high-quality parts for lasting results. Trust us to restore your
          device to perfect condition.`,
      image: iphoneVector,
    },
    {
      title: 'Macbook repairs',
      note: `Fast and professional repair services for all MacBook models, including MacBook Air, MacBook Pro, and MacBook Pro M1/M2. From screen replacements to battery fixes, we ensure high-quality results with quick turnaround times. Get your MacBook back to peak performance in no time!`,
      image: laptop,
    },
    {
      title: 'iPad Repairs',
      note: `Fast and reliable repair services for all iPad models, including iPad Pro, iPad Air, iPad Mini, and standard iPads. From screen replacements to battery fixes, we use quality parts and expert care. Trust us for efficient solutions that restore your device to its best.`,
      image: ipadVector,
    },
  ]
  return (
    <div className='m-4 text-gray-600 md:flex md:flex-row gap-10 md:m-12'>
      {repairs.map((card) => (
        <section className='my-12 shadow-lg pb-3 rounded-xl'>
          <h3 className='pt-3 px-3 text-blue-800 font-bold'>{card.title}</h3>
          <div className='md:flex items-center md:flex-col  m-auto px-7 py-2'>
            <p>{card.note}</p>
            <div className='flex justify-between'>
              <button
                className='mt-8 bg-blue-900 text-white font-bold py-3 px-6 rounded-full 
        md:hover:bg-red-600 md:hover:scale-105 md:transform md:transition-all md:duration-300 md:shadow-lg md:hover:shadow-xl'
              >
                Book a Session
              </button>
              <img
                src={card.image}
                alt='vector'
                className='h-[80px] w-[90px] mx-3'
              />
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}

export default ServiceOverview
