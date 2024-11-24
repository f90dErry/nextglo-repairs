import { Link } from 'react-router-dom'
import { BsTwitterX } from 'react-icons/bs'
import { SiWhatsapp } from 'react-icons/si'
import { FaFacebookF } from 'react-icons/fa6'
import { FiInstagram } from 'react-icons/fi'

const footerElements = [
  { link: '/', linkName: 'Home' },
  { link: '/about-us', linkName: 'About Us' },
  { link: '/services', linkName: 'Services' },
  { link: '/booking', linkName: 'Booking' },
  { link: '/contact-us', linkName: 'Contact Us' },
]

const socialIcons = [
  {
    path: 'https://www.instagram.com/nextglostores/',
    name: 'Instagram',
    icon: <FiInstagram />,
  },
  { path: 'https://x.com/nextglo', name: 'X (Twitter)', icon: <BsTwitterX /> },
  {
    path: 'https://web.facebook.com/nextglo/?_rdc=1&_rdr',
    name: 'Facebook',
    icon: <FaFacebookF />,
  },
  {
    path: 'https://www.instagram.com/nextglostores/',
    name: 'Whatsapp',
    icon: <SiWhatsapp />,
  },
]

const Footer = () => {
  const footerYear = new Date().getFullYear()
  return (
    <footer className='bg-blue-950 text-white bottom-0 fixed w-full py-4 font-sans shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] '>
      <div className=''>
        <p>Follow Us</p>
        {socialIcons.map((item) => (
          <Link
            to={item.path}
            className='flex items-center gap-2 text-gray-400'
          >
            {item.icon} {item.name}
          </Link>
        ))}
      </div>

      <div className='flex flex-col gap-3 text-gray-400 text-sm ml-5'>
        {footerElements.map((item) => (
          <Link to={item.link}>{item.linkName}</Link>
        ))}
      </div>

      <div className='container mx-auto text-center mt-8 '>
        <p>Copyright &copy; {footerYear} All Rights Reserved </p>
      </div>
    </footer>
  )
}

export default Footer
