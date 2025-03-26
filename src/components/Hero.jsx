import Macbook from '../assets/images/Macbook.jpg'
import { ReactTyped } from 'react-typed'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='bg-black h-[600px] md:h-screen'>
      <div
        className='relative group text-center items-center bg-cover bg-center md:h-screen duration-1000'
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)), url(${Macbook})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className=' md:absolute md:bottom-1/4 md:left-1/2 md:transform md:-translate-x-1/2 md:text-center py-10 px-5 md:p-0'>
          <header
            className='font-sans font-bold
         text-2xl text-white md:text-7xl'
          >
            Quick and Reliable Repairs for Your <br />
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
    </div>
  )
}

export default Hero
