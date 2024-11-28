import redlogo from '../assets/images/redlogo.png'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toogleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navElements = [
    { link: '/', linkName: 'Home' },
    { link: '/about-us', linkName: 'About Us' },
    { link: '/services', linkName: 'Services' },
    { link: '/booking', linkName: 'Booking' },
    { link: '/contact-us', linkName: 'Contact Us' },
  ]

  return (
    <nav className='shadow-md flex justify-between items-center p-3 relative px-10 md:pr-20'>
      <div className=''>
        <img
          src={redlogo}
          alt='next-glo-logo'
          className='h-[70px] w-[150px] object-cover'
        />
      </div>

      <div
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } absolute flex-col gap-6 top-24 w-[270px] h-[300px] p-3 items-center md:static md:flex md:flex-row  md:w-auto shadow-lg right-1 md:shadow-none md:h-0 md:gap-8 `}
      >
        {navElements.map((item) => (
          <Link
            key={item.link}
            to={item.link}
            className='text-blue-900 hover:underline-offset-8 hover:underline hover:text-red-500 transition-colors duration-200 font-bold text-lg'
          >
            {item.linkName}
          </Link>
        ))}
      </div>

      <button onClick={toogleMenu} className='md:hidden'>
        {isMenuOpen ? (
          <IoClose className='w-10 h-8 text-blue-900 ' />
        ) : (
          <FaBars className='w-10 h-8 text-blue-900' />
        )}
      </button>
    </nav>
  )
}

export default Navbar
