import { useEffect, useState } from 'react'
import iPad from '../assets/images/iPad.jpg'
import iPhone from '../assets/images/iPhone.jpg'
import Macbook from '../assets/images/Macbook.jpg'

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
    }, 4000) // 4 seconds

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index) => {
    setIndex(index)
  }

  return (
    <>
      <div className='max-w-[1400px] h-[580px] w-full m-auto relative group'>
        <div
          className='w-full h-full bg-center bg-cover duration-500'
          style={{ backgroundImage: `url(${slides[index].url})` }}
        />
      </div>
    </>
  )
}

export default Carousel
