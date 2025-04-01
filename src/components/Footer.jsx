import { Link } from 'react-router-dom'
import { footerElements, socialIcons } from '../data'

const Footer = () => {
  const footerYear = new Date().getFullYear()
  return (
    <footer className='bg-blue-950 text-white bottom-0 w-full py-8 font-sans '>
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
              {socialIcons.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className='flex items-center gap-3 text-gray-400 md:hover:text-white text-sm'
                >
                  <span className='text-lg'>
                    <item.icon />
                  </span>
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
