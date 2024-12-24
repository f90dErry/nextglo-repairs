import { FaWhatsapp } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'
import { useState } from 'react'

const ContactUs = () => {
  const topSection = [
    { name: 'WhatsApp', icon: FaWhatsapp, tel: '020 560 0915' },
    {
      name: 'Email Us',
      icon: MdOutlineMail,
      email: 'nextglolab@gmail.com',
    },
  ]

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  return (
    <div className='font-sans '>
      <header className='text-center py-10 bg-blue-50'>
        <h1 className='text-3xl font-bold text-blue-800'>Contact Us</h1>
        <p className='mx-5 my-3 text-gray-500 font-medium'>
          We are available 24/7 to answer your questions. Feel free to reach out
          to us.
        </p>
      </header>

      <section className=''>
        <div>
          {topSection.map((item) => (
            <div>
              <p>{item.name}</p>
              <item.icon className='text-blue-800' />
              <p>{item.tel}</p>
              <p>{item.email}</p>
            </div>
          ))}
        </div>

        <form className='my-10'>
          <div className='flex flex-col gap-4 mx-5'>
            <input
              type='text'
              placeholder='Name'
              className='bg-blue-50 border-none rounded-md focus:border-red-800'
            />
            <input
              type='email'
              placeholder='Email'
              className='bg-blue-50 border-none rounded-md'
            />
            <input
              type='text'
              placeholder='Subject'
              className='bg-blue-50 border-none rounded-md'
            />
            <textarea
              placeholder='Message'
              className='bg-blue-50 border-none h-52 rounded-md'
            />
            <button
              type='submit'
              className='bg-blue-800 text-white p-3 rounded-lg font-bold w-[150px]'
            >
              Send Message
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default ContactUs
