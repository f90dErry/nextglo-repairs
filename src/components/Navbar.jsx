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
    <nav className='shadow-md flex justify-between items-center p-3 relative'>
      <div className=''>
        <img
          src={redlogo}
          alt='next-glo-logo'
          className='h-[70px] w-[150px] object-cover'
        />
      </div>

      {isMenuOpen ? (
        <div className='absolute flex flex-col gap-4 bg-blue-600 top-28 w-[400px] p-3 items-center'>
          {navElements.map((item) => (
            <Link key={item.link} to={item.link}>
              {item.linkName}
            </Link>
          ))}
        </div>
      ) : null}

      <button onClick={toogleMenu}>
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
