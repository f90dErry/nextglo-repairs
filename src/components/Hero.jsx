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
    <div className=''>
      <div
        className='relative text-center items-center bg-cover bg-center md:h-screen'
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)), url('src/assets/images/Macbook.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className='md:absolute md:bottom-1/4'>
          <header
            className=' font-sans font-bold
         text-2xl text-white md:text-4xl'
          >
            Quick and Reliable Repairs for Your <br className='' />
            <span>
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
          <p className='mt-7 text-white text-lg'>
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
      </div>

      {/* <div className='w-full h-[250px] md:w-screen md:h-screen m-auto relative group'>
        <div
          className='w-full h-full bg-center bg-cover duration-1000 object-cover'
          style={{ backgroundImage: `url(${slides[index].url})` }}
        />
        {/* Dot Navigation 
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
      </div> */}
    </div>
  )
}

export default Hero
