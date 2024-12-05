import { useEffect, useState } from 'react'
import iPad from '../assets/images/iPad.jpg'
import iPhone from '../assets/images/iPhone.jpg'
import Macbook from '../assets/images/Macbook.jpg'
import { ReactTyped } from 'react-typed'

const Carousel = () => {
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
    <>
      <div>
        <header>
          Quick and Reliable Repairs for Your{' '}
          <span>
            <ReactTyped
              strings={[
                'Apple Devices !',
                'iPhones !',
                'Macbooks !',
                'iPads !',
              ]}
              typeSpeed={100}
              backSpeend={80}
              loop
            />
          </span>
        </header>
      </div>

      <div className='w-[350px] h-[250px] bg-red-500 md:max-w-[1400px] md:h-[580px] md:w-full m-auto relative group'>
        {/* <div
          className='w-full h-full bg-center bg-cover duration-500'
          style={{ backgroundImage: `url(${slides[index].url})` }}
        /> */}
        {/* Dot Navigation */}
        <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
          {slides.map((_, slideIndex) => (
            <button
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`w-3 h-3 rounded-full shadow-lg ${
                index === slideIndex ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Carousel
