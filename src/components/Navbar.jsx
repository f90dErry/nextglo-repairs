import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
  const navElements = [
    { link: '/', linkName: 'Home' },
    { link: '/about-us', linkName: 'About Us' },
    { link: '/services', linkName: 'Services' },
    { link: '/booking', linkName: 'Booking' },
    { link: '/contact-us', linkName: 'Contact Us' },
  ]

  return (
    <nav className='bg-red-500 flex justify-between'>
      <div className=''>
        <img
          src={logo}
          alt='next-glo-logo'
          width={100}
          height={100}
          className=''
        />
      </div>

      <div className='space-x-4 flex justify-end'>
        {navElements.map((item) => (
          <Link key={item.link} to={item.link}>
            {item.linkName}
          </Link>
        ))}
      </div>

      <FaBars />
    </nav>
  )
}

export default Navbar
