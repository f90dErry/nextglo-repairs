import React from 'react'
import ipadVector from '../assets/images/ipadVector.png'
import iphoneVector from '../assets/images/iphoneVector.png'
import laptop from '../assets/images/laptop.png'
import { Link } from 'react-router-dom'

const ServiceOverview = () => {
  return (
    <div className=' text-gray-600 my-8 md:my-36 md:mx-20 flex justify-center px-4'>
      <section className='flex flex-col md:w-2/3 gap-14 items-center '>
        {/* iPhone Repairs */}
        <div>
          <h2 className='text-blue-800 md:text-3xl py-3 font-bold underline underline-offset-4 text-xl '>
            iPhone Repairs
          </h2>
          <div className='flex flex-col md:flex-row items-center md:text-xl md:justify-between gap-3'>
            <p className='md:w-3/5'>
              Get your iPhone repaired quickly and reliably by our expert
              technicians. From screen replacements to battery replacements to
              motherboard issues, we use high-quality parts for lasting results.
              Trust us to restore your device to perfect condition. <br />{' '}
              <br /> Our team ensures that your device functions optimally with
              minimal downtime. Whether it's a faulty charging port or a
              water-damaged iPhone, we've got you covered. We also offer free
              diagnostics to pinpoint the exact issue before repairs begin.
              Experience top-notch service with a fast turnaround time at an
              affordable cost.
            </p>
            <img src={iphoneVector} alt='iPhone' className='h-[25vh]' />
          </div>
        </div>

        {/* MacBook Repairs */}
        <div className=''>
          <h2 className='text-blue-800 text-xl md:text-3xl py-3 font-bold underline underline-offset-4'>
            MacBook Repairs
          </h2>
          <div className='flex flex-col md:flex-row-reverse items-center md:text-xl md:justify-between gap-3'>
            <p className='md:w-3/5'>
              Fast and professional repair services for all MacBook models,
              including MacBook Air, MacBook Pro, and MacBook Pro M1/M2. From
              screen replacements to battery fixes, we ensure high-quality
              results with quick turnaround times. Get your MacBook back to peak
              performance in no time
              <br /> <br />
              Our expert technicians handle everything from logic board repairs
              to keyboard replacements. We use genuine parts to guarantee
              durability and long-lasting performance. Whether your MacBook has
              water damage or overheating issues, we have a solution. Enjoy
              hassle-free service with transparent pricing and a warranty on
              repairs.
            </p>
            <img src={laptop} alt='iPhone' className='h-[25vh]' />
          </div>
        </div>

        {/* iPad Repairs */}
        <div>
          <h2 className='text-blue-800 text-xl md:text-3xl py-3 font-bold underline underline-offset-4'>
            iPad Repairs
          </h2>
          <div className='flex flex-col md:flex-row items-center md:text-xl md:justify-between gap-3'>
            <p className='md:w-3/5'>
              Reliable and fast repair services for all iPad models, including
              iPad Pro, iPad Air, iPad Mini, and standard iPads. From screen
              replacements to battery fixes, we use quality parts and expert
              care. Trust us for efficient solutions that restore your device to
              its best. <br /> <br />
              We also repair charging ports, speaker issues, and unresponsive
              touchscreens. Whether your iPad has suffered water damage or
              software glitches, our team can help. Our services come with a
              warranty, ensuring peace of mind after every repair. Experience
              seamless service with quick turnaround times and competitive
              pricing.
            </p>
            <img
              src={ipadVector}
              alt='iPhone'
              className='h-[20vh] md:h-[20vh] w-[60%] md:w-[30%] '
            />
          </div>
        </div>

        <Link to='/booking'>
          <button
            className='my-8 md:mb-0 text-blue-900 font-bold py-3 px-6 rounded-full
            md:hover:bg-red-700 md:hover:text-white border-solid md:hover:border-none border-blue-900 border-2 md:hover:scale-125 md:transform md:transition-all md:duration-300 md:shadow-lg md:hover:shadow-xl'
          >
            Book a Service
          </button>
        </Link>
      </section>
    </div>
  )
}

export default ServiceOverview
