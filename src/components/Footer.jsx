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
    <footer className='bg-blue-950 text-white bottom-0 fixed w-full py-8 font-sans'>
      <div className='container mx-auto px-8'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-8'>
          {/* Navigation Section */}
          <div className=''>
            <h3 className='text-white mb-6 font-semibold text-xl'>
              Navigations
            </h3>
            <div className='flex flex-col gap-4'>
              {footerElements.map((item) => (
                <Link
                  key={item.link}
                  to={item.link}
                  className='text-gray-400 md:hover:text-white text-sm'
                >
                  {item.linkName}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Icons Section */}
          <div className=''>
            <h3 className='text-white mb-6 font-semibold text-xl'>Follow Us</h3>
            <div className='flex flex-col gap-4'>
              {socialIcons.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className='flex items-center gap-3 text-gray-400 md:hover:text-white text-sm'
                >
                  <span className='text-lg'>{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className='text-white mb-6 font-semibold text-xl'>
              Contact us
            </h3>
            <div className='flex flex-col gap-4 text-gray-400 text-sm'>
              <span>+233 (0) 20 560 0915</span>
              <span>+233 (0) 50 106 6174</span>
              <span>+233 (0) 24 176 6121</span>
            </div>
          </div>

          {/* Location Section */}
          <div className=''>
            <h3 className='text-white mb-6 font-semibold text-xl'>Locate Us</h3>
            <div className='flex flex-col gap-4 text-gray-400 text-sm'>
              <span>New Rd, Madina</span>
              <span>Brigadier General Ran, Agbamasu Avenue, Accra</span>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className='text-center text-gray-400 border-t border-gray-800 pt-4 text-sm'>
          <p>Copyright &copy; {footerYear} All Rights Reserved </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
