import { useEffect, useState } from 'react'
import iPad from '../assets/images/iPad.jpg'
import iPhone from '../assets/images/iPhone.jpg'
import Macbook from '../assets/images/Macbook.jpg'
import { ReactTyped } from 'react-typed'
import { Link } from 'react-router-dom'

const Hero = () => {
  const [index, setIndex] = useState(0)
  const slides = [
    {
      url: iPad,
      title: 'iPad Repairs',
    },
    {
      url: iPhone,
      title: 'iPhone Repairs',
    },
    {
      url: Macbook,
      title: 'Macbook Repairs',
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      )
    }, 3000) // 3 seconds

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index) => {
    setIndex(index)
  }

  return (
    <div className='md:flex flex-row mt-6'>
      <div className='flex flex-col justify-center text-center items-center my-10 mx-5'>
        <header className='font-sans font-light text-2xl text-blue-800 md:text-4xl'>
          Quick and Reliable Repairs for Your <br className='' />
          <span className='font-bold '>
            <ReactTyped
              strings={[
                'Apple Devices !',
                'iPhones !',
                'Macbooks !',
                'iPads !',
              ]}
              typeSpeed={150}
              backSpeed={80}
              loop
            />
          </span>
        </header>
        <p className='mt-7 text-gray-600 text-lg'>
          We offer fast, reliable repairs for iPhones, iPads, and MacBooks,
          ensuring quality service and quick turnaround.
        </p>

        <Link to='/booking'>
          <button
            className='mt-8 bg-blue-900 text-white font-bold py-3 px-6 rounded-full 
        md:hover:bg-red-600 md:hover:scale-105 md:transform md:transition-all md:duration-300 md:shadow-lg md:hover:shadow-xl'
          >
            Book a Service
          </button>
        </Link>
      </div>

      <div className='w-full h-[250px] md:max-w-[1400px] md:h-[350px] md:w-[600px] m-auto relative group'>
        <div
          className='w-full h-full bg-center bg-cover duration-1000'
          style={{ backgroundImage: `url(${slides[index].url})` }}
        />
        {/* Dot Navigation */}
        <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
          {slides.map((_, slideIndex) => (
            <button
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`w-3 h-3 rounded-full ${
                index === slideIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Hero
