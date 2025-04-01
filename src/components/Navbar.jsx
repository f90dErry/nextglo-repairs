import redlogo from '../assets/images/redlogo.png'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { useState } from 'react'
import { navElements } from '../data'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toogleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className='shadow-md flex sticky top-0 bg-white justify-between items-center py-3 px-10 md:px-20 z-50'>
      <div className=''>
        <Link to={'/'}>
          <img
            src={redlogo}
            alt='next-glo-logo'
            className='h-[70px] w-[150px] object-cover'
          />
        </Link>
      </div>

      <div
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } absolute flex-col gap-6 top-20 w-[270px] h-[300px] p-3 items-center md:static md:flex md:flex-row  md:w-auto shadow-lg right-1 md:shadow-none md:h-0 md:gap-8 bg-white `}
      >
        {navElements.map((item) => (
          <Link
            key={item.link}
            to={item.link}
            onClick={() => setIsMenuOpen(false)}
            className='text-blue-900 md:hover:underline-offset-8 md:hover:underline md:hover:text-red-500 md:transition-colors md:duration-200 font-bold text-lg'
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
