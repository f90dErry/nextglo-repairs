import addo from '../assets/images/addo.jpg'
import baweezy from '../assets/images/baweezy.jpg'
import sleepingKen from '../assets/images/sleepingKen.jpg'
import auntie5g from '../assets/images/auntie5g.jpg'
import $40m from '../assets/images/$40m.jpg'
import Staycation from '../assets/images/1yr.jpg'
import { useState } from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Addo Dee',
      image: addo,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sequi inventore architecto velit suscipit!',
    },
    {
      name: 'Baweezy',
      image: baweezy,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sequi inventore architecto velit suscipit!',
    },
    {
      name: 'Ken Ofori-Atta',
      image: sleepingKen,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sequi inventore architecto velit suscipit!',
    },
    {
      name: 'Auntie 5G',
      image: auntie5g,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sequi inventore architecto velit suscipit!',
    },
    {
      name: '$40M Theif',
      image: $40m,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sequi inventore architecto velit suscipit!',
    },
    {
      name: '1yr Staycation',
      image: Staycation,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sequi inventore architecto velit suscipit!',
    },
  ]

  const [visibleCards, setVisibleCards] = useState(
    window.innerWidth >= 768 ? testimonials.length : 2
  )
  const [isEpanded, setIsExpanded] = useState(window.innerWidth >= 768)

  const handleShowMore = () => {
    setVisibleCards(testimonials.length)
    setIsExpanded(true)
  }

  const handleShowLess = () => {
    setVisibleCards(2)
    setIsExpanded(false)
  }

  return (
    <div className='py-16 px-4 bg-gray-50'>
      <div className='max-w-6xl mx-auto'>
        <h2 className=' text-2xl md:text-3xl font-bold text-center mb-4'>
          What Our Client Say
        </h2>

        <div className='flex flex-col gap-3 md:grid md:gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {testimonials.slice(0, visibleCards).map((testimonial) => (
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

        <div className='my-6 text-center md:hidden'>
          {!isEpanded && visibleCards < testimonials.length && (
            <button onClick={handleShowMore} className='text-blue-500'>
              show more
            </button>
          )}
          {isEpanded && (
            <button
              onClick={handleShowLess}
              className='text-blue-500 px-4 py-2 '
            >
              show less
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Testimonials
