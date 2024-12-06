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
    <div className='m-4 text-gray-600'>
      {repairs.map((card) => (
        <section className='my-12 bg-green-600 pb-3 rounded-lg'>
          <h3 className='pt-3 px-3 text-blue-800 font-bold'>{card.title}</h3>
          <div className='flex items-center md:flex-col bg-red-500 m-auto p-3'>
            <p>{card.note}</p>
            <img
              src={card.image}
              alt='vector'
              className='h-[80px] w-[100px] mx-3'
            />
          </div>
        </section>
      ))}
    </div>
  )
}

export default ServiceOverview
