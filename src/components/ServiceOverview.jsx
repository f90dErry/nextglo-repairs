import React from 'react'
import ipadVector from '../assets/images/ipadVector.png'
import iphoneVector from '../assets/images/iphoneVector.png'
import laptop from '../assets/images/laptop.png'
import { Link } from 'react-router-dom'

const ServiceOverview = () => {
  const repairs = [
    {
      title: 'iPhone Repairs',
      note: `Get your iPhone repaired quickly and reliably by our expert
          technicians. From screen replacements to battery replacements to motherboard issues, we use high-quality parts for lasting results. Trust us to restore your
          device to perfect condition.`,
      image: iphoneVector,
    },
    {
      title: 'Laptop repairs',
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
        <section
          className='py-10 rounded-xl shadow-lg md:h-[500px] w-full md:w-1/3 flex flex-col items-center'
          key={card.title}
        >
          <h3 className=' px-3 text-blue-800 font-bold underline underline-offset-4'>
            {card.title}
          </h3>
          <p className='px-7 py-5 md:mb-8 w-full  md:h-[150px] text-center '>
            {card.note}
          </p>
          <img
            src={card.image}
            alt='vector'
            className='h-[100px]  object-cover '
          />

          <Link to='/booking'>
            <button
              className='mt-8 text-blue-900 font-bold py-3 px-6 rounded-full 
            md:hover:bg-red-600 md:hover:text-white border-solid md:hover:border-none border-blue-900 border-2 md:hover:scale-105 md:transform md:transition-all md:duration-300 md:shadow-lg md:hover:shadow-xl'
            >
              Book a Session
            </button>
          </Link>
        </section>
      ))}
    </div>
  )
}

export default ServiceOverview
